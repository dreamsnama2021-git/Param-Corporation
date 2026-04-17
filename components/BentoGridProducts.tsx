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

// ─── Modal ───────────────────────────────────────────────────────────────────

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

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 transition-all duration-300 ${
        isVisible
          ? 'bg-black/80 backdrop-blur-md'
          : 'bg-black/0 backdrop-blur-none'
      }`}
      onClick={handleClose}
    >
      <div
        className={`relative bg-white dark:bg-neutral-900 rounded-3xl w-full max-w-5xl max-h-[92vh] overflow-hidden shadow-[0_25px_50px_-12px_rgba(0,0,0,0.4)] transition-all duration-300 ${
          isVisible
            ? 'opacity-100 translate-y-0 scale-100'
            : 'opacity-0 translate-y-8 scale-95'
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Decorative gradient orbs */}
        {/* <div className="absolute -top-32 -right-32 w-80 h-80 bg-gradient-to-br from-sky-500/20 to-cyan-500/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-32 -left-32 w-80 h-80 bg-gradient-to-br from-emerald-500/20 to-teal-500/20 rounded-full blur-3xl pointer-events-none" /> */}

        {/* Modal header */}
        <div className="relative overflow-hidden">
          {/* Gradient background */}
          {/* <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-sky-50 dark:from-neutral-800 dark:via-neutral-900 dark:to-neutral-800" />
          <div className="absolute inset-0 bg-gradient-to-r from-sky-500/5 via-transparent to-emerald-500/5" /> */}

          {/* Header content */}
          <div className="relative px-4 sm:px-4 pt-2 pb-5">
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-4">
               
                <div>
                 
                  <h2 className="text-2xl sm:text-3xl font-semibold text-neutral-900 dark:text-white tracking-tight">
                    {cat.category}
                  </h2>
                </div>
              </div>

              {/* Close button */}
              <button
                onClick={handleClose}
                aria-label="Close modal"
                className="group relative w-11 h-11 rounded-xl bg-neutral-100 hover:bg-neutral-200 dark:bg-neutral-800 dark:hover:bg-neutral-700 flex items-center justify-center transition-all duration-200 hover:scale-105 active:scale-95"
              >
                <X className="w-4 h-4 text-neutral-600 dark:text-neutral-400 group-hover:text-neutral-900 dark:group-hover:text-white transition-colors" />
              </button>
            </div>
          </div>

          {/* Subtle border */}
          <div className="h-px bg-gradient-to-r from-transparent via-neutral-200 dark:via-neutral-700 to-transparent" />
        </div>

        {/* Product grid */}
        <div className="overflow-y-auto flex-1 p-5 sm:p-6 custom-scrollbar">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {cat.items.map((item, idx) => (
              <div
                key={idx}
                className={`group relative bg-white dark:bg-neutral-800/50 border border-neutral-100 dark:border-neutral-700/50 rounded-2xl overflow-hidden hover:shadow-xl hover:shadow-neutral-900/5 dark:hover:shadow-black/20 hover:-translate-y-1 transition-all duration-300 ${
                  isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}
                style={{ transitionDelay: `${idx * 75}ms` }}
              >
                {/* Product image container */}
                <div className="relative aspect-[4/3] overflow-hidden bg-neutral-50 dark:bg-neutral-800">
                  <Image
                    src={item.img}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />

                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* Number badge */}
                  <div className="absolute top-3 left-3 w-8 h-8 bg-white/90 dark:bg-black/80 backdrop-blur-sm rounded-xl flex items-center justify-center text-xs font-semibold text-neutral-700 dark:text-neutral-200 shadow-sm border border-white/50 dark:border-white/10">
                    {String(idx + 1).padStart(2, '0')}
                  </div>

                  {/* Quick action button */}
                  <button className="absolute top-3 right-3 w-9 h-9 bg-white/90 dark:bg-black/80 backdrop-blur-sm rounded-xl flex items-center justify-center opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300 shadow-sm border border-white/50 dark:border-white/10 hover:bg-white dark:hover:bg-black hover:scale-110 active:scale-95">
                    <ArrowUpRight className="w-4 h-4 text-neutral-700 dark:text-neutral-200" />
                  </button>
                </div>

             

                {/* Hover border effect */}
                <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-sky-500/30 dark:group-hover:border-sky-500/20 transition-colors duration-300 pointer-events-none" />
              </div>
            ))}
          </div>
        </div>


      </div>
    </div>
  );
}

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
      className={`group relative rounded-2xl overflow-hidden cursor-pointer border border-white/10 bg-neutral-200 dark:bg-neutral-800 ${
        spanTwo ? 'col-span-2' : ''
      }`}
      onClick={onClick}
      role="button"
      tabIndex={0}
      aria-label={`View ${cat.category} products`}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') onClick();
      }}
    >
      {/* Background image */}
      <Image
        src={cat.items[0].img}
        alt={cat.category}
        fill
        className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.07]"
        sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
      />

      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent transition-opacity duration-500 group-hover:from-black/70 group-hover:via-black/30" />
      <div className="absolute inset-0 bg-gradient-to-r from-sky-500/0 via-transparent to-emerald-500/0 group-hover:from-sky-500/10 group-hover:via-transparent group-hover:to-emerald-500/10 transition-all duration-500" />

      {/* Glow effect on hover */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <div className="absolute inset-0 bg-gradient-to-t from-sky-500/20 to-transparent" />
      </div>

      {/* Card content */}
      <div className="absolute inset-0 p-5 flex flex-col justify-between">
        {/* Top section - emoji and arrow */}
        <div className="flex items-start justify-between">
          <div className="w-11 h-11 rounded-xl bg-white/10 backdrop-blur-md border border-white/15 flex items-center justify-center text-xl opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
            {cat.emoji}
          </div>
          
          {/* Arrow icon */}
          <div className="w-9 h-9 rounded-full bg-white/20 backdrop-blur-md border border-white/25 flex items-center justify-center opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 ease-out">
            <ArrowUpRight className="w-4 h-4 text-white" />
          </div>
        </div>

        {/* Bottom section - category info */}
        <div className="space-y-1">
          <p className="text-[10px] uppercase tracking-[0.15em] text-white/60 font-medium">
            {cat.items.length} products
          </p>
          <h3 className="text-white text-base sm:text-lg font-semibold leading-tight">
            {cat.category}
          </h3>
        </div>
      </div>

      {/* Animated border on hover */}
      <div className="absolute inset-0 rounded-2xl border border-transparent group-hover:border-sky-500/30 transition-colors duration-300 pointer-events-none" />
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
      <section className="bg-gradient-to-br from-slate-50 via-white to-slate-100 dark:from-neutral-950 dark:via-neutral-900 dark:to-neutral-950 py-12 sm:py-16 px-4 sm:px-6 overflow-hidden">
        {/* Ambient blobs */}
        <div className="pointer-events-none fixed inset-0 overflow-hidden">
          <div className="absolute top-32 left-1/4 w-96 h-96 rounded-full bg-sky-500/[0.06] blur-3xl" />
          <div className="absolute bottom-32 right-1/4 w-80 h-80 rounded-full bg-emerald-500/[0.05] blur-3xl" />
        </div>

        <div className="relative max-w-[1200px] mx-auto">
          {/* Header */}
          <div className="text-center mb-14">
            <div
              className={`inline-flex items-center gap-3 mb-4 transition-all duration-700 ${
                isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              <span className="block w-8 h-px bg-gradient-to-r from-transparent to-sky-500" />
              <span className="text-[11px] font-medium uppercase tracking-[0.2em] text-sky-600 dark:text-sky-400">
                Medical education solutions
              </span>
              <span className="block w-8 h-px bg-gradient-to-l from-transparent to-sky-500" />
            </div>
            
            <h1
              className={`text-4xl sm:text-5xl lg:text-[56px] font-semibold tracking-tight text-neutral-900 dark:text-white mb-4 leading-none transition-all duration-700 delay-100 ${
                isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              Premium{' '}
              <span className="relative">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-emerald-500">products</span>
                <span className="absolute -bottom-1 left-0 right-0 h-1 bg-gradient-to-r from-sky-500 to-emerald-500 rounded-full opacity-40" />
              </span>
            </h1>
            
            <p
              className={`text-sm sm:text-base text-neutral-500 dark:text-neutral-400 max-w-lg mx-auto leading-relaxed transition-all duration-700 delay-200 ${
                isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              Comprehensive medical education tools designed for healthcare professionals.
            </p>
          </div>

          {/* Bento grid */}
          <div
            className={`grid gap-3 transition-all duration-700 delay-300 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{
              gridTemplateColumns: 'repeat(4, 1fr)',
              gridTemplateRows: 'repeat(2, 280px)',
            }}
          >
            {PRODUCT_DATA.map((cat, i) => (
              <BentoCard
                key={cat.category}
                cat={cat}
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
