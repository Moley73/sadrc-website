export default function imageLoader({ src, width, quality }) {
  const isProduction = process.env.NODE_ENV === 'production'
  const basePath = isProduction ? '/sadrc-website' : ''
  
  // Remove any leading slashes from src
  const cleanSrc = src.replace(/^\/+/, '')
  
  // In production, prepend the base path
  const fullPath = isProduction ? `${basePath}/${cleanSrc}` : `/${cleanSrc}`
  
  // Add width and quality parameters if provided
  const params = []
  if (width) params.push(`w=${width}`)
  if (quality) params.push(`q=${quality}`)
  
  const queryString = params.length > 0 ? `?${params.join('&')}` : ''
  
  return `${fullPath}${queryString}`
}
