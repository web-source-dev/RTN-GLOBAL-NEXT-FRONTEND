"use client"

import React from "react"
import Link from "next/link"
import { serviceCategories, getAllServices } from "@/data/services"
import { Code, TrendingUp, PenTool, Settings, Search, FileText, Share2, Mail, Smartphone, ShoppingBag, Palette, BarChart } from "lucide-react"

type ServiceIconProps = {
  icon: string;
  className?: string;
}

const ServiceIcon = ({ icon, className }: ServiceIconProps) => {
  const iconSize = { width: 20, height: 20 };
  
  switch (icon) {
    case 'code': return <Code {...iconSize} className={className} />;
    case 'trending-up': return <TrendingUp {...iconSize} className={className} />;
    case 'pen-tool': return <PenTool {...iconSize} className={className} />;
    case 'settings': return <Settings {...iconSize} className={className} />;
    case 'search': return <Search {...iconSize} className={className} />;
    case 'file-text': return <FileText {...iconSize} className={className} />;
    case 'share2': return <Share2 {...iconSize} className={className} />;
    case 'mail': return <Mail {...iconSize} className={className} />;
    case 'smartphone': return <Smartphone {...iconSize} className={className} />;
    case 'shopping-bag': return <ShoppingBag {...iconSize} className={className} />;
    case 'palette': return <Palette {...iconSize} className={className} />;
    case 'bar-chart': return <BarChart {...iconSize} className={className} />;
    default: return <Settings {...iconSize} className={className} />;
  }
}

export function ServicesMegaMenu() {
  const featuredServices = getAllServices().filter(service => service.featured).slice(0, 2);
  
  return (
    <div className="absolute left-0 w-full bg-white shadow-lg rounded-b-lg py-6 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Categories */}
          <div className="col-span-1">
            <h3 className="text-lg font-semibold text-primary mb-4">Categories</h3>
            <ul className="space-y-3">
              {serviceCategories.map((category) => (
                <li key={category.id}>
                  <Link 
                    href={`/services/categories/${category.id}`}
                    className="flex items-center gap-2 text-foreground/80 hover:text-primary transition-colors"
                  >
                    <ServiceIcon icon={category.icon} className="text-primary" />
                    <span>{category.title}</span>
                  </Link>
                </li>
              ))}
              <li className="pt-2 mt-2 border-t">
                <Link 
                  href="/services"
                  className="font-medium text-primary hover:underline"
                >
                  View All Services
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Featured Services */}
          <div className="col-span-2">
            <h3 className="text-lg font-semibold text-primary mb-4">Featured Services</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {featuredServices.map((service) => (
                <div key={service.id} className="p-4 bg-muted/50 rounded-lg hover:bg-muted transition-colors">
                  <Link href={`/services/${service.slug}`}>
                    <div className="flex items-start gap-3">
                      <div className="mt-1 p-2 bg-primary/10 rounded-md">
                        <ServiceIcon icon={service.icon} className="text-primary" />
                      </div>
                      <div>
                        <h4 className="font-medium text-foreground">{service.title}</h4>
                        <p className="text-sm text-foreground/70 mt-1 line-clamp-2">{service.description}</p>
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
            
            <div className="mt-6 bg-primary/5 p-4 rounded-lg">
              <h4 className="font-medium text-primary">Need help choosing a service?</h4>
              <p className="text-sm text-foreground/70 mt-1">Our experts can analyze your needs and recommend the best solutions.</p>
              <Link 
                href="/contact/free-consultation" 
                className="inline-block text-sm font-medium text-primary hover:text-primary/80 mt-2"
              >
                Schedule a Free Consultation →
              </Link>
            </div>
          </div>
          
          {/* Popular Services */}
          <div className="col-span-1">
            <h3 className="text-lg font-semibold text-primary mb-4">Popular Services</h3>
            <ul className="space-y-3">
              {getAllServices().slice(0, 6).map((service) => (
                <li key={service.id}>
                  <Link 
                    href={`/services/${service.slug}`}
                    className="text-foreground/80 hover:text-primary transition-colors"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
} 