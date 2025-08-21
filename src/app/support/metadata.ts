import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Technical Support & Help Center | Customer Assistance | RTN Global',
  description: 'Get expert technical support and assistance from RTN Global\'s help center. Submit support tickets, check request status, and find solutions to common issues.',
  keywords: 'technical support, help center, customer support, IT assistance, support tickets, help desk, customer service, RTN Global support, troubleshooting, technical help',
  robots: {
    index: true,
    follow: true,
    'max-image-preview': 'large',
    'max-snippet': 200,
    'max-video-preview': -1,
  },
  alternates: {
    canonical: 'https://rtnglobal.site/support',
    languages: {
      'en-US': 'https://rtnglobal.site/support',
      'en-GB': 'https://rtnglobal.site/support',
      'fr': 'https://rtnglobal.site/fr/support',
      'de': 'https://rtnglobal.site/de/support',
      'es': 'https://rtnglobal.site/es/support',
    }
  },
  openGraph: {
    title: 'Technical Support & Help Center | RTN Global',
    description: 'Get expert assistance for your technical issues. Our dedicated support team is ready to help you resolve problems and answer questions.',
    type: 'website',
    url: 'https://rtnglobal.site/support',
    siteName: 'RTN Global',
    locale: 'en_US',
    images: [
      {
        url: '/images/og/support-og.jpg',
        width: 1200,
        height: 630,
        alt: 'RTN Global Support Center'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Technical Support & Customer Assistance | RTN Global',
    description: 'Access our support center for expert technical assistance. Submit tickets, check request status, and get the help you need.',
    images: ['/images/og/support-og.jpg'],
    creator: '@rtnglobalofficial',
    site: '@rtnglobalofficial'
  },
  authors: [{ name: 'RTN Global Team' }],
  publisher: 'RTN Global',
  creator: 'Muhammad Tayyab',
  category: 'Customer Support',
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
    'twitter:label1': 'Response Time',
    'twitter:data1': 'Within 24 Hours',
    'twitter:label2': 'Support Hours',
    'twitter:data2': 'Monday-Friday, 9AM-6PM',
    'support:email': 'info@rtnglobal.site',
    'support:phone': '+1 (505) 528 0265',
    'support:channels': 'Ticket System, Email, Phone',
    'support:availability': '24/7 for critical issues',
    'contact:address': '1209 MOUNTAIN ROAD PLNE, STE R, ALBUQUERQUE, NM, 87110, US'
  }
} 