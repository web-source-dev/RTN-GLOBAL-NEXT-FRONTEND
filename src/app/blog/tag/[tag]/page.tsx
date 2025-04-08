"use client"

import { useState, useEffect } from "react"
import { Layout } from "@/components/layout/layout"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { OptimizedImage } from "@/components/ui/optimized-image"
import Link from "next/link"
import { formatDate } from "@/lib/utils"
import { ArrowRight, Search, ChevronLeft, ChevronRight, Loader2, Tag as TagIcon } from "lucide-react"
import { BlogAPI } from "@/lib/api/api-provider"
import { useParams, useRouter, useSearchParams, notFound } from "next/navigation"

// Define interfaces for types
interface BlogPost {
  _id: string;
  title: string;
  description: string;
  content: string;
  image?: string;
  createdAt: string;
  updatedAt: string;
  author: {
    _id: string;
    name: string;
    firstName?: string;
    lastName?: string;
    role?: string;
    avatar?: string;
  } | null;
  category?: string;
  tags?: string[];
  slug?: string;
  isFeatured?: boolean;
}

interface TagCount {
  name: string;
  count: number;
}

interface APIError {
  response?: {
    status: number;
    data?: {
      message?: string;
    };
  };
  message: string;
}

export default function TagPage() {
  const { tag } = useParams<{ tag: string }>();
  const router = useRouter();
  const searchParams = useSearchParams();
  const page = parseInt(searchParams.get('page') || '1');
  
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [totalPages, setTotalPages] = useState(1);
  const [relatedTags, setRelatedTags] = useState<TagCount[]>([]);
  const [tagName, setTagName] = useState(decodeURIComponent(tag as string));
  
  // Fetch blogs with the specified tag
  useEffect(() => {
    if (!tag) return;
    
    const fetchTaggedPosts = async () => {
      setIsLoading(true);
      setError(null);
      
      try {
        const tagValue = decodeURIComponent(tag as string);
        setTagName(tagValue);
        
        // Get blogs with the specific tag
        const response = await BlogAPI.getAllBlogs({ tag: tagValue });
        const taggedPosts = response.data;
        
        // Handle pagination
        const totalItems = taggedPosts.length;
        const calculatedTotalPages = Math.ceil(totalItems / 6);
        setTotalPages(calculatedTotalPages || 1);
        
        // Get current page of blogs (6 per page)
        const start = (page - 1) * 6;
        const end = start + 6;
        const paginatedBlogs = taggedPosts.slice(start, end);
        
        setPosts(paginatedBlogs);
        
        // Find related tags from these posts
        const tagMap = new Map<string, number>();
        taggedPosts.forEach((post: BlogPost) => {
          post.tags?.forEach((postTag: string) => {
            if (postTag !== tagValue) {
              tagMap.set(postTag, (tagMap.get(postTag) || 0) + 1);
            }
          });
        });
        
        // Convert the map to array and sort by count
        const relatedTagsArray = Array.from(tagMap.entries())
          .map(([name, count]) => ({ name, count }))
          .sort((a, b) => b.count - a.count)
          .slice(0, 10);
          
        setRelatedTags(relatedTagsArray);
        
      } catch (error: unknown) {
        const apiError = error as APIError;
        console.error('Error fetching tagged posts:', apiError);
        setError(
          apiError.response?.status === 500
            ? "Sorry, we're experiencing server issues. Please try again later."
            : "Failed to load tagged posts. Please check your connection and try again."
        );
        
        // If no posts found, you might want to handle this case
        if (apiError.response?.status === 404) {
          notFound();
        }
      } finally {
        setIsLoading(false);
      }
    };
    
    fetchTaggedPosts();
  }, [tag, page]);

  // Handle search
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      router.push(`/blog?q=${encodeURIComponent(searchTerm)}`);
    }
  };

  // Generate pagination array
  const getPaginationItems = () => {
    const items: (number | string)[] = [];
    const maxVisiblePages = 5;
    
    // Always show first page
    items.push(1);
    
    // Calculate start and end of pagination range
    let start = Math.max(2, page - Math.floor(maxVisiblePages / 2));
    const end = Math.min(totalPages - 1, start + maxVisiblePages - 3);
    
    // Adjust start if end is at max
    if (end === totalPages - 1) {
      start = Math.max(2, end - maxVisiblePages + 3);
    }
    
    // Add ellipsis after first page if needed
    if (start > 2) {
      items.push('...');
    }
    
    // Add pages in range
    for (let i = start; i <= end; i++) {
      items.push(i);
    }
    
    // Add ellipsis before last page if needed
    if (end < totalPages - 1) {
      items.push('...');
    }
    
    // Always show last page if more than 1 page
    if (totalPages > 1) {
      items.push(totalPages);
    }
    
    return items;
  };

  // Build query string for pagination links
  const buildQueryString = (newPage: number) => {
    return `?page=${newPage}`;
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-16 bg-muted/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <div className="flex items-center justify-center mb-4">
              <TagIcon className="h-6 w-6 text-primary mr-2" />
              <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">Posts Tagged {tagName}</h1>
            </div>
            <p className="text-lg text-muted-foreground">
              Explore all articles related to this topic
            </p>
          </div>
        </div>
      </section>

      {/* Blog Content */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Main Content */}
            <div className="lg:w-3/4">
              {/* Back Button */}
              <Link href="/blog/tag" className="inline-flex items-center text-sm text-muted-foreground hover:text-primary transition-colors mb-6">
                <ChevronLeft className="mr-1 h-4 w-4" />
                Back to all tags
              </Link>
              
              {/* Loading, Error, or No Results */}
              {isLoading ? (
                <div className="flex justify-center items-center py-20">
                  <Loader2 className="h-8 w-8 animate-spin text-muted-foreground" />
                </div>
              ) : error ? (
                <div className="text-center py-12 bg-destructive/10 rounded-lg border border-destructive/20 p-6">
                  <h3 className="text-xl font-medium mb-2">Error Loading Tagged Posts</h3>
                  <p className="text-muted-foreground mb-4">{error}</p>
                  <Button 
                    onClick={() => router.refresh()}
                    variant="outline"
                  >
                    Try Again
                  </Button>
                </div>
              ) : posts.length === 0 ? (
                <div className="text-center py-12">
                  <h3 className="text-xl font-medium mb-2">No posts found</h3>
                  <p className="text-muted-foreground">
                    No blog posts with tag {tagName} available.
                  </p>
                </div>
              ) : (
                /* Blog Posts Grid */
                <div className="grid md:grid-cols-2 gap-8">
                  {posts.map((post) => (
                    <article key={post._id} className="bg-card border border-border rounded-lg overflow-hidden">
                      <div className="relative h-48">
                        {post.image ? (
                          <OptimizedImage
                            src={post.image}
                            alt={post.title}
                            fill
                            className="h-full object-cover"
                          />
                        ) : (
                          <div className="bg-muted h-48 flex items-center justify-center">
                            <span className="text-3xl text-muted-foreground opacity-30">{post.category?.[0] || 'B'}</span>
                          </div>
                        )}
                        {post.isFeatured && (
                          <div className="absolute top-2 right-2 bg-primary text-primary-foreground text-xs py-1 px-2 rounded-full">
                            Featured
                          </div>
                        )}
                      </div>
                      <div className="p-6">
                        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                          <span>{formatDate(new Date(post.createdAt))}</span>
                          {post.category && (
                            <>
                              <span>•</span>
                              <Link 
                                href={`/blog?category=${encodeURIComponent(post.category)}`}
                                className="hover:text-primary"
                              >
                                {post.category}
                              </Link>
                            </>
                          )}
                        </div>
                        <h2 className="text-xl font-bold mb-2 line-clamp-2">
                          <Link href={`/blog/${post.slug || post._id}`} className="hover:text-primary transition-colors">
                            {post.title}
                          </Link>
                        </h2>
                        <p className="text-muted-foreground mb-4 line-clamp-3">{post.description}</p>
                        
                        {/* Tags */}
                        {post.tags && post.tags.length > 0 && (
                          <div className="flex flex-wrap gap-1 mb-3">
                            {post.tags.slice(0, 3).map(postTag => (
                              <Link
                                key={postTag}
                                href={`/blog/tag/${encodeURIComponent(postTag)}`}
                                className={`px-2 py-0.5 text-xs rounded-full cursor-pointer ${
                                  postTag === tagName 
                                    ? 'bg-primary text-primary-foreground' 
                                    : 'bg-secondary text-secondary-foreground hover:bg-secondary/80'
                                }`}
                              >
                                {postTag}
                              </Link>
                            ))}
                            {post.tags.length > 3 && (
                              <span className="text-xs text-muted-foreground">+{post.tags.length - 3} more</span>
                            )}
                          </div>
                        )}
                        
                        <div className="flex justify-between items-center">
                          <div className="flex items-center gap-4">
                            {post.author?.avatar && (
                              <OptimizedImage
                                src={post.author.avatar}
                                alt={post.author.name || `${post.author.firstName || ''} ${post.author.lastName || ''}`.trim()}
                                className="w-6 h-6 rounded-full"
                                width={24}
                                height={24}
                              />
                            )}
                            <span className="text-sm text-muted-foreground">
                              {post.author?.name || 
                               `${post.author?.firstName || ''} ${post.author?.lastName || ''}`.trim() || 
                               'RTN Global'}
                            </span>
                          </div>
                          <Link href={`/blog/${post.slug || post._id}`} className="text-primary hover:underline text-sm inline-flex items-center">
                            Read more <ArrowRight className="ml-1 h-4 w-4" />
                          </Link>
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              )}
              
              {/* Pagination */}
              {!isLoading && posts.length > 0 && totalPages > 1 && (
                <div className="mt-12 flex justify-center">
                  <div className="flex space-x-1">
                    <Button 
                      variant="outline" 
                      size="icon" 
                      disabled={page === 1}
                      onClick={() => router.push(`/blog/tag/${tag}${buildQueryString(page - 1)}`)}
                    >
                      <ChevronLeft className="h-4 w-4" />
                    </Button>
                    
                    {getPaginationItems().map((item, index) => (
                      item === '...' ? (
                        <span key={`ellipsis-${index}`} className="flex items-center px-3 py-2">...</span>
                      ) : (
                        <Button 
                          key={`page-${item}`}
                          variant={item === page ? 'default' : 'outline'}
                          size="sm"
                          onClick={() => router.push(`/blog/tag/${tag}${buildQueryString(item as number)}`)}
                        >
                          {item}
                        </Button>
                      )
                    ))}
                    
                    <Button 
                      variant="outline" 
                      size="icon" 
                      disabled={page === totalPages}
                      onClick={() => router.push(`/blog/tag/${tag}${buildQueryString(page + 1)}`)}
                    >
                      <ChevronRight className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              )}
            </div>
            
            {/* Sidebar */}
            <div className="lg:w-1/4">
              {/* Search */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold mb-4">Search</h3>
                <form onSubmit={handleSearch} className="relative">
                  <Input
                    type="search"
                    placeholder="Search blog..."
                    className="pr-10"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                  <Button 
                    type="submit" 
                    variant="ghost" 
                    size="icon" 
                    className="absolute right-0 top-0"
                  >
                    <Search className="h-4 w-4 text-muted-foreground" />
                  </Button>
                </form>
              </div>
              
              {/* Related Tags */}
              {relatedTags.length > 0 && (
                <div className="mb-8">
                  <h3 className="text-lg font-semibold mb-4">Related Tags</h3>
                  <div className="flex flex-wrap gap-2">
                    {relatedTags.map((relatedTag) => (
                      <Link
                        key={relatedTag.name}
                        href={`/blog/tag/${encodeURIComponent(relatedTag.name)}`}
                        className="px-3 py-1 text-xs bg-secondary text-secondary-foreground rounded-full hover:bg-secondary/80 transition-colors"
                      >
                        {relatedTag.name}
                        <span className="ml-1 opacity-60">({relatedTag.count})</span>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
              
              {/* Newsletter */}
              <div className="mb-8 bg-card border border-border rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-2">Subscribe to Our Newsletter</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Get the latest articles and news delivered to your inbox.
                </p>
                <div className="space-y-3">
                  <Input
                    type="email"
                    placeholder="Your email address"
                  />
                  <Button className="w-full">Subscribe</Button>
                </div>
              </div>
              
              {/* Browse All Tags */}
              <div className="mb-8">
                <Link href="/blog/tag">
                  <Button variant="outline" className="w-full">
                    <TagIcon className="h-4 w-4 mr-2" />
                    Browse All Tags
                  </Button>
                </Link>
              </div>
              
              {/* Return to All Posts */}
              <div>
                <Link href="/blog">
                  <Button variant="outline" className="w-full">
                    View All Blog Posts
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
} 