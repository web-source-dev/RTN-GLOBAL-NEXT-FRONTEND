import type { Metadata } from 'next';
import SupportForm from '@/components/forms/support-form';
import { Suspense } from 'react';
import Link from 'next/link';
import { 
  MessageSquare, 
  FileText, 
  HelpCircle, 
  CheckCircle2, 
  AlertTriangle, 
  Phone, 
  Clock, 
  Search
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Submit a Support Request | Get Help with Your Issues',
  description: 'Submit a support ticket and get assistance from our technical team. Describe your issue, upload screenshots, and track the status of your request.',
  keywords: ['support request', 'technical support', 'customer support', 'help desk', 'support ticket', 'IT support'],
  openGraph: {
    title: 'Submit a Support Request | RTN Global',
    description: 'Get technical assistance and support for your issues',
    images: ['/images/og/support-request.jpg'],
  },
};

export default function SubmitSupportRequestPage() {
  return (
    <main className="min-h-screen bg-background">
      {/* JSON-LD structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Submit a Support Request | RTN Global",
            "description": "Submit a support ticket and get assistance from our technical team. Describe your issue, upload screenshots, and track the status of your request.",
            "url": "https://rtnglobal.site/support/submit",
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
              "sameAs": [
                "https://www.instagram.com/rtnglobalofficial/",
                "https://www.threads.net/@rtnglobalofficial",
                "https://www.tiktok.com/@rtnglobalofficial",
                "https://web.facebook.com/people/RTN-Global/61573828870610/",
                "https://www.youtube.com/@RTNGlobal",
                "https://www.linkedin.com/in/rtnglobalofficial/"
              ]
            },
            "mainEntity": {
              "@type": "SupportPage",
              "name": "Submit a Support Request",
              "description": "Fill out the form below to create a support ticket. Our team will review your request and get back to you as soon as possible."
            }
          })
        }}
      />
      <div className="py-12">
        <div className="container px-4 mx-auto">
          <div className="max-w-4xl mx-auto">
            <div className="mb-8 text-center">
              <h1 className="text-3xl font-bold leading-tight md:text-4xl">Submit a Support Request</h1>
              <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
                Fill out the form below to create a support ticket. Our team will review your request and get back to you as soon as possible. We&apos;re here to help resolve your issues quickly and efficiently.
              </p>
            </div>
            
            {/* Before You Submit Section */}
            <div className="mb-8 p-6 border rounded-lg bg-muted/30">
              <h2 className="text-xl font-semibold mb-4 flex items-center">
                <HelpCircle className="mr-2 h-5 w-5 text-primary" />
                Before You Submit
              </h2>
              <div className="space-y-3">
                <p className="text-sm">
                  For faster resolution, please check these resources first:
                </p>
                <ul className="list-disc pl-5 space-y-2 text-sm">
                  <li>
                    <Link href="/knowledge-base" className="text-primary hover:underline">
                      Browse our Knowledge Base
                    </Link> for step-by-step guides and solutions to common issues.
                  </li>
                  <li>
                    <Link href="/faq" className="text-primary hover:underline">
                      Check our FAQ section
                    </Link> for answers to frequently asked questions.
                  </li>
                  <li>
                    For account-related or billing questions, please visit our 
                    <Link href="/billing" className="text-primary hover:underline mx-1">
                      Billing & Payments
                    </Link> page.
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="bg-card rounded-lg border border-border shadow-sm overflow-hidden mb-8">
              <div className="p-1 md:p-2">
                <Suspense fallback={<div className="p-8 text-center">Loading support form...</div>}>
                  <SupportForm />
                </Suspense>
              </div>
            </div>
            
            {/* Tips for Good Support Tickets */}
            <div className="mb-10">
              <h2 className="text-xl font-semibold mb-4 flex items-center">
                <CheckCircle2 className="mr-2 h-5 w-5 text-primary" />
                Tips for a Good Support Ticket
              </h2>
              <div className="grid gap-4 md:grid-cols-2">
                <div className="p-4 border rounded-lg">
                  <h3 className="font-medium text-base mb-2 flex items-center">
                    <FileText className="mr-2 h-4 w-4 text-primary" />
                    Be Detailed
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Provide as much detail as possible about your issue. Include what you were doing when it occurred, error messages, and the steps to reproduce it.
                  </p>
                </div>
                
                <div className="p-4 border rounded-lg">
                  <h3 className="font-medium text-base mb-2 flex items-center">
                    <AlertTriangle className="mr-2 h-4 w-4 text-primary" />
                    Include Screenshots
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Screenshots or screen recordings help us understand your issue faster. Capture error messages, problem areas, and relevant screens.
                  </p>
                </div>
                
                <div className="p-4 border rounded-lg">
                  <h3 className="font-medium text-base mb-2 flex items-center">
                    <Clock className="mr-2 h-4 w-4 text-primary" />
                    Note Timing
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Specify when the issue started and whether it happens consistently or intermittently. This helps us identify patterns.
                  </p>
                </div>
                
                <div className="p-4 border rounded-lg">
                  <h3 className="font-medium text-base mb-2 flex items-center">
                    <Search className="mr-2 h-4 w-4 text-primary" />
                    Check Browser Info
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Include your browser type, version, device, and operating system if relevant to the issue you&apos;re experiencing.
                  </p>
                </div>
              </div>
            </div>
            
            {/* Support Process */}
            <div className="mb-10">
              <h2 className="text-xl font-semibold mb-6">Our Support Process</h2>
              <div className="relative">
                {/* Progress Line (Desktop) */}
                <div className="hidden md:block absolute left-[calc(50%-1px)] top-10 bottom-10 w-0.5 bg-border"></div>
                
                <div className="grid gap-8 md:grid-cols-4">
                  <div className="p-4 border border-border rounded-lg bg-card text-center relative">
                    <div className="w-10 h-10 mx-auto mb-3 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold relative z-10">1</div>
                    <h3 className="font-medium mb-2">Submit Request</h3>
                    <p className="text-xs text-muted-foreground">Fill out the form with details about your issue</p>
                  </div>
                  
                  <div className="p-4 border border-border rounded-lg bg-card text-center relative">
                    <div className="w-10 h-10 mx-auto mb-3 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold relative z-10">2</div>
                    <h3 className="font-medium mb-2">Ticket Created</h3>
                    <p className="text-xs text-muted-foreground">Receive a confirmation with your ticket number via email</p>
                  </div>
                  
                  <div className="p-4 border border-border rounded-lg bg-card text-center relative">
                    <div className="w-10 h-10 mx-auto mb-3 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold relative z-10">3</div>
                    <h3 className="font-medium mb-2">Team Review</h3>
                    <p className="text-xs text-muted-foreground">Our support staff reviews and responds to your request</p>
                  </div>
                  
                  <div className="p-4 border border-border rounded-lg bg-card text-center relative">
                    <div className="w-10 h-10 mx-auto mb-3 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold relative z-10">4</div>
                    <h3 className="font-medium mb-2">Resolution</h3>
                    <p className="text-xs text-muted-foreground">Work together until your issue is resolved</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Response Time Expectations */}
            <div className="mb-10">
              <h2 className="text-xl font-semibold mb-4 flex items-center">
                <Clock className="mr-2 h-5 w-5 text-primary" />
                Response Time Expectations
              </h2>
              <div className="overflow-hidden rounded-lg border">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-muted/50">
                      <th className="p-3 text-left font-medium">Priority Level</th>
                      <th className="p-3 text-left font-medium">Typical Response Time</th>
                      <th className="p-3 text-left font-medium hidden md:table-cell">Example Issues</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-t">
                      <td className="p-3 font-medium">Critical</td>
                      <td className="p-3">2-4 hours</td>
                      <td className="p-3 hidden md:table-cell text-muted-foreground">System outages, security breaches, complete loss of functionality</td>
                    </tr>
                    <tr className="border-t">
                      <td className="p-3 font-medium">High</td>
                      <td className="p-3">8 hours</td>
                      <td className="p-3 hidden md:table-cell text-muted-foreground">Major features not working, significant performance issues</td>
                    </tr>
                    <tr className="border-t">
                      <td className="p-3 font-medium">Medium</td>
                      <td className="p-3">24 hours</td>
                      <td className="p-3 hidden md:table-cell text-muted-foreground">Minor bugs, non-critical issues, feature requests</td>
                    </tr>
                    <tr className="border-t">
                      <td className="p-3 font-medium">Low</td>
                      <td className="p-3">48 hours</td>
                      <td className="p-3 hidden md:table-cell text-muted-foreground">Cosmetic issues, enhancement suggestions, documentation updates</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-xs text-muted-foreground mt-2">
                * Response times may vary during weekends and holidays. Our support team operates Monday-Friday, 9am-6pm EST.
              </p>
            </div>
            
            {/* Existing Ticket Check + Additional Options */}
            <div className="grid gap-6 md:grid-cols-2">
              <div className="p-6 border rounded-lg bg-primary/5">
                <div className="flex items-start">
                  <div className="p-2 rounded-full bg-primary/10 text-primary mr-4">
                    <MessageSquare className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Already submitted a request?</h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      Check on your existing support ticket to view updates, add comments, or see its current status.
                    </p>
                    <Link 
                      href="/support/ticket-status" 
                      className="inline-flex items-center justify-center px-4 py-2 rounded-md bg-primary text-primary-foreground hover:bg-primary/90 transition-colors text-sm"
                    >
                      Check Ticket Status
                    </Link>
                  </div>
                </div>
              </div>
              
              <div className="p-6 border rounded-lg bg-muted/30">
                <div className="flex items-start">
                  <div className="p-2 rounded-full bg-muted text-foreground mr-4">
                    <Phone className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Need immediate assistance?</h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      For urgent matters, you can reach our support team directly by phone or live chat.
                    </p>
                    <Link 
                      href="/contact" 
                      className="inline-flex items-center justify-center px-4 py-2 rounded-md bg-secondary text-secondary-foreground hover:bg-secondary/90 transition-colors text-sm"
                    >
                      Contact Support Directly
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
} 