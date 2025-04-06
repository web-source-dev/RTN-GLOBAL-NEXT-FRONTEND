import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Our Team | Meet the Experts at RTN Global',
  description: 'Meet the talented team behind RTN Global. Our experts bring diverse backgrounds, deep industry expertise, and a passion for innovation to deliver exceptional solutions.',
  keywords: 'RTN Global team, technology experts, leadership team, tech professionals, software engineers, digital consultants, IT specialists, project managers, industry experts, RTN Global staff',
  robots: {
    index: true,
    follow: true,
    'max-image-preview': 'large',
    'max-snippet': 200,
    'max-video-preview': -1,
  },
  alternates: {
    canonical: 'https://rtnglobal.com/team',
    languages: {
      'en-US': 'https://rtnglobal.com/team',
      'en-GB': 'https://rtnglobal.com/team',
      'fr': 'https://rtnglobal.com/fr/team',
      'de': 'https://rtnglobal.com/de/team',
      'es': 'https://rtnglobal.com/es/team',
    }
  },
  openGraph: {
    title: 'Meet Our Expert Team | The Faces Behind RTN Global',
    description: 'Discover the talented professionals who make RTN Global an industry leader. Our diverse team combines technical expertise with innovative thinking to deliver outstanding results.',
    type: 'website',
    url: 'https://rtnglobal.com/team',
    siteName: 'RTN Global',
    locale: 'en_US',
    images: [
      {
        url: '/images/og/team-page.jpg',
        width: 1200,
        height: 630,
        alt: 'RTN Global Team of Experts'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The Experts Behind RTN Global | Our Team',
    description: 'Meet the talented professionals who drive innovation and excellence at RTN Global. Our team brings diverse expertise to solve complex challenges.',
    images: ['/images/og/team-page.jpg'],
    creator: '@RTNGlobal',
    site: '@RTNGlobal'
  },
  authors: [{ name: 'RTN Global' }],
  publisher: 'RTN Global Ltd',
  category: 'Team',
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
    'twitter:label1': 'Team Size',
    'twitter:data1': 'Global Experts',
    'twitter:label2': 'Industries',
    'twitter:data2': 'Technology, Finance, Healthcare & More',
    'team:expertise': 'Software, Cloud, AI, Digital Transformation',
    'team:locations': 'Global presence',
    'team:leadership': 'Industry veterans',
    'team:culture': 'Innovation-driven',
    'team:values': 'Excellence, Integrity, Client Focus'
  },
  applicationName: 'RTN Global',
}; 