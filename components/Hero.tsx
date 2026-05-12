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
    image: "/banner/home.jpeg",
    href: "/categories/all",
    alt: "Corporate Gifts",
  },
  {
    image: "/banner/home.jpeg",
    href: "/categories/all",
    alt: "Branding",
  },
  {
    image: "/banner/home.jpeg",
    href: "/categories/all",
    alt: "Pharmaceutical Gifts",
  },
];

// ─── Component ───────────────────────────────────────
export default function HeroWithStats() {
  const [current, setCurrent] = useState(0);
  const [animating, setAnimating] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

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

  if (!mounted) {
    return <div className="min-h-[50vh] md:min-h-[60vh] lg:min-h-screen bg-[var(--clr-bg-cream)]" />;
  }

  const slide = HERO_SLIDES[current];

  return (
    <div className="flex flex-col overflow-hidden">

      {/* ─── HERO ───────────────── */}
      <section className="relative w-full overflow-hidden
        h-[50vh] sm:h-[60vh] md:h-[70vh] lg:h-[80vh] xl:h-[85vh]
        bg-gradient-to-br from-[var(--clr-bg-cream)] via-[var(--clr-white)] to-[var(--clr-bg-gray)]">

        {/* overlay */}
        <div className="absolute top-0 right-0 w-full lg:w-[60%] h-full 
        bg-gradient-to-l from-[var(--clr-primary)/10] to-transparent" />

        {/* blur accent */}
        <div className="absolute bottom-0 left-1/4 w-48 md:w-72 h-48 md:h-72 rounded-full 
        bg-[var(--clr-secondary)/10] blur-3xl" />

        {/* grid pattern */}
        <div className="absolute inset-0 opacity-20 pointer-events-none 
      [background-image:radial-gradient(circle,rgba(15,143,191,0.15) 1px,transparent 1px)]
        [background-size:24px_24px]" />

        {/* slider */}
        <div className={`relative w-full h-full transition-all duration-300 ${
          animating ? "opacity-0 scale-95" : "opacity-100 scale-100"
        }`}>

          <a href={slide.href} className="relative block w-full h-full group">
            <Image
              src={slide.image}
              alt={slide.alt}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              priority
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 100vw"
              unoptimized
            />

            {/* CTA */}
            <div className="absolute inset-0 flex items-center justify-center 
            bg-black/0 group-hover:bg-black/20 transition">
              {/* CTA button commented out as in original */}
            </div>
          </a>

          {/* arrows - responsive sizing */}
          <button onClick={prev}
            className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 
            w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 
            bg-white rounded-full shadow flex items-center justify-center 
            hover:text-[var(--clr-primary)] transition"
            aria-label="Previous slide">
            <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
          </button>

          <button onClick={next}
            className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 
            w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 
            bg-white rounded-full shadow flex items-center justify-center 
            hover:text-[var(--clr-primary)] transition"
            aria-label="Next slide">
            <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
          </button>

          {/* dots - responsive positioning */}
          <div className="absolute bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 flex gap-2 sm:gap-3">
            {HERO_SLIDES.map((_, i) => (
              <button key={i}
                onClick={() => goTo(i)}
                className={`rounded-full transition-all ${
                  i === current
                    ? "w-6 sm:w-8 h-2 bg-[var(--clr-primary)]"
                    : "w-2 h-2 bg-white/80"
                }`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ─── STATS ───────────────── */}
      {/* Stats section preserved as is, commented out in original */}
    </div>
  );
}