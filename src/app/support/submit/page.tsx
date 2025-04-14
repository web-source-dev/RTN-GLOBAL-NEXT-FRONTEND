import type { Metadata } from 'next';
import SupportForm from '@/components/forms/support-form';
import { Suspense } from 'react';

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
            "url": "https://rtnglobal.co/support/submit",
            "publisher": {
              "@type": "Organization",
              "name": "RTN Global",
              "url": "https://rtnglobal.co/",
              "logo": "https://rtnglobal.co/logo.png",
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
                "telephone": "+1 505 528 6780",
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
              <p className="mt-4 text-muted-foreground">
                Fill out the form below to create a support ticket. Our team will review your request and get back to you as soon as possible.
              </p>
            </div>
            
            <div className="bg-card rounded-lg border border-border shadow-sm overflow-hidden">
              <div className="p-1 md:p-2">
                <Suspense fallback={<div className="p-8 text-center">Loading support form...</div>}>
                  <SupportForm />
                </Suspense>
              </div>
            </div>
            
            <div className="mt-12">
              <h2 className="text-xl font-semibold mb-4">Support Process</h2>
              <div className="grid gap-6 md:grid-cols-4">
                <div className="p-4 border border-border rounded-lg text-center">
                  <div className="w-8 h-8 mx-auto mb-3 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">1</div>
                  <h3 className="font-medium mb-2">Submit Request</h3>
                  <p className="text-xs text-muted-foreground">Fill out the form with details about your issue</p>
                </div>
                <div className="p-4 border border-border rounded-lg text-center">
                  <div className="w-8 h-8 mx-auto mb-3 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">2</div>
                  <h3 className="font-medium mb-2">Ticket Created</h3>
                  <p className="text-xs text-muted-foreground">Receive a confirmation with your ticket number</p>
                </div>
                <div className="p-4 border border-border rounded-lg text-center">
                  <div className="w-8 h-8 mx-auto mb-3 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">3</div>
                  <h3 className="font-medium mb-2">Team Review</h3>
                  <p className="text-xs text-muted-foreground">Our support staff reviews and responds to your request</p>
                </div>
                <div className="p-4 border border-border rounded-lg text-center">
                  <div className="w-8 h-8 mx-auto mb-3 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">4</div>
                  <h3 className="font-medium mb-2">Resolution</h3>
                  <p className="text-xs text-muted-foreground">Work together until your issue is resolved</p>
                </div>
              </div>
            </div>
            
            <div className="mt-8 p-4 bg-muted/30 border border-border rounded-lg">
              <p className="text-sm">
                <strong>Already submitted a request?</strong> You can{""}
                <a href="/support/ticket-status" className="text-primary hover:underline">
                  check the status of your ticket here
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
} 