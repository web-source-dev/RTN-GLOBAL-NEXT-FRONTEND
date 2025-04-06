import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Register | RTN Global',
  description: 'Create your RTN Global account to access our international services and solutions. Join our global network of businesses and professionals.',
  keywords: 'register, sign up, create account, RTN Global account, join RTN Global, new account',
  alternates: {
    canonical: 'https://rtnglobal.com/auth/register',
    languages: {
      'en-US': 'https://rtnglobal.com/auth/register',
      'en-GB': 'https://rtnglobal.com/auth/register',
      'fr': 'https://rtnglobal.com/fr/auth/register',
      'de': 'https://rtnglobal.com/de/auth/register',
      'es': 'https://rtnglobal.com/es/auth/register',
    }
  },
  openGraph: {
    title: 'Register | RTN Global',
    description: 'Create your RTN Global account to access our international services and solutions. Join our global network of businesses and professionals.',
    url: 'https://rtnglobal.com/auth/register',
    siteName: 'RTN Global',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'Register | RTN Global',
    description: 'Create your RTN Global account to access our international services and solutions. Join our global network today.',
  },
  robots: {
    index: false,
    follow: false,
  },
  authors: [{ name: 'RTN Global Team' }],
  publisher: 'RTN Global Ltd',
} 