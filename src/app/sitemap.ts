import { MetadataRoute } from 'next'

export const dynamic = "force-static";
export const revalidate = 86400; // 1 day

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://rtnglobal.site'
  const lastModified = new Date()

  // Return a sitemap index that references all the static sitemap files
  return [
    {
      url: `${baseUrl}/sitemap-static.xml`,
      lastModified,
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },  
    {
      url: `${baseUrl}/sitemap-blog.xml`,
      lastModified,
      changeFrequency: 'daily' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/sitemap-dynamic.xml`,
      lastModified,
      changeFrequency: 'weekly' as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/sitemap-knowledge-base.xml`,
      lastModified,
      changeFrequency: 'weekly' as const,
      priority: 0.6,
    },
    {
      url: `${baseUrl}/sitemap-jobs.xml`,
      lastModified,
      changeFrequency: 'weekly' as const,
      priority: 0.5,
    },
    {
      url: `${baseUrl}/sitemap-tags.xml`,
      lastModified,
      changeFrequency: 'daily' as const,
      priority: 0.5,
    },
  ]
} 