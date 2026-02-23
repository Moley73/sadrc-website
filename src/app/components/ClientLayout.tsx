'use client';

import { useEffect, Suspense } from 'react';
import * as Sentry from '@sentry/nextjs';
import { initWebVitals } from '@/utils/analytics';
import Navbar from './Navbar';
import Footer from './Footer';
import LoadingState from './LoadingState';

export default function ClientLayout({
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
    <Suspense fallback={<LoadingState fullScreen size="large" text="Loading SADRC..." />}>
      <div className="flex flex-col flex-grow">
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </div>
    </Suspense>
  );
}
