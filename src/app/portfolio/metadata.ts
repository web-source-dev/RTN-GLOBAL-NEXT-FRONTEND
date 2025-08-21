import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Our Portfolio | Client Projects & Success Stories | RTN Global',
  description: 'Explore RTN Global\'s portfolio of successful client projects across industries. View our case studies, design work, and technical implementation showcases.',
  keywords: 'portfolio, client projects, web development portfolio, digital solutions, case studies, RTN Global projects, website showcases, successful implementations, digital portfolio, technical solutions',
  robots: {
    index: true,
    follow: true,
    'max-image-preview': 'large',
    'max-snippet': 200,
    'max-video-preview': -1,
  },
  alternates: {
    canonical: 'https://rtnglobal.site/portfolio',
    languages: {
      'en-US': 'https://rtnglobal.site/portfolio',
      'en-GB': 'https://rtnglobal.site/portfolio',
      'fr': 'https://rtnglobal.site/fr/portfolio',
      'de': 'https://rtnglobal.site/de/portfolio',
      'es': 'https://rtnglobal.site/es/portfolio',
    }
  },
  openGraph: {
    title: 'RTN Global Portfolio | Client Success Stories & Projects',
    description: 'Browse our collection of completed projects, featuring responsive designs, custom solutions, and successful digital transformations for clients worldwide.',
    type: 'website',
    url: 'https://rtnglobal.site/portfolio',
    siteName: 'RTN Global',
    locale: 'en_US',
    images: [
      {
        url: '/images/og/portfolio-og.jpg',
        width: 1200,
        height: 630,
        alt: 'RTN Global Portfolio of Projects'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'RTN Global Portfolio | Client Projects & Success Stories',
    description: 'Discover our showcase of successful digital projects. See how we\'ve helped businesses transform through technology and strategic implementation.',
    images: ['/images/og/portfolio-og.jpg'],
    creator: '@rtnglobalofficial',
    site: '@rtnglobalofficial'
  },
  authors: [{ name: 'RTN Global Team' }],
  publisher: 'RTN Global',
  creator: 'Muhammad Tayyab',
  category: 'Portfolio',
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
    'twitter:label1': 'Project Categories',
    'twitter:data1': 'Web Development, Digital Marketing, UI/UX Design',
    'twitter:label2': 'Client Sectors',
    'twitter:data2': 'Multiple Industries Worldwide',
    'portfolio:itemCount': 'Multiple Projects',
    'portfolio:categories': 'Web, Mobile, Design, Marketing, E-commerce',
    'contact:email': 'info@rtnglobal.site',
    'contact:phone': '+1 (505) 528 0265',
    'contact:address': '1209 MOUNTAIN ROAD PLNE, STE R, ALBUQUERQUE, NM, 87110, US'
  }
} 