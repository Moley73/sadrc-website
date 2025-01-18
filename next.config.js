/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: '/sadrc-website',
  assetPrefix: '/sadrc-website',
}

module.exports = nextConfig
