"use client";

import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useState, useCallback, useRef } from "react";

// ─── Types & Data ─────────────────────────────────────
interface HeroSlide {
  desktopImage: string;
  mobileImage: string;
  tabletImage?: string; // Optional tablet-specific image
  alt: string;
}

const HERO_SLIDES: HeroSlide[] = [
  {
    desktopImage: "/banner/home1.png",
    mobileImage: "/banner/mobile/home1.png",
    tabletImage: "/banner/tablet/home1.png", // Add tablet-specific image if needed
    alt: "Corporate Gifts",
  },
  {
    desktopImage: "/banner/home2.png",
    mobileImage: "/banner/mobile/home2.png",
    tabletImage: "/banner/tablet/home2.png",
    alt: "Branding",
  },
  {
    desktopImage: "https://pub-735dbd7583d74ad5949115d6fdf77023.r2.dev/Banners/Home%20Banner/Desktop%20Home%20Banner%203.jpeg",
    mobileImage: "https://pub-735dbd7583d74ad5949115d6fdf77023.r2.dev/Banners/Home%20Banner/Mobile%20Home%20Banner%203.jpeg",
    tabletImage: "https://pub-735dbd7583d74ad5949115d6fdf77023.r2.dev/Banners/Home%20Banner/Tablet%20Home%20Banner%203.jpeg", // Optional
    alt: "Pharmaceutical Gifts",
  },
  {
    desktopImage: "/banner/home4.png",
    mobileImage: "/banner/mobile/home4.png",
    tabletImage: "/banner/tablet/home4.png",
    alt: "Pharmaceutical Gifts",
  },
  {
    desktopImage: "/banner/home5.png",
    mobileImage: "/banner/mobile/home5.png",
    tabletImage: "/banner/tablet/home5.png",
    alt: "Pharmaceutical Gifts",
  },
];

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
      {/*
        ─────────────────────────────────────────────────────────────────
        HERO SECTION HEIGHT ADJUSTMENT GUIDE (INCLUDING TABLET)
        ─────────────────────────────────────────────────────────────────
        
        The section height is controlled by the `h-[XX]` classes below.
        Adjust these values based on your design requirements:
        
        COMPLETE BREAKPOINT BREAKDOWN:
        ┌──────────────┬─────────────┬──────────────────────────────────┐
        │ Breakpoint   │ Default     │ Recommended Range                │
        ├──────────────┼─────────────┼──────────────────────────────────┤
        │ Mobile       │ h-[40vh]    │ 40vh - 60vh (full viewport)      │
        │ (default)    │             │ OR fixed: h-[300px] - h-[500px]  │
        ├──────────────┼─────────────┼──────────────────────────────────┤
        │ sm (640px)   │ h-[45vh]    │ 45vh - 65vh                      │
        │ (large phone)│             │                                   │
        ├──────────────┼─────────────┼──────────────────────────────────┤
        │ md (768px)   │ h-[50vh]    │ 50vh - 70vh (PORTRAIT TABLET)    │
        │ (tablet)     │             │ Recommended: 50vh-60vh           │
        ├──────────────┼─────────────┼──────────────────────────────────┤
        │ lg (1024px)  │ h-[60vh]    │ 60vh - 80vh (LANDSCAPE TABLET)   │
        │ (tablet)     │             │ Recommended: 60vh-70vh           │
        ├──────────────┼─────────────┼──────────────────────────────────┤
        │ xl (1280px)  │ h-[70vh]    │ 70vh - 90vh                      │
        │ (laptop)     │             │                                   │
        ├──────────────┼─────────────┼──────────────────────────────────┤
        │ 2xl (1536px) │ h-[85vh]    │ 80vh - 100vh                     │
        │ (desktop)    │             │                                   │
        └──────────────┴─────────────┴──────────────────────────────────┘
        
        TABLET-SPECIFIC CONSIDERATIONS:
        ┌────────────────────────────────────────────────────────────────┐
        │ PORTRAIT TABLET (768px - 1024px):                             │
        │ • Users typically hold closer to face                         │
        │ • Height should be 50-60vh for comfortable viewing            │
        │ • Consider using tablet-specific images for better quality    │
        │                                                                │
        │ LANDSCAPE TABLET (1024px - 1280px):                           │
        │ • Similar to laptop experience                                │
        │ • Height can be 60-70vh                                       │
        │ • Can use desktop images or specific tablet images            │
        │                                                                │
        │ RECOMMENDED TABLET SETUP:                                     │
        │ md:h-[55vh] lg:h-[65vh]                                       │
        └────────────────────────────────────────────────────────────────┘
        
        HOW TO MODIFY:
        ┌────────────────────────────────────────────────────────────────┐
        │ Option 1 - Viewport Height (Recommended for full-screen):     │
        │   h-[40vh]     - 40% on mobile                                │
        │   sm:h-[45vh]  - 45% on large phones                          │
        │   md:h-[50vh]  - 50% on portrait tablets                      │
        │   lg:h-[60vh]  - 60% on landscape tablets/laptops             │
        │   xl:h-[70vh]  - 70% on desktops                              │
        │   2xl:h-[85vh] - 85% on large desktops                        │
        │                                                                │
        │ Option 2 - Fixed Height (Consistent across devices):          │
        │   h-[350px]     - 350px on all devices                        │
        │   sm:h-[400px]  - 400px on phones+                            │
        │   md:h-[450px]  - 450px on tablets+                           │
        │   lg:h-[500px]  - 500px on laptops+                           │
        │   xl:h-[550px]  - 550px on desktops+                          │
        │                                                                │
        │ Option 3 - Min-Height (Flexible):                             │
        │   min-h-[300px] h-auto                                        │
        │                                                                │
        │ Option 4 - Aspect Ratio (Maintains proportions):              │
        │   aspect-[16/9] - 16:9 ratio                                  │
        │   aspect-[4/3]  - 4:3 ratio (good for tablets)                │
        └────────────────────────────────────────────────────────────────┘
        
        CURRENT CONFIGURATION:
        ┌────────────────────────────────────────────────────────────────┐
        │ • Mobile (default): 40vh                                      │
        │ • Large phones (sm): 45vh                                     │
        │ • Portrait tablets (md): 50vh                                 │
        │ • Landscape tablets/Laptops (lg): 60vh                        │
        │ • Desktops (xl): 70vh                                         │
        │ • Large desktops (2xl): 85vh                                  │
        └────────────────────────────────────────────────────────────────┘
      */}
      <section 
        className="relative w-full 
          /* ─── HEIGHT ADJUSTMENTS FOR ALL DEVICES ─────────────────── */
          h-[40vh]        /* Mobile default (portrait) - 40% of viewport */
          sm:h-[45vh]     /* Large phones (landscape) - 45% of viewport */
          md:h-[50vh]     /* Tablets (portrait mode - iPad) - 50% of viewport */
          lg:h-[60vh]     /* Tablets (landscape) & Laptops - 60% of viewport */
          xl:h-[70vh]     /* Desktops - 70% of viewport */
          2xl:h-[85vh]    /* Large desktops - 85% of viewport */
          
          /* ─── ALTERNATIVE HEIGHT OPTIONS (COMMENT/UNCOMMENT AS NEEDED) ─── */
          
          /* OPTION A: GENTLE PROGRESSION FOR TABLETS */
          /* h-[40vh] sm:h-[45vh] md:h-[55vh] lg:h-[65vh] xl:h-[75vh] 2xl:h-[85vh] */
          
          /* OPTION B: CONSERVATIVE (Better for content-heavy layouts) */
          /* h-[35vh] sm:h-[40vh] md:h-[45vh] lg:h-[50vh] xl:h-[55vh] 2xl:h-[60vh] */
          
          /* OPTION C: AGGRESSIVE (More immersive, better for hero images) */
          /* h-[50vh] sm:h-[60vh] md:h-[70vh] lg:h-[80vh] xl:h-[90vh] 2xl:h-[100vh] */
          
          /* OPTION D: FIXED HEIGHTS (Consistent across breakpoints) */
          /* h-[300px] sm:h-[350px] md:h-[400px] lg:h-[450px] xl:h-[500px] 2xl:h-[550px] */
          
          /* OPTION E: ASPECT RATIO BASED */
          /* aspect-video md:aspect-auto md:h-[60vh] */
          
          /* ─── OTHER STYLES ───────────────────────────────────────── */
          overflow-hidden bg-black"
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
              key={`${idx}-${slide.desktopImage}`}
              className="relative w-full h-full flex-shrink-0"
            >
              {/*
                RESPONSIVE IMAGE BREAKDOWN:
                ┌─────────────────────────────────────────────────────────┐
                │ Mobile (default - 640px):     Mobile image             │
                │ Tablet Portrait (640-768px):  Mobile or Tablet image   │
                │ Tablet Landscape (768-1024px): Tablet or Desktop image │
                │ Desktop (1024px+):            Desktop image            │
                └─────────────────────────────────────────────────────────┘
              */}
              
              {/* 
                Tablet Image (Optional)
                - Shows on md (768px) to lg (1024px) - PERFECT FOR TABLETS
                - Uncomment if you have tablet-specific images
                - Provides better quality on tablet devices
              */}
              {slide.tabletImage && (
                <div className="hidden md:block lg:hidden relative w-full h-full">
                  <Image
                    src={slide.tabletImage}
                    alt={slide.alt}
                    fill
                    className="object-cover pointer-events-none"
                    priority={idx >= middleStart && idx < middleStart + 2}
                    sizes="(max-width: 1024px) 100vw, 0vw"
                    quality={100}
                  />
                </div>
              )}
              
              {/* 
                Desktop Image 
                - Shows on lg (1024px) and above
                - For tablets without tablet image, this will show on landscape
                - To change breakpoint, modify `lg:block` to:
                  • `md:block` - shows on 768px and above (tablet portrait+)
                  • `xl:block` - shows on 1280px and above
              */}
              <div className={`hidden ${slide.tabletImage ? 'lg:block' : 'md:block'} relative w-full h-full`}>
                <Image
                  src={slide.desktopImage}
                  alt={slide.alt}
                  fill
                  className="object-cover pointer-events-none"
                  /* 
                    object-cover options:
                    - object-cover: Crops to fill container (recommended)
                    - object-contain: Shows full image, may leave empty space
                    - object-fill: Stretches to fill, may distort
                    - object-scale-down: Scales down to fit, shows full image
                    
                    For tablet optimization, consider:
                    - object-top: Aligns image to top (good for portrait tablets)
                    - object-center: Default center alignment
                  */
                  priority={idx >= middleStart && idx < middleStart + 2}
                  sizes="100vw"
                  quality={100}
                />
              </div>
              
              {/* 
                Mobile Image 
                - Shows on screens below md (768px)
                - If tablet images are used, mobile shows below md
                - To change breakpoint, modify `md:hidden` to:
                  • `lg:hidden` - hides on 1024px and above
                  • `sm:hidden` - hides on 640px and above (not recommended)
              */}
              <div className={`block ${slide.tabletImage ? 'md:hidden' : 'lg:hidden'} relative w-full h-full`}>
                <Image
                  src={slide.mobileImage}
                  alt={slide.alt}
                  fill
                  className="object-cover pointer-events-none"
                  priority={idx >= middleStart && idx < middleStart + 2}
                  sizes="(max-width: 768px) 100vw, 0vw"
                  quality={100}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Preload all images for better performance */}
        <div className="hidden">
          {HERO_SLIDES.map((slide, idx) => (
            <div key={`preload-${idx}`}>
              <Image
                src={slide.desktopImage}
                alt="preload"
                width={1}
                height={1}
                priority
              />
              <Image
                src={slide.mobileImage}
                alt="preload"
                width={1}
                height={1}
                priority
              />
              {slide.tabletImage && (
                <Image
                  src={slide.tabletImage}
                  alt="preload"
                  width={1}
                  height={1}
                  priority
                />
              )}
            </div>
          ))}
        </div>

        {/* 
          Navigation Arrows
          Size adjustments for all devices including tablets
        */}
        <button 
          onClick={(e) => {
            e.stopPropagation();
            stopAutoPlay();
            prevSlide();
            startAutoPlay();
          }}
          className="absolute left-2 sm:left-4 md:left-6 lg:left-8 top-1/2 -translate-y-1/2 
            /* Arrow button sizing across all devices */
            w-8 h-8        /* Mobile (320px+) */
            sm:w-9 sm:h-9  /* Large phones (640px+) */
            md:w-10 md:h-10 /* Tablets portrait (768px+) */
            lg:w-12 lg:h-12 /* Tablets landscape/Laptops (1024px+) */
            xl:w-14 xl:h-14 /* Desktops (1280px+) */
            2xl:w-16 2xl:h-16 /* Large desktops (1536px+) */
            bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center 
            text-white hover:bg-white/40 hover:scale-110 transition-all duration-300
            border border-white/30 shadow-lg group"
          aria-label="Previous slide"
        >
          {/* 
            Icon size guide for all devices:
            w-4 h-4 (16px) - mobile
            sm:w-4.5 sm:h-4.5 (18px) - large phones
            md:w-5 md:h-5 (20px) - tablets portrait
            lg:w-6 lg:h-6 (24px) - tablets landscape
            xl:w-7 xl:h-7 (28px) - desktops
            2xl:w-8 2xl:h-8 (32px) - large desktops
          */}
          <ChevronLeft className="w-4 h-4 sm:w-[18px] sm:h-[18px] md:w-5 md:h-5 lg:w-6 lg:h-6 xl:w-7 xl:h-7 2xl:w-8 2xl:h-8 group-hover:-translate-x-1 transition-transform" />
        </button>

        <button 
          onClick={(e) => {
            e.stopPropagation();
            stopAutoPlay();
            nextSlide();
            startAutoPlay();
          }}
          className="absolute right-2 sm:right-4 md:right-6 lg:right-8 top-1/2 -translate-y-1/2 
            w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 lg:w-12 lg:h-12 xl:w-14 xl:h-14 2xl:w-16 2xl:h-16 
            bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center 
            text-white hover:bg-white/40 hover:scale-110 transition-all duration-300
            border border-white/30 shadow-lg group"
          aria-label="Next slide"
        >
          <ChevronRight className="w-4 h-4 sm:w-[18px] sm:h-[18px] md:w-5 md:h-5 lg:w-6 lg:h-6 xl:w-7 xl:h-7 2xl:w-8 2xl:h-8 group-hover:translate-x-1 transition-transform" />
        </button>

        {/* 
          Dots Navigation
          - Position adjusts with bottom spacing for tablets
          - Size increases appropriately for touch targets on tablets
        */}
        <div className="absolute bottom-3 sm:bottom-4 md:bottom-6 lg:bottom-8 xl:bottom-10 left-1/2 -translate-x-1/2 
          flex gap-1.5 sm:gap-2 md:gap-2.5 lg:gap-3">
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
                  ? /* Active dot - wider, larger on tablets for better touch */
                    "w-5 sm:w-6 md:w-8 lg:w-10 xl:w-12 h-1.5 sm:h-2 md:h-2.5 lg:h-3 bg-white shadow-lg"
                  : /* Inactive dot - circular, larger touch target on tablets */
                    "w-1.5 sm:w-2 md:w-2.5 lg:w-3 h-1.5 sm:h-2 md:h-2.5 lg:h-3 bg-white/60 hover:bg-white/80 hover:scale-110"
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>

        {/* 
          Gradient Overlays
          - Creates fade effects on edges and bottom
          - Adjusted for tablet viewing experience
        */}
        <div className="absolute inset-y-0 left-0 w-12 sm:w-16 md:w-20 lg:w-24 xl:w-32 bg-gradient-to-r from-black/20 to-transparent pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-12 sm:w-16 md:w-20 lg:w-24 xl:w-32 bg-gradient-to-l from-black/20 to-transparent pointer-events-none" />
        <div className="absolute bottom-0 left-0 right-0 h-12 sm:h-16 md:h-20 lg:h-24 xl:h-32 bg-gradient-to-t from-black/30 to-transparent pointer-events-none" />
      </section>
    </div>
  );
}