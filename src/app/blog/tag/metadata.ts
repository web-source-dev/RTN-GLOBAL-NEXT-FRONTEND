import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Blog Tags | RTN Global',
  description: 'Browse articles by topic to find insights on web development, digital marketing, SEO, design, and more.',
  keywords: 'blog tags, categories, topics, web development, digital marketing, RTN Global',
  openGraph: {
    title: 'Blog Tags | RTN Global',
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
    title: 'Blog Tags | RTN Global',
    description: 'Browse articles by topic to find insights on web development, digital marketing, SEO, design, and more.',
    images: ['/images/og/blog-tags-og.jpg']
  },
  alternates: {
    canonical: 'https://rtnglobal.com/blog/tag',
  }
} 