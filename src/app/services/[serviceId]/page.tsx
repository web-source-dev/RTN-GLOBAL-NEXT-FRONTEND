"use client"

import React from 'react'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { Layout } from '@/components/layout/layout'
import { Button } from '@/components/ui/button'
import { 
  ArrowLeft, 
  ArrowRight, 
  Check,
  Clock, 
  CreditCard, 
  Tag, 
  MessageSquare, 
  ChevronRight,
} from 'lucide-react'
import { OptimizedImage } from '@/components/ui/optimized-image'
import { services } from '@/data/services'
import { CTASection } from '@/components/sections/cta-section'
import { motion } from 'framer-motion'

export default function ServiceDetailPage({ 
  params 
}: { 
  params: { serviceId: string } 
  }) {
  const { serviceId } = params;
  const service = services[serviceId as keyof typeof services]
  
  if (!service) {
    notFound()
  }
  
  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-muted/50 to-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Link href="/services" className="inline-flex items-center text-muted-foreground hover:text-foreground mb-4">
                <ArrowLeft className="mr-2 h-4 w-4" /> Back to all services
              </Link>
              
              <div className="inline-flex items-center px-3 py-1 bg-primary/10 rounded-full text-primary text-sm font-medium mb-4">
                {service.category.charAt(0).toUpperCase() + service.category.slice(1)}
              </div>
              
              <h1 className="text-4xl font-bold tracking-tight mb-4">{service.title}</h1>
              <p className="mt-4 text-xl text-muted-foreground mb-6">
                {service.fullDescription}
              </p>
              
              {service.technologies && (
                <div className="flex flex-wrap gap-2 mb-6">
                  {service.technologies.map((tech) => (
                    <span key={tech} className="px-3 py-1 bg-muted rounded-full text-xs font-medium">
                      {tech}
                    </span>
                  ))}
                </div>
              )}
              
              <div className="mt-6">
                <Link href="/contact">
                  <Button size="lg" className="gap-2">
                    Request a Quote <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative h-64 md:h-80 lg:h-96 rounded-lg overflow-hidden shadow-lg">
              <OptimizedImage
                src={service.image}
                alt={service.title}
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6">
                {service.investment && (
                  <div className="inline-flex items-center px-3 py-1.5 bg-white/90 rounded-full text-primary font-bold text-sm">
                    Starting at {service.investment.startingAt}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Overview & Key Information */}
      <section className="py-16 border-t border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-bold mb-6">Service Overview</h2>
              
              {service.process && (
                <div className="mb-10">
                  <h3 className="text-xl font-semibold mb-4">{service.process.title}</h3>
                  <div className="grid gap-6 mt-6">
                    {service.process.steps.map((step, index) => (
                      <motion.div 
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="flex"
                      >
                        <div className="mr-4 flex-shrink-0">
                          <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 text-primary font-bold">
                            {index + 1}
                          </div>
                        </div>
                        <div>
                          <h4 className="text-lg font-medium mb-1">{step.title}</h4>
                          <p className="text-muted-foreground">{step.description}</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              )}
              
            {/* Features */}
              <div className="mb-12">
                <h3 className="text-xl font-semibold mb-4">What We Offer</h3>
                <div className="grid md:grid-cols-2 gap-4">
                {service.features.map((feature) => (
                    <div key={feature} className="flex items-start p-4 bg-card border border-border rounded-lg">
                      <Check className="h-5 w-5 text-primary flex-shrink-0 mr-3 mt-0.5" />
                    <span>{feature}</span>
                    </div>
                ))}
                </div>
            </div>
            
            {/* Benefits */}
              <div>
                <h3 className="text-xl font-semibold mb-4">Benefits</h3>
                <div className="grid md:grid-cols-2 gap-4">
                {service.benefits.map((benefit) => (
                    <div key={benefit} className="flex items-start p-4 bg-primary/5 border border-primary/10 rounded-lg">
                      <Check className="h-5 w-5 text-primary flex-shrink-0 mr-3 mt-0.5" />
                    <span>{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Sidebar */}
            <div>
              <div className="bg-card border border-border rounded-lg p-6 mb-8">
                <h3 className="text-lg font-semibold mb-4">Service Details</h3>
                <div className="space-y-4">
                  {service.timeline && (
                    <div className="flex items-center">
                      <Clock className="h-5 w-5 text-muted-foreground mr-3" />
                      <div>
                        <span className="text-sm text-muted-foreground">Timeline</span>
                        <p className="font-medium">{service.timeline}</p>
                      </div>
                    </div>
                  )}
                  
                  {service.investment && (
                    <div className="flex items-center">
                      <CreditCard className="h-5 w-5 text-muted-foreground mr-3" />
                      <div>
                        <span className="text-sm text-muted-foreground">Investment</span>
                        <p className="font-medium">{service.investment.startingAt}</p>
                        <p className="text-xs text-muted-foreground">{service.investment.description}</p>
                      </div>
                    </div>
                  )}
                  
                  <div className="flex items-center">
                    <Tag className="h-5 w-5 text-muted-foreground mr-3" />
                    <div>
                      <span className="text-sm text-muted-foreground">Category</span>
                      <p className="font-medium capitalize">{service.category}</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-6 pt-6 border-t border-border">
                  <Link href="/contact">
                    <Button className="w-full">Contact Us</Button>
                  </Link>
                </div>
              </div>
              
              {service.testimonial && (
                <div className="bg-primary/5 border border-primary/10 rounded-lg p-6">
                  <div className="flex items-center mb-4">
                    <MessageSquare className="h-5 w-5 text-primary mr-2" />
                    <h3 className="font-semibold">Client Testimonial</h3>
                  </div>
                  <blockquote className="text-muted-foreground italic mb-4">
                    &quot;{service.testimonial.content}&quot;
                  </blockquote>
                  <div>
                    <p className="font-medium">{service.testimonial.author}</p>
                    <p className="text-sm text-muted-foreground">
                      {service.testimonial.role}, {service.testimonial.company}
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
      
      {/* Related Case Studies */}
      {service.caseStudies && service.caseStudies.length > 0 && (
        <section className="py-16 bg-muted/30 border-t border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold mb-8">Related Case Studies</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {service.caseStudies.map((caseStudy) => (
                <Link 
                  key={caseStudy.slug} 
                  href={`/portfolio/${caseStudy.slug}`}
                  className="group block bg-card border border-border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all duration-300"
                >
                  <div className="relative h-60 w-full">
                    <OptimizedImage
                      src={caseStudy.image}
                      fill
                      alt={caseStudy.title}
                      className="object-cover transition-transform group-hover:scale-105 duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <div className="absolute bottom-0 left-0 p-6">
                      <h3 className="text-xl font-bold text-white mb-2">{caseStudy.title}</h3>
                    </div>
                  </div>
                  <div className="p-6">
                    <p className="text-muted-foreground mb-4">{caseStudy.description}</p>
                    <div className="inline-flex items-center text-primary font-medium">
                      View Case Study <ChevronRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </div>
                  </div>
              </Link>
              ))}
            </div>
          </div>
        </section>
      )}
      
      {/* FAQs */}
      {service.faqs && service.faqs.length > 0 && (
        <section className="py-16 border-t border-border">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold mb-8">Frequently Asked Questions</h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl">
              {service.faqs.map((faq, index) => (
                <div key={index} className="space-y-2">
                  <h3 className="text-lg font-semibold">{faq.question}</h3>
                  <p className="text-muted-foreground">{faq.answer}</p>
                </div>
              ))}
          </div>
        </div>
      </section>
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
          text: "View All Services",
          href: "/services"
        }}
      />
    </Layout>
  )
} 