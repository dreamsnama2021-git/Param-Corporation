'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { ArrowUpRight, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { createPortal } from 'react-dom';

// ─── Types (MUST be defined before use) ───
const PRODUCT_CATEGORIES = [
  "BOOKS & MAGAZINES",
  "FLIP CHART",
  "MATT (Desk Mats)",
  "POSTERS",
  "Medical SCALE",
  "WRITE & WIPE",
  "Tear off Pads",
  "TABLE TOPS & SCIENTIFIC INPUTS"
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

// ─── Unsplash Image URLs for Therapies ───
const THERAPY_IMAGES: Record<string, string[]> = {
  'Diabetes': [
    'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&q=80',
    'https://images.unsplash.com/photo-1585435557343-3b092031a831?w=800&q=80',
    'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&q=80',
  ],
  'Cardio-Vascular': [
    'https://images.unsplash.com/photo-1559757175-5700dde675bc?w=800&q=80',
    'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&q=80',
    'https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=800&q=80',
  ],
  'ENT & Respiratory': [
    'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=800&q=80',
    'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&q=80',
    'https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?w=800&q=80',
  ],
  'Orthopedics/Rheumatology': [
    'https://images.unsplash.com/photo-1581595220892-b0739db3ba8c?w=800&q=80',
    'https://images.unsplash.com/photo-1580518337843-f959e992563b?w=800&q=80',
    'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&q=80',
  ],
  'Gynaecology and Obstetrics': [
    'https://images.unsplash.com/photo-1519823551278-64ac92734fb1?w=800&q=80',
    'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&q=80',
    'https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?w=800&q=80',
  ],
  'Gastroenterology': [
    'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&q=80',
    'https://images.unsplash.com/photo-1585435557343-3b092031a831?w=800&q=80',
    'https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=800&q=80',
  ],
  'Ophthalmology': [
    'https://images.unsplash.com/photo-1584017911766-d451b3d0e843?w=800&q=80',
    'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&q=80',
    'https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?w=800&q=80',
  ],
  'Dermatology': [
    'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&q=80',
    'https://images.unsplash.com/photo-1585435557343-3b092031a831?w=800&q=80',
    'https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?w=800&q=80',
  ],
  'Pediatrics': [
    'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=800&q=80',
    'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&q=80',
    'https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?w=800&q=80',
  ],
  'Urology': [
    'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&q=80',
    'https://images.unsplash.com/photo-1585435557343-3b092031a831?w=800&q=80',
    'https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=800&q=80',
  ],
  'Neurology': [
    'https://images.unsplash.com/photo-1559757175-5700dde675bc?w=800&q=80',
    'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&q=80',
    'https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?w=800&q=80',
  ],
  'Psychiatry': [
    'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&q=80',
    'https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?w=800&q=80',
    'https://images.unsplash.com/photo-1493836512293-7c2c1370e297?w=800&q=80',
  ],
  'Dentistry': [
    'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=800&q=80',
    'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&q=80',
    'https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?w=800&q=80',
  ],
  'Infectious Diseases': [
    'https://images.unsplash.com/photo-1584036561566-baf8f5f1b144?w=800&q=80',
    'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&q=80',
    'https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?w=800&q=80',
  ],
  'Nutritional Deficiencies': [
    'https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=800&q=80',
    'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&q=80',
    'https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?w=800&q=80',
  ],
  'Endocrinology': [
    'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&q=80',
    'https://images.unsplash.com/photo-1585435557343-3b092031a831?w=800&q=80',
    'https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=800&q=80',
  ],
  'Nephrology': [
    'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&q=80',
    'https://images.unsplash.com/photo-1585435557343-3b092031a831?w=800&q=80',
    'https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?w=800&q=80',
  ],
  'Hepatology': [
    'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&q=80',
    'https://images.unsplash.com/photo-1585435557343-3b092031a831?w=800&q=80',
    'https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=800&q=80',
  ],
  'Oncology': [
    'https://images.unsplash.com/photo-1579154204601-01588f351e67?w=800&q=80',
    'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&q=80',
    'https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?w=800&q=80',
  ],
  'General Wellness': [
    'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800&q=80',
    'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&q=80',
    'https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?w=800&q=80',
  ],
};

// ─── Rest of the component remains the same ───
const CATEGORY_IMAGES: Record<ProductCategory, string[]> = {
  "BOOKS & MAGAZINES": [
    'https://images.unsplash.com/photo-1512820790803-83ca734da794?w=600&q=80',
    'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=600&q=80',
    'https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=600&q=80',
  ],
  "FLIP CHART": [
    'https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&q=80',
    'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=600&q=80',
    'https://images.unsplash.com/photo-1552581234-26160f608093?w=600&q=80',
  ],
  "MATT (Desk Mats)": [
    'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&q=80',
    'https://images.unsplash.com/photo-1593062096033-9a26b09da705?w=600&q=80',
    'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&q=80',
  ],
  "POSTERS": [
    'https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=600&q=80',
    'https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=600&q=80',
    'https://images.unsplash.com/photo-1561214115-f2f134cc4912?w=600&q=80',
  ],
  "Medical SCALE": [
    'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=600&q=80',
    'https://images.unsplash.com/photo-1516549655169-df83a0774514?w=600&q=80',
    'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&q=80',
  ],
  "WRITE & WIPE": [
    'https://images.unsplash.com/photo-1509062522246-3755977927d7?w=600&q=80',
    'https://images.unsplash.com/photo-1513258496099-48168024aec0?w=600&q=80',
    'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=600&q=80',
  ],
  "Tear off Pads": [
    'https://images.unsplash.com/photo-1531346878377-a5be20888e57?w=600&q=80',
    'https://images.unsplash.com/photo-1517842645767-c639042777db?w=600&q=80',
    'https://images.unsplash.com/photo-1455390582262-044cdead277a?w=600&q=80',
  ],
  "TABLE TOPS & SCIENTIFIC INPUTS": [
    'https://images.unsplash.com/photo-1576086213369-97a306d36557?w=600&q=80',
    'https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?w=600&q=80',
    'https://images.unsplash.com/photo-1507413245164-6160d8298b31?w=600&q=80',
  ],
};

const generateCategoryProducts = (therapyName: string, category: ProductCategory): Product[] => {
  const categoryDetails: Record<ProductCategory, { icon: string; titles: string[]; descBase: string }> = {
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
    },
    "TABLE TOPS & SCIENTIFIC INPUTS": {
      icon: "🔬",
      titles: ["Interactive Table Top Display", "Scientific Input Module", "Clinical Data Station"],
      descBase: "interactive table top display with scientific inputs for clinical data analysis and patient education."
    }
  };

  const details = categoryDetails[category];
  const categoryImages = CATEGORY_IMAGES[category];

  return [0, 1, 2].map((index) => ({
    title: `${therapyName}: ${details.titles[index]}`,
    desc: `${details.descBase} ${index === 0 ? 'Ideal for healthcare professionals.' : index === 1 ? 'Enhances clinical workflow and patient understanding.' : 'Trusted by medical facilities worldwide.'}`,
    img: categoryImages[index] || 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&q=80',
    category
  }));
};

const generateFullTherapyData = (): Therapy[] => {
  const therapies = [
    { therapy: 'Diabetes', icon: '💉', color: '#3b82f6', bgColor: 'from-blue-500/20 to-blue-600/10', span: 2 },
    { therapy: 'Cardio-Vascular', icon: '❤️', color: '#ef4444', bgColor: 'from-red-500/20 to-red-600/10', span: 1 },
    { therapy: 'ENT & Respiratory', icon: '🫁', color: '#06b6d4', bgColor: 'from-cyan-500/20 to-cyan-600/10', span: 1 },
    { therapy: 'Orthopedics/Rheumatology', icon: '🦴', color: '#f97316', bgColor: 'from-orange-500/20 to-orange-600/10', span: 1 },
    { therapy: 'Gynaecology and Obstetrics', icon: '👶', color: '#ec4899', bgColor: 'from-pink-500/20 to-pink-600/10', span: 1 },
    { therapy: 'Gastroenterology', icon: '🔬', color: '#84cc16', bgColor: 'from-lime-500/20 to-lime-600/10', span: 2 },
    { therapy: 'Ophthalmology', icon: '👁️', color: '#0ea5e9', bgColor: 'from-sky-500/20 to-sky-600/10', span: 1 },
    { therapy: 'Dermatology', icon: '✨', color: '#f59e0b', bgColor: 'from-amber-500/20 to-amber-600/10', span: 1 },
    { therapy: 'Pediatrics', icon: '🧸', color: '#8b5cf6', bgColor: 'from-purple-500/20 to-purple-600/10', span: 2 },
    { therapy: 'Urology', icon: '💧', color: '#14b8a6', bgColor: 'from-teal-500/20 to-teal-600/10', span: 1 },
    { therapy: 'Neurology', icon: '🧠', color: '#7c3aed', bgColor: 'from-purple-600/20 to-purple-700/10', span: 1 },
    { therapy: 'Psychiatry', icon: '🧠', color: '#a855f7', bgColor: 'from-purple-500/20 to-purple-600/10', span: 1 },
    { therapy: 'Dentistry', icon: '🦷', color: '#6366f1', bgColor: 'from-indigo-500/20 to-indigo-600/10', span: 1 },
    { therapy: 'Infectious Diseases', icon: '🦠', color: '#dc2626', bgColor: 'from-red-600/20 to-red-700/10', span: 2 },
    { therapy: 'Nutritional Deficiencies', icon: '🥗', color: '#10b981', bgColor: 'from-emerald-500/20 to-emerald-600/10', span: 1 },
    { therapy: 'Endocrinology', icon: '⚖️', color: '#06b6d4', bgColor: 'from-cyan-600/20 to-cyan-700/10', span: 1 },
    { therapy: 'Nephrology', icon: '🫘', color: '#6366f1', bgColor: 'from-indigo-500/20 to-indigo-600/10', span: 1 },
    { therapy: 'Hepatology', icon: '🫖', color: '#a855f7', bgColor: 'from-violet-500/20 to-violet-600/10', span: 1 },
    { therapy: 'Oncology', icon: '🎗️', color: '#dc2626', bgColor: 'from-red-600/20 to-red-700/10', span: 2 },
    { therapy: 'General Wellness', icon: '🌟', color: '#10b981', bgColor: 'from-emerald-500/20 to-emerald-600/10', span: 1 }
  ];

  return therapies.map(t => ({
    ...t,
    items: PRODUCT_CATEGORIES.flatMap(category => generateCategoryProducts(t.therapy, category))
  }));
};

const THERAPY_DATA = generateFullTherapyData();

function CategorySection({ category, products, therapyColor, therapyName }: { category: ProductCategory; products: Product[]; therapyColor: string; therapyName: string }) {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);

  const categoryDetails: Record<ProductCategory, { icon: string; title: string; description: string }> = {
    "BOOKS & MAGAZINES": {
      icon: "📚",
      title: "BOOKS & MAGAZINES",
      description: `Comprehensive written resources for ${therapyName} education.`
    },
    "FLIP CHART": {
      icon: "📊",
      title: "Clinical Flip Charts",
      description: `Visual teaching aids designed for ${therapyName} patient education.`
    },
    "MATT (Desk Mats)": {
      icon: "🧩",
      title: "Desk Reference Mats",
      description: `Durable, wipe-clean desk mats for ${therapyName} clinical reference.`
    },
    "POSTERS": {
      icon: "🖼️",
      title: "Educational Posters",
      description: `High-resolution, laminated posters for ${therapyName} education.`
    },
    "Medical SCALE": {
      icon: "⚖️",
      title: "Clinical Assessment Scales",
      description: `Evidence-based assessment tools for ${therapyName} evaluation.`
    },
    "WRITE & WIPE": {
      icon: "✏️",
      title: "Write & Wipe Tools",
      description: `Reusable dry-erase surfaces for ${therapyName} care planning.`
    },
    "Tear off Pads": {
      icon: "📋",
      title: "Tear-Off Pads",
      description: `Convenient tear-off pads for ${therapyName} patient take-home information.`
    },
    "TABLE TOPS & SCIENTIFIC INPUTS": {
      icon: "🔬",
      title: "Table Tops & Scientific Inputs",
      description: `Interactive table top displays and scientific input modules for ${therapyName}.`
    }
  };

  const details = categoryDetails[category];

  const checkScroll = () => {
    const container = scrollContainerRef.current;
    if (container) {
      setShowLeftArrow(container.scrollLeft > 10);
      setShowRightArrow(container.scrollLeft < container.scrollWidth - container.clientWidth - 10);
    }
  };

  const scroll = (direction: 'left' | 'right') => {
    const container = scrollContainerRef.current;
    if (container) {
      container.scrollBy({ left: direction === 'left' ? -340 : 340, behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (container) {
      checkScroll();
      container.addEventListener('scroll', checkScroll);
      window.addEventListener('resize', checkScroll);
      return () => {
        container.removeEventListener('scroll', checkScroll);
        window.removeEventListener('resize', checkScroll);
      };
    }
  }, [products]);

  return (
    <div className="mb-8 sm:mb-10 md:mb-12 last:mb-0">
      <div className="mb-3 sm:mb-4">
        <div className="flex items-center gap-1.5 sm:gap-2 mb-1.5 sm:mb-2">
          <span className="text-2xl sm:text-3xl">{details.icon}</span>
          <h3 className="text-lg sm:text-xl font-bold" style={{ color: therapyColor }}>
            {details.title}
          </h3>
        </div>
        <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed max-w-4xl">{details.description}</p>
      </div>

      <div className="relative group mt-3 sm:mt-4">
        {showLeftArrow && (
          <button onClick={() => scroll('left')}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-20 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white shadow-xl border flex items-center justify-center hover:scale-110 transition-all -ml-1 sm:-ml-2 opacity-0 group-hover:opacity-100">
            <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" style={{ color: therapyColor }} />
          </button>
        )}

        <div ref={scrollContainerRef} className="flex gap-3 sm:gap-4 md:gap-5 overflow-x-auto pb-3 sm:pb-4"
          style={{ scrollbarWidth: 'thin', scrollbarColor: `${therapyColor} #e5e5e5` }}>
          {products.map((item, idx) => (
            <div key={idx} className="flex-shrink-0 w-[240px] sm:w-[280px] md:w-[300px] lg:w-[320px] bg-white rounded-lg sm:rounded-xl overflow-hidden hover:shadow-lg sm:hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image src={item.img} alt={item.title} fill className="object-cover" sizes="(max-width: 640px) 240px, (max-width: 768px) 280px, 320px" unoptimized />
              </div>
            </div>
          ))}
        </div>

        {showRightArrow && (
          <button onClick={() => scroll('right')}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-20 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white shadow-xl border flex items-center justify-center hover:scale-110 transition-all -mr-1 sm:-mr-2 opacity-0 group-hover:opacity-100">
            <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" style={{ color: therapyColor }} />
          </button>
        )}
      </div>
    </div>
  );
}

function Modal({ therapy, onClose }: { therapy: Therapy; onClose: () => void }) {
  const [isVisible, setIsVisible] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    document.body.style.overflow = 'hidden';
    requestAnimationFrame(() => setIsVisible(true));
    
    const handler = (e: KeyboardEvent) => { if (e.key === 'Escape') handleClose(); };
    document.addEventListener('keydown', handler);
    
    return () => {
      document.body.style.overflow = '';
      document.removeEventListener('keydown', handler);
    };
  }, []);

  const handleClose = () => {
    setIsVisible(false);
    setTimeout(onClose, 300);
  };

  const groupedItems = therapy.items.reduce((acc, item) => {
    if (!acc[item.category]) acc[item.category] = [];
    acc[item.category].push(item);
    return acc;
  }, {} as Record<ProductCategory, Product[]>);

  const modalContent = (
    <div 
      style={{ 
        position: 'fixed',
        inset: 0,
        zIndex: 99999,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '0.75rem',
        backgroundColor: isVisible ? 'rgba(0,0,0,0.8)' : 'rgba(0,0,0,0)',
        backdropFilter: isVisible ? 'blur(12px)' : 'none',
        transition: 'all 0.3s ease'
      }}
      onClick={handleClose}
    >
      <div 
        style={{
          position: 'relative',
          backgroundColor: 'white',
          borderRadius: '1.25rem',
          width: '100%',
          maxWidth: '72rem',
          maxHeight: '90vh',
          overflow: 'hidden',
          display: 'flex',
          flexDirection: 'column',
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? 'translateY(0) scale(1)' : 'translateY(2rem) scale(0.95)',
          transition: 'all 0.3s ease',
          boxShadow: '0 25px 50px -12px rgba(0,0,0,0.4)'
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="px-4 sm:px-5 md:px-7 pt-4 sm:pt-5 pb-3 sm:pb-4 border-b bg-white flex-shrink-0">
          <div className="flex items-start justify-between gap-2 sm:gap-3">
            <div className="flex items-center gap-1.5 sm:gap-2">
              <span className="text-xl sm:text-2xl md:text-3xl">{therapy.icon}</span>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-neutral-900">
                {therapy.therapy}
              </h2>
            </div>
            <button onClick={handleClose} 
              className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-neutral-100 hover:bg-neutral-200 flex items-center justify-center transition-all">
              <X className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-neutral-600" />
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-5 md:p-7">
          {PRODUCT_CATEGORIES.map((category) => {
            const products = groupedItems[category];
            if (!products || products.length === 0) return null;
            return (
              <CategorySection 
                key={category}
                category={category} 
                products={products} 
                therapyColor={therapy.color}
                therapyName={therapy.therapy}
              />
            );
          })}
        </div>
      </div>
    </div>
  );

  if (!mounted) return null;
  return createPortal(modalContent, document.body);
}

function CollageCard({ therapy, onClick }: { therapy: Therapy; onClick: () => void }) {
  const therapyImages = THERAPY_IMAGES[therapy.therapy] || THERAPY_IMAGES['General Wellness'];
  const cardImage = therapyImages[0];

  return (
    <article
      className={`group relative rounded-xl sm:rounded-2xl overflow-hidden cursor-pointer transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl h-full min-h-[180px] sm:min-h-[200px] md:min-h-[220px] lg:min-h-[240px] ${
        therapy.span === 2 ? 'col-span-2' : 'col-span-1'
      }`}
      onClick={onClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') onClick(); }}
    >
      <Image 
        src={cardImage}
        alt={therapy.therapy} 
        fill
        className="object-cover transition-all duration-700 group-hover:scale-110"
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 20vw"
        unoptimized
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-black/20" />
      <div className="absolute inset-0 p-3 sm:p-4 md:p-5 flex flex-col justify-between">
        <div className="flex justify-end">
          <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white/15 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:scale-110">
            <ArrowUpRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white" />
          </div>
        </div>
        <div>
          <span className="text-xl sm:text-2xl md:text-3xl drop-shadow-lg block mb-1.5 sm:mb-2">{therapy.icon}</span>
          <h3 className="text-white text-xs sm:text-sm md:text-base lg:text-lg font-bold leading-tight drop-shadow-lg">{therapy.therapy}</h3>
        </div>
      </div>
    </article>
  );
}

const THERAPY_SLUG_MAP: Record<string, string> = {
  'cardiac-care': 'Cardio-Vascular',
  'diabetic-care': 'Diabetes',
  'pediatric': 'Pediatrics',
  'general-wellness': 'General Wellness',
  'dermatology': 'Dermatology',
  'nephrology': 'Nephrology',
  'nutrition': 'Nutritional Deficiencies',
  'pulmonology': 'ENT & Respiratory',
  'hepatology': 'Hepatology',
  'ophthalmology': 'Ophthalmology',
  'gastroenterology': 'Gastroenterology',
  'urology': 'Urology',
  'orthopedics': 'Orthopedics/Rheumatology',
  'neurology': 'Neurology',
  'oncology': 'Oncology',
};

export default function TherapyCollageGrid({ 
  initialSelectedTherapy 
}: { 
  initialSelectedTherapy?: string | null 
}) {
  const [selected, setSelected] = useState<Therapy | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  const createSlug = (name: string) => {
    return name
      .toLowerCase()
      .replace(/[&]/g, 'and')
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-+|-+$/g, '');
  };

  useEffect(() => { 
    setIsLoaded(true); 
  }, []);

  useEffect(() => {
    if (initialSelectedTherapy) {
      const mappedName = THERAPY_SLUG_MAP[initialSelectedTherapy];
      const therapy = THERAPY_DATA.find(
        t => t.therapy === mappedName || createSlug(t.therapy) === initialSelectedTherapy
      );
      if (therapy) {
        setSelected(therapy);
      }
    }
  }, [initialSelectedTherapy]);

  return (
    <>
      <section className="py-12 sm:py-16 md:py-18 lg:py-20 xl:py-24 px-4 sm:px-6 bg-gradient-to-br from-slate-50 via-white to-slate-50">
        <div className="relative max-w-[1600px] mx-auto">
          <div className="text-left mb-8 sm:mb-10 md:mb-12 lg:mb-14 xl:mb-16">
            <div className={`flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4 transition-all duration-700 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
              <span className="w-10 sm:w-12 h-0.5 bg-gradient-to-r from-[#0093cb] to-[#00a65d]" />
              <span className="text-[10px] sm:text-xs font-black uppercase tracking-[0.3em] text-[#0093cb]">Therapy Areas</span>
            </div>
            <h1 className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter text-[#0f172a] mb-3 sm:mb-4 transition-all duration-700 delay-100 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
              Premium <span className="bg-gradient-to-r from-[#0093cb] to-[#00a65d] bg-clip-text text-transparent">Therapy Portfolio</span>
            </h1>
            <p className={`text-neutral-600 max-w-2xl text-sm sm:text-base md:text-lg transition-all duration-700 delay-200 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
              Specialized medical education tools across 20+ therapeutic areas, featuring 8 product categories including Table Tops & Scientific Inputs.
            </p>
          </div>

          <div className={`transition-all duration-700 delay-300 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            {/* Mobile: 2 columns */}
            <div className="grid grid-cols-2 gap-2 sm:gap-3 sm:hidden">
              {THERAPY_DATA.map((therapy) => (
                <CollageCard key={therapy.therapy} therapy={{...therapy, span: 1}} onClick={() => setSelected(therapy)} />
              ))}
            </div>

            {/* Tablet: 3 columns */}
            <div className="hidden sm:grid lg:hidden grid-cols-3 gap-2 sm:gap-3 auto-rows-[180px] sm:auto-rows-[200px]">
              {THERAPY_DATA.map((therapy) => (
                <CollageCard key={therapy.therapy} therapy={therapy.span === 2 ? {...therapy, span: 2} : {...therapy, span: 1}} onClick={() => setSelected(therapy)} />
              ))}
            </div>

            {/* Desktop: 5 columns */}
            <div className="hidden lg:grid grid-cols-5 gap-2 sm:gap-3 auto-rows-[220px] xl:auto-rows-[240px]">
              {THERAPY_DATA.map((therapy) => (
                <CollageCard key={therapy.therapy} therapy={therapy} onClick={() => setSelected(therapy)} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {selected && <Modal therapy={selected} onClose={() => setSelected(null)} />}
    </>
  );
}