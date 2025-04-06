"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { 
  FacebookIcon, 
  TwitterIcon, 
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
              href="/" 
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
                <span className="text-sm">123 Business Street, City, Country</span>
              </div>
              <div className="flex items-center">
                <PhoneIcon className="h-4 w-4 mr-2 text-primary" />
                <span className="text-sm">+1 (123) 456-7890</span>
              </div>
              <div className="flex items-center">
                <MailIcon className="h-4 w-4 mr-2 text-primary" />
                <span className="text-sm">info@rtnglobal.site</span>
              </div>
            </div>
            
            <div className="mt-6 flex space-x-4">
              <Link href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <FacebookIcon className="h-5 w-5 text-muted-foreground hover:text-primary transition-colors" />
              </Link>
              <Link href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                <TwitterIcon className="h-5 w-5 text-muted-foreground hover:text-primary transition-colors" />
              </Link>
              <Link href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <InstagramIcon className="h-5 w-5 text-muted-foreground hover:text-primary transition-colors" />
              </Link>
              <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <LinkedinIcon className="h-5 w-5 text-muted-foreground hover:text-primary transition-colors" />
              </Link>
              <Link href="https://youtube.com" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
                <YoutubeIcon className="h-5 w-5 text-muted-foreground hover:text-primary transition-colors" />
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