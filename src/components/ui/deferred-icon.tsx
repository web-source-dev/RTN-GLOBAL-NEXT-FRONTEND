"use client";

import React, { Suspense } from 'react';

interface IconProps {
  size?: number;
  className?: string;
  [key: string]: unknown;
}

interface DeferredIconProps {
  Icon: React.ComponentType<IconProps>;
  fallback?: React.ReactNode;
  size?: number;
  className?: string;
  [key: string]: unknown;
}

/**
 * A component that renders React icons with proper lazy-loading and suspense fallback
 * to improve performance and reduce initial bundle size.
 */
export function DeferredIcon({ 
  Icon, 
  fallback = null, 
  size = 24, 
  className = "", 
  ...props 
}: DeferredIconProps) {
  return (
    <Suspense fallback={fallback}>
      <Icon size={size} className={className} {...props} />
    </Suspense>
  );
}

export default DeferredIcon; 