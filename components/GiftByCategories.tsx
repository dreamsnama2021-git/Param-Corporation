"use client";

import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRef, useState, useEffect } from "react";

// ─── Types ───────────────────────────────────────────────────────────────────
interface CategoryItem {
  id: string;
  title: string;
  image: string;
  href: string;
}

interface ProductItem {
  id: string;
  title: string;
  image: string;
  href: string;
}

// ─── Data ────────────────────────────────────────────────────────────────────
const CATEGORIES: CategoryItem[] = [
  {
    id: "appreciation",
    title: "Appreciation Gifts",
    image: "https://www.bigimpex.com/wp-content/uploads/2024/10/16-300x300.png",
    href: "/categories/appreciation-gifts",
  },
  {
    id: "household",
    title: "Household Gifts",
    image: "https://www.bigimpex.com/wp-content/uploads/2024/07/5.jpg",
    href: "/categories/household-gifts",
  },
  {
    id: "office",
    title: "Office Accessories",
    image: "https://www.bigimpex.com/wp-content/uploads/2024/10/Office-Acessiories-300x300.png",
    href: "/categories/office-accessories",
  },
  {
    id: "health",
    title: "Health and Hygiene",
    image: "https://www.bigimpex.com/wp-content/uploads/2024/10/Health-Hygiene-300x300.png",
    href: "/categories/health-hygiene",
  },
  {
    id: "gadgets",
    title: "Gadgets and Electronic Gifts",
    image: "https://www.bigimpex.com/wp-content/uploads/2024/10/Gadgets-Electronics-300x300.png",
    href: "/categories/gadgets-electronic",
  },
];

const GROB_PRODUCTS: ProductItem[] = [
  {
    id: "crystal-cube-4",
    title: "Crystal Cube 4 x 4 x 6 cm with Metallic Printing",
    image: "https://www.bigimpex.com/wp-content/uploads/2024/09/8.png",
    href: "/products/crystal-cube-4x4x6",
  },
  {
    id: "crystal-globe",
    title: "crystal globe 60mm with Engraving",
    image: "https://www.bigimpex.com/wp-content/uploads/2024/07/15-3.png",
    href: "/products/crystal-globe-60mm",
  },
  {
    id: "crystal-cube-5",
    title: "Crystal Cube 5 x 5 x 5 cm with Metallic Printing",
    image: "https://www.bigimpex.com/wp-content/uploads/2024/09/9.png",
    href: "/products/crystal-cube-5x5x5",
  },
  {
    id: "crystal-3d",
    title: "3D Crystal Laser Engraved",
    image: "https://www.bigimpex.com/wp-content/uploads/2025/10/WhatsApp-Image-2025-08-20-at-14.27.48_f1984dac-1199x1536.jpg",
    href: "/products/3d-crystal",
  },
  {
    id: "crystal-heart",
    title: "Crystal Heart Shape with LED Base",
    image: "https://www.bigimpex.com/wp-content/uploads/2024/09/7.png",
    href: "/products/crystal-heart",
  },
];

// ─── Component: Gifts By Categories ────────────────────────────────────────────
function GiftsByCategories() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScrollButtons = () => {
    const container = scrollContainerRef.current;
    if (container) {
      setCanScrollLeft(container.scrollLeft > 0);
      setCanScrollRight(
        container.scrollLeft < container.scrollWidth - container.clientWidth - 10
      );
    }
  };

  const scroll = (direction: "left" | "right") => {
    const container = scrollContainerRef.current;
    if (container) {
      const scrollAmount = 180; // Smaller scroll amount for smaller cards
      container.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
      setTimeout(checkScrollButtons, 300);
    }
  };

  return (
    <section className="w-full bg-[#f5f5f5] py-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold text-gray-900 flex-1 text-center sm:text-left">
            Gifts By Categories
          </h2>
          
          <div className="hidden sm:flex gap-2">
            <button
              onClick={() => scroll("left")}
              disabled={!canScrollLeft}
              className={`p-2 rounded-full transition-all duration-200 border border-gray-300 ${
                canScrollLeft
                  ? "bg-white text-gray-800 hover:bg-gray-800 hover:text-white hover:border-gray-800 cursor-pointer"
                  : "bg-gray-100 text-gray-400 cursor-not-allowed"
              }`}
              aria-label="Scroll left"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={() => scroll("right")}
              disabled={!canScrollRight}
              className={`p-2 rounded-full transition-all duration-200 border border-gray-300 ${
                canScrollRight
                  ? "bg-white text-gray-800 hover:bg-gray-800 hover:text-white hover:border-gray-800 cursor-pointer"
                  : "bg-gray-100 text-gray-400 cursor-not-allowed"
              }`}
              aria-label="Scroll right"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Carousel - Smaller Cards */}
        <div
          ref={scrollContainerRef}
          onScroll={checkScrollButtons}
          className="flex gap-4 overflow-x-auto scrollbar-hide pb-2 snap-x snap-mandatory justify-center"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {CATEGORIES.map((category) => (
            <a
              key={category.id}
              href={category.href}
              className="flex-shrink-0 w-[140px] snap-start group"
            >
              <div className="relative w-[140px] h-[140px] rounded-xl overflow-hidden bg-white shadow-sm mb-2 transition-all duration-300 group-hover:shadow-md group-hover:-translate-y-0.5 border border-gray-100">
                <Image
                  src={category.image}
                  alt={category.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="140px"
                  unoptimized
                />
              </div>
              <h3 className="text-center text-xs font-medium text-gray-700 group-hover:text-[#e8402a] transition-colors duration-200 leading-tight px-1">
                {category.title}
              </h3>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Component: Grob Prismo ───────────────────────────────────────────────────
function GrobPrismo() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [currentPage, setCurrentPage] = useState(0);
  
  const itemsPerView = 3;
  const totalPages = Math.ceil(GROB_PRODUCTS.length / itemsPerView);

  const scroll = (direction: "left" | "right") => {
    const container = scrollContainerRef.current;
    if (!container) return;
    
    const cardWidth = 280; // Fixed card width + gap
    const scrollAmount = direction === "left" ? -cardWidth : cardWidth;
    
    container.scrollBy({ left: scrollAmount, behavior: "smooth" });
    
    // Update page indicator
    const newPage = direction === "left" 
      ? Math.max(0, currentPage - 1) 
      : Math.min(totalPages - 1, currentPage + 1);
    setCurrentPage(newPage);
  };

  const goToPage = (pageIndex: number) => {
    const container = scrollContainerRef.current;
    if (!container) return;
    
    const cardWidth = 280;
    container.scrollTo({ left: cardWidth * pageIndex * itemsPerView, behavior: "smooth" });
    setCurrentPage(pageIndex);
  };

  return (
    <section className="w-full bg-[#f5f5f5] py-10 border-t border-gray-200">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <h2 className="text-xl font-bold text-gray-900 text-center mb-8">
          Grob Prismo
        </h2>

        {/* Carousel Container */}
        <div className="relative flex items-center justify-center">
          {/* Navigation Arrows */}
          <button
            onClick={() => scroll("left")}
            className="absolute -left-2 sm:-left-4 top-1/2 -translate-y-1/2 z-10 w-7 h-7 flex items-center justify-center rounded-full bg-[#ff5757] text-white shadow-md hover:bg-[#e64c4c] transition-all duration-200"
            aria-label="Previous products"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          
          <button
            onClick={() => scroll("right")}
            className="absolute -right-2 sm:-right-4 top-1/2 -translate-y-1/2 z-10 w-7 h-7 flex items-center justify-center rounded-full bg-[#ff5757] text-white shadow-md hover:bg-[#e64c4c] transition-all duration-200"
            aria-label="Next products"
          >
            <ChevronRight className="w-4 h-4" />
          </button>

          {/* Scrollable Cards Container - Fixed width */}
          <div className="w-[860px] max-w-full overflow-hidden">
            <div 
              ref={scrollContainerRef}
              className="flex gap-4 overflow-x-auto scrollbar-hide snap-x snap-mandatory"
              style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            >
              {GROB_PRODUCTS.map((product) => (
                <a
                  key={product.id}
                  href={product.href}
                  className="w-[270px] flex-shrink-0 snap-start group"
                >
                  {/* Dark Card - Smaller height */}
                  <div className="h-[200px] rounded-lg overflow-hidden bg-[#1a1a1a] mb-2 transition-all duration-300 group-hover:shadow-lg relative">
                    <Image
                      src={product.image}
                      alt={product.title}
                      fill
                      className="object-contain p-4 transition-transform duration-500 group-hover:scale-105"
                      sizes="270px"
                      unoptimized
                    />
                  </div>
                  {/* Title - Compact */}
                  <h3 className="text-center text-xs text-gray-800 font-medium leading-tight px-2 group-hover:text-[#e8402a] transition-colors duration-200 line-clamp-2 h-[36px] flex items-center justify-center">
                    {product.title}
                  </h3>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center gap-1.5 mt-6">
          {Array.from({ length: totalPages }).map((_, idx) => (
            <button
              key={idx}
              onClick={() => goToPage(idx)}
              className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                idx === currentPage
                  ? "bg-gray-800 w-3"
                  : "bg-gray-400 hover:bg-gray-500"
              }`}
              aria-label={`Go to page ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Main Export ──────────────────────────────────────────────────────────────
export default function ProductSections() {
  return (
    <>
      <GiftsByCategories />
      <GrobPrismo />
      
      {/* Global Styles */}
      <style jsx global>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none !important;
        }
        .scrollbar-hide {
          -ms-overflow-style: none !important;
          scrollbar-width: none !important;
        }
      `}</style>
    </>
  );
}
