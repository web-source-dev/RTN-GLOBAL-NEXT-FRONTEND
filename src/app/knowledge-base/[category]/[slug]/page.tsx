"use client";

import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Layout } from "@/components/layout/layout";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  ChevronRight, 
  Home, 
  Clock, 
  Calendar, 
  ThumbsUp, 
  ThumbsDown, 
  Copy, 
  Share, 
  Printer, 
  BookOpen, 
  ArrowLeft,
  ExternalLink,
  Check,
  Mail,
  MessageSquare,
  FileText,
  Briefcase
} from "lucide-react";
import { categories, generateArticleData, generateTableOfContents, formatContent } from "@/data/knowledge-base";
import { useState } from "react";

type ArticlePageProps = {
  params: {
    category: string;
    slug: string;
  }
};

export default function ArticlePage({ params }: ArticlePageProps) {
  // Destructure params directly - since we&apos;re in a client component with &quot;use client&quot;
  // Client components automatically handle the unwrapping of params
  const { category, slug } = params;
  
  const [feedbackGiven, setFeedbackGiven] = useState<'helpful' | 'unhelpful' | null>(null);
  const [copied, setCopied] = useState(false);
  
  // Check if category exists
  if (!categories[category as keyof typeof categories]) {
    notFound();
  }
  
  // Get article data
  const article = generateArticleData(category, slug);
  if (!article) {
    notFound();
  }
  
  const categoryInfo = categories[category as keyof typeof categories];
  const tableOfContents = generateTableOfContents(article.content);
  const formattedContent = formatContent(article.content);
  const CategoryIcon = categoryInfo.icon;

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleFeedback = (type: 'helpful' | 'unhelpful') => {
    setFeedbackGiven(type);
    // Here you would typically send this feedback to your backend
  };

  return (
    <Layout>
      <div className="bg-gradient-to-b from-background to-muted/10 py-8 border-b border-border">
        <div className="container mx-auto px-4">
          {/* Navigation Path */}
          <div className="flex flex-wrap items-center gap-1.5 mb-6 text-sm">
            <Link href="/" className="text-muted-foreground hover:text-foreground transition-colors">
              <Home className="w-4 h-4" />
              <span className="sr-only">Home</span>
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-muted-foreground flex-shrink-0" />
            <Link href="/knowledge-base" className="text-muted-foreground hover:text-foreground transition-colors">
              Knowledge Base
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-muted-foreground flex-shrink-0" />
            <Link href={`/knowledge-base/${category}`} className="text-muted-foreground hover:text-foreground transition-colors">
              {categoryInfo.title}
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-muted-foreground flex-shrink-0" />
            <span className="text-foreground font-medium line-clamp-1">{article.title}</span>
          </div>
          
          {/* Category Badge */}
          <div className="mb-4">
            <Link 
              href={`/knowledge-base/${category}`}
              className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm ${categoryInfo.color}`}
            >
              <CategoryIcon className="w-4 h-4" />
              {categoryInfo.title}
            </Link>
          </div>
          
          {/* Article Header */}
          <div className="max-w-3xl">
            <h1 className="text-3xl md:text-4xl font-bold mb-3 tracking-tight">{article.title}</h1>
            <p className="text-muted-foreground text-lg mb-5">{article.description}</p>
            
            {/* Article Meta */}
            <div className="flex flex-wrap items-center gap-5 text-sm text-muted-foreground">
              <span className="flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-muted-foreground/70" />
                {article.readTime}
              </span>
              <span className="flex items-center gap-1.5">
                <Calendar className="w-4 h-4 text-muted-foreground/70" />
                Last updated: {article.lastUpdated}
              </span>
              <span className="flex items-center gap-1.5">
                <Mail className="w-4 h-4 text-muted-foreground/70" />
                {article.author}
              </span>
            </div>
          </div>
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Table of Contents - Desktop */}
          <div className="hidden lg:block lg:col-span-3 lg:row-span-2">
            <div className="sticky top-8">
              <div className="p-5 bg-muted/40 rounded-lg border border-border">
                <h3 className="font-semibold mb-4 flex items-center gap-2 text-base">
                  <BookOpen className="w-4 h-4" />
                  Table of Contents
                </h3>
                <nav className="space-y-1">
                  {tableOfContents.map((heading) => (
                    <a 
                      key={heading.id} 
                      href={`#${heading.id}`}
                      className={`block text-muted-foreground hover:text-foreground py-1.5 transition-colors ${
                        heading.level === 3 ? 'pl-4 text-sm' : 'font-medium'
                      }`}
                    >
                      {heading.title}
                    </a>
                  ))}
                </nav>
              </div>
              
              {/* Article Actions */}
              <div className="mt-6 p-5 bg-muted/40 rounded-lg border border-border">
                <h3 className="font-semibold mb-4 text-base">Article Actions</h3>
                <div className="space-y-2.5">
                  <Button variant="outline" size="sm" className="w-full justify-start gap-2" onClick={handleCopyLink}>
                    {copied ? (
                      <>
                        <Check className="w-4 h-4 text-green-500" />
                        <span className="text-green-500">Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-4 h-4" />
                        Copy Link
                      </>
                    )}
                  </Button>
                  <Button variant="outline" size="sm" className="w-full justify-start gap-2" asChild>
                    <a href={`mailto:?subject=${encodeURIComponent(article.title)}&body=${encodeURIComponent(window.location.href)}`}>
                      <Share className="w-4 h-4" />
                      Share Article
                    </a>
                  </Button>
                  <Button variant="outline" size="sm" className="w-full justify-start gap-2" onClick={() => window.print()}>
                    <Printer className="w-4 h-4" />
                    Print Article
                  </Button>
                </div>
              </div>

              {/* Related Articles - Desktop */}
              <div className="mt-6 p-5 bg-muted/40 rounded-lg border border-border">
                <h3 className="font-semibold mb-4 text-base">Related Articles</h3>
                <div className="space-y-3">
                  {article.relatedArticles.map((relatedArticle, index) => (
                    <Link 
                      key={index} 
                      href={relatedArticle.path}
                      className="block p-3 rounded-md hover:bg-primary/5 transition-colors border border-transparent hover:border-primary/20"
                    >
                      <h4 className="font-medium text-sm hover:text-primary transition-colors line-clamp-2">
                        {relatedArticle.title}
                      </h4>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          {/* Article Content */}
          <div className="lg:col-span-9">
            <Card className="p-6 md:p-8 shadow-sm">
              {/* Mobile: Table of Contents Dropdown */}
              <div className="lg:hidden mb-6 p-4 bg-muted/30 rounded-lg">
                <details className="group">
                  <summary className="flex items-center justify-between cursor-pointer list-none font-medium">
                    <div className="flex items-center gap-2">
                      <BookOpen className="w-4 h-4" />
                      Table of Contents
                    </div>
                    <ChevronRight className="w-5 h-5 transition-transform group-open:rotate-90" />
                  </summary>
                  <nav className="mt-3 space-y-1 pl-6 pt-2">
                    {tableOfContents.map((heading) => (
                      <a 
                        key={heading.id} 
                        href={`#${heading.id}`}
                        className={`block text-muted-foreground hover:text-foreground py-1 transition-colors ${
                          heading.level === 3 ? 'pl-4 text-sm' : ''
                        }`}
                      >
                        {heading.title}
                      </a>
                    ))}
                  </nav>
                </details>
              </div>
            
              {/* Article Content */}
              <div className="prose prose-lg max-w-none dark:prose-invert prose-headings:scroll-mt-20">
                <div dangerouslySetInnerHTML={{ __html: formattedContent }} />
              </div>
              
              {/* Mobile: Article Actions */}
              <div className="lg:hidden mt-8 pt-6 border-t border-border flex flex-wrap gap-3">
                <Button variant="outline" size="sm" className="gap-2" onClick={handleCopyLink}>
                  {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                  {copied ? "Copied!" : "Copy Link"}
                </Button>
                <Button variant="outline" size="sm" className="gap-2" asChild>
                  <a href={`mailto:?subject=${encodeURIComponent(article.title)}&body=${encodeURIComponent(window.location.href)}`}>
                    <Share className="w-4 h-4" />
                    Share
                  </a>
                </Button>
                <Button variant="outline" size="sm" className="gap-2" onClick={() => window.print()}>
                  <Printer className="w-4 h-4" />
                  Print
                </Button>
              </div>
              
              {/* Tags */}
              <div className="mt-8 pt-6 border-t border-border">
                <div className="flex flex-wrap gap-2">
                  {article.tags.map((tag) => (
                    <Badge 
                      key={tag} 
                      variant="secondary"
                      className="px-3 py-1 bg-primary/10 text-primary hover:bg-primary/15 border-transparent"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
              
              {/* Article Feedback */}
              <div className="mt-12 pt-6 border-t border-border">
                <h3 className="text-lg font-medium mb-4">Was this article helpful?</h3>
                <div className="flex items-center gap-4">
                  <Button 
                    variant={feedbackGiven === 'helpful' ? 'default' : 'outline'} 
                    onClick={() => handleFeedback('helpful')}
                    disabled={feedbackGiven !== null}
                    className="gap-2"
                  >
                    <ThumbsUp className="h-4 w-4" />
                    Yes, it helped
                  </Button>
                  <Button 
                    variant={feedbackGiven === 'unhelpful' ? 'default' : 'outline'} 
                    onClick={() => handleFeedback('unhelpful')}
                    disabled={feedbackGiven !== null}
                    className="gap-2"
                  >
                    <ThumbsDown className="h-4 w-4" />
                    No, I need more help
                  </Button>
                </div>
                {feedbackGiven === 'unhelpful' && (
                  <div className="mt-4">
                    <p className="text-muted-foreground mb-3">We're sorry this article wasn't helpful. You might want to:</p>
                    <div className="space-y-2">
                      <Link href="/contact" className="text-primary hover:underline flex items-center gap-1.5">
                        <MessageSquare className="h-4 w-4" /> Contact our support team
                      </Link>
                      <Link href="/knowledge-base" className="text-primary hover:underline flex items-center gap-1.5">
                        <BookOpen className="h-4 w-4" /> Browse more articles
                      </Link>
                    </div>
                  </div>
                )}
              </div>

              {/* Enhanced: Related Services and Industries Section */}
              <div className="mt-12 pt-6 border-t border-border">
                <h3 className="text-lg font-medium mb-6">Related Services & Industries</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* Related Services */}
                  <Link 
                    href="/services"
                    className="p-4 bg-muted/30 rounded-lg hover:bg-primary/5 hover:border-primary/10 border border-transparent transition-colors"
                  >
                    <h4 className="font-medium mb-2 flex items-center gap-2">
                      <FileText className="h-4 w-4 text-primary" />
                      Our Services
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      Explore our comprehensive range of web development and digital marketing solutions.
                    </p>
                  </Link>
                  
                  {/* Related Industries */}
                  <Link 
                    href="/industries"
                    className="p-4 bg-muted/30 rounded-lg hover:bg-primary/5 hover:border-primary/10 border border-transparent transition-colors"
                  >
                    <h4 className="font-medium mb-2 flex items-center gap-2">
                      <Briefcase className="h-4 w-4 text-primary" />
                      Industry Solutions
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      Discover how our expertise benefits businesses across different industries.
                    </p>
                  </Link>
                </div>
              </div>
              
              {/* Enhanced: Recommended Reading Section */}
              <div className="mt-12 pt-6 border-t border-border">
                <h3 className="text-lg font-medium mb-6">Recommended Reading</h3>
                <div className="space-y-4">
                  <Link 
                    href="/blog"
                    className="block p-4 bg-muted/30 rounded-lg hover:bg-primary/5 hover:border-primary/10 border border-transparent transition-colors"
                  >
                    <h4 className="font-medium mb-2">Latest Blog Posts</h4>
                    <p className="text-sm text-muted-foreground">
                      Read our latest thoughts, insights, and tips on web development and digital marketing.
                    </p>
                  </Link>
                  
                  <Link 
                    href="/case-studies"
                    className="block p-4 bg-muted/30 rounded-lg hover:bg-primary/5 hover:border-primary/10 border border-transparent transition-colors"
                  >
                    <h4 className="font-medium mb-2">Case Studies</h4>
                    <p className="text-sm text-muted-foreground">
                      See real-world examples of how we've helped businesses achieve their goals.
                    </p>
                  </Link>
                  
                  <Link 
                    href="/knowledge-base"
                    className="block p-4 bg-muted/30 rounded-lg hover:bg-primary/5 hover:border-primary/10 border border-transparent transition-colors"
                  >
                    <h4 className="font-medium mb-2">Knowledge Base Home</h4>
                    <p className="text-sm text-muted-foreground">
                      Browse all categories and find more helpful guides and resources.
                    </p>
                  </Link>
                </div>
              </div>
            </Card>
            
            {/* Back to Category */}
            <div className="mt-6 mb-8 flex">
              <Button asChild variant="outline" size="sm" className="gap-2">
                <Link href={`/knowledge-base/${category}`}>
                  <ArrowLeft className="h-4 w-4" />
                  Back to {categoryInfo.title}
                </Link>
              </Button>
            </div>
            
            {/* Next Steps / CTA */}
            <div className="mt-10 p-6 rounded-xl bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20">
              <h3 className="font-semibold text-xl mb-4">Still have questions?</h3>
              <p className="text-muted-foreground mb-5">
                If you couldn&apos;t find the information you were looking for, our support team is here to help.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button asChild className="gap-2">
                  <Link href="/support/submit">
                    Contact Support
                    <ExternalLink className="h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild variant="outline">
                  <Link href="/contact/free-consultation">
                    Request a Consultation
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
} 