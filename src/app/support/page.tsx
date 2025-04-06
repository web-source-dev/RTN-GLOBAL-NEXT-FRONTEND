import Link from "next/link";
import { Layout } from "@/components/layout/layout";
import { HeroSection } from "@/components/sections/hero-section";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { 
  FileText, 
  LifeBuoy, 
  MessageSquare, 
  Book, 
  Clock, 
  CheckCircle, 
  AlertCircle, 
  HelpCircle, 
  Search, 
  FileQuestion, 
  ChevronRight, 
  Headphones, 
  PhoneCall, 
  Ticket, 
  ArrowRight 
} from "lucide-react";

const SupportPage = () => {
  // Support categories for quick navigation
  const supportCategories = [
    {
      title: "Submit a Ticket",
      description: "Create a new support request for technical issues or general inquiries.",
      icon: Ticket,
      link: "/support/submit",
      color: "bg-blue-100 text-blue-600 dark:bg-blue-950/30 dark:text-blue-400",
      buttonText: "Create Ticket"
    },
    {
      title: "Check Ticket Status",
      description: "View the status and updates of your existing support tickets.",
      icon: Clock,
      link: "/support/ticket-status",
      color: "bg-purple-100 text-purple-600 dark:bg-purple-950/30 dark:text-purple-400",
      buttonText: "View Status"
    },
    {
      title: "Knowledge Base",
      description: "Browse our extensive collection of tutorials, guides, and FAQ articles.",
      icon: Book,
      link: "/knowledge-base",
      color: "bg-emerald-100 text-emerald-600 dark:bg-emerald-950/30 dark:text-emerald-400",
      buttonText: "Explore Articles"
    },
    {
      title: "FAQ",
      description: "Find answers to the most frequently asked questions about our services.",
      icon: HelpCircle,
      link: "/faq",
      color: "bg-amber-100 text-amber-600 dark:bg-amber-950/30 dark:text-amber-400",
      buttonText: "View FAQs"
    }
  ];

  // Common issues and quick solutions
  const commonIssues = [
    {
      title: "Account Access Issues",
      description: "Problems logging in, password reset, or account verification.",
      icon: AlertCircle,
      link: "/knowledge-base/account-access"
    },
    {
      title: "Billing Questions",
      description: "Questions about invoices, payment methods, or subscription changes.",
      icon: FileQuestion,
      link: "/knowledge-base/billing"
    },
    {
      title: "Service Errors",
      description: "Technical issues, errors, or unexpected behaviors with our platform.",
      icon: AlertCircle,
      link: "/knowledge-base/errors"
    },
    {
      title: "API Integration",
      description: "Help with API keys, endpoints, or implementation issues.",
      icon: FileText,
      link: "/knowledge-base/api"
    }
  ];

  // Knowledge base popular categories
  const resourceCategories = [
    {
      title: "Getting Started Guides",
      count: 24,
      icon: Book,
      link: "/knowledge-base/getting-started"
    },
    {
      title: "Technical Documentation",
      count: 48,
      icon: FileText,
      link: "/knowledge-base/technical"
    },
    {
      title: "API References",
      count: 35,
      icon: FileText,
      link: "/knowledge-base/api"
    },
    {
      title: "Best Practices",
      count: 17,
      icon: CheckCircle,
      link: "/knowledge-base/best-practices"
    },
    {
      title: "Troubleshooting",
      count: 29,
      icon: HelpCircle,
      link: "/knowledge-base/troubleshooting"
    },
    {
      title: "Release Notes",
      count: 12,
      icon: FileText,
      link: "/knowledge-base/releases"
    }
  ];

  // Support team information
  const supportTeams = [
    {
      name: "Technical Support",
      description: "For technical issues, bugs, or platform functionality questions.",
      hours: "24/7",
      response: "4-8 hours",
      icon: Headphones
    },
    {
      name: "Account Support",
      description: "For account access, profile details, or billing inquiries.",
      hours: "Mon-Fri, 9am-6pm ET",
      response: "1-2 business days",
      icon: MessageSquare
    },
    {
      name: "Strategic Support",
      description: "For project consultations or strategic implementation guidance.",
      hours: "Mon-Fri, 9am-5pm ET",
      response: "2-3 business days",
      icon: LifeBuoy
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-background to-muted/50">
        <div className="container px-4 mx-auto text-center">
          <h1 className="text-4xl font-bold tracking-tight mb-4 md:text-5xl">How Can We Help You Today?</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Our dedicated support team is here to ensure you get the assistance you need. Access resources, submit tickets, or check the status of your existing requests.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
            <Button asChild size="lg" className="gap-2">
              <Link href="/support/submit">
                <Ticket className="w-4 h-4" />
                Submit a Support Ticket
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="gap-2">
              <Link href="/knowledge-base">
                <Search className="w-4 h-4" />
                Search Knowledge Base
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Support Options Section */}
      <section className="py-16 bg-background">
        <div className="container px-4 mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight mb-4">Support Options</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Choose from multiple support channels designed to get you the help you need as quickly as possible.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {supportCategories.map((category, index) => (
              <Card key={index} className="border border-border hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <div className="p-6">
                  <div className={`w-12 h-12 rounded-full ${category.color} flex items-center justify-center mb-4`}>
                    <category.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{category.title}</h3>
                  <p className="text-muted-foreground mb-4">{category.description}</p>
                  <Button asChild className="w-full">
                    <Link href={category.link}>
                      {category.buttonText}
                      <ChevronRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Common Issues & Quick Solutions Section */}
      <section className="py-16 bg-muted/30">
        <div className="container px-4 mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight mb-4">Common Issues & Quick Solutions</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Find quick answers to the most common issues faced by our users.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {commonIssues.map((issue, index) => (
              <Link key={index} href={issue.link}>
                <Card className="border border-border hover:border-primary/50 transition-all duration-300 h-full">
                  <div className="p-6 flex gap-4">
                    <div className="mt-1">
                      <issue.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">{issue.title}</h3>
                      <p className="text-muted-foreground">{issue.description}</p>
                    </div>
                    <div className="ml-auto flex items-center">
                      <ChevronRight className="w-5 h-5 text-muted-foreground" />
                    </div>
                  </div>
                </Card>
              </Link>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Button asChild variant="outline" size="lg" className="gap-2">
              <Link href="/knowledge-base">
                <Book className="w-4 h-4" />
                Browse All Support Articles
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Support Ticket Information Section */}
      <section className="py-16 bg-background">
        <div className="container px-4 mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold tracking-tight mb-4">Submit a Support Ticket</h2>
              <p className="text-muted-foreground mb-6">
                Can&apos;t find what you&apos;re looking for? Our technical support team is available to help you resolve any issues you may encounter.
              </p>

              <div className="space-y-4 mb-6">
                <div className="flex gap-3">
                  <div className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-medium">Detailed Responses</h4>
                    <p className="text-sm text-muted-foreground">Our experts provide thorough solutions to technical issues.</p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <div className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-medium">Guaranteed Response Times</h4>
                    <p className="text-sm text-muted-foreground">We commit to responding within our service level agreements.</p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <div className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-medium">Ticket Tracking</h4>
                    <p className="text-sm text-muted-foreground">Monitor the status of your request through our ticket system.</p>
                  </div>
                </div>
              </div>

              <Button asChild size="lg" className="gap-2">
                <Link href="/support/submit">
                  <ArrowRight className="w-4 h-4" />
                  Submit a Ticket
                </Link>
              </Button>
            </div>

            <div className="bg-muted/30 rounded-xl p-8 border border-border">
              <h3 className="text-xl font-semibold mb-4">What to Include in Your Support Ticket</h3>
              <ul className="space-y-3">
                <li className="flex gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span>A clear description of the issue you&apos;re experiencing</span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span>Steps to reproduce the problem</span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span>Screenshots or videos if applicable</span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span>Error messages or codes received</span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span>Browser/device information</span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span>When the issue started occurring</span>
                </li>
              </ul>

              <div className="mt-6 pt-6 border-t border-border">
                <div className="flex items-center gap-3">
                  <AlertCircle className="w-5 h-5 text-amber-500" />
                  <p className="text-sm">For urgent issues requiring immediate assistance, please indicate the severity level in your ticket subject.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Resources Section */}
      <section className="py-16 bg-muted/30">
        <div className="container px-4 mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight mb-4">Support Resources</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Browse our extensive knowledge base to find answers, guides, and best practices.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {resourceCategories.map((category, index) => (
              <Link key={index} href={category.link}>
                <Card className="border border-border hover:border-primary/50 hover:shadow-md transition-all duration-300 h-full">
                  <div className="p-6">
                    <div className="flex justify-between items-center mb-4">
                      <div className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center">
                        <category.icon className="w-5 h-5" />
                      </div>
                      <span className="text-sm text-muted-foreground">{category.count} articles</span>
                    </div>
                    <h3 className="text-lg font-semibold">{category.title}</h3>
                  </div>
                </Card>
              </Link>
            ))}
          </div>

          <div className="mt-12 p-8 rounded-xl bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20">
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="md:flex-1">
                <h3 className="text-xl font-semibold mb-2">Can&apos;t find what you&apos;re looking for?</h3>
                <p className="text-muted-foreground">
                  Our knowledge base is constantly growing. If you can&apos;t find the answer you need, our support team is ready to help.
                </p>
              </div>
              <div>
                <Button asChild size="lg">
                  <Link href="/support/submit">
                    Contact Support
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information Section */}
      <section className="py-16 bg-background">
        <div className="container px-4 mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight mb-4">Support Team</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our dedicated support teams are here to help you with different aspects of our services.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {supportTeams.map((team, index) => (
              <Card key={index} className="border border-border">
                <div className="p-6">
                  <div className="w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center mb-4">
                    <team.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{team.name}</h3>
                  <p className="text-muted-foreground mb-4">{team.description}</p>
                  
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Business Hours:</span>
                      <span className="font-medium">{team.hours}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Response Time:</span>
                      <span className="font-medium">{team.response}</span>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <div className="mt-16 text-center">
            <h3 className="text-xl font-semibold mb-4">Alternative Contact Methods</h3>
            <div className="flex flex-wrap justify-center gap-6 max-w-3xl mx-auto">
              <Card className="border border-border flex-1 min-w-[240px]">
                <div className="p-6 text-center">
                  <div className="w-12 h-12 rounded-full bg-blue-100 text-blue-600 dark:bg-blue-950/30 dark:text-blue-400 flex items-center justify-center mx-auto mb-4">
                    <PhoneCall className="w-6 h-6" />
                  </div>
                  <h4 className="font-semibold mb-1">Phone Support</h4>
                  <p className="text-muted-foreground text-sm mb-3">
                    For premium customers with urgent needs
                  </p>
                  <p className="font-medium">+1 (800) 123-4567</p>
                </div>
              </Card>
              
              <Card className="border border-border flex-1 min-w-[240px]">
                <div className="p-6 text-center">
                  <div className="w-12 h-12 rounded-full bg-purple-100 text-purple-600 dark:bg-purple-950/30 dark:text-purple-400 flex items-center justify-center mx-auto mb-4">
                    <MessageSquare className="w-6 h-6" />
                  </div>
                  <h4 className="font-semibold mb-1">Email Support</h4>
                  <p className="text-muted-foreground text-sm mb-3">
                    For general inquiries and non-urgent issues
                  </p>
                  <p className="font-medium">support@rtnglobal.com</p>
                </div>
              </Card>
              
              <Card className="border border-border flex-1 min-w-[240px]">
                <div className="p-6 text-center">
                  <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 dark:bg-emerald-950/30 dark:text-emerald-400 flex items-center justify-center mx-auto mb-4">
                    <Headphones className="w-6 h-6" />
                  </div>
                  <h4 className="font-semibold mb-1">Live Chat</h4>
                  <p className="text-muted-foreground text-sm mb-3">
                    Available during business hours for quick queries
                  </p>
                  <Button variant="outline" size="sm">Start Chat</Button>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default SupportPage; 