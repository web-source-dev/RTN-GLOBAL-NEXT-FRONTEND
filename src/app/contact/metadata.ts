import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact Us | RTN Global - Web Development & Digital Marketing Agency',
  description: 'Get in touch with RTN Global experts for all your web development, digital marketing, and IT consulting needs. Schedule a free consultation or discuss your project requirements.',
  keywords: 'contact RTN Global, web development contact, digital marketing agency, get in touch, free consultation, IT consulting, project inquiry, technical support, business hours, agency location',
  robots: {
    index: true,
    follow: true,
    'max-image-preview': 'large',
    'max-snippet': 200,
    'max-video-preview': -1,
  },
  alternates: {
    canonical: 'https://rtnglobal.site/contact',
    languages: {
      'en-US': 'https://rtnglobal.site/contact',
      'en-GB': 'https://rtnglobal.site/contact',
      'fr': 'https://rtnglobal.site/fr/contact',
      'de': 'https://rtnglobal.site/de/contact',
      'es': 'https://rtnglobal.site/es/contact',
    }
  },
  openGraph: {
    title: 'Contact Us | RTN Global - Web Development & Digital Marketing Agency',
    description: 'Get in touch with the RTN Global team for your web development, digital marketing, and IT consulting needs. We respond to all inquiries within 24 hours.',
    type: 'website',
    url: 'https://rtnglobal.site/contact',
    siteName: 'RTN Global',
    locale: 'en_US',
    images: [
      {
        url: '/images/og/contact-og.jpg',
        width: 1200,
        height: 630,
        alt: 'Contact RTN Global'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact RTN Global | Web Development & Digital Marketing Experts',
    description: 'Reach out to our team of digital experts. We offer web development, digital marketing, and IT consulting services tailored to your business needs.',
    images: ['/images/og/contact-og.jpg'],
    creator: '@rtnglobalofficial',
    site: '@rtnglobalofficial'
  },
  authors: [{ name: 'Muhammad Tayyab' }],
  publisher: 'RTN Global',
  category: 'Contact',
  other: {
    'og:site_name': 'RTN Global',
    'og:type': 'website',
    'twitter:label1': 'Response Time',
    'twitter:data1': 'Within 24 Hours',
    'twitter:label2': 'Business Hours',
    'twitter:data2': 'Monday-Friday, 9AM-5PM EST',
    'contact:email': 'info@rtnglobal.site',
    'contact:phone': '+1 (505) 528 0265',
    'contact:address': '1209 MOUNTAIN ROAD PLNE, STE R, ALBUQUERQUE, NM, 87110, US',
  },
  verification: {
    google: 'google03e42604abdd544c',
    other: {
      'wot-verification': 'd225e0e4ff8e770182408ec60e8d8c24',
      'ms-verify': '9f21e93909e646e0a2f3218d1afeb53c',
      'me': ['https://rtnglobal.site', 'https://www.linkedin.com/in/rtnglobalofficial/']
    }
  }
} 