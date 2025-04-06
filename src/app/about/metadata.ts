import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About RTN Global | Award-Winning Web Development & Digital Marketing Agency',
  description: 'Discover RTN Global\'s story, mission, values, and expert team. Since 2017, we\'ve delivered innovative web development and digital marketing solutions to 200+ clients worldwide with a 98% satisfaction rate.',
  keywords: [
    'about RTN Global', 
    'web development agency', 
    'digital marketing experts', 
    'RTN Global mission', 
    'award-winning agency', 
    'web design company', 
    'tech innovation agency', 
    'digital transformation services',
    'professional web developers',
    'business growth solutions'
  ],
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    }
  },
  openGraph: {
    title: 'About RTN Global | Web Development & Digital Marketing Experts',
    description: 'Meet the passionate team behind RTN Global. With 50+ experts, we\'ve delivered 200+ successful projects since 2017, helping businesses transform digitally with innovative web development and marketing solutions.',
    type: 'website',
    url: 'https://rtnglobal.com/about',
    siteName: 'RTN Global',
    locale: 'en_US',
    images: [
      {
        url: '/images/og/about-og.jpg',
        width: 1200,
        height: 630,
        alt: 'RTN Global Team of Digital Experts'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About RTN Global | Web Development & Digital Marketing Experts',
    description: 'Meet the passionate team behind RTN Global. With 50+ experts, we\'ve delivered 200+ successful projects since 2017, helping businesses transform digitally.',
    creator: '@rtnglobal',
    site: '@rtnglobal',
    images: ['/images/og/about-og.jpg']
  },
  alternates: {
    canonical: 'https://rtnglobal.com/about',
    languages: {
      'en-US': 'https://rtnglobal.com/about',
    }
  },
  authors: [
    { name: 'RTN Global Team' }
  ],
  category: 'Technology',
  verification: {
    google: 'google03e42604abdd544c', // Replace with actual verification code
  },
  other: {
    'facebook-domain-verification': 'facebook-domain-verification-code', // Replace with actual verification code
  }
} 