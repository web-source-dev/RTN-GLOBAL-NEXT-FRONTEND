import { Metadata } from 'next';

// Metadata for the main knowledge base page
export const metadata: Metadata = {
  title: 'Knowledge Base & Documentation | RTN Global',
  description: 'Find comprehensive guides, tutorials, and documentation for RTN Global products and services. Access technical articles, troubleshooting tips, and best practices.',
  keywords: 'knowledge base, documentation, help center, technical support, troubleshooting, guides, tutorials, RTN Global',
  openGraph: {
    title: 'Knowledge Base & Documentation | RTN Global',
    description: 'Find comprehensive guides, tutorials, and documentation for RTN Global products and services. Access technical articles, troubleshooting tips, and best practices.',
    url: 'https://rtnglobal.com/knowledge-base',
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
    creator: '@RTNGlobal',
    site: '@RTNGlobal',
  },
  alternates: {
    canonical: 'https://rtnglobal.com/knowledge-base',
    languages: {
      'en-US': 'https://us.rtnglobal.com/knowledge-base',
      'en-GB': 'https://uk.rtnglobal.com/knowledge-base',
      'de-DE': 'https://de.rtnglobal.com/wissensdatenbank',
      'fr-FR': 'https://fr.rtnglobal.com/base-de-connaissances',
      'es-ES': 'https://es.rtnglobal.com/base-de-conocimiento',
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
  metadataBase: new URL('https://rtnglobal.com'),
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
  },
  verification: {
    google: 'google-site-verification-code',
    other: {
      me: ['support@rtnglobal.com'],
    },
  },
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
    'structured-data': JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      name: 'RTN Global Knowledge Base',
      description: 'Find comprehensive guides, tutorials, and documentation for RTN Global products and services. Access technical articles, troubleshooting tips, and best practices.',
      url: 'https://rtnglobal.com/knowledge-base',
      potentialAction: {
        '@type': 'SearchAction',
        target: {
          '@type': 'EntryPoint',
          urlTemplate: 'https://rtnglobal.com/knowledge-base/search?q={search_term_string}'
        },
        'query-input': 'required name=search_term_string'
      },
      author: {
        '@type': 'Organization',
        name: 'RTN Global',
        url: 'https://rtnglobal.com',
        logo: {
          '@type': 'ImageObject',
          url: 'https://rtnglobal.com/images/logo.png',
        },
      },
      publisher: {
        '@type': 'Organization',
        name: 'RTN Global',
        url: 'https://rtnglobal.com',
        logo: {
          '@type': 'ImageObject',
          url: 'https://rtnglobal.com/images/logo.png',
        },
      },
    }),
  },
}; 