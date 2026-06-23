'use client';

import Image from 'next/image';
import { useState } from 'react';
import { useIntersectionObserver } from '@/hooks/useIntersectionserver';

interface OptimizedImageProps {
  src: string;
  alt: string;
  fill?: boolean;
  width?: number;
  height?: number;
  className?: string;
  priority?: boolean;
  quality?: number;
  sizes?: string;
  objectFit?: 'contain' | 'cover' | 'fill' | 'none' | 'scale-down';
}

export default function OptimizedImage({
  src,
  alt,
  fill = false,
  width,
  height,
  className = '',
  priority = false,
  quality = 75,
  sizes = '100vw',
  objectFit = 'cover',
}: OptimizedImageProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  const { elementRef, isInView } = useIntersectionObserver({
    rootMargin: '100px',
    triggerOnce: true,
  });

  const fallbackSrc = '/images/placeholder.svg';

  return (
    <div
      ref={elementRef}
      className={`relative overflow-hidden bg-gray-100 ${
        fill ? 'h-full w-full' : ''
      } ${className}`}
      style={!fill && width && height ? { width, height } : undefined}
    >
      {/* Loading Skeleton */}
      {!isLoaded && !hasError && isInView && (
        <div className="absolute inset-0">
          <div className="h-full w-full bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 animate-shimmer" />
        </div>
      )}

      {/* LQIP (Low Quality Image Placeholder) */}
      {isInView && !isLoaded && !hasError && (
        <div
          className="absolute inset-0 bg-cover bg-center blur-xl scale-110"
          style={{
            backgroundImage: `url(${src}?w=50&q=10)`,
          }}
        />
      )}

      {/* Actual Image */}
      {isInView && (
        <Image
          src={hasError ? fallbackSrc : src}
          alt={alt}
          fill={fill}
          width={!fill ? width : undefined}
          height={!fill ? height : undefined}
          quality={quality}
          priority={priority}
          sizes={sizes}
          onLoad={() => setIsLoaded(true)}
          onError={() => setHasError(true)}
          className={`
            transition-all duration-500
            ${isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-105'}
            ${objectFit === 'cover' ? 'object-cover' : ''}
            ${objectFit === 'contain' ? 'object-contain' : ''}
            ${objectFit === 'fill' ? 'object-fill' : ''}
            ${objectFit === 'none' ? 'object-none' : ''}
            ${objectFit === 'scale-down' ? 'object-scale-down' : ''}
          `}
        />
      )}
    </div>
  );
}