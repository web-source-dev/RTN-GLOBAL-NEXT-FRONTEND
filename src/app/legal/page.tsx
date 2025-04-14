"use client";

import Link from "next/link";
import { Layout } from "@/components/layout/layout";
import { Card } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { 
  ChevronRight,
  Shield, 
  Scale,
  RefreshCw,
  Cookie,
  AlertTriangle,
  FileText,
  HelpCircle,
  ExternalLink,
} from "lucide-react";
import Script from 'next/script';

export default function LegalHomePage() {
  // Structured data for Legal page
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Legal Information & Policies | RTN Global",
    "description": "Access RTN Global's legal documents including Terms & Conditions, Privacy Policy, and Refund Policy. We are committed to transparency and protecting your rights.",
    "url": "https://rtnglobal.com/legal",
    "breadcrumb": {
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://rtnglobal.com"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Legal",
          "item": "https://rtnglobal.com/legal"
        }
      ]
    },
    "publisher": {
      "@type": "Organization",
      "name": "RTN Global",
      "logo": {
        "@type": "ImageObject",
        "url": "https://rtnglobal.com/images/logo.png"
      }
    },
    "mainEntity": {
      "@type": "ItemList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "url": "https://rtnglobal.com/legal/terms",
          "name": "Terms & Conditions"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "url": "https://rtnglobal.com/legal/privacy",
          "name": "Privacy Policy"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "url": "https://rtnglobal.com/legal/refund",
          "name": "Refund Policy"
        }
      ]
    }
  };

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
            <span className="text-foreground font-medium">Legal</span>
          </div>
          
          <div className="max-w-4xl">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Legal Information</h1>
            <p className="text-xl text-muted-foreground">
              Important legal documents and policies for RTN Global&apos;s services and website
            </p>
          </div>
        </div>
      </div>
      
      {/* Content Section */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-5xl mx-auto">
          <div className="prose dark:prose-invert max-w-none mb-8">
            <p>
              At RTN Global, we are committed to transparency and compliance with applicable laws and regulations. 
              This section provides access to all our legal documents and policies that govern your use of our 
              services and website. We encourage you to review these documents to better understand our 
              practices and your rights.
            </p>
          </div>
          
          {/* Tab Navigation for Mobile */}
          <div className="block md:hidden mb-8">
            <Tabs defaultValue="main-legal" className="w-full">
              <TabsList className="grid grid-cols-2 mb-6">
                <TabsTrigger value="main-legal">Main Documents</TabsTrigger>
                <TabsTrigger value="additional">Additional Policies</TabsTrigger>
              </TabsList>
              
              <TabsContent value="main-legal" className="mt-0">
                <div className="grid gap-4">
                  {renderLegalCard("terms-conditions", "Terms & Conditions", "The legal agreement between you and RTN Global governing the use of our services.", Scale)}
                  {renderLegalCard("privacy-policy", "Privacy Policy", "How we collect, use, disclose, and protect your personal information.", Shield)}
                  {renderLegalCard("refund-policy", "Refund Policy", "Our policy on refunds, cancellations, and service credits for our products and services.", RefreshCw)}
                </div>
              </TabsContent>
              
              <TabsContent value="additional" className="mt-0">
                <div className="grid gap-4">
                  {renderLegalCard("cookie-policy", "Cookie Policy", "How we use cookies and similar technologies on our website.", Cookie)}
                  {renderLegalCard("disclaimer", "Disclaimer", "Important information about limitations of liability and use of our website content.", AlertTriangle)}
                </div>
              </TabsContent>
            </Tabs>
          </div>
          
          {/* Desktop Layout */}
          <div className="hidden md:block">
            {/* Main Legal Documents */}
            <h2 className="text-2xl font-bold mb-6">Main Legal Documents</h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-12">
              {renderLegalCard("terms-conditions", "Terms & Conditions", "The legal agreement between you and RTN Global governing the use of our services.", Scale)}
              {renderLegalCard("privacy-policy", "Privacy Policy", "How we collect, use, disclose, and protect your personal information.", Shield)}
              {renderLegalCard("refund-policy", "Refund Policy", "Our policy on refunds, cancellations, and service credits for our products and services.", RefreshCw)}
            </div>
            
            {/* Additional Policies */}
            <h2 className="text-2xl font-bold mb-6">Additional Policies</h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-12">
              {renderLegalCard("cookie-policy", "Cookie Policy", "How we use cookies and similar technologies on our website.", Cookie)}
              {renderLegalCard("disclaimer", "Disclaimer", "Important information about limitations of liability and use of our website content.", AlertTriangle)}
            </div>
          </div>
          
          {/* Need Help Section */}
          <div className="bg-muted/30 rounded-lg p-8 border border-border">
            <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                <HelpCircle className="h-8 w-8 text-primary" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold mb-2">Need Help Understanding Our Policies?</h3>
                <p className="text-muted-foreground mb-4">
                  If you have any questions about our legal documents or need assistance understanding your rights and responsibilities, 
                  our team is here to help. You can reach us through our support channels or contact our legal department directly.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link href="/contact" className="text-primary hover:underline flex items-center gap-1.5">
                    <FileText className="h-4 w-4" />
                    Contact Legal Department
                  </Link>
                  <Link href="/support" className="text-primary hover:underline flex items-center gap-1.5">
                    <HelpCircle className="h-4 w-4" />
                    Visit Support Center
                  </Link>
                </div>
              </div>
            </div>
          </div>
          
          {/* Links to External Resources */}
          <div className="mt-12">
            <h3 className="text-lg font-semibold mb-4">Additional Resources</h3>
            <div className="grid gap-4 sm:grid-cols-2">
              <Link href="https://ico.org.uk/" target="_blank" rel="noopener noreferrer" className="group">
                <Card className="p-5 h-full hover:border-primary/50 transition-colors">
                  <div className="flex gap-3 items-start">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <ExternalLink className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-medium group-hover:text-primary transition-colors flex items-center gap-1">
                        Information Commissioner&apos;s Office 
                        <ExternalLink className="h-3 w-3" />
                      </h4>
                      <p className="text-sm text-muted-foreground">UK&apos;s independent authority on data protection</p>
                    </div>
                  </div>
                </Card>
              </Link>
              
              <Link href="https://gdpr-info.eu/" target="_blank" rel="noopener noreferrer" className="group">
                <Card className="p-5 h-full hover:border-primary/50 transition-colors">
                  <div className="flex gap-3 items-start">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <ExternalLink className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-medium group-hover:text-primary transition-colors flex items-center gap-1">
                        GDPR Information Portal
                        <ExternalLink className="h-3 w-3" />
                      </h4>
                      <p className="text-sm text-muted-foreground">Comprehensive resource on EU data protection law</p>
                    </div>
                  </div>
                </Card>
              </Link>
            </div>
          </div>
          
          {/* Updates Notice */}
          <div className="mt-12 text-sm text-muted-foreground">
            <p>
              These legal documents and policies are regularly reviewed and updated to comply with changing regulations and business practices. 
              It is your responsibility to check back periodically to stay informed about any changes. Significant changes will be 
              communicated directly to users when appropriate.
            </p>
            <p className="mt-2">
              Last comprehensive review: November 15, 2023
            </p>
          </div>
        </div>
      </div>
      
      {/* JSON-LD structured data */}
      <Script
        id="legal-structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
    </Layout>
  );
}

// Helper function to render legal document cards
function renderLegalCard(slug: string, title: string, description: string, Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>) {
  return (
    <Link href={`/legal/${slug}`} className="group">
      <Card className="h-full p-6 hover:border-primary/50 transition-colors">
        <div className="flex gap-4">
          <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
            <Icon className="h-6 w-6 text-primary" />
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">{title}</h3>
            <p className="text-muted-foreground text-sm mb-3">{description}</p>
            <span className="text-sm text-primary flex items-center gap-1.5">
              Read document
              <ChevronRight className="h-3 w-3" />
            </span>
          </div>
        </div>
      </Card>
    </Link>
  );
} 