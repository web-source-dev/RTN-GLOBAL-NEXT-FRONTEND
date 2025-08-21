"use client"

import React, { useState, useEffect } from "react"
import Link from "next/link"
import { BlogAPI } from "@/lib/api/api-provider"
import { OptimizedImage } from "@/components/ui/optimized-image"
import { Clock, Eye, Heart, MessageSquare } from "lucide-react"

// Blog types
interface BlogPost {
  _id?: string;
  title?: string;
  description?: string;
  slug?: string;
  image?: string;
  imageAlt?: string;
  category?: string;
  tags?: string[];
  createdAt?: string;
  author?: {
    firstName?: string;
    lastName?: string;
    avatar?: string;
  };
  views?: number;
  likes?: string[];
  comments?: string[];
  estimatedReadTime?: number;
  wordCount?: number;
  language?: string;
  isFeatured?: boolean;
  status?: string;
}

// Tag interface to match backend response
interface Tag {
  name: string;
  count: number;
}

export function BlogMegaMenu() {
  const [featuredPosts, setFeaturedPosts] = useState<BlogPost[]>([]);
  const [categories, setCategories] = useState<string[]>([]);
  const [tags, setTags] = useState<Tag[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    const fetchBlogData = async () => {
      try {
        setIsLoading(true);
        
        // Fetch featured posts
        const featuredResponse = await BlogAPI.getFeaturedBlogs(3);
        setFeaturedPosts(featuredResponse.data || []);
        
        // Fetch categories
        const categoriesResponse = await BlogAPI.getCategories();
        setCategories(categoriesResponse.data || []);
        
        // Fetch tags - API returns objects with name and count properties
        const tagsResponse = await BlogAPI.getTags();
        setTags((tagsResponse.data || []).slice(0, 8)); // Limit to top 8 tags
      } catch (error) {
        console.error("Error fetching blog data for mega menu:", error);
        // Set fallback data
        setFeaturedPosts([]);
        setCategories([]);
        setTags([]);
      } finally {
        setIsLoading(false);
      }
    };
    
    fetchBlogData();
  }, []);
  
  // Format date
  const formatDate = (dateString?: string) => {
    if (!dateString) return "";
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'short', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };

  // Format numbers with K suffix for better readability
  const formatNumber = (num?: number): string => {
    if (num === undefined) return "0";
    return num >= 1000 ? `${(num / 1000).toFixed(1)}K` : num.toString();
  };
  
  return (
    <div className="absolute left-0 w-full bg-white shadow-lg rounded-b-lg py-6 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* Featured Posts - 8/12 width */}
          <div className="md:col-span-8">
            <h3 className="text-lg font-semibold text-primary mb-4">Latest Articles</h3>
            
            {isLoading ? (
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="animate-pulse">
                    <div className="bg-gray-200 h-40 w-full rounded-lg mb-3"></div>
                    <div className="bg-gray-200 h-6 w-3/4 rounded mb-2"></div>
                    <div className="bg-gray-200 h-4 w-full rounded mb-1"></div>
                    <div className="bg-gray-200 h-4 w-2/3 rounded"></div>
                  </div>
                ))}
              </div>
            ) : featuredPosts.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                {featuredPosts.map((post) => (
                  <Link 
                    key={post._id || post.slug}
                    href={`/blog/${post.slug}`}
                    className="group"
                    style={{ border: '1px solid rgba(0, 0, 0, 0.18)', padding: '5px', borderRadius: '10px' }}
                  >
                    <div className="relative w-full h-40 mb-3 overflow-hidden rounded-lg border border-zinc-800">
                      <OptimizedImage
                        src={post.image || '/images/placeholder.jpg'}
                        alt={post.imageAlt || post.title || 'Blog post'}
                        fill
                        className="object-cover h-full transition-transform duration-500 group-hover:scale-105"
                      />
                      {post.category && (
                        <div className="absolute top-0 right-0 m-2">
                          <span className="text-xs font-medium bg-white/90 text-primary px-2 py-1 rounded-full">
                            {post.category}
                          </span>
                        </div>
                      )}
                    </div>
                    <h4 className="font-medium text-foreground group-hover:text-primary transition-colors line-clamp-2">
                      {post.title}
                    </h4>
                    
                    {/* Meta information */}
                    <div className="flex items-center justify-between flex-wrap mt-2">
                      <p className="text-xs text-foreground/70">
                        {post.author && post.author.firstName && (
                        <>By {post.author.firstName} {post.author.lastName}</>
                      )}
                      </p>
                      <p className="text-xs text-foreground/70">
                        {formatDate(post.createdAt)}
                      </p>
                    </div>
                    {/* Engagement stats */}
                    {(post.views !== undefined || post.likes !== undefined || post.comments !== undefined || post.estimatedReadTime !== undefined) && (
                      <div className="flex items-center gap-2 mt-2 text-[10px] text-foreground/60 flex-wrap">
                        {post.estimatedReadTime !== undefined && (
                          <span className="flex items-center gap-1">
                            <Clock className="h-3 w-3" />
                            {post.estimatedReadTime} min
                          </span>
                        )}
                        {post.views !== undefined && (
                          <span className="flex items-center gap-1">
                            <Eye className="h-3 w-3" />
                            {formatNumber(post.views)}
                          </span>
                        )}
                        {post.likes !== undefined && (
                          <span className="flex items-center gap-1">
                            <Heart className="h-3 w-3" />
                            {formatNumber(post.likes?.length)}
                          </span>
                        )}
                        {post.comments !== undefined && (
                          <span className="flex items-center gap-1">
                            <MessageSquare className="h-3 w-3" />
                            {formatNumber(post.comments?.length)}
                          </span>
                        )}
                      </div>
                    )}
                  </Link>
                ))}
              </div>
            ) : (
              <p className="text-muted-foreground text-center py-4">No featured posts available</p>
            )}
            
            <div className="mt-8 text-center">
              <Link 
                href="/blog"
                className="inline-block font-medium text-primary hover:underline"
              >
                View All Articles
              </Link>
            </div>
          </div>
          
          {/* Categories and Tags - 4/12 width */}
          <div className="md:col-span-4 space-y-6">
            {/* Categories */}
            <div>
              <h3 className="text-lg font-semibold text-primary mb-3">Categories</h3>
              <div className="space-y-2">
                {isLoading ? (
                  Array(5).fill(0).map((_, i) => (
                    <div key={i} className="animate-pulse bg-gray-200 h-6 w-3/4 rounded"></div>
                  ))
                ) : categories.length > 0 ? (
                  categories.map((category, idx) => (
                    <div key={idx}>
                      <Link 
                        href={`/blog?category=${encodeURIComponent(category)}`}
                        className="text-foreground/80 hover:text-primary transition-colors"
                      >
                        {category}
                      </Link>
                    </div>
                  ))
                ) : (
                  <p className="text-muted-foreground">No categories available</p>
                )}
              </div>
            </div>
            
            {/* Tags */}
            <div>
              <h3 className="text-lg font-semibold text-primary mb-3">Popular Tags</h3>
              <div className="flex flex-wrap gap-2">
                {isLoading ? (
                  Array(8).fill(0).map((_, i) => (
                    <div key={i} className="animate-pulse bg-gray-200 h-8 w-16 rounded-full"></div>
                  ))
                ) : tags.length > 0 ? (
                  tags.map((tag, idx) => (
                    <Link 
                      key={idx}
                      href={`/blog/tag/${encodeURIComponent(tag.name)}`}
                      className="inline-block px-3 py-1 bg-muted rounded-full text-xs text-foreground/80 hover:bg-primary/10 hover:text-primary transition-colors"
                    >
                      {tag.name} {tag.count > 0 && <span className="text-xs text-primary">({tag.count})</span>}
                    </Link>
                  ))
                ) : (
                  <p className="text-muted-foreground">No tags available</p>
                )}
              </div>
            </div>
            
            {/* Newsletter Signup Teaser */}
            <div className="p-4 bg-primary/5 rounded-lg">
              <h4 className="font-medium text-primary">Stay Updated</h4>
              <p className="text-sm text-foreground/70 mt-1">Subscribe to our newsletter for the latest industry insights and company news.</p>
              <Link 
                href="/newsletter/subscribe" 
                className="inline-block text-sm font-medium text-primary hover:text-primary/80 mt-2"
              >
                Subscribe Now →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 