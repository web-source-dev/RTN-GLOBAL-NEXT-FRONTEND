import { Layout } from "@/components/layout/layout"
import { HeroSection } from "@/components/sections/hero-section"
import { CTASection } from "@/components/sections/cta-section"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Filter, BarChart3, ArrowUpRight, Clock, Users, Target } from "lucide-react"
import { caseStudies, getFeaturedCaseStudies, getUniqueIndustries, getUniqueServices } from "@/data/case-studies"
import { OptimizedImage } from "@/components/ui/optimized-image"


export default function CaseStudiesPage() {
  // Get data using utility functions from the data file
  const featuredCaseStudies = getFeaturedCaseStudies();
  const industries = getUniqueIndustries();
  const uniqueServices = getUniqueServices();

  return (
    <Layout>
      {/* Hero Section */}
      <HeroSection
        title="Case Studies"
        description="Explore detailed examinations of our client work, showcasing the challenges, solutions, and measurable results we've delivered."
        backgroundClassName="bg-muted/30"
      />
      
      {/* Featured Case Studies */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12 text-center">Featured Success Stories</h2>
          
          <div className="grid gap-12">
            {featuredCaseStudies.map((study, index) => (
              <div key={index} className="grid md:grid-cols-2 gap-8 items-center">
                {/* Image Side */}
                <div className={`${index % 2 === 1 ? 'md:order-2' : ''}`}>
                  <div className="aspect-video bg-muted rounded-lg overflow-hidden relative">
                    <div className="absolute inset-0 flex items-center justify-center bg-primary/20 text-3xl font-bold text-background/20">
                      <OptimizedImage 
                        src={study.image}
                        alt={study.title}
                        fill
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>
                
                {/* Content Side */}
                <div className={`${index % 2 === 1 ? 'md:order-1' : ''}`}>
                  <div className="space-y-6">
                    <div>
                      <div className="text-sm font-medium text-muted-foreground mb-2">{study.client} • {study.industry}</div>
                      <h3 className="text-2xl font-bold mb-3">{study.title}</h3>
                      <p className="text-muted-foreground">{study.summary}</p>
                    </div>
                    
                    {/* Key Metric */}
                    <div className="bg-primary/5 border border-primary/10 rounded-lg p-6">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                          <BarChart3 className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                          <div className="text-3xl font-bold">{study.featuredMetric.value}</div>
                          <div className="text-sm text-muted-foreground">{study.featuredMetric.label}</div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Services */}
                    <div className="flex flex-wrap gap-2">
                      {study.services.map((service, i) => (
                        <span key={i} className="px-2.5 py-0.5 bg-secondary text-secondary-foreground text-xs font-medium rounded-full">
                          {service}
                        </span>
                      ))}
                    </div>
                    
                    <div className="pt-2">
                      <Button asChild>
                        <Link href={`/case-studies/${study.slug}`}>
                          View Case Study
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* All Case Studies Grid */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <Link 
                key={index} 
                href={`/case-studies/${study.slug}`}
                className="group"
              >
                <div className="bg-card border border-border rounded-lg overflow-hidden transition-all duration-200 h-full hover:shadow-md flex flex-col">
                  {/* Case Study Image */}
                  <div className="aspect-video bg-muted relative">
                    <div className="absolute inset-0 flex items-center justify-center bg-primary/10 text-xl font-bold text-background/20 group-hover:bg-primary/20 transition-colors duration-200">
                      <OptimizedImage 
                        src={study.image}
                        alt={study.title}
                        fill
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="p-6 flex-grow flex flex-col">
                    <div className="mb-4 flex-grow">
                      <div className="flex justify-between items-center mb-2">
                        <div className="text-sm text-muted-foreground">{study.industry}</div>
                        <div className="flex items-center gap-1 text-xs text-muted-foreground">
                          <Clock className="h-3.5 w-3.5" />
                          <span>{study.duration}</span>
                        </div>
                      </div>
                      
                      <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors duration-200">
                        {study.title}
                      </h3>
                      
                      <p className="text-muted-foreground text-sm line-clamp-3">
                        {study.summary}
                      </p>
                    </div>
                    
                    {/* Metrics */}
                    <div className="grid grid-cols-3 gap-4 mb-4">
                      <div className="bg-primary/5 rounded-lg p-3 text-center">
                        <div className="text-lg font-bold text-primary">{study.featuredMetric.value}</div>
                        <div className="text-xs text-muted-foreground line-clamp-2">{study.featuredMetric.label}</div>
                      </div>
                      
                      {study.secondaryMetrics.slice(0, 2).map((metric, i) => (
                        <div key={i} className="bg-muted rounded-lg p-3 text-center">
                          <div className="text-lg font-bold">{metric.value}</div>
                          <div className="text-xs text-muted-foreground line-clamp-2">{metric.label}</div>
                        </div>
                      ))}
                    </div>
                    
                    {/* Services */}
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {study.services.slice(0, 2).map((service, i) => (
                        <span key={i} className="px-2 py-0.5 bg-secondary text-secondary-foreground text-xs font-medium rounded-full">
                          {service}
                        </span>
                      ))}
                      {study.services.length > 2 && (
                        <span className="px-2 py-0.5 bg-secondary text-secondary-foreground text-xs font-medium rounded-full">
                          +{study.services.length - 2} more
                        </span>
                      )}
                    </div>
                    
                    {/* View Link */}
                    <div className="text-sm font-medium text-primary flex items-center gap-1 group-hover:gap-2 transition-all duration-200 mt-auto">
                      View Case Study
                      <ArrowUpRight className="h-4 w-4" />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      
      {/* Our Process Teaser */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">Our Results-Driven Approach</h2>
                <p className="text-muted-foreground mb-6">
                  Every case study represents our strategic methodology in action. We combine research, 
                  creativity, and data-driven decision making to deliver measurable results for our clients.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Target className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                    </div>
                    <div>
                      <h3 className="font-bold mb-1">Strategic Planning</h3>
                      <p className="text-sm text-muted-foreground">We develop comprehensive strategies based on research and analysis.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Users className="h-5 w-5 text-purple-600 dark:text-purple-400" />
                    </div>
                    <div>
                      <h3 className="font-bold mb-1">Audience-Focused</h3>
                      <p className="text-sm text-muted-foreground">We create solutions that resonate with your specific target audience.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-full bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <BarChart3 className="h-5 w-5 text-emerald-600 dark:text-emerald-400" />
                    </div>
                    <div>
                      <h3 className="font-bold mb-1">Metrics-Driven</h3>
                      <p className="text-sm text-muted-foreground">We measure success through tangible business outcomes and data.</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8">
                  <Button asChild>
                    <Link href="/process">
                      Learn About Our Process
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
              
              <div className="relative">
                <div className="aspect-square w-full bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-950/30 dark:to-purple-950/30 rounded-lg overflow-hidden flex items-center justify-center">
                  <div className="absolute w-36 h-36 bg-purple-100/50 dark:bg-purple-900/20 rounded-full top-1/4 left-1/4 transform -translate-x-1/2 -translate-y-1/2"></div>
                  <div className="absolute w-48 h-48 bg-blue-100/50 dark:bg-blue-900/20 rounded-full bottom-1/4 right-1/4 transform translate-x-1/2 translate-y-1/2"></div>
                  <div className="absolute w-24 h-24 bg-emerald-100/50 dark:bg-emerald-900/20 rounded-full bottom-1/4 left-1/3"></div>
                  <div className="relative z-10 text-center">
                    <div className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">
                      Results
                    </div>
                    <div className="text-muted-foreground mt-2">
                      Delivering measurable outcomes
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <CTASection
        title="Ready to Become Our Next Success Story?"
        description="Let's discuss how our strategic approach can help your brand achieve measurable results."
        primaryButton={{
          text: "Start a Project",
          href: `${process.env.NEXT_PUBLIC_ORDERS_URL}/order`
        }}
        secondaryButton={{
          text: "Chat with Experts",
          href: `${process.env.NEXT_PUBLIC_ORDERS_URL}/chat`
        }}
      />
    </Layout>
  );
} 