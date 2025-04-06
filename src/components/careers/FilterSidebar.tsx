"use client";

import { Button } from '@/components/ui/button';
import { 
  Card, 
  CardHeader, 
  CardTitle,
  CardDescription, 
  CardContent 
} from '@/components/ui/card';
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from '@/components/ui/select';
import { FilterIcon, BuildingIcon, BriefcaseIcon, TrendingUpIcon } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';

interface FilterSidebarProps {
  departments: string[];
  jobTypes: string[];
  currentDepartment?: string;
  currentType?: string;
  currentSearch?: string;
}

export default function FilterSidebar({ 
  departments = [], 
  jobTypes = [], 
  currentDepartment = 'all', 
  currentType = 'all',
  currentSearch = ''
}: FilterSidebarProps) {
  const [department, setDepartment] = useState(currentDepartment);
  const [type, setType] = useState(currentType);
  const router = useRouter();

  // Update local state when props change (e.g., when URL parameters change)
  useEffect(() => {
    setDepartment(currentDepartment || 'all');
    setType(currentType || 'all');
  }, [currentDepartment, currentType]);

  const handleClearAll = () => {
    setDepartment('all');
    setType('all');
    
    // Preserve search if it exists
    if (currentSearch) {
      router.push(`/careers?search=${encodeURIComponent(currentSearch)}`);
    } else {
      router.push('/careers');
    }
  };

  const handleApplyFilters = (e: React.FormEvent) => {
    e.preventDefault();
    
    const params = new URLSearchParams();
    if (department && department !== 'all') params.set('department', department);
    if (type && type !== 'all') params.set('type', type);
    if (currentSearch) params.set('search', currentSearch);
    
    const queryString = params.toString();
    router.push(`/careers${queryString ? `?${queryString}` : ''}`);
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader className="pb-3">
          <div className="flex items-center justify-between">
            <CardTitle className="text-lg font-medium flex items-center">
              <FilterIcon className="mr-2 h-4 w-4" />
              Filters
            </CardTitle>
            {(department !== 'all' || type !== 'all') && (
              <Button 
                variant="ghost" 
                size="sm" 
                className="h-8 text-xs"
                onClick={handleClearAll}
              >
                Clear All
              </Button>
            )}
          </div>
          <CardDescription>
            Narrow down your job search
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form className="space-y-5" onSubmit={handleApplyFilters}>            
            <div className="space-y-2">
              <label className="text-sm font-medium flex items-center">
                <BuildingIcon className="mr-2 h-3.5 w-3.5" />
                Department
              </label>
              <Select 
                value={department} 
                onValueChange={setDepartment}
              >
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="All Departments" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Departments</SelectItem>
                  {departments.map((dept: string) => (
                    <SelectItem key={dept} value={dept}>
                      {dept}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            
            <div className="space-y-2">
              <label className="text-sm font-medium flex items-center">
                <BriefcaseIcon className="mr-2 h-3.5 w-3.5" />
                Job Type
              </label>
              <Select 
                value={type} 
                onValueChange={setType}
              >
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="All Types" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Types</SelectItem>
                  {jobTypes.map((jobType: string) => (
                    <SelectItem key={jobType} value={jobType}>
                      {jobType}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            
            <Button type="submit" className="w-full mt-4">
              Apply Filters
            </Button>
          </form>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="text-lg font-medium">Why Work With Us?</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-3">
            <li className="flex items-start">
              <div className="mr-2 mt-0.5 h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center">
                <TrendingUpIcon className="h-3 w-3 text-primary" />
              </div>
              <span className="text-sm">Flexible work arrangements</span>
            </li>
            <li className="flex items-start">
              <div className="mr-2 mt-0.5 h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center">
                <TrendingUpIcon className="h-3 w-3 text-primary" />
              </div>
              <span className="text-sm">Competitive compensation</span>
            </li>
            <li className="flex items-start">
              <div className="mr-2 mt-0.5 h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center">
                <TrendingUpIcon className="h-3 w-3 text-primary" />
              </div>
              <span className="text-sm">Professional development</span>
            </li>
            <li className="flex items-start">
              <div className="mr-2 mt-0.5 h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center">
                <TrendingUpIcon className="h-3 w-3 text-primary" />
              </div>
              <span className="text-sm">Collaborative culture</span>
            </li>
            <li className="flex items-start">
              <div className="mr-2 mt-0.5 h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center">
                <TrendingUpIcon className="h-3 w-3 text-primary" />
              </div>
              <span className="text-sm">Modern technology stack</span>
            </li>
          </ul>
        </CardContent>
      </Card>
    </div>
  );
} 