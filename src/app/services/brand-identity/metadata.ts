import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Brand Identity Services | Logo Design & Visual Branding | RTN Global',
  description: 'Create a distinctive brand identity with RTN Global\'s comprehensive branding services. We develop memorable logos, complete visual systems, and strategic brand guidelines that resonate with your audience.',
  keywords: 'brand identity services, logo design, visual identity, brand guidelines, brand strategy, color systems, typography, brand messaging, packaging design, corporate identity, branding agency, visual branding',
  robots: {
    index: true,
    follow: true,
    'max-image-preview': 'large',
    'max-snippet': 250,
    'max-video-preview': -1,
  },
  alternates: {
    canonical: 'https://rtnglobal.co/services/brand-identity',
    languages: {
      'en-US': 'https://rtnglobal.co/services/brand-identity',
      'en-GB': 'https://rtnglobal.co/services/brand-identity',
      'fr': 'https://rtnglobal.co/fr/services/brand-identity',
      'de': 'https://rtnglobal.co/de/services/brand-identity',
      'es': 'https://rtnglobal.co/es/services/brand-identity',
    }
  },
  openGraph: {
    title: 'Brand Identity & Logo Design Services | RTN Global',
    description: 'Build a powerful brand with our expert identity design services. We create distinctive logos, comprehensive visual systems, and strategic brand guidelines that connect with your audience.',
    type: 'website',
    url: 'https://rtnglobal.co/services/brand-identity',
    siteName: 'RTN Global',
    locale: 'en_US',
    images: [
      {
        url: '/images/og/services/brand-identity.jpg',
        width: 1200,
        height: 630,
        alt: 'RTN Global Brand Identity Services'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Expert Brand Identity Services | RTN Global',
    description: 'Transform your brand with our comprehensive identity design services. From logo creation to complete visual systems, we build brands that make an impact.',
    images: ['/images/og/services/brand-identity.jpg'],
    creator: '@rtnglobalofficial',
    site: '@rtnglobalofficial'
  },
  authors: [{ name: 'RTN Global Team' }],
  publisher: 'RTN Global',
  creator: 'Muhammad Tayyab',
  category: 'Design Services',
  verification: {
    google: 'google03e42604abdd544c',
    other: {
      'wot-verification': 'd225e0e4ff8e770182408ec60e8d8c24',
      'ms-verify': '9f21e93909e646e0a2f3218d1afeb53c',
      me: ['https://rtnglobal.co', 'https://www.linkedin.com/in/rtnglobalofficial']
    }
  },
  other: {
    'og:site_name': 'RTN Global',
    'og:type': 'website',
    'twitter:label1': 'Investment',
    'twitter:data1': 'Starting at $15,000',
    'twitter:label2': 'Timeline',
    'twitter:data2': '8-12 weeks',
    'service:category': 'Brand Design',
    'service:deliverables': 'Logo, Color System, Typography, Brand Guidelines',
    'service:process': 'Research, Strategy, Design, Implementation',
    'service:industries': 'All Industries',
    'contact:email': 'info@rtnglobal.site',
    'contact:phone': '+1 505 528 6780',
    'contact:address': '1209 MOUNTAIN ROAD PLNE, STE R, ALBUQUERQUE, NM, 87110, US'
  }
} 