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
  },
  'frontend-development': {
    title: 'Frontend Web Development Services | React & Modern JavaScript | RTN Global',
    description: 'Expert frontend development services using React, Vue, Angular and modern JavaScript frameworks. Build responsive, high-performance user interfaces for your web applications.',
    keywords: 'frontend development, frontend web development, React development, Vue.js development, Angular development, JavaScript development, TypeScript, responsive web design, UI development, frontend engineer',
    category: 'Development',
    investment: '$8,000 - $30,000',
    timeline: '4-8 weeks',
    features: ['React/Next.js', 'Vue.js', 'TypeScript', 'Progressive Web Apps', 'Responsive Design']
  },
  'backend-development': {
    title: 'Backend Development Services | API & Server Solutions | RTN Global',
    description: 'Scalable, secure backend development services for web applications, APIs, and databases. Our developers build robust server-side solutions that power your digital experiences.',
    keywords: 'backend development, server-side programming, API development, database design, Node.js development, Python development, PHP development, Java backend, backend architect, server architecture',
    category: 'Development',
    investment: '$12,000 - $45,000',
    timeline: '6-12 weeks',
    features: ['API Development', 'Database Design', 'Server Architecture', 'Authentication Systems', 'Performance Optimization']
  },
  'full-stack-development': {
    title: 'Full Stack Development Services | End-to-End Web Solutions | RTN Global',
    description: 'Comprehensive full stack development services delivering end-to-end web solutions. Our developers handle both frontend and backend to create cohesive, scalable applications.',
    keywords: 'full stack development, MERN stack, MEAN stack, full stack developer, end-to-end development, JavaScript full stack, web application development, React Node.js, full stack engineer, web app solutions',
    category: 'Development',
    investment: '$20,000 - $75,000',
    timeline: '10-16 weeks',
    features: ['Frontend & Backend Integration', 'Database Implementation', 'API Development', 'Authentication Systems', 'DevOps Solutions']
  },
  'wordpress-development': {
    title: 'WordPress Development Services | Custom Themes & Plugins | RTN Global',
    description: 'Professional WordPress development services including custom themes, plugins, and enterprise WordPress solutions. Build high-performance, secure WordPress websites tailored to your business.',
    keywords: 'WordPress development, custom WordPress themes, WordPress plugin development, WooCommerce, WordPress customization, WordPress security, WordPress speed optimization, headless WordPress, WordPress agency, WordPress developer',
    category: 'Development',
    investment: '$8,000 - $25,000',
    timeline: '6-10 weeks',
    features: ['Custom Themes', 'Plugin Development', 'WooCommerce', 'Security Implementation', 'Performance Optimization']
  },
  'shopify-development': {
    title: 'Shopify Development Services | Custom Store Solutions | RTN Global',
    description: 'Expert Shopify development services for high-converting e-commerce stores. We create custom Shopify themes, apps, and integrations tailored to your business requirements.',
    keywords: 'Shopify development, Shopify Plus, custom Shopify themes, Shopify apps, Shopify customization, e-commerce development, Shopify expert, Liquid template, Shopify store setup, Shopify migration',
    category: 'Development',
    investment: '$10,000 - $30,000',
    timeline: '6-10 weeks',
    features: ['Custom Theme Development', 'Shopify App Integration', 'Payment Gateway Setup', 'Product Migration', 'Store Optimization']
  },
  'web-app-development': {
    title: 'Web Application Development Services | Custom Business Solutions | RTN Global',
    description: 'Custom web application development services that solve complex business problems. We build scalable, secure web applications tailored to your unique requirements and workflows.',
    keywords: 'web application development, custom web apps, business applications, SaaS development, enterprise web applications, cloud-based applications, web app developers, custom software development, web platform development',
    category: 'Development',
    investment: '$25,000 - $100,000+',
    timeline: '12-20 weeks',
    features: ['Custom Business Applications', 'SaaS Development', 'Real-time Processing', 'User Authentication', 'Admin Dashboards']
  },
  'web-portal-development': {
    title: 'Web Portal Development Services | Customer & Partner Portals | RTN Global',
    description: 'Custom web portal development for businesses, including customer portals, partner portals, and intranets. Connect your stakeholders with secure, feature-rich portal solutions.',
    keywords: 'web portal development, customer portal, partner portal, vendor portal, employee intranet, extranet development, member portal, B2B portal, self-service portal, portal software development',
    category: 'Development',
    investment: '$20,000 - $75,000',
    timeline: '12-20 weeks',
    features: ['Customer Portals', 'Partner Access Management', 'Document Sharing', 'Secure Authentication', 'Analytics Dashboards']
  },
  'website-redesign': {
    title: 'Website Redesign Services | Modern Web Experience | RTN Global',
    description: 'Strategic website redesign services that transform outdated sites into modern, high-converting digital assets. Improve user experience, performance, and business results.',
    keywords: 'website redesign, site refresh, website revamp, website modernization, UX redesign, website makeover, responsive redesign, website overhaul, website conversion optimization, web design update',
    category: 'Development',
    investment: '$12,000 - $50,000',
    timeline: '8-14 weeks',
    features: ['UX Redesign', 'Information Architecture', 'Content Migration', 'Performance Improvement', 'SEO Preservation']
  },
  'performance-optimization': {
    title: 'Website Performance Optimization Services | Speed Improvements | RTN Global',
    description: 'Website performance optimization services that enhance page speed, user experience, and conversion rates. Make your website lightning-fast across all devices and connections.',
    keywords: 'website performance optimization, page speed optimization, website speed, core web vitals, performance tuning, image optimization, code minification, caching implementation, website acceleration, google page speed',
    category: 'Development',
    investment: '$3,500 - $10,000',
    timeline: '2-4 weeks',
    features: ['Page Speed Analysis', 'Image Optimization', 'Code Minification', 'Caching Implementation', 'Core Web Vitals']
  },
  'responsive-web-design': {
    title: 'Responsive Web Design Services | Mobile-First Design | RTN Global',
    description: 'Professional responsive web design services that ensure your website performs flawlessly across all devices and screen sizes. Create seamless experiences from desktop to mobile.',
    keywords: 'responsive web design, mobile-first design, adaptive website, responsive layout, cross-device compatibility, fluid design, mobile optimization, responsive development, media queries, mobile-friendly website',
    category: 'Design',
    investment: '$6,000 - $20,000',
    timeline: '4-8 weeks',
    features: ['Mobile-First Approach', 'Fluid Grids', 'Flexible Media', 'Cross-Device Testing', 'Touch-Friendly Design']
  },
  'technical-seo': {
    title: 'Technical SEO Services | Site Structure & Performance | RTN Global',
    description: 'Technical SEO services that fix critical issues affecting your search visibility. Improve site architecture, crawlability, indexation, and technical performance for better rankings.',
    keywords: 'technical SEO, site architecture, crawlability, indexation, site speed optimization, structured data, schema markup, technical SEO audit, XML sitemaps, robots.txt, technical SEO consulting',
    category: 'Marketing',
    investment: '$2,000 - $5,000/month',
    timeline: '4-8 weeks + ongoing',
    features: ['Site Architecture', 'Crawlability Improvements', 'Speed Optimization', 'Structured Data', 'Technical Audits']
  },
  'on-page-seo': {
    title: 'On-Page SEO Services | Content & Structure Optimization | RTN Global',
    description: 'On-page SEO services that optimize your website content, structure, and HTML elements to improve search rankings. Enhance relevance and visibility for your target keywords.',
    keywords: 'on-page SEO, on-site SEO, content optimization, meta tag optimization, header tags, internal linking, keyword optimization, content SEO, on-page factors, SEO content writing',
    category: 'Marketing',
    investment: '$1,800 - $4,500/month',
    timeline: 'Ongoing (3-6 months)',
    features: ['Content Optimization', 'Meta Tag Enhancement', 'Header Structure', 'Internal Linking', 'Image Optimization']
  },
  'off-page-seo': {
    title: 'Off-Page SEO Services | Authority Building | RTN Global',
    description: 'Off-page SEO services that build your website\'s authority through quality backlinks and digital PR. Enhance your online reputation to improve search rankings and visibility.',
    keywords: 'off-page SEO, link building, backlink acquisition, digital PR, brand mentions, guest posting, off-site SEO, domain authority, backlink profile, link building strategy, reputation management',
    category: 'Marketing',
    investment: '$2,000 - $6,000/month',
    timeline: 'Ongoing (6-12 months)',
    features: ['Link Building', 'Digital PR', 'Guest Posting', 'Brand Mentions', 'Reputation Management']
  },
  'local-seo': {
    title: 'Local SEO Services | Google Maps & Business Visibility | RTN Global',
    description: 'Local SEO services that help your business dominate local search results and Google Maps. Attract more nearby customers and increase foot traffic to your locations.',
    keywords: 'local SEO, Google Business Profile, local citations, local search, map pack, local rankings, GMB optimization, local keywords, review management, local backlinks, local search marketing',
    category: 'Marketing',
    investment: '$1,200 - $3,000/month',
    timeline: 'Ongoing (3-6 months)',
    features: ['Google Business Profile', 'Local Citations', 'Review Management', 'Local Keywords', 'Map Optimization']
  },
  'ecommerce-seo': {
    title: 'E-Commerce SEO Services | Online Store Optimization | RTN Global',
    description: 'Specialized e-commerce SEO services that increase organic traffic and sales for online stores. Optimize product pages, categories, and technical elements for higher conversion rates.',
    keywords: 'e-commerce SEO, product page optimization, category page SEO, shopping feed optimization, e-commerce structured data, product schema, e-commerce keyword research, Shopify SEO, WooCommerce SEO, marketplace optimization',
    category: 'Marketing',
    investment: '$2,500 - $7,500/month',
    timeline: 'Ongoing (6-12 months)',
    features: ['Product Page Optimization', 'Category Structure', 'Shopping Feed Enhancement', 'E-commerce Schema', 'Product Reviews']
  },
  'mobile-seo': {
    title: 'Mobile SEO Services | Smartphone & Tablet Optimization | RTN Global',
    description: 'Mobile SEO services that optimize your website for smartphones and tablets. Improve mobile-first indexing, usability, and speed for better mobile search rankings.',
    keywords: 'mobile SEO, mobile-first indexing, mobile usability, mobile page speed, AMP, mobile search optimization, responsive SEO, mobile UX, smartphone optimization, mobile search ranking factors',
    category: 'Marketing',
    investment: '$1,800 - $4,000/month',
    timeline: '4-8 weeks + ongoing',
    features: ['Mobile-First Indexing', 'Mobile Speed', 'Touch Element Spacing', 'Mobile Content', 'AMP Implementation']
  },
  'seo-audit': {
    title: 'SEO Audit Services | Comprehensive Site Analysis | RTN Global',
    description: 'In-depth SEO audit services that analyze your website\'s search performance and provide actionable recommendations. Identify opportunities and fix issues affecting your rankings.',
    keywords: 'SEO audit, website audit, SEO analysis, search engine optimization audit, technical SEO audit, content audit, backlink audit, competitor SEO analysis, SEO report, SEO recommendations',
    category: 'Marketing',
    investment: '$2,500 - $7,500',
    timeline: '2-4 weeks',
    features: ['Technical Analysis', 'Content Evaluation', 'Backlink Review', 'Competitor Research', 'Prioritized Roadmap']
  },
  'keyword-research': {
    title: 'Keyword Research Services | Strategic Search Targeting | RTN Global',
    description: 'Data-driven keyword research services to identify the most valuable search terms for your business. Develop a strategic targeting plan to capture qualified organic traffic.',
    keywords: 'keyword research, keyword analysis, search term research, keyword strategy, competitive keyword analysis, long-tail keywords, semantic keywords, keyword mapping, keyword difficulty, search intent analysis',
    category: 'Marketing',
    investment: '$1,500 - $5,000',
    timeline: '2-3 weeks',
    features: ['Keyword Discovery', 'Search Volume Analysis', 'Competition Assessment', 'User Intent Classification', 'Keyword Mapping']
  },
  'link-building': {
    title: 'Link Building Services | Authority & Ranking Improvement | RTN Global',
    description: 'Strategic link building services to improve your website\'s authority and search rankings. We acquire high-quality backlinks using ethical, sustainable tactics that drive long-term results.',
    keywords: 'link building services, backlink acquisition, quality backlinks, SEO link building, authority building, guest posting, resource link building, broken link building, PR backlinks, white hat link building',
    category: 'Marketing',
    investment: '$2,000 - $6,000/month',
    timeline: 'Ongoing (6-12 months)',
    features: ['Content-Based Link Building', 'Digital PR', 'Guest Posting', 'Resource Link Building', 'Competitor Analysis']
  },
  'reputation-management': {
    title: 'Online Reputation Management Services | Brand Monitoring | RTN Global',
    description: 'Protect and enhance your brand\'s online reputation with our comprehensive reputation management services. We monitor, manage, and improve how your business is perceived online.',
    keywords: 'online reputation management, ORM, brand reputation, review management, negative content suppression, brand monitoring, crisis management, sentiment analysis, reputation protection, reputation repair',
    category: 'Marketing',
    investment: '$2,000 - $5,000/month',
    timeline: 'Ongoing (3-6 months)',
    features: ['Brand Monitoring', 'Review Management', 'Content Suppression', 'Crisis Planning', 'Sentiment Analysis']
  },
  'advanced-cro': {
    title: 'Conversion Rate Optimization Services | CRO Experts | RTN Global',
    description: 'Data-driven conversion rate optimization services that transform website visitors into customers. We use advanced testing and analysis to systematically improve conversion metrics.',
    keywords: 'conversion rate optimization, CRO, A/B testing, website conversion, conversion funnel optimization, landing page optimization, checkout optimization, user behavior analysis, heatmap analysis, conversion analytics',
    category: 'Marketing',
    investment: '$3,000 - $7,500/month',
    timeline: 'Ongoing (3-6 months)',
    features: ['User Behavior Analysis', 'A/B Testing', 'Landing Page Optimization', 'Conversion Funnel Analysis', 'Personalization']
  },
  'marketing-automation': {
    title: 'Marketing Automation Services | Lead Nurturing Systems | RTN Global',
    description: 'Implement powerful marketing automation systems that nurture leads, deliver personalized experiences, and streamline your marketing operations for better results and efficiency.',
    keywords: 'marketing automation, email automation, lead nurturing, customer journey automation, marketing workflows, drip campaigns, behavior-based marketing, CRM integration, marketing efficiency, marketing technology',
    category: 'Marketing',
    investment: '$3,500 - $10,000 setup + $1,800 - $5,000/month',
    timeline: '4-8 weeks + ongoing',
    features: ['Automation Setup', 'Lead Nurturing', 'Journey Mapping', 'Behavior Triggers', 'CRM Integration']
  },
  'mobile-app-design': {
    title: 'Mobile App UI/UX Design Services | User Experience Experts | RTN Global',
    description: 'Create intuitive, engaging mobile app interfaces with our specialized UI/UX design services. We design mobile experiences that drive user adoption, satisfaction, and business success.',
    keywords: 'mobile app design, app UI design, app UX design, mobile user experience, app interface design, iOS design, Android design, mobile app wireframes, app prototyping, interaction design, mobile usability',
    category: 'Design',
    investment: '$12,000 - $45,000',
    timeline: '6-12 weeks',
    features: ['User Research', 'Information Architecture', 'Wireframing', 'Visual Design', 'Interaction Design']
  },
  'website-mockup': {
    title: 'Website Mockup Design Services | Visual Web Design | RTN Global',
    description: 'Professional website mockup design services that visualize your website before development. Create realistic visual designs that align stakeholders and guide effective implementation.',
    keywords: 'website mockup design, web visual design, mockup creation, website visuals, UI mockups, high-fidelity mockups, web design visualization, website concept design, responsive mockups, design handoff',
    category: 'Design',
    investment: '$4,000 - $15,000',
    timeline: '2-4 weeks',
    features: ['Visual Design', 'Layout Creation', 'Color & Typography', 'Responsive Visualization', 'Interactive Elements']
  },
  'design-system': {
    title: 'Design System Creation Services | Brand Consistency | RTN Global',
    description: 'Build comprehensive design systems that ensure consistency across all your digital products. Create unified design languages that scale efficiently and improve user experiences.',
    keywords: 'design system creation, UI component library, design pattern library, visual language development, design tokens, design guidelines, product design system, UI kit, design consistency, design governance',
    category: 'Design',
    investment: '$15,000 - $75,000',
    timeline: '8-16 weeks',
    features: ['Visual Language', 'Component Library', 'Pattern Documentation', 'Design Principles', 'Governance Framework']
  },
  'website-maintenance': {
    title: 'Website Maintenance Services | Security & Updates | RTN Global',
    description: 'Professional website maintenance services to keep your site secure, up-to-date, and performing optimally. We handle updates, security, backups, and technical support.',
    keywords: 'website maintenance, site maintenance, website updates, website security, website support, WordPress maintenance, site management, website care, website upkeep, technical maintenance',
    category: 'Development',
    investment: '$250 - $1,500/month',
    timeline: 'Ongoing monthly service',
    features: ['Software Updates', 'Security Monitoring', 'Backups', 'Technical Support', 'Performance Optimization']
  },
  'website-migration': {
    title: 'Website Migration Services | Platform & CMS Transitions | RTN Global',
    description: 'Expert website migration services that ensure a seamless transition to a new platform or CMS while preserving SEO rankings, content, and functionality.',
    keywords: 'website migration, site migration, CMS migration, WordPress migration, Shopify migration, platform migration, website transfer, domain migration, server migration, SEO migration',
    category: 'Development',
    investment: '$5,000 - $15,000',
    timeline: '4-8 weeks',
    features: ['Content Migration', 'SEO Preservation', 'Redirect Management', 'Design Transfer', 'Post-Migration Support']
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
      url: `https://rtnglobal.site/services/${serviceId}`,
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
      creator: '@rtnglobalofficial',
      site: '@rtnglobalofficial'
    },
    alternates: {
      canonical: `https://rtnglobal.site/services/${serviceId}`,
      languages: {
        'en-US': `https://rtnglobal.site/services/${serviceId}`,
        'en-GB': `https://rtnglobal.site/services/${serviceId}`,
        'fr': `https://rtnglobal.site/fr/services/${serviceId}`,
        'de': `https://rtnglobal.site/de/services/${serviceId}`,
        'es': `https://rtnglobal.site/es/services/${serviceId}`,
      }
    },
    authors: [{ name: 'RTN Global Team' }],
    publisher: 'RTN Global',
    creator: 'Muhammad Tayyab',
    category: serviceInfo.category,
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
      'twitter:label1': serviceInfo.investment ? 'Investment' : 'Service Category',
      'twitter:data1': serviceInfo.investment || serviceInfo.category,
      'twitter:label2': serviceInfo.timeline ? 'Timeline' : 'Focus',
      'twitter:data2': serviceInfo.timeline || 'Results-Driven Approach',
      'service:category': serviceInfo.category,
      'service:name': serviceName,
      'service:features': serviceInfo.features ? serviceInfo.features.join(', ') : 'Custom Solutions',
      'service:id': serviceId,
      'contact:email': 'info@rtnglobal.site',
      'contact:phone': '+1 (505) 528 0265',
      'contact:address': '1209 MOUNTAIN ROAD PLNE, STE R, ALBUQUERQUE, NM, 87110, US'
    }
  }
} 