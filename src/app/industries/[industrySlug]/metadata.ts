import type { Metadata } from 'next'
import { getIndustryBySlug, getAllIndustries } from "@/data/industries";

// Generate metadata for each individual industry page
export async function generateMetadata({ params }: { params: { industrySlug: string } }): Promise<Metadata> {
  const industry = getIndustryBySlug(params.industrySlug);
  
  if (!industry) {
    return {
      title: "Industry Not Found | RTN Global",
      description: "The requested industry page could not be found. Explore our other industry solutions.",
      robots: {
        index: false,
        follow: true,
      }
    };
  }
  
  // Create industry-specific keywords
  const keywordsArray = [
    `${industry.name} solutions`,
    `${industry.name} digital services`,
    `${industry.name} technology`,
    `${industry.name} consulting`,
    'industry expertise',
    'specialized services',
    'digital transformation',
    ...industry.tools,
    ...industry.benefits.slice(0, 5),
    'RTN Global'
  ];
  
  // Extract challenge titles for more keywords
  const challengeKeywords = industry.challenges.map(challenge => challenge.title.toLowerCase());
  
  // Create a clean description - limit to ~160 characters for SEO
  const cleanDescription = industry.shortDescription.length > 160 
    ? `${industry.shortDescription.substring(0, 157)}...` 
    : industry.shortDescription;
  
  // Create longer description for OpenGraph
  const ogDescription = `${industry.name} industry solutions: ${industry.shortDescription} Our specialized approach delivers measurable results for ${industry.name} businesses.`;
  
  return {
    title: `${industry.name} Solutions | Digital Services for ${industry.name} | RTN Global`,
    description: cleanDescription,
    keywords: [...keywordsArray, ...challengeKeywords].join(', '),
    robots: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': 200,
      'max-video-preview': -1,
    },
    alternates: {
      canonical: `https://rtnglobal.site/industries/${params.industrySlug}`,
      languages: {
        'en-US': `https://rtnglobal.site/industries/${params.industrySlug}`,
        'en-GB': `https://rtnglobal.site/industries/${params.industrySlug}`,
        'fr': `https://rtnglobal.site/fr/industries/${params.industrySlug}`,
        'de': `https://rtnglobal.site/de/industries/${params.industrySlug}`,
        'es': `https://rtnglobal.site/es/industries/${params.industrySlug}`,
      }
    },
    openGraph: {
      title: `${industry.name} Digital Solutions | RTN Global`,
      description: ogDescription,
      url: `https://rtnglobal.site/industries/${params.industrySlug}`,
      siteName: 'RTN Global',
      locale: 'en_US',
      type: 'website',
      images: [
        {
          url: industry.heroImage || '/images/og/industries-og.jpg',
          width: 1200,
          height: 630,
          alt: `${industry.name} Solutions by RTN Global`
        }
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${industry.name} Solutions | RTN Global`,
      description: cleanDescription,
      images: [industry.heroImage || '/images/og/industries-og.jpg'],
      creator: '@rtnglobalofficial',
      site: '@rtnglobalofficial'
    },
    authors: [{ name: 'Muhammad Tayyab' }],
    publisher: 'RTN Global',
    category: 'Business Services',
    verification: {
      google: 'google03e42604abdd544c',
      other: {
        'wot-verification': 'd225e0e4ff8e770182408ec60e8d8c24',
        'ms-verify': '9f21e93909e646e0a2f3218d1afeb53c',
      }
    },
    other: {
      'og:site_name': 'RTN Global',
      'og:type': 'website',
      'twitter:label1': 'Industry',
      'twitter:data1': industry.name,
      'twitter:label2': 'Services',
      'twitter:data2': industry.services.length.toString(),
      'industry:type': industry.name,
      'industry:services': industry.services.map(service => service.title).join(','),
      'industry:tools': industry.tools.join(','),
      'contact:email': 'info@rtnglobal.site',
      'contact:phone': '+1 (505) 528 0265',
      'contact:address': '1209 MOUNTAIN ROAD PLNE, STE R, ALBUQUERQUE, NM, 87110, US',
    }
  };
}

// Generate static params for all industries
export function generateStaticParams() {
  const industries = Object.values(getAllIndustries());
  return industries.map((industry) => ({
    industrySlug: industry.slug,
  }));
} 