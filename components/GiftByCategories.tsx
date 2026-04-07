"use client";

import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRef } from "react";

// ─── DATA ─────────────────
const CATEGORIES = [
  {
    id: "1",
    title: "Appreciation Gifts",
    image: "https://www.bigimpex.com/wp-content/uploads/2024/10/16-300x300.png",
  },
  {
    id: "2",
    title: "Household Gifts",
    image: "https://www.bigimpex.com/wp-content/uploads/2024/07/5.jpg",
  },
  {
    id: "3",
    title: "Office Accessories",
    image: "https://www.bigimpex.com/wp-content/uploads/2024/10/Office-Acessiories-300x300.png",
  },
  {
    id: "4",
    title: "Health & Hygiene",
    image: "https://www.bigimpex.com/wp-content/uploads/2024/10/Health-Hygiene-300x300.png",
  },
];

// ─── CATEGORIES ─────────────────
function GiftsByCategories() {
  const ref = useRef<HTMLDivElement>(null);

  const CARD_WIDTH = 220; // match actual width
  const GAP = 16;

  const scroll = (dir: "left" | "right") => {
    if (!ref.current) return;

    const amount = CARD_WIDTH + GAP;

    ref.current.scrollBy({
      left: dir === "left" ? -amount : amount,
      behavior: "smooth",
    });
  };

  return (
    <section className="w-full bg-[var(--clr-bg-cream)] py-16">

      <div className="max-w-7xl mx-auto px-4">

        {/* HEADER */}
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-semibold text-[var(--clr-text-dark)]">
            Gifts By Categories
          </h2>

          <div className="flex gap-2">
            <button
              onClick={() => scroll("left")}
              className="p-2 rounded-full border border-[var(--clr-border-light)] 
              text-[var(--clr-primary)] hover:bg-[var(--clr-primary)] hover:text-white transition"
            >
              <ChevronLeft />
            </button>

            <button
              onClick={() => scroll("right")}
              className="p-2 rounded-full border border-[var(--clr-border-light)] 
              text-[var(--clr-primary)] hover:bg-[var(--clr-primary)] hover:text-white transition"
            >
              <ChevronRight />
            </button>
          </div>
        </div>

        {/* CAROUSEL */}
    <div className="flex justify-center">
  <div
    ref={ref}
    className="flex gap-6 overflow-x-auto snap-x snap-mandatory 
    px-4 pb-4 scrollbar-hide max-w-5xl w-full justify-center"
  >
    {CATEGORIES.map((item) => (
      <div
        key={item.id}
        className="snap-start flex-shrink-0 w-[200px] group"
      >
        <div className="relative aspect-square rounded-2xl overflow-hidden 
        border border-[var(--clr-border-light)] shadow-[var(--shadow-soft)]">

          <Image
            src={item.image}
            alt={item.title}
            fill
            className="object-cover"
            unoptimized
          />
        </div>

        <p className="text-center mt-3 text-sm 
        text-[var(--clr-text-dark)]">
          {item.title}
        </p>
      </div>
    ))}
  </div>
</div>
      </div>
    </section>
  );
}
const PRODUCTS = [
  {
    id: "1",
    title: "Crystal Cube",
    image: "https://www.bigimpex.com/wp-content/uploads/2024/09/8.png",
  },
  {
    id: "2",
    title: "Crystal Globe",
    image: "https://www.bigimpex.com/wp-content/uploads/2024/07/15-3.png",
  },
  {
    id: "3",
    title: "Crystal Heart",
    image: "https://www.bigimpex.com/wp-content/uploads/2024/09/7.png",
  },
  {
    id: "4",
    title: "Crystal Cube Premium",
    image: "https://www.bigimpex.com/wp-content/uploads/2024/09/8.png",
  },
  {
    id: "5",
    title: "Crystal Globe Deluxe",
    image: "https://www.bigimpex.com/wp-content/uploads/2024/07/15-3.png",
  },
  {
    id: "6",
    title: "Crystal Heart LED",
    image: "https://www.bigimpex.com/wp-content/uploads/2024/09/7.png",
  },
  {
    id: "7",
    title: "Award Trophy",
    image: "https://www.bigimpex.com/wp-content/uploads/2024/09/8.png",
  },
  {
    id: "8",
    title: "Corporate Gift Set",
    image: "https://www.bigimpex.com/wp-content/uploads/2024/07/15-3.png",
  },
];
// ─── PRODUCTS ─────────────────
function ProductShowcase() {
  const ref = useRef<HTMLDivElement>(null);

  const scroll = (dir: "left" | "right") => {
    if (!ref.current) return;

    const container = ref.current;
    const width = container.clientWidth;

    container.scrollBy({
      left: dir === "left" ? -width : width,
      behavior: "smooth",
    });
  };

  return (
    <section className="w-full bg-[var(--clr-bg-gray)] py-20">

      <div className="max-w-6xl mx-auto px-4">

        <h2 className="text-2xl font-semibold text-center mb-10">
          Featured Products
        </h2>

        <div className="relative">

          {/* ARROWS */}
          <button
            onClick={() => scroll("left")}
            className="absolute -left-6 top-1/2 -translate-y-1/2 z-10 
            bg-[var(--clr-primary)] text-white p-2 rounded-full"
          >
            <ChevronLeft />
          </button>

          <button
            onClick={() => scroll("right")}
            className="absolute -right-6 top-1/2 -translate-y-1/2 z-10 
            bg-[var(--clr-primary)] text-white p-2 rounded-full"
          >
            <ChevronRight />
          </button>

          {/* VIEWPORT */}
          <div className="overflow-hidden">

            {/* TRACK */}
            <div
              ref={ref}
              className="flex transition-all duration-300"
            >
              {PRODUCTS.map((p) => (
                <div
                  key={p.id}
                  className="w-1/4 flex-shrink-0 px-2"
                >
                  <div className="rounded-2xl overflow-hidden 
                  bg-[var(--clr-bg-dark)]">

                    <div className="relative h-[220px]">
                      <Image
                        src={p.image}
                        alt={p.title}
                        fill
                        className="object-contain p-4"
                        unoptimized
                      />
                    </div>
                  </div>

                  <p className="text-center mt-3 text-sm">
                    {p.title}
                  </p>
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

// ─── EXPORT ─────────────────
export default function ProductSections() {
  return (
    <>
      <GiftsByCategories />
      <ProductShowcase />

      <style jsx global>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </>
  );
}