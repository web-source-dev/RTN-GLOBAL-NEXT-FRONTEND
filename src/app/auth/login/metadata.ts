import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Login | RTN Global',
  description: 'Log in to your RTN Global account to access our secure international platform and services. Secure and easy access worldwide.',
  keywords: 'login, sign in, account access, RTN Global login, secure login, global access',
  alternates: {
    canonical: 'https://rtnglobal.com/auth/login',
    languages: {
      'en-US': 'https://rtnglobal.com/auth/login',
      'en-GB': 'https://rtnglobal.com/auth/login',
      'fr': 'https://rtnglobal.com/fr/auth/login',
      'de': 'https://rtnglobal.com/de/auth/login',
      'es': 'https://rtnglobal.com/es/auth/login',
    }
  },
  openGraph: {
    title: 'Login | RTN Global',
    description: 'Log in to your RTN Global account to access our secure international platform and services. Secure and easy access worldwide.',
    url: 'https://rtnglobal.com/auth/login',
    siteName: 'RTN Global',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'Login | RTN Global',
    description: 'Log in to your RTN Global account to access our secure international platform and services.',
  },
  robots: {
    index: false,
    follow: false,
  },
  authors: [{ name: 'RTN Global Team' }],
  publisher: 'RTN Global Ltd',
} 