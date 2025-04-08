"use client"

import React from "react"
import Link from "next/link"
import Image from "next/image"
import { getAllIndustries } from "@/data/industries"
import { Building2, ShoppingBag, Briefcase, Stethoscope, GraduationCap, Home, ArrowRight } from "lucide-react"

type IndustryIconProps = {
  icon: string;
  className?: string;
}

const IndustryIcon = ({ icon, className }: IndustryIconProps) => {
  const iconSize = { width: 20, height: 20 };
  
  switch (icon) {
    case 'building2': return <Building2 {...iconSize} className={className} />;
    case 'shopping-bag': return <ShoppingBag {...iconSize} className={className} />;
    case 'briefcase': return <Briefcase {...iconSize} className={className} />;
    case 'stethoscope': return <Stethoscope {...iconSize} className={className} />;
    case 'graduation-cap': return <GraduationCap {...iconSize} className={className} />;
    case 'home': return <Home {...iconSize} className={className} />;
    default: return <Building2 {...iconSize} className={className} />;
  }
}

export function IndustriesMegaMenu() {
  const industries = getAllIndustries();
  const featuredIndustry = industries[0]; // Just taking the first one for featured
  
  return (
    <div className="absolute left-0 w-full bg-white shadow-lg rounded-b-lg py-6 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* Industries List - 1/3 width */}
          <div className="md:col-span-4">
            <h3 className="text-lg font-semibold text-primary mb-4">Industries We Serve</h3>
            <div className="grid grid-cols-2 gap-x-4 gap-y-3">
              {industries.slice(0, 12).map((industry) => (
                <Link 
                  key={industry.id}
                  href={`/industries/${industry.slug}`}
                  className="flex items-center gap-2 text-foreground/80 hover:text-primary transition-colors py-1"
                >
                  <IndustryIcon icon={industry.icon} className="text-primary" />
                  <span>{industry.name}</span>
                </Link>
              ))}
            </div>
            <div className="mt-4 pt-3 border-t">
              <Link 
                href="/industries"
                className="font-medium text-primary hover:underline"
              >
                View All Industries
              </Link>
            </div>
          </div>
          
          {/* Featured Industry - 2/3 width */}
          <div className="md:col-span-8 bg-muted/20 rounded-lg overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <IndustryIcon icon={featuredIndustry.icon} className="text-primary" />
                  <h3 className="text-lg font-semibold">{featuredIndustry.name}</h3>
                </div>
                <p className="text-sm text-foreground/70 mb-4">
                  {featuredIndustry.longDescription.substring(0, 200)}...
                </p>
                <h4 className="font-medium text-foreground mt-4 mb-2">Key Solutions:</h4>
                <ul className="space-y-1 text-sm">
                  {featuredIndustry.services.slice(0, 3).map((service, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-primary text-lg leading-tight">•</span>
                      <span>{service.title}</span>
                    </li>
                  ))}
                </ul>
                <Link 
                  href={`/industries/${featuredIndustry.slug}`}
                  className="inline-block mt-4 text-sm font-medium text-primary hover:underline"
                >
                  Learn more about our {featuredIndustry.name} solutions <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
              <div className="relative h-full min-h-[250px] bg-muted">
                <Image
                  src={featuredIndustry.image}
                  alt={featuredIndustry.name}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 