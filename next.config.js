/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
    loader: 'custom',
    loaderFile: './image-loader.js',
    path: '/sadrc-website',
  },
  basePath: process.env.NODE_ENV === 'production' ? '/sadrc-website' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/sadrc-website' : '',
}

module.exports = nextConfig
