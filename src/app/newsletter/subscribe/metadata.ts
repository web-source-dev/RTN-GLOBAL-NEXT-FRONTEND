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
    canonical: 'https://rtnglobal.com/newsletter/subscribe',
    languages: {
      'en-US': 'https://rtnglobal.com/newsletter/subscribe',
      'en-GB': 'https://rtnglobal.com/newsletter/subscribe',
      'fr': 'https://rtnglobal.com/fr/newsletter/subscribe',
      'de': 'https://rtnglobal.com/de/newsletter/subscribe',
      'es': 'https://rtnglobal.com/es/newsletter/subscribe',
    }
  },
  openGraph: {
    title: 'Join RTN Global\'s Newsletter | Expert Digital Insights & Updates',
    description: 'Subscribe to receive weekly insights, industry trends, expert advice, and exclusive content to help your business thrive in the digital landscape.',
    type: 'website',
    url: 'https://rtnglobal.com/newsletter/subscribe',
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
    creator: '@RTNGlobal',
    site: '@RTNGlobal'
  },
  authors: [{ name: 'RTN Global Team' }],
  publisher: 'RTN Global Ltd',
  category: 'Newsletter',
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
    'twitter:label1': 'Frequency',
    'twitter:data1': 'Weekly Updates',
    'twitter:label2': 'Content',
    'twitter:data2': 'Industry Insights, Tips & Exclusive Offers',
    'newsletter:frequency': 'Weekly',
    'newsletter:topics': 'Digital Trends, Web Development, Marketing, Technology',
    'newsletter:unsubscribe': 'Easy one-click unsubscribe anytime'
  }
} 