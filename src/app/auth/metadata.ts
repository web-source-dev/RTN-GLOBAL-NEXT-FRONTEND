import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Authentication | RTN Global',
  description: 'Secure authentication for RTN Global - Log in, sign up, or reset your password to access our global services platform.',
  keywords: 'authentication, login, register, sign up, RTN Global, secure access, account',
  alternates: {
    canonical: 'https://rtnglobal.com/auth',
    languages: {
      'en-US': 'https://rtnglobal.com/auth',
      'en-GB': 'https://rtnglobal.com/auth',
      'fr': 'https://rtnglobal.com/fr/auth',
      'de': 'https://rtnglobal.com/de/auth',
      'es': 'https://rtnglobal.com/es/auth',
    }
  },
  openGraph: {
    title: 'Authentication | RTN Global',
    description: 'Secure authentication for RTN Global - Log in, sign up, or reset your password to access our global services platform.',
    url: 'https://rtnglobal.com/auth',
    siteName: 'RTN Global',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'Authentication | RTN Global',
    description: 'Secure authentication for RTN Global - Log in, sign up, or reset your password to access our global services platform.',
  },
  robots: {
    index: false,
    follow: false,
  },
  authors: [{ name: 'RTN Global Team' }],
  publisher: 'RTN Global Ltd',
} 