import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Frequently Asked Questions | Knowledge Base | RTN Global',
  description: 'Find answers to common questions about our services, development process, pricing, technical details, and support options. Our comprehensive FAQ covers everything you need to know.',
  keywords: 'RTN Global FAQ, frequently asked questions, web development FAQ, digital services help, technical support, pricing questions, development process, service information, customer support, knowledge base',
  robots: {
    index: true,
    follow: true,
    'max-image-preview': 'large',
    'max-snippet': 200,
    'max-video-preview': -1,
  },
  alternates: {
    canonical: 'https://rtnglobal.co/faq',
    languages: {
      'en-US': 'https://rtnglobal.co/faq',
      'en-GB': 'https://rtnglobal.co/faq',
      'fr': 'https://rtnglobal.co/fr/faq',
      'de': 'https://rtnglobal.co/de/faq',
      'es': 'https://rtnglobal.co/es/faq',
    }
  },
  openGraph: {
    title: 'RTN Global Knowledge Base | Frequently Asked Questions',
    description: 'Find quick answers to common questions about our services, development process, technical details, and support options. Get the information you need instantly.',
    type: 'website',
    url: 'https://rtnglobal.co/faq',
    siteName: 'RTN Global',
    locale: 'en_US',
    images: [
      {
        url: '/images/og/faq-og.jpg',
        width: 1200,
        height: 630,
        alt: 'RTN Global FAQ & Knowledge Base'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Frequently Asked Questions | RTN Global',
    description: 'Get quick answers to common questions about our services, development process, and support options. Browse our comprehensive knowledge base.',
    images: ['/images/og/faq-og.jpg'],
    creator: '@rtnglobalofficial',
    site: '@rtnglobalofficial'
  },
  authors: [{ name: 'Muhammad Tayyab' }],
  publisher: 'RTN Global',
  category: 'Support',
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
    'twitter:label1': 'Categories',
    'twitter:data1': 'Services, Pricing, Process, Support, Technical',
    'twitter:label2': 'Response Time',
    'twitter:data2': '24/7 Support Available',
    'support:contact': 'https://rtnglobal.co/contact',
    'support:phone': '+1 505 528 6780',
    'support:email': 'info@rtnglobal.site',
    'contact:email': 'info@rtnglobal.site',
    'contact:phone': '+1 505 528 6780',
    'contact:address': '1209 MOUNTAIN ROAD PLNE, STE R, ALBUQUERQUE, NM, 87110, US',
  }
} 