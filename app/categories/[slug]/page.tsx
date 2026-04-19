/* ─── 3-Card Swipeable Gallery with Lightbox Modal ─── */
'use client';

import React, { useMemo, useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import { useParams, useRouter, useSearchParams } from 'next/navigation';
import { ArrowUpRight, Home, ChevronRight, ChevronLeft, X, ZoomIn } from 'lucide-react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  allProducts, 
  categories, 
  therapies, 
  occasions, 
  personalizedGifts, 
  digitalGifts,
  getCategoryBySlug,
  getOccasionCategories,
  getMonthCategories,
  getTherapyCategories
} from '../../data';

const listingStyles = `
  .listing-container { font-family: system-ui, -apple-system, sans-serif; }
  .category-item { position: relative; transition: all 0.3s ease; }
  .category-item:hover .category-arrow { opacity: 1; transform: translateX(0); }
  .category-arrow { opacity: 0; transform: translateX(-8px); transition: all 0.3s ease; }
  .img-card-hover:hover .zoom-icon { opacity: 1; }
  .zoom-icon { opacity: 0; transition: opacity 0.3s ease; }
  .img-card-hover:hover img { transform: scale(1.06); }
  .img-card-hover img { transition: transform 0.5s ease; }
  .thumb-active { border: 2px solid #F5A623 !important; }
  .tab-active { background: #F5A623; color: #7a3e00; }
  .tab-inactive { background: transparent; color: #6b7280; }
  .tab-inactive:hover { background: #f3f4f6; color: #0f172a; }
  .scrollbar-hide::-webkit-scrollbar { display: none; }
  .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
`;

// Tab configuration
const TABS = [
  { id: 'categories', label: 'Categories', color: '#F5A623', path: '/categories' },
  { id: 'therapy', label: 'Therapy', color: '#10B981', path: '/therapy' },
  { id: 'personalized', label: 'Personalized Gifts', color: '#8B5CF6', path: '/personalized-gifts' },
  { id: 'occasion', label: 'Occasion', color: '#EF4444', path: '/occasion' },
  { id: 'digital', label: 'Digital Gifts', color: '#3B82F6', path: '/digital-gifts' },
] as const;

type TabId = typeof TABS[number]['id'];

// Get categories based on active tab
const getCategoriesForTab = (tabId: TabId) => {
  switch (tabId) {
    case 'categories': return categories;
    case 'therapy': return therapies;
    case 'personalized': return personalizedGifts;
    case 'occasion': return occasions;
    case 'digital': return digitalGifts;
    default: return categories;
  }
};

// Get sidebar categories (filtered for occasion tab to show only main occasions)
const getSidebarCategories = (tabId: TabId) => {
  if (tabId === 'occasion') {
    return getOccasionCategories();
  }
  return getCategoriesForTab(tabId);
};

/* ── Ensure minimum 6 images by repeating if needed ── */
const getProductImages = (product: any): string[] => {
  const base: string[] = product.images?.length
    ? product.images
    : [product.image];

  const result: string[] = [];
  while (result.length < 6) {
    result.push(...base);
  }
  return result.slice(0, Math.max(6, base.length));
};

/* ══════════════════════════════════════════
   LIGHTBOX — 2-STEP MODAL
══════════════════════════════════════════ */
function LightboxModal({
  images,
  startIndex,
  productName,
  onClose,
}: {
  images: string[];
  startIndex: number;
  productName: string;
  onClose: () => void;
}) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const prev = useCallback(() =>
    setActiveIndex(i => (i === null ? null : (i - 1 + images.length) % images.length)),
    [images.length]
  );
  const next = useCallback(() =>
    setActiveIndex(i => (i === null ? null : (i + 1) % images.length)),
    [images.length]
  );

  const handleBackToGrid = useCallback(() => {
    setActiveIndex(null);
  }, []);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (activeIndex !== null) {
        if (e.key === 'ArrowLeft') prev();
        if (e.key === 'ArrowRight') next();
        if (e.key === 'Escape') setActiveIndex(null);
      } else {
        if (e.key === 'Escape') onClose();
      }
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [activeIndex, prev, next, onClose]);

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    document.body.style.position = 'fixed';
    document.body.style.width = '100%';
    return () => { 
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.width = '';
    };
  }, []);

  const isGridView = activeIndex === null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        style={{ 
          background: 'rgba(8,8,8,0.97)',
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          width: '100vw',
          height: '100vh',
          zIndex: 999999
        }}
        className="flex flex-col"
      >
        <div className="flex items-center justify-between px-6 py-4 flex-shrink-0 border-b border-white/8">
          <div className="flex items-center gap-3">
            {!isGridView && activeIndex !== null && (
              <button
                onClick={handleBackToGrid}
                className="flex items-center gap-1.5 text-white/50 hover:text-white text-xs font-semibold uppercase tracking-wider transition-colors mr-2"
                type="button"
              >
                <ChevronLeft className="w-3.5 h-3.5" />
                All Photos
              </button>
            )}
            <div>
              <p className="text-white/40 text-[10px] uppercase tracking-widest font-bold">
                {isGridView ? `${images.length} Photos` : `${activeIndex! + 1} / ${images.length}`}
              </p>
              <h3 className="text-white font-semibold text-base leading-tight">{productName}</h3>
            </div>
          </div>

          <div className="hidden sm:flex items-center gap-2">
            <div className={`flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider transition-all ${
              isGridView ? 'bg-[#F5A623] text-[#7a3e00]' : 'bg-white/10 text-white/40'
            }`}>
              <span className="w-4 h-4 rounded-full bg-current/20 flex items-center justify-center text-[9px]">1</span>
              All Images
            </div>
            <ChevronRight className="w-3 h-3 text-white/20" />
            <div className={`flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider transition-all ${
              !isGridView ? 'bg-[#F5A623] text-[#7a3e00]' : 'bg-white/10 text-white/40'
            }`}>
              <span className="w-4 h-4 rounded-full bg-current/20 flex items-center justify-center text-[9px]">2</span>
              View Image
            </div>
          </div>

          <button
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#F5A623] flex items-center justify-center transition-colors"
            type="button"
          >
            <X className="w-4 h-4 text-white" />
          </button>
        </div>

        <AnimatePresence mode="wait">
          {isGridView ? (
            <motion.div
              key="grid"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.25 }}
              className="flex-1 overflow-y-auto p-6"
            >
              <p className="text-center text-white/30 text-[11px] uppercase tracking-widest font-semibold mb-5">
                Click any image to view full size
              </p>

              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
                  gap: '12px',
                  maxWidth: '960px',
                  margin: '0 auto',
                }}
              >
                {images.map((img, idx) => (
                  <motion.button
                    key={idx}
                    onClick={() => setActiveIndex(idx)}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.97 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.04 }}
                    style={{
                      position: 'relative',
                      borderRadius: '12px',
                      overflow: 'hidden',
                      aspectRatio: idx % 3 === 0 ? '4/5' : idx % 3 === 1 ? '1/1' : '4/3',
                      border: '2px solid transparent',
                      cursor: 'pointer',
                      transition: 'border-color 0.2s',
                    }}
                    className="hover:border-[#F5A623]"
                    type="button"
                  >
                    <Image
                      src={img}
                      alt={`${productName} ${idx + 1}`}
                      fill
                      className="object-cover"
                      unoptimized
                    />
                    <div
                      style={{
                        position: 'absolute',
                        top: 8,
                        left: 8,
                        background: 'rgba(0,0,0,0.55)',
                        backdropFilter: 'blur(4px)',
                        color: 'white',
                        fontSize: 10,
                        fontWeight: 700,
                        padding: '2px 8px',
                        borderRadius: 20,
                        zIndex: 5
                      }}
                    >
                      {idx + 1}
                    </div>
                    <div
                      style={{
                        position: 'absolute',
                        inset: 0,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        opacity: 0,
                        transition: 'opacity 0.25s',
                        zIndex: 5
                      }}
                      className="zoom-overlay"
                    >
                      <div style={{
                        width: 36, height: 36, borderRadius: '50%',
                        background: 'rgba(255,255,255,0.9)',
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                      }}>
                        <ZoomIn style={{ width: 16, height: 16, color: '#0f172a' }} />
                      </div>
                    </div>
                  </motion.button>
                ))}
              </div>
            </motion.div>

          ) : activeIndex !== null ? (
            <motion.div
              key="single"
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.97 }}
              transition={{ duration: 0.25 }}
              className="flex-1 flex flex-col min-h-0"
            >
              <div className="flex-1 flex items-center justify-center px-4 md:px-14 relative min-h-0">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeIndex}
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -30 }}
                    transition={{ duration: 0.28, ease: 'easeOut' }}
                    className="relative w-full h-full max-w-4xl"
                  >
                    <Image
                      src={images[activeIndex]}
                      alt={`${productName} ${activeIndex + 1}`}
                      fill
                      className="object-contain"
                      unoptimized
                      priority
                    />
                  </motion.div>
                </AnimatePresence>

                <button
                  onClick={prev}
                  className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/10 hover:bg-[#F5A623] flex items-center justify-center transition-colors"
                  style={{ zIndex: 1000000 }}
                  type="button"
                >
                  <ChevronLeft className="w-5 h-5 md:w-6 md:h-6 text-white" />
                </button>
                <button
                  onClick={next}
                  className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/10 hover:bg-[#F5A623] flex items-center justify-center transition-colors"
                  style={{ zIndex: 1000000 }}
                  type="button"
                >
                  <ChevronRight className="w-5 h-5 md:w-6 md:h-6 text-white" />
                </button>
              </div>

              <div className="flex-shrink-0 px-4 md:px-6 pb-5 pt-3">
                <div className="flex justify-center gap-2 flex-wrap max-w-4xl mx-auto">
                  {images.map((img, i) => (
                    <motion.button
                      key={i}
                      onClick={() => setActiveIndex(i)}
                      whileHover={{ scale: 1.08 }}
                      whileTap={{ scale: 0.95 }}
                      style={{
                        width: 48,
                        height: 48,
                        borderRadius: 8,
                        overflow: 'hidden',
                        position: 'relative',
                        flexShrink: 0,
                        border: i === activeIndex ? '2px solid #F5A623' : '2px solid rgba(255,255,255,0.1)',
                        opacity: i === activeIndex ? 1 : 0.45,
                        transition: 'all 0.2s',
                      }}
                      className="md:w-14 md:h-14"
                      type="button"
                    >
                      <Image src={img} alt={`Thumbnail ${i + 1}`} fill className="object-cover" unoptimized />
                    </motion.button>
                  ))}
                </div>
              </div>
            </motion.div>
          ) : null}
        </AnimatePresence>
      </motion.div>
    </AnimatePresence>
  );
}

/* ══════════════════════════════════════════
   3-CARD SWIPEABLE GALLERY
══════════════════════════════════════════ */
function ThreeCardGallery({ images, productName }: { images: string[]; productName: string }) {
  const [offset, setOffset] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState(0);
  const [dragDelta, setDragDelta] = useState(0);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const VISIBLE = 3;
  const GAP = 16;
  const maxOffset = Math.max(0, images.length - VISIBLE);

  const goTo = (dir: 1 | -1) =>
    setOffset(prev => Math.max(0, Math.min(prev + dir, maxOffset)));

  const onPointerDown = (e: React.PointerEvent) => {
    setIsDragging(true);
    setDragStart(e.clientX);
    setDragDelta(0);
    (e.target as HTMLElement).setPointerCapture(e.pointerId);
  };

  const onPointerMove = (e: React.PointerEvent) => {
    if (!isDragging) return;
    const delta = e.clientX - dragStart;
    if ((offset === 0 && delta > 0) || (offset === maxOffset && delta < 0)) {
      setDragDelta(delta * 0.12);
    } else {
      setDragDelta(delta * 0.4);
    }
  };

  const onPointerUp = () => {
    if (!isDragging) return;
    setIsDragging(false);
    if (dragDelta < -40 && offset < maxOffset) goTo(1);
    else if (dragDelta > 40 && offset > 0) goTo(-1);
    setDragDelta(0);
  };

  const translateX = `calc(${-(offset * (100 / VISIBLE))}% + ${-(offset * GAP)}px + ${isDragging ? dragDelta : 0}px)`;

  return (
    <>
      <div className="relative select-none" style={{ zIndex: 1 }}>
        <div
          className="overflow-hidden rounded-2xl"
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={onPointerUp}
          onPointerLeave={onPointerUp}
          style={{ cursor: isDragging ? 'grabbing' : 'grab' }}
        >
          <div
            style={{
              display: 'flex',
              gap: `${GAP}px`,
              transform: `translateX(${translateX})`,
              transition: isDragging ? 'none' : 'transform 0.45s cubic-bezier(0.25,0.46,0.45,0.94)',
              willChange: 'transform',
            }}
          >
            {images.map((img, idx) => (
              <div
                key={idx}
                className="img-card-hover"
                onClick={() => !isDragging && setLightboxIndex(idx)}
                style={{
                  flex: `0 0 calc(${100 / VISIBLE}% - ${(GAP * (VISIBLE - 1)) / VISIBLE}px)`,
                  aspectRatio: '3/4',
                  borderRadius: '16px',
                  overflow: 'hidden',
                  position: 'relative',
                  cursor: 'pointer',
                }}
              >
                <Image
                  src={img}
                  alt={`${productName} ${idx + 1}`}
                  fill
                  className="object-cover"
                  unoptimized
                  draggable={false}
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />

                <div className="zoom-icon absolute inset-0 flex items-center justify-center">
                  <div className="w-10 h-10 rounded-full bg-white/90 flex items-center justify-center shadow-lg">
                    <ZoomIn className="w-4 h-4 text-[#0f172a]" />
                  </div>
                </div>

                <div className="absolute bottom-3 left-3 bg-black/50 backdrop-blur-sm text-white text-[10px] font-bold px-2.5 py-1 rounded-full">
                  {idx + 1} / {images.length}
                </div>
              </div>
            ))}
          </div>
        </div>

        {offset > 0 && (
          <button
            onClick={() => goTo(-1)}
            className="absolute -left-4 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white shadow-lg flex items-center justify-center hover:bg-[#F5A623] hover:text-white transition-colors"
            style={{ zIndex: 10 }}
            type="button"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
        )}
        {offset < maxOffset && (
          <button
            onClick={() => goTo(1)}
            className="absolute -right-4 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white shadow-lg flex items-center justify-center hover:bg-[#F5A623] hover:text-white transition-colors"
            style={{ zIndex: 10 }}
            type="button"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        )}

        {maxOffset > 0 && (
          <div className="flex justify-center gap-2 mt-4">
            {Array.from({ length: maxOffset + 1 }).map((_, i) => (
              <button
                key={i}
                onClick={() => setOffset(i)}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  offset === i ? 'w-6 bg-[#F5A623]' : 'w-1.5 bg-slate-300 hover:bg-slate-400'
                }`}
                type="button"
              />
            ))}
          </div>
        )}

        <p className="text-center text-[10px] text-slate-400 font-medium mt-2 uppercase tracking-widest">
          Click any image to open gallery
        </p>
      </div>

      {lightboxIndex !== null && (
        <LightboxModal
          images={images}
          startIndex={lightboxIndex}
          productName={productName}
          onClose={() => setLightboxIndex(null)}
        />
      )}
    </>
  );
}

/* ══════════════════════════════════════════
   PRODUCT LISTING ITEM
══════════════════════════════════════════ */
function ProductListingItem({ product, index, accentColor }: { product: any; index: number; accentColor: string }) {
  const formattedIndex = String(index + 1).padStart(2, '0');
  const productImages = getProductImages(product);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      className="mb-24 lg:mb-32"
    >
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-3">
          <span className="text-xs font-bold tracking-wider" style={{ color: accentColor }}>{formattedIndex}</span>
          <div className="h-px w-10 bg-gradient-to-r to-transparent" style={{ backgroundColor: accentColor }} />
        </div>
        <h2 className="text-3xl lg:text-4xl font-serif italic text-[#0f172a] mb-3">
          {product.name}
        </h2>
        <div className="h-px w-16 mb-4" style={{ backgroundColor: accentColor }} />
        <div className="flex items-start justify-between gap-6 flex-wrap">
          <p className="text-[#6b7280] max-w-xl leading-relaxed text-sm">
            {product.description || 'Premium quality product crafted with precision and care for exceptional results.'}
          </p>
          <Link
            href={`/product/${product.id}`}
            className="inline-flex items-center gap-2 bg-[#0f172a] text-white px-5 py-2.5 rounded-full text-sm font-semibold transition-colors duration-300 flex-shrink-0"
            style={{ ':hover': { backgroundColor: accentColor } } as any}
          >
            View Details
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      </div>

      <ThreeCardGallery images={productImages} productName={product.name} />
    </motion.div>
  );
}

/* ══════════════════════════════════════════
   PAGE COMPONENT
══════════════════════════════════════════ */
export default function CategoryPage() {
  const params = useParams();
  const router = useRouter();
  const searchParams = useSearchParams();
  
  const slug = params?.slug as string | undefined;
  const tabParam = searchParams.get('tab') as TabId | null;
  
  // Determine active tab
  const activeTab: TabId = useMemo(() => {
    if (tabParam && TABS.some(t => t.id === tabParam)) return tabParam;
    
    if (slug) {
      if (categories.some(c => c.slug === slug)) return 'categories';
      if (therapies.some(t => t.slug === slug)) return 'therapy';
      if (personalizedGifts.some(p => p.slug === slug)) return 'personalized';
      if (occasions.some(o => o.slug === slug)) return 'occasion';
      if (digitalGifts.some(d => d.slug === slug)) return 'digital';
    }
    
    return 'categories';
  }, [slug, tabParam]);

  const isAllProducts = !slug || slug === 'all';
  const activeTabColor = TABS.find(t => t.id === activeTab)?.color || '#F5A623';
  const activeTabPath = TABS.find(t => t.id === activeTab)?.path || '/categories';

  // Get all categories for the active tab
  const tabCategories = useMemo(() => getCategoriesForTab(activeTab), [activeTab]);
  
  // Get sidebar categories
  const sidebarCategories = useMemo(() => getSidebarCategories(activeTab), [activeTab]);

  // Filter products
  const filteredProducts = useMemo(() => {
    if (isAllProducts) {
      return allProducts.filter(p => tabCategories.some(cat => cat.slug === p.category));
    }
    return allProducts.filter(p => p.category === slug);
  }, [slug, isAllProducts, tabCategories]);

  const currentCategory = isAllProducts ? null : tabCategories.find(c => c.slug === slug);

  // Handle tab change
  const handleTabChange = (tabId: TabId) => {
    const firstCategory = getCategoriesForTab(tabId)[0];
    if (firstCategory) {
      router.push(`/categories/${firstCategory.slug}?tab=${tabId}`);
    } else {
      router.push(`/categories/all?tab=${tabId}`);
    }
  };

  // Handle category selection
  const handleCategorySelect = (catSlug: string) => {
    router.push(`/categories/${catSlug}?tab=${activeTab}`);
  };

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: listingStyles }} />
      <div className="min-h-screen listing-container bg-[#f8fafc]">

        {/* Hero */}
        <section className="relative bg-gradient-to-br from-[#0b3c5d] via-[#072c44] to-[#0093cb]/20 py-12 lg:py-16 overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <svg width="100%" height="100%">
              <pattern id="dots" width="40" height="40" patternUnits="userSpaceOnUse">
                <circle cx="20" cy="20" r="1.5" fill="white" />
              </pattern>
              <rect width="100%" height="100%" fill="url(#dots)" />
            </svg>
          </div>
          <div className="relative max-w-7xl mx-auto px-6">
            <nav className="flex items-center gap-2 text-xs uppercase tracking-wider text-white/60 mb-8 flex-wrap">
              <Link href="/" className="hover:text-white flex items-center gap-1.5 transition-colors">
                <Home className="w-3 h-3" /> Home
              </Link>
              <ChevronRight className="w-3 h-3" />
              <Link href="/categories/all" className="hover:text-white transition-colors">
                Products
              </Link>
              <ChevronRight className="w-3 h-3" />
              <span className="text-white/80">
                {TABS.find(t => t.id === activeTab)?.label}
              </span>
              {!isAllProducts && currentCategory && (
                <>
                  <ChevronRight className="w-3 h-3" />
                  <span className="font-medium" style={{ color: activeTabColor }}>
                    {currentCategory.name}
                  </span>
                </>
              )}
            </nav>
            <h1 className="text-4xl lg:text-5xl font-serif italic text-white">
              {isAllProducts ? `All ${TABS.find(t => t.id === activeTab)?.label}` : currentCategory?.name}
            </h1>
            <p className="text-white/60 mt-3 max-w-2xl">
              {isAllProducts 
                ? `Explore our complete collection of ${TABS.find(t => t.id === activeTab)?.label.toLowerCase()}`
                : currentCategory?.description || 'Premium quality products for your needs'}
            </p>
          </div>
        </section>

        {/* Tab Navigation */}
        <div className="border-b border-gray-200 bg-white sticky top-[72px] z-30">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex items-center gap-1 overflow-x-auto pb-0.5 scrollbar-hide">
              {TABS.map(tab => (
                <button
                  key={tab.id}
                  onClick={() => handleTabChange(tab.id)}
                  className={`px-5 py-3.5 text-sm font-semibold whitespace-nowrap transition-all duration-200 border-b-2 ${
                    activeTab === tab.id
                      ? 'border-current text-[#0f172a]'
                      : 'border-transparent text-[#6b7280] hover:text-[#0f172a] hover:border-gray-300'
                  }`}
                  style={{ 
                    color: activeTab === tab.id ? tab.color : undefined,
                    borderBottomColor: activeTab === tab.id ? tab.color : undefined
                  }}
                  type="button"
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="max-w-7xl mx-auto px-6 py-12 lg:py-16">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">

            {/* Sidebar */}
            <aside className="lg:w-64 flex-shrink-0">
              <div className="sticky top-[140px]">
                <div className="flex items-center gap-2 mb-5">
                  <span className="text-[10px] font-black uppercase tracking-[0.2em] text-[#6b7280]">
                    {TABS.find(t => t.id === activeTab)?.label}
                  </span>
                  <div className="h-px flex-1 bg-gradient-to-r from-current/30 to-transparent" style={{ color: activeTabColor }} />
                </div>
                
                <div className="flex flex-col space-y-0.5 max-h-[calc(100vh-200px)] overflow-y-auto pr-2">
                  <button
                    onClick={() => router.push(`/categories/all?tab=${activeTab}`)}
                    className={`category-item group text-left py-3 px-4 rounded-xl transition-all ${
                      isAllProducts 
                        ? 'font-semibold' 
                        : 'text-[#6b7280] hover:text-[#0f172a] hover:bg-gray-100'
                    }`}
                    style={isAllProducts ? { backgroundColor: `${activeTabColor}20`, color: '#0f172a' } : {}}
                    type="button"
                  >
                    <div className="flex items-center justify-between">
                      <span>All {TABS.find(t => t.id === activeTab)?.label}</span>
                      {isAllProducts && (
                        <span className="text-xs px-2 py-0.5 rounded-full text-white" style={{ backgroundColor: activeTabColor }}>
                          {filteredProducts.length}
                        </span>
                      )}
                    </div>
                  </button>
                  
                  {sidebarCategories.map(cat => {
                    const count = allProducts.filter(p => p.category === cat.slug).length;
                    const isActive = slug === cat.slug;
                    
                    return (
                      <button
                        key={cat.slug}
                        onClick={() => handleCategorySelect(cat.slug)}
                        className={`category-item group text-left py-3 px-4 rounded-xl transition-all ${
                          isActive 
                            ? 'font-semibold' 
                            : 'text-[#6b7280] hover:text-[#0f172a] hover:bg-gray-100'
                        }`}
                        style={isActive ? { backgroundColor: `${activeTabColor}20`, color: '#0f172a' } : {}}
                        type="button"
                      >
                        <div className="flex items-center justify-between">
                          <span className="truncate pr-2">{cat.name}</span>
                          <span className={`text-xs px-2 py-0.5 rounded-full transition-colors ${
                            isActive ? 'text-white' : 'bg-gray-200 text-[#6b7280] group-hover:bg-gray-300'
                          }`} style={isActive ? { backgroundColor: activeTabColor } : {}}>
                            {count}
                          </span>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>
            </aside>

            {/* Listings */}
            <main className="flex-1 min-w-0">
              {filteredProducts.length === 0 ? (
                <div className="text-center py-20">
                  <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gray-100 flex items-center justify-center">
                    <svg className="w-8 h-8 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 12H4M12 4v16" />
                    </svg>
                  </div>
                  <p className="text-[#6b7280] text-lg">No products found in this category.</p>
                  <button
                    onClick={() => router.push(`/categories/all?tab=${activeTab}`)}
                    className="mt-4 text-sm font-medium px-4 py-2 rounded-full transition-colors"
                    style={{ color: activeTabColor }}
                    type="button"
                  >
                    View all {TABS.find(t => t.id === activeTab)?.label}
                  </button>
                </div>
              ) : (
                <>
                  <div className="mb-6 flex items-center justify-between">
                    <p className="text-sm text-[#6b7280]">
                      Showing <span className="font-semibold text-[#0f172a]">{filteredProducts.length}</span> products
                    </p>
                  </div>
                  {filteredProducts.map((product, idx) => (
                    <ProductListingItem 
                      key={product.id} 
                      product={product} 
                      index={idx} 
                      accentColor={activeTabColor}
                    />
                  ))}
                </>
              )}
            </main>
          </div>
        </div>
      </div>
    </>
  );
}