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
    canonical: 'https://rtnglobal.com/support/submit',
    languages: {
      'en-US': 'https://rtnglobal.com/support/submit',
      'en-GB': 'https://rtnglobal.com/support/submit',
      'fr': 'https://rtnglobal.com/fr/support/submit',
      'de': 'https://rtnglobal.com/de/support/submit',
      'es': 'https://rtnglobal.com/es/support/submit',
    }
  },
  openGraph: {
    title: 'Submit a Support Ticket | Get Expert Help | RTN Global',
    description: 'Need technical assistance? Submit a support ticket and our expert team will address your issue promptly. Our customer support prioritizes quick and effective solutions.',
    type: 'website',
    url: 'https://rtnglobal.com/support/submit',
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
    'twitter:data1': '24-48 Hours',
    'twitter:label2': 'Support Team',
    'twitter:data2': 'Global Technical Experts',
    'support:priority': 'Based on issue severity',
    'support:channels': 'Ticket system, email follow-up',
    'support:attachments': 'Screenshots and files accepted',
    'support:tracking': 'Automatic ticket ID generation'
  }
}; 