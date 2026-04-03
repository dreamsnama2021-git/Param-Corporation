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
  // {
  //   id: "pharmaceutical",
  //   title: "Pharmaceutical",
  //   image: "http://www.bigimpex.com/wp-content/uploads/2024/10/Oil-Energy.png",
  //   href: "/industries/pharmaceutical",
  // },
  // {
  //   id: "banking",
  //   title: "Banking & Finance",
  //   image: "https://www.bigimpex.com/wp-content/uploads/2024/01/banking-gifts.jpg",
  //   href: "/industries/banking",
  // },
  // {
  //   id: "hospitality",
  //   title: "Hospitality",
  //   image: "https://www.bigimpex.com/wp-content/uploads/2024/01/hospitality-gifts.jpg",
  //   href: "/industries/hospitality",
  // },
];

export default function GiftsByIndustry() {
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
      const scrollAmount = 300;
      container.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
      setTimeout(checkScrollButtons, 300);
    }
  };

  return (
    <section className="w-full bg-white py-12 sm:py-16 lg:py-20">
      {/* Intro Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center text-gray-900 mb-6">
          Best Corporate Gifting Company in Mumbai and India
        </h2>
        <div className="max-w-4xl mx-auto text-center text-gray-600 text-sm sm:text-base leading-relaxed space-y-4">
          <p>
            BIG Impex is a <strong className="text-gray-900">leading provider of employee gifts</strong> in Mumbai. 
            We specialize in supplying high-quality gifts to industries such as pharmaceuticals, banking, and 
            hospitality all over India. Since our establishment in 2003, we have been providing gifting solutions 
            to esteemed clients like Sun Pharmaceuticals Ltd., Dr. Reddy&apos;s Ltd., Abbott India, Torrent 
            Pharmaceuticals Ltd., and HDFC Bank.
          </p>
          <p>
            We are dedicated to delivering products that not only align with your brand&apos;s values but also 
            leave a lasting impression. BIG Imports and Gifts is your trusted partner for corporate gifting 
            in Mumbai.
          </p>
        </div>
      </div>

      {/* Gifts By Industry Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header with Navigation */}
        <div className="flex items-center justify-between mb-8">
          <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900">
            Gifts By Industry
          </h3>
          
          <div className="flex gap-2">
            <button
              onClick={() => scroll("left")}
              disabled={!canScrollLeft}
              className={`p-2 rounded-full border-2 transition-all duration-200 ${
                canScrollLeft
                  ? "border-gray-800 text-gray-800 hover:bg-gray-800 hover:text-white cursor-pointer"
                  : "border-gray-300 text-gray-300 cursor-not-allowed"
              }`}
              aria-label="Scroll left"
            >
              <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>
            <button
              onClick={() => scroll("right")}
              disabled={!canScrollRight}
              className={`p-2 rounded-full border-2 transition-all duration-200 ${
                canScrollRight
                  ? "border-gray-800 text-gray-800 hover:bg-gray-800 hover:text-white cursor-pointer"
                  : "border-gray-300 text-gray-300 cursor-not-allowed"
              }`}
              aria-label="Scroll right"
            >
              <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>
          </div>
        </div>

        {/* Carousel Container */}
        <div
          ref={scrollContainerRef}
          onScroll={checkScrollButtons}
          className="flex gap-4 sm:gap-6 overflow-x-auto scrollbar-hide pb-4 snap-x snap-mandatory"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {INDUSTRIES.map((industry) => (
            <a
              key={industry.id}
              href={industry.href}
              className="flex-shrink-0 w-[160px] sm:w-[200px] lg:w-[220px] snap-start group"
            >
              <div className="relative aspect-square rounded-2xl sm:rounded-3xl overflow-hidden border-4 border-gray-100 shadow-lg mb-3 transition-transform duration-300 group-hover:scale-105 group-hover:shadow-xl">
                <Image
                  src={industry.image}
                  alt={industry.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  sizes="(max-width: 640px) 160px, (max-width: 1024px) 200px, 220px"
                  unoptimized
                />
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
              </div>
              <h4 className="text-center text-sm sm:text-base font-medium text-gray-800 group-hover:text-[#e8402a] transition-colors duration-200 line-clamp-2">
                {industry.title}
              </h4>
            </a>
          ))}
        </div>

        {/* Mobile Scroll Indicator */}
        <div className="sm:hidden flex justify-center mt-4 gap-1">
          {INDUSTRIES.map((_, idx) => (
            <div
              key={idx}
              className="w-1.5 h-1.5 rounded-full bg-gray-300"
            />
          ))}
        </div>
      </div>

      {/* Add custom scrollbar hide styles */}
      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
}
