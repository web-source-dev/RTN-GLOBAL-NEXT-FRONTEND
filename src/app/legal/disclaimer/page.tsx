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
  AlertTriangle,
  Shield,
  Scale
} from "lucide-react";

export default function DisclaimerPage() {
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
            <span className="text-foreground font-medium">Disclaimer</span>
          </div>
          
          <div className="max-w-4xl">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Disclaimer</h1>
            <p className="text-xl text-muted-foreground mb-6">
              Important information regarding the use of our website and services
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
                  <a href="#website-information" className="block text-muted-foreground hover:text-foreground transition-colors">Website Information</a>
                  <a href="#professional-advice" className="block text-muted-foreground hover:text-foreground transition-colors">Professional Advice</a>
                  <a href="#accuracy" className="block text-muted-foreground hover:text-foreground transition-colors">Accuracy of Information</a>
                  <a href="#third-party-links" className="block text-muted-foreground hover:text-foreground transition-colors">Third-Party Links</a>
                  <a href="#testimonials" className="block text-muted-foreground hover:text-foreground transition-colors">Testimonials & Reviews</a>
                  <a href="#forward-looking" className="block text-muted-foreground hover:text-foreground transition-colors">Forward-Looking Statements</a>
                  <a href="#intellectual-property" className="block text-muted-foreground hover:text-foreground transition-colors">Intellectual Property</a>
                  <a href="#jurisdiction" className="block text-muted-foreground hover:text-foreground transition-colors">Jurisdiction</a>
                  <a href="#contact" className="block text-muted-foreground hover:text-foreground transition-colors">Contact Us</a>
                </nav>
              </div>
              
              <Card className="mt-6 p-5 bg-primary-foreground/5">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center">
                    <AlertTriangle className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="font-medium">Questions?</h3>
                </div>
                <p className="text-sm text-muted-foreground mb-4">If you have questions about this disclaimer, please contact our legal team.</p>
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
                    This disclaimer ("Disclaimer") applies to the website rtnglobal.site, operated by RTN Global Ltd. ("we", "us", or &quot;our&quot;). By accessing and using our website and services, you acknowledge that you have read, understood, and agree to be bound by this Disclaimer.
                  </p>
                  <p>
                    We reserve the right to change this Disclaimer at any time without notice. Your continued use of our website after any changes indicates your acceptance of the modified Disclaimer.
                  </p>
                </section>
                
                <section id="website-information">
                  <h2>Website Information</h2>
                  <p>
                    The information provided on our website is for general informational purposes only. We make no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, suitability, or availability of the information, products, services, or related graphics contained on our website for any purpose.
                  </p>
                  <div className="bg-muted/30 p-4 rounded-lg my-4 flex items-start gap-3">
                    <AlertTriangle className="h-5 w-5 text-amber-500 flex-shrink-0 mt-0.5" />
                    <p className="text-sm m-0">Any reliance you place on such information is therefore strictly at your own risk. In no event will we be liable for any loss or damage including, without limitation, indirect or consequential loss or damage, or any loss or damage whatsoever arising from loss of data or profits arising out of, or in connection with, the use of this website.</p>
                  </div>
                </section>
                
                <section id="professional-advice">
                  <h2>No Professional Advice</h2>
                  <p>
                    The content on our website is provided for informational purposes only and should not be construed as professional advice of any kind. Nothing contained on this website should be construed as legal, financial, commercial, or technical advice.
                  </p>
                  <p>
                    Before taking any actions based on information found on our website that might affect your personal, business, or financial decisions, you should consult with a qualified professional advisor. We do not recommend or endorse any specific tests, providers, products, procedures, opinions, or other information that may be mentioned on our website.
                  </p>
                </section>
                
                <section id="accuracy">
                  <h2>Accuracy of Information</h2>
                  <p>
                    We strive to ensure that the information on our website is accurate and up-to-date. However, we cannot guarantee that all information is complete, correct, or current at all times. The information on our website may contain typographical errors, inaccuracies, or omissions. We reserve the right to correct any errors, inaccuracies, or omissions and to change or update information at any time without prior notice.
                  </p>
                  <p>
                    We make no warranties or representations regarding the quality, accuracy, merchantability, or fitness for purpose of any content, products, or services available through our website.
                  </p>
                </section>
                
                <section id="third-party-links">
                  <h2>Third-Party Links</h2>
                  <p>
                    Our website may contain links to third-party websites or services that are not owned or controlled by RTN Global Ltd. We have no control over, and assume no responsibility for, the content, privacy policies, or practices of any third-party websites or services.
                  </p>
                  <p>
                    We do not warrant the offerings of any of these third parties or their websites. You acknowledge and agree that we shall not be responsible or liable, directly or indirectly, for any damage or loss caused or alleged to be caused by or in connection with the use of or reliance on any such content, goods, or services available on or through any such third-party websites or services.
                  </p>
                  <p>
                    We strongly advise you to read the terms and conditions and privacy policies of any third-party websites or services that you visit.
                  </p>
                </section>
                
                <section id="testimonials">
                  <h2>Testimonials and Reviews</h2>
                  <p>
                    Testimonials and reviews displayed on our website are provided by actual clients and users of our products and services. They are individual experiences, reflecting real-life experiences of those who have used our products and services. However, they are individual results and results may vary.
                  </p>
                  <p>
                    We do not claim that they are typical results that consumers will generally achieve. The testimonials are not necessarily representative of all of those who will use our products and services, and RTN Global Ltd. is not responsible for the opinions or comments posted on our website.
                  </p>
                  <p>
                    RTN Global Ltd. is not a forum for testimonials; however, we provide testimonials as a means for customers to share their experiences with one another. RTN Global Ltd. does not independently verify the claims made in testimonials and does not guarantee their accuracy.
                  </p>
                </section>
                
                <section id="forward-looking">
                  <h2>Forward-Looking Statements</h2>
                  <p>
                    Our website may contain forward-looking statements that are based on our current expectations, estimates, forecasts, and projections about our business, industry, and future events. These statements are not guarantees of future performance and involve risks, uncertainties, and assumptions that are difficult to predict.
                  </p>
                  <p>
                    Therefore, actual outcomes and results may differ materially from what is expressed or forecasted in such forward-looking statements. You should not place undue reliance on these forward-looking statements, which apply only as of the date they were made.
                  </p>
                </section>
                
                <section id="intellectual-property">
                  <h2>Intellectual Property</h2>
                  <p>
                    All content on this website, including but not limited to text, graphics, logos, button icons, images, audio clips, digital downloads, data compilations, and software, is the property of RTN Global Ltd. or its content suppliers and is protected by international copyright, trademark, and other intellectual property laws.
                  </p>
                  <p>
                    The compilation of all content on this site is the exclusive property of RTN Global Ltd. and is protected by international copyright laws. All software used on this site is the property of RTN Global Ltd. or its software suppliers and is protected by international copyright laws.
                  </p>
                  <p>
                    The reproduction, modification, distribution, transmission, republication, display, or performance of the content on this site is strictly prohibited without the express written consent of RTN Global Ltd.
                  </p>
                </section>
                
                <section id="jurisdiction">
                  <h2>Jurisdiction and Applicable Law</h2>
                  <p>
                    This website is created and controlled by RTN Global Ltd. in the United Kingdom. The laws of the United Kingdom will govern these disclaimers, terms, and conditions, without giving effect to any principles of conflicts of laws.
                  </p>
                  <p>
                    We do not warrant that the materials on this website are appropriate or available for use in other locations. If you access this website from other locations, you do so at your own initiative and are responsible for compliance with local laws.
                  </p>
                  <p>
                    If any provision of this Disclaimer is found to be invalid by any court having competent jurisdiction, the invalidity of such provision shall not affect the validity of the remaining provisions of this Disclaimer, which shall remain in full force and effect.
                  </p>
                </section>
                
                <section id="contact">
                  <h2>Contact Us</h2>
                  <p>
                    If you have any questions about this Disclaimer, please contact us at:
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