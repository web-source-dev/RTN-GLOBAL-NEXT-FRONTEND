import { Metadata } from 'next';

// Add proper typing for the job data
type Job = {
  _id: string;
  slug: string;
  title: string;
  description: string;
  department: string;
  location: string;
  type: string;
  publishedAt: string;
  responsibilities?: string[];
  requirements?: string[];
  benefits?: string[];
};

type JobResponse = {
  job: Job;
  relatedJobs?: Job[];
};

// Function to fetch job details - duplicated here for metadata generation
async function getJobDetails(slug: string): Promise<JobResponse | null> {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/careers/jobs/${slug}`, {
      next: { revalidate: 60 } // Revalidate every minute
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error('Error fetching job details:', error);
    return null;
  }
}

// Generate metadata based on job details
export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const { slug } = params;
  const jobData = await getJobDetails(slug);
  
  if (!jobData?.job) {
    return {
      title: 'Job Not Found | RTN Global Careers',
      description: 'The job posting you were looking for does not exist or has been removed.',
      robots: {
        index: false,
        follow: false,
      }
    };
  }

  const { job } = jobData;
  
  // Create a clean description - limit to ~160 characters for SEO
  const cleanDescription = job.description
    .substring(0, 250)
    .replace(/\n/g, ' ')
    .trim();
  const shortDescription = cleanDescription.length > 160 
    ? cleanDescription.substring(0, 157) + '...' 
    : cleanDescription;
  
  // Create a list of keywords based on job details
  const keywords = [
    job.title,
    job.department,
    job.location,
    job.type,
    'career',
    'job',
    'employment',
    'vacancy',
    'position',
    'RTN Global',
    'job opportunity'
  ].filter(Boolean);

  return {
    title: `${job.title} | RTN Global Careers`,
    description: shortDescription,
    keywords: keywords.join(', '),
    alternates: {
      canonical: `https://rtnglobal.co/careers/jobs/${job.slug}`,
      languages: {
        'en-US': `https://rtnglobal.co/careers/jobs/${job.slug}`,
        'en-GB': `https://rtnglobal.co/careers/jobs/${job.slug}`,
        'fr': `https://rtnglobal.co/fr/careers/jobs/${job.slug}`,
        'de': `https://rtnglobal.co/de/careers/jobs/${job.slug}`,
        'es': `https://rtnglobal.co/es/careers/jobs/${job.slug}`,
      }
    },
    openGraph: {
      title: `${job.title} - RTN Global`,
      description: shortDescription,
      url: `https://rtnglobal.co/careers/jobs/${job.slug}`,
      siteName: 'RTN Global',
      locale: 'en_US',
      type: 'website',
      images: [
        {
          url: '/images/og/careers.jpg',
          width: 1200,
          height: 630,
          alt: `${job.title} at RTN Global`
        }
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${job.title} | RTN Global Careers`,
      description: shortDescription,
      images: ['/images/og/careers.jpg'],
      creator: '@rtnglobalofficial',
      site: '@rtnglobalofficial'
    },
    robots: {
      index: true,
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
      'contact:email': 'info@rtnglobal.site',
      'contact:phone': '+1 505 528 6780',
      'contact:address': '1209 MOUNTAIN ROAD PLNE, STE R, ALBUQUERQUE, NM, 87110, US',
    }
  };
} 