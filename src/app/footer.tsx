"use client"

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { ChevronRight, Mail, Phone, MapPin, Facebook, Instagram, Linkedin, Youtube } from 'lucide-react';
import NewsletterForm from '@/components/forms/newsletter-form';
import { FaTiktok } from 'react-icons/fa';
import { FaThreads } from 'react-icons/fa6';

export function Footer() {
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
    <footer className="bg-black/70 border-t border-border mt-auto">
      <div className="container px-4 py-12 mx-auto">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-4">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="mb-4">
              <Link href="/" className="flex items-center">
                <span className="font-bold text-2xl">RTN Global</span>
              </Link>
            </div>
            <p className="text-md text-white mb-6">
              Providing innovative digital solutions for businesses worldwide. We help brands grow through technology and creative strategy.
            </p>
            <div className="space-y-3">
              <div className="flex items-start">
                <Mail className="h-5 w-5 text-primary mr-2 mt-0.5" />
                <a href="mailto:info@rtnglobal.site" className="text-md text-white hover:text-primary transition-colors">
                  info@rtnglobal.site
                </a>
              </div>
              <div className="flex items-start">
                <Phone className="h-5 w-5 text-primary mr-2 mt-0.5" />
                <a href="tel:+15055286780" className="text-md text-white hover:text-primary transition-colors">
                  +1 (505) 528 0265
                </a>
              </div>
              <div className="flex items-start">
                <MapPin className="h-5 w-5 text-primary mr-2 mt-0.5" />
                <address className="text-md text-white not-italic">
                  1209 MOUNTAIN ROAD PLNE, STE R<br />
                  ALBUQUERQUE, NM 87110<br />
                  US
                </address>
              </div>
            </div>


            
             {/* MyWOT Verification Badge */}
             <a id='wot-badge0' className='wot-badge mt-5' href='https://www.mywot.com/scorecard/rtnglobal.site?wot_badge=0_white' target='_blank' rel="noopener noreferrer">
                <div className='wot-logo'></div>
                <div className='wot-shield'></div>
                <p className='wot-secured'>Verified</p>
                <div className='wot-vertical'></div>
                <p className='wot-report'>See Report</p>
              </a>

              <div className="mt-5">
<div className="trustpilot-widget" data-locale="en-US" data-template-id="56278e9abfbbba0bdcd568bc" data-businessunit-id="6806cad015b91e8838c555cd" data-style-height="52px" data-style-width="100%" data-token="40da9023-bdb6-484f-b948-8b31eeaf8ff7">
  <a href="https://www.trustpilot.com/review/rtnglobal.co" target="_blank" rel="noopener">Trustpilot</a>
</div>
              </div>
          </div>

          

          {/* Quick Links */}
          <div className="lg:col-span-1">
            <h3 className="text-lg font-medium mb-4 text-white">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-md text-white flex items-center hover:text-primary transition-colors">
                  <ChevronRight className="h-3 w-3 mr-1" />
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-md text-white flex items-center hover:text-primary transition-colors">
                  <ChevronRight className="h-3 w-3 mr-1" />
                  Services
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-md text-white flex items-center hover:text-primary transition-colors">
                  <ChevronRight className="h-3 w-3 mr-1" />
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/careers" className="text-md text-white flex items-center hover:text-primary transition-colors">
                  <ChevronRight className="h-3 w-3 mr-1" />
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-md text-white flex items-center hover:text-primary transition-colors">
                  <ChevronRight className="h-3 w-3 mr-1" />
                  Contact Us
                </Link>
              </li>
            </ul>

            <h3 className="text-lg font-medium mb-4 mt-8 text-white">Support</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/support/submit" className="text-md text-white flex items-center hover:text-primary transition-colors">
                  <ChevronRight className="h-3 w-3 mr-1" />
                  Submit a Request
                </Link>
              </li>
              <li>
                <Link href="/support/ticket-status" className="text-md text-white flex items-center hover:text-primary transition-colors">
                  <ChevronRight className="h-3 w-3 mr-1" />
                  Check Ticket Status
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-md text-white flex items-center hover:text-primary transition-colors">
                  <ChevronRight className="h-3 w-3 mr-1" />
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/knowledge-base" className="text-md text-white flex items-center hover:text-primary transition-colors">
                  <ChevronRight className="h-3 w-3 mr-1" />
                  Knowledge Base
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="lg:col-span-1">
            <h3 className="text-lg font-medium mb-4 text-white">Our Services</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/services/web-development" className="text-md text-white flex items-center hover:text-primary transition-colors">
                  <ChevronRight className="h-3 w-3 mr-1" />
                  Web Development
                </Link>
              </li>
              <li>
                <Link href="/services/mobile-apps" className="text-md text-white flex items-center hover:text-primary transition-colors">
                  <ChevronRight className="h-3 w-3 mr-1" />
                  Mobile Apps
                </Link>
              </li>
              <li>
                <Link href="/services/ux-design" className="text-md text-white flex items-center hover:text-primary transition-colors">
                  <ChevronRight className="h-3 w-3 mr-1" />
                  UX Design
                </Link>
              </li>
              <li>
                <Link href="/services/content-marketing" className="text-md text-white flex items-center hover:text-primary transition-colors">
                  <ChevronRight className="h-3 w-3 mr-1" />
                  Content Marketing
                </Link>
              </li>
              <li>
                <Link href="/services/seo-optimization" className="text-md text-white flex items-center hover:text-primary transition-colors">
                  <ChevronRight className="h-3 w-3 mr-1" />
                  SEO Optimization
                </Link>
              </li>
              <li>
                <Link href="/services/content-marketing" className="text-md text-white flex items-center hover:text-primary transition-colors">
                  <ChevronRight className="h-3 w-3 mr-1" />
                  Content Marketing
                </Link>
              </li>
            </ul>

            {/* Resources Section - New */}
            <h3 className="text-lg font-medium mb-4 mt-8 text-white">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/knowledge-base" className="text-md text-white flex items-center hover:text-primary transition-colors">
                  <ChevronRight className="h-3 w-3 mr-1" />
                  Knowledge Base
                </Link>
              </li>
              <li>
                <Link href="/case-studies" className="text-md text-white flex items-center hover:text-primary transition-colors">
                  <ChevronRight className="h-3 w-3 mr-1" />
                  Case Studies
                </Link>
              </li>
              <li>
                <Link href="/resources" className="text-md text-white flex items-center hover:text-primary transition-colors">
                  <ChevronRight className="h-3 w-3 mr-1" />
                  Resource Center
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="text-md text-white flex items-center hover:text-primary transition-colors">
                  <ChevronRight className="h-3 w-3 mr-1" />
                  Portfolio
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
            
            {/* Popular Content Section - New */}
            <div className="mb-8">
              <h3 className="text-lg font-medium mb-4 text-white">Popular Content</h3>
              <ul className="space-y-2">
                <li>
                                  <Link href="/industries/e-commerce" className="text-md text-white flex items-center hover:text-primary transition-colors">
                  <ChevronRight className="h-3 w-3 mr-1" />
                  E-Commerce Solutions
                </Link>
                </li>
                <li>
                                  <Link href="/services/wordpress-development" className="text-md text-white flex items-center hover:text-primary transition-colors">
                  <ChevronRight className="h-3 w-3 mr-1" />
                  WordPress Development
                </Link>
                </li>
                <li>
                                  <Link href="/services/full-stack-development" className="text-md text-white flex items-center hover:text-primary transition-colors">
                  <ChevronRight className="h-3 w-3 mr-1" />
                  Full Stack Development
                </Link>
                </li>
                <li>
                                  <Link href="/services/react-native" className="text-md text-white flex items-center hover:text-primary transition-colors">
                  <ChevronRight className="h-3 w-3 mr-1" />
                  React Native Apps
                </Link>
                </li>
              </ul>
            </div>
            
            <div className="mt-6">
              <h3 className="text-lg font-medium mb-4 text-white">Follow Us</h3>
              <div className="flex space-x-3 flex-wrap">
                <a href="https://web.facebook.com/people/RTN-Global/61573828870610/" target="_blank" rel="noopener noreferrer" className="p-2 bg-muted rounded-full hover:bg-primary/10 transition-colors" aria-label="Facebook">
                  <Facebook className="h-5 w-5 text-foreground" />
                </a>
                <a href="https://www.instagram.com/rtnglobalofficial/" target="_blank" rel="noopener noreferrer" className="p-2 bg-muted rounded-full hover:bg-primary/10 transition-colors" aria-label="Instagram">
                  <Instagram className="h-5 w-5 text-foreground" />
                </a>
                <a href="https://www.linkedin.com/in/rtnglobalofficial/" target="_blank" rel="noopener noreferrer" className="p-2 bg-muted rounded-full hover:bg-primary/10 transition-colors" aria-label="LinkedIn">
                  <Linkedin className="h-5 w-5 text-foreground" />
                </a>
                <a href="https://www.youtube.com/@RTNGlobal" target="_blank" rel="noopener noreferrer" className="p-2 bg-muted rounded-full hover:bg-primary/10 transition-colors" aria-label="YouTube">
                  <Youtube className="h-5 w-5 text-foreground" />
                </a>
                <a href="https://www.tiktok.com/@rtnglobalofficial" target="_blank" rel="noopener noreferrer" className="p-2 bg-muted rounded-full hover:bg-primary/10 transition-colors" aria-label="TikTok">
                  <FaTiktok className="h-5 w-5 text-foreground" />
                </a>
                <a href="https://www.threads.net/@rtnglobalofficial" target="_blank" rel="noopener noreferrer" className="p-2 bg-muted rounded-full hover:bg-primary/10 transition-colors" aria-label="Threads">
                  <FaThreads className="h-5 w-5 text-foreground" />
                </a>
              </div>
            </div>
            
            <div className="mt-6">
              <Link href="/contact/free-consultation" className="text-md font-medium text-primary hover:underline">
                Request a Free Consultation →
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-around items-center">
            <div className="flex items-center gap-4">
              <p className="text-md text-white">
                © {new Date().getFullYear()} RTN Global. All rights reserved. <a href="https://rtnglobal.co/" className="hover:text-primary">rtnglobal.co</a>
              </p>
             
            </div>
            <div className="flex flex-wrap mt-4 md:mt-0 gap-4">
              <Link href="/legal/terms-conditions" className="text-md text-white hover:text-primary transition-colors">
                Terms & Conditions
              </Link>
              <Link href="/legal/privacy-policy" className="text-md text-white hover:text-primary transition-colors">
                Privacy Policy
              </Link>
              <Link href="/legal/refund-policy" className="text-md text-white hover:text-primary transition-colors">
                Refund Policy
              </Link>
              <Link href="/legal/cookie-policy" className="text-md text-white hover:text-primary transition-colors">
                Cookie Policy
              </Link>
              <Link href="/legal/disclaimer" className="text-md text-white hover:text-primary transition-colors">
                Disclaimer
              </Link>
              <Link href="/site-map" className="text-md text-white hover:text-primary transition-colors">
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