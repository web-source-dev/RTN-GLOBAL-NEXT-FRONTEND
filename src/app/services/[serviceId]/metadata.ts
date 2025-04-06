import type { Metadata } from 'next'

type Props = {
  params: { serviceId: string }
}

// Expanded service data map with comprehensive SEO information
const serviceMetadata: Record<string, { 
  title: string, 
  description: string, 
  keywords: string,
  category: string,
  investment?: string,
  timeline?: string,
  features?: string[]
}> = {
  'digital-strategy': {
    title: 'Digital Strategy Services | Business Growth Planning | RTN Global',
    description: 'Comprehensive digital strategy services to analyze your digital ecosystem, identify growth opportunities, and develop a roadmap for success in today\'s competitive landscape.',
    keywords: 'digital strategy, digital transformation, business growth strategy, digital roadmap, competitive analysis, market research, digital marketing strategy, business technology planning',
    category: 'Strategy',
    investment: '$5,000 - $25,000',
    timeline: '4-8 weeks',
    features: ['Market Analysis', 'Competitive Research', 'Digital Roadmap', 'KPI Development']
  },
  'seo-optimization': {
    title: 'SEO Optimization Services | Search Engine Ranking | RTN Global',
    description: 'Improve your search engine rankings and increase organic traffic with our data-driven SEO optimization services. We implement proven strategies that deliver sustainable results.',
    keywords: 'SEO services, search engine optimization, organic traffic growth, keyword research, on-page SEO, technical SEO, link building, local SEO, SEO audit',
    category: 'Marketing',
    investment: '$1,500 - $5,000/month',
    timeline: 'Ongoing',
    features: ['Keyword Research', 'Technical Audit', 'On-Page Optimization', 'Content Strategy']
  },
  'content-marketing': {
    title: 'Content Marketing Services | Engagement Strategy | RTN Global',
    description: 'Engaging content marketing services that attract and retain your target audience, build brand awareness, and generate leads through strategic storytelling and distribution.',
    keywords: 'content marketing, content strategy, blog writing, content creation, content distribution, storytelling, inbound marketing, lead generation, content ROI',
    category: 'Marketing',
    investment: '$2,000 - $7,500/month',
    timeline: 'Ongoing',
    features: ['Content Strategy', 'Blog Writing', 'Content Distribution', 'Performance Analysis']
  },
  'social-media': {
    title: 'Social Media Marketing Services | Platform Management | RTN Global',
    description: 'Strategic social media marketing to build your brand presence, engage with your audience, and drive results through targeted campaigns across all major platforms.',
    keywords: 'social media marketing, social media management, social strategy, community management, social media advertising, platform optimization, engagement growth, social analytics',
    category: 'Marketing',
    investment: '$1,800 - $6,000/month',
    timeline: 'Ongoing',
    features: ['Platform Strategy', 'Content Creation', 'Community Management', 'Paid Campaigns']
  },
  'ppc-management': {
    title: 'PPC Management Services | Paid Advertising | RTN Global',
    description: 'Maximize ROI with our targeted pay-per-click management services for search engines and social platforms. We optimize campaigns for conversions and cost efficiency.',
    keywords: 'PPC management, Google Ads, paid advertising, search advertising, display ads, social media ads, PPC strategy, ad optimization, conversion tracking, ROAS improvement',
    category: 'Marketing',
    investment: '$1,500 - $5,000/month + Ad Spend',
    timeline: 'Ongoing',
    features: ['Campaign Strategy', 'Ad Creation', 'Bid Management', 'Conversion Tracking']
  },
  'email-marketing': {
    title: 'Email Marketing Services | Customer Engagement | RTN Global',
    description: 'Nurture leads and drive customer retention with our targeted email marketing campaigns and automation services. Increase open rates, clickthrough, and conversions.',
    keywords: 'email marketing, email automation, drip campaigns, newsletter design, email strategy, subscriber growth, email analytics, CRM integration, email segmentation',
    category: 'Marketing',
    investment: '$1,200 - $4,500/month',
    timeline: 'Ongoing',
    features: ['Email Strategy', 'Campaign Design', 'List Management', 'Performance Tracking']
  },
  'web-development': {
    title: 'Web Development Services | Custom Website Solutions | RTN Global',
    description: 'Custom web development services creating responsive, user-friendly websites that convert visitors into customers. We build secure, scalable, and high-performance digital experiences.',
    keywords: 'web development, website design, responsive websites, CMS development, e-commerce development, website optimization, frontend development, backend development, web application',
    category: 'Development',
    investment: '$10,000 - $50,000+',
    timeline: '8-16 weeks',
    features: ['Custom Design', 'Responsive Development', 'CMS Integration', 'Performance Optimization']
  },
  'mobile-apps': {
    title: 'Mobile App Development Services | iOS & Android | RTN Global',
    description: 'Native and cross-platform mobile application development for iOS and Android to engage your users and expand your reach. We build intuitive, feature-rich apps for all industries.',
    keywords: 'mobile app development, iOS app development, Android app development, cross-platform apps, React Native, Flutter, mobile UX design, app store optimization',
    category: 'Development',
    investment: '$15,000 - $75,000+',
    timeline: '12-20 weeks',
    features: ['UX/UI Design', 'Native Development', 'Cross-Platform Options', 'App Store Submission']
  },
  'brand-identity': {
    title: 'Brand Identity Services | Logo Design & Visual Branding | RTN Global',
    description: 'Create a distinctive brand identity with our comprehensive branding services including logo design, visual identity systems, and brand guidelines that resonate with your audience.',
    keywords: 'brand identity, logo design, visual identity, brand guidelines, brand strategy, color systems, typography, brand messaging, packaging design',
    category: 'Design',
    investment: '$15,000 - $50,000+',
    timeline: '8-12 weeks',
    features: ['Logo Design', 'Color Systems', 'Typography', 'Brand Guidelines']
  },
  'e-commerce': {
    title: 'E-commerce Development Services | Online Store Solutions | RTN Global',
    description: 'Build powerful online stores that drive sales with our e-commerce development services. We deliver secure, scalable shopping experiences optimized for conversions.',
    keywords: 'e-commerce development, online store, shopping cart, payment integration, product catalog, e-commerce platform, Shopify, WooCommerce, Magento',
    category: 'Development',
    investment: '$15,000 - $75,000+',
    timeline: '10-16 weeks',
    features: ['Store Design', 'Payment Integration', 'Inventory Management', 'Mobile Optimization']
  }
}

export function generateMetadata({ params }: Props): Metadata {
  const { serviceId } = params
  
  // Use the specific service metadata or fallback to default
  const serviceInfo = serviceMetadata[serviceId] || {
    title: 'Digital Services | RTN Global',
    description: 'Explore our comprehensive range of digital services to transform your online presence and achieve your business goals.',
    keywords: 'digital services, web development, marketing, design, strategy, RTN Global',
    category: 'Services'
  }
  
  // Generate a clean URL-friendly service name for structured data
  const serviceName = serviceId.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
  
  return {
    title: serviceInfo.title,
    description: serviceInfo.description,
    keywords: serviceInfo.keywords,
    robots: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': 250,
      'max-video-preview': -1,
    },
    openGraph: {
      title: serviceInfo.title,
      description: serviceInfo.description,
      type: 'website',
      url: `https://rtnglobal.com/services/${serviceId}`,
      siteName: 'RTN Global',
      locale: 'en_US',
      images: [
        {
          url: `/images/og/services/${serviceId}.jpg`,
          width: 1200,
          height: 630,
          alt: `RTN Global ${serviceName} Services`
        }
      ]
    },
    twitter: {
      card: 'summary_large_image',
      title: serviceInfo.title,
      description: serviceInfo.description,
      images: [`/images/og/services/${serviceId}.jpg`],
      creator: '@RTNGlobal',
      site: '@RTNGlobal'
    },
    alternates: {
      canonical: `https://rtnglobal.com/services/${serviceId}`,
      languages: {
        'en-US': `https://rtnglobal.com/services/${serviceId}`,
        'en-GB': `https://rtnglobal.com/services/${serviceId}`,
        'fr': `https://rtnglobal.com/fr/services/${serviceId}`,
        'de': `https://rtnglobal.com/de/services/${serviceId}`,
        'es': `https://rtnglobal.com/es/services/${serviceId}`,
      }
    },
    authors: [{ name: 'RTN Global Team' }],
    publisher: 'RTN Global Ltd',
    category: serviceInfo.category,
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
      'twitter:label1': serviceInfo.investment ? 'Investment' : 'Service Category',
      'twitter:data1': serviceInfo.investment || serviceInfo.category,
      'twitter:label2': serviceInfo.timeline ? 'Timeline' : 'Focus',
      'twitter:data2': serviceInfo.timeline || 'Results-Driven Approach',
      'service:category': serviceInfo.category,
      'service:name': serviceName,
      'service:features': serviceInfo.features ? serviceInfo.features.join(', ') : 'Custom Solutions',
      'service:id': serviceId
    }
  }
} 