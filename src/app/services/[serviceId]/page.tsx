"use client"

import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { Layout } from '@/components/layout/layout'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
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
  Code,
  BookOpen,
  CheckCircle
} from 'lucide-react'
import { OptimizedImage } from '@/components/ui/optimized-image'
import { H1, H2, H3, P, Lead } from '@/components/ui/typography'
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
    { value: '98%', label: 'Client Satisfaction', icon: <Star className="h-6 w-6 text-primary" /> },
    { value: '100+', label: 'Projects Delivered', icon: <Briefcase className="h-6 w-6 text-primary" /> },
    { value: '7+', label: 'Years Experience', icon: <Trophy className="h-6 w-6 text-primary" /> },
    { value: '24/7', label: 'Client Support', icon: <Shield className="h-6 w-6 text-primary" /> },
  ];
  
  return (
    <Layout>
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": `${params.serviceId.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')} | RTN Global`,
            "serviceType": params.serviceId.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' '),
            "url": `https://rtnglobal.site/services/${params.serviceId}`,
            "provider": {
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
              }
            },
            "areaServed": {
              "@type": "Country",
              "name": "United States"
            },
            "offers": {
              "@type": "Offer",
              "price": "Custom",
              "priceCurrency": "USD"
            },
            "potentialAction": {
              "@type": "ReserveAction",
              "target": {
                "@type": "EntryPoint",
                "urlTemplate": "https://rtnglobal.site/contact/free-consultation",
                "inLanguage": "en-US",
                "actionPlatform": [
                  "http://schema.org/DesktopWebPlatform",
                  "http://schema.org/IOSPlatform",
                  "http://schema.org/AndroidPlatform"
                ]
              },
              "result": {
                "@type": "Reservation",
                "name": "Free Consultation Booking"
              }
            }
          })
        }}
      />
      
      {/* Hero Section - Enhanced with professional design and statistics */}
      <section className="relative py-20 bg-gradient-to-br from-primary/5 via-background to-primary/10 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        
        {/* Service-specific Illustrations */}
        <div className="absolute top-10 right-10 w-32 h-32 bg-primary/10 rounded-full blur-2xl"></div>
        <div className="absolute bottom-20 left-10 w-24 h-24 bg-primary/5 rounded-full blur-xl"></div>
        <div className="absolute top-1/3 left-1/4 w-16 h-16 bg-primary/10 rounded-full blur-lg"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="w-full">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-10 max-w-2xl">
                <div className="space-y-6">
                  <Badge className="px-4 py-2 text-sm font-medium bg-primary/10 text-primary">
                    {service.category.charAt(0).toUpperCase() + service.category.slice(1)} Services
                  </Badge>
                  <H1 className="text-4xl md:text-5xl font-bold leading-tight">
                    {service.title}
                  </H1>
                  <Lead className="text-xl text-muted-foreground leading-relaxed">
                    {service.fullDescription}
                  </Lead>
                </div>

                <div className="grid grid-cols-2 gap-6">
                  {statistics.map((stat, index) => (
                    <div key={index} className="bg-card border border-border rounded-xl p-6 text-center hover:shadow-md transition-shadow">
                      <div className="flex items-center justify-center mb-3">
                        {stat.icon}
                      </div>
                      <div className="text-3xl font-bold text-primary mb-2">{stat.value}</div>
                      <div className="text-sm text-muted-foreground font-medium">{stat.label}</div>
                    </div>
                  ))}
                </div>

                {service.technologies && (
                  <div className="flex flex-wrap gap-3">
                    {service.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary" className="px-4 py-2 text-sm font-medium">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                )}

                                  <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
                    <Button asChild size="default" className="h-12 text-base font-semibold">
                      <Link href="/contact/free-consultation">
                        Get Free Consultation
                      </Link>
                    </Button>
                  <Button asChild variant="outline" size="default" className="h-12 text-base font-semibold">
                    <Link href="/portfolio">
                      View Our Work
                    </Link>
                  </Button>
                </div>
              </div>

              <div className="relative max-w-lg mx-auto">
                <div className="bg-card border border-border rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-shadow">
                  <div className="space-y-8">
                    {/* Service Image */}
                    <div className="relative h-72 rounded-xl overflow-hidden">
                      <OptimizedImage
                        src={service.image}
                        alt={service.title}
                        fill
                        className="object-cover w-full h-full"
                        priority
                      />
                    </div>

                    {/* Pricing Card */}
                    {service.investment && (
                      <div className="bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20 rounded-xl p-8 text-center">
                        <div className="mb-6">
                          <Badge className="px-4 py-2 text-sm font-medium bg-primary text-white">
                            Starting at
                          </Badge>
                        </div>
                        <div className="text-5xl font-bold text-primary mb-3">{service.investment.startingAt}</div>
                        <div className="text-muted-foreground mb-6 text-base">{service.investment.description}</div>
                        <div className="text-sm text-muted-foreground">
                          Custom pricing based on project requirements
                        </div>
                      </div>
                    )}

                    {/* Quick Info */}
                    <div className="space-y-6">
                      {service.timeline && (
                        <div className="flex items-center gap-4">
                          <Clock className="h-6 w-6 text-primary" />
                          <span className="text-base font-medium">{service.timeline} timeline</span>
                        </div>
                      )}
                      <div className="flex items-center gap-4">
                        <CheckCircle className="h-6 w-6 text-primary" />
                        <span className="text-base font-medium">Professional quality guaranteed</span>
                      </div>
                      <div className="flex items-center gap-4">
                        <Shield className="h-6 w-6 text-primary" />
                        <span className="text-base font-medium">24/7 support included</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Decorative Elements */}
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/10 rounded-full blur-xl"></div>
                <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-primary/5 rounded-full blur-xl"></div>
              </div>
            </div>
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
                          className="object-cover w-full h-full"
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
                        className="object-cover transition-transform group-hover:scale-105 duration-500 w-full h-full"
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
      
      
      
      {/* Enhanced Similar Services Section */}
      <section className="py-16 bg-gradient-to-br from-muted/30 via-background to-muted/20 border-t border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Badge className="mb-4 px-4 py-2 text-sm font-medium bg-primary/10 text-primary">
              Explore More
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Similar Services You Might Need</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Discover complementary services that can enhance your project and drive better results
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {relatedServices.map((relatedService, index) => (
              <motion.div
                key={relatedService.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <Link 
                  href={`/services/${relatedService.id}`}
                  className="block h-full"
                >
                  <div className="bg-card border border-border rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 h-full group-hover:border-primary/30 relative">
                    {/* Background decoration */}
                    <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-primary/5 to-transparent rounded-full -translate-y-12 translate-x-12 group-hover:scale-110 transition-transform duration-300"></div>
                    
                    <div className="relative">
                      <div className="aspect-video relative overflow-hidden">
                        <OptimizedImage
                          src={relatedService.image}
                          alt={relatedService.title}
                          fill
                          className="object-cover transition-transform group-hover:scale-110 duration-500 w-full h-full"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        
                        {/* Category badge */}
                        <div className="absolute top-4 left-4">
                          <Badge className="bg-primary/90 text-white text-xs font-medium px-3 py-1 rounded-full">
                            {relatedService.category.charAt(0).toUpperCase() + relatedService.category.slice(1)}
                          </Badge>
                        </div>
                        
                        {/* Investment info if available */}
                        {relatedService.investment && (
                          <div className="absolute bottom-4 right-4">
                            <div className="bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 text-sm font-semibold text-primary">
                              {relatedService.investment.startingAt}
                            </div>
                          </div>
                        )}
                      </div>
                      
                      <div className="p-6">
                        <div className="flex items-start justify-between mb-3">
                          <h3 className="text-xl font-semibold group-hover:text-primary transition-colors duration-300 leading-tight">
                            {relatedService.shortTitle || relatedService.title}
                          </h3>
                          <div className="flex-shrink-0 ml-3">
                            <ChevronRight className="h-5 w-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all duration-300" />
                          </div>
                        </div>
                        
                        <p className="text-muted-foreground mb-4 line-clamp-3 leading-relaxed">
                          {relatedService.description}
                        </p>
                        
                        {/* Features preview */}
                        {relatedService.features && relatedService.features.length > 0 && (
                          <div className="mb-4">
                            <div className="flex flex-wrap gap-2">
                              {relatedService.features.slice(0, 3).map((feature, featureIndex) => (
                                <span 
                                  key={featureIndex} 
                                  className="inline-flex items-center px-2 py-1 bg-muted/50 rounded-md text-xs text-muted-foreground"
                                >
                                  <Check className="h-3 w-3 mr-1 text-primary" />
                                  {feature.split(' ').slice(0, 3).join(' ')}
                                  {feature.split(' ').length > 3 && '...'}
                                </span>
                              ))}
                              {relatedService.features.length > 3 && (
                                <span className="inline-flex items-center px-2 py-1 bg-primary/10 rounded-md text-xs text-primary font-medium">
                                  +{relatedService.features.length - 3} more
                                </span>
                              )}
                            </div>
                          </div>
                        )}
                        
                        {/* Timeline if available */}
                        {relatedService.timeline && (
                          <div className="flex items-center text-sm text-muted-foreground mb-4">
                            <Clock className="h-4 w-4 mr-2 text-primary" />
                            <span>{relatedService.timeline}</span>
                          </div>
                        )}
                        
                        {/* CTA Button */}
                        <div className="inline-flex items-center text-primary font-medium group-hover:underline">
                          Learn More About This Service
                          <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
          
          {/* Additional CTA */}
          <div className="text-center mt-12 +50% -50% -mx-4 sm:-mx-6 lg:-mx-8">
            <div className="bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 p-8 border-y border-primary/20">
              <h3 className="text-xl font-semibold mb-3">Need a Custom Solution?</h3>
              <p className="text-muted-foreground mb-6">
                Can't find exactly what you're looking for? We offer custom development services tailored to your specific requirements.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button asChild size="lg" className="rounded-full px-8">
                  <Link href="/contact/free-consultation">
                    Get Custom Quote
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="rounded-full px-8">
                  <Link href="/services">
                    View All Services
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* New section: Related Industries & Use Cases */}
      <section className="py-16 bg-muted/20 border-t border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Industries We Serve With This Service</h2>
            <p className="text-muted-foreground max-w-3xl mx-auto">
              Discover how {service.title} can be tailored to meet the unique needs of different industries
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* We'll list common industries - these should ideally be dynamically generated based on relevance */}
            <Link href="/industries/healthcare" className="group">
              <div className="bg-card rounded-xl shadow-sm border border-border overflow-hidden hover:shadow-md transition-all duration-300 h-full">
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">Healthcare</h3>
                  <p className="text-muted-foreground mb-4">
                    Optimize patient experiences and streamline healthcare operations with tailored digital solutions.
                  </p>
                  <div className="inline-flex items-center text-primary group-hover:underline">
                    Learn More <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </div>
            </Link>
            
            <Link href="/industries/e-commerce" className="group">
              <div className="bg-card rounded-xl shadow-sm border border-border overflow-hidden hover:shadow-md transition-all duration-300 h-full">
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">E-Commerce</h3>
                  <p className="text-muted-foreground mb-4">
                    Drive online sales and enhance customer shopping experiences with specialized digital strategies.
                  </p>
                  <div className="inline-flex items-center text-primary group-hover:underline">
                    Learn More <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </div>
            </Link>
            
            <Link href="/industries/education" className="group">
              <div className="bg-card rounded-xl shadow-sm border border-border overflow-hidden hover:shadow-md transition-all duration-300 h-full">
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">Education</h3>
                  <p className="text-muted-foreground mb-4">
                    Create engaging learning experiences and improve educational outcomes with innovative digital solutions.
                  </p>
                  <div className="inline-flex items-center text-primary group-hover:underline">
                    Learn More <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </div>
            </Link>
          </div>
          
          <div className="text-center mt-12">
            <Button asChild variant="outline" size="lg">
              <Link href="/industries">
                View All Industries <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
      
      {/* New section: Related Knowledge & Resources */}
      <section className="py-16 bg-gradient-to-b from-background to-muted/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Related Knowledge & Resources</h2>
            <p className="text-muted-foreground max-w-3xl mx-auto">
              Explore our guides, tutorials, case studies, and blog posts about {service.title}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Link href={`/knowledge-base?search=${encodeURIComponent(service.title)}`} className="group">
              <div className="bg-card rounded-xl shadow-sm border border-border overflow-hidden hover:shadow-md transition-all duration-300 h-full">
                <div className="p-6">
                  <div className="mb-4 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <BookOpen className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">Knowledge Base</h3>
                  <p className="text-muted-foreground mb-4">
                    Access tutorials, guides, and documentation about {service.title.toLowerCase()} best practices.
                  </p>
                  <div className="inline-flex items-center text-primary group-hover:underline">
                    Browse Articles <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </div>
            </Link>
            
            <Link href={`/blog?tag=${encodeURIComponent(service.category)}`} className="group">
              <div className="bg-card rounded-xl shadow-sm border border-border overflow-hidden hover:shadow-md transition-all duration-300 h-full">
                <div className="p-6">
                  <div className="mb-4 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <FileText className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">Blog Posts</h3>
                  <p className="text-muted-foreground mb-4">
                    Read our latest articles, trends, and insights about {service.category} and {service.title.toLowerCase()}.
                  </p>
                  <div className="inline-flex items-center text-primary group-hover:underline">
                    Read Blog <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </div>
            </Link>
            
            <Link href="/case-studies" className="group">
              <div className="bg-card rounded-xl shadow-sm border border-border overflow-hidden hover:shadow-md transition-all duration-300 h-full">
                <div className="p-6">
                  <div className="mb-4 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Briefcase className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">Case Studies</h3>
                  <p className="text-muted-foreground mb-4">
                    Explore real-world examples of how we&apos;ve delivered successful {service.title.toLowerCase()} projects.
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