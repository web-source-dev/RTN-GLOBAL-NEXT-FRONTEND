import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Verify Email | RTN Global',
  description: 'Verify your RTN Global account email address. Activate your international RTN Global account by confirming your email.',
  keywords: 'verify email, email confirmation, account activation, email verification, RTN Global verification, confirm account',
  alternates: {
    canonical: 'https://rtnglobal.co/auth/verify-email',
    languages: {
      'en-US': 'https://rtnglobal.co/auth/verify-email',
      'en-GB': 'https://rtnglobal.co/auth/verify-email',
      'fr': 'https://rtnglobal.co/fr/auth/verify-email',
      'de': 'https://rtnglobal.co/de/auth/verify-email',
      'es': 'https://rtnglobal.co/es/auth/verify-email',
    }
  },
  openGraph: {
    title: 'Verify Email | RTN Global',
    description: 'Verify your RTN Global account email address. Activate your international RTN Global account by confirming your email.',
    url: 'https://rtnglobal.co/auth/verify-email',
    siteName: 'RTN Global',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'Verify Email | RTN Global',
    description: 'Verify your RTN Global account email address. Complete your registration by confirming your email.',
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