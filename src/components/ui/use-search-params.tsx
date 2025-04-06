"use client";

import React, { Suspense, ReactNode, useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";

// A component to pass search params down to children
type SearchParamsProviderProps = {
  children: (searchParams: URLSearchParams) => ReactNode;
};

function SearchParamsProvider({ children }: SearchParamsProviderProps) {
  const searchParams = useSearchParams();
  return <>{children(searchParams)}</>;
}

// The wrapper component with built-in Suspense
export function WithSearchParams({ 
  children, 
  fallback = <div>Loading...</div> 
}: { 
  children: (searchParams: URLSearchParams) => ReactNode;
  fallback?: ReactNode;
}) {
  return (
    <Suspense fallback={fallback}>
      <SearchParamsProvider>
        {(searchParams) => children(searchParams)}
      </SearchParamsProvider>
    </Suspense>
  );
}

// A simpler hook wrapper that returns a null searchParams until loaded
export function useSafeSearchParams() {
  const [params, setParams] = useState<URLSearchParams | null>(null);
  
  // This component will be client-rendered
  return (
    <Suspense fallback={null}>
      <SearchParamsLoader setParams={setParams} />
      {params}
    </Suspense>
  );
}

// Helper component to load search params
function SearchParamsLoader({ setParams }: { setParams: (params: URLSearchParams) => void }) {
  const searchParams = useSearchParams();
  useEffect(() => {
    setParams(searchParams);
  }, [searchParams, setParams]);
  return null;
} 