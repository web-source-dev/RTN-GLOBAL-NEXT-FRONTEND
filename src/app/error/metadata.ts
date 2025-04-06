import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Error | RTN Global',
  description: 'Something went wrong while processing your request. Our team has been notified and is working to resolve the issue.',
  keywords: 'error page, technical error, system error, RTN Global error, problem resolution, support',
  robots: {
    index: false,
    follow: false,
    'max-image-preview': 'none',
    'max-snippet': -1,
  },
  alternates: {
    canonical: 'https://rtnglobal.com/error',
  },
  openGraph: {
    title: 'Error | RTN Global',
    description: 'Something went wrong while processing your request. Our team is working to fix the issue.',
    type: 'website',
    url: 'https://rtnglobal.com/error',
    siteName: 'RTN Global',
    locale: 'en_US',
    images: [
      {
        url: '/images/og/error-og.jpg',
        width: 1200,
        height: 630,
        alt: 'RTN Global Error Page'
      }
    ]
  },
  twitter: {
    card: 'summary',
    title: 'Error | RTN Global',
    description: 'Something went wrong while processing your request. Our team is working to fix the issue.',
    images: ['/images/og/error-og.jpg'],
    creator: '@RTNGlobal',
    site: '@RTNGlobal'
  },
  authors: [{ name: 'RTN Global Team' }],
  publisher: 'RTN Global Ltd',
  other: {
    'og:site_name': 'RTN Global',
    'og:type': 'website',
  }
} 