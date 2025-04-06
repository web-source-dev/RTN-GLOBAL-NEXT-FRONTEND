import type { Metadata } from 'next'
import { portfolioItems } from "@/data/portfolio-items"

// Define types for the portfolio item (similar to those in page.tsx)
type Stats = {
  performance: string
  duration: string
  satisfaction: string
}

type PortfolioItem = {
  id?: string
  title: string
  category: string
  image: string
  description: string
  link?: string
  tags: string[]
  stats: Stats
  featured?: boolean
  challenge?: string
  solution?: string
  results?: string[]
  technologies?: string[]
  client?: string
  industry?: string
  year?: string
  testimonial?: {
    content: string
    author: string
    role: string
    company: string
  }
}

interface ProjectPageProps {
  params: {
    slug: string
  }
}

// Generate dynamic metadata for portfolio items
export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  // Find the project by converting the slug back to a title
  const slug = params.slug;
  const project = portfolioItems.find(item => 
    item.title.toLowerCase().replace(/\s+/g, '-') === slug
  );
  
  // Default metadata if project is not found
  if (!project) {
    return {
      title: 'Project Not Found | RTN Global Portfolio',
      description: 'The requested project could not be found. Browse our full portfolio for other successful projects.',
      robots: {
        index: false,
        follow: true,
      }
    };
  }
  
  // Construct metadata based on project details
  return {
    title: `${project.title} | Portfolio | RTN Global`,
    description: project.description,
    keywords: `${project.title}, ${project.category}, ${project.industry || 'digital project'}, RTN Global portfolio, ${project.tags.join(', ')}`,
    robots: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': 250,
      'max-video-preview': -1,
    },
    alternates: {
      canonical: `https://rtnglobal.com/portfolio/${slug}`,
      languages: {
        'en-US': `https://rtnglobal.com/portfolio/${slug}`,
        'en-GB': `https://rtnglobal.com/portfolio/${slug}`,
        'fr': `https://rtnglobal.com/fr/portfolio/${slug}`,
        'de': `https://rtnglobal.com/de/portfolio/${slug}`,
        'es': `https://rtnglobal.com/es/portfolio/${slug}`,
      }
    },
    openGraph: {
      title: project.title,
      description: project.description,
      type: 'article',
      url: `https://rtnglobal.com/portfolio/${slug}`,
      siteName: 'RTN Global',
      locale: 'en_US',
      images: [
        {
          url: project.image.startsWith('/') ? `https://rtnglobal.com${project.image}` : project.image,
          width: 1200,
          height: 630,
          alt: project.title
        }
      ],
      publishedTime: project.year ? `${project.year}-01-01T00:00:00.000Z` : undefined,
      modifiedTime: new Date().toISOString(),
      section: 'Portfolio',
      tags: project.tags,
    },
    twitter: {
      card: 'summary_large_image',
      title: `${project.title} | RTN Global Case Study`,
      description: project.description,
      images: [project.image],
      creator: '@RTNGlobal',
      site: '@RTNGlobal'
    },
    authors: [{ name: 'RTN Global Team' }],
    publisher: 'RTN Global Ltd',
    category: project.category,
    verification: {
      google: 'verification_token',
      yandex: 'verification_token',
      other: {
        me: ['https://rtnglobal.com', 'https://www.linkedin.com/company/rtnglobal']
      }
    },
    other: {
      'og:site_name': 'RTN Global',
      'og:type': 'article',
      'twitter:label1': 'Category',
      'twitter:data1': project.category,
      'twitter:label2': 'Industry',
      'twitter:data2': project.industry || 'Various',
      'project:client': project.client || 'Confidential',
      'project:year': project.year || new Date().getFullYear().toString(),
      'project:technologies': project.technologies ? project.technologies.join(', ') : 'Various Modern Technologies',
      'project:featured': project.featured ? 'Yes' : 'No'
    }
  }
} 