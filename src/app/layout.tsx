import './globals.css';
import { Inter } from 'next/font/google';
import { Suspense } from 'react';
import type { Metadata } from 'next';
import Script from 'next/script';
import ClientLayout from './components/ClientLayout';

// Optimize font loading
const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Skegness and District Running Club | Lincolnshire Running Community',
  description: 'Join Skegness and District Running Club, a friendly community in Lincolnshire with group runs in Skegness, Spilsby, Horncastle, and Boston. Club membership £10 per year with England Athletics affiliation option. Perfect for runners of all abilities.',
  keywords: 'running club Lincolnshire, Skegness running, Spilsby running group, Horncastle runners, Boston running club, England Athletics affiliated club, beginner friendly running, Lincolnshire running community, running club membership',
  authors: [{ name: 'Skegness and District Running Club' }],
  openGraph: {
    type: 'website',
    url: 'https://skegnessrunningclub.co.uk',
    title: 'Skegness and District Running Club | Lincolnshire Running Community',
    description: 'Join Skegness and District Running Club, a friendly community in Lincolnshire with group runs in Skegness, Spilsby, Horncastle, and Boston. Club membership £10 per year with England Athletics affiliation option. Perfect for runners of all abilities.',
    images: ['/images/hero/running-hero.jpg'],
    locale: 'en_GB',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Skegness and District Running Club | Lincolnshire Running Community',
    description: 'Join Skegness and District Running Club, a friendly community in Lincolnshire with group runs in Skegness, Spilsby, Horncastle, and Boston. Club membership £10 per year with England Athletics affiliation option. Perfect for runners of all abilities.',
    images: ['/images/hero/running-hero.jpg'],
  },
  themeColor: '#ff6600',
  viewport: 'width=device-width, initial-scale=1, maximum-scale=5',
  robots: 'index, follow',
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.className}>
      <body className={`${inter.className} bg-[#1a1a1a] text-white min-h-screen flex flex-col`}>
        <Script id="schema-org" type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "SportsClub",
              "name": "Skegness and District Running Club",
              "url": "https://skegnessrunningclub.co.uk",
              "logo": "https://skegnessrunningclub.co.uk/images/locations/Logo.avif",
              "description": "A friendly running club based in Lincolnshire with group runs in Skegness, Spilsby, Horncastle, and Boston.",
              "address": {
                "@type": "PostalAddress",
                "addressRegion": "Lincolnshire",
                "addressCountry": "UK"
              },
              "sameAs": [
                "https://www.facebook.com/groups/sadrc",
                "https://www.instagram.com/skegnessanddistrictrc"
              ],
              "openingHoursSpecification": [
                {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": "Monday",
                  "opens": "18:30",
                  "closes": "19:30",
                  "validFrom": "2025-01-01",
                  "validThrough": "2025-12-31"
                },
                {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": "Tuesday",
                  "opens": "18:30",
                  "closes": "19:30",
                  "validFrom": "2025-01-01",
                  "validThrough": "2025-12-31"
                },
                {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": "Thursday",
                  "opens": "18:30",
                  "closes": "19:30",
                  "validFrom": "2025-01-01",
                  "validThrough": "2025-12-31"
                }
              ],
              "memberOf": {
                "@type": "Organization",
                "name": "England Athletics"
              },
              "offers": {
                "@type": "Offer",
                "name": "Club Membership",
                "price": "10",
                "priceCurrency": "GBP",
                "validFrom": "2025-04-01",
                "validThrough": "2026-03-31"
              }
            }
          `}
        </Script>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
