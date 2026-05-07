"use client";
import React, { useState, useRef, useEffect } from "react";
import { Phone, CheckCircle, Wand2 } from "lucide-react";
import { FileText, Users, Monitor, Activity, Presentation } from "lucide-react";
import BentoGrid from "@/components/BentoGridProducts";
import { motion, AnimatePresence, Variants } from "framer-motion";
import {
  HeartPulse,
  Brain,
  ShieldCheck,
  Target,
  Lightbulb,
} from "lucide-react";
import Image from "next/image";
import ProductGallery from "@/components/Productgallery";

// Brand Colors (Mapped from your CSS)
const BRAND = {
  primary: "#0093cb",
  secondary: "#00a65d",
  accent: "#8bde7a",
  textDark: "#0f172a",
  textMuted: "#6b7280",
  bgCream: "#f8fafc",
  bgDark: "#0b3c5d",
};

const features = [
  {
    id: 1,
    title: "Medical Accuracy You Can Trust",
    description:
      "Every project is reviewed by doctors and subject-matter experts to ensure clinical reliability and scientific accuracy at every level.",
    icon: HeartPulse,
    iconColor: "text-[#0093cb]",
    iconBg: "bg-[#0093cb]/10", // Primary with 10% opacity
    colSpan: "lg:col-span-2 md:col-span-1",
  },
  {
    id: 2,
    title: "Engaging & Easy-to-Understand",
    description:
      "We simplify complex medical data into patient-friendly, visually engaging content that drives understanding, adherence, and better outcomes.",
    icon: Brain,
    iconColor: "text-[#00a65d]",
    iconBg: "bg-[#00a65d]/10", // Secondary with 10% opacity
    colSpan: "lg:col-span-2 md:col-span-1",
  },
  {
    id: 3,
    title: "Trusted by Healthcare Leaders",
    description:
      "Pharma companies, hospitals, and HCPs trust MediPride for consistent, high-quality communication that strengthens brand credibility.",
    icon: ShieldCheck,
    iconColor: "text-[#8bde7a]",
    iconBg: "bg-[#8bde7a]/20", // Accent with 20% opacity for better visibility
    colSpan: "lg:col-span-2 md:col-span-1",
  },
  {
    id: 4,
    title: "Focused on Patient Outcomes",
    description:
      "Our work is designed with the end user in mind — helping patients better understand their condition, treatment, and health journey to improve awareness and outcomes.",
    icon: Target,
    iconColor: "text-[#0b3c5d]",
    iconBg: "bg-[#0b3c5d]/10", // Dark bg with 10% opacity
    colSpan: "lg:col-span-3 md:col-span-2", // Spans half the width on bottom row
  },
  {
    id: 5,
    title: "Custom Solutions for Every Need",
    description:
      "Every healthcare brand is unique — and so are its communication goals. We offer tailor-made solutions crafted to fit your therapy area, audience, and objectives.",
    icon: Wand2,
    iconColor: "text-[#0093cb]",
    iconBg: "bg-[#0093cb]/10",
    colSpan: "lg:col-span-3 md:col-span-2", // Spans half the width on bottom row
  },
];

// FIXED: Explicitly typed and used 'as const' to prevent string widening
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

// Replace lines 78-86 with this corrected version:

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { 
      duration: 0.5, 
      ease: [0.25, 0.1, 0.25, 1.0] // Using cubic-bezier array instead of string
    } 
  },
};
const PRODUCT_DATA = [
  {
    category: "BOOKS & MAGAZINES",
    items: [
      {
        title: "Near Vision Chart",
        desc: "Portable tool for quick and accurate near vision testing with standardized optotypes.",
        img: "https://medipride.org/wp-content/uploads/2025/11/Clear-Vision.jpg",
      },
      {
        title: "Tooth Tales: A Visual Guide Book",
        desc: "Illustrated dental education book that simplifies tooth structure and oral care for better patient understanding.",
        img: "https://medipride.org/wp-content/uploads/2025/11/Tooth-tales.jpg",
      },
      {
        title: "PCOS Book",
        desc: "Simplified guide explaining PCOS, its causes, hormonal imbalance, and management strategies.",
        img: "https://medipride.org/wp-content/uploads/2025/11/PCOS.jpg",
      },
    ],
  },
  {
    category: "FLIP CHART",
    items: [
      {
        title: "Acute Coronary Syndrome (ACS) Flip Chart",
        desc: "Visual clinical guide for understanding ACS with structured diagnosis and patient education support.",
        img: "https://medipride.org/wp-content/uploads/2025/11/Acute.jpg",
      },
      {
        title: "Type 2 Diabetes Risk Flip-chart",
        desc: "Educational tool highlighting diabetes risk factors, prevention, and early lifestyle interventions.",
        img: "https://medipride.org/wp-content/uploads/2025/11/Type-2-Diabites.jpg",
      },
      {
        title: "Urinary Tract Flipchart",
        desc: "Illustrated guide explaining urinary system anatomy, infections, and related clinical conditions.",
        img: "https://medipride.org/wp-content/uploads/2025/11/Urinary-Track.jpg",
      },
    ],
  },
  {
    category: "MATT (Laptop Mats)",
    items: [
      {
        title: "Dosing & Administration Guide Laptop Mat",
        desc: "Quick-reference tool for drug dosing, administration guidelines, and clinical safety information.",
        img: "https://medipride.org/wp-content/uploads/2025/11/Dosage.jpg",
      },
      {
        title: "Anatomical Dissections of the Human Ear Laptop Mat",
        desc: "Detailed anatomical reference of the ear structure for fast clinical and educational use.",
        img: "https://medipride.org/wp-content/uploads/2025/11/Ear.jpg",
      },
      {
        title: "Stroke (NIHSS) Laptop Mat",
        desc: "Compact guide covering stroke symptoms, classification, and NIHSS scoring for rapid assessment.",
        img: "https://medipride.org/wp-content/uploads/2025/11/Strok.jpg",
      },
    ],
  },
  {
    category: "PATIENT EDUCATION POSTERS",
    items: [
      {
        title: "Epilepsy Poster",
        desc: "Explains seizure types, warning signs, and first-aid steps for epilepsy management.",
        img: "https://medipride.org/wp-content/uploads/2025/11/Epilipsy-1.jpg",
      },
      {
        title: "Hearing Loss Poster",
        desc: "Educational guide on hearing loss types, causes, and prevention for better auditory health awareness.",
        img: "https://medipride.org/wp-content/uploads/2025/11/Hearning-loss.jpg",
      },
      {
        title: "Breast Cancer Poster",
        desc: "Highlights symptoms, risk factors, and early detection methods for improved awareness and prevention.",
        img: "https://medipride.org/wp-content/uploads/2025/11/Strok-1.jpg",
      },
    ],
  },
  {
    category: "SCALE",
    items: [
      {
        title: "Joints WOMAC Scale",
        desc: "Standard assessment tool for evaluating pain, stiffness, and joint function in osteoarthritis patients.",
        img: "https://medipride.org/wp-content/uploads/2025/11/Ortho.jpg",
      },
      {
        title: "GERD Ruler (Frequency Scale)",
        desc: "Clinical scale used to measure severity and frequency of GERD symptoms for accurate classification.",
        img: "https://medipride.org/wp-content/uploads/2025/11/Medipride-3D-Model.jpg",
      },
      {
        title: "Major Cardiovascular Scale",
        desc: "Risk assessment tool for evaluating cardiovascular conditions and guiding preventive clinical decisions.",
        img: "https://medipride.org/wp-content/uploads/2025/11/Dosage-1.jpg",
      },
    ],
  },
  {
    category: "WRITE & WIPE",
    items: [
      {
        title: "Write & Wipe Edu Stand (Osteoporosis)",
        desc: "Educational tool for osteoporosis and bone health education with write & wipe functionality.",
        img: "https://medipride.org/wp-content/uploads/2025/11/Ortho-1.jpg",
      },
      {
        title: "Write & Wipe Edu Stand (PCOS)",
        desc: "Flipchart style materials explaining male/female reproductive systems and PCOS.",
        img: "https://medipride.org/wp-content/uploads/2025/11/PCOS-1.jpg",
      },
      {
        title: "Write & Wipe Edu Stand (Diabetes)",
        desc: "Multiple learning cards covering diabetes causes, symptoms, complications, and management.",
        img: "https://medipride.org/wp-content/uploads/2025/11/Diabites.jpg",
      },
    ],
  },
  {
    category: "TABLE TOPS",
    items: [
      {
        title: "Facial Muscle Anatomy",
        desc: "Anatomy display board for professional reference and clinic décor.",
        img: "https://medipride.org/wp-content/uploads/2025/11/Facial-muscle-anotomy-glass-printing-1.jpg",
      },
      {
        title: "Live Life Table Top",
        desc: "Circular routine wheel addressing bladder health and urinary control.",
        img: "https://medipride.org/wp-content/uploads/2025/11/LLU-1.jpg",
      },
      {
        title: "Benitowa PCOS Table Top",
        desc: "Interactive display module for women's health clinics and educational environments.",
        img: "https://medipride.org/wp-content/uploads/2025/11/Benitowa-PCOS-1.jpg",
      },
    ],
  },
];

const SERVICES = [
  {
    title: "Patient Education Tools",
    desc: "Simplifying medical information to help patients understand conditions and treatments better.",
    icon: <Users size={28} />,
  },
  {
    title: "Medical Content & Visual Communication",
    desc: "Transforming complex medical data into clear, engaging, and visually impactful content.",
    icon: <FileText size={28} />,
  },
  {
    title: "Flipcharts & Educational Kits",
    desc: "Interactive tools designed to support doctors in explaining medical concepts effectively.",
    icon: <Presentation size={28} />,
  },
  {
    title: "Posters & Awareness Materials",
    desc: "Visually driven materials that promote awareness, prevention, and better health understanding.",
    icon: <Monitor size={28} />,
  },
  {
    title: "Doctor Engagement Tools",
    desc: "Strategic solutions that help pharma brands connect meaningfully with healthcare professionals.",
    icon: <Activity size={28} />,
  },
  {
    title: "Concept-Based Healthcare Communication",
    desc: "Creative communication ideas built around therapy, brand, and patient understanding.",
    icon: <Lightbulb size={28} />,
  },
];

// ─── Define Types ─────────────────────────────────────────────────────────────
interface SwipeCarouselProps {
  children: React.ReactNode;
  count: number;
  accentColor?: string;
}

interface ProductItem {
  title: string;
  desc: string;
  img: string;
}
// ─── Reusable swipe carousel (mobile + tablet only) with animations ───────────────────────────
function SwipeCarousel({
  children,
  count,
  accentColor = "#3972b7",
}: SwipeCarouselProps) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [activeIdx, setActiveIdx] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const handleScroll = () => {
    const el = trackRef.current;
    if (!el || count === 0) return;
    const cardWidth = el.scrollWidth / count;
    setActiveIdx(Math.min(Math.round(el.scrollLeft / cardWidth), count - 1));
  };

  const scrollTo = (idx: number) => {
    const el = trackRef.current;
    if (!el) return;
    const cardWidth = el.scrollWidth / count;
    el.scrollTo({ left: cardWidth * idx, behavior: "smooth" });
    setActiveIdx(idx);
  };

  return (
    <div className="block lg:hidden">
      <style>{`
        .swipe-track::-webkit-scrollbar { display: none; }
        .swipe-track { -ms-overflow-style: none; scrollbar-width: none; }
        
        @keyframes slideUpFade {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        
        @keyframes dotPulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.1); }
        }
        
        .carousel-card {
          animation: slideUpFade 0.6s ease-out forwards;
          opacity: 0;
        }
        
        .carousel-card:nth-child(1) { animation-delay: 0.1s; }
        .carousel-card:nth-child(2) { animation-delay: 0.2s; }
        .carousel-card:nth-child(3) { animation-delay: 0.3s; }
        .carousel-card:nth-child(4) { animation-delay: 0.4s; }
        .carousel-card:nth-child(5) { animation-delay: 0.5s; }
        .carousel-card:nth-child(6) { animation-delay: 0.6s; }
        
        .dot-active {
          animation: dotPulse 2s ease-in-out infinite;
        }
        
        .card-hover-effect {
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .card-hover-effect:hover {
          transform: translateY(-4px);
          box-shadow: 0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1);
        }
      `}</style>

      <div
        ref={trackRef}
        onScroll={handleScroll}
        className="swipe-track flex gap-4 overflow-x-auto pb-3 snap-x snap-mandatory scroll-smooth"
      >
        {React.Children.map(children, (child, index) => (
          <div
            className="carousel-card"
            style={{
              animationDelay: `${index * 0.1}s`,
              opacity: isVisible ? 1 : 0,
            }}
          >
            {child}
          </div>
        ))}
      </div>

      {count > 1 && (
        <div
          className="flex justify-center gap-2 mt-4"
          style={{
            animation: isVisible
              ? "slideUpFade 0.6s ease-out 0.3s forwards"
              : "none",
            opacity: 0,
          }}
        >
          {Array.from({ length: count }).map((_, i) => (
            <button
              key={i}
              onClick={() => scrollTo(i)}
              aria-label={`Go to slide ${i + 1}`}
              style={{
                backgroundColor: i === activeIdx ? accentColor : "#cbd5e1",
                transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
              }}
              className={`rounded-full hover:scale-110 ${
                i === activeIdx
                  ? "w-6 h-2 dot-active"
                  : "w-2 h-2 hover:bg-opacity-80"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
}

// ─── Product card ─────────────────────────────────────────────────────────────
function ProductCard({ item }: { item: ProductItem }) {
  return (
    <div className="group p-3 sm:p-4 bg-white rounded-[24px] sm:rounded-[32px] shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_50px_rgba(0,147,203,0.15)] transition-all duration-500 border border-slate-100 flex flex-col h-full">
      <div className="relative h-48 sm:h-52 w-full rounded-[16px] sm:rounded-[20px] overflow-hidden mb-4 sm:mb-5">
        <img
          src={item.img}
          alt={item.title}
          className="w-full h-full object-cover transition duration-700 group-hover:scale-110"
        />
        <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-2.5 py-1 rounded-full text-[9px] font-bold text-[#3972b7] uppercase">
          MediPride
        </div>
      </div>
      <div className="px-2 sm:px-3 pb-3 sm:pb-4 flex flex-col flex-grow">
        <h4 className="text-base sm:text-lg font-bold text-slate-900 mb-1.5 leading-tight">
          {item.title}
        </h4>
        <p className="text-slate-500 text-xs sm:text-sm leading-relaxed">
          {item.desc}
        </p>
      </div>
    </div>
  );
}

export default function MediPrideLanding() {
 const allProductImages: string[] = PRODUCT_DATA.flatMap(cat => 
    cat.items.map(item => item.img)
  );
  return (
    <div className="text-slate-800 font-sans scroll-smooth bg-white">
      {/* ── HERO ── */}
      <header className="relative pt-28 pb-16 sm:pt-36 sm:pb-20 md:pt-44 md:pb-24 lg:pt-56 lg:pb-40 overflow-hidden xl:h-[60vh] flex items-center">
        <picture className="absolute inset-0 z-0">
          <source
            media="(min-width: 1024px)"
            srcSet="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=2000"
          />
          <source
            media="(min-width: 640px)"
            srcSet="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=1200"
          />
          <img
            src="https://images.unsplash.com/photo-1559839734-2b71f1536783?auto=format&fit=crop&q=80&w=800"
            alt="Medical Research Background"
            className="w-full h-full object-cover"
          />
        </picture>
        <div className="absolute inset-0 bg-white/40 lg:bg-white/20 z-[1]" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center relative z-10 w-full">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#3972b7] mb-4 sm:mb-6 leading-tight">
            Where Medical Accuracy Meets <br className="hidden sm:block" />
            <span className="text-slate-900">Creative Communication</span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-slate-800 mb-8 sm:mb-10 max-w-xs sm:max-w-xl md:max-w-2xl mx-auto font-medium">
            Transforming complex medical information into clear, engaging, and
            impactful communication for pharma and healthcare brands.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center space-x-2 sm:space-x-3 bg-[#3972b7] text-white px-7 sm:px-10 py-3.5 sm:py-4 rounded-full font-bold text-base sm:text-lg hover:shadow-2xl hover:bg-blue-700 transition transform hover:-translate-y-1"
          >
            <Phone size={18} />
            <span>Let's Work Together</span>
          </a>
        </div>
      </header>

      {/* ── ABOUT ── */}
      <section
        id="about"
        className="relative py-16 sm:py-20 lg:py-24 overflow-hidden"
      >
        <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-64 sm:w-96 h-64 sm:h-96 bg-[#8bde7a]/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/4 w-56 sm:w-72 h-56 sm:h-72 bg-[#0093cb]/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 2xl:px-12 relative z-10">
          <div className="grid lg:grid-cols-12 gap-10 sm:gap-12 lg:gap-24 items-center">
            <div className="lg:col-span-5 relative">
              <div className="relative z-10 rounded-[2rem] overflow-hidden shadow-2xl border-4 sm:border-8 border-white transform -rotate-1 sm:-rotate-2 hover:rotate-0 transition-transform duration-500">
                <img
                  src="https://medipride.org/wp-content/uploads/2025/10/medical-banner-with-stethoscope-1-768x768.jpg"
                  alt="About MediPride"
                  className="w-full h-[280px] sm:h-[380px] lg:h-[500px] object-cover"
                />
              </div>
              <div className="absolute -bottom-4 sm:-bottom-6 -right-2 sm:-right-6 bg-white p-4 sm:p-6 rounded-2xl shadow-xl z-20 flex flex-col items-center justify-center border-b-4 border-[#00a65d]">
                <span className="text-xs sm:text-sm font-bold text-slate-400 uppercase tracking-widest">
                  Founded in
                </span>
                <span className="text-2xl sm:text-3xl font-black text-[#0093cb]">
                  2022
                </span>
              </div>
            </div>

            <div className="lg:col-span-7 space-y-6 sm:space-y-8 mt-6 lg:mt-0">
              <div>
                <span className="inline-block px-4 py-1.5 mb-3 sm:mb-4 text-xs sm:text-sm font-bold tracking-wider text-[#00a65d] uppercase bg-[#00a65d]/10 rounded-full">
                  About MediPride
                </span>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 leading-tight">
                  Bridging the gap between <br className="hidden md:block" />
                  <span className="text-[#0093cb]">
                    Clinical Knowledge &amp; Real-World Understanding
                  </span>
                </h2>
              </div>
              <div className="space-y-4 sm:space-y-6">
                <p className="text-lg sm:text-xl leading-relaxed text-slate-700 font-medium">
                  <span className="text-[#0093cb] font-bold">
                    MediPride Communications
                  </span>{" "}
                  is a specialized medical communication partner focused on
                  simplifying complex scientific information into meaningful,
                  easy-to-understand content.
                </p>
                <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
                  With a strong foundation in medical accuracy and creative
                  storytelling, MediPride helps brands connect effectively with
                  doctors, empower patients, and improve overall healthcare
                  communication.
                </p>
              </div>
              <div className="grid grid-cols-1 xs:grid-cols-2 gap-3 sm:gap-6 pt-2 sm:pt-4">
                {[
                  "Accurate",
                  "Visually engaging",
                  "Easy to understand",
                  "Result-driven",
                ].map((item, i) => (
                  <div key={i} className="flex items-center space-x-3">
                    <CheckCircle
                      size={18}
                      className="text-[#00a65d] flex-shrink-0"
                    />
                    <span className="font-medium text-slate-700 text-sm sm:text-base">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* why choose Us */}
      <section className="py-20 lg:py-28 bg-[#f8fafc] overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          {/* Header & Hero Image Section */}
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center mb-16 lg:mb-24">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7 }}
              className="lg:w-1/2 space-y-6"
            >
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#eef2f7] border border-gray-200 text-[#0b3c5d] text-sm font-bold tracking-widest uppercase shadow-sm">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#0093cb] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#0093cb]"></span>
                </span>
                Our Advantage
              </div>

              <h2 className="text-4xl lg:text-5xl font-serif font-bold text-[#0f172a] leading-tight">
                Why Choose <span className="text-[#0093cb]">MediPride?</span>
              </h2>

              <div className="space-y-4">
                <p className="text-lg text-[#6b7280] leading-relaxed">
                  At{" "}
                  <strong className="text-[#0f172a] font-semibold">
                    MediPride
                  </strong>
                  , we combine medical expertise with creative storytelling to
                  deliver communication that makes a measurable difference.
                </p>
                <p className="text-lg text-[#6b7280] leading-relaxed">
                  Our team ensures every message is accurate, visually
                  compelling, and tailored to its audience — whether for
                  patients, healthcare professionals, or global brands.
                </p>
              </div>
            </motion.div>

            {/* Hero Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7 }}
              className="lg:w-1/2 w-full relative"
            >
              {/* Using your custom shadow scale here */}
              <div className="relative aspect-[4/3] rounded-[2rem] overflow-hidden shadow-[0_30px_60px_rgba(11,60,93,0.25)] border-8 border-white group">
                {/* Replace src with your actual image */}
                <Image
                  src="https://i.pinimg.com/webp70/1200x/22/19/11/221911e521f752260dfa32c2665c7258.webp"
                  alt="Doctor consulting with a patient"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out"
                  unoptimized
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0b3c5d]/40 to-transparent pointer-events-none"></div>
              </div>

              {/* Decorative Element */}
              <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-[#8bde7a] rounded-full blur-3xl opacity-30 -z-10"></div>
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-[#0093cb] rounded-full blur-3xl opacity-20 -z-10"></div>
            </motion.div>
          </div>

          {/* Feature Grid (Balanced 6-column math) */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6 xl:gap-8"
          >
            {features.map((feature) => {
              const Icon = feature.icon;

              return (
                <motion.div
                  key={feature.id}
                  variants={itemVariants}
                  className={`group bg-white rounded-3xl p-8 transition-all duration-300 border border-gray-100 flex flex-col h-full hover:-translate-y-1.5 shadow-[0_10px_30px_rgba(15,143,191,0.05)] hover:shadow-[0_10px_30px_rgba(15,143,191,0.15)] relative overflow-hidden ${feature.colSpan}`}
                >
                  {/* Subtle top border accent on hover */}
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#0093cb] to-[#00a65d] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                  <div
                    className={`w-14 h-14 rounded-2xl ${feature.iconBg} ${feature.iconColor} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500 ease-out`}
                  >
                    <Icon className="w-7 h-7" strokeWidth={1.5} />
                  </div>

                  <h3 className="text-xl font-bold text-[#0f172a] mb-3 leading-tight group-hover:text-[#0093cb] transition-colors">
                    {feature.title}
                  </h3>

                  <p className="text-[#6b7280] leading-relaxed flex-grow text-base">
                    {feature.description}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* service */}
      <section className="py-12 sm:py-16 bg-slate-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 2xl:px-12">
          <div
            className="text-center mb-8 sm:mb-12 lg:mb-16"
            data-aos="fade-up"
            data-aos-duration="800"
          >
            <span
              className="text-[#00a65d] font-bold uppercase tracking-widest text-xs sm:text-sm inline-block"
              data-aos="fade-down"
              data-aos-delay="100"
            >
              Core Offerings
            </span>
            <h2
              className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 mt-2"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              Specialized Medical{" "}
              <span className="text-[#0093cb] relative inline-block">
                Communication Solutions
                <span className="absolute -bottom-1 left-0 w-full h-1 bg-[#0093cb]/20 rounded-full transform scale-x-0 transition-transform duration-500 group-hover:scale-x-100"></span>
              </span>
            </h2>
          </div>

          {/* Mobile / tablet: swipe carousel */}
          <SwipeCarousel count={SERVICES.length} accentColor="#0093cb">
            {SERVICES.map((service, index) => (
              <div
                key={index}
                className="snap-center flex-shrink-0 w-[82vw] sm:w-[46vw] bg-white rounded-3xl p-6 text-center shadow-sm border border-slate-100 card-hover-effect"
              >
                <div className="w-14 h-14 bg-[#0093cb]/10 rounded-2xl flex items-center justify-center text-[#0093cb] mx-auto mb-5 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-[#0093cb] transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-slate-500 leading-relaxed text-sm">
                  {service.desc}
                </p>
              </div>
            ))}
          </SwipeCarousel>

          {/* Desktop: 3-column grid with staggered animations */}
          <div className="hidden lg:grid grid-cols-3 gap-8">
            {SERVICES.map((service, index) => (
              <div
                key={index}
                className="group relative bg-white rounded-3xl p-8 text-center shadow-sm hover:shadow-xl transition-all duration-500 border border-slate-100"
                data-aos="fade-up"
                data-aos-delay={index * 100}
                data-aos-duration="600"
                style={{
                  animation: `slideUpFade 0.6s ease-out ${index * 0.1}s forwards`,
                  opacity: 0,
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#0093cb]/5 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-[#0093cb]/10 rounded-2xl flex items-center justify-center text-[#0093cb] mx-auto mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-[#0093cb] transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-slate-500 leading-relaxed">
                    {service.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PRODUCTS ── */}
      <section id="products" className="py-14 sm:py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 2xl:px-12">
          <div className="text-center mb-10 sm:mb-14 lg:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-slate-900">
              Explore Our <span className="text-[#0093cb]">Product Range</span>
            </h2>
            <p className="text-slate-500 mt-3 sm:mt-4 max-w-xs sm:max-w-xl md:max-w-2xl mx-auto text-sm sm:text-base">
              Visually rich and scientifically accurate tools designed to
              educate and engage.
            </p>
          </div>

          {PRODUCT_DATA.map((cat, idx) => (
            <div key={idx} className="mb-12 sm:mb-14 lg:mb-20 last:mb-0">
              {/* Category label */}
              <div className="flex items-center space-x-3 sm:space-x-4 mb-5 sm:mb-7">
                <h3 className="text-lg sm:text-xl md:text-2xl font-black text-slate-800 whitespace-nowrap">
                  {cat.category}
                </h3>
                <div className="h-[2px] bg-[#8bde7a] flex-grow rounded-full" />
              </div>

              {/* ── Mobile / tablet: swipe carousel ── */}
              <SwipeCarousel count={cat.items.length} accentColor="#3972b7">
                {cat.items.map((item, iidx) => (
                  <div
                    key={iidx}
                    className="snap-center flex-shrink-0 w-[82vw] sm:w-[46vw]"
                  >
                    <ProductCard item={item} />
                  </div>
                ))}
              </SwipeCarousel>

              {/* ── Desktop: 3-column grid ── */}
              <div className="hidden lg:grid grid-cols-3 gap-8">
                {cat.items.map((item, iidx) => (
                  <ProductCard key={iidx} item={item} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── FOUNDER'S NOTE ── */}
      {/* <section className="py-16 sm:py-20 lg:py-24 bg-[#3972b7] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 2xl:px-12 grid lg:grid-cols-2 gap-10 sm:gap-12 items-center">
          <div className="order-2 lg:order-1 h-[320px] sm:h-[420px] lg:h-[500px] rounded-3xl overflow-hidden shadow-2xl border-4 sm:border-8 border-white/10">
            <img
              src="https://medipride.org/wp-content/uploads/2025/11/IMG-20251106-WA0063-Edited-768x1024.jpg"
              alt="Founder Ms. Saakshi Dosi"
              className="w-full h-full object-cover object-top"
            />
          </div>
          <div className="order-1 lg:order-2 space-y-4 sm:space-y-6">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold">
              Founder's Note
            </h2>
            <p className="text-base sm:text-lg lg:text-xl leading-relaxed text-blue-50">
              MediPride believes that great medical communication goes beyond
              information—it builds trust, empowers patients, and improves
              lives. We are committed to delivering solutions that not only
              communicate but also create meaningful impact in healthcare.
            </p>
            <div className="pt-3 sm:pt-6">
              <h4 className="text-2xl sm:text-3xl font-bold">
                Ms. Saakshi Dosi
              </h4>
              <p className="text-blue-200 text-sm sm:text-base">
                Founder, MediPride Communications
              </p>
            </div>
          </div>
        </div>
      </section> */}

      <div>
        <BentoGrid />
        {/* ── NEW PRODUCT GALLERY (AFTER ABOUT) ── */}
      {/* <section className="py-12 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-[#00a65d] font-bold uppercase tracking-widest text-sm inline-block mb-2">Visual Portfolio</span>
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 leading-tight">Our <span className="text-[#0093cb]">Gallery</span></h2>
            <p className="text-slate-500 mt-4 text-lg">A glimpse into our high-quality medical communication tools and educational materials.</p>
          </div>
          <ProductGallery images={allProductImages} productName="MediPride Communications Portfolio" />
        </div>
      </section> */}
      </div>
    </div>
  );
}
