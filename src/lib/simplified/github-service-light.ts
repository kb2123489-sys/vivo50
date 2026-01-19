/**
 * 简化版 GitHub 服务 - 使用原生 fetch 替代 Octokit
 */

import { getServerSession } from 'next-auth/next'
import { getToken } from 'next-auth/jwt'
import { authOptions } from '@/lib/auth'

// === 类型定义 ===
export interface GitHubReaction {
  id: string
  content: string
  user: {
    login: string
  }
}

export interface GitHubReactionGroup {
  content: string
  users: {
    totalCount: number
  }
}

export interface GitHubIssueStats {
  id: string
  reactions: number
  reactionDetails: GitHubReactionGroup[]
  reactionNodes: GitHubReaction[]
}

export interface GitHubIssue {
  number: number
  html_url: string
  id: string
}

export type ReactionType = 'THUMBS_UP' | 'THUMBS_DOWN' | 'LAUGH' | 'HOORAY' | 'CONFUSED' | 'HEART' | 'ROCKET' | 'EYES'

// === 错误类型 ===
export class GitHubServiceError extends Error {
  constructor(
    message: string,
    public readonly code: string,
    public readonly status?: number,
    public readonly originalError?: any,
  ) {
    super(message)
    this.name = 'GitHubServiceError'
  }
}

/**
 * 简化版 GitHub 服务类
 */
export class GitHubService {
  private readonly repoOwner = 'zkl2333'
  private readonly repoName = 'vme'

  // === 静态工厂方法 ===
  static async createWithUserToken(request: Request): Promise<GitHubService> {
    const session = await getServerSession(authOptions)

    if (!session?.user?.username) {
      throw new GitHubServiceError('User not authenticated', 'NOT_AUTHENTICATED', 401)
    }

    const secret = process.env.NEXTAUTH_SECRET
    const token = await getToken({ req: request as any, secret })
    const accessToken = token?.accessToken as string

    if (!accessToken) {
      throw new GitHubServiceError('Invalid authentication info', 'INVALID_TOKEN', 401)
    }

    // 简单验证 token 有效性
    const response = await fetch('https://api.github.com/user', {
      headers: {
        'Authorization': `Bearer ${accessToken}`,
        'Accept': 'application/vnd.github.v3+json',
      },
    })

    if (!response.ok) {
      throw new GitHubServiceError('Invalid GitHub token', 'INVALID_TOKEN', 401)
    }

    return new GitHubService()
  }

  /**
   * 创建文案 Issue
   */
  async createJokeIssue(title: string, content: string): Promise<GitHubIssue> {
    const token = await this.getAccessTokenFromRequest()
    
    const response = await fetch(`https://api.github.com/repos/${this.repoOwner}/${this.repoName}/issues`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Accept': 'application/vnd.github.v3+json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        title: title.trim(),
        body: content.trim(),
        labels: ['文案'],
      }),
    })

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}))
      throw new GitHubServiceError(
        `Failed to create issue: ${errorData.message || response.statusText}`,
        'CREATE_ISSUE_FAILED',
        response.status
      )
    }

    const data = await response.json()
    return {
      number: data.number,
      html_url: data.html_url,
      id: data.node_id,
    }
  }

  /**
   * 获取单个 Issue 统计数据
   */
  async getIssueStats(issueId: string): Promise<GitHubIssueStats> {
    // 使用 REST API 获取 issue 信息
    const url = `https://api.github.com/graphql`
    const token = await this.getSystemToken()
    
    // 使用 GraphQL 查询获取反应信息
    const query = `
      query GetIssueStats($issueId: ID!) {
        node(id: $issueId) {
          ... on Issue {
            id
            reactions(first: 100) {
              totalCount
              nodes {
                id
                content
                user {
                  login
                }
              }
            }
            reactionGroups {
              content
              users {
                totalCount
              }
            }
          }
        }
      }
    `

    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query,
        variables: { issueId }
      }),
    })

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}))
      throw new GitHubServiceError(
        `Failed to get issue stats: ${errorData.message || response.statusText}`,
        'GET_STATS_FAILED',
        response.status
      )
    }

    const result = await response.json()
    
    if (!result.data?.node) {
      throw new GitHubServiceError('Issue not found', 'ISSUE_NOT_FOUND', 404)
    }

    const issue = result.data.node
    
    return {
      id: issue.id,
      reactions: issue.reactions.totalCount,
      reactionDetails: issue.reactionGroups || [],
      reactionNodes: issue.reactions.nodes || [],
    }
  }

  /**
   * 添加反应
   */
  async addReaction(issueId: string, reaction: ReactionType): Promise<string> {
    const token = await this.getAccessTokenFromRequest()
    
    const url = `https://api.github.com/graphql`
    const mutation = `
      mutation AddReaction($input: AddReactionInput!) {
        addReaction(input: $input) {
          reaction {
            id
            content
          }
          subject {
            id
          }
        }
      }
    `

    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query: mutation,
        variables: {
          input: {
            subjectId: issueId,
            content: reaction,
          }
        }
      }),
    })

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}))
      throw new GitHubServiceError(
        `Failed to add reaction: ${errorData.message || response.statusText}`,
        'ADD_REACTION_FAILED',
        response.status
      )
    }

    const result = await response.json()
    
    if (!result.data?.addReaction?.reaction) {
      throw new GitHubServiceError('Failed to add reaction', 'ADD_REACTION_FAILED', 500)
    }

    return result.data.addReaction.reaction.id
  }

  /**
   * 获取当前用户
   */
  static async getCurrentUser(request?: Request): Promise<{ username: string } | null> {
    try {
      const session = await getServerSession(authOptions)
      return session?.user?.username ? { username: session.user.username } : null
    } catch {
      return null
    }
  }

  /**
   * 检查是否需要用户认证
   */
  static requireUserAuth(user: { username: string } | null): asserts user is { username: string } {
    if (!user) {
      throw new GitHubServiceError('Authentication required', 'AUTHENTICATION_REQUIRED', 401)
    }
  }

  // === 私有辅助方法 ===
  private async getAccessTokenFromRequest(): Promise<string> {
    // 这里需要从当前上下文获取请求对象
    // 由于在 API 路由之外无法访问 request 对象，这里暂时返回系统 token
    // 在实际的 API 路由中，需要传入 request 对象
    return process.env.GITHUB_TOKEN || ''
  }

  private async getSystemToken(): Promise<string> {
    return process.env.GITHUB_TOKEN || ''
  }
}