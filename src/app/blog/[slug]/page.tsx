"use client"

import { useState, useEffect, FormEvent } from "react"
import { Layout } from "@/components/layout/layout"
import { Button } from "@/components/ui/button"
import { OptimizedImage } from "@/components/ui/optimized-image"
import { Textarea } from "@/components/ui/textarea"
import { Avatar } from "@/components/ui/avatar"
import { toast } from "@/components/ui/use-toast"
import Link from "next/link"
import { formatDate } from "@/lib/utils"
import Script from "next/script"
import { 
  ArrowLeft, 
  Calendar, 
  Tag, 
  Loader2, 
  Heart, 
  MessageSquare,
  Send, 
  Briefcase,
  BarChart,
  Award,
  TrendingUp,
  Zap,
  Facebook,
  Twitter,
  Linkedin,
  CheckCircle2,
  Copy,
} from "lucide-react"
import { BlogAPI } from "@/lib/api/api-provider"
import { AuthAPI } from "@/lib/api/api-provider"
import { useParams, useRouter, notFound } from "next/navigation"
import { Comment } from "@/components/blog/comment"
import { FaEnvelope, FaPinterest, FaReddit, FaWhatsapp } from "react-icons/fa"

interface Author {
  _id: string;
  name?: string;
  firstName?: string;
  lastName?: string;
  email: string;
  role?: string;
  avatar?: string;
}

interface ReplyType {
  _id?: string;
  user: Author;
  content: string;
  likes: string[];
  createdAt: string;
}

interface CommentType {
  _id: string;
  user: Author;
  content: string;
  likes: string[];
  replies: ReplyType[];
  createdAt: string;
  updatedAt: string;
}

interface BlogPost {
  _id: string;
  title: string;
  description: string;
  content: string;
  image: string;
  imageAlt?: string;
  createdAt: string;
  updatedAt: string;
  author: Author;
  
  // Status & Visibility
  isActive: boolean;
  isFeatured: boolean;
  scheduledFor?: string;
  status?: 'draft' | 'published' | 'archived';
  
  // Categorization
  category: string;
  tags: string[];
  
  // Slug
  slug: string;
  
  // Engagement
  views: number;
  viewedBy?: string[];
  likes: string[];
  shares: string[];
  comments: CommentType[];
  
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
  
  // Revision History
  revisions?: Array<{
    updatedAt: string;
    updatedBy: string;
    changes: string;
  }>;
}

// Add this after your existing interfaces
interface CurrentUser {
  _id: string;
  name?: string;
  firstName?: string;
  lastName?: string;
  email: string;
  role?: string;
  avatar?: string;
}

interface APIError {
  message?: string;
  response?: {
    status: number;
  };
}

interface APIReply {
  _id?: string;
  user: {
    _id: string;
    name?: string;
    firstName?: string;
    lastName?: string;
  };
  content: string;
  likes: string[];
  createdAt: string;
}

// Update the state declaration
export default function BlogPostPage() {
  const { slug } = useParams<{ slug: string }>();
  const router = useRouter();
  const [post, setPost] = useState<BlogPost | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [relatedPosts, setRelatedPosts] = useState<BlogPost[]>([]);
  const [popularPosts, setPopularPosts] = useState<BlogPost[]>([]);
  const [comment, setComment] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isLiking, setIsLiking] = useState(false);
  const [isCopied, setIsCopied] = useState(false);
  const [currentUser, setCurrentUser] = useState<CurrentUser | null>(null);
  const [authorImage, setAuthorImage] = useState<string | null>(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const API_URL = process.env.NEXT_PUBLIC_API_URL
  // Check authentication status
  useEffect(() => {
    const checkAuth = async () => {
      try {
        const response = await AuthAPI.getMe();
        setCurrentUser(response.data);
        setIsLoggedIn(true);
      } catch (error: unknown) {
        console.error(error)
        setIsLoggedIn(false);
      }
    };
    
    checkAuth();
  }, []);

  // Scroll to top when page loads
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const fetchBlogPost = async () => {
      if (!slug) return;
      
      setIsLoading(true);
      setError(null);
      
      try {
        // Fetch the blog post by slug/id
        const response = await BlogAPI.getBlogBySlug(slug as string);
        const blogPost = response.data;
        
        if (blogPost.author) {
          // Backend may return firstName and lastName separately
          if (blogPost.author.firstName && !blogPost.author.name) {
            blogPost.author.name = `${blogPost.author.firstName} ${blogPost.author.lastName || ''}`.trim();
          }
          
          // Fix for avatar URL - ensure it has the full URL path
          if (blogPost.author.avatar) {
            // If avatar already starts with http, it's a full URL, otherwise prepend API_URL
            if (blogPost.author.avatar.startsWith('http')) {
              setAuthorImage(blogPost.author.avatar);
            } else {
              // Make sure API_URL is defined and doesn't have trailing slash
              const baseUrl = API_URL ? (API_URL.endsWith('/') ? API_URL.slice(0, -1) : API_URL) : '';
              setAuthorImage(`${baseUrl}${blogPost.author.avatar}`);
            }
          }
        }
        
        setPost(blogPost);
        
        // Get related posts
        try {
          const relatedResponse = await BlogAPI.getRelatedBlogs(blogPost._id);
          setRelatedPosts(relatedResponse.data);
        } catch (relatedError) {
          console.error("Error fetching related posts:", relatedError);
          // Just continue without related posts if they can't be loaded
        }
        
        // Get popular posts (using featured posts instead since getPopularBlogs doesn't exist)
        try {
          const popularResponse = await BlogAPI.getFeaturedBlogs(4); // Get 4 in case one is the current post
          setPopularPosts(popularResponse.data
            .filter((p: BlogPost) => p._id !== blogPost._id) // Filter out current post
            .slice(0, 3)); // Limit to 3 posts
        } catch (popularError) {
          console.error("Error fetching popular posts:", popularError);
          // Continue without popular posts if they can't be loaded
        }
        
      } catch (error: unknown) {
        const apiError = error as APIError;
        console.error("Error fetching blog post:", apiError);
        
        if (apiError.message?.includes('not found')) {
          setError("The blog post you're looking for doesn't exist or has been removed.");
        } else if (apiError.response?.status === 403) {
          setError("You don't have permission to view this blog post.");
        } else {
          setError("Failed to load blog post. Please try again later.");
        }
      } finally {
        setIsLoading(false);
      }
    };

    fetchBlogPost();
  }, [slug]);

  const handleCommentSubmit = async (e: FormEvent) => {
    e.preventDefault();
    
    if (!comment.trim()) return;
    if (!isLoggedIn) {
      toast({
        title: "Authentication required",
        description: "Please sign in to comment on posts",
        variant: "destructive",
      });
      router.push('/login?redirect=' + encodeURIComponent(window.location.pathname));
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      const response = await BlogAPI.addComment(post!._id, comment);
      // Update the post with new comment
      setPost(prev => {
        if (!prev) return prev;
        return {
          ...prev,
          comments: [response.data, ...prev.comments]
        };
      });
      setComment("");
      toast({
        title: "Comment added",
        description: "Your comment has been posted successfully",
      });
    } catch (error) {
      console.error('Error posting comment:', error);
      toast({
        title: "Failed to post comment",
        description: "Please try again later",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReplySubmit = async (commentId: string, content: string) => {
    if (!content.trim()) return;
    if (!isLoggedIn) {
      toast({
        title: "Authentication required",
        description: "Please sign in to reply to comments",
        variant: "destructive",
      });
      router.push('/login?redirect=' + encodeURIComponent(window.location.pathname));
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      const response = await BlogAPI.replyToComment(post!._id, commentId, content);
      
      // Update the post with new reply while preserving user information
      setPost(prev => {
        if (!prev) return prev;
        return {
          ...prev,
          comments: prev.comments.map(comment => {
            if (comment._id === commentId) {
              // If the server response has replies, use them, otherwise fallback to existing replies with new reply data
              const updatedComment = {
                ...comment,
                // Make sure to preserve the user object in the replies
                replies: Array.isArray(response.data.replies) 
                  ? response.data.replies.map((reply: APIReply) => {
                      if (reply.user && (!reply.user.name && !reply.user.firstName)) {
                        return {
                          ...reply,
                          user: currentUser
                        };
                      }
                      return reply;
                    })
                  : comment.replies
              };
              return updatedComment;
            }
            return comment;
          })
        };
      });
      
      toast({
        title: "Reply added",
        description: "Your reply has been posted successfully",
      });
    } catch (error) {
      console.error('Error posting reply:', error);
      toast({
        title: "Failed to post reply",
        description: "Please try again later",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleLikeBlog = async () => {
    if (!isLoggedIn) {
      toast({
        title: "Authentication required",
        description: "Please sign in to like posts",
        variant: "destructive",
      });
      router.push('/login?redirect=' + encodeURIComponent(window.location.pathname));
      return;
    }
    
    if (!post) return;
    setIsLiking(true);
    
    try {
      const response = await BlogAPI.likeBlog(post._id);
      setPost(prev => {
        if (!prev) return prev;
        return {
          ...prev,
          likes: response.data.likes
        };
      });
    } catch (error) {
      console.error('Error liking blog:', error);
      toast({
        title: "Failed to like post",
        description: "Please try again later",
        variant: "destructive",
      });
    } finally {
      setIsLiking(false);
    }
  };

  const handleLikeComment = async (commentId: string) => {
    if (!isLoggedIn) {
      toast({
        title: "Authentication required",
        description: "Please sign in to like comments",
        variant: "destructive",
      });
      router.push('/login?redirect=' + encodeURIComponent(window.location.pathname));
      return;
    }
    
    try {
      const response = await BlogAPI.likeComment(post!._id, commentId);
      
      // Update the comments with new like, but preserve all user data
      setPost(prev => {
        if (!prev) return prev;
        return {
          ...prev,
          comments: prev.comments.map(comment => {
            if (comment._id === commentId) {
              // Preserve user data while updating likes and other fields that might have changed
              const updatedComment = {
                ...comment,
                likes: response.data.likes || comment.likes
              };
              return updatedComment;
            }
            return comment;
          })
        };
      });
    } catch (error) {
      console.error('Error liking comment:', error);
      toast({
        title: "Failed to like comment",
        description: "Please try again later",
        variant: "destructive",
      });
    }
  };

  const handleShareBlog = async () => {
    if (!isLoggedIn) {
      toast({
        title: "Authentication required",
        description: "Please sign in to share posts",
        variant: "destructive",
      });
      router.push('/login?redirect=' + encodeURIComponent(window.location.pathname));
      return;
    }
    
    if (!post) return;
    
    try {
      const response = await BlogAPI.shareBlog(post._id);
      setPost(prev => {
        if (!prev) return prev;
        return {
          ...prev,
          shares: response.data.shares
        };
      });
      
      toast({
        title: "Post shared",
        description: "Thanks for sharing this post!",
      });
    } catch (error) {
      console.error('Error sharing blog:', error);
      toast({
        title: "Failed to share post",
        description: "Please try again later",
        variant: "destructive",
      });
    }
  };

  // Enhance the handleCopyLink function for better browser support
  const handleCopyLink = () => {
    const url = window.location.href;
    
    // Check if the Clipboard API is available
    if (navigator.clipboard && window.isSecureContext) {
      // Use the Clipboard API
      navigator.clipboard.writeText(url)
        .then(() => {
          setIsCopied(true);
          toast({
            title: "Link copied",
            description: "Post link copied to clipboard",
          });
          setTimeout(() => setIsCopied(false), 2000);
        })
        .catch(err => {
          console.error('Failed to copy link with Clipboard API: ', err);
          fallbackCopyMethod(url);
        });
    } else {
      // Fallback for browsers without clipboard support
      fallbackCopyMethod(url);
    }
  };

  // Add a fallback copy method using a temporary textarea element
  const fallbackCopyMethod = (text: string) => {
    try {
      // Create a temporary textarea
      const textArea = document.createElement('textarea');
      textArea.value = text;
      
      // Make the textarea out of viewport
      textArea.style.position = 'fixed';
      textArea.style.left = '-999999px';
      textArea.style.top = '-999999px';
      document.body.appendChild(textArea);
      
      // Focus and select the text
      textArea.focus();
      textArea.select();
      
      // Execute the copy command
      const successful = document.execCommand('copy');
      
      // Remove the temporary element
      document.body.removeChild(textArea);
      
      if (successful) {
        setIsCopied(true);
        toast({
          title: "Link copied",
          description: "Post link copied to clipboard",
        });
        setTimeout(() => setIsCopied(false), 2000);
      } else {
        toast({
          title: "Copy failed",
          description: "Please copy the URL manually",
          variant: "destructive",
        });
      }
    } catch (err) {
      console.error('Fallback copy method failed: ', err);
      toast({
        title: "Copy failed",
        description: "Please copy the URL manually",
        variant: "destructive",
      });
    }
  };

  // Enhance the shareToSocial function with more platforms
  const shareToSocial = (platform: string) => {
    if (!post) return;
    
    const url = encodeURIComponent(window.location.href);
    const title = encodeURIComponent(post.title || '');
    const description = encodeURIComponent(post.description || '');
    const image = encodeURIComponent(post.image || '');
    let shareUrl = '';

    switch (platform) {
      case 'facebook':
        shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${url}`;
        break;
      case 'twitter':
        shareUrl = `https://twitter.com/intent/tweet?url=${url}&text=${title}`;
        break;
      case 'linkedin':
        shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${url}`;
        break;
      case 'whatsapp':
        shareUrl = `https://wa.me/?text=${title}%20${url}`;
        break;
      case 'pinterest':
        shareUrl = `https://pinterest.com/pin/create/button/?url=${url}&media=${image}&description=${title}`;
        break;
      case 'reddit':
        shareUrl = `https://www.reddit.com/submit?url=${url}&title=${title}`;
        break;
      case 'email':
        shareUrl = `mailto:?subject=${title}&body=${description}%0A%0A${url}`;
        break;
      default:
        return;
    }

    // Open share dialog for web platforms, directly trigger for email
    if (platform === 'email') {
      window.location.href = shareUrl;
    } else {
      window.open(shareUrl, '_blank', 'width=600,height=400,noopener,noreferrer');
    }
    
    // Record the share action in the backend
    handleShareBlog();
  };

  // Handle tag click
  const handleTagClick = (tagName: string) => {
    router.push(`/blog?tag=${encodeURIComponent(tagName)}`);
  };
  const formatAuthorName = (author: Author) => {
    if (!author) return 'Anonymous';
    
    
    if (author.firstName || author.lastName) {
      return `${author.firstName || ''} ${author.lastName || ''}`.trim();
    }
    
    return 'Anonymous';
  };

  // Generate structured data for JSON-LD
  const generateStructuredData = () => {
    if (!post) return null;
    
    const authorName = formatAuthorName(post.author);
    
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      "headline": post.seoTitle || post.title,
      "description": post.seoDescription || post.description,
      "image": post.ogImage || post.image,
      "datePublished": post.createdAt,
      "dateModified": post.updatedAt,
      "author": {
        "@type": "Person",
        "name": authorName,
        "email": post.author?.email || ""
      },
      "publisher": {
        "@type": "Organization",
        "name": "RTN Global",
        "url": "https://rtnglobal.co/",
        "logo": {
          "@type": "ImageObject",
          "url": "https://rtnglobal.co/logo.png"
        },
        "founder": {
          "@type": "Person",
          "name": "Muhammad Tayyab"
        },
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "1209 MOUNTAIN ROAD PLNE, STE R",
          "addressLocality": "ALBUQUERQUE",
          "addressRegion": "NM",
          "postalCode": "87110",
          "addressCountry": "US"
        },
        "contactPoint": {
          "@type": "ContactPoint",
          "contactType": "customer service",
          "telephone": "+1 505 528 6780",
          "email": "info@rtnglobal.site"
        },
        "sameAs": [
          "https://www.instagram.com/rtnglobalofficial/",
          "https://www.threads.net/@rtnglobalofficial",
          "https://www.tiktok.com/@rtnglobalofficial",
          "https://web.facebook.com/people/RTN-Global/61573828870610/",
          "https://www.youtube.com/@RTNGlobal",
          "https://www.linkedin.com/in/rtnglobalofficial/"
        ]
      },
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": post.canonicalUrl || `https://rtnglobal.co/blog/${post.slug}`
      },
      "keywords": post.seoKeywords?.join(", ") || post.tags?.join(", "),
      "articleSection": post.category,
      "commentCount": post.comments.length,
      "wordCount": post.wordCount,
      "inLanguage": post.language || "en"
    };
    
    return JSON.stringify(structuredData);
  };

  if (isLoading) {
    return (
      <Layout>
        <div className="max-w-4xl mx-auto px-4 py-20 flex justify-center items-center">
          <Loader2 className="h-12 w-12 animate-spin text-primary/50" />
        </div>
      </Layout>
    );
  }

  if (error || !post) {
    notFound();
  }

  return (
    <Layout>
      {/* Structured Data */}
      <Script
        id="blog-post-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: generateStructuredData() || '' }}
      />
      
      <article className="pb-20">
        {/* Hero Section */}
        <header className="relative py-16 sm:py-20 lg:py-24 bg-muted/50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-screen-xl">
            <div className="max-w-4xl mx-auto">
              {/* Category and publish status */}
              <div className="flex flex-wrap gap-3 mb-4">
                <Link
                  href={`/blog?category=${encodeURIComponent(post.category || 'Uncategorized')}`}
                  className="inline-flex items-center px-3 py-1 bg-primary/10 text-primary rounded-full text-sm hover:bg-primary/20 transition-colors"
                >
                  {post.category || 'Uncategorized'}
                </Link>
                
                {post.status && post.status !== 'published' && (
                  <span className="inline-flex items-center px-3 py-1 bg-yellow-500/10 text-yellow-600 rounded-full text-sm">
                    {post.status.charAt(0).toUpperCase() + post.status.slice(1)}
                  </span>
                )}
                
                {post.isFeatured && (
                  <span className="inline-flex items-center px-3 py-1 bg-blue-500/10 text-blue-600 rounded-full text-sm">
                    Featured
                  </span>
                )}
              </div>
              
              {/* Title */}
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-6">
                {post.title}
              </h1>
              
              {/* Meta info */}
              <div className="flex flex-wrap items-center gap-4 mb-6 text-sm text-muted-foreground">
                {/* Author */}
                <div className="flex items-center">
                  {post.author?.avatar ? (
                    <div className="h-12 w-12 mr-3">
                      <OptimizedImage 
                        src={authorImage || post.author.avatar}
                        alt={formatAuthorName(post.author)}
                        fill
                        className="h-full w-full object-cover"
                      />
                    </div>
                  ) : (
                    <Avatar className="h-10 w-10 mr-3 bg-primary/10 text-primary">
                      {post.author?.firstName?.charAt(0) || post.author?.lastName?.charAt(0) || post.author?.name?.charAt(0) || 'A'}
                    </Avatar>
                  )}
                  <div>
                    <div className="font-medium text-foreground">{formatAuthorName(post.author)}</div>
                    {post.author?.role && <div className="text-xs">{post.author.role}</div>}
                  </div>
                </div>
                
                <span className="hidden sm:block">•</span>
                
                {/* Publish Date */}
                <div className="flex items-center">
                  <Calendar className="h-4 w-4 mr-1.5" />
                  <span>{formatDate(new Date(post.createdAt))}</span>
                </div>
                
                <span className="hidden sm:block">•</span>
                
                {/* Reading time */}
                {post.estimatedReadTime && (
                  <div className="flex items-center">
                    <Zap className="h-4 w-4 mr-1.5" />
                    <span>{post.estimatedReadTime} min read</span>
                  </div>
                )}
                
                {/* Word count */}
                {post.wordCount && (
                  <div className="flex items-center">
                    <TrendingUp className="h-4 w-4 mr-1.5" />
                    <span>{post.wordCount.toLocaleString()} words</span>
                  </div>
                )}
                
                <span className="hidden sm:block">•</span>
                
                {/* Views */}
                <div className="flex items-center">
                  <BarChart className="h-4 w-4 mr-1.5" />
                  <span>{post.views.toLocaleString()} views</span>
                </div>
              </div>
              
              {/* Tags */}
              {post.tags && post.tags.length > 0 && (
                <div className="flex flex-wrap gap-2 mb-8">
                  {post.tags.map((tag, index) => (
                    <button
                      key={index}
                      onClick={() => handleTagClick(tag)}
                      className="inline-flex items-center gap-1.5 px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm hover:bg-secondary/80 transition-colors"
                    >
                      <Tag className="h-3 w-3" />
                      {tag}
                    </button>
                  ))}
                </div>
              )}
              
              {/* Description */}
              <p className="text-lg text-muted-foreground max-w-3xl">
                {post.description}
              </p>
            </div>
          </div>
        </header>
        
        {/* Featured image */}
        {post.image && (
          <div className="max-w-5xl mx-auto px-4 -mt-10 sm:-mt-16 mb-12 relative z-10">
            <div className="aspect-video overflow-hidden rounded-xl shadow-xl">
              <OptimizedImage
                src={post.image}
                alt={post.imageAlt || post.title}
                width={1280}
                height={720}
                className="w-full h-full object-cover"
              />
            </div>
            
            {post.imageAlt && (
              <p className="text-sm text-muted-foreground mt-2 text-center italic">
                {post.imageAlt}
              </p>
            )}
          </div>
        )}
        
        {/* Main content */}
        <div className="container mx-auto px-4 sm:px-6 max-w-4xl">
          {/* Content area */}
          <div className="prose prose-lg dark:prose-invert mx-auto">
            <div dangerouslySetInnerHTML={{ __html: post.content }} />
          </div>
          
          {/* Tags and social sharing */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mt-12 pt-6 border-t">
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag, index) => (
                <button
                  key={index}
                  onClick={() => handleTagClick(tag)}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-secondary text-secondary-foreground rounded-full text-sm hover:bg-secondary/80 transition-colors"
                >
                  <Tag className="h-3 w-3" />
                  {tag}
                </button>
              ))}
            </div>
            
            <div className="flex items-center gap-3">
              <Button
                variant="outline"
                size="sm"
                className={`${isLiking ? "opacity-50 cursor-not-allowed" : ""} ${
                  currentUser && post.likes.includes(currentUser._id) ? "bg-red-50 border-red-200 text-red-500" : ""
                }`}
                onClick={handleLikeBlog}
                disabled={isLiking}
              >
                <Heart className={`h-4 w-4 mr-1.5 ${
                  currentUser && post.likes.includes(currentUser._id) 
                    ? "fill-red-500 text-red-500" 
                    : ""
                }`} />
                {post.likes.length}
              </Button>
              
              {/* Updated Social Share Buttons with real branded icons */}
              <div className="flex flex-wrap items-center gap-1.5 relative">
                <p className="sr-only">Share this post</p>
                
                {/* Facebook */}
                <Button 
                  variant="ghost" 
                  size="icon" 
                  title="Share on Facebook"
                  className="rounded-full w-8 h-8 p-0 bg-[#1877F2] text-white hover:bg-[#1877F2]/80 transition-colors" 
                  onClick={() => shareToSocial('facebook')}
                  aria-label="Share on Facebook"
                >
                  <Facebook className="h-4 w-4" />
                </Button>
                
                {/* Twitter/X */}
                <Button 
                  variant="ghost" 
                  size="icon" 
                  title="Share on Twitter/X"
                  className="rounded-full w-8 h-8 p-0 bg-black text-white hover:bg-black/80 transition-colors" 
                  onClick={() => shareToSocial('twitter')}
                  aria-label="Share on Twitter/X"
                >
                  <Twitter className="h-4 w-4" />
                </Button>
                
                {/* LinkedIn */}
                <Button 
                  variant="ghost" 
                  size="icon" 
                  title="Share on LinkedIn"
                  className="rounded-full w-8 h-8 p-0 bg-[#0A66C2] text-white hover:bg-[#0A66C2]/80 transition-colors" 
                  onClick={() => shareToSocial('linkedin')}
                  aria-label="Share on LinkedIn"
                >
                  <Linkedin className="h-4 w-4" />
                </Button>
                
                {/* WhatsApp */}
                <Button 
                  variant="ghost" 
                  size="icon" 
                  title="Share on WhatsApp"
                  className="rounded-full w-8 h-8 p-0 bg-[#25D366] text-white hover:bg-[#25D366]/80 transition-colors" 
                  onClick={() => shareToSocial('whatsapp')}
                  aria-label="Share on WhatsApp"
                >
                  <FaWhatsapp className="h-4 w-4" />
                </Button>
                
                {/* Pinterest */}
                <Button 
                  variant="ghost" 
                  size="icon" 
                  title="Share on Pinterest"
                  className="rounded-full w-8 h-8 p-0 bg-[#E60023] text-white hover:bg-[#E60023]/80 transition-colors" 
                  onClick={() => shareToSocial('pinterest')}
                  aria-label="Share on Pinterest"
                >
                  <FaPinterest className="h-4 w-4" />
                </Button>
                
                {/* Reddit */}
                <Button 
                  variant="ghost" 
                  size="icon" 
                  title="Share on Reddit"
                  className="rounded-full w-8 h-8 p-0 bg-[#FF4500] text-white hover:bg-[#FF4500]/80 transition-colors" 
                  onClick={() => shareToSocial('reddit')}
                  aria-label="Share on Reddit"
                >
                  <FaReddit className="h-4 w-4" />
                </Button>
                
                {/* Email */}
                <Button 
                  variant="ghost" 
                  size="icon" 
                  title="Share via Email"
                  className="rounded-full w-8 h-8 p-0 bg-[#757575] text-white hover:bg-[#757575]/80 transition-colors" 
                  onClick={() => shareToSocial('email')}
                  aria-label="Share via Email"
                >
                  <FaEnvelope className="h-4 w-4" />
                </Button>
                
                {/* Copy Link */}
                <Button 
                  variant="ghost" 
                  size="icon" 
                  title={isCopied ? "Link copied!" : "Copy link"}
                  className={`rounded-full w-8 h-8 p-0 hover:bg-gray-500/80 transition-colors ${
                    isCopied ? "bg-green-500 text-white" : "bg-gray-500 text-white"
                  }`} 
                  onClick={handleCopyLink}
                  aria-label="Copy link"
                >
                  {isCopied ? 
                    <CheckCircle2 className="h-4 w-4" /> : 
                    <Copy className="h-4 w-4" />
                  }
                </Button>
              </div>
            </div>
          </div>
          
          {/* Author section */}
          <div className="mt-12 p-6 bg-card rounded-xl border">
            <div className="flex flex-col sm:flex-row gap-4">
              {post.author.avatar ? (
                <div className="relative w-16 h-16 rounded-full overflow-hidden flex-shrink-0">
                  <OptimizedImage
                    src={authorImage || post.author.avatar}
                    alt={post.author.name || `${post.author.firstName || ''} ${post.author.lastName || ''}`.trim() || 'Author'}
                    className="object-cover h-full w-full"
                    fill
                  />
                </div>
              ) : (
                <Avatar className="h-16 w-16 bg-primary/10 text-primary">
                  {post.author?.firstName?.charAt(0) || post.author?.lastName?.charAt(0) || post.author?.name?.charAt(0) || 'A'}
                </Avatar>
              )}
              
              <div>
                <h3 className="text-xl font-bold">{formatAuthorName(post.author)}</h3>
                {post.author.role && (
                  <p className="text-muted-foreground mb-3">{post.author.role}</p>
                )}
                <p className="text-sm">
                  Expert in web development and digital marketing with over 10 years of experience in creating effective online solutions for businesses of all sizes.
                </p>
              </div>
            </div>
          </div>
          
          {/* Comments Section with improved UI */}
          <div id="comments-section" className="mt-16 mb-12 scroll-mt-20">
            <div className="flex items-center mb-6">
              <MessageSquare className="h-6 w-6 text-primary mr-3" />
              <h2 className="text-2xl font-bold">Comments ({post.comments.length})</h2>
            </div>
            
            {/* Comment Form with improved styling */}
            <form onSubmit={handleCommentSubmit} className="mb-10 bg-muted/5 p-6 rounded-lg border border-border/50">
              <h3 className="text-lg font-medium mb-4">Leave a comment</h3>
              <Textarea
                placeholder={isLoggedIn ? "Share your thoughts about this post..." : "Login to comment..."}
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                disabled={!isLoggedIn || isSubmitting}
                className="mb-4 h-24 focus:border-primary"
              />
              <div className="flex justify-end">
                <Button 
                  type="submit" 
                  disabled={!isLoggedIn || isSubmitting || !comment.trim()}
                  className="transition-all duration-300 hover:scale-105"
                >
                  {isSubmitting ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <Send className="mr-2 h-4 w-4" />}
                  {isLoggedIn ? 'Post Comment' : 'Login to Comment'}
                </Button>
              </div>
              {!isLoggedIn && (
                <p className="text-sm text-muted-foreground mt-2">
                  Please <Link href="/login" className="text-primary hover:underline">sign in</Link> to join the conversation.
                </p>
              )}
            </form>
            
            {/* Comments List with improved styling */}
            {post.comments.length > 0 ? (
              <div className="space-y-6">
                {post.comments.map((comment) => (
                  <Comment
                    key={comment._id}
                    comment={comment}
                    currentUser={currentUser}
                    isLoggedIn={isLoggedIn}
                    isSubmitting={isSubmitting}
                    onLikeComment={handleLikeComment}
                    onSubmitReply={handleReplySubmit}
                  />
                ))}
              </div>
            ) : (
              <div className="text-center py-10 bg-muted/5 rounded-lg border border-dashed border-border">
                <MessageSquare className="h-12 w-12 text-muted-foreground/40 mx-auto mb-4" />
                <p className="text-muted-foreground font-medium">No comments yet.</p>
                <p className="text-muted-foreground text-sm mt-1">Be the first to share your thoughts!</p>
              </div>
            )}
          </div>
        </div>
      </article>
        
      {/* Related posts section with improved design */}
      <section className="py-16 border-t border-border bg-muted/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center mb-8">
            <TrendingUp className="h-6 w-6 text-primary mr-3" />
            <h2 className="text-2xl font-bold">Related Articles</h2>
          </div>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Continue exploring topics related to {post.category || 'this subject'} to expand your knowledge and discover new insights.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {relatedPosts.length > 0 ? (
              relatedPosts.map((relatedPost) => (
                <Link key={relatedPost._id} href={`/blog/${relatedPost.slug}`} className="group">
                  <div className="bg-card rounded-xl border border-border overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 h-full">
                    <div className="relative aspect-video overflow-hidden">
                      <OptimizedImage
                        src={relatedPost.image}
                        alt={relatedPost.title}
                        fill
                        className="object-cover h-full transition-transform group-hover:scale-105 duration-500"
                      />
                      {relatedPost.isFeatured && (
                        <div className="absolute top-2 right-2 bg-primary text-primary-foreground text-xs font-medium px-2 py-1 rounded-full">
                          Featured
                        </div>
                      )}
                    </div>
                    <div className="p-6">
                      {relatedPost.category && (
                        <span className="inline-block text-xs font-medium bg-primary/10 text-primary px-2 py-1 rounded-full mb-3">
                          {relatedPost.category}
                        </span>
                      )}
                      <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors line-clamp-2">
                        {relatedPost.title}
                      </h3>
                      <div className="flex items-center justify-between text-sm text-muted-foreground mb-3">
                        <div className="flex items-center">
                          <Calendar className="mr-2 h-4 w-4" />
                          <time dateTime={relatedPost.createdAt}>
                            {formatDate(relatedPost.createdAt)}
                          </time>
                        </div>
                        <div className="flex items-center">
                          <Heart className="mr-1 h-4 w-4" />
                          <span>{relatedPost.likes.length}</span>
                        </div>
                      </div>
                      <p className="text-muted-foreground line-clamp-2 text-sm">
                        {relatedPost.description}
                      </p>
                    </div>
                  </div>
                </Link>
              ))
            ) : (
              <div className="col-span-3 text-center py-12 bg-muted/20 rounded-xl border border-dashed border-border">
                <p className="text-muted-foreground">No related articles found.</p>
              </div>
            )}
          </div>
        </div>
      </section>
      {/* Popular Posts Section with improved design */}
      {popularPosts.length > 0 && (
        <section className="py-16 bg-background border-t border-border">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-center mb-8">
              <TrendingUp className="h-6 w-6 text-primary mr-3" />
              <h2 className="text-2xl font-bold">Popular on Our Blog</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mx-auto">
              {popularPosts.map((popularPost) => (
                <Link key={popularPost._id} href={`/blog/${popularPost.slug}`} className="group">
                  <div className="bg-card rounded-xl border border-border overflow-hidden hover:shadow-md transition-all duration-300 h-full">
                    <div className="relative aspect-video overflow-hidden">
                      <OptimizedImage
                        src={popularPost.image}
                        alt={popularPost.title}
                        fill
                        className="object-cover h-full transition-transform group-hover:scale-105 duration-500"
                      />
                      <div className="absolute top-2 right-2 bg-primary text-primary-foreground text-xs font-medium px-2 py-1 rounded-full">
                        Popular
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors line-clamp-2">
                        {popularPost.title}
                      </h3>
                      <p className="text-muted-foreground line-clamp-2 text-sm mb-4">
                        {popularPost.description}
                      </p>
                      <div className="flex items-center justify-between text-sm">
                        <div className="flex items-center text-muted-foreground">
                          <Calendar className="mr-1 h-3 w-3" />
                          <time dateTime={popularPost.createdAt} className="text-xs">
                            {formatDate(popularPost.createdAt)}
                          </time>
                        </div>
                        <div className="flex items-center text-muted-foreground">
                          <Heart className="mr-1 h-3 w-3" />
                          <span className="text-xs">{popularPost.likes.length}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
      {/* Related Topics Section - Improved visual design */}
      <section className="py-16 bg-muted/10 border-t border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-center mb-4">Explore Related Content</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Discover more resources to help you succeed with your {post.category || 'digital'} projects
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mx-auto">
            {/* Services */}
            <Link href={`/services?category=${encodeURIComponent(post?.category || '')}`} className="group">
              <div className="bg-card rounded-xl shadow-sm border border-border overflow-hidden hover:shadow-md transition-all duration-300 h-full">
                <div className="p-8">
                  <div className="mb-4 w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Briefcase className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">Related Services</h3>
                  <p className="text-muted-foreground mb-4">
                    Discover our professional services related to {post?.category || 'this topic'}.
                  </p>
                  <div className="inline-flex items-center text-primary group-hover:underline font-medium">
                    Explore Services <ArrowLeft className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1 rotate-180" />
                  </div>
                </div>
              </div>
            </Link>
            
            {/* Industry Solutions */}
            <Link href="/industries" className="group">
              <div className="bg-card rounded-xl shadow-sm border border-border overflow-hidden hover:shadow-md transition-all duration-300 h-full">
                <div className="p-8">
                  <div className="mb-4 w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <BarChart className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">Industry Solutions</h3>
                  <p className="text-muted-foreground mb-4">
                    Explore how our expertise applies to your specific industry needs.
                  </p>
                  <div className="inline-flex items-center text-primary group-hover:underline font-medium">
                    View Industries <ArrowLeft className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1 rotate-180" />
                  </div>
                </div>
              </div>
            </Link>
            
            {/* Knowledge Base */}
            <Link href={`/knowledge-base?search=${encodeURIComponent(post?.category || '')}`} className="group">
              <div className="bg-card rounded-xl shadow-sm border border-border overflow-hidden hover:shadow-md transition-all duration-300 h-full">
                <div className="p-8">
                  <div className="mb-4 w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Award className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">Knowledge Base</h3>
                  <p className="text-muted-foreground mb-4">
                    Find detailed guides and tutorials related to this topic.
                  </p>
                  <div className="inline-flex items-center text-primary group-hover:underline font-medium">
                    Browse Resources <ArrowLeft className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1 rotate-180" />
                  </div>
                </div>
              </div>
            </Link>
          </div>
          
          {/* Related Tags with improved design */}
          {post?.tags && post.tags.length > 0 && (
            <div className="mt-16 text-center">
              <h3 className="text-xl font-bold mb-6">Related Topics</h3>
              <div className="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto">
                {post.tags.map((tag) => (
                  <Link 
                    key={tag}
                    href={`/blog?tag=${encodeURIComponent(tag)}`}
                    className="px-4 py-2 bg-secondary hover:bg-primary/10 rounded-full text-sm font-medium transition-colors"
                  >
                    {tag}
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
      
      {/* CTA Section with improved design */}
      <section className="py-16 bg-primary/5 border-t border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto text-center bg-card p-10 rounded-2xl border border-border shadow-sm">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to Work With Us?</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-5xl mx-auto">
              Let us help you achieve your business goals with our expert {post?.category || 'digital'} solutions.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button asChild size="lg" className="shadow-sm hover:shadow-md transition-all duration-300">
                <Link href="/contact/free-consultation">
                  Request a Free Consultation
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href={`/services/${post.category?.toLowerCase().replace(/\s+/g, '-') || ''}`}>
                  Explore {post.category || 'Our'} Services
                </Link>
              </Button>
            </div>
            <p className="text-sm text-muted-foreground mt-6">
              No commitment required. Get expert advice for your project.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  )
} 