import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Session Expired | RTN Global',
  description: 'Your session has expired. Please log in again to continue using RTN Global services.',
  keywords: 'session expired, timeout, security, login again, RTN Global',
  alternates: {
    canonical: 'https://rtnglobal.com/auth/session-expired',
    languages: {
      'en-US': 'https://rtnglobal.com/auth/session-expired',
      'en-GB': 'https://rtnglobal.com/auth/session-expired',
      'fr': 'https://rtnglobal.com/fr/auth/session-expired',
      'de': 'https://rtnglobal.com/de/auth/session-expired',
      'es': 'https://rtnglobal.com/es/auth/session-expired',
    }
  },
  openGraph: {
    title: 'Session Expired | RTN Global',
    description: 'Your session has expired. Please log in again to continue using RTN Global services.',
    url: 'https://rtnglobal.com/auth/session-expired',
    siteName: 'RTN Global',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'Session Expired | RTN Global',
    description: 'Your session has expired. Please log in again to continue using RTN Global services.',
  },
  robots: {
    index: false,
    follow: false,
  },
  authors: [{ name: 'RTN Global Team' }],
  publisher: 'RTN Global Ltd',
} 