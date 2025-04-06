import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Reset Password | RTN Global',
  description: 'Reset your RTN Global account password. Create a new secure password for your international RTN Global account.',
  keywords: 'reset password, new password, password change, secure password, RTN Global account, password security',
  alternates: {
    canonical: 'https://rtnglobal.com/auth/reset-password',
    languages: {
      'en-US': 'https://rtnglobal.com/auth/reset-password',
      'en-GB': 'https://rtnglobal.com/auth/reset-password',
      'fr': 'https://rtnglobal.com/fr/auth/reset-password',
      'de': 'https://rtnglobal.com/de/auth/reset-password',
      'es': 'https://rtnglobal.com/es/auth/reset-password',
    }
  },
  openGraph: {
    title: 'Reset Password | RTN Global',
    description: 'Reset your RTN Global account password. Create a new secure password for your international RTN Global account.',
    url: 'https://rtnglobal.com/auth/reset-password',
    siteName: 'RTN Global',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'Reset Password | RTN Global',
    description: 'Reset your RTN Global account password. Create a new secure password for your international account.',
  },
  robots: {
    index: false,
    follow: false,
  },
  authors: [{ name: 'RTN Global Team' }],
  publisher: 'RTN Global Ltd',
} 