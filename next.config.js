/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  experimental: {
    typedRoutes: true
  },
  basePath: '/sadrc-website',
  assetPrefix: '/sadrc-website'
}

module.exports = nextConfig
