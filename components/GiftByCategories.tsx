"use client";

import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRef, useState } from "react";

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
    image: "https://www.bigimpex.com/wp-content/uploads/2024/01/appreciation-gifts.jpg",
    href: "/categories/appreciation-gifts",
  },
  {
    id: "household",
    title: "Household Gifts",
    image: "https://www.bigimpex.com/wp-content/uploads/2024/01/household-gifts.jpg",
    href: "/categories/household-gifts",
  },
  {
    id: "office",
    title: "Office Accessories",
    image: "https://www.bigimpex.com/wp-content/uploads/2024/01/office-accessories.jpg",
    href: "/categories/office-accessories",
  },
  {
    id: "health",
    title: "Health and Hygiene",
    image: "https://www.bigimpex.com/wp-content/uploads/2024/01/health-hygiene.jpg",
    href: "/categories/health-hygiene",
  },
  {
    id: "gadgets",
    title: "Gadgets and Electronic Gifts",
    image: "https://www.bigimpex.com/wp-content/uploads/2024/01/gadgets-electronic.jpg",
    href: "/categories/gadgets-electronic",
  },
];

const GROB_PRODUCTS: ProductItem[] = [
  {
    id: "crystal-cube-4",
    title: "Crystal Cube 4 x 4 x 6 cm with Metallic Printing",
    image: "https://www.bigimpex.com/wp-content/uploads/2024/01/crystal-cube-4.jpg",
    href: "/products/crystal-cube-4x4x6",
  },
  {
    id: "crystal-globe",
    title: "crystal globe 60mm with Engraving",
    image: "https://www.bigimpex.com/wp-content/uploads/2024/01/crystal-globe.jpg",
    href: "/products/crystal-globe-60mm",
  },
  {
    id: "crystal-cube-5",
    title: "Crystal Cube 5 x 5 x 5 cm with Metallic Printing",
    image: "https://www.bigimpex.com/wp-content/uploads/2024/01/crystal-cube-5.jpg",
    href: "/products/crystal-cube-5x5x5",
  },
  {
    id: "crystal-3d",
    title: "3D Crystal Laser Engraved",
    image: "https://www.bigimpex.com/wp-content/uploads/2024/01/crystal-3d.jpg",
    href: "/products/3d-crystal",
  },
  {
    id: "crystal-heart",
    title: "Crystal Heart Shape with LED Base",
    image: "https://www.bigimpex.com/wp-content/uploads/2024/01/crystal-heart.jpg",
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
      const scrollAmount = 240;
      container.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
      setTimeout(checkScrollButtons, 300);
    }
  };

  return (
    <section className="w-full bg-[#f5f5f5] py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 flex-1 text-center sm:text-left">
            Gifts By Categories
          </h2>
          
          <div className="hidden sm:flex gap-2">
            <button
              onClick={() => scroll("left")}
              disabled={!canScrollLeft}
              className={`p-2 rounded-full transition-all duration-200 ${
                canScrollLeft
                  ? "bg-white shadow-md text-gray-800 hover:bg-gray-800 hover:text-white cursor-pointer"
                  : "bg-gray-200 text-gray-400 cursor-not-allowed"
              }`}
              aria-label="Scroll left"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => scroll("right")}
              disabled={!canScrollRight}
              className={`p-2 rounded-full transition-all duration-200 ${
                canScrollRight
                  ? "bg-white shadow-md text-gray-800 hover:bg-gray-800 hover:text-white cursor-pointer"
                  : "bg-gray-200 text-gray-400 cursor-not-allowed"
              }`}
              aria-label="Scroll right"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Carousel */}
        <div
          ref={scrollContainerRef}
          onScroll={checkScrollButtons}
          className="flex gap-4 sm:gap-6 overflow-x-auto scrollbar-hide pb-4 snap-x snap-mandatory"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {CATEGORIES.map((category) => (
            <a
              key={category.id}
              href={category.href}
              className="flex-shrink-0 w-[140px] sm:w-[180px] lg:w-[200px] snap-start group"
            >
              <div className="relative aspect-square rounded-2xl overflow-hidden bg-white shadow-sm mb-3 transition-all duration-300 group-hover:shadow-lg group-hover:-translate-y-1">
                <Image
                  src={category.image}
                  alt={category.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 140px, (max-width: 1024px) 180px, 200px"
                  unoptimized
                />
              </div>
              <h3 className="text-center text-xs sm:text-sm font-medium text-gray-700 group-hover:text-[#e8402a] transition-colors duration-200 leading-tight">
                {category.title}
              </h3>
            </a>
          ))}
        </div>

        {/* Mobile Scroll Indicator */}
        <div className="flex sm:hidden justify-center mt-4 gap-1">
          {CATEGORIES.map((_, idx) => (
            <div key={idx} className="w-1.5 h-1.5 rounded-full bg-gray-300" />
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Component: Grob Prismo ───────────────────────────────────────────────────
function GrobPrismo() {
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 3;
  const totalPages = Math.ceil(GROB_PRODUCTS.length / itemsPerPage);

  const nextSlide = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages);
  };

  const prevSlide = () => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
  };

  const visibleProducts = GROB_PRODUCTS.slice(
    currentPage * itemsPerPage,
    currentPage * itemsPerPage + itemsPerPage
  );

  return (
    <section className="w-full bg-[#f5f5f5] py-12 sm:py-16 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 text-center mb-10">
          Grob Prismo
        </h2>

        {/* Products Grid/Carousel */}
        <div className="relative">
          {/* Navigation Arrows - Side positioned */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 sm:-translate-x-4 z-10 w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center rounded-full bg-white/80 backdrop-blur shadow-md text-gray-800 hover:bg-white hover:shadow-lg transition-all duration-200"
            aria-label="Previous products"
          >
            <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>
          
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 sm:translate-x-4 z-10 w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center rounded-full bg-white/80 backdrop-blur shadow-md text-gray-800 hover:bg-white hover:shadow-lg transition-all duration-200"
            aria-label="Next products"
          >
            <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>

          {/* Products Container */}
          <div className="overflow-hidden px-2 sm:px-0">
            <div className="flex gap-4 sm:gap-6 transition-transform duration-500 ease-in-out">
              {visibleProducts.map((product) => (
                <a
                  key={product.id}
                  href={product.href}
                  className="flex-1 min-w-0 group"
                >
                  {/* Dark Card */}
                  <div className="relative aspect-[4/3] rounded-lg overflow-hidden bg-[#1a1a1a] mb-3 transition-transform duration-300 group-hover:scale-[1.02]">
                    <Image
                      src={product.image}
                      alt={product.title}
                      fill
                      className="object-contain p-4 sm:p-6 transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 33vw, 400px"
                      unoptimized
                    />
                  </div>
                  {/* Title */}
                  <h3 className="text-center text-xs sm:text-sm text-gray-800 font-medium leading-tight px-2 group-hover:text-[#e8402a] transition-colors duration-200">
                    {product.title}
                  </h3>
                </a>
              ))}
            </div>
          </div>

          {/* Pagination Dots */}
          <div className="flex justify-center gap-2 mt-8">
            {Array.from({ length: totalPages }).map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentPage(idx)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  idx === currentPage
                    ? "bg-gray-800 w-4"
                    : "bg-gray-300 hover:bg-gray-400"
                }`}
                aria-label={`Go to page ${idx + 1}`}
              />
            ))}
          </div>
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
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </>
  );
}
