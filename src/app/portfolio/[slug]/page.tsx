import { Layout } from "@/components/layout/layout"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft, ArrowRight, ExternalLink, Code, Award, Clock, Star, CheckCircle, Tag } from "lucide-react"
import { notFound } from "next/navigation"
import { OptimizedImage } from "@/components/ui/optimized-image"

// Import portfolio items from the data file
import { portfolioItems } from "@/data/portfolio-items"

interface ProjectPageProps {
  params: {
    slug: string
  }
}

export default function ProjectPage({ params }: ProjectPageProps) {
  // Find the project by converting the slug back to a title
  const slug = params.slug;
  const project = portfolioItems.find(item => 
    item.title.toLowerCase().replace(/\s+/g, '-') === slug
  );
  
  // If the project doesn't exist, show the 404 page
  if (!project) {
    notFound();
  }

  // Get next and previous project slugs for navigation
  const currentIndex = portfolioItems.findIndex(item => 
    item.title.toLowerCase().replace(/\s+/g, '-') === slug
  );
  
  const nextProject = currentIndex < portfolioItems.length - 1 
    ? portfolioItems[currentIndex + 1] 
    : portfolioItems[0];
    
  const prevProject = currentIndex > 0 
    ? portfolioItems[currentIndex - 1] 
    : portfolioItems[portfolioItems.length - 1];

  // Some default values for fields that might not exist in the portfolio items
  const defaultChallenge = "The client needed a modern, responsive solution that would address specific business challenges while providing an exceptional user experience.";
  const defaultSolution = "We leveraged our expertise in design and development to create a custom solution that not only met but exceeded the client&apos;s expectations, implementing best practices and cutting-edge technologies.";
  const defaultResults = [
    "Improved user experience",
    "Increased engagement metrics",
    "Enhanced performance and speed",
    "Modern, responsive design"
  ];
  
  // Generate JSON-LD structured data for project page
  const projectJsonLd = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    "name": project.title,
    "description": project.description,
    "image": project.image,
    "datePublished": `${project.year || new Date().getFullYear()}`,
    "author": {
      "@type": "Organization",
      "name": "RTN Global",
      "url": "https://rtnglobal.co/",
      "logo": "https://rtnglobal.co/logo.png"
    },
    "genre": project.category,
    "keywords": project.tags.join(", "),
    "about": project.industry,
    "provider": {
      "@type": "Organization",
      "name": "RTN Global"
    },
    "audience": {
      "@type": "Audience",
      "audienceType": project.industry
    },
    "inLanguage": "en",
    "url": `https://rtnglobal.co/portfolio/${slug}`,
    "workExample": {
      "@type": "WebSite",
      "name": project.title,
      "url": project.link || `https://rtnglobal.co/portfolio/${slug}`
    }
  };
  
  return (
    <Layout>
      {/* JSON-LD structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(projectJsonLd) }}
      />
      
      {/* Hero section */}
      <section className="py-16 md:py-10 bg-gradient-to-br from-background to-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            {project.featured && (
              <div className="flex items-center mb-6">
                <span className="px-3 py-1 bg-amber-500/90 text-white text-xs font-medium rounded-full shadow-sm inline-flex items-center">
                  <Star className="h-3 w-3 mr-1.5 fill-white" />
                  Featured Project
                </span>
              </div>
            )}
            
            <h1 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">{project.title}</h1>
            
            <div className="flex flex-wrap gap-3 mb-8">
              <span className="px-3 py-1 bg-primary/90 text-primary-foreground text-xs font-medium rounded-full shadow-sm">
                {project.category}
              </span>
              
              {project.client && (
                <span className="px-3 py-1 bg-muted text-muted-foreground text-xs font-medium rounded-full">
                  Client: {project.client}
                </span>
              )}
              
              {project.industry && (
                <span className="px-3 py-1 bg-muted text-muted-foreground text-xs font-medium rounded-full">
                  Industry: {project.industry}
                </span>
              )}
              
              {project.year && (
                <span className="px-3 py-1 bg-muted text-muted-foreground text-xs font-medium rounded-full">
                  Year: {project.year || new Date().getFullYear()}
                </span>
              )}
            </div>
            
            <p className="text-lg text-muted-foreground mb-8">{project.description}</p>
            
            {/* Project statistics */}
            <div className="grid grid-cols-3 gap-6 mb-12">
              <div className="bg-card rounded-xl shadow-sm p-6 border border-border text-center">
                <Award className="h-6 w-6 text-primary mx-auto mb-3" />
                <div className="text-sm text-muted-foreground mb-1">Performance</div>
                <div className="font-semibold">{project.stats.performance}</div>
              </div>
              
              <div className="bg-card rounded-xl shadow-sm p-6 border border-border text-center">
                <Clock className="h-6 w-6 text-primary mx-auto mb-3" />
                <div className="text-sm text-muted-foreground mb-1">Duration</div>
                <div className="font-semibold">{project.stats.duration}</div>
              </div>
              
              <div className="bg-card rounded-xl shadow-sm p-6 border border-border text-center">
                <Star className="h-6 w-6 text-primary mx-auto mb-3" />
                <div className="text-sm text-muted-foreground mb-1">Client Satisfaction</div>
                <div className="font-semibold">{project.stats.satisfaction}</div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Project image */}
      <section>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative aspect-video overflow-hidden rounded-xl shadow-xl">
            <OptimizedImage
              src={project.image}
              alt={project.title}
              fill
              className="object-cover h-full"
              priority
            />
          </div>
        </div>
      </section>
      
      {/* Project details */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Sidebar */}
            <div className="lg:order-2">
              <div className="bg-card rounded-xl shadow-sm border border-border p-6 sticky top-24">
                <h3 className="text-xl font-bold mb-6">Project Details</h3>
                
                <div className="space-y-6">
                  {/* Tags */}
                  <div>
                    <h4 className="text-sm uppercase text-muted-foreground font-medium mb-3 flex items-center">
                      <Tag className="h-4 w-4 mr-2" />
                      Tags
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, index) => (
                        <span 
                          key={index} 
                          className="px-2.5 py-1 bg-primary/10 text-primary text-xs rounded-md"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  {/* Technologies */}
              <div>
                    <h4 className="text-sm uppercase text-muted-foreground font-medium mb-3 flex items-center">
                      <Code className="h-4 w-4 mr-2" />
                      Technologies
                    </h4>
                    <ul className="space-y-2">
                      {(project.technologies || ["Next.js", "React", "Tailwind CSS", "TypeScript"]).map((tech, index) => (
                        <li key={index} className="flex items-center text-sm">
                          <CheckCircle className="h-4 w-4 text-primary mr-2" />
                          {tech}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  {/* Actions */}
                  <div className="pt-4 border-t border-border">
                    <Link href={project.link || "#"} className="block w-full">
                      <Button className="w-full justify-center gap-2">
                        Visit Live Project <ExternalLink className="h-4 w-4" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Main content */}
            <div className="lg:col-span-2 lg:order-1">
              {/* Challenge */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold mb-4">The Challenge</h2>
                <div className="bg-muted/30 rounded-xl p-6 border border-border">
                  <p className="text-muted-foreground">{project.challenge || defaultChallenge}</p>
                </div>
              </div>
              
              {/* Solution */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold mb-4">Our Solution</h2>
                <div className="bg-muted/30 rounded-xl p-6 border border-border">
                  <p className="text-muted-foreground">{project.solution || defaultSolution}</p>
                </div>
              </div>
              
              {/* Results */}
              <div>
                <h2 className="text-2xl font-bold mb-4">The Results</h2>
                <div className="bg-gradient-to-br from-primary/5 to-primary/10 rounded-xl p-6 border border-primary/10">
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {(project.results || defaultResults).map((result, index) => (
                      <li key={index} className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-primary mr-3 flex-shrink-0 mt-0.5" />
                        <span>{result}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Add Related Content Section */}
      <section className="py-16 bg-muted/30 border-t border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-center mb-12">You May Also Be Interested In</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Related Industry */}
            {project.industry && (
              <div className="bg-card rounded-xl shadow-sm border border-border overflow-hidden hover:shadow-md transition-all duration-300 group">
                <div className="p-6">
                  <h3 className="text-lg font-semibold mb-3">Explore {project.industry} Solutions</h3>
                  <p className="text-muted-foreground mb-4">Discover our specialized services and case studies for the {project.industry} industry.</p>
                  <Link 
                    href={`/industries/${project.industry.toLowerCase().replace(/\s+/g, '-')}`}
                    className="inline-flex items-center text-primary group-hover:underline"
                  >
                    Learn More <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            )}
            
            {/* Related Service Category */}
            <div className="bg-card rounded-xl shadow-sm border border-border overflow-hidden hover:shadow-md transition-all duration-300 group">
              <div className="p-6">
                <h3 className="text-lg font-semibold mb-3">Explore {project.category} Services</h3>
                <p className="text-muted-foreground mb-4">Learn about our comprehensive {project.category.toLowerCase()} services and how they can benefit your business.</p>
                <Link 
                  href={`/services`}
                  className="inline-flex items-center text-primary group-hover:underline"
                >
                  View Services <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
            
            {/* Related Portfolio Items or Case Studies */}
            <div className="bg-card rounded-xl shadow-sm border border-border overflow-hidden hover:shadow-md transition-all duration-300 group">
              <div className="p-6">
                <h3 className="text-lg font-semibold mb-3">Similar Projects</h3>
                <p className="text-muted-foreground mb-4">Browse more projects and case studies in the {project.category} category.</p>
                <Link 
                  href={`/case-studies`}
                  className="inline-flex items-center text-primary group-hover:underline"
                >
                  View Case Studies <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Targeted CTA based on project category */}
      <section className="py-16 bg-primary/5 border-t border-primary/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to Start Your {project.category} Project?</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Let&apos;s discuss how we can help you achieve your business goals with a custom solution tailored to your needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg">
                <Link href="/contact/free-consultation">
                  Request a Free Consultation
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href={`/services`}>
                  Explore Our Services
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      {/* Next/Previous projects */}
      <section className="py-16 border-t border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-center mb-12">Explore More Projects</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Link 
              href={`/portfolio/${prevProject.title.toLowerCase().replace(/\s+/g, '-')}`}
              className="group block bg-card rounded-xl border border-border overflow-hidden shadow-sm hover:shadow-md transition-all duration-300"
            >
              <div className="relative h-48 w-full">
                <OptimizedImage
                  src={prevProject.image}
                  fill
                  alt={prevProject.title}
                  className="object-cover h-full transition-transform group-hover:scale-105 duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="text-white flex items-center mb-2">
                    <ArrowLeft className="h-4 w-4 mr-2" />
                    Previous Case Study
                  </div>
                  <h3 className="text-xl font-bold text-white">{prevProject.title}</h3>
                </div>
            </div>
            </Link>
            
            <Link 
              href={`/portfolio/${nextProject.title.toLowerCase().replace(/\s+/g, '-')}`}
              className="group block bg-card rounded-xl border border-border overflow-hidden shadow-sm hover:shadow-md transition-all duration-300"
            >
              <div className="relative h-48 w-full">
                <OptimizedImage
                  src={nextProject.image}
                  fill
                  alt={nextProject.title}
                  className="object-cover h-full transition-transform group-hover:scale-105 duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="text-white flex items-center justify-end mb-2">
                    Next Case Study
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </div>
                  <h3 className="text-xl font-bold text-white text-right">{nextProject.title}</h3>
                </div>
            </div>
            </Link>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-primary/5 to-primary/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Start Your Project?</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Let&apos;s discuss how we can help you achieve your business goals with our custom digital solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button size="lg" className="rounded-lg w-full sm:w-auto gap-2">
                  Get in Touch <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
              <Link href={`${process.env.NEXT_PUBLIC_ORDERS_URL}`}>
                <Button size="lg" variant="outline" className="rounded-lg w-full sm:w-auto">
                  Place an Order
              </Button>
            </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
} 