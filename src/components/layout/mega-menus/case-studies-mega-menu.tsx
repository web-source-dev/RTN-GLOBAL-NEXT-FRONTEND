"use client"

import React from "react"
import Link from "next/link"
import Image from "next/image"
import { getFeaturedCaseStudies, getUniqueIndustries, getUniqueServices } from "@/data/case-studies"

export function CaseStudiesMegaMenu() {
  const featuredCaseStudies = getFeaturedCaseStudies().slice(0, 2);
  const industries = getUniqueIndustries().filter(i => i !== "All Industries").slice(0, 6);
  const services = getUniqueServices().filter(s => s !== "All Services").slice(0, 6);
  
  return (
    <div className="absolute left-0 w-full bg-white shadow-lg rounded-b-lg py-6 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Featured Case Studies - 2/3 width */}
          <div className="md:col-span-2">
            <h3 className="text-lg font-semibold text-primary mb-4">Featured Case Studies</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {featuredCaseStudies.map((study) => (
                <Link 
                  key={study.slug}
                  href={`/case-studies/${study.slug}`}
                  className="group"
                >
                  <div className="relative w-full h-48 mb-3 overflow-hidden rounded-lg">
                    <Image
                      src={study.image}
                      alt={study.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent">
                      <div className="absolute bottom-0 left-0 p-4">
                        <span className="text-xs font-medium text-primary bg-white/90 px-2 py-1 rounded-full">
                          {study.industry}
                        </span>
                      </div>
                    </div>
                  </div>
                  <h4 className="font-medium text-foreground group-hover:text-primary transition-colors">
                    {study.title}
                  </h4>
                  <p className="text-sm text-foreground/70 mt-1 line-clamp-2">
                    {study.summary}
                  </p>
                </Link>
              ))}
            </div>
            <div className="mt-4 text-center">
              <Link 
                href="/case-studies"
                className="inline-block font-medium text-primary hover:underline"
              >
                View All Case Studies
              </Link>
            </div>
          </div>
          
          {/* Browse by Categories - 1/3 width */}
          <div className="md:col-span-1">
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-primary mb-3">Browse by Industry</h3>
              <div className="grid grid-cols-2 gap-2">
                {industries.map((industry, idx) => (
                  <Link 
                    key={idx}
                    href={`/case-studies?industry=${encodeURIComponent(industry)}`}
                    className="text-sm text-foreground/80 hover:text-primary transition-colors py-1"
                  >
                    {industry}
                  </Link>
                ))}
              </div>
              <Link 
                href="/case-studies#industries"
                className="inline-block text-xs font-medium text-primary hover:underline mt-2"
              >
                View All Industries
              </Link>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-primary mb-3">Browse by Service</h3>
              <div className="grid grid-cols-2 gap-2">
                {services.map((service, idx) => (
                  <Link 
                    key={idx}
                    href={`/case-studies?service=${encodeURIComponent(service)}`}
                    className="text-sm text-foreground/80 hover:text-primary transition-colors py-1"
                  >
                    {service}
                  </Link>
                ))}
              </div>
              <Link 
                href="/case-studies#services"
                className="inline-block text-xs font-medium text-primary hover:underline mt-2"
              >
                View All Services
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 