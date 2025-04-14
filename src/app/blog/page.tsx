"use client"

import { useState, useEffect, FormEvent } from "react"
import { Layout } from "@/components/layout/layout"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { OptimizedImage } from "@/components/ui/optimized-image"
import Link from "next/link"
import { formatDate } from "@/lib/utils"
import { ArrowRight, Search, ChevronLeft, ChevronRight, Loader2, Tag, Users2, Wrench, BarChart, Heart } from "lucide-react"
import { BlogAPI } from "@/lib/api/api-provider"
import { useSearchParams, useRouter } from "next/navigation"
import { Chip } from "@/components/ui/chip"
const API_URL = process.env.NEXT_PUBLIC_API_URL
// Define interfaces for types
interface BlogPost {
  _id: string;
  title: string;
  description: string;
  content: string;
  image?: string;
  imageAlt?: string;
  createdAt: string;
  updatedAt: string;
  author: {
    _id: string;
    firstName?: string;
    lastName?: string;
    role?: string;
    avatar?: string;
  } | null;
  
  // Status & Visibility
  isActive?: boolean;
  isFeatured?: boolean;
  scheduledFor?: string;
  status?: 'draft' | 'published' | 'archived';
  
  // Categorization
  category?: string;
  tags?: string[];
  
  // Slug
  slug?: string;
  
  // Engagement
  views?: number;
  viewedBy?: string[];
  likes?: string[];
  shares?: string[];
  comments?: Array<{
    _id: string;
    content: string;
    createdAt: string;
    author: {
      _id: string;
      firstName?: string;
      lastName?: string;
      avatar?: string;
    } | null;
  }>;
  
  // SEO Metadata
  seoTitle?: string;
  seoDescription?: string;
  seoKeywords?: string[];
  canonicalUrl?: string;
  noIndex?: boolean;
  
  // Social Media Meta
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  twitterTitle?: string;
  twitterDescription?: string;
  twitterImage?: string;
  
  // Additional Features
  estimatedReadTime?: number;
  wordCount?: number;
  language?: string;
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
      {/* Hero Section - Improved vertical spacing and container width */}
      <section className="relative py-16 sm:py-24 bg-muted/50">
        <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4">Our Blog</h1>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
              Insights, tips, and the latest trends in web development and digital marketing.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Content - Improved spacing, grid layout, and responsiveness */}
      <section className="py-12 md:py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
            {/* Main Content - Adjusted column span */}
            <div className="lg:col-span-8">
              {/* Active Filters - Improved spacing and alignment */}
              {(category !== 'All' || tag || searchQuery) && (
                <div className="mb-8 flex flex-wrap items-center gap-2">
                  <span className="text-sm text-muted-foreground font-medium">Active filters:</span>
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
              
              {/* Categories Nav (Mobile) - Improved scrolling behavior */}
              <div className="lg:hidden mb-8 -mx-4 px-4 overflow-x-auto scrollbar-hide">
                <div className="flex space-x-2 pb-2 min-w-max">
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
                    <Chip variant="outline" className="flex items-center gap-1 whitespace-nowrap" label="Tags">
                      <Tag className="h-3 w-3" />
                      Tags
                    </Chip>
                  </Link>
                </div>
              </div>
              
              {/* Loading, Error, or No Results - Consistent height and better alignment */}
              {isLoading ? (
                <div className="flex justify-center items-center py-32 bg-card/50 rounded-lg border border-border/50">
                  <Loader2 className="h-10 w-10 animate-spin text-primary/70" />
                </div>
              ) : error ? (
                <div className="text-center py-16 bg-destructive/10 rounded-lg border border-destructive/20 p-8">
                  <h3 className="text-xl font-medium mb-3">Error Loading Blog Posts</h3>
                  <p className="text-muted-foreground mb-6 max-w-md mx-auto">{error}</p>
                  <Button 
                    onClick={() => router.refresh()}
                    variant="outline"
                    size="lg"
                  >
                    Try Again
                  </Button>
                </div>
              ) : posts.length === 0 ? (
                <div className="text-center py-16 bg-card rounded-lg border border-border p-8">
                  <h3 className="text-xl font-medium mb-3">No posts found</h3>
                  <p className="text-muted-foreground max-w-md mx-auto">
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
                /* Blog Posts Grid - Improved grid layout and card design */
                <div className="grid sm:grid-cols-2 gap-6 md:gap-8">
                  {posts.map((post) => (
                    <article key={post._id} className="bg-card border border-border rounded-xl overflow-hidden flex flex-col h-full hover:shadow-md transition-shadow duration-200">
                      <div className="relative h-52 overflow-hidden">
                        {post.image ? (
                          <OptimizedImage
                            src={post.image}
                            alt={post.imageAlt || post.title}
                            fill
                            className="h-full object-cover transition-transform hover:scale-105 duration-300"
                          />
                        ) : (
                          <div className="bg-muted h-full flex items-center justify-center">
                            <span className="text-3xl text-muted-foreground opacity-30">{post.category?.[0] || 'B'}</span>
                          </div>
                        )}
                        {post.status && post.status !== 'published' && (
                          <div className="absolute top-3 left-3 bg-yellow-500/90 text-white text-xs py-1 px-3 rounded-full font-medium">
                            {post.status.charAt(0).toUpperCase() + post.status.slice(1)}
                          </div>
                        )}
                        {post.isFeatured && (
                          <div className="absolute top-3 right-3 bg-primary text-primary-foreground text-xs py-1 px-3 rounded-full font-medium">
                            Featured
                          </div>
                        )}
                      </div>
                      <div className="p-5 sm:p-6 flex flex-col flex-grow">
                        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                          <span>{formatDate(new Date(post.createdAt))}</span>
                          <span>•</span>
                          <span 
                            className="hover:text-primary cursor-pointer font-medium"
                            onClick={() => handleCategoryChange(post.category || 'Uncategorized')}
                          >
                            {post.category || 'Uncategorized'}
                          </span>
                          
                          {post.estimatedReadTime && (
                            <>
                              <span>•</span>
                              <span>{post.estimatedReadTime} min read</span>
                            </>
                          )}
                        </div>
                        <h2 className="text-xl font-bold mb-3 line-clamp-2 hover:text-primary transition-colors">
                          <Link href={`/blog/${post.slug || post._id}`} className="hover:text-primary transition-colors" scroll={true}>
                            {post.title}
                          </Link>
                        </h2>
                        <p className="text-muted-foreground mb-4 line-clamp-3 text-sm flex-grow">{post.description}</p>
                        
                        {/* Tags - Improved spacing and styling */}
                        {post.tags && post.tags.length > 0 && (
                          <div className="flex flex-wrap gap-1.5 mb-4">
                            {post.tags.slice(0, 3).map(tag => (
                              <span
                                key={tag}
                                className="px-2 py-0.5 text-xs bg-secondary text-secondary-foreground rounded-full cursor-pointer hover:bg-secondary/80 transition-colors"
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
                        
                        <div className="flex justify-between items-center mt-auto pt-4 border-t border-border/50">
                          <div className="flex items-center gap-2.5">
                            {post.author?.avatar ? (
                              <div className="relative w-7 h-7 rounded-full overflow-hidden flex-shrink-0">
                                <OptimizedImage
                                  src={`${API_URL}${post.author.avatar}`}
                                  alt={`${post.author.firstName || ''} ${post.author.lastName || ''}`.trim() || 'Author'}
                                  className="object-cover h-full w-full"
                                  fill
                                />
                              </div>
                            ) : (
                              <div className="w-7 h-7 bg-primary/10 rounded-full flex items-center justify-center">
                                <span className="text-xs text-primary">{post.author?.firstName?.[0] || post.author?.lastName?.[0] || 'R'}</span>
                              </div>
                            )}
                            <span className="text-sm text-muted-foreground font-medium">
                              {`${post.author?.firstName || ''} ${post.author?.lastName || ''}`.trim() || 'RTN Global'}
                            </span>
                          </div>
                          
                          <div className="flex items-center gap-2">
                            <div className="text-sm text-muted-foreground flex items-center">
                              <BarChart className="w-3.5 h-3.5 mr-1" />
                              {post.views || 0}
                            </div>
                            <div className="text-sm text-muted-foreground flex items-center">
                              <Heart className="w-3.5 h-3.5 mr-1" />
                              {post.likes?.length || 0}
                            </div>
                            <Link href={`/blog/${post.slug || post._id}`} className="text-primary hover:underline text-sm font-medium inline-flex items-center ml-2" scroll={true}>
                              Read more <ArrowRight className="ml-1 h-4 w-4" />
                            </Link>
                          </div>
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              )}
              
              {/* Pagination - Improved spacing and responsive design */}
              {!isLoading && posts.length > 0 && (
                <div className="mt-12 flex justify-center">
                  <div className="flex flex-wrap justify-center gap-1.5">
                    <Button 
                      variant="outline" 
                      size="icon" 
                      disabled={page === 1}
                      onClick={() => router.push(buildQueryString(page - 1))}
                      className="h-9 w-9"
                    >
                      <ChevronLeft className="h-4 w-4" />
                    </Button>
                    
                    {getPaginationItems().map((item, index) => (
                      item === '...' ? (
                        <span key={`ellipsis-${index}`} className="flex items-center px-3 py-2 text-muted-foreground">...</span>
                      ) : (
                        <Button 
                          key={`page-${item}`}
                          variant={item === page ? 'default' : 'outline'} 
                          size="sm" 
                          className={`h-9 w-9 ${item === page ? 'bg-primary text-primary-foreground' : ''}`}
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
                      className="h-9 w-9"
                    >
                      <ChevronRight className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              )}
            </div>
            
            {/* Sidebar - Improved layout and consistency */}
            <div className="lg:col-span-4 space-y-6">
              {/* Search box */}
              <div className="bg-card rounded-xl border border-border p-6">
                <h3 className="text-lg font-bold mb-4">Search Posts</h3>
                <form onSubmit={handleSearch} className="flex gap-2">
                  <Input
                    type="search"
                    placeholder="Search..."
                    className="flex-1"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                  <Button type="submit" size="icon" variant="secondary">
                    <Search className="h-4 w-4" />
                    <span className="sr-only">Search</span>
                  </Button>
                </form>
              </div>
              
              {/* Categories - Desktop view */}
              <div className="hidden lg:block bg-card rounded-xl border border-border p-6">
                <h3 className="text-lg font-bold mb-4">Categories</h3>
                <div className="flex flex-wrap gap-2">
                  {categories.map((categoryName, index) => (
                    <button
                      key={index}
                      onClick={() => handleCategoryChange(categoryName)}
                      className={`px-3 py-1.5 rounded-full text-sm transition-colors ${
                        category === categoryName
                          ? 'bg-primary/90 text-primary-foreground'
                          : 'bg-muted hover:bg-primary/10 hover:text-primary'
                      }`}
                    >
                      {categoryName}
                    </button>
                  ))}
                </div>
              </div>
              
              {/* Content Topics - Internal linking */}
              <div className="bg-card rounded-xl border border-border p-6">
                <h3 className="text-lg font-bold mb-4">Explore Topics</h3>
                <div className="space-y-5">
                  <div>
                    <h4 className="font-medium text-xs uppercase text-muted-foreground mb-2.5 tracking-wider">Services</h4>
                    <div className="flex flex-wrap gap-2">
                      <Link href="/services/web-development" className="text-sm bg-muted hover:bg-primary/10 hover:text-primary px-3 py-1.5 rounded-full transition-colors">
                        Web Development
                      </Link>
                      <Link href="/services/digital-marketing" className="text-sm bg-muted hover:bg-primary/10 hover:text-primary px-3 py-1.5 rounded-full transition-colors">
                        Digital Marketing
                      </Link>
                      <Link href="/services/ui-ux-design" className="text-sm bg-muted hover:bg-primary/10 hover:text-primary px-3 py-1.5 rounded-full transition-colors">
                        UI/UX Design
                      </Link>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-medium text-xs uppercase text-muted-foreground mb-2.5 tracking-wider">Industries</h4>
                    <div className="flex flex-wrap gap-2">
                      <Link href="/industries/e-commerce" className="text-sm bg-muted hover:bg-primary/10 hover:text-primary px-3 py-1.5 rounded-full transition-colors">
                        E-Commerce
                      </Link>
                      <Link href="/industries/healthcare" className="text-sm bg-muted hover:bg-primary/10 hover:text-primary px-3 py-1.5 rounded-full transition-colors">
                        Healthcare
                      </Link>
                      <Link href="/industries/finance" className="text-sm bg-muted hover:bg-primary/10 hover:text-primary px-3 py-1.5 rounded-full transition-colors">
                        Finance
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Popular Tags */}
              <div className="bg-card rounded-xl border border-border p-6">
                <h3 className="text-lg font-bold mb-4">Popular Tags</h3>
                <div className="flex flex-wrap gap-2">
                  {popularTags.length > 0 ? (
                    popularTags.map((tagItem, index) => (
                      <button
                        key={index}
                        onClick={() => handleTagSelect(tagItem.name)}
                        className={`inline-flex items-center gap-1 px-3 py-1.5 rounded-full text-sm transition-colors ${
                          tag === tagItem.name
                            ? 'bg-primary/90 text-primary-foreground'
                            : 'bg-muted hover:bg-primary/10 hover:text-primary'
                        }`}
                      >
                        <Tag className="h-3 w-3" />
                        {tagItem.name}
                        <span className="text-xs opacity-70">({tagItem.count})</span>
                      </button>
                    ))
                  ) : (
                    <p className="text-muted-foreground text-sm">No tags available</p>
                  )}
                </div>
              </div>
              
              {/* Recent Posts - Improved card design */}
              <div className="bg-card rounded-xl border border-border p-6">
                <h3 className="text-lg font-bold mb-4">Recent Posts</h3>
                <div className="space-y-4">
                  {recentPosts.length > 0 ? (
                    recentPosts.map((post) => (
                      <Link
                        key={post._id}
                        href={`/blog/${post.slug || post._id}`}
                        className="flex gap-3 group p-2 -m-2 rounded-lg hover:bg-muted/50 transition-colors"
                      >
                        <div className="relative h-16 w-16 rounded-md overflow-hidden flex-shrink-0">
                          {post.image ? (
                            <OptimizedImage
                              src={post.image}
                              fill
                              alt={post.title}
                              className="object-cover h-full transition-transform group-hover:scale-105 duration-200"
                            />
                          ) : (
                            <div className="w-full h-full bg-primary/10 flex items-center justify-center">
                              <span className="text-lg text-primary/50">{post.title.charAt(0)}</span>
                            </div>
                          )}
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="text-sm font-medium line-clamp-2 group-hover:text-primary transition-colors">
                            {post.title}
                          </h4>
                          <p className="text-xs text-muted-foreground mt-1">
                            {formatDate(new Date(post.createdAt))}
                          </p>
                        </div>
                      </Link>
                    ))
                  ) : (
                    <p className="text-muted-foreground text-sm">No recent posts available</p>
                  )}
                </div>
              </div>
              
              {/* Popular Services - Enhanced Internal Linking */}
              <div className="bg-card rounded-xl border border-border p-6">
                <h3 className="text-lg font-bold mb-4">Explore Our Services</h3>
                <div className="space-y-2">
                  <Link 
                    href="/services/web-development" 
                    className="block p-3 hover:bg-primary/5 rounded-md transition-colors"
                  >
                    <h4 className="font-medium">Web Development</h4>
                    <p className="text-sm text-muted-foreground mt-1">Custom websites & web applications</p>
                  </Link>
                  <Link 
                    href="/services/mobile-development" 
                    className="block p-3 hover:bg-primary/5 rounded-md transition-colors"
                  >
                    <h4 className="font-medium">Mobile Apps</h4>
                    <p className="text-sm text-muted-foreground mt-1">iOS & Android app solutions</p>
                  </Link>
                  <Link 
                    href="/services/digital-marketing" 
                    className="block p-3 hover:bg-primary/5 rounded-md transition-colors"
                  >
                    <h4 className="font-medium">Digital Marketing</h4>
                    <p className="text-sm text-muted-foreground mt-1">SEO, SEM & content strategy</p>
                  </Link>
                </div>
                <div className="mt-4 pt-4 border-t border-border/60">
                  <Link href="/services" className="text-primary text-sm flex items-center hover:underline">
                    View All Services <ArrowRight className="ml-1 h-3.5 w-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Strategic Cross-Content Section - Improved layout and consistency */}
      <section className="py-16 sm:py-20 bg-muted/20 border-t border-border">
        <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Discover More Resources</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Explore our comprehensive resources for services, case studies, and industry insights
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {/* Service Solutions */}
            <div className="bg-card rounded-xl p-6 border border-border hover:shadow-md transition-all duration-300 flex flex-col">
              <h3 className="text-xl font-bold mb-3">Our Services</h3>
              <p className="text-muted-foreground mb-6">
                Discover our comprehensive range of web development and digital marketing services designed to help your business grow.
              </p>
              <div className="space-y-2.5 mb-6">
                <Link href="/services/web-development" className="flex items-center text-sm hover:text-primary transition-colors">
                  <ArrowRight className="h-4 w-4 mr-2 text-primary flex-shrink-0" />
                  <span>Web Development Solutions</span>
                </Link>
                <Link href="/services/digital-marketing" className="flex items-center text-sm hover:text-primary transition-colors">
                  <ArrowRight className="h-4 w-4 mr-2 text-primary flex-shrink-0" />
                  <span>Digital Marketing Strategies</span>
                </Link>
                <Link href="/services/ui-ux-design" className="flex items-center text-sm hover:text-primary transition-colors">
                  <ArrowRight className="h-4 w-4 mr-2 text-primary flex-shrink-0" />
                  <span>UI/UX Design Services</span>
                </Link>
              </div>
              <Link 
                href="/services" 
                className="mt-auto inline-flex items-center justify-center px-4 py-2 rounded-md bg-primary/10 hover:bg-primary/20 text-primary text-sm font-medium transition-colors"
              >
                View All Services
              </Link>
            </div>
            
            {/* Case Studies */}
            <div className="bg-card rounded-xl p-6 border border-border hover:shadow-md transition-all duration-300 flex flex-col">
              <h3 className="text-xl font-bold mb-3">Client Success Stories</h3>
              <p className="text-muted-foreground mb-6">
                See how we&apos;ve helped businesses like yours achieve their goals with our tailored digital solutions.
              </p>
              <div className="space-y-2.5 mb-6">
                <Link href="/case-studies?category=e-commerce" className="flex items-center text-sm hover:text-primary transition-colors">
                  <ArrowRight className="h-4 w-4 mr-2 text-primary flex-shrink-0" />
                  <span>E-Commerce Success Stories</span>
                </Link>
                <Link href="/case-studies?category=healthcare" className="flex items-center text-sm hover:text-primary transition-colors">
                  <ArrowRight className="h-4 w-4 mr-2 text-primary flex-shrink-0" />
                  <span>Healthcare Transformations</span>
                </Link>
                <Link href="/case-studies?category=saas" className="flex items-center text-sm hover:text-primary transition-colors">
                  <ArrowRight className="h-4 w-4 mr-2 text-primary flex-shrink-0" />
                  <span>SaaS Platform Case Studies</span>
                </Link>
              </div>
              <Link 
                href="/case-studies" 
                className="mt-auto inline-flex items-center justify-center px-4 py-2 rounded-md bg-primary/10 hover:bg-primary/20 text-primary text-sm font-medium transition-colors"
              >
                Browse Case Studies
              </Link>
            </div>
            
            {/* Resources */}
            <div className="bg-card rounded-xl p-6 border border-border hover:shadow-md transition-all duration-300 flex flex-col">
              <h3 className="text-xl font-bold mb-3">Free Resources</h3>
              <p className="text-muted-foreground mb-6">
                Access valuable guides, templates, and tools to help you implement effective digital strategies.
              </p>
              <div className="space-y-2.5 mb-6">
                <Link href="/resources?type=guides" className="flex items-center text-sm hover:text-primary transition-colors">
                  <ArrowRight className="h-4 w-4 mr-2 text-primary flex-shrink-0" />
                  <span>Digital Strategy Guides</span>
                </Link>
                <Link href="/knowledge-base/tutorials" className="flex items-center text-sm hover:text-primary transition-colors">
                  <ArrowRight className="h-4 w-4 mr-2 text-primary flex-shrink-0" />
                  <span>Technical Tutorials</span>
                </Link>
                <Link href="/resources?type=templates" className="flex items-center text-sm hover:text-primary transition-colors">
                  <ArrowRight className="h-4 w-4 mr-2 text-primary flex-shrink-0" />
                  <span>Free Templates & Tools</span>
                </Link>
              </div>
              <Link 
                href="/resources" 
                className="mt-auto inline-flex items-center justify-center px-4 py-2 rounded-md bg-primary/10 hover:bg-primary/20 text-primary text-sm font-medium transition-colors"
              >
                Access Resources
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* Explore More Resources - Improved layout with better card design */}
      <section className="py-16 border-t border-border">
        <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
          <h2 className="text-3xl font-bold text-center mb-12">Explore More Resources</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {/* Column 1: Industries We Serve */}
            <div className="bg-card rounded-xl border border-border p-6">
              <h3 className="text-xl font-bold mb-5 flex items-center">
                <Users2 className="mr-2 h-5 w-5 text-primary flex-shrink-0" />
                Industries We Serve
              </h3>
              <ul className="space-y-3">
                <li>
                  <Link href="/industries/e-commerce" className="text-primary hover:underline flex items-center group">
                    <ArrowRight className="mr-2 h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" /> 
                    E-Commerce Solutions
                  </Link>
                </li>
                <li>
                  <Link href="/industries/healthcare" className="text-primary hover:underline flex items-center group">
                    <ArrowRight className="mr-2 h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" /> 
                    Healthcare Technology
                  </Link>
                </li>
                <li>
                  <Link href="/industries/finance" className="text-primary hover:underline flex items-center group">
                    <ArrowRight className="mr-2 h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" /> 
                    Financial Services
                  </Link>
                </li>
                <li>
                  <Link href="/industries/education" className="text-primary hover:underline flex items-center group">
                    <ArrowRight className="mr-2 h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" /> 
                    Educational Platforms
                  </Link>
                </li>
                <li>
                  <Link href="/industries/real-estate" className="text-primary hover:underline flex items-center group">
                    <ArrowRight className="mr-2 h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" /> 
                    Real Estate Technology
                  </Link>
                </li>
              </ul>
              <Link href="/industries" className="block text-sm text-muted-foreground hover:underline mt-4 pt-4 border-t border-border/60">
                View all industries →
              </Link>
            </div>
            
            {/* Column 2: Popular Services */}
            <div className="bg-card rounded-xl border border-border p-6">
              <h3 className="text-xl font-bold mb-5 flex items-center">
                <Wrench className="mr-2 h-5 w-5 text-primary flex-shrink-0" />
                Our Core Services
              </h3>
              <ul className="space-y-3">
                <li>
                  <Link href="/services/wix-development" className="text-primary hover:underline flex items-center group">
                    <ArrowRight className="mr-2 h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" /> 
                    Premium Wix Development
                  </Link>
                </li>
                <li>
                  <Link href="/services/mern-stack" className="text-primary hover:underline flex items-center group">
                    <ArrowRight className="mr-2 h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" /> 
                    MERN Stack Development
                  </Link>
                </li>
                <li>
                  <Link href="/services/react-native" className="text-primary hover:underline flex items-center group">
                    <ArrowRight className="mr-2 h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" /> 
                    React Native App Development
                  </Link>
                </li>
                <li>
                  <Link href="/services/ui-ux-design" className="text-primary hover:underline flex items-center group">
                    <ArrowRight className="mr-2 h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" /> 
                    UI/UX Design Services
                  </Link>
                </li>
                <li>
                  <Link href="/services/seo-optimization" className="text-primary hover:underline flex items-center group">
                    <ArrowRight className="mr-2 h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" /> 
                    SEO & Content Strategy
                  </Link>
                </li>
              </ul>
              <Link href="/services" className="block text-sm text-muted-foreground hover:underline mt-4 pt-4 border-t border-border/60">
                Explore all services →
              </Link>
            </div>
            
            {/* Column 3: Get Started */}
            <div className="bg-card rounded-xl border border-border p-6">
              <h3 className="text-xl font-bold mb-4">Ready to Get Started?</h3>
              <p className="text-muted-foreground mb-6">
                Connect with our experts to discuss your project needs and discover how our solutions can help you achieve your business goals.
              </p>
              <div className="space-y-3">
                <Link 
                  href="/contact" 
                  className="block w-full bg-primary text-primary-foreground py-2.5 px-4 rounded-md text-center hover:bg-primary/90 transition-colors font-medium"
                >
                  Request Free Consultation
                </Link>
                <Link 
                  href="/portfolio" 
                  className="block w-full bg-secondary text-secondary-foreground py-2.5 px-4 rounded-md text-center hover:bg-secondary/90 transition-colors font-medium"
                >
                  Browse Our Portfolio
                </Link>
              </div>
              <div className="mt-6 text-center">
                <Link 
                  href="/knowledge-base/getting-started/how-to-work-with-us"
                  className="text-primary hover:underline text-sm inline-flex items-center"
                >
                  Learn how we work with clients <ArrowRight className="ml-1 h-3.5 w-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section - Improved layout and visual appeal */}
      <section className="py-16 sm:py-20 bg-primary">
        <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
          <div className="max-w-3xl mx-auto text-center text-primary-foreground">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Want to Learn More?</h2>
            <p className="text-lg opacity-90 mb-8 max-w-xl mx-auto">
              Subscribe to our newsletter to get the latest articles, news, and insights delivered directly to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 max-w-md mx-auto">
              <Input
                type="email"
                placeholder="Your email address"
                className="w-full rounded-md border border-primary-foreground/20 bg-primary-foreground/10 text-primary-foreground placeholder:text-primary-foreground/60 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary-foreground"
              />
              <Button variant="secondary" size="lg" className="w-full sm:w-auto whitespace-nowrap">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
} 