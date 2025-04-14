import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Forgot Password | RTN Global',
  description: 'Reset your RTN Global account password. Secure password recovery process for your international RTN Global account access.',
  keywords: 'forgot password, password reset, account recovery, RTN Global password, recover access, reset link',
  alternates: {
    canonical: 'https://rtnglobal.co/auth/forgot-password',
    languages: {
      'en-US': 'https://rtnglobal.co/auth/forgot-password',
      'en-GB': 'https://rtnglobal.co/auth/forgot-password',
      'fr': 'https://rtnglobal.co/fr/auth/forgot-password',
      'de': 'https://rtnglobal.co/de/auth/forgot-password',
      'es': 'https://rtnglobal.co/es/auth/forgot-password',
    }
  },
  openGraph: {
    title: 'Forgot Password | RTN Global',
    description: 'Reset your RTN Global account password. Secure password recovery process for your international RTN Global account access.',
    url: 'https://rtnglobal.co/auth/forgot-password',
    siteName: 'RTN Global',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'Forgot Password | RTN Global',
    description: 'Reset your RTN Global account password. Secure password recovery process for your account.',
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