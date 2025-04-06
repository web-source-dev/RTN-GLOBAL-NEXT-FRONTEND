import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Logging Out | RTN Global',
  description: 'Logging out of your RTN Global account. Secure sign-out from your international RTN Global session.',
  keywords: 'logout, sign out, exit account, end session, RTN Global logout, secure logout',
  alternates: {
    canonical: 'https://rtnglobal.com/auth/logout',
    languages: {
      'en-US': 'https://rtnglobal.com/auth/logout',
      'en-GB': 'https://rtnglobal.com/auth/logout',
      'fr': 'https://rtnglobal.com/fr/auth/logout',
      'de': 'https://rtnglobal.com/de/auth/logout',
      'es': 'https://rtnglobal.com/es/auth/logout',
    }
  },
  openGraph: {
    title: 'Logging Out | RTN Global',
    description: 'Logging out of your RTN Global account. Secure sign-out from your international RTN Global session.',
    url: 'https://rtnglobal.com/auth/logout',
    siteName: 'RTN Global',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'Logging Out | RTN Global',
    description: 'Logging out of your RTN Global account. Secure sign-out from your session.',
  },
  robots: {
    index: false,
    follow: false,
  },
  authors: [{ name: 'RTN Global Team' }],
  publisher: 'RTN Global Ltd',
} 