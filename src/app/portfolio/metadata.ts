import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Our Portfolio | Client Projects & Success Stories | RTN Global',
  description: 'Explore RTN Global\'s portfolio of successful client projects across industries. View our case studies, design work, and technical implementation showcases.',
  keywords: 'portfolio, client projects, web development portfolio, digital solutions, case studies, RTN Global projects, website showcases, successful implementations, digital portfolio, technical solutions',
  robots: {
    index: true,
    follow: true,
    'max-image-preview': 'large',
    'max-snippet': 200,
    'max-video-preview': -1,
  },
  alternates: {
    canonical: 'https://rtnglobal.com/portfolio',
    languages: {
      'en-US': 'https://rtnglobal.com/portfolio',
      'en-GB': 'https://rtnglobal.com/portfolio',
      'fr': 'https://rtnglobal.com/fr/portfolio',
      'de': 'https://rtnglobal.com/de/portfolio',
      'es': 'https://rtnglobal.com/es/portfolio',
    }
  },
  openGraph: {
    title: 'RTN Global Portfolio | Client Success Stories & Projects',
    description: 'Browse our collection of completed projects, featuring responsive designs, custom solutions, and successful digital transformations for clients worldwide.',
    type: 'website',
    url: 'https://rtnglobal.com/portfolio',
    siteName: 'RTN Global',
    locale: 'en_US',
    images: [
      {
        url: '/images/og/portfolio-og.jpg',
        width: 1200,
        height: 630,
        alt: 'RTN Global Portfolio of Projects'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'RTN Global Portfolio | Client Projects & Success Stories',
    description: 'Discover our showcase of successful digital projects. See how we\'ve helped businesses transform through technology and strategic implementation.',
    images: ['/images/og/portfolio-og.jpg'],
    creator: '@RTNGlobal',
    site: '@RTNGlobal'
  },
  authors: [{ name: 'RTN Global Team' }],
  publisher: 'RTN Global Ltd',
  category: 'Portfolio',
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
    'twitter:label1': 'Project Categories',
    'twitter:data1': 'Web Development, Digital Marketing, UI/UX Design',
    'twitter:label2': 'Client Sectors',
    'twitter:data2': 'Multiple Industries Worldwide',
    'portfolio:itemCount': 'Multiple Projects',
    'portfolio:categories': 'Web, Mobile, Design, Marketing, E-commerce'
  }
} 