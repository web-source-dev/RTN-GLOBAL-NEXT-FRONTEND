"use client"

import React, { useRef } from 'react'
import Link from 'next/link'
import { 
  ArrowRight,
  BarChart,
  Code,
  Search,
  Settings,
  SmartphoneIcon,
  Mail,
  PenTool,
  Palette,
  FileText,
  ShoppingBag,
  Share2,
  TrendingUp
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { motion, useInView } from 'framer-motion'
import { getFeaturedServices, serviceCategories, Service, IconType } from '@/data/services'

// Icon mapping component
const ServiceIcon = ({ iconType }: { iconType: IconType }) => {
  switch (iconType) {
    case 'code':
      return <Code className="h-5 w-5" />;
    case 'trending-up':
      return <TrendingUp className="h-5 w-5" />;
    case 'pen-tool':
      return <PenTool className="h-5 w-5" />;
    case 'settings':
      return <Settings className="h-5 w-5" />;
    case 'search':
      return <Search className="h-5 w-5" />;
    case 'file-text':
      return <FileText className="h-5 w-5" />;
    case 'share2':
      return <Share2 className="h-5 w-5" />;
    case 'mail':
      return <Mail className="h-5 w-5" />;
    case 'smartphone':
      return <SmartphoneIcon className="h-5 w-5" />;
    case 'shopping-bag':
      return <ShoppingBag className="h-5 w-5" />;
    case 'palette':
      return <Palette className="h-5 w-5" />;
    case 'bar-chart':
      return <BarChart className="h-5 w-5" />;
    default:
      return <Code className="h-5 w-5" />;
  }
};

// Category icon component
const CategoryIcon = ({ iconType }: { iconType: string }) => {
  switch (iconType) {
    case 'code':
      return <Code className="h-5 w-5" />;
    case 'trending-up':
      return <TrendingUp className="h-5 w-5" />;
    case 'pen-tool':
      return <PenTool className="h-5 w-5" />;
    case 'settings':
      return <Settings className="h-5 w-5" />;
    default:
      return <Code className="h-5 w-5" />;
  }
};

const ServiceCard = ({ service, index }: { service: Service; index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ 
        y: -10, 
        boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
      }}
      className="group bg-card rounded-xl shadow-sm p-6 border border-border hover:border-primary/30 transition-all duration-300 relative overflow-hidden"
    >
      {/* Gradient overlay on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
      
      <div className="bg-primary/10 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-5 transition-transform group-hover:scale-110">
        <ServiceIcon iconType={service.icon} />
      </div>
      
      <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">{service.shortTitle || service.title}</h3>
      
      <div className="w-12 h-1 bg-primary/30 rounded-full mb-4 transition-all duration-300 group-hover:w-20 group-hover:bg-primary"></div>
      
      <p className="text-muted-foreground mb-6">
        {service.description}
      </p>
      
      <Link 
        href={`/services/${service.slug}`} 
        className="text-primary text-sm font-medium hover:underline inline-flex items-center"
      >
        Explore {service.shortTitle || service.title} services <ArrowRight className="ml-1 h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
      </Link>
    </motion.div>
  )
}

const ServicesSection = () => {
  // Get featured or all services
  const featuredServices = getFeaturedServices().slice(0, 3);
  
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
            Our Services
          </motion.div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Comprehensive Digital Solutions</h2>
          <p className="text-lg text-muted-foreground">
            We offer a complete range of digital services to help your business grow and succeed online.
          </p>
        </motion.div>

        {/* Service Categories */}
        <motion.div 
          className="flex flex-wrap justify-center gap-3 mt-10 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          {serviceCategories.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, x: -10 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
              transition={{ duration: 0.4, delay: 0.4 + (index * 0.05) }}
              whileHover={{ scale: 1.05 }}
            >
              <Link 
                href={`/services#${category.id}`}
                className="inline-flex items-center gap-2 px-4 py-2 bg-card border border-border rounded-full hover:bg-primary/5 hover:border-primary/20 transition-colors"
              >
                <span className="text-primary">
                  <CategoryIcon iconType={category.icon} />
                </span>
                <span className="text-sm font-medium">{category.title}</span>
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
          {featuredServices.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
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