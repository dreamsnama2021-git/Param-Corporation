'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { ArrowUpRight, X, Sparkles } from 'lucide-react';

// ─── Data ────────────────────────────────────────────────────────────────────
const PRODUCT_DATA = [
  {
    category: 'Books & magazines',
    emoji: '📚',
    items: [
      {
        title: 'Near vision chart',
        desc: 'Portable, foldable tool for quick, accurate near vision assessment with standard letters in multiple sizes.',
        img: 'https://medipride.org/wp-content/uploads/2025/11/Clear-Vision.jpg',
      },
      {
        title: 'Tooth tales: a visual guide',
        desc: 'Dental education book with detailed illustrations that help professionals clearly explain tooth care.',
        img: 'https://medipride.org/wp-content/uploads/2025/11/Tooth-tales.jpg',
      },
      {
        title: 'PCOS book',
        desc: 'PCOS Simplified – understanding root causes, hormone imbalance, and the path to better management.',
        img: 'https://medipride.org/wp-content/uploads/2025/11/PCOS.jpg',
      },
    ],
  },
  {
    category: 'Flip charts',
    emoji: '📋',
    items: [
      {
        title: 'ACS flip chart',
        desc: 'Acute Coronary Syndrome tool with illustrated guides and a dry-erase back for patient education.',
        img: 'https://medipride.org/wp-content/uploads/2025/11/Acute.jpg',
      },
      {
        title: 'Type 2 diabetes risk',
        desc: 'Detailed information on Type 2 Diabetes risk factors and prevention strategies.',
        img: 'https://medipride.org/wp-content/uploads/2025/11/Type-2-Diabites.jpg',
      },
      {
        title: 'Urinary tract flipchart',
        desc: 'Illustration of the kidneys, ureters, and bladder for anatomical understanding.',
        img: 'https://medipride.org/wp-content/uploads/2025/11/Urinary-Track.jpg',
      },
    ],
  },
  {
    category: 'Laptop mats',
    emoji: '💻',
    items: [
      {
        title: 'Dosing guide mat',
        desc: 'Quick reference for dosing schedule, administration, and important safety information.',
        img: 'https://medipride.org/wp-content/uploads/2025/11/Dosage.jpg',
      },
      {
        title: 'Human ear anatomy mat',
        desc: 'Detailed charts of the human ear anatomy, including vascular supply and ossicles.',
        img: 'https://medipride.org/wp-content/uploads/2025/11/Ear.jpg',
      },
      {
        title: 'Stroke (NIHSS) mat',
        desc: 'Quick reference for stroke symptoms and the critical NIHSS scale for rapid patient assessment.',
        img: 'https://medipride.org/wp-content/uploads/2025/11/Strok.jpg',
      },
    ],
  },
  {
    category: 'Patient education posters',
    emoji: '🖼️',
    items: [
      {
        title: 'Epilepsy poster',
        desc: 'Explains epilepsy signs and seizures (focal vs. generalized) and essential first aid dos and don\'ts.',
        img: 'https://medipride.org/wp-content/uploads/2025/11/Epilipsy-1.jpg',
      },
      {
        title: 'Hearing loss poster',
        desc: 'Details the types of hearing loss along with their causes and prevention tips.',
        img: 'https://medipride.org/wp-content/uploads/2025/11/Hearning-loss.jpg',
      },
      {
        title: 'Breast cancer poster',
        desc: 'Outlines symptoms, risk factors, self-examination steps, and emphasizes early detection.',
        img: 'https://medipride.org/wp-content/uploads/2025/11/Strok-1.jpg',
      },
    ],
  },
  {
    category: 'Scales',
    emoji: '📏',
    items: [
      {
        title: 'JOINTS WOMAC scale',
        desc: 'Assesses severity of pain, stiffness, and physical function impact of osteoarthritis.',
        img: 'https://medipride.org/wp-content/uploads/2025/11/Ortho.jpg',
      },
      {
        title: 'GERD ruler',
        desc: 'Scoring scale to classify the severity of GERD (heartburn) into mild, moderate, or severe.',
        img: 'https://medipride.org/wp-content/uploads/2025/11/Medipride-3D-Model.jpg',
      },
      {
        title: 'Major cardiovascular scale',
        desc: 'Medication indicators for easing vascular flow and reducing cardiovascular event risks.',
        img: 'https://medipride.org/wp-content/uploads/2025/11/Dosage-1.jpg',
      },
    ],
  },
  {
    category: 'Table tops',
    emoji: '🪑',
    items: [
      {
        title: 'Facial muscle anatomy',
        desc: 'Full-color glass-print display of facial muscle anatomy for professional reference.',
        img: 'https://medipride.org/wp-content/uploads/2025/11/Facial-muscle-anotomy-glass-printing-1.jpg',
      },
      {
        title: 'Live life table top',
        desc: 'Engaging 24-hour visual routine wheel guiding lifestyle adjustments for bladder health.',
        img: 'https://medipride.org/wp-content/uploads/2025/11/LLU-1.jpg',
      },
      {
        title: 'Benitowa PCOS',
        desc: 'Interactive display module for women\'s health clinics and educational environments.',
        img: 'https://medipride.org/wp-content/uploads/2025/11/Benitowa-PCOS-1.jpg',
      },
    ],
  },
  {
    category: 'Write & wipe',
    emoji: '✏️',
    items: [
      {
        title: 'Ortho edu stand',
        desc: 'Write & Wipe tool detailing stages, risk factors, and treatment for osteoporosis.',
        img: 'https://medipride.org/wp-content/uploads/2025/11/Ortho-1.jpg',
      },
      {
        title: 'PCOS edu stand',
        desc: 'Visually explaining the reproductive systems, PCOS definition, signs, and complications.',
        img: 'https://medipride.org/wp-content/uploads/2025/11/PCOS-1.jpg',
      },
      {
        title: 'Diabetes card set',
        desc: 'Interactive card set for learning the causes, symptoms, and management of diabetes.',
        img: 'https://medipride.org/wp-content/uploads/2025/11/Diabites.jpg',
      },
    ],
  },
];

// ─── Types ───────────────────────────────────────────────────────────────────
type Product = {
  title: string;
  desc: string;
  img: string;
};

type Category = {
  category: string;
  emoji: string;
  items: Product[];
};

// ─── Modal ───────────────────────────────────────────────────────────────────
function Modal({ cat, onClose }: { cat: Category; onClose: () => void }) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') handleClose();
    };
    document.addEventListener('keydown', handler);
    document.body.style.overflow = 'hidden';
    
    return () => {
      document.removeEventListener('keydown', handler);
      document.body.style.overflow = '';
    };
  }, []);

  useEffect(() => {
    requestAnimationFrame(() => setIsVisible(true));
  }, []);

  const handleClose = () => {
    setIsVisible(false);
    setTimeout(onClose, 300);
  };

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center p-4 transition-all duration-500 ${
        isVisible ? 'bg-[#0b3c5d]/90 backdrop-blur-md' : 'bg-transparent'
      }`}
      onClick={handleClose}
    >
      <div
        className={`relative bg-white rounded-2xl w-full max-w-6xl max-h-[90vh] overflow-hidden shadow-2xl transition-all duration-500 ${
          isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-12 scale-95'
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="relative px-6 sm:px-8 pt-6 sm:pt-8 pb-4">
          <svg width="40" height="6" viewBox="0 0 40 6" fill="none" className="text-[#0093cb] mb-3">
            <path d="M2 4C4 1 8 0 10 3C12 6 14 5 18 3C22 1 26 4 30 3C34 2 36 4 38 3" 
                  stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" fill="none" />
          </svg>
          
          <div className="flex items-start justify-between">
            <div>
              <p className="text-xs uppercase tracking-wider text-[#6b7280] mb-1">
                {cat.items.length} handcrafted tools
              </p>
              <h2 className="text-2xl sm:text-3xl font-serif italic text-[#0f172a]">
                {cat.category}
              </h2>
            </div>
            
            <button
              onClick={handleClose}
              className="group w-10 h-10 rounded-full bg-[#f8fafc] hover:bg-[#0093cb] flex items-center justify-center transition-all duration-300"
            >
              <X className="w-4 h-4 text-[#6b7280] group-hover:text-white transition-colors" />
            </button>
          </div>
          
          <div className="h-px bg-gradient-to-r from-[#0093cb]/20 via-[#00a65d]/20 to-transparent mt-4" />
        </div>

        {/* Product grid */}
        <div className="overflow-y-auto px-6 sm:px-8 pb-8 pt-2 max-h-[calc(90vh-140px)]">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {cat.items.map((item, idx) => (
              <div key={idx} className="group relative">
                <div className="relative bg-[#f8fafc] rounded-xl overflow-hidden border border-[#eef2f7] hover:border-[#0093cb]/30 transition-all duration-500 hover:-translate-y-1">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={item.img}
                      alt={item.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0b3c5d]/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    <div className="absolute top-3 left-3 w-7 h-7 bg-white rounded-lg flex items-center justify-center text-xs font-bold text-[#0093cb] shadow-md">
                      {String(idx + 1).padStart(2, '0')}
                    </div>
                    
                    <div className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                      <div className="flex items-center gap-1.5 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-full">
                        <span className="text-xs font-medium text-[#0f172a]">View details</span>
                        <ArrowUpRight className="w-3 h-3 text-[#0093cb]" />
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-5">
                    <h3 className="font-bold text-[#0f172a] mb-2 group-hover:text-[#0093cb] transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-sm text-[#6b7280] leading-relaxed line-clamp-2">
                      {item.desc}
                    </p>
                    
                    <div className="mt-3 h-0.5 w-0 bg-gradient-to-r from-[#0093cb] to-[#00a65d] group-hover:w-12 transition-all duration-500" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── Bento Card ──────────────────────────────────────────────────────────────
function BentoCard({ cat, spanTwo, onClick, index }: { 
  cat: Category; 
  spanTwo?: boolean; 
  onClick: () => void; 
  index: number;
}) {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <article
      className={`group relative rounded-2xl overflow-hidden cursor-pointer border border-[#eef2f7] hover:border-[#0093cb]/30 transition-all duration-500 hover:-translate-y-1 ${
        spanTwo ? 'sm:col-span-2' : ''
      }`}
      style={{ minHeight: '240px' }}
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      role="button"
      tabIndex={0}
      aria-label={`View ${cat.category} products`}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') onClick();
      }}
    >
      {/* Image container */}
      <div className="absolute inset-0">
        <Image
          src={cat.items[0].img}
          alt={cat.category}
          fill
          className="object-cover transition-all duration-700 group-hover:scale-105"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        
        {/* Subtle base overlay for text readability */}
        <div className="absolute inset-0 bg-black/5" />
        
        {/* Gradient overlays - only on hover */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0b3c5d]/30 via-[#072c44]/20 to-[#0093cb]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0b3c5d]/40 via-transparent to-transparent opacity-0 group-hover:opacity-80 transition-opacity duration-500" />
        
        {/* Subtle pattern overlay - only on hover */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-500">
          <svg width="100%" height="100%">
            <pattern id={`pattern-${index}`} width="20" height="20" patternUnits="userSpaceOnUse">
              <circle cx="2" cy="2" r="1" fill="white" />
            </pattern>
            <rect width="100%" height="100%" fill={`url(#pattern-${index})`} />
          </svg>
        </div>
      </div>
      
      {/* Content */}
      <div className="absolute inset-0 p-5 sm:p-6 flex flex-col justify-between">
        {/* Top section - Items count badge */}
        <div className="flex items-start justify-between">
          
        </div>
        
        {/* Bottom section - Category name and dots */}
        <div>
          <div className="flex items-end gap-2 mb-2">
            <h3 className={`text-lg sm:text-xl font-bold transition-all duration-300 ${
              isHovered 
                ? 'text-white drop-shadow-md ' 
                : 'text-[#0f172a]'
            }`}>
              {cat.category}
            </h3>
            
            {/* Arrow that appears next to category on hover */}
            <ArrowUpRight className={`w-6 h-6 transition-all duration-300 ${
              isHovered 
                ? 'opacity-100 translate-x-0 p-1 rounded-full bg-[#8bde7a] text-[#0093cb]' 
                : 'opacity-0 -translate-x-2 text-[#0093cb]'
            }`} />
          </div>
          
          {/* Preview dots */}
          <div className="flex items-center gap-1.5">
            {cat.items.slice(0, 3).map((_, i) => (
              <div 
                key={i}
                className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                  isHovered 
                    ? 'bg-[#8bde7a] opacity-70 group-hover:opacity-100' 
                    : 'bg-[#0093cb] opacity-60'
                }`}
                style={{ transitionDelay: `${i * 50}ms` }}
              />
            ))}
            {cat.items.length > 3 && (
              <span className={`text-xs ml-1 transition-colors duration-300 ${
                isHovered ? 'text-white/70 drop-shadow-sm' : 'text-[#6b7280]'
              }`}>
                +{cat.items.length - 3}
              </span>
            )}
          </div>
        </div>
      </div>
      
      {/* Hover border */}
      <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-[#0093cb]/40 pointer-events-none transition-colors duration-500" />
      
      {/* Corner accent */}
      <div className="absolute top-0 right-0 w-16 h-16 overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <div className="absolute -top-8 -right-8 w-16 h-16 bg-gradient-to-br from-[#0093cb]/60 to-[#00a65d]/60 rotate-45" />
      </div>
    </article>
  );
}

// ─── Main Component ──────────────────────────────────────────────────────────
export default function BentoGrid2() {
  const [selected, setSelected] = useState<Category | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  // Make the 5th and 6th items span 2 columns for a dynamic layout
  const spanTwoIndices = [4, 5]; // Scales and Table tops

  return (
    <>
      <section className="relative py-16 sm:py-20 bg-gradient-to-br from-[#f8fafc] via-white to-[#8bde7a]/5 overflow-hidden">
        {/* Ambient background */}
        <div className="absolute inset-0">
          <div className="absolute top-20 right-0 w-96 h-96 bg-[#0093cb]/5 rounded-full blur-3xl" />
          <div className="absolute bottom-20 left-0 w-80 h-80 bg-[#00a65d]/5 rounded-full blur-3xl" />
        </div>
        
        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-[0.015]">
          <svg width="100%" height="100%">
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="0.5" />
            </pattern>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
          {/* Header */}
          <div className="mb-12 sm:mb-16">
            <div className="flex items-center gap-3 mb-3">
              <svg width="32" height="8" viewBox="0 0 32 8" fill="none" className="text-[#0093cb]">
                <path d="M2 6C4 2 8 1 10 3C12 5 14 7 18 4C22 1 26 5 30 3" 
                      stroke="currentColor" strokeWidth="2" strokeLinecap="round" fill="none" />
              </svg>
              <span className="text-[#0093cb] font-medium tracking-wider text-[10px] sm:text-xs uppercase">
                Medical Education Solutions
              </span>
            </div>
            
            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
              <div>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif italic text-[#0f172a] mb-3">
                  Premium <span className="relative inline-block">
                    Products
                    <svg className="absolute -bottom-1 left-0 w-full" height="6" viewBox="0 0 100 6" preserveAspectRatio="none">
                      <path d="M0,4 Q25,0 50,4 Q75,8 100,4" stroke="#00a65d" strokeWidth="2" fill="none" strokeLinecap="round" />
                    </svg>
                  </span>
                </h2>
                <p className="text-sm sm:text-base text-[#6b7280] max-w-xl">
                  Comprehensive medical education tools designed with precision and care for healthcare professionals.
                </p>
              </div>
              
       
            </div>
          </div>

          {/* Bento Grid - Fixed grid with proper row heights */}
          <div className={`grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 auto-rows-[200px] sm:auto-rows-[220px] lg:auto-rows-[240px] transition-all duration-700 ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            {/* Books & Magazines */}
            <BentoCard
              cat={PRODUCT_DATA[0]}
              onClick={() => setSelected(PRODUCT_DATA[0])}
              index={0}
            />
            
            {/* Flip Charts */}
            <BentoCard
              cat={PRODUCT_DATA[1]}
              onClick={() => setSelected(PRODUCT_DATA[1])}
              index={1}
            />
            
            {/* Laptop Mats */}
            <BentoCard
              cat={PRODUCT_DATA[2]}
              onClick={() => setSelected(PRODUCT_DATA[2])}
              index={2}
            />
            
            {/* Patient Education Posters */}
            <BentoCard
              cat={PRODUCT_DATA[3]}
              onClick={() => setSelected(PRODUCT_DATA[3])}
              index={3}
            />
            
            {/* Scales - spans 2 columns */}
            <BentoCard
              cat={PRODUCT_DATA[4]}
              spanTwo={false}
              onClick={() => setSelected(PRODUCT_DATA[4])}
              index={4}
            />
            
            {/* Table tops - spans 2 columns */}
            <BentoCard
              cat={PRODUCT_DATA[5]}
              spanTwo={true}
              onClick={() => setSelected(PRODUCT_DATA[5])}
              index={5}
            />
            
            {/* Write & wipe */}
            <BentoCard
              cat={PRODUCT_DATA[6]}
              onClick={() => setSelected(PRODUCT_DATA[6])}
              index={6}
            />
          </div>
          
       
        </div>
      </section>

      {/* Modal */}
      {selected && <Modal cat={selected} onClose={() => setSelected(null)} />}
    </>
  );
}