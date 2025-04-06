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
  Shield,
  Scale,
  Cookie
} from "lucide-react";

export default function PrivacyPolicyPage() {
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
            <span className="text-foreground font-medium">Privacy Policy</span>
          </div>
          
          <div className="max-w-4xl">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Privacy Policy</h1>
            <p className="text-xl text-muted-foreground mb-6">
              How we collect, use, and protect your personal information
            </p>
            
            <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-1.5">
                <CalendarDays className="h-4 w-4" />
                <span>Last updated: {lastUpdated}</span>
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
                  <a href="#information-collected" className="block text-muted-foreground hover:text-foreground transition-colors">Information We Collect</a>
                  <a href="#use-of-information" className="block text-muted-foreground hover:text-foreground transition-colors">How We Use Your Information</a>
                  <a href="#information-sharing" className="block text-muted-foreground hover:text-foreground transition-colors">Information Sharing and Disclosure</a>
                  <a href="#your-rights" className="block text-muted-foreground hover:text-foreground transition-colors">Your Rights and Choices</a>
                  <a href="#data-security" className="block text-muted-foreground hover:text-foreground transition-colors">Data Security</a>
                  <a href="#international-transfers" className="block text-muted-foreground hover:text-foreground transition-colors">International Data Transfers</a>
                  <a href="#retention" className="block text-muted-foreground hover:text-foreground transition-colors">Data Retention</a>
                  <a href="#children" className="block text-muted-foreground hover:text-foreground transition-colors">Children&apos;s Privacy</a>
                  <a href="#cookies" className="block text-muted-foreground hover:text-foreground transition-colors">Cookies and Tracking Technologies</a>
                  <a href="#third-party-links" className="block text-muted-foreground hover:text-foreground transition-colors">Third-Party Links</a>
                  <a href="#changes" className="block text-muted-foreground hover:text-foreground transition-colors">Changes to This Policy</a>
                  <a href="#contact" className="block text-muted-foreground hover:text-foreground transition-colors">Contact Us</a>
                </nav>
              </div>
              
              <Card className="mt-6 p-5 bg-primary-foreground/5">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center">
                    <Shield className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="font-medium">Privacy Questions?</h3>
                </div>
                <p className="text-sm text-muted-foreground mb-4">If you have questions about our privacy practices or your personal data, please contact us.</p>
                <Button asChild variant="default" size="sm" className="w-full">
                  <Link href="/contact">Contact Privacy Team</Link>
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
                    At RTN Global Ltd. ("RTN Global," "we," "us," or &quot;our&quot;), we respect your privacy and are committed to protecting your personal data. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website rtnglobal.site, use our services, or interact with us in any way.
                  </p>
                  <p>
                    Please read this Privacy Policy carefully to understand our practices regarding your personal data and how we will treat it. By accessing or using our services, you acknowledge that you have read and understand this Privacy Policy.
                  </p>
                </section>
                
                <section id="information-collected">
                  <h2>Information We Collect</h2>
                  <p>
                    We collect several types of information from and about users of our services, including:
                  </p>
                  
                  <h3>Personal Information You Provide</h3>
                  <p>
                    Personal information that you provide directly to us when you:
                  </p>
                  <ul>
                    <li><strong>Create an account:</strong> Name, email address, password, company name, job title</li>
                    <li><strong>Complete a form or request:</strong> Contact information, message content, business needs</li>
                    <li><strong>Purchase services:</strong> Billing address, payment information, transaction history</li>
                    <li><strong>Use our support services:</strong> Support tickets, communication history, call recordings (with consent)</li>
                    <li><strong>Participate in surveys or promotions:</strong> Survey responses, feedback, preferences</li>
                    <li><strong>Apply for a job:</strong> Resume/CV, employment history, qualifications, references</li>
                  </ul>
                  
                  <h3>Information Collected Automatically</h3>
                  <p>
                    We automatically collect certain information when you visit, use, or navigate our services:
                  </p>
                  <ul>
                    <li><strong>Usage data:</strong> Pages visited, time spent on pages, referring URLs, interaction data</li>
                    <li><strong>Device information:</strong> IP address, browser type and version, operating system, device type</li>
                    <li><strong>Location data:</strong> General location based on IP address</li>
                    <li><strong>Cookies and similar technologies:</strong> See our <Link href="/legal/cookie-policy" className="text-primary hover:underline">Cookie Policy</Link> for more details</li>
                  </ul>
                  
                  <h3>Information from Third Parties</h3>
                  <p>
                    We may receive information about you from third parties:
                  </p>
                  <ul>
                    <li><strong>Business partners:</strong> Referral information, project requirements</li>
                    <li><strong>Service providers:</strong> Payment processors, analytics providers, marketing partners</li>
                    <li><strong>Social media platforms:</strong> When you connect your social media accounts or interact with our social media presence</li>
                    <li><strong>Public sources:</strong> Publicly available data relevant to our business relationship</li>
                  </ul>
                </section>
                
                <section id="use-of-information">
                  <h2>How We Use Your Information</h2>
                  <p>
                    We use your information for various purposes, including:
                  </p>
                  <ul>
                    <li><strong>Providing our services:</strong> Setting up and maintaining your account, processing transactions, delivering the services you request</li>
                    <li><strong>Communication:</strong> Responding to inquiries, providing support, sending service notifications and updates</li>
                    <li><strong>Improvement and development:</strong> Enhancing our services, developing new features, analyzing usage patterns</li>
                    <li><strong>Marketing and promotion:</strong> Sending you relevant information about our services, events, and offers (subject to your preferences)</li>
                    <li><strong>Security and compliance:</strong> Protecting our services, detecting and preventing fraud, complying with legal obligations</li>
                    <li><strong>Personalization:</strong> Tailoring content and recommendations based on your preferences and interactions</li>
                  </ul>
                  <p>
                    We process your personal information based on one or more of the following legal bases:
                  </p>
                  <ul>
                    <li>To perform our contract with you</li>
                    <li>To comply with legal obligations</li>
                    <li>For our legitimate business interests</li>
                    <li>With your consent (where applicable)</li>
                  </ul>
                </section>
                
                <section id="information-sharing">
                  <h2>Information Sharing and Disclosure</h2>
                  <p>
                    We may share your information in the following circumstances:
                  </p>
                  <ul>
                    <li><strong>Service providers:</strong> With third-party vendors, consultants, and other service providers who perform services on our behalf</li>
                    <li><strong>Business transfers:</strong> In connection with a merger, acquisition, reorganization, or sale of assets</li>
                    <li><strong>Legal requirements:</strong> When required by law, regulation, legal process, or governmental request</li>
                    <li><strong>Protection of rights:</strong> To protect the rights, property, and safety of RTN Global, our users, or others</li>
                    <li><strong>With your consent:</strong> In other cases with your explicit consent</li>
                  </ul>
                  <p>
                    We do not sell your personal information to third parties for their own marketing purposes.
                  </p>
                </section>
                
                <section id="your-rights">
                  <h2>Your Rights and Choices</h2>
                  <p>
                    Depending on your location, you may have certain rights regarding your personal information:
                  </p>
                  <ul>
                    <li><strong>Access:</strong> You can request a copy of the personal information we hold about you</li>
                    <li><strong>Correction:</strong> You can request that we correct inaccurate or incomplete information</li>
                    <li><strong>Deletion:</strong> You can request that we delete your personal information in certain circumstances</li>
                    <li><strong>Restriction:</strong> You can request that we restrict processing of your data in certain circumstances</li>
                    <li><strong>Portability:</strong> You can request a copy of your data in a structured, commonly used, machine-readable format</li>
                    <li><strong>Objection:</strong> You can object to our processing of your data in certain circumstances</li>
                    <li><strong>Withdrawal of consent:</strong> You can withdraw consent at any time (where processing is based on consent)</li>
                  </ul>
                  <p>
                    To exercise these rights, please contact us using the information provided in the &quot;Contact Us&quot; section. We will respond to your request within the timeframe required by applicable law.
                  </p>
                  <p>
                    You can also control certain data collection through your browser settings, device settings, and by managing your cookie preferences as described in our <Link href="/legal/cookie-policy" className="text-primary hover:underline">Cookie Policy</Link>.
                  </p>
                </section>
                
                <section id="data-security">
                  <h2>Data Security</h2>
                  <p>
                    We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, accidental loss, alteration, or disclosure. These measures include encryption, access controls, regular security assessments, and staff training.
                  </p>
                  <p>
                    While we take reasonable steps to protect your information, no system is completely secure. We cannot guarantee the absolute security of your data transmitted over the internet or stored on our servers.
                  </p>
                  <p>
                    We have procedures to deal with suspected data breaches and will notify you and relevant regulators of breaches where legally required to do so.
                  </p>
                </section>
                
                <section id="international-transfers">
                  <h2>International Data Transfers</h2>
                  <p>
                    We are based in the United Kingdom, and your information may be processed and stored in the UK and other countries where our service providers maintain facilities. These countries may have data protection laws that differ from those in your country.
                  </p>
                  <p>
                    When we transfer personal information outside the UK, European Economic Area (EEA), or other regions with comprehensive data protection laws, we ensure adequate protection through appropriate safeguards, such as:
                  </p>
                  <ul>
                    <li>Standard contractual clauses approved by relevant authorities</li>
                    <li>Binding corporate rules for transfers within our corporate group</li>
                    <li>Derogations for specific situations (such as with your explicit consent)</li>
                  </ul>
                </section>
                
                <section id="retention">
                  <h2>Data Retention</h2>
                  <p>
                    We retain your personal information for as long as necessary to fulfill the purposes for which we collected it, including to satisfy legal, accounting, or reporting requirements.
                  </p>
                  <p>
                    To determine the appropriate retention period, we consider:
                  </p>
                  <ul>
                    <li>The amount, nature, and sensitivity of the personal information</li>
                    <li>The potential risk of harm from unauthorized use or disclosure</li>
                    <li>The purposes for which we process the data and whether we can achieve those purposes through other means</li>
                    <li>Applicable legal, regulatory, tax, accounting, or other requirements</li>
                  </ul>
                  <p>
                    When we no longer need your personal information, we will securely delete or anonymize it. In some circumstances, we may anonymize your information for research or statistical purposes, in which case we may use this information indefinitely without further notice to you.
                  </p>
                </section>
                
                <section id="children">
                  <h2>Children&apos;s Privacy</h2>
                  <p>
                    Our services are not directed to individuals under the age of 16, and we do not knowingly collect personal information from children. If you are a parent or guardian and believe that your child has provided us with personal information, please contact us. If we become aware that we have collected personal information from a child without verification of parental consent, we will take steps to remove that information from our servers.
                  </p>
                </section>
                
                <section id="cookies">
                  <h2>Cookies and Tracking Technologies</h2>
                  <p>
                    We use cookies and similar tracking technologies to collect and track information about your use of our services. Cookies are small text files that are stored on your device when you visit a website.
                  </p>
                  <p>
                    We use various types of cookies, including:
                  </p>
                  <ul>
                    <li><strong>Essential cookies:</strong> Required for the basic functionality of our services</li>
                    <li><strong>Analytical/performance cookies:</strong> Help us understand how visitors interact with our services</li>
                    <li><strong>Functionality cookies:</strong> Allow us to remember your preferences and settings</li>
                    <li><strong>Targeting cookies:</strong> Used to deliver relevant content and advertisements</li>
                  </ul>
                  <p>
                    For more detailed information about the cookies we use and how you can manage them, please see our <Link href="/legal/cookie-policy" className="text-primary hover:underline">Cookie Policy</Link>.
                  </p>
                </section>
                
                <section id="third-party-links">
                  <h2>Third-Party Links</h2>
                  <p>
                    Our services may contain links to third-party websites, plug-ins, and applications. Clicking on those links or enabling those connections may allow third parties to collect or share data about you. We do not control these third-party websites and are not responsible for their privacy statements. When you leave our website, we encourage you to read the privacy policy of every website you visit.
                  </p>
                </section>
                
                <section id="changes">
                  <h2>Changes to This Privacy Policy</h2>
                  <p>
                    We may update this Privacy Policy from time to time to reflect changes in our practices, technology, legal requirements, or other factors. We will post the updated Privacy Policy on our website with a revised &quot;Last Updated&quot; date.
                  </p>
                  <p>
                    We encourage you to review this Privacy Policy periodically to stay informed about our data practices. If we make material changes to how we treat your personal information, we will notify you through a notice on our website or by other appropriate means.
                  </p>
                  <p>
                    Your continued use of our services after we post any modifications to the Privacy Policy will constitute your acknowledgment of the modifications and your consent to abide and be bound by the modified Privacy Policy.
                  </p>
                </section>
                
                <section id="contact">
                  <h2>Contact Us</h2>
                  <p>
                    If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us at:
                  </p>
                  <div className="bg-muted/30 p-4 rounded-lg">
                    <p className="mb-1"><strong>RTN Global Ltd.</strong></p>
                    <p className="mb-1">Attn: Data Protection Officer</p>
                    <p className="mb-1">Email: privacy@rtnglobal.site</p>
                    <p className="mb-1">Phone: +44 123 456 7890</p>
                    <p>Address: 123 Business Street, Suite 100, London, UK</p>
                  </div>
                  <p className="mt-4">
                    For UK/EU residents: You have the right to make a complaint at any time to the Information Commissioner&apos;s Office (ICO), the UK supervisory authority for data protection issues (www.ico.org.uk), or other relevant supervisory authority in your jurisdiction. We would, however, appreciate the chance to deal with your concerns before you approach the regulatory authority, so please contact us in the first instance.
                  </p>
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
                
                <Link href="/legal/cookie-policy" className="group">
                  <Card className="p-5 h-full hover:border-primary/50 transition-colors">
                    <div className="flex gap-3 items-start">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Cookie className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-medium group-hover:text-primary transition-colors">Cookie Policy</h4>
                        <p className="text-sm text-muted-foreground">How we use cookies on our website</p>
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