import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Support Ticket Status | Track Your Request | RTN Global',
  description: 'Check the status of your support ticket, view request details, and communicate with our technical team through our secure ticket tracking system.',
  keywords: 'support ticket status, ticket tracking, support request status, help desk tracker, customer support status, RTN Global support, ticket progress, technical support tracking',
  robots: {
    index: true,
    follow: true,
    'max-image-preview': 'large',
    'max-snippet': 200,
    'max-video-preview': -1,
  },
  alternates: {
    canonical: 'https://rtnglobal.co/support/ticket-status',
    languages: {
      'en-US': 'https://rtnglobal.co/support/ticket-status',
      'en-GB': 'https://rtnglobal.co/support/ticket-status',
      'fr': 'https://rtnglobal.co/fr/support/ticket-status',
      'de': 'https://rtnglobal.co/de/support/ticket-status',
      'es': 'https://rtnglobal.co/es/support/ticket-status',
    }
  },
  openGraph: {
    title: 'Track Your Support Ticket Status | RTN Global',
    description: 'Monitor the progress of your support request and stay updated on the resolution process. Our ticket tracking system keeps you informed every step of the way.',
    type: 'website',
    url: 'https://rtnglobal.co/support/ticket-status',
    siteName: 'RTN Global',
    locale: 'en_US',
    images: [
      {
        url: '/images/og/support-ticket-status.jpg',
        width: 1200,
        height: 630,
        alt: 'RTN Global Support Ticket Status Tracker'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Track Your Support Request Status | RTN Global',
    description: 'Check your support ticket status and communicate with our technical team. Stay informed on the progress of your support request.',
    images: ['/images/og/support-ticket-status.jpg'],
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
      me: ['https://rtnglobal.co', 'https://www.linkedin.com/in/rtnglobalofficial']
    }
  },
  other: {
    'og:site_name': 'RTN Global',
    'og:type': 'website',
    'twitter:label1': 'System',
    'twitter:data1': 'Secure Ticket Tracking',
    'twitter:label2': 'Updates',
    'twitter:data2': 'Real-time Status',
    'support:ticket': 'Status Tracking',
    'support:updates': 'Real-time progress',
    'support:privacy': 'Secure access system',
    'support:notifications': 'Email updates available',
    'contact:email': 'info@rtnglobal.site',
    'contact:phone': '+1 505 528 6780',
    'contact:address': '1209 MOUNTAIN ROAD PLNE, STE R, ALBUQUERQUE, NM, 87110, US'
  }
}; 