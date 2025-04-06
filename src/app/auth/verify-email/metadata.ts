import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Verify Email | RTN Global',
  description: 'Verify your RTN Global account email address. Activate your international RTN Global account by confirming your email.',
  keywords: 'verify email, email confirmation, account activation, email verification, RTN Global verification, confirm account',
  alternates: {
    canonical: 'https://rtnglobal.com/auth/verify-email',
    languages: {
      'en-US': 'https://rtnglobal.com/auth/verify-email',
      'en-GB': 'https://rtnglobal.com/auth/verify-email',
      'fr': 'https://rtnglobal.com/fr/auth/verify-email',
      'de': 'https://rtnglobal.com/de/auth/verify-email',
      'es': 'https://rtnglobal.com/es/auth/verify-email',
    }
  },
  openGraph: {
    title: 'Verify Email | RTN Global',
    description: 'Verify your RTN Global account email address. Activate your international RTN Global account by confirming your email.',
    url: 'https://rtnglobal.com/auth/verify-email',
    siteName: 'RTN Global',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'Verify Email | RTN Global',
    description: 'Verify your RTN Global account email address. Complete your registration by confirming your email.',
  },
  robots: {
    index: false,
    follow: false,
  },
  authors: [{ name: 'RTN Global Team' }],
  publisher: 'RTN Global Ltd',
} 