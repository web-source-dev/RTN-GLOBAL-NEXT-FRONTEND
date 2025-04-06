// Define types for portfolio items
export type Stats = {
  performance: string
  duration: string
  satisfaction: string
}

export type PortfolioItem = {
  id?: string
  title: string
  category: string
  image: string
  description: string
  link?: string
  tags: string[]
  stats: Stats
  featured?: boolean
  challenge?: string
  solution?: string
  results?: string[]
  technologies?: string[]
  client?: string
  industry?: string
  year?: string
  testimonial?: {
    content: string
    author: string
    role: string
    company: string
  }
  slug?: string
}

// Portfolio items data
export const portfolioItems: PortfolioItem[] = [
  {
    title: 'Premium Wix Website for Luxury Fashion Boutique',
    description: 'Designed and developed a custom Wix website for a high-end fashion boutique, featuring e-commerce integration, appointment booking system, and responsive design that increased online sales by 245% within three months.',
    image: '/images/portfolio/project1.png',
    category: 'Wix Website',
    tags: ['Wix Website Development', 'E-commerce Website', 'Responsive Web Design'],
    stats: {
      performance: 'Outstanding',
      duration: '3 weeks',
      satisfaction: 'Exceptional (5★)'
    },
    featured: true,
    client: 'Luxe Fashion Boutique',
    industry: 'Fashion & Retail',
    year: '2023',
    challenge: 'The client needed a premium online presence that would reflect their luxury brand identity while providing a seamless shopping experience. Their previous website was outdated, not mobile-friendly, and lacked the functionality needed for online sales and appointment scheduling.',
    solution: 'We created a custom Wix website with a sophisticated design that aligned perfectly with their brand identity. We implemented a seamless e-commerce system with secure checkout, integrated an appointment booking system for personal shopping sessions, and ensured the site was fully responsive across all devices.',
    results: [
      '245% increase in online sales within three months',
      '32% improvement in mobile conversion rates',
      '68% increase in appointment bookings',
      '40% reduction in customer service inquiries through automated processes'
    ],
    technologies: ['Wix', 'Wix Stores', 'Wix Bookings', 'JavaScript', 'Responsive Design', 'SEO Optimization'],
    testimonial: {
      content: "RTN Global transformed our online presence completely. The new website perfectly captures our brand's luxury aesthetic while making it incredibly easy for our customers to shop or book appointments. The increase in online sales has exceeded our expectations.",
      author: "Sophia Laurent",
      role: "Owner",
      company: "Luxe Fashion Boutique"
    },
    slug: "premium-wix-website-for-luxury-fashion-boutique"
  },
  {
    title: 'MERN Stack Property Management Web Application',
    description: 'Built a comprehensive property management web application using MongoDB, Express.js, React, and Node.js, featuring real-time updates, secure user authentication, and advanced property filtering capabilities.',
    image: '/images/portfolio/project2.jpg',
    category: 'MERN Stack',
    tags: ['MongoDB Database', 'Express.js Backend', 'React Frontend', 'Node.js Server'],
    stats: {
      performance: 'Excellent',
      duration: '8 weeks',
      satisfaction: 'Highly Rated (5★)'
    },
    featured: true,
    client: 'Premier Properties',
    industry: 'Real Estate',
    year: '2023',
    challenge: 'The client needed a centralized system to manage their growing property portfolio. They were using multiple disconnected tools, resulting in data inconsistencies, inefficient workflows, and difficulties in tracking property performance and maintenance requests.',
    solution: 'We developed a full-stack MERN application with a responsive dashboard for property managers and owners. The system includes tenant portals, maintenance request tracking, automated rent collection, financial reporting, and a robust search system with advanced filtering options.',
    results: [
      '75% reduction in administrative time',
      '90% faster response to maintenance requests',
      '98% on-time rent collection rate',
      '45% increase in property manager productivity'
    ],
    technologies: ['MongoDB', 'Express.js', 'React', 'Node.js', 'Redux', 'JWT Authentication', 'AWS S3', 'Stripe API'],
    testimonial: {
      content: "This property management application has revolutionized how we operate. What used to take our team hours now happens automatically. The real-time updates and intuitive interface have made property management significantly more efficient.",
      author: "Michael Reynolds",
      role: "Operations Director",
      company: "Premier Properties"
    },
    slug: "mern-stack-property-management-web-application"
  },
  {
    title: 'React Native Fitness Tracking Mobile App',
    description: 'Developed a cross-platform mobile application for fitness tracking using React Native, featuring personalized workout plans, progress tracking dashboard, and social sharing capabilities for both iOS and Android users.',
    image: '/images/portfolio/project3.jpg',
    category: 'React Native',
    tags: ['Mobile App Development', 'iOS Application', 'Android Application', 'Cross-platform Development'],
    stats: {
      performance: 'Top-tier',
      duration: '7 weeks',
      satisfaction: 'Very Satisfied (5★)'
    },
    featured: false,
    client: 'FitLife Health & Fitness',
    industry: 'Health & Fitness',
    year: '2022',
    challenge: 'The client wanted to expand their gym business with a mobile app that would enhance member engagement and attract new customers. They needed a solution that would work across both iOS and Android platforms, integrate with fitness trackers, and provide personalized workout experiences.',
    solution: 'We created a cross-platform fitness application using React Native that delivers personalized workout plans, tracks progress with detailed metrics, integrates with popular fitness wearables, and includes social features to keep users motivated through community engagement.',
    results: [
      '35% increase in gym membership retention',
      '28% boost in new member acquisition',
      '42% of users working out more frequently than before',
      '4.8/5 average app store rating across iOS and Android'
    ],
    technologies: ['React Native', 'Firebase', 'Redux', 'Health Kit Integration', 'Google Fit API', 'Push Notifications', 'Social Authentication'],
    testimonial: {
      content: "Our members absolutely love the app. It's helped us create a more connected fitness community and gives our trainers valuable insights into member progress. The app has become a key differentiator for our gym in a competitive market.",
      author: "Jennifer Torres",
      role: "Fitness Director",
      company: "FitLife Health & Fitness"
    },
    slug: "react-native-fitness-tracking-mobile-app"
  },
  {
    title: 'MERN Stack E-Learning Platform Website',
    description: 'Created a scalable online learning platform with MongoDB, Express.js, React and Node.js, featuring video course delivery, interactive quiz system, and a comprehensive admin dashboard for content management.',
    image: '/images/portfolio/project4.png',
    category: 'MERN Stack',
    tags: ['Full Stack Web Development', 'Education Website', 'User Authentication System'],
    stats: {
      performance: 'Superior',
      duration: '10 weeks',
      satisfaction: 'Exceptional (5★)'
    },
    featured: true,
    client: 'EduTech Academy',
    industry: 'Education',
    year: '2022',
    challenge: 'The client needed to transition from in-person training to a fully digital learning experience. They required a robust platform that could deliver video courses, track student progress, include interactive assessments, and provide detailed analytics for instructors.',
    solution: 'We built a comprehensive e-learning platform using the MERN stack that features adaptive learning paths, HD video streaming, interactive quizzes with instant feedback, progress tracking, and an instructor dashboard with detailed analytics on student performance.',
    results: [
      '320% increase in student enrollment within six months',
      '85% course completion rate (industry average is 60%)',
      '92% student satisfaction rating',
      '65% reduction in operational costs compared to in-person training'
    ],
    technologies: ['MongoDB', 'Express.js', 'React', 'Node.js', 'AWS S3', 'Video.js', 'WebSockets', 'PDF.js', 'Chart.js'],
    testimonial: {
      content: "The e-learning platform RTN Global created has completely transformed our business model. We've been able to reach students worldwide and scale our operations beyond what was possible with our physical locations. The platform is intuitive for both students and instructors.",
      author: "Dr. Alan Murray",
      role: "Founder",
      company: "EduTech Academy"
    },
    slug: "mern-stack-e-learning-platform-website"
  },
  {
    title: 'Wix Healthcare Provider Professional Website',
    description: 'Designed a HIPAA-compliant Wix website for a medical practice, featuring online appointment scheduling, secure patient portal integration, and optimized mobile experience that improved patient acquisition by 150%.',
    image: '/images/portfolio/project5.jpg',
    category: 'Wix Website',
    tags: ['Healthcare Website', 'Appointment Booking System', 'Responsive Web Design'],
    stats: {
      performance: 'Excellent',
      duration: '2.5 weeks',
      satisfaction: 'Highly Rated (5★)'
    },
    featured: false,
    client: 'Wellness Medical Center',
    industry: 'Healthcare',
    year: '2023',
    challenge: 'The medical practice needed a modern website that would simplify appointment booking, reduce administrative workload, and provide patients with secure access to their health information. Their existing site was outdated, not mobile-friendly, and lacked interactive features.',
    solution: 'We designed a HIPAA-compliant Wix website with an intuitive appointment scheduling system, secure patient portal integration, educational resource library, and staff profiles. The site was optimized for all devices with a focus on accessibility and ease of navigation.',
    results: [
      '150% improvement in new patient acquisition',
      '40% reduction in appointment no-shows',
      '60% of appointments now booked online, reducing administrative workload',
      '35% increase in patient satisfaction scores'
    ],
    technologies: ['Wix', 'Wix Bookings', 'Responsive Design', 'HIPAA Compliance Measures', 'Third-party Portal Integration', 'SEO Optimization'],
    testimonial: {
      content: "Our new website has dramatically improved patient engagement and streamlined our operations. Patients love the easy appointment booking and access to resources. The RTN Global team understood our unique requirements as a healthcare provider and delivered a solution that addressed all our needs.",
      author: "Dr. Sarah Johnson",
      role: "Medical Director",
      company: "Wellness Medical Center"
    },
    slug: "wix-healthcare-provider-professional-website"
  },
  {
    title: 'React Native Food Delivery Mobile Application',
    description: 'Built a high-performance food delivery mobile application using React Native with real-time order tracking, secure payment processing integration, and push notifications for both restaurant partners and customers.',
    image: '/images/portfolio/project6.png',
    category: 'React Native',
    tags: ['Mobile App Development', 'Geolocation Services', 'Payment Gateway Integration'],
    stats: {
      performance: 'Best-in-class',
      duration: '9 weeks',
      satisfaction: 'Perfect (5★)'
    },
    featured: true,
    client: 'Urban Eats',
    industry: 'Food & Beverage',
    year: '2023',
    challenge: 'The client needed a custom food delivery platform to connect their network of local restaurants with customers. They wanted to avoid the high commission fees of existing platforms while providing a seamless ordering experience with real-time tracking and reliable delivery service.',
    solution: 'We developed a React Native application with separate interfaces for customers, restaurants, and delivery drivers. The app features real-time order tracking, secure payment processing, push notifications, driver routing optimization, and a comprehensive analytics dashboard for restaurant partners.',
    results: [
      '220% increase in order volume within three months of launch',
      '28% higher average order value compared to previous ordering methods',
      '95% on-time delivery rate',
      '4.9/5 average user rating across app stores'
    ],
    technologies: ['React Native', 'Firebase', 'Redux', 'Google Maps API', 'Push Notifications', 'Stripe Payment Gateway', 'Real-time Database', 'Node.js Backend'],
    testimonial: {
      content: "The food delivery app has been a game-changer for our business. We've been able to reach more customers while maintaining control over the delivery experience. The real-time tracking and notification features keep customers informed and satisfied. RTN Global delivered exactly what we envisioned and more.",
      author: "Carlos Rodriguez",
      role: "CEO",
      company: "Urban Eats"
    },
    slug: "react-native-food-delivery-mobile-application"
  }
] 