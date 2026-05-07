'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { ChevronLeft, ChevronRight, ZoomIn, Images } from 'lucide-react';

/* ══════════════════════════════════════════════════════
   PRODUCT GALLERY COMPONENT
   - Front: Clean Bento Grid (2 rows, 4 cols total)
   - Row 1: 4 cards (each 1 col each)
   - Row 2: 3 cards (1col | 2cols | 1col)
   - "View All" button → opens full modal
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
   MAIN: ProductGallery — Clean Bento Grid (2 rows, 4 cols)
   Row 1: 4 cards (each 1 col)
   Row 2: 3 cards (1col | 2cols | 1col)
══════════════════════════════════════════════════════ */
export default function ProductGallery({ images = [], productName = 'Product' }: ProductGalleryProps) {
  const [modalOpen, setModalOpen] = useState(false);

  // Show max 7 images on front (since grid has 7 spots: 4 + 3)
  const previewImages = images.slice(0, 7);
  const remaining = images.length - 7;

  if (!images.length) return null;

  // Define grid items: row 1 has 4 items (each span 1 col), row 2 has 3 items with custom spans
  // Using grid-template-areas for clean layout
  const gridAreas = `
    "card0 card1 card2 card3"
    "card4 card5 card5 card6"
  `;

  return (
    <div>
      <div style={{ position: 'relative' }}>
        {/* ── Clean Bento Grid (2 rows, 4 columns) ── */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gridTemplateRows: 'auto auto',
            gap: '12px',
            borderRadius: '20px',
            overflow: 'hidden',
          }}
        >
          {/* Card 0 - Row 1, Col 1 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.05, duration: 0.4 }}
            style={{
              position: 'relative',
              aspectRatio: '1 / 1',
              overflow: 'hidden',
              borderRadius: '16px',
              backgroundColor: '#f1f5f9',
            }}
            className="group"
          >
            {previewImages[0] && (
              <>
                <Image
                  src={previewImages[0]}
                  alt={`${productName} 1`}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  unoptimized
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute bottom-3 left-3 bg-black/50 backdrop-blur-sm rounded-full px-2 py-0.5 text-[10px] font-semibold text-white/80">
                  01
                </div>
              </>
            )}
          </motion.div>

          {/* Card 1 - Row 1, Col 2 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.4 }}
            style={{
              position: 'relative',
              aspectRatio: '1 / 1',
              overflow: 'hidden',
              borderRadius: '16px',
              backgroundColor: '#f1f5f9',
            }}
            className="group"
          >
            {previewImages[1] && (
              <>
                <Image
                  src={previewImages[1]}
                  alt={`${productName} 2`}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  unoptimized
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute bottom-3 left-3 bg-black/50 backdrop-blur-sm rounded-full px-2 py-0.5 text-[10px] font-semibold text-white/80">
                  02
                </div>
              </>
            )}
          </motion.div>

          {/* Card 2 - Row 1, Col 3 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.4 }}
            style={{
              position: 'relative',
              aspectRatio: '1 / 1',
              overflow: 'hidden',
              borderRadius: '16px',
              backgroundColor: '#f1f5f9',
            }}
            className="group"
          >
            {previewImages[2] && (
              <>
                <Image
                  src={previewImages[2]}
                  alt={`${productName} 3`}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  unoptimized
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute bottom-3 left-3 bg-black/50 backdrop-blur-sm rounded-full px-2 py-0.5 text-[10px] font-semibold text-white/80">
                  03
                </div>
              </>
            )}
          </motion.div>

          {/* Card 3 - Row 1, Col 4 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.4 }}
            style={{
              position: 'relative',
              aspectRatio: '1 / 1',
              overflow: 'hidden',
              borderRadius: '16px',
              backgroundColor: '#f1f5f9',
            }}
            className="group"
          >
            {previewImages[3] && (
              <>
                <Image
                  src={previewImages[3]}
                  alt={`${productName} 4`}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  unoptimized
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute bottom-3 left-3 bg-black/50 backdrop-blur-sm rounded-full px-2 py-0.5 text-[10px] font-semibold text-white/80">
                  04
                </div>
              </>
            )}
          </motion.div>

          {/* Card 4 - Row 2, Col 1 (1 col) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25, duration: 0.4 }}
            style={{
              position: 'relative',
              aspectRatio: '1 / 1',
              overflow: 'hidden',
              borderRadius: '16px',
              backgroundColor: '#f1f5f9',
            }}
            className="group"
          >
            {previewImages[4] && (
              <>
                <Image
                  src={previewImages[4]}
                  alt={`${productName} 5`}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  unoptimized
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute bottom-3 left-3 bg-black/50 backdrop-blur-sm rounded-full px-2 py-0.5 text-[10px] font-semibold text-white/80">
                  05
                </div>
              </>
            )}
          </motion.div>

          {/* Card 5 - Row 2, Cols 2-3 (spans 2 cols) - Featured wide card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.4 }}
            style={{
              position: 'relative',
              gridColumn: 'span 2',
              aspectRatio: '2 / 1',
              overflow: 'hidden',
              borderRadius: '16px',
              backgroundColor: '#f1f5f9',
            }}
            className="group"
          >
            {previewImages[5] && (
              <>
                <Image
                  src={previewImages[5]}
                  alt={`${productName} 6`}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  unoptimized
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute bottom-3 left-3 bg-black/50 backdrop-blur-sm rounded-full px-2 py-0.5 text-[10px] font-semibold text-white/80">
                  06
                </div>
                {/* Optional: featured badge */}
                <div className="absolute top-3 right-3 bg-amber-500/90 backdrop-blur-sm rounded-full px-2 py-0.5 text-[9px] font-bold text-black uppercase tracking-wide">
                  Featured
                </div>
              </>
            )}
          </motion.div>

          {/* Card 6 - Row 2, Col 4 (1 col) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.4 }}
            style={{
              position: 'relative',
              aspectRatio: '1 / 1',
              overflow: 'hidden',
              borderRadius: '16px',
              backgroundColor: '#f1f5f9',
            }}
            className="group"
          >
            {previewImages[6] ? (
              <>
                <Image
                  src={previewImages[6]}
                  alt={`${productName} 7`}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  unoptimized
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute bottom-3 left-3 bg-black/50 backdrop-blur-sm rounded-full px-2 py-0.5 text-[10px] font-semibold text-white/80">
                  07
                </div>
              </>
            ) : (
              // Fallback if only 6 images exist (show remaining count)
              <div className="absolute inset-0 flex items-center justify-center bg-slate-800">
                <span className="text-white text-2xl font-bold">+{remaining + (images.length - 7)}</span>
              </div>
            )}
            {/* Show remaining overlay on top if this is the last card and there are extras */}
            {previewImages[6] && remaining > 0 && (
              <div
                style={{
                  position: 'absolute', inset: 0,
                  background: 'rgba(0,0,0,0.55)',
                  backdropFilter: 'blur(2px)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  zIndex: 5,
                  borderRadius: '16px',
                }}
              >
                <div className="text-center">
                  <span style={{ color: 'white', fontSize: '28px', fontWeight: 800, lineHeight: 1 }}>
                    +{remaining}
                  </span>
                  <span style={{ color: 'rgba(255,255,255,0.7)', fontSize: '11px', display: 'block', marginTop: 4 }}>
                    more
                  </span>
                </div>
              </div>
            )}
          </motion.div>
        </div>

        {/* ── "View All" Arrow Button ── */}
        <AnimatePresence>
          {!modalOpen && (
            <motion.button
              key="view-all-button"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              onClick={() => setModalOpen(true)}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              style={{
                position: 'absolute',
                bottom: 16,
                right: 16,
                display: 'flex',
                alignItems: 'center',
                gap: 8,
                padding: '8px 18px',
                borderRadius: 40,
                background: 'rgba(15, 23, 42, 0.9)',
                backdropFilter: 'blur(12px)',
                border: '1px solid rgba(255,255,255,0.2)',
                color: 'white',
                fontSize: '12px',
                fontWeight: 600,
                letterSpacing: '0.02em',
                cursor: 'pointer',
                boxShadow: '0 8px 20px rgba(0,0,0,0.3)',
                zIndex: 10,
              }}
            >
              <Images style={{ width: 14, height: 14 }} />
              View All {images.length} Photos
              <span
                style={{
                  width: 24, height: 24, borderRadius: '50%',
                  background: '#F5A623',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  marginLeft: 4,
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
    </div>
  );
}