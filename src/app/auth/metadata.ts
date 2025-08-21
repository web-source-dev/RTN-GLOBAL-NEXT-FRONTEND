import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Authentication | RTN Global',
  description: 'Secure authentication for RTN Global - Log in, sign up, or reset your password to access our global services platform.',
  keywords: 'authentication, login, register, sign up, RTN Global, secure access, account',
  alternates: {
    canonical: 'https://rtnglobal.site/auth',
    languages: {
      'en-US': 'https://rtnglobal.site/auth',
      'en-GB': 'https://rtnglobal.site/auth',
      'fr': 'https://rtnglobal.site/fr/auth',
      'de': 'https://rtnglobal.site/de/auth',
      'es': 'https://rtnglobal.site/es/auth',
    }
  },
  openGraph: {
    title: 'Authentication | RTN Global',
    description: 'Secure authentication for RTN Global - Log in, sign up, or reset your password to access our global services platform.',
    url: 'https://rtnglobal.site/auth',
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
    'contact:phone': '+1 (505) 528 0265',
    'contact:address': '1209 MOUNTAIN ROAD PLNE, STE R, ALBUQUERQUE, NM, 87110, US',
  }
} 