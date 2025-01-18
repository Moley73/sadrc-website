/** @type {import('next').NextConfig} */
const isProduction = process.env.NODE_ENV === 'production'
const basePath = isProduction ? '/sadrc-website' : ''

const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
    loader: 'custom',
    loaderFile: './image-loader.js',
    path: basePath,
  },
  basePath: basePath,
  assetPrefix: basePath,
}

module.exports = nextConfig
