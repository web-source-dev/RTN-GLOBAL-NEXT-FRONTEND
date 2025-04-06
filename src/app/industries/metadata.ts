import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Industry-Specific Solutions | RTN Global',
  description: 'Discover specialized digital solutions tailored for your industry. Our industry-specific expertise delivers targeted strategies that address unique sectoral challenges and opportunities.',
  keywords: 'industry solutions, sector-specific services, vertical markets, specialized technology, digital transformation, business technology, RTN Global, industry expertise, targeted solutions, sector solutions',
  robots: {
    index: true,
    follow: true,
    'max-image-preview': 'large',
    'max-snippet': 200,
    'max-video-preview': -1,
  },
  alternates: {
    canonical: 'https://rtnglobal.com/industries',
    languages: {
      'en-US': 'https://rtnglobal.com/industries',
      'en-GB': 'https://rtnglobal.com/industries',
      'fr': 'https://rtnglobal.com/fr/industries',
      'de': 'https://rtnglobal.com/de/industries',
      'es': 'https://rtnglobal.com/es/industries',
    }
  },
  openGraph: {
    title: 'Industry-Specific Digital Solutions | RTN Global',
    description: 'Explore our specialized expertise across multiple industries. Customized technology solutions that address the unique challenges in your sector.',
    type: 'website',
    url: 'https://rtnglobal.com/industries',
    siteName: 'RTN Global',
    locale: 'en_US',
    images: [
      {
        url: '/images/og/industries-og.jpg',
        width: 1200,
        height: 630,
        alt: 'RTN Global Industry Solutions'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Specialized Industry Solutions | RTN Global',
    description: 'Digital transformation strategies tailored to your industry-specific challenges. Explore our expertise across multiple sectors.',
    images: ['/images/og/industries-og.jpg'],
    creator: '@RTNGlobal',
    site: '@RTNGlobal'
  },
  authors: [{ name: 'RTN Global Team' }],
  publisher: 'RTN Global Ltd',
  category: 'Business Services',
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
    'twitter:label1': 'Industries Served',
    'twitter:data1': 'Multiple Sectors',
    'twitter:label2': 'Solutions',
    'twitter:data2': 'Custom Technology & Strategy',
  }
} 