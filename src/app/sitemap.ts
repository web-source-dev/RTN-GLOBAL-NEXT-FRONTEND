import { MetadataRoute } from 'next'
import { portfolioItems } from '@/data/portfolio-items'
import { caseStudies } from '@/data/case-studies'
import { getAllIndustries } from '@/data/industries'
import { getAllServices } from '@/data/services'

export const dynamic = "force-static";
export const revalidate = 86400; // 1 day

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://rtnglobal.site'
  const lastModified = new Date()

  // Static pages
  const staticPages: MetadataRoute.Sitemap = [
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
  const legalPages: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/legal`,
      lastModified,
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    },
    {
      url: `${baseUrl}/legal/terms-conditions`,
      lastModified,
      changeFrequency: 'monthly' as const,
      priority: 0.5,
    },
    {
      url: `${baseUrl}/legal/privacy-policy`,
      lastModified,
      changeFrequency: 'monthly' as const,
      priority: 0.5,
    },
    {
      url: `${baseUrl}/legal/refund-policy`,
      lastModified,
      changeFrequency: 'monthly' as const,
      priority: 0.5,
    },
    {
      url: `${baseUrl}/legal/cookie-policy`,
      lastModified,
      changeFrequency: 'monthly' as const,
      priority: 0.5,
    },
    {
      url: `${baseUrl}/legal/disclaimer`,
      lastModified,
      changeFrequency: 'monthly' as const,
      priority: 0.5,
    },
  ]

  // Knowledge base
  const kbCategories = ["getting-started", "technical", "api", "tutorials", "troubleshooting"];
  const knowledgeBasePages: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/knowledge-base`,
      lastModified,
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
    ...kbCategories.map((cat) => ({
      url: `${baseUrl}/knowledge-base/${cat}`,
      lastModified,
      changeFrequency: 'weekly' as const,
      priority: 0.6,
    })),
  ];

  // Portfolio
  const portfolioRoutes: MetadataRoute.Sitemap = portfolioItems.map((item) => ({
    url: `${baseUrl}/portfolio/${item.slug || item.title.toLowerCase().replace(/\s+/g, "-")}`,
    lastModified,
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }));

  // Case Studies
  const caseStudyRoutes: MetadataRoute.Sitemap = caseStudies.map((study) => ({
    url: `${baseUrl}/case-studies/${study.slug}`,
    lastModified,
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }));

  // Industries
  const industryRoutes: MetadataRoute.Sitemap = getAllIndustries().map((industry) => ({
    url: `${baseUrl}/industries/${industry.slug}`,
    lastModified,
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }));

  // Services
  const serviceRoutes: MetadataRoute.Sitemap = getAllServices().map((service) => ({
    url: `${baseUrl}/services/${service.slug}`,
    lastModified,
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }));

  // Careers (example jobs)
  const careerRoutes: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/careers/jobs/senior-frontend-developer`,
      lastModified,
      changeFrequency: 'weekly' as const,
      priority: 0.6,
    },
    {
      url: `${baseUrl}/careers/jobs/ux-designer`,
      lastModified,
      changeFrequency: 'weekly' as const,
      priority: 0.6,
    },
    {
      url: `${baseUrl}/careers/jobs/project-manager`,
      lastModified,
      changeFrequency: 'weekly' as const,
      priority: 0.6,
    },
  ];

  // ✅ Blog & Tags get separate sitemaps
  const blogAndTagRoutes: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/sitemap-blog.xml`,
      lastModified,
      changeFrequency: 'hourly' as const,
      priority: 0.6,
    },
    {
      url: `${baseUrl}/sitemap-tags.xml`,
      lastModified,
      changeFrequency: 'hourly' as const,
      priority: 0.5,
    },
  ];

  return [
    ...staticPages,
    ...legalPages,
    ...knowledgeBasePages,
    ...portfolioRoutes,
    ...caseStudyRoutes,
    ...industryRoutes,
    ...serviceRoutes,
    ...careerRoutes,
    ...blogAndTagRoutes,
  ];
} 