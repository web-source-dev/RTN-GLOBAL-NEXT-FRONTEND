import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Forgot Password | RTN Global',
  description: 'Reset your RTN Global account password. Secure password recovery process for your international RTN Global account access.',
  keywords: 'forgot password, password reset, account recovery, RTN Global password, recover access, reset link',
  alternates: {
    canonical: 'https://rtnglobal.com/auth/forgot-password',
    languages: {
      'en-US': 'https://rtnglobal.com/auth/forgot-password',
      'en-GB': 'https://rtnglobal.com/auth/forgot-password',
      'fr': 'https://rtnglobal.com/fr/auth/forgot-password',
      'de': 'https://rtnglobal.com/de/auth/forgot-password',
      'es': 'https://rtnglobal.com/es/auth/forgot-password',
    }
  },
  openGraph: {
    title: 'Forgot Password | RTN Global',
    description: 'Reset your RTN Global account password. Secure password recovery process for your international RTN Global account access.',
    url: 'https://rtnglobal.com/auth/forgot-password',
    siteName: 'RTN Global',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'Forgot Password | RTN Global',
    description: 'Reset your RTN Global account password. Secure password recovery process for your account.',
  },
  robots: {
    index: false,
    follow: false,
  },
  authors: [{ name: 'RTN Global Team' }],
  publisher: 'RTN Global Ltd',
} 