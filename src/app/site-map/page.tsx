"use client";

import Link from "next/link";
import { Layout } from "@/components/layout/layout";
import { 
  ChevronRight, 
  HomeIcon, 
  Settings, 
  Users, 
  BookOpen, 
  Briefcase, 
  HelpCircle, 
  Scale, 
  Shield, 
  MessageSquare,
  FileText,
  Layers
} from "lucide-react";

export default function SiteMapPage() {
  return (
    <Layout>
      {/* Hero Section */}
      <div className="bg-gradient-to-b from-background to-muted/20 py-12 border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-1.5 text-sm mb-6">
            <Link href="/" className="text-muted-foreground hover:text-foreground transition-colors">
              Home
            </Link>
            <ChevronRight className="h-4 w-4 text-muted-foreground" />
            <span className="text-foreground font-medium">Site Map</span>
          </div>
          
          <div className="max-w-4xl">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Site Map</h1>
            <p className="text-xl text-muted-foreground">
              A complete overview of all pages on the RTN Global website
            </p>
          </div>
        </div>
      </div>
      
      {/* Content Section */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-5xl mx-auto">
          <div className="prose dark:prose-invert max-w-none mb-8">
            <p>
              Use this site map to find and navigate to any page on our website. Each section below contains 
              links to main pages and their related sub-pages for easy access.
            </p>
          </div>
          
          <div className="grid gap-12 md:grid-cols-2">
            {/* Main Navigation */}
            <div>
              <SitemapSection 
                title="Main Navigation" 
                icon={<HomeIcon className="h-5 w-5 text-primary" />}
                links={[
                  { href: "/", label: "Home" },
                  { href: "/about", label: "About Us" },
                  { href: "/services", label: "Services" },
                  { href: "/portfolio", label: "Portfolio" },
                  { href: "/case-studies", label: "Case Studies" },
                  { href: "/process", label: "Our Process" },
                  { href: "/pricing", label: "Pricing" },
                  { href: "/blog", label: "Blog" },
                  { href: "/contact", label: "Contact Us" }
                ]}
              />
              
              <SitemapSection 
                title="Services" 
                icon={<Settings className="h-5 w-5 text-primary" />}
                links={[
                  { href: "/services/web-development", label: "Web Development" },
                  { href: "/services/mobile-apps", label: "Mobile App Development" },
                  { href: "/services/ux-design", label: "UI/UX Design" },
                  { href: "/services/digital-strategy", label: "Digital Strategy" },
                  { href: "/services/seo-optimization", label: "SEO Optimization" },
                  { href: "/services/content-marketing", label: "Content Marketing" },
                  { href: "/services/brand-identity", label: "Brand Identity" },
                  { href: "/services/e-commerce", label: "E-commerce Development" },
                  { href: "/services/social-media", label: "Social Media Marketing" },
                  { href: "/services/ppc-management", label: "PPC & Digital Advertising" },
                  { href: "/services/email-marketing", label: "Email Marketing" },
                  { href: "/services/conversion-optimization", label: "Conversion Optimization" }
                ]}
              />
              
              <SitemapSection 
                title="Industries" 
                icon={<Briefcase className="h-5 w-5 text-primary" />}
                links={[
                  { href: "/industries", label: "Industries Overview" },
                  { href: "/industries/technology", label: "Technology" },
                  { href: "/industries/e-commerce", label: "E-commerce" },
                  { href: "/industries/finance", label: "Finance & Banking" },
                  { href: "/industries/healthcare", label: "Healthcare" },
                  { href: "/industries/education", label: "Education" },
                  { href: "/industries/real-estate", label: "Real Estate" }
                ]}
              />
              
              <SitemapSection 
                title="Portfolio & Case Studies" 
                icon={<FileText className="h-5 w-5 text-primary" />}
                links={[
                  { href: "/portfolio", label: "Portfolio" },
                  { href: "/portfolio/premium-wix-website-for-luxury-fashion-boutique", label: "Luxury Fashion Website" },
                  { href: "/portfolio/mern-stack-property-management-web-application", label: "Property Management App" },
                  { href: "/portfolio/react-native-fitness-tracking-mobile-app", label: "Fitness Tracking App" },
                  { href: "/portfolio/mern-stack-e-learning-platform-website", label: "E-Learning Platform" },
                  { href: "/portfolio/wix-healthcare-provider-professional-website", label: "Healthcare Provider Website" },
                  { href: "/portfolio/react-native-food-delivery-mobile-application", label: "Food Delivery App" },
                  { href: "/case-studies", label: "Case Studies" }
                ]}
              />
              
              <SitemapSection 
                title="Company" 
                icon={<Users className="h-5 w-5 text-primary" />}
                links={[
                  { href: "/team", label: "Our Team" },
                  { href: "/careers", label: "Careers" },
                  { href: "/careers/jobs", label: "Job Listings" },
                  { href: "/careers/apply", label: "Apply" }
                ]}
              />
            </div>
            
            {/* Support Sections */}
            <div>
              <SitemapSection 
                title="Knowledge Base" 
                icon={<BookOpen className="h-5 w-5 text-primary" />}
                links={[
                  { href: "/knowledge-base", label: "Knowledge Base Home" },
                  { href: "/knowledge-base/getting-started", label: "Getting Started Guides" },
                  { href: "/knowledge-base/technical", label: "Technical Documentation" },
                  { href: "/knowledge-base/api", label: "API References" },
                  { href: "/knowledge-base/tutorials", label: "Tutorials" },
                  { href: "/knowledge-base/troubleshooting", label: "Troubleshooting" }
                ]}
              />
              
              <SitemapSection 
                title="Support" 
                icon={<HelpCircle className="h-5 w-5 text-primary" />}
                links={[
                  { href: "/support", label: "Support Center" },
                  { href: "/support/submit", label: "Submit a Request" },
                  { href: "/support/ticket-status", label: "Check Ticket Status" },
                  { href: "/faq", label: "FAQ" }
                ]}
              />
              
              <SitemapSection 
                title="Legal" 
                icon={<Scale className="h-5 w-5 text-primary" />}
                links={[
                  { href: "/legal", label: "Legal Information" },
                  { href: "/legal/terms-conditions", label: "Terms & Conditions" },
                  { href: "/legal/privacy-policy", label: "Privacy Policy" },
                  { href: "/legal/refund-policy", label: "Refund Policy" },
                  { href: "/legal/cookie-policy", label: "Cookie Policy" },
                  { href: "/legal/disclaimer", label: "Disclaimer" }
                ]}
              />
              
              <SitemapSection 
                title="Account & Authentication" 
                icon={<Shield className="h-5 w-5 text-primary" />}
                links={[
                  { href: "/auth/login", label: "Login" },
                  { href: "/auth/register", label: "Register" },
                  { href: "/auth/forgot-password", label: "Forgot Password" },
                  { href: "/auth/reset-password", label: "Reset Password" },
                  { href: "/auth/verify-email", label: "Verify Email" }
                ]}
              />
              
              <SitemapSection 
                title="Contact & Newsletter" 
                icon={<MessageSquare className="h-5 w-5 text-primary" />}
                links={[
                  { href: "/contact", label: "Contact Us" },
                  { href: "/contact/free-consultation", label: "Free Consultation" },
                  { href: "/newsletter/subscribe", label: "Newsletter Subscription" }
                ]}
              />
            </div>
          </div>
          
          {/* Additional Resources */}
          <div className="mt-16">
            <h2 className="text-2xl font-bold mb-6">Additional Resources</h2>
            <div className="grid gap-6 md:grid-cols-3">
              <div className="p-6 border border-border rounded-lg">
                <div className="mb-4">
                  <MessageSquare className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Contact Options</h3>
                <ul className="space-y-2">
                  <li>
                    <Link href="/contact" className="text-sm hover:text-primary transition-colors">
                      Contact Form
                    </Link>
                  </li>
                  <li>
                    <Link href="/contact/free-consultation" className="text-sm hover:text-primary transition-colors">
                      Free Consultation
                    </Link>
                  </li>
                  <li>
                    <a href="mailto:info@rtnglobal.com" className="text-sm hover:text-primary transition-colors">
                      Email Us
                    </a>
                  </li>
                </ul>
              </div>
              
              <div className="p-6 border border-border rounded-lg">
                <div className="mb-4">
                  <FileText className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Resources</h3>
                <ul className="space-y-2">
                  <li>
                    <Link href="/blog" className="text-sm hover:text-primary transition-colors">
                      Blog Articles
                    </Link>
                  </li>
                  <li>
                    <Link href="/newsletter/subscribe" className="text-sm hover:text-primary transition-colors">
                      Newsletter
                    </Link>
                  </li>
                  <li>
                    <Link href="/resources" className="text-sm hover:text-primary transition-colors">
                      Downloadable Resources
                    </Link>
                  </li>
                </ul>
              </div>
              
              <div className="p-6 border border-border rounded-lg">
                <div className="mb-4">
                  <Layers className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Site Tools</h3>
                <ul className="space-y-2">
                  <li>
                    <Link href="/site-map" className="text-sm hover:text-primary transition-colors">
                      Site Map (You are here)
                    </Link>
                  </li>
                  <li>
                    <Link href="/search" className="text-sm hover:text-primary transition-colors">
                      Search
                    </Link>
                  </li>
                  <li>
                    <Link href="#" onClick={() => window.print()} className="text-sm hover:text-primary transition-colors">
                      Print This Page
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

// Helper component for sitemap sections
function SitemapSection({ 
  title, 
  icon, 
  links 
}: { 
  title: string; 
  icon: React.ReactNode; 
  links: { href: string; label: string }[] 
}) {
  return (
    <div className="mb-10">
      <div className="flex items-center gap-2 mb-4">
        {icon}
        <h2 className="text-xl font-semibold">{title}</h2>
      </div>
      <ul className="space-y-2 pl-2 border-l border-border">
        {links.map((link, index) => (
          <li key={index} className="pl-4 -ml-px">
            <Link 
              href={link.href} 
              className="text-sm flex items-center hover:text-primary transition-colors"
            >
              <ChevronRight className="h-3 w-3 mr-1.5 flex-shrink-0" />
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
} 