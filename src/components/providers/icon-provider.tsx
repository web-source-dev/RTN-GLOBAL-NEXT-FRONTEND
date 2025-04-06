"use client";

import React, { createContext, useContext, Suspense, useState, useEffect } from 'react';
import { createDeferredIconComponent } from '@/lib/utils';

// Context to hold dynamically loaded icons
type IconContextType = {
  getIcon: (iconLibrary: string, iconName: string) => React.ComponentType<any> | null;
  isLoaded: boolean;
};

const IconContext = createContext<IconContextType>({
  getIcon: () => null,
  isLoaded: false,
});

// Placeholder component while icon is loading
const IconPlaceholder = ({ size = 24 }: { size?: number }) => (
  <div 
    style={{ 
      width: size, 
      height: size, 
      display: 'inline-block',
      background: 'rgba(0,0,0,0.05)',
      borderRadius: '4px'
    }}
  />
);

export const IconProvider = ({ children }: { children: React.ReactNode }) => {
  const [iconCache, setIconCache] = useState<Record<string, React.ComponentType<any>>>({});
  const [isLoaded, setIsLoaded] = useState(false);

  // Load common icons immediately
  useEffect(() => {
    // Flag as loaded after a small delay to avoid blocking LCP
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 200);
    
    return () => clearTimeout(timer);
  }, []);

  const getIcon = (iconLibrary: string, iconName: string) => {
    const cacheKey = `${iconLibrary}/${iconName}`;
    
    if (iconCache[cacheKey]) {
      return iconCache[cacheKey];
    }
    
    // Create a deferred component for this icon
    const DeferredIcon = createDeferredIconComponent(() => {
      // Dynamically import based on library
      switch (iconLibrary) {
        case 'si':
          return import('react-icons/si').then(mod => ({ default: mod[iconName] }));
        case 'fa':
          return import('react-icons/fa').then(mod => ({ default: mod[iconName] }));
        case 'io':
          return import('react-icons/io').then(mod => ({ default: mod[iconName] }));
        case 'ai':
          return import('react-icons/ai').then(mod => ({ default: mod[iconName] }));
        default:
          return Promise.resolve({ default: () => null });
      }
    });
    
    // Cache the component
    setIconCache(prev => ({
      ...prev,
      [cacheKey]: DeferredIcon
    }));
    
    return DeferredIcon;
  };
  
  return (
    <IconContext.Provider value={{ getIcon, isLoaded }}>
      {children}
    </IconContext.Provider>
  );
};

// Hook to use icons
export const useIcon = (iconLibrary: string, iconName: string, fallback: React.ReactNode = null) => {
  const { getIcon, isLoaded } = useContext(IconContext);
  const Icon = getIcon(iconLibrary, iconName);
  
  if (!Icon) return null;
  
  return (
    <Suspense fallback={fallback || <IconPlaceholder />}>
      <Icon />
    </Suspense>
  );
};

// Example usage:
// const SiReactIcon = useIcon('si', 'SiReact'); 