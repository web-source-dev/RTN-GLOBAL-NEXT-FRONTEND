import type { Metadata } from 'next'
import { portfolioItems } from "@/data/portfolio-items"

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
      canonical: `https://rtnglobal.site/portfolio/${slug}`,
      languages: {
        'en-US': `https://rtnglobal.site/portfolio/${slug}`,
        'en-GB': `https://rtnglobal.site/portfolio/${slug}`,
        'fr': `https://rtnglobal.site/fr/portfolio/${slug}`,
        'de': `https://rtnglobal.site/de/portfolio/${slug}`,
        'es': `https://rtnglobal.site/es/portfolio/${slug}`,
      }
    },
    openGraph: {
      title: project.title,
      description: project.description,
      type: 'article',
      url: `https://rtnglobal.site/portfolio/${slug}`,
      siteName: 'RTN Global',
      locale: 'en_US',
      images: [
        {
          url: project.image.startsWith('/') ? `https://rtnglobal.site${project.image}` : project.image,
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
      creator: '@rtnglobalofficial',
      site: '@rtnglobalofficial'
    },
    authors: [{ name: 'RTN Global Team' }],
    publisher: 'RTN Global',
    creator: 'Muhammad Tayyab',
    category: project.category,
    verification: {
      google: 'google03e42604abdd544c',
      other: {
        'wot-verification': 'd225e0e4ff8e770182408ec60e8d8c24',
        'ms-verify': '9f21e93909e646e0a2f3218d1afeb53c',
        me: ['https://rtnglobal.site', 'https://www.linkedin.com/in/rtnglobalofficial']
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
      'project:featured': project.featured ? 'Yes' : 'No',
      'contact:email': 'info@rtnglobal.site',
      'contact:phone': '+1 (505) 528 0265',
      'contact:address': '1209 MOUNTAIN ROAD PLNE, STE R, ALBUQUERQUE, NM, 87110, US'
    }
  }
} 