'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { ArrowUpRight, X, ChevronLeft, ChevronRight } from 'lucide-react';

// ─── Unsplash Image URLs for Therapies ───

const THERAPY_IMAGES: Record<string, string[]> = {
  'Diabetes': [
    'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&q=80', // Blood glucose test
    'https://images.unsplash.com/photo-1585435557343-3b092031a831?w=800&q=80', // Medical devices
    'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&q=80', // Health monitoring
  ],
  'Cardio-Vascular': [
    'https://images.unsplash.com/photo-1559757175-5700dde675bc?w=800&q=80', // Heart health
    'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&q=80', // Medical check
    'https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=800&q=80', // Cardiology
  ],
  'ENT & Respiratory': [
    'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=800&q=80', // Respiratory
    'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&q=80', // Medical
    'https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?w=800&q=80', // Healthcare
  ],
  'Orthopedics/Rheumatology': [
    'https://images.unsplash.com/photo-1581595220892-b0739db3ba8c?w=800&q=80', // Orthopedic
    'https://images.unsplash.com/photo-1580518337843-f959e992563b?w=800&q=80', // Bone health
    'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&q=80', // Medical
  ],
  'Gynaecology and Obstetrics': [
    'https://images.unsplash.com/photo-1519823551278-64ac92734fb1?w=800&q=80', // Pregnancy
    'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&q=80', // Medical
    'https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?w=800&q=80', // Healthcare
  ],
  'Gastroenterology': [
    'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&q=80', // Medical
    'https://images.unsplash.com/photo-1585435557343-3b092031a831?w=800&q=80', // Health
    'https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=800&q=80', // Science
  ],
  'Ophthalmology': [
    'https://images.unsplash.com/photo-1584017911766-d451b3d0e843?w=800&q=80', // Eye care
    'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&q=80', // Medical
    'https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?w=800&q=80', // Healthcare
  ],
  'Dermatology': [
    'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&q=80', // Medical
    'https://images.unsplash.com/photo-1585435557343-3b092031a831?w=800&q=80', // Health
    'https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?w=800&q=80', // Skin care
  ],
  'Pediatrics': [
    'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=800&q=80', // Children health
    'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&q=80', // Medical
    'https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?w=800&q=80', // Healthcare
  ],
  'Urology': [
    'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&q=80', // Medical
    'https://images.unsplash.com/photo-1585435557343-3b092031a831?w=800&q=80', // Health
    'https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=800&q=80', // Science
  ],
  'Neurology': [
    'https://images.unsplash.com/photo-1559757175-5700dde675bc?w=800&q=80', // Brain health
    'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&q=80', // Medical
    'https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?w=800&q=80', // Healthcare
  ],
  'Psychiatry': [
    'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&q=80', // Medical
    'https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?w=800&q=80', // Healthcare
    'https://images.unsplash.com/photo-1493836512293-7c2c1370e297?w=800&q=80', // Mental health
  ],
  'Dentistry': [
    'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=800&q=80', // Dental
    'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&q=80', // Medical
    'https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?w=800&q=80', // Healthcare
  ],
  'Infectious Diseases': [
    'https://images.unsplash.com/photo-1584036561566-baf8f5f1b144?w=800&q=80', // Virus research
    'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&q=80', // Medical
    'https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?w=800&q=80', // Healthcare
  ],
  'Nutritional Deficiencies': [
    'https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=800&q=80', // Nutrition
    'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&q=80', // Medical
    'https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?w=800&q=80', // Healthcare
  ],
  'Endocrinology': [
    'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&q=80', // Medical
    'https://images.unsplash.com/photo-1585435557343-3b092031a831?w=800&q=80', // Health
    'https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=800&q=80', // Science
  ],
  'Nephrology': [
    'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&q=80', // Medical
    'https://images.unsplash.com/photo-1585435557343-3b092031a831?w=800&q=80', // Health
    'https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?w=800&q=80', // Healthcare
  ],
  'Hepatology': [
    'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&q=80', // Medical
    'https://images.unsplash.com/photo-1585435557343-3b092031a831?w=800&q=80', // Health
    'https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=800&q=80', // Science
  ],
  'Oncology': [
    'https://images.unsplash.com/photo-1579154204601-01588f351e67?w=800&q=80', // Cancer research
    'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&q=80', // Medical
    'https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?w=800&q=80', // Healthcare
  ],
  'General Wellness': [
    'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800&q=80', // Wellness
    'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&q=80', // Medical
    'https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?w=800&q=80', // Healthcare
  ],
};

// Category-specific product images from Unsplash
const CATEGORY_IMAGES: Record<ProductCategory, string[]> = {
  "BOOKS & MAGAZINES": [
    'https://images.unsplash.com/photo-1512820790803-83ca734da794?w=600&q=80', // Books
    'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=600&q=80', // Library
    'https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=600&q=80', // Reading
  ],
  "FLIP CHART": [
    'https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&q=80', // Presentation
    'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=600&q=80', // Meeting
    'https://images.unsplash.com/photo-1552581234-26160f608093?w=600&q=80', // Office
  ],
  "MATT (Desk Mats)": [
    'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&q=80', // Desk setup
    'https://images.unsplash.com/photo-1593062096033-9a26b09da705?w=600&q=80', // Workspace
    'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&q=80', // Computer
  ],
  "POSTERS": [
    'https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=600&q=80', // Wall art
    'https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=600&q=80', // Art display
    'https://images.unsplash.com/photo-1561214115-f2f134cc4912?w=600&q=80', // Gallery
  ],
  "Medical SCALE": [
    'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=600&q=80', // Medical equipment
    'https://images.unsplash.com/photo-1516549655169-df83a0774514?w=600&q=80', // Scale
    'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&q=80', // Medical
  ],
  "WRITE & WIPE": [
    'https://images.unsplash.com/photo-1509062522246-3755977927d7?w=600&q=80', // Whiteboard
    'https://images.unsplash.com/photo-1513258496099-48168024aec0?w=600&q=80', // Board
    'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=600&q=80', // Teaching
  ],
  "Tear off Pads": [
    'https://images.unsplash.com/photo-1531346878377-a5be20888e57?w=600&q=80', // Notepad
    'https://images.unsplash.com/photo-1517842645767-c639042777db?w=600&q=80', // Notes
    'https://images.unsplash.com/photo-1455390582262-044cdead277a?w=600&q=80', // Writing
  ],
  "TABLE TOPS & SCIENTIFIC INPUTS": [
    'https://images.unsplash.com/photo-1576086213369-97a306d36557?w=600&q=80', // Lab equipment
    'https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?w=600&q=80', // Scientific
    'https://images.unsplash.com/photo-1507413245164-6160d8298b31?w=600&q=80', // Research
  ],
};

// ─── Data (20+ therapies with 3 products per category) ───

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

// Helper to generate 3 demo products for a specific therapy and category using real images
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

// Generate all therapy data
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

// ─── Category Section Component with Horizontal Scroll ───

function CategorySection({ category, products, therapyColor, therapyName }: { category: ProductCategory; products: Product[]; therapyColor: string; therapyName: string }) {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);

  const categoryDetails: Record<ProductCategory, { icon: string; title: string; description: string }> = {
    "BOOKS & MAGAZINES": {
      icon: "📚",
      title: "BOOKS & MAGAZINES",
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
    },
    "TABLE TOPS & SCIENTIFIC INPUTS": {
      icon: "🔬",
      title: "Table Tops & Scientific Inputs",
      description: `Interactive table top displays and scientific input modules for ${therapyName}. These cutting-edge tools allow healthcare professionals to input clinical data, visualize patient metrics, and conduct real-time risk assessments. Features include touchscreen interfaces, data logging capabilities, and integration with EMR systems.`
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
      const cardWidth = 340;
      const scrollAmount = cardWidth;
      if (direction === 'left') {
        container.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
      } else {
        container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
      }
    }
  };

  const handleWheel = (e: React.WheelEvent) => {
    const container = scrollContainerRef.current;
    if (container) {
      e.preventDefault();
      container.scrollLeft += e.deltaY;
    }
  };

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (container) {
      const timer = setTimeout(checkScroll, 100);
      container.addEventListener('scroll', checkScroll);
      window.addEventListener('resize', checkScroll);
      return () => {
        clearTimeout(timer);
        container.removeEventListener('scroll', checkScroll);
        window.removeEventListener('resize', checkScroll);
      };
    }
  }, [products]);

  return (
    <div className="mb-12 last:mb-0" id={`category-${category}`}>
      <div className="mb-4">
        <div className="flex items-center gap-2 mb-2">
          <span className="text-3xl">{details.icon}</span>
          <h3 className="text-xl font-bold" style={{ color: therapyColor }}>
            {details.title}
          </h3>
        </div>
        <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed max-w-4xl">
          {details.description}
        </p>
        <div className="flex items-center gap-2 mt-2">
          <div className="h-px flex-1 bg-gradient-to-r" style={{ background: `linear-gradient(90deg, ${therapyColor}40, transparent)` }} />
        </div>
      </div>

      <div className="relative group mt-4">
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

        <div
          ref={scrollContainerRef}
          className="flex gap-5 overflow-x-auto pb-4"
          style={{ 
            scrollbarWidth: 'thin',
            scrollbarColor: `${therapyColor} #e5e5e5`,
            WebkitOverflowScrolling: 'touch',
            overflowX: 'auto',
            overflowY: 'hidden'
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
                  unoptimized={item.img.includes('unsplash.com')}
                />
                <div className="absolute top-3 left-3">
                  <span className="text-[10px] font-semibold bg-black/60 backdrop-blur-sm rounded-full px-2.5 py-1 text-white uppercase tracking-wider">
                    {category === "TABLE TOPS & SCIENTIFIC INPUTS" ? "SCIENTIFIC" : category.split(' ')[0]}
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
                <button className="text-xs font-semibold transition-colors flex items-center gap-1 group" style={{ color: therapyColor }}>
                  View Details
                  <ArrowUpRight className="w-3 h-3 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

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
    "Tear off Pads",
    "TABLE TOPS & SCIENTIFIC INPUTS"
  ];

  return (
    <div 
      className={`fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 md:p-6 transition-all duration-300 ${isVisible ? 'bg-black/80 backdrop-blur-md' : 'bg-black/0 backdrop-blur-none'}`} 
      onClick={handleClose}
    >
      <div 
        className={`relative bg-white lg:mt-10 dark:bg-neutral-900 rounded-2xl sm:rounded-3xl w-full max-w-6xl max-h-[90vh] overflow-hidden shadow-[0_25px_50px_-12px_rgba(0,0,0,0.4)] flex flex-col transition-all duration-300 ${isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-8 scale-95'}`} 
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header - Fixed */}
        <div className="relative px-5 sm:px-7 pt-5 sm:pt-4 pb-4 flex-shrink-0 border-b border-neutral-100 dark:border-neutral-800 bg-white dark:bg-neutral-900 z-10">
          <div className="flex items-start justify-between gap-3">
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-2 flex-wrap">
                <span className="text-2xl sm:text-3xl">{therapy.icon}</span>
                <h2 className="text-2xl sm:text-3xl font-bold text-neutral-900 dark:text-white tracking-tight">
                  {therapy.therapy}
                </h2>
              </div>
            </div>
            <button 
              onClick={handleClose} 
              className="flex-shrink-0 w-9 h-9 rounded-full bg-neutral-100 hover:bg-neutral-200 dark:bg-neutral-800 dark:hover:bg-neutral-700 flex items-center justify-center transition-all duration-200 hover:scale-105"
              aria-label="Close modal"
            >
              <X className="w-4 h-4 text-neutral-600 dark:text-neutral-400" />
            </button>
          </div>
        </div>

        {/* Content - Scrollable */}
        <div 
          ref={modalContentRef} 
          className="flex-1 overflow-y-auto p-5 sm:p-7"
          style={{ 
            scrollbarWidth: 'thin',
            scrollbarColor: `${therapy.color}40 #e5e5e5`
          }}
        >
          {categoryOrder.map((category) => {
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
}

// ─── Collage Card Component ─────────────────────────────────────────────────

function CollageCard({ therapy, onClick }: { therapy: Therapy; onClick: () => void }) {
  // Get therapy-specific image for the collage card
  const therapyImages = THERAPY_IMAGES[therapy.therapy] || THERAPY_IMAGES['General Wellness'];
  const cardImage = therapyImages[0]; // Use first image for the card

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
        src={cardImage}
        alt={therapy.therapy} 
        fill
        className="object-cover transition-all duration-700 group-hover:scale-110"
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 20vw"
        unoptimized
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
          <h3 className="text-white text-sm sm:text-base lg:text-lg font-bold leading-tight drop-shadow-lg">{therapy.therapy}</h3>
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

  return (
    <>
      <section className="py-16 sm:py-24 px-4 sm:px-6 bg-gradient-to-br from-slate-50 via-white to-slate-50">
        <div className="relative max-w-[1600px] mx-auto">
          <div className="text-left mb-12 lg:mb-16">
            <div className={`flex items-center gap-3 mb-4 transition-all duration-700 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
              <span className="w-12 h-0.5 bg-gradient-to-r from-[#0093cb] to-[#00a65d]" />
              <span className="text-xs font-black uppercase tracking-[0.3em] text-[#0093cb]">Therapy Areas</span>
            </div>
            <h1 className={`text-4xl sm:text-5xl lg:text-6xl font-black tracking-tighter text-[#0f172a] mb-4 transition-all duration-700 delay-100 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
              Premium <span className="bg-gradient-to-r from-[#0093cb] to-[#00a65d] bg-clip-text text-transparent">Therapy Portfolio</span>
            </h1>
            <p className={`text-neutral-600 max-w-2xl text-base sm:text-lg transition-all duration-700 delay-200 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
              Specialized medical education tools across 20+ therapeutic areas, featuring 8 product categories including Table Tops & Scientific Inputs.
            </p>
          </div>

          <div className={`transition-all duration-700 delay-300 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            {/* Mobile: 2 columns */}
            <div className="grid grid-cols-2 gap-3 sm:hidden">
              {THERAPY_DATA.map((therapy) => (
                <CollageCard key={therapy.therapy} therapy={{...therapy, span: 1}} onClick={() => setSelected(therapy)} />
              ))}
            </div>

            {/* Tablet: 3 columns */}
            <div className="hidden sm:grid lg:hidden grid-cols-3 gap-3 auto-rows-[200px]">
              {THERAPY_DATA.map((therapy) => (
                <CollageCard 
                  key={therapy.therapy} 
                  therapy={therapy.span === 2 ? {...therapy, span: 2} : {...therapy, span: 1}} 
                  onClick={() => setSelected(therapy)} 
                />
              ))}
            </div>

            {/* Desktop: 5 columns */}
            <div className="hidden lg:grid grid-cols-5 gap-3 auto-rows-[240px]">
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