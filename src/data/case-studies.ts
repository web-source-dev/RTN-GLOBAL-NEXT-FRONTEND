// Define the CaseStudy interface for type safety
export interface CaseStudy {
  title: string;
  slug: string;
  client: string;
  industry: string;
  services: string[];
  duration: string;
  summary: string;
  challenge: string;
  solution: string;
  results: string;
  testimonial?: {
    quote: string;
    author: string;
    position: string;
  };
  clientBackground?: string;
  goals?: string[];
  approach?: {
    title: string;
    description: string;
  }[];
  technologies?: string[];
  teamComposition?: {
    role: string;
    responsibility: string;
  }[];
  processSteps?: {
    title: string;
    description: string;
    icon?: string;
  }[];
  keyInsights?: string[];
  businessImpact?: {
    metric: string;
    value: string;
    description: string;
  }[];
  featuredMetric: {
    value: string;
    label: string;
  };
  secondaryMetrics: {
    value: string;
    label: string;
  }[];
  image: string;
  galleryImages?: string[];
  beforeAfterImages?: {
    before: {
      src: string;
      alt: string;
    };
    after: {
      src: string;
      alt: string;
    };
    description: string;
  }[];
  featured?: boolean;
  videoTestimonial?: string;
  userQuotes?: {
    quote: string;
    user: string;
    context: string;
  }[];
  timeline?: {
    date: string;
    milestone: string;
    description: string;
  }[];
  implementationChallenges?: string;
  futureWork?: string;
  tags?: string[];
  relatedCaseStudies?: string[];
}

// Case Studies data
export const caseStudies: CaseStudy[] = [
  {
    title: "Brand Transformation for Financial Services Firm",
    slug: "financial-brand-transformation",
    client: "Horizon Financial",
    industry: "Financial Services",
    services: ["Brand Strategy", "Visual Identity", "Website Redesign", "Content Development", "Digital Marketing"],
    duration: "4 months",
    summary: "A comprehensive rebrand that repositioned a traditional financial services firm for a modern audience, resulting in increased brand perception and client acquisition.",
    clientBackground: "Horizon Financial is a mid-sized wealth management firm founded in 1985 with over $1.2 billion in assets under management. With 45 financial advisors across 8 locations, they primarily serve high-net-worth individuals and families. Despite their long-standing reputation for excellent service, they were struggling to attract younger investors and facing increasing competition from digital-first financial platforms.",
    goals: [
      "Modernize brand identity while maintaining trust and credibility",
      "Increase market share among millennial and Gen X investors",
      "Create a cohesive digital experience across all touchpoints",
      "Develop messaging that resonates with both traditional and new audiences",
      "Increase qualified leads by 75% within six months"
    ],
    challenge: "Horizon Financial was facing increased competition from modern fintech startups and needed to transform their outdated brand identity without alienating their existing client base. The challenge was to create a brand that felt contemporary and innovative while maintaining the trust and credibility they had built over decades. Their digital presence was fragmented, with an outdated website, inconsistent social media, and marketing materials that failed to communicate their unique value proposition to younger demographics.",
    processSteps: [
      {
        title: "Discovery & Research",
        description: "We conducted in-depth stakeholder interviews, client surveys, competitor analysis, and market research to identify opportunities for differentiation and audience needs.",
        icon: "Search"
      },
      {
        title: "Brand Strategy Development",
        description: "We crafted a comprehensive brand strategy including positioning, messaging architecture, brand voice, and core values aligned with both existing and target audiences.",
        icon: "Lightbulb"
      },
      {
        title: "Visual Identity Creation",
        description: "We designed a sophisticated visual system including logo, color palette, typography, imagery style, and branded elements that conveyed stability with a modern edge.",
        icon: "PenTool"
      },
      {
        title: "Digital Experience Design",
        description: "We redesigned the website with a focus on intuitive navigation, personalized content paths, and mobile optimization, resulting in a 62% increase in time on site.",
        icon: "Monitor"
      },
      {
        title: "Implementation & Rollout",
        description: "We executed a phased rollout strategy with internal training, client communications, and coordinated launch activities across channels.",
        icon: "Rocket"
      }
    ],
    solution: "We developed a comprehensive brand strategy that honored their heritage while positioning them for the future. This included a refined visual identity system, simplified messaging architecture, responsive website redesign, and a cohesive set of marketing materials. The new brand projected sophistication, reliability, and innovation.\n\nOur approach included extensive user research with both existing clients and target demographics to identify perception gaps and opportunities. We simplified complex financial concepts into clear, approachable messaging while maintaining depth and expertise. The visual identity balanced traditional financial cues with contemporary design elements, creating a distinctive presence in a crowded market.\n\nThe website redesign focused on personalized user journeys based on investor profiles and life stages, with interactive tools that demonstrated Horizon's expertise and approach. We integrated their client portal seamlessly into the main site, creating a unified digital experience.",
    teamComposition: [
      {
        role: "Brand Strategist",
        responsibility: "Led stakeholder workshops, developed positioning strategy, and crafted messaging architecture"
      },
      {
        role: "UX/UI Designer",
        responsibility: "Created user journeys, wireframes, and responsive design for digital platforms"
      },
      {
        role: "Visual Designer",
        responsibility: "Developed visual identity system, brand guidelines, and marketing templates"
      },
      {
        role: "Content Strategist",
        responsibility: "Simplified complex financial information and developed content strategy"
      },
      {
        role: "Project Manager",
        responsibility: "Coordinated cross-functional teams and managed client communication"
      }
    ],
    technologies: [
      "Adobe Creative Suite",
      "Figma",
      "WordPress CMS",
      "HubSpot Marketing Platform",
      "Google Analytics 4",
      "Hotjar for UX Research"
    ],
    results: "The rebrand significantly improved brand perception among both existing clients and target prospects. Website engagement metrics showed dramatic improvements, and the company saw a sustained increase in qualified leads from younger demographics without losing their core audience.\n\nWithin six months of launch, Horizon achieved a 145% increase in qualified leads, with 68% of those leads coming from their target demographic of investors aged 30-45. Client retention remained strong at 96%, demonstrating that the rebrand successfully appealed to new audiences without alienating existing clients.\n\nThe website saw a 210% increase in organic traffic, with bounce rates decreasing from 62% to 28%. Average session duration increased by 3.4 minutes, and conversion rates for consultation requests more than doubled. Social media engagement increased by 315%, establishing Horizon as a thought leader in their space.",
    implementationChallenges: "During implementation, we encountered initial resistance from some long-standing financial advisors who were concerned about potential client confusion. We addressed this through dedicated change management workshops and creating comprehensive transition materials. Technical challenges with the CRM integration were resolved through a phased data migration approach that ensured uninterrupted client service.",
    keyInsights: [
      "Financial brands can successfully modernize without sacrificing perceived stability and trustworthiness",
      "Personalized content paths significantly increase engagement with complex service offerings",
      "Internal stakeholder alignment is as critical as external positioning for successful rebrands",
      "Clear articulation of investment philosophy resonates more strongly than technical credentials with younger investors",
      "Visual consistency across all touchpoints has measurable impact on brand recall and perception"
    ],
    businessImpact: [
      {
        metric: "Client Acquisition Cost",
        value: "Reduced by 32%",
        description: "More efficient marketing and higher conversion rates lowered acquisition costs"
      },
      {
        metric: "Average Client Portfolio Size",
        value: "Increased by $105,000",
        description: "New positioning attracted higher-value clients across all age demographics"
      },
      {
        metric: "Employee Satisfaction",
        value: "Increased by 27%",
        description: "Staff reported greater pride in brand and improved recruitment success"
      }
    ],
    testimonial: {
      quote: "The team at RTN Global understood exactly what we needed – a brand that would appeal to younger investors while reassuring our current clients. The result has transformed how our business is perceived in the market. Their strategic approach addressed not just our visual identity, but our entire client experience. The data speaks for itself – we're attracting exactly the clients we wanted while strengthening relationships with our existing base.",
      author: "Sarah Thompson",
      position: "Marketing Director, Horizon Financial"
    },
    userQuotes: [
      {
        quote: "As someone who's built my portfolio from scratch, I was looking for advisors who understand modern investments but still offer solid guidance. Horizon's new approach actually convinced me to move my accounts from a robo-advisor.",
        user: "Michael R.",
        context: "35-year-old tech professional, new client"
      },
      {
        quote: "I've been with Horizon for over a decade, and I was concerned when I heard about the rebrand. But they've maintained everything I valued while becoming more accessible. Their new planning tools are actually quite helpful.",
        user: "Barbara T.",
        context: "58-year-old existing client"
      }
    ],
    featuredMetric: {
      value: "145%",
      label: "increase in qualified leads"
    },
    secondaryMetrics: [
      {
        value: "32%",
        label: "increase in brand recognition"
      },
      {
        value: "4.2x",
        label: "ROI on branding investment"
      }
    ],
    timeline: [
      {
        date: "Month 1",
        milestone: "Research & Discovery",
        description: "Stakeholder interviews, audience research, and competitive analysis completed"
      },
      {
        date: "Month 2",
        milestone: "Brand Strategy & Design",
        description: "Brand positioning, messaging framework, and visual identity system developed"
      },
      {
        date: "Month 3",
        milestone: "Digital Experience Design",
        description: "Website architecture, design system, and content strategy implemented"
      },
      {
        date: "Month 4",
        milestone: "Launch & Optimization",
        description: "Coordinated brand launch across all channels with ongoing performance optimization"
      }
    ],
    beforeAfterImages: [
      {
        before: {
          src: "/images/case-studies/financial-rebrand-before-1.jpg",
          alt: "Horizon Financial's old website homepage with outdated design"
        },
        after: {
          src: "/images/case-studies/financial-rebrand-after-1.jpg",
          alt: "Horizon Financial's new website homepage with modern, user-friendly design"
        },
        description: "The website transformation focused on personalized user journeys and clear value communication"
      },
      {
        before: {
          src: "/images/case-studies/financial-rebrand-before-2.jpg",
          alt: "Old Horizon Financial logo and visual identity"
        },
        after: {
          src: "/images/case-studies/financial-rebrand-after-2.jpg",
          alt: "New Horizon Financial logo and visual identity"
        },
        description: "The visual identity evolution maintained brand equity while introducing contemporary design elements"
      }
    ],
    futureWork: "Building on the success of the rebrand, we're now collaborating with Horizon Financial on expanding their content marketing program and developing personalized client portal features that further differentiate their service offering.",
    image: "/images/case-studies/financial-rebrand.jpg",
    galleryImages: [
      "/images/case-studies/financial-rebrand-1.jpg",
      "/images/case-studies/financial-rebrand-2.jpg",
      "/images/case-studies/financial-rebrand-3.jpg",
      "/images/case-studies/financial-rebrand-4.jpg",
      "/images/case-studies/financial-rebrand-5.jpg",
      "/images/case-studies/financial-rebrand-6.jpg",
    ],
    tags: ["Finance", "Branding", "Web Design", "UX/UI", "Digital Strategy"],
    featured: true
  },
  {
    title: "E-commerce UX Optimization",
    slug: "ecommerce-ux-optimization",
    client: "Lifestyle Collective",
    industry: "Retail",
    services: ["UX Design", "Conversion Optimization", "Front-end Development", "Analytics Implementation", "User Testing"],
    duration: "3 months",
    summary: "A data-driven redesign of the product discovery and checkout experience that significantly improved conversion rates and average order value.",
    clientBackground: "Lifestyle Collective is a premium direct-to-consumer brand offering curated home goods, apparel, and accessories. Founded in 2018, they experienced rapid growth to reach $4.2M in annual revenue but were struggling to scale further due to conversion issues. With a catalog of over 1,200 products across 8 categories, they needed a more intuitive shopping experience to reduce friction and increase customer satisfaction.",
    goals: [
      "Increase conversion rate by at least 50% within 90 days",
      "Reduce cart abandonment rate by 30%",
      "Improve mobile UX to address 65% of their traffic coming from mobile devices",
      "Streamline checkout process to reduce drop-offs",
      "Implement effective cross-selling to increase average order value"
    ],
    challenge: "Lifestyle Collective was experiencing high traffic but struggling with poor conversion rates and high cart abandonment. Their existing e-commerce platform had a confusing user journey, unclear product categorization, and a cumbersome checkout process that was costing them significant revenue. Mobile users particularly struggled with navigation and checkout completion, with mobile conversion rates 40% lower than desktop despite making up the majority of traffic. Customer feedback consistently mentioned difficulty finding products, uncertainty about product details, and frustration with the checkout process.",
    processSteps: [
      {
        title: "UX Audit & Analytics Review",
        description: "We conducted a comprehensive UX audit, analyzed Google Analytics and heatmap data, and identified critical friction points in the user journey.",
        icon: "Search"
      },
      {
        title: "User Research & Testing",
        description: "We performed user interviews, usability tests with existing customers, and gathered quantitative data through surveys to understand user expectations.",
        icon: "Users2"
      },
      {
        title: "Information Architecture Redesign",
        description: "We restructured the product categorization, navigation, and search functionality based on user behavior patterns and mental models.",
        icon: "FolderTree"
      },
      {
        title: "Wireframes & Prototyping",
        description: "We created low and high-fidelity wireframes, interactive prototypes, and conducted A/B tests to validate design solutions.",
        icon: "PenTool"
      },
      {
        title: "Development & Implementation",
        description: "We implemented the optimized designs with a focus on performance, accessibility, and responsive behavior across all devices.",
        icon: "Code"
      }
    ],
    solution: "Through comprehensive UX research and user testing, we identified the key pain points in the customer journey. We redesigned the entire product discovery flow with intuitive navigation and filtering, implemented a streamlined checkout process, and optimized mobile responsiveness. The design was informed by heatmap analysis and A/B testing at each stage.\n\nFor product discovery, we implemented a visual category system with clear hierarchy, enhanced search with autocomplete and visual results, and created curated collections based on user behavior data. The product detail pages were redesigned to prioritize key decision-making information, with high-quality imagery, clear sizing/availability, and social proof elements prominently displayed.\n\nThe checkout process was reduced from five steps to two, with a persistent cart summary, real-time validation, and multiple payment options. We also implemented a guest checkout option with post-purchase account creation incentives, which significantly reduced checkout abandonment.\n\nOn mobile, we created a tailored experience with thumb-friendly navigation, simplified forms, and optimized product galleries for small screens. Performance optimizations reduced page load times by 42%, further improving the mobile experience.",
    teamComposition: [
      {
        role: "UX/UI Designer",
        responsibility: "Led user research, created wireframes, visual designs, and interactive prototypes"
      },
      {
        role: "Conversion Specialist",
        responsibility: "Analyzed user data, defined optimization strategy, and conducted A/B testing"
      },
      {
        role: "Front-end Developer",
        responsibility: "Implemented responsive designs and optimized site performance"
      },
      {
        role: "E-commerce Specialist",
        responsibility: "Optimized product organization and merchandising strategy"
      },
      {
        role: "Project Manager",
        responsibility: "Coordinated team efforts and client communication"
      }
    ],
    technologies: [
      "Shopify Plus",
      "Figma",
      "Hotjar",
      "Google Optimize",
      "Google Analytics 4",
      "Algolia Search",
      "React",
      "TailwindCSS"
    ],
    results: "The optimized user experience led to dramatic improvements across all key metrics. Conversion rates increased substantially, cart abandonment decreased, and the average order value grew as customers found complementary products more easily.\n\nWithin 60 days of launch, overall conversion rates increased by 67%, exceeding the initial target by 17 percentage points. Mobile conversion rates saw the most significant improvement at 83% higher than pre-optimization levels. Cart abandonment decreased from 76% to 34%, representing a 42% reduction.\n\nThe redesigned product discovery system led to deeper catalog exploration, with users viewing 40% more products per session. This, combined with strategic cross-selling implementations, contributed to a 24% increase in average order value. Page load times improved by 42%, and the bounce rate decreased by 38%.",
    implementationChallenges: "During implementation, we faced challenges with the integration of the existing inventory management system, requiring custom API development to ensure seamless product availability updates. We also had to carefully migrate existing customer accounts and order history without disrupting the user experience. The mobile checkout optimization required several iterations to balance functionality with simplicity.",
    keyInsights: [
      "Small UX improvements in critical conversion paths can have outsized impact on business results",
      "Mobile users have fundamentally different shopping patterns requiring tailored experiences beyond responsive design",
      "Clear product information and sizing reduces return rates as well as improving conversion",
      "Search functionality quality directly correlates with catalog exploration and average order value",
      "Performance optimizations have direct impact on conversion metrics, especially on mobile devices"
    ],
    businessImpact: [
      {
        metric: "Monthly Revenue",
        value: "Increased by 86%",
        description: "Higher conversion rates and increased average order value directly improved monthly revenue"
      },
      {
        metric: "Return Rate",
        value: "Decreased by 18%",
        description: "Better product information and imagery reduced expectation mismatches"
      },
      {
        metric: "Customer Acquisition Cost Efficiency",
        value: "Improved by 42%",
        description: "Same marketing spend now generates significantly more customers"
      }
    ],
    testimonial: {
      quote: "The UX optimization has transformed our business. Not only are our conversion metrics much better, but customer feedback has been overwhelmingly positive about how easy it is to find and purchase products. What impressed us most was the data-driven approach that identified issues we weren't even aware of. The ROI on this project was evident within weeks of launch.",
      author: "Michael Chen",
      position: "E-commerce Director, Lifestyle Collective"
    },
    userQuotes: [
      {
        quote: "I used to get frustrated trying to find specific items on the site. Now I can find exactly what I'm looking for in seconds, and checkout is so much smoother.",
        user: "Samantha K.",
        context: "Returning customer, mainly shops on mobile"
      },
      {
        quote: "The product recommendations are actually useful now. I've discovered several items I wouldn't have found otherwise, and the detailed product information makes it easy to decide.",
        user: "Thomas L.",
        context: "New customer converted from browsing"
      }
    ],
    featuredMetric: {
      value: "67%",
      label: "increase in conversion rate"
    },
    secondaryMetrics: [
      {
        value: "24%",
        label: "increase in average order value"
      },
      {
        value: "42%",
        label: "reduction in cart abandonment"
      }
    ],
    timeline: [
      {
        date: "Week 1-2",
        milestone: "Research & Analysis",
        description: "UX audit, analytics review, and user research completed"
      },
      {
        date: "Week 3-5",
        milestone: "Design & Prototyping",
        description: "Information architecture, wireframes, and interactive prototypes created"
      },
      {
        date: "Week 6-10",
        milestone: "Development & Testing",
        description: "Implementation, A/B testing, and iterative improvements"
      },
      {
        date: "Week 11-12",
        milestone: "Launch & Optimization",
        description: "Full launch, performance monitoring, and post-launch refinements"
      }
    ],
    beforeAfterImages: [
      {
        before: {
          src: "/images/case-studies/ecommerce-ux-before-1.jpg",
          alt: "Lifestyle Collective's old product listing page with cluttered interface"
        },
        after: {
          src: "/images/case-studies/ecommerce-ux-after-1.jpg",
          alt: "Redesigned product listing page with clear filtering and visual hierarchy"
        },
        description: "The redesigned product listing page improved category navigation and filtering options"
      },
      {
        before: {
          src: "/images/case-studies/ecommerce-ux-before-2.jpg",
          alt: "Original multi-step checkout process"
        },
        after: {
          src: "/images/case-studies/ecommerce-ux-after-2.jpg",
          alt: "Streamlined two-step checkout process"
        },
        description: "The checkout process was simplified from five steps to two, with clear progress indication"
      }
    ],
    futureWork: "Building on the success of this optimization, we're now developing a personalized shopping experience using machine learning algorithms to tailor product recommendations and content based on individual browsing patterns and purchase history.",
    image: "/images/case-studies/ecommerce-ux.jpg",
    galleryImages: [
      "/images/case-studies/ecommerce-ux-1.jpg",
      "/images/case-studies/ecommerce-ux-2.jpg",
      "/images/case-studies/ecommerce-ux-3.jpg",
      "/images/case-studies/ecommerce-ux-4.jpg",
      "/images/case-studies/ecommerce-ux-5.jpg",
    ],
    tags: ["E-commerce", "UX/UI", "Conversion Optimization", "Mobile", "Front-end"],
    featured: true
  },
  {
    title: "Integrated Marketing Campaign for Product Launch",
    slug: "product-launch-campaign",
    client: "TechVision Inc.",
    industry: "Technology",
    services: ["Campaign Strategy", "Content Creation", "Digital Marketing", "Event Planning", "Influencer Partnerships"],
    duration: "6 months",
    summary: "A multi-channel marketing campaign for a major product launch that exceeded sales targets and established strong market positioning.",
    clientBackground: "TechVision Inc. is a mid-sized technology company specializing in augmented reality solutions for enterprise applications. Founded in 2014, they've built a reputation for innovation in industrial training and maintenance applications. Their new product, ARAssist Pro, represented a significant advancement in wearable AR technology and a major investment for the company, with development costs exceeding $2.8M over two years.",
    goals: [
      "Generate pre-orders for 1,000 units before official release",
      "Establish TechVision as a thought leader in enterprise AR",
      "Create awareness among both technical decision-makers and C-suite executives",
      "Secure coverage in at least 15 major tech publications",
      "Drive 5,000+ registrations for the virtual launch event"
    ],
    challenge: "TechVision needed to launch a groundbreaking new product in a crowded marketplace with significant competition from established brands. They required a marketing campaign that would generate awareness, communicate complex technical benefits to different audience segments, and drive pre-orders. The primary challenge was overcoming market skepticism about AR technology's practical benefits, particularly given the higher price point compared to competitors. Additionally, they needed to reach both technical evaluators and executive decision-makers with appropriate messaging for each audience.",
    processSteps: [
      {
        title: "Audience & Market Analysis",
        description: "We conducted audience research, competitive analysis, and stakeholder interviews to identify key differentiators and target personas.",
        icon: "Search"
      },
      {
        title: "Campaign Strategy Development",
        description: "We created a comprehensive multi-channel strategy with phased messaging and channel-specific tactics aligned to the buyer journey.",
        icon: "Lightbulb"
      },
      {
        title: "Content Creation & Design",
        description: "We produced a range of content assets including white papers, videos, webinars, interactive demos, and social media materials.",
        icon: "FileText"
      },
      {
        title: "Channel Activation & Outreach",
        description: "We executed coordinated outreach across owned, earned, and paid channels, including influencer partnerships and media relations.",
        icon: "Share"
      },
      {
        title: "Launch Event Planning",
        description: "We designed and executed a hybrid launch event with both virtual and in-person components to maximize reach and impact.",
        icon: "Rocket"
      }
    ],
    solution: "We created an integrated marketing campaign spanning digital, social, email, and industry events. The strategy included a phased teaser approach, technical whitepapers for industry experts, simplified value proposition messaging for general audiences, influencer partnerships, and a series of demo videos showcasing real-world applications.\n\nThe campaign was structured in three phases: 'Intrigue' (weeks 1-4) to build anticipation with teaser content and industry analyst briefings; 'Educate' (weeks 5-12) to demonstrate product capabilities with technical deep-dives and customer problem scenarios; and 'Convert' (weeks 13-24) focused on driving pre-orders with case studies, ROI calculators, and special launch incentives.\n\nFor technical audiences, we created in-depth content including a 32-page technical white paper, interactive product specifications, and a series of expert webinars featuring TechVision's lead engineers. For executive decision-makers, we developed ROI-focused content including case studies highlighting business impact, comparison guides, and executive summaries emphasizing competitive advantages and implementation simplicity.\n\nThe centerpiece of the campaign was a hybrid launch event featuring live product demonstrations, customer testimonials, and hands-on testing opportunities for in-person attendees, with high-production virtual access for global participants.",
    teamComposition: [
      {
        role: "Campaign Strategist",
        responsibility: "Developed overall campaign structure, messaging, and channel strategy"
      },
      {
        role: "Content Director",
        responsibility: "Oversaw creation of whitepapers, videos, presentations, and digital assets"
      },
      {
        role: "Digital Marketing Specialist",
        responsibility: "Managed paid campaigns, analytics, and conversion optimization"
      },
      {
        role: "PR & Media Relations",
        responsibility: "Secured media coverage, analyst briefings, and influencer partnerships"
      },
      {
        role: "Event Producer",
        responsibility: "Designed and executed the hybrid launch event experience"
      }
    ],
    technologies: [
      "HubSpot Marketing Platform",
      "Sprout Social",
      "Google Marketing Platform",
      "LinkedIn Campaign Manager",
      "Vimeo Enterprise",
      "Hopin Virtual Events",
      "Miro for Campaign Planning"
    ],
    results: "The campaign generated considerable buzz in the industry press and social media. Pre-orders exceeded targets by more than double, and the product launch event had record attendance. Market positioning was successfully established as the innovation leader in their category.\n\nBy campaign conclusion, TechVision secured 2,100 pre-orders (210% of target) representing $4.6M in committed revenue. The virtual launch event drew 7,800 registrations (156% of target) with an impressive 68% attendance rate. Media coverage exceeded expectations with features in 27 tech publications, including cover stories in two leading industry magazines.\n\nThe campaign generated 142,000 new website visitors, with 22,000 marketing qualified leads entering the sales pipeline. Social media engagement increased by 340% across platforms, and the campaign hashtag generated 187,000 impressions. Most importantly, post-launch surveys showed a 47% increase in brand perception scores among target audiences.",
    implementationChallenges: "The campaign faced several challenges during implementation, including a two-week delay in finalizing product specifications that impacted content creation timelines. We adapted by restructuring the content calendar and prioritizing audience-building activities while technical details were being finalized. Additionally, a major competitor announced a similar product mid-campaign, requiring quick messaging adjustments to reinforce TechVision's unique advantages and compelling differentiators.",
    keyInsights: [
      "Technical and executive audiences require fundamentally different content types and messaging approaches",
      "Pre-launch access for select influencers dramatically increased campaign credibility and reach",
      "Visual demonstrations of complex technology outperformed text explanations by 3:1 in engagement metrics",
      "Interactive calculators and configurators drove significantly higher conversion rates than static assets",
      "Hybrid events can achieve broader reach while still providing high-touch experiences for key prospects"
    ],
    businessImpact: [
      {
        metric: "Sales Cycle Duration",
        value: "Reduced by 40%",
        description: "Pre-educated prospects required significantly less selling time"
      },
      {
        metric: "Market Share",
        value: "Increased to 23%",
        description: "Campaign helped secure market leadership position in enterprise AR segment"
      },
      {
        metric: "Partner Inquiries",
        value: "Increased by 215%",
        description: "Campaign visibility attracted new potential distribution and integration partners"
      }
    ],
    testimonial: {
      quote: "What impressed us most was how seamlessly the campaign worked across different channels and audience types. Each piece reinforced our core message while speaking the right language for each audience segment. The launch exceeded all our expectations, not just in sales numbers but in positioning TechVision as the clear leader in our space. The ROI has been phenomenal.",
      author: "David Reynolds",
      position: "VP of Marketing, TechVision Inc."
    },
    userQuotes: [
      {
        quote: "The technical documentation and expert webinars gave me exactly what I needed to evaluate and recommend this solution to our leadership team. The depth of information available made my job much easier.",
        user: "Mark J.",
        context: "IT Director at manufacturing company"
      },
      {
        quote: "The case studies and ROI calculator were instrumental in helping me secure budget approval. Being able to show concrete numbers made all the difference in our decision process.",
        user: "Sarah L.",
        context: "Operations VP at healthcare organization"
      }
    ],
    featuredMetric: {
      value: "210%",
      label: "of sales target achieved"
    },
    secondaryMetrics: [
      {
        value: "187K",
        label: "campaign impressions"
      },
      {
        value: "18.5%",
        label: "engagement rate"
      }
    ],
    timeline: [
      {
        date: "Month 1",
        milestone: "Campaign Strategy & Planning",
        description: "Research, messaging development, and channel planning completed"
      },
      {
        date: "Month 2",
        milestone: "Content Creation & Teaser Phase",
        description: "Core assets developed and teaser campaign launched to build anticipation"
      },
      {
        date: "Months 3-4",
        milestone: "Education Phase & Media Outreach",
        description: "Technical content released and media/analyst relations campaign activated"
      },
      {
        date: "Months 5-6",
        milestone: "Launch Event & Conversion Phase",
        description: "Product launch event executed and conversion campaign deployed"
      }
    ],
    beforeAfterImages: [
      {
        before: {
          src: "/images/case-studies/product-launch-before-1.jpg",
          alt: "TechVision's previous product marketing materials with technical focus"
        },
        after: {
          src: "/images/case-studies/product-launch-after-1.jpg",
          alt: "New campaign materials showing benefits-focused messaging"
        },
        description: "The messaging transformation from technical specifications to business outcomes"
      },
      {
        before: {
          src: "/images/case-studies/product-launch-before-2.jpg",
          alt: "Previous launch event with traditional presentation format"
        },
        after: {
          src: "/images/case-studies/product-launch-after-2.jpg",
          alt: "New hybrid launch event with interactive demonstrations"
        },
        description: "The launch event approach shifted to an immersive, interactive experience"
      }
    ],
    futureWork: "Following the successful launch, we're continuing to support TechVision with a vertical market campaign strategy, targeting specific industry applications with customized messaging and case studies for manufacturing, healthcare, and logistics sectors.",
    image: "/images/case-studies/product-launch.jpg",
    galleryImages: [
      "/images/case-studies/product-launch-1.jpg",
      "/images/case-studies/product-launch-2.jpg",
      "/images/case-studies/product-launch-3.jpg",
      "/images/case-studies/product-launch-4.jpg",
      "/images/case-studies/product-launch-5.jpg",
    ],
    tags: ["Product Launch", "B2B Marketing", "AR Technology", "Content Marketing", "Event Marketing"],
    featured: false
  },
  {
    title: "Healthcare Provider Digital Transformation",
    slug: "healthcare-digital-transformation",
    client: "MediCare Solutions",
    industry: "Healthcare",
    services: ["Digital Strategy", "Web Application Development", "UX Research", "System Integration", "Staff Training"],
    duration: "8 months",
    summary: "A complete digital transformation for a healthcare provider that improved patient experience and streamlined administrative processes.",
    clientBackground: "MediCare Solutions is a multi-location healthcare provider with 12 clinics serving over 45,000 patients annually. Founded in 1997, they specialize in family medicine, pediatrics, and preventive care. Despite their reputation for quality care, they were struggling with operational inefficiencies and patient frustration due to outdated administrative systems and fragmented digital experiences.",
    goals: [
      "Reduce administrative workload by at least 40%",
      "Increase patient satisfaction scores from 76% to 90+%",
      "Implement secure digital patient communication channels",
      "Create a unified patient portal for appointments, records, and billing",
      "Integrate with existing Electronic Health Record (EHR) system"
    ],
    challenge: "MediCare Solutions was operating with outdated systems that were creating inefficiencies for both patients and staff. Appointment scheduling was primarily manual, patient communication was inconsistent, and administrative work was taking valuable time away from patient care. Patients had to navigate multiple disconnected systems for appointments, billing, and medical records, leading to frustration and frequent phone calls to the clinic. Staff were spending up to 65% of their time on administrative tasks rather than patient care, and data entry errors were causing scheduling conflicts and billing issues. Additionally, regulatory compliance requirements were becoming increasingly difficult to manage with their legacy systems.",
    processSteps: [
      {
        title: "Discovery & Needs Assessment",
        description: "We conducted comprehensive stakeholder interviews, patient surveys, workflow observations, and system audits to identify pain points and requirements.",
        icon: "Search"
      },
      {
        title: "Strategy & Architecture Design",
        description: "We developed a holistic digital strategy and technical architecture that balanced immediate needs with long-term scalability and compliance requirements.",
        icon: "FileCode"
      },
      {
        title: "UX Research & Design",
        description: "We created user-centered designs for both patient-facing interfaces and staff administrative tools, informed by usability testing with actual users.",
        icon: "Users2"
      },
      {
        title: "Agile Development & Integration",
        description: "We built the solution using an iterative approach, regularly demonstrating progress and gathering feedback while ensuring secure integration with existing systems.",
        icon: "Code"
      },
      {
        title: "Deployment & Change Management",
        description: "We implemented a phased rollout strategy with comprehensive training programs and dedicated support to ensure smooth adoption.",
        icon: "Rocket"
      }
    ],
    solution: "We developed a comprehensive digital strategy and implemented a custom web application that integrated appointment scheduling, secure patient communications, electronic intake forms, and administrative dashboards. The solution was designed with extensive input from both patients and healthcare providers to ensure it addressed real-world needs.\n\nThe patient portal provides a unified interface for scheduling appointments, accessing medical records, managing prescriptions, and handling billing/insurance matters. We implemented a responsive design optimized for both desktop and mobile, ensuring patients could access services from any device. The intelligent scheduling system considers provider availability, room assignments, equipment needs, and appointment types to optimize clinic operations.\n\nFor staff, we created customized administrative dashboards with role-based access controls and intuitive workflows that reduced training time and minimized errors. The system automates routine tasks like appointment reminders, intake form distribution, and basic triage questions, freeing staff to focus on higher-value patient interactions.\n\nSecurity and compliance were foundational elements, with HIPAA-compliant messaging, encrypted data storage, comprehensive audit trails, and granular permission controls. We integrated with their existing EHR system through a secure API layer, ensuring data consistency while minimizing disruption to clinical documentation workflows.",
    teamComposition: [
      {
        role: "Healthcare IT Consultant",
        responsibility: "Led requirements gathering and ensured compliance with healthcare regulations and standards"
      },
      {
        role: "Solution Architect",
        responsibility: "Designed the technical architecture and integration framework"
      },
      {
        role: "UX/UI Designer",
        responsibility: "Created intuitive interfaces for both patients and healthcare staff"
      },
      {
        role: "Full-stack Development Team",
        responsibility: "Built secure, scalable web application with responsive design"
      },
      {
        role: "Change Management Specialist",
        responsibility: "Developed training programs and facilitated organizational adoption"
      }
    ],
    technologies: [
      "React.js",
      "Node.js",
      "PostgreSQL",
      "FHIR API Integration",
      "Azure Healthcare APIs",
      "OAuth 2.0",
      "Twilio for Secure Messaging",
      "Stripe for Payment Processing"
    ],
    results: "The digital transformation dramatically improved operational efficiency and patient satisfaction. Online appointment scheduling became the preferred method for most patients, administrative time was significantly reduced, and patient satisfaction scores improved substantially.\n\nWithin six months of full implementation, 87% of all appointments were being scheduled online, exceeding the target by 32%. Staff reported a 45% reduction in administrative time, allowing for longer patient interactions and more personalized care. Patient satisfaction scores increased to 92%, with particular improvement in the 'ease of interacting with the clinic' category.\n\nThe no-show rate decreased by 35% due to automated reminders and easier rescheduling options. Patient portal adoption reached 78% of active patients, far exceeding industry benchmarks. Billing inquiries decreased by 41%, and collections improved by 17% through clearer communication and easier payment options.",
    implementationChallenges: "During implementation, we encountered resistance from some long-term staff who were comfortable with existing processes. We addressed this through targeted training, identifying departmental champions, and creating a phased transition that allowed for adjustment periods. Technical challenges included ensuring reliable performance across the clinic's varying internet connectivity levels and creating a seamless integration with their legacy EHR system, which required custom connector development.",
    keyInsights: [
      "Patient-centered design must balance convenience with healthcare-specific needs like privacy and accessibility",
      "Staff adoption is the most critical factor in healthcare digital transformation success",
      "Automated workflows have the greatest impact when they handle routine tasks while preserving human interaction for complex situations",
      "Mobile optimization is essential for patient engagement across diverse demographics",
      "Integration with existing clinical systems requires more effort than anticipated but delivers greater long-term value"
    ],
    businessImpact: [
      {
        metric: "Provider Capacity",
        value: "Increased by 23%",
        description: "More efficient operations allowed providers to see more patients without increasing hours"
      },
      {
        metric: "Operating Costs",
        value: "Reduced by 18%",
        description: "Decreased administrative overhead and improved resource utilization lowered costs"
      },
      {
        metric: "Patient Retention",
        value: "Improved by 28%",
        description: "Enhanced experience led to higher retention rates and increased referrals"
      }
    ],
    testimonial: {
      quote: "This digital transformation has changed how we operate fundamentally. Our staff now spends less time on paperwork and more time with patients, while patients appreciate the convenience of managing their care online. The system has made us more efficient without sacrificing the personal touch that's central to our practice. I was initially skeptical about such a comprehensive change, but the results have exceeded all our expectations.",
      author: "Dr. Emily Zhang",
      position: "Chief Medical Officer, MediCare Solutions"
    },
    userQuotes: [
      {
        quote: "I used to spend at least 20 minutes on the phone just to schedule an appointment. Now I can book, check my records, and handle billing in just a few clicks. It's made managing my family's healthcare so much easier.",
        user: "Robert M.",
        context: "Patient and parent of three children"
      },
      {
        quote: "As a nurse, I was worried the new system would be complicated and slow me down. But it's actually intuitive and saves me hours each day on paperwork. I can focus more on patient care instead of administration.",
        user: "Jennifer K.",
        context: "Registered Nurse at MediCare Solutions"
      }
    ],
    featuredMetric: {
      value: "87%",
      label: "increase in online appointments"
    },
    secondaryMetrics: [
      {
        value: "45%",
        label: "reduction in administrative time"
      },
      {
        value: "92%",
        label: "patient satisfaction rate"
      }
    ],
    timeline: [
      {
        date: "Months 1-2",
        milestone: "Discovery & Planning",
        description: "Requirements gathering, stakeholder interviews, and solution architecture completed"
      },
      {
        date: "Months 3-4",
        milestone: "Design & Development",
        description: "UX design, core platform development, and initial integration work"
      },
      {
        date: "Months 5-6",
        milestone: "Testing & Refinement",
        description: "User testing, security audits, performance optimization, and feedback incorporation"
      },
      {
        date: "Months 7-8",
        milestone: "Deployment & Training",
        description: "Phased rollout across locations, staff training, and post-launch optimization"
      }
    ],
    beforeAfterImages: [
      {
        before: {
          src: "/images/case-studies/healthcare-before-1.jpg",
          alt: "Paper-based scheduling system and waiting room full of patients"
        },
        after: {
          src: "/images/case-studies/healthcare-after-1.jpg",
          alt: "Digital scheduling interface and streamlined waiting area"
        },
        description: "The transition from manual scheduling to a digital system reduced wait times and improved clinic flow"
      },
      {
        before: {
          src: "/images/case-studies/healthcare-before-2.jpg",
          alt: "Staff managing paper files and manual data entry"
        },
        after: {
          src: "/images/case-studies/healthcare-after-2.jpg",
          alt: "Staff using digital dashboard for patient management"
        },
        description: "Administrative workflows were digitized, allowing staff to focus more on patient interaction"
      }
    ],
    futureWork: "Building on this successful transformation, we're now working with MediCare Solutions to implement telemedicine capabilities, predictive analytics for resource planning, and expanded patient education features within the portal. The next phase will also include integration with wearable health devices for continuous patient monitoring.",
    image: "/images/case-studies/healthcare-digital.jpg",
    galleryImages: [
      "/images/case-studies/healthcare-digital-1.jpg",
      "/images/case-studies/healthcare-digital-2.jpg",
      "/images/case-studies/healthcare-digital-3.jpg",
      "/images/case-studies/healthcare-digital-4.jpg",
      "/images/case-studies/healthcare-digital-5.jpg",
    ],
    tags: ["Healthcare", "Digital Transformation", "Patient Experience", "Workflow Optimization", "HIPAA Compliance"],
    featured: false
  },
  {
    title: "Mobile App Development for Fitness Startup",
    slug: "fitness-mobile-app",
    client: "FitLife Connect",
    industry: "Health & Fitness",
    services: ["Mobile App Development", "UX/UI Design", "API Development", "Analytics Integration", "Cloud Infrastructure"],
    duration: "5 months",
    summary: "We developed a feature-rich fitness mobile app that connected users with trainers, tracked workouts, and built a thriving community of fitness enthusiasts.",
    clientBackground: "FitLife Connect is an innovative fitness startup founded in 2021 by two former personal trainers who recognized a gap in the market for truly personalized digital fitness experiences. The founders, Sarah Chen and Marcus Johnson, had built a loyal following through their in-person training but wanted to scale their impact beyond geographical limitations. With seed funding of $750,000, they approached us to build a mobile platform that would embody their vision of making personalized fitness guidance accessible to everyone.",
    goals: [
      "Create an intuitive mobile app for iOS and Android platforms",
      "Develop personalized workout recommendation algorithms",
      "Enable seamless communication between users and fitness coaches",
      "Implement robust workout tracking and progress visualization",
      "Build social features to foster community engagement",
      "Integrate with popular wearable fitness devices"
    ],
    challenge: "FitLife Connect faced the challenge of entering a crowded fitness app market dominated by established players with significant resources. Their differentiation lay in personalization and genuine coach-user relationships, but translating this unique value proposition into digital features required careful consideration. The technical challenges included creating an algorithm that could provide truly personalized workout recommendations, ensuring real-time data synchronization across devices, implementing seamless video streaming for workout demonstrations, and building a secure payment system for coach services. Additionally, the app needed to work offline for workouts in areas with poor connectivity and synchronize data once reconnected. User engagement and retention were also critical concerns, as fitness apps typically face high abandonment rates after the initial motivation wanes.",
    processSteps: [
      {
        title: "Discovery & Strategy",
        description: "We conducted market analysis, competitor assessment, and user research to define the app's unique value proposition and feature prioritization.",
        icon: "Search"
      },
      {
        title: "UX/UI Design",
        description: "We created user flows, wireframes, and high-fidelity prototypes with a focus on intuitive navigation and motivational user experience.",
        icon: "Palette"
      },
      {
        title: "Architecture Planning",
        description: "We designed a scalable cloud architecture with considerations for real-time data, offline functionality, and third-party integrations.",
        icon: "FileCode"
      },
      {
        title: "Agile Development",
        description: "We implemented the solution using two-week sprints, with regular demonstrations and feedback incorporation from stakeholders.",
        icon: "Code"
      },
      {
        title: "Testing & Quality Assurance",
        description: "We performed comprehensive testing across devices, including usability testing with target users and performance optimization.",
        icon: "Bug"
      },
      {
        title: "Launch & Growth Support",
        description: "We provided technical support for the app launch, implemented analytics, and established continuous improvement processes.",
        icon: "Rocket"
      }
    ],
    solution: "We built a cross-platform mobile application using React Native to ensure consistent experience across iOS and Android while maximizing development efficiency. The app's architecture was designed around three core modules: personalized workout planning, progress tracking, and community engagement.\n\nThe workout recommendation engine analyzes user fitness levels, goals, available equipment, and exercise history to generate personalized plans that continuously adapt based on performance and feedback. We implemented machine learning algorithms that improve suggestions over time as users provide feedback on workout difficulty and enjoyment.\n\nA key feature is the coach-user communication system, which includes text messaging, video calls, workout reviews, and progress sharing. Coaches can modify recommended workouts, provide form feedback on recorded exercises, and send motivational messages at strategic intervals identified by the app's engagement algorithms.\n\nThe progress tracking system visualizes improvements across multiple dimensions, including strength, endurance, body measurements, and consistency. Custom gamification elements reward milestone achievements and consistent usage with badges, level progression, and community recognition.\n\nThe app's social features create micro-communities around fitness interests, geographic locations, and goals, fostering accountability and motivation. Users can participate in challenges, share accomplishments, and find workout partners through interest-based matching.\n\nTo support offline functionality, we implemented a sophisticated data synchronization system that caches workout plans, instructional videos, and tracking capabilities, then seamlessly updates the cloud database when connectivity is restored.",
    teamComposition: [
      {
        role: "Product Manager",
        responsibility: "Led the product vision, stakeholder communication, and feature prioritization"
      },
      {
        role: "UX/UI Designer",
        responsibility: "Created user-centered design focused on motivation and habit formation"
      },
      {
        role: "Mobile Development Team",
        responsibility: "Built the cross-platform application with React Native"
      },
      {
        role: "Backend Developer",
        responsibility: "Developed API services, recommendation engine, and data management systems"
      },
      {
        role: "QA Specialist",
        responsibility: "Ensured quality across devices and use cases through comprehensive testing"
      },
      {
        role: "Data Scientist",
        responsibility: "Designed the workout recommendation algorithms and analytics framework"
      }
    ],
    technologies: [
      "React Native",
      "Node.js",
      "MongoDB",
      "AWS (S3, Lambda, EC2)",
      "Firebase",
      "TensorFlow Lite",
      "Socket.io",
      "Stripe",
      "HealthKit & Google Fit APIs"
    ],
    results: "The FitLife Connect app launched successfully and quickly gained traction in the competitive fitness app market. Within six months of launch, the app achieved over 75,000 downloads, with a 42% user retention rate after 30 days, significantly above the industry average of 25%.\n\nActive users complete an average of 4.2 workouts per week, demonstrating strong engagement with the platform. The coach-connection feature has been particularly successful, with 38% of users subscribing to premium coaching services within their first month.\n\nUser feedback has been overwhelmingly positive, with the app maintaining a 4.8/5 star rating across app stores. The personalization features receive particular praise, with 87% of surveyed users rating the workout recommendations as 'very relevant' to their goals and abilities.\n\nThe platform now supports over 200 independent fitness coaches who have increased their client base by an average of 340% through the digital medium. This has validated the founders' vision of creating new opportunities for fitness professionals while making personalized training more accessible.",
    implementationChallenges: "During development, we faced significant challenges with the real-time synchronization of workout data, especially for users in areas with poor connectivity. We solved this by implementing a robust offline-first architecture that prioritized local data persistence with intelligent sync when connectivity was restored.\n\nThe recommendation algorithm initially produced workouts that were either too challenging or too easy for many users. We addressed this through an iterative calibration approach, incorporating more detailed initial assessments and rapid feedback loops that allowed the system to adjust more quickly to user capabilities.\n\nIntegration with the wide variety of fitness wearables presented compatibility challenges. We developed a flexible integration layer that standardizes data from different devices while preserving device-specific advanced metrics when available.",
    keyInsights: [
      "Personalization is the key differentiator in the saturated fitness app market",
      "Human connection with coaches significantly improves user retention and outcomes",
      "Offline functionality is critical for fitness apps, as workouts often occur in locations with limited connectivity",
      "Progress visualization needs to be multi-dimensional to maintain motivation across different user types",
      "Community features work best when organized around specific interests rather than general fitness goals"
    ],
    businessImpact: [
      {
        metric: "User Acquisition Cost",
        value: "42% lower",
        description: "Than industry average due to high organic growth and referrals"
      },
      {
        metric: "Revenue Growth",
        value: "27% month-over-month",
        description: "Consistent growth in the first year after launch"
      },
      {
        metric: "Coach Earnings",
        value: "Increased by 65%",
        description: "Average income increase for fitness professionals on the platform"
      }
    ],
    testimonial: {
      quote: "Working with the team to develop our app was transformative for our business. They didn't just write code – they truly understood the fitness industry and our vision for personalized coaching. The recommendation engine they built feels almost human in its ability to adapt to user needs, and the community features have created exactly the supportive environment we envisioned. The app has allowed us to reach thousands more clients than we ever could have in person.",
      author: "Sarah Chen",
      position: "Co-founder, FitLife Connect"
    },
    userQuotes: [
      {
        quote: "I've tried at least a dozen fitness apps, and this is the first one that actually keeps me coming back. The workouts feel like they were designed specifically for me, and having a real coach review my form has improved my results tremendously.",
        user: "Miguel R.",
        context: "Premium user for 4 months"
      },
      {
        quote: "As a coach, this platform has completely changed my business. I've been able to take on three times as many clients while actually providing better, more consistent guidance thanks to the tools and insights the app provides.",
        user: "Aisha T.",
        context: "Fitness coach using the platform"
      }
    ],
    featuredMetric: {
      value: "4.2",
      label: "workouts completed per user per week"
    },
    secondaryMetrics: [
      {
        value: "42%",
        label: "30-day retention rate"
      },
      {
        value: "38%",
        label: "premium coaching conversion"
      },
      {
        value: "4.8/5",
        label: "app store rating"
      }
    ],
    timeline: [
      {
        date: "Month 1",
        milestone: "Research & Design",
        description: "Market analysis, user research, and UX/UI design completed"
      },
      {
        date: "Month 2-3",
        milestone: "Core Development",
        description: "Development of main app features and backend systems"
      },
      {
        date: "Month 4",
        milestone: "Integration & Testing",
        description: "Third-party integrations, beta testing, and refinement"
      },
      {
        date: "Month 5",
        milestone: "Launch & Optimization",
        description: "Public launch, performance monitoring, and initial optimization"
      }
    ],
    beforeAfterImages: [
      {
        before: {
          src: "/images/portfolio/project1.png",
          alt: "Fitness trainer managing paper client records"
        },
        after: {
          src: "/images/portfolio/project2.jpg",
          alt: "Coach dashboard showing digital client management"
        },
        description: "The transition from manual client management to digital tools increased coach capacity by 340%"
      },
      {
        before: {
          src: "/images/portfolio/project3.jpg",
          alt: "User tracking workouts with notebook and stopwatch"
        },
        after: {
          src: "/images/portfolio/project4.png",
          alt: "App workout tracking with real-time guidance and analytics"
        },
        description: "Digital tracking provided users with deeper insights and improved guidance"
      }
    ],
    futureWork: "Based on the app's success, we're now working with FitLife Connect on their next phase of development. This includes expanding the platform to include nutrition tracking and meal planning with integrated grocery ordering, developing more advanced AI-powered form correction using computer vision, and creating specialized programming for physical therapy and rehabilitation. We're also exploring partnerships with corporate wellness programs to expand B2B opportunities.",
    image: "/images/portfolio/project5.jpg",
    galleryImages: [
      "/images/portfolio/project6.png",
      "/images/portfolio/project1.png",
      "/images/portfolio/project4.png",
      "/images/portfolio/project6.png",
      "/images/portfolio/project2.jpg",
    ],
    tags: ["Mobile App", "Fitness Tech", "React Native", "UX Design", "Machine Learning"],
  }
];

// Utility function to get a case study by slug
export function getCaseStudyBySlug(slug: string): CaseStudy | undefined {
  return caseStudies.find(study => study.slug === slug);
}

// Get all unique industries from case studies
export function getUniqueIndustries(): string[] {
  return ["All Industries", ...Array.from(new Set(caseStudies.map(study => study.industry)))];
}

// Get all unique services from case studies
export function getUniqueServices(): string[] {
  const allServices = caseStudies.flatMap(study => study.services);
  return ["All Services", ...Array.from(new Set(allServices))];
}

// Get featured case studies
export function getFeaturedCaseStudies(): CaseStudy[] {
  return caseStudies.filter(study => study.featured);
} 