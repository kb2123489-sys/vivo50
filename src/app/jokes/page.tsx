import { Suspense } from 'react'
import JokesList from '@/components/jokes/List'
import { getSummary } from '@/lib/server-utils'

// 生成静态分页参数
export async function generateStaticParams() {
  const summary = await getSummary()
  const totalPages = Math.ceil(summary.totalItems / 20) // 每页20条
  
  // 生成所有分页的参数（但这里是默认第1页）
  return []
}

export default async function JokesPage() {
  // 默认显示第1页
  const page = 1

  return (
    <div className="container mx-auto px-4 py-8">
      {/* 页面标题 */}
      <div className="mb-12 text-center md:mb-16">
        <h1 className="mb-6 text-5xl font-black italic tracking-tighter text-black md:text-7xl">
          文案<span className="text-kfc-red underline decoration-4 underline-offset-4">总仓库</span>
        </h1>
        <div className="inline-block rotate-1 border-2 border-black bg-black px-6 py-2 shadow-neo-sm">
          <p className="font-bold uppercase text-white md:text-lg">
            ARCHIVE: 历年疯四文案大赏
          </p>
        </div>
      </div>

      {/* 段子列表 */}
      <Suspense
        fallback={
        <div className="flex h-64 items-center justify-center border-4 border-black bg-white p-8 shadow-neo">
          <div className="flex flex-col items-center gap-4 text-black">
            <i className="fa fa-spinner fa-spin text-4xl"></i>
            <span className="text-xl font-black uppercase">Loading Archives...</span>
          </div>
        </div>
        }
      >
        <JokesList currentPage={page} />
      </Suspense>

      {/* 返回首页 */}
      <div className="mt-16 text-center">
        <a
          href="/"
          className="inline-flex items-center gap-2 border-2 border-black bg-white px-8 py-3 font-black uppercase text-black shadow-neo transition-all hover:bg-black hover:text-white hover:shadow-none"
        >
          <i className="fa fa-home"></i>
          Back to Home
        </a>
      </div>
    </div>
  )
}
