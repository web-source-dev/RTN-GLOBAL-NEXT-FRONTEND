'use client';

import React, { useState, useEffect } from 'react'
import Image, { ImageProps } from 'next/image'
import { cn } from '@/lib/utils'

// Get API URL from environment variables
const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://backend.mydomain.local:5000'

interface OptimizedImageProps extends Omit<ImageProps, 'src'> {
  src: string
  alt: string
  className?: string
  imgClassName?: string
}

export function OptimizedImage({
  src,
  alt,
  className,
  imgClassName,
  ...props
}: OptimizedImageProps) {
  const [imageSrc, setImageSrc] = useState<string>(src)
  const [error, setError] = useState(false)

  // Process image source to ensure it has the correct URL prefix
  useEffect(() => {
    if (!src) {
      setImageSrc('/images/placeholder.jpg')
      return
    }

    // If the src is already a full URL or data URL, use it as-is
    if (src.startsWith('http') || src.startsWith('data:')) {
      setImageSrc(src)
      return
    }

    // If the src starts with a slash and is from the backend
    if (src.startsWith('/uploads/')) {
      setImageSrc(`${API_URL}${src}`)
      return
    }

    // Otherwise, use the src as-is (could be a relative path)
    setImageSrc(src)
  }, [src])

  const handleError = () => {
    setError(true)
    setImageSrc('/images/placeholder.jpg')
  }

  return (
    <div className={cn('relative overflow-hidden w-full h-full', className)}>
      <Image 
        src={error ? '/images/placeholder.jpg' : imageSrc}
        alt={alt || 'Image'}
        className={cn('object-cover transition-all', imgClassName)}
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        quality={85}
        priority={props.priority}
        onError={handleError}
        {...props}
      />
    </div>
  )
} 