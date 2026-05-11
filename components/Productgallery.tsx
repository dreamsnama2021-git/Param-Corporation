// components/CollageGalleryManual.tsx
import Image from 'next/image';
import { useState } from 'react';

interface GalleryImage {
  src: string;
  colSpan: number;
}

const galleryImages: GalleryImage[] = [
  { src: "https://medipride.org/wp-content/uploads/2025/11/Clear-Vision.jpg", colSpan: 2 },
  { src: "https://medipride.org/wp-content/uploads/2025/11/Tooth-tales.jpg", colSpan: 1 },
  { src: "https://medipride.org/wp-content/uploads/2025/11/PCOS.jpg", colSpan: 1 },
  { src: "https://medipride.org/wp-content/uploads/2025/11/Acute.jpg", colSpan: 1},
  { src: "https://medipride.org/wp-content/uploads/2025/11/Type-2-Diabites.jpg", colSpan: 1 },
  { src: "https://medipride.org/wp-content/uploads/2025/11/Urinary-Track.jpg", colSpan: 2 },
  { src: "https://medipride.org/wp-content/uploads/2025/11/Dosage.jpg", colSpan: 1 },
  { src: "https://medipride.org/wp-content/uploads/2025/11/Ear.jpg", colSpan: 1 },
  { src: "https://medipride.org/wp-content/uploads/2025/11/Strok.jpg", colSpan: 1 },
  { src: "https://medipride.org/wp-content/uploads/2025/11/Epilipsy-1.jpg", colSpan: 2 },
  { src: "https://medipride.org/wp-content/uploads/2025/11/Hearning-loss.jpg", colSpan: 1 },
  { src: "https://medipride.org/wp-content/uploads/2025/11/Strok-1.jpg", colSpan: 1 },
  { src: "https://medipride.org/wp-content/uploads/2025/11/Ortho.jpg", colSpan: 1 },
  { src: "https://medipride.org/wp-content/uploads/2025/11/Medipride-3D-Model.jpg", colSpan: 2 },
  { src: "https://medipride.org/wp-content/uploads/2025/11/Dosage-1.jpg", colSpan: 1 },
  { src: "https://medipride.org/wp-content/uploads/2025/11/Ortho-1.jpg", colSpan: 1 },
  { src: "https://medipride.org/wp-content/uploads/2025/11/PCOS-1.jpg", colSpan: 1 },
  { src: "https://medipride.org/wp-content/uploads/2025/11/Diabites.jpg", colSpan: 1 },
  { src: "https://medipride.org/wp-content/uploads/2025/11/Facial-muscle-anotomy-glass-printing-1.jpg", colSpan: 1 },
  { src: "https://medipride.org/wp-content/uploads/2025/11/LLU-1.jpg", colSpan: 1 },
  { src: "https://medipride.org/wp-content/uploads/2025/11/Benitowa-PCOS-1.jpg", colSpan: 1 },
];

export default function CollageGalleryManual() {
  const [showAll, setShowAll] = useState(false);
  
  const displayedImages = showAll ? galleryImages : galleryImages.slice(0, 12);
  const hasMoreImages = galleryImages.length > 12;

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
              alt={`Gallery image ${index + 1}`}
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
              See All ({galleryImages.length - 12}+ more)
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