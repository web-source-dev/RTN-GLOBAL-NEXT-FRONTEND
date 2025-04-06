import { Layout } from "@/components/layout/layout"
import { Loader2 } from "lucide-react"

export default function BlogLoading() {
  return (
    <Layout>
      {/* Hero Section Skeleton */}
      <section className="relative py-20 bg-muted/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <div className="h-12 bg-muted/70 animate-pulse rounded-lg mb-6 w-3/4 mx-auto"></div>
            <div className="h-6 bg-muted/70 animate-pulse rounded-lg w-full mx-auto"></div>
          </div>
        </div>
      </section>

      {/* Content Section Skeleton */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Main Content Skeleton */}
            <div className="lg:w-3/4">
              {/* Categories Nav Skeleton */}
              <div className="block lg:hidden mb-8 overflow-x-auto">
                <div className="flex space-x-2 pb-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="w-20 h-8 bg-muted/70 animate-pulse rounded-full"></div>
                  ))}
                </div>
              </div>
              
              {/* Loading Spinner */}
              <div className="flex flex-col items-center justify-center py-20">
                <Loader2 className="h-12 w-12 animate-spin text-primary/50 mb-4" />
                <p className="text-muted-foreground">Loading blog posts...</p>
              </div>
            </div>
            
            {/* Sidebar Skeleton */}
            <div className="lg:w-1/4">
              {/* Search Skeleton */}
              <div className="mb-8">
                <div className="h-6 bg-muted/70 animate-pulse rounded-lg w-1/2 mb-4"></div>
                <div className="h-10 bg-muted/70 animate-pulse rounded-lg w-full"></div>
              </div>
              
              {/* Categories Skeleton */}
              <div className="hidden lg:block mb-8">
                <div className="h-6 bg-muted/70 animate-pulse rounded-lg w-1/2 mb-4"></div>
                <div className="space-y-2">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <div key={i} className="h-4 bg-muted/70 animate-pulse rounded-lg w-3/4"></div>
                  ))}
                </div>
              </div>
              
              {/* Recent Posts Skeleton */}
              <div className="mb-8">
                <div className="h-6 bg-muted/70 animate-pulse rounded-lg w-2/3 mb-4"></div>
                <div className="space-y-4">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="space-y-2">
                      <div className="h-4 bg-muted/70 animate-pulse rounded-lg w-full"></div>
                      <div className="h-3 bg-muted/70 animate-pulse rounded-lg w-1/2"></div>
                    </div>
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
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}
