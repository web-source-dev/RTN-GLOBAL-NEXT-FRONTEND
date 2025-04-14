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
    canonical: 'https://rtnglobal.co/error',
  },
  openGraph: {
    title: 'Error | RTN Global',
    description: 'Something went wrong while processing your request. Our team is working to fix the issue.',
    type: 'website',
    url: 'https://rtnglobal.co/error',
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
    creator: '@rtnglobalofficial',
    site: '@rtnglobalofficial'
  },
  authors: [{ name: 'RTN Global Team' }],
  publisher: 'RTN Global',
  creator: 'Muhammad Tayyab',
  verification: {
    google: 'google03e42604abdd544c',
    other: {
      'wot-verification': 'd225e0e4ff8e770182408ec60e8d8c24',
      'ms-verify': '9f21e93909e646e0a2f3218d1afeb53c',
      me: ['https://rtnglobal.co', 'https://www.linkedin.com/in/rtnglobalofficial']
    }
  },
  other: {
    'og:site_name': 'RTN Global',
    'og:type': 'website',
    'contact:email': 'info@rtnglobal.site',
    'contact:phone': '+1 505 528 6780',
    'contact:address': '1209 MOUNTAIN ROAD PLNE, STE R, ALBUQUERQUE, NM, 87110, US'
  }
} 