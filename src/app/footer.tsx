"use client"

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ChevronRight, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin, Youtube, Shield, FileText } from 'lucide-react';
import NewsletterForm from '@/components/forms/newsletter-form';

export function Footer() {
  const pathname = usePathname();
  const [showScrollButton, setShowScrollButton] = useState(false);

  // Move scroll event listener to useEffect
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollButton(window.scrollY > 300);
    };
    
    // Add the event listener
    window.addEventListener('scroll', handleScroll);
    
    // Run once on mount to check initial position
    handleScroll();
    
    // Remove event listener on cleanup
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); // Empty dependency array means this runs once on mount

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-card border-t border-border mt-auto">
      <div className="container px-4 py-12 mx-auto">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-4">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="mb-4">
              <Link href="/" className="flex items-center">
                <span className="font-bold text-xl">RTN Global</span>
              </Link>
            </div>
            <p className="text-sm text-muted-foreground mb-6">
              Providing innovative digital solutions for businesses worldwide. We help brands grow through technology and creative strategy.
            </p>
            <div className="space-y-3">
              <div className="flex items-start">
                <Mail className="h-5 w-5 text-primary mr-2 mt-0.5" />
                <a href="mailto:info@rtnglobal.com" className="text-sm hover:text-primary transition-colors">
                  info@rtnglobal.com
                </a>
              </div>
              <div className="flex items-start">
                <Phone className="h-5 w-5 text-primary mr-2 mt-0.5" />
                <a href="tel:+1234567890" className="text-sm hover:text-primary transition-colors">
                  +1 (234) 567-890
                </a>
              </div>
              <div className="flex items-start">
                <MapPin className="h-5 w-5 text-primary mr-2 mt-0.5" />
                <address className="text-sm not-italic">
                  123 Business Street, Suite 100<br />
                  New York, NY 10001
                </address>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-1">
            <h3 className="text-lg font-medium mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-sm flex items-center hover:text-primary transition-colors">
                  <ChevronRight className="h-3 w-3 mr-1" />
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-sm flex items-center hover:text-primary transition-colors">
                  <ChevronRight className="h-3 w-3 mr-1" />
                  Services
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-sm flex items-center hover:text-primary transition-colors">
                  <ChevronRight className="h-3 w-3 mr-1" />
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/careers" className="text-sm flex items-center hover:text-primary transition-colors">
                  <ChevronRight className="h-3 w-3 mr-1" />
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm flex items-center hover:text-primary transition-colors">
                  <ChevronRight className="h-3 w-3 mr-1" />
                  Contact Us
                </Link>
              </li>
            </ul>

            <h3 className="text-lg font-medium mb-4 mt-8">Support</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/support/submit" className="text-sm flex items-center hover:text-primary transition-colors">
                  <ChevronRight className="h-3 w-3 mr-1" />
                  Submit a Request
                </Link>
              </li>
              <li>
                <Link href="/support/ticket-status" className="text-sm flex items-center hover:text-primary transition-colors">
                  <ChevronRight className="h-3 w-3 mr-1" />
                  Check Ticket Status
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-sm flex items-center hover:text-primary transition-colors">
                  <ChevronRight className="h-3 w-3 mr-1" />
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/knowledge-base" className="text-sm flex items-center hover:text-primary transition-colors">
                  <ChevronRight className="h-3 w-3 mr-1" />
                  Knowledge Base
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="lg:col-span-1">
            <h3 className="text-lg font-medium mb-4">Our Services</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/services/web-development" className="text-sm flex items-center hover:text-primary transition-colors">
                  <ChevronRight className="h-3 w-3 mr-1" />
                  Web Development
                </Link>
              </li>
              <li>
                <Link href="/services/mobile-development" className="text-sm flex items-center hover:text-primary transition-colors">
                  <ChevronRight className="h-3 w-3 mr-1" />
                  Mobile App Development
                </Link>
              </li>
              <li>
                <Link href="/services/ui-ux-design" className="text-sm flex items-center hover:text-primary transition-colors">
                  <ChevronRight className="h-3 w-3 mr-1" />
                  UI/UX Design
                </Link>
              </li>
              <li>
                <Link href="/services/digital-marketing" className="text-sm flex items-center hover:text-primary transition-colors">
                  <ChevronRight className="h-3 w-3 mr-1" />
                  Digital Marketing
                </Link>
              </li>
              <li>
                <Link href="/services/seo" className="text-sm flex items-center hover:text-primary transition-colors">
                  <ChevronRight className="h-3 w-3 mr-1" />
                  SEO Optimization
                </Link>
              </li>
              <li>
                <Link href="/services/content-creation" className="text-sm flex items-center hover:text-primary transition-colors">
                  <ChevronRight className="h-3 w-3 mr-1" />
                  Content Creation
                </Link>
              </li>
            </ul>

            {/* Legal Links */}
            <h3 className="text-lg font-medium mb-4 mt-8">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/legal/terms-conditions" className="text-sm flex items-center hover:text-primary transition-colors">
                  <ChevronRight className="h-3 w-3 mr-1" />
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link href="/legal/privacy-policy" className="text-sm flex items-center hover:text-primary transition-colors">
                  <ChevronRight className="h-3 w-3 mr-1" />
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/legal/refund-policy" className="text-sm flex items-center hover:text-primary transition-colors">
                  <ChevronRight className="h-3 w-3 mr-1" />
                  Refund Policy
                </Link>
              </li>
              <li>
                <Link href="/legal/cookie-policy" className="text-sm flex items-center hover:text-primary transition-colors">
                  <ChevronRight className="h-3 w-3 mr-1" />
                  Cookie Policy
                </Link>
              </li>
              <li>
                <Link href="/legal/disclaimer" className="text-sm flex items-center hover:text-primary transition-colors">
                  <ChevronRight className="h-3 w-3 mr-1" />
                  Disclaimer
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="lg:col-span-1">
            <NewsletterForm 
              variant="simple" 
              title="Subscribe to Our Newsletter"
              description="Get the latest news and updates delivered to your inbox."
              className="mb-8"
            />
            
            <div className="mt-6">
              <h3 className="text-lg font-medium mb-4">Follow Us</h3>
              <div className="flex space-x-3">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="p-2 bg-muted rounded-full hover:bg-primary/10 transition-colors" aria-label="Facebook">
                  <Facebook className="h-5 w-5 text-foreground" />
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="p-2 bg-muted rounded-full hover:bg-primary/10 transition-colors" aria-label="Twitter">
                  <Twitter className="h-5 w-5 text-foreground" />
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="p-2 bg-muted rounded-full hover:bg-primary/10 transition-colors" aria-label="Instagram">
                  <Instagram className="h-5 w-5 text-foreground" />
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="p-2 bg-muted rounded-full hover:bg-primary/10 transition-colors" aria-label="LinkedIn">
                  <Linkedin className="h-5 w-5 text-foreground" />
                </a>
                <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="p-2 bg-muted rounded-full hover:bg-primary/10 transition-colors" aria-label="YouTube">
                  <Youtube className="h-5 w-5 text-foreground" />
                </a>
              </div>
            </div>
            
            <div className="mt-6">
              <Link href="/contact/free-consultation" className="text-sm font-medium text-primary hover:underline">
                Request a Free Consultation →
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-around items-center">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} RTN Global. All rights reserved.
            </p>
            <div className="flex flex-wrap mt-4 md:mt-0 gap-4">
              <Link href="/legal/terms-conditions" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Terms & Conditions
              </Link>
              <Link href="/legal/privacy-policy" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Privacy Policy
              </Link>
              <Link href="/legal/refund-policy" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Refund Policy
              </Link>
              <Link href="/legal/cookie-policy" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Cookie Policy
              </Link>
              <Link href="/legal/disclaimer" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Disclaimer
              </Link>
              <Link href="/site-map" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Site Map
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to top button */}
      {showScrollButton && (
        <button
          onClick={scrollToTop}
          className="fixed right-6 bottom-[90px] p-4 bg-primary text-primary-foreground rounded-full shadow-lg hover:bg-primary/90 transition-all z-50"
          aria-label="Scroll to top"
        >
          <ChevronRight className="h-5 w-5 rotate-[-90deg]" />
        </button>
      )}
    </footer>
  );
} 