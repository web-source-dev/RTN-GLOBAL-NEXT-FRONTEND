import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Register | RTN Global',
  description: 'Create your RTN Global account to access our international services and solutions. Join our global network of businesses and professionals.',
  keywords: 'register, sign up, create account, RTN Global account, join RTN Global, new account',
  alternates: {
    canonical: 'https://rtnglobal.site/auth/register',
    languages: {
      'en-US': 'https://rtnglobal.site/auth/register',
      'en-GB': 'https://rtnglobal.site/auth/register',
      'fr': 'https://rtnglobal.site/fr/auth/register',
      'de': 'https://rtnglobal.site/de/auth/register',
      'es': 'https://rtnglobal.site/es/auth/register',
    }
  },
  openGraph: {
    title: 'Register | RTN Global',
    description: 'Create your RTN Global account to access our international services and solutions. Join our global network of businesses and professionals.',
    url: 'https://rtnglobal.site/auth/register',
    siteName: 'RTN Global',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'Register | RTN Global',
    description: 'Create your RTN Global account to access our international services and solutions. Join our global network today.',
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