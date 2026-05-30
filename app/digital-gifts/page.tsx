// app/digital-services/page.tsx
'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import {
  ArrowUpRight,
  LayoutDashboard,
  BarChart3,
  HeartPulse,
  Users,
  Globe,
  Smartphone,
  Video,
  Database,
  Sparkles,
  Eye,
  Zap,
  ChevronRight,
  Tag,
  Calendar,
  Clock,
  ArrowRight,
} from 'lucide-react';

// ─── TYPES ──────────────────────────────────────────────────────────────────
interface ServiceCategory {
  id: string;
  number: string;
  title: string;
  description: string;
  icon: React.ElementType;
  gradient: string;
}

interface GalleryImage {
  id: string;
  src: string;
  title: string;
  category: string;
}

// ─── DATA ────────────────────────────────────────────────────────────────────
const serviceCategories: ServiceCategory[] = [
  {
    id: "customized-dashboard",
    number: "01",
    title: "Customized Dashboard",
    description: "Tailored analytics dashboards providing real-time insights and KPIs for pharmaceutical sales and marketing teams with role-based access.",
    icon: LayoutDashboard,
    gradient: "from-[#0093cb] to-[#00a65d]",
  },
  {
    id: "customized-analytics",
    number: "02",
    title: "Customized Analytics",
    description: "Advanced pharmaceutical analytics solutions delivering deep insights into prescription patterns, market trends, and HCP behavior.",
    icon: BarChart3,
    gradient: "from-[#0093cb] to-[#8bde7a]",
  },
  {
    id: "health-risk-calculators",
    number: "03",
    title: "Health Risk Calculators",
    description: "Interactive health risk assessment tools that engage patients and HCPs while generating valuable health insights and leads.",
    icon: HeartPulse,
    gradient: "from-[#00a65d] to-[#8bde7a]",
  },
  {
    id: "patient-support-programs",
    number: "04",
    title: "Patient Support Programs",
    description: "Comprehensive digital patient support ecosystems including medication adherence, education, and 24/7 assistance platforms.",
    icon: Users,
    gradient: "from-[#0093cb] to-[#00a65d]",
  },
  {
    id: "mini-websites",
    number: "05",
    title: "Mini Websites",
    description: "Dedicated micro-sites and landing pages for pharmaceutical brands, products, and disease awareness campaigns.",
    icon: Globe,
    gradient: "from-[#0093cb] to-[#8bde7a]",
  },
  {
    id: "customized-apps",
    number: "06",
    title: "Customized Apps",
    description: "Native and cross-platform mobile applications tailored for pharmaceutical sales reps, HCPs, and patient engagement.",
    icon: Smartphone,
    gradient: "from-[#00a65d] to-[#8bde7a]",
  },
  {
    id: "video-production",
    number: "07",
    title: "Video Production & Editing",
    description: "Professional medical video production services including 3D animations, MOA videos, and HCP testimonial content.",
    icon: Video,
    gradient: "from-[#0093cb] to-[#00a65d]",
  },
  {
    id: "variable-data",
    number: "08",
    title: "Variable Data Collection & Printing",
    //  with automated data integration.
    description: "Intelligent variable data solutions for personalized pharmaceutical marketing materials",
    icon: Database,
    gradient: "from-[#0093cb] to-[#8bde7a]",
  },
];

const koruGalleryImages: GalleryImage[] = [
  { id: "g-1", src: "https://pub-735dbd7583d74ad5949115d6fdf77023.r2.dev/Digital%20Inputs/10.png", title: "Custom Dashboard Interface", category: "Dashboard" },
  { id: "g-2", src: "https://pub-735dbd7583d74ad5949115d6fdf77023.r2.dev/Therepy/Cardio/ChatGPT%20Image%20May%2025%2C%202026%2C%2004_15_09%20PM.png", title: "Analytics Visualization", category: "Analytics" },
  { id: "g-3", src: "https://pub-735dbd7583d74ad5949115d6fdf77023.r2.dev/Therepy/Cardio/ChatGPT%20Image%20May%2025%2C%202026%2C%2004_06_57%20PM.png", title: "Health Risk Calculator", category: "HRA Tools" },
  { id: "g-4", src: "https://pub-735dbd7583d74ad5949115d6fdf77023.r2.dev/Digital%20Inputs/23.png", title: "Patient Support Portal", category: "Patient Programs" },
  { id: "g-5", src: "https://pub-735dbd7583d74ad5949115d6fdf77023.r2.dev/Digital%20Inputs/3.png", title: "Mini Website Design", category: "Websites" },
  { id: "g-6", src: "https://pub-735dbd7583d74ad5949115d6fdf77023.r2.dev/Digital%20Inputs/52.png", title: "Mobile App Interface", category: "Apps" },
  { id: "g-7", src: "https://pub-735dbd7583d74ad5949115d6fdf77023.r2.dev/Digital%20Inputs/68.png", title: "Video Production Still", category: "Video" },
  { id: "g-8", src: "https://pub-735dbd7583d74ad5949115d6fdf77023.r2.dev/Digital%20Inputs/9.png", title: "Variable Data Print Sample", category: "Print" },
  { id: "g-9", src: "https://pub-735dbd7583d74ad5949115d6fdf77023.r2.dev/Therepy/Neurology/82.png", title: "Sales Dashboard View", category: "Dashboard" },
  { id: "g-10", src: "https://pub-735dbd7583d74ad5949115d6fdf77023.r2.dev/Therepy/Neurology/87.png", title: "Territory Analytics", category: "Analytics" },
  { id: "g-11", src: "https://pub-735dbd7583d74ad5949115d6fdf77023.r2.dev/Therepy/Urology/23.png", title: "Risk Assessment Tool", category: "HRA Tools" },
  { id: "g-12", src: "https://pub-735dbd7583d74ad5949115d6fdf77023.r2.dev/Therepy/Dermatology/ChatGPT%20Image%20May%2029%2C%202026%2C%2004_39_27%20PM.png", title: "Patient App Screen", category: "Patient Programs" },
  { id: "g-13", src: "/koru/koru13.png", title: "Dashboard Analytics", category: "Dashboard" },
  { id: "g-14", src: "/koru/koru14.png", title: "Report Interface", category: "Analytics" },
  { id: "g-15", src: "/koru/koru15.png", title: "Health Assessment", category: "HRA Tools" },
  { id: "g-16", src: "/koru/koru16.png", title: "Patient Dashboard", category: "Patient Programs" },
  { id: "g-17", src: "/koru/koru17.png", title: "Web Design", category: "Websites" },
  { id: "g-18", src: "/koru/koru18.png", title: "Mobile Dashboard", category: "Apps" },
  { id: "g-19", src: "/koru/koru19.png", title: "Video Frame", category: "Video" },
  { id: "g-20", src: "/koru/koru20.png", title: "Print Design", category: "Print" },
  { id: "g-21", src: "/koru/koru21.png", title: "Dashboard UI", category: "Dashboard" },
  { id: "g-22", src: "/koru/koru22.png", title: "Charts View", category: "Analytics" },
  { id: "g-23", src: "/koru/koru23.png", title: "Risk Tool", category: "HRA Tools" },
  { id: "g-24", src: "/koru/koru24.png", title: "Patient App", category: "Patient Programs" },
];

// ─── COLLAGE GRID HELPERS ────────────────────────────────────────────────────
type GridItem = {
  src: string;
  colStart: number;
  colSpan: number;
  rowSpan: number;
};

function buildBlock(srcs: string[]): GridItem[] {
  const s = (i: number) => srcs[i] ?? srcs[srcs.length - 1];

  return [
    { src: s(0), colStart: 1, colSpan: 1, rowSpan: 3 },
    { src: s(1), colStart: 2, colSpan: 1, rowSpan: 2 },
    { src: s(2), colStart: 3, colSpan: 1, rowSpan: 2 },
    { src: s(3), colStart: 4, colSpan: 1, rowSpan: 2 },
    { src: s(4), colStart: 2, colSpan: 1, rowSpan: 3 },
    { src: s(5), colStart: 3, colSpan: 1, rowSpan: 2 },
    { src: s(6), colStart: 4, colSpan: 1, rowSpan: 2 },
    { src: s(7), colStart: 1, colSpan: 1, rowSpan: 2 },
    { src: s(8), colStart: 3, colSpan: 1, rowSpan: 3 },
    { src: s(9), colStart: 4, colSpan: 1, rowSpan: 3 },
    { src: s(10), colStart: 1, colSpan: 1, rowSpan: 2 },
    { src: s(11), colStart: 2, colSpan: 1, rowSpan: 2 },
  ];
}

function buildGridItems(images: GalleryImage[]): GridItem[] {
  const items: GridItem[] = [];
  for (let i = 0; i < images.length; i += 12) {
    const srcs = images.slice(i, i + 12).map((img) => img.src);
    items.push(...buildBlock(srcs));
  }
  return items;
}

// ─── SECTION BADGE ───────────────────────────────────────────────────────────
function SectionBadge({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <span className={`inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-semibold ${className}`}>
      {children}
    </span>
  );
}

// ─── DIGITAL PAGE BANNER ─────────────────────────────────────────────────────
const PageBanner = () => (
    <div className="relative w-full h-[60vh] md:h-[50vh] lg:h-[55vh] xl:h-[60vh] overflow-hidden">
    {/* Mobile image */}
    <Image
      src="/banner/Digital Input Page Mobile.jpg"
      alt="Digital Banner - Mobile"
      fill
      className="object-fill object-center block md:hidden"
      priority
      unoptimized
    />

    {/* Tablet image */}
    <Image
      src="/banner/Digital Input Page Tablet  (2).jpg"
      alt="Digital Banner - Tablet"
      fill
      className="object-fill object-center hidden md:block lg:hidden"
      priority
      unoptimized
    />

    {/* Desktop image */}
    <Image
      src="/banner/Digital Input Page Desktop.jpg"
      alt="Digital Banner - Desktop"
      fill
      className="object-fill object-center hidden lg:block"
      priority
      unoptimized
    />

   
  </div>
);

// ─── HYPERPERSONALIZED SERVICES SECTION ──────────────────────────────────────
function HyperPersonalizedServices() {
  return (
    <section className="py-10 sm:py-12 md:py-14 lg:py-18 xl:py-20 2xl:py-24 bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-[1500px] mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          className="text-center mb-10 sm:mb-12 md:mb-14 lg:mb-16"
        >
          {/* <SectionBadge className="bg-[#0093cb]/10 text-[#0093cb] border border-[#0093cb]/20 mb-3 sm:mb-4">
            <Zap size={14} className="sm:size-4" />
            Tailored Solutions
          </SectionBadge>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-extrabold text-slate-900 mb-4 sm:mb-5 md:mb-6">
            Hyperpersonalized
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#0093cb] to-[#00a65d]">
              Services
            </span>
          </h2> */}
            <p className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.2em] mb-2 sm:mb-3 flex items-center justify-center gap-2 text-[#0093cb]">
            <span className="inline-block w-4 sm:w-5 md:w-6 h-[1.5px] bg-[#0093cb]" />
           Tailored Solutions
            <span className="inline-block w-4 sm:w-5 md:w-6 h-[1.5px] bg-[#0093cb]" />
          </p>
          <h2 className="text-2xl sm:text-3xl lg:text-3xl xl:text-4xl font-extrabold capitalize tracking-tight mb-2 sm:mb-3 text-slate-900">
                Hyperpersonalized<span className="text-[#0093cb]">   Services</span>
          </h2>
          <p className="text-base sm:text-lg xl:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            We craft bespoke digital solutions that adapt to your unique pharmaceutical
            brand needs. Each service is meticulously personalized to drive engagement,
            compliance, and measurable outcomes.
          </p>
          <div className="mt-5 sm:mt-6 w-20 sm:w-24 h-1 bg-gradient-to-r from-[#0093cb] to-[#00a65d] rounded-full mx-auto" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-5 md:gap-6">
          {serviceCategories.map((service, index) => (
            <FlipCard key={service.id} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── FLIP CARD (with brand colors and Explore button) ────────────────────────
function FlipCard({ service, index }: { service: ServiceCategory; index: number }) {
  const [isFlipped, setIsFlipped] = useState(false);
  const Icon = service.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className="relative h-[280px] sm:h-[300px] md:h-[310px] lg:h-[300px] xl:h-[320px] perspective-1000"
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
    >
      <motion.div
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
        className="relative w-full h-full preserve-3d"
        style={{ transformStyle: 'preserve-3d' }}
      >
        {/* Front Face */}
        <div
          className="absolute inset-0 backface-hidden rounded-2xl sm:rounded-3xl border border-slate-200 bg-white shadow-lg flex flex-col items-center justify-center p-6 sm:p-8 cursor-pointer group"
          style={{ backfaceVisibility: 'hidden' }}
        >
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl sm:rounded-3xl"
            style={{
              background: 'radial-gradient(circle at center, rgba(0, 166, 93, 0.06) 0%, transparent 70%)',
            }}
          />
          <div className="absolute top-3 sm:top-4 left-3 sm:left-4">
            <span className="text-[10px] sm:text-xs font-bold text-slate-400 bg-slate-100 px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full">
              {service.number}
            </span>
          </div>
          <div className={`w-16 h-16 sm:w-18 sm:h-18 md:w-20 md:h-20 rounded-xl sm:rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-4 sm:mb-5 md:mb-6 shadow-lg group-hover:shadow-xl transition-shadow duration-500 relative z-10`}>
            <Icon size={28} className="sm:size-8 md:size-9 text-white" />
          </div>
          <h3 className="text-lg sm:text-xl font-extrabold text-slate-900 text-center mb-2 sm:mb-3 group-hover:text-[#00a65d] transition-colors duration-300 relative z-10">
            {service.title}
          </h3>
          <p className="text-xs sm:text-sm text-slate-500 text-center leading-relaxed line-clamp-2 relative z-10">
            {service.description.split('.')[0]}.
          </p>
          {/* <div className="absolute bottom-4 sm:bottom-6 flex items-center gap-1 sm:gap-1.5 text-[10px] sm:text-xs text-slate-400 group-hover:text-[#0093cb] transition-colors duration-300">
            <span>Hover to explore</span>
            <motion.svg
              animate={{ rotate: isFlipped ? 180 : 0 }}
              className="w-2.5 h-2.5 sm:w-3 sm:h-3"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </motion.svg>
          </div> */}
        </div>

        {/* Back Face */}
        <div
          className="absolute inset-0 backface-hidden rounded-2xl sm:rounded-3xl bg-gradient-to-br from-slate-900 to-slate-800 text-white shadow-2xl flex flex-col items-center justify-center p-6 sm:p-8"
          style={{ 
            backfaceVisibility: 'hidden',
            transform: 'rotateY(180deg)',
          }}
        >
          <div className={`absolute inset-0 opacity-10 rounded-2xl sm:rounded-3xl bg-gradient-to-br ${service.gradient}`} />
          <div className="absolute top-3 sm:top-4 left-3 sm:left-4">
            <span className="text-[10px] sm:text-xs font-bold text-[#8bde7a] bg-white/10 backdrop-blur-sm px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full">
              {service.number}
            </span>
          </div>
          <div className={`w-12 h-12 sm:w-13 sm:h-13 md:w-14 md:h-14 rounded-lg sm:rounded-xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-4 sm:mb-5 shadow-lg relative z-10`}>
            <Icon size={24} className="sm:size-6 md:size-7 text-white" />
          </div>
          <h3 className="text-base sm:text-lg font-extrabold text-white text-center mb-2 sm:mb-3 relative z-10">
            {service.title}
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 text-center leading-relaxed relative z-10 mb-5 sm:mb-6">
            {service.description}
          </p>
          
          {/* Explore Button - Navigates to Contact Us */}
          <Link
            href="/contact-us"
            className="relative z-20 inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm 
              hover:bg-[#0093cb] text-white px-5 py-2 rounded-full font-semibold text-sm 
              transition-all duration-300 hover:shadow-lg hover:shadow-[#0093cb]/30 
              border border-white/20 hover:border-[#0093cb] group/btn"
          >
            <span>Explore {service.title.split(' ')[0]}</span>
            <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-1" />
          </Link>
          
          <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${service.gradient}`} />
        </div>
      </motion.div>
    </motion.div>
  );
}

// ─── COLLAGE GALLERY SECTION ─────────────────────────────────────────────────
function CollageGallerySection() {
  const INITIAL_COUNT = 12;
  const [showAll, setShowAll] = useState(false);
  
  const source = showAll ? koruGalleryImages : koruGalleryImages.slice(0, INITIAL_COUNT);
  const gridItems = buildGridItems(source);
  const hasMoreImages = koruGalleryImages.length > INITIAL_COUNT;

  return (
    <section className="py-10 sm:py-12 md:py-14 lg:py-18 xl:py-20 2xl:py-24" style={{ background: 'linear-gradient(135deg, #f0f9ff 0%, #f0fdf4 50%, #f8faf8 100%)' }}>
      <div className="max-w-[1500px] mx-auto px-4 sm:px-6">
        {/* Gallery Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          className="text-center mb-8 sm:mb-10 md:mb-12"
        >
           <p className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.2em] mb-2 sm:mb-3 flex items-center justify-center gap-2 text-[#0093cb]">
            <span className="inline-block w-4 sm:w-5 md:w-6 h-[1.5px] bg-[#0093cb]" />
           Portfolio Showcase
            <span className="inline-block w-4 sm:w-5 md:w-6 h-[1.5px] bg-[#0093cb]" />
          </p>
          <h2 className="text-2xl sm:text-3xl lg:text-3xl xl:text-4xl font-extrabold capitalize tracking-tight mb-2 sm:mb-3 text-slate-900">
           Digital Input <span className="text-[#0093cb]">Gallery</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Explore our collection of digital service interfaces and solutions crafted for
            pharmaceutical companies. Each design is meticulously created to enhance
            user engagement and deliver impactful digital experiences.
          </p>
          <div className="mt-5 sm:mt-6 w-20 sm:w-24 h-1 bg-gradient-to-r from-[#00a65d] to-[#8bde7a] rounded-full mx-auto" />
        </motion.div>

        {/* Collage Grid */}
        <motion.div 
          layout
          className="gap-2 sm:gap-3 md:gap-4 2xl:gap-6"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gridAutoRows: '120px',
          }}
        >
          {gridItems.map((item, index) => (
            <motion.div
              key={index}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.03, duration: 0.4 }}
              className="relative overflow-hidden group"
              style={{
                gridColumn: `${item.colStart} / span ${item.colSpan}`,
                gridRow: `span ${item.rowSpan}`,
                borderRadius: '12px',
                boxShadow: '0 1px 3px rgba(0,0,0,0.08)',
              }}
            >
              {/* Brand Accent Overlay */}
              <div 
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 pointer-events-none"
                style={{
                  background: 'linear-gradient(135deg, rgba(0,147,203,0.15) 0%, rgba(0,166,93,0.1) 100%)',
                  borderRadius: '12px',
                }}
              />
              
              {/* Subtle border glow on hover */}
              <div 
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 pointer-events-none rounded-xl"
                style={{
                  boxShadow: 'inset 0 0 0 2px rgba(0,147,203,0.3)',
                }}
              />

              <Image
                src={item.src}
                alt={`Gallery image ${index + 1}`}
                fill
                className="object-fill group-hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
              />

              {/* Image number badge */}
              <div 
                className="absolute top-1.5 sm:top-2 left-1.5 sm:left-2 z-20 text-[10px] sm:text-xs font-bold px-1.5 sm:px-2 py-0.5 sm:py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ 
                  backgroundColor: '#060706',
                  color: '#ffffff'
                }}
              >
                {index + 1}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* See More / See Less Button - Brand Colors */}
        {hasMoreImages && (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-8 sm:mt-10 text-center"
          >
            {!showAll ? (
              <button
                onClick={() => setShowAll(true)}
                className="group flex items-center gap-2 sm:gap-3 bg-[#0093cb] hover:bg-[#00a65d] 
                  text-white px-5 lg:px-6 xl:px-8 py-2.5 lg:py-3 xl:py-3.5 rounded-full font-semibold text-sm xl:text-base 
                  transition-all duration-300 hover:shadow-lg hover:shadow-[#0093cb]/30 active:scale-95 mx-auto"
              >
                <span>See All ({koruGalleryImages.length - INITIAL_COUNT}+ more)</span>
                <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 transition-transform group-hover:translate-x-1" />
              </button>
            ) : (
              <button
                onClick={() => setShowAll(false)}
                className="group flex items-center gap-2 sm:gap-3 bg-white border-2 border-[#0093cb] 
                  text-[#0093cb] hover:bg-[#0093cb] hover:text-white px-5 lg:px-6 xl:px-8 py-2.5 lg:py-3 xl:py-3.5 
                  rounded-full font-semibold text-sm xl:text-base transition-all duration-300 
                  hover:shadow-md active:scale-95 mx-auto"
              >
                <span>Show Less</span>
                <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 transition-transform group-hover:translate-x-1" />
              </button>
            )}
          </motion.div>
        )}
      </div>
    </section>
  );
}

// ─── CASE STUDIES SECTION (Grid layout from reference) ─────────────────────
const CASE_STUDIES_CARDS = [
  {
    id: 1,
    title: "Diabetic Retinopathy Patient Awareness Tool",
    description:
      "Diabetic Retinopathy Patient Awareness Tool",
    image:
      "/products/4 IN 1 DESK ORGANISER.png",
    slug: "diabetic-retinopathy-tool",
    readTime: "6 min read",
    category: "Retail",
  },
  {
    id: 2,
    title: "Scaling Healthcare Outreach with Digital-First Strategy",
    description:
      "Leveraging WhatsApp-led nurturing and targeted content to increase patient engagement by 200% for a leading clinic chain.",
    image:
      "/products/4 IN 1 DESK ORGANISER.png",
    slug: "healthcare-digital",
    readTime: "4 min read",
    category: "Healthcare",
  },
  {
    id: 3,
    title: "Corporate Gifting Success for Fortune 500 Company",
    description:
      "Implementing a personalized gifting solution that improved employee retention and client satisfaction scores significantly.",
    image:
      "/products/4 IN 1 DESK ORGANISER.png",
    slug: "corporate-gifting",
    readTime: "5 min read",
    category: "Corporate",
  },
];


// ─── MAIN PAGE ───────────────────────────────────────────────────────────────
export default function DigitalServicesPage() {
  return (
    <div className="min-h-screen bg-white">
      <PageBanner />
      <HyperPersonalizedServices />
      <CollageGallerySection />
    </div>
  );
}
