import { Layout } from "@/components/layout/layout"
import { Loader2 } from "lucide-react"

export default function BlogPostLoading() {
  return (
    <Layout>
      <article className="max-w-4xl mx-auto px-4 py-12 sm:px-6 sm:py-16 lg:py-20">
        {/* Back Link Skeleton */}
        <div className="mb-8">
          <div className="h-5 bg-muted/70 animate-pulse rounded-lg w-24"></div>
        </div>
        
        {/* Header Skeleton */}
        <header className="mb-12">
          {/* Category & Date */}
          <div className="flex items-center gap-2 mb-4">
            <div className="h-6 bg-primary/30 animate-pulse rounded-lg w-20"></div>
            <div className="h-4 bg-muted/70 animate-pulse rounded-lg w-4"></div>
            <div className="h-4 bg-muted/70 animate-pulse rounded-lg w-32"></div>
          </div>
          
          {/* Title */}
          <div className="h-14 bg-muted/70 animate-pulse rounded-lg w-full mb-6"></div>
          
          {/* Featured Image */}
          <div className="relative w-full h-80 sm:h-96 mb-8 rounded-lg bg-muted/70 animate-pulse"></div>
          
          {/* Author */}
          <div className="flex items-center gap-4">
            <div className="h-12 w-12 rounded-full bg-primary/20 animate-pulse"></div>
            <div>
              <div className="h-5 bg-muted/70 animate-pulse rounded-lg w-32 mb-1"></div>
              <div className="h-4 bg-muted/70 animate-pulse rounded-lg w-24"></div>
            </div>
          </div>
        </header>
        
        {/* Content Skeleton */}
        <div className="space-y-6 mb-12">
          <div className="h-5 bg-muted/70 animate-pulse rounded-lg w-full"></div>
          <div className="h-5 bg-muted/70 animate-pulse rounded-lg w-5/6"></div>
          <div className="h-5 bg-muted/70 animate-pulse rounded-lg w-full"></div>
          <div className="h-5 bg-muted/70 animate-pulse rounded-lg w-4/5"></div>
          
          <div className="h-8 bg-muted/70 animate-pulse rounded-lg w-1/2 mt-10 mb-4"></div>
          
          <div className="h-5 bg-muted/70 animate-pulse rounded-lg w-full"></div>
          <div className="h-5 bg-muted/70 animate-pulse rounded-lg w-5/6"></div>
          <div className="h-5 bg-muted/70 animate-pulse rounded-lg w-full"></div>
          
          <div className="h-8 bg-muted/70 animate-pulse rounded-lg w-1/3 mt-10 mb-4"></div>
          
          <div className="h-5 bg-muted/70 animate-pulse rounded-lg w-full"></div>
          <div className="h-5 bg-muted/70 animate-pulse rounded-lg w-11/12"></div>
          <div className="h-5 bg-muted/70 animate-pulse rounded-lg w-full"></div>
        </div>
        
        {/* Tags Skeleton */}
        <div className="flex flex-wrap gap-2 mb-8">
          <div className="h-5 bg-muted/70 animate-pulse rounded-lg w-5 mr-1"></div>
          {[1, 2, 3].map((i) => (
            <div key={i} className="h-6 bg-secondary/50 animate-pulse rounded-full w-16"></div>
          ))}
        </div>
        
        {/* Related Posts Skeleton */}
        <div className="border-t border-border pt-8 mb-8">
          <div className="h-8 bg-muted/70 animate-pulse rounded-lg w-48 mb-6"></div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-card border border-border rounded-lg overflow-hidden h-full flex flex-col">
                <div className="bg-muted/70 animate-pulse h-40"></div>
                <div className="p-4 space-y-2">
                  <div className="h-5 bg-muted/70 animate-pulse rounded-lg w-full"></div>
                  <div className="h-4 bg-muted/70 animate-pulse rounded-lg w-5/6"></div>
                  <div className="h-3 bg-muted/70 animate-pulse rounded-lg w-1/3 mt-4"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Share Skeleton */}
        <div className="border-t border-border pt-8">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div className="h-5 bg-muted/70 animate-pulse rounded-lg w-32"></div>
            <div className="flex gap-3">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="h-9 w-9 bg-muted/70 animate-pulse rounded-full"></div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Central Loading Indicator */}
        <div className="fixed inset-0 flex items-center justify-center bg-background/60 z-50">
          <div className="flex flex-col items-center p-6 rounded-xl bg-card shadow-lg">
            <Loader2 className="h-16 w-16 animate-spin text-primary mb-4" />
            <p className="text-lg font-medium">Loading article...</p>
          </div>
        </div>
      </article>
    </Layout>
  )
}
