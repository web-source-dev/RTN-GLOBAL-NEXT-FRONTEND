import type { Metadata } from 'next';
import TicketStatus from '@/components/forms/ticket-status';
import Link from 'next/link';
import { 
  MessageSquare,
  Book, 
  Phone, 
  Mail,
  ArrowRight
} from 'lucide-react';

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

            {/* Support Options Section */}
            <div className="mt-16 mb-12">
              <h2 className="text-2xl font-bold text-center mb-10">Need Additional Support?</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Link href="/support/submit" className="group">
                  <div className="p-6 border rounded-lg shadow-sm bg-card hover:shadow-md transition-all">
                    <div className="flex flex-col items-center text-center">
                      <div className="p-3 mb-4 rounded-full bg-primary/10 text-primary">
                        <MessageSquare className="h-6 w-6" />
                      </div>
                      <h3 className="font-semibold mb-2">Create New Ticket</h3>
                      <p className="text-sm text-muted-foreground mb-4">Need help with a new issue? Submit a ticket to our support team.</p>
                      <span className="text-primary font-medium text-sm inline-flex items-center group-hover:underline">
                        Create Ticket <ArrowRight className="ml-1 h-4 w-4" />
                      </span>
                    </div>
                  </div>
                </Link>

                <Link href="/knowledge-base" className="group">
                  <div className="p-6 border rounded-lg shadow-sm bg-card hover:shadow-md transition-all">
                    <div className="flex flex-col items-center text-center">
                      <div className="p-3 mb-4 rounded-full bg-primary/10 text-primary">
                        <Book className="h-6 w-6" />
                      </div>
                      <h3 className="font-semibold mb-2">Knowledge Base</h3>
                      <p className="text-sm text-muted-foreground mb-4">Explore our comprehensive guides, tutorials, and solutions.</p>
                      <span className="text-primary font-medium text-sm inline-flex items-center group-hover:underline">
                        Browse Articles <ArrowRight className="ml-1 h-4 w-4" />
                      </span>
                    </div>
                  </div>
                </Link>

                <Link href="/contact" className="group">
                  <div className="p-6 border rounded-lg shadow-sm bg-card hover:shadow-md transition-all">
                    <div className="flex flex-col items-center text-center">
                      <div className="p-3 mb-4 rounded-full bg-primary/10 text-primary">
                        <Phone className="h-6 w-6" />
                      </div>
                      <h3 className="font-semibold mb-2">Contact Us</h3>
                      <p className="text-sm text-muted-foreground mb-4">Reach out to our team via phone, email, or live chat.</p>
                      <span className="text-primary font-medium text-sm inline-flex items-center group-hover:underline">
                        Get in Touch <ArrowRight className="ml-1 h-4 w-4" />
                      </span>
                    </div>
                  </div>
                </Link>
              </div>
            </div>

            {/* FAQ Section */}
            <div className="mt-16">
              <h2 className="text-2xl font-bold text-center mb-6">Frequently Asked Questions</h2>
              <p className="text-center text-muted-foreground mb-10">Find answers to common questions about our support system</p>
              
              <div className="space-y-4">
                <div className="border rounded-lg p-6 bg-card">
                  <h3 className="font-semibold text-lg mb-2">How do I find my ticket number?</h3>
                  <p className="text-muted-foreground">
                    Your ticket number was sent to the email address you provided when creating the ticket. 
                    It follows the format TKT-XXXXXXXXX. You can also find it in your account dashboard under 
                    "My Support Tickets" if you submitted the ticket while logged in.
                  </p>
                </div>
                
                <div className="border rounded-lg p-6 bg-card">
                  <h3 className="font-semibold text-lg mb-2">How long does it take to get a response?</h3>
                  <p className="text-muted-foreground">
                    Our response times vary based on ticket priority. Critical issues are typically addressed within 
                    2-4 hours, high priority within 8 hours, medium priority within 24 hours, and low priority within 
                    48 hours. These times may vary during weekends and holidays.
                  </p>
                </div>
                
                <div className="border rounded-lg p-6 bg-card">
                  <h3 className="font-semibold text-lg mb-2">Can I update my ticket after submission?</h3>
                  <p className="text-muted-foreground">
                    Yes, you can add comments and additional information to your ticket at any time by entering 
                    your ticket number on this page. If you need to change the priority or category, please add a 
                    comment requesting the change and our support team will assist you.
                  </p>
                </div>
                
                <div className="border rounded-lg p-6 bg-card">
                  <h3 className="font-semibold text-lg mb-2">What do the different ticket statuses mean?</h3>
                  <p className="text-muted-foreground">
                    <span className="font-medium">Open</span>: Your ticket has been received but not yet assigned.<br />
                    <span className="font-medium">In Progress</span>: A support agent is actively working on your ticket.<br />
                    <span className="font-medium">Waiting for Customer</span>: We need additional information from you.<br />
                    <span className="font-medium">Resolved</span>: The issue has been fixed but the ticket remains open for feedback.<br />
                    <span className="font-medium">Closed</span>: The ticket has been resolved and closed.
                  </p>
                </div>
              </div>
              
              <div className="mt-8 text-center">
                <Link 
                  href="/faq" 
                  className="inline-flex items-center text-primary hover:underline font-medium"
                >
                  View all FAQs <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </div>
            
            {/* Help Center CTA */}
            <div className="mt-16 p-8 border rounded-lg bg-primary/5 text-center">
              <h2 className="text-2xl font-bold mb-4">Need More Help?</h2>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Our comprehensive help center provides detailed guides, video tutorials, and 
                solutions to common problems. Explore our knowledge base to find quick answers.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link 
                  href="/knowledge-base" 
                  className="inline-flex items-center justify-center px-6 py-3 rounded-md bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
                >
                  <Book className="mr-2 h-5 w-5" />
                  Browse Knowledge Base
                </Link>
                <Link 
                  href="/contact" 
                  className="inline-flex items-center justify-center px-6 py-3 rounded-md bg-secondary text-secondary-foreground hover:bg-secondary/90 transition-colors"
                >
                  <Mail className="mr-2 h-5 w-5" />
                  Contact Support Team
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
} 