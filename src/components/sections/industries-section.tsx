"use client"

import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { OptimizedImage } from "@/components/ui/optimized-image";
import { IndustryIcon } from "@/components/ui/industry-icon";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { getAllIndustries } from "@/data/industries";

export function IndustriesSection() {
  const industries = Object.values(getAllIndustries());
  
  // Select a few industries to display
  const displayedIndustries = industries.slice(0, 6);
  
  // Get a sample case study from each industry
  const industryCaseStudies = displayedIndustries.map(industry => {
    if (industry.caseStudies.length > 0) {
      return {
        industry: industry.name,
        industrySlug: industry.slug,
        caseStudy: industry.caseStudies[0]
      };
    }
    return null;
  }).filter(Boolean) as Array<{
    industry: string;
    industrySlug: string;
    caseStudy: {
      title: string;
      slug: string;
      client: string;
      description: string;
      image: string;
      results: Array<{ label: string; value: string }>;
    };
  }>;
  
  // Select up to 3 case studies to display
  const featuredCaseStudies = industryCaseStudies.slice(0, 3);

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold mb-4">Industries We Serve</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              We specialize in delivering tailored digital solutions across various industries,
              each with unique challenges and opportunities.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {displayedIndustries.map((industry, index) => (
            <motion.div
              key={industry.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
            >
              <Link
                href={`/industries/${industry.slug}`}
                className="group flex flex-col h-full overflow-hidden rounded-xl border border-border hover:shadow-md transition-all duration-300"
              >
                <div className="flex items-center gap-4 p-6 border-b border-border bg-muted/20">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                    <IndustryIcon iconType={industry.icon} />
                  </div>
                  <h3 className="text-xl font-bold">{industry.name}</h3>
                </div>
                <div className="p-6 flex-grow">
                  <p className="text-muted-foreground">{industry.shortDescription}</p>
                </div>
                <div className="px-6 pb-6 mt-auto">
                  <div className="flex justify-between items-center">
                    <span className="font-medium text-primary group-hover:underline">Discover {industry.name} Solutions</span>
                    <ArrowRight className="h-5 w-5 text-primary transform group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Link href="/industries">
              <Button size="lg" className="rounded-full">
                Explore All Industries <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 