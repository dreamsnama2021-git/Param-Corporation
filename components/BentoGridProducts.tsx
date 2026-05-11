'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { ArrowUpRight, X, ChevronLeft, ChevronRight } from 'lucide-react';

// ─── Data (15 therapies with 3 products per category - 21 products per therapy) ───

const PRODUCT_CATEGORIES = [
  "BOOKS & MAGAZINES",
  "FLIP CHART",
  "MATT (Desk Mats)",
  "POSTERS",
  "Medical SCALE",
  "WRITE & WIPE",
  "Tear off Pads"
] as const;

type ProductCategory = typeof PRODUCT_CATEGORIES[number];

type Product = {
  title: string;
  desc: string;
  img: string;
  category: ProductCategory;
};

type Therapy = {
  therapy: string;
  icon: string;
  color: string;
  bgColor: string;
  span: number;
  items: Product[];
};

// Helper to generate 3 demo products for a specific therapy and category
const generateCategoryProducts = (therapyName: string, category: ProductCategory): Product[] => {
  const categoryDetails = {
    "BOOKS & MAGAZINES": {
      icon: "📚",
      titles: ["Comprehensive Guide", "Clinical Handbook", "Patient Education Book"],
      descBase: "full-color illustrated guide covering diagnosis, treatment options, and patient care protocols."
    },
    "FLIP CHART": {
      icon: "📊",
      titles: ["Educational Flip Chart", "Clinical Teaching Tool", "Patient Communication Chart"],
      descBase: "easy-to-use flip chart with clear illustrations for effective patient education."
    },
    "MATT (Desk Mats)": {
      icon: "🧩",
      titles: ["Desk Reference Mat", "Clinical Protocol Mat", "Quick Reference Mat"],
      descBase: "durable, wipe-clean desk mat with essential clinical information at a glance."
    },
    "POSTERS": {
      icon: "🖼️",
      titles: ["Anatomy Poster", "Clinical Pathway Poster", "Educational Wall Chart"],
      descBase: "high-resolution, laminated poster perfect for clinic walls and exam rooms."
    },
    "Medical SCALE": {
      icon: "⚖️",
      titles: ["Assessment Scale", "Risk Evaluation Tool", "Clinical Scoring System"],
      descBase: "evidence-based clinical scale for accurate patient assessment and monitoring."
    },
    "WRITE & WIPE": {
      icon: "✏️",
      titles: ["Dry-Erase Board", "Interactive Learning Tool", "Reusable Worksheet"],
      descBase: "write-and-wipe surface for interactive patient education and care planning."
    },
    "Tear off Pads": {
      icon: "📋",
      titles: ["Tear-Off Prescription Pad", "Patient Instruction Pad", "Clinical Notes Pad"],
      descBase: "convenient tear-off pad with essential information for patient take-home use."
    }
  };

  const details = categoryDetails[category];
  const colors = ["#0093cb", "#00a65d", "#ef4444"];

  return [0, 1, 2].map((index) => ({
    title: `${therapyName}: ${details.titles[index]}`,
    desc: `${details.descBase} ${index === 0 ? 'Ideal for healthcare professionals.' : index === 1 ? 'Enhances clinical workflow and patient understanding.' : 'Trusted by medical facilities worldwide.'}`,
    img: `https://placehold.co/600x400/${colors[index].slice(1)}/white?text=${encodeURIComponent(therapyName.slice(0, 4))}+${details.icon}`,
    category
  }));
};

// Generate all therapy data with 3 products per category (21 products per therapy)
const generateFullTherapyData = (): Therapy[] => {
  const therapies = [
    { therapy: 'Cardiac Care', icon: '❤️', color: '#ef4444', bgColor: 'from-red-500/20 to-red-600/10', span: 2 },
    { therapy: 'Diabetic Care', icon: '💉', color: '#3b82f6', bgColor: 'from-blue-500/20 to-blue-600/10', span: 1 },
    { therapy: 'Pediatric', icon: '👶', color: '#8b5cf6', bgColor: 'from-purple-500/20 to-purple-600/10', span: 1 },
    { therapy: 'General Wellness', icon: '🌟', color: '#10b981', bgColor: 'from-emerald-500/20 to-emerald-600/10', span: 1 },
    { therapy: 'Dermatology', icon: '✨', color: '#f59e0b', bgColor: 'from-amber-500/20 to-amber-600/10', span: 1 },
    { therapy: 'Nephrology', icon: '🫘', color: '#6366f1', bgColor: 'from-indigo-500/20 to-indigo-600/10', span: 2 },
    { therapy: 'Nutrition', icon: '🥗', color: '#84cc16', bgColor: 'from-lime-500/20 to-lime-600/10', span: 1 },
    { therapy: 'Pulmonology', icon: '🫁', color: '#06b6d4', bgColor: 'from-cyan-500/20 to-cyan-600/10', span: 1 },
    { therapy: 'Hepatology', icon: '🫖', color: '#a855f7', bgColor: 'from-violet-500/20 to-violet-600/10', span: 2 },
    { therapy: 'Ophthalmology', icon: '👁️', color: '#0ea5e9', bgColor: 'from-sky-500/20 to-sky-600/10', span: 1 },
    { therapy: 'Gastroenterology', icon: '🔬', color: '#ec4899', bgColor: 'from-pink-500/20 to-pink-600/10', span: 2 },
    { therapy: 'Urology', icon: '💧', color: '#14b8a6', bgColor: 'from-teal-500/20 to-teal-600/10', span: 2 },
    { therapy: 'Orthopedics', icon: '🦴', color: '#f97316', bgColor: 'from-orange-500/20 to-orange-600/10', span: 1 },
    { therapy: 'Neurology', icon: '🧠', color: '#7c3aed', bgColor: 'from-purple-600/20 to-purple-700/10', span: 1 },
    { therapy: 'Oncology', icon: '🎗️', color: '#dc2626', bgColor: 'from-red-600/20 to-red-700/10', span: 1 }
  ];

  return therapies.map(t => ({
    ...t,
    items: PRODUCT_CATEGORIES.flatMap(category => generateCategoryProducts(t.therapy, category))
  }));
};

const THERAPY_DATA = generateFullTherapyData();

// ─── Category Section Component with Working Horizontal Scroll ───

function CategorySection({ category, products, therapyColor, therapyName }: { category: ProductCategory; products: Product[]; therapyColor: string; therapyName: string }) {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);

  const categoryDetails: Record<ProductCategory, { icon: string; title: string; description: string }> = {
    "BOOKS & MAGAZINES": {
      icon: "📚",
      title: "Educational Books & Magazines",
      description: `Comprehensive written resources for ${therapyName} education. Includes detailed guides, clinical handbooks, and patient-friendly materials covering diagnosis, treatment options, and long-term management strategies.`
    },
    "FLIP CHART": {
      icon: "📊",
      title: "Clinical Flip Charts",
      description: `Visual teaching aids designed for ${therapyName} patient education. These easy-to-use flip charts feature clear illustrations and step-by-step guides for effective communication between healthcare providers and patients.`
    },
    "MATT (Desk Mats)": {
      icon: "🧩",
      title: "Desk Reference Mats",
      description: `Durable, wipe-clean desk mats for ${therapyName} clinical reference. Perfect for quick access to essential protocols, medication guides, and assessment tools right at your workspace.`
    },
    "POSTERS": {
      icon: "🖼️",
      title: "Educational Posters",
      description: `High-resolution, laminated posters for ${therapyName} education. Ideal for clinic walls, exam rooms, and waiting areas to enhance patient understanding and awareness.`
    },
    "Medical SCALE": {
      icon: "⚖️",
      title: "Clinical Assessment Scales",
      description: `Evidence-based assessment tools for ${therapyName} evaluation. Includes scoring systems, risk calculators, and monitoring tools for accurate patient assessment.`
    },
    "WRITE & WIPE": {
      icon: "✏️",
      title: "Write & Wipe Tools",
      description: `Reusable dry-erase surfaces for ${therapyName} care planning. Perfect for interactive patient education, treatment tracking, and care coordination.`
    },
    "Tear off Pads": {
      icon: "📋",
      title: "Tear-Off Pads",
      description: `Convenient tear-off pads for ${therapyName} patient take-home information. Includes prescription pads, instruction sheets, and clinical notes for patient reference.`
    }
  };

  const details = categoryDetails[category];

  const checkScroll = () => {
    const container = scrollContainerRef.current;
    if (container) {
      const scrollLeft = container.scrollLeft;
      const maxScroll = container.scrollWidth - container.clientWidth;
      setShowLeftArrow(scrollLeft > 10);
      setShowRightArrow(scrollLeft < maxScroll - 10);
    }
  };

  const scroll = (direction: 'left' | 'right') => {
    const container = scrollContainerRef.current;
    if (container) {
      const scrollAmount = 340;
      const newScrollLeft = direction === 'left' 
        ? container.scrollLeft - scrollAmount 
        : container.scrollLeft + scrollAmount;
      container.scrollTo({
        left: newScrollLeft,
        behavior: 'smooth'
      });
    }
  };

  // Handle wheel event for horizontal scrolling
  const handleWheel = (e: React.WheelEvent) => {
    const container = scrollContainerRef.current;
    if (container && Math.abs(e.deltaY) > 0) {
      e.preventDefault();
      container.scrollLeft += e.deltaY;
    }
  };

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (container) {
      // Initial check
      setTimeout(checkScroll, 100);
      
      // Add event listeners
      container.addEventListener('scroll', checkScroll);
      window.addEventListener('resize', checkScroll);
      
      return () => {
        container.removeEventListener('scroll', checkScroll);
        window.removeEventListener('resize', checkScroll);
      };
    }
  }, [products]);

  return (
    <div className="mb-12 last:mb-0 scroll-mt-20" id={`category-${category}`}>
      {/* Category Header with Icon and Title */}
      <div className="mb-4">
        <div className="flex items-center gap-2 mb-2">
          <span className="text-3xl">{details.icon}</span>
          <h3 className="text-xl font-bold" style={{ color: therapyColor }}>
            {details.title}
          </h3>
        </div>
        {/* Category Description */}
        <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed max-w-4xl">
          {details.description}
        </p>
        <div className="flex items-center gap-2 mt-2">
          <div className="h-px flex-1 bg-gradient-to-r" style={{ background: `linear-gradient(90deg, ${therapyColor}40, transparent)` }} />
          <span className="text-xs font-medium px-2 py-0.5 rounded-full" style={{ color: therapyColor, backgroundColor: `${therapyColor}10` }}>
            {products.length} Products Available
          </span>
        </div>
      </div>

      {/* Horizontal Scrollable Products */}
      <div className="relative group mt-4">
        {/* Left Arrow */}
        {showLeftArrow && (
          <button
            onClick={() => scroll('left')}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-white dark:bg-neutral-800 shadow-xl border border-neutral-200 dark:border-neutral-700 flex items-center justify-center hover:scale-110 transition-all duration-200 -ml-2 opacity-0 group-hover:opacity-100"
            style={{ boxShadow: `0 0 15px ${therapyColor}30` }}
            aria-label="Scroll left"
          >
            <ChevronLeft className="w-5 h-5" style={{ color: therapyColor }} />
          </button>
        )}

        {/* Products Container - Horizontal Scroll */}
        <div
          ref={scrollContainerRef}
          className="flex gap-5 overflow-x-auto pb-4 cursor-grab active:cursor-grabbing"
          style={{ 
            scrollbarWidth: 'thin',
            scrollbarColor: `${therapyColor} #e5e5e5`,
            WebkitOverflowScrolling: 'touch'
          }}
          onWheel={handleWheel}
        >
          {products.map((item, idx) => (
            <div
              key={idx}
              className="flex-shrink-0 w-[280px] sm:w-[320px] bg-white dark:bg-neutral-800/50 border border-neutral-100 dark:border-neutral-700/50 rounded-xl overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-gradient-to-br from-neutral-100 to-neutral-200 dark:from-neutral-800 dark:to-neutral-700">
                <Image
                  src={item.img}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  sizes="320px"
                />
                <div className="absolute top-3 left-3">
                  <span className="text-[10px] font-semibold bg-black/60 backdrop-blur-sm rounded-full px-2.5 py-1 text-white uppercase tracking-wider">
                    {category.split(' ')[0]}
                  </span>
                </div>
              </div>
              <div className="p-4">
                <h4 className="font-semibold text-neutral-900 dark:text-white text-sm leading-tight mb-1 line-clamp-2">
                  {item.title}
                </h4>
                <p className="text-xs text-neutral-500 dark:text-neutral-400 line-clamp-2 mb-3">
                  {item.desc}
                </p>
                <div className="flex items-center justify-between">
                  <button className="text-xs font-semibold transition-colors flex items-center gap-1 group" style={{ color: therapyColor }}>
                    View Details
                    <ArrowUpRight className="w-3 h-3 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </button>
                  <span className="text-[10px] text-neutral-400">Item {idx + 1}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Right Arrow */}
        {showRightArrow && (
          <button
            onClick={() => scroll('right')}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-white dark:bg-neutral-800 shadow-xl border border-neutral-200 dark:border-neutral-700 flex items-center justify-center hover:scale-110 transition-all duration-200 -mr-2 opacity-0 group-hover:opacity-100"
            style={{ boxShadow: `0 0 15px ${therapyColor}30` }}
            aria-label="Scroll right"
          >
            <ChevronRight className="w-5 h-5" style={{ color: therapyColor }} />
          </button>
        )}
      </div>

      {/* Scroll Indicator Dots */}
      <div className="flex justify-center gap-1.5 mt-3">
        {products.map((_, idx) => (
          <button
            key={idx}
            onClick={() => {
              const container = scrollContainerRef.current;
              if (container) {
                const cardWidth = 340;
                container.scrollTo({
                  left: idx * cardWidth,
                  behavior: 'smooth'
                });
              }
            }}
            className="h-1 rounded-full transition-all duration-300 hover:scale-125"
            style={{
              width: '16px',
              backgroundColor: `${therapyColor}40`,
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = therapyColor;
              e.currentTarget.style.width = '24px';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = `${therapyColor}40`;
              e.currentTarget.style.width = '16px';
            }}
          />
        ))}
      </div>
    </div>
  );
}

// ─── Modal Component ─────────────────────────────────────────────────────────

function Modal({ therapy, onClose }: { therapy: Therapy; onClose: () => void }) {
  const [isVisible, setIsVisible] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const modalContentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === 'Escape') handleClose(); };
    document.addEventListener('keydown', handler);
    return () => document.removeEventListener('keydown', handler);
  }, []);

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = ''; };
  }, []);

  useEffect(() => {
    requestAnimationFrame(() => setIsVisible(true));
    setTimeout(() => setIsLoaded(true), 100);
  }, []);

  const handleClose = () => {
    setIsVisible(false);
    setTimeout(onClose, 300);
  };

  // Group items by category
  const groupedItems = therapy.items.reduce((acc, item) => {
    if (!acc[item.category]) {
      acc[item.category] = [];
    }
    acc[item.category].push(item);
    return acc;
  }, {} as Record<ProductCategory, Product[]>);

  const categoryOrder: ProductCategory[] = [
    "BOOKS & MAGAZINES",
    "FLIP CHART",
    "MATT (Desk Mats)",
    "POSTERS",
    "Medical SCALE",
    "WRITE & WIPE",
    "Tear off Pads"
  ];

  const visibleCategories = categoryOrder.filter(cat => groupedItems[cat]?.length > 0);
  const totalProducts = therapy.items.length;

  const getTherapyDescription = (therapyName: string) => {
    const descriptions: Record<string, string> = {
      'Cardiac Care': 'Comprehensive tools for cardiovascular education, including ACS management, risk assessment scales, and stroke evaluation resources.',
      'Diabetic Care': 'Educational materials covering Type 2 Diabetes risk factors, management strategies, and interactive learning tools.',
      'Pediatric': 'Child-friendly educational resources including vision assessment, dental education, and anatomical displays.',
      'General Wellness': 'Holistic health education tools covering lifestyle management, PCOS awareness, and preventive care.',
      'Dermatology': 'Visual aids and educational materials for skin health, facial anatomy, and related conditions.',
      'Nephrology': 'Kidney health education tools including urinary system anatomy and bladder health guides.',
      'Nutrition': 'Dietary and lifestyle education resources for metabolic health and diabetes management.',
      'Pulmonology': 'Respiratory health education materials including cardiovascular connections.',
      'Hepatology': 'Liver and digestive health education tools including GERD assessment.',
      'Ophthalmology': 'Vision care education materials including assessment charts and hearing health resources.',
      'Gastroenterology': 'Digestive health education tools covering GERD and metabolic conditions.',
      'Urology': 'Urinary system education materials with lifestyle guides and bladder health resources.',
      'Orthopedics': 'Musculoskeletal education tools for osteoarthritis and osteoporosis management.',
      'Neurology': 'Neurological health education covering epilepsy, stroke assessment, and emergency guides.',
      'Oncology': 'Cancer awareness resources focusing on early detection and patient support.',
    };
    return descriptions[therapyName] || `Specialized medical education tools for healthcare professionals. Complete portfolio of 21 products across 7 categories.`;
  };

  const scrollToCategory = (category: ProductCategory) => {
    const element = document.getElementById(`category-${category}`);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const categoryNavIcons: Record<ProductCategory, string> = {
    "BOOKS & MAGAZINES": "📚",
    "FLIP CHART": "📊",
    "MATT (Desk Mats)": "🧩",
    "POSTERS": "🖼️",
    "Medical SCALE": "⚖️",
    "WRITE & WIPE": "✏️",
    "Tear off Pads": "📋"
  };

  return (
    <div className={`fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 md:p-6 transition-all duration-300 ${isVisible ? 'bg-black/80 backdrop-blur-md' : 'bg-black/0 backdrop-blur-none'}`} onClick={handleClose}>
      <div className={`relative bg-white dark:bg-neutral-900 rounded-2xl sm:rounded-3xl w-full max-w-6xl max-h-[94vh] overflow-hidden shadow-[0_25px_50px_-12px_rgba(0,0,0,0.4)] transition-all duration-300 ${isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-8 scale-95'}`} onClick={(e) => e.stopPropagation()}>
        
        {/* Header */}
        <div className="relative px-5 sm:px-7 pt-5 sm:pt-6 pb-4 flex-shrink-0 border-b border-neutral-100 dark:border-neutral-800">
          <div className="flex items-start justify-between gap-3">
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-2 flex-wrap">
                <span className="text-2xl sm:text-3xl">{therapy.icon}</span>
                <span className="text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full" style={{ color: therapy.color, backgroundColor: `${therapy.color}15` }}>
                  {totalProducts} Products • 7 Categories
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-neutral-900 dark:text-white tracking-tight">{therapy.therapy}</h2>
              <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed max-w-3xl">{getTherapyDescription(therapy.therapy)}</p>
            </div>
            <button onClick={handleClose} className="flex-shrink-0 w-9 h-9 rounded-full bg-neutral-100 hover:bg-neutral-200 dark:bg-neutral-800 dark:hover:bg-neutral-700 flex items-center justify-center transition-all duration-200 hover:scale-105">
              <X className="w-4 h-4 text-neutral-600 dark:text-neutral-400" />
            </button>
          </div>
        </div>

        {/* Category Quick Navigation */}
        <div className="flex-shrink-0 px-5 sm:px-7 py-3 border-b border-neutral-100 dark:border-neutral-800 bg-neutral-50/50 dark:bg-neutral-800/30">
          <div className="flex items-center gap-2 overflow-x-auto pb-1" style={{ scrollbarWidth: 'thin' }}>
            <span className="text-xs font-medium text-neutral-500 mr-1">Jump to:</span>
            {visibleCategories.map((category) => (
              <button
                key={category}
                onClick={() => scrollToCategory(category)}
                className="flex-shrink-0 flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-200 hover:scale-105"
                style={{ 
                  backgroundColor: `${therapy.color}10`,
                  color: therapy.color,
                  border: `1px solid ${therapy.color}20`
                }}
              >
                <span>{categoryNavIcons[category]}</span>
                <span>{category.split(' ')[0]}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Scrollable Content */}
        <div ref={modalContentRef} className="flex-1 overflow-y-auto p-5 sm:p-7" style={{ scrollbarWidth: 'thin' }}>
          {visibleCategories.map((category) => (
            <CategorySection 
              key={category}
              category={category} 
              products={groupedItems[category]} 
              therapyColor={therapy.color}
              therapyName={therapy.therapy}
            />
          ))}
        </div>

        {/* Footer */}
        <div className="flex-shrink-0 border-t border-neutral-100 dark:border-neutral-800 p-4 bg-neutral-50/50 dark:bg-neutral-800/30">
          <div className="flex flex-wrap items-center justify-between gap-3 text-xs">
            <div className="flex items-center gap-4">
              <span className="text-neutral-500">Categories:</span>
              <div className="flex gap-3">
                {visibleCategories.map(cat => (
                  <span key={cat} className="flex items-center gap-1">
                    <span>{categoryNavIcons[cat]}</span>
                    <span className="text-neutral-400">{groupedItems[cat]?.length || 0}</span>
                  </span>
                ))}
              </div>
            </div>
            <div className="flex gap-2">
              <button className="px-4 py-1.5 border border-neutral-300 dark:border-neutral-700 hover:border-[#0093cb] text-neutral-700 dark:text-neutral-300 rounded-lg text-xs font-medium transition-colors">
                Request Sample
              </button>
              <button className="px-4 py-1.5 bg-[#0093cb] hover:bg-[#007aad] text-white rounded-lg text-xs font-medium transition-colors">
                Download Catalog
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── Collage Card Component ─────────────────────────────────────────────────

function CollageCard({ therapy, onClick }: { therapy: Therapy; onClick: () => void }) {
  return (
    <article
      className={`group relative rounded-2xl overflow-hidden cursor-pointer border border-white/20 transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl h-full min-h-[200px] sm:min-h-[220px] lg:min-h-[240px] ${
        therapy.span === 2 ? 'col-span-2' : 'col-span-1'
      }`}
      onClick={onClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') onClick(); }}
    >
      <Image 
        src={therapy.items[0]?.img || "https://placehold.co/800x600/0093cb/white?text=Therapy"} 
        alt={therapy.therapy} 
        fill
        className="object-cover transition-all duration-700 group-hover:scale-110"
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 20vw" 
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-black/20" />
      <div className="absolute inset-0 p-4 sm:p-5 flex flex-col justify-between">
        <div className="flex justify-end">
          <div className="w-9 h-9 rounded-full bg-white/15 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:scale-110">
            <ArrowUpRight className="w-4 h-4 text-white" />
          </div>
        </div>
        <div>
          <span className="text-2xl sm:text-3xl drop-shadow-lg block mb-2">{therapy.icon}</span>
          <h3 className="text-white text-base sm:text-lg font-bold leading-tight drop-shadow-lg">{therapy.therapy}</h3>
          <p className="text-white/80 text-xs mt-1.5 flex items-center gap-2">
            <span>{therapy.items.length} Products</span>
            <span className="w-1 h-1 rounded-full bg-white/50"></span>
            <span>7 Categories</span>
          </p>
        </div>
      </div>
    </article>
  );
}

// ─── Main Component ─────────────────────────────────────────────────────────

export default function TherapyCollageGrid() {
  const [selected, setSelected] = useState<Therapy | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => { setIsLoaded(true); }, []);

  const totalProducts = THERAPY_DATA.reduce((sum, t) => sum + t.items.length, 0);

  return (
    <>
      <section className="py-16 sm:py-24 px-4 sm:px-6 bg-gradient-to-br from-slate-50 via-white to-slate-50">
        <div className="relative max-w-[1600px] mx-auto">
          {/* Header */}
          <div className="text-left mb-12 lg:mb-16">
            <div className={`flex items-center gap-3 mb-4 transition-all duration-700 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
              <span className="w-12 h-0.5 bg-gradient-to-r from-[#0093cb] to-[#00a65d]" />
              <span className="text-xs font-black uppercase tracking-[0.3em] text-[#0093cb]">Therapy Areas</span>
            </div>
            <h1 className={`text-4xl sm:text-5xl lg:text-6xl font-black tracking-tighter text-[#0f172a] mb-4 transition-all duration-700 delay-100 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
              Premium <span className="bg-gradient-to-r from-[#0093cb] to-[#00a65d] bg-clip-text text-transparent">Therapy Portfolio</span>
            </h1>
            <p className={`text-neutral-600 max-w-2xl text-base sm:text-lg transition-all duration-700 delay-200 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
              Specialized medical education tools across 15+ therapeutic areas, featuring 7 product categories and {totalProducts}+ premium products.
            </p>
          </div>

          {/* Collage Grid */}
          <div className={`transition-all duration-700 delay-300 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            
            {/* Mobile: 2 cols */}
            <div className="grid grid-cols-2 gap-3 sm:hidden">
              {THERAPY_DATA.map((therapy) => (
                <CollageCard key={therapy.therapy} therapy={{...therapy, span: 1}} onClick={() => setSelected(therapy)} />
              ))}
            </div>

            {/* Tablet: 3 cols */}
            <div className="hidden sm:grid lg:hidden grid-cols-3 gap-3 auto-rows-[200px]">
              {THERAPY_DATA.map((therapy) => (
                <CollageCard 
                  key={therapy.therapy} 
                  therapy={therapy.span === 2 ? {...therapy, span: 2} : {...therapy, span: 1}} 
                  onClick={() => setSelected(therapy)} 
                />
              ))}
            </div>

            {/* Desktop: 5 cols */}
            <div className="hidden lg:grid grid-cols-5 gap-3 auto-rows-[240px]">
              {THERAPY_DATA.map((therapy) => (
                <CollageCard key={therapy.therapy} therapy={therapy} onClick={() => setSelected(therapy)} />
              ))}
            </div>
          </div>

          {/* Stats Bar */}
          <div className="mt-16 pt-8 border-t border-neutral-200/60">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
              <div>
                <div className="text-3xl sm:text-4xl font-black bg-gradient-to-r from-[#0093cb] to-[#00a65d] bg-clip-text text-transparent">{THERAPY_DATA.length}</div>
                <div className="text-xs text-neutral-500 uppercase tracking-wider mt-1">Therapy Areas</div>
              </div>
              <div>
                <div className="text-3xl sm:text-4xl font-black bg-gradient-to-r from-[#0093cb] to-[#00a65d] bg-clip-text text-transparent">{PRODUCT_CATEGORIES.length}</div>
                <div className="text-xs text-neutral-500 uppercase tracking-wider mt-1">Product Categories</div>
              </div>
              <div>
                <div className="text-3xl sm:text-4xl font-black bg-gradient-to-r from-[#0093cb] to-[#00a65d] bg-clip-text text-transparent">{totalProducts}</div>
                <div className="text-xs text-neutral-500 uppercase tracking-wider mt-1">Total Products</div>
              </div>
              <div>
                <div className="text-3xl sm:text-4xl font-black bg-gradient-to-r from-[#0093cb] to-[#00a65d] bg-clip-text text-transparent">21</div>
                <div className="text-xs text-neutral-500 uppercase tracking-wider mt-1">Per Therapy Area</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {selected && <Modal therapy={selected} onClose={() => setSelected(null)} />}
    </>
  );
}