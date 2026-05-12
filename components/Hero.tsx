"use client";

import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useState, useCallback } from "react";

// ─── Types & Data ─────────────────────────────────────
interface StatItem {
  icon: string;
  value: string;
  label: string;
}

interface HeroSlide {
  image: string;
  alt: string;
}

const STATS: StatItem[] = [
  { icon: "🏆", value: "21+", label: "Years in Business" },
  { icon: "📦", value: "10,000+", label: "Products" },
  { icon: "🏢", value: "300+", label: "Corporate Customers" },
  { icon: "📋", value: "1,000+", label: "Corporate Orders Annually" },
  { icon: "👥", value: "100+", label: "Experienced Employees" },
];

const HERO_SLIDES: HeroSlide[] = [
  {
    image: "/banner/home.jpeg",
    alt: "Corporate Gifts",
  },
  {
    image: "/banner/home2.jpeg",
    alt: "Branding",
  },
  {
    image: "/banner/home3.jpeg",
    alt: "Pharmaceutical Gifts",
  },
];

// ─── Component ───────────────────────────────────────
export default function HeroWithStats() {
  const [current, setCurrent] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [direction, setDirection] = useState<'left' | 'right'>('right');

  useEffect(() => setMounted(true), []);

  const goTo = useCallback((index: number) => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setDirection(index > current ? 'right' : 'left');
    setCurrent(index);
    setTimeout(() => setIsTransitioning(false), 700);
  }, [current, isTransitioning]);

  const prev = useCallback(() => {
    const newIndex = (current - 1 + HERO_SLIDES.length) % HERO_SLIDES.length;
    goTo(newIndex);
  }, [current, goTo]);

  const next = useCallback(() => {
    const newIndex = (current + 1) % HERO_SLIDES.length;
    goTo(newIndex);
  }, [current, goTo]);

  // Auto-advance slides
  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [next]);

  if (!mounted) {
    return <div className="h-screen bg-[var(--clr-bg-cream)]" />;
  }

  return (
    <div className="flex flex-col overflow-hidden">
      
      {/* ─── HERO - Full View with Smooth Slides ───────────────── */}
      <section className="relative w-full h-[70vh] lg:h-[90vh] overflow-hidden bg-black">
        
        {/* Slides container */}
        <div className="relative w-full h-full">
          {HERO_SLIDES.map((slide, index) => {
            let position = 'translate-x-0';
            
            if (index === current) {
              position = 'translate-x-0';
            } else if (index < current) {
              position = '-translate-x-full';
            } else {
              position = 'translate-x-full';
            }

            return (
              <div
                key={index}
                className={`absolute inset-0 transition-transform duration-700 ease-in-out ${position}`}
                style={{
                  transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)'
                }}
              >
                <Image
                  src={slide.image}
                  alt={slide.alt}
                  fill
                  className="object-fill"
                  priority={index === 0}
                  sizes="100vw"
                  quality={100}
                />
              </div>
            );
          })}
        </div>

        {/* Navigation arrows */}
        <button 
          onClick={prev}
          className="absolute left-4 sm:left-6 md:left-8 top-1/2 -translate-y-1/2 
          w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 
          bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center 
          text-white hover:bg-white/40 hover:scale-110 transition-all duration-300
          border border-white/30 shadow-lg group z-10"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 group-hover:-translate-x-1 transition-transform" />
        </button>

        <button 
          onClick={next}
          className="absolute right-4 sm:right-6 md:right-8 top-1/2 -translate-y-1/2 
          w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 
          bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center 
          text-white hover:bg-white/40 hover:scale-110 transition-all duration-300
          border border-white/30 shadow-lg group z-10"
          aria-label="Next slide"
        >
          <ChevronRight className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 group-hover:translate-x-1 transition-transform" />
        </button>

        {/* Dots navigation */}
        {/* <div className="absolute bottom-6 sm:bottom-8 md:bottom-10 left-1/2 -translate-x-1/2 flex gap-3 z-10">
          {HERO_SLIDES.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              className={`rounded-full transition-all duration-300 ${
                i === current
                  ? "w-10 sm:w-12 h-3 bg-white shadow-lg"
                  : "w-3 h-3 bg-white/60 hover:bg-white/80 hover:scale-110"
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div> */}

        {/* Gradient overlays for better navigation visibility */}
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-black/20 to-transparent pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-black/20 to-transparent pointer-events-none" />
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/30 to-transparent pointer-events-none" />
      </section>

      {/* ─── STATS - Overlapping effect ───────────────── */}
     
    </div>
  );
}