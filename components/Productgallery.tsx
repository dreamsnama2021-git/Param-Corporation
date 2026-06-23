'use client';

import Image from 'next/image';
import React, { useState, useEffect, useRef } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

interface GalleryImage {
  src: string;
  title?: string;
  id?: string | number;
}

const koruImages: GalleryImage[] = [
  { src: "https://pub-735dbd7583d74ad5949115d6fdf77023.r2.dev/Koru/1.png", title: "Koru 1", id: 1 },
  // { src: "https://pub-735dbd7583d74ad5949115d6fdf77023.r2.dev/Koru/34.png", title: "Koru 34", id: 34 },
  { src: "https://pub-735dbd7583d74ad5949115d6fdf77023.r2.dev/Koru/2.png", title: "Koru 2", id: 2 },
  { src: "https://pub-735dbd7583d74ad5949115d6fdf77023.r2.dev/Koru/3.png", title: "Koru 3", id: 3 },
  { src: "https://pub-735dbd7583d74ad5949115d6fdf77023.r2.dev/Koru/35.png", title: "Koru 35", id: 35 },
  { src: "https://pub-735dbd7583d74ad5949115d6fdf77023.r2.dev/Koru/4.png", title: "Koru 4", id: 4 },
  { src: "https://pub-735dbd7583d74ad5949115d6fdf77023.r2.dev/Koru/5.png", title: "Koru 5", id: 5 },
  { src: "https://pub-735dbd7583d74ad5949115d6fdf77023.r2.dev/Koru/13.png", title: "Koru 13", id: 13 },
  { src: "https://pub-735dbd7583d74ad5949115d6fdf77023.r2.dev/Koru/14.png", title: "Koru 14", id: 14 },
  { src: "https://pub-735dbd7583d74ad5949115d6fdf77023.r2.dev/Koru/40.png", title: "Koru 40", id: 40 },
  { src: "https://pub-735dbd7583d74ad5949115d6fdf77023.r2.dev/Koru/16.png", title: "Koru 16", id: 16 },
  { src: "https://pub-735dbd7583d74ad5949115d6fdf77023.r2.dev/Koru/41.png", title: "Koru 41", id: 41 },
  { src: "https://pub-735dbd7583d74ad5949115d6fdf77023.r2.dev/Koru/17.png", title: "Koru 17", id: 17 },
  { src: "https://pub-735dbd7583d74ad5949115d6fdf77023.r2.dev/Koru/18.png", title: "Koru 18", id: 18 },
  { src: "https://pub-735dbd7583d74ad5949115d6fdf77023.r2.dev/Koru/19.png", title: "Koru 19", id: 19 },
  { src: "https://pub-735dbd7583d74ad5949115d6fdf77023.r2.dev/Koru/21.png", title: "Koru 21", id: 21 },
  { src: "https://pub-735dbd7583d74ad5949115d6fdf77023.r2.dev/Koru/22.png", title: "Koru 22", id: 22 },
  { src: "https://pub-735dbd7583d74ad5949115d6fdf77023.r2.dev/Koru/25.png", title: "Koru 25", id: 25 },
  { src: "https://pub-735dbd7583d74ad5949115d6fdf77023.r2.dev/Koru/26.png", title: "Koru 26", id: 26 },
  { src: "https://pub-735dbd7583d74ad5949115d6fdf77023.r2.dev/Koru/27.png", title: "Koru 27", id: 27 },
  { src: "https://pub-735dbd7583d74ad5949115d6fdf77023.r2.dev/Koru/28.png", title: "Koru 28", id: 28 },
  { src: "https://pub-735dbd7583d74ad5949115d6fdf77023.r2.dev/Koru/31.png", title: "Koru 31", id: 31 },
];

// Varied aspect ratios for an organic mosaic feel
// Values are height multipliers relative to width (e.g. 1.35 = taller tile)
const ASPECT_RATIOS = [
  '1 / 1',      // square
  '3 / 4',      // portrait
  '1 / 1.2',    // slightly tall
  '4 / 5',      // portrait
  '1 / 1',      // square
  '2 / 3',      // tall portrait
  '1 / 0.9',    // slightly wide
  '3 / 4',      // portrait
  '1 / 1.3',    // tall
  '1 / 1',      // square
  '4 / 5',      // portrait
  '1 / 1',      // square
  '2 / 3',      // tall
  '1 / 0.85',   // wider
  '3 / 4',      // portrait
  '1 / 1',      // square
  '1 / 1.4',    // tall
  '1 / 0.9',    // slightly wide
  '4 / 5',      // portrait
  '1 / 1',      // square
  '3 / 4',      // portrait
  '1 / 1',      // square
];

const INITIAL_COUNT = 12;

// Aspect ratio as a numeric height/width value (for column-height tracking)
const ASPECT_RATIO_VALUES = [
  1.0, 1.333, 1.2, 1.25, 1.0, 1.5, 0.9, 1.333, 1.3, 1.0,
  1.25, 1.0, 1.5, 0.85, 1.333, 1.0, 1.4, 0.9, 1.25, 1.0,
  1.333, 1.0,
];

// Distribute images into N columns using shortest-column-first so all
// columns end at roughly the same total height — no ragged bottom edge.
function distributeIntoColumns(
  images: GalleryImage[],
  numCols: number
): { img: GalleryImage; originalIndex: number; aspectRatio: string }[][] {
  const cols: { img: GalleryImage; originalIndex: number; aspectRatio: string }[][] = Array.from(
    { length: numCols }, () => []
  );
  const heights = new Array(numCols).fill(0);

  images.forEach((img, i) => {
    const ratio = ASPECT_RATIO_VALUES[i % ASPECT_RATIO_VALUES.length];
    const ar = ASPECT_RATIOS[i % ASPECT_RATIOS.length];
    // Pick the shortest column
    const col = heights.indexOf(Math.min(...heights));
    cols[col].push({ img, originalIndex: i, aspectRatio: ar });
    heights[col] += ratio + 0.1; // +0.1 accounts for gap
  });

  return cols;
}

// ─── LIGHTBOX MODAL ──────────────────────────────────────────────────────────

function LightboxModal({
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
  }, [currentIndex]);

  // Scroll active thumbnail into view
  useEffect(() => {
    const active = thumbnailsRef.current?.children[currentIndex] as HTMLElement;
    active?.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
  }, [currentIndex]);

  // Drag-to-scroll on thumbnails
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
      {/* Close */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full flex items-center justify-center text-white transition-colors"
        style={{ background: 'rgba(255,255,255,0.12)' }}
        aria-label="Close lightbox"
      >
        <X className="w-5 h-5" />
      </button>

      {/* Main image */}
      <div
        className="relative flex items-center justify-center"
        style={{ maxWidth: '88vw', maxHeight: '76vh' }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Prev */}
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
          alt={currentImage.title || `Gallery image ${currentIndex + 1}`}
          width={1200}
          height={900}
          className="rounded-xl object-contain"
          style={{
            maxWidth: '88vw',
            maxHeight: '76vh',
            opacity: imgOpacity,
            transition: 'opacity 0.15s ease',
          }}
          unoptimized
        />

        {/* Next */}
        <button
          onClick={(e) => { e.stopPropagation(); nextImage(); }}
          className="absolute -right-14 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full flex items-center justify-center text-white transition-colors z-10"
          style={{ background: 'rgba(255,255,255,0.12)' }}
          aria-label="Next image"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>

      {/* Counter */}
      <p
        className="mt-3 text-sm font-medium"
        style={{ color: 'rgba(255,255,255,0.5)' }}
        onClick={(e) => e.stopPropagation()}
      >
        {currentIndex + 1} / {images.length}
      </p>

      {/* Thumbnail strip */}
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
            key={img.id || idx}
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
            aria-label={img.title || `Thumbnail ${idx + 1}`}
          >
            <Image
              src={img.src}
              alt={img.title || `Thumbnail ${idx + 1}`}
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
    <div
      className="group relative overflow-hidden cursor-pointer"
      style={{
        borderRadius: 12,
        aspectRatio,
        breakInside: 'avoid',
        marginBottom: 10,
      }}
      onClick={onClick}
    >
      {/* Hover overlay */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-400 z-10 pointer-events-none"
        style={{
          background: 'linear-gradient(135deg, rgba(0,147,203,0.15) 0%, rgba(0,166,93,0.08) 100%)',
          borderRadius: 12,
        }}
      />

      {/* Inset border glow */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-400 z-10 pointer-events-none"
        style={{
          boxShadow: 'inset 0 0 0 2px rgba(0,147,203,0.35)',
          borderRadius: 12,
        }}
      />

      {/* Image */}
      <Image
        src={img.src}
        alt={img.title || `Koru image ${index + 1}`}
        fill
        className="object-cover transition-transform duration-500 group-hover:scale-105"
        sizes="(max-width: 640px) 45vw, (max-width: 1024px) 30vw, 22vw"
        unoptimized
      />

      {/* Number badge */}
      <div
        className="absolute top-2 left-2 z-20 text-xs font-bold px-2 py-0.5 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{ background: 'rgba(6,7,6,0.65)', color: '#fff' }}
      >
        {index + 1}
      </div>
    </div>
  );
}

// ─── BALANCED MASONRY GRID ───────────────────────────────────────────────────

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
    <div style={{ display: 'flex', gap: 10, alignItems: 'flex-start' }}>
      {columns.map((col, colIdx) => (
        <div key={colIdx} style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 10 }}>
          {col.map(({ img, originalIndex, aspectRatio }) => (
            <MosaicTile
              key={img.id || originalIndex}
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

// ─── MAIN COMPONENT ───────────────────────────────────────────────────────────

export default function CollageGalleryMosaic() {
  const [showAll, setShowAll] = useState(false);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const source = showAll ? koruImages : koruImages.slice(0, INITIAL_COUNT);
  const hasMore = koruImages.length > INITIAL_COUNT;

  const handleClick = (sourceIndex: number) => {
    const fullIndex = koruImages.findIndex(img => img.src === source[sourceIndex].src);
    setSelectedIndex(fullIndex !== -1 ? fullIndex : sourceIndex);
    setLightboxOpen(true);
  };

  return (
    <>
      <div
        className="container mx-auto px-4 py-8"
        style={{ background: 'linear-gradient(135deg, #f0f9ff 0%, #f0fdf4 50%, #f8faf8 100%)' }}
      >
        {/* ── 4-col: xl and above ── */}
        <div className="hidden xl:block">
          <MasonryGrid images={source} numCols={4} onImageClick={handleClick} />
        </div>

        {/* ── 3-col: lg to xl ── */}
        <div className="hidden lg:block xl:hidden">
          <MasonryGrid images={source} numCols={3} onImageClick={handleClick} />
        </div>

        {/* ── 2-col: sm to lg ── */}
        <div className="hidden sm:block lg:hidden">
          <MasonryGrid images={source} numCols={2} onImageClick={handleClick} />
        </div>

        {/* ── 1-col: mobile ── */}
        <div className="block sm:hidden">
          <MasonryGrid images={source} numCols={1} onImageClick={handleClick} />
        </div>


        {/* ── See more / See less ── */}
        {hasMore && (
          <div className="mt-10 text-center">
            {!showAll ? (
              <button
                onClick={() => setShowAll(true)}
                className="inline-flex items-center gap-2 px-10 py-3.5 text-white font-semibold rounded-full transition-all duration-300 active:scale-95"
                style={{
                  backgroundColor: '#0093cb',
                  boxShadow: '0 4px 14px rgba(0,147,203,0.3)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#007ba8';
                  e.currentTarget.style.transform = 'translateY(-1px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = '#0093cb';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                See All 
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            ) : (
              <button
                onClick={() => setShowAll(false)}
                className="inline-flex items-center gap-2 px-10 py-3.5 font-semibold rounded-full transition-all duration-300 active:scale-95"
                style={{
                  backgroundColor: '#f0fdf4',
                  color: '#00a65d',
                  border: '2px solid #00a65d',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#00a65d';
                  e.currentTarget.style.color = '#ffffff';
                  e.currentTarget.style.transform = 'translateY(-1px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = '#f0fdf4';
                  e.currentTarget.style.color = '#00a65d';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                Show Less
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                </svg>
              </button>
            )}
          </div>
        )}

        {/* Brand dots */}
        <div className="mt-12 flex justify-center gap-2">
          {(['#0093cb', '#00a65d', '#060706'] as const).map((color, i) => (
            <div key={i} className="w-3 h-3 rounded-full" style={{ backgroundColor: color, opacity: 0.4 }} />
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxOpen && (
          <LightboxModal
            images={koruImages}
            initialIndex={selectedIndex}
            onClose={() => setLightboxOpen(false)}
          />
        )}
      </AnimatePresence>
    </>
  );
}