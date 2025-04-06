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
    canonical: 'https://rtnglobal.com/faq',
    languages: {
      'en-US': 'https://rtnglobal.com/faq',
      'en-GB': 'https://rtnglobal.com/faq',
      'fr': 'https://rtnglobal.com/fr/faq',
      'de': 'https://rtnglobal.com/de/faq',
      'es': 'https://rtnglobal.com/es/faq',
    }
  },
  openGraph: {
    title: 'RTN Global Knowledge Base | Frequently Asked Questions',
    description: 'Find quick answers to common questions about our services, development process, technical details, and support options. Get the information you need instantly.',
    type: 'website',
    url: 'https://rtnglobal.com/faq',
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
    creator: '@RTNGlobal',
    site: '@RTNGlobal'
  },
  authors: [{ name: 'RTN Global Team' }],
  publisher: 'RTN Global Ltd',
  category: 'Support',
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
    'twitter:label1': 'Categories',
    'twitter:data1': 'Services, Pricing, Process, Support, Technical',
    'twitter:label2': 'Response Time',
    'twitter:data2': '24/7 Support Available',
    'support:contact': 'https://rtnglobal.com/contact',
    'support:phone': '+1 (555) 123-4567',
    'support:email': 'info@rtnglobal.site'
  }
} 