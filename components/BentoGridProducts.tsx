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

function Modal({
  cat,
  onClose,
}: {
  cat: Category;
  onClose: () => void;
}) {
  const [isVisible, setIsVisible] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  // Close on Escape
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') handleClose();
    };
    document.addEventListener('keydown', handler);
    return () => document.removeEventListener('keydown', handler);
  }, []);

  // Prevent body scroll
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = '';
    };
  }, []);

  // Animate in
  useEffect(() => {
    requestAnimationFrame(() => setIsVisible(true));
    setTimeout(() => setIsLoaded(true), 100);
  }, []);

  const handleClose = () => {
    setIsVisible(false);
    setTimeout(onClose, 300);
  };

  // Get category description (2 lines)
  const getCategoryDescription = (category: string) => {
    const descriptions: Record<string, string> = {
      'Books & magazines': 'Professionally crafted educational publications featuring detailed medical illustrations and evidence-based content for healthcare professionals and patients.',
      'Flip charts': 'Interactive visual teaching tools with dry-erase surfaces, designed for effective patient education and clinical demonstrations.',
      'Laptop mats': 'Durable desk mats featuring quick-reference medical charts, dosing guides, and anatomical diagrams for daily clinical use.',
      'Patient education posters': 'Large-format wall displays covering critical health topics, perfect for clinics, hospitals, and medical offices.',
      Scales: 'Evidence-based clinical assessment tools and scoring systems for accurate patient evaluation and treatment planning.',
      'Table tops': 'Premium glass-printed anatomical displays and interactive modules for professional reference and patient engagement.',
      'Write & wipe': 'Reusable educational tools with dry-erase surfaces, ideal for explaining complex medical concepts to patients.',
    };
    return descriptions[category] || 'High-quality medical education tools designed for healthcare professionals and patient communication.';
  };

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 md:p-6 transition-all duration-300 ${
        isVisible
          ? 'bg-black/80 backdrop-blur-md'
          : 'bg-black/0 backdrop-blur-none'
      }`}
      onClick={handleClose}
    >
      <div
        className={`relative bg-white dark:bg-neutral-900 rounded-2xl sm:rounded-3xl w-full max-w-5xl max-h-[92vh] overflow-hidden shadow-[0_25px_50px_-12px_rgba(0,0,0,0.4)] transition-all duration-300 ${
          isVisible
            ? 'opacity-100 translate-y-0 scale-100'
            : 'opacity-0 translate-y-8 scale-95'
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal content */}
        <div className="flex flex-col h-full">
          {/* Header with title - optimized spacing for small laptops */}
          <div className="relative px-4 sm:px-6 lg:px-5 pt-4 sm:pt-6 lg:pt-5 pb-3 sm:pb-4 lg:pb-3 flex-shrink-0">
            <div className="flex items-start justify-between gap-3">
              <div className="flex-1 min-w-0">
                {/* Category emoji and name - smaller on laptops */}
                <div className="flex items-center gap-2 sm:gap-3 mb-1.5 sm:mb-2">
                  <span className="text-xl sm:text-2xl lg:text-xl">{cat.emoji}</span>
                  <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/50 px-2 py-0.5 rounded-full whitespace-nowrap">
                    {cat.items.length} Products
                  </span>
                </div>
                <h2 className="text-xl sm:text-2xl lg:text-xl xl:text-2xl font-bold text-neutral-900 dark:text-white tracking-tight truncate">
                  {cat.category}
                </h2>
              </div>

              {/* Close button - smaller on laptops */}
              <button
                onClick={handleClose}
                aria-label="Close modal"
                className="group relative w-8 h-8 sm:w-10 sm:h-10 lg:w-8 lg:h-8 rounded-full bg-neutral-100 hover:bg-neutral-200 dark:bg-neutral-800 dark:hover:bg-neutral-700 flex items-center justify-center transition-all duration-200 hover:scale-105 active:scale-95 flex-shrink-0"
              >
                <X className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-neutral-600 dark:text-neutral-400" />
              </button>
            </div>

            {/* 2-line description - smaller text on laptops */}
            <p className="mt-2 sm:mt-3 lg:mt-2 text-xs sm:text-sm lg:text-xs xl:text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed line-clamp-2">
              {getCategoryDescription(cat.category)}
            </p>
          </div>

          {/* Subtle divider */}
          <div className="h-px bg-gradient-to-r from-transparent via-neutral-200 dark:via-neutral-700 to-transparent mx-4 sm:mx-6 lg:mx-5" />

          {/* Product cards - optimized grid for small laptops */}
          <div className="flex-1 overflow-y-auto p-4 sm:p-6 lg:p-5 custom-scrollbar">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 lg:gap-3">
              {cat.items.slice(0, 3).map((item, idx) => (
                <div
                  key={idx}
                  className={`group relative bg-white dark:bg-neutral-800/50 border border-neutral-100 dark:border-neutral-700/50 rounded-xl overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all duration-300 ${
                    isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                  }`}
                  style={{ transitionDelay: `${idx * 75}ms` }}
                >
                  {/* Image container - smaller aspect ratio on laptops */}
                  <div className="relative aspect-[4/3] overflow-hidden bg-neutral-100 dark:bg-neutral-800">
                    <Image
                      src={item.img}
                      alt={item.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1366px) 30vw, 33vw"
                    />
                    {/* Gradient overlay on hover */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>

                  {/* Content area - tighter padding on laptops */}
                  <div className="p-3 sm:p-4 lg:p-3">
                    <h3 className="font-semibold text-neutral-900 dark:text-white text-sm sm:text-base lg:text-sm xl:text-base leading-tight mb-1 line-clamp-2">
                      {item.title}
                    </h3>
                    <p className="text-[11px] sm:text-xs text-neutral-500 dark:text-neutral-400 line-clamp-2 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>

                  {/* Hover border effect */}
                  <div className="absolute inset-0 rounded-xl border-2 border-transparent group-hover:border-sky-500/30 dark:group-hover:border-sky-500/20 transition-colors duration-300 pointer-events-none" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── Bento card ──────────────────────────────────────────────────────────────
// ─── Bento card ──────────────────────────────────────────────────────────────

function BentoCard({
  cat,
  spanTwo,
  onClick,
  index,
}: {
  cat: Category;
  spanTwo?: boolean;
  onClick: () => void;
  index: number;
}) {
  return (
    <article
      className={`group relative rounded-2xl overflow-hidden cursor-pointer border border-white/10 bg-neutral-200 dark:bg-neutral-800 transition-all duration-500 hover:-translate-y-1 ${
        /* Mobile/Tablet: 1 col | Laptop (lg): index 5 spans 2 cols */
        spanTwo ? 'col-span-1 lg:col-span-2' : 'col-span-1'
        }`}
      onClick={onClick}
      role="button"
      tabIndex={0}
      aria-label={`View ${cat.category} products`}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') onClick();
      }}
    >
      <Image
        src={cat.items[0].img}
        alt={cat.category}
        fill
        className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.07]"
        sizes="(max-width: 640px) 50vw, (max-width: 1024px) 50vw, 25vw"
      />

      <div className="absolute inset-0 bg-black/10  transition-opacity duration-500 group-hover:from-black/90" />

      <div className="absolute inset-0 p-4 lg:p-6 flex flex-col justify-between">
        <div className="flex items-end justify-end">

          <div className="w-8 h-8 lg:w-9 lg:h-9 rounded-full bg-[#8bde7a] flex items-center justify-center opacity-100 lg:opacity-0 lg:group-hover:opacity-100 transition-all duration-300">
            <ArrowUpRight className="w-4 h-4 text-[#0093cb]" />
          </div>
        </div>

        <div className="space-y-1">

          <h3 className="text-[#000000] text-sm sm:text-lg lg:text-xl font-bold leading-tight">
            {cat.category}
          </h3>
        </div>
      </div>
    </article>
  );
}

// ─── Main export ─────────────────────────────────────────────────────────────

export default function ProductBentoGrid() {
  const [selected, setSelected] = useState<Category | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <>
      <section className="py-12 sm:py-20 px-4 sm:px-6 bg-[#f8fafc]">
        <div className="relative max-w-[1280px] mx-auto">
          {/* Header */}
          <div className="text-left mb-12 lg:mb-16">
            <div className={`flex items-center gap-3 mb-4 transition-all duration-700 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
              <span className="w-12 h-px bg-[#00a65d]" />
              <span className="text-[11px] font-black uppercase tracking-[0.3em] text-[#00a65d]">
                Medical Solutions
              </span>
            </div>

            <h1 className={`text-4xl lg:text-6xl font-black tracking-tighter text-[#0f172a] mb-4 transition-all duration-700 delay-100 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
              Premium <span className="text-[#0093cb]">Portfolio</span>
            </h1>
          </div>

          {/* 
              Bento grid Logic:
              - Mobile & Tablet: grid-cols-2 (Always 2 columns)
              - Laptop/Desktop: lg:grid-cols-4 (4 columns)
          */}
          <div
            className={`grid gap-3 lg:gap-6 transition-all duration-700 delay-300 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }
            grid-cols-2 
            lg:grid-cols-4
            auto-rows-[160px] 
            sm:auto-rows-[220px] 
            lg:auto-rows-[280px]
            `}
          >
            {PRODUCT_DATA.map((cat, i) => (
              <BentoCard
                key={cat.category}
                cat={cat}
                /* index 5 is the 6th card. 
                   On Desktop (4 cols): 
                   Row 1: 0,1,2,3 (4 cols)
                   Row 2: 4 (1col), 5 (2cols), 6 (1col) = total 4 cols.
                */
                spanTwo={i === 5}
                onClick={() => setSelected(cat)}
                index={i}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Modal */}
      {selected && (
        <Modal cat={selected} onClose={() => setSelected(null)} />
      )}
    </>
  );
}