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
    
    // Extract plain text from HTML content for description (as fallback)
    const plainText = post.content.replace(/<[^>]*>/g, '');
    
    // Use SEO fields if available, or fallback to defaults
    const title = post.seoTitle || `${post.title} | ${post.category || 'Blog'} | RTN Global`;
    
    // Use SEO description or fallback to post description or content excerpt
    let description = post.seoDescription || post.description;
    if (!description || description.length < 50) {
      description = plainText.length > 160 
        ? plainText.substring(0, 157) + '...' 
        : plainText;
    }
    
    // Use provided keywords or tags as fallback
    const keywords = post.seoKeywords?.join(', ') || post.tags?.join(', ') || 'web development, digital marketing, RTN Global';
    
    // Generate article publishing and modification dates
    const publishDate = new Date(post.createdAt).toISOString();
    const modifyDate = new Date(post.updatedAt).toISOString();
    
    // Use canonical URL if provided
    const canonical = post.canonicalUrl || `https://rtnglobal.com/blog/${slug}`;
    
    // Use OpenGraph fields if available or fallback to defaults
    const ogTitle = post.ogTitle || post.title;
    const ogDescription = post.ogDescription || description;
    const ogImage = post.ogImage || post.image || '/images/og/blog-og.jpg';
    
    // Use Twitter fields if available or fallback to OG fields
    const twitterTitle = post.twitterTitle || ogTitle;
    const twitterDescription = post.twitterDescription || ogDescription;
    const twitterImage = post.twitterImage || ogImage;
    
    // Respect noIndex setting if provided
    const shouldIndex = post.noIndex !== true;
    
    return {
      title,
      description,
      keywords,
      authors: [{ name: authorName }],
      category: post.category,
      openGraph: {
        title: ogTitle,
        description: ogDescription,
        type: 'article',
        url: canonical,
        images: [{ 
          url: ogImage, 
          width: 1200, 
          height: 630, 
          alt: post.imageAlt || post.title,
          secureUrl: ogImage.startsWith('https') ? ogImage : undefined
        }],
        publishedTime: publishDate,
        modifiedTime: modifyDate,
        authors: [authorName],
        tags: post.tags,
        siteName: 'RTN Global',
        locale: post.language === 'es' ? 'es_ES' : 'en_US',
      },
      twitter: {
        card: 'summary_large_image',
        title: twitterTitle,
        description: twitterDescription,
        images: [twitterImage],
        creator: '@RTNGlobal',
        site: '@RTNGlobal',
      },
      alternates: {
        canonical: canonical,
      },
      robots: {
        index: shouldIndex,
        follow: shouldIndex,
        googleBot: {
          index: shouldIndex,
          follow: shouldIndex,
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