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
import { ArrowLeft, Calendar, Tag, Loader2, Heart, MessageSquare, Share2, Send } from "lucide-react"
import { BlogAPI } from "@/lib/api/api-provider"
import { AuthAPI } from "@/lib/api/api-provider"
import { useParams, useRouter, notFound } from "next/navigation"
import { Comment } from "@/components/blog/comment"
import { ShareButtons } from "@/components/blog/share-buttons"

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
      <article className="max-w-4xl mx-auto px-4 py-12 sm:px-6 sm:py-16 lg:py-20">
        {/* Back to blog */}
        <div className="mb-8">
          <Link href="/blog" className="inline-flex items-center text-sm text-muted-foreground hover:text-primary transition-colors">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to blog
          </Link>
        </div>
        
        {/* Header */}
        <header className="mb-12">
          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
            <button
              onClick={() => handleCategoryClick(post.category || 'Uncategorized')}
              className="bg-primary/10 text-primary px-2 py-1 rounded text-xs font-medium hover:bg-primary/20 transition-colors"
            >
              {post.category || 'Uncategorized'}
            </button>
            <span>•</span>
            <span className="flex items-center">
              <Calendar className="h-4 w-4 mr-1" />
              {formatDate(new Date(post.createdAt))}
            </span>
            {post.isFeatured && (
              <>
                <span>•</span>
                <span className="bg-primary text-primary-foreground px-2 py-0.5 rounded-full text-xs">
                  Featured
                </span>
              </>
            )}
          </div>
          
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-6">{post.title}</h1>
          
          {/* Featured Image */}
          {post.image && (
            <div className="relative w-full h-80 sm:h-96 mb-8 rounded-lg overflow-hidden">
              <OptimizedImage
                src={post.image}
                alt={post.title}
                fill
                className="w-full h-full object-cover"
                priority
              />
            </div>
          )}
          
          {/* Author */}
          <div className="flex items-center gap-4">
            <Avatar 
              size="lg"
              src={post.author?.avatar}
              alt={formatAuthorName(post.author)}
              fallback={formatAuthorName(post.author).split(' ').map(n => n[0]).join('')}
            />
            <div>
              <div className="font-medium">{formatAuthorName(post.author)}</div>
              <div className="text-sm text-muted-foreground">{post.author?.role || 'Contributor'}</div>
            </div>
          </div>
        </header>
        
        {/* Content */}
        <div 
          className="prose prose-lg dark:prose-invert max-w-none mb-12"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
        
        {/* Action Bar */}
        <div className="flex flex-wrap items-center gap-6 mb-8 py-4 border-y border-border">
          {/* Like Button */}
          <button 
            onClick={handleLikeBlog}
            disabled={isLiking}
            className={`flex items-center gap-2 text-sm ${
              hasLikedPost 
                ? 'text-primary' 
                : 'text-muted-foreground hover:text-primary'
            } transition-colors`}
          >
            <Heart className={`h-5 w-5 ${hasLikedPost ? 'fill-primary' : ''}`} />
            <span>{post.likes.length} {post.likes.length === 1 ? 'Like' : 'Likes'}</span>
          </button>
          
          {/* Comment Button - Scroll to comments */}
          <button
            onClick={() => document.getElementById('comments-section')?.scrollIntoView({ behavior: 'smooth' })}
            className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
          >
            <MessageSquare className="h-5 w-5" />
            <span>{post.comments.length} {post.comments.length === 1 ? 'Comment' : 'Comments'}</span>
          </button>
          
          {/* Share Button */}
          <button
            onClick={handleShareBlog}
            disabled={isSharing}
            className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
          >
            <Share2 className="h-5 w-5" />
            <span>{post.shares.length} {post.shares.length === 1 ? 'Share' : 'Shares'}</span>
          </button>
        </div>
        
        {/* Tags */}
        {post.tags && post.tags.length > 0 && (
          <div className="flex flex-wrap items-center gap-2 mb-8">
            <Tag className="h-5 w-5 text-muted-foreground" />
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
        
        {/* Comments Section */}
        <div id="comments-section" className="mt-12 mb-12">
          <h2 className="text-2xl font-bold mb-6">Comments ({post.comments.length})</h2>
          
          {/* Comment Form */}
          <form onSubmit={handleCommentSubmit} className="mb-8">
            <Textarea
              placeholder={isLoggedIn ? "Write a comment..." : "Login to comment..."}
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              disabled={!isLoggedIn || isSubmitting}
              className="mb-4 h-24"
            />
            <div className="flex justify-end">
              <Button 
                type="submit" 
                disabled={!isLoggedIn || isSubmitting || !comment.trim()}
              >
                {isSubmitting ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <Send className="mr-2 h-4 w-4" />}
                Post Comment
              </Button>
            </div>
          </form>
          
          {/* Comments List */}
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
            <div className="text-center py-8">
              <p className="text-muted-foreground">No comments yet. Be the first to comment!</p>
            </div>
          )}
        </div>
        
        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <div className="border-t border-border pt-8 mb-8">
            <h2 className="text-2xl font-bold mb-6">Related Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedPosts.map(related => (
                <Link 
                  key={related._id} 
                  href={`/blog/${related.slug || related._id}`}
                  className="group"
                  scroll={true}
                >
                  <div className="bg-card border border-border rounded-lg overflow-hidden h-full flex flex-col hover:border-primary/50 transition-colors">
                    <div className="relative h-40">
                      {related.image ? (
                        <OptimizedImage 
                          src={related.image} 
                          alt={related.title}
                          fill
                         className="w-full h-full object-cover"
                         priority
                        />
                      ) : (
                        <div className="bg-muted h-40 flex items-center justify-center">
                          <span className="text-3xl text-muted-foreground opacity-30">{related.category?.[0] || 'B'}</span>
                        </div>
                      )}
                      {related.isFeatured && (
                        <div className="absolute top-2 right-2 bg-primary text-primary-foreground text-xs py-0.5 px-2 rounded-full">
                          Featured
                        </div>
                      )}
                    </div>
                    <div className="p-4 flex-1 flex flex-col">
                      <h3 className="text-base font-medium mb-2 line-clamp-2 group-hover:text-primary transition-colors">{related.title}</h3>
                      <p className="text-sm text-muted-foreground line-clamp-2 mb-2">{related.description}</p>
                      <div className="mt-auto flex items-center justify-between">
                        <span className="text-xs text-muted-foreground">
                        {formatDate(new Date(related.createdAt))}
                        </span>
                        {related.category && (
                          <span className="text-xs bg-secondary/50 px-2 py-0.5 rounded-full">
                            {related.category}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
        
        {/* Share */}
        <div className="border-t border-border pt-8">
          <ShareButtons title={post.title} />
        </div>
      </article>
    </Layout>
  )
} 