/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',          // 关键：开启静态导出
  distDir: 'dist',           // 可选：把产物放到 dist 目录，方便平台拷贝
  pageExtensions: ['js', 'jsx', 'ts', 'tsx'],
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
