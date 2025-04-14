import { Metadata } from 'next';
import { categories } from '@/data/knowledge-base';

// Generate metadata based on category
export async function generateMetadata({ 
  params 
}: { 
  params: { category: string } 
}): Promise<Metadata> {
  const { category } = params;
  
  // Check if category exists
  const categoryInfo = categories[category as keyof typeof categories];
  if (!categoryInfo) {
    return {
      title: 'Category Not Found | RTN Global Knowledge Base',
      description: 'The requested knowledge base category could not be found.',
    };
  }

  const canonicalUrl = `https://rtnglobal.co/knowledge-base/${category}`;
  
  // Create metadata with category information
  return {
    title: `${categoryInfo.title} | RTN Global Knowledge Base`,
    description: categoryInfo.description,
    keywords: [category, 'knowledge base', 'documentation', 'help', 'support', 'RTN Global'].join(', '),
    openGraph: {
      title: `${categoryInfo.title} | RTN Global Knowledge Base`,
      description: categoryInfo.description,
      url: canonicalUrl,
      siteName: 'RTN Global',
      images: [
        {
          url: '/images/og-knowledge-base.jpg',
          width: 1200,
          height: 630,
          alt: categoryInfo.title,
        },
      ],
      locale: 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${categoryInfo.title} | RTN Global Knowledge Base`,
      description: categoryInfo.description,
      images: ['/images/og-knowledge-base.jpg'],
      creator: '@rtnglobalofficial',
      site: '@rtnglobalofficial',
    },
    alternates: {
      canonical: canonicalUrl,
      languages: {
        'en-US': `https://rtnglobal.co/knowledge-base/${category}`,
        'en-GB': `https://rtnglobal.co/knowledge-base/${category}`,
        'de-DE': `https://rtnglobal.co/de/wissensdatenbank/${category}`,
        'fr-FR': `https://rtnglobal.co/fr/base-de-connaissances/${category}`,
        'es-ES': `https://rtnglobal.co/es/base-de-conocimiento/${category}`,
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
      },
    },
    authors: [{ name: 'Muhammad Tayyab' }],
    publisher: 'RTN Global',
    // Add structured data for category
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
        '@type': 'CollectionPage',
        name: categoryInfo.title,
        description: categoryInfo.description,
        url: canonicalUrl,
        provider: {
          '@type': 'Organization',
          name: 'RTN Global',
          url: 'https://rtnglobal.co',
        },
        isPartOf: {
          '@type': 'WebSite',
          name: 'RTN Global Knowledge Base',
          url: 'https://rtnglobal.co/knowledge-base',
        },
        about: {
          '@type': 'Thing',
          name: categoryInfo.title,
        },
      }),
    },
  };
} 