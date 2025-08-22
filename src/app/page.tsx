import { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { 
  ArrowRight, 
  CheckCircle, 
  Star, 
  Users, 
  Code,
  Palette,
  Bug,
  Puzzle,
  Zap,
  Shield,
  Clock,
  BarChart
} from "lucide-react"
import Link from "next/link"
import { HeroSection } from "@/components/sections/hero-section"
import { TechnologiesSection } from "@/components/sections/technologies-section"
import { BenefitsSection } from "@/components/sections/benefits-section"
import { ProcessSection } from "@/components/sections/process-section"
import { PortfolioSection } from "@/components/sections/portfolio-section"
import { TestimonialsSection } from "@/components/sections/testimonials-section"
import { FAQSection } from "@/components/sections/faq-section"
import { CTASection } from "@/components/sections/cta-section"
import BrandsWeWork from "@/components/sections/BrandsWeWork"
import { H2, H3, P, Lead } from "@/components/ui/typography"

export const metadata: Metadata = {
  title: "RTN Global - Web Development & Digital Marketing Services",
  description: "RTN Global provides comprehensive web development, UI/UX design, and digital marketing services. Transform your business with our expert solutions.",
  keywords: ["web development", "digital marketing", "UI/UX design", "SEO", "branding", "e-commerce"],
  authors: [{ name: "RTN Global" }],
  creator: "RTN Global",
  publisher: "RTN Global",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://rtnglobal.site"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "RTN Global - Web Development & Digital Marketing Services",
    description: "Transform your business with our expert web development and digital marketing solutions. Professional, reliable, and results-driven.",
    url: "https://rtnglobal.site",
    siteName: "RTN Global",
    images: [
      {
        url: "/images/hero-img.png",
        width: 1200,
        height: 630,
        alt: "RTN Global - Web Development & Digital Marketing Services",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "RTN Global - Web Development & Digital Marketing Services",
    description: "Transform your business with our expert web development and digital marketing solutions.",
    images: ["/images/hero-img.png"],
    creator: "@rtnglobalofficial",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
}

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <HeroSection 
        title="Custom Web Solutions That Drive Business Growth"
        subtitle="Expert Web Development & Design Agency"
        description="From stunning websites to custom applications, we deliver results-focused digital solutions that help your business stand out and succeed online."
        primaryCTA={{
          text: "Start Your Project",
          href: "/contact"
        }}
        secondaryCTA={{
          text: "Free Consultation",
          href: "/contact/free-consultation"
        }}
        features={[
          "Custom web development tailored to your needs",
          "Professional UI/UX design that converts visitors",
          "Expert Wix development and bug fixes",
          "Strategic solutions for business growth"
        ]}
        imageUrl="/images/hero/home-hero1.jpg"
      />

      {/* Services Overview */}
      <section className="py-16 bg-muted/20 relative">
        {/* Shape Divider */}
        <div className="absolute top-0 left-0 w-full overflow-hidden leading-none">
          <svg className="relative block w-full h-12" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M0,120V63.56c58,10.79,114.16,30.13,172,41.86,82.39,16.72,168.19,17.73,250.45,.39C376.22,89,293.33,48,214.34,27.17,144.29,8.69,67.81,1.08,0,24.78V120Z" className="fill-white"></path>
          </svg>
        </div>
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <H2 className="mb-4">Core Services at a Glance</H2>
            <P className="text-lg text-muted-foreground max-w-3xl mx-auto">
              We offer a comprehensive suite of digital services to help your business thrive in the modern digital landscape.
            </P>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
            <Card className="group hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <H3 className="mb-3 group-hover:text-primary text-base font-semibold transition-colors">Web Development</H3>
                <P className="text-muted-foreground mb-4">
                  Custom websites and web applications built with modern technologies and best practices.
                </P>
                <Link href="/services#web-development">
                  <Button variant="outline" size="sm" className="group-hover:bg-primary group-hover:text-white transition-colors">
                    Learn More
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Palette className="h-6 w-6 text-primary" />
                </div>
                <H3 className="mb-3 group-hover:text-primary transition-colors">UI/UX Design</H3>
                <P className="text-muted-foreground mb-4">
                  Beautiful, intuitive designs that enhance user experience and drive engagement.
                </P>
                <Link href="/services#ui-ux-design">
                  <Button variant="outline" size="sm" className="group-hover:bg-primary group-hover:text-white transition-colors">
                    Learn More
                    <ArrowRight className="h-4 w-4 ml-2" />
                    </Button>
                  </Link>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Bug className="h-6 w-6 text-primary" />
                </div>
                <H3 className="mb-3 group-hover:text-primary transition-colors">Bug Fixes</H3>
                <P className="text-muted-foreground mb-4">
                  Quick and reliable bug fixes to keep your website running smoothly and efficiently.
                </P>
                <Link href="/services#bug-fixes">
                  <Button variant="outline" size="sm" className="group-hover:bg-primary group-hover:text-white transition-colors">
                    Learn More
                    <ArrowRight className="h-4 w-4 ml-2" />
                    </Button>
                  </Link>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Puzzle className="h-6 w-6 text-primary" />
                </div>
                <H3 className="mb-3 group-hover:text-primary transition-colors">Custom Solutions</H3>
                <P className="text-muted-foreground mb-4">
                  Tailored solutions designed to meet your specific business needs and requirements.
                </P>
                <Link href="/services#custom-solutions">
                  <Button variant="outline" size="sm" className="group-hover:bg-primary group-hover:text-white transition-colors">
                    Learn More
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 relative bg-cover bg-center bg-no-repeat text-white" style={{ backgroundImage: 'url(/images/hero/why-chose-us.jpg)' }}>
        {/* Background Overlay */}
        <div className="absolute inset-0 bg-black/70"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <H2 className="mb-6">
              Why Choose RTN Global for Your Digital Success?
            </H2>
            <P className="text-xl text-white/90 mb-8">
              We combine technical expertise with creative innovation to deliver exceptional results that drive your business forward.
            </P>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="text-center border border-white/20 rounded-xl p-6 hover:border-white/40 transition-colors">
                <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="h-8 w-8" />
                      </div>
                <H3 className="mb-3">Fast & Reliable</H3>
                <P className="text-white/80">
                  Quick turnaround times without compromising on quality or attention to detail.
                </P>
                    </div>

              <div className="text-center border border-white/20 rounded-xl p-6 hover:border-white/40 transition-colors">
                <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-8 w-8" />
                </div>
                <H3 className="mb-3">Secure & Scalable</H3>
                <P className="text-white/80">
                  Built with security in mind and designed to grow with your business needs.
                </P>
              </div>
              
              <div className="text-center border border-white/20 rounded-xl p-6 hover:border-white/40 transition-colors">
                <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8" />
                  </div>
                <H3 className="mb-3">Expert Team</H3>
                <P className="text-white/80">
                  Experienced professionals dedicated to delivering outstanding results for your business.
                </P>
                </div>
              </div>
            </div>
          </div>
        </section>

      {/* Brands We Work With */}
      <BrandsWeWork />

      {/* Website Maintenance Section */}
      <section className="py-20 bg-gradient-to-br from-muted/30 via-background to-muted/20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Content */}
              <div className="space-y-8">
                <div className="space-y-4">
                  <Badge className="px-4 py-2 text-sm font-medium bg-primary/10 text-primary">
                    🔥 Most Popular Service
                  </Badge>
                  <H2 className="text-4xl md:text-5xl leading-tight">
                    Website Maintenance Services
                  </H2>
                  <Lead className="text-xl text-muted-foreground">
                    Keep your website secure, up-to-date, and performing at its best with our comprehensive maintenance services
                  </Lead>
                </div>

                <div className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {[
                      { icon: Shield, text: "Security Monitoring & Updates" },
                      { icon: Clock, text: "24/7 Performance Monitoring" },
                      { icon: BarChart, text: "Analytics & Reporting" },
                      { icon: Zap, text: "Speed Optimization" }
                    ].map((item, index) => (
                      <div key={index} className="flex items-center gap-3 p-4 bg-card border border-border rounded-lg hover:border-primary/20 transition-colors">
                        <div className="p-2 bg-primary/10 rounded-lg">
                          <item.icon className="h-5 w-5 text-primary" />
                        </div>
                        <span className="font-medium text-sm">{item.text}</span>
                      </div>
                    ))}
                  </div>

                  <div className="bg-primary/5 border border-primary/10 rounded-xl p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="p-2 bg-primary/20 rounded-lg">
                        <Star className="h-5 w-5 text-primary" />
                      </div>
                      <H3 className="text-lg font-semibold">What&apos;s Included</H3>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {[
                        "Regular Software Updates",
                        "Security Patching",
                        "Backup Management",
                        "Content Updates",
                        "Performance Optimization",
                        "Technical Support"
                      ].map((feature, index) => (
                        <div key={index} className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                          <span className="text-sm text-muted-foreground">{feature}</span>
                        </div>
                      ))}
              </div>
            </div>
            
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button asChild size="lg" className="flex-1">
                      <Link href="/services/website-maintenance">
                        Learn More About Maintenance
                      </Link>
                    </Button>
                    <Button asChild variant="outline" size="lg">
                      <Link href="/contact/free-consultation">
                        Get Free Consultation
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
              
              {/* Visual Content */}
              <div className="relative">
                <div className="bg-card border border-border rounded-2xl p-8 shadow-xl">
                  <div className="space-y-6">
                    {/* Pricing Card */}
                    <div className="bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20 rounded-xl p-6 text-center">
                      <div className="mb-4">
                        <Badge className="px-3 py-1 text-xs font-medium bg-primary text-white">
                          Starting at
                        </Badge>
                      </div>
                      <div className="text-4xl font-bold text-primary mb-2">$250</div>
                      <div className="text-muted-foreground mb-4">per month</div>
                      <div className="text-sm text-muted-foreground">
                        Comprehensive maintenance package
                </div>
              </div>
              
                    {/* Benefits List */}
                    <div className="space-y-4">
                      <H3 className="text-lg font-semibold">Why Choose Our Maintenance?</H3>
                      {[
                        "Prevent security vulnerabilities",
                        "Maintain optimal performance",
                        "Keep content fresh and relevant",
                        "Reduce downtime and issues",
                        "Protect your digital investment"
                      ].map((benefit, index) => (
                        <div key={index} className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-sm text-muted-foreground">{benefit}</span>
                </div>
                      ))}
              </div>
              
                    {/* Trust Indicators */}
                    <div className="border-t border-border pt-6">
                      <div className="flex items-center justify-between text-sm">
                        <div className="flex items-center gap-2">
                          <Shield className="h-4 w-4 text-green-500" />
                          <span className="text-muted-foreground">99.9% Uptime</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Clock className="h-4 w-4 text-blue-500" />
                          <span className="text-muted-foreground">24/7 Support</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-primary" />
                          <span className="text-muted-foreground">Guaranteed</span>
                        </div>
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

      {/* Process Section */}
      <ProcessSection />

      {/* Portfolio Section */}
      <PortfolioSection />

      {/* Technologies Section */}
      <TechnologiesSection />

      {/* Benefits Section */}
      <BenefitsSection />

      {/* Testimonials Section */}
      <TestimonialsSection 
        testimonials={[
          {
            content: "RTN Global transformed our online presence completely. Their expertise in web development and design exceeded our expectations.",
            author: "Sarah Johnson",
            role: "CEO",
            company: "TechStart Inc."
          },
          {
            content: "Professional, reliable, and results-driven. The team at RTN Global delivered exactly what we needed to grow our business.",
            author: "Michael Chen",
            role: "Marketing Director",
            company: "Growth Solutions"
          },
          {
            content: "Outstanding service and attention to detail. Our new website has significantly improved our customer engagement.",
            author: "Emily Rodriguez",
            role: "Founder",
            company: "Creative Studios"
          }
        ]}
      />

      {/* Shape Divider */}
      <div className="relative w-full overflow-hidden leading-none">
        <svg className="relative block w-full h-16" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M878.61,63.56c-58,10.79-114.16,30.13-172,41.86-82.39,16.72-168.19,17.73-250.45,.39C376.22,89,293.33,48,214.34,27.17,144.29,8.69,67.81,1.08,0,24.78V120H1200V92.65A600.21,600.21,0,0,1,878.61,63.56Z" className="fill-primary"></path>
        </svg>
      </div>

      {/* CTA Section */}
      <CTASection 
        title="Ready to Transform Your Digital Presence?"
        description="Let&apos;s discuss how we can help you achieve your business goals with our custom web development and design services."
        primaryButton={{
          text: "Schedule a Consultation",
          href: "/contact",
          variant: "secondary"
        }}
        secondaryButton={{
          text: "View Our Work",
          href: "/portfolio",
          variant: "outline"
        }}
        backgroundClassName="bg-primary"
        textColorClassName="text-white"
      />


       {/* FAQ Section */}
       <FAQSection 
        faqs={[
          {
            question: "What services does RTN Global offer?",
            answer: "We offer comprehensive web development, UI/UX design, bug fixes, and custom solutions tailored to your business needs."
          },
          {
            question: "How long does a typical project take?",
            answer: "Project timelines vary based on complexity. Simple websites take 2-4 weeks, while complex applications may take 8-12 weeks."
          },
          {
            question: "Do you provide ongoing support?",
            answer: "Yes, we offer ongoing maintenance, updates, and support to ensure your website continues to perform optimally."
          },
          {
            question: "What technologies do you use?",
            answer: "We use modern technologies including React, Next.js, Node.js, and various other cutting-edge tools and frameworks."
          }
        ]}
      />
    </div>
  )
}
