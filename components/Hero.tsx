"use client";

import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useState, useCallback, useRef } from "react";

// ─── Types & Data ─────────────────────────────────────
interface HeroSlide {
  image: string;
  alt: string;
}

const HERO_SLIDES: HeroSlide[] = [
  { image: "/banner/home.jpeg",  alt: "Corporate Gifts"       },
  { image: "/banner/home2.jpeg", alt: "Branding"              },
  { image: "/banner/home3.jpeg", alt: "Pharmaceutical Gifts"  },
];

// ─── Component ───────────────────────────────────────
export default function HeroWithStats() {
  const [isDragging, setIsDragging]           = useState(false);
  const [startX, setStartX]                   = useState(0);
  const [translateX, setTranslateX]           = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(true);

  const containerRef  = useRef<HTMLDivElement>(null);
  const autoPlayRef   = useRef<NodeJS.Timeout | null>(null);
  const mountedRef    = useRef(true);

  const originalLength = HERO_SLIDES.length;
  const middleStart    = originalLength;
  const middleEnd      = originalLength * 2;

  // Infinite array: 3× the slides
  const infiniteSlides = [...HERO_SLIDES, ...HERO_SLIDES, ...HERO_SLIDES];

  const [displayIndex, setDisplayIndex] = useState(middleStart);

  const getRealIndex = useCallback(
    (idx: number) =>
      ((idx - middleStart) % originalLength + originalLength) % originalLength,
    [originalLength, middleStart]
  );
  const realIndex = getRealIndex(displayIndex);

  const resetPosition = useCallback((newIdx: number) => {
    setIsTransitioning(false);
    setDisplayIndex(newIdx);
    setTimeout(() => { if (mountedRef.current) setIsTransitioning(true); }, 50);
  }, []);

  const nextSlide = useCallback(() => {
    const newIdx = displayIndex + 1;
    setDisplayIndex(newIdx);
    if (newIdx >= middleEnd) {
      setTimeout(() => { if (mountedRef.current) resetPosition(middleStart); }, 700);
    }
  }, [displayIndex, middleStart, middleEnd, resetPosition]);

  const prevSlide = useCallback(() => {
    const newIdx = displayIndex - 1;
    setDisplayIndex(newIdx);
    if (newIdx < middleStart - 1) {
      setTimeout(() => { if (mountedRef.current) resetPosition(middleEnd - 1); }, 700);
    }
  }, [displayIndex, middleStart, middleEnd, resetPosition]);

  const startAutoPlay = useCallback(() => {
    if (autoPlayRef.current) clearInterval(autoPlayRef.current);
    autoPlayRef.current = setInterval(nextSlide, 5000);
  }, [nextSlide]);

  const stopAutoPlay = useCallback(() => {
    if (autoPlayRef.current) { clearInterval(autoPlayRef.current); autoPlayRef.current = null; }
  }, []);

  // ── Drag handlers ──
  const handleDragStart = (e: React.MouseEvent | React.TouchEvent) => {
    stopAutoPlay();
    setIsDragging(true);
    const clientX = "touches" in e ? e.touches[0].clientX : e.clientX;
    setStartX(clientX);
    setIsTransitioning(false);
  };

  const handleDragMove = (e: React.MouseEvent | React.TouchEvent) => {
    if (!isDragging) return;
    const clientX = "touches" in e ? e.touches[0].clientX : e.clientX;
    setTranslateX(clientX - startX);
  };

  const handleDragEnd = (e: React.MouseEvent | React.TouchEvent) => {
    if (!isDragging) { startAutoPlay(); return; }
    setIsDragging(false);
    setIsTransitioning(true);
    const clientX = "touches" in e ? e.changedTouches[0].clientX : e.clientX;
    const diff = clientX - startX;
    if (Math.abs(diff) > 50) diff > 0 ? prevSlide() : nextSlide();
    setTranslateX(0);
    startAutoPlay();
  };

  useEffect(() => {
    mountedRef.current = true;
    startAutoPlay();
    return () => { mountedRef.current = false; stopAutoPlay(); };
  }, [startAutoPlay, stopAutoPlay]);

  const getTransformStyle = () =>
    isDragging
      ? `translateX(calc(-${displayIndex * 100}% + ${translateX}px))`
      : `translateX(-${displayIndex * 100}%)`;

  return (
    <div className="flex flex-col overflow-hidden">
      <section
        className="relative ui-w-full overflow-hidden bg-black"
        style={{ height: "clamp(55vh, 70vw, 90vh)" }}
        onMouseEnter={stopAutoPlay}
        onMouseLeave={startAutoPlay}
      >
        {/* ── Slides track ── */}
        <div
          ref={containerRef}
          className="relative ui-w-full h-full flex"
          style={{
            transform:  getTransformStyle(),
            transition: isTransitioning && !isDragging
              ? "transform 700ms cubic-bezier(0.4, 0, 0.2, 1)"
              : "none",
            cursor: isDragging ? "grabbing" : "grab",
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
            <div key={`${idx}-${slide.image}`} className="relative ui-w-full h-full flex-shrink-0">
              <Image
                src={slide.image}
                alt={slide.alt}
                fill
                className="object-cover pointer-events-none"
                priority={idx >= middleStart && idx < middleStart + 2}
                sizes="100vw"
                quality={100}
              />
            </div>
          ))}
        </div>

        {/* Preload hidden images */}
        <div className="hidden">
          {HERO_SLIDES.map((slide, idx) => (
            <Image key={`preload-${idx}`} src={slide.image} alt="preload" width={1} height={1} priority />
          ))}
        </div>

        {/* ── Prev arrow ── */}
        <button
          onClick={(e) => { e.stopPropagation(); stopAutoPlay(); prevSlide(); startAutoPlay(); }}
          className="absolute left-[clamp(1rem,3vw,2rem)] top-1/2 -translate-y-1/2
            bg-white/20 backdrop-blur-md ui-rounded-full ui-flex-center
            text-white hover:bg-white/40 hover:scale-110
            transition-all duration-300 border border-white/30 ui-shadow-soft group z-20"
          style={{ width: "clamp(2.75rem,5vw,4rem)", height: "clamp(2.75rem,5vw,4rem)" }}
          aria-label="Previous slide"
        >
          <ChevronLeft style={{ width: "clamp(1.25rem,2.5vw,2rem)", height: "clamp(1.25rem,2.5vw,2rem)" }}
            className="group-hover:-translate-x-1 transition-transform" />
        </button>

        {/* ── Next arrow ── */}
        <button
          onClick={(e) => { e.stopPropagation(); stopAutoPlay(); nextSlide(); startAutoPlay(); }}
          className="absolute right-[clamp(1rem,3vw,2rem)] top-1/2 -translate-y-1/2
            bg-white/20 backdrop-blur-md ui-rounded-full ui-flex-center
            text-white hover:bg-white/40 hover:scale-110
            transition-all duration-300 border border-white/30 ui-shadow-soft group z-20"
          style={{ width: "clamp(2.75rem,5vw,4rem)", height: "clamp(2.75rem,5vw,4rem)" }}
          aria-label="Next slide"
        >
          <ChevronRight style={{ width: "clamp(1.25rem,2.5vw,2rem)", height: "clamp(1.25rem,2.5vw,2rem)" }}
            className="group-hover:translate-x-1 transition-transform" />
        </button>

        {/* ── Dot indicators ── */}
        <div className="absolute left-1/2 -translate-x-1/2 flex ui-gap-sm z-20"
          style={{ bottom: "clamp(1.25rem,3vw,2.5rem)" }}>
          {HERO_SLIDES.map((_, i) => (
            <button
              key={i}
              onClick={(e) => {
                e.stopPropagation();
                stopAutoPlay();
                setDisplayIndex(middleStart + i);
                setIsTransitioning(true);
                startAutoPlay();
              }}
              className={`ui-rounded-full transition-all duration-300 ${
                realIndex === i
                  ? "h-3 bg-white ui-shadow-soft"
                  : "w-3 h-3 bg-white/60 hover:bg-white/80 hover:scale-110"
              }`}
              style={realIndex === i ? { width: "clamp(2rem,4vw,3rem)" } : undefined}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>

        {/* ── Gradient vignettes ── */}
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-black/20 to-transparent pointer-events-none z-10" />
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-black/20 to-transparent pointer-events-none z-10" />
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/30 to-transparent pointer-events-none z-10" />
      </section>
    </div>
  );
}