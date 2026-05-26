// components/CollageGalleryManual.tsx
import Image from 'next/image';
import { useState } from 'react';

interface GalleryImage {
  src: string;
}

const koruImages: GalleryImage[] = [
  { src: "/koru/koru1.png" },
  { src: "/koru/koru2.png" },
  { src: "/koru/koru3.png" },
  { src: "/koru/koru4.png" },
  { src: "/koru/koru5.png" },
  { src: "/koru/koru6.png" },
  { src: "/koru/koru7.png" },
  { src: "/koru/koru8.png" },
  { src: "/koru/koru9.png" },
  { src: "/koru/koru10.png" },
  { src: "/koru/koru11.png" },
  { src: "/koru/koru12.png" },
  { src: "/koru/koru13.png" },
  { src: "/koru/koru14.png" },
  { src: "/koru/koru15.png" },
  { src: "/koru/koru16.png" },
  { src: "/koru/koru17.png" },
  { src: "/koru/koru18.png" },
  { src: "/koru/koru19.png" },
  { src: "/koru/koru20.png" },
  { src: "/koru/koru21.png" },
  { src: "/koru/koru22.png" },
  { src: "/koru/koru23.png" },
  { src: "/koru/koru24.png" },
  { src: "/koru/koru25.png" },
  { src: "/koru/koru26.png" },
  { src: "/koru/koru27.png" },
  { src: "/koru/koru28.png" },
  { src: "/koru/koru29.png" },
  { src: "/koru/koru30.png" },
  // { src: "/koru/koru30.png" },
  // { src: "/koru/koru31.png" },
  // { src: "/koru/koru32.png" },
  // { src: "/koru/koru33.png" },
  // { src: "/koru/koru34.png" },
  // { src: "/koru/koru35.png" },
  // { src: "/koru/koru36.png" },
  // { src: "/koru/koru37.png" },
  // { src: "/koru/koru38.png" },
  // { src: "/koru/koru39.png" },
  // { src: "/koru/koru40.png" },
  // { src: "/koru/koru41.png" },
  // { src: "/koru/koru42.png" },
  // { src: "/koru/koru43.png" },
  // { src: "/koru/koru44.png" },
];

/**
 * Fixed 4-column grid pattern — 16 images per block, all blocks identical.
 * Maintains the same dramatic vertical anchors concept with tall images.
 *
 * Grid layout:
 * ┌──────┬──────┬──────┬──────┐
 * │      │      │      │      │
 * │  A   │  B   │  C   │  D   │  Row 1 (B, C, D span 2)
 * │      │      │      │      │
 * │      ├──────┼──────┼──────┤
 * │      │      │      │      │
 * │ 3r   │  E   │  F   │  G   │  Row 2 (F, G span 2)
 * │      │      │      │      │
 * │      │  3r  │      │      │
 * ├──────┤      ├──────┼──────┤
 * │      │      │      │      │
 * │  H   │      │  I   │  J   │  Row 3 (J spans 3)
 * │      │      │      │      │
 * │  2r  │      │  3r  │  3r  │
 * ├──────┼──────┤      │      │
 * │      │      │      │      │
 * │  K   │  L   │      │      │  Row 4-5
 * │      │      │      │      │
 * │  2r  │  2r  │      │      │
 * └──────┴──────┴──────┴──────┘
 *
 * Images per block: 12
 * Total rows per block: 5
 */

type GridItem = {
  src: string;
  colStart: number;
  colSpan: number;
  rowSpan: number;
};

function buildBlock(srcs: string[]): GridItem[] {
  const s = (i: number) => srcs[i] ?? srcs[srcs.length - 1];

  return [
    // Row 1-3: Tall image in col 1
    { src: s(0), colStart: 1, colSpan: 1, rowSpan: 3 }, // A - tall (3 rows)
    
    // Row 1-2: Three images in cols 2-4
    { src: s(1), colStart: 2, colSpan: 1, rowSpan: 2 }, // B
    { src: s(2), colStart: 3, colSpan: 1, rowSpan: 2 }, // C
    { src: s(3), colStart: 4, colSpan: 1, rowSpan: 2 }, // D
    
    // Row 2-4: Tall image in col 2
    { src: s(4), colStart: 2, colSpan: 1, rowSpan: 3 }, // E - tall (3 rows)
    
    // Row 2-3: Two images in cols 3-4
    { src: s(5), colStart: 3, colSpan: 1, rowSpan: 2 }, // F
    { src: s(6), colStart: 4, colSpan: 1, rowSpan: 2 }, // G
    
    // Row 3-4: Image in col 1
    { src: s(7), colStart: 1, colSpan: 1, rowSpan: 2 }, // H
    
    // Row 3-5: Tall images in cols 3-4
    { src: s(8), colStart: 3, colSpan: 1, rowSpan: 3 }, // I - tall (3 rows)
    { src: s(9), colStart: 4, colSpan: 1, rowSpan: 3 }, // J - tall (3 rows)
    
    // Row 5: Two images in cols 1-2
    { src: s(10), colStart: 1, colSpan: 1, rowSpan: 2 }, // K
    { src: s(11), colStart: 2, colSpan: 1, rowSpan: 2 }, // L
  ];
}

function buildGridItems(images: GalleryImage[]): GridItem[] {
  const items: GridItem[] = [];

  for (let i = 0; i < images.length; i += 12) {
    const srcs = images.slice(i, i + 12).map((img) => img.src);
    items.push(...buildBlock(srcs));
  }

  return items;
}

const INITIAL_COUNT = 24; // 2 blocks × 12 images

export default function CollageGalleryManual() {
  const [showAll, setShowAll] = useState(false);

  const source = showAll ? koruImages : koruImages.slice(0, INITIAL_COUNT);
  const gridItems = buildGridItems(source);
  const hasMoreImages = koruImages.length > INITIAL_COUNT;

  return (
    <div 
      className="container mx-auto px-4 py-8"
      style={{
        background: `linear-gradient(135deg, #f0f9ff 0%, #f0fdf4 50%, #f8faf8 100%)`,
      }}
    >
 

      {/* Image Grid */}
      <div className="gap-4 2xl:gap-6"
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gridAutoRows: '160px',
       
        }}
      >
        {gridItems.map((item, index) => (
          <div
            key={index}
            className="relative overflow-hidden group"
            style={{
              gridColumn: `${item.colStart} / span ${item.colSpan}`,
              gridRow: `span ${item.rowSpan}`,
              borderRadius: '12px',
              boxShadow: '0 1px 3px rgba(0,0,0,0.08)',
            }}
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
              alt={`Koru image ${index + 1}`}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
              sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
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
  );
}
