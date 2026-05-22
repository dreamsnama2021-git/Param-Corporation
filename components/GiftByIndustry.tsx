"use client";

import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRef, useState } from "react";

interface IndustryItem {
  id: string;
  title: string;
  image: string;
  href: string;
}

const INDUSTRIES: IndustryItem[] = [
  {
    id: "liquor",
    title: "Liquor",
    image: "http://www.bigimpex.com/wp-content/uploads/2024/07/Liquor.png",
    href: "/industries/liquor",
  },
  {
    id: "food-beverages",
    title: "Food and Beverages",
    image: "http://www.bigimpex.com/wp-content/uploads/2024/07/Food-Beverages.png",
    href: "/industries/food-beverages",
  },
  {
    id: "education",
    title: "Education",
    image: "http://www.bigimpex.com/wp-content/uploads/2024/07/Education.png",
    href: "/industries/education",
  },
  {
    id: "cement-construction",
    title: "Cement and Construction",
    image: "http://www.bigimpex.com/wp-content/uploads/2024/10/Construction.png",
    href: "/industries/cement-construction",
  },
  {
    id: "oil-energy",
    title: "Oil and Energy",
    image: "http://www.bigimpex.com/wp-content/uploads/2024/10/Oil-Energy.png",
    href: "/industries/oil-energy",
  },
];

export default function GiftsByIndustry() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScrollButtons = () => {
    const container = scrollContainerRef.current;
    if (!container) return;

    setCanScrollLeft(container.scrollLeft > 0);
    setCanScrollRight(
      container.scrollLeft <
        container.scrollWidth - container.clientWidth - 10
    );
  };

  const scroll = (direction: "left" | "right") => {
    const container = scrollContainerRef.current;
    if (!container) return;

    container.scrollBy({
      left: direction === "left" ? -300 : 300,
      behavior: "smooth",
    });

    setTimeout(checkScrollButtons, 300);
  };

  return (
    <section className="w-full bg-[var(--clr-bg-cream)] py-12 sm:py-16 lg:py-20">

      {/* ─── INTRO ───────────────── */}
      <div className="max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-8 mb-12">

        <h2 className="text-[clamp(1.8rem,4vw,3rem)] font-bold text-center 
        text-[var(--clr-text-dark)] mb-6">
          Best Corporate Gifting Company in Mumbai and India
        </h2>

        <div className="max-w-4xl mx-auto text-center 
        text-[var(--clr-text-muted)] text-sm sm:text-base space-y-4">

          <p>
            BIG Impex is a{" "}
            <span className="text-[var(--clr-primary)] font-semibold">
              leading provider of employee gifts
            </span>{" "}
            in Mumbai.
          </p>

          <p>
            We deliver gifting solutions aligned with your brand and create lasting impressions.
          </p>
        </div>
      </div>

      {/* ─── HEADER ───────────────── */}
      <div className="max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-8">

        <div className="flex items-center justify-between mb-8">

          <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold 
          text-[var(--clr-text-dark)]">
            Gifts By Industry
          </h3>

          <div className="flex gap-2">

            <button
              onClick={() => scroll("left")}
              disabled={!canScrollLeft}
              className={`p-2 rounded-full border transition ${
                canScrollLeft
                  ? "border-[var(--clr-primary)] text-[var(--clr-primary)] hover:bg-[var(--clr-primary)] hover:text-white"
                  : "border-[var(--clr-border-light)] text-[var(--clr-text-muted)] cursor-not-allowed"
              }`}
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <button
              onClick={() => scroll("right")}
              disabled={!canScrollRight}
              className={`p-2 rounded-full border transition ${
                canScrollRight
                  ? "border-[var(--clr-primary)] text-[var(--clr-primary)] hover:bg-[var(--clr-primary)] hover:text-white"
                  : "border-[var(--clr-border-light)] text-[var(--clr-text-muted)] cursor-not-allowed"
              }`}
            >
              <ChevronRight className="w-5 h-5" />
            </button>

          </div>
        </div>

        {/* ─── CAROUSEL ───────────────── */}
        <div
          ref={scrollContainerRef}
          onScroll={checkScrollButtons}
          className="flex gap-4 sm:gap-6 overflow-x-auto pb-4 snap-x snap-mandatory"
        >

          {INDUSTRIES.map((industry) => (
            <a
              key={industry.id}
              href={industry.href}
              className="flex-shrink-0 w-[160px] sm:w-[200px] lg:w-[220px] snap-start group"
            >

              <div className="relative aspect-square rounded-2xl overflow-hidden 
              border border-[var(--clr-border-light)] 
              shadow-[0_10px_30px_rgba(15,143,191,0.15)] 
              mb-3 transition-all duration-300 
              group-hover:scale-105 group-hover:shadow-[0_20px_50px_rgba(15,143,191,0.25)]">

                <Image
                  src={industry.image}
                  alt={industry.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  sizes="(max-width: 640px) 160px, (max-width: 1024px) 200px, 220px"
                  unoptimized
                />

                {/* Overlay */}
                <div className="absolute inset-0 
                bg-transparent 
                group-hover:bg-[var(--clr-primary)/20] transition" />

              </div>

              <h4 className="text-center text-sm sm:text-base font-medium 
              text-[var(--clr-text-dark)] 
              group-hover:text-[var(--clr-primary)] transition">
                {industry.title}
              </h4>

            </a>
          ))}
        </div>

        {/* MOBILE DOTS */}
        <div className="sm:hidden flex justify-center mt-4 gap-1">
          {INDUSTRIES.map((_, idx) => (
            <div
              key={idx}
              className="w-1.5 h-1.5 rounded-full 
              bg-[var(--clr-border-light)]"
            />
          ))}
        </div>

      </div>
    </section>
  );
}