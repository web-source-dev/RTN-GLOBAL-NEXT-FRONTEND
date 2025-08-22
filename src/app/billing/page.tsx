import type { Metadata } from 'next';
import Link from 'next/link';
import { 
  CreditCard, 
  Calendar, 
  HelpCircle, 
  FileText, 
  CheckCircle2, 
  AlertTriangle, 
  ArrowRight, 
  Lock,
  DollarSign,
  Receipt,
  Clock
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Billing & Payments | RTN Global',
  description: 'Learn about RTN Global\'s billing and payment processes, invoicing cycles, accepted payment methods, and more.',
  keywords: ['billing', 'payments', 'invoices', 'payment methods', 'subscription', 'invoicing'],
  openGraph: {
    title: 'Billing & Payments | RTN Global',
    description: 'Understand our billing process and payment options',
    images: ['/images/og/billing.jpg'],
  },
};

export default function BillingPage() {
  return (
    <main className="min-h-screen bg-background">
      {/* JSON-LD structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Billing & Payments | RTN Global",
            "description": "Learn about RTN Global's billing and payment processes, invoicing cycles, accepted payment methods, and more.",
            "url": "https://rtnglobal.site/billing",
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
              "@type": "WebPage",
              "name": "Billing & Payments",
              "description": "Information about our billing processes, payment methods, and invoice management"
            }
          })
        }}
      />
      <div className="py-12">
        <div className="container px-4 mx-auto">
          <div className="max-w-4xl mx-auto">
            <div className="mb-10 text-center">
              <h1 className="text-3xl font-bold leading-tight md:text-4xl mb-4">Billing & Payments</h1>
              <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
                Clear and transparent information about our billing processes, payment methods, and how to manage your invoices.
              </p>
            </div>
            
            {/* Billing Overview */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-6 pb-2 border-b">Billing Overview</h2>
              <p className="text-muted-foreground mb-6">
                At RTN Global, we strive to make our billing process as transparent and straightforward as possible. Our billing 
                system is designed to provide you with clear information about your charges and easy access to your invoices.
              </p>
              
              <div className="grid gap-6 md:grid-cols-2 mt-8">
                <div className="p-6 border rounded-lg bg-card">
                  <div className="flex items-start">
                    <div className="p-2 mr-4 rounded-full bg-primary/10 text-primary">
                      <FileText className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">Transparent Invoicing</h3>
                      <p className="text-sm text-muted-foreground">
                        Detailed invoices showing itemized charges, making it easy to understand what you&apos;re paying for.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="p-6 border rounded-lg bg-card">
                  <div className="flex items-start">
                    <div className="p-2 mr-4 rounded-full bg-primary/10 text-primary">
                      <Calendar className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">Regular Billing Cycles</h3>
                      <p className="text-sm text-muted-foreground">
                        Predictable billing on a monthly or annual basis, depending on your chosen payment plan.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="p-6 border rounded-lg bg-card">
                  <div className="flex items-start">
                    <div className="p-2 mr-4 rounded-full bg-primary/10 text-primary">
                      <Lock className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">Secure Payment Processing</h3>
                      <p className="text-sm text-muted-foreground">
                        All payments are processed through secure, PCI-compliant payment gateways to protect your financial information.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="p-6 border rounded-lg bg-card">
                  <div className="flex items-start">
                    <div className="p-2 mr-4 rounded-full bg-primary/10 text-primary">
                      <HelpCircle className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">Dedicated Support</h3>
                      <p className="text-sm text-muted-foreground">
                        Our finance team is available to help with any billing questions or concerns you may have.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Billing Cycles */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-6 pb-2 border-b">Billing Cycles</h2>
              <p className="text-muted-foreground mb-6">
                We offer flexible billing cycles to accommodate different business needs and cash flow requirements.
              </p>
              
              <div className="space-y-6">
                <div className="p-6 border rounded-lg bg-card">
                  <h3 className="font-semibold text-lg mb-3 flex items-center">
                    <Calendar className="mr-2 h-5 w-5 text-primary" />
                    Monthly Billing
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    Our monthly billing cycle charges your account on the same day each month. Invoices are generated 
                    automatically and sent to your registered email address 5 days before the payment due date.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 mt-0.5 shrink-0" />
                      <span>Flexible payment schedule with no long-term commitment</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 mt-0.5 shrink-0" />
                      <span>Ideal for new clients and project-based work</span>
                    </li>
                    <li className="flex items-start">
                      <AlertTriangle className="h-5 w-5 text-amber-500 mr-2 mt-0.5 shrink-0" />
                      <span>Monthly rate may be slightly higher than annual billing</span>
                    </li>
                  </ul>
                </div>
                
                <div className="p-6 border rounded-lg bg-card">
                  <h3 className="font-semibold text-lg mb-3 flex items-center">
                    <Calendar className="mr-2 h-5 w-5 text-primary" />
                    Annual Billing
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    Our annual billing cycle offers a discounted rate compared to monthly billing. You&apos;ll be charged 
                    once per year, with a reminder sent 14 days before the renewal date.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 mt-0.5 shrink-0" />
                      <span>Save up to 20% compared to monthly billing</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 mt-0.5 shrink-0" />
                      <span>Simplified accounting with a single annual payment</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 mt-0.5 shrink-0" />
                      <span>Priority support and additional benefits for annual subscribers</span>
                    </li>
                  </ul>
                </div>
                
                <div className="p-6 border rounded-lg bg-card">
                  <h3 className="font-semibold text-lg mb-3 flex items-center">
                    <Calendar className="mr-2 h-5 w-5 text-primary" />
                    Custom Billing
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    For enterprise clients and large projects, we offer custom billing arrangements tailored to your specific 
                    requirements and project milestones.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 mt-0.5 shrink-0" />
                      <span>Milestone-based payment schedules for long-term projects</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 mt-0.5 shrink-0" />
                      <span>Flexible invoicing aligned with your company&apos;s fiscal periods</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 mt-0.5 shrink-0" />
                      <span>Dedicated account manager to assist with billing and financial matters</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            
            {/* Payment Methods */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-6 pb-2 border-b">Payment Methods</h2>
              <p className="text-muted-foreground mb-6">
                We accept a variety of payment methods to accommodate your preferences and make the payment process as convenient as possible.
              </p>
              
              <div className="grid gap-6 md:grid-cols-3">
                <div className="p-6 border rounded-lg bg-card text-center">
                  <div className="p-3 mb-4 rounded-full bg-primary/10 text-primary mx-auto w-fit">
                    <CreditCard className="h-6 w-6" />
                  </div>
                  <h3 className="font-semibold mb-2">Credit Cards</h3>
                  <p className="text-sm text-muted-foreground">
                    We accept all major credit cards including Visa, Mastercard, American Express, and Discover.
                  </p>
                </div>
                
                <div className="p-6 border rounded-lg bg-card text-center">
                  <div className="p-3 mb-4 rounded-full bg-primary/10 text-primary mx-auto w-fit">
                    <DollarSign className="h-6 w-6" />
                  </div>
                  <h3 className="font-semibold mb-2">Bank Transfers</h3>
                  <p className="text-sm text-muted-foreground">
                    Direct bank transfers are available for all services. Details are provided on your invoice.
                  </p>
                </div>
                
                <div className="p-6 border rounded-lg bg-card text-center">
                  <div className="p-3 mb-4 rounded-full bg-primary/10 text-primary mx-auto w-fit">
                    <Receipt className="h-6 w-6" />
                  </div>
                  <h3 className="font-semibold mb-2">Electronic Invoicing</h3>
                  <p className="text-sm text-muted-foreground">
                    We support electronic invoicing systems and can integrate with your accounts payable system.
                  </p>
                </div>
              </div>
            </div>
            
            {/* Invoice Management */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-6 pb-2 border-b">Invoice Management</h2>
              <p className="text-muted-foreground mb-6">
                Easily manage your invoices and payment history through our client portal or by contacting our finance team.
              </p>
              
              <div className="space-y-6">
                <div className="p-6 border rounded-lg bg-card">
                  <h3 className="font-semibold text-lg mb-3">Accessing Your Invoices</h3>
                  <p className="text-muted-foreground mb-4">
                    All invoices are automatically sent to your registered email address. You can also access your complete 
                    invoice history through our client portal at any time.
                  </p>
                  <div className="flex items-center justify-between bg-muted/30 p-4 rounded-lg">
                    <div className="flex items-center">
                      <FileText className="h-5 w-5 text-primary mr-2" />
                      <span className="font-medium">Need to update your billing email?</span>
                    </div>
                    <Link 
                      href="/contact" 
                      className="text-primary hover:underline flex items-center text-sm font-medium"
                    >
                      Contact Us <ArrowRight className="ml-1 h-4 w-4" />
                    </Link>
                  </div>
                </div>
                
                <div className="p-6 border rounded-lg bg-card">
                  <h3 className="font-semibold text-lg mb-3">Payment Due Dates</h3>
                  <p className="text-muted-foreground mb-4">
                    Payment terms are specified on each invoice, typically with a 14-day payment period from the invoice date. 
                    For recurring services, payments are automatically processed on the billing cycle date.
                  </p>
                  <div className="flex items-center text-sm text-amber-600 bg-amber-50 dark:bg-amber-900/30 dark:text-amber-400 p-3 rounded-lg">
                    <Clock className="h-5 w-5 mr-2 shrink-0" />
                    <span>
                      To avoid service interruptions, please ensure your payment information is up to date and payments are made by the due date.
                    </span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Billing FAQs */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-6 pb-2 border-b">Billing FAQs</h2>
              
              <div className="space-y-6">
                <div className="p-6 border rounded-lg bg-card">
                  <h3 className="font-semibold text-lg mb-2">How can I update my payment method?</h3>
                  <p className="text-muted-foreground">
                    You can update your payment method by logging into your client portal and navigating to the &quot;Billing&quot; 
                    section. Alternatively, contact our finance team at billing@rtnglobal.site for assistance.
                  </p>
                </div>
                
                <div className="p-6 border rounded-lg bg-card">
                  <h3 className="font-semibold text-lg mb-2">What happens if a payment fails?</h3>
                  <p className="text-muted-foreground">
                    If a payment fails, we&apos;ll notify you immediately and attempt to process the payment again after 24 hours. 
                    If the second attempt fails, our team will contact you to resolve the issue and avoid any service interruptions.
                  </p>
                </div>
                
                <div className="p-6 border rounded-lg bg-card">
                  <h3 className="font-semibold text-lg mb-2">Can I get a copy of a past invoice?</h3>
                  <p className="text-muted-foreground">
                    Yes, all your past invoices are available in your client portal. You can also request copies by 
                    emailing our finance team at billing@rtnglobal.site.
                  </p>
                </div>
                
                <div className="p-6 border rounded-lg bg-card">
                  <h3 className="font-semibold text-lg mb-2">Do you offer refunds?</h3>
                  <p className="text-muted-foreground">
                    Our refund policy varies by service. Please refer to the terms and conditions of your specific service 
                    agreement or contact our customer support team to discuss your situation.
                  </p>
                </div>
              </div>
              
              <div className="mt-8 text-center">
                <p className="text-muted-foreground mb-4">
                  Have more questions about billing or payments?
                </p>
                <Link 
                  href="/contact" 
                  className="inline-flex items-center justify-center px-6 py-3 rounded-md bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
                >
                  Contact Our Finance Team
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
} 