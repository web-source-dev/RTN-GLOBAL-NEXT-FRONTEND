import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Free Consultation | Get Expert Project Advice | RTN Global',
  description: 'Request a no-obligation free consultation with RTN Global experts. We\'ll analyze your requirements, recommend optimal solutions, and provide a customized roadmap for your digital success.',
  keywords: 'free consultation, business consultation, expert advice, project planning, digital solutions, web development consultation, technical assessment, digital strategy, IT roadmap, technology consultation',
  robots: {
    index: true,
    follow: true,
    'max-image-preview': 'large',
    'max-snippet': 200,
    'max-video-preview': -1,
  },
  alternates: {
    canonical: 'https://rtnglobal.co/contact/free-consultation',
    languages: {
      'en-US': 'https://rtnglobal.co/contact/free-consultation',
      'en-GB': 'https://rtnglobal.co/contact/free-consultation',
      'fr': 'https://rtnglobal.co/fr/contact/free-consultation',
      'de': 'https://rtnglobal.co/de/contact/free-consultation',
      'es': 'https://rtnglobal.co/es/contact/free-consultation',
    }
  },
  openGraph: {
    title: 'Free Consultation with RTN Global Digital Experts',
    description: 'Get expert guidance on your digital project with our free, no-obligation consultation service. Receive tailored solutions and clear strategic direction.',
    type: 'website',
    url: 'https://rtnglobal.co/contact/free-consultation',
    siteName: 'RTN Global',
    locale: 'en_US',
    images: [
      {
        url: '/images/og/free-consultation.jpg',
        width: 1200,
        height: 630,
        alt: 'RTN Global Free Consultation Service'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Get a Free Digital Project Consultation | RTN Global',
    description: 'Schedule a complimentary consultation with our technical experts. Gain valuable insights, tailored recommendations, and a clear path forward for your project.',
    images: ['/images/og/free-consultation.jpg'],
    creator: '@rtnglobalofficial',
    site: '@rtnglobalofficial'
  },
  authors: [{ name: 'Muhammad Tayyab' }],
  publisher: 'RTN Global',
  category: 'Business Services',
  other: {
    'og:site_name': 'RTN Global',
    'og:type': 'website',
    'twitter:label1': 'Response Time',
    'twitter:data1': 'Within 24 Hours',
    'twitter:label2': 'Service Type',
    'twitter:data2': 'Complimentary Consultation',
    'contact:email': 'info@rtnglobal.site',
    'contact:phone': '+1 505 528 6780',
    'contact:address': '1209 MOUNTAIN ROAD PLNE, STE R, ALBUQUERQUE, NM, 87110, US',
  },
  verification: {
    google: 'google03e42604abdd544c',
    other: {
      'wot-verification': 'd225e0e4ff8e770182408ec60e8d8c24',
      'ms-verify': '9f21e93909e646e0a2f3218d1afeb53c',
    }
  }
} 