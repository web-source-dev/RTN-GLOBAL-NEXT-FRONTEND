import Link from "next/link";
import { notFound } from "next/navigation";
import { 
  BarChart3, ArrowRight, Clock, Users2, Quote, FileText, 
  ArrowUpRight, Lightbulb, LineChart, Code, Target, Search, 
  Monitor, PenTool, Rocket, Zap, CheckCircle2,
  BookOpen, Briefcase, ChevronDown
} from "lucide-react";
import { getCaseStudyBySlug, caseStudies } from "@/data/case-studies";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/layout/layout";
import { CTASection } from "@/components/sections/cta-section";
import { TOCSection } from "@/components/case-studies/table-of-contents";
import { OptimizedImage } from "@/components/ui/optimized-image";

type Props = {
  params: {
    slug: string;
  };
};

// Replace the Record<string, any> with a proper type for Lucide icons
const iconMap: Record<string, React.ComponentType<React.SVGProps<SVGSVGElement>>> = {
  "Search": Search,
  "Lightbulb": Lightbulb,
  "PenTool": PenTool,
  "Monitor": Monitor,
  "Rocket": Rocket,
  "Code": Code,
  "Target": Target,
  "Zap": Zap,
  "CheckCircle2": CheckCircle2,
  "Briefcase": Briefcase,
};

// Generate static params for all case studies
export async function generateStaticParams() {
  return caseStudies.map((study) => ({
    slug: study.slug,
  }));
}

export default function CaseStudyPage({ params }: Props) {
  const caseStudy = getCaseStudyBySlug(params.slug);
  
  // If case study not found, return 404
  if (!caseStudy) {
    notFound();
  }
  
  // Find related case studies (same industry or services)
  const relatedCaseStudies = caseStudies
    .filter(study => 
      study.slug !== params.slug && 
      (study.industry === caseStudy.industry || 
       study.services.some(service => caseStudy.services.includes(service)))
    )
    .slice(0, 3);

  // Helper to get the appropriate icon component
  const getIconComponent = (iconName?: string) => {
    if (!iconName) return Lightbulb;
    return iconMap[iconName] || Lightbulb;
  };
  
  // Generate TOC sections
  const tocSections: TOCSection[] = [
    { id: "overview", title: "Overview", icon: <BookOpen className="h-4 w-4" /> },
  ];
  
  if (caseStudy.clientBackground) {
    tocSections.push({ id: "about-client", title: "About Client", icon: <Briefcase className="h-4 w-4" /> });
  }
  
  if (caseStudy.goals && caseStudy.goals.length > 0) {
    tocSections.push({ id: "goals", title: "Project Goals", icon: <Target className="h-4 w-4" /> });
  }
  
  if (caseStudy.processSteps && caseStudy.processSteps.length > 0) {
    tocSections.push({ id: "approach", title: "Our Approach", icon: <PenTool className="h-4 w-4" /> });
  }
  
  tocSections.push({ id: "challenge", title: "The Challenge", icon: <Lightbulb className="h-4 w-4" /> });
  tocSections.push({ id: "solution", title: "Our Solution", icon: <FileText className="h-4 w-4" /> });
  
  if (caseStudy.beforeAfterImages && caseStudy.beforeAfterImages.length > 0) {
    tocSections.push({ id: "before-after", title: "Before & After", icon: <ArrowRight className="h-4 w-4" /> });
  }
  
  tocSections.push({ id: "results", title: "The Results", icon: <LineChart className="h-4 w-4" /> });
  
  if (caseStudy.businessImpact && caseStudy.businessImpact.length > 0) {
    tocSections.push({ id: "business-impact", title: "Business Impact", icon: <BarChart3 className="h-4 w-4" /> });
  }
  
  if (caseStudy.keyInsights && caseStudy.keyInsights.length > 0) {
    tocSections.push({ id: "insights", title: "Key Insights", icon: <Zap className="h-4 w-4" /> });
  }
  
  if (caseStudy.testimonial) {
    tocSections.push({ id: "testimonial", title: "Client Testimonial", icon: <Quote className="h-4 w-4" /> });
  }
  
  // Generate JSON-LD structured data
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": caseStudy.title,
    "description": caseStudy.summary,
    "image": caseStudy.image,
    "datePublished": new Date().toISOString(),
    "author": {
      "@type": "Organization",
      "name": "RTN Global"
    },
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
    },
    "about": {
      "@type": "Thing",
      "name": caseStudy.client,
      "description": `Case study for ${caseStudy.client} in the ${caseStudy.industry} industry.`
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://rtnglobal.site/case-studies/${params.slug}`
    }
  };
  
  return (
    <Layout>
      {/* JSON-LD structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      {/* Hero Section */}
      <section id="overview" className="relative py-10 md:py-10 overflow-hidden bg-gradient-to-b from-background to-muted/30">
        {/* Background Patterns */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 opacity-70">
          <div className="absolute -top-10 -right-10 w-60 h-60 bg-primary/5 rounded-full"></div>
          <div className="absolute top-20 left-10 w-40 h-40 bg-primary/5 rounded-full"></div>
          <div className="absolute bottom-10 right-20 w-80 h-80 bg-primary/5 rounded-full"></div>
        </div>
        
        {caseStudy.image && (
          <div className="absolute right-0 top-0 w-1/3 h-full opacity-10 bg-contain bg-right bg-no-repeat z-0" 
               style={{ backgroundImage: `url(${caseStudy.image})` }}>
          </div>
        )}
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-screen-lg mx-auto">
            {/* Services Tags */}
            <div className="flex flex-wrap gap-2 mb-8 justify-center">
              {caseStudy.services.map((service, i) => (
                <span key={i} className="px-3 py-1 bg-secondary/80 text-secondary-foreground text-xs font-medium rounded-md">
                  {service}
                </span>
              ))}
            </div>
            
            {/* Title and Summary */}
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight text-center mb-8">{caseStudy.title}</h1>
            
            <div className="text-lg md:text-xl text-muted-foreground font-light leading-relaxed text-center mb-12 max-w-3xl mx-auto">
              {caseStudy.summary}
            </div>
            
            {/* Key Metrics */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 max-w-4xl mx-auto">
              <div className="bg-primary/10 border border-primary/20 rounded-xl p-6 flex flex-col items-center text-center transform hover:scale-105 transition-transform duration-300">
                <div className="mb-2 text-primary/70 text-xs uppercase font-medium tracking-wider">Key Result</div>
                <div className="text-3xl md:text-5xl font-bold text-primary mb-2">{caseStudy.featuredMetric.value}</div>
                <div className="text-sm font-medium text-primary/80">{caseStudy.featuredMetric.label}</div>
              </div>
              
              {caseStudy.secondaryMetrics.slice(0, 2).map((metric, i) => (
                <div key={i} className="bg-background border border-border rounded-xl p-6 flex flex-col items-center text-center transform hover:scale-105 transition-transform duration-300">
                  <div className="mb-2 text-muted-foreground text-xs uppercase font-medium tracking-wider">Supporting Metric</div>
                  <div className="text-3xl md:text-5xl font-bold mb-2">{metric.value}</div>
                  <div className="text-sm font-medium text-muted-foreground">{metric.label}</div>
                </div>
              ))}
            </div>
            
            {/* Project Info */}
            <div className="flex flex-col md:flex-row gap-12 justify-between items-center bg-background rounded-2xl p-8 shadow-lg border border-border/50">
              <div className="aspect-video md:w-2/5 rounded-xl overflow-hidden shadow-md relative group">
                <div className="absolute inset-0 bg-primary/5 group-hover:bg-primary/10 transition-colors duration-300"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  {caseStudy.image ? (
                    <div className="w-full h-full bg-cover bg-center" style={{ backgroundImage: `url(${caseStudy.image})` }}></div>
                  ) : (
                    <div className="flex items-center justify-center h-full w-full bg-primary/20 text-2xl md:text-3xl font-bold text-background/20">
                      {caseStudy.client}
                    </div>
                  )}
                </div>
                {caseStudy.tags && caseStudy.tags.length > 0 && (
                  <div className="absolute bottom-4 left-4 right-4 flex flex-wrap gap-2">
                    {caseStudy.tags.slice(0, 3).map((tag, i) => (
                      <span key={i} className="px-3 py-1 bg-background/90 text-foreground text-xs font-medium rounded-full shadow-sm">
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>
              
              <div className="md:w-3/5 space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <div className="font-medium text-xs text-muted-foreground uppercase tracking-wider">Client</div>
                    <div className="font-semibold text-lg flex items-center gap-2">
                      <Briefcase className="h-4 w-4 text-primary" />
                      {caseStudy.client}
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="font-medium text-xs text-muted-foreground uppercase tracking-wider">Industry</div>
                    <div className="font-semibold text-lg">{caseStudy.industry}</div>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="font-medium text-xs text-muted-foreground uppercase tracking-wider">Timeline</div>
                    <div className="font-semibold text-lg flex items-center gap-2">
                      <Clock className="h-4 w-4 text-primary" />
                      {caseStudy.duration}
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="font-medium text-xs text-muted-foreground uppercase tracking-wider">Project Type</div>
                    <div className="font-semibold text-lg flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
                      {caseStudy.services[0]}
                    </div>
                  </div>
                </div>
                
                <div className="pt-2 flex flex-wrap gap-2">
                  <Button asChild size="lg" className="rounded-md">
                    <a href="#challenge">
                      Explore Case Study
                      <ChevronDown className="ml-2 h-5 w-5" />
                    </a>
                  </Button>
                  <Button asChild size="lg" className="rounded-md">
                    <a href={`${process.env.NEXT_PUBLIC_ORDERS_URL}`} target="_blank">
                      Chat with Experts
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
            {/* Mobile Project Details (visible only on mobile) */}
            <section className="py-12 bg-muted/30 md:hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold mb-6">Project Details</h2>
          
          <div className="bg-background border border-border rounded-xl overflow-hidden shadow-md">
            <div className="grid grid-cols-2 gap-4 p-6">
              <div>
                <div className="text-sm font-medium text-muted-foreground mb-1">Client</div>
                <div className="font-semibold">{caseStudy.client}</div>
              </div>
              
              <div>
                <div className="text-sm font-medium text-muted-foreground mb-1">Industry</div>
                <div className="font-semibold">{caseStudy.industry}</div>
              </div>
              
              <div>
                <div className="text-sm font-medium text-muted-foreground mb-1">Duration</div>
                <div className="font-semibold">{caseStudy.duration}</div>
              </div>
              
              <div>
                <div className="text-sm font-medium text-muted-foreground mb-1">Type</div>
                <div className="font-semibold">{caseStudy.services[0]}</div>
              </div>
            </div>
            
            <div className="border-t border-border p-6">
              <div className="text-sm font-medium text-muted-foreground mb-2">Services</div>
              <div className="flex flex-wrap gap-2">
                {caseStudy.services.map((service, i) => (
                  <span key={i} className="px-2.5 py-1 bg-primary/5 text-primary text-xs font-medium rounded-full">
                    {service}
                  </span>
                ))}
              </div>
              <Button asChild size="lg" className="rounded-md">
                <a href={`${process.env.NEXT_PUBLIC_ORDERS_URL}`} target="_blank">
                  Chat with Experts
                </a>
              </Button>
          
            </div>
          </div>
        </div>
      </section>
      
      {/* Main Content Area with Sidebar */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-7 gap-8">
          {/* Main Content */}
          <div className="md:col-span-5 space-y-24">
            {/* Client Background (if available) */}
            {caseStudy.clientBackground && (
              <section id="about-client">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                    <Users2 className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <h2 className="text-2xl font-bold">About {caseStudy.client}</h2>
                </div>
                
                <div className="text-muted-foreground leading-relaxed">
                  <p className="text-lg">{caseStudy.clientBackground}</p>
                </div>
              </section>
            )}
            
            {/* Project Goals (if available) */}
            {caseStudy.goals && caseStudy.goals.length > 0 && (
              <section id="goals">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                  <div className="max-w-4xl mx-auto">
                    <div className="flex items-center gap-3 mb-8">
                      <div className="w-12 h-12 rounded-full bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center">
                        <Target className="h-6 w-6 text-emerald-600 dark:text-emerald-400" />
                      </div>
                      <h2 className="text-2xl font-bold">Project Goals</h2>
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-4">
                      {caseStudy.goals.map((goal, index) => (
                        <div key={index} className="bg-background border border-border/70 rounded-xl p-4 shadow-sm hover:shadow-md transition-shadow duration-200">
                          <div className="flex items-start gap-3">
                            <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                              <CheckCircle2 className="h-5 w-5 text-primary" />
                            </div>
                            <span className="text-foreground font-medium">{goal}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </section>
            )}
            
            {/* Process Steps (if available) */}
            {caseStudy.processSteps && caseStudy.processSteps.length > 0 && (
              <section id="approach" className="mb-24">
                <div className="flex items-center gap-3 mb-16 justify-center">
                  <div className="w-12 h-12 rounded-full bg-indigo-100 dark:bg-indigo-900/30 flex items-center justify-center">
                    <Code className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />
                  </div>
                  <div>
                    <h2 className="text-2xl md:text-3xl font-bold">Our Approach</h2>
                    <div className="h-1 w-20 bg-indigo-400 dark:bg-indigo-600 rounded-full mt-2"></div>
                  </div>
                </div>
                
                {/* Fancy 3D-looking approach blocks */}
                <div className="relative mx-auto max-w-6xl">
                  {/* Decorative background */}
                  <div className="absolute inset-0 bg-gradient-to-br from-indigo-50/50 to-transparent dark:from-indigo-900/10 dark:to-transparent rounded-3xl -z-10 transform skew-y-1"></div>
                  
                  {/* Main display style */}
                  <div className="relative z-10">
              
                    <div className="space-y-16 lg:space-y-0 lg:grid lg:grid-cols-3 relative">
                      {caseStudy.processSteps?.map((step, index) => {
                        const IconComponent = getIconComponent(step.icon);
                        const isEven = index % 2 === 0;
                        
                        return (
                          <div key={index} className={`group relative ${isEven ? 'lg:mt-0' : 'lg:mt-32'}`}>
                            {/* Step marker - connects to the progression line */}
                            <div className="absolute top-12 left-8 lg:left-1/2 lg:-translate-x-1/2 lg:top-[-3rem] z-30">
                              <div className="relative">
                    
                                {/* Number badge with ring animation on hover */}
                                <div className="relative w-16 h-16 rounded-full bg-indigo-600 dark:bg-indigo-700 flex items-center justify-center z-20 border-4 border-background shadow-lg group-hover:scale-110 transition-transform duration-300">
                                  <span className="text-lg font-bold text-white">{index + 1}</span>
                                  
                                  {/* Animated ring on hover */}
                                  <div className="absolute inset-0 rounded-full border-2 border-indigo-300 dark:border-indigo-500 opacity-0 group-hover:opacity-100 group-hover:scale-125 transition-all duration-500"></div>
                                </div>
                              </div>
                            </div>
                            
                            {/* Content card with 3D appearance */}
                            <div className="relative ml-24 lg:ml-0 lg:mx-4 transform transition-all duration-300 group-hover:-translate-y-2">
                              {/* Card with subtle 3D effect */}
                              <div className="bg-background border border-border group-hover:border-indigo-300 dark:group-hover:border-indigo-800/40 rounded-xl p-6 shadow-md group-hover:shadow-xl transition-all duration-300 h-full">
                                {/* Step status indicator */}
                                <div className="absolute top-3 right-3 w-3 h-3 rounded-full bg-indigo-400 group-hover:bg-indigo-600 transition-colors duration-300"></div>
                                
                                <div className="pt-2 pb-4">
                                  <div className="flex items-center gap-3 mb-4">
                                    <div className="w-12 h-12 rounded-xl bg-indigo-100/60 dark:bg-indigo-900/20 flex items-center justify-center flex-shrink-0 group-hover:bg-indigo-100 dark:group-hover:bg-indigo-900/40 transition-colors duration-300">
                                      <IconComponent className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />
                                    </div>
                                    <h3 className="text-xl font-bold group-hover:text-indigo-700 dark:group-hover:text-indigo-400 transition-colors duration-300">{step.title}</h3>
                                  </div>
                                  <p className="text-muted-foreground text-base leading-relaxed">{step.description}</p>
                                </div>
                                
                                {/* Bottom decorative accent */}
                                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-indigo-400 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                              </div>
                              
                              {/* Connecting arrows between cards */}
                              {index < (caseStudy.processSteps?.length || 0) - 1 && (
                                <div className="hidden lg:flex absolute -right-6 top-1/2 -translate-y-1/2 transform group-hover:translate-x-1 transition-transform duration-300">
                                  <div className="w-12 h-12 flex items-center justify-center text-indigo-400 dark:text-indigo-600">
                                    <ArrowRight className="h-8 w-8" />
                                  </div>
                                </div>
                              )}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </section>
            )}
            
            {/* Timeline (if available) - Modern Professional Design */}
            {caseStudy.timeline && caseStudy.timeline.length > 0 && (
              <section id="timeline">
                <div className="flex items-center gap-3 mb-8 justify-center">
                  <div className="w-12 h-12 rounded-lg bg-slate-100 dark:bg-slate-800 flex items-center justify-center">
                    <Clock className="h-6 w-6 text-slate-600 dark:text-slate-400" />
                  </div>
                  <div>
                    <h2 className="text-2xl md:text-3xl font-bold">Project Timeline</h2>
                    <div className="h-1 w-20 bg-slate-400 dark:bg-slate-600 rounded-full mt-2"></div>
                  </div>
                </div>

                {/* Modern Timeline Container */}
                <div className="bg-background rounded-xl border border-border shadow-sm overflow-hidden">
                  {/* Desktop Timeline (Table-like layout) */}
                  <div className="hidden md:block">
                    <table className="w-full">
                      <thead className="bg-muted/50">
                        <tr>
                          <th className="px-6 py-4 text-left font-semibold text-muted-foreground text-sm uppercase tracking-wider w-1/6">Phase</th>
                          <th className="px-6 py-4 text-left font-semibold text-muted-foreground text-sm uppercase tracking-wider w-1/6">Date</th>
                          <th className="px-6 py-4 text-left font-semibold text-muted-foreground text-sm uppercase tracking-wider w-1/3">Milestone</th>
                          <th className="px-6 py-4 text-left font-semibold text-muted-foreground text-sm uppercase tracking-wider">Description</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-border">
                        {caseStudy.timeline.map((item, index) => (
                          <tr key={index} className="hover:bg-muted/20">
                            <td className="px-6 py-4">
                              <div className="flex items-center">
                                <span className="h-8 w-8 rounded-full bg-slate-200 dark:bg-slate-700 text-slate-800 dark:text-slate-200 flex items-center justify-center font-semibold text-sm">
                                  {index + 1}
                                </span>
                              </div>
                            </td>
                            <td className="px-6 py-4 text-slate-700 dark:text-slate-300 font-medium">
                              {item.date}
                            </td>
                            <td className="px-6 py-4">
                              <div className="font-semibold text-foreground">{item.milestone}</div>
                            </td>
                            <td className="px-6 py-4 text-muted-foreground">
                              {item.description}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  
                  {/* Mobile Timeline (Card layout) */}
                  <div className="md:hidden">
                    <div className="divide-y divide-border">
                      {caseStudy.timeline.map((item, index) => (
                        <div key={index} className="p-4">
                          <div className="flex items-center gap-3 mb-2">
                            <div className="h-8 w-8 rounded-full bg-slate-200 dark:bg-slate-700 text-slate-800 dark:text-slate-200 flex items-center justify-center font-semibold text-sm">
                              {index + 1}
                            </div>
                            <div className="text-sm font-medium text-slate-700 dark:text-slate-300">
                              {item.date}
                            </div>
                          </div>
                          <div className="pl-11">
                            <div className="font-semibold text-foreground mb-1">{item.milestone}</div>
                            <div className="text-sm text-muted-foreground">{item.description}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </section>
            )}
            
            {/* Technologies Used - Modern Professional Design */}
            {caseStudy.technologies && caseStudy.technologies.length > 0 && (
              <section id="technologies">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                  <div className="max-w-5xl mx-auto">
                    <div className="flex items-center gap-3 mb-8 justify-center">
                      <div className="w-12 h-12 rounded-lg bg-slate-100 dark:bg-slate-800 flex items-center justify-center">
                        <Code className="h-6 w-6 text-slate-600 dark:text-slate-400" />
                      </div>
                      <div>
                        <h2 className="text-2xl md:text-3xl font-bold">Technologies Used</h2>
                        <div className="h-1 w-20 bg-slate-400 dark:bg-slate-600 rounded-full mt-2"></div>
                      </div>
                    </div>
                    
                    {/* Modern Technology Stack Display */}
                    <div className="bg-background rounded-xl border border-border shadow-sm overflow-hidden">
                      {/* Technology Stack Header */}
                      <div className="bg-muted/50 px-6 py-4 border-b border-border">
                        <h3 className="text-lg font-semibold">Technology Stack Overview</h3>
                      </div>
                      
                      {/* Technology Categories */}
                      <div className="p-6">
                        <div className="grid gap-8 md:grid-cols-3">
                          {/* Primary Technologies */}
                          <div className="bg-background rounded-lg border border-border p-5">
                            <div className="flex items-center gap-2 mb-4">
                              <div className="w-10 h-10 rounded-lg bg-blue-50 dark:bg-blue-900/20 flex items-center justify-center">
                                <Monitor className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                              </div>
                              <h4 className="font-semibold">Core Technologies</h4>
                            </div>
                            <ul className="space-y-2">
                              {caseStudy.technologies.slice(0, Math.ceil(caseStudy.technologies.length / 3)).map((tech, index) => (
                                <li key={index} className="flex items-center gap-2 py-1.5 border-b border-border/30 last:border-0">
                                  <div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div>
                                  <span className="text-sm">{tech}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                          
                          {/* Development Tools */}
                          <div className="bg-background rounded-lg border border-border p-5">
                            <div className="flex items-center gap-2 mb-4">
                              <div className="w-10 h-10 rounded-lg bg-purple-50 dark:bg-purple-900/20 flex items-center justify-center">
                                <PenTool className="h-5 w-5 text-purple-600 dark:text-purple-400" />
                              </div>
                              <h4 className="font-semibold">Development Tools</h4>
                            </div>
                            <ul className="space-y-2">
                              {caseStudy.technologies.slice(Math.ceil(caseStudy.technologies.length / 3), Math.ceil(caseStudy.technologies.length * 2 / 3)).map((tech, index) => (
                                <li key={index} className="flex items-center gap-2 py-1.5 border-b border-border/30 last:border-0">
                                  <div className="w-1.5 h-1.5 rounded-full bg-purple-500"></div>
                                  <span className="text-sm">{tech}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                          
                          {/* Infrastructure */}
                          <div className="bg-background rounded-lg border border-border p-5">
                            <div className="flex items-center gap-2 mb-4">
                              <div className="w-10 h-10 rounded-lg bg-emerald-50 dark:bg-emerald-900/20 flex items-center justify-center">
                                <Zap className="h-5 w-5 text-emerald-600 dark:text-emerald-400" />
                              </div>
                              <h4 className="font-semibold">Infrastructure</h4>
                            </div>
                            <ul className="space-y-2">
                              {caseStudy.technologies.slice(Math.ceil(caseStudy.technologies.length * 2 / 3)).map((tech, index) => (
                                <li key={index} className="flex items-center gap-2 py-1.5 border-b border-border/30 last:border-0">
                                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-500"></div>
                                  <span className="text-sm">{tech}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                      
                      {/* Technology Stack Summary */}
                      <div className="bg-muted/30 px-6 py-4 border-t border-border">
                        <p className="text-sm text-muted-foreground">
                          Our technology stack was carefully selected to meet the project requirements and deliver optimal performance and scalability.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            )}
            
            {/* Main Content Section */}
            <section className="py-10 md:py-0 bg-muted/30">
              {/* Challenge Section */}
              <div id="challenge">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-14 h-14 rounded-full bg-amber-100 dark:bg-amber-900/30 flex items-center justify-center">
                    <Lightbulb className="h-7 w-7 text-amber-600 dark:text-amber-400" />
                  </div>
                  <div>
                    <h2 className="text-2xl md:text-3xl font-bold">The Challenge</h2>
                    <div className="h-1 w-20 bg-amber-400 dark:bg-amber-600 rounded-full mt-2"></div>
                  </div>
                </div>
                <div className="text-muted-foreground">
                  {caseStudy.challenge.split('\n\n').map((paragraph, i) => (
                    <p key={i} className="mb-4 text-lg leading-relaxed">{paragraph}</p>
                  ))}
                </div>
              </div>
              
              {/* Solution Section */}
              <div id="solution">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-14 h-14 rounded-full bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center">
                    <FileText className="h-7 w-7 text-emerald-600 dark:text-emerald-400" />
                  </div>
                  <div>
                    <h2 className="text-2xl md:text-3xl font-bold">Our Solution</h2>
                    <div className="h-1 w-20 bg-emerald-400 dark:bg-emerald-600 rounded-full mt-2"></div>
                  </div>
                </div>
                <div className="text-muted-foreground">
                  {caseStudy.solution.split('\n\n').map((paragraph, i) => (
                    <p key={i} className="mb-4 text-lg leading-relaxed">{paragraph}</p>
                  ))}
                </div>
              </div>
              
              {/* Before/After Images (if available) */}
              {caseStudy.beforeAfterImages && caseStudy.beforeAfterImages.length > 0 && (
                <div id="before-after">
                  <div className="flex items-center gap-4 mb-8">
                    <div className="w-14 h-14 rounded-full bg-violet-100 dark:bg-violet-900/30 flex items-center justify-center">
                      <ArrowRight className="h-7 w-7 text-violet-600 dark:text-violet-400" />
                    </div>
                    <div>
                      <h2 className="text-2xl md:text-3xl font-bold">Before & After</h2>
                      <div className="h-1 w-20 bg-violet-400 dark:bg-violet-600 rounded-full mt-2"></div>
                    </div>
                  </div>
                  <div className="space-y-16">
                    {caseStudy.beforeAfterImages.map((item, index) => (
                      <div key={index} className="space-y-6">
                        <div className="grid md:grid-cols-2 gap-8 relative">
                          <div className="border border-border rounded-xl overflow-hidden shadow-md">
                            <div className="bg-muted p-3 text-sm font-bold uppercase tracking-wider flex items-center gap-2">
                              <div className="w-3 h-3 rounded-full bg-red-500"></div>
                              Before
                            </div>
                            <div className="aspect-video bg-muted relative">
                              <div className="absolute inset-0 flex items-center justify-center bg-primary/10 text-base text-background/20">
                                {item.before.src && (
                                  <OptimizedImage 
                                  src={item.before.src}
                                  alt={item.before.alt}
                                  fill
                                  className="h-full object-cover"
                                  />
                                )}
                              </div>
                            </div>
                          </div>
                          
                          <div className="border border-border rounded-xl overflow-hidden shadow-md">
                            <div className="bg-muted p-3 text-sm font-bold uppercase tracking-wider flex items-center gap-2">
                              <div className="w-3 h-3 rounded-full bg-emerald-500"></div>
                              After
                            </div>
                            <div className="aspect-video bg-muted relative">
                              <div className="absolute inset-0 flex items-center justify-center bg-primary/10 text-base text-background/20">
                                {item.after.src && (
                                       <OptimizedImage 
                                       src={item.after.src}
                                       alt={item.after.alt}
                                       fill
                                       className="h-full object-cover"
                                       />
                                  )}
                              </div>
                            </div>
                          </div>
                          
                          {/* Arrow between images - visible on desktop */}
                          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-background rounded-full shadow-lg flex items-center justify-center z-10 hidden md:flex border border-border">
                            <ArrowRight className="h-6 w-6 text-primary" />
                          </div>
                        </div>
                        <p className="text-base text-muted-foreground text-center max-w-2xl mx-auto">{item.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
              
              {/* Results Section */}
              <div id="results">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-14 h-14 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                    <LineChart className="h-7 w-7 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <h2 className="text-2xl md:text-3xl font-bold">The Results</h2>
                    <div className="h-1 w-20 bg-blue-400 dark:bg-blue-600 rounded-full mt-2"></div>
                  </div>
                </div>
                <div className="text-muted-foreground">
                  {caseStudy.results.split('\n\n').map((paragraph, i) => (
                    <p key={i} className="mb-4 text-lg leading-relaxed">{paragraph}</p>
                  ))}
                </div>
                
                {/* Result Metrics */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 my-12">
                  <div className="bg-primary/10 border border-primary/20 rounded-xl p-6 text-center transform hover:scale-105 transition-transform duration-200">
                    <div className="text-3xl font-bold text-primary mb-1">{caseStudy.featuredMetric.value}</div>
                    <div className="text-sm font-medium text-primary/80">{caseStudy.featuredMetric.label}</div>
                  </div>
                  
                  {caseStudy.secondaryMetrics.slice(0, 3).map((metric, i) => (
                    <div key={i} className="bg-muted/80 border border-border rounded-xl p-6 text-center transform hover:scale-105 transition-transform duration-200">
                      <div className="text-3xl font-bold mb-1">{metric.value}</div>
                      <div className="text-sm font-medium text-muted-foreground">{metric.label}</div>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Business Impact (if available) */}
              {caseStudy.businessImpact && caseStudy.businessImpact.length > 0 && (
                <div id="business-impact">
                  <div className="flex items-center gap-4 mb-8">
                    <div className="w-14 h-14 rounded-full bg-indigo-100 dark:bg-indigo-900/30 flex items-center justify-center">
                      <BarChart3 className="h-7 w-7 text-indigo-600 dark:text-indigo-400" />
                    </div>
                    <div>
                      <h2 className="text-2xl md:text-3xl font-bold">Business Impact</h2>
                      <div className="h-1 w-20 bg-indigo-400 dark:bg-indigo-600 rounded-full mt-2"></div>
                    </div>
                  </div>
                  
                  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {caseStudy.businessImpact.map((impact, index) => (
                      <div key={index} className="bg-background border border-border rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-200">
                        <div className="mb-4">
                          <div className="inline-block bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 px-3 py-1 rounded-full text-sm font-medium mb-2">
                            {impact.metric}
                          </div>
                          <div className="text-2xl font-bold text-foreground">{impact.value}</div>
                        </div>
                        <p className="text-muted-foreground">{impact.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
              
              {/* Key Insights (if available) */}
              {caseStudy.keyInsights && caseStudy.keyInsights.length > 0 && (
                <div id="insights">
                  <div className="flex items-center gap-4 my-12">
                    <div className="w-14 h-14 rounded-full bg-amber-100 dark:bg-amber-900/30 flex items-center justify-center">
                      <Lightbulb className="h-7 w-7 text-amber-600 dark:text-amber-400" />
                    </div>
                    <div>
                      <h2 className="text-2xl md:text-3xl font-bold">Key Insights</h2>
                      <div className="h-1 w-20 bg-amber-400 dark:bg-amber-600 rounded-full mt-2"></div>
                    </div>
                  </div>
                  
                  <div className="bg-background border border-border rounded-xl p-8 shadow-md">
                    <ul className="space-y-6">
                      {caseStudy.keyInsights.map((insight, index) => (
                        <li key={index} className="flex items-start gap-4">
                          <div className="w-8 h-8 rounded-full bg-amber-100 dark:bg-amber-900/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                            <Zap className="h-4 w-4 text-amber-600 dark:text-amber-400" />
                          </div>
                          <span className="text-foreground">{insight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}
              
              {/* Implementation Challenges (if available) */}
              {caseStudy.implementationChallenges && (
                <div id="challenges">
                  <div className="flex items-center gap-4 my-12">
                    <div className="w-14 h-14 rounded-full bg-red-100 dark:bg-red-900/30 flex items-center justify-center">
                      <Code className="h-7 w-7 text-red-600 dark:text-red-400" />
                    </div>
                    <div>
                      <h2 className="text-2xl md:text-3xl font-bold">Implementation Challenges</h2>
                      <div className="h-1 w-20 bg-red-400 dark:bg-red-600 rounded-full mt-2"></div>
                    </div>
                  </div>
                  
                  <div className="bg-background border border-border rounded-xl p-8 shadow-md">
                    <div className="text-muted-foreground text-lg leading-relaxed">
                      {caseStudy.implementationChallenges.split('\n\n').map((paragraph, i) => (
                        <p key={i} className="mb-4">{paragraph}</p>
                      ))}
                    </div>
                  </div>
                </div>
              )}
              
              {/* Team (if available) */}
              {caseStudy.teamComposition && caseStudy.teamComposition.length > 0 && (
                <div id="team">
                  <div className="flex items-center gap-4 my-12">
                    <div className="w-14 h-14 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center">
                      <Users2 className="h-7 w-7 text-purple-600 dark:text-purple-400" />
                    </div>
                    <div>
                      <h2 className="text-2xl md:text-3xl font-bold">Our Team</h2>
                      <div className="h-1 w-20 bg-purple-400 dark:bg-purple-600 rounded-full mt-2"></div>
                    </div>
                  </div>
                  
                  <div className="grid sm:grid-cols-2 gap-6">
                    {caseStudy.teamComposition.map((member, index) => (
                      <div key={index} className="bg-background border border-border rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-200">
                        <div className="font-bold text-lg mb-2">{member.role}</div>
                        <p className="text-muted-foreground">{member.responsibility}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
              
              {/* Future Work (if available) */}
              {caseStudy.futureWork && (
                <div id="future-work">
                  <div className="flex items-center gap-4 my-12">
                    <div className="w-14 h-14 rounded-full bg-cyan-100 dark:bg-cyan-900/30 flex items-center justify-center">
                      <Rocket className="h-7 w-7 text-cyan-600 dark:text-cyan-400" />
                    </div>
                    <div>
                      <h2 className="text-2xl md:text-3xl font-bold">Future Work</h2>
                      <div className="h-1 w-20 bg-cyan-400 dark:bg-cyan-600 rounded-full mt-2"></div>
                    </div>
                  </div>
                  
                  <div className="bg-background border border-border rounded-xl p-8 shadow-md">
                    <div className="text-muted-foreground text-lg leading-relaxed">
                      <p>{caseStudy.futureWork}</p>
                    </div>
                  </div>
                </div>
              )}
              
              {/* Testimonial */}
              {caseStudy.testimonial && (
                <div id="testimonial" className="bg-gradient-to-br my-12 from-primary/5 to-primary/10 rounded-xl p-12 border border-primary/20 shadow-md relative">
                  <div className="absolute top-8 left-8 text-primary/20">
                    <Quote className="h-24 w-24" />
                  </div>
                  <div className="relative z-10">
                    <blockquote className="text-xl md:text-2xl italic mb-8 leading-relaxed text-foreground font-light">
                      &quot;{caseStudy.testimonial.quote}&quot;
                    </blockquote>
                    <div className="flex items-start gap-4">
                      <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center">
                        <Users2 className="h-7 w-7 text-primary" />
                      </div>
                      <div>
                        <div className="font-bold text-lg">{caseStudy.testimonial.author}</div>
                        <div className="text-muted-foreground">{caseStudy.testimonial.position}</div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              
              {/* User Quotes (if available) */}
              {caseStudy.userQuotes && caseStudy.userQuotes.length > 0 && (
                <div id="user-feedback">
                  <div className="flex items-center gap-4 my-12">
                    <div className="w-14 h-14 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center">
                      <Users2 className="h-7 w-7 text-green-600 dark:text-green-400" />
                    </div>
                    <div>
                      <h2 className="text-2xl md:text-3xl font-bold">User Feedback</h2>
                      <div className="h-1 w-20 bg-green-400 dark:bg-green-600 rounded-full mt-2"></div>
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    {caseStudy.userQuotes.map((quote, index) => (
                      <div key={index} className="bg-background rounded-xl p-6 border border-border shadow-md hover:shadow-lg transition-shadow duration-200">
                        <div className="text-primary/20 mb-2">
                          <Quote className="h-8 w-8" />
                        </div>
                        <blockquote className="text-lg italic mb-4 leading-relaxed">
                          &quot;{quote.quote}&quot;
                        </blockquote>
                        <div>
                          <div className="font-bold">{quote.user}</div>
                          <div className="text-sm text-muted-foreground">{quote.context}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </section>
            
            {/* Enhanced Related Content with contextual links */}
            <section className="pt-16 bg-muted/5 border-t border-border">
              <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-screen-lg mx-auto">
                  <h2 className="text-2xl font-bold mb-12 text-center">Related Resources</h2>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
                    {/* Related Industry */}
                    <div className="bg-card rounded-xl border border-border overflow-hidden shadow-sm group hover:shadow-md transition-all duration-300">
                      <div className="p-6">
                        <h3 className="text-lg font-bold mb-3 group-hover:text-primary transition-colors">Industry Expertise</h3>
                        <p className="text-muted-foreground mb-4">Explore more solutions for the {caseStudy.industry} industry.</p>
                        <Link 
                          href={`/industries/${caseStudy.industry.toLowerCase().replace(/\s+/g, '-')}`}
                          className="inline-flex items-center text-primary"
                        >
                          View Industry Solutions <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </Link>
                      </div>
                    </div>
                    
                    {/* Related Services */}
                    <div className="bg-card rounded-xl border border-border overflow-hidden shadow-sm group hover:shadow-md transition-all duration-300">
                      <div className="p-6">
                        <h3 className="text-lg font-bold mb-3 group-hover:text-primary transition-colors">Related Services</h3>
                        <p className="text-muted-foreground mb-4">Discover our {caseStudy.services[0]} services and other offerings.</p>
                        <Link 
                          href={`/services`}
                          className="inline-flex items-center text-primary"
                        >
                          Explore Our Services <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </Link>
                      </div>
                    </div>
                    
                    {/* Related Tech/Portfolio */}
                    <div className="bg-card rounded-xl border border-border overflow-hidden shadow-sm group hover:shadow-md transition-all duration-300">
                      <div className="p-6">
                        <h3 className="text-lg font-bold mb-3 group-hover:text-primary transition-colors">Portfolio</h3>
                        <p className="text-muted-foreground mb-4">See more examples of our work in {caseStudy.industry}.</p>
                        <Link 
                          href={`/portfolio`}
                          className="inline-flex items-center text-primary"
                        >
                          View Portfolio <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </Link>
                      </div>
                    </div>
                  </div>
                  
                  {/* Technologies Used Section with links */}
                  {caseStudy.technologies && caseStudy.technologies.length > 0 && (
                    <div className="mt-16">
                      <h3 className="text-xl font-bold mb-6 text-center">Technologies Used in This Project</h3>
                      <div className="flex flex-wrap justify-center gap-3">
                        {caseStudy.technologies.map((tech) => (
                          <Link 
                            key={tech}
                            href={`/search?q=${encodeURIComponent(tech)}`}
                            className="px-4 py-2 bg-muted hover:bg-primary/10 rounded-full text-sm font-medium transition-colors"
                          >
                            {tech}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                  
                  {/* Knowledge Base Links */}
                  <div className="mt-16 text-center">
                    <h3 className="text-xl font-bold mb-6">Learn More</h3>
                    <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                      Explore our knowledge base for valuable insights and guides related to {caseStudy.industry} and {caseStudy.services[0]}.
                    </p>
                    <Link
                      href={`/knowledge-base?search=${encodeURIComponent(`${caseStudy.industry} ${caseStudy.services[0]}`)}`}
                      className="inline-flex items-center justify-center gap-2 bg-primary/10 hover:bg-primary/20 text-primary px-6 py-3 rounded-lg font-medium transition-colors"
                    >
                      <BookOpen className="h-5 w-5" />
                      Browse Knowledge Base
                    </Link>
                  </div>
                </div>
              </div>
            </section>
            
            {/* Related Case Studies */}
            {relatedCaseStudies.length > 0 && (
              <section className="py-10 bg-muted/30 border-t border-border">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                  <div className="flex flex-col items-center mb-12 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Related Case Studies</h2>
                    <div className="w-24 h-1 bg-primary/60 rounded-full mb-6"></div>
                    <p className="text-muted-foreground max-w-2xl text-lg">
                      Explore more success stories similar to this project
                    </p>
                  </div>
                  
                  <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
                    {relatedCaseStudies.map((study, index) => (
                      <Link 
                        key={index} 
                        href={`/case-studies/${study.slug}`}
                        className="group"
                      >
                        <div className="bg-background border border-border rounded-xl overflow-hidden transition-all duration-300 h-full hover:shadow-lg hover:-translate-y-1 flex flex-col">
                          {/* Case Study Image */}
                          <div className="aspect-video bg-muted relative">
                            {study.image ? (
                              <div className="w-full h-full bg-cover bg-center" style={{ backgroundImage: `url(${study.image})` }}></div>
                            ) : (
                              <div className="absolute inset-0 flex items-center justify-center bg-primary/10 text-xl font-bold text-background/20 group-hover:bg-primary/20 transition-colors duration-200">
                                {study.client}
                              </div>
                            )}
                            <div className="absolute top-4 left-4 bg-background/90 px-3 py-1 rounded-full text-xs font-medium shadow-sm">
                              {study.industry}
                            </div>
                          </div>
                          
                          {/* Content */}
                          <div className="p-6 flex-grow flex flex-col">
                            <div className="mb-4 flex-grow">
                              <div className="flex justify-between items-center mb-3">
                                <div className="text-sm font-medium text-primary">{study.client}</div>
                                <div className="flex items-center gap-1 text-xs text-muted-foreground">
                                  <Clock className="h-3.5 w-3.5" />
                                  <span>{study.duration}</span>
                                </div>
                              </div>
                              
                              <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors duration-200">
                                {study.title}
                              </h3>
                              
                              <p className="text-muted-foreground text-sm line-clamp-3">
                                {study.summary}
                              </p>
                            </div>
                            
                            {/* Services */}
                            <div className="flex flex-wrap gap-1.5 mb-4">
                              {study.services.slice(0, 2).map((service, i) => (
                                <span key={i} className="px-2 py-0.5 bg-primary/5 text-primary text-xs font-medium rounded-full">
                                  {service}
                                </span>
                              ))}
                              {study.services.length > 2 && (
                                <span className="px-2 py-0.5 bg-muted text-muted-foreground text-xs font-medium rounded-full">
                                  +{study.services.length - 2}
                                </span>
                              )}
                            </div>
                            
                            {/* View Link */}
                            <div className="text-sm font-semibold text-primary flex items-center gap-1 group-hover:gap-2 transition-all duration-200 mt-auto">
                              View Case Study
                              <ArrowUpRight className="h-4 w-4" />
                            </div>
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                  
                  <div className="flex justify-center mt-12">
                    <Button asChild variant="outline" size="lg" className="rounded-full px-8">
                      <Link href="/case-studies">
                        View All Case Studies
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </section>
            )}
            
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
          </div>
          
          {/* Project Overview Sidebar */}
          <div className="md:col-span-2 hidden md:block">
            <div className="sticky top-20">
              {/* Project details */}
              <div className="space-y-6">
                <div className="bg-background border border-border rounded-xl p-6 shadow-sm">
                  <h2 className="text-2xl font-bold mb-3">Project Details</h2>
                  
                  <div className="grid md:grid-cols-1 gap-6">
                    <div className="space-y-2">
                      <div className="font-medium text-xs text-muted-foreground uppercase tracking-wider">Client</div>
                      <div className="font-semibold text-16">{caseStudy.client}</div>
                    </div>
                    
                    <div className="space-y-2">
                      <div className="font-medium text-xs text-muted-foreground uppercase tracking-wider">Industry</div>
                      <div className="font-semibold text-16">{caseStudy.industry}</div>
                    </div>

                    <div className="space-y-2">
                      <div className="font-medium text-xs text-muted-foreground uppercase tracking-wider">Timeline</div>
                      <div className="font-semibold text-16 flex items-center gap-2">
                        <Clock className="h-4 w-4 text-primary" />
                        {caseStudy.duration}
                      </div>
                    </div>

                    <div className="space-y-2">
                      <div className="font-medium text-xs text-muted-foreground uppercase tracking-wider">Services</div>
                      <div className="flex flex-wrap gap-2">
                        {caseStudy.services.map((service, i) => (
                          <span key={i} className="px-2.5 py-1 bg-primary/5 text-primary text-xs font-medium rounded-full">
                            {service}
                          </span>
                        ))}
                      </div>
                    </div>
                    <Button asChild size="lg" className="rounded-md">
                      <a href={`${process.env.NEXT_PUBLIC_ORDERS_URL}`} target="_blank">
                        Chat with Experts
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      

    </Layout>
  );
} 