import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

// ─── Type for icon props ───
interface IconProps {
  style?: React.CSSProperties;
}

// ── Icons (inline SVG components to avoid import issues) ──
const X: React.FC<IconProps> = ({ style }) => (
  <svg style={style} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round">
    <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
  </svg>
);

const ChevLeft: React.FC<IconProps> = ({ style }) => (
  <svg style={style} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round">
    <polyline points="15 18 9 12 15 6"/>
  </svg>
);

const ChevRight: React.FC<IconProps> = ({ style }) => (
  <svg style={style} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round">
    <polyline points="9 18 15 12 9 6"/>
  </svg>
);

const ZoomInIcon: React.FC<IconProps> = ({ style }) => (
  <svg style={style} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round">
    <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
    <line x1="11" y1="8" x2="11" y2="14"/><line x1="8" y1="11" x2="14" y2="11"/>
  </svg>
);

const ImagesIcon: React.FC<IconProps> = ({ style }) => (
  <svg style={style} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="8" width="18" height="14" rx="2"/><circle cx="8.5" cy="14.5" r="1.5"/>
    <polyline points="21 15 16 10 2 22"/><line x1="6" y1="2" x2="6" y2="5"/>
    <line x1="10" y1="2" x2="10" y2="4"/><line x1="14" y1="2" x2="14" y2="5"/>
  </svg>
);

// ── Demo images from Unsplash ──
const DEMO_IMAGES = [
  "https://images.unsplash.com/photo-1584622651921-47e0e8043693?w=600&q=80",
  "https://images.unsplash.com/photo-1544816155-12df9643f363?w=600&q=80",
  "https://images.unsplash.com/photo-1581338834647-b0a407628db1?w=600&q=80",
  "https://images.unsplash.com/photo-1627123424574-724758594e93?w=600&q=80",
  "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=600&q=80",
  "https://images.unsplash.com/photo-1602143407151-7111542b16c9?w=600&q=80",
  "https://images.unsplash.com/photo-1608043152269-423db5724e21?w=600&q=80",
  "https://images.unsplash.com/photo-1619985632461-f33748ef7661?w=600&q=80",
  "https://images.unsplash.com/photo-1615526675159-e248c3021d3f?w=600&q=80",
  "https://images.unsplash.com/photo-1586449480537-3ac15f1d6162?w=600&q=80",
  "https://images.unsplash.com/photo-1574258495973-f010dfbb5371?w=600&q=80",
  "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=600&q=80",
];

// Add this interface before the GalleryModal component
interface GalleryModalProps {
  images: string[];
  productName: string;
  onClose: () => void;
}

function GalleryModal({ images, productName, onClose }: GalleryModalProps) {
  // ... rest of the code remains the same
  const [view, setView] = useState("grid");
  const [activeIndex, setActiveIndex] = useState(0);

  const prev = useCallback(() =>
    setActiveIndex(i => (i - 1 + images.length) % images.length), [images.length]);
  const next = useCallback(() =>
    setActiveIndex(i => (i + 1) % images.length), [images.length]);

  useEffect(() => {
    const handler = (e) => {
      if (e.key === "Escape") view === "single" ? setView("grid") : onClose();
      if (view === "single") {
        if (e.key === "ArrowLeft") prev();
        if (e.key === "ArrowRight") next();
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [view, prev, next, onClose]);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = ""; };
  }, []);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={view === "grid" ? onClose : undefined}
        style={{
          position: "fixed", inset: 0, zIndex: 99999,
          background: "rgba(4, 7, 14, 0.94)",
          backdropFilter: "blur(16px)",
          display: "flex", alignItems: "center", justifyContent: "center",
        }}
      >
        <motion.div
          initial={{ scale: 0.93, opacity: 0, y: 24 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.93, opacity: 0, y: 24 }}
          transition={{ type: "spring", stiffness: 320, damping: 32 }}
          onClick={e => e.stopPropagation()}
          style={{
            width: "min(96vw, 1100px)",
            height: "90vh",
            display: "flex",
            flexDirection: "column",
            background: "linear-gradient(160deg, #0d1117 0%, #111827 100%)",
            borderRadius: "20px",
            border: "1px solid rgba(255,255,255,0.07)",
            boxShadow: "0 48px 96px -24px rgba(0,0,0,0.9), inset 0 1px 0 rgba(255,255,255,0.04)",
            overflow: "hidden",
          }}
        >
          {/* Header */}
          <div style={{
            display: "flex", alignItems: "center", justifyContent: "space-between",
            padding: "14px 20px",
            borderBottom: "1px solid rgba(255,255,255,0.06)",
            background: "rgba(0,0,0,0.25)",
            flexShrink: 0,
          }}>
            <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
              {view === "single" && (
                <button
                  onClick={() => setView("grid")}
                  style={{
                    display: "flex", alignItems: "center", gap: 6,
                    color: "rgba(255,255,255,0.35)", background: "none", border: "none",
                    fontSize: 11, fontWeight: 800, letterSpacing: "0.1em",
                    textTransform: "uppercase", cursor: "pointer", padding: 0,
                    transition: "color 0.2s",
                  }}
                  onMouseEnter={e => e.currentTarget.style.color = "#F5A623"}
                  onMouseLeave={e => e.currentTarget.style.color = "rgba(255,255,255,0.35)"}
                >
                  <ChevLeft style={{ width: 14, height: 14 }} />
                  All Photos
                </button>
              )}
              <div>
                <p style={{ color: "rgba(255,255,255,0.25)", fontSize: 10, fontWeight: 800, letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: 2 }}>
                  {view === "grid" ? `${images.length} Photos` : `${activeIndex + 1} / ${images.length}`}
                </p>
                <h3 style={{ color: "white", fontSize: 15, fontWeight: 600, lineHeight: 1.2, margin: 0 }}>
                  {productName}
                </h3>
              </div>
            </div>

            {/* Step pills */}
            <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
              {["Grid View", "Detail View"].map((label, i) => {
                const active = (i === 0 && view === "grid") || (i === 1 && view === "single");
                return (
                  <span key={i} style={{
                    padding: "4px 12px", borderRadius: 99,
                    fontSize: 10, fontWeight: 800, letterSpacing: "0.08em", textTransform: "uppercase",
                    background: active ? "#F5A623" : "rgba(255,255,255,0.05)",
                    color: active ? "#7a3e00" : "rgba(255,255,255,0.25)",
                    transition: "all 0.25s",
                  }}>
                    {i + 1}. {label}
                  </span>
                );
              })}
            </div>

            <button
              onClick={onClose}
              style={{
                width: 38, height: 38, borderRadius: "50%",
                background: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(255,255,255,0.08)",
                display: "flex", alignItems: "center", justifyContent: "center",
                cursor: "pointer", color: "rgba(255,255,255,0.7)",
                transition: "all 0.2s",
              }}
              onMouseEnter={e => { e.currentTarget.style.background = "rgba(239,68,68,0.2)"; e.currentTarget.style.color = "#ef4444"; }}
              onMouseLeave={e => { e.currentTarget.style.background = "rgba(255,255,255,0.05)"; e.currentTarget.style.color = "rgba(255,255,255,0.7)"; }}
            >
              <X style={{ width: 16, height: 16 }} />
            </button>
          </div>

          {/* Body */}
          <AnimatePresence mode="wait">
            {view === "grid" ? (
              <motion.div
                key="grid"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                style={{ flex: 1, overflowY: "auto", padding: "20px", scrollbarWidth: "none" }}
              >
                <div style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fill, minmax(170px, 1fr))",
                  gap: "10px",
                  maxWidth: "1060px",
                  margin: "0 auto",
                }}>
                  {images.map((img, idx) => (
                    <motion.button
                      key={idx}
                      onClick={() => { setActiveIndex(idx); setView("single"); }}
                      whileHover={{ y: -5, scale: 1.03 }}
                      transition={{ type: "spring", stiffness: 400, damping: 25 }}
                      style={{
                        position: "relative", aspectRatio: "1 / 1",
                        borderRadius: 12, overflow: "hidden",
                        border: "1px solid rgba(255,255,255,0.06)",
                        background: "#1a2030",
                        cursor: "pointer", padding: 0,
                      }}
                      className="gallery-grid-item"
                    >
                      <img
                        src={img}
                        alt={`${productName} ${idx + 1}`}
                        style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
                      />
                      <div className="grid-item-overlay" style={{
                        position: "absolute", inset: 0,
                        background: "rgba(0,0,0,0)",
                        display: "flex", alignItems: "center", justifyContent: "center",
                        transition: "background 0.25s",
                      }}>
                        <div className="zoom-btn" style={{
                          width: 38, height: 38, borderRadius: "50%",
                          background: "rgba(255,255,255,0.92)",
                          display: "flex", alignItems: "center", justifyContent: "center",
                          opacity: 0, transition: "opacity 0.25s",
                          boxShadow: "0 4px 16px rgba(0,0,0,0.5)",
                        }}>
                          <ZoomInIcon style={{ width: 17, height: 17, color: "#0f172a" }} />
                        </div>
                      </div>
                      <div style={{
                        position: "absolute", top: 7, left: 7,
                        background: "rgba(0,0,0,0.55)", backdropFilter: "blur(4px)",
                        borderRadius: 5, padding: "2px 6px",
                        fontSize: 10, fontWeight: 700, color: "rgba(255,255,255,0.65)",
                      }}>
                        {String(idx + 1).padStart(2, "0")}
                      </div>
                    </motion.button>
                  ))}
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="single"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                style={{ flex: 1, display: "flex", flexDirection: "column", minHeight: 0 }}
              >
                {/* Main image area */}
                <div style={{
                  flex: 1, position: "relative",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  padding: "16px 64px",
                  minHeight: 0,
                }}>
                  <AnimatePresence mode="wait">
                    <motion.img
                      key={activeIndex}
                      src={images[activeIndex]}
                      alt={productName}
                      initial={{ opacity: 0, x: 40 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -40 }}
                      transition={{ duration: 0.22 }}
                      style={{
                        maxWidth: "100%", maxHeight: "100%",
                        objectFit: "contain", borderRadius: 12,
                        boxShadow: "0 20px 60px rgba(0,0,0,0.5)",
                      }}
                    />
                  </AnimatePresence>

                  {/* Prev / Next */}
                  {[
                    { fn: prev, icon: ChevLeft, pos: { left: 14 } },
                    { fn: next, icon: ChevRight, pos: { right: 14 } },
                  ].map(({ fn, icon: Icon, pos }, i) => (
                    <button
                      key={i}
                      onClick={fn}
                      style={{
                        position: "absolute", top: "50%", transform: "translateY(-50%)",
                        ...pos, width: 44, height: 44, borderRadius: "50%",
                        background: "rgba(255,255,255,0.07)",
                        border: "1px solid rgba(255,255,255,0.12)",
                        display: "flex", alignItems: "center", justifyContent: "center",
                        cursor: "pointer", color: "white", zIndex: 10,
                        transition: "all 0.2s",
                      }}
                      onMouseEnter={e => { e.currentTarget.style.background = "#F5A623"; e.currentTarget.style.color = "#7a3e00"; e.currentTarget.style.borderColor = "#F5A623"; }}
                      onMouseLeave={e => { e.currentTarget.style.background = "rgba(255,255,255,0.07)"; e.currentTarget.style.color = "white"; e.currentTarget.style.borderColor = "rgba(255,255,255,0.12)"; }}
                    >
                      <Icon style={{ width: 20, height: 20 }} />
                    </button>
                  ))}
                </div>

                {/* Thumbnail strip */}
                <div style={{
                  padding: "12px 20px 16px",
                  borderTop: "1px solid rgba(255,255,255,0.06)",
                  background: "rgba(0,0,0,0.35)",
                  flexShrink: 0,
                }}>
                  <div style={{ display: "flex", justifyContent: "center", gap: 7, overflowX: "auto", scrollbarWidth: "none" }}>
                    {images.map((img, i) => (
                      <button
                        key={i}
                        onClick={() => setActiveIndex(i)}
                        style={{
                          flexShrink: 0, width: 52, height: 52,
                          borderRadius: 9, overflow: "hidden",
                          border: i === activeIndex ? "2.5px solid #F5A623" : "2.5px solid transparent",
                          opacity: i === activeIndex ? 1 : 0.4,
                          transform: i === activeIndex ? "scale(1.12)" : "scale(1)",
                          transition: "all 0.2s", cursor: "pointer", padding: 0,
                        }}
                      >
                        <img src={img} alt="thumb" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
                      </button>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </motion.div>

      <style>{`
        .gallery-grid-item:hover .grid-item-overlay { background: rgba(0,0,0,0.5) !important; }
        .gallery-grid-item:hover .zoom-btn { opacity: 1 !important; }
      `}</style>
    </AnimatePresence>
  );
}

/* ══════════════════════════════════════════
   PRODUCT GALLERY — 8-image front preview
══════════════════════════════════════════ */
function ProductGallery({ images = [], productName = "Product" }) {
  const [modalOpen, setModalOpen] = useState(false);

  const previewImages = images.slice(0, 8);
  const remaining = images.length - 8;

  if (!images.length) return null;

  return (
    <>
      <div style={{ position: "relative" }}>
        {/* 8-image grid preview */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gridTemplateRows: "repeat(2, 1fr)",
          gap: "6px",
          borderRadius: "16px",
          overflow: "hidden",
        }}>
          {previewImages.map((img, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: idx * 0.05, duration: 0.35 }}
              style={{
                position: "relative",
                aspectRatio: "1 / 1",
                overflow: "hidden",
                background: "#e2e8f0",
              }}
              className="preview-cell"
            >
              <img
                src={img}
                alt={`${productName} ${idx + 1}`}
                style={{ width: "100%", height: "100%", objectFit: "cover", display: "block", transition: "transform 0.5s ease" }}
                className="preview-img"
              />
              {/* "+N more" overlay on 8th */}
              {idx === 7 && remaining > 0 && (
                <div style={{
                  position: "absolute", inset: 0,
                  background: "rgba(0,0,0,0.58)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                }}>
                  <span style={{ color: "white", fontSize: 20, fontWeight: 900, letterSpacing: "-0.02em" }}>
                    +{remaining}
                  </span>
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* ── "View All Photos" button — bottom right ── */}
        <motion.button
          onClick={() => setModalOpen(true)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
          style={{
            position: "absolute",
            bottom: 10,
            right: 10,
            display: "flex", alignItems: "center", gap: 7,
            padding: "7px 14px",
            borderRadius: 99,
            background: "rgba(10, 15, 30, 0.82)",
            backdropFilter: "blur(10px)",
            border: "1px solid rgba(255,255,255,0.18)",
            color: "white",
            fontSize: 11,
            fontWeight: 800,
            letterSpacing: "0.07em",
            textTransform: "uppercase",
            cursor: "pointer",
            boxShadow: "0 4px 20px rgba(0,0,0,0.45)",
            zIndex: 10,
          }}
        >
          <ImagesIcon style={{ width: 13, height: 13 }} />
          View All {images.length} Photos
          <span style={{
            width: 20, height: 20, borderRadius: "50%",
            background: "#F5A623",
            display: "flex", alignItems: "center", justifyContent: "center",
          }}>
            <ChevRight style={{ width: 11, height: 11, color: "#7a3e00" }} />
          </span>
        </motion.button>
      </div>

      {modalOpen && (
        <GalleryModal
          images={images}
          productName={productName}
          onClose={() => setModalOpen(false)}
        />
      )}

      <style>{`
        .preview-cell:hover .preview-img { transform: scale(1.07); }
      `}</style>
    </>
  );
}

/* ══════════════════════════════════════════
   DEMO PAGE
══════════════════════════════════════════ */
export default function App() {
  return (
    <div style={{
      minHeight: "100vh",
      background: "linear-gradient(135deg, #f8fafc 0%, #f0f4f8 100%)",
      display: "flex", alignItems: "center", justifyContent: "center",
      padding: "40px 20px",
      fontFamily: "'Georgia', serif",
    }}>
      <div style={{ width: "100%", maxWidth: 560 }}>
        {/* Header */}
        <div style={{ marginBottom: 24 }}>
          <p style={{ color: "#F5A623", fontSize: 11, fontWeight: 800, letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: 6 }}>
            Product Gallery
          </p>
          <h1 style={{ fontSize: 28, fontWeight: 700, color: "#0f172a", margin: "0 0 6px", fontStyle: "italic" }}>
            Crystal Glass Paperweight
          </h1>
          <p style={{ color: "#6b7280", fontSize: 14, lineHeight: 1.6, margin: 0 }}>
            Elegant crystal paperweight for desk. Click any image or the button to open the full gallery.
          </p>
        </div>

        {/* Gallery Component */}
        <ProductGallery images={DEMO_IMAGES} productName="Crystal Glass Paperweight" />

        {/* Info */}
        <div style={{
          marginTop: 16, padding: "12px 16px",
          background: "rgba(245, 166, 35, 0.08)",
          border: "1px solid rgba(245, 166, 35, 0.2)",
          borderRadius: 12,
        }}>
          <p style={{ color: "#92400e", fontSize: 12, fontWeight: 600, margin: 0, letterSpacing: "0.02em" }}>
            💡 Shows first 8 images in a 4×2 grid · Click "View All 12 Photos" to open full modal · Browse via arrows or thumbnails
          </p>
        </div>
      </div>
    </div>
  );
}