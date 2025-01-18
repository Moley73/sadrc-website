import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Footer from './components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Skegness and District Running Club',
  description: 'Join our friendly community of runners across Lincolnshire',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-sadrc-black text-white`}>
        <div id="fb-root"></div>
        {children}
        <Footer />
      </body>
    </html>
  )
}
