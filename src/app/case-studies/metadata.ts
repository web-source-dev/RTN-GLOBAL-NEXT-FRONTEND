import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Case Studies | RTN Global',
  description: 'Explore detailed client success stories showcasing our measurable results across industries and digital transformation projects worldwide.',
  keywords: 'case studies, success stories, client projects, digital transformation, RTN Global projects, business results, client success, ROI, project outcomes',
  alternates: {
    canonical: 'https://rtnglobal.co/case-studies',
    languages: {
      'en-US': 'https://rtnglobal.co/case-studies',
      'en-GB': 'https://rtnglobal.co/case-studies',
      'fr': 'https://rtnglobal.co/fr/case-studies',
      'de': 'https://rtnglobal.co/de/case-studies',
      'es': 'https://rtnglobal.co/es/case-studies',
    }
  },
  openGraph: {
    title: 'Client Success Stories & Case Studies | RTN Global',
    description: 'Explore detailed examinations of our client work showcasing challenges, innovative solutions, and measurable results delivered worldwide.',
    url: 'https://rtnglobal.co/case-studies',
    siteName: 'RTN Global',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/images/og/case-studies.jpg',
        width: 1200,
        height: 630,
        alt: 'RTN Global Case Studies'
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Client Success Stories & Case Studies | RTN Global',
    description: 'Explore detailed examinations of our client work showcasing challenges, innovative solutions, and measurable results delivered worldwide.',
    images: ['/images/og/case-studies.jpg'],
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
      'me': ['https://rtnglobal.co', 'https://www.linkedin.com/in/rtnglobalofficial/']
    }
  },
  category: 'Case Studies',
  applicationName: 'RTN Global',
  other: {
    'og:site_name': 'RTN Global',
    'og:type': 'website',
    'twitter:creator': '@rtnglobalofficial',
    'contact:email': 'info@rtnglobal.site',
    'contact:phone': '+1 505 528 6780',
    'contact:address': '1209 MOUNTAIN ROAD PLNE, STE R, ALBUQUERQUE, NM, 87110, US',
  },
}