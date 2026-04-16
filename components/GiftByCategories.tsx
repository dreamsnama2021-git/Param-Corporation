"use client";

import Image from "next/image";
import { Sparkles, ArrowRight, TrendingUp } from "lucide-react";
import Link from "next/link";

// ─── CATEGORIES DATA (Limited to 4 items) ─────────────────
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

// ─── TRENDING PRODUCTS DATA ─────────────────
const TRENDING_PRODUCTS = [
  {
    id: "1",
    title: "Crystal Trophy",
    image: "https://www.bigimpex.com/wp-content/uploads/2024/07/5.jpg",
    price: "$89",
    tag: "Best Seller",
    rating: "4.9",
  },
  {
    id: "2",
    title: "Premium Globe",
    image: "https://www.bigimpex.com/wp-content/uploads/2024/07/15-3.png",
    price: "$120",
    tag: "Hot",
    rating: "4.8",
  },
  {
    id: "3",
    title: "LED Heart Lamp",
    image: "https://www.bigimpex.com/wp-content/uploads/2024/09/7.png",
    price: "$75",
    tag: "New",
    rating: "4.7",
  },
  {
    id: "4",
    title: "Executive Award",
    image: "https://www.bigimpex.com/wp-content/uploads/2024/09/8.png",
    price: "$150",
    tag: "Prime",
    rating: "5.0",
  },
];

// ─── CATEGORIES SECTION ─────────────────
function GiftsByCategories() {
  return (
    <section className="w-full bg-[#F8F9FA] py-16 md:py-24 xl:py-10">
      <div className="max-w-[1450px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="ui-h1 uppercase font-bold text-[#1a1a1a] tracking-tight mb-3">
            Our <span className="text-[#0093cb]">Categories</span>
          </h2>
          <div className="flex justify-center">
            <div className="w-16 h-1 bg-[#0093cb] rounded-full" />
          </div>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {CATEGORIES.map((item) => (
            <Link
              key={item.id}
              href={`/categories/${item.id}`}
              className="group cursor-pointer relative h-[370px] rounded-2xl overflow-hidden 
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

              {/* Tag Badge - Top Left */}
              {/* <div className="absolute top-4 left-4">
                <div className="flex items-center gap-1.5 bg-white/95 backdrop-blur-sm 
                  px-3 py-1.5 rounded-full text-xs font-semibold text-gray-900 shadow-sm">
                  <Sparkles className="w-3.5 h-3.5 text-[#0093cb]" />
                  {item.tag}
                </div>
              </div> */}

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

// ─── TRENDING PRODUCTS SECTION (DARK THEME) ─────────────────
function TrendingProducts() {
  return (
    <section className="w-full bg-[#00a65e1c] py-16 md:py-24 xl:py-10 relative overflow-hidden">
      {/* Background Accent Elements using Brand Colors */}
      <div className="absolute top-0 z-30 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-[#0093cb]/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-[#00a65d]/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#8bde7a]/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-[1500px] z-40 mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          
          <h2 className="ui-h1 uppercase font-bold text-black tracking-tight mb-3">
            Trending <span className="text-[#0093cb]">Products</span>
          </h2>
          {/* <p className="text-gray-200 text-sm md:text-base max-w-2xl mx-auto">
            Discover our most popular items, curated based on customer favorites and current trends
          </p> */}
      <div className="flex justify-center">
            <div className="w-16 h-1 bg-[#0093cb] rounded-full" />
          </div>
        </div>

        {/* 4 Cards Grid - Dark Theme */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {TRENDING_PRODUCTS.map((item) => (
            <Link
              key={item.id}
              href={`/products/${item.id}`}
              className="group cursor-pointer relative h-[380px] rounded-2xl overflow-hidden 
                bg-white hover:border-[#0093cb]/50
                shadow-lg hover:shadow-[#0093cb]/20 transition-all duration-500 ease-out
                transform hover:-translate-y-2 block"
            >
              {/* Image Container with Darker Overlay */}
              <div className="absolute inset-0 bg-white">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-700 
                    group-hover:scale-110 opacity-90 group-hover:opacity-100"
                  unoptimized
                />
              </div>

              

              {/* Tag Badge - Top Left using Secondary/Accent Colors */}
              <div className="absolute top-4 left-4">
                <div className="flex items-center gap-1.5 bg-slate-900/80 backdrop-blur-sm 
                  border border-[#00a65d]/30 px-3 py-1.5 rounded-full text-xs font-semibold text-[#8bde7a] shadow-sm">
                  <Sparkles className="w-3.5 h-3.5 text-[#00a65d]" />
                  {item.tag}
                </div>
              </div>


              {/* Bottom Content */}
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <h3 className="font-bold text-xl md:text-2xl text-white mb-2 
                  group-hover:text-[#8bde7a] transition-colors duration-300">
                  {item.title}
                </h3>
                
                {/* Animated Button on Hover */}
                {/* <div className="flex items-center gap-2 text-sm font-medium text-[#0093cb] 
                  opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 
                  transition-all duration-300">
                  <span>View Details</span>
                  <ArrowRight className="w-4 h-4" />
                </div> */}
              </div>

              {/* Hover Glow Effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                <div className="absolute inset-0 bg-gradient-to-t from-[#0093cb]/10 to-transparent" />
              </div>
            </Link>
          ))}
        </div>

        {/* Common Navigation Button - Dark Theme */}
        <div className="flex justify-center">
          <Link
            href="/trending"
            className="group flex items-center gap-3 bg-transparent border-2 border-[#0093cb] 
              text-[#0093cb] bg-white px-8 py-3.5 rounded-full font-semibold text-sm 
              hover:bg-[#0093cb] hover:text-white hover:shadow-lg hover:shadow-[#0093cb]/30
              transition-all duration-300 transform hover:scale-105 active:scale-95"
          >
            <span>Explore All Trending</span>
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
      <TrendingProducts />
    </div>
  );
}
