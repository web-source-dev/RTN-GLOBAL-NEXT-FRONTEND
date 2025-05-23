import { Suspense } from 'react';
import JobApplicationForm from '@/components/forms/job-application-form';
import { notFound } from 'next/navigation';

// Define params type for better TypeScript support
type PageParams = {
  slug: string;
};

async function getJobDetails(slug: string) {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/careers/jobs/${slug}`, {
      next: { revalidate: 60 } // Revalidate every minute
    });

    if (!response.ok) {
      return null;
    }

    return await response.json();
  } catch (error) {
    console.error('Error fetching job details:', error);
    return null;
  }
}

// Use the params destructuring directly without a separate Props type
export default async function JobApplicationPage({ 
  params 
}: { 
  params: PageParams;
  searchParams?: Record<string, string | string[] | undefined>;
}) {
  const { slug } = params;
  const jobData = await getJobDetails(slug);

  if (!jobData?.job) {
    notFound();
  }

  const { job } = jobData;
  
  // Generate JSON-LD structured data
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": `Apply for ${job.title} - RTN Global`,
    "description": `Submit your application for the ${job.title} position at RTN Global`,
    "url": `https://rtnglobal.co/careers/apply/${slug}`,
    "publisher": {
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
    <main className="min-h-screen bg-background">
      {/* JSON-LD structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="py-12">
        <div className="container px-4 mx-auto">
          <div className="max-w-4xl mx-auto">
            <div className="mb-8">
              <a 
                href={`/careers/jobs/${job.slug}`} 
                className="text-primary hover:underline flex items-center mb-4"
              >
                ← Back to Job Details
              </a>
              <h1 className="text-3xl font-bold leading-tight md:text-4xl">Apply for {job.title}</h1>
              <p className="mt-4 text-muted-foreground">
                Department: {job.department} | Location: {job.location} | Job Type: {job.type}
              </p>
            </div>
            
            <div className="bg-card rounded-lg border border-border shadow-sm overflow-hidden">
              <div className="p-6 md:p-8">
                <Suspense fallback={<div className="p-8 text-center">Loading application form...</div>}>
                  <JobApplicationForm 
                    jobId={job._id} 
                    jobTitle={job.title}
                    department={job.department}
                  />
                </Suspense>
              </div>
            </div>
            
            <div className="mt-12">
              <h2 className="text-xl font-semibold mb-4">Why Work With Us?</h2>
              <div className="grid gap-6 md:grid-cols-3">
                <div className="p-4 border border-border rounded-lg">
                  <h3 className="font-medium mb-2">Innovative Projects</h3>
                  <p className="text-sm text-muted-foreground">Work on cutting-edge projects that push the boundaries of digital technology.</p>
                </div>
                <div className="p-4 border border-border rounded-lg">
                  <h3 className="font-medium mb-2">Professional Growth</h3>
                  <p className="text-sm text-muted-foreground">Continuous learning opportunities and career advancement paths for all team members.</p>
                </div>
                <div className="p-4 border border-border rounded-lg">
                  <h3 className="font-medium mb-2">Collaborative Culture</h3>
                  <p className="text-sm text-muted-foreground">Join a supportive team that values diverse perspectives and creative thinking.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
} 