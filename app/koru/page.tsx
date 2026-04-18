"use client";

import React, { useState } from "react";
import {
  Phone,
  Mail,
  Star,
  Heart,
  Smile,
  CheckCircle,
  Wand2,
  MapPin,
  Menu,
  X,
  Clock,
  ArrowUpRight,
  FileText,
  Users,
  Monitor,
  ShieldCheck,
  Lightbulb,
  Activity,
  ArrowRight,
} from "lucide-react";
import BentoGrid from "@/components/BentoGridProducts";
import BentoGrid2 from "@/components/BentoGrid2";

// --- Complete Product Data (Branded for Koru) ---
const PRODUCT_DATA = [
  {
    category: "BOOKS & MAGAZINES",
    items: [
      {
        title: "Koru Vision Chart",
        desc: "A portable, foldable tool for quick, accurate near vision assessment, featuring standard letters in multiple sizes.",
        img: "https://medipride.org/wp-content/uploads/2025/11/Clear-Vision.jpg",
      },
      {
        title: "Clinical Tooth Tales",
        desc: "A dental education book with detailed illustrations that help professionals clearly explain tooth care.",
        img: "https://medipride.org/wp-content/uploads/2025/11/Tooth-tales.jpg",
      },
      {
        title: "PCOS Insights",
        desc: "PCOS Simplified – Understanding root causes, hormone imbalance, and the path to better management.",
        img: "https://medipride.org/wp-content/uploads/2025/11/PCOS.jpg",
      },
    ],
  },
  {
    category: "FLIP CHARTS",
    items: [
      {
        title: "ACS Diagnostic Chart",
        desc: "Acute Coronary Syndrome tool with illustrated guides and a dry-erase back for clear patient education.",
        img: "https://medipride.org/wp-content/uploads/2025/11/Acute.jpg",
      },
      {
        title: "Diabetes Risk Navigator",
        desc: "Flip-chart providing detailed information on Type 2 Diabetes Risk Factors and Prevention strategies.",
        img: "https://medipride.org/wp-content/uploads/2025/11/Type-2-Diabites.jpg",
      },
      {
        title: "Urinary System Guide",
        desc: "Featuring an illustration of the kidneys, ureters, and bladder for anatomical understanding.",
        img: "https://medipride.org/wp-content/uploads/2025/11/Urinary-Track.jpg",
      },
    ],
  },
  {
    category: "LAPTOP MATS",
    items: [
      {
        title: "Clinical Dosing Mat",
        desc: "Quickly reference the Dosing Schedule, Administration, and Important Safety Information for clinical use.",
        img: "https://medipride.org/wp-content/uploads/2025/11/Dosage.jpg",
      },
      {
        title: "Anatomy of Hearing Mat",
        desc: "Detailed charts of the Human Ear's anatomy, including vascular supply and ossicles.",
        img: "https://medipride.org/wp-content/uploads/2025/11/Ear.jpg",
      },
      {
        title: "NIHSS Stroke Mat",
        desc: "Quickly reference Stroke symptoms and the critical NIHSS scale for rapid patient assessment.",
        img: "https://medipride.org/wp-content/uploads/2025/11/Strok.jpg",
      },
    ],
  },
  {
    category: "PATIENT EDUCATION POSTERS",
    items: [
      {
        title: "Neurology: Epilepsy",
        desc: "Explains Epilepsy signs and seizures (Focal vs. Generalized) and essential First Aid DOs and DON’Ts.",
        img: "https://medipride.org/wp-content/uploads/2025/11/Epilipsy-1.jpg",
      },
      {
        title: "Auditory Health Poster",
        desc: "Details the Types of Hearing Loss along with their causes and offers Prevention Tips for auditory health.",
        img: "https://medipride.org/wp-content/uploads/2025/11/Hearning-loss.jpg",
      },
      {
        title: "Oncology: Breast Cancer",
        desc: "Outlines Symptoms, Risk Factors, Self-Examination Steps, and emphasizes Early Detection.",
        img: "https://medipride.org/wp-content/uploads/2025/11/Strok-1.jpg",
      },
    ],
  },
  {
    category: "SCALES",
    items: [
      {
        title: "WOMAC Mobility Scale",
        desc: "A scale for assessing the severity of pain, stiffness, and physical function impact of osteoarthritis.",
        img: "https://medipride.org/wp-content/uploads/2025/11/Ortho.jpg",
      },
      {
        title: "GERD Severity Ruler",
        desc: "A scoring scale used to classify the severity of GERD (heartburn) into mild, moderate, or severe.",
        img: "https://medipride.org/wp-content/uploads/2025/11/Medipride-3D-Model.jpg",
      },
      {
        title: "Vascular Flow Scale",
        desc: "Medication indicators for easing vascular flow and reducing cardiovascular event risks.",
        img: "https://medipride.org/wp-content/uploads/2025/11/Dosage-1.jpg",
      },
    ],
  },
  {
    category: "TABLE TOPS",
    items: [
      {
        title: "Facial Nerve Anatomy",
        desc: "A sharp, full-color glass-print display of facial muscle anatomy for professional reference.",
        img: "https://medipride.org/wp-content/uploads/2025/11/Facial-muscle-anotomy-glass-printing-1.jpg",
      },
      {
        title: "Lifestyle Routine Wheel",
        desc: "An engaging 24-hour visual routine wheel that guides lifestyle adjustments for bladder health.",
        img: "https://medipride.org/wp-content/uploads/2025/11/LLU-1.jpg",
      },
      {
        title: "Koru PCOS Module",
        desc: "Interactive display module for women's health clinics and educational environments.",
        img: "https://medipride.org/wp-content/uploads/2025/11/Benitowa-PCOS-1.jpg",
      },
    ],
  },
  {
    category: "WRITE & WIPE",
    items: [
      {
        title: "Osteo-Interactive Stand",
        desc: "Write & Wipe tool detailing the stages, risk factors, and treatment for Osteoporosis.",
        img: "https://medipride.org/wp-content/uploads/2025/11/Ortho-1.jpg",
      },
      {
        title: "Reproductive Edu Stand",
        desc: "Visually explaining the reproductive systems, PCOS definition, signs, and complications.",
        img: "https://medipride.org/wp-content/uploads/2025/11/PCOS-1.jpg",
      },
      {
        title: "Metabolic Management Set",
        desc: "Interactive card set for learning the causes, symptoms, and management of Diabetes.",
        img: "https://medipride.org/wp-content/uploads/2025/11/Diabites.jpg",
      },
    ],
  },
];

const SERVICES = [
  {
    title: "Medical Writing",
    desc: "Scientifically accurate content creation reviewed by clinical experts for precision.",
    icon: <FileText size={28} />,
  },
  {
    title: "Patient Education",
    desc: "Simplifying complex clinical data into engaging stories patients can understand.",
    icon: <Users size={28} />,
  },
  {
    title: "Visual Design",
    desc: "Premium medical illustrations and graphic design that amplify brand credibility.",
    icon: <Monitor size={28} />,
  },
  {
    title: "Regulatory Support",
    desc: "Ensuring all communications meet strict healthcare compliance and guidelines.",
    icon: <ShieldCheck size={28} />,
  },
  {
    title: "Brand Strategy",
    desc: "Customized narratives that bridge the gap between science and marketing.",
    icon: <Lightbulb size={28} />,
  },
  {
    title: "Clinical Tools",
    desc: "Interactive educational charts, mats, and scales for real-world medical use.",
    icon: <Activity size={28} />,
  },
];

export default function KoruCommunications() {
  return (
    <div className="text-slate-800 font-sans scroll-smooth bg-white">
      {/* --- HERO SECTION: FLIPPED (Image Left, Content Right) --- */}
      <header className="relative pt-40 pb-24 lg:pt-56 lg:pb-48 overflow-hidden xl:h-[70vh] flex items-center bg-[#f8fafc]">
        {/* 1. Background Image Layer - Subtle Zoom/Scale for Premium feel */}
        <picture className="absolute inset-0 z-0 overflow-hidden">
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
            alt="Clinical Excellence Background"
            className="w-full h-full object-cover scale-105 opacity-80"
          />
        </picture>

        {/* 2. Sophisticated Overlay - Using your --clr-bg-cream (#f8fafc) */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#f8fafc] via-[#f8fafc]/90 to-transparent z-1" />

        {/* Subtly tinted overlay for contrast */}
        <div className="absolute inset-0 bg-[#0b3c5d]/5 z-1" />

        {/* 3. Content Layer - Refined Typography & Brand Colors */}
        <div className="max-w-5xl mx-auto px-6 lg:px-8 text-center relative z-10">
          {/* Minimalist Pre-heading using --clr-secondary (#00a65d) */}
          <div className="flex items-center justify-center space-x-3 mb-6">
            <div className="h-[1px] w-8 bg-[#00a65d]" />
            <span className="text-xs font-bold tracking-[0.4em] text-[#00a65d] uppercase">
              Koru Communications
            </span>
            <div className="h-[1px] w-8 bg-[#00a65d]" />
          </div>

          <h1 className="text-5xl md:text-7xl font-black text-[#0f172a] mb-8 leading-[1.05] tracking-tight">
            Scientific Precision. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0093cb] to-[#00a65d]">
              Visual Growth.
            </span>
          </h1>

          <p className="text-lg md:text-xl text-[#6b7280] mb-12 max-w-3xl mx-auto font-medium leading-relaxed">
            Translating complex clinical data into intuitive visual narratives.
            We bridge the gap between breakthrough science and patient
            understanding through strategic communication.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            {/* Primary CTA - Rectangular (Small Radius) using --clr-primary (#0093cb) */}
            <a
              href="#contact"
              className="group inline-flex items-center space-x-3 bg-[#0093cb] text-white px-10 py-5 rounded-sm font-bold text-sm uppercase tracking-widest hover:bg-[#0b3c5d] transition-all duration-300 shadow-[0_10px_30px_rgba(0,147,203,0.2)] active:scale-95"
            >
              <Phone
                size={18}
                className="group-hover:rotate-12 transition-transform"
              />
              <span>Collaborate With Us</span>
            </a>

            {/* Secondary CTA - Clean Border with --clr-secondary text */}
            <a
              href="#products"
              className="inline-flex items-center space-x-3 bg-white border border-slate-200 text-[#0f172a] px-10 py-5 rounded-sm font-bold text-sm uppercase tracking-widest hover:border-[#00a65d] hover:text-[#00a65d] transition-all duration-300 active:scale-95 shadow-sm"
            >
              <span>View Portfolio</span>
              <ArrowUpRight size={18} />
            </a>
          </div>

          {/* Founder's Motto / Minimal detail */}
          <div className="mt-20">
            <p className="text-[10px] font-black uppercase tracking-[0.6em] text-[#0f172a] opacity-30">
              Simplifying Science • Empowering Patients
            </p>
          </div>
        </div>
      </header>
      {/* --- ABOUT US SECTION: SCALED & BRANDED --- */}
      <section
        id="about"
        className="py-12 lg:py-12 bg-[#f8fafc] overflow-hidden"
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
            {/* LEFT: SCALED Image Block with Brand Decorative Elements */}
            <div className="w-full lg:w-[500px] relative h-[520px] flex-shrink-0">
              {/* Dot grid — using --clr-secondary (#00a65d) */}
              <div className="absolute -top-6 -left-6 grid grid-cols-6 gap-3 z-0">
                {Array.from({ length: 36 }).map((_, i) => (
                  <span
                    key={i}
                    className="w-1.5 h-1.5 rounded-full bg-[#00a65d] opacity-20 block"
                  />
                ))}
              </div>

              {/* Dashed deco rings — top-left */}
              <div className="absolute -top-10 -left-10 w-56 h-56 rounded-full border border-dashed border-[#0093cb] opacity-30 z-0 animate-spin-slow" />
              <div className="absolute -top-6 -left-6 w-48 h-48 rounded-full border border-dashed border-[#00a65d] opacity-20 z-0" />

              {/* Brand blob circles — bottom-right using --clr-accent (#8bde7a) */}
              <div className="absolute -bottom-8 -right-8 w-44 h-44 rounded-full bg-[#8bde7a]/10 z-0" />
              <div className="absolute -bottom-4 -right-4 w-36 h-36 rounded-full bg-[#0093cb]/5 z-0" />

              {/* Offset border — using --clr-primary (#0093cb) */}
              <div className="absolute top-4 left-4 w-[440px] h-[440px] rounded-3xl border-2 border-[#0093cb]/30 z-[1]" />

              {/* LARGE Square image */}
              <div className="absolute top-8 left-8 w-[440px] h-[440px] rounded-3xl overflow-hidden z-[2] shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=800"
                  alt="Koru Leadership"
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                />
              </div>

              {/* Experience badge — using --clr-bg-dark (#0b3c5d) */}
              <div className="absolute top-10 -right-4 bg-[#0b3c5d] text-white rounded-2xl px-6 py-5 text-center z-[5] leading-tight shadow-xl border-b-4 border-[#8bde7a]">
                <span className="text-3xl font-black block text-[#8bde7a]">
                  10+
                </span>
                <span className="text-[10px] font-bold uppercase tracking-widest block mt-1">
                  Years of <br /> Excellence
                </span>
              </div>
            </div>

            {/* RIGHT: Text Content */}
            <div className="flex-1 min-w-0 space-y-8">
              <div>
                <div className="inline-flex items-center gap-2 border border-[#00a65d]/20 bg-[#00a65d]/5 text-[#00a65d] text-xs font-black px-5 py-2 rounded-full uppercase tracking-[0.2em] mb-6">
                  <span className="w-2 h-2 bg-[#00a65d] rounded-full animate-pulse" />
                  About Koru Communications
                </div>

                <h2 className="text-4xl md:text-6xl font-black text-[#0f172a] leading-[1.1] tracking-tighter">
                  Bridging the Gap in <br />
                  <span className="text-[#0093cb]">
                    Scientific Clarity
                  </span>{" "}
                  <br />
                  and Engagement
                </h2>
              </div>

              <p className="text-lg text-[#6b7280] leading-relaxed max-w-xl">
                We transform complex clinical breakthroughs into human-centric
                narratives. Our team is dedicated to empowering healthcare
                providers and patients through visual precision and scientific
                rigor.
              </p>

              {/* Feature Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8 pb-4">
                {[
                  "Expert Medical Writers",
                  "Regulatory-Ready Design",
                  "Patient-Centric Storytelling",
                  "High-Impact Visual Tools",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 text-[14px] font-bold text-[#0f172a]"
                  >
                    <div className="w-6 h-6 rounded-lg bg-[#00a65d]/10 flex items-center justify-center flex-shrink-0 border border-[#00a65d]/20">
                      <CheckCircle size={14} className="text-[#00a65d]" />
                    </div>
                    {item}
                  </div>
                ))}
              </div>

              {/* Call to Action */}
              {/* <div className="pt-4">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-3 bg-[#0093cb] text-white px-8 py-4 rounded-xl font-bold hover:bg-[#0b3c5d] transition-all shadow-lg shadow-[#0093cb]/20"
                >
                  <span>Learn More About Us</span>
                  <ArrowRight size={20} />
                </a>
              </div> */}
            </div>
          </div>
        </div>
      </section>

  {/* --- SERVICES: HANDCRAFTED EXPERIENCE --- */}
<section className="py-10 bg-gradient-to-br from-[#f8fafc] via-white to-[#8bde7a]/10 relative overflow-hidden">
  {/* Decorative background elements */}
  <div className="absolute top-0 right-0 w-96 h-96 bg-[#0093cb]/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4" />
  <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#00a65d]/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/4" />
  
  {/* Subtle grid pattern */}
  <div className="absolute inset-0 opacity-[0.015]">
    <svg width="100%" height="100%">
      <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
        <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="0.5" />
      </pattern>
      <rect width="100%" height="100%" fill="url(#grid)" />
    </svg>
  </div>

  <div className="max-w-7xl mx-auto px-4 relative">
    {/* Header with hand-drawn feel */}
    <div className="mb-16 relative">
      <div className="flex items-center gap-3 mb-2">
        <svg width="32" height="8" viewBox="0 0 32 8" fill="none" className="text-[#0093cb]">
          <path d="M2 6C4 2 8 1 10 3C12 5 14 7 18 4C22 1 26 5 30 3" 
                stroke="currentColor" strokeWidth="2" strokeLinecap="round" fill="none"
                className="opacity-70" />
        </svg>
        <span className="text-[#0093cb] font-medium tracking-wider text-sm uppercase">What We Do Best</span>
      </div>
      <h2 className="text-5xl lg:text-6xl font-serif italic text-[#0f172a]">
        Expert <span className="relative inline-block">
          Services
          <svg className="absolute -bottom-2 left-0 w-full" height="8" viewBox="0 0 100 8" preserveAspectRatio="none">
            <path d="M0,5 Q25,0 50,5 Q75,10 100,5" stroke="#00a65d" strokeWidth="2.5" fill="none" strokeLinecap="round" />
          </svg>
        </span>
      </h2>
      <div className="flex items-center gap-4 mt-4">
        <p className="text-[#6b7280] text-lg max-w-xl">
          A holistic approach to medical communication, blending science with storytelling.
        </p>
        <div className="h-px flex-1 bg-gradient-to-r from-[#0093cb]/50 to-transparent" />
      </div>
    </div>

    {/* Services Grid */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
      {SERVICES.map((service, index) => (
        <div
          key={index}
          className="relative group"
        >
          {/* Card with irregular border feel */}
          <div className="relative p-8 bg-white/80 backdrop-blur-sm rounded-3xl 
                        border border-[#eef2f7] shadow-lg hover:shadow-2xl
                        transition-all duration-500 ease-out
                        hover:-translate-y-2 hover:bg-white
                        before:absolute before:inset-0 before:rounded-3xl before:bg-gradient-to-br 
                        before:from-[#0093cb]/0 before:to-[#00a65d]/0 hover:before:from-[#0093cb]/5 
                        hover:before:to-[#00a65d]/5 before:transition-colors before:duration-500">
            
            {/* Decorative corner accent */}
            <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M2 2L10 10M10 10L18 2M10 10L2 18M10 10L18 18" 
                      stroke="#00a65d" strokeWidth="1.5" strokeLinecap="round" opacity="0.3" />
              </svg>
            </div>

            {/* Icon with custom SVG shapes */}
            <div className="mb-7 relative">
              <div className="w-16 h-16 bg-gradient-to-br from-[#0093cb]/10 to-[#00a65d]/10 
                            rounded-2xl flex items-center justify-center
                            group-hover:scale-110 transition-transform duration-500
                            shadow-inner">
                <div className="text-[#0093cb] transform group-hover:rotate-3 transition-transform">
                  {/* Replace with actual service icons - these are placeholders */}
                  {service.icon || (
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <circle cx="12" cy="12" r="10" className="opacity-20" fill="currentColor" />
                      <path d="M8 12L11 15L16 9" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  )}
                </div>
              </div>
              {/* Floating decorative dots */}
              <div className="absolute -top-2 -right-2 w-3 h-3 bg-[#8bde7a] rounded-full opacity-0 
                            group-hover:opacity-100 transition-all duration-500 group-hover:scale-150" />
              <div className="absolute -bottom-1 -left-1 w-2 h-2 bg-[#0093cb] rounded-full opacity-0 
                            group-hover:opacity-100 transition-all duration-700 group-hover:scale-150" />
            </div>

            {/* Content */}
            <h3 className="text-2xl font-bold text-[#0f172a] mb-3 relative inline-block">
              {service.title}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[#0093cb] to-[#00a65d] 
                             group-hover:w-full transition-all duration-500" />
            </h3>
            
            <p className="text-[#6b7280] leading-relaxed mb-4">
              {service.desc}
            </p>

            {/* Animated arrow indicator */}
            <div className="flex items-center gap-2 text-[#00a65d] font-medium text-sm 
                          opacity-0 group-hover:opacity-100 transition-all duration-300 
                          transform translate-x-0 group-hover:translate-x-2">
              <span>Learn more</span>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="group-hover:translate-x-1 transition-transform">
                <path d="M6 12L10 8L6 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          </div>

          {/* Index number with creative styling */}
          <div className="absolute -top-3 -left-3 w-8 h-8 bg-white rounded-full 
                        shadow-md flex items-center justify-center text-xs font-bold
                        text-[#0093cb] border border-[#0093cb]/30">
            {String(index + 1).padStart(2, '0')}
          </div>
        </div>
      ))}
    </div>

   
  </div>
</section>

      {/* --- FOUNDER SECTION: FLIPPED (Content Left, Image Right) --- */}
      {/* <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-16 items-center">
          <div className="order-1 space-y-8">
            <span className="inline-block bg-[#0d9488]/10 text-[#0d9488] px-4 py-1 rounded-full font-bold text-sm uppercase tracking-widest">
              Leadership
            </span>
            <h2 className="text-5xl font-black text-slate-900 leading-tight">
              A Vision for <br />
              <span className="text-[#0d9488]">Patient Growth</span>
            </h2>
            <div className="space-y-6 text-lg text-slate-600 italic border-l-4 border-[#0d9488] pl-8">
              <p>
                "Our name, Koru, represents the unfolding fern frond—symbolizing
                new life, growth, and strength. We bring this philosophy to
                every scientific narrative we craft."
              </p>
            </div>
            <div>
              <h4 className="text-3xl font-black text-slate-900">
                Ms. Saakshi Dosi
              </h4>
              <p className="text-[#0d9488] font-bold">
                Founder, Koru Communications
              </p>
            </div>
          </div>
          <div className="order-2 relative h-[600px]">
            <img
              src="https://medipride.org/wp-content/uploads/2025/11/IMG-20251106-WA0063-Edited-768x1024.jpg"
              alt="Founder"
              className="w-full h-full object-cover rounded-[3rem] shadow-2xl"
            />
          </div>
        </div>
      </section> */}

      {/* --- ALL PRODUCT CATEGORIES: FLIPPED TAGS --- */}
      {/* <section id="products" className="py-12 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-black text-slate-900">
              Koru <span className="text-[#0d9488]">Portfolio</span>
            </h2>
            <p className="text-slate-500 mt-4 uppercase tracking-[0.3em] font-bold text-sm">
              Professional Medical Artifacts
            </p>
          </div>

          {PRODUCT_DATA.map((cat, idx) => (
            <div key={idx} className="mb-24 last:mb-0">
              <div className="flex items-center space-x-6 mb-12">
                <div className="h-[2px] bg-[#0d9488] w-12" />
                <h3 className="text-xl font-black text-slate-900 uppercase tracking-widest">
                  {cat.category}
                </h3>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
                {cat.items.map((item, iidx) => (
                  <div
                    key={iidx}
                    className="group bg-white rounded-[2rem] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-slate-100"
                  >
                    <div className="relative h-64 overflow-hidden">
                      <img
                        src={item.img}
                        alt={item.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      Tag Flipped to Left Side
                      <div className="absolute bottom-4 left-4 bg-slate-900/90 backdrop-blur-sm px-4 py-1.5 rounded-lg text-[10px] font-bold text-white uppercase tracking-[0.2em]">
                        Koru Exclusive
                      </div>
                    </div>
                    <div className="p-8">
                      <h4 className="text-2xl font-bold text-slate-900 mb-3 leading-tight">
                        {item.title}
                      </h4>
                      <div className="flex gap-2 mb-4">
                        <span className="text-[10px] font-bold px-2 py-1 bg-slate-100 rounded text-slate-500">
                          ACCURACY
                        </span>
                        <span className="text-[10px] font-bold px-2 py-1 bg-[#0d9488]/10 rounded text-[#0d9488]">
                          DESIGN
                        </span>
                      </div>
                      <p className="text-slate-500 text-sm leading-relaxed mb-6">
                        {item.desc}
                      </p>
                      <button className="flex items-center text-[#0d9488] font-bold text-sm hover:gap-4 transition-all gap-2">
                        EXPLORE PRODUCT <ArrowRight size={16} />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section> */}

      {/* --- BENTO GRID SECTION --- */}
   
        <BentoGrid2 />
      
    </div>
  );
}
