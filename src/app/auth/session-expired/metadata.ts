import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Session Expired | RTN Global',
  description: 'Your session has expired. Please log in again to continue using RTN Global services.',
  keywords: 'session expired, timeout, security, login again, RTN Global',
  alternates: {
    canonical: 'https://rtnglobal.co/auth/session-expired',
    languages: {
      'en-US': 'https://rtnglobal.co/auth/session-expired',
      'en-GB': 'https://rtnglobal.co/auth/session-expired',
      'fr': 'https://rtnglobal.co/fr/auth/session-expired',
      'de': 'https://rtnglobal.co/de/auth/session-expired',
      'es': 'https://rtnglobal.co/es/auth/session-expired',
    }
  },
  openGraph: {
    title: 'Session Expired | RTN Global',
    description: 'Your session has expired. Please log in again to continue using RTN Global services.',
    url: 'https://rtnglobal.co/auth/session-expired',
    siteName: 'RTN Global',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'Session Expired | RTN Global',
    description: 'Your session has expired. Please log in again to continue using RTN Global services.',
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