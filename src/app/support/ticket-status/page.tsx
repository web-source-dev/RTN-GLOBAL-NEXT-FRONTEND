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