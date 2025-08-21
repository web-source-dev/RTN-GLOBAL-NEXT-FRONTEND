import SearchBar from '@/components/careers/SearchBar';
import FilterSidebar from '@/components/careers/FilterSidebar';
import JobList from '@/components/careers/JobList';
import { Button } from '@/components/ui/button';
import { OptimizedImage } from '@/components/ui/optimized-image';

async function getJobs() {
  try {
    // Add a cache-busting timestamp to prevent stale data
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/careers/jobs?t=${Date.now()}`, {
      next: { revalidate: 60 } // Revalidate every minute 
    });

    if (!response.ok) {
      console.error('API response error:', response.status, response.statusText);
      return { jobs: [], departments: [], jobTypes: [] };
    }

    return await response.json();
  } catch (error) {
    console.error('Error fetching jobs:', error);
    return { jobs: [], departments: [], jobTypes: [] };
  }
}

export default async function CareersPage({
  searchParams
}: {
  searchParams: { [key: string]: string | string[] | undefined }
}) {
  const { jobs, departments, jobTypes } = await getJobs();
  
  // Filter parameters
  const department = typeof searchParams.department === 'string' ? searchParams.department : '';
  const type = typeof searchParams.type === 'string' ? searchParams.type : '';
  const search = typeof searchParams.search === 'string' ? searchParams.search : '';

  // Generate JSON-LD structured data
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "Careers at RTN Global",
    "description": "Discover career opportunities at RTN Global. Join our team and grow your skills in a collaborative environment.",
    "url": "https://rtnglobal.site/careers",
    "publisher": {
      "@type": "Organization",
      "name": "RTN Global",
      "url": "https://rtnglobal.site/",
      "logo": "https://rtnglobal.site/logo.png",
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
        "telephone": "+1 (505) 528 0265",
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

      {/* Hero Section with search */}
      <section className="relative bg-gradient-to-br from-primary/10 via-primary/5 to-background py-20 md:py-28">
        {/* Background Image */}
        <div className="absolute inset-0">
          <OptimizedImage
            src="/images/hero/careers-hero.jpg"
            alt="Careers at RTN Global"
            fill
            className="object-cover opacity-20"
            priority={true}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-primary/5 to-background"></div>
        </div>
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        <div className="container px-4 mx-auto relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">Join Our Team</h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Discover opportunities to grow your career in a collaborative and innovative environment where your skills and ideas can make a real impact.
            </p>
            
            <SearchBar defaultValue={search} />
          </div>
        </div>
      </section>

      {/* Main content with filters and job listings */}
      <section className="py-16">
        <div className="container px-4 mx-auto">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Sidebar with filters */}
            <div className="lg:w-72">
              <FilterSidebar 
                departments={departments || []} 
                jobTypes={jobTypes || []} 
                currentDepartment={department}
                currentType={type}
                currentSearch={search}
              />
            </div>
              
            {/* Job listings */}
            <div className="flex-1">
              <JobList 
                jobs={jobs || []} 
                search={search}
                department={department}
                type={type}
              />
            </div>
          </div>
        </div>
      </section>

      {/* General application CTA */}
      <section className="bg-gradient-to-b from-muted/50 to-muted py-16">
        <div className="container px-4 mx-auto text-center">
          <h2 className="text-2xl font-bold mb-4">Don&apos;t see a job that fits your skills?</h2>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            We&apos;re always interested in connecting with talented professionals. 
            Send us your resume and we&apos;ll keep you in mind for future opportunities.
          </p>
          <Button 
            size="lg"
            className="px-8 py-6 h-auto text-base shadow-lg hover:shadow-xl transition-all"
            asChild
          >
            <a href="/contact?subject=General%20Application">Submit General Application</a>
          </Button>
        </div>
      </section>
    </main>
  );
}