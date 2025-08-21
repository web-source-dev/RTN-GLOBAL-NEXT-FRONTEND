import { Layout } from "@/components/layout/layout"
import { FAQSection } from "@/components/sections/faq-section"
import { TestimonialsSection } from "@/components/sections/testimonials-section"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { 
  SearchIcon, 
  LineChart, 
  Palette, 
  Code, 
  Rocket, 
  BarChart3, 
  ArrowRight,
  Check,
  AlertCircle,
  ArrowUpRight,
  Users,
  MessageSquare
} from "lucide-react"

export default function ProcessPage() {
  // Process steps
  const processSteps = [
    {
      title: "Discovery & Research",
      icon: SearchIcon,
      description: "We begin with in-depth research to understand your business, audience, competitors, and market position.",
      deliverables: ["Brand Audit", "Market Research", "Competitive Analysis", "User Personas", "Goals & KPIs"],
      duration: "1-2 weeks",
      details: "Our discovery phase sets the foundation for strategic decision-making. We conduct stakeholder interviews, analyze market trends, audit existing brand assets, and identify opportunities. This comprehensive research ensures our solutions are anchored in strategic insights rather than subjective preferences."
    },
    {
      title: "Strategy & Concept",
      icon: LineChart,
      description: "We develop a comprehensive strategy and create initial concepts that align with your business objectives.",
      deliverables: ["Brand Strategy", "Positioning Statement", "Value Proposition", "Content Strategy", "Initial Concepts"],
      duration: "2-3 weeks",
      details: "Based on our research findings, we craft a tailored brand strategy that defines your unique positioning, messaging framework, and core brand attributes. We establish the strategic foundation before moving into visual or technical execution, ensuring all creative decisions support your business goals."
    },
    {
      title: "Design & Creative",
      icon: Palette,
      description: "Our design team brings your brand to life with visual elements that communicate your brand essence.",
      deliverables: ["Visual Identity", "Logo Design", "Color Palette", "Typography", "Brand Guidelines"],
      duration: "3-4 weeks",
      details: "Our creative process transforms strategy into visual expression. We design the core elements of your brand identity, from logo to color system, typography to imagery style. Through collaborative iteration, we refine these elements until they perfectly capture your brand essence and resonate with your audience."
    },
    {
      title: "Development & Production",
      icon: Code,
      description: "We build and implement your brand assets across all necessary platforms and touchpoints.",
      deliverables: ["Website Development", "Digital Assets", "Marketing Materials", "Content Creation", "Brand Collateral"],
      duration: "4-8 weeks",
      details: "Once design concepts are approved, our development team brings everything to life. We build digital platforms with a focus on user experience, performance, and accessibility. For physical materials, we manage production to ensure quality control across all brand touchpoints."
    },
    {
      title: "Launch & Activation",
      icon: Rocket,
      description: "We plan and execute a strategic launch to introduce or reintroduce your brand to the market.",
      deliverables: ["Launch Strategy", "Marketing Campaign", "Social Media Assets", "PR Materials", "Internal Communications"],
      duration: "1-2 weeks",
      details: "A strategic launch maximizes the impact of your new or refreshed brand. We create a comprehensive plan for both external announcement and internal adoption. This includes marketing campaigns, press releases, social media strategy, and internal training to ensure consistent brand representation."
    },
    {
      title: "Measure & Optimize",
      icon: BarChart3,
      description: "We track performance, gather feedback, and make data-driven refinements to optimize results.",
      deliverables: ["Analytics Setup", "Performance Reports", "User Testing", "Optimization Plan", "Ongoing Support"],
      duration: "Ongoing",
      details: "Our relationship continues after launch with regular performance reviews. We establish metrics aligned with your business goals, monitor results, and make data-driven refinements. This continuous improvement approach ensures your brand evolves effectively in response to market feedback and changing business needs."
    }
  ];

  // Testimonials
  const testimonials = [
    {
      content: "RTN Global's structured process took us from confused about our brand to crystal clear. Their strategic approach ensured every design decision had purpose and meaning behind it.",
      author: "Jennifer Miller",
      role: "CMO",
      company: "TechVision Inc."
    },
    {
      content: "What impressed me most was how their process balanced creativity with business strategy. The discovery phase revealed insights about our customers we hadn't considered before.",
      author: "Mark Thompson",
      role: "Founder",
      company: "Greenlight Solutions"
    },
    {
      content: "The step-by-step methodology made a complex rebranding project manageable and stress-free. They kept us informed and involved at every stage.",
      author: "Sophia Nguyen",
      role: "Marketing Director",
      company: "Wellness Partners"
    }
    
  ];

  // FAQs about the process
  const processFaqs = [
    {
      question: "How long does the entire branding process typically take?",
      answer: "The typical timeline for a comprehensive branding project is 10-16 weeks, depending on the scope and complexity. Simpler projects like logo refreshes may take 6-8 weeks, while full rebrands with multiple touchpoints can extend to 20+ weeks."
    },
    {
      question: "How involved should our team be in the process?",
      answer: "Client involvement is crucial for success. We recommend designating a primary point of contact and key stakeholders for approvals. Most clients participate actively in the discovery and feedback stages, with involvement typically requiring 2-4 hours per week throughout the project."
    },
    {
      question: "Do you offer partial services or must we follow the entire process?",
      answer: "While our full process yields the best results, we understand some clients have specific needs. We offer flexible engagement models where you can engage us for specific phases. However, we recommend at minimum completing the discovery phase to inform any creative or technical work."
    },
    {
      question: "How do you handle revisions during the creative process?",
      answer: "Our process includes two rounds of revisions for each deliverable. We provide clear tools for feedback collection and schedule dedicated review sessions. Additional revision rounds can be accommodated at an hourly rate if needed."
    },
    {
      question: "What happens after the project is complete?",
      answer: "We offer ongoing support packages to help maintain and evolve your brand. This includes regular performance reviews, updates to digital assets, content creation, and strategic consulting. Many clients transition to a retainer relationship after the initial project."
    }
  ];

  // Stats for the process
  const processStats = [
    { value: "98%", label: "Client Satisfaction" },
    { value: "15+", label: "Years Experience" },
    { value: "200+", label: "Projects Completed" },
    { value: "85%", label: "Return Clients" }
  ];

  return (
    <Layout>
      {/* JSON-LD structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Our Process | RTN Global",
            "description": "Learn about RTN Global's strategic six-step methodology for brand success, combining strategic thinking, creative excellence, and technical expertise.",
            "url": "https://rtnglobal.site/process",
            "publisher": {
              "@type": "Organization",
              "name": "RTN Global",
              "url": "https://rtnglobal.site/",
              "logo": "https://rtnglobal.site/logo.png",
              "founder": {
                "@type": "Person",
                "name": "Muhammad Tayyab"
              },
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "1209 MOUNTAIN ROAD PLNE, STE R",
                "addressLocality": "ALBUQUERQUE",
                "addressRegion": "NM",
                "postalCode": "87110",
                "addressCountry": "US"
              },
              "contactPoint": {
                "@type": "ContactPoint",
                "contactType": "customer service",
                "telephone": "+1 (505) 528 0265",
                "email": "info@rtnglobal.site"
              },
              "sameAs": [
                "https://www.instagram.com/rtnglobalofficial/",
                "https://www.threads.net/@rtnglobalofficial",
                "https://www.tiktok.com/@rtnglobalofficial",
                "https://web.facebook.com/people/RTN-Global/61573828870610/",
                "https://www.youtube.com/@RTNGlobal",
                "https://www.linkedin.com/in/rtnglobalofficial/"
              ]
            },
            "mainEntity": {
              "@type": "Service",
              "name": "Brand Strategy Process",
              "description": "A proven six-step methodology combining strategic thinking, creative excellence, and technical expertise to deliver brands that connect with audiences and achieve business objectives.",
              "provider": {
                "@type": "Organization",
                "name": "RTN Global"
              },
              "serviceOutput": "A comprehensive brand strategy and implementation",
              "serviceType": "Brand Development",
              "offers": {
                "@type": "Offer",
                "availability": "https://schema.org/InStock"
              }
            },
            "mainContentOfPage": {
              "@type": "WebPageElement",
              "steps": processSteps.map((step, index) => ({
                "@type": "HowToStep",
                "position": index + 1,
                "name": step.title,
                "text": step.details,
                "itemListElement": step.deliverables.map(deliverable => ({
                  "@type": "ListItem",
                  "item": deliverable
                }))
              }))
            },
            "speakable": {
              "@type": "SpeakableSpecification",
              "cssSelector": ["h1", "h2", ".speakable"]
            }
          })
        }}
      />
      {/* Hero Section - Modern gradient background with visual elements */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-background to-primary/10 pt-5 pb-5 md:pb-10 md:pt-5">
        <div className="absolute inset-0 z-0 opacity-30">
          <div className="absolute h-96 w-96 rounded-full bg-primary/10 blur-3xl -top-20 -left-20"></div>
          <div className="absolute h-96 w-96 rounded-full bg-primary/10 blur-3xl -bottom-20 -right-20"></div>
        </div>
        
        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 md:grid-cols-2 md:gap-16 items-center">
            <div>
              <div className="mb-6 inline-block rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
                Our Methodology
              </div>
              <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
                A Strategic <span className="text-primary">Process</span> for Brand Success
              </h1>
              <p className="mb-8 text-lg text-muted-foreground md:text-xl max-w-xl">
                Our proven six-step methodology combines strategic thinking, creative excellence, and technical expertise 
              to deliver brands that connect with audiences and achieve business objectives.
            </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" asChild>
                <Link href={`${process.env.NEXT_PUBLIC_ORDERS_URL}/order`}>
                  Start Your Project
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="/portfolio">
                    View Case Studies
                    <ArrowUpRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
            <div className="relative hidden md:block">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/5 rounded-3xl transform rotate-3 scale-95"></div>
              <div className="relative rounded-3xl overflow-hidden border border-primary/10 shadow-xl">
                <div className="aspect-[4/3] w-full bg-muted/20">
                  {/* Placeholder for process illustration/image */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center p-8 gap-6">
                    <div className="grid grid-cols-3 gap-4 w-full">
                      {processSteps.slice(0, 6).map((step, index) => (
                        <div key={index} className="flex flex-col items-center justify-center bg-card/80 backdrop-blur-sm p-3 rounded-lg border border-primary/10 shadow-sm">
                          <div className="mb-2 p-2 rounded-full bg-primary/10">
                            <step.icon className="h-5 w-5 text-primary" />
                          </div>
                          <div className="text-xs font-medium text-center">{step.title}</div>
                        </div>
                      ))}
                    </div>
                    <div className="w-4/5 h-2 rounded-full bg-primary/20 overflow-hidden">
                      <div className="h-full w-2/3 bg-primary rounded-full"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Process Stats Section */}
      <section className="border-y border-border/40 bg-gradient-to-r from-muted/30 via-muted/10 to-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="py-12 md:py-16">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
              {processStats.map((stat, index) => (
                <div key={index} className="group relative">
                  {/* Background decorative element */}
                  <div className="absolute inset-0 bg-primary/5 rounded-xl transform rotate-2 scale-95 group-hover:rotate-0 transition-transform duration-300"></div>
                  
                  <div className="relative p-6 md:p-8 text-center rounded-xl border border-border/30 bg-card/80 backdrop-blur-sm hover:shadow-lg transition-all duration-300 h-full flex flex-col justify-center items-center">
                    <div className="text-3xl md:text-5xl font-bold text-primary mb-2 group-hover:scale-110 transition-transform duration-300">{stat.value}</div>
                    <div className="text-sm md:text-base font-medium text-muted-foreground">{stat.label}</div>
                    
                    {/* Subtle graphic element */}
                    <div className="absolute bottom-3 right-3 opacity-10 group-hover:opacity-20 transition-opacity">
                      {index === 0 && <Check className="h-8 w-8" />}
                      {index === 1 && <LineChart className="h-8 w-8" />}
                      {index === 2 && <Palette className="h-8 w-8" />}
                      {index === 3 && <Users className="h-8 w-8" />}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* Process Introduction */}
      <section className="py-10 md:py-10 bg-gradient-to-b from-muted/5 to-background relative overflow-hidden">
      
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <div className="inline-block mb-6 rounded-full bg-primary/10 px-4 py-1.5 text-xs font-medium text-primary uppercase tracking-wider">
              Our Approach
            </div>
            <h2 className="text-3xl font-bold mb-8 md:text-4xl lg:text-5xl bg-gradient-to-r from-primary/90 to-primary/70 text-transparent bg-clip-text">
              A Methodology Built for Results
            </h2>
            <p className="text-lg text-muted-foreground mb-8 md:text-xl">
              We&apos;ve refined our process through hundreds of successful projects. Each step is intentionally 
              designed to reduce risk and maximize the impact of your investment.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 md:gap-10">
            <div className="group bg-card rounded-xl p-8 border border-border/40 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 relative overflow-hidden">
              {/* Subtle gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <div className="relative z-10">
                <div className="bg-primary/10 rounded-full p-3 w-14 h-14 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-all duration-300 group-hover:scale-110">
                  <Users className="h-7 w-7 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">Client-Centered</h3>
                <p className="text-muted-foreground">Your goals and vision guide every decision we make throughout the process. We become an extension of your team.</p>
              </div>
            </div>
            
            <div className="group bg-card rounded-xl p-8 border border-border/40 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 relative overflow-hidden">
              {/* Subtle gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <div className="relative z-10">
                <div className="bg-primary/10 rounded-full p-3 w-14 h-14 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-all duration-300 group-hover:scale-110">
                  <MessageSquare className="h-7 w-7 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">Transparent</h3>
                <p className="text-muted-foreground">Clear communication and regular updates keep you informed at every stage of the project journey.</p>
              </div>
            </div>
            
            <div className="group bg-card rounded-xl p-8 border border-border/40 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 relative overflow-hidden">
              {/* Subtle gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <div className="relative z-10">
                <div className="bg-primary/10 rounded-full p-3 w-14 h-14 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-all duration-300 group-hover:scale-110">
                  <LineChart className="h-7 w-7 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">Data-Driven</h3>
                <p className="text-muted-foreground">Strategic decisions based on research and analytics, not assumptions or subjective preferences.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Process Steps - Modern timeline view */}
      <section className="py-10 md:py-20 bg-gradient-to-b from-background to-muted/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="inline-block mb-3 rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary uppercase tracking-wider">
              Our 6-Step Process
            </div>
            <h2 className="text-3xl font-bold md:text-4xl lg:text-5xl">The Journey to Brand Excellence</h2>
            <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
              A carefully crafted methodology that ensures quality, consistency, and results at every stage of your project.
            </p>
          </div>
          
          <div className="relative max-w-6xl mx-auto">
            {/* Desktop Timeline (hidden on mobile) */}
            <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-primary/80 via-primary/60 to-primary/40 transform -translate-x-1/2">
              {/* Animated pulse effect */}
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-5 h-5 rounded-full bg-primary/30 animate-ping"></div>
            </div>
            
            {processSteps.map((step, index) => (
              <div key={index} className={`relative mb-10 lg:mb-10 ${index % 2 === 0 ? 'lg:ml-auto lg:pl-12' : 'lg:mr-auto lg:pr-12'}`}>
                {/* Timeline dot with icon and glow effect */}
                <div className="hidden lg:flex absolute top-10 left-1/2 transform -translate-x-1/2 w-12 h-12 rounded-full border-4 border-background bg-primary items-center justify-center shadow-[0_0_15px_rgba(var(--primary),0.4)] z-10">
                  <step.icon className="h-5 w-5 text-white" />
                </div>
                
                <div className={`lg:w-1/2 ${index % 2 === 0 ? 'lg:ml-auto lg:pl-12' : 'lg:mr-auto lg:pr-12'}`}>
                  <div className="group bg-card border border-border/40 rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
                    {/* Colored top border based on step */}
                    <div className="h-1.5 w-full bg-gradient-to-r from-primary/80 to-primary/40"></div>
                    
                    <div className="p-6 md:p-8">
                      <div className="flex items-center justify-between mb-6">
                        <div className="flex items-center gap-4">
                          <div className="flex items-center justify-center w-14 h-14 md:w-16 md:h-16 rounded-full bg-primary/10 text-primary group-hover:bg-primary/20 transition-colors">
                            <step.icon className="h-6 w-6 md:h-7 md:w-7" />
                          </div>
                          <div>
                            <div className="text-sm font-medium text-primary mb-1">Step {index + 1}</div>
                            <h3 className="text-xl md:text-2xl font-bold group-hover:text-primary transition-colors">{step.title}</h3>
                          </div>
                        </div>
                        <div className="px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full hidden md:block">
                          {step.duration}
                        </div>
                      </div>
                      
                      <p className="text-muted-foreground mb-6">
                        {step.details}
                      </p>
                      
                      <div>
                        <h4 className="inline-block mb-4 rounded-full bg-muted px-4 py-1.5 text-xs font-medium uppercase tracking-wider">
                          Key Deliverables
                        </h4>
                        <ul className="grid gap-3 sm:grid-cols-2">
                          {step.deliverables.map((deliverable, i) => (
                            <li key={i} className="flex items-center gap-3 group/item">
                              <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center group-hover/item:bg-primary/20 transition-colors">
                                <Check className="h-3.5 w-3.5 text-primary" />
                              </div>
                              <span className="text-sm group-hover/item:text-primary transition-colors">{deliverable}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      {index === 0 && (
                        <div className="mt-8 bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800 rounded-lg p-5 flex items-start gap-3 transform transition-all duration-300 hover:scale-[1.02]">
                          <AlertCircle className="h-5 w-5 text-amber-500 flex-shrink-0 mt-0.5" />
                          <div>
                            <h4 className="font-medium text-amber-800 dark:text-amber-400 mb-1">Why This Matters</h4>
                            <p className="text-sm text-amber-700 dark:text-amber-300">
                              Projects that skip proper discovery often need extensive revisions later. 
                              Our research-first approach saves time and budget in the long run.
                            </p>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
                
                {/* Line connecting to next step */}
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-px h-24 bg-gradient-to-b from-primary/50 to-primary/10" style={{ top: 'calc(100% - 36px)' }}></div>
                )}
              </div>
            ))}
            
            {/* Final dot at the end of timeline */}
            <div className="hidden lg:block absolute bottom-0 left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full bg-primary/30 border-2 border-background"></div>
          </div>
        </div>
      </section>
      <section className="py-0 md:py-0 bg-gradient-to-br from-muted/10 via-background to-muted/5 relative overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl opacity-60"></div>
          <div className="absolute top-1/3 right-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-3xl opacity-40"></div>
        </div>
        
        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-14 md:gap-20 items-center">
              <div className="order-2 md:order-1">
                <div className="inline-block mb-4 rounded-full bg-primary/10 px-4 py-1.5 text-xs font-medium text-primary uppercase tracking-wider">
                  How We Work
                </div>
                <h2 className="text-3xl font-bold mb-6 md:text-4xl lg:text-5xl bg-gradient-to-r from-primary/90 to-primary/70 text-transparent bg-clip-text">
                  Collaborative Partnership
                </h2>
                <p className="text-muted-foreground mb-10 text-lg">
                  We view every project as a true partnership. Our process is designed to be transparent and 
                  collaborative, with clear communication channels and regular check-ins to ensure alignment.
                </p>
                <ul className="space-y-6">
                  {[
                    {
                      title: "Regular Progress Updates",
                      description: "Weekly status reports and milestone reviews keep everyone aligned and informed"
                    },
                    {
                      title: "Dedicated Project Manager",
                      description: "A single point of contact throughout your entire project journey"
                    },
                    {
                      title: "Structured Feedback Systems",
                      description: "Clear tools and processes for gathering and implementing feedback effectively"
                    },
                    {
                      title: "Transparent Management Tools",
                      description: "Access to our project management tools for real-time updates and visibility"
                    },
                    {
                      title: "Knowledge Transfer",
                      description: "Training and documentation to ensure your team&apos;s long-term success with deliverables"
                    }
                  ].map((item, index) => (
                    <li key={index} className="group">
                      <div className="flex items-start gap-5">
                        <div className="w-10 h-10 rounded-full bg-primary/10 group-hover:bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5 transition-colors duration-300 border border-primary/20">
                          <Check className="h-5 w-5 text-primary" />
                    </div>
                        <div>
                          <h3 className="font-medium text-lg mb-1.5 group-hover:text-primary transition-colors">{item.title}</h3>
                          <p className="text-muted-foreground">{item.description}</p>
                    </div>
                    </div>
                  </li>
                  ))}
                </ul>
              </div>
              <div className="order-1 md:order-2">
                <div className="relative">
                  {/* Background shape */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-primary/5 rounded-2xl transform rotate-3 scale-95 opacity-80"></div>
                  
                  {/* Card content */}
                  <div className="relative rounded-2xl overflow-hidden border border-primary/20 shadow-xl bg-card/95 backdrop-blur-sm transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
                    <div className="p-8 md:p-10">
                      <div className="flex flex-col gap-10">
                        <div className="flex items-start gap-5">
                          <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 border border-primary/20">
                            <Users className="h-6 w-6 text-primary" />
                          </div>
                          <div>
                            <h3 className="font-medium text-xl mb-3">Client & Agency Teams</h3>
                            <div className="flex flex-wrap gap-2">
                              <div className="px-4 py-1.5 bg-muted rounded-full text-sm">Project Manager</div>
                              <div className="px-4 py-1.5 bg-muted rounded-full text-sm">Brand Strategist</div>
                              <div className="px-4 py-1.5 bg-muted rounded-full text-sm">Designer</div>
                              <div className="px-4 py-1.5 bg-muted rounded-full text-sm">Developer</div>
                            </div>
                          </div>
                        </div>
                        
                        <div className="w-full h-px bg-border/40"></div>
                        
                        <div>
                          <h3 className="font-medium text-xl mb-4">Project Timeline</h3>
                          <div className="space-y-4">
              <div className="relative">
                              <div className="absolute -left-3 top-1/2 transform -translate-y-1/2 w-2 h-2 bg-primary rounded-full"></div>
                              <div className="absolute -right-3 top-1/2 transform -translate-y-1/2 w-2 h-2 bg-primary/40 rounded-full"></div>
                              <div className="w-full h-3 bg-muted rounded-full overflow-hidden">
                                <div className="h-full w-full bg-gradient-to-r from-primary/90 to-primary/20 rounded-full"></div>
                              </div>
                              
                              <div className="mt-3 grid grid-cols-3">
                                <div className="text-sm font-medium">Discovery</div>
                                <div className="text-center text-sm font-medium">Development</div>
                                <div className="text-right text-sm font-medium">Launch</div>
                              </div>
                              
                              <div className="mt-1 flex justify-between text-xs text-muted-foreground">
                                <div>Week 1</div>
                                <div>Week 8</div>
                                <div>Week 16</div>
                              </div>
                            </div>
                          </div>
                        </div>
                        
                        <div className="w-full h-px bg-border/40"></div>
                        
                        <div className="text-center">
                          <div className="font-bold text-2xl mb-2 text-transparent bg-clip-text bg-gradient-to-r from-primary/90 to-primary/70">Partnership</div>
                          <p className="text-muted-foreground">Success through collaborative excellence</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <TestimonialsSection
        title="What Clients Say About Our Process"
        testimonials={testimonials}
        backgroundClassName="bg-gradient-to-b from-muted/10 to-background"
      />
      <FAQSection
        title="Common Questions About Our Process"
        faqs={processFaqs}
      />
      <section className="relative py-24 md:py-32 overflow-hidden bg-gradient-to-br from-primary/10 via-background/90 to-primary/5">
        {/* Background elements */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="absolute h-[600px] w-[600px] rounded-full bg-primary/10 blur-3xl opacity-70 -top-20 right-0"></div>
          <div className="absolute h-[600px] w-[600px] rounded-full bg-primary/10 blur-3xl opacity-50 -bottom-40 -left-40"></div>
          
          {/* Subtle pattern overlay */}
          <div className="absolute inset-0 bg-[url('/patterns/grid.svg')] bg-repeat opacity-5"></div>
        </div>
        
        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block mb-6 rounded-full bg-primary/20 backdrop-blur-sm px-4 py-1.5 text-sm font-medium text-primary">
              Start Your Journey
            </div>
            <h2 className="text-3xl font-bold mb-6 md:text-4xl lg:text-6xl bg-gradient-to-r from-primary/90 to-primary/60 text-transparent bg-clip-text">
              Ready to Transform Your Brand?
            </h2>
            <p className="text-lg text-muted-foreground mb-10 md:text-xl max-w-2xl mx-auto">
              Let&apos;s discuss how our strategic process can help elevate your brand and drive meaningful business growth for your organization.
            </p>
            <div className="flex flex-wrap justify-center gap-5">
              <Button size="lg" className="text-base h-14 px-8 rounded-full shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 transition-all duration-300 transform hover:-translate-y-1" asChild>
                <Link href="/contact">
                  Start a Project
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="text-base h-14 px-8 rounded-full border-primary/30 hover:bg-primary/10 transition-all duration-300 transform hover:-translate-y-1" asChild>
                <Link href="/portfolio">
                  View Our Work
                  <ArrowUpRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
} 