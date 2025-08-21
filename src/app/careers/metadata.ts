import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Careers | RTN Global',
  description: 'Explore global career opportunities at RTN Global. Find your next role in a dynamic, innovative technology company focused on digital transformation worldwide.',
  keywords: 'careers, jobs, employment, technology careers, digital transformation, global jobs, international careers, work with us, RTN Global opportunities',
  alternates: {
    canonical: 'https://rtnglobal.site/careers',
    languages: {
      'en-US': 'https://rtnglobal.site/careers',
      'en-GB': 'https://rtnglobal.site/careers',
      'fr': 'https://rtnglobal.site/fr/careers',
      'de': 'https://rtnglobal.site/de/careers',
      'es': 'https://rtnglobal.site/es/careers',
    }
  },
  openGraph: {
    title: 'Careers at RTN Global',
    description: 'Join our international team and help build the future of digital transformation. Explore global opportunities at RTN Global.',
    url: 'https://rtnglobal.site/careers',
    siteName: 'RTN Global',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/images/og/careers.jpg',
        width: 1200,
        height: 630,
        alt: 'RTN Global Careers'
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Careers at RTN Global',
    description: 'Join our international team and help build the future of digital transformation. Explore global opportunities at RTN Global.',
    images: ['/images/og/careers.jpg'],
    creator: '@rtnglobalofficial',
    site: '@rtnglobalofficial'
  },
  robots: {
    index: true,
    follow: true,
  },
  authors: [{ name: 'Muhammad Tayyab' }],
  publisher: 'RTN Global',
  verification: {
    google: 'google03e42604abdd544c',
    other: {
      'wot-verification': 'd225e0e4ff8e770182408ec60e8d8c24',
      'ms-verify': '9f21e93909e646e0a2f3218d1afeb53c',
      'me': ['https://rtnglobal.site', 'https://www.linkedin.com/in/rtnglobalofficial/']
    }
  },
  category: 'Careers',
  other: {
    'contact:email': 'info@rtnglobal.site',
    'contact:phone': '+1 (505) 528 0265',
    'contact:address': '1209 MOUNTAIN ROAD PLNE, STE R, ALBUQUERQUE, NM, 87110, US',
  }
} 