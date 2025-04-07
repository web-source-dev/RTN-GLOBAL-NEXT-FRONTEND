import { portfolioItems } from "./portfolio-items";

export type IconType = 
  | 'building2'
  | 'shopping-bag'
  | 'briefcase'
  | 'stethoscope'
  | 'graduation-cap'
  | 'home';

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
};

// Helper function to get industry by slug
export const getIndustryBySlug = (slug: string): Industry | undefined => {
  return industries[slug];
};

// Helper function to get all industries
export const getAllIndustries = (): Industry[] => {
  return Object.values(industries);
}; 