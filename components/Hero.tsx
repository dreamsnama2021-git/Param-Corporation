"use client";

import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useState, useCallback } from "react";

// ─── Types & Data ─────────────────────────────────────────────────────────────
interface StatItem {
  icon: string;
  value: string;
  label: string;
}

interface HeroSlide {
  image: string;
  href: string;
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
    image: "http://www.bigimpex.com/wp-content/uploads/2025/02/BANNER-16.jpg",
    href: "/products/corporate-gifts",
    alt: "Corporate Gifts",
  },
  {
    image: "http://www.bigimpex.com/wp-content/uploads/2025/09/Artboard-9-100.jpg",
    href: "/products/promotional",
    alt: "Branding",
  },
  {
    image: "http://www.bigimpex.com/wp-content/uploads/2025/04/BANNERs.jpg",
    href: "/pharma",
    alt: "Pharmaceutical Gifts",
  },
];

// ─── Main Component ───────────────────────────────────────────────────────────
export default function HeroWithStats() {
  const [current, setCurrent] = useState(0);
  const [animating, setAnimating] = useState(false);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const minSwipeDistance = 50;

  const goTo = useCallback((index: number) => {
    if (animating) return;
    setAnimating(true);
    setTimeout(() => {
      setCurrent(index);
      setAnimating(false);
    }, 300);
  }, [animating]);

  const prev = useCallback(() => {
    goTo((current - 1 + HERO_SLIDES.length) % HERO_SLIDES.length);
  }, [current, goTo]);

  const next = useCallback(() => {
    goTo((current + 1) % HERO_SLIDES.length);
  }, [current, goTo]);

  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [next]);

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;
    
    if (isLeftSwipe) next();
    if (isRightSwipe) prev();
  };

  const slide = HERO_SLIDES[current];

  if (!mounted) {
    return <div className="min-h-screen bg-[#fdf4f2]" />;
  }

  return (
    <div className="min-h-screen flex flex-col overflow-hidden">
      
      {/* ─── Hero Section (Full Width) ───────────────── */}
      <section className="relative h-[60vh] sm:h-[70vh] lg:h-[80vh] bg-gradient-to-br from-[#fdf4f2] via-white to-[#fff8f6] overflow-hidden">
        <div className="absolute top-0 right-0 w-full lg:w-[60%] h-full bg-gradient-to-l from-[#fdecea]/50 lg:from-[#fdecea] to-transparent pointer-events-none" />
        <div className="absolute bottom-0 left-1/4 w-48 h-48 sm:w-72 sm:h-72 lg:w-96 lg:h-96 rounded-full bg-[#e8402a]/5 blur-3xl pointer-events-none" />
        <div 
          className="absolute inset-0 pointer-events-none opacity-20 sm:opacity-30"
          style={{
            backgroundImage: "radial-gradient(circle, #e8402a20 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
        />

        <div 
          className={`relative w-full h-full transition-all duration-300 ${animating ? "opacity-0 scale-95" : "opacity-100 scale-100"}`}
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
        >
          
          <a 
            href={slide.href}
            className="relative block w-full h-full overflow-hidden shadow-2xl shadow-gray-200/50 group cursor-pointer"
          >
            <Image
              src={slide.image}
              alt={slide.alt}
              fill
              className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
              priority={current === 0}
              sizes="100vw"
              unoptimized
            />
            
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
              <span className="opacity-0 group-hover:opacity-100 transition-all duration-300 bg-white text-[#e8402a] font-bold px-8 py-3 rounded-full shadow-lg transform translate-y-4 group-hover:translate-y-0 text-base">
                View Category
              </span>
            </div>

            {/* <div className="absolute top-4 right-4 sm:top-6 sm:right-8 bg-[#e8402a] text-white rounded-full px-4 py-1.5 sm:px-6 sm:py-2 text-sm sm:text-base font-bold shadow-lg">
              Featured
            </div> */}
          </a>

          <button 
            onClick={prev} 
            className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 w-12 h-12 sm:w-14 sm:h-14 bg-white/90 backdrop-blur-sm rounded-full shadow-lg flex items-center justify-center text-gray-700 hover:text-[#e8402a] hover:bg-white hover:shadow-xl transition-all duration-200 border border-gray-100 z-10 active:scale-95"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-6 h-6 sm:w-7 sm:h-7"/>
          </button>
          <button 
            onClick={next} 
            className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 w-12 h-12 sm:w-14 sm:h-14 bg-white/90 backdrop-blur-sm rounded-full shadow-lg flex items-center justify-center text-gray-700 hover:text-[#e8402a] hover:bg-white hover:shadow-xl transition-all duration-200 border border-gray-100 z-10 active:scale-95"
            aria-label="Next slide"
          >
            <ChevronRight className="w-6 h-6 sm:w-7 sm:h-7"/>
          </button>

          <div className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-3">
            {HERO_SLIDES.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                className={`transition-all duration-300 rounded-full ${
                  i === current 
                    ? "w-8 h-2.5 bg-[#e8402a]" 
                    : "w-2.5 h-2.5 bg-white/80 hover:bg-white"
                }`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>

          <div className="absolute bottom-16 left-1/2 -translate-x-1/2 text-white/80 text-xs sm:hidden pointer-events-none animate-pulse bg-black/20 px-3 py-1 rounded-full">
            Swipe to navigate
          </div>
        </div>
      </section>

      {/* ─── Stats Section ────────────────────────────── */}
      <section className="w-full bg-[#1a1a2e] relative overflow-hidden py-8 sm:py-10 lg:py-12">
        {/* Top accent line */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#e8402a] to-transparent" />
        
        {/* Background pattern */}
        <div 
          className="absolute inset-0 opacity-5 pointer-events-none"
          style={{
            backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)",
            backgroundSize: "30px 30px",
          }}
        />

        {/* Mobile: Marquee Effect */}
        <div className="sm:hidden overflow-hidden relative w-full">
          <div className="flex animate-marquee whitespace-nowrap hover:animation-paused">
            {/* First set of stats */}
            {STATS.map((stat, i) => (
              <div 
                key={`mobile-1-${i}`} 
                className="flex flex-col items-center text-center mx-6 min-w-[140px]"
              >
                <div className="w-12 h-12 rounded-xl bg-[#e8402a]/10 border border-[#e8402a]/20 flex items-center justify-center text-2xl mb-2">
                  {stat.icon}
                </div>
                <div className="text-2xl font-black text-white mb-0.5 leading-none">
                  {stat.value}
                </div>
                <div className="text-xs text-gray-400 font-medium leading-tight">
                  {stat.label}
                </div>
              </div>
            ))}
            {/* Duplicate for seamless loop */}
            {STATS.map((stat, i) => (
              <div 
                key={`mobile-2-${i}`} 
                className="flex flex-col items-center text-center mx-6 min-w-[140px]"
              >
                <div className="w-12 h-12 rounded-xl bg-[#e8402a]/10 border border-[#e8402a]/20 flex items-center justify-center text-2xl mb-2">
                  {stat.icon}
                </div>
                <div className="text-2xl font-black text-white mb-0.5 leading-none">
                  {stat.value}
                </div>
                <div className="text-xs text-gray-400 font-medium leading-tight">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Desktop: Grid Layout */}
        <div className="hidden sm:block w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-2">
          <div className="grid grid-cols-3 lg:grid-cols-5 gap-6 sm:gap-8">
            {STATS.map((stat, i) => (
              <div 
                key={stat.label} 
                className="flex flex-col items-center text-center group"
                style={{ animationDelay: `${i * 100}ms` }}
              >
                <div className="w-12 h-12 lg:w-14 lg:h-14 rounded-xl bg-[#e8402a]/10 border border-[#e8402a]/20 flex items-center justify-center text-2xl mb-3 group-hover:bg-[#e8402a]/20 group-hover:scale-110 transition-all duration-300">
                  {stat.icon}
                </div>
                <div className="text-xl lg:text-2xl font-black text-white mb-1 leading-none">
                  {stat.value}
                </div>
                <div className="text-xs text-gray-400 font-medium leading-tight max-w-[100px]">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom accent line */}
        <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[#e8402a]/40 to-transparent" />
      </section>

      {/* Add this style tag for the marquee animation */}
      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-marquee {
          animation: marquee 25s linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
}
