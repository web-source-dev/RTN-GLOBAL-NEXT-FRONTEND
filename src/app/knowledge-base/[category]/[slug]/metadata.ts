import { Metadata } from 'next';
import { categories, articleData, generateArticleData } from '@/data/knowledge-base';

// Generate metadata based on article category and slug
export async function generateMetadata({ 
  params 
}: { 
  params: { category: string; slug: string } 
}): Promise<Metadata> {
  const { category, slug } = params;
  
  // Check if category exists
  const categoryInfo = categories[category as keyof typeof categories];
  if (!categoryInfo) {
    return {
      title: 'Article Not Found | RTN Global Knowledge Base',
      description: 'The requested article could not be found in our knowledge base.',
    };
  }
  
  // Get article data
  const articleKey = `${category}/${slug}`;
  const article = articleData[articleKey as keyof typeof articleData] || 
                  generateArticleData(category, slug);
  
  if (!article) {
    return {
      title: 'Article Not Found | RTN Global Knowledge Base',
      description: 'The requested article could not be found in our knowledge base.',
    };
  }

  const canonicalUrl = `https://rtnglobal.co/knowledge-base/${category}/${slug}`;
  
  // Create metadata with article information
  return {
    title: `${article.title} | RTN Global Knowledge Base`,
    description: article.description,
    keywords: article.tags?.join(', ') || '',
    authors: [{ name: article.author }],
    category: categoryInfo.title,
    openGraph: {
      title: `${article.title} | RTN Global Knowledge Base`,
      description: article.description,
      url: canonicalUrl,
      siteName: 'RTN Global',
      images: [
        {
          url: '/images/og-knowledge-base.jpg',
          width: 1200,
          height: 630,
          alt: article.title,
        },
      ],
      locale: 'en_US',
      type: 'article',
      publishedTime: article.lastUpdated ? new Date(article.lastUpdated).toISOString() : undefined,
      section: categoryInfo.title,
      tags: article.tags,
    },
    twitter: {
      card: 'summary_large_image',
      title: `${article.title} | RTN Global Knowledge Base`,
      description: article.description,
      images: ['/images/og-knowledge-base.jpg'],
      creator: '@rtnglobalofficial',
      site: '@rtnglobalofficial',
    },
    alternates: {
      canonical: canonicalUrl,
      languages: {
        'en-US': `https://us.rtnglobal.co/knowledge-base/${category}/${slug}`,
        'en-GB': `https://uk.rtnglobal.co/knowledge-base/${category}/${slug}`,
        'de-DE': `https://de.rtnglobal.co/wissensdatenbank/${category}/${slug}`,
        'fr-FR': `https://fr.rtnglobal.co/base-de-connaissances/${category}/${slug}`,
        'es-ES': `https://es.rtnglobal.co/base-de-conocimiento/${category}/${slug}`,
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
        me: ['info@rtnglobal.site'],
      },
    },
    publisher: 'RTN Global',
    creator: 'Muhammad Tayyab',
    // Add structured data for article
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
        '@type': 'TechArticle',
        headline: article.title,
        description: article.description,
        image: 'https://rtnglobal.co/images/og-knowledge-base.jpg',
        author: {
          '@type': 'Organization',
          name: 'RTN Global',
          url: 'https://rtnglobal.co',
        },
        publisher: {
          '@type': 'Organization',
          name: 'RTN Global',
          logo: {
            '@type': 'ImageObject',
            url: 'https://rtnglobal.co/images/logo.png',
          },
        },
        datePublished: article.lastUpdated ? new Date(article.lastUpdated).toISOString() : new Date().toISOString(),
        dateModified: article.lastUpdated ? new Date(article.lastUpdated).toISOString() : new Date().toISOString(),
        mainEntityOfPage: canonicalUrl,
        keywords: article.tags?.join(', ') || '',
        articleSection: categoryInfo.title,
        about: {
          '@type': 'Thing',
          name: categoryInfo.title,
          description: categoryInfo.description,
        },
      }),
    },
  };
} 