import { NextResponse } from 'next/server'
import { services } from '@/data/services'
import { portfolioItems } from '@/data/portfolio-items'
import { caseStudies } from '@/data/case-studies'
import { industries } from '@/data/industries'

export async function GET() {
  const baseUrl = 'https://rtnglobal.site'
  const lastModified = new Date().toISOString().split('T')[0]

  // Generate service URLs
  const serviceUrls = services.map(service => `
  <url>
    <loc>${baseUrl}/services/${service.id}</loc>
    <lastmod>${lastModified}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>`).join('')

  // Generate portfolio URLs
  const portfolioUrls = portfolioItems.map(item => `
  <url>
    <loc>${baseUrl}/portfolio/${item.id}</loc>
    <lastmod>${lastModified}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>`).join('')

  // Generate case study URLs
  const caseStudyUrls = caseStudies.map(study => `
  <url>
    <loc>${baseUrl}/case-studies/${study.id}</loc>
    <lastmod>${lastModified}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>`).join('')

  // Generate industry URLs
  const industryUrls = industries.map(industry => `
  <url>
    <loc>${baseUrl}/industries/${industry.id}</loc>
    <lastmod>${lastModified}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>`).join('')

  const dynamicSitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <!-- Dynamic Content Sitemap - Services, Portfolio, Case Studies, Industries -->
  
  <!-- Service Pages -->
  ${serviceUrls}
  
  <!-- Portfolio Pages -->
  ${portfolioUrls}
  
  <!-- Case Study Pages -->
  ${caseStudyUrls}
  
  <!-- Industry Pages -->
  ${industryUrls}
  
  <!-- Additional Dynamic Pages -->
  <url>
    <loc>${baseUrl}/contact/free-consultation</loc>
    <lastmod>${lastModified}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.9</priority>
  </url>
  
  <url>
    <loc>${baseUrl}/support/submit</loc>
    <lastmod>${lastModified}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.6</priority>
  </url>
  
  <url>
    <loc>${baseUrl}/support/ticket-status</loc>
    <lastmod>${lastModified}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.6</priority>
  </url>
  
  <url>
    <loc>${baseUrl}/billing</loc>
    <lastmod>${lastModified}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>
</urlset>`

  return new NextResponse(dynamicSitemap, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=86400, s-maxage=86400', // Cache for 24 hours
    },
  })
}
