import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Submit Support Ticket | Technical Assistance | RTN Global',
  description: 'Submit a support ticket to get expert technical assistance from our team. Our streamlined process ensures your issues are addressed quickly and efficiently.',
  keywords: 'submit support ticket, technical assistance, customer support request, help desk ticket, IT support form, technical help request, RTN Global support, create support ticket',
  robots: {
    index: true,
    follow: true,
    'max-image-preview': 'large',
    'max-snippet': 200,
    'max-video-preview': -1,
  },
  alternates: {
    canonical: 'https://rtnglobal.site/support/submit',
    languages: {
      'en-US': 'https://rtnglobal.site/support/submit',
      'en-GB': 'https://rtnglobal.site/support/submit',
      'fr': 'https://rtnglobal.site/fr/support/submit',
      'de': 'https://rtnglobal.site/de/support/submit',
      'es': 'https://rtnglobal.site/es/support/submit',
    }
  },
  openGraph: {
    title: 'Submit a Support Ticket | Get Expert Help | RTN Global',
    description: 'Need technical assistance? Submit a support ticket and our expert team will address your issue promptly. Our customer support prioritizes quick and effective solutions.',
    type: 'website',
    url: 'https://rtnglobal.site/support/submit',
    siteName: 'RTN Global',
    locale: 'en_US',
    images: [
      {
        url: '/images/og/support-submit.jpg',
        width: 1200,
        height: 630,
        alt: 'RTN Global Support Ticket Submission'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Submit a Support Request | RTN Global',
    description: 'Get expert technical assistance by submitting a support ticket. Our team is ready to help solve your issues quickly and effectively.',
    images: ['/images/og/support-submit.jpg'],
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
    'twitter:data1': '24-48 Hours',
    'twitter:label2': 'Support Team',
    'twitter:data2': 'Global Technical Experts',
    'support:priority': 'Based on issue severity',
    'support:channels': 'Ticket system, email follow-up',
    'support:attachments': 'Screenshots and files accepted',
    'support:tracking': 'Automatic ticket ID generation',
    'contact:email': 'info@rtnglobal.site',
    'contact:phone': '+1 (505) 528 0265',
    'contact:address': '1209 MOUNTAIN ROAD PLNE, STE R, ALBUQUERQUE, NM, 87110, US'
  }
}; 