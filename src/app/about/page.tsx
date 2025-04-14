"use client"

import { Layout } from "@/components/layout/layout"
import { Button } from "@/components/ui/button"
import { OptimizedImage } from "@/components/ui/optimized-image"
import Link from "next/link"
import { ArrowRight, CheckCircle, Users, ChevronRight, Star, Coffee, Code, Building, Zap, Target } from "lucide-react"
import { StatsSection } from "@/components/sections/stats-section"
import { TeamSection } from "@/components/sections/team-section"
import { motion, useScroll, useTransform, useInView } from "framer-motion"
import { useRef, useEffect, useState } from "react"
import Script from "next/script"


export default function AboutPage() {
  const heroRef = useRef(null)
  const missionRef = useRef(null)
  const valuesRef = useRef(null)
  const timelineRef = useRef(null)
  const statsRef = useRef(null)
  
  const isMissionInView = useInView(missionRef, { once: true, amount: 0.3 });
  const isValuesInView = useInView(valuesRef, { once: true, amount: 0.3 });
  const isTimelineInView = useInView(timelineRef, { once: true, amount: 0.1 });
  const isStatsInView = useInView(statsRef, { once: true });

  // Parallax scrolling effect for hero section
  const { scrollY } = useScroll()
  const y1 = useTransform(scrollY, [0, 500], [0, 100])
  const y2 = useTransform(scrollY, [0, 500], [0, -100])
  const opacity = useTransform(scrollY, [0, 300, 500], [1, 0.8, 0])
  const heroScale = useTransform(scrollY, [0, 300], [1, 0.95])
  
  // Counter animation for stats
  const [countersVisible, setCountersVisible] = useState(false);
  
  useEffect(() => {
    if (isStatsInView) {
      setCountersVisible(true);
    }
  }, [isStatsInView]);

  // Company milestones
  const milestones = [
    {
      year: 2017,
      title: "Company Founded",
      description: "RTN Global was founded with a mission to help businesses leverage digital technology for growth."
    },
    {
      year: 2018,
      title: "First Major Client",
      description: "Secured our first enterprise client and expanded the team to 10 talented professionals."
    },
    {
      year: 2019,
      title: "Opened Second Office",
      description: "Expanded operations with a new office to serve clients across multiple regions."
    },
    {
      year: 2020,
      title: "Remote-First Approach",
      description: "Pioneered a remote-first work model, allowing us to hire top talent worldwide."
    },
    {
      year: 2021,
      title: "100+ Clients Milestone",
      description: "Celebrated serving over 100 clients across diverse industries worldwide."
    },
    {
      year: 2022,
      title: "Award-Winning Agency",
      description: "Recognized as a leading digital agency with multiple industry awards."
    },
    {
      year: 2023,
      title: "Global Expansion",
      description: "Expanded our services globally with clients in over 20 countries."
    }
  ]

  return (
    <Layout>
      {/* JSON-LD Structured Data */}
      <Script id="organization-structured-data" type="application/ld+json" strategy="afterInteractive">
        {`
          {
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "RTN Global",
            "url": "https://rtnglobal.co/",
            "logo": "https://rtnglobal.co/logo.png",
            "description": "RTN Global provides innovative digital solutions for business growth and transformation.",
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
              "telephone": "+1 505 528 6780",
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
          }
        `}
      </Script>
      
      <Script id="professional-service-structured-data" type="application/ld+json" strategy="afterInteractive">
        {`
          {
            "@context": "https://schema.org",
            "@type": "ProfessionalService",
            "name": "RTN Global",
            "image": "https://rtnglobal.co/logo.png",
            "url": "https://rtnglobal.co/",
            "telephone": "+1 505 528 6780",
            "email": "info@rtnglobal.site",
            "description": "RTN Global provides innovative digital solutions for business growth and transformation.",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "1209 MOUNTAIN ROAD PLNE, STE R",
              "addressLocality": "ALBUQUERQUE",
              "addressRegion": "NM",
              "postalCode": "87110",
              "addressCountry": "US"
            },
            "founder": {
              "@type": "Person",
              "name": "Muhammad Tayyab"
            },
            "priceRange": "$$",
            "sameAs": [
              "https://www.instagram.com/rtnglobalofficial/",
              "https://www.threads.net/@rtnglobalofficial",
              "https://www.tiktok.com/@rtnglobalofficial",
              "https://web.facebook.com/people/RTN-Global/61573828870610/",
              "https://www.youtube.com/@RTNGlobal",
              "https://www.linkedin.com/in/rtnglobalofficial/"
            ]
          }
        `}
      </Script>
      
      <Script id="verification-data" type="application/ld+json" strategy="afterInteractive">
        {`
          {
            "@context": "https://schema.org",
            "@type": "WebSite",
            "name": "RTN Global",
            "url": "https://rtnglobal.co/",
            "potentialAction": {
              "@type": "SearchAction",
              "target": "https://rtnglobal.co/search?q={search_term_string}",
              "query-input": "required name=search_term_string"
            },
            "additionalProperty": [
              {
                "@type": "PropertyValue",
                "name": "google-site-verification",
                "value": "google03e42604abdd544c"
              },
              {
                "@type": "PropertyValue",
                "name": "wot-verification",
                "value": "d225e0e4ff8e770182408ec60e8d8c24"
              },
              {
                "@type": "PropertyValue",
                "name": "bing-site-verification",
                "value": "9f21e93909e646e0a2f3218d1afeb53c"
              }
            ]
          }
        `}
      </Script>
      
      {/* Hero Section with 3D Parallax */}
      <section className="relative h-[100vh] overflow-hidden" ref={heroRef} aria-labelledby="hero-heading">
        {/* Background Layers */}
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-background/80 to-background"></div>
        
        <motion.div 
          className="absolute inset-0 w-full h-full"
          style={{ y: y1, opacity, scale: heroScale }}
        >
          <div className="absolute inset-0 bg-grid-pattern opacity-20"></div>
        </motion.div>
        
        {/* Floating Elements */}
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
        
        <motion.div 
          className="absolute bottom-1/3 left-[15%] w-64 h-64 rounded-full bg-indigo-500/5 blur-3xl"
          animate={{ 
            y: [0, 30, 0],
            opacity: [0.3, 0.5, 0.3] 
          }}
          transition={{ 
            duration: 7, 
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1 
          }}
        />
        
        <div className="container relative h-full mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center z-10">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="mb-6 inline-block rounded-full bg-primary/10 px-5 py-2 text-sm font-medium text-primary"
              >
                Welcome to RTN Global
              </motion.div>
              
              <motion.h1 
                id="hero-heading"
                className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-none mb-6"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <span className="text-primary">Innovating</span> Digital Solutions for Business Growth
              </motion.h1>
              
              <motion.p 
                className="mt-6 text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                A team of passionate digital experts committed to transforming businesses through innovative technology solutions since 2017.
              </motion.p>
              
              <motion.div 
                className="mt-10 flex flex-wrap justify-center gap-4"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
              >
                <Link href="/contact" aria-label="Contact RTN Global for digital solutions">
                  <Button size="lg" className="gap-2 rounded-full px-8 py-6 text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                    Get in Touch <ArrowRight className="h-5 w-5 ml-1" aria-hidden="true" />
                  </Button>
                </Link>
                <Link href="#our-story" aria-label="Learn about RTN Global's story">
                  <Button size="lg" variant="outline" className="gap-2 rounded-full px-8 py-6 text-lg hover:bg-card/60 transition-all duration-300 hover:scale-105">
                    Our Story <ChevronRight className="h-5 w-5" aria-hidden="true" />
                  </Button>
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <motion.div 
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
          animate={{ 
            y: [0, 10, 0],
            opacity: [0.6, 1, 0.6] 
          }}
          transition={{ 
            duration: 2, 
            repeat: Infinity,
            ease: "easeInOut" 
          }}
        >
          <span className="text-sm text-muted-foreground mb-2">Scroll to explore</span>
          <div className="w-6 h-10 border-2 border-muted-foreground rounded-full flex justify-center pt-2" aria-hidden="true">
            <motion.div 
              className="w-1.5 h-1.5 bg-primary rounded-full"
              animate={{ 
                y: [0, 12, 0]
              }}
              transition={{ 
                duration: 2, 
                repeat: Infinity,
                ease: "easeInOut" 
              }}
            />
          </div>
        </motion.div>
        
        <motion.div 
          className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent"
          style={{ y: y2 }}
        />
      </section>
      
      {/* Mission and Vision - Interactive Section */}
      <section className="py-24 md:py-32 overflow-hidden relative" id="our-story" ref={missionRef} aria-labelledby="mission-heading">
        {/* Background accents */}
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-primary/5 rounded-bl-[100px] -z-10 blur-3xl opacity-70"></div>
        <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-indigo-500/5 rounded-tr-[100px] -z-10 blur-3xl opacity-60"></div>
      
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={isMissionInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
          >
            <motion.div
              initial={{ x: -100, opacity: 0 }}
              animate={isMissionInView ? { x: 0, opacity: 1 } : { x: -100, opacity: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative h-[500px] md:h-[600px] rounded-2xl overflow-hidden shadow-xl">
                <OptimizedImage
                  src="/images/about/about.png"
                  alt="RTN Global team members collaborating on innovative digital solutions"
                  fill
                  className="object-cover h-full"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                
                <motion.div 
                  className="absolute bottom-0 left-0 right-0 p-8 md:p-10"
                  initial={{ y: 60, opacity: 0 }}
                  animate={isMissionInView ? { y: 0, opacity: 1 } : { y: 60, opacity: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                >
                  <h2 id="mission-heading" className="text-white text-3xl md:text-4xl font-bold mb-4">Our Mission</h2>
                  <div className="w-20 h-1.5 bg-primary rounded-full mb-6" aria-hidden="true"></div>
                  <p className="text-white/90 text-lg">Empowering businesses to thrive in the digital age through innovative solutions.</p>
                </motion.div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -bottom-8 -left-8 w-24 h-24 border-2 border-primary/30 rounded-xl -z-10" aria-hidden="true"></div>
              <div className="absolute -top-8 -right-8 w-40 h-40 border-2 border-primary/20 rounded-full -z-10" aria-hidden="true"></div>
            </motion.div>
            
            <motion.div
              initial={{ x: 100, opacity: 0 }}
              animate={isMissionInView ? { x: 0, opacity: 1 } : { x: 100, opacity: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col gap-8"
            >
              <div>
                <div className="inline-block rounded-full bg-primary/10 px-5 py-2 text-sm font-medium text-primary mb-4">
                  Our Purpose
                </div>
                <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">Driven by a <span className="text-primary">Clear Mission</span></h2>
                <div className="w-32 h-1.5 bg-primary/30 rounded-full mb-8" aria-hidden="true"></div>
                <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                To empower businesses with innovative digital solutions that drive growth, 
                enhance user experience, and deliver measurable results. We strive to be a 
                trusted partner for companies of all sizes, helping them navigate the complex 
                digital landscape with confidence.
              </p>
            </div>
              
              <div className="mt-6 space-y-6">
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold mb-4 flex items-center">
                    <Target className="h-7 w-7 text-primary mr-3" aria-hidden="true" /> 
                    Our Vision
                  </h3>
                  <p className="text-lg text-muted-foreground pl-10 border-l-2 border-primary/20 py-2">
                To be a global leader in digital transformation, recognized for our 
                innovative solutions, exceptional service, and the tangible value we 
                    create for our clients.
                  </p>
                </div>
                
                <div className="pt-4">
                  <h4 className="text-xl font-semibold mb-4">Our Commitment</h4>
                  <ul className="mt-4 space-y-5">
                    {[
                      "Building long-term partnerships with our clients",
                      "Delivering solutions that exceed expectations",
                      "Staying at the forefront of technological innovation",
                      "Creating measurable business impact"
                    ].map((item, index) => (
                      <motion.li 
                        key={index} 
                        className="flex items-start"
                        initial={{ opacity: 0, x: 20 }}
                        animate={isMissionInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
                        transition={{ duration: 0.4, delay: 0.8 + (index * 0.1) }}
                      >
                        <div className="flex-shrink-0 h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center mt-0.5 mr-3" aria-hidden="true">
                          <CheckCircle className="h-4 w-4 text-primary" />
                        </div>
                        <span className="text-lg">{item}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
      
      {/* Stats Section with Counters */}
      <div ref={statsRef}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isStatsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.5 }}
          className="relative py-20"
          aria-labelledby="stats-heading"
        >
          {/* Background elements */}
          <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-muted/50 to-primary/5"></div>
          
          <StatsSection 
            title="Our Impact in Numbers"
            description="Over the years, we've achieved remarkable results for our clients"
            stats={[
              { value: countersVisible ? 200 : 0, suffix: "+", label: "Successful Projects" },
              { value: countersVisible ? 50 : 0, suffix: "+", label: "Team Members" },
              { value: countersVisible ? 15 : 0, suffix: "+", label: "Industry Awards" },
              { value: countersVisible ? 98 : 0, suffix: "%", label: "Client Satisfaction" }
            ]}
            columns={4}
            className="relative z-10"
            backgroundClassName="bg-transparent"
            headingId="stats-heading"
          />
        </motion.div>
      </div>
      
      {/* Our Values - Interactive Card Grid */}
      <section className="py-24 md:py-32 relative overflow-hidden" ref={valuesRef} aria-labelledby="values-heading">
        {/* Background elements */}
        <div className="absolute top-0 w-full h-40 bg-gradient-to-b from-muted/50 to-transparent"></div>
        <div className="absolute -left-40 top-1/3 w-80 h-80 bg-indigo-600/5 rounded-full blur-3xl"></div>
        <div className="absolute -right-20 bottom-1/4 w-60 h-60 bg-primary/5 rounded-full blur-3xl"></div>
      
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isValuesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto mb-20"
          >
            <div className="inline-block rounded-full bg-primary/10 px-5 py-2 text-sm font-medium text-primary mb-4">
              Our Core Values
            </div>
            <h2 id="values-heading" className="text-3xl md:text-5xl font-bold tracking-tight mb-6">What <span className="text-primary">Drives Us</span></h2>
            <div className="w-24 h-1.5 bg-primary/30 rounded-full mx-auto mb-8" aria-hidden="true"></div>
            <p className="text-lg md:text-xl text-muted-foreground">
              These principles guide our decisions, shape our culture, and define how we work with clients and each other.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
            {[
              {
                icon: <Users className="h-10 w-10 text-white" aria-hidden="true" />,
                color: "#4f46e5",
                title: "Client-Centric",
                description: "We place our clients at the center of everything we do, focusing on their unique needs and goals to deliver solutions that exceed expectations."
              },
              {
                icon: <Star className="h-10 w-10 text-white" aria-hidden="true" />,
                color: "#8b5cf6",
                title: "Excellence",
                description: "We are committed to delivering excellence in every project, meticulously attending to details and continuously improving our skills and processes."
              },
              {
                icon: <Coffee className="h-10 w-10 text-white" aria-hidden="true" />,
                color: "#06b6d4",
                title: "Collaboration",
                description: "We believe in the power of teamwork and open communication, both within our team and with our clients."
              },
              {
                icon: <Code className="h-10 w-10 text-white" aria-hidden="true" />,
                color: "#ec4899",
                title: "Innovation",
                description: "We constantly explore new technologies and methodologies to provide cutting-edge solutions that keep our clients ahead of the curve."
              },
              {
                icon: <Building className="h-10 w-10 text-white" aria-hidden="true" />,
                color: "#f97316",
                title: "Integrity",
                description: "We operate with transparency, honesty, and ethical practices in all our business relationships and transactions."
              },
              {
                icon: <Zap className="h-10 w-10 text-white" aria-hidden="true" />,
                color: "#14b8a6",
                title: "Results-Driven",
                description: "We focus on delivering tangible business outcomes and measurable ROI for our clients through effective digital strategies."
              }
            ].map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={isValuesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className="relative overflow-hidden rounded-2xl shadow-lg group"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-black opacity-95 transition-all duration-300 group-hover:opacity-100"></div>
                <div className="absolute top-0 right-0 w-24 h-24 -mr-8 -mt-8 rounded-full" style={{ backgroundColor: `${value.color}20`, filter: 'blur(40px)' }} aria-hidden="true"></div>
                <div className="absolute bottom-0 left-0 w-32 h-32 -ml-10 -mb-10 rounded-full" style={{ backgroundColor: `${value.color}25`, filter: 'blur(50px)' }} aria-hidden="true"></div>
                
                <div className="relative z-10 p-8 md:p-10 h-full flex flex-col">
                  <div 
                    className="w-16 h-16 rounded-xl flex items-center justify-center mb-6"
                    style={{ backgroundColor: value.color }}
                    aria-hidden="true"
                  >
                    {value.icon}
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-4">{value.title}</h3>
                  <p className="text-gray-300 leading-relaxed flex-1">{value.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Timeline Section with Sticky Scroll Effect */}
      <section className="py-20 md:py-32 bg-muted/20 overflow-hidden" id="timeline" ref={timelineRef} aria-labelledby="timeline-heading">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            animate={isTimelineInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <div className="inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary mb-4">
              Our Journey
            </div>
            <h2 id="timeline-heading" className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Key Milestones</h2>
            <p className="text-lg text-muted-foreground">
              From our humble beginnings to where we are today, here&apos;s how our story has unfolded.
            </p>
          </motion.div>
          
          {/* Timeline with sticky effect */}
          <div className="relative ml-4 md:ml-0">
            {/* Timeline center line */}
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-border transform md:-translate-x-px"></div>
            
            {/* Timeline events */}
            <div className="space-y-20">
              {milestones.map((milestone, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  animate={isTimelineInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                  transition={{ duration: 0.6, delay: 0.15 * index }}
                  className={`relative flex flex-col md:items-center md:flex-row ${
                    index % 2 === 0 ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-0 md:left-1/2 top-6 w-5 h-5 rounded-full bg-primary border-4 border-background transform -translate-x-1/2"></div>
                  
                  {/* Content */}
                  <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pr-12 lg:pr-20' : 'md:pl-12 lg:pl-20'}`}>
                    <div className="bg-card border border-border rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300">
                      <div className="text-2xl font-bold text-primary mb-2">{milestone.year}</div>
                      <h3 className="text-xl font-semibold mb-2">{milestone.title}</h3>
                      <p className="text-muted-foreground">{milestone.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <section className="py-24 md:py-32 overflow-hidden relative">
        {/* Background elements */}
        <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-muted/30 to-transparent -z-10"></div>
        <motion.div 
          className="absolute top-1/4 right-1/4 w-64 h-64 rounded-full bg-primary/5 blur-3xl -z-10"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3] 
          }}
          transition={{ 
            duration: 8, 
            repeat: Infinity,
            ease: "easeInOut" 
          }}
        />
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, amount: 0.3 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <div className="inline-block rounded-full bg-primary/10 px-5 py-2 text-sm font-medium text-primary mb-4">
              Client Testimonials
            </div>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">What Our <span className="text-primary">Clients Say</span></h2>
            <div className="w-24 h-1.5 bg-primary/30 rounded-full mx-auto mb-8"></div>
            <p className="text-lg md:text-xl text-muted-foreground">
              Dont just take our word for it—hear what our clients have to say about working with RTN Global.
            </p>
          </motion.div>
          
          {/* Testimonial Carousel */}
          <div className="mt-16">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  quote: "RTN Global transformed our digital presence completely. Their strategic approach and technical expertise delivered results beyond our expectations.",
                  author: "Sarah Johnson",
                  position: "Marketing Director, TechFusion Inc.",
                  image: "/images/testimonial-1.jpg"
                },
                {
                  quote: "Working with RTN Global has been a game-changer for our business. Their team understood our needs perfectly and delivered a solution that has significantly increased our conversion rates.",
                  author: "Michael Chen",
                  position: "CEO, Innovate Solutions",
                  image: "/images/testimonial-2.jpg"
                },
                {
                  quote: "The team at RTN Global provided exceptional service from start to finish. Their attention to detail and commitment to quality is unmatched in the industry.",
                  author: "Emily Rodriguez",
                  position: "COO, Global Connect",
                  image: "/images/testimonial-3.jpg"
                }
              ].map((testimonial, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                  viewport={{ once: true, amount: 0.3 }}
                  whileHover={{ y: -10, transition: { duration: 0.2 } }}
                  className="bg-card border border-border rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col h-full"
                >
                  {/* Quote mark */}
                  <div className="text-primary text-7xl font-serif leading-none mb-4 opacity-20">&quot;</div>
                  
                  <p className="flex-grow text-lg leading-relaxed mb-8 italic">
                    {testimonial.quote}
                  </p>
                  
                  <div className="flex items-center">
                    <div className="relative w-12 h-12 rounded-full overflow-hidden mr-4 border-2 border-primary">
                      <OptimizedImage 
                        src={testimonial.image}
                        alt={testimonial.author}
                        fill 
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="font-semibold">{testimonial.author}</h4>
                      <p className="text-sm text-muted-foreground">{testimonial.position}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* Team Section */}
      <TeamSection />
      
      {/* CTA Section with Parallax */}
      <section className="py-20 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-primary/5"></div>
        <div className="absolute inset-0 bg-noise opacity-20"></div>
        
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="container relative mx-auto px-4 sm:px-6 lg:px-8"
        >
          <div className="bg-gradient-to-br from-primary to-primary/80 rounded-3xl p-10 md:p-16 text-primary-foreground text-center shadow-xl">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold"
            >
              Ready to Transform Your Digital Presence?
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className="mt-6 text-lg max-w-2xl mx-auto"
            >
              Let&apos;s discuss how we can help your business grow with our digital expertise.
              Our team is ready to bring your vision to life.
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              viewport={{ once: true }}
              className="mt-10 flex flex-wrap justify-center gap-4"
            >
              <Link href="/contact">
                <Button variant="secondary" size="lg" className="rounded-full">
                  Get in Touch
                </Button>
              </Link>
              <Link href="/services">
                <Button variant="outline" size="lg" className="rounded-full bg-transparent border-white/20 text-white hover:bg-white/10">
                  Our Services
                </Button>
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </section>
    </Layout>
  )
} 