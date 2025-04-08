import { Layout } from "@/components/layout/layout"
import { Loader2, Tag } from "lucide-react"

export default function TagPageLoading() {
  return (
    <Layout>
      {/* Hero Section Skeleton */}
      <section className="relative py-16 bg-muted/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <div className="flex items-center justify-center mb-4">
              <Tag className="h-6 w-6 text-primary/50 mr-2" />
              <div className="h-10 bg-muted/70 animate-pulse rounded-lg w-3/4"></div>
            </div>
            <div className="h-6 bg-muted/70 animate-pulse rounded-lg w-2/3 mx-auto"></div>
          </div>
        </div>
      </section>

      {/* Content Section Skeleton */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Main Content Skeleton */}
            <div className="lg:w-3/4">
              {/* Back Link Skeleton */}
              <div className="h-6 bg-muted/50 animate-pulse rounded-lg w-32 mb-6"></div>
              
              {/* Loading Spinner */}
              <div className="flex flex-col items-center justify-center py-20">
                <Loader2 className="h-12 w-12 animate-spin text-primary/50 mb-4" />
                <p className="text-muted-foreground">Loading tagged posts...</p>
              </div>
            </div>
            
            {/* Sidebar Skeleton */}
            <div className="lg:w-1/4">
              {/* Search Skeleton */}
              <div className="mb-8">
                <div className="h-6 bg-muted/70 animate-pulse rounded-lg w-1/2 mb-4"></div>
                <div className="h-10 bg-muted/70 animate-pulse rounded-lg w-full"></div>
              </div>
              
              {/* Related Tags Skeleton */}
              <div className="mb-8">
                <div className="h-6 bg-muted/70 animate-pulse rounded-lg w-1/2 mb-4"></div>
                <div className="flex flex-wrap gap-2">
                  {[1, 2, 3, 4, 5, 6].map((i) => (
                    <div key={i} className="h-6 bg-muted/70 animate-pulse rounded-full w-16"></div>
                  ))}
                </div>
              </div>
              
              {/* Newsletter Skeleton */}
              <div className="mb-8 bg-card border border-border rounded-lg p-6">
                <div className="h-6 bg-muted/70 animate-pulse rounded-lg w-3/4 mb-2"></div>
                <div className="h-4 bg-muted/70 animate-pulse rounded-lg w-full mb-4"></div>
                <div className="space-y-3">
                  <div className="h-10 bg-muted/70 animate-pulse rounded-lg w-full"></div>
                  <div className="h-10 bg-primary/30 animate-pulse rounded-lg w-full"></div>
                </div>
              </div>
              
              {/* Return Button Skeleton */}
              <div className="h-10 bg-muted/70 animate-pulse rounded-lg w-full"></div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
} 