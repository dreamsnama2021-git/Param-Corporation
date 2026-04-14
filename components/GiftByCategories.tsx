"use client";

import Image from "next/image";
import { Sparkles, ArrowRight } from "lucide-react";
import Link from "next/link";

// ─── DATA (Limited to 4 items) ─────────────────
const CATEGORIES = [
  {
    id: "1",
    title: "Appreciation Gifts",
    image: "https://www.bigimpex.com/wp-content/uploads/2024/10/16-300x300.png",
    count: "24",
    tag: "Popular",
  },
  {
    id: "2",
    title: "Household Gifts",
    image: "https://www.bigimpex.com/wp-content/uploads/2024/07/5.jpg",
    count: "18",
    tag: "New",
  },
  {
    id: "3",
    title: "Office Accessories",
    image: "https://www.bigimpex.com/wp-content/uploads/2024/10/Office-Acessiories-300x300.png",
    count: "32",
    tag: "Prime",
  },
  {
    id: "4",
    title: "Health & Hygiene",
    image: "https://www.bigimpex.com/wp-content/uploads/2024/10/Health-Hygiene-300x300.png",
    count: "15",
    tag: "Trending",
  },
];

// ─── CATEGORIES SECTION ─────────────────
function GiftsByCategories() {
  return (
    <section className="w-full bg-[#F8F9FA] py-16 md:py-24 xl:py-10">
      <div className="max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl uppercase font-bold text-[#1a1a1a] tracking-tight mb-3">
            Our Categories
          </h2>
          <div className="flex justify-center">
            <div className="w-16 h-1 bg-[#0093cb] rounded-full" />
          </div>
        </div>

        {/* 4 Cards Grid - No Individual Arrows */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {CATEGORIES.map((item) => (
            <Link
              key={item.id}
              href={`/categories/${item.id}`}
              className="group cursor-pointer relative h-[380px] rounded-2xl overflow-hidden 
                shadow-md hover:shadow-2xl transition-all duration-500 ease-out
                transform hover:-translate-y-2 block"
            >
              {/* Image */}
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover transition-transform duration-700 
                  group-hover:scale-110"
                unoptimized
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent 
                opacity-80 group-hover:opacity-90 transition-opacity duration-500" />

              {/* Tag Badge - Top Left (Kept) */}
              <div className="absolute top-4 left-4">
                <div className="flex items-center gap-1.5 bg-white/95 backdrop-blur-sm 
                  px-3 py-1.5 rounded-full text-xs font-semibold text-gray-900 shadow-sm">
                  <Sparkles className="w-3.5 h-3.5 text-[#00a65d]" />
                  {item.tag}
                </div>
              </div>

              {/* Bottom Content */}
              <div className="absolute bottom-0 left-0 right-0 p-5 text-white">
                <h3 className="font-bold text-xl md:text-2xl mb-1 
                  group-hover:translate-x-1 transition-transform duration-300">
                  {item.title}
                </h3>
                <p className="text-white/80 text-sm font-medium">
                  {item.count} Items
                </p>
              </div>
            </Link>
          ))}
        </div>

        {/* Common Navigation Button */}
        <div className="flex justify-center">
          <Link
            href="/categories/all"
            className="group flex items-center gap-3 bg-white border-2 border-[#0093cb] 
              text-[#0093cb] px-8 py-3.5 rounded-full font-semibold text-sm 
              hover:bg-[#0093cb] hover:text-white hover:shadow-lg hover:shadow-[#0093cb]/20
              transition-all duration-300 transform hover:scale-105 active:scale-95"
          >
            <span>View All Categories</span>
            <ArrowRight className="w-4 h-4 transition-transform duration-300 
              group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}

// ─── EXPORT ─────────────────
export default function ProductSections() {
  return (
    <div>
      <GiftsByCategories />
    </div>
  );
}
