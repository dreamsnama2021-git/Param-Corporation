'use client';

import { useState, useEffect, useCallback } from 'react';

interface UseImageLoaderOptions {
  src: string;
  fallbackSrc?: string;
  lazyBoundary?: string;
}

export function useImageLoader({ 
  src, 
  fallbackSrc = '/images/placeholder.svg',
  lazyBoundary = '200px'
}: UseImageLoaderOptions) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const [currentSrc, setCurrentSrc] = useState(
    `${src}?w=50&q=10&blur=50`
  );

  const handleLoad = useCallback(() => {
    setIsLoaded(true);
    setCurrentSrc(src);
  }, [src]);

  const handleError = useCallback(() => {
    setHasError(true);
    setCurrentSrc(fallbackSrc);
    console.warn(`Failed to load image: ${src}`);
  }, [src, fallbackSrc]);

  // Progressive loading for better UX
  useEffect(() => {
    const img = new Image();
    img.onload = handleLoad;
    img.onerror = handleError;
    img.src = src;

    return () => {
      img.onload = null;
      img.onerror = null;
    };
  }, [src, handleLoad, handleError]);

  return {
    currentSrc,
    isLoaded,
    hasError,
    isInView,
    setIsInView,
  };
}