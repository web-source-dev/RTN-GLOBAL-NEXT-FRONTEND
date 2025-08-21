"use client"

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import Script from 'next/script'
import { useSearchParams, useRouter } from 'next/navigation'
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
import { H1, H2, H3, H4, P, Lead } from '@/components/ui/typography'

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
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const searchParams = useSearchParams();
  const router = useRouter();
  const allServices = getAllServices();
  
  // Handle category from URL query parameter
  useEffect(() => {
    const categoryParam = searchParams.get('category');
    if (categoryParam) {
      setSelectedCategory(categoryParam);
      // Scroll to the category section after a short delay
      setTimeout(() => {
        const element = document.getElementById(categoryParam);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    } else {
      setSelectedCategory(null);
    }
  }, [searchParams]);

  // Update URL when category changes
  const handleCategoryChange = (categoryId: string | null) => {
    setSelectedCategory(categoryId);
    if (categoryId) {
      router.push(`/services?category=${categoryId}`);
    } else {
      router.push('/services');
    }
  };
  
  // Filter services based on search query and selected category
  const filteredServices = allServices.filter(service => {
    const matchesSearch = !searchQuery || 
      service.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      service.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      service.category.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesCategory = !selectedCategory || service.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });
  
  // Generate JSON-LD structured data for services page
  const servicesJsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "Our Services - RTN Global",
    "description": "We offer a comprehensive range of digital solutions to help your business thrive in the digital landscape.",
    "url": "https://rtnglobal.site/services",
    "provider": {
      "@type": "Organization",
      "name": "RTN Global",
      "url": "https://rtnglobal.site/",
              "logo": "https://rtnglobal.site/icons/rtnglobal-logo.png",
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
      "itemListElement": allServices.map((service, index) => ({
        "@type": "ListItem",
        "position": index + 1,
        "item": {
          "@type": "Service",
          "name": service.title,
          "description": service.description,
          "url": `https://rtnglobal.site/services/${service.slug}`,
          "provider": {
            "@type": "Organization",
            "name": "RTN Global"
          },
          "category": service.category
        }
      }))
    }
  };
  
  return (
    <Layout>
      {/* JSON-LD structured data */}
      <Script
        id="services-structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesJsonLd) }}
      />
      
      <HeroSection
        title="Our Services"
        subtitle="Digital Excellence"
        description="We offer a comprehensive range of digital solutions to help your business thrive in the digital landscape. From web development to digital marketing, we deliver results that drive growth."
        imageUrl="/images/hero/services-hero.jpg"
        backgroundClassName="bg-gradient-to-b from-muted/50 to-background"
        primaryCTA={{
          text: "Get Started",
          href: "/contact"
        }}
        secondaryCTA={{
          text: "View Portfolio",
          href: "/portfolio"
        }}
        features={[
          "Custom Web Development",
          "Digital Marketing Solutions", 
          "SEO & Performance Optimization",
          "24/7 Support & Maintenance"
        ]}
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
              <button
                onClick={() => handleCategoryChange(null)}
                className={`inline-flex items-center gap-2 px-4 py-2 rounded-full transition-colors ${
                  !selectedCategory 
                    ? 'bg-primary text-primary-foreground' 
                    : 'bg-card border border-border hover:bg-primary/5 hover:border-primary/20'
                }`}
              >
                <span className="text-sm font-medium">All Services</span>
              </button>
              {serviceCategories.map(category => (
                <button
                  key={category.id} 
                  onClick={() => handleCategoryChange(category.id)}
                  className={`inline-flex items-center gap-2 px-4 py-2 rounded-full transition-colors ${
                    selectedCategory === category.id 
                      ? 'bg-primary text-primary-foreground' 
                      : 'bg-card border border-border hover:bg-primary/5 hover:border-primary/20'
                  }`}
                >
                  <span className="text-primary">
                    <ServiceIcon iconType={category.icon as IconType} />
                  </span>
                  <span className="text-sm font-medium">{category.title}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* Services By Category */}
      {searchQuery || selectedCategory ? (
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <H2 className="mb-6">
              {searchQuery ? `Search Results (${filteredServices.length})` : 
               selectedCategory ? `${serviceCategories.find(c => c.id === selectedCategory)?.title} Services (${filteredServices.length})` : 
               'All Services'}
            </H2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredServices.map((service) => (
                <ServiceCard key={service.id} service={service} />
              ))}
            </div>
            {filteredServices.length === 0 && (
              <div className="text-center py-12">
                <H3 className="mb-2">No services found</H3>
                <P className="mb-6">
                  {searchQuery ? "Try adjusting your search query" : "No services in this category"}
                </P>
                <div className="flex gap-2 justify-center">
                  {searchQuery && (
                    <Button variant="outline" onClick={() => setSearchQuery("")}>
                      Clear Search
                    </Button>
                  )}
                  {selectedCategory && (
                    <Button variant="outline" onClick={() => handleCategoryChange(null)}>
                      View All Services
                    </Button>
                  )}
                </div>
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
            <H2>{title}</H2>
            <P>{description}</P>
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
          className="object-cover w-full h-full"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
        <div className="absolute bottom-0 left-0 p-6">
          <div className="inline-flex items-center px-3 py-1 bg-primary/90 rounded-full text-white text-xs font-medium mb-2">
            {service.category.charAt(0).toUpperCase() + service.category.slice(1)}
          </div>
          <H3 className="text-white">{service.title}</H3>
        </div>
      </div>
      <div className="p-6">
        <P className="mb-6">{service.description}</P>
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