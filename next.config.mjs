/** @type {import('next').NextConfig} */
const nextConfig = {
  // output: 'export',          // 注释掉静态导出，以便API路由正常工作
  // distDir: 'dist',           // 可选：把产物放到 dist 目录，方便平台拷贝
  pageExtensions: ['js', 'jsx', 'ts', 'tsx'],
  // 禁用某些不必要的功能来减小包大小
  swcMinify: true,
  compress: true,
  poweredByHeader: false,
  experimental: {
    serverComponentsExternalPackages: [
      // 限制外部包以减少打包体积
      '@octokit/rest',
      '@octokit/core',
      '@octokit/oauth-app',
    ],
  },
  webpack: (config, { isServer }) => {
    // 移除 splitChunks 配置，使用 Next.js 默认配置以获得更好优化
    if (isServer) {
      // 服务器端优化
      config.optimization.minimize = false; // 服务器端不需要压缩
      config.optimization.usedExports = false;
      config.optimization.sideEffects = false;
    }
      
    return config;
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'picsum.photos',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'avatars.githubusercontent.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
}

export default nextConfig
