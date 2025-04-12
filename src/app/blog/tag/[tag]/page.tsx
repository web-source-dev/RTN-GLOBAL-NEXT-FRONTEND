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
  
  // Define animation styles
  const animationStyles = `
    /* Fade-in animation */
    @keyframes fadeIn {
      from { opacity: 0; transform: translateY(10px); }
      to { opacity: 1; transform: translateY(0); }
    }
    
    .animate-fadeIn {
      animation: fadeIn 0.5s ease-out forwards;
    }
    
    .animation-delay-200 {
      animation-delay: 0.2s;
      opacity: 0;
    }
    
    .animation-delay-300 {
      animation-delay: 0.3s;
      opacity: 0;
    }
    
    /* Background gradient for buttons */
    .bg-primary-gradient {
      background-image: linear-gradient(to right, var(--primary), var(--primary-foreground));
    }
    
    /* Grid pattern for backgrounds */
    .bg-grid-pattern {
      background-image: 
        linear-gradient(to right, var(--border) 1px, transparent 1px),
        linear-gradient(to bottom, var(--border) 1px, transparent 1px);
      background-size: 20px 20px;
    }
  `;

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
      {/* Add animation styles */}
      <style jsx global>{animationStyles}</style>
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-b from-muted/80 to-muted/30">
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center justify-center mb-6 px-4 py-2 bg-primary/10 rounded-full text-primary animate-fadeIn">
              <TagIcon className="h-4 w-4 mr-2" />
              <span className="text-sm font-medium">Tag Collection</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-6">
              Posts Tagged {tagName}
            </h1>
            <p className="text-lg text-muted-foreground max-w-xl mx-auto">
              Explore our curated collection of articles and insights related to <span className="font-medium text-foreground">{tagName}</span>
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
                    <article key={post._id} className="group bg-card border border-border rounded-lg overflow-hidden hover:shadow-lg hover:border-primary/30 transition-all duration-300">
                      <div className="relative h-48 overflow-hidden">
                        {post.image ? (
                          <OptimizedImage
                            src={post.image}
                            alt={post.title}
                            fill
                            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                          />
                        ) : (
                          <div className="bg-muted h-48 flex items-center justify-center">
                            <span className="text-4xl text-muted-foreground opacity-20">{post.category?.[0] || 'B'}</span>
                          </div>
                        )}
                        {post.isFeatured && (
                          <div className="absolute top-3 right-3 bg-primary text-primary-foreground text-xs py-1 px-3 rounded-full font-medium shadow-sm">
                            Featured
                          </div>
                        )}
                      </div>
                      <div className="p-6">
                        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                          <time dateTime={post.createdAt} className="flex items-center">
                            <span className="w-1.5 h-1.5 rounded-full bg-primary/70 mr-1.5"></span>
                            {formatDate(new Date(post.createdAt))}
                          </time>
                          {post.category && (
                            <>
                              <span>•</span>
                              <Link 
                                href={`/blog/category/${encodeURIComponent(post.category)}`}
                                className="hover:text-primary transition-colors"
                                title={`View all posts in ${post.category} category`}
                                aria-label={`View all posts in ${post.category} category`}
                              >
                                {post.category}
                              </Link>
                            </>
                          )}
                        </div>
                        <h2 className="text-xl font-bold mb-3 line-clamp-2 group-hover:text-primary transition-colors">
                          <Link 
                            href={`/blog/${post.slug || post._id}`} 
                            className="focus:outline-none focus:underline"
                            title={post.title}
                          >
                            {post.title}
                          </Link>
                        </h2>
                        <p className="text-muted-foreground mb-5 line-clamp-3">{post.description}</p>
                        
                        {/* Tags */}
                        {post.tags && post.tags.length > 0 && (
                          <div className="flex flex-wrap gap-1.5 mb-5">
                            {post.tags.slice(0, 3).map(postTag => (
                              <Link
                                key={postTag}
                                href={`/blog/tag/${encodeURIComponent(postTag)}`}
                                className={`px-2.5 py-1 text-xs rounded-full cursor-pointer transition-colors ${
                                  postTag === tagName 
                                    ? 'bg-primary text-primary-foreground font-medium' 
                                    : 'bg-secondary text-secondary-foreground hover:bg-primary/10 hover:text-primary'
                                }`}
                                title={`View all posts tagged with "${postTag}"`}
                                aria-label={`View all posts tagged with "${postTag}"`}
                              >
                                {postTag}
                              </Link>
                            ))}
                            {post.tags.length > 3 && (
                              <span className="text-xs text-muted-foreground px-1.5 py-1">+{post.tags.length - 3} more</span>
                            )}
                          </div>
                        )}
                        
                        <div className="flex justify-between items-center pt-2 border-t border-border/50">
                          <div className="flex items-center gap-3">
                            {post.author?.avatar ? (
                              <Link href={`/blog?author=${encodeURIComponent(post.author._id)}`} title={`See more posts by ${post.author.name || `${post.author.firstName || ''} ${post.author.lastName || ''}`.trim() || 'RTN Global'}`}>
                                <div className="relative w-7 h-7 rounded-full overflow-hidden border border-border/50">
                                  <OptimizedImage
                                    src={post.author.avatar}
                                    alt={post.author.name || `${post.author.firstName || ''} ${post.author.lastName || ''}`.trim()}
                                    fill
                                    className="object-cover"
                                  />
                                </div>
                              </Link>
                            ) : (
                              <div className="w-7 h-7 rounded-full bg-primary/10 flex items-center justify-center text-primary text-xs">
                                {(post.author?.name?.[0] || post.author?.firstName?.[0] || 'R')}
                              </div>
                            )}
                            <Link 
                              href={`/blog?author=${encodeURIComponent(post.author?._id || '')}`}
                              className="text-sm text-muted-foreground hover:text-primary transition-colors"
                              title={`See more posts by ${post.author?.name || `${post.author?.firstName || ''} ${post.author?.lastName || ''}`.trim() || 'RTN Global'}`}
                            >
                              {post.author?.name || 
                               `${post.author?.firstName || ''} ${post.author?.lastName || ''}`.trim() || 
                               'RTN Global'}
                            </Link>
                          </div>
                          <Link 
                            href={`/blog/${post.slug || post._id}`} 
                            className="text-primary font-medium text-sm inline-flex items-center group-hover:underline"
                            aria-label={`Read more about ${post.title}`}
                          >
                            Read more <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                          </Link>
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              )}
              
              {/* After the blog posts and before pagination */}
              {!isLoading && posts.length > 0 && (
                <div className="mt-12 p-8 bg-gradient-to-br from-muted/50 to-muted/30 rounded-lg border border-border relative overflow-hidden">
                  <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
                  <h2 className="text-2xl font-semibold mb-6 relative">
                    <span className="inline-block border-b-2 border-primary pb-1">Related Content for {tagName}</span>
                  </h2>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
                    {/* Related Services */}
                    <div className="p-5 bg-card rounded-lg border border-border hover:border-primary/20 transition-all hover:shadow-md">
                      <h3 className="font-medium text-lg mb-4 flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2 text-primary"><circle cx="12" cy="12" r="10"/><path d="M8 14s1.5 2 4 2 4-2 4-2"/><line x1="9" x2="9.01" y1="9" y2="9"/><line x1="15" x2="15.01" y1="9" y2="9"/></svg>
                        Related Services
                      </h3>
                      <ul className="space-y-3">
                        <li>
                          <Link 
                            href={`/services/web-development`}
                            className="flex items-center text-muted-foreground hover:text-primary transition-colors group"
                          >
                            <span className="w-7 h-7 mr-2 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                              <ChevronRight className="h-4 w-4 text-primary" />
                            </span>
                            <span className="font-medium">Web Development</span>
                          </Link>
                        </li>
                        <li>
                          <Link 
                            href={`/services/digital-marketing`}
                            className="flex items-center text-muted-foreground hover:text-primary transition-colors group"
                          >
                            <span className="w-7 h-7 mr-2 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                              <ChevronRight className="h-4 w-4 text-primary" />
                            </span>
                            <span className="font-medium">Digital Marketing</span>
                          </Link>
                        </li>
                        <li>
                          <Link 
                            href={`/services/seo`}
                            className="flex items-center text-muted-foreground hover:text-primary transition-colors group"
                          >
                            <span className="w-7 h-7 mr-2 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                              <ChevronRight className="h-4 w-4 text-primary" />
                            </span>
                            <span className="font-medium">SEO Optimization</span>
                          </Link>
                        </li>
                      </ul>
                      <Link href="/services" className="mt-4 inline-flex items-center text-primary font-medium text-sm hover:underline">
                        View All Services <ArrowRight className="ml-1 h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                      </Link>
                    </div>
                    
                    {/* Related Knowledge Base */}
                    <div className="p-5 bg-card rounded-lg border border-border hover:border-primary/20 transition-all hover:shadow-md">
                      <h3 className="font-medium text-lg mb-4 flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2 text-primary"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>
                        Knowledge Base
                      </h3>
                      <ul className="space-y-3">
                        <li>
                          <Link 
                            href={`/knowledge-base/getting-started`}
                            className="flex items-center text-muted-foreground hover:text-primary transition-colors group"
                          >
                            <span className="w-7 h-7 mr-2 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                              <ChevronRight className="h-4 w-4 text-primary" />
                            </span>
                            <span className="font-medium">Getting Started</span>
                          </Link>
                        </li>
                        <li>
                          <Link 
                            href={`/knowledge-base/technical`}
                            className="flex items-center text-muted-foreground hover:text-primary transition-colors group"
                          >
                            <span className="w-7 h-7 mr-2 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                              <ChevronRight className="h-4 w-4 text-primary" />
                            </span>
                            <span className="font-medium">Technical Guides</span>
                          </Link>
                        </li>
                        <li>
                          <Link 
                            href={`/knowledge-base/tutorials`}
                            className="flex items-center text-muted-foreground hover:text-primary transition-colors group"
                          >
                            <span className="w-7 h-7 mr-2 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                              <ChevronRight className="h-4 w-4 text-primary" />
                            </span>
                            <span className="font-medium">Tutorials</span>
                          </Link>
                        </li>
                      </ul>
                      <Link href="/knowledge-base" className="mt-4 inline-flex items-center text-primary font-medium text-sm hover:underline">
                        Browse Knowledge Base <ArrowRight className="ml-1 h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                      </Link>
                    </div>
                    
                    {/* Related Case Studies */}
                    <div className="p-5 bg-card rounded-lg border border-border hover:border-primary/20 transition-all hover:shadow-md">
                      <h3 className="font-medium text-lg mb-4 flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2 text-primary"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>
                        Case Studies
                      </h3>
                      <ul className="space-y-3">
                        <li>
                          <Link 
                            href={`/case-studies?tag=${encodeURIComponent(tagName)}`}
                            className="flex items-center text-muted-foreground hover:text-primary transition-colors group"
                          >
                            <span className="w-7 h-7 mr-2 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                              <ChevronRight className="h-4 w-4 text-primary" />
                            </span>
                            <span className="font-medium">Related Case Studies</span>
                          </Link>
                        </li>
                        <li>
                          <Link 
                            href={`/portfolio`}
                            className="flex items-center text-muted-foreground hover:text-primary transition-colors group"
                          >
                            <span className="w-7 h-7 mr-2 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                              <ChevronRight className="h-4 w-4 text-primary" />
                            </span>
                            <span className="font-medium">Portfolio Showcase</span>
                          </Link>
                        </li>
                        <li>
                          <Link 
                            href={`/industries`}
                            className="flex items-center text-muted-foreground hover:text-primary transition-colors group"
                          >
                            <span className="w-7 h-7 mr-2 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                              <ChevronRight className="h-4 w-4 text-primary" />
                            </span>
                            <span className="font-medium">Industry Solutions</span>
                          </Link>
                        </li>
                      </ul>
                      <Link href="/case-studies" className="mt-4 inline-flex items-center text-primary font-medium text-sm hover:underline">
                        View All Case Studies <ArrowRight className="ml-1 h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                      </Link>
                    </div>
                  </div>
                </div>
              )}
              
              {/* Pagination */}
              {!isLoading && posts.length > 0 && totalPages > 1 && (
                <div className="mt-12 flex justify-center">
                  <nav className="inline-flex items-center rounded-lg border border-border bg-card p-1 shadow-sm" aria-label="Pagination">
                    <Button 
                      variant="ghost" 
                      size="sm" 
                      className="flex items-center gap-1 text-muted-foreground rounded-md"
                      disabled={page === 1}
                      onClick={() => router.push(`/blog/tag/${tag}${buildQueryString(page - 1)}`)}
                    >
                      <ChevronLeft className="h-4 w-4" />
                      <span className="sr-only sm:not-sr-only sm:flex">Previous</span>
                    </Button>
                    
                    <div className="flex items-center px-2">
                      {getPaginationItems().map((item, index) => (
                        item === '...' ? (
                          <span key={`ellipsis-${index}`} className="flex items-center px-3 py-2 text-sm">...</span>
                        ) : (
                          <Button 
                            key={`page-${item}`}
                            variant={item === page ? 'default' : 'ghost'}
                            size="icon"
                            className={item === page ? 'bg-primary text-primary-foreground' : 'text-muted-foreground hover:text-foreground'}
                            onClick={() => router.push(`/blog/tag/${tag}${buildQueryString(item as number)}`)}
                          >
                            {item}
                          </Button>
                        )
                      ))}
                    </div>
                    
                    <Button 
                      variant="ghost" 
                      size="sm" 
                      className="flex items-center gap-1 text-muted-foreground rounded-md"
                      disabled={page === totalPages}
                      onClick={() => router.push(`/blog/tag/${tag}${buildQueryString(page + 1)}`)}
                    >
                      <span className="sr-only sm:not-sr-only sm:flex">Next</span>
                      <ChevronRight className="h-4 w-4" />
                    </Button>
                  </nav>
                </div>
              )}
            </div>
            
            {/* Sidebar */}
            <div className="lg:w-1/4">
              {/* Search */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold mb-4 flex items-center">
                  <Search className="h-4 w-4 mr-2 text-primary" />
                  Search Content
                </h3>
                <form onSubmit={handleSearch} className="relative">
                  <Input
                    type="search"
                    placeholder="Search blog posts..."
                    className="pr-10 border-primary/20 focus-visible:ring-primary/30"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                  <Button 
                    type="submit" 
                    variant="ghost" 
                    size="icon" 
                    className="absolute right-0 top-0 text-muted-foreground hover:text-primary"
                  >
                    <Search className="h-4 w-4" />
                  </Button>
                </form>
              </div>
              
              {/* Newsletter */}
              <div className="mb-8 bg-gradient-to-br from-card to-card/60 border border-border rounded-lg p-6 shadow-sm">
                <h3 className="text-lg font-semibold mb-3 flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2 text-primary"><rect width="16" height="13" x="4" y="5" rx="2"/><path d="m4 8 6.75 5.25a2 2 0 0 0 2.5 0L20 8"/></svg>
                  Newsletter
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Stay updated with our latest articles, insights and industry trends.
                </p>
                <div className="space-y-3">
                  <Input
                    type="email"
                    placeholder="Your email address"
                    className="border-primary/20 focus-visible:ring-primary/30"
                  />
                  <Button className="w-full relative overflow-hidden group">
                    <span className="relative z-10">Subscribe</span>
                    <span className="absolute inset-0 bg-primary-gradient transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
                  </Button>
                  <p className="text-xs text-muted-foreground text-center">
                    We respect your privacy. Unsubscribe at any time.
                  </p>
                </div>
              </div>
              
              {/* Popular Posts */}
              <div className="mb-8 bg-card border border-border rounded-lg p-6 shadow-sm">
                <h3 className="text-lg font-semibold mb-4 flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2 text-primary"><path d="M6 17l2-5h8l2 5"/><path d="M3 7V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v2"/><path d="M3 7h18"/></svg>
                  Popular Posts
                </h3>
                <div className="space-y-5">
                  {posts.slice(0, 3).map(post => (
                    <Link 
                      key={post._id} 
                      href={`/blog/${post.slug || post._id}`}
                      className="block group"
                    >
                      <div className="flex items-start gap-3">
                        {post.image ? (
                          <div className="flex-shrink-0 w-20 h-20 rounded-md overflow-hidden">
                            <div className="w-full h-full relative">
                              <OptimizedImage
                                src={post.image}
                                alt={post.title}
                                fill
                                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                              />
                            </div>
                          </div>
                        ) : (
                          <div className="flex-shrink-0 w-20 h-20 rounded-md bg-muted flex items-center justify-center">
                            <span className="text-xl text-muted-foreground opacity-30">{post.category?.[0] || 'B'}</span>
                          </div>
                        )}
                        <div>
                          <h4 className="text-sm font-medium line-clamp-2 group-hover:text-primary transition-colors">
                            {post.title}
                          </h4>
                          <div className="flex items-center mt-1.5 text-xs text-muted-foreground">
                            <time dateTime={post.createdAt} className="flex items-center">
                              <span className="w-1 h-1 rounded-full bg-primary/70 mr-1.5"></span>
                              {formatDate(new Date(post.createdAt))}
                            </time>
                          </div>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
              
              {/* Related Tags */}
              {relatedTags.length > 0 && (
                <div className="mb-8 bg-card border border-border rounded-lg p-6 shadow-sm">
                  <h3 className="text-lg font-semibold mb-4 flex items-center">
                    <TagIcon className="h-4 w-4 mr-2 text-primary" />
                    Related Tags
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {relatedTags.map((relatedTag) => (
                      <Link
                        key={relatedTag.name}
                        href={`/blog/tag/${encodeURIComponent(relatedTag.name)}`}
                        className="px-3 py-1.5 text-xs bg-secondary text-secondary-foreground rounded-full hover:bg-primary/10 hover:text-primary transition-colors flex items-center"
                      >
                        {relatedTag.name}
                        <span className="ml-1.5 bg-primary/10 text-primary px-1.5 py-0.5 rounded-full text-[10px] font-medium">{relatedTag.count}</span>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
              
              {/* Browse All Tags */}
              <div className="mb-8">
                <Link href="/blog/tag">
                  <Button variant="outline" className="w-full group hover:border-primary/30 transition-colors">
                    <TagIcon className="h-4 w-4 mr-2 text-primary group-hover:animate-pulse" />
                    Browse All Tags
                  </Button>
                </Link>
              </div>
              
              {/* Return to All Posts */}
              <div className="mb-8">
                <Link href="/blog">
                  <Button variant="outline" className="w-full hover:border-primary/30 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2 text-primary"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
                    View All Blog Posts
                  </Button>
                </Link>
              </div>
              
              {/* Service Categories */}
              <div className="mb-8 bg-card border border-border rounded-lg p-6 shadow-sm">
                <h3 className="text-lg font-semibold mb-4 flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2 text-primary"><rect width="20" height="8" x="2" y="2" rx="2" ry="2"/><rect width="20" height="8" x="2" y="14" rx="2" ry="2"/><line x1="6" x2="6.01" y1="6" y2="6"/><line x1="6" x2="6.01" y1="18" y2="18"/></svg>
                  Services
                </h3>
                <div className="grid grid-cols-2 gap-2">
                  <Link 
                    href="/services/web-development"
                    className="px-3 py-2.5 text-sm bg-muted rounded-md hover:bg-primary/10 hover:text-primary transition-colors text-center flex items-center justify-center group"
                  >
                    <span>Web Dev</span>
                    <ArrowRight className="ml-1 h-3.5 w-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                  <Link 
                    href="/services/digital-marketing"
                    className="px-3 py-2.5 text-sm bg-muted rounded-md hover:bg-primary/10 hover:text-primary transition-colors text-center flex items-center justify-center group"
                  >
                    <span>Marketing</span>
                    <ArrowRight className="ml-1 h-3.5 w-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                  <Link 
                    href="/services/ui-ux-design"
                    className="px-3 py-2.5 text-sm bg-muted rounded-md hover:bg-primary/10 hover:text-primary transition-colors text-center flex items-center justify-center group"
                  >
                    <span>UI/UX</span>
                    <ArrowRight className="ml-1 h-3.5 w-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                  <Link 
                    href="/services/seo"
                    className="px-3 py-2.5 text-sm bg-muted rounded-md hover:bg-primary/10 hover:text-primary transition-colors text-center flex items-center justify-center group"
                  >
                    <span>SEO</span>
                    <ArrowRight className="ml-1 h-3.5 w-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </div>
                <div className="mt-4">
                  <Link href="/services" className="text-primary text-sm hover:underline flex items-center justify-center">
                    View All Services <ArrowRight className="ml-1 h-3.5 w-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Structured data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            "name": `Blog Posts Tagged with ${tagName}`,
            "description": `Explore all articles related to ${tagName} - RTN Global`,
            "url": `${typeof window !== 'undefined' ? window.location.href : ''}`,
            "mainEntity": {
              "@type": "ItemList",
              "itemListElement": posts.map((post, index) => ({
                "@type": "ListItem",
                "position": index + 1,
                "item": {
                  "@type": "BlogPosting",
                  "headline": post.title,
                  "description": post.description,
                  "url": `${typeof window !== 'undefined' ? window.location.origin : ''}/blog/${post.slug || post._id}`,
                  "datePublished": post.createdAt,
                  "dateModified": post.updatedAt,
                  "author": {
                    "@type": "Person",
                    "name": post.author?.name || `${post.author?.firstName || ''} ${post.author?.lastName || ''}`.trim() || 'RTN Global'
                  },
                  "publisher": {
                    "@type": "Organization",
                    "name": "RTN Global",
                    "logo": {
                      "@type": "ImageObject",
                      "url": `${typeof window !== 'undefined' ? window.location.origin : ''}/logo.png`
                    }
                  },
                  "keywords": post.tags?.join(', ') || '',
                  "articleSection": post.category || 'Blog'
                }
              }))
            },
            "breadcrumb": {
              "@type": "BreadcrumbList",
              "itemListElement": [
                {
                  "@type": "ListItem",
                  "position": 1,
                  "name": "Home",
                  "item": `${typeof window !== 'undefined' ? window.location.origin : ''}`
                },
                {
                  "@type": "ListItem",
                  "position": 2,
                  "name": "Blog",
                  "item": `${typeof window !== 'undefined' ? window.location.origin : ''}/blog`
                },
                {
                  "@type": "ListItem",
                  "position": 3,
                  "name": "Tags",
                  "item": `${typeof window !== 'undefined' ? window.location.origin : ''}/blog/tag`
                },
                {
                  "@type": "ListItem",
                  "position": 4,
                  "name": tagName,
                  "item": `${typeof window !== 'undefined' ? window.location.origin : ''}/blog/tag/${tag}`
                }
              ]
            }
          })
        }}
      />
    </Layout>
  )
} 