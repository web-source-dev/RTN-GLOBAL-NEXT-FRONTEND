import React from 'react';
import { Button } from "@/components/ui/button";
import { toast } from "@/components/ui/use-toast";
import { Facebook, Twitter, Linkedin, Copy } from "lucide-react";

interface ShareButtonsProps {
  title: string;
  compact?: boolean;
}

export function ShareButtons({ title, compact = false }: ShareButtonsProps) {
  const copyToClipboard = () => {
    try {
      const url = window.location.href;
      
      // Check if navigator and clipboard API are available
      if (typeof navigator !== 'undefined' && navigator.clipboard) {
        navigator.clipboard.writeText(url)
          .then(() => {
            toast({
              title: "Link copied",
              description: "Blog link copied to clipboard!",
            });
          })
          .catch((err: unknown) => {
            console.error('Failed to copy: ', err);
            fallbackCopy(url);
          });
      } else {
        // Fallback for browsers that don't support clipboard API
        fallbackCopy(url);
      }
    } catch (error: unknown) {
      console.error('Error copying to clipboard:', error);
      toast({
        title: "Failed to copy link",
        description: "Please try again or copy manually",
        variant: "destructive",
      });
    }
  };

  // Fallback copy method using a temporary input element
  const fallbackCopy = (text: string) => {
    try {
      // Create temporary input
      const textArea = document.createElement('textarea');
      textArea.value = text;
      
      // Make the textarea out of viewport
      textArea.style.position = 'fixed';
      textArea.style.left = '-999999px';
      textArea.style.top = '-999999px';
      document.body.appendChild(textArea);
      
      // Select and copy
      textArea.focus();
      textArea.select();
      
      const successful = document.execCommand('copy');
      document.body.removeChild(textArea);
      
      if (successful) {
        toast({
          title: "Link copied",
          description: "Blog link copied to clipboard!",
        });
      } else {
        throw new Error('Copy command failed');
      }
    } catch (err: unknown) {
      console.error(err)
      toast({
        title: "Failed to copy link",
        description: "Please copy the URL manually from your browser",
        variant: "destructive",
      });
    }
  };

  const getUrl = () => typeof window !== 'undefined' ? window.location.href : '';

  if (compact) {
    return (
      <div className="flex gap-2">
        <Button size="sm" variant="outline" className="p-1 h-8 w-8 rounded-full" asChild>
          <a 
            href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(getUrl())}`} 
            target="_blank" 
            rel="noopener noreferrer"
            aria-label="Share on Facebook"
          >
            <Facebook className="h-4 w-4" />
          </a>
        </Button>
        <Button size="sm" variant="outline" className="p-1 h-8 w-8 rounded-full" asChild>
          <a 
            href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(getUrl())}&text=${encodeURIComponent(title)}`} 
            target="_blank" 
            rel="noopener noreferrer"
            aria-label="Share on Twitter"
          >
            <Twitter className="h-4 w-4" />
          </a>
        </Button>
        <Button size="sm" variant="outline" className="p-1 h-8 w-8 rounded-full" asChild>
          <a 
            href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(getUrl())}&title=${encodeURIComponent(title)}`} 
            target="_blank" 
            rel="noopener noreferrer"
            aria-label="Share on LinkedIn"
          >
            <Linkedin className="h-4 w-4" />
          </a>
        </Button>
        <Button 
          size="sm" 
          variant="outline" 
          className="p-1 h-8 w-8 rounded-full"
          onClick={copyToClipboard}
          aria-label="Copy link"
        >
          <Copy className="h-4 w-4" />
        </Button>
      </div>
    );
  }

  return (
    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
      <div className="text-sm font-medium">Share this article</div>
      <div className="flex gap-3">
        <Button 
          variant="outline" 
          size="icon" 
          className="rounded-full" 
          asChild
        >
          <a 
            href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(getUrl())}`} 
            target="_blank" 
            rel="noopener noreferrer"
            aria-label="Share on Facebook"
          >
            <Facebook className="h-4 w-4" />
          </a>
        </Button>
        <Button 
          variant="outline" 
          size="icon" 
          className="rounded-full" 
          asChild
        >
          <a 
            href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(getUrl())}&text=${encodeURIComponent(title)}`} 
            target="_blank" 
            rel="noopener noreferrer"
            aria-label="Share on Twitter"
          >
            <Twitter className="h-4 w-4" />
          </a>
        </Button>
        <Button 
          variant="outline" 
          size="icon" 
          className="rounded-full" 
          asChild
        >
          <a 
            href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(getUrl())}&title=${encodeURIComponent(title)}`} 
            target="_blank" 
            rel="noopener noreferrer"
            aria-label="Share on LinkedIn"
          >
            <Linkedin className="h-4 w-4" />
          </a>
        </Button>
        <Button 
          variant="outline" 
          size="icon" 
          className="rounded-full"
          onClick={copyToClipboard}
          aria-label="Copy link"
        >
          <Copy className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
} 