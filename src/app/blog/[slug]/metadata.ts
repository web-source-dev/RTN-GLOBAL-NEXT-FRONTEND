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
    
    // Format author name
    const authorName = post.author?.name || 
      (post.author?.firstName || post.author?.lastName ? 
        `${post.author.firstName || ''} ${post.author.lastName || ''}`.trim() : 
        'RTN Global Team');
    
    // Extract plain text from HTML content for description
    const plainText = post.content.replace(/<[^>]*>/g, '');
    
    // Create a more SEO-friendly description
    let description = post.description;
    
    if (!description || description.length < 50) {
      description = plainText.length > 160 
        ? plainText.substring(0, 157) + '...' 
        : plainText;
    }
    
    // Create a more SEO-friendly title
    const title = `${post.title} | ${post.category || 'Blog'} | RTN Global`;
    
    // Generate article publishing and modification dates
    const publishDate = new Date(post.createdAt).toISOString();
    const modifyDate = new Date(post.updatedAt).toISOString();
    
    return {
      title,
      description,
      keywords: post.tags?.join(', ') || 'web development, digital marketing, RTN Global',
      authors: [{ name: authorName }],
      category: post.category,
      openGraph: {
        title: post.title,
        description,
        type: 'article',
        url: `https://rtnglobal.com/blog/${slug}`,
        images: post.image 
          ? [{ 
              url: post.image, 
              width: 1200, 
              height: 630, 
              alt: post.title,
              secureUrl: post.image.startsWith('https') ? post.image : undefined
            }]
          : [{ url: '/images/og/blog-og.jpg', width: 1200, height: 630, alt: post.title }],
        publishedTime: publishDate,
        modifiedTime: modifyDate,
        authors: [authorName],
        tags: post.tags,
        siteName: 'RTN Global',
        locale: 'en_US',
      },
      twitter: {
        card: 'summary_large_image',
        title: post.title,
        description,
        images: post.image ? [post.image] : ['/images/og/blog-og.jpg'],
        creator: '@RTNGlobal',
        site: '@RTNGlobal',
      },
      alternates: {
        canonical: `https://rtnglobal.com/blog/${slug}`,
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
      viewport: {
        width: 'device-width',
        initialScale: 1,
      },
      verification: {
        google: 'your-google-site-verification-code', // Replace with actual verification code
      },
    };
  } catch (error) {
    // Fallback metadata if post can't be fetched
    console.error('Error generating metadata for blog post:', error);
    return {
      title: 'Blog Post | RTN Global',
      description: 'Read our latest insights on web development and digital marketing.',
      robots: {
        index: true,
        follow: true,
      },
    };
  }
} 