import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Blog | RTN Global - Web Development & Digital Marketing Insights',
  description: 'Explore our latest articles, insights, and tips on web development, SEO, content marketing, social media strategies, and digital marketing trends.',
  keywords: 'web development blog, digital marketing articles, SEO tips, content strategy, social media marketing, RTN Global blog',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    title: 'Blog | RTN Global - Web Development & Digital Marketing Insights',
    description: 'Expert articles and insights on web development and digital marketing to help grow your business online.',
    type: 'website',
    url: 'https://rtnglobal.site/blog',
    siteName: 'RTN Global Blog',
    images: [
      {
        url: '/images/og/blog-og.jpg',
        width: 1200,
        height: 630,
        alt: 'RTN Global Blog'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Blog | RTN Global - Web Development & Digital Marketing Insights',
    description: 'Expert articles and insights on web development and digital marketing to help grow your business online.',
    images: ['/images/og/blog-og.jpg'],
    creator: '@rtnglobalofficial',
    site: '@rtnglobalofficial'
  },
  alternates: {
    canonical: 'https://rtnglobal.site/blog',
  },
  authors: [
    { name: 'Muhammad Tayyab' }
  ],
  publisher: 'RTN Global',
  viewport: {
    width: 'device-width',
    initialScale: 1,
  },
  verification: {
    google: 'google03e42604abdd544c',
    other: {
      'wot-verification': 'd225e0e4ff8e770182408ec60e8d8c24',
      'ms-verify': '9f21e93909e646e0a2f3218d1afeb53c',
    }
  },
  other: {
    'contact:email': 'info@rtnglobal.site',
    'contact:phone': '+1 (505) 528 0265',
    'contact:address': '1209 MOUNTAIN ROAD PLNE, STE R, ALBUQUERQUE, NM, 87110, US',
  }
} 