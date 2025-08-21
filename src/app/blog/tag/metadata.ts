import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Blog Tags | RTN Global - Browse by Topic',
  description: 'Browse articles by topic to find insights on web development, digital marketing, SEO, design, and more.',
  keywords: 'blog tags, categories, topics, web development, digital marketing, RTN Global, blog archive, article topics',
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
    title: 'Blog Tags | RTN Global - Browse by Topic',
    description: 'Browse articles by topic to find insights on web development, digital marketing, SEO, design, and more.',
    type: 'website',
    url: 'https://rtnglobal.site/blog/tag',
    siteName: 'RTN Global Blog',
    images: [
      {
        url: '/images/og/blog-tags-og.jpg',
        width: 1200,
        height: 630,
        alt: 'RTN Global Blog Tags'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Blog Tags | RTN Global - Browse by Topic',
    description: 'Browse articles by topic to find insights on web development, digital marketing, SEO, design, and more.',
    images: ['/images/og/blog-tags-og.jpg'],
    creator: '@rtnglobalofficial',
    site: '@rtnglobalofficial'
  },
  alternates: {
    canonical: 'https://rtnglobal.site/blog/tag',
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