import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Suspense } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import LoadingState from './components/LoadingState'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Skegness and District Running Club',
  description: 'Join our friendly running community in Lincolnshire. Established in 2012, we offer group runs in Skegness, Spilsby, Horncastle, and Boston. Free membership with optional England Athletics affiliation.',
  keywords: 'running club, Skegness, Lincolnshire, Spilsby, Horncastle, Boston, athletics, running group, England Athletics',
  authors: [{ name: 'Skegness and District Running Club' }],
  openGraph: {
    title: 'Skegness and District Running Club',
    description: 'Join our friendly running community in Lincolnshire. Group runs in Skegness, Spilsby, Horncastle, and Boston.',
    url: 'https://skegnessrunningclub.co.uk',
    siteName: 'Skegness and District Running Club',
    locale: 'en_GB',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Skegness and District Running Club',
    description: 'Join our friendly running community in Lincolnshire. Group runs in Skegness, Spilsby, Horncastle, and Boston.',
  },
  viewport: 'width=device-width, initial-scale=1',
  robots: 'index, follow',
  themeColor: '#ff6600',
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
      <body className={`${inter.className} bg-[#1a1a1a] text-white min-h-screen`}>
        <Suspense fallback={<LoadingState fullScreen size="large" text="Loading SADRC..." />}>
          <Navbar />
          {children}
          <Footer />
        </Suspense>
      </body>
    </html>
  )
}
