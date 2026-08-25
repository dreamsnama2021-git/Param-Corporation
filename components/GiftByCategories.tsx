"use client";

import React, { useState, useEffect, useCallback, useRef } from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

// ─── CATEGORIES DATA ─────────────────
const CATEGORIES = [
  {
    id: "1",
    title: "Category",
    image:
      "https://pub-735dbd7583d74ad5949115d6fdf77023.r2.dev/Therepy/ENT%20%26%20Respiratory/32.png",
    count: "24",
    link: "/categories/all?tab=categories",
    tab: "categories",
  },
  {
    id: "2",
    title: "Therapy",
    image:
      "https://pub-735dbd7583d74ad5949115d6fdf77023.r2.dev/Therepy/ENT%20%26%20Respiratory/28.png",
    count: "18",
    link: "/medipride",
    isExternal: false,
  },
  {
    id: "3",
    title: "Personalized Gifts",
    image:
      "https://pub-735dbd7583d74ad5949115d6fdf77023.r2.dev/Personlized/3D%20Plates/3D%204.png",
    count: "32",
    link: "/categories/all?tab=personalized",
    tab: "personalized-gifts",
  },
  {
    id: "4",
    title: "Occasion",
    image:
      "https://pub-735dbd7583d74ad5949115d6fdf77023.r2.dev/Categories/FIBRE%20%26%20RESIN/ChatGPT%20Image%20May%2028%2C%202026%2C%2003_09_06%20PM.png",
    count: "15",
    link: "/categories/all?tab=occasion",
    tab: "occasion",
  },
];

// ─── TRENDING PRODUCTS DATA ─────────────────
const TRENDING_PRODUCTS = [
  {
    id: "1",
    title: "Crystal Trophy",
    image:
      "https://pub-735dbd7583d74ad5949115d6fdf77023.r2.dev/Banners/WhatsApp%20Image%202026-07-02%20at%2010.03.14%20AM.jpeg",
    price: "89",
    tag: "Best Seller",
  },
  {
    id: "2",
    title: "Premium Globe",
    image:
      "https://pub-735dbd7583d74ad5949115d6fdf77023.r2.dev/Banners/WhatsApp%20Image%202026-07-02%20at%2010.06.41%20AM.jpeg",
    price: "120",
    tag: "Hot",
  },
  {
    id: "3",
    title: "LED Heart Lamp",
    image:
      "https://pub-735dbd7583d74ad5949115d6fdf77023.r2.dev/Banners/Doctors%20Fav/ChatGPT%20Image%20Aug%2025%2C%202026%2C%2003_47_10%20PM.png",
    price: "75",
    tag: "New",
  },
  {
    id: "4",
    title: "Executive Award",
    image:
      "https://pub-735dbd7583d74ad5949115d6fdf77023.r2.dev/Banners/Doctors%20Fav/ChatGPT%20Image%20Aug%2025%2C%202026%2C%2004_02_09%20PM.png",
    price: "150",
    tag: "Prime",
  },
  {
    id: "5",
    title: "Golden Stethoscope",
    image:
      "https://pub-735dbd7583d74ad5949115d6fdf77023.r2.dev/Banners/Doctors%20Fav/ChatGPT%20Image%20Aug%2025%2C%202026%2C%2004_06_30%20PM.png",
    price: "199",
    tag: "Premium",
  },
  {
    id: "6",
    title: "Medical Plaque",
    image:
      "https://pub-735dbd7583d74ad5949115d6fdf77023.r2.dev/Banners/Doctors%20Fav/ChatGPT%20Image%20Aug%2025%2C%202026%2C%2004_02_24%20PM.png",
    price: "85",
    tag: "Popular",
  },
  {
    id: "7",
    title: "Doctor's Diary",
    image:
      "https://pub-735dbd7583d74ad5949115d6fdf77023.r2.dev/Banners/Doctors%20Fav/ChatGPT%20Image%20Aug%2025%2C%202026%2C%2004_09_25%20PM.png",
    price: "45",
    tag: "Essential",
  },
  {
    id: "8",
    title: "Clinic Name Plate",
    image:
      "https://pub-735dbd7583d74ad5949115d6fdf77023.r2.dev/Banners/Doctors%20Fav/ChatGPT%20Image%20Aug%2025%2C%202026%2C%2004_24_11%20PM.png",
    price: "110",
    tag: "Custom",
  },
  {
    id: "9",
    title: "Caduceus Statue",
    image:
      "https://pub-735dbd7583d74ad5949115d6fdf77023.r2.dev/Banners/Doctors%20Fav/uterus_ovary_product_339x338.png",
    price: "175",
    tag: "Classic",
  },
  {
    id: "10",
    title: "Digital Prescription Pad",
    image:
      "https://pub-735dbd7583d74ad5949115d6fdf77023.r2.dev/Banners/Doctors%20Fav/ChatGPT%20Image%20Aug%2025%2C%202026%2C%2004_33_38%20PM.png",
    price: "95",
    tag: "Digital",
  },
];

// ─── CATEGORIES SECTION ─────────────────
function GiftsByCategories() {
  const router = useRouter();

  // Function to handle navigation with scroll to top on destination
  const handleNavigation = (href: string) => {
    // Store flag in sessionStorage
    sessionStorage.setItem("scrollToTop", "true");

    // Navigate using Next.js router
    router.push(href);
  };

  return (
    <section className="w-full bg-[#fafcff] py-8 sm:py-10 md:py-12 lg:py-16 xl:py-20">
      <div className="max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-8">
        {/* Section Header - Now Added */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="text-center mb-8 sm:mb-10 md:mb-12 lg:mb-12 xl:mb-16"
        >
          <p className="text-xs xl:text-sm font-bold uppercase tracking-[0.2em] mb-2 sm:mb-3 flex items-center justify-center gap-2 text-[#0093cb]">
            <span className="inline-block w-4 sm:w-5 md:w-6 h-[1.5px] bg-[#0093cb]" />
            Shop by Category
            <span className="inline-block w-4 sm:w-5 md:w-6 h-[1.5px] bg-[#0093cb]" />
          </p>

          <h2 className="text-2xl sm:text-3xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-extrabold capitalize tracking-tight mb-2 sm:mb-3 text-[#1a1a1a]">
            Our <span className="text-[#0093cb]">Products</span>
          </h2>

          <div className="flex justify-center items-center gap-2 sm:gap-3">
            <div className="w-6 sm:w-8 h-[1.5px] bg-[#0093cb]/30" />
            <div className="w-12 sm:w-14 md:w-16 h-1 bg-[#0093cb] rounded-full" />
            <div className="w-6 sm:w-8 h-[1.5px] bg-[#0093cb]/30" />
          </div>
        </motion.div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6 xl:gap-8 mb-10 sm:mb-12 lg:mb-12 xl:mb-16">
          {CATEGORIES.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: index * 0.1 }}
            >
              <div
                onClick={() =>
                  handleNavigation(
                    item.link || `/categories/${item.id}?tab=${item.tab}`,
                  )
                }
                className="group cursor-pointer relative h-[250px] sm:h-[280px] md:h-[320px] lg:h-[350px] xl:h-[380px] rounded-xl sm:rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 ease-out transform hover:-translate-y-1.5 sm:hover:-translate-y-2 block border border-transparent hover:border-[#0093cb]/20"
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  unoptimized
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-90 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Subtle Primary Glow on Hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0093cb]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5 md:p-6 text-white">
                  <h3 className="font-bold text-base sm:text-[16px] md:text-lg xl:text-xl mb-0.5 sm:mb-1 group-hover:translate-x-1 transition-transform duration-300">
                    {item.title}
                  </h3>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, delay: 0.2 }}
          className="flex justify-center"
        >
          <button
            onClick={() => handleNavigation("/categories/all?tab=all")}
            className="group flex items-center gap-2 sm:gap-3 bg-white border-2 border-[#0093cb] text-[#0093cb] px-5 sm:px-6 md:px-8 py-2 sm:py-2.5 md:py-3 rounded-full font-semibold text-sm hover:bg-[#0093cb] hover:text-white hover:shadow-[0_8px_25px_-10px_rgba(0,147,203,0.4)] transition-all duration-300"
          >
            <span>View All Categories</span>
            <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 transition-transform group-hover:translate-x-1" />
          </button>
        </motion.div>
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
  const duplicatedProducts = [
    ...TRENDING_PRODUCTS,
    ...TRENDING_PRODUCTS,
    ...TRENDING_PRODUCTS,
  ];

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
    <section className="w-full bg-[#f8fafc] py-8 sm:py-10 md:py-12 lg:py-16 xl:py-20 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, #0093cb 1px, transparent 0)",
            backgroundSize: "30px 30px",
          }}
        />
      </div>

      <div className="max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-8 relative ">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="text-center mb-8 sm:mb-10 md:mb-12 lg:mb-12 xl:mb-16"
        >
          <p className="text-xs xl:text-sm font-bold uppercase tracking-[0.2em] mb-2 sm:mb-3 flex items-center justify-center gap-2 text-[#0093cb]">
            <span className="inline-block w-4 sm:w-5 md:w-6 h-[1.5px] bg-[#0093cb]" />
            Trending Now
            <span className="inline-block w-4 sm:w-5 md:w-6 h-[1.5px] bg-[#0093cb]" />
          </p>

          <h2 className="text-2xl sm:text-3xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-extrabold capitalize tracking-tight mb-2 sm:mb-3 text-[#1a1a1a]">
            Doctor's <span className="text-[#0093cb]">Favorite</span>
          </h2>

          <div className="flex justify-center items-center gap-2 sm:gap-3">
            <div className="w-6 sm:w-8 h-[1.5px] bg-[#0093cb]/30" />
            <div className="w-12 sm:w-14 md:w-16 h-1 bg-[#0093cb] rounded-full" />
            <div className="w-6 sm:w-8 h-[1.5px] bg-[#0093cb]/30" />
          </div>
        </motion.div>

        {/* Marquee Container */}
        <div className="relative">
          <div
            className="overflow-hidden relative py-2 sm:py-4"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            {/* Gradient Fade Edges */}
            <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-20 lg:w-32 bg-gradient-to-r from-[#f8fafc] to-transparent  pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-20 lg:w-32 bg-gradient-to-l from-[#f8fafc] to-transparent  pointer-events-none" />

            {/* Scrolling Content */}
            <div
              ref={scrollRef}
              className="flex gap-4 sm:gap-5 lg:gap-6"
              style={{ willChange: "transform" }}
            >
              {duplicatedProducts.map((item, index) => (
                <div
                  key={`${item.id}-${index}`}
                  className="group relative h-[220px] sm:h-[260px] md:h-[280px] lg:h-[300px] xl:h-[340px] 
                    w-[calc(25%-12px)] lg:w-[calc(25%-18px)] 
                    min-w-[160px] sm:min-w-[180px] md:min-w-[200px] lg:min-w-[220px] xl:min-w-[260px]
                    rounded-xl sm:rounded-2xl overflow-hidden flex-shrink-0
                    shadow-md hover:shadow-2xl
                    transition-all duration-500 ease-out
                    hover:-translate-y-1.5 sm:hover:-translate-y-2
                    border border-transparent hover:border-[#0093cb]/20"
                >
                  {/* Full Image */}
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition-all duration-700 ease-in-out group-hover:scale-105"
                    unoptimized
                    sizes="(max-width: 640px) 160px, (max-width: 768px) 180px, (max-width: 1024px) 200px, 260px"
                  />

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500" />

                  {/* Subtle Primary Glow */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0093cb]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* Tag Badge */}

                  {/* Name at Bottom - Following Style Guide Card Title Specs */}
                  <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4 lg:p-5">
                    <h3 className="font-bold text-base sm:text-[16px] md:text-lg xl:text-xl text-white group-hover:translate-x-1 transition-transform duration-300">
                      {item.title}
                    </h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, delay: 0.2 }}
          className="flex justify-center mt-8 sm:mt-10 md:mt-12 lg:mt-12 xl:mt-16"
        >
          <Link
            href="/products/all"
            className="group flex items-center gap-2 sm:gap-3 bg-white border-2 border-[#0093cb] text-[#0093cb] px-5 sm:px-6 md:px-8 py-2 sm:py-2.5 md:py-3 rounded-full font-semibold text-sm hover:bg-[#0093cb] hover:text-white hover:shadow-[0_8px_25px_-10px_rgba(0,147,203,0.4)] transition-all duration-300"
          >
            <span>View All Products</span>
            <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

// ─── MAIN EXPORT ─────────────────
export default function ProductSections() {
  return (
    <div className="space-y-0">
      <GiftsByCategories />
      <TrendingProducts />
    </div>
  );
}
