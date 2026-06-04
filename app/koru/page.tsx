"use client";

import React, { useState, useRef } from "react";
import {
  Phone,
  CheckCircle,
  ArrowUpRight,
  ChevronRight,
  PenTool,
  Gift,
  Leaf,
  Layout,
  Eye,
  Droplets,
} from "lucide-react";
import {
  FileText,
  Users,
  Monitor,
  ShieldCheck,
  Lightbulb,
  Activity,
} from "lucide-react";
import ImageGallery from "@/components/Productgallery";
import Image from "next/image";
import { motion } from "framer-motion";

// ─── Define the types for the props ───────────────────────────
interface SwipeCarouselProps {
  children: React.ReactNode;
  count: number;
  accentColor?: string;
}

// ─── Reusable swipe carousel (mobile + tablet only) ───────────────────────────
function SwipeCarousel({
  children,
  count,
  accentColor = "#0093cb",
}: SwipeCarouselProps) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [activeIdx, setActiveIdx] = useState(0);

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
        .swipe-track-koru::-webkit-scrollbar { display: none; }
        .swipe-track-koru { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>

      <div
        ref={trackRef}
        onScroll={handleScroll}
        className="swipe-track-koru flex gap-3 sm:gap-4 overflow-x-auto pb-3 snap-x snap-mandatory scroll-smooth"
      >
        {children}
      </div>

      {count > 1 && (
        <div className="flex justify-center gap-1.5 sm:gap-2 mt-3 sm:mt-4">
          {Array.from({ length: count }).map((_, i) => (
            <button
              key={i}
              onClick={() => scrollTo(i)}
              aria-label={`Go to slide ${i + 1}`}
              style={{
                backgroundColor: i === activeIdx ? accentColor : "#cbd5e1",
              }}
              className={`rounded-full transition-all duration-300 ${i === activeIdx ? "w-5 sm:w-6 h-2" : "w-2 h-2"}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}

// ─── Vision Swipe Carousel (used in Why Choose KORU) ─────────────────────────
interface VisionMissionProps {
  children: React.ReactNode;
  count: number;
}

function VisionSwipeCarousel({ children, count }: VisionMissionProps) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [activeIdx, setActiveIdx] = useState(0);

  const handleScroll = () => {
    const el = trackRef.current;
    if (!el || count === 0) return;
    const cardWidth = el.scrollWidth / count;
    setActiveIdx(Math.min(Math.round(el.scrollLeft / cardWidth), count - 1));
  };

  return (
    <div className="block lg:hidden">
      <div
        ref={trackRef}
        onScroll={handleScroll}
        className="flex gap-3 sm:gap-4 overflow-x-auto pb-4 sm:pb-6 snap-x snap-mandatory scrollbar-hide"
      >
        {children}
      </div>
      <div className="flex justify-center gap-1.5 sm:gap-2">
        {Array.from({ length: count }).map((_, i) => (
          <div
            key={i}
            className={`h-1.5 rounded-full transition-all duration-300 ${i === activeIdx ? "w-5 sm:w-6 bg-[#0093cb]" : "w-1.5 bg-gray-300"}`}
          />
        ))}
      </div>
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

// ─── KORU PAGE BANNER ─────────────────────────────────────────────────────────────
const PageBanner = () => (
  <div className="relative w-full h-[60vh] md:h-[50vh] lg:h-[55vh] xl:h-[60vh] overflow-hidden">
    {/* Mobile image */}
    <Image
      src="/banner/Koru Mobile.jpg"
      alt="Koru Banner - Mobile"
      fill
      className="object-fill object-center block md:hidden"
      priority
      unoptimized
    />

    {/* Tablet image */}
    <Image
      src="/banner/Koru Tablet.jpg"
      alt="Koru Banner - Tablet"
      fill
      className="object-fill object-center hidden md:block lg:hidden"
      priority
      unoptimized
    />

    {/* Desktop image */}
    <Image
      src="/banner/Koru Desktop.jpg"
      alt="Koru Banner - Desktop"
      fill
      className="object-fill object-center hidden lg:block"
      priority
      unoptimized
    />
  </div>
);

// ─── WHY CHOOSE KORU SECTION ─────────────────────────────────────────────────
const WhyChooseKoruSection = () => {
  const KORU_FEATURES = [
    {
      icon: <PenTool size={24} />,
      title: "Custom Brand Integration",
      desc: "Transform everyday desk essentials into powerful brand touchpoints with personalized branding options designed for doctors, clinics, and healthcare professionals.",
    },
    {
      icon: <Gift size={24} />,
      title: "Premium Utility Gifting",
      desc: "Thoughtfully crafted products that deliver practical value while creating a lasting impression, making every gift both meaningful and useful.",
    },
    {
      icon: <Leaf size={24} />,
      title: "Nature-Inspired Design",
      desc: "Bring the calming influence of natural aesthetics into professional workspaces with products designed to create a more pleasant and balanced environment.",
    },
    {
      icon: <Layout size={24} />,
      title: "Multi-Functional Solutions",
      desc: "Designed to do more than one job, our products maximize desk space, improve organization, and enhance daily productivity.",
    },
    {
      icon: <Eye size={24} />,
      title: "Long-Term Brand Visibility",
      desc: "Unlike conventional giveaways, KORU products remain in daily use, keeping your brand visible where it matters most.",
    },
    {
      icon: <Droplets size={24} />,
      title: "Low-Maintenance Appeal",
      desc: "Enjoy the visual benefits of nature-inspired elements without the upkeep, making them ideal for busy healthcare and corporate settings.",
    },
  ];

  return (
    <section className="style-section-padding bg-gradient-to-br from-[#f8fafc] via-white to-[#8bde7a]/10 relative overflow-hidden">
      {/* Background decorative blobs */}
      <div className="absolute top-0 right-0 w-48 sm:w-64 md:w-80 lg:w-96 h-48 sm:h-64 md:h-80 lg:h-96 bg-[#0093cb]/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4" />
      <div className="absolute bottom-0 left-0 w-40 sm:w-56 md:w-72 lg:w-80 h-40 sm:h-56 md:h-72 lg:h-80 bg-[#00a65d]/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/4" />

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 opacity-[0.015]">
        <svg width="100%" height="100%">
          <pattern
            id="koru-grid"
            width="40"
            height="40"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M 40 0 L 0 0 0 40"
              fill="none"
              stroke="currentColor"
              strokeWidth="0.5"
            />
          </pattern>
          <rect width="100%" height="100%" fill="url(#koru-grid)" />
        </svg>
      </div>

      <div className="style-container style-container-padding relative">
        {/* Section Header */}
        <div className="style-section-header">
          <p className="style-subtitle">
            <span className="style-subtitle-line" />
            Designed for Purpose. Inspired by Nature
            <span className="style-subtitle-line" />
          </p>
          <h2 className="style-title style-title-margin">
            Why Choose <span className="style-title-highlight">KORU</span>
          </h2>
          <p className="style-description">
            Premium desk solutions and pharma gifting products designed to
            enhance workspaces, improve usability, and create lasting brand
            visibility.
          </p>
        </div>

        {/* Mobile/Tablet: Swipe Carousel */}
        <div className="block lg:hidden">
          <VisionSwipeCarousel count={KORU_FEATURES.length}>
            {KORU_FEATURES.map((feature, index) => (
              <div
                key={index}
                className="snap-center flex-shrink-0 w-[82vw] sm:w-[46vw]"
              >
                <div className="relative">
                  {/* Number badge */}
                  <div className="absolute -top-2.5 -left-2.5 w-6 h-6 sm:w-7 sm:h-7 bg-white rounded-full shadow-md flex items-center justify-center text-[10px] sm:text-xs font-bold text-[#0093cb] border border-[#0093cb]/30 z-10">
                    {String(index + 1).padStart(2, "0")}
                  </div>

                  {/* Card Content */}
                  <div className="p-4 sm:p-5 md:p-6 bg-white/80 backdrop-blur-sm rounded-2xl sm:rounded-3xl border border-[#eef2f7] shadow-lg">
                    {/* Icon */}
                    <div className="mb-4 sm:mb-5">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-[#0093cb]/10 to-[#00a65d]/10 rounded-xl sm:rounded-2xl flex items-center justify-center shadow-inner">
                        <div className="text-[#0093cb]">{feature.icon}</div>
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="style-card-title style-card-title-margin">
                      {feature.title}
                    </h3>

                    {/* Description */}
                    <p className="style-card-description">{feature.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </VisionSwipeCarousel>
        </div>

        {/* Desktop: 3-Column Grid */}
        <div className="hidden lg:grid grid-cols-3 style-grid-gap">
          {KORU_FEATURES.map((feature, index) => (
            <div key={index} className="relative group">
              {/* Number badge */}
              <div className="absolute -top-3 -left-3 xl:-top-3 xl:-left-3 w-7 h-7 xl:w-8 xl:h-8 bg-white rounded-full shadow-md flex items-center justify-center text-xs font-bold text-[#0093cb] border border-[#0093cb]/30 z-10">
                {String(index + 1).padStart(2, "0")}
              </div>

              {/* Card */}
              <div className=" transition-all duration-500 ease-out">
                {/* Decorative corner element */}
                <div className="absolute top-3 right-3 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <svg width="16" height="16" viewBox="0 0 20 20" fill="none">
                    <path
                      d="M2 2L10 10M10 10L18 2M10 10L2 18M10 10L18 18"
                      stroke="#00a65d"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      opacity="0.3"
                    />
                  </svg>
                </div>

                {/* Content */}
                <div className="p-6 xl:p-8 bg-white/80 backdrop-blur-sm rounded-2xl xl:rounded-3xl border border-[#eef2f7] shadow-lg hover:shadow-2xl transition-all duration-500 ease-out hover:-translate-y-2 hover:bg-white relative">
                  {/* Gradient overlay on hover */}
                  <div className="absolute inset-0 rounded-2xl xl:rounded-3xl bg-gradient-to-br from-[#0093cb]/0 to-[#00a65d]/0 group-hover:from-[#0093cb]/5 group-hover:to-[#00a65d]/5 transition-colors duration-500 pointer-events-none" />

                  {/* Icon */}
                  <div className="mb-5 xl:mb-6 relative">
                    <div className="w-12 h-12 xl:w-14 xl:h-14 bg-gradient-to-br from-[#0093cb]/10 to-[#00a65d]/10 rounded-xl xl:rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-500 shadow-inner">
                      <div className="text-[#0093cb] transform group-hover:rotate-3 transition-transform">
                        {feature.icon}
                      </div>
                    </div>
                    {/* Decorative dots */}
                    <div className="absolute -top-1.5 -right-1.5 w-2.5 h-2.5 bg-[#8bde7a] rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:scale-150" />
                    <div className="absolute -bottom-1 -left-1 w-1.5 h-1.5 bg-[#0093cb] rounded-full opacity-0 group-hover:opacity-100 transition-all duration-700 group-hover:scale-150" />
                  </div>

                  {/* Title */}
                  <h3 className="style-card-title style-card-title-margin relative inline-block">
                    {feature.title}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[#0093cb] to-[#00a65d] group-hover:w-full transition-all duration-500" />
                  </h3>

                  {/* Description */}
                  <p className="style-card-description">{feature.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// ─── MAIN KORU PAGE ──────────────────────────────────────────────────────────
export default function KoruCommunications() {
  return (
    <div className="text-slate-800 font-sans scroll-smooth bg-white">
      {/* ── HERO BANNER ── */}
      <PageBanner />

      {/* ── ABOUT KORU ── */}
      <section
        id="about"
        className="style-section-padding bg-[#f8fafc] overflow-hidden"
      >
        <div className="style-container style-container-padding">
          <div className="flex flex-col lg:flex-row items-center justify-center gap-8 sm:gap-10 md:gap-12 lg:gap-14 xl:gap-20 2xl:gap-24">
            {/* Image Section */}
            <div className="w-full sm:w-[340px] md:w-[380px] lg:w-[420px] xl:w-[460px] 2xl:w-[500px] relative flex-shrink-0">
              <div className="relative h-[300px] sm:h-[360px] md:h-[420px] lg:h-[440px] xl:h-[480px] 2xl:h-[520px]">
                {/* Dots Pattern */}
                <div className="absolute -top-3 -left-3 sm:-top-4 sm:-left-4 md:-top-6 md:-left-6 grid grid-cols-6 gap-2 sm:gap-3 z-0">
                  {Array.from({ length: 36 }).map((_, i) => (
                    <span
                      key={i}
                      className="w-1 sm:w-1.5 h-1 sm:h-1.5 rounded-full bg-[#00a65d] opacity-20 block"
                    />
                  ))}
                </div>

                {/* Decorative Circles */}
                <div className="absolute -top-6 -left-6 sm:-top-8 sm:-left-8 md:-top-10 md:-left-10 w-32 sm:w-40 md:w-48 lg:w-56 h-32 sm:h-40 md:h-48 lg:h-56 rounded-full border border-dashed border-[#0093cb] opacity-30 z-0 animate-spin-slow" />
                <div className="absolute -top-4 -left-4 sm:-top-5 sm:-left-5 md:-top-6 md:left-6 w-28 sm:w-32 md:w-36 lg:w-48 h-28 sm:h-32 md:h-36 lg:h-48 rounded-full border border-dashed border-[#00a65d] opacity-20 z-0" />
                <div className="absolute -bottom-5 -right-5 sm:-bottom-6 sm:-right-6 md:-bottom-8 md:-right-8 w-28 sm:w-32 md:w-40 lg:w-44 h-28 sm:h-32 md:h-40 lg:h-44 rounded-full bg-[#8bde7a]/10 z-0" />
                <div className="absolute -bottom-3 -right-3 sm:-bottom-4 sm:-right-4 w-24 sm:w-28 md:w-32 lg:w-36 h-24 sm:h-28 md:h-32 lg:h-36 rounded-full bg-[#0093cb]/5 z-0" />

                {/* Border Frame */}
                <div className="absolute top-2 left-2 sm:top-3 sm:left-3 md:top-4 md:left-4 right-0 bottom-0 rounded-2xl sm:rounded-3xl border-2 border-[#0093cb]/30 z-[1]" />

                {/* Image Container - FIXED */}
                <div className="absolute top-4 left-4 sm:top-5 sm:left-5 md:top-8 md:left-8 right-0 bottom-2 rounded-2xl sm:rounded-3xl overflow-hidden z-[2] shadow-xl sm:shadow-2xl">
                  <Image
                    src="https://pub-735dbd7583d74ad5949115d6fdf77023.r2.dev/Koru/koru-about.jpeg"
                    alt="Koru Leadership"
                    fill
                    className="object-cover object-center transition-transform duration-700 hover:scale-105"
                    unoptimized
                    priority
                  />
                </div>
              </div>
            </div>

            {/* Text Content */}
            <div className="flex-1 min-w-0 space-y-5 sm:space-y-6 md:space-y-8 xl:ml-10 w-full">
              <div>
                <div className="inline-flex items-center gap-2 border border-[#00a65d]/20 bg-[#00a65d]/5 text-[#00a65d] text-[9px] sm:text-[10px] md:text-xs font-black px-3 sm:px-4 md:px-5 py-1.5 sm:py-2 rounded-full uppercase tracking-[0.2em] mb-3 sm:mb-4 md:mb-6">
                  <span className="w-1.5 sm:w-2 h-1.5 sm:h-2 bg-[#00a65d] rounded-full animate-pulse flex-shrink-0" />
                  About Koru Communications
                </div>
                <h2 className="style-title !text-left">
                  Bringing Nature Aesthetics into{" "}
                  <span className="style-title-highlight">
                    Pharma Utility Gifting
                  </span>
                </h2>
              </div>
              <p className="style-description !text-left !max-w-3xl">
                KORU creates thoughtfully designed premium desk utility products
                and pharma promotional gifts that combine functionality with
                calming natural aesthetics. Designed for clinics, hospitals, and
                high-focus workspaces, KORU products improve usability while
                enhancing subtle brand visibility.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-2 sm:gap-y-3 md:gap-y-4 gap-x-4 sm:gap-x-6 md:gap-x-8 pb-2 sm:pb-4">
                {[
                  "Custom branding available",
                  "Premium utility gifting",
                  "Low-maintenance natural aesthetics",
                  "Multi-functional products",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-2 sm:gap-3 text-xs sm:text-[13px] md:text-[14px] font-bold text-[#0f172a]"
                  >
                    <div className="w-4 sm:w-5 md:w-6 h-4 sm:h-5 md:h-6 rounded-lg bg-[#00a65d]/10 flex items-center justify-center flex-shrink-0 border border-[#00a65d]/20">
                      <CheckCircle
                        size={10}
                        className="sm:size-3 md:size-3.5 text-[#00a65d]"
                      />
                    </div>
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── WHY CHOOSE KORU ── */}
      <WhyChooseKoruSection />

      {/* ── GALLERY ── */}
      <section className="style-section-padding bg-slate-50">
        <div className="style-container style-container-padding">
          <div className="style-section-header">
            <p className="style-subtitle">
              <span className="style-subtitle-line" />
              Visual Portfolio
              <span className="style-subtitle-line" />
            </p>
            <h2 className="style-title style-title-margin">
              Our <span className="style-title-highlight">Gallery</span>
            </h2>
            <p className="style-description">
              A glimpse into our high-quality medical communication tools and
              educational materials.
            </p>
          </div>
          <ImageGallery />
        </div>
      </section>
    </div>
  );
}
