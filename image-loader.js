export default function imageLoader({ src }) {
  const basePath = process.env.NODE_ENV === 'production' ? '/sadrc-website' : ''
  const cleanSrc = src.startsWith('/') ? src.slice(1) : src
  return `${basePath}/${cleanSrc}`
}
