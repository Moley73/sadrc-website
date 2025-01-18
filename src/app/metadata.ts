import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Skegness and District Running Club',
  description: 'Join our friendly running community in Lincolnshire. Established in 2015, we offer group runs in Skegness, Spilsby, Horncastle, and Boston. Free membership with optional England Athletics affiliation.',
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
