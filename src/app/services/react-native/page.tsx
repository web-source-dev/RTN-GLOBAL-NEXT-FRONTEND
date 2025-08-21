"use client"

import React from 'react'
import Link from 'next/link'
import { Layout } from '@/components/layout/layout'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'
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
  Smartphone,
  SmartphoneIcon,
  Globe,
  Layers,
  Cpu,
  Database,
  Wifi,
  Lock,
  Palette,
  Settings,
  Rocket,
  Target,
  TrendingUp,
  Award,
  CheckCircle,
  Play,
  Download,
  Share2,
  Heart,
  Eye,
  Calendar,
  Building,
  ShoppingBag,
  SmartphoneIcon as Phone,
  Tablet,
  Monitor,
  Laptop,
  SmartphoneIcon as Mobile,
  SmartphoneIcon as App,
  SmartphoneIcon as Device
} from 'lucide-react'
import { OptimizedImage } from '@/components/ui/optimized-image'
import { H1, H2, H3, P, Lead } from '@/components/ui/typography'

export default function ReactNativeServicePage() {
  // React Native specific statistics
  const statistics = [
    { value: '98%', label: 'Code Reusability', icon: <Layers className="h-6 w-6 text-primary" /> },
    { value: '60%', label: 'Faster Development', icon: <Rocket className="h-6 w-6 text-primary" /> },
    { value: '95%', label: 'Client Satisfaction', icon: <Star className="h-6 w-6 text-primary" /> },
    { value: '200+', label: 'Apps Delivered', icon: <Smartphone className="h-6 w-6 text-primary" /> },
  ];

  // React Native features
  const features = [
    {
      icon: <Globe className="h-8 w-8 text-primary" />,
      title: "Cross-Platform Development",
      description: "Single codebase for both iOS and Android platforms, reducing development time and costs by up to 60%."
    },
    {
      icon: <Cpu className="h-8 w-8 text-primary" />,
      title: "Native Performance",
      description: "Near-native performance with optimized rendering and smooth animations for the best user experience."
    },
    {
      icon: <Database className="h-8 w-8 text-primary" />,
      title: "Rich Ecosystem",
      description: "Access to thousands of pre-built components and libraries to accelerate development."
    },
    {
      icon: <Wifi className="h-8 w-8 text-primary" />,
      title: "Hot Reloading",
      description: "Instant code updates during development for faster iteration and debugging."
    },
    {
      icon: <Lock className="h-8 w-8 text-primary" />,
      title: "Secure by Default",
      description: "Built-in security features and best practices for data protection and app security."
    },
    {
      icon: <Palette className="h-8 w-8 text-primary" />,
      title: "Custom UI/UX",
      description: "Beautiful, responsive designs that adapt perfectly to different screen sizes and orientations."
    }
  ];

  // Development process
  const processSteps = [
    {
      number: "01",
      title: "Discovery & Planning",
      description: "We analyze your app requirements, target audience, and business goals to create a comprehensive development strategy.",
      icon: <Target className="h-6 w-6" />
    },
    {
      number: "02",
      title: "Design & Prototyping",
      description: "Our designers create intuitive UI/UX designs and interactive prototypes that work seamlessly across both platforms.",
      icon: <Palette className="h-6 w-6" />
    },
    {
      number: "03",
      title: "Development & Testing",
      description: "Our React Native experts build your app using best practices, with continuous testing on both iOS and Android.",
      icon: <Code className="h-6 w-6" />
    },
    {
      number: "04",
      title: "Deployment & Launch",
      description: "We handle app store submissions, deployment, and provide ongoing support and maintenance.",
      icon: <Rocket className="h-6 w-6" />
    }
  ];

  // Technologies we use
  const technologies = [
    { name: "React Native", icon: "⚛️", description: "Core framework" },
    { name: "TypeScript", icon: "📘", description: "Type safety" },
    { name: "Redux", icon: "🔄", description: "State management" },
    { name: "Firebase", icon: "🔥", description: "Backend services" },
    { name: "Expo", icon: "🚀", description: "Development tools" },
    { name: "React Navigation", icon: "🧭", description: "Navigation" }
  ];

  // App types we develop
  const appTypes = [
    {
      title: "E-commerce Apps",
      description: "Full-featured shopping apps with payment integration, inventory management, and user accounts.",
      icon: <ShoppingBag className="h-6 w-6" />
    },
    {
      title: "Social Media Apps",
      description: "Engaging social platforms with real-time messaging, content sharing, and user interactions.",
      icon: <Share2 className="h-6 w-6" />
    },
    {
      title: "Business Apps",
      description: "Enterprise solutions for internal operations, customer management, and business processes.",
      icon: <Briefcase className="h-6 w-6" />
    },
    {
      title: "Entertainment Apps",
      description: "Media streaming, gaming, and entertainment apps with rich multimedia content.",
      icon: <Play className="h-6 w-6" />
    }
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
            "name": "React Native Development Services | RTN Global",
            "serviceType": "React Native Development",
            "url": "https://rtnglobal.site/services/react-native",
            "provider": {
              "@type": "Organization",
              "name": "RTN Global",
              "url": "https://rtnglobal.site/",
              "logo": "https://rtnglobal.site/logo.png"
            },
            "description": "Professional React Native development services for cross-platform mobile applications. Build high-performance iOS and Android apps with a single codebase.",
            "offers": {
              "@type": "Offer",
              "price": "8999",
              "priceCurrency": "USD",
              "description": "Starting at $8,999 for React Native app development"
            }
          })
        }}
      />

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-primary/5 via-background to-primary/10 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        
        {/* Mobile App Illustrations */}
        <div className="absolute top-10 right-10 w-32 h-32 bg-primary/10 rounded-full blur-2xl"></div>
        <div className="absolute bottom-20 left-10 w-24 h-24 bg-primary/5 rounded-full blur-xl"></div>
        <div className="absolute top-1/3 left-1/4 w-16 h-16 bg-primary/10 rounded-full blur-lg"></div>
        
        {/* Floating Mobile Devices */}
        <div className="absolute top-20 right-20 opacity-20">
          <div className="relative">
            <div className="w-16 h-24 bg-gradient-to-b from-primary/20 to-primary/10 rounded-2xl border border-primary/30 transform rotate-12"></div>
            <div className="absolute inset-2 bg-gradient-to-b from-background to-muted/50 rounded-xl"></div>
            <div className="absolute top-3 left-1/2 transform -translate-x-1/2 w-8 h-1 bg-primary/30 rounded-full"></div>
            <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 w-6 h-6 bg-primary/20 rounded-full"></div>
          </div>
        </div>
        
        <div className="absolute bottom-32 right-32 opacity-15">
          <div className="relative">
            <div className="w-20 h-28 bg-gradient-to-b from-primary/15 to-primary/5 rounded-3xl border border-primary/20 transform -rotate-6"></div>
            <div className="absolute inset-2 bg-gradient-to-b from-background to-muted/30 rounded-2xl"></div>
            <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-10 h-1 bg-primary/25 rounded-full"></div>
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-primary/15 rounded-full"></div>
          </div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <div className="space-y-4">
                  <Badge className="px-4 py-2 text-sm font-medium bg-primary/10 text-primary">
                    📱 Cross-Platform Development
                  </Badge>
                  <H1 className="text-4xl md:text-5xl font-bold leading-tight">
                    React Native Development Services
                  </H1>
                  <Lead className="text-xl text-muted-foreground">
                    Build high-performance mobile applications for iOS and Android with a single codebase. 
                    Faster development, lower costs, and native performance.
                  </Lead>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  {statistics.map((stat, index) => (
                    <div key={index} className="bg-card border border-border rounded-lg p-4 text-center">
                      <div className="flex items-center justify-center mb-2">
                        {stat.icon}
                      </div>
                      <div className="text-2xl font-bold text-primary mb-1">{stat.value}</div>
                      <div className="text-sm text-muted-foreground">{stat.label}</div>
                    </div>
                  ))}
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button asChild size="lg" className="flex-1">
                    <Link href="/contact/free-consultation">
                      Get Free Consultation
                    </Link>
                  </Button>
                  <Button asChild variant="outline" size="lg">
                    <Link href="/portfolio">
                      View Our Work
                    </Link>
                  </Button>
                </div>
              </div>

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
                      <div className="text-4xl font-bold text-primary mb-2">$8,999</div>
                      <div className="text-muted-foreground mb-4">for complete app development</div>
                      <div className="text-sm text-muted-foreground">
                        Includes design, development, testing & deployment
                      </div>
                    </div>

                    {/* Quick Info */}
                    <div className="space-y-4">
                      <div className="flex items-center gap-3">
                        <Clock className="h-5 w-5 text-primary" />
                        <span className="text-sm">8-16 weeks development time</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Smartphone className="h-5 w-5 text-primary" />
                        <span className="text-sm">iOS & Android platforms</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle className="h-5 w-5 text-primary" />
                        <span className="text-sm">App Store deployment included</span>
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

      {/* Features Section */}
      <section className="py-20 bg-muted/20 relative overflow-hidden">
        {/* Background Illustrations */}
        <div className="absolute top-10 left-10 opacity-10">
          <div className="grid grid-cols-2 gap-4">
            <div className="w-12 h-16 bg-primary/20 rounded-lg"></div>
            <div className="w-12 h-16 bg-primary/15 rounded-lg"></div>
            <div className="w-12 h-16 bg-primary/10 rounded-lg"></div>
            <div className="w-12 h-16 bg-primary/5 rounded-lg"></div>
          </div>
        </div>
        
        <div className="absolute bottom-10 right-10 opacity-10">
          <div className="flex space-x-2">
            <div className="w-8 h-12 bg-primary/15 rounded-md"></div>
            <div className="w-8 h-12 bg-primary/10 rounded-md"></div>
            <div className="w-8 h-12 bg-primary/5 rounded-md"></div>
          </div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <Badge className="px-4 py-2 text-sm font-medium bg-primary/10 text-primary mb-4">
              ⚡ Why Choose React Native
            </Badge>
            <H2 className="text-4xl font-bold mb-4">Powerful Features for Modern Apps</H2>
            <Lead className="text-lg text-muted-foreground">
              React Native combines the best of native development with the efficiency of web development.
            </Lead>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-2xl transition-all duration-300 group h-full relative overflow-hidden">
                {/* Card Background Illustration */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-primary/5 rounded-full -translate-y-10 translate-x-10"></div>
                <div className="absolute bottom-0 left-0 w-16 h-16 bg-primary/5 rounded-full translate-y-8 -translate-x-8"></div>
                
                <CardContent className="p-8 text-center h-full flex flex-col justify-center relative z-10">
                  <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                    {feature.icon}
                  </div>
                  <H3 className="text-xl font-bold mb-3">{feature.title}</H3>
                  <P className="text-muted-foreground">{feature.description}</P>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-muted/10 relative overflow-hidden">
        {/* Process Flow Illustration */}
        <div className="absolute top-1/2 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/20 to-transparent transform -translate-y-1/2"></div>
        <div className="absolute top-1/2 left-1/4 w-4 h-4 bg-primary/30 rounded-full transform -translate-y-1/2 -translate-x-1/2"></div>
        <div className="absolute top-1/2 left-1/2 w-4 h-4 bg-primary/30 rounded-full transform -translate-y-1/2 -translate-x-1/2"></div>
        <div className="absolute top-1/2 left-3/4 w-4 h-4 bg-primary/30 rounded-full transform -translate-y-1/2 -translate-x-1/2"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <Badge className="px-4 py-2 text-sm font-medium bg-primary/10 text-primary mb-4">
              🚀 Our Development Process
            </Badge>
            <H2 className="text-4xl font-bold mb-4">How We Build Your App</H2>
            <Lead className="text-lg text-muted-foreground">
              Our proven development process ensures your React Native app is delivered on time, within budget, and exceeds expectations.
            </Lead>
          </div>

          <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-8">
            {processSteps.map((step, index) => (
              <Card key={index} className="border-0 shadow-2xl hover:shadow-2xl transition-all duration-300 group h-full relative overflow-hidden">
                {/* Step Number Background */}
                <div className="absolute top-4 right-4 w-20 h-20 bg-primary/5 rounded-full opacity-50"></div>
                
                <CardContent className="p-8 text-center h-full flex flex-col justify-center relative z-10">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                    <span className="text-2xl font-bold text-primary">{step.number}</span>
                  </div>
                  <H3 className="text-xl font-bold mb-3">{step.title}</H3>
                  <P className="text-muted-foreground">{step.description}</P>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20 bg-muted/20 relative overflow-hidden">
        {/* Tech Stack Illustration */}
        <div className="absolute top-20 left-20 opacity-10">
          <div className="flex space-x-2">
            <div className="w-6 h-6 bg-primary/20 rounded"></div>
            <div className="w-6 h-6 bg-primary/15 rounded"></div>
            <div className="w-6 h-6 bg-primary/10 rounded"></div>
          </div>
        </div>
        
        <div className="absolute bottom-20 right-20 opacity-10">
          <div className="grid grid-cols-3 gap-1">
            <div className="w-4 h-4 bg-primary/15 rounded"></div>
            <div className="w-4 h-4 bg-primary/10 rounded"></div>
            <div className="w-4 h-4 bg-primary/5 rounded"></div>
            <div className="w-4 h-4 bg-primary/10 rounded"></div>
            <div className="w-4 h-4 bg-primary/15 rounded"></div>
            <div className="w-4 h-4 bg-primary/20 rounded"></div>
          </div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <Badge className="px-4 py-2 text-sm font-medium bg-primary/10 text-primary mb-4">
              🛠️ Technologies We Use
            </Badge>
            <H2 className="text-4xl font-bold mb-4">Modern Tech Stack</H2>
            <Lead className="text-lg text-muted-foreground">
              We leverage the latest React Native technologies and tools to build robust, scalable applications.
            </Lead>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {technologies.map((tech, index) => (
              <Card key={index} className="text-center border-0 shadow-2xl hover:shadow-2xl transition-all duration-300 group h-full relative overflow-hidden">
                {/* Tech Icon Background */}
                <div className="absolute top-2 right-2 w-8 h-8 bg-primary/5 rounded-full"></div>
                
                <CardContent className="p-6 h-full flex flex-col justify-center relative z-10">
                  <div className="text-3xl mb-3">{tech.icon}</div>
                  <div className="font-semibold mb-1">{tech.name}</div>
                  <div className="text-sm text-muted-foreground">{tech.description}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* App Types Section */}
      <section className="py-20 bg-muted/10 relative overflow-hidden">
        {/* App Types Illustration */}
        <div className="absolute top-10 left-1/4 opacity-10">
          <div className="flex space-x-3">
            <div className="w-10 h-14 bg-primary/20 rounded-lg"></div>
            <div className="w-10 h-14 bg-primary/15 rounded-lg"></div>
            <div className="w-10 h-14 bg-primary/10 rounded-lg"></div>
          </div>
        </div>
        
        <div className="absolute bottom-10 right-1/4 opacity-10">
          <div className="grid grid-cols-2 gap-2">
            <div className="w-8 h-12 bg-primary/15 rounded-md"></div>
            <div className="w-8 h-12 bg-primary/10 rounded-md"></div>
            <div className="w-8 h-12 bg-primary/5 rounded-md"></div>
            <div className="w-8 h-12 bg-primary/20 rounded-md"></div>
          </div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <Badge className="px-4 py-2 text-sm font-medium bg-primary/10 text-primary mb-4">
              📱 Types of Apps We Build
            </Badge>
            <H2 className="text-4xl font-bold mb-4">Versatile App Development</H2>
            <Lead className="text-lg text-muted-foreground">
              From simple utility apps to complex enterprise solutions, we build React Native apps for every industry.
            </Lead>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {appTypes.map((appType, index) => (
              <Card key={index} className="border-0 shadow-2xl hover:shadow-2xl transition-all duration-300 group h-full relative overflow-hidden">
                {/* App Type Background */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-full -translate-y-12 translate-x-12"></div>
                
                <CardContent className="p-8 h-full flex flex-col justify-center relative z-10">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      {appType.icon}
                    </div>
                    <div>
                      <H3 className="text-xl font-bold mb-2">{appType.title}</H3>
                      <P className="text-muted-foreground">{appType.description}</P>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary to-primary/80 text-white relative overflow-hidden">
        {/* CTA Background Illustrations */}
        <div className="absolute top-10 left-10 opacity-20">
          <div className="w-16 h-24 bg-white/10 rounded-2xl transform rotate-12"></div>
        </div>
        <div className="absolute bottom-10 right-10 opacity-20">
          <div className="w-20 h-28 bg-white/10 rounded-3xl transform -rotate-6"></div>
        </div>
        <div className="absolute top-1/2 left-1/3 opacity-15">
          <div className="w-12 h-16 bg-white/10 rounded-lg transform rotate-45"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <H2 className="text-4xl font-bold mb-4">Ready to Build Your React Native App?</H2>
            <Lead className="text-xl text-white/90 mb-8">
              Let's discuss your app idea and create a custom React Native solution that drives your business forward.
            </Lead>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" variant="secondary">
                <Link href="/contact/free-consultation">
                  Get Free Consultation
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
                <Link href="/portfolio">
                  View Our Portfolio
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}
