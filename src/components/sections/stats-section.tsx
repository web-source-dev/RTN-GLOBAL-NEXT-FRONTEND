import React from "react"

interface Stat {
  value: string | number
  label: string
  prefix?: string
  suffix?: string
}

interface StatsSectionProps {
  title?: string
  description?: string
  stats: Stat[]
  columns?: 2 | 3 | 4
  className?: string
  backgroundClassName?: string
  headingId?: string
}

export function StatsSection({
  title,
  description,
  stats,
  columns = 4,
  className = "",
  backgroundClassName = "bg-primary/10",
  headingId
}: StatsSectionProps) {
  return (
    <section className={`py-16 ${backgroundClassName}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {(title || description) && (
          <div className="max-w-3xl mx-auto text-center mb-12">
            {title && <h2 id={headingId} className="text-3xl font-bold tracking-tight">{title}</h2>}
            {description && (
              <p className="mt-4 text-lg text-muted-foreground">
                {description}
              </p>
            )}
          </div>
        )}
        
        <div className={`grid gap-6 text-center ${className} ${
          columns === 2 ? 'sm:grid-cols-2' : 
          columns === 3 ? 'sm:grid-cols-3' : 
          'grid-cols-2 md:grid-cols-4'
        }`}>
          {stats.map((stat, index) => (
            <div key={index} className="p-6">
              <div className="text-4xl md:text-5xl font-bold text-primary">
                {stat.prefix}{typeof stat.value === 'number' ? stat.value.toLocaleString() : stat.value}{stat.suffix}
              </div>
              <p className="mt-2 text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 