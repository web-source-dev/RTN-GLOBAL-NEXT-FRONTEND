import type { Metadata } from 'next';
import TicketStatus from '@/components/forms/ticket-status';

export const metadata: Metadata = {
  title: 'Support Ticket Status | Check Your Support Request',
  description: 'Check the status of your support ticket, view details, and communicate with our support team through comments.',
  keywords: ['support ticket', 'ticket status', 'support request', 'help desk', 'customer support'],
  openGraph: {
    title: 'Support Ticket Status | RTN Global',
    description: 'Check the status of your support ticket and communicate with our team',
    images: ['/images/og/support-ticket-status.jpg'],
  },
};

export default function SupportTicketStatusPage() {
  return (
    <main className="min-h-screen bg-background">
      {/* JSON-LD structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Support Ticket Status | RTN Global",
            "description": "Check the status of your support ticket, view details, and communicate with our support team through comments.",
            "url": "https://rtnglobal.co/support/ticket-status",
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
              "name": "Support Ticket Status",
              "description": "Track the progress of your support request, view details, and communicate with our support team"
            }
          })
        }}
      />
      <div className="py-12">
        <div className="container px-4 mx-auto">
          <div className="max-w-4xl mx-auto">
            <div className="mb-8 text-center">
              <h1 className="text-3xl font-bold leading-tight md:text-4xl">Check Your Support Ticket Status</h1>
              <p className="mt-4 text-muted-foreground">
                Enter your ticket number to track the progress of your support request, view details, and communicate with our support team.
              </p>
            </div>
            
            <TicketStatus />
          </div>
        </div>
      </div>
    </main>
  );
} 