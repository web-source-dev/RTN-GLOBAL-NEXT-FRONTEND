export const seoConfig = {
  // Base configuration
  baseUrl: 'https://rtnglobal.site',
  siteName: 'RTN Global',
  siteDescription: 'RTN Global is a leading web development and digital marketing agency. We create stunning websites, effective SEO strategies, and powerful digital marketing campaigns for businesses worldwide.',
  
  // Default meta tags
  defaultTitle: 'RTN Global - Web Development & Digital Marketing Agency',
  defaultDescription: 'RTN Global is a leading web development and digital marketing agency. We create stunning websites, effective SEO strategies, and powerful digital marketing campaigns for businesses worldwide.',
  defaultKeywords: [
    'web development',
    'digital marketing',
    'SEO',
    'social media marketing',
    'web design',
    'web agency',
    'ecommerce development',
    'mobile app development',
    'content marketing',
    'PPC advertising',
    'brand identity',
    'website maintenance'
  ],
  
  // Social media
  social: {
    twitter: '@rtnglobalofficial',
    facebook: 'https://web.facebook.com/people/RTN-Global/61573828870610/',
    instagram: 'https://www.instagram.com/rtnglobalofficial/',
    linkedin: 'https://www.linkedin.com/in/rtnglobalofficial/',
    youtube: 'https://www.youtube.com/@RTNGlobal',
    tiktok: 'https://www.tiktok.com/@rtnglobalofficial',
    threads: 'https://www.threads.net/@rtnglobalofficial'
  },
  
  // Contact information
  contact: {
    phone: '+1 (505) 528 0265',
    email: 'info@rtnglobal.site',
    supportEmail: 'support@rtnglobal.site',
    address: {
      street: '1209 MOUNTAIN ROAD PLNE, STE R',
      city: 'ALBUQUERQUE',
      state: 'NM',
      zip: '87110',
      country: 'US'
    }
  },
  
  // Images
  images: {
    logo: 'https://rtnglobal.site/logo.png',
    hero: 'https://rtnglobal.site/images/hero-img.png',
    ogDefault: 'https://rtnglobal.site/images/hero-img.png'
  }
};

// Structured data templates
export const structuredData = {
  organization: {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "RTN Global",
    "url": "https://rtnglobal.site/",
    "logo": "https://rtnglobal.site/logo.png",
    "founder": {
      "@type": "Person",
      "name": "Muhammad Tayyab"
    },
    "description": "RTN Global is a leading web development and digital marketing agency creating stunning websites and effective marketing strategies for businesses.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "1209 MOUNTAIN ROAD PLNE, STE R",
      "addressLocality": "ALBUQUERQUE",
      "addressRegion": "NM",
      "postalCode": "87110",
      "addressCountry": "US"
    },
    "contactPoint": [
      {
        "@type": "ContactPoint",
        "contactType": "customer service",
        "telephone": "+1 (505) 528 0265",
        "email": "info@rtnglobal.site",
        "availableLanguage": ["English"]
      },
      {
        "@type": "ContactPoint",
        "contactType": "technical support",
        "telephone": "+1 (505) 528 0265",
        "email": "support@rtnglobal.site",
        "availableLanguage": ["English"]
      }
    ],
    "sameAs": [
      "https://www.instagram.com/rtnglobalofficial/",
      "https://www.threads.net/@rtnglobalofficial",
      "https://www.tiktok.com/@rtnglobalofficial",
      "https://web.facebook.com/people/RTN-Global/61573828870610/",
      "https://www.youtube.com/@RTNGlobal",
      "https://www.linkedin.com/in/rtnglobalofficial/"
    ]
  },
  
  website: {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "RTN Global",
    "url": "https://rtnglobal.site/",
    "description": "RTN Global is a leading web development and digital marketing agency.",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://rtnglobal.site/search?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  },
  
  localBusiness: {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "RTN Global",
    "description": "Web Development & Digital Marketing Agency",
    "url": "https://rtnglobal.site/",
    "telephone": "+1 (505) 528 0265",
    "email": "info@rtnglobal.site",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "1209 MOUNTAIN ROAD PLNE, STE R",
      "addressLocality": "ALBUQUERQUE",
      "addressRegion": "NM",
      "postalCode": "87110",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "35.0844",
      "longitude": "-106.6504"
    },
    "openingHours": "Mo-Fr 09:00-18:00",
    "priceRange": "$$",
    "serviceArea": {
      "@type": "GeoCircle",
      "geoMidpoint": {
        "@type": "GeoCoordinates",
        "latitude": "35.0844",
        "longitude": "-106.6504"
      },
      "geoRadius": "50000"
    }
  }
};

// Helper function to generate structured data for blog posts
export function generateBlogPostStructuredData(post: {
  title: string;
  description: string;
  slug: string;
  publishedAt: string;
  modifiedAt?: string;
  author: string;
  image?: string;
  tags?: string[];
}) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": post.title,
    "description": post.description,
    "url": `https://rtnglobal.site/blog/${post.slug}`,
    "datePublished": post.publishedAt,
    "dateModified": post.modifiedAt || post.publishedAt,
    "author": {
      "@type": "Person",
      "name": post.author
    },
    "publisher": {
      "@type": "Organization",
      "name": "RTN Global",
      "logo": {
        "@type": "ImageObject",
        "url": "https://rtnglobal.site/logo.png"
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://rtnglobal.site/blog/${post.slug}`
    },
    "image": post.image || "https://rtnglobal.site/images/hero-img.png",
    "keywords": post.tags?.join(', ') || "web development, digital marketing, SEO",
    "articleSection": "Digital Marketing",
    "inLanguage": "en-US"
  };
}

// Helper function to generate structured data for services
export function generateServiceStructuredData(service: {
  name: string;
  description: string;
  slug: string;
  price?: string;
  image?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": service.name,
    "description": service.description,
    "url": `https://rtnglobal.site/services/${service.slug}`,
    "provider": {
      "@type": "Organization",
      "name": "RTN Global",
      "url": "https://rtnglobal.site/"
    },
    "areaServed": {
      "@type": "Country",
      "name": "United States"
    },
    "serviceType": "Web Development",
    "image": service.image || "https://rtnglobal.site/images/hero-img.png",
    "offers": service.price ? {
      "@type": "Offer",
      "price": service.price,
      "priceCurrency": "USD",
      "availability": "https://schema.org/InStock"
    } : undefined
  };
}

// Helper function to generate breadcrumb structured data
export function generateBreadcrumbStructuredData(breadcrumbs: Array<{
  name: string;
  url: string;
}>) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": breadcrumbs.map((crumb, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": crumb.name,
      "item": crumb.url
    }))
  };
}
