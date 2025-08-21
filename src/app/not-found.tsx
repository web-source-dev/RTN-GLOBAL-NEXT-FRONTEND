"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Layout } from "@/components/layout/layout"
import { HomeIcon, SearchIcon, ArrowLeft, Mail, Phone, MapPin } from "lucide-react"

export default function NotFound() {
  return (
    <Layout>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Page Not Found (404) | RTN Global",
            "description": "The page you were looking for doesn't exist or has been moved to a new location.",
            "url": "https://rtnglobal.site/404",
            "breadcrumb": {
              "@type": "BreadcrumbList",
              "itemListElement": [
                {
                  "@type": "ListItem",
                  "position": 1,
                  "name": "Home",
                  "item": "https://rtnglobal.site/"
                },
                {
                  "@type": "ListItem",
                  "position": 2,
                  "name": "Page Not Found",
                  "item": "https://rtnglobal.site/404"
                }
              ]
            },
            "publisher": {
              "@type": "Organization",
              "name": "RTN Global",
              "url": "https://rtnglobal.site/",
              "logo": "https://rtnglobal.site/logo.png"
            },
            "mainEntity": {
              "@type": "WebSite",
              "name": "RTN Global",
              "url": "https://rtnglobal.site/"
            }
          })
        }}
      />
      
      <section className="py-20 md:py-32 bg-gradient-to-b from-background to-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-xl mx-auto text-center">
            <div className="flex justify-center mb-8">
              <div className="relative">
                <div className="text-9xl font-bold text-primary/10">404</div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <SearchIcon className="h-16 w-16 text-primary" />
                </div>
              </div>
            </div>

            <h1 className="text-3xl font-bold tracking-tight mb-4">Page Not Found</h1>
            <p className="text-lg text-muted-foreground mb-8">
              The page you were looking for doesn&apos;t exist or has been moved to a new location.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="gap-2">
                <Link href="/">
                  <HomeIcon className="h-4 w-4 mr-2" />
                  Return Home
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/contact">
                  Contact Support
                </Link>
              </Button>
            </div>

            <div className="mt-16 pt-8 border-t border-border">
              <p className="text-base text-muted-foreground mb-6">
                Looking for something specific? Here are some helpful links:
              </p>
              <div className="grid gap-4 md:grid-cols-2">
                <Link href="/services" className="flex items-center p-3 rounded-lg bg-accent/20 hover:bg-accent/30 transition-colors">
                  <span className="font-medium">Our Services</span>
                </Link>
                <Link href="/blog" className="flex items-center p-3 rounded-lg bg-accent/20 hover:bg-accent/30 transition-colors">
                  <span className="font-medium">Blog</span>
                </Link>
                <Link href="/about" className="flex items-center p-3 rounded-lg bg-accent/20 hover:bg-accent/30 transition-colors">
                  <span className="font-medium">About Us</span>
                </Link>
                <Link href="/contact" className="flex items-center p-3 rounded-lg bg-accent/20 hover:bg-accent/30 transition-colors">
                  <span className="font-medium">Contact Us</span>
                </Link>
              </div>
            </div>
            
            <div className="mt-10 pt-6 border-t border-border">
              <div className="flex flex-col gap-3 items-center justify-center text-sm">
                <div className="flex items-center gap-2">
                  <Mail className="h-4 w-4 text-primary" />
                  <a href="mailto:info@rtnglobal.site" className="hover:text-primary transition-colors">info@rtnglobal.site</a>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="h-4 w-4 text-primary" />
                  <a href="tel:+15551234567" className="hover:text-primary transition-colors">+1 (555) 123-4567</a>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-primary" />
                  <span>1209 MOUNTAIN ROAD PLNE, STE R, ALBUQUERQUE, NM</span>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <Button variant="ghost" size="sm" className="text-xs gap-1" onClick={() => window.history.back()}>
                <ArrowLeft className="h-3 w-3" />
                Go Back
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
} 