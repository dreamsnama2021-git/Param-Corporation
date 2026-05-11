// components/CollageGalleryManual.tsx
import Image from 'next/image';
import { useState } from 'react';

interface GalleryImage {
  src: string;
  colSpan: number;
}

const koruImages: GalleryImage[] = [
  { src: "/koru/koru.png", colSpan: 2 },
  { src: "/koru/koru1.png", colSpan: 1 },
  { src: "/koru/koru2.png", colSpan: 1 },
  { src: "/koru/koru3.png", colSpan: 1 },
  { src: "/koru/koru4.png", colSpan: 1 },
  { src: "/koru/koru5.png", colSpan: 2 },
  { src: "/koru/koru6.png", colSpan: 1 },
  { src: "/koru/koru7.png", colSpan: 1 },
  { src: "/koru/koru8.png", colSpan: 1 },
  { src: "/koru/koru9.png", colSpan: 2 },
  { src: "/koru/koru10.png", colSpan: 1 },
  { src: "/koru/koru11.png", colSpan: 1 },
  { src: "/koru/koru12.png", colSpan: 1 },
  { src: "/koru/koru13.png", colSpan: 2 },
  { src: "/koru/koru14.png", colSpan: 1 },
  { src: "/koru/koru15.png", colSpan: 1 },
  { src: "/koru/koru16.png", colSpan: 1 },
  { src: "/koru/koru17.png", colSpan: 1 },
  { src: "/koru/koru18.png", colSpan: 1 },
  { src: "/koru/koru19.png", colSpan: 2 },
  { src: "/koru/koru20.png", colSpan: 1 },
  { src: "/koru/koru21.png", colSpan: 2 },
  { src: "/koru/koru22.png", colSpan: 1 },
  { src: "/koru/koru23.png", colSpan: 1 },
  { src: "/koru/koru24.png", colSpan: 2 },
  { src: "/koru/koru25.png", colSpan: 1 },
  { src: "/koru/koru26.png", colSpan: 1 },
  { src: "/koru/koru27.png", colSpan: 1 },
  { src: "/koru/koru28.png", colSpan: 2 },
  { src: "/koru/koru29.png", colSpan: 1 },
  { src: "/koru/koru30.png", colSpan: 1 },
  { src: "/koru/koru31.png", colSpan: 1 },
  { src: "/koru/koru32.png", colSpan: 1 },
  { src: "/koru/koru33.png", colSpan: 2 },
  { src: "/koru/koru34.png", colSpan: 1 },
  { src: "/koru/koru35.png", colSpan: 1 },
  { src: "/koru/koru36.png", colSpan: 1 },
  { src: "/koru/koru37.png", colSpan: 2 },
  { src: "/koru/koru38.png", colSpan: 1 },
  { src: "/koru/koru39.png", colSpan: 1 },
  { src: "/koru/koru40.png", colSpan: 1 },
  { src: "/koru/koru41.png", colSpan: 1 },
  { src: "/koru/koru42.png", colSpan: 1 },
  { src: "/koru/koru43.png", colSpan: 1 },
  { src: "/koru/koru44.png", colSpan: 1 },
  // { src: "/koru/koru45.png", colSpan: 1 },
];

export default function CollageGalleryManual() {
  const [showAll, setShowAll] = useState(false);
  
  const displayedImages = showAll ? koruImages : koruImages.slice(0, 12);
  const hasMoreImages = koruImages.length > 12;

  return (
    <div className="container mx-auto px-4 py-8">
      {/* 5 Column Grid with Manual Control */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 max-w-7xl mx-auto">
        {displayedImages.map((image, index) => (
          <div 
            key={index} 
            className={`relative w-full h-48 sm:h-56 md:h-64 lg:h-65 overflow-hidden rounded-lg ${
              image.colSpan === 2 ? 'col-span-2' : 'col-span-1'
            }`}
          >
            <Image
              src={image.src}
              alt={`Koru image ${index + 1}`}
              fill
              className="object-cover hover:scale-105 transition-transform duration-500"
              sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, (max-width: 1024px) 25vw, 20vw"
            />
          </div>
        ))}
      </div>

      {/* See All Button - Shows count of hidden images */}
      {hasMoreImages && (
        <div className="mt-8 text-center">
          {!showAll ? (
            <button
              onClick={() => setShowAll(true)}
              className="px-8 py-3 bg-black text-white rounded-lg font-medium 
                       hover:bg-gray-800 transition-colors"
            >
              See All ({koruImages.length - 12}+ more)
            </button>
          ) : (
            <button
              onClick={() => setShowAll(false)}
              className="px-8 py-3 bg-gray-200 text-gray-700 rounded-lg font-medium 
                       hover:bg-gray-300 transition-colors"
            >
              Show Less
            </button>
          )}
        </div>
      )}
    </div>
  );
}