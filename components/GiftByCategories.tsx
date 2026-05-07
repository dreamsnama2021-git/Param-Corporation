"use client";

import Image from "next/image";
import { Sparkles, ArrowRight } from "lucide-react";
import Link from "next/link";

// ─── CATEGORIES DATA ─────────────────
const CATEGORIES = [
  {
    id: "1",
    title: "Appreciation Gifts",
    image: "/products/CUSTOMIZED CHITS HOLDER.png",
    count: "24",
  },
  {
    id: "2",
    title: "Household Gifts",
    image: "/products/4 IN 1 DESK ORGANISER.png",
    count: "18",
  },
  {
    id: "3",
    title: "Office Accessories",
    image: "/products/CUSTOMIZED MOBILE HOLDER.png",
    count: "32",
  },
  {
    id: "4",
    title: "Health & Hygiene",
    image: "/products/DR QR CODE STANDEE.png",
    count: "15",
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
];

// ─── CATEGORIES SECTION ─────────────────
function GiftsByCategories() {
  return (
    <section className="w-full py-8 md:py-10 xl:py-12">
      <div className="max-w-[1450px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="ui-h1 capitalize font-bold text-[#1a1a1a] tracking-tight mb-3">
            Our <span className="text-[#0093cb]">Products</span>
          </h2>
          <div className="flex justify-center">
            <div className="w-16 h-1 bg-[#0093cb] rounded-full" />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {CATEGORIES.map((item) => (
            <Link
              key={item.id}
              href={`/categories/${item.id}`}
              className="group cursor-pointer relative h-[370px] rounded-2xl overflow-hidden 
                shadow-md hover:shadow-2xl transition-all duration-500 ease-out
                transform hover:-translate-y-2 block"
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
              
              <div className="absolute bottom-0 left-0 right-0 p-5 text-white">
                <h3 className="font-bold text-xl md:text-2xl mb-1 group-hover:translate-x-1 transition-transform duration-300">
                  {item.title}
                </h3>
                {/* <p className="text-white/80 text-sm font-medium">{item.count} Items</p> */}
              </div>
            </Link>
          ))}
        </div>

        <div className="flex justify-center">
          <Link
            href="/categories/all"
            className="group flex items-center gap-3 bg-white border-2 border-[#0093cb] text-[#0093cb] px-8 py-3.5 rounded-full font-semibold text-sm hover:bg-[#0093cb] hover:text-white transition-all duration-300 transform hover:scale-105"
          >
            <span>View All Categories</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
}

// ─── TRENDING PRODUCTS SECTION (MATCHED TO CATEGORIES STYLE) ─────────────────
function TrendingProducts() {
  return (
    <section className="w-full bg-[#00a65e0a] py-16 md:py-24 xl:py-10 relative overflow-hidden">
      <div className="max-w-[1450px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <h2 className="ui-h1 capitalize font-bold text-black tracking-tight mb-3">
            Doctor's <span className="text-[#0093cb]">Favorite</span>
          </h2>
          <div className="flex justify-center">
            <div className="w-16 h-1 bg-[#0093cb] rounded-full" />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {TRENDING_PRODUCTS.map((item) => (
            <Link
              key={item.id}
              href={`/products/${item.id}`}
              className="group cursor-pointer relative h-[370px] rounded-2xl overflow-hidden 
                shadow-md hover:shadow-2xl transition-all duration-500 ease-out
                transform hover:-translate-y-2 block"
            >
              {/* Image Background */}
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                unoptimized
              />

              {/* Gradient Overlay (Same as Categories) */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent 
                opacity-90 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Tag Badge (Modified to look sleeker) */}
             

              {/* Bottom Content (Same as Categories) */}
              <div className="absolute bottom-0 left-0 right-0 p-5 text-white">
                <h3 className="font-bold text-xl md:text-2xl mb-1 group-hover:translate-x-1 transition-transform duration-300">
                  {item.title}
                </h3>
                {/* <div className="flex justify-between items-center">
                  <p className="text-white/80 text-sm font-medium">Starting at {item.price}</p>
                </div> */}
              </div>
            </Link>
          ))}
        </div>

        <div className="flex justify-center">
          <Link
            href="/trending"
            className="group flex items-center gap-3 bg-white border-2 border-[#0093cb] text-[#0093cb] px-8 py-3.5 rounded-full font-semibold text-sm hover:bg-[#0093cb] hover:text-white transition-all duration-300 transform hover:scale-105"
          >
            <span>Explore All Trending</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
}

export default function ProductSections() {
  return (
    <div className="">
      <GiftsByCategories />
      <TrendingProducts />
    </div>
  );
}

