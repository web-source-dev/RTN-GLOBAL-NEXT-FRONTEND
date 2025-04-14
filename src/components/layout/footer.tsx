"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { 
  FacebookIcon,
  InstagramIcon, 
  LinkedinIcon, 
  YoutubeIcon,
  MapPinIcon, 
  PhoneIcon, 
  MailIcon
} from "lucide-react"

const companyLinks = [
  { name: "About Us", href: "/about" },
  { name: "Our Team", href: "/team" },
  { name: "Careers", href: "/careers" },
  { name: "News", href: "/news" },
  { name: "Contact", href: "/contact" },
]

const serviceLinks = [
  { name: "Digital Strategy", href: "/services/digital-strategy" },
  { name: "SEO Optimization", href: "/services/seo-optimization" },
  { name: "Content Marketing", href: "/services/content-marketing" },
  { name: "Social Media", href: "/services/social-media" },
  { name: "PPC Management", href: "/services/ppc-management" },
  { name: "Email Marketing", href: "/services/email-marketing" },
]

const resourceLinks = [
  { name: "Marketing Guide", href: "/marketing-guide" },
  { name: "Digital Tools", href: "/digital-tools" },
  { name: "ROI Calculator", href: "/roi-calculator" },
  { name: "FAQ", href: "/faq" },
  { name: "Support", href: "/support" },
]

const legalLinks = [
  { name: "Terms of Service", href: "/terms-of-service" },
  { name: "Privacy Policy", href: "/privacy-policy" },
  { name: "Disclaimer", href: "/disclaimer" },
  { name: "Sitemap", href: "/sitemap" },
]

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-muted text-muted-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <Link 
              href="https://rtnglobal.co/"
              className="text-primary font-bold text-xl flex items-center space-x-2"
            >
              <span>RTN Global</span>
            </Link>
            
            <p className="mt-4 text-sm">
              RTN Global offers custom web solutions including Wix development, MERN stack applications, 
              and React Native mobile apps. Our services span web development and digital marketing.
            </p>
            
            <div className="mt-6 flex flex-col space-y-2">
              <div className="flex items-center">
                <MapPinIcon className="h-4 w-4 mr-2 text-primary" />
                <span className="text-sm">1209 MOUNTAIN ROAD PLNE, STE R, ALBUQUERQUE, NM, 87110, US</span>
              </div>
              <div className="flex items-center">
                <PhoneIcon className="h-4 w-4 mr-2 text-primary" />
                <span className="text-sm">‪+1 505 528 6780‬‬</span>
              </div>
              <div className="flex items-center">
                <MailIcon className="h-4 w-4 mr-2 text-primary" />
                <span className="text-sm">info@rtnglobal.site</span>
              </div>
            </div>
            
            <div className="mt-6 flex space-x-4">
              <Link href="https://web.facebook.com/people/RTN-Global/61573828870610/" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <FacebookIcon className="h-5 w-5 text-muted-foreground hover:text-primary transition-colors" />
              </Link>
              <Link href="https://www.instagram.com/rtnglobalofficial/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <InstagramIcon className="h-5 w-5 text-muted-foreground hover:text-primary transition-colors" />
              </Link>
              <Link href="https://www.linkedin.com/in/rtnglobalofficial/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <LinkedinIcon className="h-5 w-5 text-muted-foreground hover:text-primary transition-colors" />
              </Link>
              <Link href="https://www.youtube.com/@RTNGlobal" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
                <YoutubeIcon className="h-5 w-5 text-muted-foreground hover:text-primary transition-colors" />
              </Link>
              <Link href="https://www.tiktok.com/@rtnglobalofficial" target="_blank" rel="noopener noreferrer" aria-label="TikTok">
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  width="20" 
                  height="20" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  className="h-5 w-5 text-muted-foreground hover:text-primary transition-colors"
                >
                  <path d="M9 12a4 4 0 1 0 0 8 4 4 0 0 0 0-8z"/>
                  <path d="M4 20V10a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2z"/>
                  <path d="M12 12v-2a2 2 0 0 1 4 0v2"/>
                  <path d="M18 10V7a2 2 0 0 0-2-2h-3"/>
                </svg>
              </Link>
              <Link href="https://www.threads.net/@rtnglobalofficial" target="_blank" rel="noopener noreferrer" aria-label="Threads">
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  width="20" 
                  height="20" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  className="h-5 w-5 text-muted-foreground hover:text-primary transition-colors"
                >
                  <path d="M19 7.5c-1-1-2.5-1.5-4-1.5-3 0-5 1.5-6 3-1-1.5-3-3-6-3-1.5 0-3 .5-4 1.5-2 2-2 5.5 0 7.5l10 10 10-10c2-2 2-5.5 0-7.5z"/>
                </svg>
              </Link>
            </div>
          </div>
          
          {/* Navigation Links */}
          <div>
            <h3 className="font-semibold text-foreground">Company</h3>
            <ul className="mt-4 space-y-2">
              {companyLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href}
                    className="text-sm hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-foreground">Services</h3>
            <ul className="mt-4 space-y-2">
              {serviceLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href}
                    className="text-sm hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-foreground">Resources</h3>
            <ul className="mt-4 space-y-2">
              {resourceLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href}
                    className="text-sm hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
            
            <h3 className="font-semibold text-foreground mt-6">Legal</h3>
            <ul className="mt-4 space-y-2">
              {legalLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href}
                    className="text-sm hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        {/* Newsletter */}
        <div className="mt-12 pt-8 border-t border-border">
          <div className="max-w-md">
            <h3 className="font-semibold text-foreground">Subscribe to our newsletter</h3>
            <p className="mt-2 text-sm">
              Get the latest news and updates from RTN Global delivered to your inbox.
            </p>
            <div className="mt-4 flex gap-2">
              <Input
                type="email"
                placeholder="Enter your email"
                className="max-w-xs"
              />
              <Button>Subscribe</Button>
            </div>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-border text-sm text-center">
          <p>&copy; {currentYear} RTN Global. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
} 