"use client";

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { SearchIcon } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

interface SearchBarProps {
  defaultValue?: string;
}

export default function SearchBar({ defaultValue = '' }: SearchBarProps) {
  const [searchValue, setSearchValue] = useState(defaultValue);
  const router = useRouter();

  const handleClear = () => {
    setSearchValue('');
    router.push('/careers');
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (searchValue.trim()) {
      router.push(`/careers?search=${encodeURIComponent(searchValue.trim())}`);
    } else {
      router.push('/careers');
    }
  };

  return (
    <div className="w-full">
      <form 
        className="flex flex-col md:flex-row gap-4 bg-white dark:bg-gray-800 p-2 rounded-xl shadow-lg" 
        onSubmit={handleSubmit}
      >
        <div className="relative flex-1">
          <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input 
            name="search" 
            placeholder="Search job titles, skills, or keywords..." 
            className="pl-10 h-12 flex-1 bg-transparent"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
          />
        </div>
        <Button type="submit" className="h-12 px-6 md:w-auto w-full">
          Find Opportunities
        </Button>
      </form>
      
      {searchValue && (
        <div className="mt-3 text-sm flex justify-center">
          <span className="text-muted-foreground">
            Searching for: <span className="font-medium text-foreground">{searchValue}</span> 
            <Button 
              variant="link" 
              className="p-0 h-auto ml-2" 
              onClick={handleClear}
            >
              Clear
            </Button>
          </span>
        </div>
      )}
    </div>
  );
} 