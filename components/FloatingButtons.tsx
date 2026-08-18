// app/components/FloatingButtons.tsx
"use client";

import { useState, useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { ChevronLeft, ChevronRight, X, Compass } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { WhatsappLogoIcon } from '@phosphor-icons/react';

const BRANDS = [
  { id: 'digital-input', title: "Digital Input", href: "/digital-gifts" },
  { id: 'koru', title: "Koru", href: "/koru" },
  { id: 'medipride', title: "Medipride", href: "/medipride" },
  { id: 'pharma-launch', title: "Pharma Launch", href: "/pharma-launch/all?tab=all" },
];

export default function FloatingButtons() {
  const router = useRouter();
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showBrandNav, setShowBrandNav] = useState(false);
  
  const phone = "+919820149950";
  const message = "Hello Param Corporation, I'm interested in your products.";
  const whatsappUrl = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

  // Check if we're on a brand page
  const isBrandPage = BRANDS.some(brand => {
    if (brand.href.includes('?')) {
      return pathname?.startsWith(brand.href.split('?')[0]);
    }
    return pathname === brand.href;
  });

  // Determine the current brand index based on pathname
  useEffect(() => {
    const currentBrandIndex = BRANDS.findIndex(brand => {
      if (brand.href.includes('?')) {
        return pathname?.startsWith(brand.href.split('?')[0]);
      }
      return pathname === brand.href;
    });
    
    if (currentBrandIndex !== -1) {
      setCurrentIndex(currentBrandIndex);
    }
  }, [pathname]);

  // Control brand nav visibility based on scroll on home page
  useEffect(() => {
    // On home page, show after scrolling past hero
    if (pathname === '/') {
      const handleScroll = () => {
        const heroHeight = window.innerHeight * 0.9;
        const scrollPosition = window.scrollY;
        
        if (scrollPosition > heroHeight) {
          setShowBrandNav(true);
        } else {
          setShowBrandNav(false);
        }
      };

      // Check initial scroll position
      handleScroll();

      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    } 
    // On brand pages or any other page, always show
    else {
      setShowBrandNav(true);
    }
  }, [pathname]);

  const goToPrevious = () => {
    const newIndex = currentIndex > 0 ? currentIndex - 1 : BRANDS.length - 1;
    setCurrentIndex(newIndex);
    setIsOpen(false);
    router.push(BRANDS[newIndex].href);
  };

  const goToNext = () => {
    const newIndex = currentIndex < BRANDS.length - 1 ? currentIndex + 1 : 0;
    setCurrentIndex(newIndex);
    setIsOpen(false);
    router.push(BRANDS[newIndex].href);
  };

  const navigateToBrand = (index: number) => {
    setCurrentIndex(index);
    setIsOpen(false);
    router.push(BRANDS[index].href);
  };

  // Don't render anything on home page before scroll
  if (pathname === '/' && !showBrandNav) {
    return (
      <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
        {/* WhatsApp Button - Always visible */}
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="w-14 h-14 flex items-center justify-center 
            rounded-full shadow-[var(--shadow-strong)] 
            bg-[#25D366] text-white 
            hover:scale-105 active:scale-95 transition-all duration-200"
        >
          <WhatsappLogoIcon className="w-6 h-6" />
        </a>
      </div>
    );
  }

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      {/* Brand Navigation - Shows conditionally */}
      {showBrandNav && (
        <>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="w-14 h-14 flex items-center justify-center 
              rounded-full shadow-[var(--shadow-strong)] 
              bg-[var(--clr-primary)] text-white 
              hover:scale-105 active:scale-95 transition-all duration-200 relative"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Compass className="w-6 h-6" />}
            <span className="absolute -top-1 -right-1 bg-white text-[var(--clr-primary)] text-[10px] font-bold rounded-full w-5 h-5 flex items-center justify-center shadow-md">
              {currentIndex + 1}
            </span>
          </button>

          {/* Popup Menu */}
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                transition={{ duration: 0.2 }}
                className="w-72 sm:w-80 bg-white rounded-2xl shadow-[var(--shadow-strong)] border border-gray-100 overflow-hidden"
              >
                <div className="flex items-center justify-between px-4 py-3 border-b border-gray-100">
                  <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
                    Our Brands
                  </span>
                  <span className="text-xs text-gray-400">{currentIndex + 1} / {BRANDS.length}</span>
                </div>
                <div className="max-h-64 overflow-y-auto py-1">
                  {BRANDS.map((brand, index) => (
                    <button
                      key={brand.id}
                      onClick={() => navigateToBrand(index)}
                      className={`w-full px-4 py-3 text-left transition-all duration-200 flex items-center gap-3
                        ${currentIndex === index ? 'bg-[var(--clr-primary)]/10' : 'hover:bg-gray-50'}`}
                    >
                      <div className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${currentIndex === index ? 'bg-[var(--clr-primary)]' : 'bg-gray-300'}`} />
                      <span className={`text-sm font-medium ${currentIndex === index ? 'text-[var(--clr-primary)]' : 'text-gray-700'}`}>
                        {brand.title}
                      </span>
                      {currentIndex === index && (
                        <span className="ml-auto text-[10px] font-semibold text-[var(--clr-primary)]">●</span>
                      )}
                    </button>
                  ))}
                </div>
                <div className="flex items-center justify-between px-4 py-3 border-t border-gray-100 bg-gray-50/50">
                  <button onClick={goToPrevious} className="flex items-center gap-1 text-xs font-medium text-gray-600 hover:text-[var(--clr-primary)] transition-colors">
                    <ChevronLeft className="h-4 w-4" /> Previous
                  </button>
                  <button onClick={goToNext} className="flex items-center gap-1 text-xs font-medium text-gray-600 hover:text-[var(--clr-primary)] transition-colors">
                    Next <ChevronRight className="h-4 w-4" />
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </>
      )}

      {/* WhatsApp Button - Always visible */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 flex items-center justify-center 
          rounded-full shadow-[var(--shadow-strong)] 
          bg-[#25D366] text-white 
          hover:scale-105 active:scale-95 transition-all duration-200"
      >
        <WhatsappLogoIcon className="w-6 h-6" />
      </a>
    </div>
  );
}