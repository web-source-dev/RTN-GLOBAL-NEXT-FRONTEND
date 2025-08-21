import React from "react"
import { Quote } from "lucide-react"

interface Testimonial {
  content: string
  author: string
  role: string
  company?: string
  avatarInitials?: string
}

interface TestimonialsSectionProps {
  title?: string
  description?: string
  testimonials: Testimonial[]
  className?: string
  backgroundClassName?: string
}

export function TestimonialsSection({
  title = "What Our Clients Say",
  description,
  testimonials,
  className = "",
  backgroundClassName = "bg-white"
}: TestimonialsSectionProps) {
  return (
    <section className={`py-20 md:py-20 relative overflow-hidden ${backgroundClassName}`}>
      {/* Decorative background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl opacity-50"></div>
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-primary/5 rounded-full blur-3xl opacity-40"></div>
      </div>
      
      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        {(title || description) && (
          <div className="max-w-3xl mx-auto text-center mb-16">
            <div className="inline-block mb-4 rounded-full bg-primary/10 px-4 py-1.5 text-xs font-medium text-primary uppercase tracking-wider">
              Client Feedback
            </div>
            {title && <h2 className="text-3xl font-semibold tracking-tight md:text-4xl lg:text-5xl bg-gradient-to-r text-black  bg-clip-text">{title}</h2>}
            {description && (
              <p className="mt-4 text-lg text-muted-foreground">
                {description}
              </p>
            )}
          </div>
        )}
        
        <div className={`grid gap-8 ${className} md:grid-cols-2 lg:grid-cols-3`}>
          {testimonials.map((testimonial, index) => (
            <div key={index} className="group relative">
              {/* Subtle background shape */}
              <div className="absolute inset-0 bg-primary/5 rounded-xl transform rotate-1 scale-[0.98] group-hover:rotate-0 transition-transform duration-300 opacity-0 group-hover:opacity-100"></div>
              
              <div className="relative bg-card p-8 rounded-xl shadow-sm border border-border/40 transition-all duration-300 group-hover:shadow-xl group-hover:-translate-y-1 h-full flex flex-col">
                {/* Quote icon */}
                <div className="absolute -top-4 -left-2 text-primary/70 group-hover:text-primary/100 transition-colors duration-300">
                  <Quote className="h-12 w-12" />
                </div>
                
                <div className="flex justify-between items-start mb-6">
                  <div className="flex">
                    {Array(5).fill(0).map((_, i) => (
                      <svg key={i} className="h-5 w-5 text-yellow-400 group-hover:text-yellow-500 transition-colors duration-300" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>
                
                <blockquote className="mb-6 text-lg italic text-foreground font-medium flex-grow">{testimonial.content}</blockquote>
                
                <div className="flex items-center mt-auto pt-6 border-t border-border/30">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center text-primary font-medium mr-4 shadow-sm border border-primary/10">
                    {testimonial.avatarInitials || testimonial.author.split(' ').map(name => name[0]).join('')}
                  </div>
                  <div>
                    <div className="font-semibold text-foreground group-hover:text-primary transition-colors">{testimonial.author}</div>
                    <div className="text-sm text-muted-foreground">
                      {testimonial.role}{testimonial.company ? `, ${testimonial.company}` : ''}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 