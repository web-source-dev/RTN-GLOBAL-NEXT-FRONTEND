import React from "react"
import { LucideIcon } from "lucide-react"

interface Feature {
  icon?: LucideIcon
  iconClassName?: string
  title: string
  description: string
}

interface FeaturesSectionProps {
  title?: string
  description?: string
  features: Feature[]
  columns?: 2 | 3 | 4
  className?: string
  backgroundClassName?: string
}

export function FeaturesSection({
  title,
  description,
  features,
  columns = 3,
  className = "",
  backgroundClassName = ""
}: FeaturesSectionProps) {
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
        
        <div className={`grid gap-8 ${className} ${
          columns === 2 ? 'md:grid-cols-2' : 
          columns === 3 ? 'md:grid-cols-2 lg:grid-cols-3' : 
          'sm:grid-cols-2 lg:grid-cols-4'
        }`}>
          {features.map((feature, index) => (
            <div key={index} className="bg-card p-6 rounded-lg shadow-sm border border-border">
              {feature.icon && (
                <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 ${feature.iconClassName || 'bg-primary/10'}`}>
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
              )}
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 