"use client";

import React, { useState, useRef } from "react";
import { Phone, CheckCircle, ArrowUpRight } from "lucide-react";
import { FileText, Users, Monitor, ShieldCheck, Lightbulb, Activity } from "lucide-react";
import BentoGrid2 from "@/components/BentoGrid2";
import ProductGallery from "@/components/Productgallery";
import CaptureTheMoment from "@/components/CollageGallery";

const SERVICES = [
  { title: "Medical Writing", desc: "Scientifically accurate content creation reviewed by clinical experts for precision.", icon: <FileText size={28} /> },
  { title: "Patient Education", desc: "Simplifying complex clinical data into engaging stories patients can understand.", icon: <Users size={28} /> },
  { title: "Visual Design", desc: "Premium medical illustrations and graphic design that amplify brand credibility.", icon: <Monitor size={28} /> },
  { title: "Regulatory Support", desc: "Ensuring all communications meet strict healthcare compliance and guidelines.", icon: <ShieldCheck size={28} /> },
  { title: "Brand Strategy", desc: "Customized narratives that bridge the gap between science and marketing.", icon: <Lightbulb size={28} /> },
  { title: "Clinical Tools", desc: "Interactive educational charts, mats, and scales for real-world medical use.", icon: <Activity size={28} /> },
];

// ─── Define the types for the props ───────────────────────────
interface SwipeCarouselProps {
  children: React.ReactNode;
  count: number;
  accentColor?: string;
}

// ─── Reusable swipe carousel (mobile + tablet only) ───────────────────────────
function SwipeCarousel({ children, count, accentColor = "#0093cb" }: SwipeCarouselProps) {
  // Specify that the ref is for a Div element
  const trackRef = useRef<HTMLDivElement>(null);
  const [activeIdx, setActiveIdx] = useState(0);

  const handleScroll = () => {
    const el = trackRef.current;
    if (!el || count === 0) return;
    const cardWidth = el.scrollWidth / count;
    setActiveIdx(Math.min(Math.round(el.scrollLeft / cardWidth), count - 1));
  };

  // Explicitly type 'idx' as a number
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
        .swipe-track-koru::-webkit-scrollbar { display: none; }
        .swipe-track-koru { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>

      <div
        ref={trackRef}
        onScroll={handleScroll}
        className="swipe-track-koru flex gap-4 overflow-x-auto pb-3 snap-x snap-mandatory scroll-smooth"
      >
        {children}
      </div>

      {count > 1 && (
        <div className="flex justify-center gap-2 mt-4">
          {Array.from({ length: count }).map((_, i) => (
            <button
              key={i}
              onClick={() => scrollTo(i)}
              aria-label={`Go to slide ${i + 1}`}
              style={{ backgroundColor: i === activeIdx ? accentColor : "#cbd5e1" }}
              className={`rounded-full transition-all duration-300 ${i === activeIdx ? "w-6 h-2" : "w-2 h-2"}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
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
export default function KoruCommunications() {
  const allProductImages: string[] = PRODUCT_DATA.flatMap(cat =>
    cat.items.map(item => item.img)
  );
  return (
    <div className="text-slate-800 font-sans scroll-smooth bg-white">

      {/* ── HERO ── */}
      <header className="relative pt-28 pb-16 sm:pt-36 sm:pb-20 md:pt-44 md:pb-28 lg:pt-56 lg:pb-48 overflow-hidden xl:h-[70vh] flex items-center bg-[#f8fafc]">
        <picture className="absolute inset-0 z-0 overflow-hidden">
          <source media="(min-width: 1024px)" srcSet="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=2000" />
          <source media="(min-width: 640px)" srcSet="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=1200" />
          <img src="https://images.unsplash.com/photo-1559839734-2b71f1536783?auto=format&fit=crop&q=80&w=800" alt="Clinical Excellence Background" className="w-full h-full object-cover scale-105 opacity-80" />
        </picture>
        <div className="absolute inset-0 bg-gradient-to-r from-[#f8fafc] via-[#f8fafc]/90 to-transparent z-[1]" />
        <div className="absolute inset-0 bg-[#0b3c5d]/5 z-[1]" />

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 w-full">
          <div className="flex items-center justify-center space-x-3 mb-5 sm:mb-6">
            <div className="h-[1px] w-6 sm:w-8 bg-[#00a65d]" />
            <span className="text-[10px] sm:text-xs font-bold tracking-[0.3em] sm:tracking-[0.4em] text-[#00a65d] uppercase">Koru Communications</span>
            <div className="h-[1px] w-6 sm:w-8 bg-[#00a65d]" />
          </div>

          <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-[#0f172a] mb-6 sm:mb-8 leading-[1.05] tracking-tight">
            Scientific Precision. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0093cb] to-[#00a65d]">Visual Growth.</span>
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-[#6b7280] mb-8 sm:mb-12 max-w-xs sm:max-w-xl md:max-w-3xl mx-auto font-medium leading-relaxed">
            Translating complex clinical data into intuitive visual narratives. We bridge the gap between breakthrough science and patient understanding through strategic communication.
          </p>

          <div className="flex flex-col xs:flex-row items-center justify-center gap-3 sm:gap-4">
            <a href="#contact" className="group inline-flex items-center space-x-3 bg-[#0093cb] text-white px-7 sm:px-10 py-4 sm:py-5 rounded-sm font-bold text-xs sm:text-sm uppercase tracking-widest hover:bg-[#0b3c5d] transition-all duration-300 shadow-[0_10px_30px_rgba(0,147,203,0.2)] active:scale-95 w-full xs:w-auto justify-center">
              <Phone size={16} className="group-hover:rotate-12 transition-transform flex-shrink-0" />
              <span>Collaborate With Us</span>
            </a>
            <a href="#products" className="inline-flex items-center space-x-3 bg-white border border-slate-200 text-[#0f172a] px-7 sm:px-10 py-4 sm:py-5 rounded-sm font-bold text-xs sm:text-sm uppercase tracking-widest hover:border-[#00a65d] hover:text-[#00a65d] transition-all duration-300 active:scale-95 shadow-sm w-full xs:w-auto justify-center">
              <span>View Portfolio</span>
              <ArrowUpRight size={16} />
            </a>
          </div>

          <div className="mt-12 sm:mt-16 md:mt-20">
            <p className="text-[9px] sm:text-[10px] font-black uppercase tracking-[0.4em] sm:tracking-[0.6em] text-[#0f172a] opacity-30">
              Simplifying Science • Empowering Patients
            </p>
          </div>
        </div>
      </header>


      {/* ── ABOUT ── */}
      <section id="about" className="py-12 sm:py-16 lg:py-12 bg-[#f8fafc] overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 2xl:px-12">
          <div className="flex flex-col lg:flex-row items-center gap-10 sm:gap-12 lg:gap-16 xl:gap-24">

            {/* Image block */}
            <div className="w-full sm:w-[380px] md:w-[440px] lg:w-[500px] relative flex-shrink-0">
              <div className="relative h-[340px] sm:h-[420px] md:h-[500px] lg:h-[520px]">
                <div className="absolute -top-4 -left-4 sm:-top-6 sm:-left-6 grid grid-cols-6 gap-2 sm:gap-3 z-0">
                  {Array.from({ length: 36 }).map((_, i) => (
                    <span key={i} className="w-1 sm:w-1.5 h-1 sm:h-1.5 rounded-full bg-[#00a65d] opacity-20 block" />
                  ))}
                </div>
                <div className="absolute -top-8 -left-8 sm:-top-10 sm:-left-10 w-40 sm:w-56 h-40 sm:h-56 rounded-full border border-dashed border-[#0093cb] opacity-30 z-0 animate-spin-slow" />
                <div className="absolute -top-5 -left-5 sm:-top-6 sm:-left-6 w-36 sm:w-48 h-36 sm:h-48 rounded-full border border-dashed border-[#00a65d] opacity-20 z-0" />
                <div className="absolute -bottom-6 -right-6 sm:-bottom-8 sm:-right-8 w-32 sm:w-44 h-32 sm:h-44 rounded-full bg-[#8bde7a]/10 z-0" />
                <div className="absolute -bottom-3 -right-3 sm:-bottom-4 sm:-right-4 w-28 sm:w-36 h-28 sm:h-36 rounded-full bg-[#0093cb]/5 z-0" />
                <div className="absolute top-3 left-3 sm:top-4 sm:left-4 right-0 bottom-0 rounded-3xl border-2 border-[#0093cb]/30 z-[1]" />
                <div className="absolute top-5 left-5 sm:top-8 sm:left-8 right-0 bottom-0 rounded-3xl overflow-hidden z-[2] shadow-2xl">
                  <img src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=800" alt="Koru Leadership" className="w-full h-full object-cover transition-transform duration-700 hover:scale-110" />
                </div>
                <div className="absolute top-6 -right-2 sm:top-10 sm:-right-4 bg-[#0b3c5d] text-white rounded-2xl px-4 sm:px-6 py-3 sm:py-5 text-center z-[5] leading-tight shadow-xl border-b-4 border-[#8bde7a]">
                  <span className="text-2xl sm:text-3xl font-black block text-[#8bde7a]">10+</span>
                  <span className="text-[9px] sm:text-[10px] font-bold uppercase tracking-widest block mt-1">Years of <br /> Excellence</span>
                </div>
              </div>
            </div>

            {/* Text content */}
            <div className="flex-1 min-w-0 space-y-6 sm:space-y-8 w-full">
              <div>
                <div className="inline-flex items-center gap-2 border border-[#00a65d]/20 bg-[#00a65d]/5 text-[#00a65d] text-[10px] sm:text-xs font-black px-4 sm:px-5 py-2 rounded-full uppercase tracking-[0.2em] mb-4 sm:mb-6">
                  <span className="w-2 h-2 bg-[#00a65d] rounded-full animate-pulse flex-shrink-0" />
                  About Koru Communications
                </div>
                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-black text-[#0f172a] leading-[1.1] tracking-tighter">
                  Bridging the Gap in <br />
                  <span className="text-[#0093cb]">Scientific Clarity</span> <br />
                  and Engagement
                </h2>
              </div>
              <p className="text-base sm:text-lg text-[#6b7280] leading-relaxed max-w-xl">
                We transform complex clinical breakthroughs into human-centric narratives. Our team is dedicated to empowering healthcare providers and patients through visual precision and scientific rigor.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 sm:gap-y-4 gap-x-6 sm:gap-x-8 pb-2 sm:pb-4">
                {["Expert Medical Writers", "Regulatory-Ready Design", "Patient-Centric Storytelling", "High-Impact Visual Tools"].map((item) => (
                  <div key={item} className="flex items-center gap-3 text-[13px] sm:text-[14px] font-bold text-[#0f172a]">
                    <div className="w-5 sm:w-6 h-5 sm:h-6 rounded-lg bg-[#00a65d]/10 flex items-center justify-center flex-shrink-0 border border-[#00a65d]/20">
                      <CheckCircle size={12} className="text-[#00a65d]" />
                    </div>
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* ── SERVICES ── */}
      <section className="py-10 sm:py-14 lg:py-10 bg-gradient-to-br from-[#f8fafc] via-white to-[#8bde7a]/10 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 sm:w-96 h-64 sm:h-96 bg-[#0093cb]/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4" />
        <div className="absolute bottom-0 left-0 w-56 sm:w-80 h-56 sm:h-80 bg-[#00a65d]/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/4" />
        <div className="absolute inset-0 opacity-[0.015]">
          <svg width="100%" height="100%">
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="0.5" />
            </pattern>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 2xl:px-12 relative">

          {/* Header */}
          <div className="mb-8 sm:mb-12 lg:mb-16 relative">
            <div className="flex items-center gap-3 mb-2">
              <svg width="32" height="8" viewBox="0 0 32 8" fill="none" className="text-[#0093cb]">
                <path d="M2 6C4 2 8 1 10 3C12 5 14 7 18 4C22 1 26 5 30 3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" fill="none" className="opacity-70" />
              </svg>
              <span className="text-[#0093cb] font-medium tracking-wider text-xs sm:text-sm uppercase">What We Do Best</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-serif italic text-[#0f172a]">
              Expert{" "}
              <span className="relative inline-block">
                Services
                <svg className="absolute -bottom-2 left-0 w-full" height="8" viewBox="0 0 100 8" preserveAspectRatio="none">
                  <path d="M0,5 Q25,0 50,5 Q75,10 100,5" stroke="#00a65d" strokeWidth="2.5" fill="none" strokeLinecap="round" />
                </svg>
              </span>
            </h2>
            <div className="flex items-center gap-4 mt-4">
              <p className="text-[#6b7280] text-base sm:text-lg max-w-xs sm:max-w-xl">
                A holistic approach to medical communication, blending science with storytelling.
              </p>
              <div className="hidden sm:block h-px flex-1 bg-gradient-to-r from-[#0093cb]/50 to-transparent" />
            </div>
          </div>

          {/* ── Mobile / tablet: swipe carousel ── */}
          <SwipeCarousel count={SERVICES.length} accentColor="#0093cb">
            {SERVICES.map((service, index) => (
              <div
                key={index}
                className="snap-center flex-shrink-0 w-[82vw] sm:w-[46vw] relative group"
              >
                <div className="relative p-6 bg-white/80 backdrop-blur-sm rounded-3xl border border-[#eef2f7] shadow-lg h-full">
                  <div className="mb-5 relative">
                    <div className="w-12 h-12 bg-gradient-to-br from-[#0093cb]/10 to-[#00a65d]/10 rounded-2xl flex items-center justify-center shadow-inner">
                      <div className="text-[#0093cb]">{service.icon}</div>
                    </div>
                  </div>
                  <h3 className="text-lg font-bold text-[#0f172a] mb-2">{service.title}</h3>
                  <p className="text-[#6b7280] leading-relaxed text-sm">{service.desc}</p>
                </div>
                <div className="absolute -top-3 -left-3 w-7 h-7 bg-white rounded-full shadow-md flex items-center justify-center text-[10px] font-bold text-[#0093cb] border border-[#0093cb]/30">
                  {String(index + 1).padStart(2, "0")}
                </div>
              </div>
            ))}
          </SwipeCarousel>

          {/* ── Desktop: 3-column grid ── */}
          <div className="hidden lg:grid grid-cols-3 gap-6 lg:gap-8">
            {SERVICES.map((service, index) => (
              <div key={index} className="relative group">
                <div className="relative p-8 bg-white/80 backdrop-blur-sm rounded-3xl border border-[#eef2f7] shadow-lg hover:shadow-2xl transition-all duration-500 ease-out hover:-translate-y-2 hover:bg-white
                  before:absolute before:inset-0 before:rounded-3xl before:bg-gradient-to-br before:from-[#0093cb]/0 before:to-[#00a65d]/0 hover:before:from-[#0093cb]/5 hover:before:to-[#00a65d]/5 before:transition-colors before:duration-500">
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                      <path d="M2 2L10 10M10 10L18 2M10 10L2 18M10 10L18 18" stroke="#00a65d" strokeWidth="1.5" strokeLinecap="round" opacity="0.3" />
                    </svg>
                  </div>
                  <div className="mb-7 relative">
                    <div className="w-16 h-16 bg-gradient-to-br from-[#0093cb]/10 to-[#00a65d]/10 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-500 shadow-inner">
                      <div className="text-[#0093cb] transform group-hover:rotate-3 transition-transform">{service.icon}</div>
                    </div>
                    <div className="absolute -top-2 -right-2 w-3 h-3 bg-[#8bde7a] rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:scale-150" />
                    <div className="absolute -bottom-1 -left-1 w-2 h-2 bg-[#0093cb] rounded-full opacity-0 group-hover:opacity-100 transition-all duration-700 group-hover:scale-150" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#0f172a] mb-3 relative inline-block">
                    {service.title}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[#0093cb] to-[#00a65d] group-hover:w-full transition-all duration-500" />
                  </h3>
                  <p className="text-[#6b7280] leading-relaxed mb-4">{service.desc}</p>
                  <div className="flex items-center gap-2 text-[#00a65d] font-medium text-sm opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-0 group-hover:translate-x-2">
                    <span>Learn more</span>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="group-hover:translate-x-1 transition-transform">
                      <path d="M6 12L10 8L6 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                </div>
                <div className="absolute -top-3 -left-3 w-8 h-8 bg-white rounded-full shadow-md flex items-center justify-center text-xs font-bold text-[#0093cb] border border-[#0093cb]/30">
                  {String(index + 1).padStart(2, "0")}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* ── BENTO GRID ── */}
      {/* <BentoGrid2 /> */}
      <section className="py-12 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-[#00a65d] font-bold uppercase tracking-widest text-sm inline-block mb-2">Visual Portfolio</span>
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 leading-tight">Our <span className="text-[#0093cb]">Gallery</span></h2>
            <p className="text-slate-500 mt-4 text-lg">A glimpse into our high-quality medical communication tools and educational materials.</p>
          </div>
          <ProductGallery images={allProductImages} productName="MediPride Communications Portfolio" />
        </div>

        <CaptureTheMoment
          photos={[
            "https://medipride.org/wp-content/uploads/2025/11/Clear-Vision.jpg",
            "https://medipride.org/wp-content/uploads/2025/11/Clear-Vision.jpg",
            "https://medipride.org/wp-content/uploads/2025/11/Clear-Vision.jpg",
            "https://medipride.org/wp-content/uploads/2025/11/Clear-Vision.jpg",
            "https://medipride.org/wp-content/uploads/2025/11/Clear-Vision.jpg",
            "https://medipride.org/wp-content/uploads/2025/11/Clear-Vision.jpg",
            "https://medipride.org/wp-content/uploads/2025/11/Clear-Vision.jpg",
            "https://medipride.org/wp-content/uploads/2025/11/Clear-Vision.jpg",
            "https://medipride.org/wp-content/uploads/2025/11/Clear-Vision.jpg",
            "https://medipride.org/wp-content/uploads/2025/11/Clear-Vision.jpg",
            "https://medipride.org/wp-content/uploads/2025/11/Clear-Vision.jpg",
            "https://medipride.org/wp-content/uploads/2025/11/Clear-Vision.jpg",
            "https://medipride.org/wp-content/uploads/2025/11/Clear-Vision.jpg",
            "https://medipride.org/wp-content/uploads/2025/11/Clear-Vision.jpg",
            "https://medipride.org/wp-content/uploads/2025/11/Clear-Vision.jpg",
            "https://medipride.org/wp-content/uploads/2025/11/Clear-Vision.jpg",
            "https://medipride.org/wp-content/uploads/2025/11/Clear-Vision.jpg",
            "https://medipride.org/wp-content/uploads/2025/11/Clear-Vision.jpg",
            // ... 18 photos total
          ]}
          location="SMK Wachid Hasyim 2"
          date="06.06.2022"
          caption={"Congrats buat kalian semua atas kelulusan ini.\nDoa terbaik, Sukses selalu."}
          credit="created by rzqwahyuu"
        />
      </section>
    </div>
  );
}