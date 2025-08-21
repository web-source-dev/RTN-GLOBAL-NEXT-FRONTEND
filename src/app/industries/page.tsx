import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { getAllIndustries } from "@/data/industries";
import { OptimizedImage } from "@/components/ui/optimized-image";
import { Button } from "@/components/ui/button";
import { IndustryIcon } from "@/components/ui/industry-icon";
import { HeroSection } from "@/components/sections/hero-section";
import { Layout } from "@/components/layout/layout";
import { H1, H2, H3, H4, P, Lead } from "@/components/ui/typography";

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
            "url": "https://rtnglobal.site/industries",
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
        imageUrl="/images/hero/industries-heroSection.jpg"
        backgroundClassName="bg-gradient-to-br from-background via-background to-primary/5"
      />

      {/* Industries Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <H2 className="mb-4">Our Industry Expertise</H2>
            <Lead className="max-w-3xl mx-auto">
              We&apos;ve developed deep industry knowledge across multiple sectors, allowing us to deliver 
              solutions that address the specific challenges and opportunities in your field.
            </Lead>
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
                    className="object-cover transition-transform group-hover:scale-105 duration-500 w-full h-full"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                    <div className="p-6">
                      <H3 className="text-white">{industry.name}</H3>
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
                  <P className="flex-grow mb-4">{industry.shortDescription}</P>
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
              <H2 className="mb-6">Our Industry Approach</H2>
                              <Lead className="mb-8">
                  We combine deep industry knowledge with technological expertise to deliver solutions 
                  that address your specific challenges and drive meaningful business outcomes.
                </Lead>
              
              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                    <span className="font-bold">1</span>
                  </div>
                  <div>
                    <H3 className="mb-2">Industry Assessment</H3>
                                          <P>
                        We analyze your industry&apos;s unique challenges, opportunities, and competitive landscape.
                      </P>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                    <span className="font-bold">2</span>
                  </div>
                  <div>
                    <H3 className="mb-2">Strategic Planning</H3>
                                          <P>
                        We develop a tailored strategy that aligns technology solutions with your industry-specific goals.
                      </P>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                    <span className="font-bold">3</span>
                  </div>
                  <div>
                    <H3 className="mb-2">Specialized Implementation</H3>
                                          <P>
                        We execute solutions with a deep understanding of your industry&apos;s regulatory requirements and best practices.
                      </P>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                    <span className="font-bold">4</span>
                  </div>
                  <div>
                    <H3 className="mb-2">Continuous Optimization</H3>
                                          <P>
                        We monitor industry trends and evolve your solutions to maintain competitive advantage and compliance.
                      </P>
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
          <H2 className="mb-4">Ready to Transform Your Industry?</H2>
                      <Lead className="max-w-2xl mx-auto mb-8">
              Contact us today to discuss how our industry-specific solutions can help your business thrive in a competitive landscape.
            </Lead>
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