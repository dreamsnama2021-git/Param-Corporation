"use client";

import React, { useState, useEffect, useCallback, useRef } from "react";
import Image from "next/image";
import { Sparkles, ArrowRight } from "lucide-react";
import Link from "next/link";

// ─── CATEGORIES DATA ─────────────────
const CATEGORIES = [
  {
    id: "1",
    title: "Category",
    image: "/products/CUSTOMIZED CHITS HOLDER.png",
    count: "24",
    link: "/categories/1?tab=categories",
    tab: "categories",
  },
  {
    id: "2",
    title: "Therapy",
    image: "/products/4 IN 1 DESK ORGANISER.png",
    count: "18",
    link: "/medipride",
    isExternal: false,
  },
  {
    id: "3",
    title: "Personalized Gifts",
    image: "/products/CUSTOMIZED MOBILE HOLDER.png",
    count: "32",
    link: "/categories/3?tab=personalized-gifts",
    tab: "personalized-gifts",
  },
  {
    id: "4",
    title: "Occasion",
    image: "/products/DR QR CODE STANDEE.png",
    count: "15",
    link: "/categories/4?tab=occasion",
    tab: "occasion",
  },
];

// ─── TRENDING PRODUCTS DATA ─────────────────
const TRENDING_PRODUCTS = [
  {
    id: "1",
    title: "Crystal Trophy",
    image: "/products/CUSTOMIZED CHITS HOLDER.png",
    price: "89",
    tag: "Best Seller",
  },
  {
    id: "2",
    title: "Premium Globe",
    image: "/products/CUSTOMIZED ORANGE PEN HOLDER.png",
    price: "120",
    tag: "Hot",
  },
  {
    id: "3",
    title: "LED Heart Lamp",
    image: "/products/DR QR CODE STANDEE.png",
    price: "75",
    tag: "New",
  },
  {
    id: "4",
    title: "Executive Award",
    image: "/products/PERSONALISED DR PHOTO TROPHY.png",
    price: "150",
    tag: "Prime",
  },
  {
    id: "5",
    title: "Golden Stethoscope",
    image: "/products/CUSTOMIZED CHITS HOLDER.png",
    price: "199",
    tag: "Premium",
  },
  {
    id: "6",
    title: "Medical Plaque",
    image: "/products/4 IN 1 DESK ORGANISER.png",
    price: "85",
    tag: "Popular",
  },
  {
    id: "7",
    title: "Doctor's Diary",
    image: "/products/CUSTOMIZED MOBILE HOLDER.png",
    price: "45",
    tag: "Essential",
  },
  {
    id: "8",
    title: "Clinic Name Plate",
    image: "/products/DR QR CODE STANDEE.png",
    price: "110",
    tag: "Custom",
  },
  {
    id: "9",
    title: "Caduceus Statue",
    image: "/products/PERSONALISED DR PHOTO TROPHY.png",
    price: "175",
    tag: "Classic",
  },
  {
    id: "10",
    title: "Digital Prescription Pad",
    image: "/products/CUSTOMIZED ORANGE PEN HOLDER.png",
    price: "95",
    tag: "Digital",
  },
];

// ─── CATEGORIES SECTION ─────────────────
function GiftsByCategories() {
  return (
    <section className="w-full py-6 sm:py-8 md:py-10 xl:py-12">
      <div className="max-w-[1450px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-10 md:mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#1a1a1a] tracking-tight mb-2 sm:mb-3">
            Our <span className="text-[#0093cb]">Products</span>
          </h2>
          <div className="flex justify-center">
            <div className="w-12 sm:w-14 md:w-16 h-1 bg-[#0093cb] rounded-full" />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-8 sm:mb-10">
          {CATEGORIES.map((item) => (
            <Link
              key={item.id}
              href={item.link || `/categories/${item.id}?tab=${item.tab}`}
              className="group cursor-pointer relative h-[250px] sm:h-[300px] md:h-[340px] lg:h-[370px] rounded-xl sm:rounded-2xl overflow-hidden 
                shadow-md hover:shadow-2xl transition-all duration-500 ease-out
                transform hover:-translate-y-1 sm:hover:-translate-y-2 block"
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                unoptimized
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent 
                opacity-90 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4 md:p-5 text-white">
                <h3 className="font-normal text-lg sm:text-xl md:text-2xl mb-0.5 sm:mb-1 group-hover:translate-x-1 transition-transform duration-300">
                  {item.title}
                </h3>
              </div>
            </Link>
          ))}
        </div>

        <div className="flex justify-center">
          <Link
            href="/categories/all?tab=categories"
            className="group flex items-center gap-2 sm:gap-3 bg-white border-2 border-[#0093cb] text-[#0093cb] px-4 sm:px-5 py-2 sm:py-2.5 rounded-full font-semibold text-xs sm:text-sm hover:bg-[#0093cb] hover:text-white transition-all duration-300 transform hover:scale-105"
          >
            <span>View All</span>
            <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
}

// ─── TRENDING PRODUCTS WITH MODERN INFINITE MARQUEE ─────────────────
function TrendingProducts() {
  const [isHovered, setIsHovered] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number | null>(null);
  const positionRef = useRef(0);
  const speedRef = useRef(0.8);

  // Duplicate products for seamless infinite scroll
  const duplicatedProducts = [...TRENDING_PRODUCTS, ...TRENDING_PRODUCTS, ...TRENDING_PRODUCTS];

  const animate = useCallback(() => {
    if (!scrollRef.current || isHovered) {
      animationRef.current = requestAnimationFrame(animate);
      return;
    }

    positionRef.current += speedRef.current;

    const singleSetWidth = scrollRef.current.scrollWidth / 3;
    if (positionRef.current >= singleSetWidth) {
      positionRef.current -= singleSetWidth;
    }

    scrollRef.current.style.transform = `translateX(-${positionRef.current}px)`;
    animationRef.current = requestAnimationFrame(animate);
  }, [isHovered]);

  useEffect(() => {
    animationRef.current = requestAnimationFrame(animate);
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [animate]);

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  return (
    <section className="w-full bg-[#f8fafc] py-10 sm:py-12 md:py-16 lg:py-20 xl:py-16 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, #0093cb 1px, transparent 0)',
          backgroundSize: '30px 30px sm:40px 40px'
        }} />
      </div>

      <div className="max-w-[1450px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-8 sm:mb-10 md:mb-12">
          <span className="text-[10px] sm:text-xs font-bold tracking-[0.3em] uppercase text-[#0093cb] mb-2 sm:mb-3 block">
            Trending Now
          </span>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold capitalize tracking-tight mb-2 sm:mb-3 text-[var(--clr-text-dark)]">
            Doctor's <span className="text-[#0093cb]">Favorite</span>
          </h2>
          <div className="flex justify-center items-center gap-2 sm:gap-3">
            <div className="w-6 sm:w-8 h-[2px] bg-[#0093cb]/30" />
            <div className="w-12 sm:w-14 md:w-16 h-1 bg-[#0093cb] rounded-full" />
            <div className="w-6 sm:w-8 h-[2px] bg-[#0093cb]/30" />
          </div>
        </div>

        <div className="relative">
          {/* Marquee Container */}
          <div
            className="overflow-hidden relative py-2 sm:py-4"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            {/* Gradient Fade Edges */}
            <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-20 lg:w-32 bg-gradient-to-r from-[#f8fafc] to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-20 lg:w-32 bg-gradient-to-l from-[#f8fafc] to-transparent z-10 pointer-events-none" />

            {/* Scrolling Content */}
            <div
              ref={scrollRef}
              className="flex gap-3 sm:gap-4 lg:gap-5"
              style={{ willChange: 'transform' }}
            >
              {duplicatedProducts.map((item, index) => (
                <Link
                  key={`${item.id}-${index}`}
                  href={`/products/${item.id}`}
                  className="group relative h-[220px] sm:h-[260px] md:h-[280px] lg:h-[300px] xl:h-[320px] 
                    w-[calc(25%-12px)] lg:w-[calc(25%-15px)] 
                    min-w-[160px] sm:min-w-[180px] md:min-w-[200px] lg:min-w-[220px] xl:min-w-[240px]
                    rounded-xl sm:rounded-2xl overflow-hidden flex-shrink-0
                    shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]
                    hover:shadow-[0_8px_30px_-5px_rgba(0,147,203,0.2),0_20px_40px_-5px_rgba(0,0,0,0.1)]
                    transition-all duration-500 ease-out
                    hover:-translate-y-1 sm:hover:-translate-y-2"
                >
                  {/* Full Image */}
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition-all duration-700 ease-in-out 
                      group-hover:scale-110"
                    unoptimized
                    sizes="(max-width: 640px) 160px, (max-width: 768px) 180px, (max-width: 1024px) 200px, 240px"
                  />

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent 
                    opacity-80 group-hover:opacity-90 transition-opacity duration-500" />

                  {/* Name at Bottom */}
                  <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4 lg:p-5">
                    <h3 className="font-semibold text-sm sm:text-base md:text-lg lg:text-xl text-white 
                      group-hover:translate-x-1 transition-transform duration-300">
                      {item.title}
                    </h3>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>


      </div>
    </section>
  );
}

// ─── MAIN EXPORT ─────────────────
export default function ProductSections() {
  return (
    <div className="">
      <GiftsByCategories />
      <TrendingProducts />
    </div>
  );
}