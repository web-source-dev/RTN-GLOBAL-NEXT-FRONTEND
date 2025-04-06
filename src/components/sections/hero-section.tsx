import React from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { OptimizedImage } from "@/components/ui/optimized-image"
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
  backgroundClassName = "bg-gradient-to-br from-background via-background to-muted/30"
}: HeroSectionProps) {
  return (
    <section className={`relative pt-16 pb-14 md:pb-20 overflow-hidden ${backgroundClassName}`}>
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.02] pointer-events-none"></div>
      <div className="container relative">
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="order-2 md:order-1">
            {subtitle && (
              <div className="inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary mb-6">
                {subtitle}
              </div>
            )}
            <h1 className="text-4xl md:text-5xl xl:text-6xl font-bold tracking-tight mb-6 leading-tight">
              {title}
            </h1>
            
            {description && (
              <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-lg">
                {description}
              </p>
            )}
            
            <div className={`flex flex-col sm:flex-row gap-4 ${features.length > 0 ? 'mb-10' : ''}`}>
              {primaryCTA && (
                <Link href={primaryCTA.href}>
                  <Button size="lg" className="w-full sm:w-auto gap-2 rounded-lg shadow-lg shadow-primary/20">
                    {primaryCTA.text} <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
              )}
              
              {secondaryCTA && (
                <Link href={secondaryCTA.href}>
                  <Button size="lg" variant="outline" className="w-full sm:w-auto rounded-lg">
                    {secondaryCTA.text}
                  </Button>
                </Link>
              )}
            </div>
            
            {features.length > 0 && (
              <div className="flex flex-col gap-3">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary" />
                    <p className="text-sm md:text-base">{feature}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
          
          <div className="order-1 md:order-2 relative">
            <div className="bg-gradient-to-br from-primary/10 to-transparent rounded-3xl p-4 lg:p-6 relative z-10">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-primary/10">
                <OptimizedImage
                  src={imageUrl || "/images/hero-image.jpg"}
                  width={600}
                  height={450}
                  alt="Hero image"
                  className="object-cover w-full"
                />
              </div>
            </div>
            <div className="absolute -top-10 -right-10 w-48 h-48 bg-primary/10 rounded-full filter blur-3xl opacity-50"></div>
            <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-primary/20 rounded-full filter blur-2xl opacity-40"></div>
          </div>
        </div>
        
        {className && <div className={className}></div>}
      </div>
    </section>
  )
} 