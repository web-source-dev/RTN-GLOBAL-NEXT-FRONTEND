"use client"

import { OptimizedImage } from "@/components/ui/optimized-image"
import Link from "next/link"
import { ArrowRight, Calendar } from "lucide-react"
import { Button } from "@/components/ui/button"
import { formatDate } from "@/lib/utils"
import { BlogAPI } from "@/lib/api/api-provider"
import { useEffect, useState } from "react"
import { Skeleton } from "@/components/ui/skeleton"

type Author = {
  _id: string
  firstName: string
  lastName: string
  email: string
  avatar: string
}

type BlogPost = {
  _id: string
  title: string
  description: string
  slug: string
  image: string
  category: string
  tags: string[]
  createdAt: string
  author: Author
  views: number
  likes: string[]
  comments: string[]
}

export function BlogHighlightsSection() {
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const abortController = new AbortController();
    
    const fetchFeaturedBlogs = async () => {
      try {
        setIsLoading(true)
        setError(null)
        const response = await BlogAPI.getFeaturedBlogs(3);
        
        if (!response?.data || !Array.isArray(response.data) || response.data.length === 0) {
          throw new Error("No blog data available");
        }
        
        setBlogPosts(response.data);
      } catch (err) {
        if (!abortController.signal.aborted) {
          console.error("Error fetching featured blogs:", err)
          setError("Failed to load blog posts. Please try again later.")
        }
      } finally {
        if (!abortController.signal.aborted) {
          setIsLoading(false)
        }
      }
    }
    
    // Delay fetching blog posts since they're lower priority
    const timer = setTimeout(() => {
      fetchFeaturedBlogs()
    }, 1200); // Increased timeout to prioritize critical content
    
    return () => {
      clearTimeout(timer);
      abortController.abort();
    };
  }, [])
  
  // Format author name from firstName and lastName
  const getAuthorName = (author: Author | any) => {
    if (!author) return "RTN Global Team";
    return `${author.firstName || ''} ${author.lastName || ''}`.trim() || author.email || "RTN Global Team";
  }
  
  const getAuthorAvatar = (author: Author | any) => {
    return author?.avatar || "/images/team/default-avatar.jpg";
  }
  
  return (
    <section className="py-14 md:py-16 bg-muted/30" id="blog">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10">
          <div>
            <div className="inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary mb-4">
              Our Blog
            </div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Latest Insights & News</h2>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Stay updated with the latest trends, tips, and insights in web development, digital marketing, and technology.
            </p>
          </div>
          <div className="mt-6 md:mt-0">
            <Link href="/blog" aria-label="View all blog articles">
              <Button variant="outline" className="gap-2 rounded-full">
                View All Articles <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
        
        {error && (
          <div className="p-6 text-destructive bg-destructive/10 rounded-lg mb-8 text-center">
            {error}
          </div>
        )}
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {isLoading ? (
            // Super minimal skeleton loaders with reduced DOM complexity
            Array(3).fill(0).map((_, index) => (
              <div key={index} className="bg-card border border-border rounded-2xl overflow-hidden shadow-sm flex flex-col h-[400px]">
                <Skeleton className="h-48 w-full" />
                <div className="p-6 flex-grow">
                  <Skeleton className="h-4 w-24 mb-4" />
                  <Skeleton className="h-6 w-full mb-2" />
                  <Skeleton className="h-6 w-3/4 mb-6" />
                </div>
              </div>
            ))
          ) : blogPosts.length > 0 ? (
            // Display actual blog posts - optimized
            blogPosts.map((post) => (
              <article key={post._id} className="bg-card border border-border rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 flex flex-col h-full">
                <Link href={`/blog/${post.slug || post._id}`} className="block relative aspect-[16/9] w-full overflow-hidden" aria-label={`Read ${post.title}`}>
                  <OptimizedImage
                    src={post.image || "/images/blog/blog-placeholder.jpg"}
                    fill
                    alt={`Featured image for ${post.title}`}
                    className="object-cover h-full"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    loading="lazy"
                  />
                  <div className="absolute top-4 left-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-medium">
                    {post.category || "Technology"}
                  </div>
                </Link>
                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex items-center gap-3 text-xs text-muted-foreground mb-3">
                    <time dateTime={post.createdAt} className="flex items-center gap-1.5">
                      <Calendar className="h-3.5 w-3.5" />
                      {formatDate ? formatDate(post.createdAt) : new Date(post.createdAt).toLocaleDateString()}
                    </time>
                  </div>
                  <h3 className="text-xl font-bold mb-3 leading-tight">
                    <Link href={`/blog/${post.slug || post._id}`} className="hover:text-primary transition-colors" aria-label={`Read ${post.title}`}>
                      {post.title}
                    </Link>
                  </h3>
                  <p className="text-muted-foreground mb-4 flex-grow line-clamp-3">
                    {post.description}
                  </p>
                  <div className="flex items-center justify-between mt-auto pt-4 border-t border-border">
                    <div className="flex items-center gap-2">
                      <div className="relative w-8 h-8 rounded-full overflow-hidden">
                        <OptimizedImage
                          src={getAuthorAvatar(post.author)}
                          fill
                          alt={`Profile photo of ${getAuthorName(post.author)}`}
                          className="object-cover h-full"
                          sizes="32px"
                          loading="lazy"
                        />
                      </div>
                      <span className="text-sm font-medium">{getAuthorName(post.author)}</span>
                    </div>
                    <Link 
                      href={`/blog/${post.slug || post._id}`} 
                      className="text-primary text-sm hover:underline flex items-center"
                      aria-label={`Read article: ${post.title}`}
                    >
                      Read article <ArrowRight className="ml-1 h-3.5 w-3.5" />
                    </Link>
                  </div>
                </div>
              </article>
            ))
          ) : (
            // Display a message if no blog posts are available
            <div className="col-span-3 text-center py-8">
              <p className="text-muted-foreground mb-4">No featured blog posts available at the moment.</p>
              <Link href="/blog" aria-label="Browse all blog articles">
                <Button variant="outline" className="gap-2 rounded-full">
                  Browse All Articles <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </section>
  )
} 