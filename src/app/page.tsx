import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle2 } from "lucide-react"
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
type Client = {
  id: string
  name: string
  logo: string
  grayscale: string
  industry: string
}
const featuredClients: Client[] = [
  {
    id: "1",
    name: "TechCorp",
    logo: "/images/clients/client1.png",
    grayscale: "/images/clients/client1.png",
    industry: "Technology"
  },
  {
    id: "2",
    name: "GreenEnergy",
    logo: "/images/clients/client2.png",
    grayscale: "/images/clients/client2.png",
    industry: "Renewable Energy"
  },
  {
    id: "3",
    name: "MediHealth",
    logo: "/images/clients/client3.png",
    grayscale: "/images/clients/client3.png",
    industry: "Healthcare"
  },
  {
    id: "4",
    name: "FinanceHub",
    logo: "/images/clients/client6.jpg",
    grayscale: "/images/clients/client6.jpg",
    industry: "Finance"
  }
]
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
            
            <div className="mt-10 md:mt-16 pt-8 border-t border-border/40">
              <div className="text-center mb-14">
                <p className="text-sm uppercase tracking-wider text-muted-foreground font-semibold">Trusted by industry leaders</p>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 items-center justify-around">
                {featuredClients.map((client) => (
                  <div 
                    key={client.id} 
                    className="group w-32 h-32 md:w-40 md:h-40 relative rounded-full overflow-hidden border border-border/40 shadow-sm bg-card flex-shrink-0 hover:border-primary/50 transition-all duration-300 mx-auto"
                  >
                    <div className="absolute inset-0 opacity-100 group-hover:opacity-0 transition-opacity p-2">
                      <OptimizedImage
                        src={client.grayscale}
                        alt={`${client.name} - Client of RTN Global`}
                        fill
                        className="h-full object-contain"
                        sizes="(max-width: 768px) 80px, 160px"
                      />  
                    </div>
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity p-2">
                      <OptimizedImage
                        src={client.logo}
                        alt={`${client.name} - Client of RTN Global`}
                        fill
                        className="h-full object-contain"
                        sizes="(max-width: 768px) 80px, 160px"
                        loading="lazy"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* All dynamic sections below - they remain client components */}
        <BenefitsSection />
        <ServicesSection /> 
        <ProcessSection />
        <PortfolioSection />
        <IndustriesSection />
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
            "url": "https://rtnglobal.site",
            "logo": "https://rtnglobal.site/logo.png",
            "sameAs": [
              "https://twitter.com/rtnglobal",
              "https://linkedin.com/company/rtn-global",
              "https://facebook.com/rtnglobal",
              "https://instagram.com/rtnglobal"
            ],
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+15551234567",
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
              "target": "https://rtnglobal.site/search?q={search_term_string}",
              "query-input": "required name=search_term_string"
            },
            "founder": {
              "@type": "Person",
              "name": "RTN Global Founder"
            },
            "foundingDate": "2020",
            "areaServed": ["United States", "Canada", "Europe", "Asia", "Australia"],
            "knowsAbout": ["Web Development", "Digital Marketing", "E-commerce", "UI/UX Design", "SEO"]
          })
        }}
      />
    </div>
  )
}
