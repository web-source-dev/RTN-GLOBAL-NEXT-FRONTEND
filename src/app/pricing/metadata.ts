import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Pricing & Plans | Transparent Web Development Costs | RTN Global',
  description: 'Explore RTN Global\'s transparent pricing plans for web development, digital marketing, and IT consulting services. Choose the perfect package for your business needs with no hidden fees.',
  keywords: 'pricing plans, web development cost, digital marketing packages, transparent pricing, IT services pricing, RTN Global plans, affordable web solutions, custom pricing, no hidden fees, service packages',
  robots: {
    index: true,
    follow: true,
    'max-image-preview': 'large',
    'max-snippet': 200,
    'max-video-preview': -1,
  },
  alternates: {
    canonical: 'https://rtnglobal.site/pricing',
    languages: {
      'en-US': 'https://rtnglobal.site/pricing',
      'en-GB': 'https://rtnglobal.site/pricing',
      'fr': 'https://rtnglobal.site/fr/pricing',
      'de': 'https://rtnglobal.site/de/pricing',
      'es': 'https://rtnglobal.site/es/pricing',
    }
  },
  openGraph: {
    title: 'Transparent Pricing | Web Development & Digital Marketing Plans | RTN Global',
    description: 'Find the perfect pricing plan for your business needs. Clear, transparent packages with no hidden fees. Compare features and choose the right solution for your budget.',
    type: 'website',
    url: 'https://rtnglobal.site/pricing',
    siteName: 'RTN Global',
    locale: 'en_US',
    images: [
      {
        url: '/images/og/pricing-og.jpg',
        width: 1200,
        height: 630,
        alt: 'RTN Global Pricing Plans'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Web Development & Digital Marketing Pricing Plans | RTN Global',
    description: 'Transparent pricing for all your digital needs. Compare plans and find the perfect solution for your business requirements and budget.',
    images: ['/images/og/pricing-og.jpg'],
    creator: '@rtnglobalofficial',
    site: '@rtnglobalofficial'
  },
  authors: [{ name: 'RTN Global Team' }],
  publisher: 'RTN Global',
  creator: 'Muhammad Tayyab',
  category: 'Business Services',
  verification: {
    google: 'google03e42604abdd544c',
    other: {
      'wot-verification': 'd225e0e4ff8e770182408ec60e8d8c24',
      'ms-verify': '9f21e93909e646e0a2f3218d1afeb53c',
      me: ['https://rtnglobal.site', 'https://www.linkedin.com/in/rtnglobalofficial']
    }
  },
  other: {
    'og:site_name': 'RTN Global',
    'og:type': 'website',
    'twitter:label1': 'Starting Price',
    'twitter:data1': '$999',
    'twitter:label2': 'Plans',
    'twitter:data2': 'Basic, Professional, Enterprise',
    'pricing:currency': 'USD',
    'pricing:model': 'One-time & Subscription',
    'pricing:customizations': 'Available for all plans',
    'pricing:guarantee': '30-day satisfaction guarantee',
    'contact:email': 'info@rtnglobal.site',
    'contact:phone': '+1 (505) 528 0265',
    'contact:address': '1209 MOUNTAIN ROAD PLNE, STE R, ALBUQUERQUE, NM, 87110, US'
  }
} 