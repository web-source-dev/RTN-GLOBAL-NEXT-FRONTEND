import Head from 'next/head';

interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string[];
  canonical?: string;
  ogImage?: string;
  ogType?: string;
  publishedTime?: string;
  modifiedTime?: string;
  author?: string;
  structuredData?: object;
  noIndex?: boolean;
  noFollow?: boolean;
}

export default function SEOHead({
  title = 'RTN Global - Web Development & Digital Marketing Agency',
  description = 'RTN Global is a leading web development and digital marketing agency. We create stunning websites, effective SEO strategies, and powerful digital marketing campaigns for businesses worldwide.',
  keywords = ['web development', 'digital marketing', 'SEO', 'web design', 'web agency'],
  canonical,
  ogImage = 'https://rtnglobal.site/images/hero-img.png',
  ogType = 'website',
  publishedTime,
  modifiedTime,
  author = 'RTN Global Team',
  structuredData,
  noIndex = false,
  noFollow = false,
}: SEOHeadProps) {
  const baseUrl = 'https://rtnglobal.site';
  const fullTitle = title.includes('RTN Global') ? title : `${title} | RTN Global`;
  const canonicalUrl = canonical ? `${baseUrl}${canonical}` : baseUrl;
  const robotsContent = noIndex || noFollow 
    ? `${noIndex ? 'noindex' : 'index'}, ${noFollow ? 'nofollow' : 'follow'}`
    : 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1';

  return (
    <Head>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords.join(', ')} />
      <meta name="author" content={author} />
      <link rel="canonical" href={canonicalUrl} />
      
      {/* Robots Meta Tags */}
      <meta name="robots" content={robotsContent} />
      <meta name="googlebot" content={robotsContent} />
      <meta name="bingbot" content={robotsContent} />
      
      {/* Open Graph Meta Tags */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:site_name" content="RTN Global" />
      <meta property="og:locale" content="en_US" />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content={fullTitle} />
      
      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@rtnglobalofficial" />
      <meta name="twitter:creator" content="@rtnglobalofficial" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      <meta name="twitter:image:alt" content={fullTitle} />
      
      {/* Article Meta Tags (for blog posts) */}
      {ogType === 'article' && (
        <>
          {publishedTime && <meta property="article:published_time" content={publishedTime} />}
          {modifiedTime && <meta property="article:modified_time" content={modifiedTime} />}
          <meta property="article:author" content={author} />
          <meta property="article:publisher" content="RTN Global" />
        </>
      )}
      
      {/* Structured Data */}
      {structuredData && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />
      )}
      
      {/* Additional SEO Meta Tags */}
      <meta name="theme-color" content="#2563eb" />
      <meta name="msapplication-TileColor" content="#2563eb" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      
      {/* Preconnect for Performance */}
      <link rel="preconnect" href="https://rtnglobal.site" />
      <link rel="dns-prefetch" href="https://rtnglobal.site" />
    </Head>
  );
}
