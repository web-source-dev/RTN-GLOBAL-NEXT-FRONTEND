import { Layout } from "@/components/layout/layout"
import { HeroSection } from "@/components/sections/hero-section"
import { CTASection } from "@/components/sections/cta-section"
import { StatsSection } from "@/components/sections/stats-section"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { LinkedinIcon, TwitterIcon, MailIcon, ArrowRight } from "lucide-react"
import { Metadata } from "next"
import { OptimizedImage } from "@/components/ui/optimized-image"
import { H2, H3, P, Lead } from "@/components/ui/typography"

export const metadata: Metadata = {
  title: "Our Team | RTN Global",
  description: "Meet the talented professionals behind RTN Global's innovative branding and digital solutions.",
}

interface TeamMember {
  name: string
  role: string
  bio: string
  image: string
  expertise: string[]
  social: {
    linkedin?: string
    twitter?: string
    email?: string
  }
}

export default function TeamPage() {
  // Team members data
  const teamMembers: TeamMember[] = [
    {
      name: "John Smith",
      role: "Founder & Creative Director",
      bio: "With over 15 years of experience in branding and design, John leads our creative team with a passion for transforming businesses through strategic visual identity.",
      image: "/images/team/team-1.jpg",
      expertise: ["Brand Strategy", "Visual Identity", "Creative Direction"],
      social: {
        linkedin: "https://linkedin.com/in/johnsmith",
        twitter: "https://twitter.com/johnsmith",
        email: "john@rtnglobal.site"
      }
    },
    {
      name: "Sarah Johnson",
      role: "Brand Strategist",
      bio: "Sarah combines analytical thinking with creative insight to develop brand strategies that resonate with target audiences and drive business results.",
      image: "/images/team/team-2.jpg",
      expertise: ["Market Research", "Brand Positioning", "User Experience"],
      social: {
        linkedin: "https://linkedin.com/in/sarahjohnson",
        twitter: "https://twitter.com/sarahjohnson",
        email: "sarah@rtnglobal.site"
      }
    },
    {
      name: "Michael Chen",
      role: "Lead Designer",
      bio: "Michael's award-winning design work spans multiple industries and platforms. He specializes in creating cohesive visual systems that express brand values.",
      image: "/images/team/team-3.jpg",
      expertise: ["Visual Design", "Typography", "Brand Guidelines"],
      social: {
        linkedin: "https://linkedin.com/in/michaelchen",
        email: "michael@rtnglobal.site"
      }
    },
    {
      name: "Emily Rodriguez",
      role: "Digital Marketing Manager",
      bio: "Emily crafts effective digital strategies that amplify brand presence and engage target audiences across multiple platforms.",
      image: "/images/team/sarah-johnson.jpg",
      expertise: ["Content Strategy", "Social Media", "SEO"],
      social: {
        linkedin: "https://linkedin.com/in/emilyrodriguez",
        twitter: "https://twitter.com/emilyrodriguez",
        email: "emily@rtnglobal.site"
      }
    },
    {
      name: "David Wilson",
      role: "Web Development Lead",
      bio: "David brings brands to life online with cutting-edge development expertise, ensuring seamless user experiences across all digital touchpoints.",
      image: "/images/team/team-5.jpg",
      expertise: ["Front-end Development", "UI/UX", "Web Animation"],
      social: {
        linkedin: "https://linkedin.com/in/davidwilson",
        email: "david@rtnglobal.site"
      }
    },
    {
      name: "Olivia Taylor",
      role: "Content Strategist",
      bio: "Olivia develops engaging content that tells brand stories and connects with audiences, with a focus on authentic and compelling messaging.",
      image: "/images/team/team-6.jpg",
      expertise: ["Copywriting", "Brand Voice", "Content Planning"],
      social: {
        linkedin: "https://linkedin.com/in/oliviataylor",
        twitter: "https://twitter.com/oliviataylor",
        email: "olivia@rtnglobal.site"
      }
    },
  ];

  // Stats about the team
  const teamStats = [
    {
      value: 15,
      suffix: "+",
      label: "Team members"
    },
    {
      value: 8,
      suffix: "+",
      label: "Years experience"
    },
    {
      value: 120,
      suffix: "+",
      label: "Projects completed"
    },
    {
      value: 35,
      suffix: "+",
      label: "Industry awards"
    }
  ];

  return (
    <Layout>
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Our Team | RTN Global",
            "description": "Meet the talented team behind RTN Global, dedicated to delivering exceptional digital solutions.",
            "url": "https://rtnglobal.site/team",
            "publisher": {
              "@type": "Organization",
              "name": "RTN Global",
              "url": "https://rtnglobal.site/",
              "logo": "https://rtnglobal.site/logo.png",
              "founder": {
                "@type": "Person",
                "name": "Muhammad Tayyab"
              },
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "1209 MOUNTAIN ROAD PLNE, STE R",
                "addressLocality": "ALBUQUERQUE",
                "addressRegion": "NM",
                "postalCode": "87110",
                "addressCountry": "US"
              },
              "contactPoint": {
                "@type": "ContactPoint",
                "contactType": "customer service",
                "telephone": "+1 (505) 528 0265",
                "email": "info@rtnglobal.site"
              },
              "employee": teamMembers.map(member => ({
                "@type": "Person",
                "name": member.name,
                "jobTitle": member.role,
                "description": member.bio,
                "image": member.image,
                "knowsAbout": member.expertise,
                "sameAs": [
                  member.social.linkedin,
                  member.social.twitter
                ].filter(Boolean)
              }))
            },
            "mainEntity": {
              "@type": "Organization",
              "name": "RTN Global Team",
              "description": "Our diverse team of experts is passionate about creating digital solutions that drive success for our clients."
            }
          })
        }}
      />
      
      {/* Hero Section */}
      <HeroSection
        title="Meet Our Team"
        description="Our diverse team of experts brings together creativity, strategy, and technical expertise to deliver exceptional branding and digital solutions."
        backgroundClassName="bg-muted/30"
      />
      
      {/* Team Stats */}
      <StatsSection
        stats={teamStats}
        columns={4}
        backgroundClassName="bg-primary/5"
      />

      {/* Team Intro */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <H2 className="text-3xl font-bold mb-6">Passionate Experts in Brand Building</H2>
            <P className="text-lg text-muted-foreground">
              At RTN Global, our team combines diverse talents and perspectives to create meaningful brand experiences. 
              Each team member brings unique expertise and a shared commitment to excellence, 
              working collaboratively to help our clients stand out in today&apos;s competitive landscape.
            </P>
          </div>
          
          {/* Team Grid */}
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
            {teamMembers.map((member, index) => (
              <div 
                key={index} 
                className="bg-card border border-border rounded-lg overflow-hidden transition-all duration-300 hover:shadow-md"
              >
                {/* Team Member Image with Fallback */}
                <div className="aspect-square bg-muted relative overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center bg-primary/10 text-5xl font-bold text-background/20">
                    {member.name.split(' ').map(word => word[0]).join('')}
                  </div>
                  <OptimizedImage
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover w-full h-full"
                  />
                </div>
                
                <div className="p-6">
                  <H3 className="text-xl font-bold">{member.name}</H3>
                  <P className="text-primary font-medium mt-1">{member.role}</P>
                  
                  <P className="mt-3 text-muted-foreground text-sm">{member.bio}</P>
                  
                  {/* Expertise Tags */}
                  <div className="mt-4 mb-5 flex flex-wrap gap-2">
                    {member.expertise.map((skill, i) => (
                      <span 
                        key={i} 
                        className="inline-block px-2.5 py-0.5 bg-primary/10 text-primary text-xs font-medium rounded-full"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                  
                  {/* Social Links */}
                  <div className="flex space-x-3 mt-auto pt-3 border-t border-border">
                    {member.social.linkedin && (
                      <Link 
                        href={member.social.linkedin} 
                        className="text-muted-foreground hover:text-primary transition-colors"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <LinkedinIcon className="h-5 w-5" />
                      </Link>
                    )}
                    {member.social.twitter && (
                      <Link 
                        href={member.social.twitter} 
                        className="text-muted-foreground hover:text-primary transition-colors"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <TwitterIcon className="h-5 w-5" />
                      </Link>
                    )}
                    {member.social.email && (
                      <Link 
                        href={`mailto:${member.social.email}`} 
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        <MailIcon className="h-5 w-5" />
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Our Team Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <H2 className="text-3xl font-bold mb-4">Join Our Creative Team</H2>
                <P className="text-muted-foreground mb-6">
                  We&apos;re always looking for talented individuals who are passionate about branding, 
                  design, and digital innovation. Join us in creating impactful brand experiences 
                  that help businesses grow.
                </P>
                <div className="flex flex-wrap gap-4">
                  <Button asChild>
                    <Link href="/careers">
                      View Open Positions
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  <Button variant="outline" asChild>
                    <Link href="/contact">
                      Contact Us
                    </Link>
                  </Button>
                </div>
              </div>
              <div className="relative">
                <div className="aspect-video w-full bg-primary/30 rounded-lg overflow-hidden relative">
                  <div className="absolute inset-0 flex items-center justify-center bg-primary/20 text-4xl font-bold text-background/20">
                    Team Culture
                  </div>
                </div>
                <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-primary/10 rounded-lg"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        title="Ready to Work With Our Team?"
        description="Let's discuss how our experts can help bring your brand vision to life with strategic, creative solutions."
        primaryButton={{
          text: "Start a Project",
          href: "/contact"
        }}
        secondaryButton={{
          text: "Our Process",
          href: "/process"
        }}
      />
    </Layout>
  );
} 