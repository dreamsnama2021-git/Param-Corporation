// app/digital-services/page.tsx
'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import {
  ArrowUpRight,
  LayoutDashboard,
  BarChart3,
  HeartPulse,
  Users,
  Globe,
  Smartphone,
  Video,
  Database,
  Sparkles,
  Eye,
  Zap,
  ChevronRight,
  Tag,
  Calendar,
  Clock,
  ArrowRight,
  X,
  ChevronLeft,
  ChevronRight as ChevronRightIcon,
  Grid3X3,
} from 'lucide-react';

// ─── TYPES ──────────────────────────────────────────────────────────────────
interface ServiceCategory {
  id: string;
  number: string;
  title: string;
  description: string;
  icon: React.ElementType;
  gradient: string;
}

interface GalleryImage {
  id: string;
  src: string;
  title: string;
  category: string;
}

// ─── DATA ────────────────────────────────────────────────────────────────────
const serviceCategories: ServiceCategory[] = [
  {
    id: "customized-dashboard",
    number: "01",
    title: "Customized Dashboard",
    description: "Tailored analytics dashboards providing real-time insights and KPIs for pharmaceutical sales and marketing teams with role-based access.",
    icon: LayoutDashboard,
    gradient: "from-[#0093cb] to-[#00a65d]",
  },
  {
    id: "customized-analytics",
    number: "02",
    title: "Customized Analytics",
    description: "Advanced pharmaceutical analytics solutions delivering deep insights into prescription patterns, market trends, and HCP behavior.",
    icon: BarChart3,
    gradient: "from-[#0093cb] to-[#8bde7a]",
  },
  {
    id: "health-risk-calculators",
    number: "03",
    title: "Health Risk Calculators",
    description: "Interactive health risk assessment tools that engage patients and HCPs while generating valuable health insights and leads.",
    icon: HeartPulse,
    gradient: "from-[#00a65d] to-[#8bde7a]",
  },
  {
    id: "patient-support-programs",
    number: "04",
    title: "Patient Support Programs",
    description: "Comprehensive digital patient support ecosystems including medication adherence, education, and 24/7 assistance platforms.",
    icon: Users,
    gradient: "from-[#0093cb] to-[#00a65d]",
  },
  {
    id: "mini-websites",
    number: "05",
    title: "Mini Websites",
    description: "Dedicated micro-sites and landing pages for pharmaceutical brands, products, and disease awareness campaigns.",
    icon: Globe,
    gradient: "from-[#0093cb] to-[#8bde7a]",
  },
  {
    id: "customized-apps",
    number: "06",
    title: "Customized Apps",
    description: "Native and cross-platform mobile applications tailored for pharmaceutical sales reps, HCPs, and patient engagement.",
    icon: Smartphone,
    gradient: "from-[#00a65d] to-[#8bde7a]",
  },
  {
    id: "video-production",
    number: "07",
    title: "Video Production & Editing",
    description: "Professional medical video production services including 3D animations, MOA videos, and HCP testimonial content.",
    icon: Video,
    gradient: "from-[#0093cb] to-[#00a65d]",
  },
  {
    id: "variable-data",
    number: "08",
    title: "Variable Data Collection & Printing",
    description: "Intelligent variable data solutions for personalized pharmaceutical marketing materials",
    icon: Database,
    gradient: "from-[#0093cb] to-[#8bde7a]",
  },
];

const koruGalleryImages: GalleryImage[] = [
  { id: "g-3", src: "https://pub-735dbd7583d74ad5949115d6fdf77023.r2.dev/Therepy/Cardio/ChatGPT%20Image%20May%2025%2C%202026%2C%2004_06_57%20PM.png", title: "Health Risk Calculator", category: "HRA Tools" },
  { id: "g-1", src: "https://pub-735dbd7583d74ad5949115d6fdf77023.r2.dev/Digital%20Inputs/10.png", title: "Custom Dashboard Interface", category: "Dashboard" },
  { id: "g-4", src: "https://pub-735dbd7583d74ad5949115d6fdf77023.r2.dev/Final%20Edit%20Images/41.png", title: "Patient Support Portal", category: "Patient Programs" },
  { id: "g-5", src: "https://pub-735dbd7583d74ad5949115d6fdf77023.r2.dev/Digital%20Inputs/3.png", title: "Mini Website Design", category: "Websites" },
  { id: "g-2", src: "https://pub-735dbd7583d74ad5949115d6fdf77023.r2.dev/Therepy/Cardio/ChatGPT%20Image%20May%2025%2C%202026%2C%2004_15_09%20PM.png", title: "Analytics Visualization", category: "Analytics" },
  { id: "g-8", src: "https://pub-735dbd7583d74ad5949115d6fdf77023.r2.dev/Digital%20Inputs/9.png", title: "Variable Data Print Sample", category: "Print" },
  { id: "g-7", src: "https://pub-735dbd7583d74ad5949115d6fdf77023.r2.dev/Final%20Edit%20Images/68.png", title: "Video Production Still", category: "Video" },
  { id: "g-10", src: "https://pub-735dbd7583d74ad5949115d6fdf77023.r2.dev/Final%20Edit%20Images/87.png", title: "Territory Analytics", category: "Analytics" },
  { id: "g-9", src: "https://pub-735dbd7583d74ad5949115d6fdf77023.r2.dev/Therepy/Neurology/82.png", title: "Sales Dashboard View", category: "Dashboard" },
  { id: "g-6", src: "https://pub-735dbd7583d74ad5949115d6fdf77023.r2.dev/Final%20Edit%20Images/52.png", title: "Mobile App Interface", category: "Apps" },
  { id: "g-12", src: "https://pub-735dbd7583d74ad5949115d6fdf77023.r2.dev/Therepy/Dermatology/ChatGPT%20Image%20May%2029%2C%202026%2C%2004_39_27%20PM.png", title: "Patient App Screen", category: "Patient Programs" },
  { id: "g-11", src: "https://pub-735dbd7583d74ad5949115d6fdf77023.r2.dev/Therepy/Urology/23.png", title: "Risk Assessment Tool", category: "HRA Tools" },
  { id: "g-13", src: "https://pub-735dbd7583d74ad5949115d6fdf77023.r2.dev/Final%20Edit%20Images/63.png", title: "Dashboard Analytics", category: "Dashboard" },
  // { id: "g-14", src: "/koru/koru14.png", title: "Report Interface", category: "Analytics" },
  // { id: "g-15", src: "/koru/koru15.png", title: "Health Assessment", category: "HRA Tools" },
  // { id: "g-16", src: "/koru/koru16.png", title: "Patient Dashboard", category: "Patient Programs" },
  // { id: "g-17", src: "/koru/koru17.png", title: "Web Design", category: "Websites" },
  // { id: "g-18", src: "/koru/koru18.png", title: "Mobile Dashboard", category: "Apps" },
  // { id: "g-19", src: "/koru/koru19.png", title: "Video Frame", category: "Video" },
  // { id: "g-20", src: "/koru/koru20.png", title: "Print Design", category: "Print" },
  // { id: "g-21", src: "/koru/koru21.png", title: "Dashboard UI", category: "Dashboard" },
  // { id: "g-22", src: "/koru/koru22.png", title: "Charts View", category: "Analytics" },
  // { id: "g-23", src: "/koru/koru23.png", title: "Risk Tool", category: "HRA Tools" },
  // { id: "g-24", src: "/koru/koru24.png", title: "Patient App", category: "Patient Programs" },
];

// Varied aspect ratios for organic masonry feel
const ASPECT_RATIO_VALUES = [
  1.0, 1.333, 1.2, 1.25, 1.0, 1.5, 0.9, 1.333, 1.3, 1.0,
  1.25, 1.0, 1.5, 0.85, 1.333, 1.0, 1.4, 0.9, 1.25, 1.0,
  1.333, 1.0, 1.2, 1.4,
];

const ASPECT_RATIOS = [
  '1 / 1', '3 / 4', '1 / 1.2', '4 / 5', '1 / 1', '2 / 3',
  '1 / 0.9', '3 / 4', '1 / 1.3', '1 / 1', '4 / 5', '1 / 1',
  '2 / 3', '1 / 0.85', '3 / 4', '1 / 1', '1 / 1.4', '1 / 0.9',
  '4 / 5', '1 / 1', '3 / 4', '1 / 1', '1 / 1.2', '3 / 4',
];

// Distribute images into columns using shortest-column-first algorithm
function distributeIntoColumns(
  images: GalleryImage[],
  numCols: number
): { img: GalleryImage; originalIndex: number; aspectRatio: string; ratioValue: number }[][] {
  const cols: { img: GalleryImage; originalIndex: number; aspectRatio: string; ratioValue: number }[][] = 
    Array.from({ length: numCols }, () => []);
  const heights = new Array(numCols).fill(0);

  images.forEach((img, i) => {
    const ratioValue = ASPECT_RATIO_VALUES[i % ASPECT_RATIO_VALUES.length];
    const aspectRatio = ASPECT_RATIOS[i % ASPECT_RATIOS.length];
    
    const col = heights.indexOf(Math.min(...heights));
    cols[col].push({ img, originalIndex: i, aspectRatio, ratioValue });
    heights[col] += ratioValue + 0.12;
  });

  return cols;
}

// ─── GALLERY LIGHTBOX MODAL ─────────────────────────────────────────────────
function GalleryLightboxModal({
  images,
  initialIndex,
  onClose,
}: {
  images: GalleryImage[];
  initialIndex: number;
  onClose: () => void;
}) {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  const [imgOpacity, setImgOpacity] = useState(1);
  const thumbnailsRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const currentImage = images[currentIndex];

  const go = (index: number) => {
    const next = ((index % images.length) + images.length) % images.length;
    setImgOpacity(0);
    setTimeout(() => {
      setCurrentIndex(next);
      setImgOpacity(1);
    }, 150);
  };

  const nextImage = () => go(currentIndex + 1);
  const prevImage = () => go(currentIndex - 1);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') prevImage();
      if (e.key === 'ArrowRight') nextImage();
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentIndex, prevImage, nextImage, onClose]);

  useEffect(() => {
    const active = thumbnailsRef.current?.children[currentIndex] as HTMLElement;
    active?.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
  }, [currentIndex]);

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!thumbnailsRef.current) return;
    setIsDragging(true);
    setStartX(e.pageX - thumbnailsRef.current.offsetLeft);
    setScrollLeft(thumbnailsRef.current.scrollLeft);
  };
  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !thumbnailsRef.current) return;
    e.preventDefault();
    const x = e.pageX - thumbnailsRef.current.offsetLeft;
    thumbnailsRef.current.scrollLeft = scrollLeft - (x - startX) * 1.5;
  };
  const handleMouseUp = () => setIsDragging(false);

  const handleTouchStart = (e: React.TouchEvent) => {
    if (!thumbnailsRef.current) return;
    setIsDragging(true);
    setStartX(e.touches[0].pageX - thumbnailsRef.current.offsetLeft);
    setScrollLeft(thumbnailsRef.current.scrollLeft);
  };
  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging || !thumbnailsRef.current) return;
    const x = e.touches[0].pageX - thumbnailsRef.current.offsetLeft;
    thumbnailsRef.current.scrollLeft = scrollLeft - (x - startX) * 1.5;
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex flex-col items-center justify-center"
      style={{ background: 'rgba(0,0,0,0.85)', backdropFilter: 'blur(12px)' }}
      onClick={onClose}
    >
      <button
        onClick={onClose}
        className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full flex items-center justify-center text-white transition-colors"
        style={{ background: 'rgba(255,255,255,0.12)' }}
        aria-label="Close lightbox"
      >
        <X className="w-5 h-5" />
      </button>

      <div
        className="relative flex items-center justify-center"
        style={{ maxWidth: '88vw', maxHeight: '76vh' }}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={(e) => { e.stopPropagation(); prevImage(); }}
          className="absolute -left-14 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full flex items-center justify-center text-white transition-colors z-10"
          style={{ background: 'rgba(255,255,255,0.12)' }}
          aria-label="Previous image"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        <Image
          key={currentIndex}
          src={currentImage.src}
          alt={currentImage.title}
          width={1200}
          height={800}
          className="rounded-xl object-contain"
          style={{
            maxWidth: '88vw',
            maxHeight: '76vh',
            opacity: imgOpacity,
            transition: 'opacity 0.15s ease',
          }}
          unoptimized
        />

        <button
          onClick={(e) => { e.stopPropagation(); nextImage(); }}
          className="absolute -right-14 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full flex items-center justify-center text-white transition-colors z-10"
          style={{ background: 'rgba(255,255,255,0.12)' }}
          aria-label="Next image"
        >
          <ChevronRightIcon className="w-6 h-6" />
        </button>
      </div>

      <p
        className="mt-3 text-sm font-medium"
        style={{ color: 'rgba(255,255,255,0.5)' }}
        onClick={(e) => e.stopPropagation()}
      >
        {currentIndex + 1} / {images.length}
      </p>

      <div
        ref={thumbnailsRef}
        className="mt-3 flex gap-2 overflow-x-auto px-4 pb-1"
        style={{
          maxWidth: '88vw',
          cursor: isDragging ? 'grabbing' : 'grab',
          userSelect: 'none',
          scrollbarWidth: 'thin',
          scrollbarColor: 'rgba(255,255,255,0.2) transparent',
        }}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleMouseUp}
        onClick={(e) => e.stopPropagation()}
      >
        {images.map((img, idx) => (
          <button
            key={img.id}
            onClick={(e) => { e.stopPropagation(); go(idx); }}
            className="relative flex-shrink-0 rounded-lg overflow-hidden transition-all duration-200"
            style={{
              width: 52,
              height: 52,
              border: currentIndex === idx
                ? '2px solid #0093cb'
                : '2px solid transparent',
              transform: currentIndex === idx ? 'scale(1.08)' : 'scale(1)',
              cursor: 'pointer',
            }}
          >
            <Image
              src={img.src}
              alt={img.title}
              fill
              className="object-cover"
              unoptimized
            />
            {currentIndex === idx && (
              <div className="absolute inset-0" style={{ background: 'rgba(0,147,203,0.2)' }} />
            )}
          </button>
        ))}
      </div>
    </motion.div>
  );
}

// ─── MOSAIC TILE ─────────────────────────────────────────────────────────────
function MosaicTile({
  img,
  index,
  aspectRatio,
  onClick,
}: {
  img: GalleryImage;
  index: number;
  aspectRatio: string;
  onClick: () => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-20px" }}
      transition={{ delay: (index % 10) * 0.03, duration: 0.4 }}
      className="group relative overflow-hidden cursor-pointer"
      style={{
        borderRadius: 12,
        aspectRatio,
        breakInside: 'avoid',
        marginBottom: 12,
      }}
      onClick={onClick}
    >
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 pointer-events-none"
        style={{
          background: 'linear-gradient(135deg, rgba(0,147,203,0.15) 0%, rgba(0,166,93,0.1) 100%)',
          borderRadius: 12,
        }}
      />

      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 pointer-events-none rounded-xl"
        style={{
          boxShadow: 'inset 0 0 0 2px rgba(0,147,203,0.3)',
        }}
      />

      <Image
        src={img.src}
        alt={img.title}
        fill
        className="object-cover transition-transform duration-500 group-hover:scale-105"
        sizes="(max-width: 640px) 45vw, (max-width: 1024px) 30vw, 22vw"
        unoptimized
      />

      <div
        className="absolute top-1.5 left-1.5 z-20 text-[10px] font-bold px-1.5 py-0.5 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{ backgroundColor: '#060706', color: '#ffffff' }}
      >
        {index + 1}
      </div>
    </motion.div>
  );
}

// ─── MASONRY GRID ───────────────────────────────────────────────────────────
function MasonryGrid({
  images,
  numCols,
  onImageClick,
}: {
  images: GalleryImage[];
  numCols: number;
  onImageClick: (originalIndex: number) => void;
}) {
  const columns = distributeIntoColumns(images, numCols);

  return (
    <div style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
      {columns.map((col, colIdx) => (
        <div key={colIdx} style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 12 }}>
          {col.map(({ img, originalIndex, aspectRatio }) => (
            <MosaicTile
              key={img.id}
              img={img}
              index={originalIndex}
              aspectRatio={aspectRatio}
              onClick={() => onImageClick(originalIndex)}
            />
          ))}
        </div>
      ))}
    </div>
  );
}

// ─── COLLAGE GALLERY SECTION (UPDATED WITH MASONRY LAYOUT) ──────────────────
function CollageGallerySection() {
  const INITIAL_COUNT = 12;
  const [showAll, setShowAll] = useState(false);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  
  const source = showAll ? koruGalleryImages : koruGalleryImages.slice(0, INITIAL_COUNT);
  const hasMoreImages = koruGalleryImages.length > INITIAL_COUNT;

  const handleImageClick = (originalIndex: number) => {
    setSelectedImageIndex(originalIndex);
    setLightboxOpen(true);
  };

  return (
    <>
      <section className="py-10 sm:py-12 md:py-14 lg:py-18 xl:py-20 2xl:py-24" style={{ background: 'linear-gradient(135deg, #f0f9ff 0%, #f0fdf4 50%, #f8faf8 100%)' }}>
        <div className="max-w-[1500px] mx-auto px-4 sm:px-6">
          {/* Gallery Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            className="text-center mb-8 sm:mb-10 md:mb-12"
          >
            <p className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.2em] mb-2 sm:mb-3 flex items-center justify-center gap-2 text-[#0093cb]">
              <span className="inline-block w-4 sm:w-5 md:w-6 h-[1.5px] bg-[#0093cb]" />
              Portfolio Showcase
              <span className="inline-block w-4 sm:w-5 md:w-6 h-[1.5px] bg-[#0093cb]" />
            </p>
            <h2 className="text-2xl sm:text-3xl lg:text-3xl xl:text-4xl font-extrabold capitalize tracking-tight mb-2 sm:mb-3 text-slate-900">
              Digital Input <span className="text-[#0093cb]">Gallery</span>
            </h2>
            <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
              Explore our collection of digital service interfaces and solutions crafted for
              pharmaceutical companies. Each design is meticulously created to enhance
              user engagement and deliver impactful digital experiences.
            </p>
            <div className="mt-5 sm:mt-6 w-20 sm:w-24 h-1 bg-gradient-to-r from-[#00a65d] to-[#8bde7a] rounded-full mx-auto" />
          </motion.div>

          {/* Masonry Grid - Responsive columns */}
          <div className="hidden xl:block">
            <MasonryGrid images={source} numCols={4} onImageClick={handleImageClick} />
          </div>
          <div className="hidden lg:block xl:hidden">
            <MasonryGrid images={source} numCols={3} onImageClick={handleImageClick} />
          </div>
          <div className="hidden sm:block lg:hidden">
            <MasonryGrid images={source} numCols={2} onImageClick={handleImageClick} />
          </div>
          <div className="block sm:hidden">
            <MasonryGrid images={source} numCols={1} onImageClick={handleImageClick} />
          </div>

          {/* See More / See Less Button - Brand Colors */}
          {hasMoreImages && (
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="mt-8 sm:mt-10 text-center"
            >
              {!showAll ? (
                <button
                  onClick={() => setShowAll(true)}
                  className="group flex items-center gap-2 sm:gap-3 bg-[#0093cb] hover:bg-[#00a65d] 
                    text-white px-5 lg:px-6 xl:px-8 py-2.5 lg:py-3 xl:py-3.5 rounded-full font-semibold text-sm xl:text-base 
                    transition-all duration-300 hover:shadow-lg hover:shadow-[#0093cb]/30 active:scale-95 mx-auto"
                >
                  <span>See All ({koruGalleryImages.length - INITIAL_COUNT}+ more)</span>
                  <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 transition-transform group-hover:translate-x-1" />
                </button>
              ) : (
                <button
                  onClick={() => setShowAll(false)}
                  className="group flex items-center gap-2 sm:gap-3 bg-white border-2 border-[#0093cb] 
                    text-[#0093cb] hover:bg-[#0093cb] hover:text-white px-5 lg:px-6 xl:px-8 py-2.5 lg:py-3 xl:py-3.5 
                    rounded-full font-semibold text-sm xl:text-base transition-all duration-300 
                    hover:shadow-md active:scale-95 mx-auto"
                >
                  <span>Show Less</span>
                  <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 transition-transform group-hover:translate-x-1" />
                </button>
              )}
            </motion.div>
          )}
        </div>
      </section>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {lightboxOpen && (
          <GalleryLightboxModal
            images={source}
            initialIndex={selectedImageIndex}
            onClose={() => setLightboxOpen(false)}
          />
        )}
      </AnimatePresence>
    </>
  );
}

// ─── SECTION BADGE ───────────────────────────────────────────────────────────
function SectionBadge({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <span className={`inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-semibold ${className}`}>
      {children}
    </span>
  );
}

// ─── DIGITAL PAGE BANNER ─────────────────────────────────────────────────────
const PageBanner = () => (
 <div className="relative w-full h-[60vh] md:h-[40vh] lg:h-[65vh] xl:h-[65vh] 2xl:h-[65vh] overflow-hidden">
    {/* Mobile image */}
    <Image
      src="https://pub-735dbd7583d74ad5949115d6fdf77023.r2.dev/Banners/Inner%20Banner/Digital%20Input%20Page%20Mobile.png"
      alt="Digital Banner - Mobile"
      fill
      className="object-fill object-center block md:hidden"
      priority
      unoptimized
    />

    {/* Tablet image */}
    <Image
      src="https://pub-735dbd7583d74ad5949115d6fdf77023.r2.dev/Banners/Inner%20Banner/Digital%20Input%20Page%20Tablet.png"
      alt="Digital Banner - Tablet"
      fill
      className="object-fill object-center hidden md:block lg:hidden"
      priority
      unoptimized
    />

    {/* Desktop image */}
    <Image
      src="https://pub-735dbd7583d74ad5949115d6fdf77023.r2.dev/Banners/Inner%20Banner/Digital%20Input%20Page%20Desktop.png"
      alt="Digital Banner - Desktop"
      fill
      className="object-fill object-center hidden lg:block"
      priority
      unoptimized
    />
  </div>
);

// ─── HYPERPERSONALIZED SERVICES SECTION ──────────────────────────────────────
function HyperPersonalizedServices() {
  return (
    <section className="py-10 sm:py-12 md:py-14 lg:py-18 xl:py-20 2xl:py-24 bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-[1500px] mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          className="text-center mb-10 sm:mb-12 md:mb-14 lg:mb-16"
        >
          <p className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.2em] mb-2 sm:mb-3 flex items-center justify-center gap-2 text-[#0093cb]">
            <span className="inline-block w-4 sm:w-5 md:w-6 h-[1.5px] bg-[#0093cb]" />
           Tailored Solutions
            <span className="inline-block w-4 sm:w-5 md:w-6 h-[1.5px] bg-[#0093cb]" />
          </p>
          <h2 className="text-2xl sm:text-3xl lg:text-3xl xl:text-4xl font-extrabold capitalize tracking-tight mb-2 sm:mb-3 text-slate-900">
                Digital <span className="text-[#0093cb]">   Services</span>
          </h2>
          <p className="text-base sm:text-lg xl:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            We craft bespoke digital solutions that adapt to your unique pharmaceutical
            brand needs. Each service is meticulously personalized to drive engagement,
            compliance, and measurable outcomes.
          </p>
          <div className="mt-5 sm:mt-6 w-20 sm:w-24 h-1 bg-gradient-to-r from-[#0093cb] to-[#00a65d] rounded-full mx-auto" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-5 md:gap-6">
          {serviceCategories.map((service, index) => (
            <FlipCard key={service.id} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── FLIP CARD (with brand colors and Explore button) ────────────────────────
function FlipCard({ service, index }: { service: ServiceCategory; index: number }) {
  const [isFlipped, setIsFlipped] = useState(false);
  const Icon = service.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className="relative h-[280px] sm:h-[300px] md:h-[310px] lg:h-[300px] xl:h-[320px] perspective-1000"
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
    >
      <motion.div
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
        className="relative w-full h-full preserve-3d"
        style={{ transformStyle: 'preserve-3d' }}
      >
        {/* Front Face */}
        <div
          className="absolute inset-0 backface-hidden rounded-2xl sm:rounded-3xl border border-slate-200 bg-white shadow-lg flex flex-col items-center justify-center p-6 sm:p-8 cursor-pointer group"
          style={{ backfaceVisibility: 'hidden' }}
        >
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl sm:rounded-3xl"
            style={{
              background: 'radial-gradient(circle at center, rgba(0, 166, 93, 0.06) 0%, transparent 70%)',
            }}
          />
          <div className="absolute top-3 sm:top-4 left-3 sm:left-4">
            <span className="text-[10px] sm:text-xs font-bold text-slate-400 bg-slate-100 px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full">
              {service.number}
            </span>
          </div>
          <div className={`w-16 h-16 sm:w-18 sm:h-18 md:w-20 md:h-20 rounded-xl sm:rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-4 sm:mb-5 md:mb-6 shadow-lg group-hover:shadow-xl transition-shadow duration-500 relative z-10`}>
            <Icon size={28} className="sm:size-8 md:size-9 text-white" />
          </div>
          <h3 className="text-lg sm:text-xl font-extrabold text-slate-900 text-center mb-2 sm:mb-3 group-hover:text-[#00a65d] transition-colors duration-300 relative z-10">
            {service.title}
          </h3>
          <p className="text-xs sm:text-sm text-slate-500 text-center leading-relaxed line-clamp-2 relative z-10">
            {service.description.split('.')[0]}.
          </p>
        </div>

        {/* Back Face */}
        <div
          className="absolute inset-0 backface-hidden rounded-2xl sm:rounded-3xl bg-gradient-to-br from-slate-900 to-slate-800 text-white shadow-2xl flex flex-col items-center justify-center p-6 sm:p-8"
          style={{ 
            backfaceVisibility: 'hidden',
            transform: 'rotateY(180deg)',
          }}
        >
          <div className={`absolute inset-0 opacity-10 rounded-2xl sm:rounded-3xl bg-gradient-to-br ${service.gradient}`} />
          <div className="absolute top-3 sm:top-4 left-3 sm:left-4">
            <span className="text-[10px] sm:text-xs font-bold text-[#8bde7a] bg-white/10 backdrop-blur-sm px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full">
              {service.number}
            </span>
          </div>
          <div className={`w-12 h-12 sm:w-13 sm:h-13 md:w-14 md:h-14 rounded-lg sm:rounded-xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-4 sm:mb-5 shadow-lg relative z-10`}>
            <Icon size={24} className="sm:size-6 md:size-7 text-white" />
          </div>
          <h3 className="text-base sm:text-lg font-extrabold text-white text-center mb-2 sm:mb-3 relative z-10">
            {service.title}
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 text-center leading-relaxed relative z-10 mb-5 sm:mb-6">
            {service.description}
          </p>
          
          {/* Explore Button - Navigates to Contact Us */}
          <Link
            href="/contact-us"
            className="relative z-20 inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm 
              hover:bg-[#0093cb] text-white px-5 py-2 rounded-full font-semibold text-sm 
              transition-all duration-300 hover:shadow-lg hover:shadow-[#0093cb]/30 
              border border-white/20 hover:border-[#0093cb] group/btn"
          >
            <span>Explore {service.title.split(' ')[0]}</span>
            <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-1" />
          </Link>
          
          <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${service.gradient}`} />
        </div>
      </motion.div>
    </motion.div>
  );
}

// ─── MAIN PAGE ───────────────────────────────────────────────────────────────
export default function DigitalServicesPage() {
  return (
    <div className="min-h-screen bg-white">
      <PageBanner />
      <HyperPersonalizedServices />
      <CollageGallerySection />
    </div>
  );
}