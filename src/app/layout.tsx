import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Suspense } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Skegness and District Running Club',
  description: 'Join our friendly community of runners across Lincolnshire',
}

function LoadingSpinner() {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-sadrc-orange"></div>
    </div>
  );
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
        <Suspense fallback={<LoadingSpinner />}>
          <Navbar />
          {children}
          <Footer />
        </Suspense>
      </body>
    </html>
  )
}
