"use client"

import { Button } from "@/components/ui/button"
import { OptimizedImage } from "@/components/ui/optimized-image"
import Link from "next/link"
import { ArrowRight, ExternalLink, Clock, Award, Star } from "lucide-react"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

// Import portfolio items from the data file
import { portfolioItems } from "@/data/portfolio-items"

// Generate unique categories from the portfolio items
const uniqueCategories = ["All", ...Array.from(new Set(portfolioItems.map(item => item.category)))]

export function PortfolioSection() {
  const [activeCategory, setActiveCategory] = useState("All")
  
  const filteredItems = activeCategory === "All" 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeCategory)
  
  return (
    <section className="py-10 md:py-10" id="portfolio">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary mb-4">
            Our Portfolio
          </div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Featured Case Studies</h2>
          <p className="text-lg text-muted-foreground">
            Explore our latest projects and discover how we&apos;ve helped businesses achieve their digital goals.
          </p>
        </div>
        
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {uniqueCategories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-5 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                activeCategory === category
                  ? "bg-primary text-primary-foreground shadow-md"
                  : "bg-muted hover:bg-muted/80 text-foreground hover:shadow-sm"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="wait">
            {filteredItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.3 }}
                layout
              >
                <div 
                  className={`group relative bg-card rounded-xl overflow-hidden border border-border shadow-sm hover:shadow-md transition-all duration-300 block h-full ${
                    item.featured ? "ring-2 ring-primary/20" : ""
                  }`}
                >
                  <div className="relative h-64 w-full">
                    <OptimizedImage
                      src={item.image}
                      fill
                      alt={item.title}
                      className="object-cover h-full transition-transform group-hover:scale-105 duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-primary/90 text-primary-foreground text-xs font-medium rounded-lg shadow-sm">
                        {item.category}
                      </span>
                    </div>
                    {item.featured && (
                      <div className="absolute top-4 right-4">
                        <span className="px-3 py-1 bg-amber-500/90 text-white text-xs font-medium rounded-lg shadow-sm flex items-center">
                          <Star className="h-3 w-3 mr-1 fill-white" />
                          Featured
                        </span>
                      </div>
                    )}
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-4">
                      {item.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {item.tags.slice(0, 3).map((tag, tagIndex) => (
                        <span 
                          key={tagIndex} 
                          className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-md"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Stats */}
                    <div className="grid grid-cols-3 gap-2 mb-4 text-xs border-t border-border pt-4">
                      <div className="flex flex-col items-center text-center">
                        <Award className="h-4 w-4 text-primary mb-1" />
                        <span className="text-muted-foreground">Performance</span>
                        <span className="font-medium">{item.stats.performance}</span>
                      </div>
                      <div className="flex flex-col items-center text-center">
                        <Clock className="h-4 w-4 text-primary mb-1" />
                        <span className="text-muted-foreground">Duration</span>
                        <span className="font-medium">{item.stats.duration}</span>
                      </div>
                      <div className="flex flex-col items-center text-center">
                        <Star className="h-4 w-4 text-primary mb-1" />
                        <span className="text-muted-foreground">Satisfaction</span>
                        <span className="font-medium">{item.stats.satisfaction.split('(')[0]}</span>
                      </div>
                    </div>

                    <Link 
                      href={`/portfolio/${item.title.toLowerCase().replace(/\s+/g, '-')}`}
                      className="flex items-center justify-center w-full bg-primary/10 hover:bg-primary/20 text-primary text-sm font-medium py-2 rounded-lg transition-colors"
                    >
                      View Case Study <ExternalLink className="ml-2 h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
        
        <div className="flex justify-center mt-10">
          <Link href="/portfolio">
            <Button variant="outline" className="rounded-lg shadow-sm">
              View All Work <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
} 