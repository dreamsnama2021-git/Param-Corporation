'use client';

import React, { useState, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

// --- Types ---
interface PharmaProduct {
  id: number;
  name: string;
  brand: string;
  image: string;
}

interface NewArrival {
  id: number;
  name: string;
  image: string;
  bgColor: string;
}

// --- Data ---
const pharmaProducts: PharmaProduct[] = [
  {
    id: 1,
    name: 'Airsafe',
    brand: 'Pharma',
    image: 'https://www.bigimpex.com/wp-content/uploads/2024/02/Airsafe.jpg'
  },
  {
    id: 2,
    name: 'MagniGlow Lamp With Adjustable Magnifying Glass',
    brand: 'Pharma',
    image: 'https://www.bigimpex.com/wp-content/uploads/2024/04/MagnoLite-Portable-Light-1.jpg'
  },
  {
    id: 3,
    name: 'Digital Thermometer',
    brand: 'Pharma',
    image: 'https://www.bigimpex.com/wp-content/uploads/2024/04/LED-Moonlight-Torch-4.jpg'
  },
  {
    id: 4,
    name: 'Blood Pressure Monitor',
    brand: 'Pharma',
    image: 'https://www.bigimpex.com/wp-content/uploads/2024/04/MagnoLite-Portable-Light-1.jpg'
  }
];

const newArrivals: NewArrival[] = [
  {
    id: 1,
    name: 'Flexo pro',
    image: 'https://www.bigimpex.com/wp-content/uploads/2025/08/Flexo-pro-1.jpg',
    bgColor: 'bg-[#a8d5e5]'
  },
  {
    id: 2,
    name: 'Rechargeable LED Torch Collection',
    image: 'https://www.bigimpex.com/wp-content/uploads/2025/08/Tourch-Led-Collection.jpg',
    bgColor: 'bg-[#f0f0f0]'
  },
  {
    id: 3,
    name: 'Magnetic Pen Stand',
    image: 'https://www.bigimpex.com/wp-content/uploads/2025/08/Magnetic-Pen-Stand-1.jpg',
    bgColor: 'bg-[#f8f8f8]'
  },
  {
    id: 4,
    name: 'Customizable Product Set',
    image: 'https://www.bigimpex.com/wp-content/uploads/2025/08/Customizable-Product-Set-1.jpg',
    bgColor: 'bg-[#f5e6d3]'
  },
  {
    id: 5,
    name: 'Desktop Organizer',
    image: 'https://www.bigimpex.com/wp-content/uploads/2025/08/All-in-one-desk-orgnizer-1.jpg',
    bgColor: 'bg-[#f0f0f0]'
  }
];

export default function ProductShowcases() {
  // --- Refs and State ---
  const pharmaRef = useRef<HTMLDivElement>(null);
  const arrivalsRef = useRef<HTMLDivElement>(null);
  
  const [pharmaIndex, setPharmaIndex] = useState(0);
  const [arrivalsIndex, setArrivalsIndex] = useState(0);

  // --- Pharma Gifts Logic ---
  const scrollPharma = (direction: 'left' | 'right') => {
    if (pharmaRef.current) {
      const scrollAmount = direction === 'left' ? -320 : 320; // Card width + gap
      pharmaRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
      
      const maxIndex = Math.max(0, pharmaProducts.length - 2);
      const newIndex = direction === 'left' 
        ? Math.max(0, pharmaIndex - 1) 
        : Math.min(maxIndex, pharmaIndex + 1);
      setPharmaIndex(newIndex);
    }
  };

  // --- New Arrivals Logic ---
  const scrollArrivals = (direction: 'left' | 'right') => {
    if (arrivalsRef.current) {
      const scrollAmount = direction === 'left' ? -784 : 784; // 4 cards (190px * 4) + gaps
      arrivalsRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
      
      const maxIndex = Math.ceil(newArrivals.length / 4) - 1;
      const newIndex = direction === 'left' 
        ? Math.max(0, arrivalsIndex - 1) 
        : Math.min(maxIndex, arrivalsIndex + 1);
      setArrivalsIndex(newIndex);
    }
  };

  return (
    <div className="w-full">
      {/* ============================================
          SECTION 1: PHARMA GIFTS
          ============================================ */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-start gap-8 lg:gap-16">
            
            {/* Left Title */}
            <div className="lg:w-48 flex-shrink-0 pt-8">
              <h2 className="text-2xl font-bold text-gray-900 tracking-tight">
                Pharma Gifts
              </h2>
            </div>

            {/* Carousel Container - Centered */}
            <div className="flex-1 relative flex items-center justify-center">
              {/* Navigation Arrows - Positioned at edges of card area */}
              <button
                onClick={() => scrollPharma('left')}
                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 w-7 h-7 rounded-full bg-[#ff5757] text-white flex items-center justify-center shadow-md hover:bg-[#e64c4c] transition-colors focus:outline-none"
                aria-label="Previous"
              >
                <ChevronLeft size={16} strokeWidth={2.5} />
              </button>
              
              <button
                onClick={() => scrollPharma('right')}
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 w-7 h-7 rounded-full bg-[#ff5757] text-white flex items-center justify-center shadow-md hover:bg-[#e64c4c] transition-colors focus:outline-none"
                aria-label="Next"
              >
                <ChevronRight size={16} strokeWidth={2.5} />
              </button>

              {/* Scrollable Area - Fixed width container */}
              <div className="w-[640px] max-w-full overflow-hidden">
                <div 
                  ref={pharmaRef}
                  className="flex overflow-x-auto gap-4 scrollbar-hide snap-x snap-mandatory"
                  style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                >
                  {pharmaProducts.map((product) => (
                    <div 
                      key={product.id}
                      className="w-[300px] flex-shrink-0 snap-start group cursor-pointer"
                    >
                      <div className="bg-white rounded-lg border border-gray-200 overflow-hidden hover:shadow-md transition-shadow duration-300">
                        {/* Image Container - Smaller height */}
                        <div className="h-[280px] bg-gray-50 p-6 flex items-center justify-center overflow-hidden">
                          <img 
                            src={product.image} 
                            alt={product.name}
                            className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-500"
                            draggable={false}
                          />
                        </div>
                        
                        {/* Content - Compact padding */}
                        <div className="p-4">
                          <h3 className="text-sm font-semibold text-gray-900 mb-0.5 line-clamp-2">
                            {product.name}
                          </h3>
                          <p className="text-xs text-gray-600">
                            Brand : {product.brand}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Pagination Dots */}
          <div className="flex justify-center gap-1.5 mt-6 ml-48">
            {[0, 1, 2].map((index) => (
              <button
                key={index}
                className={`w-1.5 h-1.5 rounded-full transition-all ${
                  index === pharmaIndex ? 'bg-gray-800' : 'bg-gray-300'
                }`}
                onClick={() => {
                  if (pharmaRef.current) {
                    pharmaRef.current.scrollTo({ left: 320 * index, behavior: 'smooth' });
                    setPharmaIndex(index);
                  }
                }}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ============================================
          SECTION 2: NEW ARRIVALS
          ============================================ */}
      <section className="py-12 bg-[#f5f5f5]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Centered Title */}
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900 tracking-tight">
              New Arrivals
            </h2>
          </div>

          {/* Carousel Container */}
          <div className="relative flex items-center justify-center">
            {/* Navigation Arrows */}
            <button
              onClick={() => scrollArrivals('left')}
              className="absolute -left-4 top-1/2 -translate-y-1/2 z-10 w-7 h-7 rounded-full bg-[#ff5757] text-white flex items-center justify-center shadow-md hover:bg-[#e64c4c] transition-colors focus:outline-none"
              aria-label="Previous"
            >
              <ChevronLeft size={16} strokeWidth={2.5} />
            </button>
            
            <button
              onClick={() => scrollArrivals('right')}
              className="absolute -right-4 top-1/2 -translate-y-1/2 z-10 w-7 h-7 rounded-full bg-[#ff5757] text-white flex items-center justify-center shadow-md hover:bg-[#e64c4c] transition-colors focus:outline-none"
              aria-label="Next"
            >
              <ChevronRight size={16} strokeWidth={2.5} />
            </button>

            {/* Cards Container - Fixed width for 4 cards */}
            <div className="w-[780px] max-w-full overflow-hidden">
              <div 
                ref={arrivalsRef}
                className="flex overflow-x-auto gap-3 scrollbar-hide snap-x snap-mandatory"
                style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
              >
                {newArrivals.map((product) => (
                  <div 
                    key={product.id}
                    className="w-[186px] flex-shrink-0 snap-start group cursor-pointer"
                  >
                    <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all duration-300">
                      {/* Image Area - Square aspect */}
                      <div className={`h-[180px] relative overflow-hidden ${product.bgColor} flex items-center justify-center p-3`}>
                        <img 
                          src={product.image} 
                          alt={product.name}
                          className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                          draggable={false}
                        />
                      </div>
                      
                      {/* Gray Footer - Compact */}
                      <div className="p-3 bg-[#e5e5e5] h-[50px] flex items-center">
                        <h3 className="text-xs font-medium text-gray-900 leading-tight line-clamp-2">
                          {product.name}
                        </h3>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Pagination Dots */}
          <div className="flex justify-center gap-1.5 mt-6">
            {[0, 1, 2].map((index) => (
              <button
                key={index}
                onClick={() => {
                  if (arrivalsRef.current) {
                    arrivalsRef.current.scrollTo({ left: 784 * index, behavior: 'smooth' });
                    setArrivalsIndex(index);
                  }
                }}
                className={`w-1.5 h-1.5 rounded-full transition-all ${
                  index === arrivalsIndex ? 'bg-gray-800' : 'bg-gray-400'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Hide Scrollbar CSS */}
      <style jsx global>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none !important;
        }
        .scrollbar-hide {
          -ms-overflow-style: none !important;
          scrollbar-width: none !important;
        }
      `}</style>
    </div>
  );
}
