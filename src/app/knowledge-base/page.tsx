"use client";

import Link from "next/link";
import { Layout } from "@/components/layout/layout";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { 
  Search, 
  Book, 
  FileText, 
  CheckCircle, 
  HelpCircle, 
  AlertCircle, 
  Code, 
  FileQuestion,
  ArrowRight,
  BookOpen,
  TrendingUp
} from "lucide-react";

// Knowledge base categories
const categories = [
  {
    id: "getting-started",
    title: "Getting Started Guides",
    description: "Essential guides to help you start using our platform efficiently. Learn the basics and get up to speed quickly.",
    icon: Book,
    color: "bg-blue-100 text-blue-600 dark:bg-blue-950/30 dark:text-blue-400"
  },
  {
    id: "technical",
    title: "Technical Documentation",
    description: "Detailed technical specifications and implementation guides for developers and technical users.",
    icon: FileText,
    color: "bg-purple-100 text-purple-600 dark:bg-purple-950/30 dark:text-purple-400"
  },
  {
    id: "api",
    title: "API References",
    description: "Complete API documentation, endpoints, and code examples for integrating with our platform.",
    icon: Code,
    color: "bg-emerald-100 text-emerald-600 dark:bg-emerald-950/30 dark:text-emerald-400"
  },
  {
    id: "best-practices",
    title: "Best Practices",
    description: "Recommendations and best practices for optimal results and efficient use of our platform.",
    icon: CheckCircle,
    color: "bg-amber-100 text-amber-600 dark:bg-amber-950/30 dark:text-amber-400"
  },
  {
    id: "troubleshooting",
    title: "Troubleshooting",
    description: "Solutions for common problems and error resolutions to help you overcome challenges quickly.",
    icon: HelpCircle,
    color: "bg-red-100 text-red-600 dark:bg-red-950/30 dark:text-red-400"
  },
  {
    id: "releases",
    title: "Release Notes",
    description: "Latest updates, features, and changes to our platform to keep you informed of improvements.",
    icon: FileText,
    color: "bg-indigo-100 text-indigo-600 dark:bg-indigo-950/30 dark:text-indigo-400"
  },
  {
    id: "account-access",
    title: "Account Access",
    description: "Information about account security, login issues, and verification procedures to keep your account secure.",
    icon: AlertCircle,
    color: "bg-cyan-100 text-cyan-600 dark:bg-cyan-950/30 dark:text-cyan-400"
  },
  {
    id: "billing",
    title: "Billing & Payments",
    description: "Information about invoices, payment methods, and subscription management for your account.",
    icon: FileQuestion,
    color: "bg-teal-100 text-teal-600 dark:bg-teal-950/30 dark:text-teal-400"
  }
];

// Featured articles
const featuredArticles = [
  {
    title: "Getting Started with RTN Global Platform",
    description: "A comprehensive guide to help you start using our platform efficiently.",
    path: "/knowledge-base/getting-started/platform-overview",
    category: "getting-started",
    icon: Book,
    color: "bg-blue-100 text-blue-600 dark:bg-blue-950/30 dark:text-blue-400"
  },
  {
    title: "API Authentication Guide",
    description: "Learn how to authenticate with our API using API keys, OAuth, and other methods.",
    path: "/knowledge-base/api/authentication",
    category: "api",
    icon: Code,
    color: "bg-emerald-100 text-emerald-600 dark:bg-emerald-950/30 dark:text-emerald-400"
  },
  {
    title: "How to Reset Your Password",
    description: "Step-by-step instructions for resetting your password if you've forgotten it.",
    path: "/knowledge-base/account-access/reset-password",
    category: "account-access",
    icon: AlertCircle,
    color: "bg-cyan-100 text-cyan-600 dark:bg-cyan-950/30 dark:text-cyan-400"
  },
  {
    title: "Troubleshooting Common Issues",
    description: "Solutions for the most frequently encountered problems and how to resolve them.",
    path: "/knowledge-base/troubleshooting/common-issues",
    category: "troubleshooting",
    icon: HelpCircle,
    color: "bg-red-100 text-red-600 dark:bg-red-950/30 dark:text-red-400"
  }
];

export default function KnowledgeBasePage() {
  return (
    <Layout>
      {/* Hero Section with Search */}
      <section className="bg-gradient-to-b from-background to-muted/30 py-16 md:py-24 border-b border-border">
        <div className="container px-4 mx-auto text-center">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl font-bold tracking-tight mb-6 md:text-5xl lg:text-6xl">Knowledge Base</h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-10">
              Find answers, tutorials, guides, and resources to help you get the most out of RTN Global services.
            </p>
            
            {/* Search Bar */}
            <div className="relative max-w-2xl mx-auto">
              <div className="relative flex items-center">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
                <Input
                  type="text"
                  placeholder="Search for articles, topics, or keywords..."
                  className="pl-12 py-6 pr-28 text-base rounded-full border-border focus:border-primary"
                />
                <Button className="absolute right-1.5 top-1/2 transform -translate-y-1/2 rounded-full px-5">
                  Search
                </Button>
              </div>
              <div className="mt-3 flex flex-wrap justify-center gap-2 text-sm text-muted-foreground">
                <span>Popular:</span>
                <Link href="/knowledge-base/getting-started/quick-start" className="hover:text-primary transition-colors">Quick Start</Link>
                <span>•</span>
                <Link href="/knowledge-base/api/authentication" className="hover:text-primary transition-colors">API Keys</Link>
                <span>•</span>
                <Link href="/knowledge-base/account-access/two-factor-authentication" className="hover:text-primary transition-colors">Two-Factor Auth</Link>
                <span>•</span>
                <Link href="/knowledge-base/troubleshooting/login-issues" className="hover:text-primary transition-colors">Login Issues</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Articles */}
      <section className="py-16 bg-background">
        <div className="container px-4 mx-auto">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold tracking-tight">Featured Articles</h2>
            <Button variant="ghost" className="text-primary" asChild>
              <Link href="/knowledge-base/all" className="group flex items-center gap-1">
                View all articles
                <ArrowRight className="h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
              </Link>
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredArticles.map((article, index) => {
              const CategoryIcon = article.icon;
              return (
                <Link key={index} href={article.path}>
                  <Card className="h-full border border-border hover:border-primary/50 hover:shadow-md transition-all duration-300 hover:-translate-y-1">
                    <div className="p-6">
                      <div className={`w-10 h-10 rounded-full ${article.color} flex items-center justify-center mb-4`}>
                        <CategoryIcon className="w-5 h-5" />
                      </div>
                      <h3 className="font-semibold text-lg mb-2 line-clamp-2">{article.title}</h3>
                      <p className="text-muted-foreground text-sm mb-4 line-clamp-2">{article.description}</p>
                      <div className="flex items-center text-sm text-primary">
                        Read article
                        <ArrowRight className="ml-1 h-3 w-3" />
                      </div>
                    </div>
                  </Card>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 bg-muted/30">
        <div className="container px-4 mx-auto">
          <h2 className="text-3xl font-bold tracking-tight mb-10 text-center">Browse by Category</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {categories.map((category) => {
              const Icon = category.icon;
              return (
                <Link key={category.id} href={`/knowledge-base/${category.id}`}>
                  <Card className="h-full border border-border hover:border-primary/50 hover:shadow-md transition-all duration-300 hover:-translate-y-1 overflow-hidden">
                    <div className="p-6">
                      <div className="flex items-start gap-4 mb-4">
                        <div className={`w-12 h-12 rounded-full ${category.color} flex items-center justify-center flex-shrink-0`}>
                          <Icon className="w-6 h-6" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-xl mb-2">{category.title}</h3>
                          <p className="text-muted-foreground text-sm line-clamp-2">{category.description}</p>
                        </div>
                      </div>
                      <div className="mt-4 pt-4 border-t border-border flex justify-between items-center">
                        <span className="text-sm text-muted-foreground">10+ articles</span>
                        <Button variant="ghost" size="sm" className="text-primary p-0 h-auto">
                          <span className="flex items-center gap-1">
                            Explore
                            <ArrowRight className="h-4 w-4" />
                          </span>
                        </Button>
                      </div>
                    </div>
                  </Card>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Popular Topics Section */}
      <section className="py-16 bg-background">
        <div className="container px-4 mx-auto">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold tracking-tight mb-6 text-center">Popular Topics</h2>
            <p className="text-muted-foreground text-center mb-12">
              Quick access to our most viewed and frequently accessed information
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              <Link href="/knowledge-base/account-access/two-factor-authentication" className="group">
                <Card className="p-4 border border-border group-hover:border-primary/50 group-hover:shadow-sm transition-all duration-300">
                  <div className="flex items-center gap-3">
                    <TrendingUp className="h-5 w-5 text-primary" />
                    <span className="font-medium">Two-Factor Authentication</span>
                  </div>
                </Card>
              </Link>
              <Link href="/knowledge-base/api/rate-limits" className="group">
                <Card className="p-4 border border-border group-hover:border-primary/50 group-hover:shadow-sm transition-all duration-300">
                  <div className="flex items-center gap-3">
                    <TrendingUp className="h-5 w-5 text-primary" />
                    <span className="font-medium">API Rate Limits</span>
                  </div>
                </Card>
              </Link>
              <Link href="/knowledge-base/billing/payment-methods" className="group">
                <Card className="p-4 border border-border group-hover:border-primary/50 group-hover:shadow-sm transition-all duration-300">
                  <div className="flex items-center gap-3">
                    <TrendingUp className="h-5 w-5 text-primary" />
                    <span className="font-medium">Payment Methods</span>
                  </div>
                </Card>
              </Link>
              <Link href="/knowledge-base/troubleshooting/login-issues" className="group">
                <Card className="p-4 border border-border group-hover:border-primary/50 group-hover:shadow-sm transition-all duration-300">
                  <div className="flex items-center gap-3">
                    <TrendingUp className="h-5 w-5 text-primary" />
                    <span className="font-medium">Login Issues</span>
                  </div>
                </Card>
              </Link>
              <Link href="/knowledge-base/technical/system-requirements" className="group">
                <Card className="p-4 border border-border group-hover:border-primary/50 group-hover:shadow-sm transition-all duration-300">
                  <div className="flex items-center gap-3">
                    <TrendingUp className="h-5 w-5 text-primary" />
                    <span className="font-medium">System Requirements</span>
                  </div>
                </Card>
              </Link>
              <Link href="/knowledge-base/account-access/reset-password" className="group">
                <Card className="p-4 border border-border group-hover:border-primary/50 group-hover:shadow-sm transition-all duration-300">
                  <div className="flex items-center gap-3">
                    <TrendingUp className="h-5 w-5 text-primary" />
                    <span className="font-medium">Password Reset</span>
                  </div>
                </Card>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Help CTA Section */}
      <section className="py-16 bg-muted/30">
        <div className="container px-4 mx-auto">
          <div className="max-w-4xl mx-auto bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20 rounded-xl p-8 md:p-10">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                <BookOpen className="w-8 h-8 md:w-10 md:h-10 text-primary" />
              </div>
              <div className="md:flex-1 text-center md:text-left">
                <h3 className="text-2xl font-semibold mb-3">Can&apos;t find what you&apos;re looking for?</h3>
                <p className="text-muted-foreground mb-6">
                  Our support team is ready to help with any questions you may have about our platform or services.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                  <Button asChild size="lg" className="gap-2">
                    <Link href="/support/submit">
                      Contact Support
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                  <Button asChild variant="outline" size="lg" className="gap-2">
                    <Link href="/contact/free-consultation">
                      Book a Consultation
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
} 