// app/digital-services/page.tsx
'use client';

import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import {
  ArrowUpRight,
  Monitor,
  Users,
  TrendingUp,
  BookOpen,
  Heart,
  MessageCircle,
  Sparkles,
  Zap,
  Check,
  ChevronLeft,
  ChevronRight,
  Target,
  Globe,
  Shield,
  Star,
  Clock,
  BarChart,
  Grid3X3,
  Eye,
} from 'lucide-react';

// ─── TYPES ──────────────────────────────────────────────────────────────────
interface DigitalProduct {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  stat?: string;
  statLabel?: string;
}

interface ServiceCategory {
  id: string;
  number: string;
  title: string;
  description: string;
  icon: React.ElementType;
  products: DigitalProduct[];
}

interface TableTopImage {
  id: string;
  src: string;
  title: string;
  category: string;
}

// ─── DATA ────────────────────────────────────────────────────────────────────
const serviceCategories: ServiceCategory[] = [
  {
    id: "tabletops",
    number: "01",
    title: "Hyperpersonalized Tabletops",
    description: "Custom-designed displays that transform ordinary surfaces into engaging brand experiences with interactive scientific content tailored for each healthcare professional.",
    icon: Monitor,
    products: [
      {
        id: "cardiology",
        title: "Cardiology Tabletop",
        description: "Interactive cardiovascular display with 3D heart model and treatment pathway visualization for detailed HCP consultations.",
        image: "/koru/koru.png",
        tags: ["3D Heart Model", "Treatment Pathways", "Clinical Data"],
        stat: "40+",
        statLabel: "Therapy Areas"
      },
      {
        id: "diabetes",
        title: "Diabetes Management",
        description: "Comprehensive diabetes care tabletop with glucose monitoring guides and lifestyle modification recommendations.",
        image: "/koru/koru1.png",
        tags: ["Glucose Tracker", "Diet Plans", "Complication Info"]
      },
      {
        id: "oncology",
        title: "Oncology Overview",
        description: "Cancer care pathway tabletop showing treatment protocols and supportive care resources for oncology practices.",
        image: "/koru/koru2.png",
        tags: ["Treatment Options", "Side Effect Management", "Support Resources"]
      },
      {
        id: "respiratory",
        title: "Respiratory Health",
        description: "Pulmonary function and respiratory disease management display with inhaler technique demonstrations.",
        image: "/koru/koru3.png",
        tags: ["Lung Models", "Inhaler Techniques", "Spirometry Data"]
      },
      {
        id: "neurology",
        title: "Neurology Insights",
        description: "Brain function visualization and neurological disorder education tabletop for specialist consultations.",
        image: "/koru/koru4.png",
        tags: ["Brain Mapping", "Disease Progression", "Treatment Options"]
      },
      {
        id: "gastroenterology",
        title: "Gastroenterology",
        description: "Digestive system anatomy and GI disorder management display with dietary planning tools.",
        image: "/koru/koru5.png",
        tags: ["Anatomy Views", "Dietary Guides", "Treatment Plans"]
      }
    ]
  },
  {
    id: "services",
    number: "02",
    title: "Hyperpersonalized Services",
    description: "Comprehensive patient support ecosystems including Payboard financial solutions and Patient Support Programs that create seamless, personalized healthcare journeys.",
    icon: Users,
    products: [
      {
        id: "payboard",
        title: "Payboard Solutions",
        description: "Financial assistance platform helping patients navigate treatment costs and insurance coverage with clarity.",
        image: "/koru/koru6.png",
        tags: ["Cost Calculator", "Insurance Check", "Payment Plans"],
        stat: "24/7",
        statLabel: "Support Available"
      },
      {
        id: "psp",
        title: "Patient Support Program",
        description: "End-to-end patient support including medication adherence tracking and lifestyle counseling services.",
        image: "/koru/koru7.png",
        tags: ["24/7 Support", "Medication Reminders", "Progress Tracking"]
      },
      {
        id: "care-coordination",
        title: "Care Coordination",
        description: "Multi-stakeholder platform connecting patients, physicians, and caregivers in a unified ecosystem.",
        image: "/koru/koru8.png",
        tags: ["Care Team Chat", "Appointment Sync", "Shared Records"]
      },
      {
        id: "wellness",
        title: "Wellness Programs",
        description: "Personalized preventive care programs with goal setting and progress monitoring capabilities.",
        image: "/koru/koru9.png",
        tags: ["Goal Setting", "Activity Tracking", "Health Tips"]
      },
      {
        id: "remote-monitoring",
        title: "Remote Monitoring",
        description: "Connected device integration for real-time health parameter tracking and trend analysis.",
        image: "/koru/koru10.png",
        tags: ["Device Sync", "Real-time Alerts", "Trend Analysis"]
      },
      {
        id: "telehealth",
        title: "Telehealth Integration",
        description: "Virtual consultation platform with seamless electronic medical record integration.",
        image: "/koru/koru11.png",
        tags: ["Video Consult", "EMR Access", "Prescription Management"]
      }
    ]
  },
  {
    id: "campaigns",
    number: "03",
    title: "Patient Support Programs (PSP)",
    description: "Sophisticated digital campaigns featuring Health Risk Assessment calculations with measurable outcomes and compliance-ready reporting.",
    icon: TrendingUp,
    products: [
      {
        id: "hra-calculator",
        title: "HRA Calculator",
        description: "Interactive health risk assessment tool for cardiovascular and metabolic condition screening.",
        image: "/koru/koru12.png",
        tags: ["Risk Scoring", "Visual Reports", "Recommendations"],
        stat: "85%",
        statLabel: "Engagement Rate"
      },
      {
        id: "email-campaigns",
        title: "Email Campaigns",
        description: "Targeted email marketing with personalized content delivery and automated follow-up sequences.",
        image: "/koru/koru13.png",
        tags: ["Segmentation", "A/B Testing", "Analytics"]
      },
      {
        id: "social-media",
        title: "Social Media Suite",
        description: "Comprehensive social media campaign management tailored for pharmaceutical brands.",
        image: "/koru/koru14.png",
        tags: ["Content Calendar", "Engagement Tracking", "Compliance Check"]
      },
      {
        id: "webinar",
        title: "Webinar Platform",
        description: "Interactive webinar hosting solution with live polling and audience engagement features.",
        image: "/koru/koru15.png",
        tags: ["Live Streaming", "Q&A Sessions", "Recording Archive"]
      },
      {
        id: "analytics",
        title: "Analytics Dashboard",
        description: "Real-time campaign performance tracking with comprehensive ROI measurement tools.",
        image: "/koru/koru16.png",
        tags: ["Real-time Data", "Custom Reports", "ROI Calculator"]
      },
      {
        id: "compliance",
        title: "Compliance Manager",
        description: "Automated compliance verification system for all digital campaign materials and assets.",
        image: "/koru/koru17.png",
        tags: ["Auto-review", "Regulatory Check", "Audit Trail"]
      }
    ]
  },
  {
    id: "campaigns",
    number: "04",
    title: "Digital Campaigns & HRA",
    description: "Sophisticated digital campaigns featuring Health Risk Assessment calculations with measurable outcomes and compliance-ready reporting.",
    icon: TrendingUp,
    products: [
      {
        id: "hra-calculator",
        title: "HRA Calculator",
        description: "Interactive health risk assessment tool for cardiovascular and metabolic condition screening.",
        image: "/koru/koru12.png",
        tags: ["Risk Scoring", "Visual Reports", "Recommendations"],
        stat: "85%",
        statLabel: "Engagement Rate"
      },
      {
        id: "email-campaigns",
        title: "Email Campaigns",
        description: "Targeted email marketing with personalized content delivery and automated follow-up sequences.",
        image: "/koru/koru13.png",
        tags: ["Segmentation", "A/B Testing", "Analytics"]
      },
      {
        id: "social-media",
        title: "Social Media Suite",
        description: "Comprehensive social media campaign management tailored for pharmaceutical brands.",
        image: "/koru/koru14.png",
        tags: ["Content Calendar", "Engagement Tracking", "Compliance Check"]
      },
      {
        id: "webinar",
        title: "Webinar Platform",
        description: "Interactive webinar hosting solution with live polling and audience engagement features.",
        image: "/koru/koru15.png",
        tags: ["Live Streaming", "Q&A Sessions", "Recording Archive"]
      },
      {
        id: "analytics",
        title: "Analytics Dashboard",
        description: "Real-time campaign performance tracking with comprehensive ROI measurement tools.",
        image: "/koru/koru16.png",
        tags: ["Real-time Data", "Custom Reports", "ROI Calculator"]
      },
      {
        id: "compliance",
        title: "Compliance Manager",
        description: "Automated compliance verification system for all digital campaign materials and assets.",
        image: "/koru/koru17.png",
        tags: ["Auto-review", "Regulatory Check", "Audit Trail"]
      }
    ]
  },
  {
    id: "campaigns",
    number: "05",
    title: "HR Calculators",
    description: "Sophisticated digital campaigns featuring Health Risk Assessment calculations with measurable outcomes and compliance-ready reporting.",
    icon: TrendingUp,
    products: [
      {
        id: "hra-calculator",
        title: "HRA Calculator",
        description: "Interactive health risk assessment tool for cardiovascular and metabolic condition screening.",
        image: "/koru/koru12.png",
        tags: ["Risk Scoring", "Visual Reports", "Recommendations"],
        stat: "85%",
        statLabel: "Engagement Rate"
      },
      {
        id: "email-campaigns",
        title: "Email Campaigns",
        description: "Targeted email marketing with personalized content delivery and automated follow-up sequences.",
        image: "/koru/koru13.png",
        tags: ["Segmentation", "A/B Testing", "Analytics"]
      },
      {
        id: "social-media",
        title: "Social Media Suite",
        description: "Comprehensive social media campaign management tailored for pharmaceutical brands.",
        image: "/koru/koru14.png",
        tags: ["Content Calendar", "Engagement Tracking", "Compliance Check"]
      },
      {
        id: "webinar",
        title: "Webinar Platform",
        description: "Interactive webinar hosting solution with live polling and audience engagement features.",
        image: "/koru/koru15.png",
        tags: ["Live Streaming", "Q&A Sessions", "Recording Archive"]
      },
      {
        id: "analytics",
        title: "Analytics Dashboard",
        description: "Real-time campaign performance tracking with comprehensive ROI measurement tools.",
        image: "/koru/koru16.png",
        tags: ["Real-time Data", "Custom Reports", "ROI Calculator"]
      },
      {
        id: "compliance",
        title: "Compliance Manager",
        description: "Automated compliance verification system for all digital campaign materials and assets.",
        image: "/koru/koru17.png",
        tags: ["Auto-review", "Regulatory Check", "Audit Trail"]
      }
    ]
  },
  {
    id: "education",
    number: "06",
    title: "Patient Education Content",
    description: "Evidence-based educational resources designed to empower patients with knowledge about their conditions, treatments, and wellness journeys in accessible formats.",
    icon: BookOpen,
    products: [
      {
        id: "disease-hub",
        title: "Disease Information Hub",
        description: "Comprehensive disease library featuring animated explainer videos and detailed infographics.",
        image: "/koru/koru18.png",
        tags: ["Video Library", "Infographics", "FAQ Section"],
        stat: "15+",
        statLabel: "Languages Available"
      },
      {
        id: "treatment-guides",
        title: "Treatment Guides",
        description: "Step-by-step medication guides with side effect management and lifestyle recommendations.",
        image: "/koru/koru19.png",
        tags: ["Medication Info", "Side Effects", "Lifestyle Tips"]
      },
      {
        id: "interactive-learning",
        title: "Interactive Learning",
        description: "Gamified education modules designed to improve patient engagement and information retention.",
        image: "/koru/koru20.png",
        tags: ["Quizzes", "Progress Tracking", "Certificates"]
      },
      {
        id: "multilingual",
        title: "Multi-language Content",
        description: "Educational resources available in 15+ Indian languages for maximum accessibility and reach.",
        image: "/koru/koru21.png",
        tags: ["15+ Languages", "Voice-over", "Cultural Adaptation"]
      },
      {
        id: "printable",
        title: "Printable Resources",
        description: "Downloadable PDF guides, worksheets, and checklists for offline patient reference.",
        image: "/koru/koru22.png",
        tags: ["PDF Downloads", "Worksheets", "Checklists"]
      },
      {
        id: "video-library",
        title: "Expert Video Library",
        description: "Curated collection of expert-led video content covering diverse therapeutic areas.",
        image: "/koru/koru23.png",
        tags: ["Expert Videos", "Animations", "Patient Stories"]
      }
    ]
  },
  {
    id: "anatomy",
    number: "07",
    title: "Digital Anatomy",
    description: "Advanced 3D anatomical models and visualizations that bring complex medical concepts to life for HCP education and patient counseling.",
    icon: Heart,
    products: [
      {
        id: "heart-3d",
        title: "3D Heart Model",
        description: "Fully interactive cardiac model displaying chambers, valves, and hemodynamic flow patterns.",
        image: "/koru/koru24.png",
        tags: ["360° Rotation", "Cross-section", "Pathology View"],
        stat: "50+",
        statLabel: "Anatomical Models"
      },
      {
        id: "brain-atlas",
        title: "Brain Atlas",
        description: "Detailed neurological mapping with functional area visualization and pathology overlays.",
        image: "/koru/koru25.png",
        tags: ["Region Highlight", "Function Map", "Disorder Overlay"]
      },
      {
        id: "skeletal",
        title: "Skeletal System",
        description: "Complete osteological model with joint mechanics and range-of-motion demonstrations.",
        image: "/koru/koru26.png",
        tags: ["Bone Layers", "Joint Movement", "Fracture Types"]
      },
      {
        id: "muscular",
        title: "Muscular System",
        description: "Interactive muscle layer visualization with origin, insertion, and action demonstrations.",
        image: "/koru/koru27.png",
        tags: ["Layer Toggle", "Movement Demo", "Insertion Points"]
      },
      {
        id: "nervous",
        title: "Nervous System",
        description: "Complete neural pathway mapping from central nervous system to peripheral innervation.",
        image: "/koru/koru28.png",
        tags: ["Pathway Trace", "Reflex Arcs", "Dermatome Map"]
      },
      {
        id: "organs",
        title: "Organ Systems",
        description: "Multi-organ visualization platform with healthy-pathology comparison capabilities.",
        image: "/koru/koru29.png",
        tags: ["Multi-organ View", "Compare Tool", "Disease States"]
      }
    ]
  },
  {
    id: "chatbots",
    number: "08",
    title: "AI Chatbots",
    description: "Intelligent conversational agents powered by advanced AI providing instant, accurate support for patients and healthcare professionals 24/7.",
    icon: MessageCircle,
    products: [
      {
        id: "patient-bot",
        title: "Patient Assistant Bot",
        description: "Round-the-clock support chatbot handling medication queries and appointment scheduling.",
        image: "/koru/koru30.png",
        tags: ["Medication Info", "Appointment Booking", "Symptom Check"],
        stat: "24/7",
        statLabel: "Availability"
      },
      {
        id: "hcp-bot",
        title: "Clinical Knowledge Bot",
        description: "Professional knowledge assistant delivering drug information and clinical guideline updates.",
        image: "/koru/koru31.png",
        tags: ["Drug Database", "Guidelines", "Research Updates"]
      },
      {
        id: "diagnostic-bot",
        title: "Diagnostic Support Bot",
        description: "AI-powered diagnostic suggestion engine based on comprehensive symptom analysis.",
        image: "/koru/koru32.png",
        tags: ["Symptom Analysis", "Differential Diagnosis", "Test Suggestions"]
      },
      {
        id: "wellness-bot",
        title: "Wellness Coach Bot",
        description: "Personalized health coaching bot delivering daily wellness tips and progress tracking.",
        image: "/koru/koru33.png",
        tags: ["Daily Tips", "Goal Tracking", "Motivation"]
      },
      {
        id: "multilingual-bot",
        title: "Multilingual Bot",
        description: "Multi-language support system serving patients in their preferred regional language.",
        image: "/koru/koru34.png",
        tags: ["10+ Languages", "Voice Input", "Translation"]
      },
      {
        id: "compliance-bot",
        title: "Compliance Bot",
        description: "Regulatory compliance verification bot for pharmaceutical marketing content review.",
        image: "/koru/koru35.png",
        tags: ["Auto-check", "Regulatory Updates", "Approval Workflow"]
      }
    ]
  }
];

// ─── TABLE TOP GALLERY DATA ──────────────────────────────────────────────────
const tableTopImages: TableTopImage[] = [
  { id: "tt-1", src: "/koru/koru.png", title: "Cardiology Display", category: "Cardiovascular" },
  { id: "tt-2", src: "/koru/koru1.png", title: "Diabetes Management", category: "Endocrinology" },
  { id: "tt-3", src: "/koru/koru2.png", title: "Oncology Overview", category: "Oncology" },
  { id: "tt-4", src: "/koru/koru3.png", title: "Respiratory Health", category: "Pulmonology" },
  { id: "tt-5", src: "/koru/koru4.png", title: "Neurology Insights", category: "Neurology" },
  { id: "tt-6", src: "/koru/koru5.png", title: "Gastroenterology", category: "Gastroenterology" },
  { id: "tt-7", src: "/koru/koru6.png", title: "Orthopedics Display", category: "Orthopedics" },
  { id: "tt-8", src: "/koru/koru7.png", title: "Dermatology Guide", category: "Dermatology" },
];

// ─── MAGNETIC BUTTON ─────────────────────────────────────────────────────────
function MagneticButton({ children, className, onClick }: { children: React.ReactNode; className?: string; onClick?: () => void }) {
  const ref = useRef<HTMLButtonElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouse = (e: React.MouseEvent) => {
    const { clientX, clientY } = e;
    const { left, top, width, height } = ref.current!.getBoundingClientRect();
    setPosition({
      x: (clientX - (left + width / 2)) * 0.3,
      y: (clientY - (top + height / 2)) * 0.3,
    });
  };

  return (
    <motion.button
      ref={ref}
      onMouseMove={handleMouse}
      onMouseLeave={() => setPosition({ x: 0, y: 0 })}
      animate={{ x: position.x, y: position.y }}
      className={className}
      onClick={onClick}
    >
      {children}
    </motion.button>
  );
}

// ─── SECTION BADGE ───────────────────────────────────────────────────────────
function SectionBadge({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <span className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold ${className}`}>
      {children}
    </span>
  );
}

// ─── PAGE ────────────────────────────────────────────────────────────────────
export default function DigitalServicesPage() {
  return (
    <div className="min-h-screen bg-white">
      <HeroBanner />
      {serviceCategories.map((category, index) => (
        <CategorySection key={category.id} category={category} index={index} />
      ))}
      <TableTopGallerySection />
    </div>
  );
}

// ─── HERO BANNER ─────────────────────────────────────────────────────────────
function HeroBanner() {
  return (
    <section className="relative w-full h-[50vh] md:h-[60vh] lg:h-[70vh] lg:mb-8 overflow-hidden">
      <Image
        src="/koru/koru.png"
        alt="Digital Products & Services"
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-slate-900/20 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10 lg:p-14">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <SectionBadge className="bg-white/10 backdrop-blur-md text-[#8bde7a] border border-white/20 mb-4">
              <Sparkles size={16} />
              Digital Transformation in Pharma
            </SectionBadge>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white leading-[1.1] mb-4"
          >
            Digital Products
            <span className="block text-[#8bde7a]">& Services</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-lg md:text-xl text-white/80 max-w-2xl"
          >
            Empowering pharmaceutical companies with cutting-edge digital solutions
            that enhance HCP engagement and deliver measurable healthcare outcomes.
          </motion.p>
        </div>
      </div>
    </section>
  );
}



// ─── CATEGORY SECTION ────────────────────────────────────────────────────────
function CategorySection({ category, index }: { category: ServiceCategory; index: number }) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const Icon = category.icon;
  const isEven = index % 2 === 0;

  const updateScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 10);
    }
  };

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const card = scrollRef.current.querySelector('div');
      const amount = (card?.offsetWidth || 360) + 24;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -amount : amount,
        behavior: 'smooth'
      });
      setTimeout(updateScroll, 400);
    }
  };

  return (
    <section className={`pt-8 2xl:py-14 ${isEven ? 'bg-white' : 'bg-gradient-to-br from-[#0093cb]/[0.02] via-white to-[#00a65d]/[0.02]'}`}>
      <div className="max-w-7xl mx-auto px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          className=""
        >
          <div className="flex items-center  gap-4 mb-2">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#0093cb] bg-[#0093cb]/10 px-3 py-1.5 rounded-full">
              {category.number}
            </span>


            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 ">
              {category.title}
            </h2> </div>
          <p className="text-lg text-slate-600 max-w-2xl leading-relaxed">
            {category.description}
          </p>
          <div className="mt-4 w-20 h-1 bg-gradient-to-r from-[#0093cb] to-[#00a65d] rounded-full" />
        </motion.div>

        <div className="relative">
          <div className="flex justify-end gap-2 mb-2">
            <button
              onClick={() => scroll('left')}
              disabled={!canScrollLeft}
              className="w-11 h-11 rounded-full border-2 border-slate-200 flex items-center justify-center
                       text-slate-400 hover:text-[#0093cb] hover:border-[#0093cb]
                       disabled:opacity-30 disabled:cursor-not-allowed transition-all"
              aria-label="Scroll left"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => scroll('right')}
              disabled={!canScrollRight}
              className="w-11 h-11 rounded-full border-2 border-slate-200 flex items-center justify-center
                       text-slate-400 hover:text-[#0093cb] hover:border-[#0093cb]
                       disabled:opacity-30 disabled:cursor-not-allowed transition-all"
              aria-label="Scroll right"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          <div
            ref={scrollRef}
            onScroll={updateScroll}
            className="flex gap-6 2xl:gap-8 overflow-hidden pb-1"
          >
            {category.products.map((product, i) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="flex-shrink-0 w-[330px] sm:w-[370px] overflow-hidden lg:w-[280px]"
              >
                <ProductCard product={product} />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── PRODUCT CARD ────────────────────────────────────────────────────────────
function ProductCard({ product }: { product: DigitalProduct }) {
  return (
    <article className="group bg-white rounded-3xl overflow-hidden border border-slate-200 hover:border-[#00a65d]/30 hover:shadow-2xl hover:shadow-[#00a65d]/10 transition-all duration-500 h-full flex flex-col relative">
      {/* Glow effect overlay */}
      <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-10"
        style={{
          background: 'radial-gradient(circle at center, rgba(0, 166, 93, 0.15) 0%, transparent 70%)',
        }}
      />

      <div className="relative h-72 overflow-hidden bg-slate-100">
        <Image
          src={product.image}
          alt={product.title}
          fill
          className="object-fill transition-transform duration-700 ease-out group-hover:scale-110"
          sizes="400px"
        />
      </div>

      <div className="p-3 2xl:p-6 flex flex-col flex-1 relative z-20">
        <h3 className="text-lg font-extrabold text-slate-900 mb-2 group-hover:text-[#00a65d] transition-colors duration-300">
          {product.title}
        </h3>
        <p className="text-sm text-slate-600 leading-relaxed mb-5 flex-1 line-clamp-2">
          {product.description}
        </p>
      </div>
    </article>
  );
}

// ─── TABLE TOP GALLERY SECTION ───────────────────────────────────────────────
function TableTopGallerySection() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [selectedImage, setSelectedImage] = useState<TableTopImage | null>(null);

  const updateScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 10);
    }
  };

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const card = scrollRef.current.querySelector('div');
      const amount = ((card?.offsetWidth || 280) + 20) * 2; // scroll 2 cards at a time
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -amount : amount,
        behavior: 'smooth'
      });
      setTimeout(updateScroll, 400);
    }
  };

  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          className="mb-10"
        >
          <div className="flex items-center gap-4 mb-4">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#00a65d] bg-[#00a65d]/10 px-3 py-1.5 rounded-full">
              Gallery
            </span>
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#00a65d] to-[#8bde7a] flex items-center justify-center shadow-lg shadow-[#00a65d]/20">
              <Grid3X3 size={22} className="text-white" />
            </div>
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">
            Table Top Designs
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl leading-relaxed">
            Explore our collection of hyperpersonalized tabletop displays crafted for
            various therapeutic areas. Each design is meticulously created to enhance
            HCP engagement and deliver impactful brand experiences.
          </p>
          <div className="mt-4 w-20 h-1 bg-gradient-to-r from-[#00a65d] to-[#8bde7a] rounded-full" />
        </motion.div>

        {/* Gallery Grid - Visible on Desktop (4 images) */}
        <div className="hidden lg:grid lg:grid-cols-4 gap-5 mb-8">
          {tableTopImages.slice(0, 4).map((image, i) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              onClick={() => setSelectedImage(image)}
              className="group relative aspect-[4/3] rounded-2xl overflow-hidden cursor-pointer bg-slate-100 shadow-lg hover:shadow-2xl transition-all duration-500"
            >
              <Image
                src={image.src}
                alt={image.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                sizes="(max-width: 1024px) 50vw, 25vw"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Category Badge */}
              <div className="absolute top-3 left-3">
                <span className="px-2.5 py-1 bg-white/90 backdrop-blur-sm rounded-full text-[10px] font-bold uppercase tracking-wider text-[#0093cb]">
                  {image.category}
                </span>
              </div>

              {/* Hover Content */}
              <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                <h4 className="text-white font-bold text-sm mb-1">{image.title}</h4>
                <span className="inline-flex items-center gap-1 text-[#8bde7a] text-xs font-semibold">
                  <Eye size={14} />
                  View Full Size
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Carousel - Visible on Mobile/Tablet + shows all on desktop */}


        {/* Second Row of Grid - Desktop only (images 5-8) */}
        <div className="hidden lg:grid lg:grid-cols-4 gap-5">
          {tableTopImages.slice(4, 8).map((image, i) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: (i + 4) * 0.1 }}
              onClick={() => setSelectedImage(image)}
              className="group relative aspect-[4/3] rounded-2xl overflow-hidden cursor-pointer bg-slate-100 shadow-lg hover:shadow-2xl transition-all duration-500"
            >
              <Image
                src={image.src}
                alt={image.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                sizes="(max-width: 1024px) 50vw, 25vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="absolute top-3 left-3">
                <span className="px-2.5 py-1 bg-white/90 backdrop-blur-sm rounded-full text-[10px] font-bold uppercase tracking-wider text-[#0093cb]">
                  {image.category}
                </span>
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                <h4 className="text-white font-bold text-sm mb-1">{image.title}</h4>
                <span className="inline-flex items-center gap-1 text-[#8bde7a] text-xs font-semibold">
                  <Eye size={14} />
                  View Full Size
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-10 text-center lg:hidden"
        >
          <button className="inline-flex items-center gap-2 px-8 py-4 bg-slate-900 text-white rounded-full font-bold hover:bg-[#0093cb] transition-colors">
            View All Designs <ArrowUpRight size={18} />
          </button>
        </motion.div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="relative max-w-5xl w-full max-h-[90vh] rounded-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative aspect-[4/3]">
              <Image
                src={selectedImage.src}
                alt={selectedImage.title}
                fill
                className="object-contain"
              />
            </div>
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white hover:bg-white/20 transition-colors"
            >
              ✕
            </button>
            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
              <span className="text-[#8bde7a] text-xs font-bold uppercase tracking-wider">{selectedImage.category}</span>
              <h3 className="text-white text-xl font-bold mt-1">{selectedImage.title}</h3>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}


// ─── TESTIMONIAL STRIP ──────────────────────────────────────────────────────
function TestimonialStrip() {
  return (
    <section className="py-12 bg-gradient-to-r from-[#0093cb] to-[#00a65d] overflow-hidden relative">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle, white 1px, transparent 1px)`,
          backgroundSize: '30px 30px'
        }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex flex-wrap items-center justify-between gap-8"
        >
          <div className="flex items-center gap-6">
            <div className="flex -space-x-4">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm border-2 border-white flex items-center justify-center text-white font-bold text-sm">
                  {i}
                </div>
              ))}
            </div>
            <div>
              <div className="text-white/80 text-sm font-medium">Trusted by</div>
              <div className="text-white text-2xl font-extrabold">200+ Pharma Brands</div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            {[1, 2, 3, 4, 5].map((star) => (
              <Star key={star} className="w-6 h-6 text-[#8bde7a] fill-[#8bde7a]" />
            ))}
            <span className="text-white font-semibold ml-2">4.9/5 Rating</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// ─── CTA SECTION ─────────────────────────────────────────────────────────────
function CTASection() {
  return (
    <section className="relative py-20 lg:py-32 bg-slate-900 overflow-hidden">
      <div className="absolute top-0 left-0 w-96 h-96 rounded-full bg-[#0093cb]/10 blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-[#00a65d]/10 blur-3xl" />
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: `radial-gradient(circle, #8bde7a 1px, transparent 1px)`,
        backgroundSize: '50px 50px'
      }} />

      <div className="relative max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <SectionBadge className="bg-white/10 text-[#8bde7a] border border-white/20 backdrop-blur-md">
            <Sparkles className="w-4 h-4" />
            Let's Build Together
          </SectionBadge>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight">
            Ready to Transform Your
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#0093cb] via-[#00a65d] to-[#8bde7a]">
              Digital Healthcare Strategy?
            </span>
          </h2>

          <p className="text-xl text-white/70 max-w-2xl mx-auto leading-relaxed">
            Let's discuss how our digital products and services can enhance your
            pharmaceutical marketing and patient engagement initiatives with measurable impact.
          </p>

          <div className="flex flex-wrap justify-center gap-4 pt-4">
            <MagneticButton className="bg-gradient-to-r from-[#0093cb] to-[#00a65d] text-white px-8 py-4 rounded-full font-bold hover:shadow-lg hover:shadow-[#0093cb]/30 transition-all inline-flex items-center gap-2">
              Schedule a Demo <ArrowUpRight size={20} />
            </MagneticButton>
            <Link
              href="/brochure"
              className="px-8 py-4 rounded-full font-bold border-2 border-white/30 text-white hover:border-[#8bde7a] hover:text-[#8bde7a] transition-all"
            >
              Download Brochure
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
