"use client"

import { Layout } from "@/components/layout/layout"
import { HeroSection } from "@/components/sections/hero-section"
import { CTASection } from "@/components/sections/cta-section"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Filter } from "lucide-react"
import { useState } from "react"

import { portfolioItems } from "@/data/portfolio-items"
import { OptimizedImage } from "@/components/ui/optimized-image"

export default function PortfolioPage() {
  // Portfolio items

  // All categories from the portfolio items (unique)
  const categories = Array.from(new Set(portfolioItems.map(item => item.category)))
  
  // All industries from the portfolio items (unique), filtering out undefined values
  const industries = Array.from(new Set(portfolioItems.map(item => item.industry).filter(Boolean) as string[]))

  // State for active filters
  const [activeCategory, setActiveCategory] = useState<string>("All")
  const [activeIndustry, setActiveIndustry] = useState<string>("All Industries")
  
  // Filter the items based on selected category and industry
  const filteredItems = portfolioItems.filter(item => {
    const matchesCategory = activeCategory === "All" || item.category === activeCategory
    const matchesIndustry = activeIndustry === "All Industries" || (item.industry && item.industry === activeIndustry)
    return matchesCategory && matchesIndustry
  })

  return (
    <Layout>
      {/* Hero Section */}
      <HeroSection
        title="Our Portfolio"
        description="Explore our diverse portfolio of successful client projects across various industries and technologies. Each project represents our commitment to delivering exceptional results and innovative solutions."
        backgroundClassName="bg-muted/30"
      />

      {/* Filter Controls */}
      <section className="py-8 border-b border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <Filter className="h-5 w-5 text-muted-foreground" />
              <span className="text-sm font-medium">Filter:</span>
            </div>
            
            <div className="flex flex-wrap gap-2">
              <Button 
                size="sm" 
                variant={activeCategory === "All" ? "outline" : "ghost"} 
                className={`rounded-full ${activeCategory === "All" ? "bg-primary/10 border-primary/20" : ""}`}
                onClick={() => setActiveCategory("All")}
              >
                All Projects
              </Button>
              
              {categories.map(category => (
                <Button 
                  key={category} 
                  size="sm" 
                  variant={activeCategory === category ? "outline" : "ghost"} 
                  className={`rounded-full ${activeCategory === category ? "bg-primary/10 border-primary/20" : ""}`}
                  onClick={() => setActiveCategory(category)}
                >
                  {category}
                </Button>
              ))}
            </div>
            
            <div className="hidden md:flex flex-wrap gap-2">
              <span className="text-sm font-medium text-muted-foreground mr-2">Industry:</span>
              
              <Button 
                size="sm" 
                variant={activeIndustry === "All Industries" ? "outline" : "ghost"} 
                className={`rounded-full text-xs ${activeIndustry === "All Industries" ? "bg-primary/10 border-primary/20" : ""}`}
                onClick={() => setActiveIndustry("All Industries")}
              >
                All Industries
              </Button>
              
              {industries.filter(Boolean).map(industry => (
                <Button 
                  key={industry} 
                  size="sm" 
                  variant={activeIndustry === industry ? "outline" : "ghost"} 
                  className={`rounded-full text-xs ${activeIndustry === industry ? "bg-primary/10 border-primary/20" : ""}`}
                  onClick={() => setActiveIndustry(industry)}
                >
                  {industry}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {filteredItems.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredItems.map((item) => (
                <Link key={item.slug} href={`/portfolio/${item.slug}`} className="group">
                  <div className="overflow-hidden rounded-lg border border-border bg-card transition-all duration-200 hover:shadow-md">
                    {/* Project Image */}
                    <div className="aspect-video w-full bg-muted overflow-hidden relative">
                      <OptimizedImage
                        src={item.image}
                        fill
                        alt={item.title}
                        className="object-cover h-full transition-transform group-hover:scale-105 duration-500"
                      />
                    </div>
                    
                    {/* Project Info */}
                    <div className="p-6">
                      <div className="flex items-center justify-between mb-2">
                        <span className="px-2.5 py-0.5 bg-primary/10 text-primary text-xs font-medium rounded-full">
                          {item.category}
                        </span>
                        <span className="text-sm text-muted-foreground">
                          {item.year}
                        </span>
                      </div>
                      
                      <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors duration-200">
                        {item.title}
                      </h3>
                      
                      <p className="text-muted-foreground mb-4">
                        {item.description}
                      </p>
                      
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium">
                          {item.industry}
                        </span>
                        
                        <span className="text-sm font-medium text-primary flex items-center gap-1 group-hover:gap-2 transition-all duration-200">
                          View Project
                          <ArrowRight className="h-4 w-4" />
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <h3 className="text-xl font-medium mb-2">No projects match your filter criteria</h3>
              <p className="text-muted-foreground mb-6">Try adjusting your filters or browse all projects</p>
              <Button 
                variant="outline" 
                onClick={() => {
                  setActiveCategory("All")
                  setActiveIndustry("All Industries")
                }}
              >
                Reset Filters
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Project Process</h2>
            <p className="text-muted-foreground">
              Each project follows our proven process to ensure success, from initial discovery to launch and ongoing support.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Discovery Phase */}
            <div className="bg-card border border-border rounded-lg p-6 text-center">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <span className="text-xl font-bold text-primary">01</span>
              </div>
              <h3 className="text-lg font-bold mb-2">Discovery</h3>
              <p className="text-muted-foreground">
                We begin by understanding your business goals, target audience, and project requirements through in-depth consultation.
              </p>
            </div>
            
            {/* Strategy Phase */}
            <div className="bg-card border border-border rounded-lg p-6 text-center">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <span className="text-xl font-bold text-primary">02</span>
              </div>
              <h3 className="text-lg font-bold mb-2">Strategy</h3>
              <p className="text-muted-foreground">
                We develop a detailed project plan, wireframes, and technical specifications based on the discovery findings.
              </p>
            </div>
            
            {/* Design & Development */}
            <div className="bg-card border border-border rounded-lg p-6 text-center">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <span className="text-xl font-bold text-primary">03</span>
              </div>
              <h3 className="text-lg font-bold mb-2">Design & Development</h3>
              <p className="text-muted-foreground">
                Our team designs and builds your solution with regular check-ins and iterative feedback to ensure quality.
              </p>
            </div>
            
            {/* Launch & Support */}
            <div className="bg-card border border-border rounded-lg p-6 text-center">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <span className="text-xl font-bold text-primary">04</span>
              </div>
              <h3 className="text-lg font-bold mb-2">Launch & Support</h3>
              <p className="text-muted-foreground">
                We deploy your solution and provide ongoing support, monitoring, and optimization to ensure long-term success.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        title="Ready to Start Your Project?"
        description="Let's discuss how we can help you achieve your business goals with our expertise and proven process."
        primaryButton={{
          text: "Contact Us",
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