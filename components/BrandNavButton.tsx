// app/components/SimpleBrandNav.tsx
"use client";

import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const BRANDS = [
  { href: "/digital-gifts" },
  { href: "/koru" },
  { href: "/medipride" },
  { href: "/pharma-launch/all?tab=all" },
];

export default function SimpleBrandNav() {
  const pathname = usePathname();
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const index = BRANDS.findIndex(brand => {
      if (brand.href.includes('?')) {
        return pathname?.startsWith(brand.href.split('?')[0]);
      }
      return pathname === brand.href;
    });
    if (index !== -1) setCurrentIndex(index);
  }, [pathname]);

  const goToPrevious = () => {
    const newIndex = currentIndex > 0 ? currentIndex - 1 : BRANDS.length - 1;
    window.location.href = BRANDS[newIndex].href;
  };

  const goToNext = () => {
    const newIndex = currentIndex < BRANDS.length - 1 ? currentIndex + 1 : 0;
    window.location.href = BRANDS[newIndex].href;
  };

  const isBrandPage = BRANDS.some(brand => {
    if (brand.href.includes('?')) {
      return pathname?.startsWith(brand.href.split('?')[0]);
    }
    return pathname === brand.href;
  });

  if (!isBrandPage) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center gap-2">
      {/* Previous Button */}
      <button
        onClick={goToPrevious}
        className="w-12 h-12 flex items-center justify-center 
          rounded-full shadow-[var(--shadow-strong)] 
          bg-white text-[var(--clr-primary)] 
          hover:scale-105 active:scale-95 
          transition-all duration-200
          border border-gray-100"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>

      {/* Page Indicator */}
      <div className="px-3 py-1.5 rounded-full bg-white shadow-[var(--shadow-strong)] text-xs font-medium text-gray-600">
        {currentIndex + 1} / {BRANDS.length}
      </div>

      {/* Next Button */}
      <button
        onClick={goToNext}
        className="w-12 h-12 flex items-center justify-center 
          rounded-full shadow-[var(--shadow-strong)] 
          bg-[var(--clr-primary)] text-white 
          hover:scale-105 active:scale-95 
          transition-all duration-200"
      >
        <ChevronRight className="w-5 h-5" />
      </button>
    </div>
  );
}