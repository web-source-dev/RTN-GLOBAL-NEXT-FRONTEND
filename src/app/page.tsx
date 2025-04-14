import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle2, ChevronRight } from "lucide-react"
import { OptimizedImage } from "@/components/ui/optimized-image"
import { BenefitsSection } from "@/components/sections/benefits-section"
import { ProcessSection } from "@/components/sections/process-section"
import { PortfolioSection } from "@/components/sections/portfolio-section"
import { IndustriesSection } from "@/components/sections/industries-section"
import { TechnologiesSection } from "@/components/sections/technologies-section"
import { ClientsSection } from "@/components/sections/clients-section"
import { AwardsSection } from "@/components/sections/awards-section"
import { BlogHighlightsSection } from "@/components/sections/blog-highlights-section"
import ServicesSection from "@/components/sections/services-section"
import BrandsWeWork from "@/components/sections/BrandsWeWork"
export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Main Content */}
      <main className="flex-1">
        {/* Hero Section - Simplified for performance */}
        <section className="relative min-h-[85vh] bg-gradient-to-br from-background via-background to-muted/30 pt-10 pb-10 md:pb-10 overflow-hidden">
          {/* Static background instead of animated */}
          <div className="absolute inset-0 bg-grid-pattern opacity-[0.02] pointer-events-none" />
          
          <div className="container relative">
            <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
              <div className="order-2 md:order-1">
                {/* Preloaded badge for faster rendering */}
                <div className="inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary mb-6">
                  Web Development & Digital Marketing Agency
                </div>
                
                {/* This is the LCP element - optimized for faster rendering */}
                <h1 className="text-3xl md:text-4xl xl:text-5xl font-bold tracking-tight mb-6 leading-tight">
                  Transforming <span className="text-primary">Digital Experiences</span> for Growth-Focused Businesses
                </h1>
                
                <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-lg">
                  We design, develop, and optimize digital solutions that elevate your brand and drive real business results.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 mb-10">
                  <Link href={`${process.env.NEXT_PUBLIC_ORDERS_URL}`} aria-label="Start your project with RTN Global">
                    <Button size="lg" className="w-full sm:w-auto gap-2 rounded-lg shadow-lg shadow-primary/20 hover:scale-105 transition-all duration-300">
                      Start Your Project <ArrowRight className="h-4 w-4" />
                    </Button>
                  </Link>
                  <Link href="/portfolio" aria-label="View RTN Global's portfolio of work">
                    <Button size="lg" variant="outline" className="w-full sm:w-auto rounded-lg hover:bg-white/50 hover:scale-105 hover:text-black transition-all duration-300">
                      View Our Work
                    </Button>
                  </Link>
                </div>
                
                <div className="flex flex-col gap-3">
                  {[
                    "Free strategy consultation for new clients",
                    "Transparent pricing with no hidden fees",
                    "Dedicated support throughout your project",
                  ].map((item, index) => (
                    <div 
                      key={index}
                      className="flex items-center gap-2"
                    >
                      <div className="flex-shrink-0 h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center">
                        <CheckCircle2 className="h-4 w-4 text-primary" />
                      </div>
                      <p className="text-sm md:text-base">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="order-1 md:order-2 relative">
                <div className="bg-gradient-to-br from-primary/10 to-transparent rounded-3xl p-4 lg:p-6 relative z-10">
                  <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-primary/10">
                    <OptimizedImage
                      src="/images/hero-img.png"
                      width={600}
                      height={450}
                      alt="RTN Global digital solutions showcase"
                      className="object-cover w-full"
                      priority={true}
                      fetchPriority="high"
                      loading="eager"
                    />
                  </div>
                </div>
                {/* Removed decorative elements */}
              </div>
            </div>
          </div>
        </section>

        <BrandsWeWork />

        {/* All dynamic sections below - they remain client components */}
        <BenefitsSection />
        <ServicesSection /> 
        <ProcessSection />
        <PortfolioSection />
        <IndustriesSection />
        
        {/* Strategic Content Hub - NEW for improved internal linking */}
        <section className="py-16 bg-muted/20 border-y border-border">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Resources & Expertise</h2>
              <p className="text-muted-foreground max-w-3xl mx-auto">
                Explore our comprehensive guides, case studies, and industry insights to help your business succeed in the digital landscape.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Service Categories */}
              <div className="bg-card rounded-xl p-6 border border-border hover:shadow-md transition-all duration-300 group">
                <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">Service Categories</h3>
                <ul className="space-y-2 mb-4">
                  <li>
                    <Link href="/services?category=development" className="flex items-center text-muted-foreground hover:text-primary transition-colors">
                      <ChevronRight className="h-4 w-4 mr-1.5 text-primary" />
                      Web Development
                    </Link>
                  </li>
                  <li>
                    <Link href="/services?category=design" className="flex items-center text-muted-foreground hover:text-primary transition-colors">
                      <ChevronRight className="h-4 w-4 mr-1.5 text-primary" />
                      UI/UX Design
                    </Link>
                  </li>
                  <li>
                    <Link href="/services?category=marketing" className="flex items-center text-muted-foreground hover:text-primary transition-colors">
                      <ChevronRight className="h-4 w-4 mr-1.5 text-primary" />
                      Digital Marketing
                    </Link>
                  </li>
                  <li>
                    <Link href="/services?category=strategy" className="flex items-center text-muted-foreground hover:text-primary transition-colors">
                      <ChevronRight className="h-4 w-4 mr-1.5 text-primary" />
                      Business Strategy
                    </Link>
                  </li>
                </ul>
                <Link href="/services" className="text-primary text-sm flex items-center hover:underline">
                  View All Services <ArrowRight className="ml-1 h-3.5 w-3.5" />
                </Link>
              </div>
              
              {/* Top Industries */}
              <div className="bg-card rounded-xl p-6 border border-border hover:shadow-md transition-all duration-300 group">
                <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">Key Industries</h3>
                <ul className="space-y-2 mb-4">
                  <li>
                    <Link href="/industries/e-commerce" className="flex items-center text-muted-foreground hover:text-primary transition-colors">
                      <ChevronRight className="h-4 w-4 mr-1.5 text-primary" />
                      E-Commerce
                    </Link>
                  </li>
                  <li>
                    <Link href="/industries/healthcare" className="flex items-center text-muted-foreground hover:text-primary transition-colors">
                      <ChevronRight className="h-4 w-4 mr-1.5 text-primary" />
                      Healthcare
                    </Link>
                  </li>
                  <li>
                    <Link href="/industries/finance" className="flex items-center text-muted-foreground hover:text-primary transition-colors">
                      <ChevronRight className="h-4 w-4 mr-1.5 text-primary" />
                      Finance & Banking
                    </Link>
                  </li>
                  <li>
                    <Link href="/industries/education" className="flex items-center text-muted-foreground hover:text-primary transition-colors">
                      <ChevronRight className="h-4 w-4 mr-1.5 text-primary" />
                      Education
                    </Link>
                  </li>
                </ul>
                <Link href="/industries" className="text-primary text-sm flex items-center hover:underline">
                  View All Industries <ArrowRight className="ml-1 h-3.5 w-3.5" />
                </Link>
              </div>
              
              {/* Knowledge Resources */}
              <div className="bg-card rounded-xl p-6 border border-border hover:shadow-md transition-all duration-300 group">
                <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">Knowledge Center</h3>
                <ul className="space-y-2 mb-4">
                  <li>
                    <Link href="/knowledge-base/getting-started" className="flex items-center text-muted-foreground hover:text-primary transition-colors">
                      <ChevronRight className="h-4 w-4 mr-1.5 text-primary" />
                      Getting Started Guides
                    </Link>
                  </li>
                  <li>
                    <Link href="/knowledge-base/technical" className="flex items-center text-muted-foreground hover:text-primary transition-colors">
                      <ChevronRight className="h-4 w-4 mr-1.5 text-primary" />
                      Technical Resources
                    </Link>
                  </li>
                  <li>
                    <Link href="/knowledge-base/tutorials" className="flex items-center text-muted-foreground hover:text-primary transition-colors">
                      <ChevronRight className="h-4 w-4 mr-1.5 text-primary" />
                      Step-by-Step Tutorials
                    </Link>
                  </li>
                  <li>
                    <Link href="/knowledge-base/troubleshooting" className="flex items-center text-muted-foreground hover:text-primary transition-colors">
                      <ChevronRight className="h-4 w-4 mr-1.5 text-primary" />
                      Troubleshooting
                    </Link>
                  </li>
                </ul>
                <Link href="/knowledge-base" className="text-primary text-sm flex items-center hover:underline">
                  Browse Knowledge Base <ArrowRight className="ml-1 h-3.5 w-3.5" />
                </Link>
              </div>
              
              {/* Case Studies & Insights */}
              <div className="bg-card rounded-xl p-6 border border-border hover:shadow-md transition-all duration-300 group">
                <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">Success Stories</h3>
                <ul className="space-y-2 mb-4">
                  <li>
                    <Link href="/case-studies" className="flex items-center text-muted-foreground hover:text-primary transition-colors">
                      <ChevronRight className="h-4 w-4 mr-1.5 text-primary" />
                      Client Case Studies
                    </Link>
                  </li>
                  <li>
                    <Link href="/portfolio" className="flex items-center text-muted-foreground hover:text-primary transition-colors">
                      <ChevronRight className="h-4 w-4 mr-1.5 text-primary" />
                      Portfolio Showcase
                    </Link>
                  </li>
                  <li>
                    <Link href="/blog?category=success-stories" className="flex items-center text-muted-foreground hover:text-primary transition-colors">
                      <ChevronRight className="h-4 w-4 mr-1.5 text-primary" />
                      Transformation Stories
                    </Link>
                  </li>
                  <li>
                    <Link href="/resources" className="flex items-center text-muted-foreground hover:text-primary transition-colors">
                      <ChevronRight className="h-4 w-4 mr-1.5 text-primary" />
                      Resource Library
                    </Link>
                  </li>
                </ul>
                <Link href="/resources" className="text-primary text-sm flex items-center hover:underline">
                  Explore Resources <ArrowRight className="ml-1 h-3.5 w-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </section>
        
        <TechnologiesSection />
        <ClientsSection />
        <AwardsSection />
        <BlogHighlightsSection />
        
        {/* CTA Section - Static version */}
        <section className="py-14 md:py-20 bg-primary relative overflow-hidden">
          <div className="container relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Transform Your Digital Presence?
              </h2>
              
              <p className="text-xl text-white/90 mb-8">
                Let&apos;s discuss how we can help you achieve your business goals with our custom digital solutions.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" aria-label="Schedule a consultation with RTN Global">
                  <Button 
                    size="lg" 
                    variant="secondary" 
                    className="rounded-full w-full sm:w-auto hover:scale-105 transition-all duration-300"
                  >
                    Schedule a Consultation
                  </Button>
                </Link>
                <Link href="/portfolio" aria-label="View RTN Global's project portfolio">
                  <Button 
                    size="lg" 
                    variant="outline" 
                    className="bg-transparent text-white border-white hover:bg-white/10 hover:text-white rounded-full w-full sm:w-auto hover:scale-105 transition-all duration-300"
                  >
                    View Our Work
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Structured Data for SEO - updated with more comprehensive information */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "RTN Global",
            "url": "https://rtnglobal.co",
            "logo": "https://rtnglobal.co/logo.png",
            "sameAs": [
              "https://www.instagram.com/rtnglobalofficial/",
              "https://www.threads.net/@rtnglobalofficial/",
              "https://www.tiktok.com/@rtnglobalofficial",
              "https://web.facebook.com/people/RTN-Global/61573828870610/",
              "https://www.youtube.com/@RTNGlobal",
              "https://www.linkedin.com/in/rtnglobalofficial/"
            ],
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+1 505 528 6780",
              "contactType": "customer service",
              "email": "info@rtnglobal.site",
              "areaServed": "Worldwide"
            },
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "1209 MOUNTAIN ROAD PLNE, STE R",
              "addressLocality": "ALBUQUERQUE",
              "addressRegion": "NM",
              "postalCode": "87110",
              "addressCountry": "US"
            },
            "description": "RTN Global delivers exceptional web development and strategic digital marketing solutions including Wix, MERN stack, and React Native applications.",
            "potentialAction": {
              "@type": "SearchAction",
              "target": "https://rtnglobal.co/search?q={search_term_string}",
              "query-input": "required name=search_term_string"
            },
            "founder": {
              "@type": "Person",
              "name": "Muhammad Tayyab"
            },
            "foundingDate": "2020",
            "areaServed": ["United States", "Mexico", "Canada", "Europe", "Asia", "Australia"],
            "knowsAbout": ["Web Development", "Digital Marketing", "E-commerce", "UI/UX Design", "SEO"]
          })
        }}
      />
    </div>
  )
}
