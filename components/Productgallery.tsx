// CollageGalleryManual.tsx
'use client';

import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, Grid3X3 } from 'lucide-react';

interface GalleryImage {
  src: string;
  title?: string;
  id?: string | number;
}

const koruImages: GalleryImage[] = [
  { src: "https://pub-735dbd7583d74ad5949115d6fdf77023.r2.dev/Koru/34.png", title: "Koru 34", id: 34 },
  { src: "https://pub-735dbd7583d74ad5949115d6fdf77023.r2.dev/Koru/1.png", title: "Koru 1", id: 1 },
  { src: "https://pub-735dbd7583d74ad5949115d6fdf77023.r2.dev/Koru/2.png", title: "Koru 2", id: 2 },
  { src: "https://pub-735dbd7583d74ad5949115d6fdf77023.r2.dev/Koru/3.png", title: "Koru 3", id: 3 },
  { src: "https://pub-735dbd7583d74ad5949115d6fdf77023.r2.dev/Koru/35.png", title: "Koru 35", id: 35 },
  { src: "https://pub-735dbd7583d74ad5949115d6fdf77023.r2.dev/Koru/4.png", title: "Koru 4", id: 4 },
  { src: "https://pub-735dbd7583d74ad5949115d6fdf77023.r2.dev/Koru/5.png", title: "Koru 5", id: 5 },
  { src: "https://pub-735dbd7583d74ad5949115d6fdf77023.r2.dev/Koru/6.png", title: "Koru 6", id: 6 },
  { src: "https://pub-735dbd7583d74ad5949115d6fdf77023.r2.dev/Koru/36.png", title: "Koru 36", id: 36 },
  { src: "https://pub-735dbd7583d74ad5949115d6fdf77023.r2.dev/Koru/37.png", title: "Koru 37", id: 37 },
  { src: "https://pub-735dbd7583d74ad5949115d6fdf77023.r2.dev/Koru/7.png", title: "Koru 7", id: 7 },
  { src: "https://pub-735dbd7583d74ad5949115d6fdf77023.r2.dev/Koru/8.png", title: "Koru 8", id: 8 },
  { src: "https://pub-735dbd7583d74ad5949115d6fdf77023.r2.dev/Koru/9.png", title: "Koru 9", id: 9 },
  { src: "https://pub-735dbd7583d74ad5949115d6fdf77023.r2.dev/Koru/10.png", title: "Koru 10", id: 10 },
  { src: "https://pub-735dbd7583d74ad5949115d6fdf77023.r2.dev/Koru/11.png", title: "Koru 11", id: 11 },
  { src: "https://pub-735dbd7583d74ad5949115d6fdf77023.r2.dev/Koru/12.png", title: "Koru 12", id: 12 },
  { src: "https://pub-735dbd7583d74ad5949115d6fdf77023.r2.dev/Koru/39.png", title: "Koru 39", id: 39 },
  { src: "https://pub-735dbd7583d74ad5949115d6fdf77023.r2.dev/Koru/13.png", title: "Koru 13", id: 13 },
  { src: "https://pub-735dbd7583d74ad5949115d6fdf77023.r2.dev/Koru/14.png", title: "Koru 14", id: 14 },
  { src: "https://pub-735dbd7583d74ad5949115d6fdf77023.r2.dev/Koru/15.png", title: "Koru 15", id: 15 },
  { src: "https://pub-735dbd7583d74ad5949115d6fdf77023.r2.dev/Koru/40.png", title: "Koru 40", id: 40 },
  { src: "https://pub-735dbd7583d74ad5949115d6fdf77023.r2.dev/Koru/41.png", title: "Koru 41", id: 41 },
  { src: "https://pub-735dbd7583d74ad5949115d6fdf77023.r2.dev/Koru/16.png", title: "Koru 16", id: 16 },
  { src: "https://pub-735dbd7583d74ad5949115d6fdf77023.r2.dev/Koru/17.png", title: "Koru 17", id: 17 },
  { src: "https://pub-735dbd7583d74ad5949115d6fdf77023.r2.dev/Koru/18.png", title: "Koru 18", id: 18 },
  { src: "https://pub-735dbd7583d74ad5949115d6fdf77023.r2.dev/Koru/19.png", title: "Koru 19", id: 19 },
  { src: "https://pub-735dbd7583d74ad5949115d6fdf77023.r2.dev/Koru/20.png", title: "Koru 20", id: 20 },
  { src: "https://pub-735dbd7583d74ad5949115d6fdf77023.r2.dev/Koru/21.png", title: "Koru 21", id: 21 },
  { src: "https://pub-735dbd7583d74ad5949115d6fdf77023.r2.dev/Koru/22.png", title: "Koru 22", id: 22 },
  { src: "https://pub-735dbd7583d74ad5949115d6fdf77023.r2.dev/Koru/23.png", title: "Koru 23", id: 23 },
  { src: "https://pub-735dbd7583d74ad5949115d6fdf77023.r2.dev/Koru/24.png", title: "Koru 24", id: 24 },
  { src: "https://pub-735dbd7583d74ad5949115d6fdf77023.r2.dev/Koru/25.png", title: "Koru 25", id: 25 },
  { src: "https://pub-735dbd7583d74ad5949115d6fdf77023.r2.dev/Koru/26.png", title: "Koru 26", id: 26 },
  { src: "https://pub-735dbd7583d74ad5949115d6fdf77023.r2.dev/Koru/27.png", title: "Koru 27", id: 27 },
  { src: "https://pub-735dbd7583d74ad5949115d6fdf77023.r2.dev/Koru/28.png", title: "Koru 28", id: 28 },
  { src: "https://pub-735dbd7583d74ad5949115d6fdf77023.r2.dev/Koru/29.png", title: "Koru 29", id: 29 },
  { src: "https://pub-735dbd7583d74ad5949115d6fdf77023.r2.dev/Koru/31.png", title: "Koru 31", id: 31 },
  { src: "https://pub-735dbd7583d74ad5949115d6fdf77023.r2.dev/Koru/33.png", title: "Koru 33", id: 33 },
];

type GridItem = {
  src: string;
  title?: string;
  id?: string | number;
  colStart: number;
  colSpan: number;
  rowSpan: number;
};

// ─── GALLERY LIGHTBOX MODAL (EXACTLY LIKE DIGITAL GIFT GALLERY) ─────────────────────────────────────────────────
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
  const [showThumbnails, setShowThumbnails] = useState(true);
  const currentImage = images[currentIndex];

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === 'ArrowLeft') prevImage();
    if (e.key === 'ArrowRight') nextImage();
    if (e.key === 'Escape') onClose();
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);

  // Drag to slide thumbnails
  const thumbnailsRef = React.useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

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
    const walk = (x - startX) * 1.5;
    thumbnailsRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  // Touch events for mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    if (!thumbnailsRef.current) return;
    setIsDragging(true);
    setStartX(e.touches[0].pageX - thumbnailsRef.current.offsetLeft);
    setScrollLeft(thumbnailsRef.current.scrollLeft);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging || !thumbnailsRef.current) return;
    e.preventDefault();
    const x = e.touches[0].pageX - thumbnailsRef.current.offsetLeft;
    const walk = (x - startX) * 1.5;
    thumbnailsRef.current.scrollLeft = scrollLeft - walk;
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 bg-black/80 backdrop-blur-lg flex items-center justify-center"
      onClick={onClose}
    >
      {/* Modal Container with max dimensions */}
      <div 
        className="relative max-w-[90vw] max-h-[85vh] w-full h-full bg-transparent flex items-center justify-center"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/20 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

     

        {/* Main Image Container */}
        <div className="relative w-full h-full flex items-center justify-center p-16 md:p-20">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.3 }}
            className="relative w-full h-full flex items-center justify-center"
          >
            <div className="relative w-full h-full flex items-center rounded-lg justify-center">
              <Image
                src={currentImage.src}
                alt={currentImage.title || `Gallery image ${currentIndex + 1}`}
                width={1200}
                height={800}
                className="max-w-full max-h-[calc(85vh-120px)] object-contain rounded-lg"
                unoptimized
              />
            </div>
          </motion.div>
        </div>

        {/* Navigation Buttons */}
        {images.length > 1 && (
          <>
            <button
              onClick={(e) => {
                e.stopPropagation();
                prevImage();
              }}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/20 transition-colors hover:scale-110"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                nextImage();
              }}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/20 transition-colors hover:scale-110"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </>
        )}

        {/* Thumbnails Strip with Drag to Slide */}
        <AnimatePresence>
          {showThumbnails && (
            <motion.div
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 100, opacity: 0 }}
              className="absolute -bottom-6 xl:-bottom-12 2xl:-bottom-14 left-0 right-0 rounded-b-lg"
            >
              <div 
                ref={thumbnailsRef}
                className="max-w-full overflow-x-auto px-4 py-3 scrollbar-hide"
                style={{
                  cursor: isDragging ? 'grabbing' : 'grab',
                  scrollBehavior: 'auto',
                  userSelect: 'none',
                }}
                onMouseDown={handleMouseDown}
                onMouseMove={handleMouseMove}
                onMouseUp={handleMouseUp}
                onMouseLeave={handleMouseLeave}
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleMouseUp}
              >
                <div className="flex gap-2 justify-start min-w-max" style={{ maxWidth: '1200px', margin: '0 auto' }}>
                  {images.map((img, idx) => (
                    <button
                      key={img.id || idx}
                      onClick={(e) => {
                        e.stopPropagation();
                        setCurrentIndex(idx);
                      }}
                      className={`relative flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden transition-all duration-200 ${
                        currentIndex === idx
                          ? 'ring-2 ring-[#0093cb] ring-offset-2 ring-offset-black scale-105'
                          : 'opacity-90 hover:opacity-100'
                      }`}
                      style={{ cursor: 'pointer' }}
                    >
                      <Image
                        src={img.src}
                        alt={img.title || `Thumbnail ${idx + 1}`}
                        fill
                        className="object-cover"
                        unoptimized
                      />
                      {currentIndex === idx && (
                        <div className="absolute inset-0 bg-[#0093cb]/20" />
                      )}
                    </button>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}

// 4-column full block layout (same as original)
function buildFullBlock4Col(srcs: string[]): GridItem[] {
  const s = (i: number) => srcs[i];

  return [
    { src: s(0), colStart: 1, colSpan: 1, rowSpan: 2 },
    { src: s(1), colStart: 2, colSpan: 1, rowSpan: 1 },
    { src: s(2), colStart: 3, colSpan: 1, rowSpan: 1 },
    { src: s(3), colStart: 4, colSpan: 1, rowSpan: 1 },
    { src: s(4), colStart: 2, colSpan: 1, rowSpan: 2 },
    { src: s(5), colStart: 3, colSpan: 1, rowSpan: 1 },
    { src: s(6), colStart: 4, colSpan: 1, rowSpan: 1 },
    { src: s(7), colStart: 1, colSpan: 1, rowSpan: 1 },
    { src: s(8), colStart: 3, colSpan: 1, rowSpan: 2 },
    { src: s(9), colStart: 4, colSpan: 1, rowSpan: 2 },
    { src: s(10), colStart: 1, colSpan: 1, rowSpan: 1 },
    { src: s(11), colStart: 2, colSpan: 1, rowSpan: 1 },
  ];
}

function buildFullBlock3Col(srcs: string[]): GridItem[] {
  const s = (i: number) => srcs[i];

  return [
    { src: s(0), colStart: 1, colSpan: 1, rowSpan: 2 },
    { src: s(1), colStart: 2, colSpan: 1, rowSpan: 1 },
    { src: s(2), colStart: 3, colSpan: 1, rowSpan: 1 },
    { src: s(3), colStart: 2, colSpan: 1, rowSpan: 1 },
    { src: s(4), colStart: 3, colSpan: 1, rowSpan: 1 },
    { src: s(5), colStart: 1, colSpan: 1, rowSpan: 1 },
    { src: s(6), colStart: 2, colSpan: 1, rowSpan: 1 },
    { src: s(7), colStart: 3, colSpan: 1, rowSpan: 1 },
    { src: s(8), colStart: 1, colSpan: 1, rowSpan: 2 },
    { src: s(9), colStart: 2, colSpan: 1, rowSpan: 1 },
    { src: s(10), colStart: 3, colSpan: 1, rowSpan: 1 },
    { src: s(11), colStart: 2, colSpan: 1, rowSpan: 1 },
    { src: s(12), colStart: 3, colSpan: 1, rowSpan: 1 },
    { src: s(13), colStart: 1, colSpan: 1, rowSpan: 1 },
    { src: s(14), colStart: 2, colSpan: 1, rowSpan: 1 },
    { src: s(15), colStart: 3, colSpan: 1, rowSpan: 1 },
    { src: s(16), colStart: 1, colSpan: 1, rowSpan: 2 },
    { src: s(17), colStart: 2, colSpan: 1, rowSpan: 1 },
    { src: s(18), colStart: 3, colSpan: 1, rowSpan: 1 },
    { src: s(19), colStart: 2, colSpan: 1, rowSpan: 1 },
    { src: s(20), colStart: 3, colSpan: 1, rowSpan: 1 },
  ];
}

function buildPartialBlock3Col(srcs: string[]): GridItem[] {
  const items: GridItem[] = [];
  
  for (let i = 0; i < srcs.length; i++) {
    items.push({
      src: srcs[i],
      colStart: (i % 3) + 1,
      colSpan: 1,
      rowSpan: 1,
    });
  }
  
  return items;
}

function buildPartialBlock4Col(srcs: string[]): GridItem[] {
  const items: GridItem[] = [];
  
  for (let i = 0; i < srcs.length; i++) {
    items.push({
      src: srcs[i],
      colStart: (i % 4) + 1,
      colSpan: 1,
      rowSpan: 1,
    });
  }
  
  return items;
}

function buildGridItems(images: GalleryImage[], is3Col: boolean = false): GridItem[] {
  const items: GridItem[] = [];
  const blockSize = is3Col ? 21 : 12;

  for (let i = 0; i < images.length; i += blockSize) {
    const srcs = images.slice(i, i + blockSize).map((img) => img.src);
    
    if (srcs.length === blockSize) {
      items.push(...(is3Col ? buildFullBlock3Col(srcs) : buildFullBlock4Col(srcs)));
    } else if (srcs.length > 0) {
      items.push(...(is3Col ? buildPartialBlock3Col(srcs) : buildPartialBlock4Col(srcs)));
    }
  }

  return items;
}

const INITIAL_COUNT = 12;

// Gallery Item Component (shared for grid layouts)
function GalleryItem({ item, index, onClick }: { item: GridItem; index: number; onClick: () => void }) {
  return (
    <div
      className="relative overflow-hidden group cursor-pointer"
      style={{
        gridColumn: `${item.colStart} / span ${item.colSpan}`,
        gridRow: `span ${item.rowSpan}`,
        borderRadius: '12px',
        boxShadow: '0 1px 3px rgba(0,0,0,0.08)',
        minWidth: '280px',
      }}
      onClick={onClick}
    >
      {/* Brand Accent Overlay */}
      <div 
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 pointer-events-none"
        style={{
          background: `linear-gradient(135deg, rgba(0,147,203,0.15) 0%, rgba(0,166,93,0.1) 100%)`,
          borderRadius: '12px',
        }}
      />
      
      {/* Subtle border glow on hover */}
      <div 
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 pointer-events-none rounded-xl"
        style={{
          boxShadow: `inset 0 0 0 2px rgba(0,147,203,0.3)`,
        }}
      />

      <Image
        src={item.src}
        alt={item.title || `Koru image ${index + 1}`}
        fill
        className="object-cover group-hover:scale-105 transition-transform duration-500"
        sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, (max-width: 1280px) 33vw, 25vw"
        unoptimized
      />

      {/* Image number badge */}
      <div 
        className="absolute top-2 left-2 z-20 text-xs font-bold px-2 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{ 
          backgroundColor: '#060706',
          color: '#ffffff'
        }}
      >
        {index + 1}
      </div>
    </div>
  );
}

export default function CollageGalleryManual() {
  const [showAll, setShowAll] = useState(false);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const source = showAll ? koruImages : koruImages.slice(0, INITIAL_COUNT);
  const gridItems4Col = buildGridItems(source, false);
  const gridItems3Col = buildGridItems(source, true);
  const hasMoreImages = koruImages.length > INITIAL_COUNT;

  const handleImageClick = (index: number) => {
    // Use the full koruImages array when showAll is true, otherwise use source
    const fullImageSet = showAll ? koruImages : source;
    setSelectedImageIndex(index);
    setLightboxOpen(true);
  };

  // Function to get the correct image index for the modal
  const getModalImagesAndIndex = (clickedIndex: number) => {
    if (showAll) {
      // When showing all images, use the full koruImages array
      return { images: koruImages, index: clickedIndex };
    } else {
      // When showing only first 12, but user clicked on an image
      // We need to find the original index in the full array
      const clickedImage = source[clickedIndex];
      const originalIndex = koruImages.findIndex(img => img.src === clickedImage.src);
      return { images: koruImages, index: originalIndex !== -1 ? originalIndex : clickedIndex };
    }
  };

  return (
    <>
      <div 
        className="container mx-auto px-4 py-8"
        style={{
          background: `linear-gradient(135deg, #f0f9ff 0%, #f0fdf4 50%, #f8faf8 100%)`,
        }}
      >
        {/* 4-Column Grid (default, ≥1280px) */}
        <div 
          className="hidden xl:grid gap-4 2xl:gap-6"
          style={{
            gridTemplateColumns: 'repeat(4, minmax(280px, 1fr))',
            gridAutoRows: '230px',
          }}
        >
          {gridItems4Col.map((item, index) => {
            // Find the original image index to pass to lightbox
            const originalIndex = source.findIndex(img => img.src === item.src);
            return (
              <GalleryItem 
                key={`4col-${index}`} 
                item={item} 
                index={originalIndex !== -1 ? originalIndex : index} 
                onClick={() => handleImageClick(originalIndex !== -1 ? originalIndex : index)}
              />
            );
          })}
        </div>

        {/* 3-Column Grid (1024px - 1279px) */}
        <div 
          className="hidden lg:grid xl:hidden gap-4"
          style={{
            gridTemplateColumns: 'repeat(3, minmax(280px, 1fr))',
            gridAutoRows: '230px',
          }}
        >
          {gridItems3Col.map((item, index) => {
            const originalIndex = source.findIndex(img => img.src === item.src);
            return (
              <GalleryItem 
                key={`3col-${index}`} 
                item={item} 
                index={originalIndex !== -1 ? originalIndex : index} 
                onClick={() => handleImageClick(originalIndex !== -1 ? originalIndex : index)}
              />
            );
          })}
        </div>

        {/* 2-Column Grid (640px - 1023px) */}
        <div 
          className="hidden sm:grid lg:hidden gap-3"
          style={{
            gridTemplateColumns: 'repeat(2, minmax(250px, 1fr))',
            gridAutoRows: '200px',
          }}
        >
          {source.map((img, index) => (
            <div
              key={`2col-${img.id || index}`}
              className="relative overflow-hidden group cursor-pointer"
              style={{
                borderRadius: '12px',
                boxShadow: '0 1px 3px rgba(0,0,0,0.08)',
                minWidth: '250px',
              }}
              onClick={() => handleImageClick(index)}
            >
              <div 
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 pointer-events-none"
                style={{
                  background: `linear-gradient(135deg, rgba(0,147,203,0.15) 0%, rgba(0,166,93,0.1) 100%)`,
                  borderRadius: '12px',
                }}
              />
              
              <div 
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 pointer-events-none rounded-xl"
                style={{
                  boxShadow: `inset 0 0 0 2px rgba(0,147,203,0.3)`,
                }}
              />

              <Image
                src={img.src}
                alt={img.title || `Koru image ${index + 1}`}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 640px) 45vw, 300px"
                unoptimized
              />
            </div>
          ))}
        </div>

        {/* 1-Column Grid (mobile, <640px) */}
        <div 
          className="grid sm:hidden gap-3"
          style={{
            gridTemplateColumns: '1fr',
            gridAutoRows: '250px',
          }}
        >
          {source.map((img, index) => (
            <div
              key={`1col-${img.id || index}`}
              className="relative overflow-hidden group cursor-pointer"
              style={{
                borderRadius: '12px',
                boxShadow: '0 1px 3px rgba(0,0,0,0.08)',
              }}
              onClick={() => handleImageClick(index)}
            >
              <div 
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 pointer-events-none"
                style={{
                  background: `linear-gradient(135deg, rgba(0,147,203,0.15) 0%, rgba(0,166,93,0.1) 100%)`,
                  borderRadius: '12px',
                }}
              />
              
              <div 
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 pointer-events-none rounded-xl"
                style={{
                  boxShadow: `inset 0 0 0 2px rgba(0,147,203,0.3)`,
                }}
              />

              <Image
                src={img.src}
                alt={img.title || `Koru image ${index + 1}`}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                sizes="90vw"
                unoptimized
              />
            </div>
          ))}
        </div>

        {/* See More / See Less Button */}
        {hasMoreImages && (
          <div className="mt-10 text-center">
            {!showAll ? (
              <button
                onClick={() => setShowAll(true)}
                className="relative px-10 py-3.5 text-white font-semibold rounded-full transition-all duration-300 hover:shadow-lg active:scale-95"
                style={{
                  backgroundColor: '#0093cb',
                  boxShadow: '0 4px 14px rgba(0,147,203,0.3)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#007ba8';
                  e.currentTarget.style.boxShadow = '0 6px 20px rgba(0,147,203,0.4)';
                  e.currentTarget.style.transform = 'translateY(-1px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = '#0093cb';
                  e.currentTarget.style.boxShadow = '0 4px 14px rgba(0,147,203,0.3)';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                <span className="flex items-center gap-2">
                  See All ({koruImages.length - INITIAL_COUNT}+ more)
                  <svg 
                    className="w-4 h-4" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </span>
              </button>
            ) : (
              <button
                onClick={() => setShowAll(false)}
                className="relative px-10 py-3.5 font-semibold rounded-full transition-all duration-300 hover:shadow-md active:scale-95"
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
                <span className="flex items-center gap-2">
                  Show Less
                  <svg 
                    className="w-4 h-4" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                  </svg>
                </span>
              </button>
            )}
          </div>
        )}

        {/* Brand Footer Accent */}
        <div className="mt-12 flex justify-center gap-2">
          {[...Array(3)].map((_, i) => (
            <div
              key={i}
              className="w-3 h-3 rounded-full"
              style={{
                backgroundColor: i === 0 ? '#0093cb' : i === 1 ? '#00a65d' : '#060706',
                opacity: 0.4,
              }}
            />
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {lightboxOpen && (
          <GalleryLightboxModal
            images={koruImages}
            initialIndex={(() => {
              // Find the correct index in the full koruImages array
              const clickedImage = source[selectedImageIndex];
              return koruImages.findIndex(img => img.src === clickedImage.src);
            })()}
            onClose={() => setLightboxOpen(false)}
          />
        )}
      </AnimatePresence>
    </>
  );
}