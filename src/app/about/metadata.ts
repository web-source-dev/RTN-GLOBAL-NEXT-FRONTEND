import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About RTN Global | Award-Winning Web Development & Digital Marketing Agency',
  description: 'Discover RTN Global\'s story, mission, values, and expert team. Since 2017, we\'ve delivered innovative web development and digital marketing solutions to 200+ clients worldwide with a 98% satisfaction rate.',
  keywords: [
    'about RTN Global', 
    'web development agency', 
    'digital marketing experts', 
    'RTN Global mission', 
    'award-winning agency', 
    'web design company', 
    'tech innovation agency', 
    'digital transformation services',
    'professional web developers',
    'business growth solutions'
  ],
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    }
  },
  openGraph: {
    title: 'About RTN Global | Web Development & Digital Marketing Experts',
    description: 'Meet the passionate team behind RTN Global. With 50+ experts, we\'ve delivered 200+ successful projects since 2017, helping businesses transform digitally with innovative web development and marketing solutions.',
    type: 'website',
    url: 'https://rtnglobal.co/about',
    siteName: 'RTN Global',
    locale: 'en_US',
    images: [
      {
        url: '/images/og/about-og.jpg',
        width: 1200,
        height: 630,
        alt: 'RTN Global Team of Digital Experts'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About RTN Global | Web Development & Digital Marketing Experts',
    description: 'Meet the passionate team behind RTN Global. With 50+ experts, we\'ve delivered 200+ successful projects since 2017, helping businesses transform digitally.',
    creator: '@rtnglobalofficial',
    site: '@rtnglobalofficial',
    images: ['/images/og/about-og.jpg']
  },
  alternates: {
    canonical: 'https://rtnglobal.co/about',
    languages: {
      'en-US': 'https://rtnglobal.co/about',
    }
  },
  authors: [
    { name: 'Muhammad Tayyab' }
  ],
  category: 'Technology',
  verification: {
    google: 'google03e42604abdd544c',
    other: {
      'wot-verification': 'd225e0e4ff8e770182408ec60e8d8c24',
      'ms-verify': '9f21e93909e646e0a2f3218d1afeb53c',
    }
  },
  other: {
    'contact:email': 'info@rtnglobal.site',
    'contact:phone': '+1 505 528 6780', 
    'contact:address': '1209 MOUNTAIN ROAD PLNE, STE R, ALBUQUERQUE, NM, 87110, US',
  }
} 