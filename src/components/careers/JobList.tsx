"use client";

import { Button } from '@/components/ui/button';
import { 
  Card, 
  CardContent, 
  CardFooter, 
  CardHeader, 
  CardTitle
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  MapPinIcon, 
  BriefcaseIcon, 
  ChevronRightIcon, 
  SearchIcon,
  CalendarIcon
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { useRouter } from 'next/navigation';

interface Job {
  _id: string;
  slug: string;
  title: string;
  description: string;
  department: string;
  location: string;
  type: string;
  experienceLevel: string;
  featured: boolean;
  publishedAt: string;
  createdAt: string;
}

interface JobListProps {
  jobs: Job[];
  search?: string;
  department?: string;
  type?: string;
}

export default function JobList({ jobs = [], search, department, type }: JobListProps) {
  const router = useRouter();
  
  const handleResetFilters = () => {
    router.push('/careers');
  };
  
  return (
    <div className="w-full">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Open Positions</h2>
        <div className="bg-muted/40 rounded-full px-3 py-1 text-sm font-medium">
          {jobs.length} {jobs.length === 1 ? 'job' : 'jobs'} found
        </div>
      </div>
      
      {jobs.length > 0 ? (
        <div className="grid gap-6">
          {jobs.map((job) => (
            <Card 
              key={job._id} 
              className={cn(
                "overflow-hidden hover:shadow-md transition-all duration-300 border",
                job.featured ? "border-primary/30 bg-primary/5" : ""
              )}
            >
              <CardHeader className="pb-2">
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-xl mb-1 text-primary hover:text-primary/80 transition-colors">
                      <a href={`/careers/jobs/${job.slug}`}>{job.title}</a>
                    </CardTitle>
                    <div className="flex flex-wrap gap-2 mb-1">
                      <Badge variant="outline" className="font-normal">
                        {job.department}
                      </Badge>
                      {job.featured && (
                        <Badge className="bg-primary text-primary-foreground font-normal">
                          Featured
                        </Badge>
                      )}
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="pb-3 space-y-3">
                <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted-foreground">
                  <div className="flex items-center">
                    <MapPinIcon className="h-4 w-4 mr-1.5 text-muted-foreground/70" />
                    <span>{job.location}</span>
                  </div>
                  <div className="flex items-center">
                    <BriefcaseIcon className="h-4 w-4 mr-1.5 text-muted-foreground/70" />
                    <span>{job.type}</span>
                  </div>
                  <div className="flex items-center">
                    <CalendarIcon className="h-4 w-4 mr-1.5 text-muted-foreground/70" />
                    <span>Posted {new Date(job.publishedAt || job.createdAt).toLocaleDateString('en-US', { 
                      month: 'short', 
                      day: 'numeric',
                      year: 'numeric'
                    })}</span>
                  </div>
                </div>
                <p className="line-clamp-2 text-muted-foreground">{job.description.substring(0, 180)}...</p>
              </CardContent>
              <CardFooter className="flex justify-between border-t bg-muted/20 px-6 py-3">
                <p className="text-sm font-medium">Experience: {job.experienceLevel}</p>
                <Button 
                  variant="ghost" 
                  size="sm" 
                  className="hover:bg-primary/10 hover:text-primary transition-colors"
                  asChild
                >
                  <a href={`/careers/jobs/${job.slug}`} className="flex items-center">
                    View Details
                    <ChevronRightIcon className="ml-1 h-4 w-4" />
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      ) : (
        <Card className="border-dashed border-2">
          <CardContent className="text-center py-12">
            <div className="mx-auto w-16 h-16 rounded-full bg-muted flex items-center justify-center mb-4">
              <SearchIcon className="h-8 w-8 text-muted-foreground/60" />
            </div>
            <h3 className="text-xl font-medium mb-2">No jobs found</h3>
            <p className="text-muted-foreground mb-6 max-w-md mx-auto">
              {search || department || type ? 
                "No jobs match your search criteria. Try adjusting your filters or search terms." : 
                "There are currently no open positions. Please check back later."}
            </p>
            {(search || department || type) && (
              <Button 
                variant="outline"
                onClick={handleResetFilters}
              >
                Reset Filters
              </Button>
            )}
          </CardContent>
        </Card>
      )}
    </div>
  );
} 