import React, { useState } from 'react';
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { OptimizedImage } from "@/components/ui/optimized-image";
import { Avatar } from "@/components/ui/avatar";
import { formatTimeAgo } from "@/lib/utils";
import { Heart, Reply, Send, Loader2 } from "lucide-react";

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

interface CommentProps {
  comment: {
    _id: string;
    user: Author;
    content: string;
    likes: string[];
    replies: ReplyType[];
    createdAt: string;
    updatedAt: string;
  };
  currentUser: any | null;
  isLoggedIn: boolean;
  isSubmitting: boolean;
  onLikeComment: (commentId: string) => Promise<void>;
  onSubmitReply: (commentId: string, content: string) => Promise<void>;
}

export function Comment({ 
  comment, 
  currentUser, 
  isLoggedIn, 
  isSubmitting, 
  onLikeComment, 
  onSubmitReply 
}: CommentProps) {
  const [isReplying, setIsReplying] = useState(false);
  const [replyText, setReplyText] = useState('');

  // Format author name
  const formatAuthorName = (author: Author) => {
    if (!author) return 'Anonymous';
    
    if (author.name && author.name.trim()) return author.name;
    
    if (author.firstName || author.lastName) {
      return `${author.firstName || ''} ${author.lastName || ''}`.trim();
    }
    
    return 'Anonymous';
  };

  const handleReplySubmit = async () => {
    if (!replyText.trim()) return;
    
    await onSubmitReply(comment._id, replyText);
    setReplyText('');
    setIsReplying(false);
  };

  return (
    <div className="border border-border rounded-lg p-4">
      <div className="flex justify-between items-start mb-3">
        <div className="flex items-center gap-3">
          <Avatar 
            size="md"
            src={comment.user.avatar}
            alt={formatAuthorName(comment.user)}
            fallback={formatAuthorName(comment.user).split(' ').map(n => n[0] || '').join('')}
          />
          <div>
            <p className="font-medium">{formatAuthorName(comment.user)}</p>
            <p className="text-xs text-muted-foreground">{formatTimeAgo(new Date(comment.createdAt))}</p>
          </div>
        </div>
      </div>
      
      <div className="mb-3">
        <p className="text-foreground">{comment.content}</p>
      </div>
      
      <div className="flex items-center gap-4 mb-4">
        <button 
          onClick={() => onLikeComment(comment._id)}
          className={`flex items-center gap-1 text-xs ${
            currentUser && comment.likes.includes(currentUser._id)
              ? 'text-primary'
              : 'text-muted-foreground hover:text-primary'
          } transition-colors`}
        >
          <Heart className={`h-4 w-4 ${currentUser && comment.likes.includes(currentUser._id) ? 'fill-primary' : ''}`} />
          <span>{comment.likes.length} {comment.likes.length === 1 ? 'Like' : 'Likes'}</span>
        </button>
        
        <button 
          onClick={() => setIsReplying(!isReplying)}
          className="flex items-center gap-1 text-xs text-muted-foreground hover:text-primary transition-colors"
        >
          <Reply className="h-4 w-4" />
          <span>Reply</span>
        </button>
      </div>
      
      {/* Reply Form */}
      {isReplying && (
        <div className="pl-4 border-l-2 border-border mb-4">
          <div className="flex gap-2 items-start">
            <Textarea
              placeholder="Write a reply..."
              value={replyText}
              onChange={(e) => setReplyText(e.target.value)}
              disabled={!isLoggedIn || isSubmitting}
              className="flex-1 h-20 text-sm"
            />
            <Button 
              size="sm"
              onClick={handleReplySubmit}
              disabled={!isLoggedIn || isSubmitting || !replyText.trim()}
            >
              {isSubmitting ? <Loader2 className="h-4 w-4 animate-spin" /> : <Send className="h-4 w-4" />}
            </Button>
          </div>
        </div>
      )}
      
      {/* Replies */}
      {comment.replies && comment.replies.length > 0 && (
        <div className="pl-8 mt-4 space-y-4">
          {comment.replies.map((reply, index) => (
            <div key={index} className="border-l-2 border-border pl-4">
              <div className="flex justify-between items-start mb-2">
                <div className="flex items-center gap-3">
                  <Avatar 
                    size="sm"
                    src={reply.user.avatar}
                    alt={formatAuthorName(reply.user)}
                    fallback={formatAuthorName(reply.user).split(' ').map(n => n[0] || '').join('')}
                  />
                  <div>
                    <p className="font-medium text-sm">{formatAuthorName(reply.user)}</p>
                    <p className="text-xs text-muted-foreground">{formatTimeAgo(new Date(reply.createdAt))}</p>
                  </div>
                </div>
              </div>
              
              <div className="mb-2">
                <p className="text-sm">{reply.content}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
} 