/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: process.env.NODE_ENV === 'production' ? '/sadrc-website' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/sadrc-website/' : '',
  trailingSlash: true,
  reactStrictMode: true,
  distDir: 'dist',
  experimental: {
    images: {
      unoptimized: true,
    },
  },
}

module.exports = nextConfig
