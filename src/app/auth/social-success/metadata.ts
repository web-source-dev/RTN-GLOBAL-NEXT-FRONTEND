import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Authentication Successful | RTN Global',
  description: 'Your social authentication was successful. You have successfully logged in to RTN Global using your social account.',
  keywords: 'social login success, authentication successful, social media login, RTN Global social login, login confirmation',
  alternates: {
    canonical: 'https://rtnglobal.site/auth/social-success',
    languages: {
      'en-US': 'https://rtnglobal.site/auth/social-success',
      'en-GB': 'https://rtnglobal.site/auth/social-success',
      'fr': 'https://rtnglobal.site/fr/auth/social-success',
      'de': 'https://rtnglobal.site/de/auth/social-success',
      'es': 'https://rtnglobal.site/es/auth/social-success',
    }
  },
  openGraph: {
    title: 'Authentication Successful | RTN Global',
    description: 'Your social authentication was successful. You have successfully logged in to RTN Global using your social account.',
    url: 'https://rtnglobal.site/auth/social-success',
    siteName: 'RTN Global',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'Authentication Successful | RTN Global',
    description: 'Your social authentication was successful. You have successfully logged in to RTN Global.',
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
  }
} 