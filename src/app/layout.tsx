// src/app/layout.tsx
import type { Metadata, Viewport } from 'next';
import { ThemeProvider } from '@/components/providers/ThemeProvider';
import { portfolioConfig } from '@/config/portfolio.config';
import './globals.css';

export const metadata: Metadata = {
  title: portfolioConfig.seo.title,
  description: portfolioConfig.seo.description,
  keywords: portfolioConfig.seo.keywords,
  authors: [{ name: portfolioConfig.personal.name }],
  creator: portfolioConfig.personal.name,
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: portfolioConfig.seo.siteUrl,
    title: portfolioConfig.seo.title,
    description: portfolioConfig.seo.description,
    siteName: portfolioConfig.personal.name,
    images: [
      {
        url: portfolioConfig.seo.ogImage,
        width: 1200,
        height: 630,
        alt: portfolioConfig.personal.name,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: portfolioConfig.seo.title,
    description: portfolioConfig.seo.description,
    images: [portfolioConfig.seo.ogImage],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#FAFAFA' },
    { media: '(prefers-color-scheme: dark)', color: '#0A0A0F' },
  ],
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body className="custom-scrollbar">
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}