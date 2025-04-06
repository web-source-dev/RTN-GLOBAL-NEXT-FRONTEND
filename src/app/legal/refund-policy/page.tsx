"use client";

import Link from "next/link";
import { Layout } from "@/components/layout/layout";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  ChevronRight, 
  Clock, 
  CalendarDays, 
  FileText, 
  CreditCard,
  Shield,
  Scale
} from "lucide-react";

export default function RefundPolicyPage() {
  const lastUpdated = "November 15, 2023";
  
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
            <Link href="/legal" className="text-muted-foreground hover:text-foreground transition-colors">
              Legal
            </Link>
            <ChevronRight className="h-4 w-4 text-muted-foreground" />
            <span className="text-foreground font-medium">Refund Policy</span>
          </div>
          
          <div className="max-w-4xl">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Refund Policy</h1>
            <p className="text-xl text-muted-foreground mb-6">
              Our commitment to fair and transparent refund practices
            </p>
            
            <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-1.5">
                <CalendarDays className="h-4 w-4" />
                <span>Last updated: {lastUpdated}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Clock className="h-4 w-4" />
                <span>5 min read</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Content Section */}
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col lg:flex-row gap-10">
          {/* Table of Contents - Desktop */}
          <div className="hidden lg:block w-64 flex-shrink-0">
            <div className="sticky top-8">
              <div className="bg-muted/40 p-5 rounded-lg border border-border">
                <h2 className="font-semibold mb-4">On this page</h2>
                <nav className="space-y-2 text-sm">
                  <a href="#introduction" className="block text-muted-foreground hover:text-foreground transition-colors">Introduction</a>
                  <a href="#subscription-services" className="block text-muted-foreground hover:text-foreground transition-colors">Subscription Services</a>
                  <a href="#one-time-services" className="block text-muted-foreground hover:text-foreground transition-colors">One-Time Services</a>
                  <a href="#eligible-refunds" className="block text-muted-foreground hover:text-foreground transition-colors">Eligible Refund Requests</a>
                  <a href="#ineligible-refunds" className="block text-muted-foreground hover:text-foreground transition-colors">Ineligible Refund Requests</a>
                  <a href="#refund-process" className="block text-muted-foreground hover:text-foreground transition-colors">Refund Process</a>
                  <a href="#payment-method" className="block text-muted-foreground hover:text-foreground transition-colors">Payment Method</a>
                  <a href="#cancellations" className="block text-muted-foreground hover:text-foreground transition-colors">Cancellations</a>
                  <a href="#exceptions" className="block text-muted-foreground hover:text-foreground transition-colors">Exceptions</a>
                  <a href="#contact" className="block text-muted-foreground hover:text-foreground transition-colors">Contact Us</a>
                </nav>
              </div>
              
              <Card className="mt-6 p-5 bg-primary-foreground/5">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center">
                    <CreditCard className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="font-medium">Billing Support</h3>
                </div>
                <p className="text-sm text-muted-foreground mb-4">Need assistance with a refund or have billing questions?</p>
                <Button asChild variant="default" size="sm" className="w-full">
                  <Link href="/support/billing">Get Billing Help</Link>
                </Button>
              </Card>
            </div>
          </div>
        
          {/* Main Content */}
          <div className="flex-1 max-w-3xl">
            <Card className="p-6 md:p-8 shadow-sm">
              <div className="prose prose-lg dark:prose-invert max-w-none">
                <section id="introduction">
                  <h2>Introduction</h2>
                  <p>
                    At RTN Global, we strive to provide high-quality services and ensure customer satisfaction. We understand that there may be circumstances where you might need to request a refund. This Refund Policy outlines the conditions under which we issue refunds and explains the refund process.
                  </p>
                  <p>
                    By using our services, you acknowledge that you have read and agree to this Refund Policy. Please note that this policy may be updated from time to time, and the most current version will be posted on our website.
                  </p>
                </section>
                
                <section id="subscription-services">
                  <h2>Subscription Services</h2>
                  <p>
                    For subscription-based services, the following refund terms apply:
                  </p>
                  <ul>
                    <li><strong>Monthly Subscriptions:</strong> Monthly subscriptions are non-refundable once the billing cycle has begun. You may cancel your subscription at any time, but no partial refunds will be issued for the current billing period.</li>
                    <li><strong>Annual Subscriptions:</strong> For annual subscriptions, we offer a 14-day money-back guarantee from the date of purchase. If you cancel within this period, you will receive a full refund. After the 14-day period, annual subscriptions are non-refundable for the remainder of the term.</li>
                    <li><strong>Unused Subscription Time:</strong> We do not provide refunds for unused subscription periods if you decide to cancel before the end of your billing cycle.</li>
                  </ul>
                </section>
                
                <section id="one-time-services">
                  <h2>One-Time Services</h2>
                  <p>
                    For one-time services, such as consulting sessions, custom development projects, or digital product purchases, the following refund terms apply:
                  </p>
                  <ul>
                    <li><strong>Digital Products:</strong> Digital products, including software licenses, templates, and digital downloads, are eligible for a refund within 14 days of purchase if they do not function as described. No refunds will be issued after the product has been successfully downloaded or accessed, unless there are significant technical issues that cannot be resolved.</li>
                    <li><strong>Consulting Services:</strong> Consulting services are eligible for a refund if canceled at least 48 hours before the scheduled session. No refunds will be provided for cancellations made less than 48 hours before the scheduled time or for no-shows.</li>
                    <li><strong>Custom Development Projects:</strong> For custom development projects, refund eligibility depends on the stage of the project and is outlined in your specific service agreement. Generally, deposits are non-refundable once work has begun.</li>
                  </ul>
                </section>
                
                <section id="eligible-refunds">
                  <h2>Eligible Refund Requests</h2>
                  <p>
                    We may issue refunds in the following circumstances:
                  </p>
                  <ul>
                    <li>Services that do not function or perform as described</li>
                    <li>Duplicate charges or billing errors</li>
                    <li>Service unavailability or significant disruption of service that we are unable to resolve</li>
                    <li>Cancellation within the applicable money-back guarantee period</li>
                    <li>Services not yet rendered or delivered</li>
                  </ul>
                </section>
                
                <section id="ineligible-refunds">
                  <h2>Ineligible Refund Requests</h2>
                  <p>
                    Refunds will generally not be issued in the following circumstances:
                  </p>
                  <ul>
                    <li>After the applicable refund period has expired</li>
                    <li>For services that have been fully delivered and completed</li>
                    <li>When service issues are due to factors outside our control</li>
                    <li>For subscriptions canceled after the current billing cycle has begun</li>
                    <li>If the service was used in violation of our Terms and Conditions</li>
                    <li>For any portion of a service that has already been consumed or delivered</li>
                  </ul>
                </section>
                
                <section id="refund-process">
                  <h2>Refund Process</h2>
                  <p>
                    To request a refund, please follow these steps:
                  </p>
                  <ol>
                    <li>Submit a refund request through our <Link href="/support/billing" className="text-primary hover:underline">billing support portal</Link> or by contacting our customer service team at billing@rtnglobal.site</li>
                    <li>Provide your order number, the service or product you purchased, and the reason for your refund request</li>
                    <li>Our team will review your request and respond within 3-5 business days</li>
                    <li>If your refund is approved, the credit will be applied to your original method of payment within 5-10 business days, depending on your payment provider&apos;s processing times</li>
                  </ol>
                  <p>
                    Please note that we may request additional information to verify your identity or to better understand the reason for your refund request.
                  </p>
                </section>
                
                <section id="payment-method">
                  <h2>Payment Method</h2>
                  <p>
                    Refunds will be issued using the same payment method used for the original purchase. For example:
                  </p>
                  <ul>
                    <li>Credit card payments will be refunded to the same credit card</li>
                    <li>PayPal payments will be refunded to the same PayPal account</li>
                    <li>Bank transfers will be refunded to the originating bank account</li>
                  </ul>
                  <p>
                    If the original payment method is no longer available or valid, we will work with you to arrange an alternative refund method.
                  </p>
                </section>
                
                <section id="cancellations">
                  <h2>Cancellations</h2>
                  <p>
                    You may cancel your subscription or service at any time by:
                  </p>
                  <ul>
                    <li>Logging into your account and using the cancellation option in your account settings</li>
                    <li>Contacting our customer service team at support@rtnglobal.site</li>
                    <li>Submitting a cancellation request through our <Link href="/support" className="text-primary hover:underline">support portal</Link></li>
                  </ul>
                  <p>
                    Please note that canceling your service does not automatically entitle you to a refund. Refund eligibility is determined based on the criteria outlined in this policy.
                  </p>
                  <p>
                    For annual subscriptions, cancellation will prevent automatic renewal at the end of your current subscription period, but will not terminate your current subscription or entitle you to a refund for the remainder of your subscription period.
                  </p>
                </section>
                
                <section id="exceptions">
                  <h2>Exceptions and Special Circumstances</h2>
                  <p>
                    We understand that special circumstances may arise. In cases of hardship or exceptional situations, we may consider refund requests that fall outside of our standard policy on a case-by-case basis.
                  </p>
                  <p>
                    For enterprise clients with custom agreements, the refund terms specified in your service contract will take precedence over this general refund policy.
                  </p>
                  <p>
                    In the event of a significant service disruption or error on our part, we may proactively issue refunds or service credits without requiring a formal request.
                  </p>
                </section>
                
                <section id="contact">
                  <h2>Contact Us</h2>
                  <p>
                    If you have any questions about this Refund Policy or need assistance with a refund request, please contact us at:
                  </p>
                  <div className="bg-muted/30 p-4 rounded-lg">
                    <p className="mb-1"><strong>RTN Global Ltd.</strong></p>
                    <p className="mb-1">Attn: Billing Department</p>
                    <p className="mb-1">Email: billing@rtnglobal.site</p>
                    <p>Phone: +44 123 456 7890 (Monday-Friday, 9 AM - 5 PM GMT)</p>
                  </div>
                </section>
              </div>
            </Card>
            
            {/* Document Actions */}
            <div className="flex justify-between items-center mt-8">
              <div className="text-sm text-muted-foreground">
                Last updated: {lastUpdated}
              </div>
              <div className="flex gap-2">
                <Button variant="outline" size="sm" className="gap-2" onClick={() => window.print()}>
                  <FileText className="h-4 w-4" />
                  Print
                </Button>
              </div>
            </div>
            
            {/* Related Legal Documents */}
            <div className="mt-12">
              <h3 className="text-lg font-semibold mb-4">Related Legal Documents</h3>
              <div className="grid gap-4 sm:grid-cols-2">
                <Link href="/legal/terms-conditions" className="group">
                  <Card className="p-5 h-full hover:border-primary/50 transition-colors">
                    <div className="flex gap-3 items-start">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Scale className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-medium group-hover:text-primary transition-colors">Terms & Conditions</h4>
                        <p className="text-sm text-muted-foreground">The legal agreement between you and us</p>
                      </div>
                    </div>
                  </Card>
                </Link>
                
                <Link href="/legal/privacy-policy" className="group">
                  <Card className="p-5 h-full hover:border-primary/50 transition-colors">
                    <div className="flex gap-3 items-start">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Shield className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-medium group-hover:text-primary transition-colors">Privacy Policy</h4>
                        <p className="text-sm text-muted-foreground">How we collect and process your data</p>
                      </div>
                    </div>
                  </Card>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
} 