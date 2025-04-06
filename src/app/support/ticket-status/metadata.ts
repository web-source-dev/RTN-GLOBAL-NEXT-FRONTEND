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
    canonical: 'https://rtnglobal.com/support/ticket-status',
    languages: {
      'en-US': 'https://rtnglobal.com/support/ticket-status',
      'en-GB': 'https://rtnglobal.com/support/ticket-status',
      'fr': 'https://rtnglobal.com/fr/support/ticket-status',
      'de': 'https://rtnglobal.com/de/support/ticket-status',
      'es': 'https://rtnglobal.com/es/support/ticket-status',
    }
  },
  openGraph: {
    title: 'Track Your Support Ticket Status | RTN Global',
    description: 'Monitor the progress of your support request and stay updated on the resolution process. Our ticket tracking system keeps you informed every step of the way.',
    type: 'website',
    url: 'https://rtnglobal.com/support/ticket-status',
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
    creator: '@RTNGlobal',
    site: '@RTNGlobal'
  },
  authors: [{ name: 'RTN Global Team' }],
  publisher: 'RTN Global Ltd',
  category: 'Customer Support',
  verification: {
    google: 'verification_token',
    yandex: 'verification_token',
    other: {
      me: ['https://rtnglobal.com', 'https://www.linkedin.com/company/rtnglobal']
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
    'support:notifications': 'Email updates available'
  }
}; 