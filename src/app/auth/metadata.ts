import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Authentication | RTN Global',
  description: 'Secure authentication for RTN Global - Log in, sign up, or reset your password to access our global services platform.',
  keywords: 'authentication, login, register, sign up, RTN Global, secure access, account',
  alternates: {
    canonical: 'https://rtnglobal.co/auth',
    languages: {
      'en-US': 'https://rtnglobal.co/auth',
      'en-GB': 'https://rtnglobal.co/auth',
      'fr': 'https://rtnglobal.co/fr/auth',
      'de': 'https://rtnglobal.co/de/auth',
      'es': 'https://rtnglobal.co/es/auth',
    }
  },
  openGraph: {
    title: 'Authentication | RTN Global',
    description: 'Secure authentication for RTN Global - Log in, sign up, or reset your password to access our global services platform.',
    url: 'https://rtnglobal.co/auth',
    siteName: 'RTN Global',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'Authentication | RTN Global',
    description: 'Secure authentication for RTN Global - Log in, sign up, or reset your password to access our global services platform.',
    creator: '@rtnglobalofficial',
    site: '@rtnglobalofficial'
  },
  robots: {
    index: false,
    follow: false,
  },
  authors: [{ name: 'Muhammad Tayyab' }],
  publisher: 'RTN Global',
  verification: {
    google: 'google03e42604abdd544c',
    other: {
      'wot-verification': 'd225e0e4ff8e770182408ec60e8d8c24',
      'ms-verify': '9f21e93909e646e0a2f3218d1afeb53c',
    }
  },
  other: {
    'contact:email': 'info@rtnglobal.site',
    'contact:phone': '+1 505 528 6780',
    'contact:address': '1209 MOUNTAIN ROAD PLNE, STE R, ALBUQUERQUE, NM, 87110, US',
  }
} 