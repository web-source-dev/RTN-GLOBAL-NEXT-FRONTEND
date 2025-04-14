"use client";

import Link from "next/link";
import { notFound } from "next/navigation";
import { Layout } from "@/components/layout/layout";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { 
  Search, 
  Clock, 
  Calendar, 
  Eye, 
  Filter,
  ChevronRight,
  ArrowLeft,
} from "lucide-react";
import { categories, generateArticlesForCategory } from "@/data/knowledge-base";

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
      {/* JSON-LD structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            "name": `${categoryInfo.title} - Knowledge Base | RTN Global`,
            "description": categoryInfo.description,
            "url": `https://rtnglobal.co/knowledge-base/${category}`,
            "hasPart": articles.map(article => ({
              "@type": "Article",
              "headline": article.title,
              "description": article.description,
              "url": `https://rtnglobal.co${article.path}`
            })),
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
              },
              "sameAs": [
                "https://www.instagram.com/rtnglobalofficial/",
                "https://www.threads.net/@rtnglobalofficial",
                "https://www.tiktok.com/@rtnglobalofficial",
                "https://web.facebook.com/people/RTN-Global/61573828870610/",
                "https://www.youtube.com/@RTNGlobal",
                "https://www.linkedin.com/in/rtnglobalofficial/"
              ]
            }
          })
        }}
      />
      
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
                          {article.views?.toLocaleString()}
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