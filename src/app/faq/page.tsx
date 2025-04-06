"use client"

import { Layout } from "@/components/layout/layout"
import { CTASection } from "@/components/sections/cta-section"
import { FAQSection } from "@/components/sections/faq-section"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { motion, useScroll, useTransform, useInView } from "framer-motion"
import { useState, useRef, useEffect } from "react"
import { 
  ArrowRight, MessageCircle, Phone, Mail, Search, 
  BookOpen, DollarSign, Clock, HeadphonesIcon, Code, 
  LayoutGrid, CheckCircle, ThumbsUp, ThumbsDown
} from "lucide-react"

type FAQItem = {
  question: string;
  answer: string;
  category?: string;
  popular?: boolean;
};

export default function FAQPage() {
  // Animation references
  const heroRef = useRef(null)
  const categoryRef = useRef(null)
  const generalRef = useRef(null)
  const processRef = useRef(null)
  const technicalRef = useRef(null)
  const questionsSectionRef = useRef(null)
  
  // InView observers
  const isCategoryInView = useInView(categoryRef, { once: true, amount: 0.3 })
  const isGeneralInView = useInView(generalRef, { once: true, amount: 0.2 })
  const isProcessInView = useInView(processRef, { once: true, amount: 0.2 })
  const isTechnicalInView = useInView(technicalRef, { once: true, amount: 0.2 })
  const isQuestionsSectionInView = useInView(questionsSectionRef, { once: true, amount: 0.3 })

  // Parallax scrolling effect
  const { scrollY } = useScroll()
  const y1 = useTransform(scrollY, [0, 300], [0, 50])
  const opacity = useTransform(scrollY, [0, 200], [1, 0.8])
  
  // State for active category and search
  const [activeCategory, setActiveCategory] = useState("All")
  const [searchQuery, setSearchQuery] = useState("")
  const [searchResults, setSearchResults] = useState<FAQItem[]>([])
  const [isSearching, setIsSearching] = useState(false)
  
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  }
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 }
    }
  }

  // FAQ categories with icons
  const categories = [
    { id: "All", name: "All Questions", icon: <LayoutGrid className="h-4 w-4" /> },
    { id: "Services", name: "Services", icon: <BookOpen className="h-4 w-4" /> },
    { id: "Pricing", name: "Pricing", icon: <DollarSign className="h-4 w-4" /> },
    { id: "Process", name: "Process", icon: <Clock className="h-4 w-4" /> },
    { id: "Support", name: "Support", icon: <HeadphonesIcon className="h-4 w-4" /> },
    { id: "Technical", name: "Technical", icon: <Code className="h-4 w-4" /> }
  ]

  // General FAQs
  const generalFaqs: FAQItem[] = [
    {
      question: "What services does RTN Global offer?",
      answer: "RTN Global offers a comprehensive range of web development and digital marketing services including website design and development, e-commerce solutions, SEO optimization, content marketing, social media management, PPC advertising, and email marketing campaigns.",
      category: "Services",
      popular: true
    },
    {
      question: "How long does it take to complete a website project?",
      answer: "Project timelines vary depending on complexity. A basic website typically takes 2-4 weeks, while more complex projects may take 8-12 weeks. We'll provide a detailed timeline during our initial consultation based on your specific requirements.",
      category: "Services"
    },
    {
      question: "Do you work with clients worldwide?",
      answer: "Yes, we work with clients globally. Our team is experienced in remote collaboration and we use various tools to ensure smooth communication regardless of time zones or geographical distances.",
      category: "Services"
    },
    {
      question: "What is your pricing structure?",
      answer: "Our pricing is based on project requirements and scope. We offer both fixed-price and hourly rate options. For a detailed quote, please contact us with your project details or refer to our pricing page for standard packages.",
      category: "Pricing",
    },
    {
      question: "Do you offer ongoing maintenance and support?",
      answer: "Yes, we offer ongoing maintenance and support packages to ensure your website or application continues to function optimally. These can be purchased separately after the included maintenance period that comes with your project.",
      category: "Support"
    }
  ]

  // Process FAQs
  const processFaqs: FAQItem[] = [
    {
      question: "What is your development process?",
      answer: "Our development process includes discovery (understanding your requirements), planning (creating project roadmap), design (creating mockups and wireframes), development (building the website/application), testing (ensuring quality), deployment (launching the project), and post-launch support.",
      category: "Process",
      popular: true
    },
    {
      question: "How do you handle project revisions?",
      answer: "Each project includes a set number of revision rounds during the design and development phases. Additional revisions beyond the allocated amount may incur extra charges, which will be clearly communicated before proceeding.",
      category: "Process"
    },
    {
      question: "How will we communicate during the project?",
      answer: "We maintain open communication through your preferred channels, which may include email, phone calls, video conferences, and project management tools. Regular updates and milestone reviews are scheduled throughout the project.",
      category: "Process"
    },
    {
      question: "What information do you need to get started?",
      answer: "To get started, we need information about your business, target audience, project goals, design preferences, technical requirements, content (if available), and timeline expectations. We provide a detailed questionnaire to help gather this information.",
      category: "Process"
    }
  ]

  // Technical FAQs
  const technicalFaqs: FAQItem[] = [
    {
      question: "Which technologies do you use for development?",
      answer: "We use modern technologies including React, Next.js, Node.js, TypeScript, and other industry-standard frameworks and libraries. Our technology choices are based on project requirements and best practices for performance, security, and scalability.",
      category: "Technical",
      popular: true
    },
    {
      question: "Can you work with my existing website or do I need a new one?",
      answer: "We can work with your existing website if it's built on modern technologies and has a solid foundation. After an assessment, we'll recommend whether to enhance your current site or build a new one based on your goals and technical considerations.",
      category: "Technical"
    },
    {
      question: "Do you provide hosting services?",
      answer: "While we don't provide hosting directly, we can recommend reliable hosting providers based on your project needs and help set up your website on the chosen platform. We also offer deployment and configuration services.",
      category: "Technical"
    },
    {
      question: "Are your websites mobile-friendly?",
      answer: "Absolutely. All our websites are built with a mobile-first approach, ensuring they're fully responsive and provide an optimal user experience across all devices and screen sizes.",
      category: "Technical"
    },
    {
      question: "Do you implement SEO best practices?",
      answer: "Yes, we implement on-page SEO best practices in all our website projects, including proper HTML structure, meta tags, schema markup, image optimization, and performance optimization. For more comprehensive SEO services, we offer specialized packages.",
      category: "Technical"
    }
  ]

  // All FAQs combined
  const allFaqs = [...generalFaqs, ...processFaqs, ...technicalFaqs];
  
  // Popular FAQs
  const popularFaqs = allFaqs.filter(faq => faq.popular);

  // Search functionality
  useEffect(() => {
    if (searchQuery.trim() === '') {
      setIsSearching(false);
      setSearchResults([]);
      return;
    }

    setIsSearching(true);
    const query = searchQuery.toLowerCase();
    const results = allFaqs.filter(
      faq => 
        faq.question.toLowerCase().includes(query) || 
        faq.answer.toLowerCase().includes(query)
    );
    
    setSearchResults(results);
  }, [searchQuery]);

  // Filter FAQs based on active category
  const getFilteredFaqs = () => {
    if (isSearching) return [];
    if (activeCategory === "All") return [...generalFaqs, ...processFaqs, ...technicalFaqs];
    if (activeCategory === "Services" || activeCategory === "Pricing") return generalFaqs.filter(faq => faq.category === activeCategory);
    if (activeCategory === "Process") return processFaqs;
    if (activeCategory === "Support") return generalFaqs.filter(faq => faq.category === "Support");
    if (activeCategory === "Technical") return technicalFaqs;
    return generalFaqs;
  }

  // Get category count
  const getCategoryCount = (category: string) => {
    if (category === "All") return allFaqs.length;
    return allFaqs.filter(faq => faq.category === category).length;
  }

  // Highlight search terms in text
  const highlightText = (text: string, query: string) => {
    if (!query.trim() || !isSearching) return text;
    
    const regex = new RegExp(`(${query})`, 'gi');
    const parts = text.split(regex);
    
    return (
      <>
        {parts.map((part, i) => 
          regex.test(part) ? <mark key={i} className="bg-primary/20 text-foreground px-1 rounded">{part}</mark> : part
        )}
      </>
    );
  };

  // Custom FAQ Item component with feedback
  const EnhancedFAQItem = ({ faq }: { faq: FAQItem }) => {
    const [expanded, setExpanded] = useState(false);
    const [feedback, setFeedback] = useState<'helpful' | 'not-helpful' | null>(null);
    
    return (
      <div className="mb-4 border border-border rounded-xl overflow-hidden bg-card hover:border-primary/20 transition-colors">
        <button 
          onClick={() => setExpanded(!expanded)}
          className="w-full px-6 py-5 text-left flex justify-between items-center hover:bg-muted/20 transition-colors"
        >
          <h3 className="font-medium text-lg pr-4">
            {isSearching ? highlightText(faq.question, searchQuery) : faq.question}
          </h3>
          <div className={`transform transition-transform duration-300 ${expanded ? 'rotate-180' : ''}`}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M6 9L12 15L18 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </button>
        
        {expanded && (
          <div className="px-6 py-5 border-t border-border">
            <div className="prose prose-sm max-w-none text-muted-foreground">
              {isSearching ? highlightText(faq.answer, searchQuery) : faq.answer}
            </div>
            
            {/* Feedback section */}
            <div className="mt-6 pt-4 border-t border-border/50 flex justify-between items-center">
              <div className="text-sm text-muted-foreground">
                Was this helpful?
              </div>
              <div className="flex gap-3">
                <button 
                  onClick={() => setFeedback('helpful')} 
                  className={`p-2 rounded-full hover:bg-primary/10 transition-colors ${feedback === 'helpful' ? 'bg-primary/20 text-primary' : ''}`}
                >
                  <ThumbsUp className="h-4 w-4" />
                </button>
                <button 
                  onClick={() => setFeedback('not-helpful')} 
                  className={`p-2 rounded-full hover:bg-destructive/10 transition-colors ${feedback === 'not-helpful' ? 'bg-destructive/20 text-destructive' : ''}`}
                >
                  <ThumbsDown className="h-4 w-4" />
                </button>
              </div>
            </div>
            
            {feedback && (
              <div className="mt-3 text-sm text-center text-muted-foreground">
                {feedback === 'helpful' ? 
                  'Thank you for your feedback!' : 
                  "We'll work to improve this answer. Please contact our support team if you need more assistance."
                }
              </div>
            )}
          </div>
        )}
      </div>
    );
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-primary/5 via-background to-background py-20 md:py-28" ref={heroRef}>
        {/* Background Elements */}
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.03]"></div>
        
        <motion.div 
          className="absolute top-1/4 right-[10%] w-32 h-32 rounded-full bg-primary/5 blur-3xl"
          animate={{ 
            y: [0, -20, 0],
            opacity: [0.4, 0.6, 0.4] 
          }}
          transition={{ 
            duration: 5, 
            repeat: Infinity,
            ease: "easeInOut" 
          }}
        />
        
        <div className="container relative mx-auto px-4 sm:px-6 lg:px-8 z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto"
          >
            <div className="mb-5 inline-block rounded-full bg-primary/10 px-5 py-2 text-sm font-medium text-primary">
              Knowledge Base
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-5">
              Frequently Asked <span className="text-primary">Questions</span>
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
              Find answers to common questions about our services, process, and technical details.
            </p>
            
            <div className="max-w-xl mx-auto">
              <div className="flex items-center bg-muted/50 rounded-full border border-border shadow-sm">
                <div className="pl-4 text-muted-foreground">
                  <Search className="h-5 w-5" />
                </div>
                <input 
                  type="text"
                  placeholder="Search for answers..."
                  className="w-full px-3 py-3 bg-transparent rounded-full focus:outline-none text-base"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <div className="pr-2">
                  {searchQuery ? (
                    <Button 
                      variant="ghost" 
                      className="rounded-full h-9 w-9 p-0" 
                      onClick={() => setSearchQuery("")}
                    >
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </Button>
                  ) : (
                    <Button className="rounded-full">
                      Search
                    </Button>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Popular Questions (Only shown when not searching) */}
        {!isSearching && !activeCategory.includes("Pricing") && !activeCategory.includes("Support") && activeCategory === "All" && (
        <div className="bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-10">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold">Popular Questions</h2>
              <p className="text-muted-foreground mt-2">Quick answers to our most frequently asked questions</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {popularFaqs.map((faq, index) => (
                <div key={index} className="bg-card border border-border p-6 rounded-xl hover:shadow-md transition-shadow">
                  <div className="flex items-start gap-3 mb-3">
                    <div className="p-2 rounded-full bg-primary/10 text-primary">
                      <CheckCircle className="h-5 w-5" />
                    </div>
                    <h3 className="font-medium text-lg">{faq.question}</h3>
                  </div>
                  <p className="text-muted-foreground text-sm ml-10">
                    {faq.answer.length > 300 ? `${faq.answer.substring(0, 300)}...` : faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Main Content Container */}
      <div className="bg-muted/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-10">
            {/* Sidebar with Categories */}
            <div className="lg:col-span-1">
              <div className="sticky top-24" ref={categoryRef}>
                <h3 className="text-lg font-semibold mb-4">FAQ Categories</h3>
                <motion.div
                  variants={containerVariants}
                  initial="hidden" 
                  animate={isCategoryInView ? "visible" : "hidden"}
                  className="flex flex-col gap-2"
                >
            {categories.map((category) => (
                    <motion.button
                      key={category.id}
                      variants={itemVariants}
                      whileHover={{ x: 5 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => {
                        setActiveCategory(category.id);
                        setSearchQuery("");
                      }}
                      className={`px-5 py-3 text-left text-sm font-medium rounded-lg transition-all duration-200 flex justify-between items-center ${
                        category.id === activeCategory
                          ? 'bg-primary text-primary-foreground shadow-md'
                          : 'bg-card hover:bg-muted/80'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <span className={category.id === activeCategory ? 'text-primary-foreground' : 'text-primary'}>
                          {category.icon}
                        </span>
                        <span>{category.name}</span>
                      </div>
                      <span className={`text-xs px-2 py-1 rounded-full ${
                        category.id === activeCategory
                          ? 'bg-white/20 text-white'
                          : 'bg-muted text-muted-foreground'
                      }`}>
                        {getCategoryCount(category.id)}
                      </span>
                    </motion.button>
                  ))}
                </motion.div>

                <div className="mt-10 p-5 bg-card rounded-lg border border-border">
                  <h4 className="font-semibold mb-3">Need urgent help?</h4>
                  <p className="text-sm text-muted-foreground mb-4">Our support team is available to assist you with any urgent questions.</p>
                  <Link href="/contact">
                    <Button variant="outline" className="w-full flex gap-2 items-center justify-center">
                      <Phone className="h-4 w-4" /> Contact Support
                    </Button>
                  </Link>
                </div>
              </div>
            </div>

            {/* FAQ Content Area */}
            <div className="lg:col-span-3">
              {/* Filter display */}
              {activeCategory !== "All" && !isSearching && (
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="mb-8"
                >
                  <div className="flex items-center gap-2">
                    <span className="text-sm text-muted-foreground">Selected category:</span>
                    <span className="inline-block px-4 py-1 bg-primary/10 text-primary text-sm rounded-full font-medium">
                      {activeCategory}
                    </span>
                  </div>
                </motion.div>
              )}

              {/* Search Results */}
              {isSearching && (
                <div className="mb-10">
                  <div className="mb-6 flex items-center justify-between">
                    <h2 className="text-2xl font-bold">Search Results</h2>
                    <div className="text-sm text-muted-foreground">
                      Found {searchResults.length} result{searchResults.length !== 1 ? 's' : ''} for "{searchQuery}"
                    </div>
                  </div>

                  {searchResults.length > 0 ? (
                    <div className="space-y-2">
                      {searchResults.map((faq, index) => (
                        <EnhancedFAQItem key={index} faq={faq} />
                      ))}
                    </div>
                  ) : (
                    <div className="text-center py-16 bg-muted/20 rounded-xl">
                      <div className="text-5xl mb-4">🔍</div>
                      <h3 className="text-xl font-medium mb-2">No results found</h3>
                      <p className="text-muted-foreground mb-6">
                        We couldn&apos;t find any FAQs matching your search query.
                      </p>
                      <Button onClick={() => setSearchQuery("")}>Clear Search</Button>
                    </div>
                  )}
                </div>
              )}
              
              {/* FAQ Content Sections - Only shown when not searching */}
              {!isSearching && (
                <div className="space-y-16">
                  {/* General FAQs */}
                  {(activeCategory === "All" || activeCategory === "Services" || activeCategory === "Pricing") && (
                    <div ref={generalRef} className="rounded-xl overflow-hidden">
                      <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={isGeneralInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                        transition={{ duration: 0.6 }}
                        className="mb-6 flex flex-wrap items-center justify-between"
                      >
                        <div>
                          <h2 className="text-2xl font-bold">General Questions</h2>
                          <div className="w-16 h-1 bg-primary rounded-full mt-3"></div>
                        </div>
                      </motion.div>
                      
                      <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        animate={isGeneralInView ? "visible" : "hidden"}
                        className="space-y-4"
                      >
                        {activeCategory === "Pricing" ? 
                          generalFaqs.filter(faq => faq.category === "Pricing").map((faq, index) => (
                            <EnhancedFAQItem key={index} faq={faq} />
                          )) :
                          activeCategory === "Services" ?
                          generalFaqs.filter(faq => faq.category === "Services").map((faq, index) => (
                            <EnhancedFAQItem key={index} faq={faq} />
                          )) :
                          generalFaqs.map((faq, index) => (
                            <EnhancedFAQItem key={index} faq={faq} />
                          ))
                        }
                      </motion.div>
                    </div>
                  )}
                  
                  {/* Process FAQs */}
                  {(activeCategory === "All" || activeCategory === "Process") && (
                    <div ref={processRef} className="rounded-xl overflow-hidden">
                      <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={isProcessInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                        transition={{ duration: 0.6 }}
                        className="mb-6 flex flex-wrap items-center justify-between"
                      >
                        <div>
                          <h2 className="text-2xl font-bold">Our Process</h2>
                          <div className="w-16 h-1 bg-primary rounded-full mt-3"></div>
                        </div>
                       
                      </motion.div>
                      
                      <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        animate={isProcessInView ? "visible" : "hidden"}
                        className="space-y-4"
                      >
                        {processFaqs.map((faq, index) => (
                          <EnhancedFAQItem key={index} faq={faq} />
                        ))}
                      </motion.div>
                    </div>
                  )}
                  
                  {/* Technical FAQs */}
                  {(activeCategory === "All" || activeCategory === "Technical" || activeCategory === "Support") && (
                    <div ref={technicalRef} className="rounded-xl overflow-hidden">
                      <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={isTechnicalInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                        transition={{ duration: 0.6 }}
                        className="mb-6 flex flex-wrap items-center justify-between"
                      >
                        <div>
                          <h2 className="text-2xl font-bold">
                            {activeCategory === "Support" ? "Support Information" : "Technical Details"}
                          </h2>
                          <div className="w-16 h-1 bg-primary rounded-full mt-3"></div>
                        </div>
                      
                      </motion.div>
                      
                      <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        animate={isTechnicalInView ? "visible" : "hidden"}
                        className="space-y-4"
                      >
                        {activeCategory === "Support" ?
                          generalFaqs.filter(faq => faq.category === "Support").map((faq, index) => (
                            <EnhancedFAQItem key={index} faq={faq} />
                          )) :
                          technicalFaqs.map((faq, index) => (
                            <EnhancedFAQItem key={index} faq={faq} />
                          ))
                        }
                      </motion.div>
                    </div>
                  )}

                  {/* No FAQs message */}
                  {getFilteredFaqs().length === 0 && !isSearching && (
                    <div className="text-center py-16 bg-muted/20 rounded-xl">
                      <div className="text-5xl mb-4">📋</div>
                      <h3 className="text-xl font-medium mb-2">No FAQs in this category</h3>
                      <p className="text-muted-foreground mb-6">
                        We couldn&apos;t find any FAQs in the selected category.
                      </p>
                      <Button onClick={() => setActiveCategory("All")}>View All Questions</Button>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Still Have Questions Section */}
      <section className="bg-primary py-20" ref={questionsSectionRef}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 md:p-12">
              <div className="grid md:grid-cols-12 gap-8 items-center">
                <div className="md:col-span-7">
                  <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Still Have Questions?</h2>
                  <p className="text-white/90 mb-6">
              We&apos;re here to help. Contact our team for personalized answers to your questions.
            </p>
                  <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact">
                      <Button variant="secondary" className="w-full sm:w-auto">
                        Contact Us <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
                    <Button variant="outline" className="bg-transparent text-white border-white/50 hover:bg-white/10 hover:text-white w-full sm:w-auto">
                      View Support Options
                    </Button>
                  </div>
                </div>
                
                <div className="md:col-span-5">
                  <div className="grid grid-cols-1 gap-4">
                    <div className="flex items-center gap-4 bg-white/10 p-4 rounded-lg hover:bg-white/20 transition-colors">
                      <div className="p-3 bg-white/20 rounded-full">
                        <Phone className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <div className="text-sm text-white/80">Call us</div>
                        <div className="text-white font-medium">+1 (555) 123-4567</div>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-4 bg-white/10 p-4 rounded-lg hover:bg-white/20 transition-colors">
                      <div className="p-3 bg-white/20 rounded-full">
                        <Mail className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <div className="text-sm text-white/80">Email us</div>
                        <div className="text-white font-medium">info@rtnglobal.site</div>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-4 bg-white/10 p-4 rounded-lg hover:bg-white/20 transition-colors">
                      <div className="p-3 bg-white/20 rounded-full">
                        <MessageCircle className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <div className="text-sm text-white/80">Live chat</div>
                        <div className="text-white font-medium">Available 24/7</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        title="Ready to Start Your Project?"
        description="Get in touch with our team today to discuss your requirements and how we can help you achieve your goals."
        primaryButton={{
          text: "Get Started",
          href: "/contact"
        }}
        secondaryButton={{
          text: "View Services",
          href: "/services"
        }}
      />
    </Layout>
  )
}