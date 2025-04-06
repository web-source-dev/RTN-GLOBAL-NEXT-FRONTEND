"use client"

import { ArrowRight, Lightbulb, Search, Code, PenTool, BarChart4, Zap } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { useState } from "react"

type ProcessStep = {
  id: string
  title: string
  description: string
  icon: React.ReactNode
}

const processSteps: ProcessStep[] = [
  {
    id: "discovery",
    title: "Discovery & Research",
    description: "We begin by understanding your business, goals, target audience, and competition to establish a solid foundation for your project.",
    icon: <Search className="h-6 w-6 md:h-8 md:w-8" />
  },
  {
    id: "strategy",
    title: "Strategy Development",
    description: "Based on our findings, we create a comprehensive strategy tailored to your specific needs and objectives.",
    icon: <Lightbulb className="h-6 w-6 md:h-8 md:w-8" />
  },
  {
    id: "design",
    title: "Design & Prototyping",
    description: "Our designers create visually stunning, user-friendly interfaces that align with your brand identity and project goals.",
    icon: <PenTool className="h-6 w-6 md:h-8 md:w-8" />
  },
  {
    id: "development",
    title: "Development",
    description: "Our skilled developers bring the designs to life using the latest technologies and best practices.",
    icon: <Code className="h-6 w-6 md:h-8 md:w-8" />
  },
  {
    id: "testing",
    title: "Testing & Optimization",
    description: "Rigorous testing ensures your product is bug-free, secure, and delivers an exceptional user experience across all devices.",
    icon: <BarChart4 className="h-6 w-6 md:h-8 md:w-8" />
  },
  {
    id: "launch",
    title: "Launch & Growth",
    description: "We don&apos;t just deliver and disappear. We provide ongoing support, updates, and optimizations to ensure long-term success.",
    icon: <Zap className="h-6 w-6 md:h-8 md:w-8" />
  }
]

export function ProcessSection() {
  const [activeStep, setActiveStep] = useState(0);
  
  // Using object for faster lookups rather than class concatenation
  const iconStyles = {
    active: "bg-primary text-white shadow-lg",
    inactive: "bg-primary/10 text-primary border border-primary/30 shadow-sm"
  };
  
  const stepNumberStyles = {
    active: "bg-primary text-white ring-4 ring-primary/20",
    inactive: "bg-muted text-muted-foreground"
  };
  
  return (
    <section className="py-14 md:py-20 bg-gradient-to-br from-background to-muted/30" id="process">
      <div className="container mx-auto relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
          {/* Left column - sticky content only on desktop */}
          <div className="lg:sticky lg:top-24 h-fit max-w-md">
            <div className="inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary mb-4">
              Our Process
            </div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">How We Work</h2>
            <p className="text-lg text-muted-foreground mb-8">
              We follow a structured yet flexible process designed to deliver exceptional results. Our approach ensures that every project is completed efficiently, on time, and exceeds expectations.
            </p>
            <Link href="/about#process">
              <Button className="gap-2 rounded-lg">
                Explore Our Development Process <ArrowRight className="h-4 w-4" />
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
        
        <div className="mt-16 bg-card rounded-xl p-6 md:p-8 border border-border shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center md:text-left md:col-span-1">
              <h3 className="text-xl md:text-2xl font-bold mb-2">Ready to Start?</h3>
              <p className="text-muted-foreground">
                Let&apos;s discuss your project and start building your digital success story.
              </p>
            </div>
            <div className="md:col-span-2 flex flex-col sm:flex-row justify-center md:justify-end gap-4 items-center">
              <Link href="/contact">
                <Button size="lg" className="gap-2 rounded-lg w-full sm:w-auto shadow-sm">
                  Get in Touch <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
              <Link href="/services">
                <Button variant="outline" size="lg" className="rounded-lg w-full sm:w-auto">
                  Explore Services
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 