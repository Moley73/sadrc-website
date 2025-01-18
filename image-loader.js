export default function imageLoader({ src, width, quality }) {
  const baseUrl = process.env.NODE_ENV === 'production' ? '/sadrc-website' : ''
  return `${baseUrl}${src}`
}
