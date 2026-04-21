'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { ArrowUpRight, X } from 'lucide-react';

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
        desc: "Explains epilepsy signs and seizures (focal vs. generalized) and essential first aid dos and don'ts.",
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
        desc: "Interactive display module for women's health clinics and educational environments.",
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

type Product = { title: string; desc: string; img: string };
type Category = { category: string; emoji: string; items: Product[] };

// ─── Modal ───────────────────────────────────────────────────────────────────
function Modal({ cat, onClose }: { cat: Category; onClose: () => void }) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === 'Escape') handleClose(); };
    document.addEventListener('keydown', handler);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handler);
      document.body.style.overflow = '';
    };
  }, []);

  useEffect(() => { requestAnimationFrame(() => setIsVisible(true)); }, []);

  const handleClose = () => { setIsVisible(false); setTimeout(onClose, 300); };

  return (
    <div
      className={`fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4 transition-all duration-500 ${
        isVisible ? 'bg-black/60 backdrop-blur-md' : 'bg-transparent'
      }`}
      onClick={handleClose}
    >
      <div
        className={`relative bg-white w-full sm:max-w-6xl sm:max-h-[90vh] 
          /* Mobile: slides up from bottom, full width, tall */
          max-h-[92vh] rounded-t-2xl sm:rounded-2xl
          overflow-hidden shadow-2xl transition-all duration-500 ${
          isVisible
            ? 'opacity-100 translate-y-0 scale-100'
            : 'opacity-0 translate-y-12 scale-95'
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="relative px-4 sm:px-6 lg:px-8 pt-5 sm:pt-6 lg:pt-8 pb-3 sm:pb-4">
          {/* Mobile drag handle */}
          <div className="flex justify-center mb-3 sm:hidden">
            <div className="w-10 h-1 rounded-full bg-[#d1d5db]" />
          </div>

          <svg width="40" height="6" viewBox="0 0 40 6" fill="none" className="text-[#0093cb] mb-2 sm:mb-3 hidden sm:block">
            <path d="M2 4C4 1 8 0 10 3C12 6 14 5 18 3C22 1 26 4 30 3C34 2 36 4 38 3"
              stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" fill="none" />
          </svg>

          <div className="flex items-start justify-between">
            <div>
              <p className="text-[10px] sm:text-xs uppercase tracking-wider text-[#6b7280] mb-1">
                {cat.items.length} handcrafted tools
              </p>
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-serif italic text-[#0f172a]">
                {cat.category}
              </h2>
            </div>

            <button
              onClick={handleClose}
              className="group w-9 sm:w-10 h-9 sm:h-10 rounded-full bg-[#f8fafc] hover:bg-[#0093cb] flex items-center justify-center transition-all duration-300 flex-shrink-0 ml-4"
            >
              <X className="w-4 h-4 text-[#6b7280] group-hover:text-white transition-colors" />
            </button>
          </div>

          <div className="h-px bg-gradient-to-r from-[#0093cb]/20 via-[#00a65d]/20 to-transparent mt-3 sm:mt-4" />
        </div>

        {/* Product grid */}
        <div className="overflow-y-auto px-4 sm:px-6 lg:px-8 pb-6 sm:pb-8 pt-2 max-h-[calc(92vh-120px)] sm:max-h-[calc(90vh-140px)]">
          {/* Mobile: 1 col | Tablet: 2 col | Desktop: 3 col */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
            {cat.items.map((item, idx) => (
              <div key={idx} className="group relative">
                <div className="relative bg-[#f8fafc] rounded-xl overflow-hidden border border-[#eef2f7] hover:border-[#0093cb]/30 transition-all duration-500 hover:-translate-y-1">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={item.img}
                      alt={item.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
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

                  <div className="p-4 sm:p-5">
                    <h3 className="font-bold text-sm sm:text-base text-[#0f172a] mb-1.5 sm:mb-2 group-hover:text-[#0093cb] transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#6b7280] leading-relaxed line-clamp-2">
                      {item.desc}
                    </p>
                    <div className="mt-2 sm:mt-3 h-0.5 w-0 bg-gradient-to-r from-[#0093cb] to-[#00a65d] group-hover:w-12 transition-all duration-500" />
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

// ─── Bento Card Component ────────────────────────────────────────────────────
function BentoCard({
  cat,
  index,
  onClick,
}: {
  cat: any;
  index: number;
  onClick: () => void;
}) {
  const [isHovered, setIsHovered] = useState(false);

  // LOGIC: 
  // Mobile/Tablet: Always col-span-1
  // Laptop (lg): 
  // - First 4 cards (0,1,2,3) = span 1
  // - 5th card (4) = span 1
  // - 6th card (5) = span 2 (The specific requirement)
  // - 7th card (6) = span 1
  const spanClass = index === 5 ? 'col-span-1 lg:col-span-2' : 'col-span-1';

  return (
    <article
      className={`group relative rounded-xl lg:rounded-2xl overflow-hidden cursor-pointer border border-[#eef2f7] hover:border-[#0093cb]/30 transition-all duration-500 hover:-translate-y-1 shadow-sm ${spanClass}`}
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image Layer */}
      <div className="absolute inset-0">
        <Image
          src={cat.items[0].img}
          alt={cat.category}
          fill
          className="object-cover transition-all duration-700 group-hover:scale-105"
        />
        {/* Overlay: Stronger on mobile, subtle on desktop until hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0b3c5d]/90 via-[#0b3c5d]/20 to-transparent opacity-90 lg:opacity-40 lg:group-hover:opacity-95 transition-opacity duration-500" />
      </div>

      {/* Content Layer */}
      <div className="absolute inset-0 p-4 lg:p-8 flex flex-col justify-end">
        <div className="flex items-end justify-between gap-2">
          <div className="space-y-1">
          
            <h3 className="text-sm lg:text-2xl font-bold text-white leading-tight">
              {cat.category}
            </h3>
          </div>
          <div className="bg-[#8bde7a] p-1.5 lg:p-2 rounded-full transform translate-y-4 lg:translate-y-8 opacity-0 lg:group-hover:translate-y-0 lg:group-hover:opacity-100 transition-all duration-300">
            <ArrowUpRight className="w-4 h-4 text-[#0093cb]" />
          </div>
        </div>
        
        {/* Mobile-only indicator */}
        <div className="flex lg:hidden items-center gap-1 mt-1">
          <div className="w-1.5 h-1.5 rounded-full bg-[#8bde7a]" />
          <span className="text-[9px] text-white/70 uppercase font-bold tracking-widest">Explore</span>
        </div>
      </div>
    </article>
  );
}

// ─── Main Grid Component ─────────────────────────────────────────────────────
export default function  BentoGrid2() {
  const [selected, setSelected] = useState<any | null>(null);

  return (
    <>
      <section className="relative py-12 lg:py-24 bg-[#f8fafc]">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          
          <div className="mb-10 lg:mb-16 relative">
            <span className="text-[#00a65d] text-xs font-black uppercase tracking-[0.4em] block mb-2">
              Koru Communications
            </span>
            <h2 className="text-3xl lg:text-6xl font-black text-[#0f172a] tracking-tighter">
              Premium <span className="text-[#0093cb]">Solutions</span>
            </h2>
            {/* Visual accent line */}
            <div className="absolute -left-4 top-0 w-1 h-full bg-[#00a65d] hidden lg:block" />
          </div>

          <div
            className={`
              grid gap-3 lg:gap-6
              /* MOBILE & TABLET: 2 Columns, each card 1 col */
              grid-cols-2 
              /* LAPTOP/DESKTOP: 4 Columns */
              lg:grid-cols-4
              
              /* Responsive Row Heights */
              auto-rows-[160px] 
              lg:auto-rows-[300px]
            `}
          >
            {PRODUCT_DATA.map((category, idx) => (
              <BentoCard 
                key={idx} 
                cat={category} 
                index={idx}
                onClick={() => setSelected(category)} 
              />
            ))}
          </div>
        </div>
      </section>

      {/* Reusable Modal Component */}
      {selected && <Modal cat={selected} onClose={() => setSelected(null)} />}
    </>
  );
}