import type { Metadata } from 'next'
import { BlogAPI } from '@/lib/api/api-provider'

type Props = {
  params: { tag: string }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { tag } = params;
  const decodedTag = decodeURIComponent(tag);
  
  try {
    // Fetch blogs with this tag to get accurate counts
    const response = await BlogAPI.getAllBlogs({ tag: decodedTag });
    const postsCount = response.data.length;
    
    return {
      title: `${decodedTag} - Blog Tag | RTN Global`,
      description: `Explore our ${postsCount} articles about ${decodedTag}. Insights, tips, and the latest trends in ${decodedTag}.`,
      keywords: `${decodedTag}, blog, articles, RTN Global, web development, digital marketing`,
      openGraph: {
        title: `${decodedTag} - Blog Tag | RTN Global`,
        description: `Explore our ${postsCount} articles about ${decodedTag}. Insights, tips, and the latest trends.`,
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
        ]
      },
      twitter: {
        card: 'summary_large_image',
        title: `${decodedTag} - Blog Tag | RTN Global`,
        description: `Explore our ${postsCount} articles about ${decodedTag}. Insights, tips, and the latest trends.`,
        images: ['/images/og/blog-og.jpg']
      },
      alternates: {
        canonical: `https://rtnglobal.com/blog/tag/${tag}`,
      }
    };
  } catch (error) {
    console.error('Error generating metadata:', error);
    // Fallback metadata if we can't fetch posts
    return {
      title: `${decodedTag} - Blog Tag | RTN Global`,
      description: `Explore our articles about ${decodedTag}. Insights, tips, and the latest trends.`,
    };
  }
} 