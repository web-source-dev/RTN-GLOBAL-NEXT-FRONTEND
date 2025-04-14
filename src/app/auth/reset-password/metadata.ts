import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Reset Password | RTN Global',
  description: 'Reset your RTN Global account password. Create a new secure password for your international RTN Global account.',
  keywords: 'reset password, new password, password change, secure password, RTN Global account, password security',
  alternates: {
    canonical: 'https://rtnglobal.co/auth/reset-password',
    languages: {
      'en-US': 'https://rtnglobal.co/auth/reset-password',
      'en-GB': 'https://rtnglobal.co/auth/reset-password',
      'fr': 'https://rtnglobal.co/fr/auth/reset-password',
      'de': 'https://rtnglobal.co/de/auth/reset-password',
      'es': 'https://rtnglobal.co/es/auth/reset-password',
    }
  },
  openGraph: {
    title: 'Reset Password | RTN Global',
    description: 'Reset your RTN Global account password. Create a new secure password for your international RTN Global account.',
    url: 'https://rtnglobal.co/auth/reset-password',
    siteName: 'RTN Global',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'Reset Password | RTN Global',
    description: 'Reset your RTN Global account password. Create a new secure password for your international account.',
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