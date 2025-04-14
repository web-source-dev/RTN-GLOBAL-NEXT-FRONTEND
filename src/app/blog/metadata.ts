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
    url: 'https://rtnglobal.com/blog',
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
    creator: '@RTNGlobal',
    site: '@RTNGlobal'
  },
  alternates: {
    canonical: 'https://rtnglobal.com/blog',
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