"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRef, useState } from "react";

// ─── DATA ─────────────────
const pharmaProducts = [
  {
    id: 1,
    name: "Airsafe",
    brand: "Pharma",
    image: "https://www.bigimpex.com/wp-content/uploads/2024/02/Airsafe.jpg",
  },
  {
    id: 2,
    name: "Magnifying Lamp",
    brand: "Pharma",
    image: "https://www.bigimpex.com/wp-content/uploads/2024/04/MagnoLite-Portable-Light-1.jpg",
  },
  {
    id: 3,
    name: "Digital Thermometer",
    brand: "Pharma",
    image: "https://www.bigimpex.com/wp-content/uploads/2024/04/LED-Moonlight-Torch-4.jpg",
  },
  {
    id: 4,
    name: "Airsafe",
    brand: "Pharma",
    image: "https://www.bigimpex.com/wp-content/uploads/2024/02/Airsafe.jpg",
  },
  {
    id: 5,
    name: "Magnifying Lamp",
    brand: "Pharma",
    image: "https://www.bigimpex.com/wp-content/uploads/2024/04/MagnoLite-Portable-Light-1.jpg",
  },
  {
    id: 6,
    name: "Digital Thermometer",
    brand: "Pharma",
    image: "https://www.bigimpex.com/wp-content/uploads/2024/04/LED-Moonlight-Torch-4.jpg",
  },
];

const arrivals = [
  {
    id: 1,
    name: "Flexo Pro",
    image: "https://www.bigimpex.com/wp-content/uploads/2025/08/Flexo-pro-1.jpg",
  },
  {
    id: 2,
    name: "Torch Collection",
    image: "https://www.bigimpex.com/wp-content/uploads/2025/08/Tourch-Led-Collection.jpg",
  },
  {
    id: 3,
    name: "Pen Stand",
    image: "https://www.bigimpex.com/wp-content/uploads/2025/08/Magnetic-Pen-Stand-1.jpg",
  },
  {
    id: 4,
    name: "Flexo Pro",
    image: "https://www.bigimpex.com/wp-content/uploads/2025/08/Flexo-pro-1.jpg",
  },
  {
    id: 5,
    name: "Torch Collection",
    image: "https://www.bigimpex.com/wp-content/uploads/2025/08/Tourch-Led-Collection.jpg",
  },
  {
    id: 6,
    name: "Pen Stand",
    image: "https://www.bigimpex.com/wp-content/uploads/2025/08/Magnetic-Pen-Stand-1.jpg",
  },
];

// ─── PHARMA ─────────────────
function PharmaSection() {
  const ref = useRef<HTMLDivElement>(null);

  const scroll = (dir: "left" | "right") => {
    if (!ref.current) return;
    ref.current.scrollBy({
      left: dir === "left" ? -320 : 320,
      behavior: "smooth",
    });
  };

  return (
    <section className="py-16 bg-[var(--clr-bg-cream)]">

      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-4 gap-8 items-center">

        {/* LEFT TITLE */}
        <div>
          <h2 className="text-[clamp(2rem,4vw,3rem)] font-semibold 
          text-[var(--clr-text-dark)]">
            Pharma Gifts
          </h2>
        </div>

        {/* RIGHT CAROUSEL */}
        <div className="lg:col-span-3 relative">

          <button
            onClick={() => scroll("left")}
            className="absolute -left-4 top-1/2 -translate-y-1/2 z-10 
            bg-[var(--clr-primary)] text-white p-2 rounded-full"
          >
            <ChevronLeft />
          </button>

          <button
            onClick={() => scroll("right")}
            className="absolute -right-4 top-1/2 -translate-y-1/2 z-10 
            bg-[var(--clr-primary)] text-white p-2 rounded-full"
          >
            <ChevronRight />
          </button>

          <div
            ref={ref}
            className="flex gap-6 overflow-x-auto scrollbar-hide"
          >
            {pharmaProducts.map((p) => (
              <div key={p.id} className="w-[280px] flex-shrink-0 group">

                <div className="rounded-2xl overflow-hidden 
                border border-[var(--clr-border-light)] 
                shadow-[var(--shadow-soft)] 
                group-hover:shadow-[var(--shadow-strong)] transition">

                  <div className="h-[260px] flex items-center justify-center 
                  bg-[var(--clr-bg-gray)] p-6">
                    <img
                      src={p.image}
                      alt={p.name}
                      className="max-h-full object-contain group-hover:scale-105 transition"
                    />
                  </div>

                  <div className="p-4">
                    <h3 className="text-sm font-semibold 
                    text-[var(--clr-text-dark)]">
                      {p.name}
                    </h3>

                    <p className="text-xs text-[var(--clr-text-muted)]">
                      Brand · {p.brand}
                    </p>
                  </div>
                </div>

              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── NEW ARRIVALS ─────────────────
function NewArrivals() {
  const ref = useRef<HTMLDivElement>(null);

  const scroll = (dir: "left" | "right") => {
    if (!ref.current) return;
    ref.current.scrollBy({
      left: dir === "left" ? -400 : 400,
      behavior: "smooth",
    });
  };

  return (
    <section className="py-20 bg-[var(--clr-bg-gray)]">

      <div className="max-w-6xl mx-auto px-4">

        {/* TITLE */}
        <h2 className="text-center text-[clamp(2rem,4vw,3rem)] font-semibold 
        text-[var(--clr-text-dark)] mb-10">
          New Arrivals
        </h2>

        <div className="relative">

          <button
            onClick={() => scroll("left")}
            className="absolute -left-4 top-1/2 -translate-y-1/2 
            bg-[var(--clr-primary)] text-white p-2 rounded-full"
          >
            <ChevronLeft />
          </button>

          <button
            onClick={() => scroll("right")}
            className="absolute -right-4 top-1/2 -translate-y-1/2 
            bg-[var(--clr-primary)] text-white p-2 rounded-full"
          >
            <ChevronRight />
          </button>

          {/* CARDS */}
          <div
            ref={ref}
            className="flex gap-6 overflow-x-auto scrollbar-hide"
          >
            {arrivals.map((p) => (
              <div key={p.id} className="w-[220px] flex-shrink-0 group">

                <div className="rounded-2xl overflow-hidden 
                border border-[var(--clr-border-light)] 
                shadow-[var(--shadow-soft)] 
                group-hover:shadow-[var(--shadow-strong)] transition">

                  <div className="h-[180px] bg-[var(--clr-bg-cream)] 
                  flex items-center justify-center p-4">
                    <img
                      src={p.image}
                      alt={p.name}
                      className="object-contain group-hover:scale-105 transition"
                    />
                  </div>

                  <div className="p-3">
                    <h3 className="text-xs font-medium 
                    text-[var(--clr-text-dark)] text-center">
                      {p.name}
                    </h3>
                  </div>

                </div>

              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}

// ─── EXPORT ─────────────────
export default function ProductShowcases() {
  return (
    <>
      <PharmaSection />
      <NewArrivals />

      <style jsx global>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </>
  );
}