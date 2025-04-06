"use client"

import { Calendar } from "lucide-react"
import { 
  FaTrophy, FaAward, FaMedal, FaChartLine,
  FaSearchDollar 
} from "react-icons/fa"
import {
  SiWebflow, SiFlutter, SiShopify, SiZendesk
} from "react-icons/si"

type Award = {
  id: string
  title: string
  organization: string
  description: string
  icon: React.ReactNode
  iconColor: string
  year: string
  category: string
}

const awards: Award[] = [
  {
    id: "1",
    title: "Best Web Design Agency",
    organization: "Digital Excellence Awards",
    description: "Recognized for exceptional web design and user experience across client projects.",
    icon: <SiWebflow className="w-6 h-6" />,
    iconColor: "#4353FF",
    year: "2023",
    category: "Design"
  },
  {
    id: "2",
    title: "Top Mobile App Developer",
    organization: "Mobile Innovation Summit",
    description: "Awarded for innovative mobile app solutions that deliver outstanding user experiences.",
    icon: <SiFlutter className="w-6 h-6" />,
    iconColor: "#02569B",
    year: "2022",
    category: "Mobile"
  },
  {
    id: "3",
    title: "SEO Agency of the Year",
    organization: "Search Marketing Awards",
    description: "Honored for delivering exceptional SEO results and organic growth for clients.",
    icon: <FaSearchDollar className="w-6 h-6" />,
    iconColor: "#EA4335",
    year: "2023",
    category: "Marketing"
  },
  {
    id: "4",
    title: "Best E-Commerce Solution",
    organization: "Retail Technology Awards",
    description: "Recognized for creating high-performing e-commerce platforms that drive sales and conversions.",
    icon: <SiShopify className="w-6 h-6" />,
    iconColor: "#7AB55C",
    year: "2022",
    category: "E-Commerce"
  },
  {
    id: "5",
    title: "Rising Tech Company",
    organization: "Business Growth Awards",
    description: "Recognized as one of the fastest-growing technology companies in the region.",
    icon: <FaChartLine className="w-6 h-6" />,
    iconColor: "#FF6B6B",
    year: "2021",
    category: "Business"
  },
  {
    id: "6",
    title: "Excellence in Customer Service",
    organization: "Client Satisfaction Awards",
    description: "Awarded for exceptional client relationships and outstanding customer support.",
    icon: <SiZendesk className="w-6 h-6" />,
    iconColor: "#03363D",
    year: "2023",
    category: "Service"
  }
]

export function AwardsSection() {
  return (
    <section className="py-10 md:py-10 bg-muted/30" id="awards">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary mb-4">
            Awards & Recognition
          </div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            <span className="inline-flex items-center gap-2">
              Our Achievements <FaTrophy className="h-8 w-8 text-[#FFD700]" />
            </span>
          </h2>
          <p className="text-lg text-muted-foreground">
            We&apos;re proud to be recognized for our commitment to excellence, innovation, and client success.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {awards.map((award, index) => (
            <div 
              key={award.id} 
              className="group bg-card border border-border rounded-2xl overflow-hidden hover:shadow-lg transition-all duration-300 hover:scale-[1.02]"
            >
              <div className="p-6 flex items-start gap-4">
                <div 
                  className="flex-shrink-0 w-14 h-14 rounded-2xl flex items-center justify-center"
                  style={{ 
                    backgroundColor: `${award.iconColor}15`, 
                    color: award.iconColor,
                    boxShadow: `0 4px 14px ${award.iconColor}15`
                  }}
                >
                  {award.icon}
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xs font-medium bg-primary/10 text-primary px-2 py-0.5 rounded-full">
                      {award.category}
                    </span>
                    <div className="flex items-center text-muted-foreground text-xs">
                      <Calendar className="h-3 w-3 mr-1" />
                      {award.year}
                    </div>
                  </div>
                  <div className="flex items-center mb-1">
                    <h3 className="text-xl font-bold group-hover:text-primary transition-colors">
                      {award.title}
                    </h3>
                    {index < 3 && (
                      <FaMedal className="ml-1 h-4 w-4 text-[#FFD700]" />
                    )}
                  </div>
                  <p className="text-sm text-muted-foreground mb-2">
                    <strong>{award.organization}</strong>
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {award.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="flex justify-center mt-12">
          <div className="flex items-center gap-2 px-5 py-3 bg-primary/5 rounded-full text-sm border border-primary/10 shadow-sm">
            <FaAward className="h-4 w-4 text-primary" />
            <span className="font-medium">Trusted by 500+ clients worldwide</span>
          </div>
        </div>
      </div>
    </section>
  )
} 