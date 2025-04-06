import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Case Studies | RTN Global',
  description: 'Explore detailed client success stories showcasing our measurable results across industries and digital transformation projects worldwide.',
  keywords: 'case studies, success stories, client projects, digital transformation, RTN Global projects, business results, client success, ROI, project outcomes',
  alternates: {
    canonical: 'https://rtnglobal.com/case-studies',
    languages: {
      'en-US': 'https://rtnglobal.com/case-studies',
      'en-GB': 'https://rtnglobal.com/case-studies',
      'fr': 'https://rtnglobal.com/fr/case-studies',
      'de': 'https://rtnglobal.com/de/case-studies',
      'es': 'https://rtnglobal.com/es/case-studies',
    }
  },
  openGraph: {
    title: 'Client Success Stories & Case Studies | RTN Global',
    description: 'Explore detailed examinations of our client work showcasing challenges, innovative solutions, and measurable results delivered worldwide.',
    url: 'https://rtnglobal.com/case-studies',
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
  category: 'Case Studies',
  applicationName: 'RTN Global',
  other: {
    'og:site_name': 'RTN Global',
    'og:type': 'website',
    'twitter:creator': '@RTNGlobal',
  },
}