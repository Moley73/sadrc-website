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
  title: 'Running Club Skegness, Boston, Spilsby & Horncastle | SADRC',
  description: 'Join Skegness and District Running Club - your local running club in Skegness, Boston, Spilsby and Horncastle. Weekly group runs, England Athletics affiliated. Running club near me in Lincolnshire. All abilities welcome, £10/year membership.',
  keywords: 'running club Skegness, running club Boston Lincolnshire, running club Spilsby, running club Horncastle, Skegness runners, Boston runners, Spilsby running group, Horncastle running club, running club near me Lincolnshire, Lincolnshire running club, England Athletics club, SADRC, Skegness and District Running Club, local running club, running groups Lincolnshire, parkrun club',
  authors: [{ name: 'Skegness and District Running Club' }],
  openGraph: {
    type: 'website',
    url: 'https://skegnessrunningclub.co.uk',
    title: 'Running Club Skegness, Boston, Spilsby & Horncastle | SADRC',
    siteName: 'Skegness and District Running Club',
    description: 'Join your local running club in Skegness, Boston, Spilsby and Horncastle. Weekly group runs, England Athletics affiliated. All abilities welcome.',
    images: ['/images/hero/running-hero.jpg'],
    locale: 'en_GB',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Running Club Skegness, Boston, Spilsby & Horncastle | SADRC',
    description: 'Join your local running club in Skegness, Boston, Spilsby and Horncastle. Weekly group runs, England Athletics affiliated. All abilities welcome.',
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
  alternates: {
    canonical: 'https://skegnessrunningclub.co.uk',
  },
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
              "alternateName": "SADRC",
              "url": "https://skegnessrunningclub.co.uk",
              "logo": "https://skegnessrunningclub.co.uk/images/locations/Logo.avif",
              "description": "Running club in Skegness, Boston, Spilsby and Horncastle, Lincolnshire. Weekly group runs for all abilities. England Athletics affiliated.",
              "sport": "Running",
              "address": {
                "@type": "PostalAddress",
                "addressRegion": "Lincolnshire",
                "addressCountry": "GB"
              },
              "areaServed": [
                {
                  "@type": "City",
                  "name": "Skegness",
                  "containedInPlace": {
                    "@type": "AdministrativeArea",
                    "name": "Lincolnshire"
                  }
                },
                {
                  "@type": "City",
                  "name": "Boston",
                  "containedInPlace": {
                    "@type": "AdministrativeArea",
                    "name": "Lincolnshire"
                  }
                },
                {
                  "@type": "City",
                  "name": "Spilsby",
                  "containedInPlace": {
                    "@type": "AdministrativeArea",
                    "name": "Lincolnshire"
                  }
                },
                {
                  "@type": "City",
                  "name": "Horncastle",
                  "containedInPlace": {
                    "@type": "AdministrativeArea",
                    "name": "Lincolnshire"
                  }
                }
              ],
              "location": [
                {
                  "@type": "Place",
                  "name": "Skegness Running Location",
                  "address": {
                    "@type": "PostalAddress",
                    "streetAddress": "Links Hotel",
                    "addressLocality": "Skegness",
                    "addressRegion": "Lincolnshire",
                    "addressCountry": "GB"
                  }
                },
                {
                  "@type": "Place",
                  "name": "Boston Running Location",
                  "address": {
                    "@type": "PostalAddress",
                    "streetAddress": "Fuddy Duck",
                    "postalCode": "PE21 7TW",
                    "addressLocality": "Boston",
                    "addressRegion": "Lincolnshire",
                    "addressCountry": "GB"
                  }
                },
                {
                  "@type": "Place",
                  "name": "Spilsby Running Location",
                  "address": {
                    "@type": "PostalAddress",
                    "streetAddress": "New Life Centre",
                    "addressLocality": "Spilsby",
                    "addressRegion": "Lincolnshire",
                    "addressCountry": "GB"
                  }
                },
                {
                  "@type": "Place",
                  "name": "Horncastle Running Location",
                  "address": {
                    "@type": "PostalAddress",
                    "streetAddress": "Cattle Market Car Park",
                    "addressLocality": "Horncastle",
                    "addressRegion": "Lincolnshire",
                    "addressCountry": "GB"
                  }
                }
              ],
              "sameAs": [
                "https://www.facebook.com/skegnessanddistrictrunningclub",
                "https://www.instagram.com/sadrc_uk"
              ],
              "openingHoursSpecification": [
                {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": "Monday",
                  "opens": "18:30",
                  "closes": "19:30",
                  "validFrom": "2026-01-01",
                  "validThrough": "2026-12-31"
                },
                {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": "Tuesday",
                  "opens": "18:30",
                  "closes": "19:30",
                  "validFrom": "2026-01-01",
                  "validThrough": "2026-12-31"
                },
                {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": "Thursday",
                  "opens": "18:30",
                  "closes": "19:30",
                  "validFrom": "2026-01-01",
                  "validThrough": "2026-12-31"
                }
              ],
              "memberOf": {
                "@type": "Organization",
                "name": "England Athletics"
              },
              "offers": {
                "@type": "Offer",
                "name": "Club Membership",
                "description": "Annual running club membership for all abilities",
                "price": "10",
                "priceCurrency": "GBP",
                "validFrom": "2026-04-01",
                "validThrough": "2027-03-31",
                "availability": "https://schema.org/InStock"
              },
              "email": "infosadrc@mail.com",
              "keywords": "running club, Skegness, Boston, Spilsby, Horncastle, Lincolnshire, England Athletics"
            }
          `}
        </Script>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
