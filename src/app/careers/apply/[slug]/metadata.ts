import { Metadata } from 'next';

// Define the Job type
type Job = {
  _id: string;
  slug: string;
  title: string;
  description: string;
  department: string;
  location: string;
  type: string;
};

// Define params type for better TypeScript support
type PageParams = {
  slug: string;
};

// Function to fetch job details specifically for metadata generation
async function getJobDetails(slug: string): Promise<{ job: Job } | null> {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/careers/jobs/${slug}`, {
      next: { revalidate: 60 } // Revalidate every minute
    });

    if (!response.ok) {
      return null;
    }

    return await response.json();
  } catch (error) {
    console.error('Error fetching job details for metadata:', error);
    return null;
  }
}

// Generate metadata for the job application page with inline type
export async function generateMetadata({ 
  params 
}: { 
  params: PageParams;
  searchParams?: Record<string, string | string[] | undefined>;
}): Promise<Metadata> {
  const { slug } = params;
  const jobData = await getJobDetails(slug);
  
  if (!jobData?.job) {
    return {
      title: 'Job Application Not Found | RTN Global Careers',
      description: 'The job application you were looking for does not exist or has been removed.',
      robots: {
        index: false,
        follow: false,
      }
    };
  }

  const { job } = jobData;
  
  // Create job-specific application keywords
  const keywords = [
    `apply for ${job.title}`,
    `${job.title} application`,
    `${job.department} job application`,
    `${job.location} job`,
    'job application',
    'career application',
    'RTN Global application',
    'apply online',
    'job opportunity',
    'international career'
  ].filter(Boolean);

  return {
    title: `Apply for ${job.title} | RTN Global Careers`,
    description: `Apply for the ${job.title} position in our ${job.department} department at ${job.location}. Submit your application to join our international team at RTN Global.`,
    keywords: keywords.join(', '),
    alternates: {
      canonical: `https://rtnglobal.site/careers/apply/${job.slug}`,
      languages: {
        'en-US': `https://rtnglobal.site/careers/apply/${job.slug}`,
        'en-GB': `https://rtnglobal.site/careers/apply/${job.slug}`,
        'fr': `https://rtnglobal.site/fr/careers/apply/${job.slug}`,
        'de': `https://rtnglobal.site/de/careers/apply/${job.slug}`,
        'es': `https://rtnglobal.site/es/careers/apply/${job.slug}`,
      }
    },
    openGraph: {
      title: `Apply for ${job.title} at RTN Global`,
      description: `Submit your application for the ${job.title} position in our ${job.department} department at ${job.location}. Join our international team today.`,
      url: `https://rtnglobal.site/careers/apply/${job.slug}`,
      siteName: 'RTN Global',
      locale: 'en_US',
      type: 'website',
      images: [
        {
          url: '/images/og/job-application.jpg',
          width: 1200,
          height: 630,
          alt: `Apply for ${job.title} at RTN Global`
        }
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: `Apply for ${job.title} at RTN Global`,
      description: `Submit your application for the ${job.title} position in our ${job.department} department. Join our international team today.`,
      images: ['/images/og/job-application.jpg'],
      creator: '@rtnglobalofficial',
      site: '@rtnglobalofficial'
    },
    robots: {
      index: false, // Application pages should typically not be indexed
      follow: true,
    },
    authors: [{ name: 'Muhammad Tayyab' }],
    publisher: 'RTN Global',
    category: 'Careers',
    verification: {
      google: 'google03e42604abdd544c',
      other: {
        'wot-verification': 'd225e0e4ff8e770182408ec60e8d8c24',
        'ms-verify': '9f21e93909e646e0a2f3218d1afeb53c',
      }
    },
    other: {
      'job:title': job.title,
      'job:department': job.department,
      'job:location': job.location,
      'job:type': job.type,
      'application:type': 'job',
      'contact:email': 'info@rtnglobal.site',
      'contact:phone': '+1 (505) 528 0265',
      'contact:address': '1209 MOUNTAIN ROAD PLNE, STE R, ALBUQUERQUE, NM, 87110, US',
    }
  };
} 