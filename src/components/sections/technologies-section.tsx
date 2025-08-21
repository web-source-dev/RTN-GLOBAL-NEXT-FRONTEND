"use client"

import { ArrowRight } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { 
  FaReact, FaNodeJs, FaVuejs, FaAngular, FaLaravel, 
  FaSwift, FaFire
} from "react-icons/fa"
import { 
  SiNextdotjs, SiTypescript, SiTailwindcss, SiExpress, 
  SiDjango, SiDotnet, SiSpring, SiReacttable, SiFlutter,
  SiKotlin, SiIonic, SiMongodb, SiMysql,
  SiPostgresql, SiRedis, SiGraphql
} from "react-icons/si"
import { motion, useInView } from "framer-motion"
import { useRef } from "react"

type Technology = {
  id: string
  icon: React.ReactNode
  color: string
}

// Combine all technologies into a single array
const technologies: Technology[] = [
  // Frontend
  { id: "react", icon: <FaReact className="w-8 h-8" />, color: "#61DAFB" },
  { id: "next", icon: <SiNextdotjs className="w-7 h-7" />, color: "#000000" },
  { id: "typescript", icon: <SiTypescript className="w-7 h-7" />, color: "#3178C6" },
  { id: "tailwind", icon: <SiTailwindcss className="w-8 h-8" />, color: "#06B6D4" },
  { id: "vue", icon: <FaVuejs className="w-8 h-8" />, color: "#4FC08D" },
  { id: "angular", icon: <FaAngular className="w-8 h-8" />, color: "#DD0031" },
  
  // Backend
  { id: "node", icon: <FaNodeJs className="w-8 h-8" />, color: "#339933" },
  { id: "express", icon: <SiExpress className="w-7 h-7" />, color: "#000000" },
  { id: "django", icon: <SiDjango className="w-7 h-7" />, color: "#092E20" },
  { id: "dotnet", icon: <SiDotnet className="w-7 h-7" />, color: "#512BD4" },
  { id: "laravel", icon: <FaLaravel className="w-8 h-8" />, color: "#FF2D20" },
  { id: "spring", icon: <SiSpring className="w-7 h-7" />, color: "#6DB33F" },
  
  // Mobile
  { id: "reactnative", icon: <SiReacttable className="w-7 h-7" />, color: "#61DAFB" },
  { id: "flutter", icon: <SiFlutter className="w-7 h-7" />, color: "#02569B" },
  { id: "swift", icon: <FaSwift className="w-8 h-8" />, color: "#F05138" },
  { id: "kotlin", icon: <SiKotlin className="w-7 h-7" />, color: "#7F52FF" },
  { id: "ionic", icon: <SiIonic className="w-7 h-7" />, color: "#3880FF" },
  
  // Database
  { id: "mongodb", icon: <SiMongodb className="w-7 h-7" />, color: "#47A248" },
  { id: "mysql", icon: <SiMysql className="w-7 h-7" />, color: "#4479A1" },
  { id: "postgresql", icon: <SiPostgresql className="w-7 h-7" />, color: "#336791" },
  { id: "firebase", icon: <FaFire className="w-8 h-8" />, color: "#FFCA28" },
  { id: "redis", icon: <SiRedis className="w-7 h-7" />, color: "#DC382D" },
  { id: "graphql", icon: <SiGraphql className="w-7 h-7" />, color: "#E10098" }
]

// Split technologies into two rows
const firstRowTechnologies = technologies.slice(0, Math.ceil(technologies.length / 2))
const secondRowTechnologies = technologies.slice(Math.ceil(technologies.length / 2))

export function TechnologiesSection() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 });

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { 
        type: "spring", 
        stiffness: 100, 
        damping: 10,
        mass: 0.5
      }
    }
  };

  const getTechTransition = (index: number) => {
    // Create slightly different animations for each tech icon
    return {
      y: Array(3).fill(null).map((_, i) => Math.sin(index / 2) * (i === 1 ? -6 : 6)),
      transition: {
        duration: 3 + Math.random() * 2,
        repeat: Infinity,
        repeatType: "reverse" as const,
        ease: "easeInOut",
        delay: index * 0.1
      }
    };
  };
  
  return (
    <section 
      className="py-16 md:py-24 relative overflow-hidden" 
      id="technologies" 
      ref={sectionRef}
    >
      {/* Background elements */}
      <div className="absolute inset-0 bg-black/70"></div>
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.05] pointer-events-none"></div>
      
      {/* Animated background blobs */}
      <motion.div 
        className="absolute top-20 -right-20 w-80 h-80 bg-primary/5 rounded-full blur-3xl -z-10"
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.3, 0.2],
        }}
        transition={{ 
          duration: 8, 
          repeat: Infinity,
          ease: "easeInOut" 
        }}
      />
      
      <motion.div 
        className="absolute -bottom-20 -left-20 w-96 h-96 bg-indigo-500/5 rounded-full blur-3xl -z-10"
        animate={{ 
          scale: [1, 1.3, 1],
          opacity: [0.1, 0.2, 0.1],
        }}
        transition={{ 
          duration: 10, 
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1 
        }}
      />
      
      <div className="container mx-auto relative z-10">
        <motion.div 
          className="text-center max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <motion.div 
            className="inline-block rounded-full bg-white/20 px-4 py-1.5 text-sm font-medium text-white mb-4"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.4 }}
          >
            Our Tech Stack
          </motion.div>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-4 text-white">Technologies We Use</h2>
          <p className="text-lg text-white/90">
            We leverage the latest and most reliable technologies to deliver high-quality, scalable solutions for our clients.
          </p>
        </motion.div>
        
        <div className="mt-16 flex flex-col items-center gap-8 w-screen" style={{ marginLeft: 'calc(-50vw + 50%)', marginRight: 'calc(-50vw + 50%)' }}>
          {/* First row of technology icons */}
          <motion.div 
            className="flex flex-wrap justify-center gap-4 md:gap-6 px-4 md:px-8 lg:px-16"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            {firstRowTechnologies.map((tech, index) => (
              <motion.div 
                key={tech.id} 
                className="flex items-center justify-center w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-card border-2 border-border 
                       hover:scale-125 transition-all duration-500 cursor-pointer 
                       hover:shadow-lg backdrop-blur-sm"
                style={{ borderColor: `${tech.color}40` }}
                variants={itemVariants}
                animate={isInView ? getTechTransition(index) : {}}
                whileHover={{ 
                  scale: 1.2,
                  boxShadow: `0 0 20px ${tech.color}50`,
                  borderColor: `${tech.color}80`,
                  rotate: [0, 5, -5, 0], 
                  transition: { duration: 0.5 }
                }}
              >
                <div className="text-foreground" style={{ color: tech.color }}>
                  {tech.icon}
                  </div>
              </motion.div>
            ))}
          </motion.div>
          
          {/* Second row of technology icons */}
          <motion.div 
            className="flex flex-wrap justify-center gap-4 md:gap-6"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            {secondRowTechnologies.map((tech, index) => (
              <motion.div 
                key={tech.id} 
                className="flex items-center justify-center w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-card border-2 border-border 
                       hover:scale-125 transition-all duration-500 cursor-pointer 
                       hover:shadow-lg backdrop-blur-sm"
                style={{ borderColor: `${tech.color}40` }}
                variants={itemVariants}
                animate={isInView ? getTechTransition(index + firstRowTechnologies.length) : {}}
                whileHover={{ 
                  scale: 1.2,
                  boxShadow: `0 0 20px ${tech.color}50`,
                  borderColor: `${tech.color}80`,
                  rotate: [0, 5, -5, 0], 
                  transition: { duration: 0.5 }
                }}
              >
                <div className="text-foreground" style={{ color: tech.color }}>
                  {tech.icon}
                  </div>
              </motion.div>
              ))}
          </motion.div>
        </div>
        
        <motion.div 
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <p className="text-white/90 max-w-5xl mx-auto mb-8">
            Want to discuss how our technical expertise can benefit your project? Get in touch with our development team.
          </p>
          <Link href="/contact">
            <motion.div whileHover={{ scale: 1.05 }}>
              <Button className="gap-2 rounded-full hover:shadow-md transition-transform">
              Contact Our Tech Team <ArrowRight className="h-4 w-4" />
            </Button>
            </motion.div>
          </Link>
        </motion.div>
      </div>
    </section>
  )
} 