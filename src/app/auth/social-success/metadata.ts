import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Authentication Successful | RTN Global',
  description: 'Your social authentication was successful. You have successfully logged in to RTN Global using your social account.',
  keywords: 'social login success, authentication successful, social media login, RTN Global social login, login confirmation',
  alternates: {
    canonical: 'https://rtnglobal.com/auth/social-success',
    languages: {
      'en-US': 'https://rtnglobal.com/auth/social-success',
      'en-GB': 'https://rtnglobal.com/auth/social-success',
      'fr': 'https://rtnglobal.com/fr/auth/social-success',
      'de': 'https://rtnglobal.com/de/auth/social-success',
      'es': 'https://rtnglobal.com/es/auth/social-success',
    }
  },
  openGraph: {
    title: 'Authentication Successful | RTN Global',
    description: 'Your social authentication was successful. You have successfully logged in to RTN Global using your social account.',
    url: 'https://rtnglobal.com/auth/social-success',
    siteName: 'RTN Global',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'Authentication Successful | RTN Global',
    description: 'Your social authentication was successful. You have successfully logged in to RTN Global.',
  },
  robots: {
    index: false,
    follow: false,
  },
  authors: [{ name: 'RTN Global Team' }],
  publisher: 'RTN Global Ltd',
} 