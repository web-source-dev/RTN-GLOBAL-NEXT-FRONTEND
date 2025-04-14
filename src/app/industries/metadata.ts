import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Industry-Specific Solutions | RTN Global',
  description: 'Discover specialized digital solutions tailored for your industry. Our industry-specific expertise delivers targeted strategies that address unique sectoral challenges and opportunities.',
  keywords: 'industry solutions, sector-specific services, vertical markets, specialized technology, digital transformation, business technology, RTN Global, industry expertise, targeted solutions, sector solutions',
  robots: {
    index: true,
    follow: true,
    'max-image-preview': 'large',
    'max-snippet': 200,
    'max-video-preview': -1,
  },
  alternates: {
    canonical: 'https://rtnglobal.co/industries',
    languages: {
      'en-US': 'https://rtnglobal.co/industries',
      'en-GB': 'https://rtnglobal.co/industries',
      'fr': 'https://rtnglobal.co/fr/industries',
      'de': 'https://rtnglobal.co/de/industries',
      'es': 'https://rtnglobal.co/es/industries',
    }
  },
  openGraph: {
    title: 'Industry-Specific Digital Solutions | RTN Global',
    description: 'Explore our specialized expertise across multiple industries. Customized technology solutions that address the unique challenges in your sector.',
    type: 'website',
    url: 'https://rtnglobal.co/industries',
    siteName: 'RTN Global',
    locale: 'en_US',
    images: [
      {
        url: '/images/og/industries-og.jpg',
        width: 1200,
        height: 630,
        alt: 'RTN Global Industry Solutions'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Specialized Industry Solutions | RTN Global',
    description: 'Digital transformation strategies tailored to your industry-specific challenges. Explore our expertise across multiple sectors.',
    images: ['/images/og/industries-og.jpg'],
    creator: '@rtnglobalofficial',
    site: '@rtnglobalofficial'
  },
  authors: [{ name: 'Muhammad Tayyab' }],
  publisher: 'RTN Global',
  category: 'Business Services',
  verification: {
    google: 'google03e42604abdd544c',
    other: {
      'wot-verification': 'd225e0e4ff8e770182408ec60e8d8c24',
      'ms-verify': '9f21e93909e646e0a2f3218d1afeb53c',
      'me': ['https://rtnglobal.co', 'https://www.linkedin.com/in/rtnglobalofficial/']
    }
  },
  other: {
    'og:site_name': 'RTN Global',
    'og:type': 'website',
    'twitter:label1': 'Industries Served',
    'twitter:data1': 'Multiple Sectors',
    'twitter:label2': 'Solutions',
    'twitter:data2': 'Custom Technology & Strategy',
    'contact:email': 'info@rtnglobal.site',
    'contact:phone': '+1 505 528 6780',
    'contact:address': '1209 MOUNTAIN ROAD PLNE, STE R, ALBUQUERQUE, NM, 87110, US',
  }
} 