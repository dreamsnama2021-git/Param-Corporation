// app/digital-services/page.tsx
'use client';

import React, { useState, useRef } from 'react';
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
  ChevronLeft,
  ChevronRight,
  Eye,
  X,
  Zap,
} from 'lucide-react';

// ─── TYPES ──────────────────────────────────────────────────────────────────
interface ServiceCategory {
  id: string;
  number: string;
  title: string;
  description: string;
  icon: React.ElementType;
  image: string;
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
    image: "/koru/koru.png",
    gradient: "from-blue-500 to-cyan-400",
  },
  {
    id: "customized-analytics",
    number: "02",
    title: "Customized Analytics",
    description: "Advanced pharmaceutical analytics solutions delivering deep insights into prescription patterns, market trends, and HCP behavior.",
    icon: BarChart3,
    image: "/koru/koru6.png",
    gradient: "from-purple-500 to-pink-400",
  },
  {
    id: "health-risk-calculators",
    number: "03",
    title: "Health Risk Calculators",
    description: "Interactive health risk assessment tools that engage patients and HCPs while generating valuable health insights and leads.",
    icon: HeartPulse,
    image: "/koru/koru12.png",
    gradient: "from-red-500 to-orange-400",
  },
  {
    id: "patient-support-programs",
    number: "04",
    title: "Patient Support Programs",
    description: "Comprehensive digital patient support ecosystems including medication adherence, education, and 24/7 assistance platforms.",
    icon: Users,
    image: "/koru/koru18.png",
    gradient: "from-green-500 to-emerald-400",
  },
  {
    id: "mini-websites",
    number: "05",
    title: "Mini Websites",
    description: "Dedicated micro-sites and landing pages for pharmaceutical brands, products, and disease awareness campaigns.",
    icon: Globe,
    image: "/koru/koru24.png",
    gradient: "from-indigo-500 to-blue-400",
  },
  {
    id: "customized-apps",
    number: "06",
    title: "Customized Apps",
    description: "Native and cross-platform mobile applications tailored for pharmaceutical sales reps, HCPs, and patient engagement.",
    icon: Smartphone,
    image: "/koru/koru30.png",
    gradient: "from-teal-500 to-green-400",
  },
  {
    id: "video-production",
    number: "07",
    title: "Video Production & Editing",
    description: "Professional medical video production services including 3D animations, MOA videos, and HCP testimonial content.",
    icon: Video,
    image: "/koru/koru1.png",
    gradient: "from-orange-500 to-yellow-400",
  },
  {
    id: "variable-data",
    number: "08",
    title: "Variable Data Collection & Printing",
    description: "Intelligent variable data solutions for personalized pharmaceutical marketing materials with automated data integration.",
    icon: Database,
    image: "/koru/koru11.png",
    gradient: "from-rose-500 to-pink-400",
  },
];

const galleryImages: GalleryImage[] = [
  { id: "g-1", src: "/koru/koru.png", title: "Custom Dashboard Interface", category: "Dashboard" },
  { id: "g-2", src: "/koru/koru1.png", title: "Analytics Visualization", category: "Analytics" },
  { id: "g-3", src: "/koru/koru2.png", title: "Health Risk Calculator", category: "HRA Tools" },
  { id: "g-4", src: "/koru/koru3.png", title: "Patient Support Portal", category: "Patient Programs" },
  { id: "g-5", src: "/koru/koru4.png", title: "Mini Website Design", category: "Websites" },
  { id: "g-6", src: "/koru/koru5.png", title: "Mobile App Interface", category: "Apps" },
  { id: "g-7", src: "/koru/koru6.png", title: "Video Production Still", category: "Video" },
  { id: "g-8", src: "/koru/koru7.png", title: "Variable Data Print Sample", category: "Print" },
  { id: "g-9", src: "/koru/koru8.png", title: "Sales Dashboard View", category: "Dashboard" },
  { id: "g-10", src: "/koru/koru9.png", title: "Territory Analytics", category: "Analytics" },
  { id: "g-11", src: "/koru/koru10.png", title: "Risk Assessment Tool", category: "HRA Tools" },
  { id: "g-12", src: "/koru/koru12.png", title: "Patient App Screen", category: "Patient Programs" },
];

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
      <HyperPersonalizedServices />
      <GallerySection />
    </div>
  );
}

// ─── HERO BANNER ─────────────────────────────────────────────────────────────
function HeroBanner() {
  return (
    <section className="relative w-full h-[45vh] md:h-[55vh] lg:h-[65vh] overflow-hidden">
      <Image
        src="/koru/koru.png"
        alt="Digital Products & Services"
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/30 to-transparent" />
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
            Digital
            <span className="block text-[#8bde7a]">Services</span>
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

// ─── HYPERPERSONALIZED SERVICES SECTION ──────────────────────────────────────
function HyperPersonalizedServices() {
  return (
    <section className="py-16 lg:py-24 bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          className="text-center mb-16"
        >
          <SectionBadge className="bg-[#0093cb]/10 text-[#0093cb] border border-[#0093cb]/20 mb-4">
            <Zap size={16} />
            Tailored Solutions
          </SectionBadge>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 mb-6">
            Hyperpersonalized
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#0093cb] to-[#00a65d]">
              Services
            </span>
          </h2>
          <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            We craft bespoke digital solutions that adapt to your unique pharmaceutical
            brand needs. Each service is meticulously personalized to drive engagement,
            compliance, and measurable outcomes.
          </p>
          <div className="mt-6 w-24 h-1 bg-gradient-to-r from-[#0093cb] to-[#00a65d] rounded-full mx-auto" />
        </motion.div>

        {/* Service Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {serviceCategories.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── SERVICE CARD ────────────────────────────────────────────────────────────
function ServiceCard({ service, index }: { service: ServiceCategory; index: number }) {
  const Icon = service.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      whileHover={{ y: -8 }}
      className="group relative bg-white rounded-3xl overflow-hidden border border-slate-200 hover:border-[#00a65d]/40 shadow-lg hover:shadow-2xl hover:shadow-[#00a65d]/10 transition-all duration-500 cursor-pointer"
    >
      {/* Gradient Overlay on Hover */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-10 rounded-3xl"
        style={{
          background: 'radial-gradient(circle at center, rgba(0, 166, 93, 0.08) 0%, transparent 70%)',
        }}
      />

      {/* Image Section */}
      <div className="relative h-48 overflow-hidden bg-slate-100">
        <Image
          src={service.image}
          alt={service.title}
          fill
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
        />
        {/* Number Badge */}
        <div className="absolute top-4 left-4 z-20">
          <span className="text-xs font-bold text-white bg-black/40 backdrop-blur-sm px-3 py-1.5 rounded-full">
            {service.number}
          </span>
        </div>
        {/* Icon */}
        <div className="absolute top-4 right-4 z-20 w-10 h-10 rounded-xl bg-white/90 backdrop-blur-sm flex items-center justify-center shadow-lg">
          <Icon size={20} className="text-[#0093cb]" />
        </div>
      </div>

      {/* Content Section */}
      <div className="p-6 relative z-20">
        <h3 className="text-lg font-extrabold text-slate-900 mb-3 group-hover:text-[#00a65d] transition-colors duration-300">
          {service.title}
        </h3>
        <p className="text-sm text-slate-600 leading-relaxed line-clamp-3 mb-4">
          {service.description}
        </p>
        
        {/* Learn More Link */}
        <div className="flex items-center gap-2 text-sm font-semibold text-[#0093cb] group-hover:text-[#00a65d] transition-colors duration-300">
          <span>Explore Service</span>
          <ArrowUpRight size={16} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </div>
      </div>

      {/* Bottom Accent Line */}
      <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${service.gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`} />
    </motion.div>
  );
}

// ─── GALLERY SECTION ─────────────────────────────────────────────────────────
function GallerySection() {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  const [activeFilter, setActiveFilter] = useState<string>('All');

  const filters = ['All', 'Dashboard', 'Analytics', 'HRA Tools', 'Patient Programs', 'Websites', 'Apps', 'Video', 'Print'];

  const filteredImages = activeFilter === 'All' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === activeFilter);

  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Gallery Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          className="text-center mb-12"
        >
          <SectionBadge className="bg-[#00a65d]/10 text-[#00a65d] border border-[#00a65d]/20 mb-4">
            <Eye size={16} />
            Portfolio Showcase
          </SectionBadge>
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6">
            Digital Services
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#00a65d] to-[#8bde7a]">
              Gallery
            </span>
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Explore our collection of digital service interfaces and solutions crafted for
            pharmaceutical companies. Each design is meticulously created to enhance
            user engagement and deliver impactful digital experiences.
          </p>
          <div className="mt-6 w-24 h-1 bg-gradient-to-r from-[#00a65d] to-[#8bde7a] rounded-full mx-auto" />
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-2 mb-10"
        >
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
                activeFilter === filter
                  ? 'bg-slate-900 text-white shadow-lg shadow-slate-900/20'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              {filter}
            </button>
          ))}
        </motion.div>

        {/* Gallery Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5"
        >
          {filteredImages.map((image, index) => (
            <motion.div
              key={image.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05, duration: 0.4 }}
              onClick={() => setSelectedImage(image)}
              className="group relative aspect-[4/3] rounded-2xl overflow-hidden cursor-pointer bg-slate-100 shadow-lg hover:shadow-2xl transition-all duration-500"
            >
              <Image
                src={image.src}
                alt={image.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Category Badge */}
              <div className="absolute top-3 left-3">
                <span className="px-2.5 py-1 bg-white/90 backdrop-blur-sm rounded-full text-[10px] font-bold uppercase tracking-wider text-[#0093cb]">
                  {image.category}
                </span>
              </div>

              {/* Title on Hover */}
              <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                <h4 className="text-white font-bold text-sm mb-1">{image.title}</h4>
                <span className="inline-flex items-center gap-1 text-[#8bde7a] text-xs font-semibold">
                  <Eye size={14} />
                  View Full Size
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <Link
            href="/portfolio"
            className="inline-flex items-center gap-2 px-8 py-4 bg-slate-900 text-white rounded-full font-bold hover:bg-[#0093cb] transition-all duration-300 hover:shadow-lg hover:shadow-[#0093cb]/20 group"
          >
            View Complete Portfolio
            <ArrowUpRight size={18} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </motion.div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
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
            
            {/* Close Button */}
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white hover:bg-white/20 transition-colors"
            >
              <X size={20} />
            </button>

            {/* Image Info */}
            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
              <span className="text-[#8bde7a] text-xs font-bold uppercase tracking-wider">
                {selectedImage.category}
              </span>
              <h3 className="text-white text-xl font-bold mt-1">
                {selectedImage.title}
              </h3>
            </div>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
}