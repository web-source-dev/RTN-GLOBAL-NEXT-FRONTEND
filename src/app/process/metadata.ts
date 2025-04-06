import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Our Process | Development Methodology | RTN Global',
  description: 'Discover RTN Global\'s proven 6-step development process that ensures successful delivery of web and digital projects. Learn how our strategic approach creates exceptional results for clients worldwide.',
  keywords: 'development process, project methodology, strategic approach, web development process, RTN Global methodology, project management, digital project workflow, six-step process, project timeline, brand development',
  robots: {
    index: true,
    follow: true,
    'max-image-preview': 'large',
    'max-snippet': 250,
    'max-video-preview': -1,
  },
  alternates: {
    canonical: 'https://rtnglobal.com/process',
    languages: {
      'en-US': 'https://rtnglobal.com/process',
      'en-GB': 'https://rtnglobal.com/process',
      'fr': 'https://rtnglobal.com/fr/process',
      'de': 'https://rtnglobal.com/de/process',
      'es': 'https://rtnglobal.com/es/process',
    }
  },
  openGraph: {
    title: 'Strategic Development Process | RTN Global',
    description: 'Our proven 6-step methodology combines strategic thinking, creative excellence, and technical expertise to deliver successful digital projects that achieve business objectives.',
    type: 'website',
    url: 'https://rtnglobal.com/process',
    siteName: 'RTN Global',
    locale: 'en_US',
    images: [
      {
        url: '/images/og/process-og.jpg',
        width: 1200,
        height: 630,
        alt: 'RTN Global Development Process'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Our 6-Step Development Process | RTN Global',
    description: 'Discover how our structured approach to projects ensures successful outcomes. From discovery to optimization, learn about our proven development methodology.',
    images: ['/images/og/process-og.jpg'],
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
    'twitter:label1': 'Process Steps',
    'twitter:data1': 'Discovery, Strategy, Design, Development, Launch, Optimization',
    'twitter:label2': 'Project Timeline',
    'twitter:data2': '10-16 weeks typical duration',
    'methodology:type': 'Six-step agile process',
    'methodology:focus': 'Strategic, client-centered, transparent',
    'methodology:deliverables': 'Strategy, design, development, activation, analytics',
    'methodology:satisfaction': '98% client satisfaction rate'
  }
} 