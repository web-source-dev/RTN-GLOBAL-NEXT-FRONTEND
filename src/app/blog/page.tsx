"use client"

import { useState, useEffect, FormEvent } from "react"
import { Layout } from "@/components/layout/layout"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { OptimizedImage } from "@/components/ui/optimized-image"
import Link from "next/link"
import { formatDate } from "@/lib/utils"
import { ArrowRight, Search, ChevronLeft, ChevronRight, Loader2, Tag } from "lucide-react"
import { BlogAPI } from "@/lib/api/api-provider"
import { useSearchParams, useRouter } from "next/navigation"
import { Chip } from "@/components/ui/chip"

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

interface BlogQueryParams {
  category?: string;
  tag?: string;
  page?: number;
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

export default function BlogPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const page = parseInt(searchParams.get('page') || '1');
  const category = searchParams.get('category') || 'All';
  const tag = searchParams.get('tag') || '';
  const searchQuery = searchParams.get('q') || '';

  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [categories, setCategories] = useState<string[]>(['All']);
  const [popularTags, setPopularTags] = useState<TagCount[]>([]);
  const [recentPosts, setRecentPosts] = useState<BlogPost[]>([]);
  const [totalPages, setTotalPages] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState(searchQuery);
  const [error, setError] = useState<string | null>(null);

  // Fetch blogs and categories
  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      setError(null);
      
      try {
        // Build query parameters
        const params: BlogQueryParams = {};
        if (category && category !== 'All') {
          params.category = category;
        }
        if (tag) {
          params.tag = tag;
        }
        
        // Get blogs with filters
        let filteredBlogs: BlogPost[] = [];
        if (searchQuery) {
          // Use search endpoint if there's a search query
          const searchResponse = await BlogAPI.searchBlogs(searchQuery);
          filteredBlogs = searchResponse.data;
        } else {
          // Use regular endpoint with filters
          const response = await BlogAPI.getAllBlogs(params);
          filteredBlogs = response.data;
        }
        
        // Handle pagination
        const totalItems = filteredBlogs.length;
        const calculatedTotalPages = Math.ceil(totalItems / 6);
        setTotalPages(calculatedTotalPages || 1);
        
        // Get current page of blogs (6 per page)
        const start = (page - 1) * 6;
        const end = start + 6;
        const paginatedBlogs = filteredBlogs.slice(start, end);
        
        setPosts(paginatedBlogs);
        
        // Fetch categories
        try {
          const categoriesResponse = await BlogAPI.getCategories();
          setCategories(['All', ...categoriesResponse.data]);
        } catch (categoryError) {
          console.error('Error fetching blog categories:', categoryError);
          // Fallback categories are already in the API provider
          setCategories([
            'All',
            'Web Development',
            'Digital Marketing',
            'SEO',
            'Content Strategy',
            'Design',
            'Technology'
          ]);
        }
        
        // Fetch popular tags
        try {
          const tagsResponse = await BlogAPI.getTags();
          setPopularTags(tagsResponse.data);
        } catch (error: unknown) {
          const apiError = error as APIError;
          console.error('Error fetching popular tags:', apiError);
        }
        
        // Fetch featured posts
        try {
          const featuredResponse = await BlogAPI.getFeaturedBlogs(3);
          setRecentPosts(featuredResponse.data);
        } catch (error: unknown) {
          const apiError = error as APIError;
          console.error('Error fetching featured posts:', apiError);
          // Fallback to regular posts if featured can't be loaded
          if (filteredBlogs.length > 0) {
            // Sort by creation date to get most recent
            const sortedBlogs = [...filteredBlogs]
              .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
              .slice(0, 3);
            setRecentPosts(sortedBlogs);
          }
        }
      } catch (error: unknown) {
        const apiError = error as APIError;
        console.error('Error fetching blogs:', apiError);
        // Set empty posts if main blog list can't be loaded
        setPosts([]);
        setError(
          apiError.response?.status === 500
            ? "Sorry, we're experiencing server issues. Please try again later."
            : "Failed to load blog posts. Please check your connection and try again."
        );
      } finally {
        setIsLoading(false);
      }
    };
    
    fetchData();
  }, [page, category, tag, searchQuery]);

  // Handle search
  const handleSearch = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      router.push(`/blog?q=${encodeURIComponent(searchTerm)}`, {
        scroll: false // Prevent scrolling to top on navigation
      });
    }
  };

  // Handle category change
  const handleCategoryChange = (selectedCategory: string) => {
    // Use router.push but with shallow routing to prevent full page refresh
    router.push(`/blog?category=${encodeURIComponent(selectedCategory)}`, { 
      scroll: false // Prevent scrolling to top on navigation
    });
  };

  // Handle tag selection
  const handleTagSelect = (tagName: string) => {
    router.push(`/blog?tag=${encodeURIComponent(tagName)}`, {
      scroll: false // Prevent scrolling to top on navigation
    });
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
    const params = new URLSearchParams();
    params.append('page', newPage.toString());
    if (category !== 'All') params.append('category', category);
    if (tag) params.append('tag', tag);
    if (searchQuery) params.append('q', searchQuery);
    return `?${params.toString()}`;
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-20 bg-muted/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">Our Blog</h1>
            <p className="mt-6 text-xl text-muted-foreground">
              Insights, tips, and the latest trends in web development and digital marketing.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Content */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Main Content */}
            <div className="lg:w-3/4">
              {/* Active Filters */}
              {(category !== 'All' || tag || searchQuery) && (
                <div className="mb-6 flex flex-wrap items-center gap-2">
                  <span className="text-sm text-muted-foreground">Active filters:</span>
                  {category !== 'All' && (
                    <Chip 
                      label={`Category: ${category}`} 
                      onDelete={() => router.push('/blog')}
                      className="h-8"
                    />
                  )}
                  {tag && (
                    <Chip 
                      label={`Tag: ${tag}`} 
                      onDelete={() => router.push(category !== 'All' ? `/blog?category=${category}` : '/blog')}
                      className="h-8"
                    />
                  )}
                  {searchQuery && (
                    <Chip 
                      label={`Search: ${searchQuery}`} 
                      onDelete={() => router.push(category !== 'All' ? `/blog?category=${category}` : '/blog')}
                      className="h-8"
                    />
                  )}
                </div>
              )}
              
              {/* Categories Nav (Mobile) */}
              <div className="block lg:hidden mb-8 overflow-x-auto">
                <div className="flex space-x-2 pb-2">
                  {categories.map((cat) => (
                    <Chip
                      key={cat}
                      variant={cat === category ? 'default' : 'secondary'}
                      onClick={() => handleCategoryChange(cat)}
                      label={cat}
                    >
                      {cat}
                    </Chip>
                  ))}
                  
                  {/* Add the Tags chip/link */}
                  <Link href="/blog/tag">
                    <Chip variant="outline" className="flex items-center gap-1" label="Tags">
                      <Tag className="h-3 w-3" />
                      Tags
                    </Chip>
                  </Link>
                </div>
              </div>
              
              {/* Loading, Error, or No Results */}
              {isLoading ? (
                <div className="flex justify-center items-center py-20">
                  <Loader2 className="h-8 w-8 animate-spin text-muted-foreground" />
                </div>
              ) : error ? (
                <div className="text-center py-12 bg-destructive/10 rounded-lg border border-destructive/20 p-6">
                  <h3 className="text-xl font-medium mb-2">Error Loading Blog Posts</h3>
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
                    {searchQuery 
                      ? `No results found for "${searchQuery}". Try a different search term.` 
                      : tag 
                        ? `No blog posts with tag "${tag}" available.`
                        : category !== 'All'
                          ? `No blog posts in category "${category}" available.`
                          : 'No blog posts available.'}
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
                          <span>•</span>
                          <span 
                            className="hover:text-primary cursor-pointer"
                            onClick={() => handleCategoryChange(post.category || 'Uncategorized')}
                          >
                            {post.category || 'Uncategorized'}
                          </span>
                        </div>
                        <h2 className="text-xl font-bold mb-2 line-clamp-2">
                          <Link href={`/blog/${post.slug || post._id}`} className="hover:text-primary transition-colors" scroll={true}>
                            {post.title}
                          </Link>
                        </h2>
                        <p className="text-muted-foreground mb-4 line-clamp-3">{post.description}</p>
                        
                        {/* Tags */}
                        {post.tags && post.tags.length > 0 && (
                          <div className="flex flex-wrap gap-1 mb-3">
                            {post.tags.slice(0, 3).map(tag => (
                              <span
                                key={tag}
                                className="px-2 py-0.5 text-xs bg-secondary text-secondary-foreground rounded-full cursor-pointer hover:bg-secondary/80"
                                onClick={() => handleTagSelect(tag)}
                              >
                                {tag}
                              </span>
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
                              alt={post.author.name}
                              className="w-6 h-6 rounded-full"
                              fill
                            />
                          )}
                          <span className="text-sm text-muted-foreground">
                            {post.author?.name || 'RTN Global'}
                          </span>
                          </div>
                          <Link href={`/blog/${post.slug || post._id}`} className="text-primary hover:underline text-sm inline-flex items-center" scroll={true}>
                            Read more <ArrowRight className="ml-1 h-4 w-4" />
                          </Link>
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              )}
              
              {/* Pagination */}
              {!isLoading && posts.length > 0 && (
                <div className="mt-12 flex justify-center">
                  <div className="flex space-x-1">
                    <Button 
                      variant="outline" 
                      size="icon" 
                      disabled={page === 1}
                      onClick={() => router.push(buildQueryString(page - 1))}
                    >
                      <ChevronLeft className="h-4 w-4" />
                    </Button>
                    
                    {getPaginationItems().map((item, index) => (
                      item === '...' ? (
                        <span key={`ellipsis-${index}`} className="flex items-center px-3 py-2">...</span>
                      ) : (
                        <Button 
                          key={`page-${item}`}
                          variant="outline" 
                          size="sm" 
                          className={item === page ? 'bg-primary text-primary-foreground' : ''}
                          onClick={() => router.push(buildQueryString(item as number))}
                        >
                          {item}
                        </Button>
                      )
                    ))}
                    
                    <Button 
                      variant="outline" 
                      size="icon" 
                      disabled={page === totalPages}
                      onClick={() => router.push(buildQueryString(page + 1))}
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
              
              {/* Categories (Desktop) */}
              <div className="hidden lg:block mb-8">
                <h3 className="text-lg font-semibold mb-4">Categories</h3>
                <ul className="space-y-2">
                  {categories.map((cat) => (
                    <li key={cat}>
                      <button
                        onClick={() => handleCategoryChange(cat)}
                        className={`text-sm hover:text-primary transition-colors ${
                          cat === category ? 'text-primary font-medium' : 'text-muted-foreground'
                        }`}
                      >
                        {cat}
                      </button>
                    </li>
                  ))}
                </ul>
                
                {/* Add this divider and link to the tags page */}
                <div className="mt-4 pt-4 border-t border-border">
                  <Link
                    href="/blog/tag"
                    className="inline-flex items-center text-sm font-medium text-primary hover:text-primary/80"
                  >
                    <Tag className="h-4 w-4 mr-2" />
                    Browse by tags
                  </Link>
                </div>
              </div>
              
              {/* Recent Posts */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold mb-4">Featured Posts</h3>
                {recentPosts.length === 0 ? (
                  <p className="text-sm text-muted-foreground">No featured posts available.</p>
                ) : (
                  <ul className="space-y-4">
                    {recentPosts.map((post) => (
                      <li key={post._id}>
                        <Link href={`/blog/${post.slug || post._id}`} className="hover:text-primary transition-colors">
                          <h4 className="text-sm font-medium line-clamp-2">{post.title}</h4>
                          <div className="flex items-center gap-2 text-xs text-muted-foreground mt-1">
                            <span>{formatDate(new Date(post.createdAt))}</span>
                            <span>•</span>
                            <span>{post.category || 'Uncategorized'}</span>
                          </div>
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
              
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
              
              {/* Popular Tags */}
              <div>
                <h3 className="text-lg font-semibold mb-4">Popular Tags</h3>
                <div className="flex flex-wrap gap-2">
                  {popularTags.length > 0 ? (
                    popularTags.map((tagItem) => (
                      <button
                        key={tagItem.name}
                        onClick={() => handleTagSelect(tagItem.name)}
                        className={`px-3 py-1 text-xs rounded-full hover:bg-secondary/80 transition-colors ${
                          tagItem.name === tag ? 'bg-primary text-primary-foreground' : 'bg-secondary text-secondary-foreground'
                        }`}
                      >
                        {tagItem.name}
                        {tagItem.count > 0 && <span className="ml-1 opacity-60">({tagItem.count})</span>}
                      </button>
                    ))
                  ) : (
                    // Fallback tags if API doesn't return any
                    ['SEO', 'React', 'Marketing', 'Design', 'Mobile', 'Social Media', 'Email', 'Content', 'Strategy'].map((tagName) => (
                      <button
                        key={tagName}
                        onClick={() => handleTagSelect(tagName)}
                        className={`px-3 py-1 text-xs bg-secondary text-secondary-foreground rounded-full hover:bg-secondary/80 transition-colors ${
                          tagName === tag ? 'bg-primary text-primary-foreground' : ''
                        }`}
                      >
                        {tagName}
                      </button>
                    ))
                  )}
                </div>
                
                {/* Add this new link to view all tags */}
                <Link
                  href="/blog/tag"
                  className="mt-4 inline-flex items-center text-sm text-primary hover:underline"
                >
                  <Tag className="h-4 w-4 mr-1" />
                  View all tags
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center text-primary-foreground">
            <h2 className="text-3xl font-bold">Want to Learn More?</h2>
            <p className="mt-4 text-lg">
              Subscribe to our newsletter to get the latest articles, news, and insights delivered directly to your inbox.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Input
                type="email"
                placeholder="Your email address"
                className="w-full sm:w-64 rounded-md border border-primary-foreground/20 bg-primary-foreground/10 text-primary-foreground placeholder:text-primary-foreground/60 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary-foreground"
              />
              <Button variant="secondary" size="lg">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
} 