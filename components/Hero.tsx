"use client";

import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useState, useCallback, useRef } from "react";

// ─── Types & Data ─────────────────────────────────────
interface HeroSlide {
  desktop: string;
  tablet: string;
  mobile: string;
  alt: string;
}

const HERO_SLIDES: HeroSlide[] = [
  {
    desktop: "https://pub-735dbd7583d74ad5949115d6fdf77023.r2.dev/Banners/Home%20Banner/Home%20Banners/HOME%20BANNER%20Desktop%20%201.png",
    tablet: "https://pub-735dbd7583d74ad5949115d6fdf77023.r2.dev/Banners/Home%20Banner/Home%20Banners/Home%20Banner%20Tablet%201.png",
    mobile: "https://pub-735dbd7583d74ad5949115d6fdf77023.r2.dev/Banners/Home%20Banner/Mobile%20Home%20Banner%201.png",
    alt: "Corporate Gifts",
  },
  {
    desktop: "https://pub-735dbd7583d74ad5949115d6fdf77023.r2.dev/Banners/Home%20Banner/Home%20Banners/Home%20Banner%20Desktop%202.png",
    tablet: "https://pub-735dbd7583d74ad5949115d6fdf77023.r2.dev/Banners/Home%20Banner/Home%20Banners/Home%20Banner%20Tablet%202.png",
    mobile: "https://pub-735dbd7583d74ad5949115d6fdf77023.r2.dev/Banners/Home%20Banner/Home%20Banners/Home%20Banner%20Mobile%202.png",
    alt: "Branding",
  },
  {
  desktop: "https://pub-735dbd7583d74ad5949115d6fdf77023.r2.dev/Banners/Home%20Banner/Home%20Banners/Home%20Banner%20Desktop%203.png",
    tablet: "https://pub-735dbd7583d74ad5949115d6fdf77023.r2.dev/Banners/Home%20Banner/Home%20Banners/Home%20Banner%20Tablet%203.png",
    mobile: "https://pub-735dbd7583d74ad5949115d6fdf77023.r2.dev/Banners/Home%20Banner/Home%20Banners/Home%20Banner%20Mobile%203.png",
      alt: "Pharmaceutical Gifts",
  },
  {
    desktop: "https://pub-735dbd7583d74ad5949115d6fdf77023.r2.dev/Banners/Home%20Banner/Home%20Banners/Home%20Banner%20Desktop%204.png",
    tablet: "https://pub-735dbd7583d74ad5949115d6fdf77023.r2.dev/Banners/Home%20Banner/Home%20Banners/Home%20Banner%20Tablet%204.png",
    mobile: "https://pub-735dbd7583d74ad5949115d6fdf77023.r2.dev/Banners/Home%20Banner/Home%20Banners/Home%20Banner%20Mobile%204.png",
    alt: "Pharmaceutical Gifts",
  },
  {
    desktop: "https://pub-735dbd7583d74ad5949115d6fdf77023.r2.dev/Banners/Home%20Banner/Home%20Banners/Home%20Banner%20Desktop%205.png",
    tablet: "https://pub-735dbd7583d74ad5949115d6fdf77023.r2.dev/Banners/Home%20Banner/Home%20Banners/Home%20Banner%20Tablet%205.png",
    mobile: "https://pub-735dbd7583d74ad5949115d6fdf77023.r2.dev/Banners/Home%20Banner/Home%20Banners/Home%20Banner%20Mobile%205.png",
    alt: "Pharmaceutical Gifts",
  },
];

// ─── Responsive Image Component ───────────────────────
function ResponsiveSlideImage({ slide, priority = false }: { slide: HeroSlide; priority?: boolean }) {
  return (
    <picture>
      {/* Mobile: up to 640px */}
      <source
        media="(max-width: 640px)"
        srcSet={slide.mobile}
      />
      {/* Tablet: 641px to 1024px */}
      <source
        media="(min-width: 641px) and (max-width: 990px)"
        srcSet={slide.tablet}
      />
      {/* Desktop: 1025px and above */}
      <source
        media="(min-width: 1025px)"
        srcSet={slide.desktop}
      />
      {/* Fallback image */}
      <Image
        src={slide.desktop}
        alt={slide.alt}
        fill
        className="md:object-cover object-bottom pointer-events-none"
        priority={priority}
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 100vw"
        quality={90}
      />
    </picture>
  );
}

// ─── Component ───────────────────────────────────────
export default function HeroWithStats() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [translateX, setTranslateX] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const containerRef = useRef<HTMLDivElement>(null);
  const autoPlayRef = useRef<NodeJS.Timeout | null>(null);
  const mountedRef = useRef(true);

  // Create infinite array by duplicating slides 3 times
  const infiniteSlides = [...HERO_SLIDES, ...HERO_SLIDES, ...HERO_SLIDES];
  const originalLength = HERO_SLIDES.length;
  const middleStart = originalLength;
  const middleEnd = originalLength * 2;

  // Get current visible slide (actual index without the infinite wrapper)
  const getRealIndex = useCallback((displayIndex: number) => {
    return ((displayIndex - middleStart) % originalLength + originalLength) % originalLength;
  }, [originalLength, middleStart]);

  const [displayIndex, setDisplayIndex] = useState(middleStart);
  const realIndex = getRealIndex(displayIndex);

  // Jump to middle without animation when needed
  const resetPosition = useCallback((newDisplayIndex: number) => {
    setIsTransitioning(false);
    setDisplayIndex(newDisplayIndex);
    // Force reflow then re-enable transition
    setTimeout(() => {
      if (mountedRef.current) {
        setIsTransitioning(true);
      }
    }, 50);
  }, []);

  // Navigate to next slide
  const nextSlide = useCallback(() => {
    const newIndex = displayIndex + 1;
    setDisplayIndex(newIndex);
    
    // Check if we need to reset position
    if (newIndex >= middleEnd) {
      setTimeout(() => {
        if (mountedRef.current) {
          resetPosition(middleStart);
        }
      }, 700);
    }
  }, [displayIndex, middleStart, middleEnd, resetPosition]);

  // Navigate to previous slide
  const prevSlide = useCallback(() => {
    const newIndex = displayIndex - 1;
    setDisplayIndex(newIndex);
    
    // Check if we need to reset position
    if (newIndex < middleStart - 1) {
      setTimeout(() => {
        if (mountedRef.current) {
          resetPosition(middleEnd - 1);
        }
      }, 700);
    }
  }, [displayIndex, middleStart, middleEnd, resetPosition]);

  // Auto-play
  const startAutoPlay = useCallback(() => {
    if (autoPlayRef.current) clearInterval(autoPlayRef.current);
    autoPlayRef.current = setInterval(() => {
      nextSlide();
    }, 5000);
  }, [nextSlide]);

  const stopAutoPlay = useCallback(() => {
    if (autoPlayRef.current) {
      clearInterval(autoPlayRef.current);
      autoPlayRef.current = null;
    }
  }, []);

  // Handle drag/swipe
  const handleDragStart = (e: React.MouseEvent | React.TouchEvent) => {
    stopAutoPlay();
    setIsDragging(true);
    const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
    setStartX(clientX);
    setIsTransitioning(false);
  };

  const handleDragMove = (e: React.MouseEvent | React.TouchEvent) => {
    if (!isDragging) return;
    const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
    const diff = clientX - startX;
    setTranslateX(diff);
  };

  const handleDragEnd = (e: React.MouseEvent | React.TouchEvent) => {
    if (!isDragging) {
      startAutoPlay();
      return;
    }
    
    setIsDragging(false);
    setIsTransitioning(true);
    
    const clientX = 'touches' in e ? e.changedTouches[0].clientX : e.clientX;
    const diff = clientX - startX;
    
    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        prevSlide();
      } else {
        nextSlide();
      }
    }
    
    setTranslateX(0);
    startAutoPlay();
  };

  // Set up auto-play on mount
  useEffect(() => {
    mountedRef.current = true;
    startAutoPlay();
    
    return () => {
      mountedRef.current = false;
      stopAutoPlay();
    };
  }, [startAutoPlay, stopAutoPlay]);

  // Calculate transform style
  const getTransformStyle = () => {
    if (isDragging) {
      return `translateX(calc(-${displayIndex * 100}% + ${translateX}px))`;
    }
    return `translateX(-${displayIndex * 100}%)`;
  };

  return (
    <div className="flex flex-col overflow-hidden">
      <section 
        className="relative w-full h-[75vh] sm:h-[60vh] md:h-[55vh] lg:h-[90vh] xl:h-[80vh] 2xl:h-[95vh] overflow-visible bg-black"
        onMouseEnter={stopAutoPlay}
        onMouseLeave={startAutoPlay}
      >
        {/* Slides Container */}
        <div 
          ref={containerRef}
          className="relative w-full h-full flex"
          style={{
            transform: getTransformStyle(),
            transition: isTransitioning && !isDragging ? 'transform 700ms cubic-bezier(0.4, 0, 0.2, 1)' : 'none',
            cursor: isDragging ? 'grabbing' : 'grab',
          }}
          onMouseDown={handleDragStart}
          onMouseMove={handleDragMove}
          onMouseUp={handleDragEnd}
          onMouseLeave={handleDragEnd}
          onTouchStart={handleDragStart}
          onTouchMove={handleDragMove}
          onTouchEnd={handleDragEnd}
        >
          {infiniteSlides.map((slide, idx) => (
            <div
              key={`${idx}-${slide.desktop}`}
              className="relative w-full h-full flex-shrink-0"
            >
              <ResponsiveSlideImage 
                slide={slide} 
                priority={idx >= middleStart && idx < middleStart + 2}
              />
            </div>
          ))}
        </div>

        {/* Preload all images for all devices */}
        <div className="hidden">
          {HERO_SLIDES.map((slide, idx) => (
            <div key={`preload-${idx}`}>
              <Image
                src={slide.desktop}
                alt="preload"
                width={1}
                height={1}
                priority
              />
              <Image
                src={slide.tablet}
                alt="preload"
                width={1}
                height={1}
                priority
              />
              <Image
                src={slide.mobile}
                alt="preload"
                width={1}
                height={1}
                priority
              />
            </div>
          ))}
        </div>

        {/* Navigation arrows */}
        <button 
          onClick={(e) => {
            e.stopPropagation();
            stopAutoPlay();
            prevSlide();
            startAutoPlay();
          }}
          className="absolute left-2 sm:left-4 md:left-6 lg:left-8 top-1/2 -translate-y-1/2 
          w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 xl:w-16 xl:h-16 
          bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center 
          text-white hover:bg-white/40 hover:scale-110 transition-all duration-300
          border border-white/30 shadow-lg group "
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-7 lg:h-7 xl:w-8 xl:h-8 group-hover:-translate-x-1 transition-transform" />
        </button>

        <button 
          onClick={(e) => {
            e.stopPropagation();
            stopAutoPlay();
            nextSlide();
            startAutoPlay();
          }}
          className="absolute right-2 sm:right-4 md:right-6 lg:right-8 top-1/2 -translate-y-1/2 
          w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 xl:w-16 xl:h-16 
          bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center 
          text-white hover:bg-white/40 hover:scale-110 transition-all duration-300
          border border-white/30 shadow-lg group "
          aria-label="Next slide"
        >
          <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-7 lg:h-7 xl:w-8 xl:h-8 group-hover:translate-x-1 transition-transform" />
        </button>

        {/* Dots navigation */}
        <div className="absolute bottom-4 sm:bottom-6 md:bottom-8 lg:bottom-10 left-1/2 -translate-x-1/2 flex gap-2 sm:gap-3 ">
          {HERO_SLIDES.map((_, i) => (
            <button
              key={i}
              onClick={(e) => {
                e.stopPropagation();
                stopAutoPlay();
                const targetIndex = middleStart + i;
                setDisplayIndex(targetIndex);
                setIsTransitioning(true);
                startAutoPlay();
              }}
              className={`rounded-full transition-all duration-300 ${
                realIndex === i
                  ? "w-6 sm:w-8 md:w-10 lg:w-12 h-2 sm:h-2.5 md:h-3 bg-white shadow-lg"
                  : "w-2 sm:w-2.5 md:w-3 h-2 sm:h-2.5 md:h-3 bg-white/60 hover:bg-white/80 hover:scale-110"
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>

        {/* Gradient overlays */}
        <div className="absolute inset-y-0 left-0 w-16 sm:w-24 md:w-32 bg-gradient-to-r from-black/20 to-transparent pointer-events-none " />
        <div className="absolute inset-y-0 right-0 w-16 sm:w-24 md:w-32 bg-gradient-to-l from-black/20 to-transparent pointer-events-none " />
        <div className="absolute bottom-0 left-0 right-0 h-16 sm:h-24 md:h-32 bg-gradient-to-t from-black/30 to-transparent pointer-events-none " />
      </section>
    </div>
  );
}
