/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',             // 静态导出模式，生成纯静态 HTML
  // distDir: 'dist',           // 可选：把产物放到 dist 目录，方便平台拷贝
  pageExtensions: ['js', 'jsx', 'ts', 'tsx'],
  // 禁用某些不必要的功能来减小包大小
  swcMinify: true,
  compress: true,
  poweredByHeader: false,
  trailingSlash: true,          // 静态导出需要尾部斜杠
  images: {
    unoptimized: true,          // 静态导出不支持图片优化
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
