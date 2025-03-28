'use client';

import './globals.css';
import { Inter } from 'next/font/google';
import { Suspense, useEffect } from 'react';
import * as Sentry from '@sentry/nextjs';
import Head from 'next/head';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import LoadingState from './components/LoadingState';
import { initWebVitals } from '@/utils/analytics';

const inter = Inter({ subsets: ['latin'] });

const siteMetadata = {
  title: 'Skegness and District Running Club',
  description: 'Join our friendly running community in Lincolnshire. Established in 2015, we offer group runs in Skegness, Spilsby, Horncastle, and Boston. Club membership £10 per year with optional England Athletics affiliation.',
  keywords: 'running club, Skegness, Lincolnshire, Spilsby, Horncastle, Boston, athletics, running group, England Athletics',
  author: 'Skegness and District Running Club',
  url: 'https://skegnessrunningclub.co.uk',
  locale: 'en_GB',
  themeColor: '#ff6600',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    // Initialize web vitals monitoring
    if (typeof window !== 'undefined') {
      initWebVitals();
    }
  }, []);

  useEffect(() => {
    if (process.env.NEXT_PUBLIC_SENTRY_DSN) {
      Sentry.init({
        dsn: process.env.NEXT_PUBLIC_SENTRY_DSN,
        tracesSampleRate: 1.0,
      });
    }
  }, []);

  useEffect(() => {
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
    <html lang="en" className={inter.className}>
      <Head>
        <title>{siteMetadata.title}</title>
        <meta name="description" content={siteMetadata.description} />
        <meta name="keywords" content={siteMetadata.keywords} />
        <meta name="author" content={siteMetadata.author} />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={siteMetadata.url} />
        <meta property="og:title" content={siteMetadata.title} />
        <meta property="og:description" content={siteMetadata.description} />
        <meta property="og:image" content={`${siteMetadata.url}/images/hero/running-hero.jpg`} />
        <meta property="og:locale" content={siteMetadata.locale} />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content={siteMetadata.url} />
        <meta name="twitter:title" content={siteMetadata.title} />
        <meta name="twitter:description" content={siteMetadata.description} />
        <meta name="twitter:image" content={`${siteMetadata.url}/images/hero/running-hero.jpg`} />
        
        {/* PWA */}
        <meta name="theme-color" content={siteMetadata.themeColor} />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        
        {/* Additional SEO */}
        <meta name="robots" content="index, follow" />
        <meta name="googlebot" content="index, follow" />
        <meta name="format-detection" content="telephone=no" />
        <link rel="canonical" href={siteMetadata.url} />
        
        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>
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
