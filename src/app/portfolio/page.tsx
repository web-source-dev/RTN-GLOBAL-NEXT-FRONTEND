"use client"

import { Layout } from "@/components/layout/layout"

import { CTASection } from "@/components/sections/cta-section"
import Link from "next/link"
import Script from "next/script"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { 
  ArrowRight, 
  Filter, 
  Star, 
  Clock, 
  TrendingUp, 
  Users, 
  Eye,
  Calendar,
  Building,
  Code,
  Palette,
  Settings
} from "lucide-react"
import { useState } from "react"
import { H1, H2, H3, P, Lead } from "@/components/ui/typography"

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

  // Get featured projects
  const featuredProjects = portfolioItems.filter(item => item.featured).slice(0, 3)

  return (
    <Layout>
      {/* JSON-LD structured data */}
      <Script
        id="portfolio-structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            "name": "Portfolio - RTN Global",
            "description": "Explore our diverse portfolio of successful client projects across various industries and technologies.",
            "url": "https://rtnglobal.site/portfolio",
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
              }
            },
            "mainEntity": {
              "@type": "ItemList",
              "itemListElement": portfolioItems.map((item, index) => ({
                "@type": "ListItem",
                "position": index + 1,
                "item": {
                  "@type": "CreativeWork",
                  "name": item.title,
                  "description": item.description,
                  "image": item.image,
                  "url": `https://rtnglobal.site/portfolio/${item.slug}`,
                  "dateCreated": `${item.year}`,
                  "genre": item.category,
                  "about": item.industry
                }
              }))
            }
          })
        }}
      />
      
      {/* Enhanced Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-primary/5 via-background to-primary/10 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="px-4 py-2 text-sm font-medium bg-primary/10 text-primary mb-6">
              🎯 Our Success Stories
            </Badge>
            <H1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Portfolio of Excellence
            </H1>
            <Lead className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Explore our diverse collection of successful projects that showcase our expertise in web development, 
              design, and digital solutions across various industries.
            </Lead>
            
            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
              <div className="bg-card border border-border rounded-xl p-6 text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Star className="h-6 w-6 text-primary" />
                </div>
                <div className="text-2xl font-bold text-primary mb-1">{portfolioItems.length}+</div>
                <div className="text-sm text-muted-foreground">Projects Completed</div>
              </div>
              <div className="bg-card border border-border rounded-xl p-6 text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <div className="text-2xl font-bold text-primary mb-1">100%</div>
                <div className="text-sm text-muted-foreground">Client Satisfaction</div>
              </div>
              <div className="bg-card border border-border rounded-xl p-6 text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <TrendingUp className="h-6 w-6 text-primary" />
                </div>
                <div className="text-2xl font-bold text-primary mb-1">245%</div>
                <div className="text-sm text-muted-foreground">Average ROI</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      {featuredProjects.length > 0 && (
        <section className="py-16 bg-gradient-to-br from-muted/30 via-background to-muted/20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center mb-12">
              <Badge className="px-4 py-2 text-sm font-medium bg-primary/10 text-primary mb-4">
                ⭐ Featured Projects
              </Badge>
              <H2 className="text-4xl font-bold mb-4">Showcase Highlights</H2>
              <P className="text-lg text-muted-foreground">
                Discover our most impactful projects that demonstrate our commitment to excellence and innovation.
              </P>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredProjects.map((item) => (
                <Card key={item.slug} className="group overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="relative overflow-hidden">
                    <OptimizedImage
                      src={item.image}
                      width={400}
                      height={250}
                      alt={item.title}
                      className="w-full h-48 object-cover transition-transform group-hover:scale-110 duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-primary text-white">
                        Featured
                      </Badge>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <Badge variant="outline" className="text-xs">
                        {item.category}
                      </Badge>
                      <span className="text-sm text-muted-foreground flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        {item.year}
                      </span>
                    </div>
                    
                    <H3 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors">
                      {item.title}
                    </H3>
                    
                    <P className="text-sm text-muted-foreground mb-4 line-clamp-2">
                      {item.description}
                    </P>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-muted-foreground flex items-center gap-1">
                        <Building className="h-3 w-3" />
                        {item.industry}
                      </span>
                      <Link href={`/portfolio/${item.slug}`}>
                        <Button size="sm" variant="ghost" className="group-hover:bg-primary group-hover:text-white transition-colors">
                          View Project
                          <ArrowRight className="h-4 w-4 ml-1" />
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Enhanced Filter Controls */}
      <section className="py-8 bg-card border-b border-border sticky top-0 z-40 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-primary/10 rounded-lg">
                <Filter className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold">Filter Projects</h3>
                <p className="text-sm text-muted-foreground">
                  {filteredItems.length} of {portfolioItems.length} projects
                </p>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-3">
              {/* Category Filters */}
            <div className="flex flex-wrap gap-2">
              <Button 
                size="sm" 
                  variant={activeCategory === "All" ? "default" : "outline"} 
                  className="rounded-full"
                onClick={() => setActiveCategory("All")}
              >
                All Projects
              </Button>
              
              {categories.map(category => (
                <Button 
                  key={category} 
                  size="sm" 
                    variant={activeCategory === category ? "default" : "outline"} 
                    className="rounded-full"
                  onClick={() => setActiveCategory(category)}
                >
                  {category}
                </Button>
              ))}
            </div>
            
              {/* Industry Filters */}
              <div className="flex flex-wrap gap-2">
              <Button 
                size="sm" 
                  variant={activeIndustry === "All Industries" ? "default" : "outline"} 
                  className="rounded-full text-xs"
                onClick={() => setActiveIndustry("All Industries")}
              >
                All Industries
              </Button>
              
              {industries.filter(Boolean).map(industry => (
                <Button 
                  key={industry} 
                  size="sm" 
                    variant={activeIndustry === industry ? "default" : "outline"} 
                    className="rounded-full text-xs"
                  onClick={() => setActiveIndustry(industry)}
                >
                  {industry}
                </Button>
              ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Portfolio Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          {filteredItems.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredItems.map((item) => (
                <Card key={item.slug} className="group overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                  <Link href={`/portfolio/${item.slug}`}>
                    <div className="relative overflow-hidden">
                      <OptimizedImage
                        src={item.image}
                        width={400}
                        height={250}
                        alt={item.title}
                        className="w-full h-48 object-cover transition-transform group-hover:scale-110 duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <div className="absolute top-4 left-4">
                        <Badge variant="outline" className="bg-white/90 text-foreground">
                          {item.category}
                        </Badge>
                      </div>
                      <div className="absolute top-4 right-4">
                        <Badge variant="outline" className="bg-white/90 text-foreground">
                          {item.year}
                        </Badge>
                      </div>
                      <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="p-2 bg-white/90 rounded-full">
                          <Eye className="h-4 w-4 text-foreground" />
                        </div>
                      </div>
                    </div>
                    
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between mb-3">
                        <Badge variant="secondary" className="text-xs">
                          {item.industry}
                        </Badge>
                        <div className="flex items-center gap-1 text-yellow-500">
                          <Star className="h-3 w-3 fill-current" />
                          <Star className="h-3 w-3 fill-current" />
                          <Star className="h-3 w-3 fill-current" />
                          <Star className="h-3 w-3 fill-current" />
                          <Star className="h-3 w-3 fill-current" />
                        </div>
                      </div>
                      
                      <H3 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors line-clamp-2">
                        {item.title}
                      </H3>
                      
                      <P className="text-sm text-muted-foreground mb-4 line-clamp-3">
                        {item.description}
                      </P>
                      
                      {/* Project Stats */}
                      <div className="grid grid-cols-2 gap-3 mb-4">
                        <div className="flex items-center gap-2 text-xs text-muted-foreground">
                          <Clock className="h-3 w-3" />
                          <span>{item.stats.duration}</span>
                        </div>
                        <div className="flex items-center gap-2 text-xs text-muted-foreground">
                          <TrendingUp className="h-3 w-3" />
                          <span>{item.stats.performance}</span>
                        </div>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium text-primary">
                          View Case Study
                        </span>
                        <ArrowRight className="h-4 w-4 text-primary group-hover:translate-x-1 transition-transform" />
                      </div>
                    </CardContent>
                </Link>
                </Card>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mx-auto mb-4">
                <Filter className="h-8 w-8 text-muted-foreground" />
              </div>
              <H3 className="text-xl font-medium mb-2">No projects match your filter criteria</H3>
              <P className="text-muted-foreground mb-6">Try adjusting your filters or browse all projects</P>
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

      {/* Enhanced Process Section */}
      <section className="py-20 bg-gradient-to-br from-muted/30 via-background to-muted/20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <Badge className="px-4 py-2 text-sm font-medium bg-primary/10 text-primary mb-4">
              🚀 Our Process
            </Badge>
            <H2 className="text-4xl font-bold mb-4">How We Deliver Excellence</H2>
            <Lead className="text-lg text-muted-foreground">
              Each project follows our proven process to ensure success, from initial discovery to launch and ongoing support.
            </Lead>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Discovery Phase */}
            <Card className="text-center border-0 shadow-lg hover:shadow-xl transition-all duration-300 group">
              <CardContent className="p-8">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <span className="text-2xl font-bold text-primary">01</span>
              </div>
                <H3 className="text-xl font-bold mb-3">Discovery</H3>
                <P className="text-muted-foreground">
                We begin by understanding your business goals, target audience, and project requirements through in-depth consultation.
                </P>
              </CardContent>
            </Card>
            
            {/* Strategy Phase */}
            <Card className="text-center border-0 shadow-lg hover:shadow-xl transition-all duration-300 group">
              <CardContent className="p-8">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <span className="text-2xl font-bold text-primary">02</span>
              </div>
                <H3 className="text-xl font-bold mb-3">Strategy</H3>
                <P className="text-muted-foreground">
                We develop a detailed project plan, wireframes, and technical specifications based on the discovery findings.
                </P>
              </CardContent>
            </Card>
            
            {/* Design & Development */}
            <Card className="text-center border-0 shadow-lg hover:shadow-xl transition-all duration-300 group">
              <CardContent className="p-8">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <span className="text-2xl font-bold text-primary">03</span>
              </div>
                <H3 className="text-xl font-bold mb-3">Design & Development</H3>
                <P className="text-muted-foreground">
                Our team designs and builds your solution with regular check-ins and iterative feedback to ensure quality.
                </P>
              </CardContent>
            </Card>
            
            {/* Launch & Support */}
            <Card className="text-center border-0 shadow-lg hover:shadow-xl transition-all duration-300 group">
              <CardContent className="p-8">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <span className="text-2xl font-bold text-primary">04</span>
              </div>
                <H3 className="text-xl font-bold mb-3">Launch & Support</H3>
                <P className="text-muted-foreground">
                We deploy your solution and provide ongoing support, monitoring, and optimization to ensure long-term success.
                </P>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <Badge className="px-4 py-2 text-sm font-medium bg-primary/10 text-primary mb-4">
              🛠️ Technologies We Use
            </Badge>
            <H2 className="text-4xl font-bold mb-4">Cutting-Edge Tech Stack</H2>
            <P className="text-lg text-muted-foreground">
              We leverage the latest technologies and frameworks to build robust, scalable, and high-performance solutions.
            </P>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {[
              { icon: Code, name: "React", color: "text-blue-500" },
              { icon: Code, name: "Next.js", color: "text-black" },
              { icon: Code, name: "Node.js", color: "text-green-500" },
              { icon: Code, name: "TypeScript", color: "text-blue-600" },
              { icon: Palette, name: "Tailwind CSS", color: "text-cyan-500" },
              { icon: Settings, name: "WordPress", color: "text-blue-600" },
            ].map((tech, index) => (
              <Card key={index} className="text-center border-0 shadow-md hover:shadow-lg transition-all duration-300 group">
                <CardContent className="p-6">
                  <div className={`w-12 h-12 rounded-lg bg-muted flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform ${tech.color}`}>
                    <tech.icon className="h-6 w-6" />
            </div>
                  <span className="text-sm font-medium">{tech.name}</span>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced CTA Section */}
      <CTASection
        title="Ready to Start Your Project?"
        description="Let's discuss how we can help you achieve your business goals with our expertise and proven process."
        primaryButton={{
          text: "Get Free Consultation",
          href: "/contact/free-consultation"
        }}
        secondaryButton={{
          text: "View Our Services",
          href: "/services"
        }}
        backgroundClassName="bg-gradient-to-br from-primary to-primary/80"
        textColorClassName="text-white"
      />
    </Layout>
  )
} 