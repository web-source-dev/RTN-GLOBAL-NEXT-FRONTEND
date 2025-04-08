import { portfolioItems } from "./portfolio-items";

export type IconType = 
  | 'building2'
  | 'shopping-bag'
  | 'briefcase'
  | 'stethoscope'
  | 'graduation-cap'
  | 'home'
  | 'utensils'
  | 'dumbbell'
  | 'hammer'
  | 'server'
  | 'car'
  | 'calendar'
  | 'scissors'
  | 'film'
  | 'heart'
  | 'truck'
  | 'shirt'
  | 'camera'
  | 'lamp'
  | 'wheat'
  | 'shield'
  | 'dog'
  | 'users';

export type IndustryService = {
  title: string;
  description: string;
};

export type CaseStudy = {
  title: string;
  client: string;
  description: string;
  image: string;
  slug: string;
  results: {
    label: string;
    value: string;
  }[];
};

export type Testimonial = {
  content: string;
  author: string;
  position: string;
  company: string;
  image?: string;
};

export type Statistic = {
  label: string;
  value: string;
};

export type Challenge = {
  title: string;
  description: string;
};

export type Industry = {
  id: string;
  slug: string;
  name: string;
  shortDescription: string;
  longDescription: string;
  icon: IconType;
  image: string;
  heroImage: string;
  services: IndustryService[];
  challenges: Challenge[];
  caseStudies: CaseStudy[];
  testimonials: Testimonial[];
  stats: Statistic[];
  benefits: string[];
  tools: string[];
  faq: {
    question: string;
    answer: string;
  }[];
};

// Helper function to get portfolio items by industry name
const getPortfolioItemsByIndustry = (industryName: string): CaseStudy[] => {
  // Filter portfolio items by the matching industry name
  const matchingItems = portfolioItems.filter(item => 
    item.industry && item.industry.toLowerCase().includes(industryName.toLowerCase())
  );
  
  // Convert PortfolioItem to CaseStudy format
  return matchingItems.map(item => ({
    title: item.title,
    client: item.client || "",
    description: item.description,
    image: item.image,
    slug: item.slug || item.title.toLowerCase().replace(/\s+/g, '-'),
    results: item.results ? 
      item.results.map((result, index) => ({
        label: `Result ${index + 1}`,
        value: result
      })) : 
      []  // Use empty array instead of fallback values
  }));
};

export const industries: Record<string, Industry> = {
  'technology': {
    id: "technology",
    slug: "technology",
    name: "Technology",
    shortDescription: "We help technology companies innovate faster, streamline operations, and deliver exceptional digital experiences.",
    longDescription: "In the rapidly evolving technology landscape, staying competitive requires continuous innovation and adaptation. Our technology solutions are designed to help software companies, SaaS providers, and tech startups build robust platforms, optimize workflows, and create compelling user experiences that drive growth.",
    icon: 'building2',
    image: "/images/industries/technology.jpg",
    heroImage: "/images/industries/technology-hero.jpg",
    services: [
      {
        title: "Custom Software Development",
        description: "Tailored software solutions designed to address your specific business challenges and opportunities."
      },
      {
        title: "Cloud Migration & DevOps",
        description: "Streamline your development and deployment processes with modern cloud infrastructure and DevOps practices."
      },
      {
        title: "Product Design & UX",
        description: "Create intuitive, user-friendly interfaces that enhance user satisfaction and drive adoption."
      },
      {
        title: "API Development & Integration",
        description: "Build robust APIs and seamlessly integrate with third-party services to extend your platform's capabilities."
      },
      {
        title: "Technology Strategy Consulting",
        description: "Expert guidance on technology decisions to align your tech stack with your business objectives."
      }
    ],
    challenges: [
      {
        title: "Rapid Innovation",
        description: "Keeping pace with accelerating technology trends while maintaining product quality and reliability."
      },
      {
        title: "Scalability",
        description: "Building systems that can handle growing user bases and increasing data volumes without performance degradation."
      },
      {
        title: "Technical Debt",
        description: "Balancing quick delivery with sustainable architecture to avoid accumulating costly technical debt."
      },
      {
        title: "User Experience",
        description: "Creating intuitive interfaces that accommodate diverse user needs while reducing complexity."
      }
    ],
    caseStudies: getPortfolioItemsByIndustry("Technology"),
    testimonials: [
      {
        content: "RTN Global has been instrumental in helping us modernize our legacy systems. Their technical expertise and strategic approach transformed our operations and enabled us to deliver better products, faster.",
        author: "Michael Chen",
        position: "CTO",
        company: "CloudTech Solutions",
        image: "/images/testimonials/michael-chen.jpg"
      }
    ],
    stats: [
      { label: "Average Development Time Reduction", value: "35%" },
      { label: "Average Performance Improvement", value: "40%" },
      { label: "Client Satisfaction Rate", value: "98%" }
    ],
    benefits: [
      "Accelerated innovation and reduced time-to-market",
      "Improved product quality and reliability",
      "Enhanced user experiences that drive adoption",
      "Optimized development processes and reduced costs",
      "Scalable architecture that grows with your business",
      "Technical expertise across modern technology stacks"
    ],
    tools: [
      "React", "Node.js", "Python", "AWS", "Azure", "Google Cloud", "Docker", "Kubernetes", "MongoDB", "PostgreSQL"
    ],
    faq: [
      {
        question: "How do you ensure the security of our software?",
        answer: "We implement security by design, incorporating best practices throughout the development lifecycle. This includes regular code reviews, security testing, vulnerability scanning, and adherence to industry standards like OWASP. We also provide documentation and training on secure usage."
      },
      {
        question: "What is your approach to software maintenance?",
        answer: "We offer comprehensive maintenance plans that include regular updates, performance monitoring, bug fixes, and security patches. We also provide ongoing optimization recommendations to ensure your software continues to meet evolving business needs and technological advancements."
      },
      {
        question: "Can you work with our existing technical team?",
        answer: "Absolutely! We excel at team augmentation and collaboration with in-house developers. We can adapt to your workflow, tools, and processes, providing knowledge transfer and upskilling where needed to ensure a seamless integration with your existing team."
      }
    ]
  },
  'e-commerce': {
    id: "e-commerce",
    slug: "e-commerce",
    name: "E-Commerce",
    shortDescription: "We create high-converting online stores that deliver exceptional shopping experiences and drive sales growth.",
    longDescription: "In today's competitive digital marketplace, e-commerce success depends on creating seamless, engaging shopping experiences that convert visitors into customers. We design and develop online stores that not only look great but are optimized for performance, usability, and conversion, helping you increase sales and build customer loyalty.",
    icon: 'shopping-bag',
    image: "/images/industries/e-commerce.jpg",
    heroImage: "/images/industries/e-commerce-hero.jpg",
    services: [
      {
        title: "E-Commerce Website Development",
        description: "Custom online stores built on leading platforms like Shopify, WooCommerce, and Magento with features tailored to your business needs."
      },
      {
        title: "Mobile Shopping Experience",
        description: "Responsive and mobile-first e-commerce designs that provide seamless shopping experiences across all devices."
      },
      {
        title: "Conversion Rate Optimization",
        description: "Data-driven strategies to improve product pages, checkout processes, and overall user experience to increase conversions."
      },
      {
        title: "Payment and Shipping Integration",
        description: "Seamless integration with various payment gateways and shipping providers to streamline the purchase process."
      },
      {
        title: "E-Commerce Analytics and Reporting",
        description: "Custom dashboards and reporting to track sales, customer behavior, and other key metrics to inform business decisions."
      }
    ],
    challenges: [
      {
        title: "Cart Abandonment",
        description: "Addressing the high rate of abandoned carts through optimized checkout processes and recovery strategies."
      },
      {
        title: "Customer Retention",
        description: "Developing strategies to encourage repeat purchases and build long-term customer loyalty."
      },
      {
        title: "Mobile Conversion",
        description: "Optimizing the mobile shopping experience to match or exceed desktop conversion rates."
      },
      {
        title: "Platform Integration",
        description: "Seamlessly connecting your e-commerce platform with other business systems like inventory, accounting, and CRM."
      }
    ],
    caseStudies: getPortfolioItemsByIndustry("Fashion & Retail"),
    testimonials: [
      {
        content: "Our online sales have increased by 215% since launching our new e-commerce site designed by RTN Global. Their understanding of conversion optimization and user experience principles has made a tremendous difference in our business.",
        author: "Sarah Johnson",
        position: "E-Commerce Director",
        company: "Modern Lifestyle Brands",
        image: "/images/testimonials/sarah-johnson.jpg"
      }
    ],
    stats: [
      { label: "E-Commerce Projects Delivered", value: "85+" },
      { label: "Average Conversion Rate Improvement", value: "42%" },
      { label: "Average Order Value Increase", value: "28%" }
    ],
    benefits: [
      "Conversion-focused design that turns visitors into customers",
      "Mobile-optimized shopping experiences",
      "Seamless integration with payment gateways and shipping providers",
      "Advanced product filtering and search capabilities",
      "Inventory and order management systems",
      "Customer account and loyalty program features"
    ],
    tools: [
      "Shopify", "WooCommerce", "BigCommerce", "Magento", "Stripe", "PayPal", "Algolia", "Klaviyo"
    ],
    faq: [
      {
        question: "Which e-commerce platform do you recommend?",
        answer: "Our platform recommendations depend on your specific business needs, product catalog complexity, customization requirements, and growth plans. We're experienced with Shopify, WooCommerce, Magento, and custom solutions, and can help you choose the best fit."
      },
      {
        question: "How do you approach mobile shopping experiences?",
        answer: "We design with a mobile-first approach, ensuring that the shopping experience is optimized for all devices. This includes fast loading times, easy navigation, simplified checkout, and touch-friendly interfaces that convert well on smaller screens."
      },
      {
        question: "Can you integrate with our existing systems?",
        answer: "Yes, we specialize in integrating e-commerce platforms with ERPs, CRMs, fulfillment systems, and other business tools. We ensure seamless data flow between systems to streamline operations and provide a unified view of your business."
      }
    ]
  },
  'finance': {
    id: "finance",
    slug: "finance",
    name: "Finance",
    shortDescription: "We create secure, compliant, and user-friendly digital experiences for banks, fintech, and financial service providers.",
    longDescription: "The financial services industry faces unique challenges in balancing innovation with security and regulatory compliance. Our finance-focused digital solutions help banks, financial institutions, and fintech companies deliver secure, compliant, and user-friendly experiences that build trust and drive engagement with their customers.",
    icon: 'briefcase',
    image: "/images/industries/finance.jpg",
    heroImage: "/images/industries/finance-hero.jpg",
    services: [
      {
        title: "Financial Web Applications",
        description: "Secure, compliant web platforms for banking, investment, insurance, and other financial services."
      },
      {
        title: "Mobile Banking Solutions",
        description: "User-friendly mobile apps that provide convenient access to financial services while maintaining robust security."
      },
      {
        title: "Payment Processing Systems",
        description: "Secure payment gateways and processing solutions that meet industry standards and regulations."
      },
      {
        title: "Financial Data Visualization",
        description: "Interactive dashboards and reports that make complex financial data accessible and actionable."
      },
      {
        title: "Regulatory Compliance Solutions",
        description: "Digital systems designed to help financial institutions maintain compliance with relevant regulations."
      }
    ],
    challenges: [
      {
        title: "Security & Compliance",
        description: "Meeting stringent security requirements and complex regulatory standards while delivering modern user experiences."
      },
      {
        title: "Legacy System Integration",
        description: "Connecting new digital solutions with established banking and financial systems that may be decades old."
      },
      {
        title: "User Trust",
        description: "Building interfaces that inspire confidence and trust while handling sensitive financial information."
      },
      {
        title: "Digital Transformation",
        description: "Helping traditional financial institutions transition to digital-first approaches without disruption to services."
      }
    ],
    caseStudies: getPortfolioItemsByIndustry("Finance"),
    testimonials: [
      {
        content: "RTN Global understood our compliance requirements from day one and delivered a secure, user-friendly platform that has significantly improved customer satisfaction and reduced operational costs.",
        author: "Robert Anderson",
        position: "Head of Digital Banking",
        company: "Metro Financial Group",
        image: "/images/testimonials/robert-anderson.jpg"
      }
    ],
    stats: [
      { label: "Financial Institution Clients", value: "30+" },
      { label: "Average Operational Cost Reduction", value: "24%" },
      { label: "Customer Satisfaction Improvement", value: "37%" }
    ],
    benefits: [
      "Bank-grade security and regulatory compliance",
      "Seamless integration with existing financial systems",
      "Intuitive user interfaces that build trust and confidence",
      "Streamlined processes that reduce operational costs",
      "Mobile-first solutions for on-the-go financial management",
      "Data-driven insights for better financial decision-making"
    ],
    tools: [
      "Java", "Spring", "Angular", "React", "AWS", "Azure", "PostgreSQL", "Oracle", "Stripe", "Plaid"
    ],
    faq: [
      {
        question: "How do you ensure the security of financial applications?",
        answer: "We implement multiple layers of security including encryption, secure authentication, regular penetration testing, and adherence to financial industry standards like PCI DSS. Our development process includes security at every stage, from design through deployment and maintenance."
      },
      {
        question: "Can you help with regulatory compliance?",
        answer: "Yes, we have extensive experience with financial regulations including GDPR, PSD2, SOX, and AML requirements. We build compliance into the application architecture and can provide documentation to support regulatory audits and reviews."
      },
      {
        question: "How do you approach the modernization of legacy financial systems?",
        answer: "We take a phased approach to minimize risk and disruption. This typically involves creating APIs to interface with legacy systems, gradually transferring functionality to modern platforms, and ensuring thorough testing at each stage. We work closely with your IT team to ensure a smooth transition."
      }
    ]
  },
  'healthcare': {
    id: "healthcare",
    slug: "healthcare",
    name: "Healthcare",
    shortDescription: "We develop HIPAA-compliant digital solutions that improve patient care, streamline operations, and enhance healthcare delivery.",
    longDescription: "The healthcare industry is rapidly evolving with digital transformation at its core. We develop secure, compliant digital solutions that help healthcare providers, medical practices, and health tech companies improve patient care, streamline administrative processes, and leverage data for better health outcomes, all while maintaining the highest standards of privacy and security.",
    icon: 'stethoscope',
    image: "/images/industries/healthcare.jpg",
    heroImage: "/images/industries/healthcare-hero.jpg",
    services: [
      {
        title: "Patient Portal Development",
        description: "Secure, user-friendly portals that enhance patient engagement and streamline communication with healthcare providers."
      },
      {
        title: "Telehealth Solutions",
        description: "Reliable, HIPAA-compliant telehealth platforms that enable remote consultations and expand access to care."
      },
      {
        title: "Electronic Health Record Integration",
        description: "Seamless integration with EHR systems to improve data accessibility and streamline clinical workflows."
      },
      {
        title: "Healthcare Mobile Applications",
        description: "Intuitive mobile apps for appointment scheduling, medication management, and health monitoring."
      },
      {
        title: "Medical Practice Management Systems",
        description: "Comprehensive solutions for scheduling, billing, and administrative tasks to improve operational efficiency."
      }
    ],
    challenges: [
      {
        title: "Data Privacy & Security",
        description: "Maintaining strict compliance with HIPAA and other healthcare regulations while delivering accessible digital experiences."
      },
      {
        title: "System Interoperability",
        description: "Ensuring new solutions integrate seamlessly with the complex ecosystem of healthcare IT systems and standards."
      },
      {
        title: "User Adoption",
        description: "Creating intuitive interfaces that work for diverse user groups including medical professionals, staff, and patients."
      },
      {
        title: "Workflow Optimization",
        description: "Developing solutions that enhance rather than disrupt established clinical and administrative workflows."
      }
    ],
    caseStudies: getPortfolioItemsByIndustry("Healthcare"),
    testimonials: [
      {
        content: "The patient portal developed by RTN Global has transformed our practice. Patient satisfaction is up, administrative work is down, and our staff can focus more on providing quality care rather than paperwork.",
        author: "Dr. Jennifer Miller",
        position: "Medical Director",
        company: "Wellness Medical Center",
        image: "/images/testimonials/jennifer-miller.jpg"
      }
    ],
    stats: [
      { label: "Healthcare Providers Served", value: "25+" },
      { label: "Average Administrative Time Saved", value: "32%" },
      { label: "Patient Engagement Increase", value: "45%" }
    ],
    benefits: [
      "HIPAA-compliant, secure healthcare solutions",
      "Streamlined clinical and administrative workflows",
      "Enhanced patient engagement and satisfaction",
      "Improved accessibility and continuity of care",
      "Data-driven insights for better clinical decisions",
      "Reduced administrative burden and operational costs"
    ],
    tools: [
      "FHIR", "HL7", "React", "Node.js", "Python", "AWS", "Azure", "PostgreSQL", "MongoDB", "Twilio"
    ],
    faq: [
      {
        question: "How do you ensure HIPAA compliance in healthcare applications?",
        answer: "We implement comprehensive measures including encryption for data in transit and at rest, secure authentication, access controls, audit logging, and disaster recovery procedures. Our development process includes regular security assessments and we provide documentation to support HIPAA compliance efforts."
      },
      {
        question: "Can your solutions integrate with our existing EHR system?",
        answer: "Yes, we have experience integrating with major EHR systems using standards like HL7, FHIR, and API-based approaches. We work closely with your IT team and EHR vendor to develop secure, reliable integrations that maintain data integrity and comply with regulatory requirements."
      },
      {
        question: "How do you approach the design of healthcare applications for diverse users?",
        answer: "We employ user-centered design methods including stakeholder interviews, workflow analysis, usability testing, and iterative design. We create interfaces that accommodate various technical skill levels, consider accessibility needs, and optimize for the specific environments where healthcare professionals and patients will use the application."
      }
    ]
  },
  'education': {
    id: "education",
    slug: "education",
    name: "Education",
    shortDescription: "We build innovative learning platforms, educational tools, and school management systems that enhance the teaching and learning experience.",
    longDescription: "Education is being transformed by technology, creating new opportunities for engaging, personalized learning experiences. We develop digital solutions for educational institutions, EdTech companies, and learning providers that enhance teaching effectiveness, improve student engagement, and streamline administrative processes, ultimately supporting better educational outcomes.",
    icon: 'graduation-cap',
    image: "/images/industries/education.jpg",
    heroImage: "/images/industries/education-hero.jpg",
    services: [
      {
        title: "Learning Management Systems",
        description: "Custom and integrated LMS solutions that support diverse pedagogical approaches and learning modalities."
      },
      {
        title: "Educational Web & Mobile Apps",
        description: "Engaging, interactive applications designed to enhance learning experiences and improve educational outcomes."
      },
      {
        title: "School Management Software",
        description: "Comprehensive solutions for administrative tasks, student information management, and communication."
      },
      {
        title: "Virtual Classroom Solutions",
        description: "Robust platforms for remote and hybrid learning environments with tools for collaboration and assessment."
      },
      {
        title: "Educational Content Development",
        description: "Interactive, multimedia learning materials and assessment tools aligned with educational standards."
      }
    ],
    challenges: [
      {
        title: "Engagement & Retention",
        description: "Creating digital learning experiences that capture attention and motivate continued participation."
      },
      {
        title: "Accessibility & Inclusion",
        description: "Ensuring educational technology is accessible to all learners, including those with disabilities."
      },
      {
        title: "Data Security & Privacy",
        description: "Protecting sensitive student information while providing appropriate access to educational data."
      },
      {
        title: "Technology Integration",
        description: "Seamlessly incorporating new solutions into existing educational technology ecosystems."
      }
    ],
    caseStudies: getPortfolioItemsByIndustry("Education"),
    testimonials: [
      {
        content: "The learning platform developed by RTN Global has revolutionized how we deliver our courses. Student engagement has increased dramatically, and our instructors have powerful new tools to monitor progress and provide timely feedback.",
        author: "Professor David Wilson",
        position: "Dean of Digital Learning",
        company: "Westfield College",
        image: "/images/testimonials/david-wilson.jpg"
      }
    ],
    stats: [
      { label: "Educational Institutions Served", value: "40+" },
      { label: "Average Student Engagement Increase", value: "53%" },
      { label: "Administrative Efficiency Improvement", value: "38%" }
    ],
    benefits: [
      "Engaging, interactive learning experiences",
      "Personalized learning pathways based on student needs",
      "Streamlined administrative processes for educators",
      "Comprehensive analytics to track educational outcomes",
      "Accessible design that supports diverse learners",
      "Secure management of sensitive educational data"
    ],
    tools: [
      "React", "Node.js", "Python", "Django", "AWS", "Azure", "PostgreSQL", "MongoDB", "Canvas LMS", "Moodle"
    ],
    faq: [
      {
        question: "How do you approach the development of accessible educational technology?",
        answer: "We follow WCAG guidelines and incorporate universal design principles from the start of development. This includes keyboard navigation, screen reader compatibility, and support for various learning preferences. We also conduct accessibility testing with diverse user groups to ensure our solutions work for all learners."
      },
      {
        question: "Can you integrate with our existing school management systems?",
        answer: "Yes, we have experience integrating with major school information systems, learning management systems, and student information systems. We implement secure API connections and data exchange protocols to ensure smooth integration while maintaining data integrity and security."
      },
      {
        question: "How do you measure the effectiveness of educational technology solutions?",
        answer: "We establish clear metrics tied to educational goals and implement analytics that track user engagement, learning progress, and outcomes. We also design for easy collection of qualitative feedback from students and educators to provide a comprehensive view of the solution's effectiveness."
      }
    ]
  },
  'real-estate': {
    id: "real-estate",
    slug: "real-estate",
    name: "Real Estate",
    shortDescription: "We create powerful digital tools for property listings, virtual tours, real estate management, and client engagement.",
    longDescription: "The real estate industry is increasingly digital, with technology playing a central role in how properties are marketed, viewed, and managed. We develop innovative digital solutions for real estate agencies, property managers, and construction companies that enhance property showcasing, streamline transactions, improve client communication, and optimize property management operations.",
    icon: 'home',
    image: "/images/industries/real-estate.jpg",
    heroImage: "/images/industries/real-estate-hero.jpg",
    services: [
      {
        title: "Property Listing Websites",
        description: "Custom, feature-rich real estate websites that showcase properties with advanced search and filtering capabilities."
      },
      {
        title: "Virtual Tour Solutions",
        description: "Interactive 3D tours, 360° views, and AR experiences that allow potential buyers to explore properties remotely."
      },
      {
        title: "Real Estate CRM Systems",
        description: "Client relationship management solutions tailored to the specific needs of real estate professionals."
      },
      {
        title: "Property Management Software",
        description: "Comprehensive systems for managing leases, maintenance, tenant communication, and financial operations."
      },
      {
        title: "Real Estate Marketing Automation",
        description: "Automated marketing solutions for lead generation, nurturing, and conversion in the real estate sector."
      }
    ],
    challenges: [
      {
        title: "Visual Presentation",
        description: "Creating compelling digital representations of physical properties that drive interest and inquiries."
      },
      {
        title: "Remote Transactions",
        description: "Facilitating secure, efficient property transactions when in-person interactions aren't possible."
      },
      {
        title: "Client Communication",
        description: "Managing consistent, timely communication with numerous clients at different stages of the property journey."
      },
      {
        title: "Market Differentiation",
        description: "Helping real estate businesses stand out in a competitive market through digital innovation."
      }
    ],
    caseStudies: getPortfolioItemsByIndustry("Real Estate"),
    testimonials: [
      {
        content: "Since implementing the virtual tour platform developed by RTN Global, our property viewing requests have doubled and our sales cycle has shortened significantly. It's been a game-changer for our agency in this competitive market.",
        author: "Amanda Peterson",
        position: "Managing Broker",
        company: "Elite Properties Group",
        image: "/images/testimonials/amanda-peterson.jpg"
      }
    ],
    stats: [
      { label: "Real Estate Businesses Served", value: "35+" },
      { label: "Average Increase in Property Inquiries", value: "68%" },
      { label: "Reduction in Sales Cycle Length", value: "31%" }
    ],
    benefits: [
      "Stunning visual presentation of properties",
      "Enhanced reach through virtual viewing options",
      "Streamlined client communication and follow-up",
      "Efficient property management workflows",
      "Data-driven insights for real estate decisions",
      "Automated marketing to capture and nurture leads"
    ],
    tools: [
      "React", "Vue.js", "Node.js", "AWS", "Azure", "MongoDB", "PostgreSQL", "Matterport", "HubSpot", "Mailchimp"
    ],
    faq: [
      {
        question: "How can virtual tours improve our property marketing?",
        answer: "Virtual tours allow potential buyers to explore properties thoroughly at their convenience, which increases engagement and qualifies leads more effectively. They expand your reach to remote buyers, reduce wasted viewings, and help properties stand out in listings with immersive, interactive experiences."
      },
      {
        question: "What features should a real estate website include?",
        answer: "A competitive real estate website should include advanced search with multiple filters, high-quality images and virtual tours, interactive maps, saved searches and favorites, mortgage calculators, neighborhood information, mobile responsiveness, lead capture forms, and integration with your CRM and MLS systems."
      },
      {
        question: "How can technology improve property management operations?",
        answer: "Property management technology can automate rent collection, maintenance requests, tenant communication, lease renewals, and financial reporting. This reduces administrative burden, improves tenant satisfaction through faster response times, minimizes vacancies with better planning, and provides better financial oversight through real-time reporting."
      }
    ]
  },
  'legal-services': {
    id: "legal-services",
    slug: "legal-services",
    name: "Legal Services",
    shortDescription: "We provide digital solutions that streamline legal workflows, enhance client communications, and secure sensitive data for law firms and legal departments.",
    longDescription: "The legal industry faces unique challenges in managing complex cases, protecting sensitive information, and maintaining client relationships. Our specialized digital solutions help law firms and legal departments modernize their practice with secure document management, client-facing portals, workflow automation, and effective online marketing strategies. We understand the balance between innovation and regulatory compliance that legal professionals require.",
    icon: 'shield',
    image: "/images/industries/legal-services.jpg",
    heroImage: "/images/industries/legal-services-hero.jpg",
    services: [
      {
        title: "Legal Case Management Systems",
        description: "Custom case management solutions that streamline matter intake, document organization, deadline tracking, and billing processes."
      },
      {
        title: "Client Portal Development",
        description: "Secure, branded client portals that facilitate document sharing, case updates, and communication between attorneys and clients."
      },
      {
        title: "Legal Document Automation",
        description: "Intelligent systems that automate document creation, contract generation, and legal form preparation with accuracy and compliance."
      },
      {
        title: "Law Firm Website Development",
        description: "Professional, ADA-compliant websites designed to establish credibility, generate leads, and provide information to potential clients."
      },
      {
        title: "Legal Analytics Dashboards",
        description: "Custom analytics solutions that provide insights into case outcomes, practice efficiency, and business development opportunities."
      }
    ],
    challenges: [
      {
        title: "Information Security",
        description: "Protecting confidential client information and sensitive legal documents from data breaches and unauthorized access."
      },
      {
        title: "Workflow Efficiency",
        description: "Streamlining complex legal processes and reducing administrative burdens without compromising quality or compliance."
      },
      {
        title: "Client Communication",
        description: "Maintaining transparent, timely communication with clients while managing heavy caseloads and time constraints."
      },
      {
        title: "Regulatory Compliance",
        description: "Ensuring all digital systems and platforms comply with legal ethics rules, data protection regulations, and industry standards."
      }
    ],
    caseStudies: getPortfolioItemsByIndustry("Legal"),
    testimonials: [
      {
        content: "RTN Global transformed our practice with a custom case management system that eliminated redundancies and improved our client communication. Our attorneys now spend more time practicing law and less time on administration.",
        author: "Jennifer Reynolds",
        position: "Managing Partner",
        company: "Reynolds & Associates Law Firm",
        image: "/images/testimonials/jennifer-reynolds.jpg"
      }
    ],
    stats: [
      { label: "Average Productivity Improvement", value: "34%" },
      { label: "Document Processing Time Reduction", value: "65%" },
      { label: "Client Satisfaction Increase", value: "47%" }
    ],
    benefits: [
      "Enhanced case management efficiency and organization",
      "Secure, compliant handling of sensitive legal information",
      "Improved client experience and communication",
      "Reduced administrative burden on legal professionals",
      "Data-driven insights for practice management",
      "Strong online presence for client acquisition"
    ],
    tools: [
      "Microsoft Azure", "AWS", "Clio Integration", "DocuSign", "React", "Node.js", "PostgreSQL", "Elasticsearch", "Stripe", "LawPay"
    ],
    faq: [
      {
        question: "How do you ensure the security of sensitive legal data?",
        answer: "We implement multiple layers of security including end-to-end encryption, secure authentication systems, role-based access controls, and regular security audits. Our solutions comply with industry standards like ISO 27001 and can be configured to meet specific jurisdictional requirements such as GDPR, CCPA, and other relevant data protection regulations."
      },
      {
        question: "Can your solutions integrate with existing legal software?",
        answer: "Yes, we design our solutions with integration capabilities for popular legal software such as Clio, LexisNexis, Westlaw, DocuSign, and practice-specific applications. We use secure APIs and middleware to ensure seamless data flow between systems while maintaining data integrity and security."
      },
      {
        question: "How do you address the unique compliance requirements in the legal industry?",
        answer: "We start with a comprehensive analysis of the specific regulatory frameworks affecting your practice area and jurisdiction. Our development process incorporates compliance considerations from the beginning, including attorney-client privilege protections, ethical guidelines, e-discovery requirements, and data retention policies. We provide documentation to support compliance audits and can implement regular compliance checks into your systems."
      }
    ]
  },
  'travel-tourism': {
    id: "travel-tourism",
    slug: "travel-tourism",
    name: "Travel & Tourism",
    shortDescription: "We craft engaging digital experiences that inspire travelers, streamline bookings, and help tourism businesses connect with global audiences.",
    longDescription: "The travel and tourism industry thrives on creating memorable experiences and seamless customer journeys. Our digital solutions help travel agencies, hotels, tour operators, and destinations showcase their offerings through immersive websites, mobile apps, and booking platforms. We focus on creating visually compelling interfaces that inspire travelers while implementing robust back-end systems that simplify reservations, itinerary planning, and customer relationship management.",
    icon: 'briefcase',
    image: "/images/industries/travel-tourism.jpg",
    heroImage: "/images/industries/travel-tourism-hero.jpg",
    services: [
      {
        title: "Travel Booking Platforms",
        description: "Custom booking systems that handle accommodations, flights, tours, and experiences with real-time availability and secure payment processing."
      },
      {
        title: "Destination Marketing Websites",
        description: "Visually stunning, content-rich websites that showcase destinations and drive visitor engagement through immersive storytelling and media."
      },
      {
        title: "Travel Mobile Applications",
        description: "User-friendly mobile apps that assist travelers with itineraries, local recommendations, navigation, and emergency information."
      },
      {
        title: "Virtual Tour Experiences",
        description: "Interactive 360° tours, AR/VR experiences, and visual simulations that allow potential travelers to preview destinations and accommodations."
      },
      {
        title: "Travel Industry CRM Systems",
        description: "Customer relationship management solutions tailored for travel businesses to manage client preferences, booking history, and personalized marketing."
      }
    ],
    challenges: [
      {
        title: "Seasonal Demand",
        description: "Managing fluctuating website traffic and booking volumes during peak seasons while maintaining performance and user experience."
      },
      {
        title: "Global Accessibility",
        description: "Creating platforms that function seamlessly across different countries, languages, currencies, and comply with international regulations."
      },
      {
        title: "Personalization at Scale",
        description: "Delivering personalized travel recommendations and experiences to diverse customers with varying preferences and needs."
      },
      {
        title: "Integration Complexity",
        description: "Connecting with multiple external systems for flights, accommodations, activities, payments, and travel documentation."
      }
    ],
    caseStudies: getPortfolioItemsByIndustry("Travel"),
    testimonials: [
      {
        content: "Our booking platform redesign by RTN Global increased our conversion rate by 58% and allowed us to scale during peak seasons without performance issues. Their understanding of traveler behavior was evident throughout the design process.",
        author: "Carlos Mendez",
        position: "Digital Director",
        company: "WorldWide Expeditions",
        image: "/images/testimonials/carlos-mendez.jpg"
      }
    ],
    stats: [
      { label: "Average Booking Conversion Increase", value: "42%" },
      { label: "Mobile Engagement Improvement", value: "67%" },
      { label: "Customer Support Inquiry Reduction", value: "35%" }
    ],
    benefits: [
      "Visually engaging platforms that inspire travel decisions",
      "Seamless booking experiences across all devices",
      "Integrated solutions for complex travel arrangements",
      "Personalization engines that increase booking values",
      "Scalable systems that handle seasonal traffic spikes",
      "Multi-language, multi-currency support for global reach"
    ],
    tools: [
      "React", "Node.js", "AWS", "GDS Integration", "Stripe", "Mapbox", "Contentful", "Cloudinary", "Twilio", "SendGrid"
    ],
    faq: [
      {
        question: "Can you integrate with global distribution systems (GDS) and travel APIs?",
        answer: "Yes, we have extensive experience integrating with major GDS providers such as Amadeus, Sabre, and Travelport, as well as direct connections to OTAs like Expedia and Booking.com. We can also implement custom connections to specific supplier APIs for flights, hotels, car rentals, and activities to create a comprehensive booking ecosystem."
      },
      {
        question: "How do you approach multilingual and multi-currency functionality?",
        answer: "We design our travel platforms with internationalization from the ground up, implementing robust content management systems that support content in multiple languages. For currencies, we integrate with reliable exchange rate services to provide accurate, real-time conversion while ensuring proper formatting for different regions and compliance with international payment regulations."
      },
      {
        question: "How do you handle performance during peak booking seasons?",
        answer: "We implement scalable cloud architecture using services like AWS or Azure that can automatically adjust resources based on traffic demands. Our development includes load testing to simulate peak conditions, optimization of database queries, implementation of caching strategies, and CDN usage for media-heavy content. This ensures your platform remains responsive even during high-demand periods like holiday bookings."
      }
    ]
  },
  'restaurants': {
    id: "restaurants",
    slug: "restaurants",
    name: "Restaurants",
    shortDescription: "We create digital solutions that help restaurants attract diners, streamline operations, and deliver exceptional customer experiences both online and in-house.",
    longDescription: "The restaurant industry combines culinary artistry with complex operations and customer service challenges. Our tailored digital solutions help restaurants of all sizes enhance their online presence, streamline ordering and reservation systems, and gain valuable insights into their business performance. We understand the unique pressures of food service businesses and develop technology that simplifies operations while elevating the dining experience for customers.",
    icon: 'utensils',
    image: "/images/industries/restaurants.jpg",
    heroImage: "/images/industries/restaurants-hero.jpg",
    services: [
      {
        title: "Restaurant Websites & Online Ordering",
        description: "Visually appetizing, mobile-optimized websites with integrated online ordering systems that showcase your menu and facilitate seamless takeout and delivery orders."
      },
      {
        title: "Reservation & Table Management",
        description: "Digital reservation systems that reduce no-shows, optimize table utilization, and provide a smooth experience for both staff and diners."
      },
      {
        title: "POS & Kitchen Display Integration",
        description: "Seamless integration with point-of-sale systems and kitchen display solutions to streamline order flow and reduce errors."
      },
      {
        title: "Restaurant Mobile Apps",
        description: "Branded mobile applications that enable ordering, reservations, loyalty programs, and personalized marketing to increase customer engagement and retention."
      },
      {
        title: "Menu & Nutrition Management",
        description: "Digital systems for managing menu items, specials, pricing, and nutritional information across all platforms with easy updating capabilities."
      }
    ],
    challenges: [
      {
        title: "Operational Efficiency",
        description: "Balancing front-of-house and back-of-house operations while maintaining food quality and service standards during peak times."
      },
      {
        title: "Online Reputation Management",
        description: "Monitoring and responding to reviews across multiple platforms while building a positive digital presence in a highly competitive market."
      },
      {
        title: "Third-Party Integration",
        description: "Managing relationships and technology connections with delivery services, reservation platforms, and payment processors."
      },
      {
        title: "Customer Data Utilization",
        description: "Effectively collecting and leveraging customer data to personalize experiences while respecting privacy concerns and regulations."
      }
    ],
    caseStudies: getPortfolioItemsByIndustry("Restaurant"),
    testimonials: [
      {
        content: "The online ordering system developed by RTN Global increased our takeout orders by 124% while reducing order errors by 86%. Their team truly understood the unique challenges of our restaurant and delivered a solution that has transformed our business.",
        author: "Chef Marco Rossi",
        position: "Owner",
        company: "Bella Cucina Ristorante",
        image: "/images/testimonials/marco-rossi.jpg"
      }
    ],
    stats: [
      { label: "Average Online Order Value Increase", value: "27%" },
      { label: "Staff Efficiency Improvement", value: "38%" },
      { label: "Customer Return Rate Increase", value: "43%" }
    ],
    benefits: [
      "Streamlined operations from order to kitchen to table",
      "Enhanced customer experience across digital touchpoints",
      "Increased revenue through optimized online ordering",
      "Valuable business insights through integrated analytics",
      "Reduced operational costs and staffing requirements",
      "Strengthened brand presence and customer loyalty"
    ],
    tools: [
      "React", "Node.js", "Square Integration", "Toast POS", "Stripe", "Twilio", "MongoDB", "Firebase", "AWS", "Google Maps"
    ],
    faq: [
      {
        question: "Can your solutions integrate with my existing POS system?",
        answer: "Yes, we have experience integrating with popular restaurant POS systems including Toast, Square, Clover, Lightspeed, NCR Aloha, and many others. We establish secure connections to synchronize menu items, pricing, inventory, and orders, ensuring a unified system that eliminates double-entry and reduces errors."
      },
      {
        question: "How do you approach online ordering and delivery integration?",
        answer: "We can develop custom online ordering directly on your website or app, optimized for conversion and average order value. For third-party delivery, we can integrate with platforms like Uber Eats, DoorDash, and Grubhub, centralizing these orders into your existing systems. Our approach prioritizes operational simplicity while maximizing revenue opportunities."
      },
      {
        question: "What kind of insights and analytics can you provide for my restaurant?",
        answer: "Our restaurant analytics solutions can track key metrics including sales patterns, popular menu items, peak ordering times, customer frequency, average order values, and marketing campaign effectiveness. We create custom dashboards that highlight actionable insights specific to your business goals, helping you make data-driven decisions about menu development, staffing, inventory, and marketing."
      }
    ]
  },
  'fitness-wellness': {
    id: "fitness-wellness",
    slug: "fitness-wellness",
    name: "Fitness & Wellness",
    shortDescription: "We develop digital platforms that help fitness businesses manage operations, engage members, and deliver transformative health and wellness experiences.",
    longDescription: "The fitness and wellness industry is increasingly digital, with technology playing a crucial role in member engagement, service delivery, and business operations. Our specialized solutions help gyms, studios, spas, and wellness centers streamline administrative tasks, enhance the client experience, and expand their reach through virtual offerings. We understand the unique intersection of physical and digital experiences in this industry and develop technology that supports holistic wellness journeys.",
    icon: 'dumbbell',
    image: "/images/industries/fitness-wellness.jpg",
    heroImage: "/images/industries/fitness-wellness-hero.jpg",
    services: [
      {
        title: "Membership Management Systems",
        description: "Comprehensive platforms for managing memberships, class bookings, billing, access control, and client communications for fitness facilities."
      },
      {
        title: "Fitness Mobile Applications",
        description: "Branded mobile apps for class scheduling, workout tracking, progress monitoring, and community engagement to increase member retention."
      },
      {
        title: "Virtual Training Platforms",
        description: "Live and on-demand workout streaming solutions that extend your reach beyond physical locations and create additional revenue streams."
      },
      {
        title: "Wellness Booking Systems",
        description: "Appointment scheduling platforms for spas, therapists, and wellness practitioners with service customization and resource management."
      },
      {
        title: "Fitness Wearable Integration",
        description: "Custom solutions that integrate with popular fitness wearables and health apps to create a unified wellness experience for your clients."
      }
    ],
    challenges: [
      {
        title: "Member Retention",
        description: "Creating digital experiences that keep members engaged, motivated, and committed to their fitness journey and your business."
      },
      {
        title: "Hybrid Service Delivery",
        description: "Balancing in-person and virtual offerings to meet diverse client preferences while maintaining quality and personalization."
      },
      {
        title: "Performance Tracking",
        description: "Implementing effective systems to measure and visualize client progress across various health and fitness metrics."
      },
      {
        title: "Resource Optimization",
        description: "Efficiently managing staff schedules, facility usage, equipment, and specialized services to maximize business profitability."
      }
    ],
    caseStudies: getPortfolioItemsByIndustry("Fitness"),
    testimonials: [
      {
        content: "Since implementing the member management platform and mobile app from RTN Global, our membership retention has improved by 38% and administrative time has decreased by 65%. Their understanding of both fitness operations and digital engagement has made all the difference.",
        author: "Alex Torres",
        position: "Founder",
        company: "Elevate Fitness Studios",
        image: "/images/testimonials/alex-torres.jpg"
      }
    ],
    stats: [
      { label: "Average Member Retention Increase", value: "42%" },
      { label: "Digital Engagement Improvement", value: "78%" },
      { label: "Administrative Time Reduction", value: "56%" }
    ],
    benefits: [
      "Streamlined operations and reduced administrative burden",
      "Enhanced member experience across physical and digital touchpoints",
      "Increased member retention and lifetime value",
      "Expanded reach through virtual offerings",
      "Data-driven insights for business optimization",
      "Seamless integration of in-person and digital wellness journeys"
    ],
    tools: [
      "React Native", "Node.js", "MongoDB", "AWS", "Stripe", "Twilio", "WebRTC", "Firebase", "Apple HealthKit", "Google Fit"
    ],
    faq: [
      {
        question: "How do your solutions help with member retention?",
        answer: "Our fitness platforms include engagement features such as progress tracking, achievement badges, workout reminders, personalized recommendations, and community elements. We can implement automated retention workflows that identify at-risk members based on attendance patterns and trigger interventions. The mobile apps we develop keep your brand consistently present in members' daily lives, strengthening loyalty and commitment."
      },
      {
        question: "Can you build systems that handle both in-person and virtual fitness offerings?",
        answer: "Yes, we specialize in creating hybrid solutions that seamlessly manage both physical and virtual fitness experiences. Our platforms can handle class bookings, personal training appointments, and facility reservations alongside virtual class streaming, on-demand content libraries, and remote coaching features. This unified approach simplifies operations for your business while providing flexibility for your clients."
      },
      {
        question: "How do you approach data privacy for sensitive health information?",
        answer: "We implement robust security measures including encryption, secure authentication, and granular permission controls. Our development follows health data privacy best practices and can be configured to comply with relevant regulations like HIPAA when necessary. We design systems that collect only essential health data with clear user consent and transparent privacy policies, building trust with your clients while providing valuable insights for your business."
      }
    ]
  },
  'construction': {
    id: "construction",
    slug: "construction",
    name: "Construction",
    shortDescription: "We deliver digital solutions that enhance project management, improve communication, and optimize operations for construction companies and contractors.",
    longDescription: "The construction industry faces unique challenges in project coordination, resource management, regulatory compliance, and client communication. Our specialized digital solutions help construction firms, contractors, architects, and developers streamline workflows, improve collaboration, and maintain comprehensive documentation. We understand the importance of both office and field accessibility in construction technology and develop solutions that function effectively in both environments.",
    icon: 'hammer',
    image: "/images/industries/construction.jpg",
    heroImage: "/images/industries/construction-hero.jpg",
    services: [
      {
        title: "Construction Project Management",
        description: "Comprehensive platforms for managing projects, timelines, resources, documentation, and stakeholder communication throughout the construction lifecycle."
      },
      {
        title: "Field Service & Mobile Solutions",
        description: "Mobile applications that provide on-site access to plans, checklists, photo documentation, time tracking, and real-time communication."
      },
      {
        title: "BIM Integration & Visualization",
        description: "Digital solutions that leverage Building Information Modeling data for enhanced project visualization, clash detection, and facilities management."
      },
      {
        title: "Construction Estimation Software",
        description: "Custom estimation tools that streamline the bidding process with accurate material calculations, labor costs, and project timelines."
      },
      {
        title: "Contractor Management Systems",
        description: "Platforms for managing subcontractors, verifying qualifications, tracking performance, and streamlining payment processes."
      }
    ],
    challenges: [
      {
        title: "Project Coordination",
        description: "Managing complex projects with multiple stakeholders, subcontractors, and interdependent timelines to prevent delays and cost overruns."
      },
      {
        title: "Field to Office Communication",
        description: "Ensuring seamless information flow between construction sites and office staff to maintain project momentum and accuracy."
      },
      {
        title: "Regulatory Compliance",
        description: "Navigating complex building codes, safety regulations, and documentation requirements across different jurisdictions and project types."
      },
      {
        title: "Resource Optimization",
        description: "Efficiently managing labor, equipment, and materials across multiple projects to maximize productivity and profitability."
      }
    ],
    caseStudies: getPortfolioItemsByIndustry("Construction"),
    testimonials: [
      {
        content: "The project management platform developed by RTN Global has transformed how we handle large-scale commercial projects. Documentation that once took days now happens in real-time, and our project delays have been reduced by 62% through better coordination.",
        author: "Robert Jenkins",
        position: "Operations Director",
        company: "Cornerstone Construction Group",
        image: "/images/testimonials/robert-jenkins.jpg"
      }
    ],
    stats: [
      { label: "Average Project Delay Reduction", value: "47%" },
      { label: "Documentation Time Savings", value: "73%" },
      { label: "Communication Efficiency Improvement", value: "58%" }
    ],
    benefits: [
      "Enhanced project visibility and stakeholder alignment",
      "Improved resource allocation and utilization",
      "Streamlined regulatory compliance and documentation",
      "Reduced rework through better communication",
      "Accelerated project completion timelines",
      "Comprehensive data for future project planning"
    ],
    tools: [
      "React", "Node.js", "MongoDB", "AWS", "Azure", "Autodesk Integration", "Procore Integration", "GIS", "Twilio", "SendGrid"
    ],
    faq: [
      {
        question: "Can your systems work in areas with limited internet connectivity?",
        answer: "Yes, we design our construction solutions with offline capabilities that allow field teams to continue working without constant internet access. Data captured offline is automatically synchronized when connectivity is restored. For areas with consistent connectivity challenges, we can implement edge computing solutions that maintain essential functionality with minimal bandwidth requirements."
      },
      {
        question: "How do you handle integration with existing construction software?",
        answer: "We have experience integrating with popular construction platforms including Procore, Autodesk Construction Cloud, PlanGrid, Bluebeam, and accounting systems like QuickBooks and Sage. Our approach involves secure API connections, custom middleware when necessary, and careful data mapping to ensure information flows correctly between systems while maintaining data integrity."
      },
      {
        question: "Can you develop solutions that support both large and small construction projects?",
        answer: "Absolutely. We design our construction solutions with scalability in mind, allowing them to handle projects ranging from residential renovations to large-scale commercial developments. The systems can be configured with different modules and permission levels to match project complexity, and pricing models can be adjusted based on project size and feature requirements to remain cost-effective for businesses of all sizes."
      }
    ]
  },
  'saas-technology': {
    id: "saas-technology",
    slug: "saas-technology",
    name: "SaaS & Technology",
    shortDescription: "We help SaaS and technology companies build scalable products, optimize user experiences, and accelerate growth in competitive digital markets.",
    longDescription: "In the rapidly evolving SaaS and technology landscape, product excellence and user experience are critical differentiators. Our specialized digital solutions help software companies, tech startups, and established technology businesses build robust products, streamline development processes, enhance user experiences, and scale efficiently. We understand the technical complexity and competitive pressures of the technology sector and provide solutions that enable innovation and sustainable growth.",
    icon: 'server',
    image: "/images/industries/saas-technology.jpg",
    heroImage: "/images/industries/saas-technology-hero.jpg",
    services: [
      {
        title: "SaaS Product Development",
        description: "End-to-end development of scalable, secure software-as-a-service products with robust infrastructure and optimized user experiences."
      },
      {
        title: "UX/UI Design for Technology Products",
        description: "User-centered design processes that create intuitive, engaging interfaces for complex technology products and platforms."
      },
      {
        title: "DevOps & CI/CD Implementation",
        description: "Streamlined development operations with continuous integration and delivery pipelines that accelerate product iterations."
      },
      {
        title: "Technology Stack Modernization",
        description: "Strategic upgrades of legacy systems and architecture to improve performance, security, and development velocity."
      },
      {
        title: "API Development & Integration",
        description: "Custom API development and third-party integrations that extend functionality and create ecosystem connections."
      }
    ],
    challenges: [
      {
        title: "Scalability",
        description: "Building systems and infrastructure that can grow efficiently with increasing user loads and data volumes."
      },
      {
        title: "Technical Debt",
        description: "Managing accumulated technical constraints while maintaining development velocity and product innovation."
      },
      {
        title: "User Adoption",
        description: "Creating intuitive experiences that minimize learning curves and maximize user engagement with complex technology."
      },
      {
        title: "Security & Compliance",
        description: "Maintaining robust security and compliance with industry standards while delivering innovative features."
      }
    ],
    caseStudies: getPortfolioItemsByIndustry("Software"),
    testimonials: [
      {
        content: "RTN Global helped us transform our enterprise software into a modern SaaS platform. Their technical expertise and focus on user experience resulted in a 64% improvement in our customer retention rate and enabled us to scale to triple our previous user capacity.",
        author: "Stephanie Gray",
        position: "CTO",
        company: "CloudFlow Solutions",
        image: "/images/testimonials/stephanie-gray.jpg"
      }
    ],
    stats: [
      { label: "Average Performance Improvement", value: "58%" },
      { label: "Development Velocity Increase", value: "72%" },
      { label: "User Adoption Growth", value: "45%" }
    ],
    benefits: [
      "Accelerated product development and time-to-market",
      "Scalable architecture designed for growth",
      "Enhanced user experiences that drive retention",
      "Efficient development operations and processes",
      "Strategic technology decisions aligned with business goals",
      "Competitive differentiation through product excellence"
    ],
    tools: [
      "React", "Angular", "Node.js", "Python", "AWS", "GCP", "Azure", "Kubernetes", "Docker", "MongoDB", "PostgreSQL", "Redis", "ElasticSearch", "Jenkins", "GitHub Actions"
    ],
    faq: [
      {
        question: "How do you approach scalability for fast-growing SaaS products?",
        answer: "We design SaaS architectures with scalability as a core principle, utilizing cloud-native technologies, microservices approaches, and horizontal scaling strategies. We implement efficient database design, caching layers, and content delivery networks while establishing auto-scaling configurations that respond to real-time demand. Our architecture includes performance monitoring and predictive scaling to anticipate growth needs before they become bottlenecks."
      },
      {
        question: "What strategies do you use to improve user adoption of complex technology products?",
        answer: "We focus on user-centered design methodologies that simplify complex workflows without sacrificing functionality. This includes extensive user research, iterative prototyping, and usability testing throughout development. We implement progressive disclosure techniques, contextual help systems, interactive onboarding flows, and feature discovery mechanisms. We also design comprehensive analytics to measure feature adoption and identify opportunities for experience improvements."
      },
      {
        question: "How do you help companies manage and reduce technical debt?",
        answer: "We begin with a comprehensive technical assessment to identify and prioritize debt based on business impact. We then develop a strategic refactoring plan that can be implemented incrementally alongside new feature development. Our approach includes establishing better development practices, automated testing frameworks, and code quality standards to prevent new debt accumulation. We focus on high-ROI improvements that deliver immediate value while gradually modernizing the entire codebase."
      }
    ]
  },
  'automotive': {
    id: "automotive",
    slug: "automotive",
    name: "Automotive",
    shortDescription: "We create digital solutions that help automotive dealerships, service providers, and manufacturers enhance customer experiences and streamline operations.",
    longDescription: "The automotive industry is undergoing a digital transformation that affects every aspect of the business from marketing and sales to service and customer retention. Our specialized digital solutions help dealerships, service centers, parts retailers, and manufacturers create engaging online experiences, streamline operations, and build lasting customer relationships. We understand the unique challenges of automotive businesses and develop technology that drives sales while improving operational efficiency.",
    icon: 'car',
    image: "/images/industries/automotive.jpg",
    heroImage: "/images/industries/automotive-hero.jpg",
    services: [
      {
        title: "Automotive Dealer Websites",
        description: "High-performance, conversion-focused websites that showcase inventory, generate leads, and provide seamless customer experiences for dealerships."
      },
      {
        title: "Vehicle Inventory Management",
        description: "Custom systems that simplify inventory tracking, synchronization across platforms, and presentation of vehicles with rich media and details."
      },
      {
        title: "Service Department Solutions",
        description: "Digital tools for appointment scheduling, service history tracking, customer communications, and shop floor management."
      },
      {
        title: "Automotive E-commerce Platforms",
        description: "Online parts and accessories stores with vehicle-specific fitment data, integration with suppliers, and efficient fulfillment processes."
      },
      {
        title: "Customer Relationship Management",
        description: "Specialized CRM solutions that track customer interactions, vehicle ownership history, and personalized marketing opportunities."
      }
    ],
    challenges: [
      {
        title: "Digital Retail Experience",
        description: "Creating online experiences that complement the in-person car buying process while meeting customer expectations for convenience and transparency."
      },
      {
        title: "Multi-Channel Integration",
        description: "Ensuring consistent inventory, pricing, and messaging across dealership website, third-party listing sites, and physical locations."
      },
      {
        title: "Service Retention",
        description: "Building digital tools that encourage customers to return for service and maintenance throughout their vehicle ownership lifecycle."
      },
      {
        title: "Industry Data Complexity",
        description: "Managing complex vehicle data, specifications, pricing models, and integration with industry databases and manufacturer systems."
      }
    ],
    caseStudies: getPortfolioItemsByIndustry("Automotive"),
    testimonials: [
      {
        content: "The digital transformation led by RTN Global revolutionized our dealership group. Our new website and inventory management system increased our lead generation by 87% while cutting our administrative time in half. Their understanding of the automotive industry was evident in every aspect of the project.",
        author: "James Richardson",
        position: "General Manager",
        company: "Premier Auto Group",
        image: "/images/testimonials/james-richardson.jpg"
      }
    ],
    stats: [
      { label: "Average Lead Generation Increase", value: "68%" },
      { label: "Inventory Management Time Reduction", value: "54%" },
      { label: "Service Appointment Growth", value: "43%" }
    ],
    benefits: [
      "Enhanced online presence with vehicle-focused experiences",
      "Streamlined inventory management across all channels",
      "Improved customer retention through service lifecycle",
      "Data-driven insights for inventory and pricing decisions",
      "Efficient lead management and follow-up processes",
      "Reduced administrative burden through automation"
    ],
    tools: [
      "React", "Node.js", "AWS", "CDK Motors Integration", "DealerTrack", "vAuto", "CarGurus API", "AutoTrader API", "MongoDB", "PostgreSQL"
    ],
    faq: [
      {
        question: "How do you handle integration with dealer management systems (DMS)?",
        answer: "We have experience integrating with major DMS platforms including CDK, Reynolds & Reynolds, Dealertrack, and others. We establish secure data connections using their APIs or authorized integration methods to synchronize inventory, customer, and transaction data. Our solutions maintain data integrity while automating flows between your website, CRM, and DMS to eliminate double-entry and ensure consistency across systems."
      },
      {
        question: "Can you help with online vehicle selling and digital retailing?",
        answer: "Yes, we build custom digital retailing experiences that allow customers to progress as far into the car buying process as they're comfortable with online. This includes payment calculators, trade-in valuation tools, finance pre-qualification, deposit collection, and document preparation. We design these experiences to either complete transactions fully online or create a seamless handoff to your in-store process, depending on your dealership's approach and local regulations."
      },
      {
        question: "How do you approach vehicle inventory presentation online?",
        answer: "We create rich, detailed vehicle presentation pages that highlight the unique features of each unit while maintaining strong SEO value. Our inventory systems support high-quality photos, videos, 360° views, and detailed specifications. We implement intelligent search and filtering based on how car shoppers actually look for vehicles, not just basic parameters. We also ensure your inventory is properly syndicated to third-party platforms with consistent data and media to maximize exposure."
      }
    ]
  },
  'event-management': {
    id: "event-management",
    slug: "event-management",
    name: "Event Management",
    shortDescription: "We build digital solutions that help event planners and venues manage registrations, engage attendees, and create seamless experiences for in-person, virtual, and hybrid events.",
    longDescription: "The event industry has evolved to embrace digital tools for planning, promotion, attendee engagement, and hybrid experiences. Our specialized solutions help event planners, venues, conference organizers, and corporate event teams streamline operations and create memorable experiences for participants. We understand the logistical complexity of events and the importance of reliable technology that performs flawlessly when it matters most.",
    icon: 'calendar',
    image: "/images/industries/event-management.jpg",
    heroImage: "/images/industries/event-management-hero.jpg",
    services: [
      {
        title: "Event Registration Platforms",
        description: "Custom registration systems with flexible ticketing options, promo codes, group registrations, and secure payment processing."
      },
      {
        title: "Event Mobile Applications",
        description: "Branded event apps with agendas, speaker profiles, interactive maps, networking features, and attendee engagement tools."
      },
      {
        title: "Hybrid Event Solutions",
        description: "Platforms that seamlessly blend in-person and virtual components with livestreaming, interaction tools, and content accessibility."
      },
      {
        title: "Venue Management Systems",
        description: "Comprehensive solutions for managing venue bookings, room configurations, resources, staffing, and client communications."
      },
      {
        title: "Event Marketing Websites",
        description: "Compelling event websites that drive registrations, feature speakers and agendas, and build excitement among potential attendees."
      }
    ],
    challenges: [
      {
        title: "Peak Performance",
        description: "Ensuring systems handle high-volume registration periods and concurrent users during live events without performance issues."
      },
      {
        title: "Hybrid Experience Parity",
        description: "Creating engaging experiences that serve both in-person and virtual attendees with appropriate feature sets and interaction models."
      },
      {
        title: "Real-time Adaptability",
        description: "Developing systems that can quickly accommodate schedule changes, room switches, and other last-minute adjustments during events."
      },
      {
        title: "Complex Logistics Coordination",
        description: "Managing the intricate details of speakers, sessions, attendees, venues, and resources in a unified, accessible system."
      }
    ],
    caseStudies: getPortfolioItemsByIndustry("Events"),
    testimonials: [
      {
        content: "RTN Global transformed our annual conference with an integrated platform that handled registrations, a mobile app, and virtual components. Attendance increased by 48%, including international participants who couldn't travel, and our staff spent 70% less time on administrative tasks.",
        author: "Olivia Chen",
        position: "Events Director",
        company: "Global Innovation Summit",
        image: "/images/testimonials/olivia-chen.jpg"
      }
    ],
    stats: [
      { label: "Registration Processing Time Reduction", value: "82%" },
      { label: "Average Attendee Engagement Increase", value: "64%" },
      { label: "Administrative Task Reduction", value: "73%" }
    ],
    benefits: [
      "Streamlined registration and check-in processes",
      "Enhanced attendee engagement through digital interaction",
      "Expanded reach with hybrid and virtual options",
      "Comprehensive event data and analytics",
      "Simplified logistics and resource management",
      "Consistent branding across all attendee touchpoints"
    ],
    tools: [
      "React", "Node.js", "React Native", "AWS", "Stripe", "Twilio", "WebRTC", "MongoDB", "PostgreSQL", "Socket.IO"
    ],
    faq: [
      {
        question: "How do your solutions handle high-volume registration periods?",
        answer: "We design event platforms with scalable architecture that automatically adjusts to traffic spikes during registration launches or promotional periods. Our systems implement queuing mechanisms when necessary, efficient database design, and content delivery networks to maintain performance. We conduct load testing simulating peak conditions and optimize every aspect of the registration flow to ensure a smooth experience even under maximum load."
      },
      {
        question: "What approaches do you take for hybrid events?",
        answer: "Our hybrid event solutions create unified experiences while respecting the different needs of in-person and virtual attendees. We implement high-quality streaming with redundancy, interactive features like polling and Q&A that work for both audiences, networking opportunities that bridge the physical/virtual divide, and content access that accommodates different time zones. Our platforms provide event organizers with unified management tools while offering appropriately tailored interfaces for each attendee type."
      },
      {
        question: "How do you help event planners leverage attendee data?",
        answer: "We build comprehensive analytics into our event platforms that track registration patterns, session attendance, engagement levels, feedback scores, and networking activities. This data is presented through intuitive dashboards with actionable insights about your event's performance. We can implement segmentation tools that help you understand different attendee groups and their behaviors, enabling more personalized marketing for future events and real-time adjustments during your current event."
      }
    ]
  },
  'beauty-salon': {
    id: "beauty-salon",
    slug: "beauty-salon",
    name: "Beauty & Salon",
    shortDescription: "We create digital solutions that help salons, spas, and beauty businesses streamline appointments, enhance client experiences, and grow their brand presence.",
    longDescription: "The beauty and salon industry combines personalized client services with complex scheduling, inventory, and marketing challenges. Our specialized digital solutions help salons, spas, barbershops, and beauty professionals manage their operations efficiently while providing exceptional client experiences. We understand the relationship-centered nature of beauty businesses and develop technology that supports both the operational and experiential aspects of your brand.",
    icon: 'scissors',
    image: "/images/industries/beauty-salon.jpg",
    heroImage: "/images/industries/beauty-salon-hero.jpg",
    services: [
      {
        title: "Salon Booking Systems",
        description: "User-friendly appointment scheduling platforms with staff availability management, service selection, and automated reminders to reduce no-shows."
      },
      {
        title: "Salon & Spa Websites",
        description: "Beautiful, conversion-focused websites that showcase your services, staff expertise, and brand aesthetic while facilitating online bookings."
      },
      {
        title: "Salon Management Software",
        description: "Comprehensive systems for managing appointments, client records, staff scheduling, inventory, point of sale, and business reporting."
      },
      {
        title: "Client Experience Apps",
        description: "Branded mobile applications that simplify booking, store preferences, track loyalty, showcase styles, and enhance the client relationship."
      },
      {
        title: "Beauty Marketing Automation",
        description: "Targeted marketing systems with automated campaigns, personalized recommendations, and client retention strategies based on service history."
      }
    ],
    challenges: [
      {
        title: "Appointment Optimization",
        description: "Efficiently managing staff scheduling, service timing, and resource allocation to maximize productivity without compromising service quality."
      },
      {
        title: "Client Retention",
        description: "Building lasting relationships through personalized experiences, consistent communication, and recognition of client preferences and history."
      },
      {
        title: "Service Diversification",
        description: "Managing complex service menus with various durations, resource requirements, staff qualifications, and pricing structures."
      },
      {
        title: "Visual Portfolio Presentation",
        description: "Effectively showcasing work examples and style options to potential clients across digital platforms and within the salon environment."
      }
    ],
    caseStudies: getPortfolioItemsByIndustry("Beauty"),
    testimonials: [
      {
        content: "The salon management system developed by RTN Global has transformed our multi-location business. No-shows decreased by 78%, online bookings increased by 142%, and our stylists now have complete client history at their fingertips. It's like having an extra manager at each location.",
        author: "Sophia Rodriguez",
        position: "Owner",
        company: "Allure Salon & Spa",
        image: "/images/testimonials/sophia-rodriguez.jpg"
      }
    ],
    stats: [
      { label: "No-Show Reduction", value: "82%" },
      { label: "Online Booking Increase", value: "154%" },
      { label: "Client Retention Improvement", value: "43%" }
    ],
    benefits: [
      "Streamlined appointment management and scheduling",
      "Enhanced client experiences through personalization",
      "Simplified operations and staff management",
      "Increased booking rates and decreased no-shows",
      "Improved inventory control and retail sales",
      "Data-driven marketing and client retention strategies"
    ],
    tools: [
      "React", "Node.js", "React Native", "AWS", "Stripe", "Twilio", "MongoDB", "PostgreSQL", "Cloudinary", "SendGrid"
    ],
    faq: [
      {
        question: "How can your solutions help reduce no-shows and late cancellations?",
        answer: "Our booking systems implement multiple strategies to reduce no-shows, including automated multi-channel appointment reminders via SMS, email, and push notifications with customizable timing. We can set up confirmation requirements, cancellation/rescheduling policies with appropriate notice periods, and optional deposit systems for high-demand services or time slots. Our analytics also help identify patterns in no-show behavior to inform preventive strategies specific to your client base."
      },
      {
        question: "Can you create systems that handle complex service combinations and timing?",
        answer: "Yes, our salon scheduling systems are designed to manage complex service scenarios including multi-service appointments, overlapping services (processing time during other services), different duration options based on hair length or complexity, and appropriate gap times for staff. We implement dynamic scheduling rules that understand service dependencies, required resources, and staff capabilities to create realistic, efficient booking options for clients while optimizing your service calendar."
      },
      {
        question: "How do you help salons create personalized client experiences?",
        answer: "We develop comprehensive client profile systems that track service history, preferences, formulations, stylist notes, and photos. This information is easily accessible to your staff during appointments to ensure consistent, personalized service. Our systems can also implement automated touch points like birthday offers, service anniversary recognition, personalized product recommendations based on services received, and timely rebooking reminders based on each client's typical service interval patterns."
      }
    ]
  },
  'media-entertainment': {
    id: "media-entertainment",
    slug: "media-entertainment",
    name: "Media & Entertainment",
    shortDescription: "We develop digital platforms that help media companies distribute content, engage audiences, and monetize digital assets across multiple channels and formats.",
    longDescription: "The media and entertainment industry faces continuous evolution in how content is created, distributed, and consumed. Our specialized digital solutions help publishers, broadcasters, streaming services, production companies, and content creators build robust platforms for content delivery, audience engagement, and revenue generation. We understand the complex intersection of creative content and technology and develop solutions that connect creators with audiences while supporting sustainable business models.",
    icon: 'film',
    image: "/images/industries/media-entertainment.jpg",
    heroImage: "/images/industries/media-entertainment-hero.jpg",
    services: [
      {
        title: "Content Management Systems",
        description: "Custom CMS solutions that simplify content creation, management, and distribution across multiple platforms and formats."
      },
      {
        title: "Streaming & Video Platforms",
        description: "Scalable streaming solutions for VOD and live content with adaptive playback, content protection, and monetization options."
      },
      {
        title: "Media Mobile Applications",
        description: "Branded mobile apps that deliver optimized content experiences, personalized recommendations, and interactive features for audience engagement."
      },
      {
        title: "Subscription & Membership Platforms",
        description: "Flexible subscription systems with tiered access, payment processing, entitlement management, and retention optimization."
      },
      {
        title: "Digital Asset Management",
        description: "Comprehensive systems for organizing, protecting, and monetizing valuable media assets with appropriate metadata and rights management."
      }
    ],
    challenges: [
      {
        title: "Content Distribution",
        description: "Delivering seamless, high-quality content experiences across diverse devices, platforms, and connectivity conditions."
      },
      {
        title: "Audience Engagement",
        description: "Creating compelling digital experiences that capture attention and build loyal audiences in a highly competitive content landscape."
      },
      {
        title: "Monetization Strategy",
        description: "Implementing effective revenue models that balance audience growth with sustainable income from subscriptions, advertising, and transactions."
      },
      {
        title: "Content Protection",
        description: "Safeguarding valuable intellectual property while providing convenient access to authorized users and preventing unauthorized distribution."
      }
    ],
    caseStudies: getPortfolioItemsByIndustry("Media"),
    testimonials: [
      {
        content: "RTN Global built a streaming platform that transformed our content business. Their solution scaled flawlessly during peak events, increased our subscriber retention by 58%, and provided analytics that helped us make smarter content investment decisions. They truly understand the unique challenges of digital media.",
        author: "David Morgan",
        position: "Digital Director",
        company: "Spectrum Media Network",
        image: "/images/testimonials/david-morgan.jpg"
      }
    ],
    stats: [
      { label: "Average Audience Growth", value: "86%" },
      { label: "Content Consumption Increase", value: "124%" },
      { label: "Digital Revenue Improvement", value: "73%" }
    ],
    benefits: [
      "Seamless content delivery across multiple platforms",
      "Enhanced audience engagement and retention",
      "Diversified digital revenue streams",
      "Streamlined content production and distribution workflows",
      "Valuable audience insights and content performance analytics",
      "Scalable infrastructure that handles traffic spikes"
    ],
    tools: [
      "React", "Node.js", "AWS Media Services", "Cloudfront", "Elasticsearch", "PostgreSQL", "MongoDB", "Redis", "Stripe", "Brightcove"
    ],
    faq: [
      {
        question: "How do you approach content delivery for global audiences?",
        answer: "We implement multi-region content delivery networks (CDNs) that place your content physically closer to users worldwide, reducing latency and improving playback quality. Our streaming architectures include adaptive bitrate technologies that automatically adjust quality based on the viewer's connection. We also build localization frameworks for multilingual subtitles, audio tracks, and regional content variations, along with regional compliance controls when necessary."
      },
      {
        question: "What strategies do you use for content protection and DRM?",
        answer: "We implement layered content protection strategies tailored to your specific needs and content value. This may include industry-standard DRM systems (Widevine, FairPlay, PlayReady), secure token authentication, IP and geography restrictions, concurrency limitations, watermarking, and encryption. Our approach balances strong protection with user experience considerations, finding the right security level that protects your content without creating unnecessary friction for legitimate users."
      },
      {
        question: "How do you help media companies monetize digital content?",
        answer: "We develop flexible monetization frameworks that can combine subscription models (with tiered options, free trials, and retention tools), advertising systems (with targeting capabilities and format variety), transactional purchases (rentals, downloads, pay-per-view), bundling opportunities, and affiliate/partnership revenue. Our platforms include robust analytics to help you understand performance across monetization methods and optimize your revenue mix based on audience behavior and preferences."
      }
    ]
  },
  'nonprofits': {
    id: "nonprofits",
    slug: "nonprofits",
    name: "Nonprofits",
    shortDescription: "We provide digital solutions that help nonprofit organizations maximize their impact, engage supporters, and advance their missions efficiently.",
    longDescription: "Nonprofit organizations face unique challenges in raising awareness, engaging donors, demonstrating impact, and managing limited resources. Our specialized digital solutions help foundations, charities, associations, and mission-driven organizations build compelling online presences, streamline operations, and create meaningful connections with their communities. We understand the distinct needs of the nonprofit sector and develop technology that amplifies your mission while respecting resource constraints.",
    icon: 'heart',
    image: "/images/industries/nonprofits.jpg",
    heroImage: "/images/industries/nonprofits-hero.jpg",
    services: [
      {
        title: "Nonprofit Website Development",
        description: "Mission-focused websites that communicate your cause effectively, showcase impact, and facilitate donations with secure payment processing."
      },
      {
        title: "Donor Management Systems",
        description: "Custom databases and CRM solutions that help you track supporters, manage relationships, analyze giving patterns, and increase donor retention."
      },
      {
        title: "Online Fundraising Platforms",
        description: "Digital fundraising tools including campaign pages, peer-to-peer functionality, recurring donation options, and event registration systems."
      },
      {
        title: "Impact Reporting Dashboards",
        description: "Visual data presentation tools that communicate your organization's outcomes and achievements to stakeholders and supporters."
      },
      {
        title: "Volunteer Management Systems",
        description: "Comprehensive platforms for recruiting, scheduling, communicating with, and recognizing volunteers across your programs."
      }
    ],
    challenges: [
      {
        title: "Resource Constraints",
        description: "Achieving meaningful digital impact while working with limited budgets, technical staff, and competing organizational priorities."
      },
      {
        title: "Donor Engagement",
        description: "Creating compelling digital experiences that attract supporters, communicate impact, and encourage ongoing commitment to your cause."
      },
      {
        title: "Data Management",
        description: "Efficiently tracking and leveraging information across constituents, programs, donations, and impact metrics for better decision-making."
      },
      {
        title: "Multi-Stakeholder Communications",
        description: "Addressing diverse audiences including donors, volunteers, beneficiaries, board members, and the general public with targeted messaging."
      }
    ],
    caseStudies: getPortfolioItemsByIndustry("Nonprofit"),
    testimonials: [
      {
        content: "RTN Global transformed our digital presence and dramatically improved our online fundraising capabilities. The donor management system they built has increased our retention rate by 47% and streamlined operations so our small team can focus on our mission rather than administration.",
        author: "Elizabeth Murray",
        position: "Executive Director",
        company: "Community Hope Foundation",
        image: "/images/testimonials/elizabeth-murray.jpg"
      }
    ],
    stats: [
      { label: "Average Online Donation Increase", value: "62%" },
      { label: "Administrative Time Savings", value: "48%" },
      { label: "Volunteer Engagement Improvement", value: "73%" }
    ],
    benefits: [
      "Enhanced donor acquisition and retention",
      "Streamlined administrative operations",
      "Improved volunteer engagement and management",
      "Compelling impact storytelling and reporting",
      "Cost-effective technology solutions",
      "Increased community awareness and support"
    ],
    tools: [
      "WordPress", "React", "Node.js", "Salesforce Nonprofit Cloud", "Stripe Donations", "MailChimp", "Google Analytics", "Google Ad Grants", "DonorPerfect", "Volunteer Match"
    ],
    faq: [
      {
        question: "How do you create technology solutions that fit nonprofit budgets?",
        answer: "We take a strategic approach to nonprofit technology, focusing on solutions that provide the highest impact for your budget. This includes leveraging nonprofit-specific platforms with discounted pricing, implementing phased development approaches that spread costs over time, creating systems that reduce administrative overhead, and designing solutions that can grow with your organization. We also help nonprofits apply for technology grants and utilize resources like Google Ad Grants and TechSoup."
      },
      {
        question: "Can you help us demonstrate our impact more effectively online?",
        answer: "Yes, we specialize in creating compelling impact visualization for nonprofits. We develop interactive dashboards that display your metrics and outcomes in engaging ways, design infographics and storytelling elements that communicate complex information clearly, implement impact journey maps for donors, and create beneficiary storytelling frameworks. Our approach focuses on translating data into meaningful narratives that resonate with supporters and clearly demonstrate your organization's effectiveness."
      },
      {
        question: "How do you approach integrating various nonprofit systems?",
        answer: "We understand that nonprofits often use multiple specialized systems for different functions. Our integration approach begins with a comprehensive audit of your existing technology ecosystem. We then implement secure API connections between your CRM, donation platform, email marketing, accounting software, and program management tools. We create unified data flows that eliminate duplicate entry, ensure data consistency across systems, and provide holistic views of constituents and programs while respecting data privacy requirements."
      }
    ]
  },
  'logistics-transportation': {
    id: "logistics-transportation",
    slug: "logistics-transportation",
    name: "Logistics & Transportation",
    shortDescription: "We create digital solutions that help logistics and transportation companies optimize operations, enhance visibility, and deliver exceptional customer experiences.",
    longDescription: "The logistics and transportation industry relies on efficient operations, real-time visibility, and seamless communication across complex supply chains. Our specialized digital solutions help freight carriers, shipping companies, warehousing operations, and logistics service providers streamline processes, track assets, and enhance customer experiences. We understand the time-sensitive nature of logistics operations and develop technology that improves efficiency while providing the transparency that modern customers expect.",
    icon: 'truck',
    image: "/images/industries/logistics-transportation.jpg",
    heroImage: "/images/industries/logistics-transportation-hero.jpg",
    services: [
      {
        title: "Fleet Management Systems",
        description: "Comprehensive platforms for tracking vehicles, managing maintenance schedules, monitoring driver performance, and optimizing route efficiency."
      },
      {
        title: "Shipment Tracking Platforms",
        description: "Real-time tracking solutions that provide visibility into shipment status, estimated arrival times, and exception alerts for all stakeholders."
      },
      {
        title: "Warehouse Management Software",
        description: "Inventory control and warehouse optimization systems that streamline receiving, picking, packing, and shipping operations with precision."
      },
      {
        title: "Transportation Management Systems",
        description: "End-to-end solutions for managing freight operations, carrier selection, load planning, documentation, and transportation analytics."
      },
      {
        title: "Logistics Customer Portals",
        description: "Branded customer interfaces that provide self-service tracking, documentation access, booking capabilities, and communication channels."
      }
    ],
    challenges: [
      {
        title: "Supply Chain Visibility",
        description: "Providing comprehensive, real-time tracking and status information across complex multi-modal transportation networks."
      },
      {
        title: "Operational Efficiency",
        description: "Optimizing routes, loads, and resources to maximize asset utilization while meeting delivery timeframes and customer expectations."
      },
      {
        title: "Documentation Management",
        description: "Handling complex documentation requirements for domestic and international shipments while ensuring compliance and accessibility."
      },
      {
        title: "Integration Complexity",
        description: "Connecting with diverse systems used by customers, partners, carriers, and regulatory agencies throughout the logistics ecosystem."
      }
    ],
    caseStudies: getPortfolioItemsByIndustry("Logistics"),
    testimonials: [
      {
        content: "The transportation management system developed by RTN Global revolutionized our operations. We've achieved a 32% improvement in on-time deliveries, reduced empty miles by 28%, and provided our customers with the real-time visibility they've been requesting for years.",
        author: "Thomas Reynolds",
        position: "Operations Director",
        company: "Global Freight Solutions",
        image: "/images/testimonials/thomas-reynolds.jpg"
      }
    ],
    stats: [
      { label: "Average Operational Efficiency Gain", value: "37%" },
      { label: "Customer Service Inquiry Reduction", value: "53%" },
      { label: "Driver Productivity Improvement", value: "29%" }
    ],
    benefits: [
      "Enhanced shipment visibility and tracking",
      "Optimized route planning and execution",
      "Streamlined documentation and compliance",
      "Improved customer communication and satisfaction",
      "Data-driven decision making for operations",
      "Reduced administrative workload and errors"
    ],
    tools: [
      "React", "Node.js", "MongoDB", "AWS", "Google Maps API", "Twilio", "IoT Platforms", "ELD Integration", "EDI Solutions", "REST APIs"
    ],
    faq: [
      {
        question: "How do your systems handle real-time tracking and visibility?",
        answer: "Our logistics tracking solutions utilize multiple data sources including GPS, ELD (Electronic Logging Device) integration, IoT sensors, and carrier API connections to provide comprehensive visibility. We implement real-time data processing with geofencing capabilities, automated status updates based on location intelligence, and predictive ETA calculations that account for traffic and weather conditions. The information is presented through intuitive dashboards and can be shared with customers through branded portals or API integrations with their systems."
      },
      {
        question: "Can you integrate with our existing transportation systems?",
        answer: "Yes, we have extensive experience integrating with transportation and logistics systems including major TMS platforms, ERP systems, warehouse management software, accounting systems, and carrier networks. We implement secure API connections, EDI (Electronic Data Interchange) capabilities, and custom middleware when necessary to ensure seamless data flow. Our integration approach focuses on maintaining data integrity while automating information exchange to eliminate duplicate entry and reduce operational friction."
      },
      {
        question: "How do you approach mobile solutions for drivers and field personnel?",
        answer: "We develop robust mobile applications that work reliably in challenging connectivity environments. Our mobile solutions typically include offline functionality with data synchronization when connectivity is restored, simplified interfaces designed for safe usage while on the road, document scanning and electronic signature capture, real-time communication features, and integration with navigation services. We can also implement telematics integration, electronic driver logs, vehicle inspection reports, and other compliance-related functionality."
      }
    ]
  },
  'manufacturing': {
    id: "manufacturing",
    slug: "manufacturing",
    name: "Manufacturing",
    shortDescription: "We deliver digital solutions that help manufacturers optimize production processes, improve quality control, and enhance operational visibility across facilities.",
    longDescription: "The manufacturing industry faces increasing pressure to improve efficiency, ensure quality, and adapt to changing market demands. Our specialized digital solutions help manufacturers streamline operations, gain real-time insights into production processes, and make data-driven decisions that enhance productivity and quality. We understand the unique challenges of manufacturing environments and develop technology that integrates with existing systems while providing new capabilities for operational excellence.",
    icon: 'building2',
    image: "/images/industries/manufacturing.jpg",
    heroImage: "/images/industries/manufacturing-hero.jpg",
    services: [
      {
        title: "Manufacturing Execution Systems",
        description: "Comprehensive solutions for production tracking, work order management, resource allocation, and real-time operational visibility."
      },
      {
        title: "Quality Management Systems",
        description: "Digital tools for quality control processes, inspection data collection, defect tracking, corrective actions, and compliance documentation."
      },
      {
        title: "Production Analytics Dashboards",
        description: "Customized visualization tools that present real-time and historical production data to identify trends, bottlenecks, and improvement opportunities."
      },
      {
        title: "Inventory & Supply Chain Management",
        description: "Integrated systems for tracking raw materials, work-in-progress, finished goods, and coordinating with suppliers and distributors."
      },
      {
        title: "Industrial IoT Implementations",
        description: "Connected solutions that gather data from production equipment, environmental sensors, and quality checkpoints to enable predictive maintenance and process optimization."
      }
    ],
    challenges: [
      {
        title: "Production Efficiency",
        description: "Optimizing manufacturing processes to maximize throughput, minimize downtime, and reduce waste while maintaining quality standards."
      },
      {
        title: "Real-time Visibility",
        description: "Gaining accurate, up-to-the-minute insights into production status, equipment performance, and quality metrics across operations."
      },
      {
        title: "Legacy System Integration",
        description: "Connecting modern digital solutions with existing equipment, control systems, and business applications in manufacturing environments."
      },
      {
        title: "Operational Complexity",
        description: "Managing diverse production processes, equipment types, product specifications, and compliance requirements in a unified digital ecosystem."
      }
    ],
    caseStudies: getPortfolioItemsByIndustry("Manufacturing"),
    testimonials: [
      {
        content: "The manufacturing execution system implemented by RTN Global has transformed our production floor visibility and efficiency. We've reduced production downtime by 42%, improved first-pass quality by 26%, and now have the real-time data needed to make informed decisions that directly impact our bottom line.",
        author: "Richard Wong",
        position: "VP of Operations",
        company: "Precision Manufacturing Inc.",
        image: "/images/testimonials/richard-wong.jpg"
      }
    ],
    stats: [
      { label: "Average Production Efficiency Increase", value: "31%" },
      { label: "Quality Defect Reduction", value: "38%" },
      { label: "Downtime Decrease", value: "43%" }
    ],
    benefits: [
      "Enhanced production planning and execution",
      "Improved quality control and consistency",
      "Real-time visibility into operations",
      "Reduced waste and operational costs",
      "Better decision-making through data analytics",
      "Streamlined regulatory compliance"
    ],
    tools: [
      "React", "Node.js", "Python", "AWS", "Azure IoT", "PostgreSQL", "MQTT", "OPC UA", "Power BI", "Tableau"
    ],
    faq: [
      {
        question: "How do you integrate with existing manufacturing equipment and systems?",
        answer: "We use a variety of methods to connect with manufacturing equipment and systems, depending on their capabilities. For modern equipment, we implement direct API connections or utilize OPC UA, MQTT, or other industrial protocols. For legacy equipment, we can deploy edge computing devices with appropriate hardware interfaces to gather data. We have experience integrating with major MES, ERP, PLM, and SCADA systems, ensuring data flows seamlessly between operational technology (OT) and information technology (IT) environments while maintaining security boundaries."
      },
      {
        question: "Can your solutions work in environments with limited connectivity?",
        answer: "Yes, we design manufacturing solutions with challenging connectivity environments in mind. Our applications implement edge computing approaches that enable local data processing and storage when cloud connectivity is limited. We use store-and-forward architectures to ensure data integrity during connection interruptions, prioritize critical communications when bandwidth is constrained, and can implement hybrid cloud/on-premises solutions that maintain essential functionality regardless of internet availability."
      },
      {
        question: "How do you approach the security of manufacturing systems?",
        answer: "Manufacturing system security is critically important, especially as operational technology becomes more connected. Our approach includes network segmentation with clear boundaries between OT and IT, role-based access controls tailored to manufacturing roles, secure communication protocols with encryption, careful validation of all data inputs, regular security assessments, and monitoring for anomalous behavior. We follow industrial security frameworks such as IEC 62443 and design systems with the principle of least privilege to limit potential attack surfaces."
      }
    ]
  },
  'fashion-apparel': {
    id: "fashion-apparel",
    slug: "fashion-apparel",
    name: "Fashion & Apparel",
    shortDescription: "We create digital solutions that help fashion brands enhance their online presence, streamline operations, and deliver exceptional shopping experiences.",
    longDescription: "The fashion and apparel industry combines creative design with complex merchandising, inventory, and customer experience challenges. Our specialized digital solutions help clothing brands, retailers, and manufacturers showcase their collections, manage product lifecycles, and build direct relationships with style-conscious consumers. We understand the visual nature of fashion and develop technology that brings your designs to life online while streamlining behind-the-scenes operations.",
    icon: 'shirt',
    image: "/images/industries/fashion-apparel.jpg",
    heroImage: "/images/industries/fashion-apparel-hero.jpg",
    services: [
      {
        title: "Fashion E-commerce Platforms",
        description: "Visually stunning online stores that showcase apparel collections with advanced filtering, size guidance, and seamless shopping experiences."
      },
      {
        title: "Product Lifecycle Management",
        description: "Digital systems for managing design concepts, sample development, production specifications, and collection planning."
      },
      {
        title: "Virtual Try-On Solutions",
        description: "Augmented reality applications that allow customers to visualize how garments will look on them before purchasing."
      },
      {
        title: "Inventory & Order Management",
        description: "Specialized systems for tracking fashion merchandise across seasons, sizes, colors, and locations while optimizing fulfillment."
      },
      {
        title: "Fashion Marketing Platforms",
        description: "Content management and campaign tools designed for showcasing collections, lookbooks, and fashion storytelling across digital channels."
      }
    ],
    challenges: [
      {
        title: "Visual Merchandising",
        description: "Creating compelling digital presentations of apparel that accurately represent colors, textures, fit, and styling options to online shoppers."
      },
      {
        title: "Seasonal Inventory",
        description: "Managing rapid product cycles, multiple size/color variations, and seasonal transitions while minimizing overstock and stockouts."
      },
      {
        title: "Customer Experience",
        description: "Providing guidance on fit, styling, and product details to help customers make confident purchase decisions without physical interaction."
      },
      {
        title: "Brand Storytelling",
        description: "Communicating brand identity, design inspiration, and sustainability practices through engaging digital content and experiences."
      }
    ],
    caseStudies: getPortfolioItemsByIndustry("Fashion"),
    testimonials: [
      {
        content: "RTN Global revolutionized our digital presence with an e-commerce platform that truly captures the essence of our brand. The visual merchandising tools and personalization features have increased our average order value by 46% and dramatically reduced our return rate. They understand the unique needs of fashion brands.",
        author: "Isabelle Chen",
        position: "Digital Director",
        company: "Moderne Apparel Group",
        image: "/images/testimonials/isabelle-chen.jpg"
      }
    ],
    stats: [
      { label: "Average Conversion Rate Increase", value: "54%" },
      { label: "Product Return Rate Reduction", value: "32%" },
      { label: "Inventory Management Efficiency", value: "47%" }
    ],
    benefits: [
      "Compelling visual presentation of fashion collections",
      "Simplified management of product variations",
      "Enhanced customer confidence in purchasing decisions",
      "Streamlined inventory and order fulfillment",
      "Effective storytelling for seasonal collections",
      "Reduced returns through better product information"
    ],
    tools: [
      "React", "Node.js", "Shopify Plus", "Magento", "Adobe Creative Cloud", "Contentful", "Cloudinary", "AR Kit", "PLM Systems", "Instagram Shopping"
    ],
    faq: [
      {
        question: "How do you approach product visualization for fashion items?",
        answer: "We implement multiple techniques to showcase fashion products effectively online. This includes high-quality zoomable product photography from multiple angles, 360-degree product views, on-model and flat-lay presentations, fabric detail close-ups, and accurate color representation across devices. For more advanced experiences, we can implement virtual try-on using AR technology, body measurement algorithms for fit recommendations, outfit builders to visualize combinations, and user-generated content integration that shows real customers wearing the items."
      },
      {
        question: "Can you help manage complex inventory with size and color variations?",
        answer: "Yes, our fashion inventory systems are specifically designed to handle the complexity of apparel product variations. We implement matrix inventory management that efficiently organizes products by style, color, size, and other attributes. Our systems include size curve analytics to optimize stock levels based on historical sales patterns, automated low-stock alerts by variant, inventory allocation across channels, and season transition planning tools. We also provide visual inventory dashboards that highlight performance by attribute to inform future buying decisions."
      },
      {
        question: "How do you create e-commerce experiences that reflect our brand identity?",
        answer: "We approach fashion e-commerce as an extension of your brand experience, not just a sales channel. This begins with a deep dive into your brand identity, design aesthetic, and customer base. We develop custom design elements that reflect your brand's unique style, implement content-rich shopping experiences that incorporate your brand story, and create custom product detail pages that highlight the distinctive features of your garments. Our approach emphasizes flexibility to adapt to seasonal collections and campaigns while maintaining consistent brand positioning."
      }
    ]
  },
  'photography': {
    id: "photography",
    slug: "photography",
    name: "Photography",
    shortDescription: "We deliver digital solutions that help photographers showcase their work, manage clients, and streamline their business operations.",
    longDescription: "Professional photographers balance creative artistry with complex business management challenges. Our specialized digital solutions help photographers, studios, and visual artists present their portfolios, streamline client interactions, and manage the administrative aspects of their business. We understand both the visual importance and operational needs of photography businesses and develop technology that showcases your work beautifully while simplifying your workflow.",
    icon: 'camera',
    image: "/images/industries/photography.jpg",
    heroImage: "/images/industries/photography-hero.jpg",
    services: [
      {
        title: "Photography Portfolio Websites",
        description: "Visually stunning, fast-loading websites that showcase your photography with optimal image quality, organization, and responsive design."
      },
      {
        title: "Client Galleries & Delivery",
        description: "Secure, branded platforms for sharing image collections with clients, enabling selections, downloads, and print ordering."
      },
      {
        title: "Photography Business Management",
        description: "Comprehensive systems for managing clients, bookings, contracts, invoicing, and project workflows specific to photography businesses."
      },
      {
        title: "Print & Product Sales Platforms",
        description: "E-commerce solutions for selling prints, photo books, and other products directly to clients with automated fulfillment options."
      },
      {
        title: "Photo Studio Management",
        description: "Tools for managing studio resources, equipment rentals, session scheduling, and client communications for photography studios."
      }
    ],
    challenges: [
      {
        title: "Image Presentation",
        description: "Showcasing high-resolution photography online with optimal quality, loading speed, and protection from unauthorized use."
      },
      {
        title: "Client Interaction",
        description: "Managing the client experience from initial inquiry through booking, session planning, image delivery, and print ordering."
      },
      {
        title: "Workflow Efficiency",
        description: "Streamlining the administrative aspects of photography businesses to maximize time available for creative work."
      },
      {
        title: "Visual Branding",
        description: "Creating a consistent online presence that reflects your photographic style and appeals to your target client base."
      }
    ],
    caseStudies: getPortfolioItemsByIndustry("Photography"),
    testimonials: [
      {
        content: "The client gallery and business management system created by RTN Global has transformed my wedding photography business. I'm saving 15 hours per week on administrative tasks, my clients love the seamless experience, and my print sales have increased by 215%. This has literally changed my life as a photographer.",
        author: "Michael Garcia",
        position: "Owner",
        company: "Garcia Wedding Photography",
        image: "/images/testimonials/michael-garcia.jpg"
      }
    ],
    stats: [
      { label: "Administrative Time Reduction", value: "65%" },
      { label: "Online Print Sales Increase", value: "143%" },
      { label: "Client Booking Conversion", value: "38%" }
    ],
    benefits: [
      "Professional presentation of your photography",
      "Streamlined client communication and delivery",
      "Simplified business administration and booking",
      "Enhanced opportunities for print and product sales",
      "Effective marketing to your target clients",
      "Secure storage and organization of client images"
    ],
    tools: [
      "React", "Next.js", "Node.js", "AWS S3", "Cloudinary", "Stripe", "Square", "Adobe Lightroom Integration", "CRM Systems", "Email Marketing"
    ],
    faq: [
      {
        question: "How do you optimize image loading for photography websites?",
        answer: "We implement multiple techniques to ensure your photography loads quickly while maintaining quality. This includes responsive image delivery with appropriate sizes for different devices, lazy loading that prioritizes visible images, progressive image loading for a better user experience, content delivery networks for global performance, and modern image formats like WebP with fallbacks for compatibility. We carefully balance compression settings to preserve image quality while minimizing file size, and implement caching strategies to improve repeat visits."
      },
      {
        question: "Can you help protect my images from unauthorized use?",
        answer: "We implement several protection layers for your photography based on your preferences. Options include disabling right-click downloading, applying visible or invisible watermarks, using low-resolution previews with high-resolution delivery only to clients, implementing digital fingerprinting that traces leaked images, and DMCA protection tools. For client galleries, we provide access controls with password protection, expiration dates, download limitations, and user-specific permissions while maintaining analytics on viewing and downloading behavior."
      },
      {
        question: "How do you approach the client experience for photographers?",
        answer: "We design client experiences that reflect the premium, personalized nature of professional photography. This includes branded client portals with your photography style and logo, streamlined inquiry and booking processes, automated client questionnaires and preparation guidance, visual calendar booking, contract and invoice management, mobile-optimized galleries for convenient reviewing, and customizable selection and favorite tools. We focus on creating intuitive experiences that clients can navigate easily while maintaining the distinctive feel of your photography brand."
      }
    ]
  },
  'interior-design': {
    id: "interior-design",
    slug: "interior-design",
    name: "Interior Design",
    shortDescription: "We create digital solutions that help interior designers showcase their work, streamline projects, and create immersive client experiences.",
    longDescription: "Interior design combines creative artistry with detailed project management and client collaboration. Our specialized digital solutions help interior designers, decorators, and design firms present their portfolio, communicate design concepts, manage project details, and streamline business operations. We understand the visual nature of interior design and develop technology that showcases your unique aesthetic while simplifying project workflows.",
    icon: 'lamp',
    image: "/images/industries/interior-design.jpg",
    heroImage: "/images/industries/interior-design-hero.jpg",
    services: [
      {
        title: "Interior Design Portfolio Websites",
        description: "Visually stunning websites that showcase your projects with immersive galleries, detailed case studies, and style presentations that attract ideal clients."
      },
      {
        title: "Design Project Management",
        description: "Comprehensive systems for managing project timelines, client approvals, procurement, installation coordination, and budget tracking."
      },
      {
        title: "3D Visualization & Virtual Reality",
        description: "Interactive visualization tools that transform design concepts into immersive spatial experiences clients can explore before implementation."
      },
      {
        title: "Product & Material Libraries",
        description: "Digital catalogs for organizing fabrics, finishes, furniture, and fixtures with specifications, pricing, and availability for efficient sourcing."
      },
      {
        title: "Client Collaboration Portals",
        description: "Secure platforms for sharing design concepts, collecting feedback, tracking approvals, and maintaining communication throughout projects."
      }
    ],
    challenges: [
      {
        title: "Visual Communication",
        description: "Helping clients visualize design concepts and understand spatial transformations before physical implementation begins."
      },
      {
        title: "Project Coordination",
        description: "Managing complex timelines involving multiple vendors, contractors, and deliveries while maintaining client expectations."
      },
      {
        title: "Portfolio Presentation",
        description: "Showcasing completed projects in ways that highlight your design philosophy, attention to detail, and the transformation achieved."
      },
      {
        title: "Product Sourcing & Management",
        description: "Tracking specifications, pricing, availability, and procurement status across numerous products and materials for multiple projects."
      }
    ],
    caseStudies: getPortfolioItemsByIndustry("Interior Design"),
    testimonials: [
      {
        content: "RTN Global created a digital ecosystem that has transformed how we manage our design projects and communicate with clients. The visualization tools and project management system have increased our efficiency by 47% and significantly enhanced the client experience. Our clients now feel more confident in their design decisions, resulting in faster approvals and smoother projects.",
        author: "Amanda Pierce",
        position: "Principal Designer",
        company: "Pierce Interior Design Studio",
        image: "/images/testimonials/amanda-pierce.jpg"
      }
    ],
    stats: [
      { label: "Client Approval Time Reduction", value: "58%" },
      { label: "Project Management Efficiency", value: "47%" },
      { label: "Design Revisions Decrease", value: "64%" }
    ],
    benefits: [
      "Compelling presentation of your design portfolio",
      "Streamlined project management and coordination",
      "Enhanced client understanding and confidence",
      "Efficient product sourcing and specification",
      "Reduced administrative burden",
      "Improved client communication and collaboration"
    ],
    tools: [
      "React", "Node.js", "Three.js", "WebGL", "AutoCAD Integration", "SketchUp Integration", "Cloudinary", "Airtable", "Asana", "InVision"
    ],
    faq: [
      {
        question: "How do you help designers better communicate design concepts to clients?",
        answer: "We implement multiple visualization approaches tailored to your design process. This includes interactive mood boards for concept development, high-quality 2D renderings with accurate material representation, immersive 3D visualizations that clients can explore from different perspectives, virtual reality experiences for spatial understanding, and augmented reality tools that show how elements will look in the actual space. We focus on creating visual experiences that bridge the gap between technical design elements and client comprehension, resulting in more confident decision-making."
      },
      {
        question: "Can you help manage the sourcing and procurement aspects of design projects?",
        answer: "Yes, we develop custom product management systems for interior designers that streamline the specification and procurement process. Our solutions include digital product libraries with customizable attributes, specification sheet generation, vendor relationship management, purchase order tracking, delivery scheduling, and budget monitoring. We can integrate with preferred vendor catalogs and implement inventory status checking to identify potential delays early. These systems ensure you have comprehensive visibility into the product procurement journey across all your projects."
      },
      {
        question: "How do you approach the client experience for interior design firms?",
        answer: "We create client experiences that reflect the premium, personalized nature of interior design services. This includes developing branded client portals with intuitive interfaces, design presentation tools that showcase options clearly, interactive feedback systems for streamlined approvals, project timeline visualizations, and secure document sharing. We also implement progress updates with visual documentation, selection tracking with approval history, and communication tools that maintain a complete record of project decisions. This comprehensive approach ensures clients feel informed and engaged throughout the design process."
      }
    ]
  },
  'agriculture': {
    id: "agriculture",
    slug: "agriculture",
    name: "Agriculture",
    shortDescription: "We provide digital solutions that help agricultural businesses optimize operations, monitor crops and livestock, and implement data-driven farming practices.",
    longDescription: "The agriculture industry is embracing technology to improve productivity, sustainability, and resource management. Our specialized digital solutions help farms, agribusinesses, and agricultural service providers monitor field conditions, track livestock, manage resources, and streamline operations. We understand the unique challenges of agricultural environments and develop reliable technology that functions effectively in rural settings while providing valuable insights for decision-making.",
    icon: 'wheat',
    image: "/images/industries/agriculture.jpg",
    heroImage: "/images/industries/agriculture-hero.jpg",
    services: [
      {
        title: "Farm Management Systems",
        description: "Comprehensive platforms for tracking field operations, resource allocation, equipment maintenance, and business performance across agricultural enterprises."
      },
      {
        title: "Precision Agriculture Solutions",
        description: "Data-driven systems that integrate field sensors, weather information, and crop monitoring to optimize planting, irrigation, and harvesting decisions."
      },
      {
        title: "Livestock Management Software",
        description: "Digital tools for tracking animal health, breeding information, feeding programs, production data, and regulatory compliance for livestock operations."
      },
      {
        title: "Agricultural Supply Chain Management",
        description: "Solutions that connect farm production with processing, distribution, and retail to improve traceability, quality control, and market access."
      },
      {
        title: "Agribusiness Analytics Platforms",
        description: "Custom dashboards that transform complex agricultural data into actionable insights for operational improvements and strategic planning."
      }
    ],
    challenges: [
      {
        title: "Rural Connectivity",
        description: "Developing systems that function effectively in remote locations with limited internet access and challenging environmental conditions."
      },
      {
        title: "Data Integration",
        description: "Combining information from diverse sources including equipment, sensors, weather services, and historical records for comprehensive analysis."
      },
      {
        title: "Operational Complexity",
        description: "Managing the interconnected variables of agricultural operations including weather dependence, seasonal activities, and biological processes."
      },
      {
        title: "Resource Optimization",
        description: "Balancing the use of water, fertilizer, feed, labor, and equipment to maximize productivity while ensuring sustainability and profitability."
      }
    ],
    caseStudies: getPortfolioItemsByIndustry("Agriculture"),
    testimonials: [
      {
        content: "The farm management platform developed by RTN Global has revolutionized how we operate our 5,000-acre grain operation. We've reduced our input costs by 18% through more precise application, increased yields by 12% with better timing decisions, and simplified our compliance reporting. Their understanding of agricultural challenges made them an ideal technology partner.",
        author: "James Wilson",
        position: "Owner",
        company: "Wilson Family Farms",
        image: "/images/testimonials/james-wilson.jpg"
      }
    ],
    stats: [
      { label: "Average Input Cost Reduction", value: "22%" },
      { label: "Yield Improvement Through Precision", value: "14%" },
      { label: "Administrative Time Savings", value: "65%" }
    ],
    benefits: [
      "Data-driven decision making for farming operations",
      "Optimized resource allocation and utilization",
      "Enhanced monitoring of crops and livestock",
      "Streamlined compliance with agricultural regulations",
      "Improved traceability and quality control",
      "Reduced operational costs and environmental impact"
    ],
    tools: [
      "React", "Node.js", "Python", "AWS", "IoT Sensors", "Weather APIs", "GIS", "MongoDB", "PostgreSQL", "Machine Learning"
    ],
    faq: [
      {
        question: "How do your agricultural solutions work in areas with limited connectivity?",
        answer: "We design our agricultural systems with rural connectivity challenges in mind. Our applications implement robust offline functionality that allows continued operation when internet access is unavailable, with data synchronization when connectivity is restored. We use edge computing approaches for processing data locally on farm equipment or base stations, low-bandwidth communication protocols optimized for rural networks, and can implement mesh network solutions for larger operations. Our systems prioritize essential functions during connectivity limitations while maintaining data integrity throughout sync cycles."
      },
      {
        question: "Can you integrate with existing farm equipment and agricultural systems?",
        answer: "Yes, we have experience integrating with major agricultural equipment and systems. This includes connections to tractor and implement systems via ISOBUS and other equipment protocols, integration with popular farm management information systems, compatibility with soil testing services and laboratories, connections to weather networks and forecasting services, and links to commodity trading and market information. Our approach ensures that your existing investments in equipment and technology can be leveraged in a comprehensive digital ecosystem that enhances overall farm operations."
      },
      {
        question: "How do you approach data security and ownership in agricultural solutions?",
        answer: "We recognize that farm data represents valuable intellectual property and competitive information. Our approach to agricultural data emphasizes clear ownership by the farmer, with explicit permission controls for sharing with advisors, suppliers, or researchers. We implement robust security measures including encryption, secure authentication, and detailed access logs. Our systems allow farmers to control exactly what data is shared, with whom, and for what duration, while providing options to anonymize sensitive information when appropriate for benchmarking or research purposes."
      }
    ]
  },
  'insurance': {
    id: "insurance",
    slug: "insurance",
    name: "Insurance",
    shortDescription: "We deliver digital solutions that help insurance companies streamline claims processing, enhance customer experiences, and optimize underwriting operations.",
    longDescription: "The insurance industry faces evolving customer expectations, complex risk assessment challenges, and increasing competition from digital-first providers. Our specialized digital solutions help insurance carriers, agencies, and brokers modernize their customer interactions, streamline claims and underwriting processes, and leverage data for better decision-making. We understand the balance between innovation and compliance that insurers require and develop technology that improves efficiency while maintaining regulatory alignment.",
    icon: 'shield',
    image: "/images/industries/insurance.jpg",
    heroImage: "/images/industries/insurance-hero.jpg",
    services: [
      {
        title: "Insurance Customer Portals",
        description: "Intuitive self-service platforms that enable policyholders to view coverage, make payments, access documents, and manage their policies online."
      },
      {
        title: "Claims Management Systems",
        description: "End-to-end solutions for processing claims efficiently with digital submission, automated workflows, document management, and settlement tracking."
      },
      {
        title: "Insurance Agency Management",
        description: "Comprehensive systems for managing client relationships, policy information, carrier connections, commission tracking, and agency operations."
      },
      {
        title: "Underwriting Automation Platforms",
        description: "Data-driven tools that streamline risk assessment, policy pricing, and approval processes through integration of multiple information sources."
      },
      {
        title: "Insurance Analytics Dashboards",
        description: "Custom visualization solutions that transform complex insurance data into actionable insights for risk management, pricing, and business strategy."
      }
    ],
    challenges: [
      {
        title: "Customer Experience",
        description: "Creating digital interactions that simplify complex insurance products and processes while building trust and satisfaction."
      },
      {
        title: "Data Integration",
        description: "Connecting multiple information sources including legacy systems, third-party databases, and external services for comprehensive views of risks and customers."
      },
      {
        title: "Operational Efficiency",
        description: "Streamlining manual processes in underwriting, claims, and customer service to reduce costs while maintaining accuracy and compliance."
      },
      {
        title: "Regulatory Compliance",
        description: "Ensuring all digital systems and processes adhere to complex, evolving insurance regulations and data privacy requirements."
      }
    ],
    caseStudies: getPortfolioItemsByIndustry("Insurance"),
    testimonials: [
      {
        content: "The digital claims platform developed by RTN Global has transformed our property insurance operations. We've reduced claims processing time by 68%, decreased adjustment expenses by 34%, and significantly improved customer satisfaction scores. Their understanding of insurance workflows and compliance requirements made them an ideal partner for our digital transformation.",
        author: "Katherine Mills",
        position: "Claims Operations Director",
        company: "Summit Insurance Group",
        image: "/images/testimonials/katherine-mills.jpg"
      }
    ],
    stats: [
      { label: "Claims Processing Time Reduction", value: "65%" },
      { label: "Underwriting Efficiency Improvement", value: "43%" },
      { label: "Customer Satisfaction Increase", value: "38%" }
    ],
    benefits: [
      "Enhanced customer self-service capabilities",
      "Streamlined claims processing and settlement",
      "Improved underwriting accuracy and efficiency",
      "Data-driven insights for better risk assessment",
      "Reduced operational costs and manual processing",
      "Stronger regulatory compliance and documentation"
    ],
    tools: [
      "React", "Node.js", "AWS", "Azure", "Microsoft Dynamics", "Salesforce", "DocuSign", "Twilio", "Elasticsearch", "Power BI"
    ],
    faq: [
      {
        question: "How do you approach integration with legacy insurance systems?",
        answer: "We understand that insurance companies often operate with multiple legacy systems that cannot be easily replaced. Our approach begins with a thorough assessment of your existing infrastructure. We then implement integration solutions appropriate to your environment, which may include API development for systems with existing interfaces, custom middleware for older systems, ETL processes for data synchronization, screen scraping for systems without direct access methods, and web services that bridge modern and legacy platforms. We prioritize maintaining data integrity and business continuity throughout the integration process."
      },
      {
        question: "How do you enhance the insurance customer experience through digital solutions?",
        answer: "We design insurance customer experiences that transform traditionally complex interactions into intuitive digital journeys. This includes developing personalized policyholder portals with clear coverage summaries and document access, streamlined claims submission with real-time status updates, simplified policy applications with progressive questionnaires, multimedia educational content that explains coverage details clearly, and proactive communication systems for policy renewals and claims progress. We focus on creating transparency, clarity, and ease-of-use that builds policyholder confidence and satisfaction."
      },
      {
        question: "How do you ensure compliance with insurance regulations in your digital solutions?",
        answer: "Regulatory compliance is built into our development process for insurance technology. We begin with thorough analysis of applicable insurance regulations in your operating jurisdictions. Our implementations include robust audit trails for all transactions and decisions, role-based access controls aligned with regulatory requirements, compliant document generation and storage, data protection measures that meet privacy standards, and reporting functions for regulatory submissions. We also build flexibility into our systems to accommodate evolving regulations, with configuration options that can be adjusted as requirements change."
      }
    ]
  },
  'pet-services': {
    id: "pet-services",
    slug: "pet-services",
    name: "Pet Services",
    shortDescription: "We create digital solutions that help veterinary clinics, pet groomers, boarders, trainers, and pet retailers streamline operations and enhance pet owner experiences.",
    longDescription: "The pet care industry continues to grow as pet owners seek quality services for their animal companions. Our specialized digital solutions help veterinary practices, groomers, boarding facilities, trainers, and pet retailers manage appointments, track pet information, streamline operations, and build relationships with pet owners. We understand the unique needs of pet service businesses and develop technology that improves efficiency while enhancing the client experience.",
    icon: 'dog',
    image: "/images/industries/pet-services.jpg",
    heroImage: "/images/industries/pet-services-hero.jpg",
    services: [
      {
        title: "Veterinary Practice Management",
        description: "Comprehensive systems for managing patient records, appointments, treatments, prescriptions, billing, and client communications for veterinary clinics."
      },
      {
        title: "Pet Service Booking Platforms",
        description: "Online scheduling systems for grooming, boarding, daycare, and training services with automated reminders and capacity management."
      },
      {
        title: "Pet Retail & Inventory Management",
        description: "Solutions for managing pet product inventory, sales, customer accounts, loyalty programs, and e-commerce for pet supply businesses."
      },
      {
        title: "Pet Health & Information Portals",
        description: "Client-facing applications that provide pet owners with access to health records, appointment history, care instructions, and communication tools."
      },
      {
        title: "Mobile Apps for Pet Professionals",
        description: "Custom mobile applications that allow veterinarians, groomers, and other pet professionals to access information and manage services on the go."
      }
    ],
    challenges: [
      {
        title: "Pet Information Management",
        description: "Maintaining comprehensive, accurate records for multiple pets with different health histories, service needs, and care requirements."
      },
      {
        title: "Scheduling Optimization",
        description: "Managing complex appointment scheduling with varying service durations, staff capabilities, and facility resources while minimizing downtime."
      },
      {
        title: "Client Communication",
        description: "Providing clear, timely updates to pet owners regarding health information, service schedules, and care recommendations across multiple channels."
      },
      {
        title: "Operational Efficiency",
        description: "Streamlining workflows in busy pet service environments where staff must balance quality care with administrative responsibilities."
      }
    ],
    caseStudies: getPortfolioItemsByIndustry("Pets"),
    testimonials: [
      {
        content: "The practice management system developed by RTN Global has transformed our multi-location veterinary practice. We've improved our appointment utilization by 42%, reduced client no-shows by 68% through automated reminders, and significantly enhanced our client communication. Our staff can now focus more time on pet care rather than administration.",
        author: "Dr. Sarah Johnson",
        position: "Medical Director",
        company: "Companion Animal Hospital Group",
        image: "/images/testimonials/sarah-johnson.jpg"
      }
    ],
    stats: [
      { label: "Appointment Utilization Improvement", value: "37%" },
      { label: "Client No-Show Reduction", value: "72%" },
      { label: "Administrative Time Savings", value: "58%" }
    ],
    benefits: [
      "Streamlined appointment and service management",
      "Comprehensive pet health and service history",
      "Enhanced client engagement and communication",
      "Optimized staff scheduling and resource utilization",
      "Improved inventory control and service tracking",
      "Reduced administrative burden for pet professionals"
    ],
    tools: [
      "React", "Node.js", "React Native", "AWS", "MongoDB", "PostgreSQL", "Stripe", "Twilio", "Square", "Google Maps"
    ],
    faq: [
      {
        question: "How do your systems help improve client communication for pet service businesses?",
        answer: "We implement multi-channel communication systems tailored to pet service workflows. This includes automated appointment reminders via SMS, email, or push notifications with customizable timing and frequency, two-way messaging capabilities that maintain conversation history, photo and video sharing for updating owners on their pets during services, automated follow-up communications with care instructions and future appointment recommendations, and emergency notification systems. Our platforms ensure pet parents stay informed and engaged while reducing the communication burden on your staff."
      },
      {
        question: "Can your solutions help manage the unique scheduling needs of pet service businesses?",
        answer: "Yes, our scheduling systems are designed specifically for the complexity of pet service operations. We implement appointment management that accounts for service duration variations, required resources (rooms, equipment, staff specialties), and capacity limitations. Our systems can handle multiple pets per household with different service needs, recurring appointment series for ongoing treatments, double-booking prevention with conflict detection, and optimized scheduling that maximizes facility utilization. We also provide flexible cancellation policies, waitlist management, and emergency appointment prioritization."
      },
      {
        question: "How do you approach integration with veterinary-specific software and equipment?",
        answer: "We have experience integrating with veterinary practice management systems, diagnostic equipment, laboratory services, and pharmacy platforms. Our approach includes secure connections to digital imaging systems like radiography and ultrasound, integration with in-house and reference laboratories for test results, connections to medication and inventory databases for prescription management, and compatibility with pet microchip registries and electronic health record systems. We focus on creating a unified ecosystem that maintains all pet health information in a centralized, accessible format while reducing duplicate data entry and transcription errors."
      }
    ]
  },
  'recruitment-hr': {
    id: "recruitment-hr",
    slug: "recruitment-hr",
    name: "Recruitment & HR",
    shortDescription: "We deliver digital solutions that help recruitment agencies and HR departments streamline hiring processes, enhance candidate experiences, and optimize talent management.",
    longDescription: "The recruitment and human resources industry faces challenges in attracting quality candidates, efficiently managing hiring workflows, and providing meaningful analytics to optimize talent acquisition. Our specialized digital solutions help recruitment agencies, corporate HR departments, and talent acquisition teams automate repetitive tasks, create engaging candidate experiences, and make data-driven hiring decisions. We understand the balance between technology efficiency and human connection in successful recruiting and develop solutions that enhance both aspects.",
    icon: 'users',
    image: "/images/industries/recruitment-hr.jpg",
    heroImage: "/images/industries/recruitment-hr-hero.jpg",
    services: [
      {
        title: "Applicant Tracking Systems",
        description: "Comprehensive platforms for managing job postings, candidate applications, interview scheduling, hiring workflows, and onboarding processes."
      },
      {
        title: "Recruitment Agency Management",
        description: "End-to-end solutions for staffing firms to manage clients, candidates, job orders, placements, and commission tracking in a unified system."
      },
      {
        title: "Candidate Relationship Management",
        description: "Tools for building and maintaining talent pools, nurturing candidate relationships, and matching qualified individuals to appropriate opportunities."
      },
      {
        title: "HR Analytics Dashboards",
        description: "Custom visualization tools that transform recruitment and HR data into actionable insights for improving hiring efficiency and quality."
      },
      {
        title: "Career Portal Development",
        description: "Engaging, brand-aligned job sites that showcase company culture, simplify application processes, and convert high-quality candidates."
      }
    ],
    challenges: [
      {
        title: "Candidate Experience",
        description: "Creating intuitive, responsive digital touchpoints that attract talented candidates and reflect positively on your employer brand."
      },
      {
        title: "Process Efficiency",
        description: "Streamlining complex hiring workflows involving multiple stakeholders, approval stages, and communication touchpoints."
      },
      {
        title: "Data-Driven Recruitment",
        description: "Leveraging analytics to improve hiring quality, reduce time-to-fill, optimize sourcing channels, and demonstrate recruitment ROI."
      },
      {
        title: "Integration Complexity",
        description: "Connecting recruitment systems with HRIS, background checking, assessment platforms, and other HR technologies for seamless data flow."
      }
    ],
    caseStudies: getPortfolioItemsByIndustry("Recruitment"),
    testimonials: [
      {
        content: "The applicant tracking system developed by RTN Global has transformed our talent acquisition function. We've reduced our time-to-hire by 46%, improved our quality of hire through better candidate matching, and gained valuable insights that have optimized our entire recruitment strategy. The system has paid for itself many times over in recruitment efficiency alone.",
        author: "Daniel Thompson",
        position: "Head of Talent Acquisition",
        company: "Excelsior Technologies",
        image: "/images/testimonials/daniel-thompson.jpg"
      }
    ],
    stats: [
      { label: "Average Recruitment Time Reduction", value: "42%" },
      { label: "Candidate Application Completion Increase", value: "68%" },
      { label: "Hiring Manager Satisfaction Improvement", value: "53%" }
    ],
    benefits: [
      "Streamlined recruitment workflows and processes",
      "Enhanced candidate engagement and experience",
      "Improved hiring quality and team fit",
      "Data-driven insights for recruitment optimization",
      "Reduced administrative burden on HR teams",
      "Stronger employer brand and talent attraction"
    ],
    tools: [
      "React", "Node.js", "AWS", "MongoDB", "PostgreSQL", "Salesforce", "Microsoft Dynamics", "LinkedIn API", "Indeed API", "Microsoft PowerBI"
    ],
    faq: [
      {
        question: "How do you design systems that improve the candidate experience?",
        answer: "We focus on creating candidate-centered recruitment systems that respect applicants' time and provide transparency. This includes mobile-optimized application processes that can be completed in minutes, resume parsing technology that eliminates manual data entry, clear communication of application status with automated updates, personalized candidate portals that centralize all information and interactions, and feedback mechanisms at key touchpoints. We design for accessibility and inclusion, ensuring all candidates can navigate the process effectively regardless of device, location, or ability."
      },
      {
        question: "Can your solutions integrate with existing HR and recruitment platforms?",
        answer: "Yes, we have extensive experience integrating with major HR systems and recruitment technologies. This includes connections to applicant tracking systems, human resource information systems (HRIS), background checking services, assessment platforms, video interviewing tools, job boards and aggregators, and payroll systems. We implement secure API connections, custom middleware when necessary, and single sign-on capabilities to create unified ecosystems that eliminate duplicate data entry and ensure consistent information across platforms."
      },
      {
        question: "How do you approach recruitment analytics and reporting?",
        answer: "We develop comprehensive analytics frameworks that provide actionable recruitment insights at multiple levels. This includes operational dashboards tracking key metrics like time-to-fill, cost-per-hire, and source effectiveness; quality indicators such as retention rates, hiring manager satisfaction, and performance of new hires; predictive analytics for forecasting hiring needs and identifying potential bottlenecks; and custom reporting tools that allow HR leaders to communicate recruitment ROI to executive stakeholders. Our approach focuses on translating recruitment data into business impact metrics that demonstrate the value of effective talent acquisition."
      }
    ]
  },
};

// Helper function to get industry by slug
export const getIndustryBySlug = (slug: string): Industry | undefined => {
  return industries[slug];
};

// Helper function to get all industries
export const getAllIndustries = (): Industry[] => {
  return Object.values(industries);
}; 