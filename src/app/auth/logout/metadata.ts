import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Logging Out | RTN Global',
  description: 'Logging out of your RTN Global account. Secure sign-out from your international RTN Global session.',
  keywords: 'logout, sign out, exit account, end session, RTN Global logout, secure logout',
  alternates: {
    canonical: 'https://rtnglobal.co/auth/logout',
    languages: {
      'en-US': 'https://rtnglobal.co/auth/logout',
      'en-GB': 'https://rtnglobal.co/auth/logout',
      'fr': 'https://rtnglobal.co/fr/auth/logout',
      'de': 'https://rtnglobal.co/de/auth/logout',
      'es': 'https://rtnglobal.co/es/auth/logout',
    }
  },
  openGraph: {
    title: 'Logging Out | RTN Global',
    description: 'Logging out of your RTN Global account. Secure sign-out from your international RTN Global session.',
    url: 'https://rtnglobal.co/auth/logout',
    siteName: 'RTN Global',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'Logging Out | RTN Global',
    description: 'Logging out of your RTN Global account. Secure sign-out from your session.',
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