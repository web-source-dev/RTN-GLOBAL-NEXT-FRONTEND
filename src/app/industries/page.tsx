import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { getAllIndustries } from "@/data/industries";
import { OptimizedImage } from "@/components/ui/optimized-image";
import { Button } from "@/components/ui/button";
import { IndustryIcon } from "@/components/ui/industry-icon";
import { HeroSection } from "@/components/sections/hero-section";
import { Layout } from "@/components/layout/layout";

export default function IndustriesPage() {
  const industries = Object.values(getAllIndustries());
  
  // Featured industries for the hero section
  const featuredIndustries = [
    "Tailored solutions for specific industry needs",
    "Proven expertise across multiple sectors",
    "Technology that adapts to your business processes"
  ];

  return (
    <Layout>
      {/* JSON-LD structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            "name": "Industry Solutions - RTN Global",
            "description": "Explore our specialized industry solutions tailored to meet the unique challenges and opportunities in your sector.",
            "url": "https://rtnglobal.co/industries",
            "publisher": {
              "@type": "Organization",
              "name": "RTN Global",
              "url": "https://rtnglobal.co/",
              "logo": "https://rtnglobal.co/logo.png",
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
                "telephone": "+1 505 528 6780",
                "email": "info@rtnglobal.site"
              },
              "sameAs": [
                "https://www.instagram.com/rtnglobalofficial/",
                "https://www.threads.net/@rtnglobalofficial",
                "https://www.tiktok.com/@rtnglobalofficial",
                "https://web.facebook.com/people/RTN-Global/61573828870610/",
                "https://www.youtube.com/@RTNGlobal",
                "https://www.linkedin.com/in/rtnglobalofficial/"
              ]
            }
          })
        }}
      />
      {/* Hero Section */}
      <HeroSection
        title="Industry Solutions"
        subtitle="Specialized Expertise"
        description="We deliver customized digital strategies and solutions tailored to the unique challenges and opportunities in your industry."
        primaryCTA={{ text: "Discuss Your Project", href: "/contact" }}
        secondaryCTA={{ text: "Explore Services", href: "/services" }}
        features={featuredIndustries}
        imageUrl="/images/industries/industries-hero.jpg"
        backgroundClassName="bg-gradient-to-br from-background via-background to-primary/5"
      />

      {/* Industries Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Our Industry Expertise</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              We&apos;ve developed deep industry knowledge across multiple sectors, allowing us to deliver 
              solutions that address the specific challenges and opportunities in your field.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry) => (
              <Link 
                key={industry.slug} 
                href={`/industries/${industry.slug}`}
                className="group flex flex-col h-full overflow-hidden border border-border rounded-xl hover:shadow-lg transition-all duration-300"
              >
                <div className="relative h-48">
                  <OptimizedImage
                    src={industry.image}
                    fill
                    alt={industry.name}
                    className="object-cover transition-transform group-hover:scale-105 duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-white">{industry.name}</h3>
                    </div>
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                      <IndustryIcon iconType={industry.icon} />
                    </div>
                    <span className="text-sm font-medium text-muted-foreground">
                      {industry.services.length} Specialized Services
                    </span>
                  </div>
                  <p className="text-muted-foreground flex-grow mb-4">{industry.shortDescription}</p>
                  <div className="flex justify-between items-center mt-auto">
                    <span className="text-primary font-medium group-hover:underline">Learn More</span>
                    <ArrowRight className="h-5 w-5 text-primary transform group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      
      {/* Our Approach */}
      <section className="py-20 bg-primary/5">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Industry Approach</h2>
              <p className="text-lg text-muted-foreground mb-8">
                We combine deep industry knowledge with technological expertise to deliver solutions 
                that address your specific challenges and drive meaningful business outcomes.
              </p>
              
              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                    <span className="font-bold">1</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Industry Assessment</h3>
                    <p className="text-muted-foreground">
                      We analyze your industry&apos;s unique challenges, opportunities, and competitive landscape.
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                    <span className="font-bold">2</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Strategic Planning</h3>
                    <p className="text-muted-foreground">
                      We develop a tailored strategy that aligns technology solutions with your industry-specific goals.
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                    <span className="font-bold">3</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Specialized Implementation</h3>
                    <p className="text-muted-foreground">
                      We execute solutions with a deep understanding of your industry&apos;s regulatory requirements and best practices.
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                    <span className="font-bold">4</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Continuous Optimization</h3>
                    <p className="text-muted-foreground">
                      We monitor industry trends and evolve your solutions to maintain competitive advantage and compliance.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative h-[500px] rounded-xl overflow-hidden">
              <OptimizedImage
                src="/images/industries/industry-approach.jpg"
                fill
                alt="Our Industry Approach"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Industry?</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Contact us today to discuss how our industry-specific solutions can help your business thrive in a competitive landscape.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" className="rounded-full">Schedule a Consultation</Button>
            </Link>
            <Link href="/services">
              <Button size="lg" variant="outline" className="rounded-full">Explore Our Services</Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
} 