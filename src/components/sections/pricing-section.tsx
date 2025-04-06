import React from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"

interface PricingFeature {
  text: string
  included: boolean
}

interface PricingPlan {
  name: string
  price: string
  description: string
  features: PricingFeature[]
  buttonText: string
  buttonLink: string
  featured?: boolean
  priceDetail?: string
}

interface PricingSectionProps {
  title?: string
  description?: string
  plans: PricingPlan[]
  className?: string
  backgroundClassName?: string
}

export function PricingSection({
  title = "Our Pricing Plans",
  description,
  plans,
  className = "",
  backgroundClassName = ""
}: PricingSectionProps) {
  return (
    <section className={`py-16 md:py-24 ${backgroundClassName}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {(title || description) && (
          <div className="max-w-3xl mx-auto text-center mb-12">
            {title && <h2 className="text-3xl font-bold tracking-tight">{title}</h2>}
            {description && (
              <p className="mt-4 text-lg text-muted-foreground">
                {description}
              </p>
            )}
          </div>
        )}
        
        <div className={`grid gap-8 ${className} sm:grid-cols-2 lg:grid-cols-${plans.length > 3 ? '4' : plans.length}`}>
          {plans.map((plan, index) => (
            <div 
              key={index} 
              className={`bg-card rounded-lg shadow-sm border ${plan.featured ? 'border-primary' : 'border-border'} overflow-hidden ${plan.featured ? 'relative z-10 scale-105' : ''}`}
            >
              {plan.featured && (
                <div className="bg-primary text-primary-foreground py-1 px-4 text-sm font-medium text-center">
                  Most Popular
                </div>
              )}
              <div className="p-6">
                <h3 className="text-xl font-bold">{plan.name}</h3>
                <div className="mt-4 flex items-baseline">
                  <span className="text-3xl font-bold">{plan.price}</span>
                  {plan.priceDetail && (
                    <span className="ml-1 text-sm text-muted-foreground">{plan.priceDetail}</span>
                  )}
                </div>
                <p className="mt-2 text-sm text-muted-foreground">
                  {plan.description}
                </p>
                <div className="mt-6">
                  <ul className="space-y-3">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <Check 
                          className={`h-5 w-5 mr-2 flex-shrink-0 ${feature.included ? 'text-primary' : 'text-muted-foreground/50'}`} 
                        />
                        <span className={feature.included ? '' : 'text-muted-foreground/50'}>
                          {feature.text}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-8">
                  <Link href={plan.buttonLink}>
                    <Button 
                      className="w-full" 
                      variant={plan.featured ? "default" : "outline"}
                    >
                      {plan.buttonText}
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 