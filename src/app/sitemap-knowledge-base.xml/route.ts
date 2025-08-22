import { NextResponse } from 'next/server'
import { categories } from '@/data/knowledge-base'

export async function GET() {
  const baseUrl = 'https://rtnglobal.site'
  const lastModified = new Date().toISOString().split('T')[0]

  // Generate knowledge base URLs
  const knowledgeUrls = Object.values(categories).map(category => {
    const categoryUrl = `
  <url>
    <loc>${baseUrl}/knowledge-base/${category.id}</loc>
    <lastmod>${lastModified}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>`

    // For now, we'll just include the category pages since articles are not exported
    return categoryUrl
  }).join('')

  const knowledgeBaseSitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <!-- Knowledge Base Sitemap -->
  
  <!-- Knowledge Base Categories and Articles -->
  ${knowledgeUrls}
</urlset>`

  return new NextResponse(knowledgeBaseSitemap, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=86400, s-maxage=86400', // Cache for 24 hours
    },
  })
}
