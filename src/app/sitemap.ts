import { MetadataRoute } from 'next'
import { portfolioItems } from '@/data/portfolio-items'
import { caseStudies } from '@/data/case-studies'
import { getAllIndustries } from '@/data/industries'
import { getAllServices } from '@/data/services'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://rtnglobal.site'
  const lastModified = new Date()

  // Core static pages
  const staticPages = [
    {
      url: baseUrl,
      lastModified,
      changeFrequency: 'daily' as const,
      priority: 1.0,
    },
    {
      url: `${baseUrl}/about`,
      lastModified,
      changeFrequency: 'daily' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/services`,
      lastModified,
      changeFrequency: 'daily' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/portfolio`,
      lastModified,
      changeFrequency: 'daily' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/industries`,
      lastModified,
      changeFrequency: 'daily' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/case-studies`,
      lastModified,
      changeFrequency: 'daily' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified,
      changeFrequency: 'daily' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog/tag`,
      lastModified,
      changeFrequency: 'daily' as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/team`,
      lastModified,
      changeFrequency: 'daily' as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/careers`,
      lastModified,
      changeFrequency: 'daily' as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/pricing`,
      lastModified,
      changeFrequency: 'daily' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified,
      changeFrequency: 'daily' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/contact/free-consultation`,
      lastModified,
      changeFrequency: 'daily' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/faq`,
      lastModified,
      changeFrequency: 'daily' as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/process`,
      lastModified,
      changeFrequency: 'daily' as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/support`,
      lastModified,
      changeFrequency: 'daily' as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/support/submit`,
      lastModified,
      changeFrequency: 'daily' as const,
      priority: 0.6,
    },
    {
      url: `${baseUrl}/support/ticket-status`,
      lastModified,
      changeFrequency: 'daily' as const,
      priority: 0.5,
    },
    {
      url: `${baseUrl}/newsletter/subscribe`,
      lastModified,
      changeFrequency: 'daily' as const,
      priority: 0.6,
    },
    {
      url: `${baseUrl}/site-map`,
      lastModified,
      changeFrequency: 'daily' as const,
      priority: 0.5,
    },
    {
      url: `${baseUrl}/search`,
      lastModified,
      changeFrequency: 'daily' as const,
      priority: 0.5,
    },
  ]

  // Legal pages
  const legalPages = [
    {
      url: `${baseUrl}/legal`,
      lastModified,
      changeFrequency: 'daily' as const,
      priority: 0.6,
    },
    {
      url: `${baseUrl}/legal/terms-conditions`,
      lastModified,
      changeFrequency: 'daily' as const,
      priority: 0.5,
    },
    {
      url: `${baseUrl}/legal/privacy-policy`,
      lastModified,
      changeFrequency: 'daily' as const,
      priority: 0.5,
    },
    {
      url: `${baseUrl}/legal/refund-policy`,
      lastModified,
      changeFrequency: 'daily' as const,
      priority: 0.5,
    },
    {
      url: `${baseUrl}/legal/cookie-policy`,
      lastModified,
      changeFrequency: 'daily' as const,
      priority: 0.5,
    },
    {
      url: `${baseUrl}/legal/disclaimer`,
      lastModified,
      changeFrequency: 'daily' as const,
      priority: 0.5,
    },
  ]

  // Authentication pages (we don't want these indexed by search engines, but included for completeness)
  // We're commenting this out since it's not used in the returned sitemap
  /* 
  const authPages = [
    {
      url: `${baseUrl}/auth/login`,
      lastModified,
      changeFrequency: 'daily' as const,
      priority: 0.3,
    },
    {
      url: `${baseUrl}/auth/register`,
      lastModified,
      changeFrequency: 'daily' as const,
      priority: 0.3,
    },
    {
      url: `${baseUrl}/auth/forgot-password`,
      lastModified,
      changeFrequency: 'daily' as const,
      priority: 0.2,
    },
    {
      url: `${baseUrl}/auth/reset-password`,
      lastModified,
      changeFrequency: 'daily' as const,
      priority: 0.2,
    },
    {
      url: `${baseUrl}/auth/verify-email`,
      lastModified,
      changeFrequency: 'daily' as const,
      priority: 0.2,
    },
  ]
  */

  // Knowledge base pages
  const knowledgeBaseCategories = [
    'getting-started',
    'technical',
    'api',
    'tutorials',
    'troubleshooting'
  ]

  const knowledgeBasePages = [
    {
      url: `${baseUrl}/knowledge-base`,
      lastModified,
      changeFrequency: 'daily' as const,
      priority: 0.8,
    },
    ...knowledgeBaseCategories.map(category => ({
      url: `${baseUrl}/knowledge-base/${category}`,
      lastModified,
      changeFrequency: 'daily' as const,
      priority: 0.7,
    })),
  ]

  // Generate some example knowledge base article URLs for common articles
  const commonArticles = [
    { category: 'getting-started', slug: 'introduction' },
    { category: 'getting-started', slug: 'quickstart-guide' },
    { category: 'technical', slug: 'installation' },
    { category: 'technical', slug: 'configuration' },
    { category: 'api', slug: 'authentication' },
    { category: 'api', slug: 'endpoints' },
    { category: 'tutorials', slug: 'basic-usage' },
    { category: 'tutorials', slug: 'advanced-features' },
    { category: 'troubleshooting', slug: 'common-issues' },
    { category: 'troubleshooting', slug: 'error-codes' }
  ]

  const knowledgeBaseArticles = commonArticles.map(({ category, slug }) => ({
    url: `${baseUrl}/knowledge-base/${category}/${slug}`,
    lastModified,
    changeFrequency: 'daily' as const,
    priority: 0.6,
  }))

  // Portfolio dynamic routes
  const portfolioRoutes = portfolioItems.map(item => ({
    url: `${baseUrl}/portfolio/${item.slug || item.title.toLowerCase().replace(/\s+/g, '-')}`,
    lastModified,
    changeFrequency: 'daily' as const,
    priority: 0.7,
  }))

  // Case studies dynamic routes
  const caseStudyRoutes = caseStudies.map(study => ({
    url: `${baseUrl}/case-studies/${study.slug}`,
    lastModified,
    changeFrequency: 'daily' as const,
    priority: 0.8,
  }))

  // Industries dynamic routes
  const industryRoutes = getAllIndustries().map(industry => ({
    url: `${baseUrl}/industries/${industry.slug}`,
    lastModified,
    changeFrequency: 'daily' as const,
    priority: 0.8,
  }))

  // Services dynamic routes
  const serviceRoutes = getAllServices().map(service => ({
    url: `${baseUrl}/services/${service.slug}`,
    lastModified,
    changeFrequency: 'daily' as const,
    priority: 0.8,
  }))

  // Career routes
  const careerRoutes = [
    // Example job listings - in a real app, these would be dynamically generated
    {
      url: `${baseUrl}/careers/jobs/senior-frontend-developer`,
      lastModified,
      changeFrequency: 'daily' as const,
      priority: 0.6,
    },
    {
      url: `${baseUrl}/careers/jobs/ux-designer`,
      lastModified,
      changeFrequency: 'daily' as const,
      priority: 0.6,
    },
    {
      url: `${baseUrl}/careers/jobs/project-manager`,
      lastModified,
      changeFrequency: 'daily' as const,
      priority: 0.6,
    }
  ]

  // Blog tag routes (new section)
  let blogTagRoutes: MetadataRoute.Sitemap = []
  
  try {
    // Fetch blog tags
    const tags = await fetchBlogTags()
    
    blogTagRoutes = tags.map((tag: { name: string; count: number }) => ({
      url: `${baseUrl}/blog/tag/${encodeURIComponent(tag.name)}`,
      lastModified,
      changeFrequency: 'daily' as const,
      priority: 0.6,
    }))
  } catch (error) {
    console.error('Error fetching blog tags for sitemap:', error)
    // Continue without blog tags if fetch fails
  }

  // Blog posts dynamic routes (if fetching from an API)
  let blogPostRoutes: MetadataRoute.Sitemap = []
  
  try {
    // For blog posts from a backend API
    const blogPosts = await fetchBlogPosts()
    
    // Define a proper interface for blog posts
    interface BlogPost {
      slug: string;
      publishedAt?: string | Date;
    }
    
    blogPostRoutes = blogPosts.map((post: BlogPost) => ({
      url: `${baseUrl}/blog/${post.slug}`,
      lastModified: new Date(post.publishedAt || lastModified),
      changeFrequency: 'daily' as const,
      priority: 0.6,
    }))
  } catch (error) {
    console.error('Error fetching blog posts for sitemap:', error)
    // Continue without blog posts if fetch fails
  }

  // Combine all routes
  return [
    ...staticPages,
    ...legalPages,
    ...knowledgeBasePages,
    ...knowledgeBaseArticles,
    ...portfolioRoutes,
    ...caseStudyRoutes,
    ...industryRoutes,
    ...serviceRoutes,
    ...careerRoutes,
    ...blogTagRoutes,
    ...blogPostRoutes,
    // We don't include authPages as they generally shouldn't be indexed by search engines
  ]
}

// Add function to fetch blog tags
async function fetchBlogTags() {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/blogs/tags`, {
      next: { revalidate: 3600 } // Revalidate every hour
    })
    
    if (!response.ok) {
      throw new Error('Failed to fetch blog tags')
    }
    
    return await response.json()
  } catch (error) {
    console.error('Error fetching blog tags:', error)
    // Return a set of common tags as fallback
    return [
      { name: 'Web Development', count: 5 },
      { name: 'Digital Marketing', count: 4 },
      { name: 'SEO', count: 3 },
      { name: 'Content Strategy', count: 2 },
      { name: 'Design', count: 4 },
      { name: 'Technology', count: 5 }
    ]
  }
}

// Existing function for fetching blog posts
async function fetchBlogPosts() {
  // Example implementation - replace with your actual API call
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/blogs`, {
      next: { revalidate: 3600 } // Revalidate every hour
    })
    
    if (!response.ok) {
      throw new Error('Failed to fetch blog posts')
    }
    
    return await response.json()
  } catch (error) {
    console.error('Error fetching blog posts:', error)
    return [] // Return empty array on error
  }
} 