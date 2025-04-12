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

  const canonicalUrl = `https://rtnglobal.com/knowledge-base/${category}/${slug}`;
  
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
      creator: '@RTNGlobal',
      site: '@RTNGlobal',
    },
    alternates: {
      canonical: canonicalUrl,
      languages: {
        'en-US': `https://us.rtnglobal.com/knowledge-base/${category}/${slug}`,
        'en-GB': `https://uk.rtnglobal.com/knowledge-base/${category}/${slug}`,
        'de-DE': `https://de.rtnglobal.com/wissensdatenbank/${category}/${slug}`,
        'fr-FR': `https://fr.rtnglobal.com/base-de-connaissances/${category}/${slug}`,
        'es-ES': `https://es.rtnglobal.com/base-de-conocimiento/${category}/${slug}`,
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
      'structured-data': JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'TechArticle',
        headline: article.title,
        description: article.description,
        image: 'https://rtnglobal.com/images/og-knowledge-base.jpg',
        author: {
          '@type': 'Organization',
          name: 'RTN Global',
          url: 'https://rtnglobal.com',
        },
        publisher: {
          '@type': 'Organization',
          name: 'RTN Global',
          logo: {
            '@type': 'ImageObject',
            url: 'https://rtnglobal.com/images/logo.png',
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