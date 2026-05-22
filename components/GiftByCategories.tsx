"use client";

import React, { useState, useEffect, useCallback, useRef } from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

// ─── CATEGORIES DATA ─────────────────
const CATEGORIES = [
  { id: "1", title: "Category",          image: "/products/CUSTOMIZED CHITS HOLDER.png",    count: "24", link: "/categories/1?tab=categories",        tab: "categories"        },
  { id: "2", title: "Therapy",           image: "/products/4 IN 1 DESK ORGANISER.png",       count: "18", link: "/medipride",                            isExternal: false        },
  { id: "3", title: "Personalized Gifts",image: "/products/CUSTOMIZED MOBILE HOLDER.png",    count: "32", link: "/categories/3?tab=personalized-gifts",  tab: "personalized-gifts"},
  { id: "4", title: "Occasion",          image: "/products/DR QR CODE STANDEE.png",          count: "15", link: "/categories/4?tab=occasion",            tab: "occasion"          },
];

// ─── TRENDING PRODUCTS DATA ─────────────────
const TRENDING_PRODUCTS = [
  { id: "1",  title: "Crystal Trophy",          image: "/products/CUSTOMIZED CHITS HOLDER.png",      price: "89",  tag: "Best Seller" },
  { id: "2",  title: "Premium Globe",           image: "/products/CUSTOMIZED ORANGE PEN HOLDER.png", price: "120", tag: "Hot"         },
  { id: "3",  title: "LED Heart Lamp",          image: "/products/DR QR CODE STANDEE.png",           price: "75",  tag: "New"         },
  { id: "4",  title: "Executive Award",         image: "/products/PERSONALISED DR PHOTO TROPHY.png", price: "150", tag: "Prime"       },
  { id: "5",  title: "Golden Stethoscope",      image: "/products/CUSTOMIZED CHITS HOLDER.png",      price: "199", tag: "Premium"     },
  { id: "6",  title: "Medical Plaque",          image: "/products/4 IN 1 DESK ORGANISER.png",        price: "85",  tag: "Popular"     },
  { id: "7",  title: "Doctor's Diary",          image: "/products/CUSTOMIZED MOBILE HOLDER.png",     price: "45",  tag: "Essential"   },
  { id: "8",  title: "Clinic Name Plate",       image: "/products/DR QR CODE STANDEE.png",           price: "110", tag: "Custom"      },
  { id: "9",  title: "Caduceus Statue",         image: "/products/PERSONALISED DR PHOTO TROPHY.png", price: "175", tag: "Classic"     },
  { id: "10", title: "Digital Prescription Pad",image: "/products/CUSTOMIZED ORANGE PEN HOLDER.png", price: "95",  tag: "Digital"     },
];

// ─── GIFTS BY CATEGORIES ─────────────────
function GiftsByCategories() {
  return (
    <section className="ui-section ui-bg-cream">
      <div className="ui-container">

        {/* Section header */}
        <div className="ui-text-center ui-mb-3xl">
          <h2 className="ui-h1 capitalize ui-text-dark">
            Our <span className="ui-text-primary">Products</span>
          </h2>
          {/* Accent underline */}
          <div className="flex justify-center ui-mt-sm">
            <div className="w-16 h-1 ui-rounded-full" style={{ backgroundColor: "var(--clr-primary)" }} />
          </div>
        </div>

        {/* 4-column card grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 ui-gap-lg ui-mb-2xl">
          {CATEGORIES.map((item) => (
            <Link
              key={item.id}
              href={item.link || `/categories/${item.id}?tab=${item.tab}`}
              className="group cursor-pointer relative overflow-hidden ui-rounded-lg
                ui-shadow-soft hover:ui-shadow-strong
                transition-all duration-500 ease-out transform hover:-translate-y-2 block"
              style={{ height: "clamp(280px, 28vw, 370px)" }}
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                unoptimized
              />
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent
                opacity-90 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Title */}
              <div className="absolute bottom-0 left-0 right-0 ui-p-lg">
                <h3 className="ui-h4 ui-text-white font-normal
                  group-hover:translate-x-1 transition-transform duration-300">
                  {item.title}
                </h3>
              </div>
            </Link>
          ))}
        </div>

        {/* View All CTA */}
        <div className="flex justify-center">
          <Link
            href="/categories/all?tab=categories"
            className="ui-btn ui-btn-outline ui-rounded-full group"
          >
            <span>View All</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

      </div>
    </section>
  );
}

// ─── TRENDING PRODUCTS — INFINITE MARQUEE ─────────────────
function TrendingProducts() {
  const [isHovered, setIsHovered] = useState(false);
  const scrollRef   = useRef<HTMLDivElement>(null);
  const animRef     = useRef<number | null>(null);
  const posRef      = useRef(0);

  const duplicated = [...TRENDING_PRODUCTS, ...TRENDING_PRODUCTS, ...TRENDING_PRODUCTS];

  const animate = useCallback(() => {
    if (scrollRef.current && !isHovered) {
      posRef.current += 0.8;
      const singleWidth = scrollRef.current.scrollWidth / 3;
      if (posRef.current >= singleWidth) posRef.current -= singleWidth;
      scrollRef.current.style.transform = `translateX(-${posRef.current}px)`;
    }
    animRef.current = requestAnimationFrame(animate);
  }, [isHovered]);

  useEffect(() => {
    animRef.current = requestAnimationFrame(animate);
    return () => { if (animRef.current) cancelAnimationFrame(animRef.current); };
  }, [animate]);

  return (
    <section className="ui-section ui-bg-gray relative overflow-hidden">

      {/* Subtle dot grid background */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle at 1px 1px, var(--clr-primary) 1px, transparent 0)",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="ui-container relative z-10">

        {/* Section header */}
        <div className="ui-text-center ui-mb-3xl">
          <span className="ui-label ui-mb-sm block">Trending Now</span>

          <h2 className="ui-h1 capitalize ui-text-dark">
            Doctor's <span className="ui-text-primary">Favorite</span>
          </h2>

          {/* Decorative rule */}
          <div className="flex justify-center items-center ui-gap-sm ui-mt-sm">
            <div className="w-8 h-[2px] rounded-full" style={{ backgroundColor: "var(--clr-primary)", opacity: 0.3 }} />
            <div className="w-16 h-1 ui-rounded-full"  style={{ backgroundColor: "var(--clr-primary)" }} />
            <div className="w-8 h-[2px] rounded-full" style={{ backgroundColor: "var(--clr-primary)", opacity: 0.3 }} />
          </div>
        </div>

        {/* Marquee */}
        <div className="relative">
          <div
            className="overflow-hidden relative ui-py-md"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {/* Fade edges */}
            <div className="absolute left-0 top-0 bottom-0 w-24 lg:w-32 z-10 pointer-events-none"
              style={{ background: `linear-gradient(to right, var(--clr-bg-gray), transparent)` }} />
            <div className="absolute right-0 top-0 bottom-0 w-24 lg:w-32 z-10 pointer-events-none"
              style={{ background: `linear-gradient(to left, var(--clr-bg-gray), transparent)` }} />

            {/* Scrolling track */}
            <div
              ref={scrollRef}
              className="flex ui-gap-lg"
              style={{ willChange: "transform" }}
            >
              {duplicated.map((item, index) => (
                <Link
                  key={`${item.id}-${index}`}
                  href={`/products/${item.id}`}
                  className="group relative flex-shrink-0 overflow-hidden ui-rounded-lg
                    shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]
                    hover:shadow-[0_8px_30px_-5px_rgba(0,147,203,0.2),0_20px_40px_-5px_rgba(0,0,0,0.1)]
                    transition-all duration-500 ease-out hover:-translate-y-2"
                  style={{
                    height:   "clamp(220px, 22vw, 320px)",
                    minWidth: "clamp(180px, 18vw, 240px)",
                    width:    "clamp(180px, 18vw, 240px)",
                  }}
                >
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition-all duration-700 ease-in-out group-hover:scale-110"
                    unoptimized
                    sizes="240px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent
                    opacity-80 group-hover:opacity-90 transition-opacity duration-500" />

                  {/* Product title */}
                  <div className="absolute bottom-0 left-0 right-0 ui-p-md">
                    <h3 className="ui-h5 ui-text-white font-semibold
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
    <div>
      <GiftsByCategories />
      <TrendingProducts />
    </div>
  );
}