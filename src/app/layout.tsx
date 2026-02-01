import type { Metadata } from 'next';
import { Inter, Montserrat } from 'next/font/google';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';
import CookieBanner from '@/components/CookieBanner';
import JsonLd from '@/components/JsonLd';
import './globals.css';

/* Optimized fonts with display swap for faster rendering */
const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
  weight: ['500', '700'], // Reduced to only essential weights
  display: 'swap',
});


export const metadata: Metadata = {
  title: {
    default: 'ZEAL.FX | Fashion, Product & Food Photography',
    template: '%s | ZEAL.FX',
  },
  description:
    'ZEAL.FX offers professional product photography, food photography, and fashion shoots. Studio and outdoor photography services available in Ranchi, Jharkhand, India.',
  keywords: [
    'zeal.fx',
    'photography',
    'fashion photography',
    'product photography',
    'food photography',
    'studio photography',
    'outdoor photography',
    'Ranchi',
    'Jharkhand',
    'India',
  ],
  authors: [{ name: 'ZEAL.FX' }],
  creator: 'ZEAL.FX',
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://zealfx.vercel.app',
    siteName: 'ZEAL.FX',
    title: 'ZEAL.FX | Fashion, Product & Food Photography',
    description:
      'Professional photography services for fashion, products, and food. Studio and outdoor shoots available.',
    /* TODO: Replace with actual OG image */
    images: [
      {
        url: '/assets/og-image.webp',
        width: 1200,
        height: 630,
        alt: 'ZEAL.FX - Professional Photography',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ZEAL.FX | Fashion, Product & Food Photography',
    description:
      'Professional photography services for fashion, products, and food.',
    /* TODO: Replace with actual Twitter image */
    images: ['/assets/og-image.webp'],
  },
  robots: {
    index: true,
    follow: true,
  },
  metadataBase: new URL('https://zealfx.vercel.app'),
  alternates: {
    canonical: 'https://zealfx.vercel.app',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${montserrat.variable}`}>
      <head>
        <JsonLd />
      </head>
      <body className="min-h-screen bg-neutral-950 text-white antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
        <ScrollToTop />
        <CookieBanner />
      </body>
    </html>
  );
}
