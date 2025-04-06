"use client";

import Link from "next/link";
import { notFound } from "next/navigation";
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
  ChevronRight,
  Clock,
  Eye,
  Star,
  Filter,
  Calendar,
  ArrowLeft,
  Home
} from "lucide-react";

// Knowledge base categories
const categories = {
  "getting-started": {
    id: "getting-started",
    title: "Getting Started Guides",
    description: "Essential guides to help you start using our platform efficiently. Learn the basics and get up to speed quickly.",
    icon: Book,
    color: "bg-blue-100 text-blue-600 dark:bg-blue-950/30 dark:text-blue-400",
    count: 24
  },
  "technical": {
    id: "technical",
    title: "Technical Documentation",
    description: "Detailed technical specifications and implementation guides for developers and technical users.",
    icon: FileText,
    color: "bg-purple-100 text-purple-600 dark:bg-purple-950/30 dark:text-purple-400",
    count: 48
  },
  "api": {
    id: "api",
    title: "API References",
    description: "Complete API documentation, endpoints, and code examples for integrating with our platform.",
    icon: Code,
    color: "bg-emerald-100 text-emerald-600 dark:bg-emerald-950/30 dark:text-emerald-400",
    count: 35
  },
  "best-practices": {
    id: "best-practices",
    title: "Best Practices",
    description: "Recommendations and best practices for optimal results and efficient use of our platform.",
    icon: CheckCircle,
    color: "bg-amber-100 text-amber-600 dark:bg-amber-950/30 dark:text-amber-400",
    count: 17
  },
  "troubleshooting": {
    id: "troubleshooting",
    title: "Troubleshooting",
    description: "Solutions for common problems and error resolutions to help you overcome challenges quickly.",
    icon: HelpCircle,
    color: "bg-red-100 text-red-600 dark:bg-red-950/30 dark:text-red-400",
    count: 29
  },
  "releases": {
    id: "releases",
    title: "Release Notes",
    description: "Latest updates, features, and changes to our platform to keep you informed of improvements.",
    icon: FileText,
    color: "bg-indigo-100 text-indigo-600 dark:bg-indigo-950/30 dark:text-indigo-400",
    count: 12
  },
  "account-access": {
    id: "account-access",
    title: "Account Access",
    description: "Information about account security, login issues, and verification procedures to keep your account secure.",
    icon: AlertCircle,
    color: "bg-cyan-100 text-cyan-600 dark:bg-cyan-950/30 dark:text-cyan-400",
    count: 18
  },
  "billing": {
    id: "billing",
    title: "Billing & Payments",
    description: "Information about invoices, payment methods, and subscription management for your account.",
    icon: FileQuestion,
    color: "bg-teal-100 text-teal-600 dark:bg-teal-950/30 dark:text-teal-400",
    count: 22
  }
};

// Generate sample articles for each category
const generateArticlesForCategory = (categoryId: string) => {
  const category = categories[categoryId as keyof typeof categories];
  if (!category) return [];
  
  // Sample article titles and descriptions based on category
  const articleTemplates = {
    "getting-started": [
      { 
        slug: "platform-overview", 
        title: "Platform Overview: Getting Started with RTN Global", 
        description: "An introduction to the RTN Global platform, its core features, and how to navigate the interface effectively.",
        readTime: "5 min read",
        date: "June 15, 2023",
        popular: true
      },
      { 
        slug: "creating-your-account", 
        title: "Creating and Setting Up Your Account", 
        description: "Step-by-step guide to creating a new account, verifying your email, and configuring your profile settings.",
        readTime: "4 min read",
        date: "June 10, 2023",
        popular: false
      },
      { 
        slug: "dashboard-navigation", 
        title: "Dashboard Navigation Guide", 
        description: "Learn how to navigate the dashboard interface and access all the tools and features available to you.",
        readTime: "6 min read",
        date: "June 5, 2023",
        popular: true
      },
      { 
        slug: "first-project", 
        title: "Creating Your First Project", 
        description: "A complete walkthrough of creating your first project on the platform, from concept to implementation.",
        readTime: "8 min read",
        date: "May 28, 2023",
        popular: true
      },
      { 
        slug: "user-roles", 
        title: "Understanding User Roles and Permissions", 
        description: "Learn about the different user roles available and how to manage permissions for your team members.",
        readTime: "5 min read",
        date: "May 22, 2023",
        popular: false
      }
    ],
    "account-access": [
      { 
        slug: "reset-password", 
        title: "How to Reset Your Password", 
        description: "Step-by-step instructions for resetting your password if you've forgotten it or need to change it for security reasons.",
        readTime: "3 min read",
        date: "June 18, 2023",
        popular: true
      },
      { 
        slug: "two-factor-authentication", 
        title: "Setting Up Two-Factor Authentication", 
        description: "Enhance your account security by enabling two-factor authentication (2FA) with our easy setup guide.",
        readTime: "5 min read",
        date: "June 12, 2023",
        popular: true
      },
      { 
        slug: "account-verification", 
        title: "Account Verification Process", 
        description: "Learn about our account verification process and how to ensure your account is fully verified for all services.",
        readTime: "4 min read",
        date: "June 8, 2023",
        popular: false
      },
      { 
        slug: "login-issues", 
        title: "Troubleshooting Login Issues", 
        description: "Common login problems and their solutions to help you access your account when you're experiencing difficulties.",
        readTime: "6 min read",
        date: "May 30, 2023",
        popular: true
      }
    ],
    "api": [
      { 
        slug: "authentication", 
        title: "API Authentication Guide", 
        description: "Learn how to authenticate with our API using API keys, OAuth, and other methods to secure your integrations.",
        readTime: "7 min read",
        date: "June 20, 2023",
        popular: true
      },
      { 
        slug: "rate-limits", 
        title: "Understanding API Rate Limits", 
        description: "Information about our API rate limits, how they work, and best practices to avoid hitting limits in your applications.",
        readTime: "5 min read",
        date: "June 15, 2023",
        popular: false
      },
      { 
        slug: "new-endpoints", 
        title: "New API Endpoints for Analytics", 
        description: "Explore the new analytics API endpoints that provide deeper insights into your application's performance.",
        readTime: "8 min read",
        date: "June 10, 2023",
        popular: true
      },
      { 
        slug: "error-handling", 
        title: "API Error Handling Best Practices", 
        description: "Guidance on handling API errors and status codes to create robust integrations that gracefully handle failures.",
        readTime: "6 min read",
        date: "June 5, 2023",
        popular: false
      }
    ],
    "billing": [
      { 
        slug: "update-payment-method", 
        title: "Update Your Payment Method", 
        description: "Step-by-step guide for updating or changing your payment method associated with your account.",
        readTime: "4 min read",
        date: "June 22, 2023",
        popular: true
      },
      { 
        slug: "subscription-management", 
        title: "Managing Your Subscription Plan", 
        description: "Learn how to upgrade, downgrade, or manage your subscription plan to meet your changing needs.",
        readTime: "5 min read",
        date: "June 18, 2023",
        popular: false
      },
      { 
        slug: "invoice-history", 
        title: "Accessing Your Invoice History", 
        description: "How to find, view, and download your past invoices and billing statements for your records.",
        readTime: "3 min read",
        date: "June 12, 2023",
        popular: true
      },
      { 
        slug: "payment-issues", 
        title: "Resolving Payment Issues", 
        description: "Common payment problems and their solutions to ensure uninterrupted access to your subscription.",
        readTime: "6 min read",
        date: "June 8, 2023",
        popular: false
      }
    ]
  };

  // Generate more articles if templates don't exist for this category
  const defaultArticles = [
    { 
      slug: "introduction", 
      title: `Introduction to ${category.title}`, 
      description: `A comprehensive introduction to ${category.title.toLowerCase()} and how they can benefit your projects.`,
      readTime: "5 min read",
      date: "June 20, 2023",
      popular: true
    },
    { 
      slug: "getting-started", 
      title: `Getting Started with ${category.title}`, 
      description: `Learn the basics of ${category.title.toLowerCase()} and how to implement them in your workflows.`,
      readTime: "7 min read",
      date: "June 15, 2023",
      popular: true
    },
    { 
      slug: "advanced-techniques", 
      title: `Advanced ${category.title} Techniques`, 
      description: `Take your knowledge to the next level with these advanced ${category.title.toLowerCase()} techniques and strategies.`,
      readTime: "9 min read",
      date: "June 10, 2023",
      popular: false
    },
    { 
      slug: "common-issues", 
      title: `Common ${category.title} Issues and Solutions`, 
      description: `Troubleshoot common issues that arise when working with ${category.title.toLowerCase()} and learn effective solutions.`,
      readTime: "6 min read",
      date: "June 5, 2023",
      popular: true
    }
  ];

  // Use category-specific templates if they exist, otherwise use default
  const templates = articleTemplates[categoryId as keyof typeof articleTemplates] || defaultArticles;
  
  // Create articles from templates, adding category path
  return templates.map((template, index) => ({
    id: `${categoryId}/${template.slug}`,
    title: template.title,
    description: template.description,
    category: category.title,
    readTime: template.readTime,
    date: template.date,
    path: `/knowledge-base/${categoryId}/${template.slug}`,
    popular: template.popular,
    views: Math.floor(10000 / (index + 1)) // Generate decreasing view counts
  }));
};

type CategoryPageProps = {
  params: {
    category: string;
  }
};

export default function CategoryPage({ params }: CategoryPageProps) {
  const { category } = params;
  
  // Check if category exists
  if (!categories[category as keyof typeof categories]) {
    notFound();
  }
  
  const categoryInfo = categories[category as keyof typeof categories];
  const articles = generateArticlesForCategory(category);
  const popularArticles = articles.filter(article => article.popular);
  
  // Generate icon component based on category
  const CategoryIcon = categoryInfo.icon;

  return (
    <Layout>
      {/* Header Section */}
      <section className="py-10 bg-gradient-to-br from-background to-muted/50">
        <div className="container px-4 mx-auto">
          
          <div className="flex items-start gap-4 mb-6">
            <div className={`w-16 h-16 rounded-full ${categoryInfo.color} flex items-center justify-center flex-shrink-0`}>
              <CategoryIcon className="w-8 h-8" />
            </div>
            <div>
              <h1 className="text-3xl font-bold tracking-tight mb-2 md:text-4xl">{categoryInfo.title}</h1>
              <p className="text-muted-foreground max-w-3xl">
                {categoryInfo.description}
              </p>
              <div className="mt-2 text-sm text-muted-foreground">{categoryInfo.count} articles in this category</div>
            </div>
          </div>
          
          {/* Search Bar */}
          <div className="mt-8 max-w-2xl relative">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
              <Input
                type="text"
                placeholder={`Search in ${categoryInfo.title}...`}
                className="pl-10 py-6 text-base"
              />
              <Button className="absolute right-1 top-1/2 transform -translate-y-1/2">
                Search
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      {/* Popular Articles in this Category */}
      {popularArticles.length > 0 && (
        <section className="py-10 bg-background">
          <div className="container px-4 mx-auto">
            <h2 className="text-2xl font-bold tracking-tight mb-6">Popular in {categoryInfo.title}</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {popularArticles.map((article) => (
                <Link key={article.id} href={article.path}>
                  <Card className="h-full border border-border hover:border-primary/50 hover:shadow-md transition-all duration-300">
                    <div className="p-6">
                      <h3 className="font-semibold text-lg mb-3 line-clamp-2 hover:text-primary transition-colors">
                        {article.title}
                      </h3>
                      <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                        {article.description}
                      </p>
                      <div className="flex justify-between items-center mt-4">
                        <span className="text-sm text-muted-foreground flex items-center">
                          <Clock className="w-4 h-4 mr-1" />
                          {article.readTime}
                        </span>
                        <span className="text-sm text-muted-foreground flex items-center">
                          <Eye className="w-4 h-4 mr-1" />
                          {article.views.toLocaleString()}
                        </span>
                      </div>
                    </div>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
      
      {/* All Articles */}
      <section className="py-10 bg-muted/30">
        <div className="container px-4 mx-auto">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold tracking-tight">All Articles</h2>
            <div className="flex items-center">
              <Button variant="outline" size="sm" className="gap-2">
                <Filter className="h-4 w-4" />
                Filter
              </Button>
              <Button variant="ghost" size="sm" className="ml-2 gap-2">
                <Calendar className="h-4 w-4" />
                Sort by Date
              </Button>
            </div>
          </div>
          
          <div className="grid gap-4">
            {articles.map((article) => (
              <Link key={article.id} href={article.path}>
                <Card className="border border-border hover:border-primary/30 transition-colors">
                  <div className="p-6">
                    <h3 className="font-semibold text-lg mb-2 hover:text-primary transition-colors">
                      {article.title}
                    </h3>
                    <p className="text-muted-foreground mb-4 line-clamp-2">
                      {article.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <span className="text-sm text-muted-foreground flex items-center">
                          <Clock className="w-4 h-4 mr-1" />
                          {article.readTime}
                        </span>
                        <span className="text-sm text-muted-foreground">
                          {article.date}
                        </span>
                      </div>
                      <ChevronRight className="h-5 w-5 text-muted-foreground" />
                    </div>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
          
          <div className="mt-10 flex justify-center">
            <Button asChild variant="outline" className="gap-2">
              <Link href="/knowledge-base">
                <ArrowLeft className="h-4 w-4" />
                Back to All Categories
              </Link>
            </Button>
          </div>
        </div>
      </section>
      
      {/* Related Categories */}
      <section className="py-10 bg-background">
        <div className="container px-4 mx-auto">
          <h2 className="text-2xl font-bold tracking-tight mb-6">Related Categories</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {Object.values(categories)
              .filter(cat => cat.id !== category)
              .slice(0, 3)
              .map((relatedCategory) => (
                <Link key={relatedCategory.id} href={`/knowledge-base/${relatedCategory.id}`}>
                  <Card className="h-full border border-border hover:border-primary/50 hover:shadow-md transition-all duration-300">
                    <div className="p-6">
                      <div className="flex items-center gap-3 mb-2">
                        <div className={`w-10 h-10 rounded-full ${relatedCategory.color} flex items-center justify-center flex-shrink-0`}>
                          <relatedCategory.icon className="w-5 h-5" />
                        </div>
                        <h3 className="font-semibold">{relatedCategory.title}</h3>
                      </div>
                      <p className="text-muted-foreground text-sm mb-2 line-clamp-2">
                        {relatedCategory.description}
                      </p>
                      <div className="flex justify-between items-center mt-2">
                        <span className="text-sm text-muted-foreground">{relatedCategory.count} articles</span>
                        <span className="text-primary text-sm font-medium flex items-center">
                          View Category
                          <ChevronRight className="ml-1 h-4 w-4" />
                        </span>
                      </div>
                    </div>
                  </Card>
                </Link>
              ))}
          </div>
        </div>
      </section>
    </Layout>
  );
} 