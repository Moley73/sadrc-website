export default function imageLoader({ src, width, quality }) {
  const baseUrl = process.env.NODE_ENV === 'production' ? '/sadrc-website' : ''
  // Remove the leading slash to prevent double slashes
  const cleanSrc = src.startsWith('/') ? src.slice(1) : src
  return `${baseUrl}/${cleanSrc}`
}
