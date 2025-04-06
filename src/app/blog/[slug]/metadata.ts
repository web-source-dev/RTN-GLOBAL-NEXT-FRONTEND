import type { Metadata } from 'next'
import { BlogAPI } from '@/lib/api/api-provider'

type Props = {
  params: { slug: string }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = params;
  
  try {
    // Fetch blog post data
    const response = await BlogAPI.getBlogBySlug(slug);
    const post = response.data;
    
    // Extract plain text from HTML content for description
    const plainText = post.content.replace(/<[^>]*>/g, '');
    const description = plainText.length > 160 
      ? plainText.substring(0, 157) + '...' 
      : plainText;
    
    return {
      title: `${post.title} | RTN Global Blog`,
      description: post.description || description,
      keywords: post.tags?.join(', ') || 'web development, digital marketing, RTN Global',
      openGraph: {
        title: post.title,
        description: post.description || description,
        type: 'article',
        url: `https://rtnglobal.com/blog/${slug}`,
        images: post.image 
          ? [{ url: post.image, width: 1200, height: 630, alt: post.title }]
          : [{ url: '/images/og/blog-og.jpg', width: 1200, height: 630, alt: post.title }],
        publishedTime: post.createdAt,
        modifiedTime: post.updatedAt,
        authors: post.author?.name ? [`https://rtnglobal.com/about`] : undefined,
        tags: post.tags,
      },
      twitter: {
        card: 'summary_large_image',
        title: post.title,
        description: post.description || description,
        images: post.image ? [post.image] : ['/images/og/blog-og.jpg'],
      },
      alternates: {
        canonical: `https://rtnglobal.com/blog/${slug}`,
      },
    };
  } catch (error) {
    // Fallback metadata if post can't be fetched
    console.error('Error generating metadata for blog post:', error);
    return {
      title: 'Blog Post | RTN Global',
      description: 'Read our latest insights on web development and digital marketing.',
    };
  }
} 