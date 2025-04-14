import { Metadata } from 'next';

// Metadata for the main knowledge base page
export const metadata: Metadata = {
  title: 'Knowledge Base & Documentation | RTN Global',
  description: 'Find comprehensive guides, tutorials, and documentation for RTN Global products and services. Access technical articles, troubleshooting tips, and best practices.',
  keywords: 'knowledge base, documentation, help center, technical support, troubleshooting, guides, tutorials, RTN Global',
  openGraph: {
    title: 'Knowledge Base & Documentation | RTN Global',
    description: 'Find comprehensive guides, tutorials, and documentation for RTN Global products and services. Access technical articles, troubleshooting tips, and best practices.',
    url: 'https://rtnglobal.co/knowledge-base',
    siteName: 'RTN Global',
    images: [
      {
        url: '/images/og-knowledge-base.jpg',
        width: 1200,
        height: 630,
        alt: 'RTN Global Knowledge Base',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Knowledge Base & Documentation | RTN Global',
    description: 'Find comprehensive guides, tutorials, and documentation for RTN Global products and services. Access technical articles, troubleshooting tips, and best practices.',
    images: ['/images/og-knowledge-base.jpg'],
    creator: '@rtnglobalofficial',
    site: '@rtnglobalofficial',
  },
  alternates: {
    canonical: 'https://rtnglobal.co/knowledge-base',
    languages: {
      'en-US': 'https://rtnglobal.co/knowledge-base',
      'en-GB': 'https://rtnglobal.co/knowledge-base',
      'de-DE': 'https://rtnglobal.co/de/wissensdatenbank',
      'fr-FR': 'https://rtnglobal.co/fr/base-de-connaissances',
      'es-ES': 'https://rtnglobal.co/es/base-de-conocimiento',
    },
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  metadataBase: new URL('https://rtnglobal.co'),
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
  },
  verification: {
    google: 'google03e42604abdd544c',
    other: {
      'wot-verification': 'd225e0e4ff8e770182408ec60e8d8c24',
      'ms-verify': '9f21e93909e646e0a2f3218d1afeb53c',
      'me': ['info@rtnglobal.site'],
    }
  },
  authors: [{ name: 'Muhammad Tayyab' }],
  publisher: 'RTN Global',
  // Add structured data for the knowledge base landing page
  other: {
    'application-name': 'RTN Global Knowledge Base',
    'apple-mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-status-bar-style': 'black-translucent',
    'apple-mobile-web-app-title': 'RTN Global KB',
    'format-detection': 'telephone=no,address=no,email=no',
    'msapplication-config': '/browserconfig.xml',
    'msapplication-TileColor': '#2b5797',
    'msapplication-tap-highlight': 'no',
    'theme-color': '#0f172a',
    'contact:email': 'info@rtnglobal.site',
    'contact:phone': '+1 505 528 6780',
    'contact:address': '1209 MOUNTAIN ROAD PLNE, STE R, ALBUQUERQUE, NM, 87110, US',
    'structured-data': JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      name: 'RTN Global Knowledge Base',
      description: 'Find comprehensive guides, tutorials, and documentation for RTN Global products and services. Access technical articles, troubleshooting tips, and best practices.',
      url: 'https://rtnglobal.co/knowledge-base',
      potentialAction: {
        '@type': 'SearchAction',
        target: {
          '@type': 'EntryPoint',
          urlTemplate: 'https://rtnglobal.co/knowledge-base/search?q={search_term_string}'
        },
        'query-input': 'required name=search_term_string'
      },
      author: {
        '@type': 'Person',
        name: 'Muhammad Tayyab',
        url: 'https://rtnglobal.co',
      },
      publisher: {
        '@type': 'Organization',
        name: 'RTN Global',
        url: 'https://rtnglobal.co',
        logo: {
          '@type': 'ImageObject',
          url: 'https://rtnglobal.co/images/logo.png',
        },
      },
    }),
  },
}; 