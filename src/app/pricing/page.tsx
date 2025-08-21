import { Layout } from "@/components/layout/layout"
import { HeroSection } from "@/components/sections/hero-section"
import { Check, Calendar, MessageCircle, Clock, BarChart, Zap, HelpCircle, Star, Award, Shield, Users, Rocket, Target, TrendingUp } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { H1, H2, H3, H4, P, Lead } from "@/components/ui/typography"
import Link from "next/link"

export default function PricingPage() {
  // Enhanced pricing plans with reduced prices
  const pricingPlans = [
    {
      name: "Starter",
      price: "$299",
      priceDetail: "/one-time",
      originalPrice: "$599",
      description: "Perfect for small businesses and startups looking to establish their online presence.",
      features: [
        { text: "Responsive Website (5 pages)", included: true },
        { text: "Custom Domain Setup", included: true },
        { text: "Basic SEO Optimization", included: true },
        { text: "Contact Form Integration", included: true },
        { text: "2 Months Maintenance", included: true },
        { text: "Social Media Integration", included: true },
        { text: "Mobile-First Design", included: true },
        { text: "Google Analytics Setup", included: true },
        { text: "Advanced Analytics", included: false },
        { text: "E-commerce Functionality", included: false },
        { text: "Custom CMS", included: false },
        { text: "Priority Support", included: false },
      ],
      buttonText: "Get Started",
      buttonLink: "/contact",
      popular: false,
      savings: "50% OFF"
    },
    {
      name: "Professional",
      price: "$699",
      priceDetail: "/one-time",
      originalPrice: "$1,499",
      description: "Ideal for growing businesses looking to establish a strong online presence.",
      features: [
        { text: "Responsive Website (up to 10 pages)", included: true },
        { text: "Custom Domain Setup", included: true },
        { text: "Advanced SEO Optimization", included: true },
        { text: "Contact Form Integration", included: true },
        { text: "4 Months Maintenance", included: true },
        { text: "Social Media Integration", included: true },
        { text: "Mobile-First Design", included: true },
        { text: "Google Analytics Setup", included: true },
        { text: "Advanced Analytics", included: true },
        { text: "Custom CMS", included: true },
        { text: "Priority Support", included: true },
        { text: "E-commerce Functionality", included: false },
      ],
      buttonText: "Get Started",
      buttonLink: "/contact",
      featured: true,
      popular: true,
      savings: "53% OFF"
    },
    {
      name: "Enterprise",
      price: "$1,299",
      priceDetail: "/one-time",
      originalPrice: "$2,999",
      description: "Comprehensive solution for established businesses with complex requirements.",
      features: [
        { text: "Responsive Website (up to 20 pages)", included: true },
        { text: "Custom Domain Setup", included: true },
        { text: "Advanced SEO Optimization", included: true },
        { text: "Contact Form Integration", included: true },
        { text: "6 Months Maintenance", included: true },
        { text: "Social Media Integration", included: true },
        { text: "Mobile-First Design", included: true },
        { text: "Google Analytics Setup", included: true },
        { text: "Advanced Analytics", included: true },
        { text: "Custom CMS", included: true },
        { text: "Priority Support", included: true },
        { text: "E-commerce Functionality", included: true },
      ],
      buttonText: "Get Started",
      buttonLink: "/contact",
      popular: false,
      savings: "57% OFF"
    }
  ]

  // Enhanced features for why choose us section
  const features = [
    {
      icon: Rocket,
      title: "Fast Delivery",
      description: "Get your website up and running in 2-4 weeks with our streamlined development process.",
      color: "text-blue-600"
    },
    {
      icon: Shield,
      title: "Quality Guarantee",
      description: "100% satisfaction guarantee with unlimited revisions until you're completely happy.",
      color: "text-green-600"
    },
    {
      icon: MessageCircle,
      title: "Clear Communication",
      description: "Regular updates and transparent communication throughout the entire development process.",
      color: "text-purple-600"
    },
    {
      icon: Clock,
      title: "24/7 Support",
      description: "Round-the-clock support to address any issues or questions you may have.",
      color: "text-orange-600"
    },
    {
      icon: TrendingUp,
      title: "Performance Focused",
      description: "Lightning-fast websites optimized for speed, SEO, and user experience.",
      color: "text-red-600"
    },
    {
      icon: Users,
      title: "Expert Team",
      description: "Experienced developers and designers dedicated to bringing your vision to life.",
      color: "text-indigo-600"
    }
  ]

  // Enhanced testimonials
  const testimonials = [
    {
      content: "RTN Global delivered an amazing website that exceeded our expectations. The pricing was fair, and the quality was outstanding. Our online sales increased by 60% within the first month!",
      author: "Sarah Thompson",
      role: "CEO",
      company: "Envision Retail",
      rating: 5,
      avatar: "/images/testimonials/sarah-thompson.jpg"
    },
    {
      content: "The team at RTN Global really understood our requirements and delivered a website that perfectly represents our brand. Their ongoing support has been exceptional and the pricing was very competitive.",
      author: "Michael Rodriguez",
      role: "Marketing Director",
      company: "TechInnov",
      rating: 5,
      avatar: "/images/testimonials/michael-rodriguez.jpg"
    },
    {
      content: "We chose RTN Global for our website redesign, and it was the best decision we made. The process was smooth, communication was clear, and the result was outstanding. Great value for money!",
      author: "Jennifer Lee",
      role: "Operations Manager",
      company: "HealthPlus",
      rating: 5,
      avatar: "/images/testimonials/jennifer-lee.jpg"
    }
  ]

  // Generate JSON-LD structured data for pricing page
  const pricingJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Pricing - RTN Global",
    "description": "Affordable, transparent pricing for web development and digital services.",
    "url": "https://rtnglobal.site/pricing",
    "publisher": {
      "@type": "Organization",
      "name": "RTN Global",
      "url": "https://rtnglobal.site/",
              "logo": "https://rtnglobal.site/icons/rtnglobal-logo.png",
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
    "mainEntity": {
      "@type": "ItemList",
      "itemListElement": pricingPlans.map((plan, index) => ({
        "@type": "ListItem",
        "position": index + 1,
        "item": {
          "@type": "Offer",
          "name": plan.name + " Plan",
          "description": plan.description,
          "price": plan.price.replace('$', ''),
          "priceCurrency": "USD",
          "priceValidUntil": new Date(new Date().setFullYear(new Date().getFullYear() + 1)).toISOString().split('T')[0],
          "url": `https://rtnglobal.site${plan.buttonLink}?plan=${plan.name.toLowerCase()}`,
          "offeredBy": {
            "@type": "Organization",
            "name": "RTN Global"
          },
          "itemOffered": {
            "@type": "Service",
            "name": "Web Development Services",
            "description": plan.features.filter(f => f.included).map(f => f.text).join(", ")
          }
        }
      }))
    }
  };

  return (
    <Layout>
      {/* JSON-LD structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pricingJsonLd) }}
      />
      
      {/* Enhanced Hero Section */}
      <section className="relative py-24 md:py-32 overflow-hidden bg-gradient-to-br from-primary/5 via-background to-primary/5">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-600">
            <Badge className="mb-6 px-4 py-2 text-sm font-medium bg-primary/10 text-primary">
              Limited Time Offer
            </Badge>
            <H1 className="mb-6 text-4xl md:text-5xl lg:text-6xl">
              Affordable Pricing for <span className="text-primary">Amazing Results</span>
            </H1>
            <Lead className="text-lg md:text-xl leading-relaxed max-w-3xl mx-auto mb-8">
              Get a professional website that drives results without breaking the bank. 
              All plans include a free consultation and 100% satisfaction guarantee.
            </Lead>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Check className="h-4 w-4 text-green-500" />
                <span>No Hidden Fees</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Check className="h-4 w-4 text-green-500" />
                <span>Free Consultation</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Check className="h-4 w-4 text-green-500" />
                <span>100% Satisfaction</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Pricing Section */}
      <section className="py-20 md:py-32 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 animate-in fade-in slide-in-from-bottom-4 duration-600">
            <H2 className="mb-6">Choose Your Perfect Plan</H2>
            <Lead className="text-lg">
              All plans include a free consultation, unlimited revisions, and 100% satisfaction guarantee.
            </Lead>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <div
                key={index}
                className="relative animate-in fade-in slide-in-from-bottom-4 duration-600"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {plan.popular && (
                  <div className="absolute -top-9 left-1/2 transform -translate-x-1/2 z-10">
                    <Badge className="bg-gradient-to-r from-primary to-primary/80 text-white px-4 py-2 rounded-[10px]">
                      <Star className="h-3 w-3 mr-1" />
                      Most Popular
                    </Badge>
                  </div>
                )}
                
                <Card className={`h-full relative overflow-hidden ${plan.featured ? 'border-primary shadow-xl scale-105' : 'border-border'}`}>
                  {plan.featured && (
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent"></div>
                  )}
                  
                  <CardHeader className="relative">
                    <div className="flex items-center justify-between mb-4">
                      <CardTitle className="text-2xl">{plan.name}</CardTitle>
                      {plan.savings && (
                        <Badge variant="secondary" className="bg-green-100 text-green-800">
                          {plan.savings}
                        </Badge>
                      )}
                    </div>
                    <CardDescription className="text-base">{plan.description}</CardDescription>
                    
                    <div className="mt-6">
                      <div className="flex items-baseline gap-2">
                        <span className="text-4xl font-bold text-primary">{plan.price}</span>
                        <span className="text-lg text-muted-foreground">{plan.priceDetail}</span>
                      </div>
                      {plan.originalPrice && (
                        <div className="flex items-center gap-2 mt-2">
                          <span className="text-lg text-muted-foreground line-through">{plan.originalPrice}</span>
                          <span className="text-sm text-green-600 font-medium">Save ${parseInt(plan.originalPrice.replace('$', '').replace(',', '')) - parseInt(plan.price.replace('$', '').replace(',', ''))}</span>
                        </div>
                      )}
                    </div>
                  </CardHeader>

                  <CardContent className="relative">
                    <ul className="space-y-4 mb-8">
                      {plan.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start gap-3">
                          <div className={`flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center ${feature.included ? 'bg-green-100 text-green-600' : 'bg-gray-100 text-gray-400'}`}>
                            {feature.included ? (
                              <Check className="h-3 w-3" />
                            ) : (
                              <span className="text-xs">×</span>
                            )}
                          </div>
                          <span className={`text-sm ${feature.included ? 'text-foreground' : 'text-muted-foreground line-through'}`}>
                            {feature.text}
                          </span>
                        </li>
                      ))}
                    </ul>

                    <Button 
                      asChild 
                      className={`w-full ${plan.featured ? 'bg-primary hover:bg-primary/90' : 'bg-primary/10 text-primary hover:bg-primary/20'}`}
                      size="lg"
                    >
                      <Link href={plan.buttonLink}>
                        {plan.buttonText}
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>

          <div className="text-center mt-12 animate-in fade-in slide-in-from-bottom-4 duration-600" style={{ animationDelay: '400ms' }}>
            <p className="text-muted-foreground mb-4">Need a custom solution?</p>
            <Button asChild variant="outline" size="lg">
              <Link href="/contact">Get Custom Quote</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Enhanced Features Section */}
      <section className="py-20 md:py-32 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 animate-in fade-in slide-in-from-bottom-4 duration-600">
            <H2 className="mb-6">Why Choose RTN Global</H2>
            <Lead className="text-lg">
              We are committed to delivering exceptional value and service with every project.
            </Lead>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-card border border-border rounded-xl p-6 hover:shadow-lg transition-all duration-300 hover:border-primary/20 animate-in fade-in slide-in-from-bottom-4 duration-600"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className={`w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 ${feature.color}`}>
                  <feature.icon className="h-6 w-6" />
                </div>
                <H3 className="mb-3">{feature.title}</H3>
                <P className="text-muted-foreground">{feature.description}</P>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Testimonials Section */}
      <section className="py-20 md:py-32 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 animate-in fade-in slide-in-from-bottom-4 duration-600">
            <H2 className="mb-6">What Our Clients Say</H2>
            <Lead className="text-lg">
              Don't just take our word for it. Here's what our clients have to say about working with us.
            </Lead>
            </div>
            
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-card border border-border rounded-xl p-6 hover:shadow-lg transition-all duration-300 animate-in fade-in slide-in-from-bottom-4 duration-600"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <blockquote className="text-muted-foreground mb-6 italic">
                  "{testimonial.content}"
                </blockquote>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="text-sm font-medium text-primary">
                      {testimonial.author.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                <div>
                    <p className="font-medium">{testimonial.author}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}, {testimonial.company}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced FAQ Section */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-muted/50 via-background to-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 animate-in fade-in slide-in-from-bottom-4 duration-600">
            <Badge className="mb-4 px-4 py-2 text-sm font-medium bg-primary/10 text-primary hover:text-white">
              Got Questions?
            </Badge>
            <H2 className="mb-6">Frequently Asked Questions</H2>
            <Lead className="text-lg">
              Everything you need to know about our services, pricing, and process.
            </Lead>
            </div>
            
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {[
                {
                  question: "What payment methods do you accept?",
                  answer: "We accept all major credit cards, PayPal, bank transfers, and cryptocurrency payments. We also offer flexible payment plans with 50% upfront and 50% upon completion.",
                  icon: "💳",
                  category: "Payment"
                },
                {
                  question: "Do you offer custom pricing for specific requirements?",
                  answer: "Absolutely! Every business has unique needs. We provide custom quotes for projects that don't fit our standard packages. Contact us for a personalized consultation and quote.",
                  icon: "🎯",
                  category: "Pricing"
                },
                {
                  question: "What is included in the maintenance period?",
                  answer: "Our maintenance includes regular security updates, bug fixes, performance optimization, content updates, backup management, and 24/7 monitoring. We ensure your website stays secure and performs optimally.",
                  icon: "🔧",
                  category: "Support"
                },
                {
                  question: "How long does it take to complete a website?",
                  answer: "Timelines vary by complexity: Starter websites (2-3 weeks), Professional websites (3-4 weeks), and Enterprise websites (4-6 weeks). We provide detailed project timelines during consultation.",
                  icon: "⏱️",
                  category: "Timeline"
                },
                {
                  question: "Do you offer ongoing support after the maintenance period?",
                  answer: "Yes! We offer flexible ongoing support packages starting at $99/month. This includes regular updates, security monitoring, content changes, and priority support response.",
                  icon: "🔄",
                  category: "Support"
                },
                {
                  question: "What if I'm not satisfied with the result?",
                  answer: "We offer a 100% satisfaction guarantee with unlimited revisions until you're completely happy. If you're still not satisfied, we'll refund your money - no questions asked.",
                  icon: "✅",
                  category: "Guarantee"
                },
                {
                  question: "Do you provide hosting and domain services?",
                  answer: "Yes! We offer premium hosting with 99.9% uptime guarantee, SSL certificates, daily backups, and domain registration. We can also work with your existing hosting provider.",
                  icon: "🌐",
                  category: "Services"
                },
                {
                  question: "Can you redesign my existing website?",
                  answer: "Absolutely! We specialize in website redesigns and can modernize your existing site while preserving your content and SEO rankings. We'll analyze your current site and provide recommendations.",
                  icon: "🎨",
                  category: "Services"
                },
                {
                  question: "Do you provide SEO services?",
                  answer: "Yes! All our websites include basic SEO optimization. We also offer advanced SEO packages including keyword research, content optimization, local SEO, and ongoing SEO maintenance.",
                  icon: "📈",
                  category: "Services"
                },
                {
                  question: "What technologies do you use?",
                  answer: "We use modern, industry-standard technologies including React, Next.js, TypeScript, Tailwind CSS, and more. We ensure your website is fast, secure, and future-proof.",
                  icon: "⚡",
                  category: "Technology"
                },
                {
                  question: "Do you offer e-commerce solutions?",
                  answer: "Yes! Our Enterprise plan includes full e-commerce functionality. We can integrate with Shopify, WooCommerce, or build custom e-commerce solutions tailored to your business needs.",
                  icon: "🛒",
                  category: "Services"
                },
                {
                  question: "What happens after I purchase a plan?",
                  answer: "After purchase, we'll schedule a detailed consultation to understand your requirements, create a project timeline, and begin development. You'll have regular updates throughout the process.",
                  icon: "🚀",
                  category: "Process"
                }
              ].map((faq, index) => (
                <div
                  key={index}
                  className="group bg-card border border-border rounded-2xl p-8 hover:shadow-xl transition-all duration-300 hover:border-primary/30 hover:scale-[1.02] animate-in fade-in slide-in-from-bottom-4 duration-600 relative overflow-hidden"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  {/* Background decoration */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/5 to-transparent rounded-full -translate-y-16 translate-x-16 group-hover:scale-110 transition-transform duration-300"></div>
                  
                  <div className="relative">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center text-2xl group-hover:scale-110 transition-transform duration-300">
                        {faq.icon}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <Badge variant="secondary" className="text-xs px-2 py-1 bg-primary/10 text-primary">
                            {faq.category}
                          </Badge>
                        </div>
                        <H3 className="text-lg font-semibold leading-tight group-hover:text-primary transition-colors duration-300">
                          {faq.question}
                        </H3>
                      </div>
                    </div>
                    <P className="text-muted-foreground leading-relaxed">
                      {faq.answer}
                    </P>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Additional CTA */}
            <div className="text-center mt-16 animate-in fade-in slide-in-from-bottom-4 duration-600" style={{ animationDelay: '600ms' }}>
              <div className="bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 rounded-2xl p-8 border border-primary/20">
                <H3 className="mb-4">Still Have Questions?</H3>
                <P className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                  Can't find the answer you're looking for? Our team is here to help with any questions about our services, pricing, or process.
                </P>
                <div className="flex flex-wrap justify-center gap-4">
                  <Button asChild size="lg" className="rounded-full px-8">
                    <Link href="/contact">Contact Our Team</Link>
                  </Button>
                  <Button asChild size="lg" variant="outline" className="rounded-full px-8">
                    <Link href="/services">View All Services</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced CTA Section */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-primary to-primary/80">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-600">
            <H2 className="mb-6 text-white">Ready to Get Started?</H2>
            <Lead className="mb-8 text-white/90 text-lg">
              Contact us today for a free consultation and let's discuss how we can help your business succeed online.
            </Lead>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild size="lg" variant="secondary" className="rounded-full px-8">
                <Link href="/contact">Get Free Consultation</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="rounded-full px-8 bg-transparent border-white/20 text-white hover:bg-white/10">
                <Link href="/services">View Our Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
} 