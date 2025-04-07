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
  Scale, 
  Shield,
  RefreshCw
} from "lucide-react";

export default function TermsConditionsPage() {
  const lastUpdated = "November 15, 2023";
  const effectiveDate = "December 1, 2023";
  
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
            <span className="text-foreground font-medium">Terms & Conditions</span>
          </div>
          
          <div className="max-w-4xl">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Terms & Conditions</h1>
            <p className="text-xl text-muted-foreground mb-6">
              The legal agreement between you and RTN Global
            </p>
            
            <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-1.5">
                <CalendarDays className="h-4 w-4" />
                <span>Last updated: {lastUpdated}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <RefreshCw className="h-4 w-4" />
                <span>Effective: {effectiveDate}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Clock className="h-4 w-4" />
                <span>15 min read</span>
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
                  <a href="#account" className="block text-muted-foreground hover:text-foreground transition-colors">Account Registration</a>
                  <a href="#services" className="block text-muted-foreground hover:text-foreground transition-colors">Services Description</a>
                  <a href="#payment-terms" className="block text-muted-foreground hover:text-foreground transition-colors">Payment Terms</a>
                  <a href="#intellectual-property" className="block text-muted-foreground hover:text-foreground transition-colors">Intellectual Property</a>
                  <a href="#user-responsibilities" className="block text-muted-foreground hover:text-foreground transition-colors">User Responsibilities</a>
                  <a href="#prohibited-activities" className="block text-muted-foreground hover:text-foreground transition-colors">Prohibited Activities</a>
                  <a href="#termination" className="block text-muted-foreground hover:text-foreground transition-colors">Termination</a>
                  <a href="#disclaimer" className="block text-muted-foreground hover:text-foreground transition-colors">Disclaimer</a>
                  <a href="#limitation-liability" className="block text-muted-foreground hover:text-foreground transition-colors">Limitation of Liability</a>
                  <a href="#indemnification" className="block text-muted-foreground hover:text-foreground transition-colors">Indemnification</a>
                  <a href="#governing-law" className="block text-muted-foreground hover:text-foreground transition-colors">Governing Law</a>
                  <a href="#changes" className="block text-muted-foreground hover:text-foreground transition-colors">Changes to Terms</a>
                  <a href="#contact" className="block text-muted-foreground hover:text-foreground transition-colors">Contact Us</a>
                </nav>
              </div>
              
              <Card className="mt-6 p-5 bg-primary-foreground/5">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center">
                    <Scale className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="font-medium">Legal Assistance</h3>
                </div>
                <p className="text-sm text-muted-foreground mb-4">If you have any questions about our terms, please contact our legal team.</p>
                <Button asChild variant="default" size="sm" className="w-full">
                  <Link href="/contact">Contact Us</Link>
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
                    Welcome to RTN Global. These Terms and Conditions (&quot;Terms&quot;) govern your use of our website, services, and products. By accessing or using RTN Global services, you agree to be bound by these Terms. If you disagree with any part of the Terms, you may not access the service.
                  </p>
                  <p>
                    These Terms constitute a legally binding agreement between you and RTN Global Ltd. (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;).
                  </p>
                </section>
                
                <section id="account">
                  <h2>Account Registration and Security</h2>
                  <p>
                    To access certain features of our services, you may be required to register for an account. You agree to provide accurate, current, and complete information during the registration process and to update such information to keep it accurate, current, and complete.
                  </p>
                  <p>
                    You are responsible for:
                  </p>
                  <ul>
                    <li>Maintaining the confidentiality of your account information, including your password</li>
                    <li>All activities that occur under your account</li>
                    <li>Notifying us immediately of any unauthorized use of your account or any other breach of security</li>
                  </ul>
                  <p>
                    We reserve the right to disable any user account at any time in our sole discretion for any or no reason, including if, in our opinion, you have violated any provision of these Terms.
                  </p>
                </section>
                
                <section id="services">
                  <h2>Services Description</h2>
                  <p>
                    RTN Global provides various digital services, including but not limited to web development, digital transformation, consulting, and IT solutions. We reserve the right to modify, suspend, or discontinue any part of our services at any time without notice or liability.
                  </p>
                  <p>
                    Service features, specifications, and availability may change over time. We do not guarantee that any particular feature or aspect of the services will always be available.
                  </p>
                </section>
                
                <section id="payment-terms">
                  <h2>Payment Terms</h2>
                  <p>
                    Certain services may require payment. By subscribing to paid services, you agree to pay all fees in accordance with the pricing and payment terms presented to you.
                  </p>
                  <ul>
                    <li><strong>Billing:</strong> We bill in advance for subscription services. Payment obligations are non-cancelable, and fees paid are non-refundable except as expressly provided in our <Link href="/legal/refund-policy" className="text-primary hover:underline">Refund Policy</Link>.</li>
                    <li><strong>Auto-Renewal:</strong> Subscriptions automatically renew unless canceled at least 30 days before the renewal date.</li>
                    <li><strong>Taxes:</strong> Prices displayed do not include sales tax or VAT. Applicable taxes will be added to the final amount.</li>
                    <li><strong>Price Changes:</strong> We may change our prices at any time. We will provide notice of any price change before it takes effect.</li>
                  </ul>
                </section>
                
                <section id="intellectual-property">
                  <h2>Intellectual Property Rights</h2>
                  <p>
                    Our services and all content and materials made available through the services, including but not limited to text, graphics, logos, images, software, and code, are owned by RTN Global or our licensors and are protected by copyright, trademark, and other intellectual property laws.
                  </p>
                  <p>
                    You are granted a limited, non-exclusive, non-transferable license to access and use our services for your personal or internal business purposes. This license does not include:
                  </p>
                  <ul>
                    <li>Modifying or copying our materials</li>
                    <li>Using the materials for any commercial purpose</li>
                    <li>Attempting to decompile or reverse engineer any software contained on RTN Global&apos;s website</li>
                    <li>Removing any copyright or other proprietary notations</li>
                    <li>Transferring the materials to another person or &quot;mirroring&quot; the materials on any other server</li>
                  </ul>
                  <p>
                    This license shall automatically terminate if you violate any of these restrictions and may be terminated by RTN Global at any time.
                  </p>
                </section>
                
                <section id="user-responsibilities">
                  <h2>User Responsibilities and Conduct</h2>
                  <p>
                    As a user of our services, you are responsible for your conduct and any content that you submit, post, or display through the service. You must comply with all applicable laws and regulations.
                  </p>
                  <p>
                    You agree that you will:
                  </p>
                  <ul>
                    <li>Use the services in a manner consistent with these Terms</li>
                    <li>Respect the intellectual property rights of others</li>
                    <li>Maintain accurate and up-to-date account information</li>
                    <li>Use commercially reasonable efforts to prevent unauthorized access to or use of the services</li>
                    <li>Notify us promptly of any unauthorized access or security breach</li>
                  </ul>
                </section>
                
                <section id="prohibited-activities">
                  <h2>Prohibited Activities</h2>
                  <p>
                    You may not engage in any of the following activities:
                  </p>
                  <ul>
                    <li>Violating laws or regulations</li>
                    <li>Infringing on the intellectual property rights of others</li>
                    <li>Transmitting viruses, malware, or other harmful code</li>
                    <li>Interfering with or disrupting the integrity or performance of the services</li>
                    <li>Attempting to gain unauthorized access to the services or related systems</li>
                    <li>Collecting or harvesting user data without consent</li>
                    <li>Using the services for any illegal or unauthorized purpose</li>
                    <li>Engaging in any activity that could damage, disable, or impair the functionality of our services</li>
                  </ul>
                </section>
                
                <section id="termination">
                  <h2>Termination</h2>
                  <p>
                    We may terminate or suspend your account and access to our services immediately, without prior notice or liability, for any reason, including but not limited to a breach of these Terms.
                  </p>
                  <p>
                    Upon termination, your right to use the services will immediately cease. All provisions of these Terms which by their nature should survive termination shall survive, including but not limited to ownership provisions, warranty disclaimers, indemnity, and limitations of liability.
                  </p>
                </section>
                
                <section id="disclaimer">
                  <h2>Disclaimer of Warranties</h2>
                  <p>
                    THE SERVICES ARE PROVIDED &quot;AS IS&quot; AND &quot;AS AVAILABLE&quot; WITHOUT ANY WARRANTY OF ANY KIND, EXPRESS OR IMPLIED. TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, RTN GLOBAL EXPLICITLY DISCLAIMS ALL WARRANTIES, INCLUDING ANY IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT.
                  </p>
                  <p>
                    RTN Global does not warrant that the services will be uninterrupted, timely, secure, or error-free, or that any defects will be corrected. RTN Global does not warrant or make any representations regarding the use or the results of the use of the services in terms of their correctness, accuracy, reliability, or otherwise.
                  </p>
                </section>
                
                <section id="limitation-liability">
                  <h2>Limitation of Liability</h2>
                  <p>
                    TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, IN NO EVENT SHALL RTN GLOBAL, ITS DIRECTORS, EMPLOYEES, PARTNERS, AGENTS, SUPPLIERS, OR AFFILIATES BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING WITHOUT LIMITATION, LOSS OF PROFITS, DATA, USE, GOODWILL, OR OTHER INTANGIBLE LOSSES, RESULTING FROM:
                  </p>
                  <ul>
                    <li>YOUR ACCESS TO OR USE OF OR INABILITY TO ACCESS OR USE THE SERVICES;</li>
                    <li>ANY CONDUCT OR CONTENT OF ANY THIRD PARTY ON THE SERVICES;</li>
                    <li>ANY CONTENT OBTAINED FROM THE SERVICES; AND</li>
                    <li>UNAUTHORIZED ACCESS, USE, OR ALTERATION OF YOUR TRANSMISSIONS OR CONTENT</li>
                  </ul>
                  <p>
                    WHETHER BASED ON WARRANTY, CONTRACT, TORT (INCLUDING NEGLIGENCE), OR ANY OTHER LEGAL THEORY, WHETHER OR NOT WE HAVE BEEN INFORMED OF THE POSSIBILITY OF SUCH DAMAGE, AND EVEN IF A REMEDY SET FORTH HEREIN IS FOUND TO HAVE FAILED OF ITS ESSENTIAL PURPOSE.
                  </p>
                </section>
                
                <section id="indemnification">
                  <h2>Indemnification</h2>
                  <p>
                    You agree to defend, indemnify, and hold harmless RTN Global and its licensees and licensors, and their employees, contractors, agents, officers, and directors, from and against any and all claims, damages, obligations, losses, liabilities, costs or debt, and expenses (including but not limited to attorney&apos;s fees), resulting from or arising out of:
                  </p>
                  <ul>
                    <li>Your use and access of the services</li>
                    <li>Your violation of any term of these Terms</li>
                    <li>Your violation of any third-party right, including without limitation any copyright, property, or privacy right</li>
                    <li>Any claim that your content caused damage to a third party</li>
                  </ul>
                  <p>
                    This defense and indemnification obligation will survive these Terms and your use of the services.
                  </p>
                </section>
                
                <section id="governing-law">
                  <h2>Governing Law and Jurisdiction</h2>
                  <p>
                    These Terms shall be governed by and construed in accordance with the laws of the United Kingdom, without regard to its conflict of law provisions.
                  </p>
                  <p>
                    Our failure to enforce any right or provision of these Terms will not be considered a waiver of those rights. If any provision of these Terms is held to be invalid or unenforceable by a court, the remaining provisions of these Terms will remain in effect.
                  </p>
                </section>
                
                <section id="changes">
                  <h2>Changes to Terms</h2>
                  <p>
                    We reserve the right, at our sole discretion, to modify or replace these Terms at any time. We will provide notice of any changes by posting the new Terms on this page and updating the &quot;Last Updated&quot; date.
                  </p>
                  <p>
                    Your continued use of the service after any such changes constitutes your acceptance of the new Terms. Please review these Terms periodically for changes. If you do not agree to any of this Terms or any changes to these Terms, do not use, access, or continue to access the service.
                  </p>
                </section>
                
                <section id="contact">
                  <h2>Contact Us</h2>
                  <p>
                    If you have any questions about these Terms, please contact us at:
                  </p>
                  <div className="bg-muted/30 p-4 rounded-lg">
                    <p className="mb-1"><strong>RTN Global Ltd.</strong></p>
                    <p className="mb-1">Attn: Legal Department</p>
                    <p className="mb-1">Email: legal@rtnglobal.site</p>
                    <p>Address: 123 Business Street, Suite 100, London, UK</p>
                  </div>
                </section>
              </div>
            </Card>
            
            {/* Document Actions */}
            <div className="flex justify-between items-center mt-8">
              <div className="text-sm text-muted-foreground">
                Last updated: {lastUpdated} | Effective: {effectiveDate}
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
                
                <Link href="/legal/refund-policy" className="group">
                  <Card className="p-5 h-full hover:border-primary/50 transition-colors">
                    <div className="flex gap-3 items-start">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <RefreshCw className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-medium group-hover:text-primary transition-colors">Refund Policy</h4>
                        <p className="text-sm text-muted-foreground">Our policy on refunds and cancellations</p>
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