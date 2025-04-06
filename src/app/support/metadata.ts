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
    canonical: 'https://rtnglobal.com/support',
    languages: {
      'en-US': 'https://rtnglobal.com/support',
      'en-GB': 'https://rtnglobal.com/support',
      'fr': 'https://rtnglobal.com/fr/support',
      'de': 'https://rtnglobal.com/de/support',
      'es': 'https://rtnglobal.com/es/support',
    }
  },
  openGraph: {
    title: 'Technical Support & Help Center | RTN Global',
    description: 'Get expert assistance for your technical issues. Our dedicated support team is ready to help you resolve problems and answer questions.',
    type: 'website',
    url: 'https://rtnglobal.com/support',
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
    'twitter:label1': 'Response Time',
    'twitter:data1': 'Within 24 Hours',
    'twitter:label2': 'Support Hours',
    'twitter:data2': 'Monday-Friday, 9AM-6PM',
    'support:email': 'support@rtnglobal.site',
    'support:phone': '+1 (555) 123-4567',
    'support:channels': 'Ticket System, Email, Phone',
    'support:availability': '24/7 for critical issues'
  }
} 