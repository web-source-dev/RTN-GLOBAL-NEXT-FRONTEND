"use client";

import Link from "next/link";
import Script from "next/script";
import { Layout } from "@/components/layout/layout";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  ChevronRight, 
  Clock, 
  CalendarDays, 
  FileText, 
  Cookie,
  Shield,
  Scale
} from "lucide-react";

export default function CookiePolicyPage() {
  const lastUpdated = "November 15, 2023";
  
  return (
    <Layout>
      {/* JSON-LD structured data */}
      <Script
        id="cookie-policy-structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Cookie Policy - RTN Global",
            "description": "How RTN Global uses cookies and similar technologies on our website",
            "dateModified": lastUpdated,
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
              }
            },
            "mainEntity": {
              "@type": "LegalDocument",
              "name": "Cookie Policy",
              "creator": {
                "@type": "Organization",
                "name": "RTN Global"
              },
              "datePublished": "2023-01-01",
              "dateModified": lastUpdated,
              "about": "How we use cookies and similar technologies on our website"
            }
          })
        }}
      />
      
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
            <span className="text-foreground font-medium">Cookie Policy</span>
          </div>
          
          <div className="max-w-4xl">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Cookie Policy</h1>
            <p className="text-xl text-muted-foreground mb-6">
              How we use cookies and similar technologies on our website
            </p>
            
            <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-1.5">
                <CalendarDays className="h-4 w-4" />
                <span>Last updated: {lastUpdated}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Clock className="h-4 w-4" />
                <span>7 min read</span>
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
                  <a href="#what-are-cookies" className="block text-muted-foreground hover:text-foreground transition-colors">What Are Cookies</a>
                  <a href="#types-of-cookies" className="block text-muted-foreground hover:text-foreground transition-colors">Types of Cookies</a>
                  <a href="#cookies-we-use" className="block text-muted-foreground hover:text-foreground transition-colors">Cookies We Use</a>
                  <a href="#third-party-cookies" className="block text-muted-foreground hover:text-foreground transition-colors">Third Party Cookies</a>
                  <a href="#managing-cookies" className="block text-muted-foreground hover:text-foreground transition-colors">Managing Cookies</a>
                  <a href="#cookie-preferences" className="block text-muted-foreground hover:text-foreground transition-colors">Cookie Preferences</a>
                  <a href="#similar-technologies" className="block text-muted-foreground hover:text-foreground transition-colors">Similar Technologies</a>
                  <a href="#updates" className="block text-muted-foreground hover:text-foreground transition-colors">Updates to Policy</a>
                  <a href="#contact" className="block text-muted-foreground hover:text-foreground transition-colors">Contact Us</a>
                </nav>
              </div>
              
              <Card className="mt-6 p-5 bg-primary-foreground/5">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center">
                    <Cookie className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="font-medium">Cookie Preferences</h3>
                </div>
                <p className="text-sm text-muted-foreground mb-4">Need to update your cookie settings?</p>
                <Button variant="default" size="sm" className="w-full">
                  Manage Preferences
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
                    This Cookie Policy explains how RTN Global Ltd. (&quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) uses cookies and similar technologies when you visit our website (rtnglobal.site) or interact with our services. This policy provides you with information about how we use these technologies, why we use them, and the choices you have regarding their use.
                  </p>
                  <p>
                    By continuing to browse or use our website, you agree to our use of cookies and similar technologies as described in this policy. If you do not agree with our use of cookies, you should adjust your browser settings accordingly or not use our website.
                  </p>
                </section>
                
                <section id="what-are-cookies">
                  <h2>What Are Cookies</h2>
                  <p>
                    Cookies are small text files that are stored on your device (computer, tablet, or mobile) when you visit a website. They allow the website to recognize your device and remember if you&apos;ve been to the website before. Cookies are widely used to make websites work more efficiently, provide a better user experience, and give website owners information about how their site is being used.
                  </p>
                  <p>
                    Cookies cannot be used to identify you personally without other information, but they can be used to recognize your device and compile information about your preferences and browsing habits.
                  </p>
                </section>
                
                <section id="types-of-cookies">
                  <h2>Types of Cookies</h2>
                  <p>
                    Cookies can be classified based on their lifespan and the domain to which they belong:
                  </p>
                  <h3>Based on Lifespan</h3>
                  <ul>
                    <li><strong>Session Cookies:</strong> These are temporary cookies that expire when you close your browser. They enable websites to recognize you as you navigate between pages during a single browser session.</li>
                    <li><strong>Persistent Cookies:</strong> These cookies remain on your device for a specified period or until you delete them manually. They recognize you as a return visitor to our website and help in remembering your preferences for future visits.</li>
                  </ul>
                  <h3>Based on Domain</h3>
                  <ul>
                    <li><strong>First-party Cookies:</strong> These are cookies set by the website you are visiting (in this case, rtnglobal.site) and can only be read by this website.</li>
                    <li><strong>Third-party Cookies:</strong> These are cookies set by domains other than the one you are visiting. They are typically used for cross-site tracking, advertising, and analytics.</li>
                  </ul>
                </section>
                
                <section id="cookies-we-use">
                  <h2>Cookies We Use</h2>
                  <p>
                    We use various types of cookies for different purposes:
                  </p>
                  <ul>
                    <li><strong>Essential Cookies:</strong> These cookies are necessary for the website to function properly. They enable basic functions like page navigation, access to secure areas of the website, and remembering your preferences. The website cannot function properly without these cookies, and they cannot be disabled.</li>
                    <li><strong>Performance/Analytics Cookies:</strong> These cookies help us understand how visitors interact with our website by collecting and reporting information anonymously. They help us improve the functionality and user experience of our website.</li>
                    <li><strong>Functionality Cookies:</strong> These cookies allow our website to remember choices you make (such as your username, language, or region) and provide enhanced, more personal features. They may also be used to provide services you have requested, such as watching a video.</li>
                    <li><strong>Targeting/Advertising Cookies:</strong> These cookies are used to deliver advertisements more relevant to you and your interests. They are also used to limit the number of times you see an advertisement and to help measure the effectiveness of advertising campaigns.</li>
                  </ul>
                  <p>
                    Below is a detailed list of the first-party cookies we use:
                  </p>
                  <table>
                    <thead>
                      <tr>
                        <th>Cookie Name</th>
                        <th>Type</th>
                        <th>Purpose</th>
                        <th>Duration</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>rtn_session</td>
                        <td>Essential</td>
                        <td>Manages user session and authentication</td>
                        <td>Session</td>
                      </tr>
                      <tr>
                        <td>rtn_preferences</td>
                        <td>Functionality</td>
                        <td>Stores user preferences (e.g., language, theme)</td>
                        <td>1 year</td>
                      </tr>
                      <tr>
                        <td>rtn_consent</td>
                        <td>Essential</td>
                        <td>Records cookie consent preferences</td>
                        <td>1 year</td>
                      </tr>
                      <tr>
                        <td>rtn_analytics</td>
                        <td>Analytics</td>
                        <td>Collects anonymous usage statistics</td>
                        <td>2 years</td>
                      </tr>
                    </tbody>
                  </table>
                </section>
                
                <section id="third-party-cookies">
                  <h2>Third-Party Cookies</h2>
                  <p>
                    Some cookies are placed by third-party services that appear on our website. We use the following third-party services that may place cookies on your device:
                  </p>
                  <ul>
                    <li><strong>Google Analytics:</strong> We use Google Analytics to understand how visitors interact with our website. The cookies collect information about the number of visitors to the site, where visitors have come from, and the pages they visited. You can learn more about Google Analytics cookies <a href="https://developers.google.com/analytics/devguides/collection/analyticsjs/cookie-usage" target="_blank" className="text-primary hover:underline">here</a>.</li>
                    <li><strong>HubSpot:</strong> We use HubSpot for marketing automation and to analyze website performance. HubSpot cookies help track visitor information and provide personalized content. More information about HubSpot cookies can be found <a href="https://knowledge.hubspot.com/reports/what-cookies-does-hubspot-set-in-a-visitor&apos;s-browser" target="_blank" className="text-primary hover:underline">here</a>.</li>
                    <li><strong>Social Media Platforms:</strong> Our website includes social media features, such as the Facebook, Twitter, and LinkedIn buttons. These features may collect your IP address, which page you are visiting on our site, and may set a cookie to enable the feature to function properly. These social media features are hosted by a third party. Your interactions with these features are governed by the privacy policy of the company providing them.</li>
                  </ul>
                </section>
                
                <section id="managing-cookies">
                  <h2>Managing Your Cookie Preferences</h2>
                  <p>
                    Most web browsers allow you to manage your cookie preferences. You can set your browser to refuse cookies, or to alert you when cookies are being sent. The methods for doing so vary from browser to browser, and from version to version, but you can typically manage your cookie settings through the browser&apos;s &quot;Settings,&quot; &quot;Preferences,&quot; or &quot;Options&quot; menu.
                  </p>
                  <p>
                    Here are links to instructions for managing cookies in some popular browsers:
                  </p>
                  <ul>
                    <li><a href="https://support.google.com/chrome/answer/95647" target="_blank" className="text-primary hover:underline">Google Chrome</a></li>
                    <li><a href="https://support.mozilla.org/en-US/kb/enhanced-tracking-protection-firefox-desktop" target="_blank" className="text-primary hover:underline">Mozilla Firefox</a></li>
                    <li><a href="https://support.apple.com/en-us/HT201265" target="_blank" className="text-primary hover:underline">Safari</a></li>
                    <li><a href="https://support.microsoft.com/en-us/microsoft-edge/delete-cookies-in-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09" target="_blank" className="text-primary hover:underline">Microsoft Edge</a></li>
                  </ul>
                  <p>
                    Please note that blocking or deleting cookies may impact your experience on our website, as some features may not function properly.
                  </p>
                </section>
                
                <section id="cookie-preferences">
                  <h2>Cookie Preference Center</h2>
                  <p>
                    In addition to browser settings, we provide a Cookie Preference Center on our website that allows you to customize your cookie preferences for our site. You can access this center by clicking on the &quot;Manage Preferences&quot; button in the cookie banner that appears when you first visit our site, or by clicking the &quot;Manage Preferences&quot; button located at the bottom of this page.
                  </p>
                  <p>
                    Through our Cookie Preference Center, you can:
                  </p>
                  <ul>
                    <li>See the categories of cookies we use</li>
                    <li>Choose which non-essential cookie categories you want to allow</li>
                    <li>Update your preferences at any time</li>
                  </ul>
                  <p>
                    Please note that essential cookies cannot be disabled as they are necessary for the website to function properly.
                  </p>
                </section>
                
                <section id="similar-technologies">
                  <h2>Similar Technologies</h2>
                  <p>
                    In addition to cookies, we may use other similar technologies to track and analyze website usage:
                  </p>
                  <ul>
                    <li><strong>Web Beacons (Pixel Tags):</strong> These are small, invisible graphics on a web page or in an email that, when downloaded, can provide information such as the IP address of the device used to download the page, the URL of the page, the time the page was viewed, the type of browser used, and any previously set cookies.</li>
                    <li><strong>Local Storage:</strong> This is a feature of web browsers that allows websites to store data within your browser. Unlike cookies, data in local storage is not transmitted to the server with each request, but it can be used to track your activities on a website.</li>
                    <li><strong>Session Replay:</strong> We may use session replay tools to record your interactions with our website, such as mouse movements, clicks, and scrolling. This helps us understand how users navigate our site and identify potential usability issues.</li>
                  </ul>
                  <p>
                    The information collected through these technologies is used in the same way as the information collected through cookies and is subject to the same controls and preferences.
                  </p>
                </section>
                
                <section id="updates">
                  <h2>Updates to This Cookie Policy</h2>
                  <p>
                    We may update this Cookie Policy from time to time to reflect changes in technology, legal requirements, or other factors. Any changes will be effective immediately upon posting of the updated policy on our website. We encourage you to review this policy periodically to stay informed about our use of cookies and similar technologies.
                  </p>
                  <p>
                    If we make significant changes to this policy, we will notify you by posting a notice on our website or by other means, as appropriate.
                  </p>
                </section>
                
                <section id="contact">
                  <h2>Contact Us</h2>
                  <p>
                    If you have any questions about our use of cookies or this Cookie Policy, please contact us at:
                  </p>
                  <div className="bg-muted/30 p-4 rounded-lg">
                    <p className="mb-1"><strong>RTN Global Ltd.</strong></p>
                    <p className="mb-1">Attn: Privacy Team</p>
                    <p className="mb-1">Email: privacy@rtnglobal.site</p>
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
                <Button variant="default" size="sm">
                  Manage Preferences
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
} 