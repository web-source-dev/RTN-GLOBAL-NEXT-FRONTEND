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
    url: 'https://rtnglobal.com/blog/tag',
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
    creator: '@RTNGlobal',
    site: '@RTNGlobal'
  },
  alternates: {
    canonical: 'https://rtnglobal.com/blog/tag',
  },
  authors: [
    { name: 'RTN Global Team' }
  ],
  publisher: 'RTN Global',
  viewport: {
    width: 'device-width',
    initialScale: 1,
  },
  verification: {
    google: 'your-google-site-verification-code', // Replace with actual verification code
  },
} 