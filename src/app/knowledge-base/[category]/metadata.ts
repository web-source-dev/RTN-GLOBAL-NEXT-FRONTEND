import { Metadata } from 'next';
import { categories } from './[slug]/data';

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

  const canonicalUrl = `https://rtnglobal.com/knowledge-base/${category}`;
  
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
      creator: '@RTNGlobal',
      site: '@RTNGlobal',
    },
    alternates: {
      canonical: canonicalUrl,
      languages: {
        'en-US': `https://us.rtnglobal.com/knowledge-base/${category}`,
        'en-GB': `https://uk.rtnglobal.com/knowledge-base/${category}`,
        'de-DE': `https://de.rtnglobal.com/wissensdatenbank/${category}`,
        'fr-FR': `https://fr.rtnglobal.com/base-de-connaissances/${category}`,
        'es-ES': `https://es.rtnglobal.com/base-de-conocimiento/${category}`,
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
      'structured-data': JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'CollectionPage',
        name: categoryInfo.title,
        description: categoryInfo.description,
        url: canonicalUrl,
        provider: {
          '@type': 'Organization',
          name: 'RTN Global',
          url: 'https://rtnglobal.com',
        },
        isPartOf: {
          '@type': 'WebSite',
          name: 'RTN Global Knowledge Base',
          url: 'https://rtnglobal.com/knowledge-base',
        },
        about: {
          '@type': 'Thing',
          name: categoryInfo.title,
        },
      }),
    },
  };
} 