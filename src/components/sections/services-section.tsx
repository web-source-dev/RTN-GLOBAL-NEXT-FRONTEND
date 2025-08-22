"use client"

import React, { useRef } from 'react'
import Link from 'next/link'
import { 
  ArrowRight,
  Code,
  Palette,
  Bug,
  Globe,
  Puzzle,
  ShoppingBag
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { H2, H3, P, Lead } from '@/components/ui/typography'
import { motion, useInView } from 'framer-motion'









const ServicesSection = () => {

  
  // Animation variants for staggered animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };
  
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 });
  
  return (
    <section className="py-16 md:py-24 relative overflow-hidden" id="services" ref={sectionRef}>
      {/* Background decor elements */}
      <motion.div 
        className="absolute -top-20 -left-20 w-72 h-72 bg-primary/5 rounded-full blur-3xl opacity-40 -z-10"
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.3, 0.2] 
        }}
        transition={{ 
          duration: 8, 
          repeat: Infinity,
          ease: "easeInOut" 
        }}
      />
      
      <motion.div 
        className="absolute bottom-40 right-0 w-96 h-96 bg-indigo-500/5 rounded-full blur-3xl opacity-30 -z-10"
        animate={{ 
          scale: [1, 1.3, 1],
          opacity: [0.1, 0.2, 0.1] 
        }}
        transition={{ 
          duration: 10, 
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
      />
      
      <div className="container mx-auto">
        <motion.div 
          className="text-center max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <motion.div 
            className="inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary mb-4"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.4 }}
          >
            Expert Digital Services
          </motion.div>
          <H2 className="mb-4">Tailored Web Solutions For Your Business</H2>
          <Lead>
            From responsive web design to custom development, we deliver results-driven digital solutions that help your business thrive online.
          </Lead>
        </motion.div>

        {/* Service Categories - simplified for clarity */}
        <motion.div 
          className="flex flex-wrap justify-center gap-3 mt-10 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          {/* Updated category buttons for clearer service offerings */}
          {["Web Development", "UI/UX Design", "Wix Development", "Bug Fixes", "Custom Solutions"].map((category, index) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, x: -10 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
              transition={{ duration: 0.4, delay: 0.4 + (index * 0.05) }}
              whileHover={{ scale: 1.05 }}
            >
              <Link 
                href={`/services#${category.toLowerCase().replace(/\s+/g, '-')}`}
                className="inline-flex items-center gap-2 px-4 py-2 bg-card border border-border rounded-full hover:bg-primary/5 hover:border-primary/20 transition-colors"
              >
                <span className="text-primary">
                  {index === 0 ? <Code className="h-4 w-4" /> : 
                   index === 1 ? <Palette className="h-4 w-4" /> : 
                   index === 2 ? <Globe className="h-4 w-4" /> : 
                   index === 3 ? <Bug className="h-4 w-4" /> : 
                   <Puzzle className="h-4 w-4" />}
                </span>
                <span className="text-sm font-medium">{category}</span>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Web Development Service Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: 0 }}
            whileHover={{ 
              y: -10, 
              boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
            }}
            className="group bg-card rounded-xl shadow-sm p-6 border border-border hover:border-primary/30 transition-all duration-300 relative overflow-hidden"
          >
            <div className="bg-primary/10 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-5 transition-transform group-hover:scale-110">
              <Code className="h-5 w-5" />
            </div>
            
            <H3 className="mb-3 group-hover:text-primary transition-colors">Web Development</H3>
            
            <div className="w-12 h-1 bg-primary/30 rounded-full mb-4 transition-all duration-300 group-hover:w-20 group-hover:bg-primary"></div>
            
            <P className="mb-6">
              Custom, responsive websites built with modern technologies that load fast, convert visitors, and rank well on search engines.
            </P>
            
            <Link 
              href="/services/web-development" 
              className="text-primary text-sm font-medium hover:underline inline-flex items-center"
            >
              Explore Web Development <ArrowRight className="ml-1 h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>

          {/* UI/UX Design Service Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            whileHover={{ 
              y: -10, 
              boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
            }}
            className="group bg-card rounded-xl shadow-sm p-6 border border-border hover:border-primary/30 transition-all duration-300 relative overflow-hidden"
          >
            <div className="bg-primary/10 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-5 transition-transform group-hover:scale-110">
              <Palette className="h-5 w-5" />
            </div>
            
            <H3 className="mb-3 group-hover:text-primary transition-colors">UI/UX Design</H3>
            
            <div className="w-12 h-1 bg-primary/30 rounded-full mb-4 transition-all duration-300 group-hover:w-20 group-hover:bg-primary"></div>
            
            <p className="text-muted-foreground mb-6">
              Beautiful, intuitive designs that enhance user experience, strengthen your brand, and drive engagement across all platforms.
            </p>
            
            <Link 
              href="/services/ux-design" 
              className="text-primary text-sm font-medium hover:underline inline-flex items-center"
            >
              Explore UX Design <ArrowRight className="ml-1 h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>

          {/* Wix Development Service Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            whileHover={{ 
              y: -10, 
              boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
            }}
            className="group bg-card rounded-xl shadow-sm p-6 border border-border hover:border-primary/30 transition-all duration-300 relative overflow-hidden"
          >
            <div className="bg-primary/10 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-5 transition-transform group-hover:scale-110">
              <Globe className="h-5 w-5" />
            </div>
            
            <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">Wix Development</h3>
            
            <div className="w-12 h-1 bg-primary/30 rounded-full mb-4 transition-all duration-300 group-hover:w-20 group-hover:bg-primary"></div>
            
            <p className="text-muted-foreground mb-6">
              Expert Wix website creation and customization with custom code integration for a professional site that stands out from templates.
            </p>
            
            <Link 
              href="/services/wordpress-development" 
              className="text-primary text-sm font-medium hover:underline inline-flex items-center"
            >
              Explore WordPress Development <ArrowRight className="ml-1 h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>

          {/* Bug Fixes Service Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            whileHover={{ 
              y: -10, 
              boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
            }}
            className="group bg-card rounded-xl shadow-sm p-6 border border-border hover:border-primary/30 transition-all duration-300 relative overflow-hidden"
          >
            <div className="bg-primary/10 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-5 transition-transform group-hover:scale-110">
              <Bug className="h-5 w-5" />
            </div>
            
            <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">Bug Fixes & Optimization</h3>
            
            <div className="w-12 h-1 bg-primary/30 rounded-full mb-4 transition-all duration-300 group-hover:w-20 group-hover:bg-primary"></div>
            
            <p className="text-muted-foreground mb-6">
              Quick and effective solutions to fix website bugs, errors, and performance issues, ensuring your site runs smoothly.
            </p>
            
            <Link 
              href="/services/performance-optimization" 
              className="text-primary text-sm font-medium hover:underline inline-flex items-center"
            >
              Explore Performance Optimization <ArrowRight className="ml-1 h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>

          {/* Custom Solutions Service Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            whileHover={{ 
              y: -10, 
              boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
            }}
            className="group bg-card rounded-xl shadow-sm p-6 border border-border hover:border-primary/30 transition-all duration-300 relative overflow-hidden"
          >
            <div className="bg-primary/10 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-5 transition-transform group-hover:scale-110">
              <Puzzle className="h-5 w-5" />
            </div>
            
            <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">Custom Solutions</h3>
            
            <div className="w-12 h-1 bg-primary/30 rounded-full mb-4 transition-all duration-300 group-hover:w-20 group-hover:bg-primary"></div>
            
            <p className="text-muted-foreground mb-6">
              Tailored digital solutions that address your specific business challenges with innovative technology and strategic thinking.
            </p>
            
            <Link 
              href="/services/web-app-development" 
              className="text-primary text-sm font-medium hover:underline inline-flex items-center"
            >
              Explore Web App Development <ArrowRight className="ml-1 h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>

          {/* E-commerce Development Service Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            whileHover={{ 
              y: -10, 
              boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
            }}
            className="group bg-card rounded-xl shadow-sm p-6 border border-border hover:border-primary/30 transition-all duration-300 relative overflow-hidden"
          >
            <div className="bg-primary/10 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-5 transition-transform group-hover:scale-110">
              <ShoppingBag className="h-5 w-5" />
            </div>
            
            <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">E-commerce Development</h3>
            
            <div className="w-12 h-1 bg-primary/30 rounded-full mb-4 transition-all duration-300 group-hover:w-20 group-hover:bg-primary"></div>
            
            <p className="text-muted-foreground mb-6">
              High-converting online stores with seamless checkout, inventory management, and secure payment gateways.
            </p>
            
            <Link 
              href="/services/e-commerce" 
              className="text-primary text-sm font-medium hover:underline inline-flex items-center"
            >
              Explore E-commerce Solutions <ArrowRight className="ml-1 h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </motion.div>
        
        <motion.div 
          className="flex justify-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <Link href="/services">
            <motion.div whileHover={{ scale: 1.05 }}>
              <Button 
                className="gap-2 rounded-full shadow-sm hover:shadow-md hover:scale-105 transition-all duration-300"
              >
                View All Services <ArrowRight className="h-4 w-4" />
              </Button>
            </motion.div>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

export default ServicesSection