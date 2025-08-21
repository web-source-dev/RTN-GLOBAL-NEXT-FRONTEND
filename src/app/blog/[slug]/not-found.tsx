import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Search, ArrowLeft, FileText, Clock, User } from "lucide-react"
import { H1, H2, P } from "@/components/ui/typography"

export default function BlogPostNotFound() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/5 via-background to-muted/20">
        <div className="container mx-auto px-4 py-16 md:py-24">
          <div className="max-w-4xl mx-auto text-center">
            {/* Breadcrumb */}
            <nav className="flex items-center justify-center space-x-2 text-sm text-muted-foreground mb-8">
              <Link href="/" className="hover:text-foreground transition-colors">
                Home
              </Link>
              <span>/</span>
              <Link href="/blog" className="hover:text-foreground transition-colors">
                Blog
              </Link>
              <span>/</span>
              <span className="text-foreground">Not Found</span>
            </nav>

            {/* 404 Content */}
            <div className="mb-12">
              <div className="text-6xl md:text-8xl font-bold text-primary/20 mb-6">404</div>
              <H1 className="mb-6">Blog Post Not Found</H1>
              <P className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                The blog post you're looking for doesn't exist or may have been moved. Let's help you find what you're looking for.
              </P>
            </div>

            {/* Search Section */}
            <div className="mb-12">
              <H2 className="mb-4">Search for another article</H2>
              <div className="max-w-md mx-auto">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <input
                    type="text"
                    placeholder="Search articles..."
                    className="w-full pl-10 pr-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20"
                  />
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link href="/blog">
                <Button size="lg" className="flex items-center space-x-2">
                  <ArrowLeft className="h-4 w-4" />
                  <span>Back to Blog</span>
                </Button>
              </Link>
              <Link href="/contact">
                <Button size="lg" variant="outline">
                  Contact Support
            </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Articles Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <H2 className="text-center mb-12">Popular Articles</H2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Sample Popular Articles */}
              <Card className="group hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-2 text-sm text-muted-foreground mb-3">
                    <FileText className="h-4 w-4" />
                    <span>Web Development</span>
                  </div>
                  <H2 className="text-lg font-semibold mb-3 group-hover:text-primary transition-colors">
                    Modern Web Development Best Practices
                  </H2>
                  <P className="text-muted-foreground text-sm mb-4">
                    Learn the latest techniques and tools for building modern, scalable web applications.
                  </P>
                  <div className="flex items-center justify-between text-xs text-muted-foreground">
                    <div className="flex items-center space-x-1">
                      <Clock className="h-3 w-3" />
                      <span>5 min read</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <User className="h-3 w-3" />
                      <span>John Doe</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-2 text-sm text-muted-foreground mb-3">
                    <FileText className="h-4 w-4" />
                    <span>UI/UX Design</span>
                  </div>
                  <H2 className="text-lg font-semibold mb-3 group-hover:text-primary transition-colors">
                    Creating User-Centered Design Systems
                  </H2>
                  <P className="text-muted-foreground text-sm mb-4">
                    Discover how to build comprehensive design systems that improve user experience.
                  </P>
                  <div className="flex items-center justify-between text-xs text-muted-foreground">
                    <div className="flex items-center space-x-1">
                      <Clock className="h-3 w-3" />
                      <span>7 min read</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <User className="h-3 w-3" />
                      <span>Jane Smith</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-2 text-sm text-muted-foreground mb-3">
                    <FileText className="h-4 w-4" />
                    <span>Digital Marketing</span>
                  </div>
                  <H2 className="text-lg font-semibold mb-3 group-hover:text-primary transition-colors">
                    SEO Strategies for 2024
                  </H2>
                  <P className="text-muted-foreground text-sm mb-4">
                    Stay ahead of the competition with these proven SEO techniques and strategies.
                  </P>
                  <div className="flex items-center justify-between text-xs text-muted-foreground">
                    <div className="flex items-center space-x-1">
                      <Clock className="h-3 w-3" />
                      <span>6 min read</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <User className="h-3 w-3" />
                      <span>Mike Johnson</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
        </div>
        
            {/* View All Articles Button */}
            <div className="text-center mt-12">
          <Link href="/blog">
                <Button size="lg" variant="outline">
                  View All Articles
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <H2 className="text-white mb-4">Need Help Finding Something?</H2>
            <P className="text-white/90 mb-8 max-w-2xl mx-auto">
              Our team is here to help you find the information you need. Contact us for personalized assistance.
            </P>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button size="lg" variant="secondary">
                  Contact Us
            </Button>
          </Link>
              <Link href="/knowledge-base">
                <Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10">
                  Knowledge Base
                </Button>
          </Link>
        </div>
      </div>
        </div>
      </section>
    </div>
  )
}
