'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import {  ChevronLeft, ChevronRight, ZoomIn, Images } from 'lucide-react';

/* ══════════════════════════════════════════════════════
   PRODUCT GALLERY COMPONENT
   - Front: 8-image masonry/grid preview
   - One "View All" arrow button → opens full modal
   - Modal: grid view → single image lightbox (2-step)
══════════════════════════════════════════════════════ */

/* ─── Type Definitions ───────────────────────────────────────────────────── */
interface GalleryModalProps {
  images: string[];
  productName: string;
  onClose: () => void;
}

interface ProductGalleryProps {
  images?: string[];
  productName?: string;
}

// ── Icons (inline SVG components to avoid import issues) ──
const X = ({ style }: { style?: React.CSSProperties }) => (
  <svg style={style} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5}>
    <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
  </svg>
);

/* ── Gallery Modal ── */
function GalleryModal({ images, productName, onClose }: GalleryModalProps) {
  const [view, setView] = useState<'grid' | 'single'>('grid');
  const [activeIndex, setActiveIndex] = useState(0);

  const openSingle = (idx: number) => {
    setActiveIndex(idx);
    setView('single');
  };

  const prev = useCallback(() =>
    setActiveIndex(i => (i - 1 + images.length) % images.length), [images.length]);
  const next = useCallback(() =>
    setActiveIndex(i => (i + 1) % images.length), [images.length]);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        if (view === 'single') setView('grid');
        else onClose();
      }
      if (view === 'single') {
        if (e.key === 'ArrowLeft') prev();
        if (e.key === 'ArrowRight') next();
      }
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [view, prev, next, onClose]);

  useEffect(() => {
    const orig = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = orig; };
  }, []);

  return (
    <AnimatePresence>
      {/* Backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={view === 'grid' ? onClose : undefined}
        className="fixed inset-0 z-[99999] flex items-center justify-center"
        style={{ background: 'rgba(5, 8, 15, 0.92)', backdropFilter: 'blur(12px)' }}
      >
        {/* Modal Box */}
        <motion.div
          initial={{ scale: 0.94, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.94, opacity: 0, y: 20 }}
          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          onClick={e => e.stopPropagation()}
          className="relative flex flex-col"
          style={{
            width: '94vw',
            maxWidth: '1200px',
            height: '80vh',
            background: 'linear-gradient(145deg, #0f1419 0%, #111827 100%)',
            borderRadius: '20px',
            border: '1px solid rgba(255,255,255,0.08)',
            boxShadow: '0 40px 80px -20px rgba(0,0,0,0.8), inset 0 1px 0 rgba(255,255,255,0.05)',
            overflow: 'hidden',
          }}
        >
          {/* ── Header ── */}
          <div
            className="flex items-center justify-between flex-shrink-0"
            style={{
              padding: '16px 24px',
              borderBottom: '1px solid rgba(255,255,255,0.06)',
              background: 'rgba(0,0,0,0.3)',
            }}
          >
            <div className="flex items-center gap-4">
              {view === 'single' && (
                <button
                  onClick={() => setView('grid')}
                  className="flex items-center gap-2 transition-colors"
                  style={{ color: 'rgba(255,255,255,0.4)', fontSize: '12px', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase' }}
                  onMouseEnter={e => e.currentTarget.style.color = '#F5A623'}
                  onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.4)'}
                >
                  <ChevronLeft style={{ width: 16, height: 16 }} />
                  All Photos
                </button>
              )}
              <div>
                <p style={{ color: 'rgba(255,255,255,0.3)', fontSize: '10px', fontWeight: 800, letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: 2 }}>
                  {view === 'grid' ? `${images.length} Photos` : `${activeIndex + 1} / ${images.length}`}
                </p>
                <h3 style={{ color: 'white', fontSize: '16px', fontWeight: 600, lineHeight: 1.2 }}>
                  {productName}
                </h3>
              </div>
            </div>

            {/* Step indicator */}
            <div className="hidden sm:flex items-center gap-2">
              {['Grid View', 'Detail View'].map((label, i) => {
                const isActive = (i === 0 && view === 'grid') || (i === 1 && view === 'single');
                return (
                  <React.Fragment key={label}>
                    {i > 0 && <ChevronRight style={{ width: 12, height: 12, color: 'rgba(255,255,255,0.15)' }} />}
                    <span
                      style={{
                        padding: '4px 12px',
                        borderRadius: 99,
                        fontSize: '10px',
                        fontWeight: 800,
                        letterSpacing: '0.08em',
                        textTransform: 'uppercase',
                        background: isActive ? '#F5A623' : 'rgba(255,255,255,0.05)',
                        color: isActive ? '#7a3e00' : 'rgba(255,255,255,0.3)',
                        transition: 'all 0.2s',
                      }}
                    >
                      {i + 1}. {label}
                    </span>
                  </React.Fragment>
                );
              })}
            </div>

            <button
              onClick={onClose}
              style={{
                width: 40, height: 40, borderRadius: '50%',
                background: 'rgba(255,255,255,0.05)',
                border: '1px solid rgba(255,255,255,0.08)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                cursor: 'pointer', transition: 'all 0.2s',
                color: 'white',
              }}
              onMouseEnter={e => { e.currentTarget.style.background = 'rgba(239,68,68,0.2)'; e.currentTarget.style.color = '#ef4444'; }}
              onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.05)'; e.currentTarget.style.color = 'white'; }}
            >
              <X style={{ width: 18, height: 18 }} />
            </button>
          </div>

          {/* ── Body ── */}
          <AnimatePresence mode="wait">
            {view === 'grid' ? (
              /* GRID VIEW */
              <motion.div
                key="grid"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                style={{ flex: 1, overflowY: 'auto', padding: '24px', scrollbarWidth: 'none' }}
              >
                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
                    gap: '12px',
                    maxWidth: '1100px',
                    margin: '0 auto',
                  }}
                >
                  {images.map((img: string, idx: number) => (
                    <motion.button
                      key={idx}
                      onClick={() => openSingle(idx)}
                      whileHover={{ y: -4, scale: 1.02 }}
                      transition={{ type: 'spring', stiffness: 400, damping: 25 }}
                      style={{
                        position: 'relative',
                        aspectRatio: '1 / 1',
                        borderRadius: '14px',
                        overflow: 'hidden',
                        border: '1px solid rgba(255,255,255,0.06)',
                        background: 'rgba(255,255,255,0.03)',
                        cursor: 'pointer',
                        padding: 0,
                      }}
                      className="group"
                    >
                      <Image src={img} alt={`${productName} ${idx + 1}`} fill className="object-cover" unoptimized />
                      <div
                        style={{
                          position: 'absolute', inset: 0,
                          background: 'rgba(0,0,0,0)',
                          display: 'flex', alignItems: 'center', justifyContent: 'center',
                          transition: 'background 0.3s',
                        }}
                        className="group-hover:!bg-black/50"
                      >
                        <div
                          style={{
                            width: 40, height: 40, borderRadius: '50%',
                            background: 'rgba(255,255,255,0.95)',
                            display: 'flex', alignItems: 'center', justifyContent: 'center',
                            opacity: 0, transition: 'opacity 0.3s',
                            boxShadow: '0 4px 12px rgba(0,0,0,0.4)',
                          }}
                          className="group-hover:!opacity-100"
                        >
                          <ZoomIn style={{ width: 18, height: 18, color: '#0f172a' }} />
                        </div>
                      </div>
                      {/* Index badge */}
                      <div
                        style={{
                          position: 'absolute', top: 8, left: 8,
                          background: 'rgba(0,0,0,0.6)',
                          backdropFilter: 'blur(4px)',
                          borderRadius: 6,
                          padding: '2px 7px',
                          fontSize: '10px',
                          fontWeight: 700,
                          color: 'rgba(255,255,255,0.7)',
                          letterSpacing: '0.05em',
                        }}
                      >
                        {String(idx + 1).padStart(2, '0')}
                      </div>
                    </motion.button>
                  ))}
                </div>
              </motion.div>
            ) : (
              /* SINGLE VIEW */
              <motion.div
                key="single"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                style={{ flex: 1, display: 'flex', flexDirection: 'column', minHeight: 0 }}
              >
                {/* Main image */}
                <div style={{ flex: 1, position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '16px 64px' }}>
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeIndex}
                      initial={{ opacity: 0, x: 30 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -30 }}
                      transition={{ duration: 0.25 }}
                      style={{ position: 'relative', width: '100%', height: '100%' }}
                    >
                      <Image src={images[activeIndex]} alt={productName} fill className="object-contain" unoptimized priority />
                    </motion.div>
                  </AnimatePresence>

                  {/* Nav buttons */}
                  {[
                    { dir: -1, icon: ChevronLeft, side: { left: 16 } },
                    { dir: 1, icon: ChevronRight, side: { right: 16 } },
                  ].map(({ dir, icon: Icon, side }) => (
                    <button
                      key={dir}
                      onClick={() => dir === -1 ? prev() : next()}
                      style={{
                        position: 'absolute', top: '50%', transform: 'translateY(-50%)',
                        ...side,
                        width: 44, height: 44, borderRadius: '50%',
                        background: 'rgba(255,255,255,0.08)',
                        border: '1px solid rgba(255,255,255,0.12)',
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        cursor: 'pointer', transition: 'all 0.2s', color: 'white',
                        zIndex: 10,
                      }}
                      onMouseEnter={e => { e.currentTarget.style.background = '#F5A623'; e.currentTarget.style.color = '#7a3e00'; }}
                      onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.08)'; e.currentTarget.style.color = 'white'; }}
                    >
                      <Icon style={{ width: 20, height: 20 }} />
                    </button>
                  ))}
                </div>

                {/* Thumbnail strip */}
                <div
                  style={{
                    padding: '12px 24px 20px',
                    borderTop: '1px solid rgba(255,255,255,0.06)',
                    background: 'rgba(0,0,0,0.4)',
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'center', gap: 8, overflowX: 'auto', scrollbarWidth: 'none' }}>
                    {images.map((img: string, i: number) => (
                      <button
                        key={i}
                        onClick={() => setActiveIndex(i)}
                        style={{
                          position: 'relative', flexShrink: 0,
                          width: 56, height: 56,
                          borderRadius: 10,
                          overflow: 'hidden',
                          border: i === activeIndex ? '2px solid #F5A623' : '2px solid transparent',
                          opacity: i === activeIndex ? 1 : 0.45,
                          transform: i === activeIndex ? 'scale(1.1)' : 'scale(1)',
                          transition: 'all 0.2s',
                          cursor: 'pointer',
                          padding: 0,
                        }}
                      >
                        <Image src={img} alt="thumb" fill className="object-cover" unoptimized />
                      </button>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

/* ══════════════════════════════════════════════════════
   MAIN: ProductGallery — 8-image front preview
══════════════════════════════════════════════════════ */
export default function ProductGallery({ images = [], productName = 'Product' }: ProductGalleryProps) {
  const [modalOpen, setModalOpen] = useState(false);

  // Show max 8 images on front
  const previewImages = images.slice(0, 8);
  const remaining = images.length - 8;

  if (!images.length) return null;

  return (
    <>
      <div style={{ position: 'relative' }}>
        {/* ── 8-Image Preview Grid ── */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gridTemplateRows: 'repeat(2, 1fr)',
            gap: '8px',
            borderRadius: '16px',
            overflow: 'hidden',
          }}
        >
          {previewImages.map((img: string, idx: number) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: idx * 0.04, duration: 0.3 }}
              style={{
                position: 'relative',
                aspectRatio: '1 / 1',
                overflow: 'hidden',
                background: '#f1f5f9',
              }}
              className="group"
            >
              <Image
                src={img}
                alt={`${productName} ${idx + 1}`}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                unoptimized
              />

              {idx === 7 && remaining > 0 && (
                <div
                  style={{
                    position: 'absolute', inset: 0,
                    background: 'rgba(0,0,0,0.55)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                  }}
                >
                  <span style={{ color: 'white', fontSize: '18px', fontWeight: 800 }}>
                    +{remaining}
                  </span>
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* ── "View All" Arrow Button — Hidden when modalOpen is true ── */}
        <AnimatePresence>
          {!modalOpen && (
            <motion.button
              key="view-all-button"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              onClick={() => setModalOpen(true)}
              whileHover={{ scale: 1.06 }}
              whileTap={{ scale: 0.96 }}
              style={{
                position: 'absolute',
                bottom: 12,
                right: 12,
                display: 'flex',
                alignItems: 'center',
                gap: 8,
                padding: '8px 16px',
                borderRadius: 99,
                background: 'rgba(15, 23, 42, 0.85)',
                backdropFilter: 'blur(8px)',
                border: '1px solid rgba(255,255,255,0.15)',
                color: 'white',
                fontSize: '12px',
                fontWeight: 700,
                letterSpacing: '0.06em',
                textTransform: 'uppercase',
                cursor: 'pointer',
                boxShadow: '0 4px 20px rgba(0,0,0,0.4)',
                zIndex: 1,
              }}
            >
              <Images style={{ width: 14, height: 14 }} />
              View All {images.length} Photos
              <span
                style={{
                  width: 22, height: 22, borderRadius: '50%',
                  background: '#F5A623',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  marginLeft: 2,
                }}
              >
                <ChevronRight style={{ width: 12, height: 12, color: '#7a3e00' }} />
              </span>
            </motion.button>
          )}
        </AnimatePresence>
      </div>

      {/* ── Modal ── */}
      {modalOpen && (
        <GalleryModal
          images={images}
          productName={productName}
          onClose={() => setModalOpen(false)}
        />
      )}
    </>
  );
}

/* ══════════════════════════════════════════════════════
   USAGE EXAMPLE (for reference)
══════════════════════════════════════════════════════ 

import ProductGallery from '@/components/ProductGallery';

const images = [
  '/products/img1.png',
  '/products/img2.png',
  // ... up to N images
];

<ProductGallery images={images} productName="Crystal Paperweight" />

*/