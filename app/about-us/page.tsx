// app/about-us/page.tsx
"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  ArrowUpRight,
  ChevronRight,
  Quote,
  Award,
  Globe,
  Heart,
  Zap,
  Mail,
  Sparkles,
  Gift,
  Package,
  Users,
  Star,
  Trophy,
  Target,
  Rocket,
  LucideIcon,
  Phone,
} from "lucide-react";
import Image from "next/image";
import {
  EditorialTimeline,
  TimelineItem,
} from "../../components/EditorialTImeline";

// ─────────────────────────────────────────────────
// CUSTOM ICON COMPONENTS
// ─────────────────────────────────────────────────
const HandshakeIcon = (props: any) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M11 17a2 2 0 0 0 2 2c.93 0 1.74-.5 2.19-1.26l2.64-2.61a2 2 0 0 1 2.83 0l1.56 1.56a2 2 0 0 1 0 2.83l-4.41 4.41a2 2 0 0 1-2.83 0L12 21" />
    <path d="M9 17a2 2 0 0 0-2 2c-.93 0-1.74.5-2.19 1.26l-2.64 2.61a2 2 0 0 1-2.83 0L1.88 18.8a2 2 0 0 1 0-2.83l4.41-4.41a2 2 0 0 1 2.83 0" />
    <path d="m3 11 3 3 3-3" />
    <path d="M21 3 3 21" />
    <path d="m16 11 3-3 3 3" />
  </svg>
);

const LeafIcon = (props: any) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" />
    <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
  </svg>
);

const LinkedinIcon = (props: any) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

const TwitterIcon = (props: any) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const timelineItems: TimelineItem[] = [
  {
    title: "Founded with a Vision",
    description:
      "Started in Mumbai with a simple belief: corporate gifting should be meaningful, not transactional. Three dreamers, one garage, and a vision to transform how businesses say 'thank you'.",
    date: "2010",
    category: "Foundation",
    icon: Rocket,
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&q=80",
  },
  {
    title: "First Enterprise Partnership",
    description:
      "Secured our first Fortune 500 client in the pharmaceutical sector. Delivered 10,000+ personalized gift sets — proving that thoughtfulness scales.",
    date: "2013",
    category: "Growth",
    icon: HandshakeIcon,
    image:
      "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=800&q=80",
  },
  {
    title: "Introduced Bespoke Curation",
    description:
      "Launched India's first AI-powered gift curation engine. Every gift now tells a story, every story builds a relationship.",
    date: "2015",
    category: "Innovation",
    icon: Sparkles,
    image:
      "https://images.unsplash.com/photo-1513151233558-d860c5398176?w=800&q=80",
  },
  {
    title: "Pan-India Network",
    description:
      "Expanded delivery to 15,000+ pin codes. Same care, same quality — from Kutch to Kohima. Became India's most comprehensive gifting network.",
    date: "2017",
    category: "Expansion",
    icon: Globe,
    image:
      "https://images.unsplash.com/photo-1533750349088-cd871a92f312?w=800&q=80",
  },
  {
    title: "Award-Winning Studio",
    description:
      "Recognized as India's Best Corporate Gifting Agency. Our studio approach became the industry benchmark for quality and creativity.",
    date: "2019",
    category: "Achievement",
    icon: Trophy,
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80",
  },
  {
    title: "98% Retention Milestone",
    description:
      "Our clients don't just return — they refer. Achieved 98% client retention rate, making us the most trusted gifting partner in India.",
    date: "2021",
    category: "Achievement",
    icon: Heart,
    image:
      "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&q=80",
  },
  {
    title: "Sustainable Gifting Initiative",
    description:
      "Launched India's first carbon-neutral gifting line. 100% eco-friendly packaging, sustainable sourcing, and conscious design.",
    date: "2023",
    category: "Sustainability",
    icon: LeafIcon,
    image:
      "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=800&q=80",
  },
  {
    title: "500+ Enterprise Clients",
    description:
      "Crossed the 500-enterprise milestone. From startups to conglomerates, we've become the gifting partner of choice for India's leading brands.",
    date: "2024",
    category: "Growth",
    icon: Star,
    image:
      "https://images.unsplash.com/photo-1553028826-f4804a6d8313?w=800&q=80",
  },
];

// ─────────────────────────────────────────────────
// MAGNETIC BUTTON COMPONENT
// ─────────────────────────────────────────────────
const MagneticButton = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  const ref = useRef<HTMLButtonElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouse = (e: React.MouseEvent<HTMLButtonElement>) => {
    const { clientX, clientY } = e;
    const { left, top, width, height } = ref.current!.getBoundingClientRect();
    const x = clientX - (left + width / 2);
    const y = clientY - (top + height / 2);
    setPosition({ x: x * 0.3, y: y * 0.3 });
  };

  const reset = () => setPosition({ x: 0, y: 0 });

  return (
    <motion.button
      ref={ref}
      onMouseMove={handleMouse}
      onMouseLeave={reset}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 350, damping: 15, mass: 0.5 }}
      className={className}
    >
      {children}
    </motion.button>
  );
};

// ─────────────────────────────────────────────────
// FLOATING CARD COMPONENT
// ─────────────────────────────────────────────────
const FloatingCard = ({
  children,
  className,
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay }}
    className={className}
  >
    <motion.div
      animate={{ y: [0, -10, 0] }}
      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay }}
    >
      {children}
    </motion.div>
  </motion.div>
);

// ─────────────────────────────────────────────────
// VISION SECTION - Glassmorphism Design
// ─────────────────────────────────────────────────
const VisionSection = () => {
  return (
    <section className="py-12 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-50 via-white to-slate-50" />
      
      <div className="relative max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="text-center mb-10"
        >
          <p className="text-[11px] font-bold uppercase tracking-[0.2em] mb-3 flex items-center justify-center gap-2 text-[var(--clr-primary)]">
            <span className="inline-block w-6 h-[1.5px] bg-[var(--clr-primary)]" />
            Our Purpose
            <span className="inline-block w-6 h-[1.5px] bg-[var(--clr-primary)]" />
          </p>

          <h2 className="text-3xl md:text-4xl font-extrabold capitalize tracking-tight mb-3 text-[var(--clr-text-dark)]">
            Vision & <span className="text-[#0093cb]">Mission</span>
          </h2>

          <p className="text-sm leading-relaxed max-w-[780px] mx-auto text-[var(--clr-text-muted)]">
            Guiding principles that shape our approach to corporate gifting 
            and client relationships
          </p>
        </motion.div>

        {/* Cards Container */}
        <div className="grid lg:grid-cols-2 gap-5 lg:gap-6">
          
          {/* Vision Card - Primary Glassmorphism */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="group"
          >
            <div className="relative h-full min-h-[280px] bg-[rgba(0,147,203,0.15)] backdrop-blur-xl rounded-xl border border-[rgba(0,147,203,0.3)] overflow-hidden transition-all duration-500 hover:-translate-y-1 hover:bg-[rgba(0,147,203,0.25)] flex flex-col">
              
              {/* Background Color Blur */}
              <div className="absolute inset-0 bg-gradient-to-br from-[rgba(0,147,203,0.1)] to-[rgba(0,147,203,0.05)]" />
              
              {/* Decorative Elements */}
              <div className="absolute top-0 right-0 w-40 h-40 bg-[var(--clr-primary)]/10 rounded-full blur-2xl" />
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-[var(--clr-primary)]/5 rounded-full blur-xl" />
              
              {/* Glass Reflection */}
              <div className="absolute top-0 left-0 right-0 h-1/2 bg-gradient-to-b from-white/10 to-transparent pointer-events-none" />
              
              {/* Decorative Letter */}
              <div className="absolute bottom-0 right-0 text-[100px] font-black text-[var(--clr-primary)]/[0.08] leading-none select-none pointer-events-none">
                V
              </div>
              
              {/* Content */}
              <div className="relative z-10 flex-1 flex flex-col p-6">
                
                {/* Header */}
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-lg bg-[var(--clr-primary)]/20 backdrop-blur-md flex items-center justify-center border border-[var(--clr-primary)]/30">
                    <Target className="text-[var(--clr-primary)]" size={18} strokeWidth={1.5} />
                  </div>
                  <div>
                    <span className="text-[8px] font-bold uppercase tracking-[0.2em] text-[var(--clr-primary)] block mb-0.5">
                      01 / Vision
                    </span>
                    <h3 className="text-base font-bold text-[var(--clr-text-dark)]">
                      The Future We See
                    </h3>
                  </div>
                </div>
                
                {/* Quote */}
                <div className="mb-2">
                  <p className="text-sm font-medium text-[var(--clr-text-dark)] italic">
                    "Every gift, a conversation starter"
                  </p>
                </div>
                
                {/* Description */}
                <p className="text-[var(--clr-text-muted)] text-xs leading-relaxed mb-3 flex-1">
                  We envision a world where corporate gifting transcends 
                  transactions — becoming a language of appreciation that 
                  bridges cultures and builds lasting relationships.
                </p>
                
                {/* Footer */}
                <div className="flex items-center justify-between pt-3 border-t border-[var(--clr-primary)]/20">
                  <span className="text-[10px] font-medium text-slate-500">
                    Est. 2010
                  </span>
                  <div className="flex items-center gap-2 text-[var(--clr-primary)] font-semibold text-[10px] opacity-0 group-hover:opacity-100 transition-opacity">
                    <span>Learn More</span>
                    <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Mission Card - Secondary Glassmorphism */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="group"
          >
            <div className="relative h-full min-h-[280px] bg-[rgba(0,166,93,0.15)] backdrop-blur-xl rounded-xl border border-[rgba(0,166,93,0.3)] overflow-hidden transition-all duration-500 hover:-translate-y-1 hover:bg-[rgba(0,166,93,0.25)] flex flex-col">
              
              {/* Background Color Blur */}
              <div className="absolute inset-0 bg-gradient-to-br from-[rgba(0,166,93,0.1)] to-[rgba(0,166,93,0.05)]" />
              
              {/* Decorative Elements */}
              <div className="absolute top-0 right-0 w-40 h-40 bg-[var(--clr-secondary)]/10 rounded-full blur-2xl" />
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-[var(--clr-secondary)]/5 rounded-full blur-xl" />
              
              {/* Glass Reflection */}
              <div className="absolute top-0 left-0 right-0 h-1/2 bg-gradient-to-b from-white/10 to-transparent pointer-events-none" />
              
              {/* Decorative Letter */}
              <div className="absolute bottom-0 right-0 text-[100px] font-black text-[var(--clr-secondary)]/[0.08] leading-none select-none pointer-events-none">
                M
              </div>
              
              {/* Content */}
              <div className="relative z-10 flex-1 flex flex-col p-6">
                
                {/* Header */}
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-lg bg-[var(--clr-secondary)]/20 backdrop-blur-md flex items-center justify-center border border-[var(--clr-secondary)]/30">
                    <Gift className="text-[var(--clr-secondary)]" size={18} strokeWidth={1.5} />
                  </div>
                  <div>
                    <span className="text-[8px] font-bold uppercase tracking-[0.2em] text-[var(--clr-secondary)] block mb-0.5">
                      02 / Mission
                    </span>
                    <h3 className="text-base font-bold text-[var(--clr-text-dark)]">
                      What We Strive For
                    </h3>
                  </div>
                </div>
                
                {/* Quote */}
                <div className="mb-2">
                  <p className="text-sm font-medium text-[var(--clr-text-dark)] italic">
                    "Engineering delight through design"
                  </p>
                </div>
                
                {/* Description */}
                <p className="text-[var(--clr-text-muted)] text-xs leading-relaxed mb-3 flex-1">
                  We combine data-driven insights with creative intuition to 
                  craft gifting experiences that resonate emotionally while 
                  delivering measurable business impact.
                </p>
                
                {/* Footer */}
                <div className="flex items-center justify-between pt-3 border-t border-[var(--clr-secondary)]/20">
                  <span className="text-[10px] font-medium text-slate-500">
                    Since 2010
                  </span>
                  <div className="flex items-center gap-2 text-[var(--clr-secondary)] font-semibold text-[10px] opacity-0 group-hover:opacity-100 transition-opacity">
                    <span>Learn More</span>
                    <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};




// ─────────────────────────────────────────────────
// WHY US SECTION
// ─────────────────────────────────────────────────
const WhyUsSection = () => {
  const reasons = [
    {
      number: "01",
      title: "Quality & Creativity",
      description:
        "Recognized as India's Best Corporate Gifting Agency with excellence in design and service quality.",
      icon: Award,
      gradient: "from-amber-500 to-orange-600",
    },
    {
      number: "02",
      title: "Uniquely Curated Gifts",
      description:
        "Seamless delivery across 15,000+ pin codes ensuring your gifts reach anywhere in India.",
      icon: Globe,
      gradient: "from-blue-500 to-indigo-600",
    },
    {
      number: "03",
      title: "Assisted Curation",
      description:
        "98% client retention rate reflects our commitment to building lasting business relationships.",
      icon: Heart,
      gradient: "from-rose-500 to-pink-600",
    },
    {
      number: "04",
      title: "Doctor certified content",
      description:
        "Industry-leading 24-hour turnaround for custom corporate gifts without compromising quality.",
      icon: Zap,
      gradient: "from-emerald-500 to-teal-600",
    },
  ];

  return (
    <section className="relative py-12 lg:py-12 overflow-hidden">
      {/* Subtle Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-50 via-white to-slate-50" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="text-center mb-12"
        >
          <p className="text-[11px] font-bold uppercase tracking-[0.2em] mb-3 flex items-center justify-center gap-2 text-[var(--clr-primary)]">
            <span className="inline-block w-6 h-[1.5px] bg-[var(--clr-primary)]" />
            What Sets Us Apart
            <span className="inline-block w-6 h-[1.5px] bg-[var(--clr-primary)]" />
          </p>

          <h2 className="ui-h1 font-extrabold capitalize tracking-tight mb-3 text-[var(--clr-text-dark)]">
            Excellence in <span className="text-[#0093cb]">Every Detail</span>
          </h2>

          <p className="text-sm leading-relaxed max-w-[980px] mx-auto text-[var(--clr-text-muted)]">
            For over two decades, we've been the trusted partner for India's
            leading brands, delivering meaningful gifting solutions that foster
            lasting connections.
          </p>
        </motion.div>
        {/* Cards Grid - 4 Columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
          {reasons.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.12 }}
              className="group relative"
            >
              {/* Card Container */}
              <div className="relative h-full bg-white rounded-2xl border border-slate-200/80 p-8 hover:shadow-xl hover:border-slate-300/80 transition-all duration-500 overflow-hidden">
                {/* Top Gradient Accent */}
                <div
                  className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${item.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                />

                {/* Content */}
                <div className="relative">
                  {/* Number & Icon Row */}
                  <div className="flex items-start justify-between mb-6">
                    {/* Number */}
                    <span className="text-5xl font-bold text-slate-100 tracking-tight leading-none select-none">
                      {item.number}
                    </span>

                    {/* Icon Circle */}
                    <div
                      className={`w-12 h-12 rounded-xl bg-gradient-to-br ${item.gradient} flex items-center justify-center shadow-md transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}
                    >
                      <item.icon
                        className="text-white"
                        size={22}
                        strokeWidth={1.5}
                      />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl capitalize font-bold text-slate-900 mb-3 tracking-tight">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-slate-500 text-sm leading-relaxed mb-6">
                    {item.description}
                  </p>

                  {/* Divider */}
                  <div className="w-12 h-px bg-slate-200 mb-6 group-hover:w-full group-hover:bg-slate-300 transition-all duration-500" />

                  {/* Link */}
                  <div className="flex items-center gap-2 text-slate-700 font-medium text-sm group-hover:text-slate-900 transition-colors">
                    <span>Explore</span>
                    <svg
                      className="w-4 h-4 transform group-hover:translate-x-2 transition-transform duration-300"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

// ─────────────────────────────────────────────────
// TEAM SECTION - Uniform Border Glow (Tailwind Only)
// ─────────────────────────────────────────────────
const TeamSection = () => {
  const team = [
    {
      name: "Rajesh Sharma",
      role: "Founder & CEO",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop&crop=face",
      delay: 0,
    },
    {
      name: "Priya Patel",
      role: "Creative Director",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop&crop=face",
      delay: 0.1,
    },
    {
      name: "Amit Kumar",
      role: "Head of Operations",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
      delay: 0.2,
    },
  ];

  return (
    <section className="py-12 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-50 via-white to-slate-50" />
      
      <div className="relative max-w-[1500px] mx-auto px-6">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="text-center mb-14"
        >
          <p className="text-[11px] font-bold uppercase tracking-[0.2em] mb-3 flex items-center justify-center gap-2 text-[var(--clr-primary)]">
            <span className="inline-block w-6 h-[1.5px] bg-[var(--clr-primary)]" />
            Our Team
            <span className="inline-block w-6 h-[1.5px] bg-[var(--clr-primary)]" />
          </p>

          <h2 className="text-3xl md:text-4xl font-extrabold capitalize tracking-tight mb-3 text-[var(--clr-text-dark)]">
            Meet the <span className="text-[#0093cb]">Leaders</span>
          </h2>

          <p className="text-sm leading-relaxed max-w-[780px] mx-auto text-[var(--clr-text-muted)]">
            Passionate professionals driving innovation in corporate gifting
          </p>
        </motion.div>

        {/* Team Grid */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {team.map((member, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: member.delay }}
              className="group cursor-pointer p-[3px] rounded-3xl hover:rounded-3xl transition-all duration-500"
              style={{
                background: 'transparent',
                backgroundImage: 'linear-gradient(rgba(0,166,93,0), rgba(0,166,93,0))',
                backgroundSize: '100% 100%',
                transition: 'all 0.5s ease',
              }}
              onMouseEnter={(e) => {
                const style = e.currentTarget.style;
                style.backgroundImage = 'linear-gradient(rgba(0,166,93,1), rgba(0,166,93,1))';
                style.boxShadow = '0 0 30px rgba(0,166,93,0.5), 0 0 60px rgba(0,166,93,0.2)';
                style.background = 'transparent';
              }}
              onMouseLeave={(e) => {
                const style = e.currentTarget.style;
                style.backgroundImage = 'linear-gradient(rgba(0,166,93,0), rgba(0,166,93,0))';
                style.boxShadow = 'none';
                style.background = 'transparent';
              }}
            >
              {/* Card */}
              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden">
                
                {/* Image */}
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110 rounded-2xl"
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-500" />
                
                {/* Hover Content */}
                <div className="absolute inset-0 flex flex-col justify-end p-6">
                  
                  {/* Name & Role */}
                  <div className="transform translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                    <h3 className="text-lg font-bold text-white mb-1">
                      {member.name}
                    </h3>
                    <p className="text-sm text-white/80">
                      {member.role}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};






// ─────────────────────────────────────────────────
// PLAY ICON COMPONENT
// ─────────────────────────────────────────────────
const PlayIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polygon points="5 3 19 12 5 21 5 3" />
  </svg>
);

// ─────────────────────────────────────────────────
// MAIN PAGE COMPONENT
// ─────────────────────────────────────────────────
export default function AboutUsPage() {
  return (
    <div className="bg-white min-h-screen selection:bg-blue-500 selection:text-white">
      {/* Hero Section */}
      <section className="min-h-screen relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-200/20 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-200/20 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 min-h-screen flex items-center">
          <div className="grid lg:grid-cols-2 gap-12 items-center w-full py-20">
            {/* Left Content */}
            <div className="space-y-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-sm font-medium"
              >
                <Sparkles size={16} />
                <span>India's Leading Corporate Gifting Partner</span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.1]"
              >
                <span className="text-slate-900">We craft</span>
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">
                  meaningful
                </span>
                <br />
                <span className="text-slate-900">connections</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-xl text-slate-600 max-w-lg leading-relaxed"
              >
                Transforming business relationships into lasting impressions
                through thoughtfully designed gifting solutions for 500+
                enterprise clients.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="flex flex-wrap gap-4"
              >
                <MagneticButton className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-8 py-4 rounded-full font-semibold flex items-center gap-3 hover:shadow-lg hover:shadow-blue-500/25 transition-all">
                  Explore Solutions
                  <ArrowUpRight
                    className="group-hover:rotate-45 transition-transform"
                    size={20}
                  />
                </MagneticButton>

                <button className="px-8 py-4 rounded-full font-semibold text-slate-700 border border-slate-200 hover:border-blue-500 hover:text-blue-600 transition-colors flex items-center gap-2">
                  <PlayIcon />
                  Watch Our Story
                </button>
              </motion.div>

              {/* Stats Row */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="flex gap-10 pt-8 border-t border-slate-200"
              >
                {[
                  { number: "14+", label: "Years Experience" },
                  { number: "500+", label: "Enterprise Clients" },
                  { number: "98%", label: "Retention Rate" },
                ].map((stat, idx) => (
                  <div key={idx}>
                    <div className="text-3xl font-bold text-slate-900">
                      {stat.number}
                    </div>
                    <div className="text-sm text-slate-500">{stat.label}</div>
                  </div>
                ))}
              </motion.div>
            </div>

            {/* Right Visual */}
            <div className="relative hidden lg:block h-[600px]">
              <FloatingCard
                delay={0.2}
                className="absolute top-0 right-0 w-80 h-96 rounded-2xl overflow-hidden shadow-2xl shadow-blue-900/10"
              >
                <Image
                  src="https://images.unsplash.com/photo-1549465220-1a8b9238cd48?w=600&h=800&fit=crop"
                  alt="Premium gift boxes"
                  className="w-full h-full object-cover"
                  width={600}
                  height={800}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </FloatingCard>

              <FloatingCard
                delay={0.4}
                className="absolute top-20 left-0 bg-white p-6 rounded-2xl shadow-xl border border-slate-100"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center">
                    <Heart className="text-emerald-600" size={24} />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-slate-900">98%</div>
                    <div className="text-sm text-slate-500">
                      Client Retention
                    </div>
                  </div>
                </div>
              </FloatingCard>

              <FloatingCard
                delay={0.6}
                className="absolute bottom-20 right-20 bg-white p-6 rounded-2xl shadow-xl border border-slate-100"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
                    <Package className="text-blue-600" size={24} />
                  </div>
                  <div>
                    <div className="text-lg font-bold text-slate-900">
                      15,000+
                    </div>
                    <div className="text-sm text-slate-500">Pin Codes</div>
                  </div>
                </div>
              </FloatingCard>

              <FloatingCard
                delay={0.8}
                className="absolute bottom-0 left-10 bg-slate-900 text-white p-4 rounded-2xl shadow-xl"
              >
                <div className="flex items-center gap-3">
                  <div className="flex -space-x-2">
                    {[1, 2, 3].map((i) => (
                      <div
                        key={i}
                        className="w-8 h-8 rounded-full border-2 border-slate-900 bg-slate-700 overflow-hidden"
                      >
                        <img
                          src={`https://i.pravatar.cc/100?img=${i + 10}`}
                          alt="Team"
                          width={32}
                          height={32}
                        />
                      </div>
                    ))}
                  </div>
                  <div className="text-sm font-medium">
                    <span className="text-emerald-400">120+</span> Team Members
                  </div>
                </div>
              </FloatingCard>

              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute top-1/2 left-1/2 w-64 h-64 border border-dashed border-slate-200 rounded-full"
              />
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-6 h-10 rounded-full border-2 border-slate-300 flex justify-center p-2"
          >
            <div className="w-1 h-2 bg-slate-400 rounded-full" />
          </motion.div>
        </motion.div>
      </section>

      {/* Quote Section */}
      {/* <section className="py-20 md:py-28 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            className="relative group"
          >
            <Quote className="absolute -top-8 -left-8 w-20 h-20 text-blue-600/15" />
            <blockquote className="text-3xl md:text-4xl font-light text-slate-900 leading-relaxed relative z-10 pl-12">
              "Gifting is not about the price tag. It's about the thought, the timing, 
              and the emotional resonance it creates."
            </blockquote>
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="mt-8 flex items-center gap-4 pl-12"
            >
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-600 to-cyan-500 flex items-center justify-center text-white font-bold">
                RS
              </div>
              <div>
                <div className="font-bold text-slate-900">Rajesh Sharma</div>
                <div className="text-slate-500 text-sm">Founder & CEO</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section> */}

      {/* Editorial Timeline Section */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center mb-32">
          <span className="inline-block px-4 py-1 rounded-full bg-blue-50 text-blue-600 text-xs font-bold uppercase tracking-widest mb-6">
            Experience the Legacy
          </span>
          <h2 className="text-5xl md:text-6xl font-black text-slate-900 tracking-tighter">
            A Journey Defined <br /> by{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">
              Innovation
            </span>
          </h2>
        </div>

        <EditorialTimeline items={timelineItems} />
      </section>

      {/* Why Us */}
      <WhyUsSection />
      {/* Vision & Mission */}
      <VisionSection />

      {/* Team Section */}
      <TeamSection />

   
    </div>
  );
}
