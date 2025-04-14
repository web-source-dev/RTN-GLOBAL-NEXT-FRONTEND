import type { Metadata } from 'next'
import { BlogAPI } from '@/lib/api/api-provider'

// Define a minimal type for blog posts
interface BlogPost {
  title?: string;
  description?: string;
  tags?: string[];
  language?: string;
}

type Props = {
  params: { tag: string }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { tag } = params;
  const decodedTag = decodeURIComponent(tag);
  
  try {
    // Fetch blogs with this tag to get accurate counts
    const response = await BlogAPI.getAllBlogs({ tag: decodedTag });
    const taggedPosts = response.data;
    const postsCount = taggedPosts.length;
    
    // Get the first post with this tag to use its SEO information if available
    const firstPost = taggedPosts[0];
    
    // Generate title variations
    const title = `${decodedTag} - Blog Tag | RTN Global`;
    const description = `Explore our ${postsCount} articles about ${decodedTag}. Insights, tips, and the latest trends in ${decodedTag}.`;
    
    // Generate keywords from tag and related tags
    let relatedTags: string[] = [];
    if (taggedPosts.length > 0) {
      // Collect all unique tags from posts that have this tag
      const tagSet = new Set<string>();
      taggedPosts.forEach((post: BlogPost) => {
        post.tags?.forEach((t: string) => {
          if (t !== decodedTag) tagSet.add(t);
        });
      });
      relatedTags = Array.from(tagSet).slice(0, 5); // Get up to 5 related tags
    }
    
    // Create keywords string
    const keywords = `${decodedTag}, ${relatedTags.join(', ')}, blog, articles, RTN Global, web development, digital marketing`;
    
    // If first post has language setting, use it for locale
    const language = firstPost?.language || 'en';
    const locale = language === 'es' ? 'es_ES' : 'en_US';
    
    return {
      title,
      description,
      keywords,
      openGraph: {
        title,
        description,
        type: 'website',
        url: `https://rtnglobal.com/blog/tag/${tag}`,
        siteName: 'RTN Global Blog',
        images: [
          {
            url: '/images/og/blog-og.jpg',
            width: 1200,
            height: 630,
            alt: `${decodedTag} - RTN Global Blog Tag`
          }
        ],
        locale,
      },
      twitter: {
        card: 'summary_large_image',
        title,
        description,
        images: ['/images/og/blog-og.jpg'],
        creator: '@RTNGlobal',
        site: '@RTNGlobal'
      },
      alternates: {
        canonical: `https://rtnglobal.com/blog/tag/${tag}`,
      },
      robots: {
        index: true,
        follow: true,
        googleBot: {
          index: true,
          follow: true,
          'max-image-preview': 'large',
          'max-snippet': -1,
        },
      },
      authors: [{ name: 'RTN Global Team' }],
      publisher: 'RTN Global',
      viewport: {
        width: 'device-width',
        initialScale: 1,
      },
      verification: {
        google: 'your-google-site-verification-code', // Replace with actual verification code
      },
    };
  } catch (error) {
    console.error('Error generating metadata:', error);
    // Fallback metadata if we can't fetch posts
    return {
      title: `${decodedTag} - Blog Tag | RTN Global`,
      description: `Explore our articles about ${decodedTag}. Insights, tips, and the latest trends.`,
      robots: {
        index: true,
        follow: true,
      },
    };
  }
} 