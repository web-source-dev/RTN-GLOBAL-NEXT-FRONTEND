"use client"

import { OptimizedImage } from "@/components/ui/optimized-image"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { motion } from "framer-motion"
import {useState } from "react"

type Client = {
  id: string
  name: string
  logo: string
  grayscale: string
  industry: string
}

const clients: Client[] = [
  {
    id: "1",
    name: "TechCorp",
    logo: "/images/clients/client1.png",
    grayscale: "/images/clients/client1.png",
    industry: "Technology"
  },
  {
    id: "2",
    name: "GreenEnergy",
    logo: "/images/clients/client2.png",
    grayscale: "/images/clients/client2.png",
    industry: "Renewable Energy"
  },
  {
    id: "3",
    name: "MediHealth",
    logo: "/images/clients/client3.png",
    grayscale: "/images/clients/client3.png",
    industry: "Healthcare"
  },
  {
    id: "4",
    name: "FinanceHub",
    logo: "/images/clients/client4.png",
    grayscale: "/images/clients/client4.png",
    industry: "Finance"
  },
  {
    id: "5",
    name: "EduLearn",
    logo: "/images/clients/client5.jpg",
    grayscale: "/images/clients/client5.jpg",
    industry: "Education"
  },
  {
    id: "6",
    name: "RetailPlus",
    logo: "/images/clients/client6.jpg",
    grayscale: "/images/clients/client6.jpg",
    industry: "Retail"
  },
  {
    id: "7",
    name: "TravelWise",
    logo: "/images/clients/client7.jpg",
    grayscale: "/images/clients/client7.jpg",
    industry: "Travel"
  },
  {
    id: "8",
    name: "FoodDirect",
    logo: "/images/clients/client8.jpg",
    grayscale: "/images/clients/client8.jpg",
    industry: "Food & Beverage"
  }
]

// Duplicate clients to ensure continuous scrolling
const duplicatedClients = [...clients, ...clients]

export function ClientsSection() {
  const [isHovered, setIsHovered] = useState(false)
  
  // Split clients into two groups for top and bottom rows
  const topRowClients = [...duplicatedClients, ...duplicatedClients]
  const bottomRowClients = [...duplicatedClients.reverse(), ...duplicatedClients.reverse()]
  
  return (
    <section className="py-14 md:py-20" id="clients">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary mb-4">
            Our Clients
          </div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Trusted by Leading Brands</h2>
          <p className="text-lg text-muted-foreground">
            We&apos;ve had the privilege of working with a diverse range of clients from startups to Fortune 500 companies.
          </p>
        </div>
        
        <div 
          className="relative overflow-hidden py-10"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Top row - scrolling left to right */}
          <div className="flex gap-8 mb-8">
            <motion.div 
              className="flex gap-8 items-center shrink-0"
              animate={{
                x: [0, -100 * clients.length],
              }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 50,
                  ease: "linear",
                },
              }}
              style={{
                animationPlayState: isHovered ? "paused" : "running"
              }}
            >
              {topRowClients.map((client, index) => (
                <div 
                  key={`${client.id}-${index}`} 
                  className="group w-24 h-24 md:w-28 md:h-28 relative rounded-full overflow-hidden border-2 border-border shadow-sm bg-card flex-shrink-0 hover:border-primary/50 transition-all duration-300"
                >
                  <div className="absolute inset-0 opacity-100 group-hover:opacity-0 transition-opacity p-2">
                    <OptimizedImage
                      src={client.grayscale}
                      alt={client.name}
                      fill
                      className="h-full object-contain rounded-full p-2"
                    />
                  </div>
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity p-2">
                    <OptimizedImage
                      src={client.logo}
                      alt={client.name}
                      fill
                      className="h-full object-contain rounded-full p-2"
                    />
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Bottom row - scrolling right to left */}
          <div className="flex gap-8">
            <motion.div 
              className="flex gap-8 items-center shrink-0"
              animate={{
                x: [-100 * clients.length, 0],
              }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 50,
                  ease: "linear",
                },
              }}
              style={{
                animationPlayState: isHovered ? "paused" : "running"
              }}
            >
              {bottomRowClients.map((client, index) => (
                <div 
                  key={`${client.id}-${index}`} 
                  className="group w-24 h-24 md:w-28 md:h-28 relative rounded-full overflow-hidden border-2 border-border shadow-sm bg-card flex-shrink-0 hover:border-primary/50 transition-all duration-300"
                >
                  <div className="absolute inset-0 opacity-100 group-hover:opacity-0 transition-opacity p-2">
                    <OptimizedImage
                      src={client.grayscale}
                      alt={client.name}
                      fill
                      className="h-full object-contain rounded-full p-2"
                    />
                  </div>
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity p-2">
                    <OptimizedImage
                      src={client.logo}
                      alt={client.name}
                      fill
                      className="h-full object-contain rounded-full p-2"
                    />
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
          
        </div>
        
        <div className="mt-16 bg-primary rounded-xl p-6 md:p-8 border border-border shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-3 text-white">Ready to Join Our Success Stories?</h3>
              <p className="text-muted-foreground text-white">
                Discover how RTN Global can help your business achieve its digital goals. Let&apos;s create your success story together.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-end">
              <Link href="/case-studies">
                <Button variant="outline" className="w-full sm:w-auto rounded-lg text-white hover:bg-white/30">
                  View Case Studies
                </Button>
              </Link>
              <Link href={`${process.env.NEXT_PUBLIC_ORDERS_URL}`}>
                <Button className="w-full sm:w-auto gap-2 rounded-lg bg-white text-primary hover:bg-white/80">
                  Get Started <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 