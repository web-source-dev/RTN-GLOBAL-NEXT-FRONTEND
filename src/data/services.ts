import { ReactNode } from "react"
import { 
  BarChart, 
  Code, 
  Globe, 
  Search, 
  Settings, 
  SmartphoneIcon, 
  Mail,
  Heart,
  PenTool,
  Palette,
  Image,
  FileText,
  ShoppingBag,
  Share2,
  MessageSquare,
  TrendingUp
} from "lucide-react"

// Use string identifiers for icons instead of JSX
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
      startingAt: '$5,000',
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
      startingAt: '$1,500/month',
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
      startingAt: '$2,000/month',
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
      startingAt: '$1,800/month',
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
      startingAt: '$1,500/month + ad spend',
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
      startingAt: '$1,200/month',
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
      startingAt: '$10,000',
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
      startingAt: '$25,000',
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
      startingAt: '$15,000',
      description: 'Investment varies based on store complexity, product volume, and custom features.'
    },
    featured: true
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
      startingAt: '$8,000',
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
      startingAt: '$5,000',
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
      startingAt: '$2,500/month',
      description: 'Investment varies based on website traffic volume and optimization scope.'
    }
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