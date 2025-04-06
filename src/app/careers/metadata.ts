import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Careers | RTN Global',
  description: 'Explore global career opportunities at RTN Global. Find your next role in a dynamic, innovative technology company focused on digital transformation worldwide.',
  keywords: 'careers, jobs, employment, technology careers, digital transformation, global jobs, international careers, work with us, RTN Global opportunities',
  alternates: {
    canonical: 'https://rtnglobal.com/careers',
    languages: {
      'en-US': 'https://rtnglobal.com/careers',
      'en-GB': 'https://rtnglobal.com/careers',
      'fr': 'https://rtnglobal.com/fr/careers',
      'de': 'https://rtnglobal.com/de/careers',
      'es': 'https://rtnglobal.com/es/careers',
    }
  },
  openGraph: {
    title: 'Careers at RTN Global',
    description: 'Join our international team and help build the future of digital transformation. Explore global opportunities at RTN Global.',
    url: 'https://rtnglobal.com/careers',
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
  },
  robots: {
    index: true,
    follow: true,
  },
  authors: [{ name: 'RTN Global Team' }],
  publisher: 'RTN Global Ltd',
  verification: {
    google: 'verification_token',
    yandex: 'verification_token',
    other: {
      me: ['https://rtnglobal.com', 'https://www.linkedin.com/company/rtnglobal']
    }
  },
  category: 'Careers',
} 