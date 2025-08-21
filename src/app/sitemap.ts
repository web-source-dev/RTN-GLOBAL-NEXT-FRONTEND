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

  // Static pages - Main pages
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
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/services`,
      lastModified,
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/portfolio`,
      lastModified,
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/industries`,
      lastModified,
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/case-studies`,
      lastModified,
      changeFrequency: 'weekly' as const,
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
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/careers`,
      lastModified,
      changeFrequency: 'weekly' as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/pricing`,
      lastModified,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified,
      changeFrequency: 'monthly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/contact/free-consultation`,
      lastModified,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/faq`,
      lastModified,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/process`,
      lastModified,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/support`,
      lastModified,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/support/submit`,
      lastModified,
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    },
    {
      url: `${baseUrl}/support/ticket-status`,
      lastModified,
      changeFrequency: 'monthly' as const,
      priority: 0.5,
    },
    {
      url: `${baseUrl}/newsletter/subscribe`,
      lastModified,
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    },
    {
      url: `${baseUrl}/site-map`,
      lastModified,
      changeFrequency: 'monthly' as const,
      priority: 0.5,
    },
    {
      url: `${baseUrl}/search`,
      lastModified,
      changeFrequency: 'daily' as const,
      priority: 0.5,
    },
    {
      url: `${baseUrl}/resources`,
      lastModified,
      changeFrequency: 'weekly' as const,
      priority: 0.7,
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

  // Knowledge base - Main page, categories, and individual articles
  const kbCategories = ["getting-started", "technical", "api", "best-practices", "troubleshooting", "releases", "account-access", "billing"];
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

  // Knowledge base individual articles
  const kbArticles: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/knowledge-base/getting-started/platform-overview`,
      lastModified,
      changeFrequency: 'monthly' as const,
      priority: 0.5,
    },
    {
      url: `${baseUrl}/knowledge-base/api/authentication`,
      lastModified,
      changeFrequency: 'monthly' as const,
      priority: 0.5,
    },
    {
      url: `${baseUrl}/knowledge-base/account-access/reset-password`,
      lastModified,
      changeFrequency: 'monthly' as const,
      priority: 0.5,
    },
    {
      url: `${baseUrl}/knowledge-base/troubleshooting/common-issues`,
      lastModified,
      changeFrequency: 'monthly' as const,
      priority: 0.5,
    },
    {
      url: `${baseUrl}/knowledge-base/account-access/two-factor-authentication`,
      lastModified,
      changeFrequency: 'monthly' as const,
      priority: 0.5,
    },
    {
      url: `${baseUrl}/knowledge-base/account-access/account-verification`,
      lastModified,
      changeFrequency: 'monthly' as const,
      priority: 0.5,
    },
    {
      url: `${baseUrl}/knowledge-base/account-access/login-issues`,
      lastModified,
      changeFrequency: 'monthly' as const,
      priority: 0.5,
    },
    {
      url: `${baseUrl}/knowledge-base/api/rate-limits`,
      lastModified,
      changeFrequency: 'monthly' as const,
      priority: 0.5,
    },
    {
      url: `${baseUrl}/knowledge-base/api/error-handling`,
      lastModified,
      changeFrequency: 'monthly' as const,
      priority: 0.5,
    },
    {
      url: `${baseUrl}/knowledge-base/api/new-endpoints`,
      lastModified,
      changeFrequency: 'monthly' as const,
      priority: 0.5,
    },
  ];

  // Auth pages
  const authPages: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/auth/login`,
      lastModified,
      changeFrequency: 'monthly' as const,
      priority: 0.4,
    },
    {
      url: `${baseUrl}/auth/register`,
      lastModified,
      changeFrequency: 'monthly' as const,
      priority: 0.4,
    },
    {
      url: `${baseUrl}/auth/forgot-password`,
      lastModified,
      changeFrequency: 'monthly' as const,
      priority: 0.3,
    },
    {
      url: `${baseUrl}/auth/reset-password`,
      lastModified,
      changeFrequency: 'monthly' as const,
      priority: 0.3,
    },
    {
      url: `${baseUrl}/auth/verify-email`,
      lastModified,
      changeFrequency: 'monthly' as const,
      priority: 0.3,
    },
    {
      url: `${baseUrl}/auth/session-expired`,
      lastModified,
      changeFrequency: 'monthly' as const,
      priority: 0.3,
    },
    {
      url: `${baseUrl}/auth/social-success`,
      lastModified,
      changeFrequency: 'monthly' as const,
      priority: 0.3,
    },
  ];

  // Portfolio items
  const portfolioRoutes: MetadataRoute.Sitemap = portfolioItems.map((item) => ({
    url: `${baseUrl}/portfolio/${item.slug || item.title.toLowerCase().replace(/\s+/g, "-")}`,
    lastModified,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  // Case Studies
  const caseStudyRoutes: MetadataRoute.Sitemap = caseStudies.map((study) => ({
    url: `${baseUrl}/case-studies/${study.slug}`,
    lastModified,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  // Industries
  const industryRoutes: MetadataRoute.Sitemap = getAllIndustries().map((industry) => ({
    url: `${baseUrl}/industries/${industry.slug}`,
    lastModified,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  // Services - All individual service pages
  const serviceRoutes: MetadataRoute.Sitemap = getAllServices().map((service) => ({
    url: `${baseUrl}/services/${service.slug}`,
    lastModified,
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  // Service category pages
  const serviceCategoryRoutes: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/services/brand-identity`,
      lastModified,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
  ];

  // Careers - Only main careers page (individual job pages are dynamic and not pre-defined)
  const careerRoutes: MetadataRoute.Sitemap = [
    // Note: Individual job pages are generated dynamically based on available job data
    // They are not included in the sitemap as they depend on actual job listings
  ];

  // Blog & Tags sitemap references
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

  // Billing and account pages
  const accountPages: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/billing`,
      lastModified,
      changeFrequency: 'monthly' as const,
      priority: 0.4,
    },
  ];

  return [
    ...staticPages,
    ...legalPages,
    ...knowledgeBasePages,
    ...kbArticles,
    ...authPages,
    ...portfolioRoutes,
    ...caseStudyRoutes,
    ...industryRoutes,
    ...serviceRoutes,
    ...serviceCategoryRoutes,
    ...careerRoutes,
    ...blogAndTagRoutes,
    ...accountPages,
  ];
} 