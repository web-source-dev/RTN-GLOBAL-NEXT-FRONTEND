import { MetadataRoute } from 'next'

export const dynamic = "force-static";
export const revalidate = 86400; // 1 day

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://rtnglobal.site'
  const lastModified = new Date().toISOString()

  // Return a sitemap index that references all the static sitemap files
  // This follows Google's sitemap index best practices for optimal crawling
  return [
    {
      url: `${baseUrl}/sitemap-static.xml`,
      lastModified,
      changeFrequency: 'weekly' as const,
      priority: 1.0, // Highest priority for main pages
    },
    {
      url: `${baseUrl}/sitemap-blog.xml`,
      lastModified,
      changeFrequency: 'daily' as const,
      priority: 0.9, // High priority for fresh content
    },
    {
      url: `${baseUrl}/sitemap-dynamic.xml`,
      lastModified,
      changeFrequency: 'weekly' as const,
      priority: 0.8, // High priority for services and portfolio
    },
    {
      url: `${baseUrl}/sitemap-knowledge-base.xml`,
      lastModified,
      changeFrequency: 'weekly' as const,
      priority: 0.7, // Medium priority for documentation
    },
    {
      url: `${baseUrl}/sitemap-jobs.xml`,
      lastModified,
      changeFrequency: 'weekly' as const,
      priority: 0.6, // Medium priority for career pages
    },
    {
      url: `${baseUrl}/sitemap-tags.xml`,
      lastModified,
      changeFrequency: 'daily' as const,
      priority: 0.5, // Lower priority for tag pages
    },
  ]
} 