import { Layout } from "@/components/layout/layout"
import { Tag, Hash } from "lucide-react"

export default function TagsIndexLoading() {
  return (
    <Layout>
      {/* Hero Section Skeleton */}
      <section className="relative py-16 bg-muted/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <div className="flex items-center justify-center mb-4">
              <Tag className="h-6 w-6 text-primary/50 mr-2" />
              <div className="h-10 bg-muted/70 animate-pulse rounded-lg w-40"></div>
            </div>
            <div className="h-6 bg-muted/70 animate-pulse rounded-lg w-2/3 mx-auto"></div>
          </div>
        </div>
      </section>

      {/* Content Section Skeleton */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back Link Skeleton */}
          <div className="h-6 bg-muted/50 animate-pulse rounded-lg w-32 mb-8"></div>
          
          {/* Tag Sections Skeleton */}
          <div className="space-y-16">
            {[1, 2, 3].map((i) => (
              <div key={i} className="border-b border-border pb-12">
                {/* Tag Header Skeleton */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center">
                    <Hash className="h-5 w-5 text-primary/50 mr-2" />
                    <div className="h-8 bg-muted/70 animate-pulse rounded-lg w-32"></div>
                    <div className="ml-2 h-4 bg-muted/70 animate-pulse rounded-lg w-16"></div>
                  </div>
                  <div className="h-5 bg-muted/70 animate-pulse rounded-lg w-24"></div>
                </div>
                
                {/* Posts Grid Skeleton */}
                <div className="grid md:grid-cols-3 gap-6">
                  {[1, 2, 3].map((j) => (
                    <div key={j} className="bg-card border border-border rounded-lg overflow-hidden">
                      <div className="bg-muted/70 animate-pulse h-40"></div>
                      <div className="p-4 space-y-2">
                        <div className="h-4 bg-muted/70 animate-pulse rounded-lg w-3/4"></div>
                        <div className="h-6 bg-muted/70 animate-pulse rounded-lg w-full"></div>
                        <div className="h-4 bg-muted/70 animate-pulse rounded-lg w-full"></div>
                        <div className="h-4 bg-muted/70 animate-pulse rounded-lg w-1/3"></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  )
} 