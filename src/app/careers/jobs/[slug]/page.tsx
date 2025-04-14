import { notFound } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { CalendarIcon, MapPinIcon, BriefcaseIcon, ExternalLinkIcon } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';

type Props = {
  params: { slug: string };
};

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

export default async function JobDetailsPage({ params }: Props) {
  const { slug } = params;
  const jobData = await getJobDetails(slug);

  if (!jobData?.job) {
    notFound();
  }

  const { job, relatedJobs = [] } = jobData;
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('en-US', {
      month: 'long',
      day: 'numeric',
      year: 'numeric'
    }).format(date);
  };

  // Generate JSON-LD structured data
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "JobPosting",
    "title": job.title,
    "description": job.description,
    "datePosted": job.publishedAt,
    "employmentType": job.type,
    "jobLocation": {
      "@type": "Place",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": job.location
      }
    },
    "hiringOrganization": {
      "@type": "Organization",
      "name": "RTN Global",
      "url": "https://rtnglobal.co/",
      "logo": "https://rtnglobal.co/logo.png",
      "founder": {
        "@type": "Person",
        "name": "Muhammad Tayyab"
      },
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "1209 MOUNTAIN ROAD PLNE, STE R",
        "addressLocality": "ALBUQUERQUE",
        "addressRegion": "NM",
        "postalCode": "87110",
        "addressCountry": "US"
      },
      "contactPoint": {
        "@type": "ContactPoint",
        "contactType": "customer service",
        "telephone": "+1 505 528 6780",
        "email": "info@rtnglobal.site"
      },
      "sameAs": [
        "https://www.instagram.com/rtnglobalofficial/",
        "https://www.threads.net/@rtnglobalofficial",
        "https://www.tiktok.com/@rtnglobalofficial",
        "https://web.facebook.com/people/RTN-Global/61573828870610/",
        "https://www.youtube.com/@RTNGlobal",
        "https://www.linkedin.com/in/rtnglobalofficial/"
      ]
    }
  };

  return (
    <main className="min-h-screen bg-background pb-16">
      {/* JSON-LD structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="py-12">
        <div className="container px-4 mx-auto">
          <div className="max-w-4xl mx-auto">
            <a 
              href="/careers" 
              className="text-primary hover:underline flex items-center mb-6"
            >
              ← Back to All Jobs
            </a>
            
            <div className="flex flex-col md:flex-row md:items-start justify-between mb-8">
              <div>
                <h1 className="text-3xl font-bold leading-tight md:text-4xl mb-3">{job.title}</h1>
                <div className="flex flex-wrap gap-3 mb-4">
                  <div className="flex items-center text-muted-foreground">
                    <BriefcaseIcon className="h-4 w-4 mr-1" />
                    <span>{job.type}</span>
                  </div>
                  <div className="flex items-center text-muted-foreground">
                    <MapPinIcon className="h-4 w-4 mr-1" />
                    <span>{job.location}</span>
                  </div>
                  <div className="flex items-center text-muted-foreground">
                    <CalendarIcon className="h-4 w-4 mr-1" />
                    <span>Posted {job.publishedAt ? formatDate(job.publishedAt) : 'Recently'}</span>
                  </div>
                </div>
                <Badge variant="outline" className="mb-4">{job.department}</Badge>
              </div>
              
              <div className="mt-4 md:mt-0">
                <Button asChild size="lg">
                  <a href={`/careers/apply/${job.slug}`}>Apply Now</a>
                </Button>
              </div>
            </div>
            
            <div className="bg-card rounded-lg border border-border shadow-sm overflow-hidden mb-10">
              <div className="p-6 md:p-8">
                <div className="prose prose-sm md:prose-base max-w-none">
                  <div className="mb-8">
                    <h2 className="text-xl font-semibold mb-4">Job Description</h2>
                    <div className="space-y-4">
                      {job.description.split('\n\n').map((paragraph, i) => (
                        <p key={i}>{paragraph}</p>
                      ))}
                    </div>
                  </div>
                  
                  {job.responsibilities && job.responsibilities.length > 0 && (
                    <div className="mb-8">
                      <h2 className="text-xl font-semibold mb-4">Responsibilities</h2>
                      <ul className="list-disc pl-5 space-y-2">
                        {job.responsibilities.map((item, index) => (
                          <li key={index}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                  
                  {job.requirements && job.requirements.length > 0 && (
                    <div className="mb-8">
                      <h2 className="text-xl font-semibold mb-4">Requirements</h2>
                      <ul className="list-disc pl-5 space-y-2">
                        {job.requirements.map((item, index) => (
                          <li key={index}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                  
                  {job.benefits && job.benefits.length > 0 && (
                    <div className="mb-8">
                      <h2 className="text-xl font-semibold mb-4">Benefits</h2>
                      <ul className="list-disc pl-5 space-y-2">
                        {job.benefits.map((item, index) => (
                          <li key={index}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                  
                  <div className="mt-8 flex justify-center">
                    <Button asChild size="lg">
                      <a href={`/careers/apply/${job.slug}`}>Apply for this position</a>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
            
            {relatedJobs && relatedJobs.length > 0 && (
              <div>
                <h2 className="text-xl font-semibold mb-4">Related Jobs</h2>
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                  {relatedJobs.map((relatedJob) => (
                    <Card key={relatedJob._id} className="p-4 hover:shadow-md transition-shadow">
                      <h3 className="font-medium mb-2">{relatedJob.title}</h3>
                      <p className="text-sm text-muted-foreground mb-2">Department: {relatedJob.department}</p>
                      <p className="text-sm text-muted-foreground mb-3">Location: {relatedJob.location}</p>
                      <Button variant="outline" asChild size="sm">
                        <a href={`/careers/jobs/${relatedJob.slug}`} className="inline-flex items-center">
                          View Details
                          <ExternalLinkIcon className="ml-2 h-3 w-3" />
                        </a>
                      </Button>
                    </Card>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
} 