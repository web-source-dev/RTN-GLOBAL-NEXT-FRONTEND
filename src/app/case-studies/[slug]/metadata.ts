import { Metadata } from "next";
import { getCaseStudyBySlug } from "@/data/case-studies";

// Generate metadata for each individual case study
export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const caseStudy = getCaseStudyBySlug(params.slug);
  
  if (!caseStudy) {
    return {
      title: "Case Study Not Found | RTN Global",
      description: "The case study you're looking for could not be found or has been removed.",
      robots: {
        index: false,
        follow: false,
      }
    };
  }
  
  // Clean description for metadata - ensure it's not too long for SEO
  const cleanDescription = caseStudy.summary.length > 160 
    ? `${caseStudy.summary.substring(0, 157)}...` 
    : caseStudy.summary;
  
  // Create keywords based on case study data
  const keywordsArray = [
    caseStudy.title,
    caseStudy.client,
    caseStudy.industry,
    ...caseStudy.services,
    'case study',
    'success story',
    'ROI',
    'business results',
    'digital transformation',
    'RTN Global'
  ];
  
  return {
    title: `${caseStudy.title} | ${caseStudy.client} Case Study | RTN Global`,
    description: cleanDescription,
    keywords: keywordsArray.join(', '),
    alternates: {
      canonical: `https://rtnglobal.co/case-studies/${params.slug}`,
      languages: {
        'en-US': `https://rtnglobal.co/case-studies/${params.slug}`,
        'en-GB': `https://rtnglobal.co/case-studies/${params.slug}`,
        'fr': `https://rtnglobal.co/fr/case-studies/${params.slug}`,
        'de': `https://rtnglobal.co/de/case-studies/${params.slug}`,
        'es': `https://rtnglobal.co/es/case-studies/${params.slug}`,
      }
    },
    openGraph: {
      title: `${caseStudy.title} | ${caseStudy.client}`,
      description: cleanDescription,
      url: `https://rtnglobal.co/case-studies/${params.slug}`,
      siteName: 'RTN Global',
      locale: 'en_US',
      type: 'article',
      publishedTime: new Date().toISOString(),
      authors: ['Muhammad Tayyab'],
      images: [
        {
          url: caseStudy.image || '/images/og/case-studies.jpg',
          width: 1200,
          height: 630,
          alt: `${caseStudy.title} - RTN Global Case Study`
        }
      ],
      section: 'Case Studies',
      tags: [...caseStudy.services, caseStudy.industry]
    },
    twitter: {
      card: 'summary_large_image',
      title: `${caseStudy.title} | ${caseStudy.client} Case Study | RTN Global`,
      description: cleanDescription,
      images: [caseStudy.image || '/images/og/case-studies.jpg'],
      creator: '@rtnglobalofficial',
      site: '@rtnglobalofficial'
    },
    robots: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': 200,
      'max-video-preview': -1,
    },
    authors: [{ name: 'Muhammad Tayyab' }],
    publisher: 'RTN Global',
    category: 'Case Studies',
    verification: {
      google: 'google03e42604abdd544c',
      other: {
        'wot-verification': 'd225e0e4ff8e770182408ec60e8d8c24',
        'ms-verify': '9f21e93909e646e0a2f3218d1afeb53c',
      }
    },
    other: {
      'og:site_name': 'RTN Global',
      'article:published_time': new Date().toISOString(),
      'article:author': 'Muhammad Tayyab',
      'article:section': 'Case Studies',
      'article:tag': caseStudy.services.join(','),
      'twitter:label1': 'Industry',
      'twitter:data1': caseStudy.industry,
      'twitter:label2': 'Client',
      'twitter:data2': caseStudy.client,
      'contact:email': 'info@rtnglobal.site',
      'contact:phone': '+1 505 528 6780',
      'contact:address': '1209 MOUNTAIN ROAD PLNE, STE R, ALBUQUERQUE, NM, 87110, US',
    }
  };
} 