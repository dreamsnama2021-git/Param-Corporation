// components/CollageGalleryManual.tsx
import Image from 'next/image';
import { useState } from 'react';

interface GalleryImage {
  src: string;
  colSpan: number;
}

const koruImages: GalleryImage[] = [
  { src: "/public/koru.png", colSpan: 2 },
  { src: "/public/koru1.png", colSpan: 1 },
  { src: "/public/koru2.png", colSpan: 1 },
  { src: "/public/koru3.png", colSpan: 1 },
  { src: "/public/koru4.png", colSpan: 1 },
  { src: "/public/koru5.png", colSpan: 2 },
  { src: "/public/koru6.png", colSpan: 1 },
  { src: "/public/koru7.png", colSpan: 1 },
  { src: "/public/koru8.png", colSpan: 1 },
  { src: "/public/koru9.png", colSpan: 2 },
  { src: "/public/koru10.png", colSpan: 1 },
  { src: "/public/koru11.png", colSpan: 1 },
  { src: "/public/koru12.png", colSpan: 1 },
  { src: "/public/koru13.png", colSpan: 2 },
  { src: "/public/koru14.png", colSpan: 1 },
  { src: "/public/koru15.png", colSpan: 1 },
  { src: "/public/koru16.png", colSpan: 1 },
  { src: "/public/koru17.png", colSpan: 1 },
  { src: "/public/koru18.png", colSpan: 1 },
  { src: "/public/koru19.png", colSpan: 2 },
  { src: "/public/koru20.png", colSpan: 1 },
  { src: "/public/koru21.png", colSpan: 1 },
  { src: "/public/koru22.png", colSpan: 1 },
  { src: "/public/koru23.png", colSpan: 1 },
  { src: "/public/koru24.png", colSpan: 2 },
  { src: "/public/koru25.png", colSpan: 1 },
  { src: "/public/koru26.png", colSpan: 1 },
  { src: "/public/koru27.png", colSpan: 1 },
  { src: "/public/koru28.png", colSpan: 2 },
  { src: "/public/koru29.png", colSpan: 1 },
  { src: "/public/koru30.png", colSpan: 1 },
  { src: "/public/koru31.png", colSpan: 1 },
  { src: "/public/koru32.png", colSpan: 1 },
  { src: "/public/koru33.png", colSpan: 2 },
  { src: "/public/koru34.png", colSpan: 1 },
  { src: "/public/koru35.png", colSpan: 1 },
  { src: "/public/koru36.png", colSpan: 1 },
  { src: "/public/koru37.png", colSpan: 2 },
  { src: "/public/koru38.png", colSpan: 1 },
  { src: "/public/koru39.png", colSpan: 1 },
  { src: "/public/koru40.png", colSpan: 1 },
  { src: "/public/koru41.png", colSpan: 1 },
  { src: "/public/koru42.png", colSpan: 2 },
  { src: "/public/koru43.png", colSpan: 1 },
  { src: "/public/koru44.png", colSpan: 1 },
  { src: "/public/koru45.png", colSpan: 1 },
];

export default function CollageGalleryManual() {
  const [showAll, setShowAll] = useState(false);
  
  const displayedImages = showAll ? koruImages : koruImages.slice(0, 12);
  const hasMoreImages = koruImages.length > 12;

  return (
    <div className="container mx-auto px-4 py-8">
      {/* 5 Column Grid with Manual Control - All Single Row */}
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

      {/* See All Button */}
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