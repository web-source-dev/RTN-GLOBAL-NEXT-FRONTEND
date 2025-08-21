import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Subscribe to Our Newsletter | Industry Insights & Updates | RTN Global',
  description: 'Stay ahead with RTN Global\'s newsletter - delivering the latest digital trends, industry insights, expert tips, and exclusive content directly to your inbox.',
  keywords: 'newsletter subscription, digital insights, industry trends, tech newsletter, RTN Global updates, weekly insights, email subscription, digital marketing newsletter, web development news, exclusive content, tech insights',
  robots: {
    index: true,
    follow: true,
    'max-image-preview': 'large',
    'max-snippet': 200,
    'max-video-preview': -1,
  },
  alternates: {
    canonical: 'https://rtnglobal.site/newsletter/subscribe',
    languages: {
      'en-US': 'https://rtnglobal.site/newsletter/subscribe',
      'en-GB': 'https://rtnglobal.site/newsletter/subscribe',
      'fr': 'https://rtnglobal.site/fr/newsletter/subscribe',
      'de': 'https://rtnglobal.site/de/newsletter/subscribe',
      'es': 'https://rtnglobal.site/es/newsletter/subscribe',
    }
  },
  openGraph: {
    title: 'Join RTN Global\'s Newsletter | Expert Digital Insights & Updates',
    description: 'Subscribe to receive weekly insights, industry trends, expert advice, and exclusive content to help your business thrive in the digital landscape.',
    type: 'website',
    url: 'https://rtnglobal.site/newsletter/subscribe',
    siteName: 'RTN Global',
    locale: 'en_US',
    images: [
      {
        url: '/images/og/newsletter-subscribe.jpg',
        width: 1200,
        height: 630,
        alt: 'RTN Global Newsletter Subscription'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Subscribe to RTN Global\'s Weekly Insights & Updates',
    description: 'Get valuable digital insights, industry news, and exclusive content delivered directly to your inbox. Stay informed with our expert newsletter.',
    images: ['/images/og/newsletter-subscribe.jpg'],
    creator: '@rtnglobalofficial',
    site: '@rtnglobalofficial'
  },
  authors: [{ name: 'RTN Global Team' }],
  publisher: 'RTN Global',
  creator: 'Muhammad Tayyab',
  category: 'Newsletter',
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
    'twitter:label1': 'Frequency',
    'twitter:data1': 'Weekly Updates',
    'twitter:label2': 'Content',
    'twitter:data2': 'Industry Insights, Tips & Exclusive Offers',
    'newsletter:frequency': 'Weekly',
    'newsletter:topics': 'Digital Trends, Web Development, Marketing, Technology',
    'newsletter:unsubscribe': 'Easy one-click unsubscribe anytime',
    'contact:email': 'info@rtnglobal.site',
    'contact:phone': '+1 (505) 528 0265',
    'contact:address': '1209 MOUNTAIN ROAD PLNE, STE R, ALBUQUERQUE, NM, 87110, US'
  }
} 