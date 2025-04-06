"use client"

import React, { useState } from 'react'
import Link from 'next/link'
import { Layout } from '@/components/layout/layout'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { motion } from 'framer-motion'
import { OptimizedImage } from '@/components/ui/optimized-image'
import { HeroSection } from '@/components/sections/hero-section'
import { CTASection } from '@/components/sections/cta-section'
import { 
  ArrowRight, 
  Search, 
  BarChart, 
  Code, 
  PenTool, 
  Settings, 
  SmartphoneIcon, 
  Mail, 
  FileText, 
  ShoppingBag, 
  Palette, 
  Share2, 
  TrendingUp 
} from 'lucide-react'
import { getAllServices, getServicesByCategory, serviceCategories, Service, IconType } from '@/data/services'

// Icon mapping component
const ServiceIcon = ({ iconType }: { iconType: IconType }) => {
  switch (iconType) {
    case 'code':
      return <Code className="h-5 w-5" />;
    case 'trending-up':
      return <TrendingUp className="h-5 w-5" />;
    case 'pen-tool':
      return <PenTool className="h-5 w-5" />;
    case 'settings':
      return <Settings className="h-5 w-5" />;
    case 'search':
      return <Search className="h-5 w-5" />;
    case 'file-text':
      return <FileText className="h-5 w-5" />;
    case 'share2':
      return <Share2 className="h-5 w-5" />;
    case 'mail':
      return <Mail className="h-5 w-5" />;
    case 'smartphone':
      return <SmartphoneIcon className="h-5 w-5" />;
    case 'shopping-bag':
      return <ShoppingBag className="h-5 w-5" />;
    case 'palette':
      return <Palette className="h-5 w-5" />;
    case 'bar-chart':
      return <BarChart className="h-5 w-5" />;
    default:
      return <Code className="h-5 w-5" />;
  }
};

export default function ServicesPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const allServices = getAllServices();
  
  // Filter services based on search query
  const filteredServices = searchQuery
    ? allServices.filter(service => 
        service.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        service.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        service.category.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : allServices;
  
  return (
    <Layout>
      <HeroSection
        title="Our Services"
        description="We offer a comprehensive range of digital solutions to help your business thrive in the digital landscape."
        backgroundClassName="bg-gradient-to-b from-muted/50 to-background"
      />
      
      {/* Search & Filter Section */}
      <section className="py-8 border-b border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="w-full md:w-96">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input 
                  type="text" 
                  placeholder="Search services..." 
                  className="pl-10 w-full" 
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </div>
            <div className="flex flex-wrap gap-2">
              {serviceCategories.map(category => (
                <a 
                  key={category.id} 
                  href={`#${category.id}`}
                  className="inline-flex items-center gap-2 px-4 py-2 bg-card border border-border rounded-full hover:bg-primary/5 hover:border-primary/20 transition-colors"
                >
                  <span className="text-primary">
                    <ServiceIcon iconType={category.icon as IconType} />
                  </span>
                  <span className="text-sm font-medium">{category.title}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* Services By Category */}
      {searchQuery ? (
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold mb-6">Search Results ({filteredServices.length})</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredServices.map((service) => (
                <ServiceCard key={service.id} service={service} />
              ))}
            </div>
            {filteredServices.length === 0 && (
              <div className="text-center py-12">
                <h3 className="text-xl font-medium mb-2">No services found</h3>
                <p className="text-muted-foreground mb-6">Try adjusting your search query</p>
                <Button variant="outline" onClick={() => setSearchQuery("")}>
                  Clear Search
                </Button>
              </div>
            )}
          </div>
        </section>
      ) : (
        <>
          {serviceCategories.map(category => (
            <ServiceCategorySection 
              key={category.id} 
              categoryId={category.id} 
              title={category.title} 
              description={category.description}
              iconType={category.icon}
            />
          ))}
        </>
      )}
      
      {/* CTA Section */}
      <CTASection
        title="Ready to Get Started?"
        description="Let's discuss how we can help you achieve your business goals with our expertise and proven process."
        primaryButton={{
          text: "Contact Us",
          href: "/contact"
        }}
        secondaryButton={{
          text: "View Portfolio",
          href: "/portfolio"
        }}
      />
    </Layout>
  )
}

// ServiceCategorySection component
function ServiceCategorySection({ 
  categoryId, 
  title, 
  description, 
  iconType 
}: { 
  categoryId: string; 
  title: string; 
  description: string; 
  iconType: string;
}) {
  const services = getServicesByCategory(categoryId);
  
  return (
    <section id={categoryId} className="py-16 scroll-mt-16 border-b border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-4 mb-6">
          <div className="bg-primary/10 p-3 rounded-full w-12 h-12 flex items-center justify-center">
            <ServiceIcon iconType={iconType as IconType} />
          </div>
          <div>
            <h2 className="text-2xl font-bold">{title}</h2>
            <p className="text-muted-foreground">{description}</p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </div>
    </section>
  )
}

// ServiceCard component
function ServiceCard({ service }: { service: Service }) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="bg-card rounded-lg shadow-md overflow-hidden border border-border hover:shadow-lg transition-shadow duration-300"
    >
      <div className="h-48 relative">
        <OptimizedImage 
          src={service.image} 
          alt={service.title}
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
        <div className="absolute bottom-0 left-0 p-6">
          <div className="inline-flex items-center px-3 py-1 bg-primary/90 rounded-full text-white text-xs font-medium mb-2">
            {service.category.charAt(0).toUpperCase() + service.category.slice(1)}
          </div>
          <h3 className="text-xl font-bold text-white">{service.title}</h3>
        </div>
      </div>
      <div className="p-6">
        <p className="text-muted-foreground mb-6">{service.description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {service.features.slice(0, 3).map((feature, index) => (
            <span key={index} className="px-2 py-0.5 bg-muted text-xs rounded">
              {feature.split(' ')[0]} {feature.split(' ')[1]}...
            </span>
          ))}
        </div>
        <div className="flex justify-between items-center pt-2 mt-4 border-t border-border">
          {service.investment && (
            <span className="text-sm text-muted-foreground">
              From <span className="font-medium text-foreground">{service.investment.startingAt}</span>
            </span>
          )}
          <Link href={`/services/${service.slug}`} className="inline-flex items-center text-primary hover:underline">
            Learn more <ArrowRight className="ml-1 h-4 w-4" />
          </Link>
        </div>
      </div>
    </motion.div>
  )
} 