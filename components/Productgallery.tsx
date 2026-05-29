// components/CollageGalleryManual.tsx
import Image from 'next/image';
import { useState } from 'react';

interface GalleryImage {
  src: string;
}

const koruImages: GalleryImage[] = [
  { src: "https://pub-735dbd7583d74ad5949115d6fdf77023.r2.dev/Koru/34.png" },
  { src: "https://pub-735dbd7583d74ad5949115d6fdf77023.r2.dev/Koru/1.png" },
  { src: "https://pub-735dbd7583d74ad5949115d6fdf77023.r2.dev/Koru/2.png" },
  { src: "https://pub-735dbd7583d74ad5949115d6fdf77023.r2.dev/Koru/3.png" },
  { src: "https://pub-735dbd7583d74ad5949115d6fdf77023.r2.dev/Koru/35.png" },
  { src: "https://pub-735dbd7583d74ad5949115d6fdf77023.r2.dev/Koru/4.png" },
  { src: "https://pub-735dbd7583d74ad5949115d6fdf77023.r2.dev/Koru/5.png" },
  { src: "https://pub-735dbd7583d74ad5949115d6fdf77023.r2.dev/Koru/6.png" },
  { src: "https://pub-735dbd7583d74ad5949115d6fdf77023.r2.dev/Koru/36.png" },
  { src: "https://pub-735dbd7583d74ad5949115d6fdf77023.r2.dev/Koru/37.png" },
  { src: "https://pub-735dbd7583d74ad5949115d6fdf77023.r2.dev/Koru/7.png" },
  { src: "https://pub-735dbd7583d74ad5949115d6fdf77023.r2.dev/Koru/8.png" },
  { src: "https://pub-735dbd7583d74ad5949115d6fdf77023.r2.dev/Koru/9.png" },
  { src: "https://pub-735dbd7583d74ad5949115d6fdf77023.r2.dev/Koru/10.png" },
  { src: "https://pub-735dbd7583d74ad5949115d6fdf77023.r2.dev/Koru/11.png" },
  { src: "https://pub-735dbd7583d74ad5949115d6fdf77023.r2.dev/Koru/12.png" },
  { src: "https://pub-735dbd7583d74ad5949115d6fdf77023.r2.dev/Koru/39.png" },
  { src: "https://pub-735dbd7583d74ad5949115d6fdf77023.r2.dev/Koru/13.png" },
  { src: "https://pub-735dbd7583d74ad5949115d6fdf77023.r2.dev/Koru/14.png" },
  { src: "https://pub-735dbd7583d74ad5949115d6fdf77023.r2.dev/Koru/15.png" },
  { src: "https://pub-735dbd7583d74ad5949115d6fdf77023.r2.dev/Koru/40.png" },
  { src: "https://pub-735dbd7583d74ad5949115d6fdf77023.r2.dev/Koru/41.png" },
  { src: "https://pub-735dbd7583d74ad5949115d6fdf77023.r2.dev/Koru/16.png" },
  { src: "https://pub-735dbd7583d74ad5949115d6fdf77023.r2.dev/Koru/17.png" },
  { src: "https://pub-735dbd7583d74ad5949115d6fdf77023.r2.dev/Koru/18.png" },
  { src: "https://pub-735dbd7583d74ad5949115d6fdf77023.r2.dev/Koru/19.png" },
  { src: "https://pub-735dbd7583d74ad5949115d6fdf77023.r2.dev/Koru/20.png" },
  { src: "https://pub-735dbd7583d74ad5949115d6fdf77023.r2.dev/Koru/21.png" },
  { src: "https://pub-735dbd7583d74ad5949115d6fdf77023.r2.dev/Koru/22.png" },
  { src: "https://pub-735dbd7583d74ad5949115d6fdf77023.r2.dev/Koru/23.png" },
  { src: "https://pub-735dbd7583d74ad5949115d6fdf77023.r2.dev/Koru/24.png" },
  { src: "https://pub-735dbd7583d74ad5949115d6fdf77023.r2.dev/Koru/25.png" },
  { src: "https://pub-735dbd7583d74ad5949115d6fdf77023.r2.dev/Koru/26.png" },
  { src: "https://pub-735dbd7583d74ad5949115d6fdf77023.r2.dev/Koru/27.png" },
  { src: "https://pub-735dbd7583d74ad5949115d6fdf77023.r2.dev/Koru/28.png" },
  { src: "https://pub-735dbd7583d74ad5949115d6fdf77023.r2.dev/Koru/29.png" },
  { src: "https://pub-735dbd7583d74ad5949115d6fdf77023.r2.dev/Koru/30.png" },
  { src: "https://pub-735dbd7583d74ad5949115d6fdf77023.r2.dev/Koru/31.png" },
  { src: "https://pub-735dbd7583d74ad5949115d6fdf77023.r2.dev/Koru/32.png" },
  { src: "https://pub-735dbd7583d74ad5949115d6fdf77023.r2.dev/Koru/33.png" },
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



type GridItem = {
  src: string;
  colStart: number;
  colSpan: number;
  rowSpan: number;
};

// 4-column full block layout (same as original)
function buildFullBlock4Col(srcs: string[]): GridItem[] {
  const s = (i: number) => srcs[i];

  return [
    // Row 1-2: Tall image in col 1 (2 rows = 460px)
    { src: s(0), colStart: 1, colSpan: 1, rowSpan: 2 },
    // Row 1: Three images in cols 2-4 (1 row = 230px)
    { src: s(1), colStart: 2, colSpan: 1, rowSpan: 1 },
    { src: s(2), colStart: 3, colSpan: 1, rowSpan: 1 },
    { src: s(3), colStart: 4, colSpan: 1, rowSpan: 1 },
    // Row 2-3: Tall image in col 2 (2 rows = 460px)
    { src: s(4), colStart: 2, colSpan: 1, rowSpan: 2 },
    // Row 2: Two images in cols 3-4 (1 row = 230px)
    { src: s(5), colStart: 3, colSpan: 1, rowSpan: 1 },
    { src: s(6), colStart: 4, colSpan: 1, rowSpan: 1 },
    // Row 3: Image in col 1 (1 row = 230px)
    { src: s(7), colStart: 1, colSpan: 1, rowSpan: 1 },
    // Row 3-4: Tall images in cols 3-4 (2 rows = 460px)
    { src: s(8), colStart: 3, colSpan: 1, rowSpan: 2 },
    { src: s(9), colStart: 4, colSpan: 1, rowSpan: 2 },
    // Row 4: Two images in cols 1-2 (1 row = 230px)
    { src: s(10), colStart: 1, colSpan: 1, rowSpan: 1 },
    { src: s(11), colStart: 2, colSpan: 1, rowSpan: 1 },
  ];
}

// 3-column block layout for smaller screens
function buildFullBlock3Col(srcs: string[]): GridItem[] {
  const s = (i: number) => srcs[i];

  return [
    // Row 1-2: Tall image in col 1 (2 rows)
    { src: s(0), colStart: 1, colSpan: 1, rowSpan: 2 },
    // Row 1: Two images in cols 2-3 (1 row)
    { src: s(1), colStart: 2, colSpan: 1, rowSpan: 1 },
    { src: s(2), colStart: 3, colSpan: 1, rowSpan: 1 },
    // Row 2: Two images in cols 2-3 (1 row)
    { src: s(3), colStart: 2, colSpan: 1, rowSpan: 1 },
    { src: s(4), colStart: 3, colSpan: 1, rowSpan: 1 },
    // Row 3: Three images spanning full width
    { src: s(5), colStart: 1, colSpan: 1, rowSpan: 1 },
    { src: s(6), colStart: 2, colSpan: 1, rowSpan: 1 },
    { src: s(7), colStart: 3, colSpan: 1, rowSpan: 1 },
    // Row 4-5: Tall image in col 1 (2 rows)
    { src: s(8), colStart: 1, colSpan: 1, rowSpan: 2 },
    // Row 4: Two images in cols 2-3 (1 row)
    { src: s(9), colStart: 2, colSpan: 1, rowSpan: 1 },
    { src: s(10), colStart: 3, colSpan: 1, rowSpan: 1 },
    // Row 5: Two images in cols 2-3 (1 row)
    { src: s(11), colStart: 2, colSpan: 1, rowSpan: 1 },
    { src: s(12), colStart: 3, colSpan: 1, rowSpan: 1 },
    // Row 6: Three images spanning full width
    { src: s(13), colStart: 1, colSpan: 1, rowSpan: 1 },
    { src: s(14), colStart: 2, colSpan: 1, rowSpan: 1 },
    { src: s(15), colStart: 3, colSpan: 1, rowSpan: 1 },
    // Row 7-8: Tall image in col 1 (2 rows)
    { src: s(16), colStart: 1, colSpan: 1, rowSpan: 2 },
    // Row 7: Two images in cols 2-3 (1 row)
    { src: s(17), colStart: 2, colSpan: 1, rowSpan: 1 },
    { src: s(18), colStart: 3, colSpan: 1, rowSpan: 1 },
    // Row 8: Two images in cols 2-3 (1 row)
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

const INITIAL_COUNT = 36;

export default function CollageGalleryManual() {
  const [showAll, setShowAll] = useState(false);

  const source = showAll ? koruImages : koruImages.slice(0, INITIAL_COUNT);
  const gridItems4Col = buildGridItems(source, false);
  const gridItems3Col = buildGridItems(source, true);
  const hasMoreImages = koruImages.length > INITIAL_COUNT;

  return (
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
        {gridItems4Col.map((item, index) => (
          <GalleryItem key={index} item={item} index={index} />
        ))}
      </div>

      {/* 3-Column Grid (1024px - 1279px) */}
      <div 
        className="hidden lg:grid xl:hidden gap-4"
        style={{
          gridTemplateColumns: 'repeat(3, minmax(280px, 1fr))',
          gridAutoRows: '230px',
        }}
      >
        {gridItems3Col.map((item, index) => (
          <GalleryItem key={index} item={item} index={index} />
        ))}
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
            key={index}
            className="relative overflow-hidden group"
            style={{
              borderRadius: '12px',
              boxShadow: '0 1px 3px rgba(0,0,0,0.08)',
              minWidth: '250px',
            }}
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
              alt={`Koru image ${index + 1}`}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
              sizes="(max-width: 640px) 45vw, 300px"
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
            key={index}
            className="relative overflow-hidden group"
            style={{
              borderRadius: '12px',
              boxShadow: '0 1px 3px rgba(0,0,0,0.08)',
            }}
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
              alt={`Koru image ${index + 1}`}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
              sizes="90vw"
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
  );
}

// Gallery Item Component (shared for grid layouts)
function GalleryItem({ item, index }: { item: GridItem; index: number }) {
  return (
    <div
      className="relative overflow-hidden group"
      style={{
        gridColumn: `${item.colStart} / span ${item.colSpan}`,
        gridRow: `span ${item.rowSpan}`,
        borderRadius: '12px',
        boxShadow: '0 1px 3px rgba(0,0,0,0.08)',
        minWidth: '280px',
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
        sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, (max-width: 1280px) 33vw, 25vw"
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