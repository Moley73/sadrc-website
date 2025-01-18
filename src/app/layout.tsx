'use client';

import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Suspense, useEffect } from 'react';
import * as Sentry from '@sentry/nextjs';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import LoadingState from './components/LoadingState';
import { initWebVitals } from '@/utils/analytics';

const inter = Inter({ subsets: ['latin'] });

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
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    // Initialize web vitals monitoring
    initWebVitals();

    // Add resize event listener for responsive design
    const handleResize = () => {
      // Update CSS custom property for viewport height
      document.documentElement.style.setProperty(
        '--vh',
        `${window.innerHeight * 0.01}px`
      );
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <html lang="en">
      <body 
        className={`${inter.className} bg-[#1a1a1a] text-white min-h-screen flex flex-col`}
        style={{ height: 'calc(var(--vh, 1vh) * 100)' }}
      >
        <Suspense fallback={<LoadingState fullScreen size="large" text="Loading SADRC..." />}>
          <div className="flex flex-col flex-grow">
            <Navbar />
            <main className="flex-grow">
              {children}
            </main>
            <Footer />
          </div>
        </Suspense>
      </body>
    </html>
  );
}
