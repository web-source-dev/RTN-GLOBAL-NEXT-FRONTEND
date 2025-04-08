"use client"

import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { Layout } from '@/components/layout/layout'
import { Button } from '@/components/ui/button'
import { 
  ArrowRight, 
  Check,
  Clock, 
  CreditCard, 
  Tag, 
  MessageSquare,
  ChevronRight,
  Trophy,
  Star,
  Shield,
  Users,
  BarChart,
  FileText,
  Briefcase,
  Zap,
  Code
} from 'lucide-react'
import { OptimizedImage } from '@/components/ui/optimized-image'
import { services, getServicesByCategory, Service } from '@/data/services'
import { motion } from 'framer-motion'

export default function ServiceDetailPage({ 
  params 
}: { 
  params: { serviceId: string } 
  }) {
  const { serviceId } = params;
  const service = services[serviceId as keyof typeof services]
  const [relatedServices, setRelatedServices] = useState<Service[]>([])
  
  useEffect(() => {
    if (service) {
      // Get services from the same category, excluding the current one
      const categoryServices = getServicesByCategory(service.category)
        .filter(s => s.id !== service.id)
        .slice(0, 3);
      setRelatedServices(categoryServices);
    }
  }, [service]);
  
  if (!service) {
    notFound()
  }
  
  // Generate random statistics for display
  const statistics = [
    { value: '95%', label: 'Client Satisfaction', icon: <Star className="h-6 w-6 text-primary" /> },
    { value: '200+', label: 'Projects Delivered', icon: <Briefcase className="h-6 w-6 text-primary" /> },
    { value: '10+', label: 'Years Experience', icon: <Trophy className="h-6 w-6 text-primary" /> },
    { value: '24/7', label: 'Client Support', icon: <Shield className="h-6 w-6 text-primary" /> },
  ];
  
  return (
    <Layout>
      {/* Hero Section - Enhanced with better visual hierarchy and trust elements */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-muted/50 to-background relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="inline-flex items-center px-3 py-1 bg-primary/10 rounded-full text-primary text-sm font-medium mb-4">
                {service.category.charAt(0).toUpperCase() + service.category.slice(1)}
              </div>
              
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/70">
                {service.title}
              </h1>
              
              <p className="mt-4 text-lg md:text-xl text-muted-foreground mb-6 leading-relaxed">
                {service.fullDescription}
              </p>
              
              {service.technologies && (
                <div className="flex flex-wrap gap-2 mb-8">
                  {service.technologies.map((tech) => (
                    <span key={tech} className="px-3 py-1 bg-muted hover:bg-primary/10 transition-colors rounded-full text-xs font-medium">
                      {tech}
                    </span>
                  ))}
                </div>
              )}
              
              <div className="flex flex-col sm:flex-row gap-4 mt-6">
                <Link href="/contact/free-consultation">
                  <Button size="lg" className="gap-2 shadow-md hover:shadow-lg transition-all duration-300 w-full sm:w-auto">
                    Request a Free Consultation <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
                <Link href={`${process.env.NEXT_PUBLIC_ORDERS_URL}`}>
                  <Button size="lg" variant="outline" className="gap-2 w-full sm:w-auto">
                     Place an Order <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative h-64 md:h-80 lg:h-96 rounded-xl overflow-hidden shadow-xl"
            >
              <OptimizedImage
                src={service.image}
                alt={service.title}
                fill
                className="object-cover"
                priority
              />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                {service.investment && (
                  <div className="inline-flex items-center px-4 py-2 bg-white/90 rounded-full text-primary font-bold text-sm shadow-lg">
                    Starting at {service.investment.startingAt}
                  </div>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Statistics Section - New section to build trust */}
      <section className="py-12 bg-primary/5 border-y border-primary/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {statistics.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex flex-col items-center text-center p-6 rounded-xl bg-card shadow-sm border border-border"
              >
                <div className="mb-4 p-3 bg-primary/10 rounded-full">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold text-primary mb-1">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Process Section - Enhanced with better visual hierarchy */}
      {service.process && service.process.steps && service.process.steps.length > 0 && (
        <section className="py-16 bg-gradient-to-b from-background to-muted/10">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">{service.process.title}</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Our proven methodology ensures consistent results and exceptional quality for every project
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
              {service.process.steps.map((step, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-card border border-border p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 relative"
                >
                  <div className="flex justify-center mb-6">
                    <div className="flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary font-bold text-xl">
                      {index + 1}
                    </div>
                  </div>
                  <h4 className="text-xl font-semibold mb-3 text-center">{step.title}</h4>
                  <p className="text-muted-foreground text-center">{step.description}</p>
                  
                  {index < (service.process?.steps?.length || 0) - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                      <ArrowRight className="h-6 w-6 text-primary/40" />
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}
      
      {/* Features & Benefits Section - Enhanced with better cards and more visual appeal */}
      <section className="py-16 border-t border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              {/* Features - Enhanced presentation */}
              <div className="mb-16">
                <div className="flex items-center mb-8">
                  <div className="p-2 bg-primary/10 rounded-lg mr-4">
                    <FileText className="h-6 w-6 text-primary" />
                  </div>
                  <h2 className="text-3xl font-bold">What We Offer</h2>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  {service.features.map((feature, index) => (
                    <motion.div 
                      key={feature}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.05 }}
                      viewport={{ once: true }}
                      className="flex items-start p-5 bg-card border border-border rounded-xl shadow-sm hover:shadow-md transition-all duration-300 hover:border-primary/20"
                    >
                      <div className="p-2 bg-primary/10 rounded-lg mr-4 flex-shrink-0">
                        <Check className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <span className="font-medium">{feature}</span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
              
              {/* Benefits - Enhanced presentation */}
              <div>
                <div className="flex items-center mb-8">
                  <div className="p-2 bg-primary/10 rounded-lg mr-4">
                    <Zap className="h-6 w-6 text-primary" />
                  </div>
                  <h2 className="text-3xl font-bold">Key Benefits</h2>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  {service.benefits.map((benefit, index) => (
                    <motion.div 
                      key={benefit}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.05 }}
                      viewport={{ once: true }}
                      className="flex items-start p-5 bg-primary/5 border border-primary/10 rounded-xl shadow-sm"
                    >
                      <div className="p-2 bg-primary/20 rounded-lg mr-4 flex-shrink-0">
                        <Trophy className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <span className="font-medium">{benefit}</span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
              
              {/* Deliverables Section - Adding if available */}
              {service.deliverables && service.deliverables.length > 0 && (
                <div className="mt-16">
                  <div className="flex items-center mb-8">
                    <div className="p-2 bg-primary/10 rounded-lg mr-4">
                      <Briefcase className="h-6 w-6 text-primary" />
                    </div>
                    <h2 className="text-3xl font-bold">What You&apos;ll Receive</h2>
                  </div>
                  
                  <ul className="grid md:grid-cols-2 gap-4">
                    {service.deliverables.map((deliverable, index) => (
                      <li key={index} className="flex items-center p-4 bg-muted rounded-lg">
                        <Check className="h-5 w-5 text-primary flex-shrink-0 mr-3" />
                        <span>{deliverable}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
            
            {/* Enhanced Sidebar */}
            <div>
              {/* Service Details Card - Enhanced design */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-card border border-border rounded-xl p-6 mb-8 shadow-md"
              >
                <h3 className="text-xl font-semibold mb-6 pb-2 border-b border-border">Service Details</h3>
                <div className="space-y-6">
                  {service.timeline && (
                    <div className="flex items-start">
                      <div className="p-2 bg-primary/10 rounded-lg mr-4 flex-shrink-0">
                        <Clock className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <span className="text-sm font-medium text-muted-foreground">Timeline</span>
                        <p className="font-semibold text-lg">{service.timeline}</p>
                      </div>
                    </div>
                  )}
                  
                  {service.investment && (
                    <div className="flex items-start">
                      <div className="p-2 bg-primary/10 rounded-lg mr-4 flex-shrink-0">
                        <CreditCard className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <span className="text-sm font-medium text-muted-foreground">Investment</span>
                        <p className="font-semibold text-lg">{service.investment.startingAt}</p>
                        <p className="text-sm text-muted-foreground">{service.investment.description}</p>
                      </div>
                    </div>
                  )}
                  
                  <div className="flex items-start">
                    <div className="p-2 bg-primary/10 rounded-lg mr-4 flex-shrink-0">
                      <Tag className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <span className="text-sm font-medium text-muted-foreground">Category</span>
                      <p className="font-semibold text-lg capitalize">{service.category}</p>
                    </div>
                  </div>
                  
                  {service.technologies && (
                    <div className="flex items-start">
                      <div className="p-2 bg-primary/10 rounded-lg mr-4 flex-shrink-0">
                        <Code className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <span className="text-sm font-medium text-muted-foreground">Technologies</span>
                        <div className="flex flex-wrap gap-1 mt-1">
                          {service.technologies.slice(0, 6).map((tech) => (
                            <span key={tech} className="px-2 py-1 bg-muted text-xs rounded-md">
                              {tech}
                            </span>
                          ))}
                          {service.technologies.length > 6 && (
                            <span className="px-2 py-1 bg-muted text-xs rounded-md">
                              +{service.technologies.length - 6} more
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
                
                <div className="mt-8 pt-6 border-t border-border space-y-4">
                  <Link href="/contact/free-consultation">
                    <Button className="w-full py-6 text-base shadow-md hover:shadow-lg transition-all" size="lg">
                      Request a Free Consultation
                    </Button>
                  </Link>
                  <Link href={`${process.env.NEXT_PUBLIC_ORDERS_URL}`}>
                    <Button variant="outline" className="w-full gap-2 text-base border mt-2 border-primary" size="lg">
                      Place an Order
                    </Button>
                  </Link>
                </div>
              </motion.div>
              
              {/* Enhanced Testimonial */}
              {service.testimonial && (
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-br from-primary/5 to-primary/10 border border-primary/10 rounded-xl p-6 shadow-md"
                >
                  <div className="flex items-center mb-4">
                    <div className="p-2 bg-primary/20 rounded-lg mr-3">
                      <MessageSquare className="h-5 w-5 text-primary" />
                    </div>
                    <h3 className="font-semibold text-lg">Client Success Story</h3>
                  </div>
                  
                  <div className="pl-2 border-l-4 border-primary/30 mb-4">
                    <blockquote className="text-muted-foreground italic mb-4 text-base">
                      &quot;{service.testimonial.content}&quot;
                    </blockquote>
                  </div>
                  
                  <div className="flex items-center">
                    {service.testimonial.avatar ? (
                      <div className="w-12 h-12 rounded-full overflow-hidden mr-3">
                        <OptimizedImage 
                          src={service.testimonial.avatar} 
                          width={48} 
                          height={48} 
                          alt={service.testimonial.author}
                        />
                      </div>
                    ) : (
                      <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mr-3">
                        <Users className="h-6 w-6 text-primary" />
                      </div>
                    )}
                    <div>
                      <p className="font-semibold">{service.testimonial.author}</p>
                      <p className="text-sm text-muted-foreground">
                        {service.testimonial.role}, {service.testimonial.company}
                      </p>
                    </div>
                  </div>
                </motion.div>
              )}
            </div>
          </div>
        </div>
      </section>
      
      {/* Related Case Studies - Enhanced with better visual presentation */}
      {service.caseStudies && service.caseStudies.length > 0 && (
        <section className="py-16 bg-muted/30 border-t border-border">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center mb-12">
              <div className="p-2 bg-primary/10 rounded-lg mr-4">
                <BarChart className="h-6 w-6 text-primary" />
              </div>
              <h2 className="text-3xl font-bold">Success Stories</h2>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {service.caseStudies.map((caseStudy, index) => (
                <motion.div
                  key={caseStudy.slug}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Link 
                    href={`/portfolio/${caseStudy.slug}`}
                    className="group block bg-card border border-border rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 h-full"
                  >
                    <div className="relative h-60 w-full">
                      <OptimizedImage
                        src={caseStudy.image}
                        fill
                        alt={caseStudy.title}
                        className="object-cover transition-transform group-hover:scale-105 duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                      <div className="absolute bottom-0 left-0 p-6">
                        <h3 className="text-xl font-bold text-white mb-2">{caseStudy.title}</h3>
                      </div>
                    </div>
                    <div className="p-6">
                      <p className="text-muted-foreground mb-6 line-clamp-3">{caseStudy.description}</p>
                      <div className="inline-flex items-center text-primary font-medium">
                        View Case Study <ChevronRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}
      
      {/* FAQs - Enhanced presentation */}
      {service.faqs && service.faqs.length > 0 && (
        <section className="py-16 border-t border-border bg-gradient-to-b from-background to-muted/10">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Get answers to common questions about our {service.title} services
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {service.faqs.map((faq, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="p-6 bg-card border border-border rounded-xl shadow-sm"
                >
                  <h3 className="text-lg font-semibold mb-3 flex items-start">
                    <span className="text-primary mr-3 font-bold">Q.</span>
                    {faq.question}
                  </h3>
                  <p className="text-muted-foreground pl-6">{faq.answer}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}
      
      {/* Related Services - New section */}
      {relatedServices.length > 0 && (
        <section className="py-16 border-t border-border">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Related Services</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Explore other services that complement {service.title}
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {relatedServices.map((relatedService, index) => (
                <motion.div
                  key={relatedService.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-card border border-border rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 group"
                >
                  <Link href={`/services/${relatedService.slug}`}>
                    <div className="relative h-48 w-full">
                      <OptimizedImage
                        src={relatedService.image}
                        fill
                        alt={relatedService.title}
                        className="object-cover transition-transform group-hover:scale-105 duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                      <div className="absolute top-4 left-4">
                        <div className="inline-flex items-center px-3 py-1 bg-primary/90 rounded-full text-white text-xs font-medium">
                          {relatedService.category.charAt(0).toUpperCase() + relatedService.category.slice(1)}
                        </div>
                      </div>
                      <div className="absolute bottom-0 left-0 p-6">
                        <h3 className="text-xl font-bold text-white">{relatedService.shortTitle || relatedService.title}</h3>
                      </div>
                    </div>
                    <div className="p-6">
                      <p className="text-muted-foreground mb-4 line-clamp-2">{relatedService.description}</p>
                      <div className="inline-flex items-center text-primary font-medium">
                        Learn more <ChevronRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}
      
      {/* Enhanced CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 via-primary/10 to-background border-t border-primary/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Business?</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-3xl mx-auto">
              Let&apos;s discuss how our {service.title} services can help you achieve your business goals and stay ahead of the competition.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact/free-consultation">
                <Button size="lg" className="gap-2 shadow-md text-base px-8 py-6">
                  Schedule a Free Consultation <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
              <Link href="/services">
                <Button size="lg" variant="outline" className="gap-2 text-base px-8 py-6">
                  Explore All Services
                </Button>
              </Link>
            </div>
            
            <div className="mt-12 p-6 bg-card border border-border rounded-xl max-w-3xl mx-auto">
              <p className="font-medium mb-2">Our Commitment to You</p>
              <p className="text-muted-foreground text-sm">
                At RTN Global, we&apos;re committed to delivering exceptional results for every client. 
                We offer a satisfaction guarantee on all our services and provide ongoing support 
                to ensure your continued success.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
} 