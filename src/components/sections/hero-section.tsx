import React from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { OptimizedImage } from "@/components/ui/optimized-image"
import Image from "next/image"
import { H1, Lead, P } from "@/components/ui/typography"
import { ArrowRight, CheckCircle2 } from "lucide-react"

interface HeroSectionProps {
  title: string
  subtitle?: string
  description?: string
  primaryCTA?: {
    text: string
    href: string
  }
  secondaryCTA?: {
    text: string
    href: string
  }
  features?: string[]
  imageUrl?: string
  className?: string
  backgroundClassName?: string
}

export function HeroSection({
  title,
  subtitle,
  description,
  primaryCTA,
  secondaryCTA,
  features = [],
  imageUrl,
  className = "",
  backgroundClassName = ""
}: HeroSectionProps) {
  return (
    <section className={`relative min-h-[85vh] overflow-hidden ${backgroundClassName}`}>
      {/* Background Image with Gradient Overlay */}
      {imageUrl ? (
        <div className="absolute inset-0">
          <Image
            src={imageUrl}
            alt="Hero background"
            fill
            className="object-cover"
            priority={true}
            fetchPriority="high"
            loading="eager"
          />
          {/* Gradient Overlay - Strong on left for text readability, lighter on right */}
          <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/60 to-background/20"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-background/10 via-transparent to-transparent"></div>
        </div>
      ) : (
        /* Fallback gradient background */
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-muted/30"></div>
      )}
      
      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.03] pointer-events-none"></div>
      <div className="container relative flex items-center justify-center min-h-[85vh]">
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center justify-center">
          <div className="order-2 md:order-1">
            {subtitle && (
              <div className="inline-block rounded-full bg-primary/10 backdrop-blur-sm px-6 py-2 text-base font-medium text-primary mb-8">
                {subtitle}
              </div>
            )}
            <H1 className="mb-8 text-foreground drop-shadow-sm text-5xl md:text-6xl lg:text-7xl leading-tight">
              {title}
            </H1>
            
            {description && (
              <Lead className="mb-10 max-w-2xl text-foreground drop-shadow-sm text-lg md:text-xl leading-relaxed">
                {description}
              </Lead>
            )}
            
            <div className={`flex flex-col sm:flex-row gap-4 ${features.length > 0 ? 'mb-10' : ''}`}>
              {primaryCTA && (
                <Link href={primaryCTA.href}>
                  <Button size="lg" className="w-full sm:w-auto gap-2 rounded-lg shadow-lg shadow-primary/20 backdrop-blur-sm">
                    {primaryCTA.text} <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
              )}
              
              {secondaryCTA && (
                <Link href={secondaryCTA.href}>
                  <Button size="lg" variant="outline" className="w-full sm:w-auto rounded-lg backdrop-blur-sm">
                    {secondaryCTA.text}
                  </Button>
                </Link>
              )}
            </div>
            
            {features.length > 0 && (
              <div className="flex flex-col gap-3">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="flex-shrink-0 h-7 w-7 rounded-full bg-primary/10 backdrop-blur-sm flex items-center justify-center">
                      <CheckCircle2 className="h-5 w-5 text-primary" />
                    </div>
                    <P className="text-base md:text-lg text-foreground drop-shadow-sm font-medium">{feature}</P>
                  </div>
                ))}
              </div>
            )}
          </div>
          
          {/* Empty div for grid layout balance */}
          <div className="order-1 md:order-2 relative hidden md:block">
            <div className="w-full h-full flex items-center justify-center">
              <div className="w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
            </div>
          </div>
        </div>
        
        {className && <div className={className}></div>}
      </div>
    </section>
  )
} 