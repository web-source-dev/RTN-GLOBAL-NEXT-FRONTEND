'use client'

import React, { useState } from "react"
import { HelpCircle, Plus, Minus, ChevronDown, MessageSquare } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import Link from "next/link"

interface FAQItem {
  question: string
  answer: string
}

interface FAQSectionProps {
  title?: string
  description?: string
  faqs: FAQItem[]
  className?: string
  backgroundClassName?: string
  icon?: boolean
}

export function FAQSection({
  title = "Frequently Asked Questions",
  description,
  faqs,
  className = "",
  backgroundClassName = "",
  icon = true
}: FAQSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  
  const toggleQuestion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  
  return (
    <section className={`py-10 md:py-10 relative overflow-hidden ${backgroundClassName}`}>
      {/* Decorative background elements */}
      <div className="absolute inset-0 opacity-40 pointer-events-none">
        <div className="absolute opacity-10 bg-[radial-gradient(circle_at_20%_80%,var(--primary)_0%,transparent_40%),radial-gradient(circle_at_80%_20%,var(--primary-foreground)_0%,transparent_40%)]"></div>
      </div>
      
      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-8 md:gap-16">
          {/* Left Side - Sticky Content */}
          <div className="w-full lg:w-2/5 lg:sticky lg:top-20 lg:self-start">
            <div className="h-fit">
              <div className="mb-8">
                <div className="inline-flex items-center gap-2 mb-4 text-sm font-medium text-primary">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                  Support
                </div>
                
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3">
                  Have <span className="text-muted-foreground">Questions?</span>
                </h2>
                
                <p className="text-muted-foreground text-lg mb-8">
                  Get answers to frequently asked questions about our process, projects, and services.
                </p>
              </div>
              
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="bg-card/50 rounded-xl p-5">
                  <div className="text-2xl md:text-3xl font-bold mb-1">24/7</div>
                  <div className="text-sm text-muted-foreground">Customer support</div>
                </div>
                
                <div className="bg-card/50 rounded-xl p-5">
                  <div className="text-2xl md:text-3xl font-bold mb-1">100%</div>
                  <div className="text-sm text-muted-foreground">Satisfaction</div>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="outline" asChild>
                  <Link href="/faq">View All FAQs</Link>
                </Button>
                
                <Button asChild>
                  <Link href="/contact">Contact Support</Link>
                </Button>
              </div>
            </div>
          </div>
          
          {/* Right Side - FAQ Accordion */}
          <div className="w-full lg:w-3/5">
            <div className="space-y-5">
              {faqs.map((faq, index) => {
                const isOpen = openIndex === index;
                
                return (
                  <motion.div 
                    key={index} 
                    className={`bg-card border border-border/40 rounded-xl overflow-hidden transition-all duration-300 ${isOpen ? 'shadow-lg' : 'shadow-sm hover:shadow-md'}`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.3 }}
                    style={{ 
                      zIndex: faqs.length - index,
                      position: 'relative'
                    }}
                  >
                    <button 
                      onClick={() => toggleQuestion(index)}
                      className="w-full text-left px-8 py-6 flex items-start justify-between gap-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/20 focus-visible:ring-inset"
                    >
                      <div className="flex items-start gap-5">
                        {icon && (
                          <div className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center ${isOpen ? 'bg-primary/20 text-primary' : 'bg-muted text-muted-foreground'} transition-all duration-300`}>
                            <HelpCircle className="h-4 w-4" />
                          </div>
                        )}
                        <h3 className={`text-lg md:text-xl font-medium transition-colors duration-300 ${isOpen ? 'text-primary' : 'text-foreground'}`}>
                          {faq.question}
                        </h3>
                      </div>
                      
                      <div className={`shrink-0 rounded-full p-2 transition-all duration-300 ${isOpen ? 'bg-primary/10 rotate-180' : 'bg-muted/50'}`}>
                        <ChevronDown className={`h-5 w-5 transition-colors ${isOpen ? 'text-primary' : 'text-muted-foreground'}`} />
                      </div>
                    </button>
                    
                    <AnimatePresence>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <div className="px-8 pb-6 pt-0">
                            <div className={`pl-0 ${icon ? 'ml-[3.25rem]' : ''} pr-4 text-muted-foreground border-l-2 border-primary/20 pl-6`}>
                              <p className="text-base md:text-lg">{faq.answer}</p>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 