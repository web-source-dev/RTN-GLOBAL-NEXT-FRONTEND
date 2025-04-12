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
  Share2, 
  Send, 
  Bookmark,
  Briefcase,
  BarChart,
  Award,
  TrendingUp,
  Zap
} from "lucide-react"
import { BlogAPI } from "@/lib/api/api-provider"
import { AuthAPI } from "@/lib/api/api-provider"
import { useParams, useRouter, notFound } from "next/navigation"
import { Comment } from "@/components/blog/comment"

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
  createdAt: string;
  updatedAt: string;
  author: Author;
  category: string;
  tags: string[];
  isActive: boolean;
  isFeatured: boolean;
  views: number;
  slug: string;
  likes: string[];
  comments: CommentType[];
  shares: string[];
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
  const [isSharing, setIsSharing] = useState(false);
  const [currentUser, setCurrentUser] = useState<CurrentUser | null>(null);

  const [isLoggedIn, setIsLoggedIn] = useState(false);

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
        
        // Transform the author data to match our interface if needed
        if (blogPost.author) {
          // Backend may return firstName and lastName separately
          if (blogPost.author.firstName && !blogPost.author.name) {
            blogPost.author.name = `${blogPost.author.firstName} ${blogPost.author.lastName || ''}`.trim();
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
    setIsSharing(true);
    
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
    } finally {
      setIsSharing(false);
    }
  };

  // Handle tag click
  const handleTagClick = (tagName: string) => {
    router.push(`/blog?tag=${encodeURIComponent(tagName)}`);
  };
  
  // Handle category click
  const handleCategoryClick = (category: string) => {
    router.push(`/blog?category=${encodeURIComponent(category)}`);
  };

  // Determine if current user has liked the post
  const hasLikedPost = post && currentUser ? post.likes.includes(currentUser._id) : false;
  
  // Format author name
  const formatAuthorName = (author: Author) => {
    if (!author) return 'Anonymous';
    
    if (author.name && author.name.trim()) return author.name;
    
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
      "headline": post.title,
      "description": post.description,
      "image": post.image,
      "datePublished": post.createdAt,
      "dateModified": post.updatedAt,
      "author": {
        "@type": "Person",
        "name": authorName
      },
      "publisher": {
        "@type": "Organization",
        "name": "RTN Global",
        "logo": {
          "@type": "ImageObject",
          "url": "https://rtnglobal.com/images/logo.png"
        }
      },
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": `https://rtnglobal.com/blog/${post.slug}`
      },
      "keywords": post.tags?.join(", "),
      "articleSection": post.category,
      "commentCount": post.comments.length
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
      {/* Add JSON-LD structured data */}
      <Script 
        id="blog-post-structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: generateStructuredData() || '' }}
      />
      
      <div className="bg-gradient-to-b from-muted/50 to-background pt-6">
        <div className="container mx-auto">
          {/* Back to blog */}
          <div className="mb-8 px-4 sm:px-6">
            <Link href="/blog" className="inline-flex items-center text-sm text-muted-foreground hover:text-primary transition-colors group">
              <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
              Back to blog
            </Link>
          </div>
        </div>
      </div>
      
      <article className="max-w-4xl mx-auto px-4 pb-12 sm:px-6 sm:pb-16 lg:pb-20">
        {/* Header with improved visual hierarchy */}
        <header className="mb-12">
          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
            <button
              onClick={() => handleCategoryClick(post.category || 'Uncategorized')}
              className="bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-medium hover:bg-primary/20 transition-colors"
            >
              {post.category || 'Uncategorized'}
            </button>
            <span className="text-muted-foreground/50">•</span>
            <span className="flex items-center">
              <Calendar className="h-4 w-4 mr-1" />
              {formatDate(new Date(post.createdAt))}
            </span>
            {post.isFeatured && (
              <>
                <span className="text-muted-foreground/50">•</span>
                <span className="bg-primary text-primary-foreground px-2 py-0.5 rounded-full text-xs font-semibold">
                  Featured
                </span>
              </>
            )}
          </div>
          
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-8 leading-tight">{post.title}</h1>
          
          {/* Author with improved layout */}
          <div className="flex items-center gap-4 mb-10">
            <Avatar 
              size="lg"
              src={post.author?.avatar}
              alt={formatAuthorName(post.author)}
              fallback={formatAuthorName(post.author).split(' ').map(n => n[0]).join('')}
              className="border-2 border-background shadow-sm"
            />
            <div>
              <div className="font-medium">{formatAuthorName(post.author)}</div>
              <div className="text-sm text-muted-foreground">{post.author?.role || 'Contributor'}</div>
            </div>
          </div>
          
          {/* Featured Image with improved presentation */}
          {post.image && (
            <div className="relative w-full aspect-[16/9] mb-12 rounded-xl overflow-hidden shadow-lg">
              <OptimizedImage
                src={post.image}
                alt={post.title}
                fill
                className="w-full h-full object-cover"
                priority
              />
            </div>
          )}
        </header>
        
        {/* Content with improved in-content linking and readability */}
        <div className="relative">
          <div 
            className="prose prose-lg dark:prose-invert max-w-none mb-12 prose-headings:scroll-mt-20 prose-headings:font-semibold prose-a:text-primary prose-a:no-underline hover:prose-a:underline prose-img:rounded-lg"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
          
          {/* Action Bar with improved visual design */}
          <div className="flex flex-wrap items-center justify-between gap-6 mb-8 py-4 border-y border-border bg-muted/10 px-4 rounded-lg">
            <div className="flex flex-wrap items-center gap-6">
              {/* Like Button */}
              <button 
                onClick={handleLikeBlog}
                disabled={isLiking}
                className={`flex items-center gap-2 text-sm ${
                  hasLikedPost 
                    ? 'text-primary' 
                    : 'text-muted-foreground hover:text-primary'
                } transition-colors`}
                aria-label={`Like this post (${post.likes.length} likes)`}
              >
                <Heart className={`h-5 w-5 ${hasLikedPost ? 'fill-primary' : ''} transition-all duration-300 hover:scale-110`} />
                <span>{post.likes.length} {post.likes.length === 1 ? 'Like' : 'Likes'}</span>
              </button>
              
              {/* Comment Button - Scroll to comments */}
              <button
                onClick={() => document.getElementById('comments-section')?.scrollIntoView({ behavior: 'smooth' })}
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                aria-label="Go to comments section"
              >
                <MessageSquare className="h-5 w-5 transition-all duration-300 hover:scale-110" />
                <span>{post.comments.length} {post.comments.length === 1 ? 'Comment' : 'Comments'}</span>
              </button>
              
              {/* Share Button */}
              <button
                onClick={handleShareBlog}
                disabled={isSharing}
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                aria-label="Share this post"
              >
                <Share2 className="h-5 w-5 transition-all duration-300 hover:scale-110" />
                <span>{post.shares.length} {post.shares.length === 1 ? 'Share' : 'Shares'}</span>
              </button>
            </div>
            
            {/* Social share buttons - Add ShareButtons component */}
            {/* Temporarily remove ShareButtons due to type issues */}
          </div>
          
          {/* Tags with improved design */}
          {post.tags && post.tags.length > 0 && (
            <div className="flex flex-wrap items-center gap-2 mb-10 bg-muted/5 p-4 rounded-lg">
              <Tag className="h-5 w-5 text-muted-foreground mr-1" />
              <span className="text-sm font-medium mr-2">Tags:</span>
              {post.tags.map(tag => (
                <button 
                  key={tag} 
                  onClick={() => handleTagClick(tag)}
                  className="text-sm bg-secondary text-secondary-foreground px-3 py-1 rounded-full hover:bg-secondary/80 transition-colors"
                >
                  {tag}
                </button>
              ))}
            </div>
          )}
          
          {/* Quick Resource Links - Enhanced with better visuals */}
          <div className="bg-muted/10 border border-border rounded-lg p-6 mb-12 shadow-sm">
            <h4 className="text-lg font-medium mb-4 flex items-center">
              <Bookmark className="h-5 w-5 mr-2 text-primary" />
              Recommended Resources
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Link 
                href={`/services/${post.category?.toLowerCase().replace(/\s+/g, '-') || 'web-development'}`}
                className="flex items-start p-4 rounded-md hover:bg-muted transition-colors group border border-border/50"
              >
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mr-3 flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                  <Briefcase className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h5 className="font-medium mb-1 group-hover:text-primary transition-colors">{post.category || 'Web Development'} Services</h5>
                  <p className="text-sm text-muted-foreground">Expert solutions for your business needs</p>
                </div>
              </Link>
              
              <Link 
                href="/case-studies"
                className="flex items-start p-4 rounded-md hover:bg-muted transition-colors group border border-border/50"
              >
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mr-3 flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                  <BarChart className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h5 className="font-medium mb-1 group-hover:text-primary transition-colors">Case Studies</h5>
                  <p className="text-sm text-muted-foreground">See our work in action</p>
                </div>
              </Link>
              
              <Link 
                href="/knowledge-base"
                className="flex items-start p-4 rounded-md hover:bg-muted transition-colors group border border-border/50"
              >
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mr-3 flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                  <Award className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h5 className="font-medium mb-1 group-hover:text-primary transition-colors">Knowledge Base</h5>
                  <p className="text-sm text-muted-foreground">Technical guides & tutorials</p>
                </div>
              </Link>
              
              <Link 
                href="/contact/free-consultation"
                className="flex items-start p-4 rounded-md hover:bg-muted transition-colors group border border-border/50"
              >
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mr-3 flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                  <Zap className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h5 className="font-medium mb-1 group-hover:text-primary transition-colors">Free Consultation</h5>
                  <p className="text-sm text-muted-foreground">Get expert advice on your project</p>
                </div>
              </Link>
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
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
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
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
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
            <div className="max-w-3xl mx-auto text-center bg-card p-10 rounded-2xl border border-border shadow-sm">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to Work With Us?</h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
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