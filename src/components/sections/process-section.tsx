"use client"

import { ArrowRight, Lightbulb, Search, Code, PenTool, BarChart4, Zap, Shield, Rocket } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { useState, useRef, useEffect } from "react"

type ProcessStep = {
  id: string
  title: string
  description: string
  icon: React.ReactNode
}

const processSteps: ProcessStep[] = [
  {
    id: "discovery",
    title: "Discovery & Planning",
    description: "We analyze your business goals, target audience, and competition to create a strategic roadmap for your web project.",
    icon: <Search className="h-6 w-6 md:h-8 md:w-8" />
  },
  {
    id: "design",
    title: "UI/UX Design",
    description: "Our designers create visually stunning, user-friendly interfaces tailored to your brand and optimized for conversions.",
    icon: <PenTool className="h-6 w-6 md:h-8 md:w-8" />
  },
  {
    id: "development",
    title: "Web Development",
    description: "Our developers build your site using clean, efficient code and the latest technologies for optimal performance.",
    icon: <Code className="h-6 w-6 md:h-8 md:w-8" />
  },
  {
    id: "testing",
    title: "Testing & QA",
    description: "We rigorously test your site across all devices and browsers to ensure optimal functionality and user experience.",
    icon: <Shield className="h-6 w-6 md:h-8 md:w-8" />
  },
  {
    id: "launch",
    title: "Launch & Deployment",
    description: "Your website goes live with our deployment process that ensures a smooth transition and minimal downtime.",
    icon: <Rocket className="h-6 w-6 md:h-8 md:w-8" />
  },
  {
    id: "support",
    title: "Support & Maintenance",
    description: "We provide ongoing support, updates, and optimization to keep your website secure, fast, and effective.",
    icon: <Zap className="h-6 w-6 md:h-8 md:w-8" />
  }
]

export function ProcessSection() {
  const [activeStep, setActiveStep] = useState(0);
  const stepsRef = useRef<(HTMLDivElement | null)[]>([]);
  const sectionRef = useRef<HTMLElement>(null);
  
  // Using object for faster lookups rather than class concatenation
  const iconStyles = {
    active: "bg-primary text-white shadow-lg",
    inactive: "bg-primary/10 text-primary border border-primary/30 shadow-sm"
  };
  
  const stepNumberStyles = {
    active: "bg-primary text-white ring-4 ring-primary/20",
    inactive: "bg-muted text-muted-foreground"
  };
  
  // Setup intersection observer to track visible steps while scrolling
  useEffect(() => {
    if (!sectionRef.current) return;
    
    const options = {
      root: null,
      rootMargin: '-20% 0px -20% 0px', // Adjust the margin to control when steps become active
      threshold: [0.25, 0.5, 0.75], // Multiple thresholds for better accuracy
    };
    
    const observer = new IntersectionObserver((entries) => {
      // Sort entries by their vertical position to maintain order
      const sortedEntries = entries
        .filter(entry => entry.isIntersecting)
        .sort((a, b) => {
          const rectA = a.boundingClientRect;
          const rectB = b.boundingClientRect;
          return rectA.top - rectB.top;
        });
      
      if (sortedEntries.length > 0) {
        // Get the topmost visible entry
        const topEntry = sortedEntries[sortedEntries.length - 1];
        const index = stepsRef.current.findIndex(ref => ref === topEntry.target);
        
        if (index !== -1) {
          // Only move forward one step at a time
          if (index === activeStep + 1) {
            setActiveStep(index);
          } 
          // Allow moving backward to any previous step
          else if (index < activeStep) {
            setActiveStep(index);
          }
          // For direct clicks or when loading the page, allow any step
          else if (index > 0 && index - activeStep > 1 && topEntry.intersectionRatio > 0.6) {
            setActiveStep(index);
          }
        }
      }
    }, options);
    
    // Store current refs in a variable to use in cleanup
    const currentStepRefs = stepsRef.current;
    
    // Add all step elements to the observer
    currentStepRefs.forEach((ref) => {
      if (ref) observer.observe(ref);
    });
    
    return () => {
      currentStepRefs.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, [activeStep]); // Adding activeStep as a dependency to re-run when it changes
  
  return (
    <section className="py-14 md:py-20 bg-muted/100" id="process" ref={sectionRef}>
      <div className="container mx-auto relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
          {/* Left column - sticky content only on desktop */}
          <div className="lg:sticky lg:top-24 h-fit max-w-md">
            <div className="inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary mb-4">
              Our Development Process
            </div>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-4">How We Create Your Perfect Website</h2>
            <p className="text-lg text-muted-foreground mb-8">
              We follow a proven, structured approach to web development that delivers exceptional results. Our process ensures your project is completed efficiently, on time, and exceeds your expectations.
            </p>
            <Link href="/contact/free-consultation">
              <Button className="gap-2 rounded-lg">
                Start Your Web Project <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
            
            {/* Process progress indicator - desktop only */}
            <div className="mt-12 hidden lg:block">
              <div className="h-1.5 w-full bg-muted rounded-full overflow-hidden">
                <div 
                  className="h-full bg-primary rounded-full transition-all duration-300"
                  style={{ width: `${((activeStep + 1) / processSteps.length) * 100}%` }}
                ></div>
              </div>
              <div className="mt-4 text-sm font-medium">
                <span className="text-primary">Step {activeStep + 1}</span> of {processSteps.length}: <span className="text-foreground">{processSteps[activeStep].title}</span>
              </div>
            </div>
          </div>
          
          {/* Right column - scrolling content */}
          <div className="space-y-12 lg:space-y-16 relative">
            {/* Timeline connector - desktop only */}
            <div className="absolute top-0 bottom-0 left-6 md:left-8 border-l-2 border-dashed border-primary/30 hidden lg:block"></div>
            
            {processSteps.map((step, index) => (
              <div 
                key={step.id} 
                className="relative pl-12 md:pl-16"
                onClick={() => setActiveStep(index)}
                onMouseEnter={() => setActiveStep(index)}
                ref={el => { stepsRef.current[index] = el }}
              >
                <div
                  className={`absolute left-0 -translate-x-1/2 flex items-center justify-center w-12 h-12 md:w-14 md:h-14 rounded-xl transition-colors duration-300 ${activeStep === index ? iconStyles.active : iconStyles.inactive}`}
                >
                  {step.icon}
                </div>
                <div className="relative">
                  <div className="flex items-center">
                    <span className={`absolute -left-6 md:-left-8 flex items-center justify-center w-5 h-5 md:w-6 md:h-6 rounded-full text-xs font-medium transition-colors duration-300 ${activeStep === index ? stepNumberStyles.active : stepNumberStyles.inactive}`}>
                      {index + 1}
                    </span>
                    <h3 className={`text-lg md:text-xl font-bold ${activeStep === index ? "text-primary" : ""}`}>{step.title}</h3>
                  </div>
                  <p className="mt-2 text-sm md:text-base text-muted-foreground">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="mt-16 w-screen bg-primary p-6 md:p-8" style={{ marginLeft: 'calc(-50vw + 50%)', marginRight: 'calc(-50vw + 50%)', marginBottom: '-5rem', marginTop: '8rem' }}>
          <div className="container mx-auto max-w-7xl">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center md:text-left md:col-span-1">
                <h3 className="text-xl md:text-2xl font-bold mb-2 text-white">Ready to Begin?</h3>
                <p className="text-white/90">
                  Let's discuss your web project and create your perfect online presence today.
                </p>
              </div>
              <div className="md:col-span-2 flex flex-col sm:width-full sm:flex-row justify-center md:justify-end gap-4 items-center">
                <Link href="/contact">
                  <Button size="lg" className="gap-2 rounded-lg w-full sm:w-full shadow-sm bg-white text-primary hover:bg-white/80">
                    Contact Us Now <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
                <Link href="/portfolio">
                  <Button variant="outline" size="lg" className="rounded-lg w-full sm:w-full text-white hover:bg-white/30">
                    View Our Work
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 