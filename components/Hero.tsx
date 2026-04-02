"use client";

import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";

// ─── Types ────────────────────────────────────────────────────────────────────
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

// ─── Data ─────────────────────────────────────────────────────────────────────
const STATS: StatItem[] = [
  { icon: "🏆", value: "21+", label: "Years in Business" },
  { icon: "📦", value: "10,000+", label: "Products" },
  { icon: "🏢", value: "300+", label: "Corporate Customers" },
  { icon: "📋", value: "1,000+", label: "Corporate Orders Annually" },
  { icon: "👥", value: "100+", label: "Experienced Employees" },
];

// Category banners with navigation links
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

  const goTo = (index: number) => {
    if (animating) return;
    setAnimating(true);
    setTimeout(() => {
      setCurrent(index);
      setAnimating(false);
    }, 300);
  };

  const prev = () => goTo((current - 1 + HERO_SLIDES.length) % HERO_SLIDES.length);
  const next = () => goTo((current + 1) % HERO_SLIDES.length);

  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [current]);

  const slide = HERO_SLIDES[current];

  return (
    <div className="h-screen flex flex-col overflow-hidden">
      
      {/* ─── Hero Section (80% height) - Image Only ─────────────────────────────── */}
      <section className="h-[80%] relative bg-gradient-to-br from-[#fdf4f2] via-white to-[#fff8f6] overflow-hidden">
        {/* Background elements */}
        <div className="absolute top-0 right-0 w-[60%] h-full bg-gradient-to-l from-[#fdecea] to-transparent pointer-events-none" />
        <div className="absolute bottom-0 left-1/4 w-96 h-96 rounded-full bg-[#e8402a]/5 blur-3xl pointer-events-none" />
        <div 
          className="absolute inset-0 pointer-events-none opacity-30"
          style={{
            backgroundImage: "radial-gradient(circle, #e8402a20 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />

        <div className="relative h-full   flex items-center justify-center">
          <div className={`relative w-full h-full  transition-all duration-300 ${animating ? "opacity-0 scale-95" : "opacity-100 scale-100"}`}>
            
            {/* Clickable Image Banner */}
            <a 
              href={slide.href}
              className="relative block w-full h-full  overflow-hidden shadow-2xl shadow-gray-200/50 group cursor-pointer"
            >
              <Image
                src={slide.image}
                alt={slide.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                priority={current === 0}
                sizes="(max-width: 1280px) 100vw, 1280px"
              />
              
              {/* Hover overlay with View Category button */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white text-[#e8402a] font-bold px-8 py-3 rounded-full shadow-lg transform translate-y-4 group-hover:translate-y-0">
                  View Category
                </span>
              </div>

              {/* Featured badge */}
              <div className="absolute top-4 right-4 bg-[#e8402a] text-white rounded-full px-4 py-1.5 text-sm font-bold shadow-lg">
                Featured
              </div>
            </a>

            {/* Navigation arrows */}
            <button 
              onClick={prev} 
              className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-gray-600 hover:text-[#e8402a] hover:shadow-xl transition-all duration-200 border border-gray-100 z-10"
              aria-label="Previous slide"
            >
              <ChevronLeft className="w-6 h-6"/>
            </button>
            <button 
              onClick={next} 
              className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-gray-600 hover:text-[#e8402a] hover:shadow-xl transition-all duration-200 border border-gray-100 z-10"
              aria-label="Next slide"
            >
              <ChevronRight className="w-6 h-6"/>
            </button>

            {/* Slide dots indicator */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2">
              {HERO_SLIDES.map((_, i) => (
                <button
                  key={i}
                  onClick={() => goTo(i)}
                  className={`transition-all duration-300 rounded-full ${i === current ? "w-8 h-2.5 bg-[#e8402a]" : "w-2.5 h-2.5 bg-white/80 hover:bg-white"}`}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── Stats Section (20% height) ────────────────────────────────────────── */}
      <section className="h-[20%] bg-[#1a1a2e] relative overflow-hidden flex items-center">
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#e8402a] to-transparent" />
        
        <div 
          className="absolute inset-0 opacity-5 pointer-events-none"
          style={{
            backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />

        <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 md:gap-8">
            {STATS.map((stat, i) => (
              <div key={stat.label} className="flex flex-col items-center text-center group" style={{ animationDelay: `${i * 100}ms` }}>
                <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl bg-[#e8402a]/10 border border-[#e8402a]/20 flex items-center justify-center text-xl md:text-2xl mb-2 group-hover:bg-[#e8402a]/20 group-hover:scale-110 transition-all duration-300">
                  {stat.icon}
                </div>
                <div className="text-2xl md:text-3xl font-black text-white mb-0.5 leading-none">
                  {stat.value}
                </div>
                <div className="text-xs text-gray-400 font-medium leading-tight max-w-[100px]">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[#e8402a]/40 to-transparent" />
      </section>
    </div>
  );
}
