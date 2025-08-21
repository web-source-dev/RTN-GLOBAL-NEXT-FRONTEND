import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Digital Services | Web Development & Marketing Solutions | RTN Global',
  description: 'Explore RTN Global\'s comprehensive range of digital services including web development, SEO, content marketing, social media management, PPC advertising, and custom application development.',
  keywords: 'digital services, web development services, SEO optimization, content marketing, social media marketing, PPC management, email marketing, mobile app development, brand identity services, digital strategy, marketing solutions',
  robots: {
    index: true,
    follow: true,
    'max-image-preview': 'large',
    'max-snippet': 200,
    'max-video-preview': -1,
  },
  alternates: {
    canonical: 'https://rtnglobal.site/services',
    languages: {
      'en-US': 'https://rtnglobal.site/services',
      'en-GB': 'https://rtnglobal.site/services',
      'fr': 'https://rtnglobal.site/fr/services',
      'de': 'https://rtnglobal.site/de/services',
      'es': 'https://rtnglobal.site/es/services',
    }
  },
  openGraph: {
    title: 'Digital Services | Web Development & Marketing Solutions | RTN Global',
    description: 'Discover our comprehensive range of digital services to transform your online presence. From web development to digital marketing, we provide end-to-end solutions for businesses worldwide.',
    type: 'website',
    url: 'https://rtnglobal.site/services',
    siteName: 'RTN Global',
    locale: 'en_US',
    images: [
      {
        url: '/images/og/services-og.jpg',
        width: 1200,
        height: 630,
        alt: 'RTN Global Digital Services'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Digital Services | Web & Marketing Solutions | RTN Global',
    description: 'Explore our comprehensive range of digital services. From web development to marketing solutions, we provide all the tools you need to succeed online.',
    images: ['/images/og/services-og.jpg'],
    creator: '@rtnglobalofficial',
    site: '@rtnglobalofficial'
  },
  authors: [{ name: 'RTN Global Team' }],
  publisher: 'RTN Global',
  creator: 'Muhammad Tayyab',
  category: 'Digital Services',
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
    'twitter:label1': 'Service Categories',
    'twitter:data1': 'Web, Marketing, Design, Strategy',
    'twitter:label2': 'Client Focus',
    'twitter:data2': 'Businesses of All Sizes',
    'services:count': '15+',
    'services:categories': 'Web Development, Digital Marketing, Design, Strategy',
    'services:customization': 'Tailored to business needs',
    'services:international': 'Available worldwide',
    'contact:email': 'info@rtnglobal.site',
    'contact:phone': '+1 (505) 528 0265',
    'contact:address': '1209 MOUNTAIN ROAD PLNE, STE R, ALBUQUERQUE, NM, 87110, US'
  }
} 