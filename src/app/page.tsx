import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle2, ChevronRight, Code, Palette, Bug, Puzzle, ShoppingBag } from "lucide-react"
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
        {/* Hero Section - Enhanced copy focused on core services */}
        <section className="relative min-h-[85vh] bg-gradient-to-br from-background via-background to-muted/30 pt-10 pb-10 md:pb-10 overflow-hidden">
          {/* Static background */}
          <div className="absolute inset-0 bg-grid-pattern opacity-[0.02] pointer-events-none" />
          
          <div className="container relative">
            <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
              <div className="order-2 md:order-1">
                {/* Updated badge for clearer service offering */}
                <div className="inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary mb-6">
                  Expert Web Development & Design Agency
                </div>
                
                {/* This is the LCP element - optimized for faster rendering with more specific copy */}
                <h1 className="text-3xl md:text-4xl xl:text-5xl font-bold tracking-tight mb-6 leading-tight">
                  Custom Web Solutions That <span className="text-primary">Drive Business Growth</span>
                </h1>
                
                <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-lg">
                  From stunning websites to custom applications, we deliver results-focused digital solutions that help your business stand out and succeed online.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 mb-10">
                  <Link href={`${process.env.NEXT_PUBLIC_ORDERS_URL}`} aria-label="Start your project with RTN Global">
                    <Button size="lg" className="w-full sm:w-auto gap-2 rounded-lg shadow-lg shadow-primary/20 hover:scale-105 transition-all duration-300">
                      Start Your Project <ArrowRight className="h-4 w-4" />
                    </Button>
                  </Link>
                  <Link href="/contact/free-consultation" aria-label="Get a free consultation">
                    <Button size="lg" variant="outline" className="w-full sm:w-auto rounded-lg hover:bg-white/50 hover:scale-105 hover:text-black transition-all duration-300">
                      Free Consultation
                    </Button>
                  </Link>
                </div>
                
                <div className="flex flex-col gap-3">
                  {[
                    "Custom web development tailored to your needs",
                    "Professional UI/UX design that converts visitors",
                    "Expert Wix development and bug fixes",
                    "Strategic solutions for business growth",
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
              </div>
            </div>
          </div>
        </section>

        {/* Services Section - Most important section placed first */}
        <ServicesSection />

        {/* Process Section - How we work */}
        <ProcessSection />

        {/* Portfolio/Case Studies - Show our work */}
        <PortfolioSection />

        {/* Brands We Work With - Social proof */}
        <BrandsWeWork />
        
        {/* Technologies We Use */}
        <TechnologiesSection />

        {/* Benefits Section */}
        <BenefitsSection />
        
        {/* Core Services Feature Cards - NEW SECTION */}
        <section className="py-16 bg-muted/20">
          <div className="container mx-auto">
            <div className="text-center mb-12">
              <div className="inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary mb-4">
                Our Expertise
              </div>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Core Services at a Glance</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Discover the key services that have helped our clients achieve remarkable digital success.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Web Development */}
              <div className="bg-card rounded-xl p-6 border border-border hover:shadow-md transition-all duration-300 group">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-4">
                  <Code className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">Web Development</h3>
                <p className="text-muted-foreground mb-4">
                  Custom, responsive websites built with modern technologies that drive business results.
                </p>
                <Link href="/services/web-development" className="text-primary text-sm flex items-center hover:underline">
                  Learn More <ArrowRight className="ml-1 h-3.5 w-3.5" />
                </Link>
              </div>
              
              {/* Design */}
              <div className="bg-card rounded-xl p-6 border border-border hover:shadow-md transition-all duration-300 group">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-4">
                  <Palette className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">UI/UX Design</h3>
                <p className="text-muted-foreground mb-4">
                  Beautiful, intuitive designs that enhance user experience and strengthen your brand.
                </p>
                <Link href="/services/ui-ux-design" className="text-primary text-sm flex items-center hover:underline">
                  Learn More <ArrowRight className="ml-1 h-3.5 w-3.5" />
                </Link>
              </div>
              
              {/* Bug Fixes */}
              <div className="bg-card rounded-xl p-6 border border-border hover:shadow-md transition-all duration-300 group">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-4">
                  <Bug className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">Bug Fixes</h3>
                <p className="text-muted-foreground mb-4">
                  Quick and effective solutions to fix website bugs and performance issues.
                </p>
                <Link href="/services/bug-fixes" className="text-primary text-sm flex items-center hover:underline">
                  Learn More <ArrowRight className="ml-1 h-3.5 w-3.5" />
                </Link>
              </div>
              
              {/* Custom Solutions */}
              <div className="bg-card rounded-xl p-6 border border-border hover:shadow-md transition-all duration-300 group">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-4">
                  <Puzzle className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">Custom Solutions</h3>
                <p className="text-muted-foreground mb-4">
                  Tailored digital solutions that address your specific business challenges.
                </p>
                <Link href="/services/custom-solutions" className="text-primary text-sm flex items-center hover:underline">
                  Learn More <ArrowRight className="ml-1 h-3.5 w-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Blog Highlights - Content marketing */}
        <BlogHighlightsSection />
        
        {/* CTA Section - Static version */}
        <section className="py-14 md:py-20 bg-primary relative overflow-hidden">
          <div className="container relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Transform Your Digital Presence?
              </h2>
              
              <p className="text-xl text-white/90 mb-8">
                Let&apos;s discuss how we can help you achieve your business goals with our custom web development and design services.
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

      {/* Structured Data for SEO - enhanced with our specific services */}
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
            "description": "RTN Global delivers exceptional web development and design services, including Wix development, bug fixes, and custom solutions for businesses of all sizes.",
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
            "knowsAbout": ["Web Development", "UI/UX Design", "Wix Development", "Bug Fixes", "Custom Solutions", "E-commerce"]
          })
        }}
      />
    </div>
  )
}
