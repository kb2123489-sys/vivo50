/** @type {import('next').NextConfig} */
const nextConfig = {
  // output: 'export',          // 注释掉静态导出，以便API路由正常工作
  distDir: 'dist',           // 可选：把产物放到 dist 目录，方便平台拷贝
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
    // 进一步优化代码分割以减小包大小
    config.optimization.splitChunks = {
      cacheGroups: {
        default: false,
        vendors: false,
        // 按功能拆分包
        framework: {
          name: 'framework',
          chunks: 'all',
          test: /[\\/]node_modules[\\/](next|react|react-dom|scheduler|prop-types)[\\/]/,
          priority: 40,
          enforce: true,
        },
        lib: {
          name: 'lib',
          test(module) {
            return module.size() > 160000 && /node_modules[/\\]/.test(module.identifier());
          },
          priority: 30,
          minChunks: 1,
          enforce: true,
        },
        commons: {
          name: 'commons',
          minChunks: 2,
          priority: 20,
          reuseExistingChunk: true,
          enforce: true,
        },
        defaultVendors: {
          name: 'vendors',
          test: /[\\/]node_modules[\\/]/,
          priority: 10,
          reuseExistingChunk: true,
          enforce: true,
        },
      },
    };
    

    
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
