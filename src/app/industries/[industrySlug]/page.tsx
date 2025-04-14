import React from "react";
import Link from "next/link";
import { Check, ExternalLink, ArrowRight, BookOpen, FileText, Briefcase } from "lucide-react";
import { getIndustryBySlug } from "@/data/industries";
import { OptimizedImage } from "@/components/ui/optimized-image";
import { Button } from "@/components/ui/button";
import { HeroSection } from "@/components/sections/hero-section";
import { Layout } from "@/components/layout/layout";

export default function IndustryPage({ params }: { params: { industrySlug: string } }) {
  const industry = getIndustryBySlug(params.industrySlug);

  if (!industry) {
    return (
      <Layout>
        <div className="container mx-auto py-20 px-4">
          <h1 className="text-3xl font-bold">Industry Not Found</h1>
          <p className="mt-4">Sorry, the industry you&apos;re looking for doesn&apos;t exist.</p>
          <Link href="/industries" className="mt-6 inline-block">
            <Button>View All Industries</Button>
          </Link>
        </div>
      </Layout>
    );
  }

  // Create features list from industry benefits (for hero section)
  const featuresFromBenefits = industry.benefits.slice(0, 3);

  return (
    <Layout>
      {/* JSON-LD structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": `${industry.name} Solutions - RTN Global`,
            "description": industry.shortDescription,
            "url": `https://rtnglobal.co/industries/${params.industrySlug}`,
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
      {/* Use the HeroSection component for the hero section */}
      <HeroSection
        title={`${industry.name} Solutions`}
        subtitle="Industry Expertise"
        description={industry.shortDescription}
        primaryCTA={{ text: "Discuss Your Project", href: "/contact" }}
        secondaryCTA={{ text: "View Case Studies", href: "#case-studies" }}
        features={featuresFromBenefits}
        imageUrl={industry.heroImage}
        backgroundClassName="bg-gradient-to-br from-background via-background to-primary/5"
      />

      {/* Overview Section */}
      <section className="py-20 bg-white" id="overview">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-8">
              <h2 className="text-3xl font-bold mb-6">Industry Overview</h2>
              <p className="text-lg text-muted-foreground mb-8">{industry.longDescription}</p>
              
              {/* Challenges */}
              <div className="mt-12">
                <h3 className="text-2xl font-bold mb-6">Challenges in the {industry.name} Industry</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {industry.challenges.map((challenge) => (
                    <div key={challenge.title} className="bg-muted/30 p-6 rounded-xl">
                      <h4 className="text-xl font-semibold mb-2">{challenge.title}</h4>
                      <p className="text-muted-foreground">{challenge.description}</p>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Services */}
              <div className="mt-16">
                <h3 className="text-2xl font-bold mb-6">Our {industry.name} Services</h3>
                <div className="grid grid-cols-1 gap-6">
                  {industry.services.map((service) => (
                    <div key={service.title} className="border border-border p-6 rounded-xl hover:shadow-md transition-all duration-300">
                      <h4 className="text-xl font-semibold mb-2">{service.title}</h4>
                      <p className="text-muted-foreground">{service.description}</p>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Case Studies */}
              <div className="mt-16" id="case-studies">
                <h3 className="text-2xl font-bold mb-6">Case Studies</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {industry.caseStudies.map((caseStudy) => (
                    <div key={caseStudy.title} className="group overflow-hidden border border-border rounded-xl shadow-sm hover:shadow-lg transition-all duration-300">
                      <div className="relative h-52">
                        <OptimizedImage
                          src={caseStudy.image}
                          fill
                          alt={caseStudy.title}
                          className="object-cover h-full transition-transform group-hover:scale-105 duration-500"
                        />
                      </div>
                      <div className="p-6">
                        <h4 className="text-xl font-semibold mb-1">{caseStudy.title}</h4>
                        <p className="text-sm text-primary mb-3">Client: {caseStudy.client}</p>
                        <p className="text-muted-foreground mb-4">{caseStudy.description}</p>
                        <Link href={`/portfolio/${caseStudy.slug}`} className="mt-4 inline-flex items-center text-primary hover:underline">
                          View Case Study <ExternalLink className="ml-1 h-4 w-4" />
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Testimonials */}
              {industry.testimonials.length > 0 && (
                <div className="mt-16">
                  <h3 className="text-2xl font-bold mb-6">What Our Clients Say</h3>
                  <div className="p-8 bg-primary/5 rounded-xl">
                    {industry.testimonials.map((testimonial) => (
                      <div key={testimonial.author} className="flex flex-col md:flex-row gap-6">
                        {testimonial.image && (
                          <div className="flex-shrink-0">
                            <div className="relative w-20 h-20 rounded-full overflow-hidden">
                              <OptimizedImage
                                src={testimonial.image}
                                fill
                                alt={testimonial.author}
                                className="object-cover"
                              />
                            </div>
                          </div>
                        )}
                        <div>
                          <p className="text-lg italic mb-4">&quot;{testimonial.content}&quot;</p>
                          <div>
                            <p className="font-bold">{testimonial.author}</p>
                            <p className="text-sm text-muted-foreground">{testimonial.position}, {testimonial.company}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
            
            <div className="lg:col-span-4">
              {/* Stats */}
              <div className="bg-primary/5 p-6 rounded-xl mb-8">
                <h3 className="text-xl font-bold mb-4">Industry Statistics</h3>
                <div className="space-y-6">
                  {industry.stats.map((stat) => (
                    <div key={stat.label}>
                      <p className="text-3xl font-bold text-primary">{stat.value}</p>
                      <p className="text-sm text-muted-foreground">{stat.label}</p>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Benefits */}
              <div className="bg-muted/30 p-6 rounded-xl mb-8">
                <h3 className="text-xl font-bold mb-4">Benefits</h3>
                <ul className="space-y-2">
                  {industry.benefits.map((benefit) => (
                    <li key={benefit} className="flex">
                      <Check className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              {/* Technologies */}
              <div className="border border-border p-6 rounded-xl mb-8">
                <h3 className="text-xl font-bold mb-4">Technologies & Tools</h3>
                <div className="flex flex-wrap gap-2">
                  {industry.tools.map((tool) => (
                    <span key={tool} className="bg-muted px-3 py-1 rounded-full text-sm">
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
              
              {/* FAQ */}
              {industry.faq.length > 0 && (
                <div className="border border-border p-6 rounded-xl">
                  <h3 className="text-xl font-bold mb-4">Frequently Asked Questions</h3>
                  <div className="space-y-6">
                    {industry.faq.map((item) => (
                      <div key={item.question}>
                        <h4 className="text-lg font-semibold mb-2">{item.question}</h4>
                        <p className="text-muted-foreground">{item.answer}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
      
      {/* Related Services Section - New */}
      <section className="py-16 bg-muted/10 border-t border-border">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Services for {industry.name}</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Discover our specialized services tailored for the {industry.name} industry
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {industry.services.slice(0, 3).map((service, index) => (
              <Link 
                key={index} 
                href={`/services/${service.title.toLowerCase().replace(/\s+/g, '-')}`}
                className="group"
              >
                <div className="bg-card rounded-xl shadow-sm border border-border overflow-hidden hover:shadow-md transition-all duration-300 h-full">
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">{service.title}</h3>
                    <p className="text-muted-foreground mb-4">{service.description}</p>
                    <div className="inline-flex items-center text-primary group-hover:underline">
                      Learn More <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          
          <div className="text-center mt-10">
            <Button asChild variant="outline" size="lg">
              <Link href="/services">
                View All Services <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
      
      {/* Related Resources Section - New */}
      <section className="py-16 bg-gradient-to-b from-background to-muted/10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Resources for {industry.name} Professionals</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Access valuable insights, guides, and case studies specific to your industry
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Knowledge Base */}
            <Link 
              href={`/knowledge-base?search=${encodeURIComponent(industry.name)}`}
              className="group"
            >
              <div className="bg-card rounded-xl shadow-sm border border-border overflow-hidden hover:shadow-md transition-all duration-300 h-full">
                <div className="p-6">
                  <div className="mb-4 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <BookOpen className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">Knowledge Base</h3>
                  <p className="text-muted-foreground mb-4">
                    Access guides and articles with best practices for {industry.name.toLowerCase()} websites and digital marketing.
                  </p>
                  <div className="inline-flex items-center text-primary group-hover:underline">
                    Browse Articles <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </div>
            </Link>
            
            {/* Blog Posts */}
            <Link 
              href={`/blog?industry=${encodeURIComponent(industry.name)}`}
              className="group"
            >
              <div className="bg-card rounded-xl shadow-sm border border-border overflow-hidden hover:shadow-md transition-all duration-300 h-full">
                <div className="p-6">
                  <div className="mb-4 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <FileText className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">Blog Posts</h3>
                  <p className="text-muted-foreground mb-4">
                    Read our latest insights and trends for the {industry.name.toLowerCase()} industry.
                  </p>
                  <div className="inline-flex items-center text-primary group-hover:underline">
                    Read Blog <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </div>
            </Link>
            
            {/* Case Studies */}
            <Link 
              href={`/case-studies?industry=${encodeURIComponent(industry.name)}`}
              className="group"
            >
              <div className="bg-card rounded-xl shadow-sm border border-border overflow-hidden hover:shadow-md transition-all duration-300 h-full">
                <div className="p-6">
                  <div className="mb-4 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Briefcase className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">Case Studies</h3>
                  <p className="text-muted-foreground mb-4">
                    Explore real-world examples of how we&apos;ve helped {industry.name.toLowerCase()} businesses succeed.
                  </p>
                  <div className="inline-flex items-center text-primary group-hover:underline">
                    View Case Studies <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 bg-primary/10">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Transform Your {industry.name} Business?</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Let&apos;s discuss how our tailored solutions can address your unique challenges and help you achieve your business goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" className="rounded-full">Schedule a Consultation</Button>
            </Link>
            <Link href="/portfolio">
              <Button size="lg" variant="outline" className="rounded-full">View Our Portfolio</Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
} 