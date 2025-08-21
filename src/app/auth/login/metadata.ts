import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Login | RTN Global',
  description: 'Log in to your RTN Global account to access our secure international platform and services. Secure and easy access worldwide.',
  keywords: 'login, sign in, account access, RTN Global login, secure login, global access',
  alternates: {
    canonical: 'https://rtnglobal.site/auth/login',
    languages: {
      'en-US': 'https://rtnglobal.site/auth/login',
      'en-GB': 'https://rtnglobal.site/auth/login',
      'fr': 'https://rtnglobal.site/fr/auth/login',
      'de': 'https://rtnglobal.site/de/auth/login',
      'es': 'https://rtnglobal.site/es/auth/login',
    }
  },
  openGraph: {
    title: 'Login | RTN Global',
    description: 'Log in to your RTN Global account to access our secure international platform and services. Secure and easy access worldwide.',
    url: 'https://rtnglobal.site/auth/login',
    siteName: 'RTN Global',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'Login | RTN Global',
    description: 'Log in to your RTN Global account to access our secure international platform and services.',
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