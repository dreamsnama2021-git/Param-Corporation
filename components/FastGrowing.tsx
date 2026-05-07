"use client";

import React, { useRef, useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, TrendingUp, Building2, Sprout, Pill, Factory, ArrowUpRight } from "lucide-react";
import Link from "next/link";

interface Industry {
  id: string;
  name: string;
  icon: React.ReactNode;
  description: string;
  growth: string;
  color: string;
  bgColor: string;
  stats: {
    companies: string;
    products: string;
    growth_rate: string;
  };
}

const industries: Industry[] = [
  {
    id: "pharma",
    name: "Pharmaceuticals",
    icon: <Pill className="w-5 h-5" />,
    description: "Leading pharma companies with innovative healthcare solutions",
    growth: "+32%",
    color: "from-emerald-500 to-teal-600",
    bgColor: "bg-emerald-50",
    stats: {
      companies: "500+",
      products: "50K+",
      growth_rate: "32% YoY"
    }
  },
  {
    id: "agro",
    name: "Agro & Farming",
    icon: <Sprout className="w-5 h-5" />,
    description: "Modern agricultural solutions for sustainable farming",
    growth: "+28%",
    color: "from-green-500 to-lime-600",
    bgColor: "bg-green-50",
    stats: {
      companies: "350+",
      products: "25K+",
      growth_rate: "28% YoY"
    }
  },
  {
    id: "manufacturing",
    name: "Manufacturing",
    icon: <Factory className="w-5 h-5" />,
    description: "Industrial manufacturing & engineering excellence",
    growth: "+45%",
    color: "from-blue-500 to-indigo-600",
    bgColor: "bg-blue-50",
    stats: {
      companies: "800+",
      products: "75K+",
      growth_rate: "45% YoY"
    }
  },
  {
    id: "construction",
    name: "Construction",
    icon: <Building2 className="w-5 h-5" />,
    description: "Building India's future with smart infrastructure",
    growth: "+38%",
    color: "from-orange-500 to-red-600",
    bgColor: "bg-orange-50",
    stats: {
      companies: "600+",
      products: "30K+",
      growth_rate: "38% YoY"
    }
  }
];

export default function FastestGrowing() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [activeCard, setActiveCard] = useState<number | null>(null);

  const checkScroll = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener("scroll", checkScroll);
      checkScroll();
    }
    return () => container?.removeEventListener("scroll", checkScroll);
  }, []);

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = 320;
      scrollContainerRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="relative py-12 md:py-16 lg:py-20 overflow-hidden bg-gradient-to-b from-gray-50 to-white">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute top-0 left-0 w-96 h-96 bg-[var(--clr-primary)] rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-8 lg:mb-10 gap-4 lg:gap-6">
          <div>
            <div className="flex items-center gap-2 lg:gap-3 mb-3 lg:mb-4">
              <div className="flex items-center gap-1.5 lg:gap-2 bg-[var(--clr-primary)]/10 px-3 lg:px-4 py-1.5 lg:py-2 rounded-full">
                <TrendingUp className="w-3.5 h-3.5 lg:w-4 lg:h-4 text-[var(--clr-primary)]" />
                <span className="text-xs lg:text-sm font-bold text-[var(--clr-primary)] uppercase tracking-wider">
                  Trending Now
                </span>
              </div>
            </div>
            <h2 className="text-2xl lg:text-3xl xl:text-4xl font-bold text-[var(--clr-text-dark)] leading-tight">
              India's Fastest Growing{" "}
              <span className="relative">
                <span className="bg-gradient-to-r from-[var(--clr-primary)] to-blue-600 bg-clip-text text-transparent">
                  Industries
                </span>
                <svg className="absolute -bottom-1 lg:-bottom-2 left-0 w-full" viewBox="0 0 200 8" fill="none">
                  <path d="M1 7C50 1 150 1 199 7" stroke="currentColor" strokeWidth="2" className="text-[var(--clr-primary)]/30" />
                </svg>
              </span>
            </h2>
            <p className="mt-2 lg:mt-3 text-sm lg:text-base text-gray-600 max-w-2xl">
              Discover the fastest-growing sectors driving India's economic revolution
            </p>
          </div>

          {/* Navigation Buttons */}
          <div className="flex items-center gap-2 lg:gap-3">
            <button
              onClick={() => scroll("left")}
              disabled={!canScrollLeft}
              className="p-2 lg:p-3 rounded-full border-2 border-gray-200 hover:border-[var(--clr-primary)] hover:bg-[var(--clr-primary)]/5 disabled:opacity-30 disabled:cursor-not-allowed transition-all group"
            >
              <ChevronLeft className="w-4 h-4 lg:w-5 lg:h-5 text-gray-600 group-hover:text-[var(--clr-primary)]" />
            </button>
            <button
              onClick={() => scroll("right")}
              disabled={!canScrollRight}
              className="p-2 lg:p-3 rounded-full border-2 border-gray-200 hover:border-[var(--clr-primary)] hover:bg-[var(--clr-primary)]/5 disabled:opacity-30 disabled:cursor-not-allowed transition-all group"
            >
              <ChevronRight className="w-4 h-4 lg:w-5 lg:h-5 text-gray-600 group-hover:text-[var(--clr-primary)]" />
            </button>
          </div>
        </div>

        {/* Cards Grid - 4 columns on desktop, 2 on tablet, 1 on mobile */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5 xl:gap-6">
          {industries.map((industry, index) => (
            <div
              key={industry.id}
              className="group relative"
              onMouseEnter={() => setActiveCard(index)}
              onMouseLeave={() => setActiveCard(null)}
            >
              <Link href={`/categories/industry/${industry.id}`}>
                <div className={`relative h-full bg-white rounded-xl lg:rounded-2xl border border-gray-100 overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ${
                  activeCard === index ? "shadow-xl -translate-y-1" : "shadow-sm"
                }`}>
                  {/* Top Gradient Bar */}
                  <div className={`h-1.5 lg:h-2 bg-gradient-to-r ${industry.color}`} />

                  <div className="p-4 lg:p-5 xl:p-6">
                    {/* Icon & Growth Badge */}
                    <div className="flex items-start justify-between mb-3 lg:mb-4">
                      <div className={`p-2.5 lg:p-3 rounded-lg lg:rounded-xl ${industry.bgColor} transition-transform duration-300 group-hover:scale-110`}>
                        <div className={`bg-gradient-to-r ${industry.color} bg-clip-text text-transparent`}>
                          {industry.icon}
                        </div>
                      </div>
                      
                      <div className={`px-2 lg:px-3 py-1 lg:py-1.5 rounded-full bg-gradient-to-r ${industry.color} text-white text-xs lg:text-sm font-bold`}>
                        {industry.growth}
                      </div>
                    </div>

                    {/* Content */}
                    <h3 className="text-base lg:text-lg xl:text-xl font-bold text-[var(--clr-text-dark)] mb-1.5 lg:mb-2">
                      {industry.name}
                    </h3>
                    <p className="text-xs lg:text-sm text-gray-600 leading-relaxed mb-3 lg:mb-4 line-clamp-2">
                      {industry.description}
                    </p>

                    {/* Stats Grid */}
                    <div className="grid grid-cols-3 gap-1.5 lg:gap-2 mb-3 lg:mb-4">
                      <div className="text-center p-1.5 lg:p-2 bg-gray-50 rounded-lg">
                        <div className="text-sm lg:text-base font-bold text-[var(--clr-text-dark)]">
                          {industry.stats.companies}
                        </div>
                        <div className="text-[10px] lg:text-xs text-gray-500 mt-0.5">Companies</div>
                      </div>
                      <div className="text-center p-1.5 lg:p-2 bg-gray-50 rounded-lg">
                        <div className="text-sm lg:text-base font-bold text-[var(--clr-text-dark)]">
                          {industry.stats.products}
                        </div>
                        <div className="text-[10px] lg:text-xs text-gray-500 mt-0.5">Products</div>
                      </div>
                      <div className="text-center p-1.5 lg:p-2 bg-gray-50 rounded-lg">
                        <div className="text-sm lg:text-base font-bold text-[var(--clr-text-dark)]">
                          {industry.stats.growth_rate}
                        </div>
                        <div className="text-[10px] lg:text-xs text-gray-500 mt-0.5">Growth</div>
                      </div>
                    </div>

                    {/* CTA */}
                    <div className="flex items-center justify-between pt-3 lg:pt-4 border-t border-gray-100">
                      <span className="text-xs lg:text-sm font-semibold text-[var(--clr-primary)] group-hover:translate-x-1 transition-transform">
                        Explore {industry.name}
                      </span>
                      <ArrowUpRight className={`w-4 h-4 lg:w-5 lg:h-5 text-[var(--clr-primary)] transition-all duration-300 ${
                        activeCard === index ? "translate-x-1 -translate-y-1" : ""
                      }`} />
                    </div>
                  </div>

                  {/* Hover Glow Effect */}
                  <div className={`absolute inset-0 bg-gradient-to-r ${industry.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300 pointer-events-none`} />
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}