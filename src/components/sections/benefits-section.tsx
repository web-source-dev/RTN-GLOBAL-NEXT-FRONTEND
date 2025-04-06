"use client"

import { ShieldCheck, Zap, Users, Code, Clock, HeartHandshake } from "lucide-react"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { cn } from "@/lib/utils"

type Benefit = {
  id: string
  title: string
  description: string
  icon: React.ReactNode
  color: string
}

const benefits: Benefit[] = [
  {
    id: "expertise",
    title: "Industry Expertise",
    description: "Our team brings years of experience across various industries, ensuring solutions tailored to your specific market needs.",
    icon: <ShieldCheck className="h-6 w-6" />,
    color: "bg-blue-100 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400"
  },
  {
    id: "performance",
    title: "Performance Focused",
    description: "We build solutions optimized for speed, security, and scalability to provide the best possible user experience.",
    icon: <Zap className="h-6 w-6" />,
    color: "bg-amber-100 dark:bg-amber-900/20 text-amber-600 dark:text-amber-400"
  },
  {
    id: "collaborative",
    title: "Collaborative Approach",
    description: "We work closely with you throughout the project, ensuring your vision and goals are met every step of the way.",
    icon: <Users className="h-6 w-6" />,
    color: "bg-green-100 dark:bg-green-900/20 text-green-600 dark:text-green-400"
  },
  {
    id: "cutting-edge",
    title: "Cutting-Edge Technology",
    description: "We leverage the latest technologies and best practices to deliver modern, future-proof solutions.",
    icon: <Code className="h-6 w-6" />,
    color: "bg-purple-100 dark:bg-purple-900/20 text-purple-600 dark:text-purple-400"
  },
  {
    id: "timely",
    title: "Timely Delivery",
    description: "We understand the importance of deadlines and deliver projects on time without compromising quality.",
    icon: <Clock className="h-6 w-6" />,
    color: "bg-rose-100 dark:bg-rose-900/20 text-rose-600 dark:text-rose-400"
  },
  {
    id: "support",
    title: "Ongoing Support",
    description: "Our commitment doesn&apos;t end at launch. We provide continuous support and maintenance to ensure long-term success.",
    icon: <HeartHandshake className="h-6 w-6" />,
    color: "bg-teal-100 dark:bg-teal-900/20 text-teal-600 dark:text-teal-400"
  }
]

export function BenefitsSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

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

  const sectionVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };
  
  return (
    <section className="py-16 md:py-24 overflow-hidden relative" id="benefits">
      {/* Background decor elements */}
      <motion.div 
        className="absolute -top-40 -right-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl opacity-60 -z-10"
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.4, 0.3] 
        }}
        transition={{ 
          duration: 8, 
          repeat: Infinity,
          ease: "easeInOut" 
        }}
      />
      
      <motion.div 
        className="absolute -bottom-20 -left-20 w-64 h-64 bg-indigo-500/5 rounded-full blur-3xl opacity-60 -z-10"
        animate={{ 
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.3, 0.2] 
        }}
        transition={{ 
          duration: 10, 
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
      />
      
      <div className="container mx-auto" ref={ref}>
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-16"
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={sectionVariants}
        >
          <motion.div 
            className="inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary mb-4"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.4 }}
          >
            Why Choose Us
          </motion.div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">The RTN Global Advantage</h2>
          <p className="text-lg text-muted-foreground">
            Discover the benefits of partnering with us for your digital transformation journey.
          </p>
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {benefits.map((benefit, index) => (
            <BenefitCard key={benefit.id} benefit={benefit} index={index} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}

function BenefitCard({ benefit, index }: { benefit: Benefit; index: number }) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
    rootMargin: "-50px 0px"
  })
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5, delay: index * 0.1 }
    }
  };
  
  return (
    <motion.div
      ref={ref}
      variants={itemVariants}
      className="bg-card border border-border rounded-xl p-6 hover:shadow-lg transition-all duration-300 h-full group relative overflow-hidden"
      whileHover={{ 
        y: -10,
        boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
      }}
    >
      {/* Gradient overlay on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
      
      <div className={cn("w-14 h-14 rounded-xl flex items-center justify-center mb-5 transition-transform group-hover:scale-110", benefit.color)}>
        {benefit.icon}
      </div>
      
      <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">{benefit.title}</h3>
      
      <div className="w-12 h-1 bg-primary/30 rounded-full mb-4 transition-all duration-300 group-hover:w-20 group-hover:bg-primary"></div>
      
      <p className="text-muted-foreground">{benefit.description}</p>
    </motion.div>
  )
} 