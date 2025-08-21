"use client"

import { OptimizedImage } from "@/components/ui/optimized-image"
import Link from "next/link"
import { Linkedin, Twitter, Mail, ChevronRight } from "lucide-react"

type TeamMember = {
  id: string
  name: string
  role: string
  image: string
  bio: string
  linkedin?: string
  twitter?: string
  email: string
}

const teamMembers: TeamMember[] = [
  {
    id: "1",
    name: "Robert Thompson",
    role: "CEO & Founder",
    image: "/images/team/team-1.jpg",
    bio: "20+ years of experience in digital transformation and web development. Robert founded RTN Global with a vision to help businesses thrive in the digital landscape.",
    linkedin: "https://linkedin.com/in/robert-thompson",
    twitter: "https://twitter.com/robertt",
    email: "robert@rtnglobal.site"
  },
  {
    id: "2",
    name: "Natalie Rivera",
    role: "Chief Marketing Officer",
    image: "/images/team/team-2.jpg",
    bio: "Former marketing executive at Fortune 500 companies. Natalie brings strategic insight and creative excellence to every project.",
    linkedin: "https://linkedin.com/in/natalie-rivera",
    twitter: "https://twitter.com/natalier",
    email: "natalie@rtnglobal.site"
  },
  {
    id: "3",
    name: "David Chen",
    role: "CTO",
    image: "/images/team/team-3.jpg",
    bio: "Full-stack developer with expertise in MERN, React Native, and cloud architecture. David leads our technical strategy and implementation.",
    linkedin: "https://linkedin.com/in/david-chen",
    email: "david@rtnglobal.site"
  },
  {
    id: "4",
    name: "Maria Garcia",
    role: "Design Director",
    image: "/images/team/team-4.jpg",
    bio: "Award-winning UX/UI designer with a passion for creating intuitive and engaging digital experiences.",
    linkedin: "https://linkedin.com/in/maria-garcia",
    twitter: "https://twitter.com/mariag",
    email: "maria@rtnglobal.site"
  },
  {
    id: "5",
    name: "James Wilson",
    role: "SEO Specialist",
    image: "/images/team/team-5.jpg",
    bio: "James has helped over 100 businesses achieve top rankings through strategic SEO implementations and content optimization.",
    linkedin: "https://linkedin.com/in/james-wilson",
    email: "james@rtnglobal.site"
  },
  {
    id: "6",
    name: "Sophia Lee",
    role: "Project Manager",
    image: "/images/team/team-6.jpg",
    bio: "Certified PMP with a track record of delivering complex digital projects on time and within budget.",
    linkedin: "https://linkedin.com/in/sophia-lee",
    twitter: "https://twitter.com/sophial",
    email: "sophia@rtnglobal.site"
  }
]

export function TeamSection() {
  return (
    <section className="py-20 md:py-28 bg-muted/30" id="team">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary mb-4">
            Our Team
          </div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Meet Our Experts</h2>
          <p className="text-lg text-muted-foreground">
            We&apos;re a team of dedicated professionals passionate about creating exceptional digital experiences.
          </p>
        </div>
        
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member) => (
            <div key={member.id} className="bg-card rounded-2xl overflow-hidden border border-border shadow-md group hover:shadow-lg transition-all duration-300">
              <div className="relative h-72 overflow-hidden">
                <OptimizedImage
                  src={member.image}
                  fill
                  alt={member.name}
                  className="object-cover object-center transition-transform group-hover:scale-105 duration-500 w-full h-full"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent pt-20 pb-4 px-6">
                  <h3 className="text-xl font-semibold text-white">{member.name}</h3>
                  <p className="text-white/80 text-sm">{member.role}</p>
                </div>
              </div>
              <div className="p-6">
                <p className="text-muted-foreground text-sm line-clamp-3 mb-4">{member.bio}</p>
                <div className="flex justify-between items-center">
                  <div className="flex gap-2">
                    {member.linkedin && (
                      <a 
                        href={member.linkedin} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="p-2 bg-muted rounded-full hover:bg-primary/10 transition-colors"
                      >
                        <Linkedin className="h-4 w-4 text-primary" />
                      </a>
                    )}
                    {member.twitter && (
                      <a 
                        href={member.twitter} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="p-2 bg-muted rounded-full hover:bg-primary/10 transition-colors"
                      >
                        <Twitter className="h-4 w-4 text-primary" />
                      </a>
                    )}
                    <a 
                      href={`mailto:${member.email}`} 
                      className="p-2 bg-muted rounded-full hover:bg-primary/10 transition-colors"
                    >
                      <Mail className="h-4 w-4 text-primary" />
                    </a>
                  </div>
                  <Link href={`/team/${member.id}`} className="flex items-center text-sm text-primary hover:underline">
                    Profile <ChevronRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 bg-card border border-border rounded-2xl p-10 text-center">
          <h3 className="text-2xl font-bold mb-4">Join Our Team</h3>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-6">
            We&apos;re always looking for talented individuals to join our growing team. Check out our current openings.
          </p>
          <Link 
            href="/careers" 
            className="inline-flex items-center px-6 py-3 bg-primary text-primary-foreground rounded-full hover:bg-primary/90 transition-colors"
          >
            View Open Positions <ChevronRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  )
} 