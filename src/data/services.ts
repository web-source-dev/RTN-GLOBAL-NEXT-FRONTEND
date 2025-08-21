export type IconType = 
  | 'code'
  | 'trending-up'
  | 'pen-tool'
  | 'settings'
  | 'search'
  | 'file-text'
  | 'share2'
  | 'mail'
  | 'smartphone'
  | 'shopping-bag'
  | 'palette'
  | 'bar-chart';

export type ServiceFeature = {
  title: string
  description: string
}

export type ServiceBenefit = {
  title: string
  description: string
}

export type ServiceTestimonial = {
  content: string
  author: string
  company: string
  role: string
  avatar?: string
}

export type RelatedCaseStudy = {
  title: string
  slug: string
  image: string
  description: string
}

export type ServiceFAQ = {
  question: string
  answer: string
}

export type Service = {
  id: string
  slug: string
  title: string
  shortTitle?: string
  description: string
  fullDescription: string
  icon: IconType
  image: string
  features: string[]
  benefits: string[]
  process?: {
    title: string
    steps: {
      title: string
      description: string
    }[]
  }
  testimonial?: ServiceTestimonial
  caseStudies?: RelatedCaseStudy[]
  faqs?: ServiceFAQ[]
  callToAction?: {
    title: string
    description: string
    buttonText: string
    buttonLink: string
  }
  category: 'development' | 'marketing' | 'design' | 'strategy'
  technologies?: string[]
  deliverables?: string[]
  timeline?: string
  investment?: {
    startingAt: string
    description: string
  }
  featured?: boolean
}

export const serviceCategories = [
  {
    id: 'development',
    title: 'Development',
    description: 'Custom web and mobile applications built with cutting-edge technologies',
    icon: 'code'
  },
  {
    id: 'marketing',
    title: 'Marketing',
    description: 'Strategic digital marketing services to grow your brand and drive conversions',
    icon: 'trending-up'
  },
  {
    id: 'design',
    title: 'Design',
    description: 'Beautiful, user-centered design that enhances your brand and user experience',
    icon: 'pen-tool'
  },
  {
    id: 'strategy',
    title: 'Strategy',
    description: 'Data-driven strategies to guide your business growth and digital transformation',
    icon: 'settings'
  }
]

export const services: Record<string, Service> = {
  'digital-strategy': {
    id: 'digital-strategy',
    slug: 'digital-strategy',
    title: 'Digital Strategy Consulting',
    shortTitle: 'Digital Strategy',
    description: 'Comprehensive analysis and strategic planning for your digital presence.',
    fullDescription: 'We craft comprehensive digital strategies tailored to your business goals, audience, and market positioning to maximize your online impact. Our team analyzes your current digital ecosystem, identifies opportunities for growth, and develops a roadmap for success.',
    icon: 'settings',
    image: '/images/services/digital-strategy.jpg',
    features: [
      'Digital Ecosystem Analysis',
      'Competitive Landscape Review',
      'Target Audience Identification',
      'Digital Transformation Roadmap',
      'Analytics Setup & Monitoring',
      'ROI Measurement Framework'
    ],
    benefits: [
      'Clear direction for digital initiatives',
      'Data-driven decision making',
      'Improved ROI on digital investments',
      'Cohesive brand experience across channels',
      'Measurable results and adaptable strategies',
      'Competitive advantage in your market'
    ],
    process: {
      title: 'Our Strategic Approach',
      steps: [
        {
          title: 'Discovery & Assessment',
          description: 'We analyze your current digital presence, business goals, and competitive landscape.'
        },
        {
          title: 'Strategic Planning',
          description: 'We develop a comprehensive strategy tailored to your specific needs and objectives.'
        },
        {
          title: 'Implementation Roadmap',
          description: 'We create a detailed timeline and action plan for executing the strategy.'
        },
        {
          title: 'Measurement & Optimization',
          description: 'We continuously monitor performance and refine the strategy for optimal results.'
        }
      ]
    },
    testimonial: {
      content: "RTN Global's strategic guidance transformed our digital presence. Their comprehensive approach helped us identify opportunities we hadn't considered and create a roadmap that aligned perfectly with our business objectives.",
      author: "Michael Robertson",
      company: "Innovate Financial",
      role: "Chief Marketing Officer"
    },
    caseStudies: [
      {
        title: "Digital Transformation for Regional Bank",
        slug: "digital-transformation-regional-bank",
        image: "/images/portfolio/finance-digital-transformation.jpg",
        description: "How we helped a regional bank modernize their digital presence and increase online account openings by 156%."
      },
      {
        title: "E-commerce Strategy for Fashion Retailer",
        slug: "ecommerce-strategy-fashion-retailer",
        image: "/images/portfolio/fashion-ecommerce.jpg",
        description: "Strategic digital roadmap that helped a fashion retailer achieve 245% growth in online sales."
      }
    ],
    faqs: [
      {
        question: "What is involved in a digital strategy consultation?",
        answer: "Our digital strategy consultation begins with understanding your business goals, evaluating your current digital presence, analyzing your competition, and identifying opportunities. We then develop a comprehensive strategy document with specific recommendations, timelines, and metrics for success."
      },
      {
        question: "How long does it take to develop a digital strategy?",
        answer: "Typically, our digital strategy development process takes 3-4 weeks. This includes discovery, analysis, strategy development, and presentation. The timeline may vary based on the complexity of your business and the scope of the strategy."
      },
      {
        question: "How do you measure the success of a digital strategy?",
        answer: "We establish clear KPIs (Key Performance Indicators) aligned with your business objectives. These may include metrics like conversion rate improvements, increased qualified traffic, higher engagement, lead quality, customer acquisition cost, and ROI on digital marketing spend."
      }
    ],
    category: 'strategy',
    timeline: '3-4 weeks',
    investment: {
      startingAt: '$299',
      description: 'Investment varies based on business size and strategy complexity.'
    },
    featured: true
  },
  'seo-optimization': {
    id: 'seo-optimization',
    slug: 'seo-optimization',
    title: 'Search Engine Optimization',
    shortTitle: 'SEO',
    description: 'Improve your search engine rankings and increase organic traffic.',
    fullDescription: 'Our data-driven SEO services focus on sustainable growth through ethical optimization practices. We analyze your website, content, and competition to develop a comprehensive SEO strategy that drives qualified traffic to your business.',
    icon: 'search',
    image: '/images/services/seo.jpg',
    features: [
      'Comprehensive SEO Audit',
      'Keyword Research & Analysis',
      'On-Page SEO Optimization',
      'Technical SEO Improvements',
      'Content Gap Analysis',
      'Local SEO Optimization',
      'Link Building Strategies'
    ],
    benefits: [
      'Increased organic search visibility',
      'Higher quality website traffic',
      'Improved user experience',
      'Better conversion rates',
      'Long-term sustainable results',
      'Reduced dependence on paid advertising'
    ],
    process: {
      title: 'Our SEO Process',
      steps: [
        {
          title: 'Initial Audit & Analysis',
          description: 'We conduct a thorough audit of your website, analyze your competition, and identify opportunities.'
        },
        {
          title: 'Strategy Development',
          description: 'We create a customized SEO strategy based on our findings, targeting high-value keywords and content gaps.'
        },
        {
          title: 'Implementation',
          description: 'We implement on-page and technical SEO improvements, and develop a content and link building plan.'
        },
        {
          title: 'Monitoring & Refinement',
          description: 'We continuously monitor performance, make data-driven adjustments, and provide regular reporting.'
        }
      ]
    },
    testimonial: {
      content: "The SEO improvements made by RTN Global have completely transformed our online visibility. Our organic traffic has increased by over 200% in just six months, and we're now ranking on the first page for our most important keywords.",
      author: "Sarah Johnson",
      company: "EcoLiving Solutions",
      role: "Marketing Director"
    },
    category: 'marketing',
    timeline: 'Ongoing (6-12 month commitment recommended)',
    investment: {
      startingAt: '$199/month',
      description: 'Investment varies based on website size, competition, and scope of work.'
    }
  },
  'content-marketing': {
    id: 'content-marketing',
    slug: 'content-marketing',
    title: 'Content Marketing Strategy',
    shortTitle: 'Content Marketing',
    description: 'Engaging content that attracts and retains a clearly-defined audience.',
    fullDescription: 'We create valuable, relevant content that drives brand awareness, builds trust, and generates leads for your business. Our content marketing strategies are designed to engage your target audience at every stage of the customer journey.',
    icon: 'file-text',
    image: '/images/services/content.jpg',
    features: [
      'Content Strategy Development',
      'Blog & Article Creation',
      'White Papers & Case Studies',
      'Email Newsletter Campaigns',
      'Video & Multimedia Content',
      'Content Performance Analysis',
      'Content Distribution Strategy'
    ],
    benefits: [
      'Increased brand awareness and authority',
      'Higher engagement with target audience',
      'Improved SEO performance',
      'More qualified leads',
      'Better customer retention',
      'Enhanced brand credibility and trust'
    ],
    category: 'marketing',
    timeline: 'Ongoing (3-6 month minimum commitment)',
    investment: {
      startingAt: '$249/month',
      description: 'Investment varies based on content volume, complexity, and distribution strategy.'
    }
  },
  'social-media': {
    id: 'social-media',
    slug: 'social-media',
    title: 'Social Media Marketing',
    shortTitle: 'Social Media',
    description: 'Build your brand presence on social platforms and engage with your audience.',
    fullDescription: 'Our social media marketing services help you build meaningful connections with your audience across social platforms. We develop strategic content, manage community engagement, and create paid advertising campaigns that drive results.',
    icon: 'share2',
    image: '/images/services/social.jpg',
    features: [
      'Social Media Strategy',
      'Content Calendar Planning',
      'Community Management',
      'Social Media Advertising',
      'Influencer Partnership Strategy',
      'Performance Reporting',
      'Social Listening & Analysis'
    ],
    benefits: [
      'Increased brand awareness and visibility',
      'Stronger customer relationships',
      'Direct channel for customer support',
      'Insights into customer preferences',
      'Targeted advertising opportunities',
      'Higher website traffic and conversions'
    ],
    category: 'marketing',
    timeline: 'Ongoing (3 month minimum commitment)',
    investment: {
      startingAt: '$199/month',
      description: 'Investment varies based on platform selection, posting frequency, and ad spend management.'
    }
  },
  'ppc-management': {
    id: 'ppc-management',
    slug: 'ppc-management',
    title: 'PPC & Digital Advertising',
    shortTitle: 'PPC Management',
    description: 'Effective paid advertising to drive targeted traffic and conversions.',
    fullDescription: 'Our PPC management services help you maximize ROI with targeted pay-per-click campaigns across search engines and social platforms. We handle campaign strategy, setup, and continuous optimization to ensure your advertising budget delivers results.',
    icon: 'trending-up',
    image: '/images/services/ppc.jpg',
    features: [
      'Campaign Strategy & Setup',
      'Keyword Research & Selection',
      'Ad Copy & Creative Development',
      'Bid Management & Optimization',
      'Landing Page Optimization',
      'A/B Testing',
      'Performance Analysis & Reporting'
    ],
    benefits: [
      'Immediate visibility for your business',
      'Highly targeted traffic',
      'Flexible budget control',
      'Measurable ROI',
      'Data-driven campaign improvements',
      'Scalable performance as your business grows'
    ],
    category: 'marketing',
    timeline: 'Ongoing (3 month minimum commitment)',
    investment: {
      startingAt: '$199/month + ad spend',
      description: 'Management fee varies based on campaign complexity and ad spend.'
    }
  },
  'email-marketing': {
    id: 'email-marketing',
    slug: 'email-marketing',
    title: 'Email Marketing Campaigns',
    shortTitle: 'Email Marketing',
    description: 'Targeted campaigns to nurture leads and drive customer retention.',
    fullDescription: 'Our email marketing services help you build relationships with your audience through personalized campaigns. We develop strategies to deliver the right message at the right time, nurturing leads and encouraging customer loyalty.',
    icon: 'mail',
    image: '/images/services/email.jpg',
    features: [
      'Email Strategy Development',
      'List Management & Segmentation',
      'Campaign Design & Development',
      'Automation Workflow Setup',
      'A/B Testing',
      'Performance Analytics & Testing',
      'Customer Journey Mapping'
    ],
    benefits: [
      'Direct communication with your audience',
      'Personalized messaging at scale',
      'Higher conversion rates',
      'Improved customer retention',
      'Measurable ROI on campaigns',
      'Automated lead nurturing'
    ],
    category: 'marketing',
    timeline: 'Ongoing (3 month minimum commitment)',
    investment: {
      startingAt: '$599/month',
      description: 'Investment varies based on campaign frequency, complexity, and list size.'
    }
  },
  'web-development': {
    id: 'web-development',
    slug: 'web-development',
    title: 'Custom Web Development',
    shortTitle: 'Web Development',
    description: 'Custom website development using cutting-edge technologies.',
    fullDescription: 'We create responsive, user-friendly websites that convert visitors into customers. Our web development services include everything from simple landing pages to complex e-commerce platforms, all built with scalability and performance in mind.',
    icon: 'code',
    image: '/images/services/web-development.jpg',
    features: [
      'Custom Website Design',
      'E-commerce Development',
      'CMS Integration (WordPress, Shopify)',
      'Responsive & Mobile-First Design',
      'Website Performance Optimization',
      'API Integration',
      'Website Maintenance & Support'
    ],
    benefits: [
      'Professional online presence',
      'Improved user experience',
      'Mobile-friendly functionality',
      'Fast loading speeds',
      'Secure and scalable platform',
      'Easy content management'
    ],
    process: {
      title: 'Our Web Development Process',
      steps: [
        {
          title: 'Discovery & Planning',
          description: 'We understand your business goals, target audience, and website requirements.'
        },
        {
          title: 'Design & Prototyping',
          description: 'We create wireframes and visual designs for your approval before development begins.'
        },
        {
          title: 'Development & Testing',
          description: 'Our developers build your site and ensure it works perfectly across all devices.'
        },
        {
          title: 'Launch & Support',
          description: 'We launch your website and provide ongoing support and maintenance as needed.'
        }
      ]
    },
    testimonial: {
      content: "RTN Global built us a website that not only looks amazing but also performs exceptionally well. The attention to detail and focus on user experience has resulted in higher engagement and conversion rates. They were a pleasure to work with throughout the entire process.",
      author: "David Miller",
      company: "Precision Manufacturing Inc.",
      role: "CEO"
    },
    category: 'development',
    timeline: '8-12 weeks',
    technologies: [
      'React', 'Next.js', 'WordPress', 'Shopify', 'WooCommerce', 'Node.js'
    ],
    deliverables: [
      'Custom designed website',
      'Mobile and desktop-optimized views',
      'Content management system setup',
      'Analytics integration',
      'Search engine optimization',
      '30 days post-launch support'
    ],
    investment: {
      startingAt: '$899',
      description: 'Investment varies based on website complexity and feature requirements.'
    },
    featured: true
  },
  'mobile-apps': {
    id: 'mobile-apps',
    slug: 'mobile-apps',
    title: 'Mobile App Development',
    shortTitle: 'Mobile Apps',
    description: 'Native and cross-platform mobile applications for iOS and Android.',
    fullDescription: 'We design and develop engaging, functional mobile experiences for your users. Our mobile app development services include native iOS and Android applications as well as cross-platform solutions using React Native.',
    icon: 'smartphone',
    image: '/images/services/mobile.jpg',
    features: [
      'UI/UX Design for Mobile',
      'Native iOS & Android Development',
      'React Native Cross-Platform Apps',
      'App Store Optimization',
      'API Development & Integration',
      'Analytics Implementation',
      'Ongoing Maintenance & Support'
    ],
    benefits: [
      'Expanded customer reach',
      'Enhanced user engagement',
      'Improved brand loyalty',
      'Additional revenue stream',
      'Competitive advantage',
      'Valuable user insights'
    ],
    category: 'development',
    timeline: '12-16 weeks',
    technologies: [
      'React Native', 'Swift', 'Kotlin', 'Firebase', 'Node.js', 'MongoDB'
    ],
    investment: {
      startingAt: '$2,499',
      description: 'Investment varies based on app complexity, features, and platforms.'
    }
  },
  'e-commerce': {
    id: 'e-commerce',
    slug: 'e-commerce',
    title: 'E-commerce Development',
    shortTitle: 'E-commerce',
    description: 'Custom online stores that drive sales and provide excellent shopping experiences.',
    fullDescription: 'We build custom e-commerce solutions that help you sell products and services online effectively. Our e-commerce websites are designed to maximize conversions, streamline operations, and provide seamless customer experiences.',
    icon: 'shopping-bag',
    image: '/images/services/ecommerce.jpg',
    features: [
      'Custom E-commerce Website Design',
      'Shopping Cart & Checkout Optimization',
      'Payment Gateway Integration',
      'Inventory Management Systems',
      'Order Fulfillment Workflow',
      'Customer Account Management',
      'Mobile Commerce Optimization'
    ],
    benefits: [
      '24/7 sales capability',
      'Expanded market reach',
      'Streamlined purchasing process',
      'Integrated inventory management',
      'Detailed sales analytics',
      'Scalable growth potential'
    ],
    category: 'development',
    timeline: '10-14 weeks',
    technologies: [
      'Shopify', 'WooCommerce', 'Magento', 'BigCommerce', 'Custom Solutions'
    ],
    investment: {
      startingAt: '$1,499',
      description: 'Investment varies based on store complexity, product volume, and custom features.'
    },
    featured: true
  },
  'frontend-development': {
    id: 'frontend-development',
    slug: 'frontend-development',
    title: 'Frontend Web Development',
    shortTitle: 'Frontend Development',
    description: 'Modern, responsive frontend development with cutting-edge frameworks and technologies.',
    fullDescription: 'We build modern, interactive, and responsive user interfaces that engage your visitors and convert them into customers. Our frontend development services leverage the latest frameworks and technologies to create fast, accessible, and visually appealing websites.',
    icon: 'code',
    image: '/images/services/frontend-development.jpg',
    features: [
      'Responsive Design Implementation',
      'Modern JavaScript Frameworks (React, Vue, Angular)',
      'Progressive Web Applications (PWAs)',
      'Cross-Browser Compatibility',
      'UI/UX Implementation',
      'Frontend Performance Optimization',
      'Accessibility Compliance'
    ],
    benefits: [
      'Enhanced user engagement and satisfaction',
      'Faster page load times',
      'Responsive design for all devices',
      'Improved conversion rates',
      'SEO-friendly implementation',
      'Modern, interactive experiences'
    ],
    category: 'development',
    timeline: '4-8 weeks',
    technologies: [
      'React', 'Next.js', 'Vue.js', 'Angular', 'TypeScript', 'Tailwind CSS', 'Bootstrap'
    ],
    investment: {
      startingAt: '$799',
      description: 'Investment varies based on project complexity and feature requirements.'
    }
  },
  'backend-development': {
    id: 'backend-development',
    slug: 'backend-development',
    title: 'Backend Development Services',
    shortTitle: 'Backend Development',
    description: 'Scalable, secure backend systems that power your web applications and digital platforms.',
    fullDescription: 'Our backend development services provide the robust foundation your digital products need. We build scalable, secure, and high-performance server-side applications, APIs, and databases that power seamless user experiences and business operations.',
    icon: 'code',
    image: '/images/services/backend-development.jpg',
    features: [
      'Custom API Development',
      'Database Design & Optimization',
      'Server Architecture',
      'Authentication & Authorization',
      'Third-party Service Integration',
      'Performance Optimization',
      'Security Implementation'
    ],
    benefits: [
      'Scalable infrastructure for growth',
      'Secure data handling and storage',
      'Efficient application performance',
      'Robust integration capabilities',
      'Streamlined business processes',
      'Reliable system uptime'
    ],
    category: 'development',
    timeline: '6-12 weeks',
    technologies: [
      'Node.js', 'Python', 'PHP', 'Java', 'MongoDB', 'PostgreSQL', 'MySQL', 'AWS', 'Firebase'
    ],
    investment: {
      startingAt: '$1,299',
      description: 'Investment varies based on system complexity and technical requirements.'
    }
  },
  'full-stack-development': {
    id: 'full-stack-development',
    slug: 'full-stack-development',
    title: 'Full Stack Development Services',
    shortTitle: 'Full Stack Development',
    description: 'End-to-end web application development combining frontend and backend expertise.',
    fullDescription: 'Our full stack development services provide complete end-to-end solutions for your digital products. We combine frontend and backend expertise to build cohesive, scalable applications that deliver exceptional user experiences while meeting complex business requirements.',
    icon: 'code',
    image: '/images/services/full-stack-development.jpg',
    features: [
      'Complete Web Application Development',
      'Frontend & Backend Integration',
      'Database Design & Implementation',
      'API Development & Integration',
      'Authentication & Authorization Systems',
      'Full Development Lifecycle Management',
      'DevOps & Deployment Solutions'
    ],
    benefits: [
      'Cohesive end-to-end solution',
      'Streamlined development process',
      'Consistent technology stack',
      'Reduced integration issues',
      'Comprehensive technical expertise',
      'Faster time to market'
    ],
    process: {
      title: 'Our Development Approach',
      steps: [
        {
          title: 'Discovery & Requirements',
          description: 'We deeply understand your business needs, technical requirements, and user expectations.'
        },
        {
          title: 'Architecture & Planning',
          description: 'We design the technical architecture and plan the development roadmap for your application.'
        },
        {
          title: 'Agile Development',
          description: 'We build your application in iterative sprints with regular demos and feedback cycles.'
        },
        {
          title: 'Testing & Deployment',
          description: 'We thoroughly test your application and deploy it to your chosen infrastructure.'
        }
      ]
    },
    category: 'development',
    timeline: '10-16 weeks',
    technologies: [
      'JavaScript/TypeScript', 'React', 'Node.js', 'Python', 'MongoDB', 'PostgreSQL', 'AWS', 'Docker'
    ],
    investment: {
      startingAt: '$1,999',
      description: 'Investment varies based on application complexity and feature set.'
    }
  },
  'wordpress-development': {
    id: 'wordpress-development',
    slug: 'wordpress-development',
    title: 'WordPress Development Services',
    shortTitle: 'WordPress Development',
    description: 'Custom WordPress websites and themes that combine beautiful design with powerful functionality.',
    fullDescription: 'Our WordPress development services create custom, high-performance WordPress websites tailored to your specific needs. We build bespoke themes, develop custom plugins, and optimize your WordPress site for speed, security, and SEO success.',
    icon: 'code',
    image: '/images/services/wordpress-development.jpg',
    features: [
      'Custom WordPress Theme Development',
      'Plugin Development & Customization',
      'WooCommerce Integration',
      'WordPress Performance Optimization',
      'WordPress Security Implementation',
      'Multilingual Website Setup',
      'WordPress Maintenance & Support'
    ],
    benefits: [
      'User-friendly content management',
      'Scalable website architecture',
      'SEO-optimized foundation',
      'Mobile-responsive design',
      'Secure website configuration',
      'Easy future expansion'
    ],
    category: 'development',
    timeline: '6-10 weeks',
    technologies: [
      'WordPress', 'PHP', 'MySQL', 'JavaScript', 'WooCommerce', 'ACF', 'Elementor', 'Beaver Builder'
    ],
    investment: {
      startingAt: '$499',
      description: 'Investment varies based on site complexity and custom functionality.'
    }
  },
  'shopify-development': {
    id: 'shopify-development',
    slug: 'shopify-development',
    title: 'Shopify Development Services',
    shortTitle: 'Shopify Development',
    description: 'Custom Shopify stores that drive sales and deliver exceptional shopping experiences.',
    fullDescription: 'Our Shopify development services help you build a high-converting e-commerce store on the Shopify platform. We create custom themes, develop specialized functionality, and optimize your store for maximum sales and customer satisfaction.',
    icon: 'shopping-bag',
    image: '/images/services/shopify-development.jpg',
    features: [
      'Custom Shopify Theme Development',
      'Shopify Plus Implementation',
      'Custom Shopify App Development',
      'Payment Gateway Integration',
      'Shopify Store Optimization',
      'Product Data Migration',
      'Shopify Marketing Setup'
    ],
    benefits: [
      'Professional storefront design',
      'Optimized checkout process',
      'Mobile-friendly shopping experience',
      'Integrated marketing tools',
      'Secure payment processing',
      'Scalable for business growth'
    ],
    category: 'development',
    timeline: '6-10 weeks',
    technologies: [
      'Shopify', 'Shopify Plus', 'Liquid', 'JavaScript', 'Shopify API', 'Shopify Apps'
    ],
    investment: {
      startingAt: '$799',
      description: 'Investment varies based on store complexity and custom requirements.'
    }
  },
  'web-app-development': {
    id: 'web-app-development',
    slug: 'web-app-development',
    title: 'Custom Web Application Development',
    shortTitle: 'Web App Development',
    description: 'Tailored web applications that solve complex business challenges and streamline operations.',
    fullDescription: 'We develop custom web applications that address your unique business needs and challenges. Our web app development services focus on creating scalable, secure, and user-friendly applications that automate processes, improve efficiency, and drive growth.',
    icon: 'code',
    image: '/images/services/web-app-development.jpg',
    features: [
      'Custom Business Application Development',
      'SaaS Application Development',
      'Enterprise Application Integration',
      'Cloud-based Solutions',
      'Real-time Data Processing',
      'Admin Dashboards & Reporting',
      'User Authentication & Permissions'
    ],
    benefits: [
      'Streamlined business operations',
      'Increased team productivity',
      'Reduced operational costs',
      'Better data management',
      'Enhanced customer experience',
      'Competitive business advantage'
    ],
    process: {
      title: 'Our Web App Development Process',
      steps: [
        {
          title: 'Business Analysis',
          description: 'We thoroughly analyze your business needs, workflows, and technical requirements.'
        },
        {
          title: 'Solution Architecture',
          description: 'We design a comprehensive technical architecture tailored to your specific needs.'
        },
        {
          title: 'Iterative Development',
          description: 'We build your application in sprints, with regular demonstrations and feedback integration.'
        },
        {
          title: 'Testing & Deployment',
          description: 'We conduct thorough testing and deploy your application with proper documentation.'
        }
      ]
    },
    category: 'development',
    timeline: '12-20 weeks',
    technologies: [
      'React', 'Angular', 'Node.js', 'Python', 'PostgreSQL', 'MongoDB', 'AWS', 'Docker', 'Kubernetes'
    ],
    investment: {
      startingAt: '$2,499',
      description: 'Investment varies based on application complexity and feature requirements.'
    },
    featured: true
  },
  'web-portal-development': {
    id: 'web-portal-development',
    slug: 'web-portal-development',
    title: 'Web Portal Development Services',
    shortTitle: 'Web Portal Development',
    description: 'Custom web portals that connect your business with customers, partners, and employees.',
    fullDescription: 'We create custom web portals that serve as powerful connection points between your business and its stakeholders. Our web portal development services deliver secure, scalable platforms for customer service, partner management, employee intranets, and more.',
    icon: 'code',
    image: '/images/services/web-portal-development.jpg',
    features: [
      'Customer Portal Development',
      'Partner/Vendor Portal Solutions',
      'Employee Intranet Development',
      'Member Management Systems',
      'Secure Authentication & Access Controls',
      'Document Management Features',
      'Reporting & Analytics Dashboards'
    ],
    benefits: [
      'Improved stakeholder engagement',
      'Streamlined information sharing',
      'Enhanced collaboration capabilities',
      'Self-service functionality',
      'Reduced administrative overhead',
      'Better data visibility and insights'
    ],
    category: 'development',
    timeline: '12-20 weeks',
    technologies: [
      'React', 'Angular', 'Node.js', '.NET', 'Java', 'SQL Server', 'PostgreSQL', 'Azure', 'AWS'
    ],
    investment: {
      startingAt: '$1,999',
      description: 'Investment varies based on portal complexity and integration requirements.'
    }
  },
  'website-redesign': {
    id: 'website-redesign',
    slug: 'website-redesign',
    title: 'Website Redesign Services',
    shortTitle: 'Website Redesign',
    description: 'Refresh your digital presence with a strategic website redesign that improves performance and conversions.',
    fullDescription: 'Our website redesign services transform outdated websites into modern, high-performing digital assets. We analyze your current site, identify improvement opportunities, and implement a comprehensive redesign that enhances user experience, brand perception, and business results.',
    icon: 'pen-tool',
    image: '/images/services/website-redesign.jpg',
    features: [
      'Comprehensive Website Audit',
      'UX/UI Redesign',
      'Information Architecture Optimization',
      'Content Strategy & Migration',
      'Performance Improvement',
      'SEO Preservation & Enhancement',
      'Analytics Integration'
    ],
    benefits: [
      'Improved user experience',
      'Higher conversion rates',
      'Modern brand representation',
      'Better mobile responsiveness',
      'Faster page loading times',
      'Enhanced search engine visibility'
    ],
    process: {
      title: 'Our Redesign Approach',
      steps: [
        {
          title: 'Assessment & Discovery',
          description: 'We analyze your current website, user data, and business goals to identify improvement opportunities.'
        },
        {
          title: 'Strategy & Planning',
          description: 'We develop a comprehensive redesign strategy covering UX, content, technology, and migration.'
        },
        {
          title: 'Design & Development',
          description: 'We create a fresh design and build the new website with improved functionality and performance.'
        },
        {
          title: 'Launch & Optimization',
          description: 'We manage the launch process and continue optimizing the site based on user data and feedback.'
        }
      ]
    },
    category: 'development',
    timeline: '8-14 weeks',
    investment: {
      startingAt: '$599',
      description: 'Investment varies based on website size, complexity, and redesign scope.'
    }
  },
  'performance-optimization': {
    id: 'performance-optimization',
    slug: 'performance-optimization',
    title: 'Website Performance Optimization',
    shortTitle: 'Performance Optimization',
    description: 'Speed up your website and improve user experience with our comprehensive optimization services.',
    fullDescription: 'Our website performance optimization services transform slow-loading websites into lightning-fast digital experiences. We implement technical improvements that enhance page speed, user experience, and search engine rankings while reducing bounce rates and improving conversions.',
    icon: 'bar-chart',
    image: '/images/services/performance-optimization.jpg',
    features: [
      'Page Speed Analysis & Optimization',
      'Server Response Time Improvement',
      'Image & Asset Optimization',
      'Code Minification & Compression',
      'Caching Implementation',
      'Database Optimization',
      'Core Web Vitals Enhancement'
    ],
    benefits: [
      'Faster page loading times',
      'Improved user experience',
      'Higher search engine rankings',
      'Reduced bounce rates',
      'Increased conversion rates',
      'Better mobile performance'
    ],
    category: 'development',
    timeline: '2-4 weeks',
    technologies: [
      'Lighthouse', 'WebPageTest', 'Google PageSpeed Insights', 'CDN', 'Caching', 'Image Optimization'
    ],
    investment: {
      startingAt: '$199',
      description: 'Investment varies based on website size, current performance, and optimization goals.'
    }
  },
  'responsive-web-design': {
    id: 'responsive-web-design',
    slug: 'responsive-web-design',
    title: 'Responsive Web Design Services',
    shortTitle: 'Responsive Design',
    description: 'Create seamless user experiences across all devices with mobile-first responsive design.',
    fullDescription: 'Our responsive web design services ensure your website delivers an optimal viewing experience across all devices and screen sizes. We implement mobile-first design principles that adapt fluidly to smartphones, tablets, laptops, and desktops, enhancing usability and engagement.',
    icon: 'pen-tool',
    image: '/images/services/responsive-design.jpg',
    features: [
      'Mobile-First Design Approach',
      'Fluid Grid Layouts',
      'Flexible Images & Media',
      'CSS Media Queries Implementation',
      'Touch-Friendly Interface Design',
      'Cross-Device Testing & Optimization',
      'Responsive Navigation Solutions'
    ],
    benefits: [
      'Consistent experience across all devices',
      'Improved mobile user engagement',
      'Higher search engine rankings',
      'Reduced bounce rates on mobile',
      'Future-proof design approach',
      'Single website management'
    ],
    category: 'design',
    timeline: '4-8 weeks',
    technologies: [
      'HTML5', 'CSS3', 'JavaScript', 'Bootstrap', 'Tailwind CSS', 'CSS Grid', 'Flexbox'
    ],
    investment: {
      startingAt: '$499',
      description: 'Investment varies based on website complexity and design requirements.'
    }
  },
  'ux-design': {
    id: 'ux-design',
    slug: 'ux-design',
    title: 'UX/UI Design Services',
    shortTitle: 'UX/UI Design',
    description: 'User-centered design that enhances experiences and drives conversions.',
    fullDescription: 'Our UX/UI design services focus on creating intuitive, engaging user experiences that align with your business goals. We combine research, testing, and creative design to develop interfaces that users love.',
    icon: 'pen-tool',
    image: '/images/services/ux-design.jpg',
    features: [
      'User Research & Analysis',
      'Information Architecture',
      'Wireframing & Prototyping',
      'Visual Design & Branding',
      'Usability Testing',
      'Responsive Design',
      'Design System Development'
    ],
    benefits: [
      'Improved user satisfaction',
      'Higher conversion rates',
      'Reduced development costs',
      'Decreased customer support inquiries',
      'Strengthened brand perception',
      'Competitive differentiation'
    ],
    category: 'design',
    timeline: '4-8 weeks',
    deliverables: [
      'User research findings',
      'Site architecture',
      'Wireframes',
      'Interactive prototypes',
      'UI style guide',
      'Responsive design specifications'
    ],
    investment: {
      startingAt: '$399',
      description: 'Investment varies based on project scope and complexity.'
    }
  },
  'brand-identity': {
    id: 'brand-identity',
    slug: 'brand-identity',
    title: 'Brand Identity & Design',
    shortTitle: 'Brand Identity',
    description: 'Cohesive brand identities that communicate your values and connect with customers.',
    fullDescription: 'We create powerful brand identities that help you stand out in the marketplace. Our brand design services include logo development, visual identity systems, and comprehensive brand guidelines to ensure consistency across all touchpoints.',
    icon: 'palette',
    image: '/images/services/brand-identity.jpg',
    features: [
      'Brand Strategy & Positioning',
      'Logo Design & Development',
      'Visual Identity System',
      'Typography & Color Selection',
      'Brand Guidelines Creation',
      'Marketing Materials Design',
      'Brand Messaging Development'
    ],
    benefits: [
      'Strong brand recognition',
      'Professional, cohesive appearance',
      'Consistent brand experience',
      'Enhanced credibility and trust',
      'Clear brand differentiation',
      'Improved brand recall'
    ],
    category: 'design',
    timeline: '4-6 weeks',
    deliverables: [
      'Brand strategy document',
      'Logo files in multiple formats',
      'Color palette and typography specifications',
      'Brand guidelines manual',
      'Business card and stationery design',
      'Digital brand assets'
    ],
    investment: {
      startingAt: '$699',
      description: 'Investment varies based on project scope and deliverables.'
    }
  },
  'conversion-optimization': {
    id: 'conversion-optimization',
    slug: 'conversion-optimization',
    title: 'Conversion Rate Optimization',
    shortTitle: 'CRO',
    description: 'Data-driven improvements to turn more visitors into customers.',
    fullDescription: 'Our conversion rate optimization services help you maximize the value of your website traffic. We analyze user behavior, identify conversion barriers, and implement targeted improvements to increase leads, sales, and engagement.',
    icon: 'bar-chart',
    image: '/images/services/conversion-optimization.jpg',
    features: [
      'Comprehensive Conversion Audit',
      'User Behavior Analysis',
      'A/B & Multivariate Testing',
      'Landing Page Optimization',
      'Checkout Process Improvement',
      'Form Optimization',
      'Call-to-Action Enhancement'
    ],
    benefits: [
      'Higher conversion rates',
      'Improved ROI on marketing spend',
      'Enhanced user experience',
      'Data-driven decision making',
      'Increased average order value',
      'Reduced customer acquisition costs'
    ],
    category: 'strategy',
    timeline: 'Ongoing (3 month minimum commitment)',
    investment: {
      startingAt: '$399',
      description: 'Investment varies based on website traffic volume and optimization scope.'
    }
  },
  'technical-seo': {
    id: 'technical-seo',
    slug: 'technical-seo',
    title: 'Technical SEO Services',
    shortTitle: 'Technical SEO',
    description: 'Resolve technical issues that affect your search engine visibility and site performance.',
    fullDescription: 'Our technical SEO services identify and fix underlying issues that prevent your website from achieving optimal search engine visibility. We address crawlability, indexation, site architecture, schema markup, and performance problems to create a solid foundation for your SEO success.',
    icon: 'search',
    image: '/images/services/technical-seo.jpg',
    features: [
      'Site Architecture Analysis',
      'Crawlability & Indexation Audit',
      'Site Speed Optimization',
      'Mobile Usability Improvements',
      'Structured Data Implementation',
      'XML Sitemap Optimization',
      'Robots.txt Configuration'
    ],
    benefits: [
      'Improved search engine crawling',
      'Enhanced indexation of important pages',
      'Faster page loading speeds',
      'Better mobile search performance',
      'Enhanced search results appearance',
      'Strong technical foundation for SEO'
    ],
    category: 'marketing',
    timeline: '4-8 weeks + ongoing monitoring',
    investment: {
      startingAt: '$299/month',
      description: 'Investment varies based on website size, technical issues, and scope of work.'
    }
  },
  'on-page-seo': {
    id: 'on-page-seo',
    slug: 'on-page-seo',
    title: 'On-Page SEO Optimization',
    shortTitle: 'On-Page SEO',
    description: 'Optimize your website content and structure to rank higher for targeted keywords.',
    fullDescription: 'Our on-page SEO services optimize individual web pages to improve their search engine rankings and drive targeted organic traffic. We enhance content relevance, optimize metadata, improve internal linking, and implement best practices that help search engines understand and rank your content.',
    icon: 'search',
    image: '/images/services/on-page-seo.jpg',
    features: [
      'Keyword-Optimized Content Creation',
      'Title Tag & Meta Description Optimization',
      'Header Tag Optimization',
      'Internal Linking Structure',
      'Image Optimization',
      'Content Gap Analysis',
      'Keyword Cannibalization Resolution'
    ],
    benefits: [
      'Higher rankings for target keywords',
      'Improved click-through rates from search',
      'More engaging user experience',
      'Reduced bounce rates',
      'Better content organization',
      'Increased time on site'
    ],
    category: 'marketing',
    timeline: 'Ongoing (3-6 month commitment recommended)',
    investment: {
      startingAt: '$199/month',
      description: 'Investment varies based on site size, content volume, and competition.'
    }
  },
  'off-page-seo': {
    id: 'off-page-seo',
    slug: 'off-page-seo',
    title: 'Off-Page SEO Services',
    shortTitle: 'Off-Page SEO',
    description: 'Build your website\'s authority and reputation through strategic off-page optimization.',
    fullDescription: 'Our off-page SEO services focus on improving your website\'s reputation and authority through external signals. We implement ethical link building strategies, manage online reputation, and enhance your brand presence across the web to boost search engine rankings.',
    icon: 'search',
    image: '/images/services/off-page-seo.jpg',
    features: [
      'Strategic Link Building',
      'Digital PR & Brand Mentions',
      'Guest Posting Opportunities',
      'Social Media Signals',
      'Competitor Backlink Analysis',
      'Local Citation Building',
      'Online Reputation Management'
    ],
    benefits: [
      'Improved domain authority',
      'Higher search engine rankings',
      'Increased referral traffic',
      'Enhanced brand visibility',
      'Stronger industry relationships',
      'Greater brand credibility'
    ],
    category: 'marketing',
    timeline: 'Ongoing (6-12 month commitment recommended)',
    investment: {
      startingAt: '$199/month',
      description: 'Investment varies based on competition, link building goals, and industry difficulty.'
    }
  },
  'local-seo': {
    id: 'local-seo',
    slug: 'local-seo',
    title: 'Local SEO Services',
    shortTitle: 'Local SEO',
    description: 'Dominate local search results and attract nearby customers to your business.',
    fullDescription: 'Our local SEO services help businesses increase visibility in local search results and attract nearby customers. We optimize your Google Business Profile, build local citations, manage reviews, and implement location-based keywords to improve your local search rankings.',
    icon: 'search',
    image: '/images/services/local-seo.jpg',
    features: [
      'Google Business Profile Optimization',
      'Local Keyword Research & Implementation',
      'Local Citation Building & Management',
      'Review Generation & Management',
      'Local Link Building',
      'Local Content Strategy',
      'Local Schema Markup'
    ],
    benefits: [
      'Higher rankings in local search results',
      'Increased visibility in Google Maps',
      'More in-store visits',
      'Improved local brand awareness',
      'Higher conversion rates from local searches',
      'Competitive advantage in your area'
    ],
    category: 'marketing',
    timeline: 'Ongoing (3-6 month minimum commitment)',
    investment: {
      startingAt: '$249/month',
      description: 'Investment varies based on number of locations, competition, and service area.'
    }
  },
  'ecommerce-seo': {
    id: 'ecommerce-seo',
    slug: 'ecommerce-seo',
    title: 'E-Commerce SEO Services',
    shortTitle: 'E-Commerce SEO',
    description: 'Specialized SEO strategies to increase organic traffic and sales for online stores.',
    fullDescription: 'Our e-commerce SEO services are tailored to the unique challenges of online stores. We optimize product pages, category structures, and technical elements to increase organic visibility, drive targeted traffic, and boost online sales.',
    icon: 'search',
    image: '/images/services/ecommerce-seo.jpg',
    features: [
      'Product Page Optimization',
      'Category Page Optimization',
      'E-commerce Keyword Research',
      'Shopping Feed Optimization',
      'E-commerce Structured Data',
      'Product Review Optimization',
      'Internal Linking for Product Discovery'
    ],
    benefits: [
      'Increased organic product visibility',
      'Higher conversion rates',
      'Improved product page rankings',
      'Enhanced shopping experience',
      'Reduced cart abandonment',
      'Competitive advantage in marketplace'
    ],
    process: {
      title: 'Our E-commerce SEO Approach',
      steps: [
        {
          title: 'E-commerce SEO Audit',
          description: 'We analyze your online store\'s current performance and identify opportunities for improvement.'
        },
        {
          title: 'Keyword & Competitor Research',
          description: 'We identify high-value product keywords and analyze competitor strategies in your market.'
        },
        {
          title: 'On-Page & Technical Optimization',
          description: 'We optimize product pages, implement structured data, and address technical issues.'
        },
        {
          title: 'Ongoing Optimization & Reporting',
          description: 'We continually refine our approach based on performance data and market changes.'
        }
      ]
    },
    category: 'marketing',
    timeline: 'Ongoing (6-12 month commitment recommended)',
    investment: {
      startingAt: '$199/month',
      description: 'Investment varies based on store size, number of products, and competition.'
    }
  },
  'mobile-seo': {
    id: 'mobile-seo',
    slug: 'mobile-seo',
    title: 'Mobile SEO Services',
    shortTitle: 'Mobile SEO',
    description: 'Optimize your website for mobile search and provide exceptional mobile user experiences.',
    fullDescription: 'Our mobile SEO services ensure your website performs exceptionally well on smartphones and tablets. We optimize for mobile-first indexing, improve mobile usability, speed, and design to deliver better rankings in mobile search results and enhance user experience.',
    icon: 'search',
    image: '/images/services/mobile-seo.jpg',
    features: [
      'Mobile-First Indexing Optimization',
      'Mobile Speed Optimization',
      'Mobile Usability Improvements',
      'Responsive Design Enhancements',
      'Mobile Content Optimization',
      'Accelerated Mobile Pages (AMP)',
      'Mobile-Specific Schema Markup'
    ],
    benefits: [
      'Improved mobile search rankings',
      'Faster mobile page loading times',
      'Better mobile user experience',
      'Reduced mobile bounce rates',
      'Higher mobile conversion rates',
      'Competitive advantage in mobile search'
    ],
    category: 'marketing',
    timeline: '4-8 weeks + ongoing monitoring',
    investment: {
      startingAt: '$299/month',
      description: 'Investment varies based on website size, current mobile performance, and complexity.'
    }
  },
  'seo-audit': {
    id: 'seo-audit',
    slug: 'seo-audit',
    title: 'Comprehensive SEO Audit Services',
    shortTitle: 'SEO Audit',
    description: 'In-depth analysis of your website\'s SEO performance with actionable recommendations.',
    fullDescription: 'Our comprehensive SEO audit service provides a detailed evaluation of your website\'s search engine optimization. We analyze technical issues, on-page elements, content quality, backlink profile, and competitive landscape to create a prioritized roadmap for improvement.',
    icon: 'search',
    image: '/images/services/seo-audit.jpg',
    features: [
      'Technical SEO Analysis',
      'On-Page SEO Evaluation',
      'Content Quality Assessment',
      'Backlink Profile Analysis',
      'Competitor SEO Comparison',
      'Keywords & Rankings Review',
      'Prioritized Recommendations'
    ],
    benefits: [
      'Clear understanding of SEO strengths and weaknesses',
      'Prioritized roadmap for improvement',
      'Identification of quick wins',
      'Competitive insights',
      'Foundation for successful SEO strategy',
      'Benchmark for measuring future progress'
    ],
    process: {
      title: 'Our SEO Audit Process',
      steps: [
        {
          title: 'Discovery & Data Collection',
          description: 'We gather data about your website, business goals, and current performance metrics.'
        },
        {
          title: 'Comprehensive Analysis',
          description: 'We conduct a thorough examination of all factors affecting your search engine visibility.'
        },
        {
          title: 'Findings & Recommendations',
          description: 'We compile our findings and develop prioritized, actionable recommendations.'
        },
        {
          title: 'Presentation & Strategy',
          description: 'We present our findings and work with you to develop an implementation strategy.'
        }
      ]
    },
    category: 'marketing',
    timeline: '2-4 weeks',
    investment: {
      startingAt: '$149',
      description: 'Investment varies based on website size, complexity, and audit depth.'
    }
  },
  'keyword-research': {
    id: 'keyword-research',
    slug: 'keyword-research',
    title: 'Keyword Research & Strategy',
    shortTitle: 'Keyword Research',
    description: 'Data-driven keyword research to target the right search terms for your business.',
    fullDescription: 'Our keyword research service identifies the most valuable search terms for your business. We analyze search volume, competition, user intent, and business relevance to develop a strategic keyword targeting plan that drives qualified organic traffic to your website.',
    icon: 'search',
    image: '/images/services/keyword-research.jpg',
    features: [
      'Comprehensive Keyword Discovery',
      'Search Volume Analysis',
      'Competition Assessment',
      'User Intent Classification',
      'Long-tail Keyword Opportunities',
      'Semantic Keyword Grouping',
      'Content Gap Analysis'
    ],
    benefits: [
      'Targeted organic traffic strategy',
      'Higher quality website visitors',
      'Improved content relevance',
      'Better understanding of customer needs',
      'Competitive content advantage',
      'Foundation for content strategy'
    ],
    category: 'marketing',
    timeline: '2-3 weeks',
    investment: {
      startingAt: '$99',
      description: 'Investment varies based on industry, website size, and research scope.'
    }
  },
  'link-building': {
    id: 'link-building',
    slug: 'link-building',
    title: 'Strategic Link Building Services',
    shortTitle: 'Link Building',
    description: 'Ethical link building strategies to improve your website\'s authority and rankings.',
    fullDescription: 'Our strategic link building services focus on acquiring high-quality backlinks from relevant, authoritative websites. We implement ethical, sustainable tactics that improve your domain authority, search rankings, and referral traffic while adhering to search engine guidelines.',
    icon: 'search',
    image: '/images/services/link-building.jpg',
    features: [
      'Competitor Backlink Analysis',
      'Content-Based Link Building',
      'Digital PR Outreach',
      'Resource Link Acquisition',
      'Guest Posting Opportunities',
      'Broken Link Building',
      'Relationship-Based Link Development'
    ],
    benefits: [
      'Improved domain authority',
      'Higher search engine rankings',
      'Increased referral traffic',
      'Enhanced brand credibility',
      'Sustainable, penalty-free growth',
      'Competitive advantage in your industry'
    ],
    category: 'marketing',
    timeline: 'Ongoing (6-12 month commitment recommended)',
    investment: {
      startingAt: '$149',
      description: 'Investment varies based on industry competitiveness, link quality targets, and volume goals.'
    }
  },
  'reputation-management': {
    id: 'reputation-management',
    slug: 'reputation-management',
    title: 'Online Reputation Management',
    shortTitle: 'Reputation Management',
    description: 'Protect and enhance your brand\'s online reputation with proactive management strategies.',
    fullDescription: 'Our online reputation management services help businesses build, maintain, and protect a positive online image. We monitor brand mentions, manage reviews, address negative content, and implement strategies to showcase your brand in the best possible light.',
    icon: 'trending-up',
    image: '/images/services/reputation-management.jpg',
    features: [
      'Brand Mention Monitoring',
      'Review Management & Response',
      'Negative Content Suppression',
      'Positive Content Promotion',
      'Social Media Reputation Management',
      'Crisis Communication Planning',
      'Sentiment Analysis & Reporting'
    ],
    benefits: [
      'Enhanced brand credibility and trust',
      'Improved customer perception',
      'Higher conversion rates',
      'Better customer retention',
      'Protection during reputation crises',
      'Competitive advantage in your industry'
    ],
    category: 'marketing',
    timeline: 'Ongoing (3-6 month minimum commitment)',
    investment: {
      startingAt: '$299/month',
      description: 'Investment varies based on industry, business size, and current reputation challenges.'
    }
  },
  'advanced-cro': {
    id: 'advanced-cro',
    slug: 'advanced-cro',
    title: 'Advanced Conversion Rate Optimization',
    shortTitle: 'Advanced CRO',
    description: 'Data-driven CRO strategies that transform visitors into customers and maximize revenue.',
    fullDescription: 'Our advanced conversion rate optimization services use data analysis, user behavior insights, and A/B testing to systematically improve website conversion rates. We identify barriers to conversion and implement targeted improvements to increase leads, sales, and revenue.',
    icon: 'bar-chart',
    image: '/images/services/advanced-cro.jpg',
    features: [
      'Comprehensive Conversion Audit',
      'User Behavior Analysis',
      'Heatmap & Session Recording Analysis',
      'A/B & Multivariate Testing',
      'Landing Page Optimization',
      'Checkout Process Improvement',
      'Personalization Strategies'
    ],
    benefits: [
      'Higher conversion rates across all channels',
      'Increased revenue without additional traffic',
      'Better understanding of customer behavior',
      'Improved user experience',
      'Lower customer acquisition costs',
      'Data-driven decision making'
    ],
    process: {
      title: 'Our CRO Process',
      steps: [
        {
          title: 'Conversion Research & Analysis',
          description: 'We analyze user behavior, conversion metrics, and identify barriers to conversion.'
        },
        {
          title: 'Hypothesis Development',
          description: 'We create data-backed hypotheses for improving conversion points.'
        },
        {
          title: 'Testing & Implementation',
          description: 'We conduct rigorous A/B tests and implement proven improvements.'
        },
        {
          title: 'Analysis & Iteration',
          description: 'We analyze results, report findings, and continuously refine our approach.'
        }
      ]
    },
    category: 'marketing',
    timeline: 'Ongoing (3-6 month minimum commitment)',
    investment: {
      startingAt: '$299/month',
      description: 'Investment varies based on website traffic volume, conversion goals, and testing scope.'
    }
  },
  'marketing-automation': {
    id: 'marketing-automation',
    slug: 'marketing-automation',
    title: 'Marketing Automation Solutions',
    shortTitle: 'Marketing Automation',
    description: 'Streamline your marketing efforts with intelligent automation that nurtures leads and drives conversions.',
    fullDescription: 'Our marketing automation services help businesses implement sophisticated automation platforms that nurture leads, personalize customer experiences, and streamline marketing operations. We create custom workflows that deliver the right message to the right person at the right time.',
    icon: 'trending-up',
    image: '/images/services/marketing-automation.jpg',
    features: [
      'Marketing Automation Platform Setup',
      'Lead Nurturing Workflow Development',
      'Customer Journey Mapping',
      'Email Marketing Automation',
      'Behavior-Based Triggers',
      'CRM Integration & Synchronization',
      'Performance Tracking & Optimization'
    ],
    benefits: [
      'Increased marketing efficiency',
      'More effective lead nurturing',
      'Improved lead conversion rates',
      'Enhanced customer relationship management',
      'Time and resource savings',
      'Scalable marketing operations'
    ],
    category: 'marketing',
    timeline: '4-8 weeks setup + ongoing management',
    technologies: [
      'HubSpot', 'Marketo', 'Mailchimp', 'ActiveCampaign', 'Salesforce Marketing Cloud', 'Pardot', 'Klaviyo'
    ],
    investment: {
      startingAt: '$399/month',
      description: 'Investment varies based on platform, complexity of automation needs, and ongoing management requirements.'
    }
  },
  'mobile-app-design': {
    id: 'mobile-app-design',
    slug: 'mobile-app-design',
    title: 'Mobile App UI/UX Design',
    shortTitle: 'Mobile App Design',
    description: 'Intuitive, engaging mobile app interfaces that deliver exceptional user experiences.',
    fullDescription: 'Our mobile app UI/UX design services create intuitive, visually appealing experiences that users love. We combine user research, interaction design, and visual aesthetics to develop mobile interfaces that are not only beautiful but also highly functional and engaging.',
    icon: 'pen-tool',
    image: '/images/services/mobile-app-design.jpg',
    features: [
      'User Research & Persona Development',
      'App Information Architecture',
      'Wireframing & Prototyping',
      'Visual Design & Branding',
      'Interaction Design',
      'Usability Testing',
      'Design System Development'
    ],
    benefits: [
      'Improved user adoption and retention',
      'Enhanced user satisfaction',
      'More intuitive navigation',
      'Reduced development costs',
      'Competitive differentiation',
      'Consistency across app experience'
    ],
    process: {
      title: 'Our Mobile Design Process',
      steps: [
        {
          title: 'Discovery & Research',
          description: 'We understand your users, business goals, and mobile app requirements.'
        },
        {
          title: 'Structure & Wireframing',
          description: 'We create the app\'s information architecture and initial wireframes.'
        },
        {
          title: 'Visual Design & Prototyping',
          description: 'We develop the visual identity and interactive prototypes of your app.'
        },
        {
          title: 'Testing & Refinement',
          description: 'We conduct usability testing and refine the design based on user feedback.'
        }
      ]
    },
    category: 'design',
    timeline: '6-12 weeks',
    deliverables: [
      'User research findings',
      'App wireframes',
      'Interactive prototypes',
      'UI style guide',
      'Design specifications',
      'Animation guidelines'
    ],
    investment: {
      startingAt: '$499 setup + $199/month',
      description: 'Investment varies based on app complexity, number of screens, and design requirements.'
    }
  },
  'website-mockup': {
    id: 'website-mockup',
    slug: 'website-mockup',
    title: 'Website Mockup Design',
    shortTitle: 'Website Mockup',
    description: 'Professional website mockups that visualize your digital presence before development begins.',
    fullDescription: 'Our website mockup design services create high-fidelity visual representations of your website before development begins. We transform concepts into realistic visual designs that showcase layout, colors, typography, and content placement to align stakeholders and guide development.',
    icon: 'pen-tool',
    image: '/images/services/website-mockup.jpg',
    features: [
      'High-Fidelity Visual Designs',
      'Responsive Layout Visualization',
      'Color Scheme & Typography Selection',
      'Content Placement Strategy',
      'Interactive Elements Design',
      'Call-to-Action Optimization',
      'Brand Identity Integration'
    ],
    benefits: [
      'Clear visualization before development',
      'Stakeholder alignment and approval',
      'Reduced development revisions',
      'Consistent design direction',
      'Optimized user experience',
      'Streamlined development process'
    ],
    category: 'design',
    timeline: '2-4 weeks',
    deliverables: [
      'High-fidelity mockups',
      'Responsive breakpoint visualizations',
      'UI components library',
      'Design specifications',
      'Asset production files',
      'Design implementation guide'
    ],
    investment: {
      startingAt: '$499',
      description: 'Investment varies based on number of unique page designs, complexity, and revisions.'
    }
  },
  'design-system': {
    id: 'design-system',
    slug: 'design-system',
    title: 'Design System Creation',
    shortTitle: 'Design System',
    description: 'Comprehensive design systems that ensure consistency across all digital products and platforms.',
    fullDescription: 'Our design system creation services establish cohesive, scalable frameworks for your digital products. We develop unified design languages with components, patterns, and guidelines that ensure consistency, accelerate development, and improve user experiences across all touchpoints.',
    icon: 'pen-tool',
    image: '/images/services/design-system.jpg',
    features: [
      'Visual Language Definition',
      'UI Component Library',
      'Interaction Pattern Documentation',
      'Design Principles & Guidelines',
      'Typography & Color Systems',
      'Accessibility Standards',
      'Version Control & Governance'
    ],
    benefits: [
      'Consistent user experiences',
      'Accelerated product development',
      'Simplified design decisions',
      'Reduced design debt',
      'Improved team collaboration',
      'Scalable design foundation'
    ],
    process: {
      title: 'Our Design System Process',
      steps: [
        {
          title: 'Audit & Research',
          description: 'We analyze existing products, identify inconsistencies, and research best practices.'
        },
        {
          title: 'Foundation Development',
          description: 'We establish core design principles, visual elements, and foundational patterns.'
        },
        {
          title: 'Component Creation',
          description: 'We design, document, and systematize reusable UI components and patterns.'
        },
        {
          title: 'Implementation & Governance',
          description: 'We guide implementation, establish maintenance processes, and set up governance.'
        }
      ]
    },
    category: 'design',
    timeline: '8-16 weeks',
    deliverables: [
      'Visual language documentation',
      'Component library',
      'Design tokens',
      'Usage guidelines',
      'Implementation resources',
      'Governance documentation'
    ],
    investment: {
      startingAt: '$399',
      description: 'Investment varies based on system complexity, number of components, and implementation needs.'
    }
  },
  'website-maintenance': {
    id: 'website-maintenance',
    slug: 'website-maintenance',
    title: 'Website Maintenance Services',
    shortTitle: 'Website Maintenance',
    description: 'Comprehensive website maintenance to keep your site secure, up-to-date, and performing at its best.',
    fullDescription: 'Our website maintenance services provide ongoing support and optimization to keep your website secure, up-to-date, and performing optimally. We handle updates, security monitoring, backups, content updates, and technical support to ensure your digital presence remains effective.',
    icon: 'settings',
    image: '/images/services/website-maintenance.jpg',
    features: [
      'Regular Software Updates',
      'Security Monitoring & Patching',
      'Regular Backup Management',
      'Performance Optimization',
      'Content Updates & Management',
      'Technical Support',
      'Analytics Monitoring & Reporting'
    ],
    benefits: [
      'Enhanced website security',
      'Improved site performance',
      'Reduced downtime and issues',
      'Peace of mind and reduced stress',
      'Consistent user experience',
      'Protection of your digital investment'
    ],
    category: 'development',
    timeline: 'Ongoing monthly service',
    investment: {
      startingAt: '$199/month',
      description: 'Investment varies based on website size, technology stack, and required maintenance level.'
    }
  },
  'website-migration': {
    id: 'website-migration',
    slug: 'website-migration',
    title: 'Website Migration Services',
    shortTitle: 'Website Migration',
    description: 'Seamless website migration with minimal disruption and preserved SEO value.',
    fullDescription: 'Our website migration services ensure a smooth transition when moving your website to a new platform, server, or CMS. We handle the technical complexities while preserving your SEO rankings, content, functionality, and user experience with minimal disruption.',
    icon: 'code',
    image: '/images/services/website-migration.jpg',
    features: [
      'Pre-Migration Audit & Planning',
      'Content & Data Migration',
      'SEO Value Preservation',
      'URL Structure & Redirect Management',
      'Design & Functionality Transfer',
      'Testing & Quality Assurance',
      'Post-Migration Support'
    ],
    benefits: [
      'Minimal downtime during transition',
      'Preserved search engine rankings',
      'Retained website functionality',
      'Data integrity protection',
      'Improved platform performance',
      'Reduced technical complications'
    ],
    process: {
      title: 'Our Migration Process',
      steps: [
        {
          title: 'Discovery & Planning',
          description: 'We audit your current site and develop a comprehensive migration strategy.'
        },
        {
          title: 'Development & Setup',
          description: 'We set up the new environment and prepare for content and data transfer.'
        },
        {
          title: 'Content Migration & Testing',
          description: 'We migrate your content, implement redirects, and conduct thorough testing.'
        },
        {
          title: 'Launch & Monitoring',
          description: 'We launch the migrated site and monitor for any issues or adjustments needed.'
        }
      ]
    },
    category: 'development',
    timeline: '4-8 weeks',
    investment: {
      startingAt: '$399',
      description: 'Investment varies based on website complexity, content volume, and migration requirements.'
    }
  },
  'react-native': {
    id: 'react-native',
    slug: 'react-native',
    title: 'React Native Development Services',
    shortTitle: 'React Native',
    description: 'Cross-platform mobile app development with React Native for iOS and Android.',
    fullDescription: 'Our React Native development services help you build high-performance, native mobile applications that work seamlessly on both iOS and Android platforms. We leverage React Native\'s powerful framework to create apps that deliver native performance while sharing code across platforms, reducing development time and costs.',
    icon: 'smartphone',
    image: '/images/services/react-native.jpg',
    features: [
      'Cross-Platform Mobile App Development',
      'Native Performance Optimization',
      'Custom UI/UX Design Implementation',
      'API Integration & Backend Services',
      'App Store & Google Play Deployment',
      'Performance Monitoring & Analytics',
      'Ongoing Maintenance & Updates'
    ],
    benefits: [
      'Single codebase for iOS and Android',
      'Reduced development time and costs',
      'Native performance and user experience',
      'Faster time to market',
      'Easy maintenance and updates',
      'Access to native device features'
    ],
    process: {
      title: 'Our React Native Development Process',
      steps: [
        {
          title: 'Requirements Analysis',
          description: 'We analyze your app requirements, target audience, and platform-specific needs to create a comprehensive development plan.'
        },
        {
          title: 'Design & Prototyping',
          description: 'We create intuitive UI/UX designs and interactive prototypes that work seamlessly across both platforms.'
        },
        {
          title: 'Development & Testing',
          description: 'Our developers build your app using React Native best practices, with continuous testing on both platforms.'
        },
        {
          title: 'Deployment & Launch',
          description: 'We handle app store submissions, deployment, and provide ongoing support and maintenance.'
        }
      ]
    },
    testimonial: {
      content: "RTN Global delivered an exceptional React Native app that exceeded our expectations. The cross-platform approach saved us significant development time and costs, while the performance is indistinguishable from native apps.",
      author: "Jennifer Chen",
      company: "TechStart Mobile",
      role: "Product Manager"
    },
    category: 'development',
    timeline: '8-16 weeks',
    technologies: [
      'React Native', 'JavaScript/TypeScript', 'Redux', 'Firebase', 'Node.js', 'Expo', 'React Navigation'
    ],
    deliverables: [
      'Cross-platform mobile application',
      'iOS and Android builds',
      'App store deployment support',
      'Performance optimization',
      'Analytics integration',
      'Documentation and maintenance guide'
    ],
    investment: {
      startingAt: '$1,499',
      description: 'Investment varies based on app complexity, features, and platform requirements.'
    },
    featured: true
  }
}

// Helper function to get featured services
export const getFeaturedServices = (): Service[] => {
  return Object.values(services).filter(service => service.featured)
}

// Helper function to get services by category
export const getServicesByCategory = (category: string): Service[] => {
  return Object.values(services).filter(service => service.category === category)
}

// Helper function to get all services as an array
export const getAllServices = (): Service[] => {
  return Object.values(services)
} 