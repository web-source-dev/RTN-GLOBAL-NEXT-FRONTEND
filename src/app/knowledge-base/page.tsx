"use client";

import Link from "next/link";
import { Layout } from "@/components/layout/layout";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { 
  Search,
  TrendingUp,
  ArrowRight,
  BookOpen,
} from "lucide-react";
import { categories, featuredArticles } from "@/data/knowledge-base";

export default function KnowledgeBasePage() {
  // JSON-LD structured data for Knowledge Base page
  const structuredData = {
    "@context": "https://schema.org",
    "@type": ["WebPage", "FAQPage"],
    "name": "RTN Global Knowledge Base & Documentation",
    "description": "Find comprehensive guides, tutorials, and documentation for RTN Global products and services. Access technical articles, troubleshooting tips, and best practices.",
    "url": "https://rtnglobal.site/knowledge-base",
    "breadcrumb": {
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://rtnglobal.site"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Knowledge Base",
          "item": "https://rtnglobal.site/knowledge-base"
        }
      ]
    },
    "publisher": {
      "@type": "Organization",
      "name": "RTN Global",
      "logo": {
        "@type": "ImageObject",
        "url": "https://rtnglobal.site/images/logo.png"
      }
    },
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How do I set up two-factor authentication?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "To set up two-factor authentication, navigate to your account settings, select the security tab, and enable 2FA. Follow the instructions to link your authentication app or phone number."
        }
      },
      {
        "@type": "Question",
        "name": "What are the API rate limits?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Our API rate limits depend on your subscription tier. Basic plans have 1,000 requests per day, while enterprise plans have higher or customizable limits. Check our API documentation for detailed information."
        }
      },
      {
        "@type": "Question",
        "name": "How do I reset my password?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "To reset your password, click on the 'Forgot Password' link on the login page. Enter your email address, and we'll send you a password reset link that will expire after 24 hours."
        }
      }
    ]
  };
  
  return (
    <Layout>
      {/* Structured Data */}
      <script 
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      
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
            {Object.values(categories).map((category) => {
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
                        <span className="text-sm text-muted-foreground">{category.count}+ articles</span>
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