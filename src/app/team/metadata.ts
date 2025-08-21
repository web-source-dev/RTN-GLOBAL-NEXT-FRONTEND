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
    canonical: 'https://rtnglobal.site/team',
    languages: {
      'en-US': 'https://rtnglobal.site/team',
      'en-GB': 'https://rtnglobal.site/team',
      'fr': 'https://rtnglobal.site/fr/team',
      'de': 'https://rtnglobal.site/de/team',
      'es': 'https://rtnglobal.site/es/team',
    }
  },
  openGraph: {
    title: 'Meet Our Expert Team | The Faces Behind RTN Global',
    description: 'Discover the talented professionals who make RTN Global an industry leader. Our diverse team combines technical expertise with innovative thinking to deliver outstanding results.',
    type: 'website',
    url: 'https://rtnglobal.site/team',
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
    creator: '@rtnglobalofficial',
    site: '@rtnglobalofficial'
  },
  authors: [{ name: 'RTN Global Team' }],
  publisher: 'RTN Global',
  creator: 'Muhammad Tayyab',
  category: 'Team',
  verification: {
    google: 'google03e42604abdd544c',
    other: {
      'wot-verification': 'd225e0e4ff8e770182408ec60e8d8c24',
      'ms-verify': '9f21e93909e646e0a2f3218d1afeb53c',
      me: ['https://rtnglobal.site', 'https://www.linkedin.com/in/rtnglobalofficial']
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
    'team:values': 'Excellence, Integrity, Client Focus',
    'contact:email': 'info@rtnglobal.site',
    'contact:phone': '+1 (505) 528 0265',
    'contact:address': '1209 MOUNTAIN ROAD PLNE, STE R, ALBUQUERQUE, NM, 87110, US'
  },
  applicationName: 'RTN Global',
}; 