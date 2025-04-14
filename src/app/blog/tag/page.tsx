"use client"

import { useState, useEffect } from "react"
import { Layout } from "@/components/layout/layout"
import { Button } from "@/components/ui/button"
import { OptimizedImage } from "@/components/ui/optimized-image"
import Link from "next/link"
import { formatDate } from "@/lib/utils"
import { ArrowRight, ChevronLeft, Loader2, Tag as TagIcon, Hash } from "lucide-react"
import { BlogAPI } from "@/lib/api/api-provider"
import { useRouter } from "next/navigation"
import { CTASection } from "@/components/sections/cta-section"
import Script from "next/script"

// Define interfaces
const API_URL = process.env.NEXT_PUBLIC_API_URL

interface BlogPost {
  _id: string;
  title: string;
  description: string;
  content?: string;
  image?: string;
  imageAlt?: string;
  createdAt: string;
  updatedAt?: string;
  author: {
    _id?: string;
    name?: string;
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

interface TagWithPosts {
  name: string;
  count: number;
  posts: BlogPost[];
}

interface Tag {
  name: string;
  count: number;
}

export default function TagsIndexPage() {
  const router = useRouter();
  const [tagsWithPosts, setTagsWithPosts] = useState<TagWithPosts[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  
  // Fetch tags and associated posts
  useEffect(() => {
    const fetchTags = async () => {
      setIsLoading(true);
      setError(null);
      
      try {
        // 1. Get all available tags
        const tagsResponse = await BlogAPI.getTags();
        const tags = tagsResponse.data || [];
        
        // 2. For each tag, fetch a sample of posts (limited to top tags)
        const topTags = tags.slice(0, 15); // Limit to top 15 tags to avoid too many requests
        
        const tagPromises = topTags.map(async (tag: Tag) => {
          try {
            const postsResponse = await BlogAPI.getAllBlogs({ tag: tag.name });
            // Get up to 3 posts for each tag for the preview
            const tagPosts = postsResponse.data.slice(0, 3);
            
            return {
              name: tag.name,
              count: tag.count,
              posts: tagPosts
            };
          } catch (error) {
            console.error(`Error fetching posts for tag ${tag.name}:`, error);
            return {
              name: tag.name,
              count: tag.count,
              posts: []
            };
          }
        });
        
        const tagsWithPostsData = await Promise.all(tagPromises);
        // Filter out tags with no posts
        setTagsWithPosts(tagsWithPostsData.filter(tag => tag.posts.length > 0));
        
      } catch (error) {
        console.error('Error fetching tags:', error);
        setError("Failed to load blog tags. Please try again later.");
      } finally {
        setIsLoading(false);
      }
    };
    
    fetchTags();
  }, []);

  // Generate JSON-LD structured data for SEO
  const generateJsonLd = () => {
    if (tagsWithPosts.length === 0) return null;
    
    const jsonLd = {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      "name": "Blog Tags",
      "description": "Browse our articles by topic to find the insights you're looking for",
      "url": typeof window !== 'undefined' ? window.location.href : '',
      "mainEntity": {
        "@type": "ItemList",
        "itemListElement": tagsWithPosts.flatMap((tag, tagIndex) => 
          tag.posts.map((post, postIndex) => ({
            "@type": "ListItem",
            "position": tagIndex * 3 + postIndex + 1,
            "item": {
              "@type": "BlogPosting",
              "headline": post.seoTitle || post.title,
              "description": post.seoDescription || post.description,
              "datePublished": post.createdAt,
              "dateModified": post.updatedAt || post.createdAt,
              "url": typeof window !== 'undefined' ? `${window.location.origin}/blog/${post.slug || post._id}` : '',
              "author": post.author ? {
                "@type": "Person",
                "name": post.author.name || `${post.author.firstName || ''} ${post.author.lastName || ''}`.trim() || "RTN Global Team"
              } : {
                "@type": "Organization",
                "name": "RTN Global"
              },
              "publisher": {
                "@type": "Organization",
                "name": "RTN Global",
                "logo": {
                  "@type": "ImageObject",
                  "url": typeof window !== 'undefined' ? `${window.location.origin}/logo.png` : ''
                }
              },
              "keywords": post.seoKeywords?.join(", ") || post.tags?.join(", ") || "",
              "image": post.ogImage || post.image || undefined,
              "wordCount": post.wordCount,
              "inLanguage": post.language || "en"
            }
          }))
        )
      },
      "breadcrumb": {
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem", 
            "position": 1,
            "name": "Home",
            "item": typeof window !== 'undefined' ? window.location.origin : ''
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Blog",
            "item": typeof window !== 'undefined' ? `${window.location.origin}/blog` : ''
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "Tags",
            "item": typeof window !== 'undefined' ? `${window.location.origin}/blog/tag` : ''
          }
        ]
      }
    };
    
    return JSON.stringify(jsonLd);
  };

  return (
    <Layout>
      {/* JSON-LD structured data for SEO */}
      {!isLoading && !error && tagsWithPosts.length > 0 && (
        <Script id="json-ld" type="application/ld+json" dangerouslySetInnerHTML={{ __html: generateJsonLd() || '' }} />
      )}
      
      {/* Hero Section */}
      <section className="relative py-16 bg-muted/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <div className="flex items-center justify-center mb-4">
              <TagIcon className="h-6 w-6 text-primary mr-2" />
              <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">Blog Tags</h1>
            </div>
            <p className="text-lg text-muted-foreground">
              Browse our articles by topic to find the insights you&apos;re looking for
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back Button */}
          <Link href="/blog" className="inline-flex items-center text-sm text-muted-foreground hover:text-primary transition-colors mb-8">
            <ChevronLeft className="mr-1 h-4 w-4" />
            Back to all posts
          </Link>

          {/* Loading or Error State */}
          {isLoading ? (
            <div className="flex justify-center items-center py-20">
              <Loader2 className="h-8 w-8 animate-spin text-muted-foreground" />
            </div>
          ) : error ? (
            <div className="text-center py-12 bg-destructive/10 rounded-lg border border-destructive/20 p-6">
              <h3 className="text-xl font-medium mb-2">Error Loading Tags</h3>
              <p className="text-muted-foreground mb-4">{error}</p>
              <Button 
                onClick={() => router.refresh()}
                variant="outline"
              >
                Try Again
              </Button>
            </div>
          ) : tagsWithPosts.length === 0 ? (
            <div className="text-center py-12">
              <h3 className="text-xl font-medium mb-2">No tags found</h3>
              <p className="text-muted-foreground">
                No blog tags available at the moment.
              </p>
            </div>
          ) : (
            // Tags with Posts
            <div className="space-y-16">
              {tagsWithPosts.map((tag) => (
                <div key={tag.name} className="border-b border-border pb-12 last:border-0 last:pb-0">
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center">
                      <Hash className="h-5 w-5 text-primary mr-2" />
                      <h2 className="text-2xl font-bold">{tag.name}</h2>
                      <span className="ml-2 text-sm text-muted-foreground">
                        ({tag.count} {tag.count === 1 ? 'post' : 'posts'})
                      </span>
                    </div>
                    <Link 
                      href={`/blog/tag/${encodeURIComponent(tag.name)}`}
                      className="text-sm text-primary hover:underline"
                    >
                      View all posts
                    </Link>
                  </div>
                  
                  {/* Posts Grid */}
                  <div className="grid md:grid-cols-3 gap-6">
                    {tag.posts.map((post) => (
                      <article key={post._id} className="bg-card border border-border rounded-lg overflow-hidden hover:shadow-md transition-all duration-300 group">
                        <div className="relative h-40">
                          {post.image ? (
                            <OptimizedImage
                              src={post.image}
                              alt={post.imageAlt || post.title}
                              fill
                              className="h-full object-cover transition-transform group-hover:scale-105 duration-300"
                            />
                          ) : (
                            <div className="bg-muted h-40 flex items-center justify-center">
                              <span className="text-3xl text-muted-foreground opacity-30">{post.category?.[0] || 'B'}</span>
                            </div>
                          )}
                          {post.status && post.status !== 'published' && (
                            <div className="absolute top-2 left-2 bg-yellow-500/90 text-white text-xs py-0.5 px-2 rounded-full">
                              {post.status.charAt(0).toUpperCase() + post.status.slice(1)}
                            </div>
                          )}
                          {post.isFeatured && (
                            <div className="absolute top-2 right-2 bg-primary text-primary-foreground text-xs py-0.5 px-2 rounded-full">
                              Featured
                            </div>
                          )}
                        </div>
                        <div className="p-4">
                          <div className="flex items-center gap-2 text-xs text-muted-foreground mb-1 flex-wrap">
                            <span>{formatDate(new Date(post.createdAt))}</span>
                            {post.category && (
                              <>
                                <span>•</span>
                                <span>{post.category}</span>
                              </>
                            )}
                            {post.estimatedReadTime && (
                              <>
                                <span>•</span>
                                <span>{post.estimatedReadTime} min read</span>
                              </>
                            )}
                          </div>
                          <h3 className="text-base font-medium mb-2 line-clamp-2">
                            <Link href={`/blog/${post.slug || post._id}`} className="hover:text-primary transition-colors">
                              {post.title}
                            </Link>
                          </h3>
                          <p className="text-xs text-muted-foreground line-clamp-2 mb-3">{post.description}</p>
                          <div className="flex justify-between items-center">
                            {post.author?.avatar ? (
                              <Link href={`/blog?author=${encodeURIComponent(post.author._id || '')}`} title={`See more posts by ${post.author.name || `${post.author.firstName || ''} ${post.author.lastName || ''}`.trim() || 'RTN Global'}`}>
                                <div className="relative w-12 h-12 rounded-full overflow-hidden border border-border/50">
                                  <OptimizedImage
                                    src={`${API_URL}${post.author.avatar}`}
                                    alt={post.author.name || `${post.author.firstName || ''} ${post.author.lastName || ''}`.trim()}
                                    fill
                                    className="h-full w-full object-cover"
                                  />
                                </div>
                              </Link>
                            ) : (
                              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary text-xs">
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
                            
                            {post.views !== undefined && (
                              <span className="text-xs text-muted-foreground flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-1"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/></svg>
                                {post.views.toLocaleString()}
                              </span>
                            )}
                            <Link href={`/blog/${post.slug || post._id}`} className="text-xs text-primary hover:underline inline-flex items-center">
                              Read <ArrowRight className="ml-1 h-3 w-3" />
                            </Link>
                          </div>
                        </div>
                      </article>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
      <CTASection title="Ready to get started?" 
      description="Contact us today to learn more about our services and how we can help you achieve your goals."
      primaryButton={{
        text: "Get in touch",
        href: "/contact",
        variant: "secondary"
      }}
      secondaryButton={{
        text: "Learn more",
        href: "/about",
        variant: "outline"
      }}
      className="mt-16"
      backgroundClassName="bg-primary"
      textColorClassName="text-primary-foreground"
      />
    </Layout>
  )
} 