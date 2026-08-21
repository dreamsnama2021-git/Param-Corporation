"use client";

import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Target,
  Rocket,
  Factory,
  Pill,
  Lightbulb,
  TrendingUp,
  Globe,
  Heart,
  Users,
  Sparkles,
  Shield,
  Package,
  Headphones,
  ChevronRight,
  Workflow,
  Truck,
  FlaskConical,
  Network,
  Wrench,
  Lock,
  Leaf,
  Handshake,
  Award,
  Clock,
  PenTool,
  Quote,
} from "lucide-react";
import Image from "next/image";
import {
  EditorialTimeline,
  TimelineItem,
} from "../../components/EditorialTImeline";
import AboutIntro from "../../components/AboutIntro";
import WhatWeDoOfferings from "../../components/WhatWeDoOfferings";
import AboutDesignProcess from "../../components/AboutDesignProcess";
import QualityAssurance from "../../components/QualityAssurance";
import ProjectWorkflow from "../../components/ProjectWorkflow";
import TeamCulture from "../../components/TeamCulture";

// ─── DATA: TIMELINE ─────────────────────────────────────────────────────────
const timelineItems: TimelineItem[] = [
  {
    title: "Where It All Began",
    description:
      "Every journey starts with a simple idea. Ours began with a vision to create meaningful brand experiences through thoughtful gifting and impactful communication. What started as a small initiative soon became a growing passion for building stronger connections between brands and people.",
    date: "2019",
    category: "Foundation",
    icon: Rocket,
    image:
      "https://pub-735dbd7583d74ad5949115d6fdf77023.r2.dev/Timeline/timeline%20(5).jpeg",
  },
  {
    title: "Building the Foundation",
    description:
      "In the early years, every project became a learning experience. We focused on building the right team, understanding client needs, and creating solutions that were not only visually appealing but also meaningful and impactful. Slowly, trust started growing — and so did we.",
    date: "2020",
    category: "Growth",
    icon: Factory,
    image:
      "https://pub-735dbd7583d74ad5949115d6fdf77023.r2.dev/Timeline/timeline%20(6).jpeg",
  },
  {
    title: "Creating Meaningful Brand Experiences",
    description:
      "As we collaborated with more brands, we realized that gifting was never just about products. It was about emotions, recall, relationships, and experiences. This belief inspired us to think beyond conventional gifting and create more customized and engaging solutions.",
    date: "2021",
    category: "Expansion",
    icon: Pill,
    image:
      "https://pub-735dbd7583d74ad5949115d6fdf77023.r2.dev/Timeline/timeline%20(4).jpeg",
  },
  {
    title: "The Beginning of MediPride Communications",
    description:
      "A major milestone in our journey came with the launch of MediPride Communications — our dedicated vertical for medical communication and patient education tools. We wanted to simplify healthcare communication by creating solutions that were informative, engaging, and easy to understand for both doctors and patients.",
    date: "2022",
    category: "Innovation",
    icon: Lightbulb,
    image:
      "https://pub-735dbd7583d74ad5949115d6fdf77023.r2.dev/Timeline/timeline%20(3).jpeg",
  },
  {
    title: "Embracing Innovation with 3D Printing",
    description:
      "Innovation became a stronger part of our journey as we introduced 3D printing technology into our product development process. This opened new possibilities for creating interactive, concept-driven, and visually impactful solutions that helped brands communicate more effectively.",
    date: "2023",
    category: "Growth",
    icon: TrendingUp,
    image:
      "https://pub-735dbd7583d74ad5949115d6fdf77023.r2.dev/Timeline/timeline%20(2).jpeg",
  },
  {
    title: "Growing Through Trust & Relationships",
    description:
      "With every successful project, our relationships grew stronger. As our client network expanded across industries, we continued focusing on what mattered most — quality, creativity, timely execution, and building long-term trust.",
    date: "2024",
    category: "Achievement",
    icon: Users,
    image:
      "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&q=80",
  },
  {
    title: "Introducing Koru",
    description:
      "Our journey evolved further with the introduction of Koru — a brand created to bring together functionality, aesthetics, and sustainability. With eco-friendly live moss products and thoughtfully designed desk utilities, Koru reflected our vision of creating gifting experiences that are not only innovative, but also meaningful and lasting.",
    date: "2025",
    category: "Innovation",
    icon: Leaf,
    image:
      "https://pub-735dbd7583d74ad5949115d6fdf77023.r2.dev/Timeline/Koru%202025.png",
  },
  {
    title: "Expanding Horizons",
    description:
      "As we step into 2026, we continue to grow with the same passion and purpose that started our journey. With expanding capabilities, stronger partnerships, and a growing portfolio of innovative solutions, we remain committed to creating impactful experiences for brands across industries.",
    date: "2026",
    category: "Growth",
    icon: TrendingUp,
    image:
      "https://pub-735dbd7583d74ad5949115d6fdf77023.r2.dev/Timeline/timeline%20(1).png",
  },
];

// ─── REUSABLE COMPONENTS ─────────────────────────────────────────────────────

const MagneticButton = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
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
    >
      {children}
    </motion.button>
  );
};

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
      animate={{ y: [0, -8, 0] }}
      transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay }}
      className="h-full w-full relative"
    >
      {children}
    </motion.div>
  </motion.div>
);

// ─── ABOUT US PAGE BANNER ─────────────────────────────────────────────────────────────
const PageBanner = () => (
 <div className="relative w-full h-[60.5vh] md:h-[29.5vh] lg:h-[45vh] xl:h-[59vh] 2xl:h-[67.5vh] overflow-hidden">
    {/* Mobile image */}
    <Image
      src="https://pub-735dbd7583d74ad5949115d6fdf77023.r2.dev/Banners/Inner%20Banner/About%20page%20Mobile.jpg"
      alt="About Us Banner - Mobile"
      fill
      className="object-contain object-center block md:hidden"
      priority
      unoptimized
    />

    {/* Tablet image */}
    <Image
      src="https://pub-735dbd7583d74ad5949115d6fdf77023.r2.dev/Banners/Inner%20Banner/About%20page%20%20Tablet.jpg"
      alt="About Us Banner - Tablet"
      fill
      className="object-contain object-center hidden md:block lg:hidden"
      priority
      unoptimized
    />

    {/* Desktop image */}
    <Image
      src="https://pub-735dbd7583d74ad5949115d6fdf77023.r2.dev/Banners/Inner%20Banner/About%20page%20Desktop.jpg"
      alt="About Us Banner - Desktop"
      fill
      className="object-fill object-center hidden lg:block"
      priority
      unoptimized
    />
  </div>
);

// ─── WHY US SECTION ───────────────────────────────────────────────────────────
const WhyUsSection = () => {
  const cards = [
    {
      title: "Strategic Understanding",
      desc: "We understand your brand, objectives, and audience to recommend solutions that truly work.",
      icon: Lightbulb,
      color: "text-[#0093cb]",
      borderColor: "border-[#0093cb]/20",
    },
    {
      title: "Creative Innovation",
      desc: "Original concepts and innovative designs that make your brand stand out in the market.",
      icon: PenTool,
      color: "text-[#00a8b5]",
      borderColor: "border-[#00a8b5]/20",
    },
    {
      title: "Premium Quality",
      desc: "High-quality materials and fine finishing that reflect your brand's premium value.",
      icon: Award,
      color: "text-[#00a65d]",
      borderColor: "border-[#00a65d]/20",
    },
    {
      title: "Timely Execution",
      desc: "Efficient planning and strong execution to ensure on-time delivery, every time.",
      icon: Clock,
      color: "text-[#003b46]",
      borderColor: "border-[#003b46]/20",
    },
    {
      title: "Doctor & Patient Centric",
      desc: "Solutions designed to engage doctors better and empower patients with knowledge.",
      icon: Users,
      color: "text-[#0093cb]",
      borderColor: "border-[#0093cb]/20",
    },
    {
      title: "Long-Term Partnership",
      desc: "We grow with our clients, building trust, delivering consistency, and creating long-term value.",
      icon: Handshake,
      color: "text-[#00a65d]",
      borderColor: "border-[#00a65d]/20",
    },
  ];

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-slate-50 relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          
          {/* LEFT COLUMN: Header & 6 Grid Cards (Span 1) */}
          <div className="lg:col-span-1 space-y-10">
            {/* Header */}
            <div className="space-y-4">
              <h2 className="text-4xl sm:text-5xl font-black tracking-tight text-slate-800 leading-tight">
                Why <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#0093cb] to-[#00a65d]">Clients Choose Us</span>
              </h2>
              {/* Divider line */}
              <div className="h-1 w-24 bg-gradient-to-r from-[#0093cb] to-[#00a65d] rounded-full" />
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-2xl">
                In a competitive healthcare landscape, we go beyond manufacturing—we become an extension of your marketing team, committed to delivering solutions that create value and lasting impact.
              </p>
            </div>

            {/* 3x2 Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {cards.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div
                    key={idx}
                    className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl hover:border-[#0093cb]/30 hover:-translate-y-1.5 transition-all duration-300 flex flex-col items-center text-center space-y-3 cursor-pointer"
                  >
                    <div className={`p-2.5 rounded-xl bg-slate-50 border ${item.borderColor}`}>
                      <Icon className={`w-6 h-6 ${item.color}`} />
                    </div>
                    <h3 className="font-bold text-sm sm:text-base text-slate-800 uppercase tracking-wide leading-tight">
                      {item.title}
                    </h3>
                    <p className="text-slate-500 text-xs sm:text-[13px] leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* RIGHT COLUMN: Quote & Product Image Showcase (Span 1) */}
          <div className="lg:col-span-1 w-full">
            {/* Combined Single Large Image with Quote Overlay */}
            <div className="relative w-full h-[650px] lg:h-[750px] rounded-[40px] rounded-br-[100px] rounded-tl-[100px] overflow-hidden shadow-2xl border-4 border-white bg-slate-100 group">
              <img
                src="https://pub-735dbd7583d74ad5949115d6fdf77023.r2.dev/Final%20Edit%20Images/21.png"
                alt="Acrylic Display Showcase Model"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              
              {/* Subtle dark overlay for quote legibility */}
              <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/10 to-black/60 pointer-events-none" />

              {/* Quote overlay card at the top */}
              <div className="absolute top-6 left-6 right-6 p-6 rounded-3xl backdrop-blur-md bg-black/40 border border-white/10 text-white flex flex-col justify-between z-10">
                <Quote className="w-8 h-8 text-white/40 shrink-0 transform -scale-x-100 mb-3" />
                <p className="text-white text-xs sm:text-sm font-semibold italic leading-relaxed">
                  "Our commitment to innovation, quality, and partnership is what makes us the preferred choice for leading healthcare brands."
                </p>
                <div className="flex justify-end mt-2">
                  <Quote className="w-8 h-8 text-white/40 shrink-0" />
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

// ─── VISION & MISSION ────────────────────────────────────────────────────────
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
    <div className="block md:hidden">
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


// ─── TEAM SECTION ────────────────────────────────────────────────────────────
interface TeamMember {
  name: string;
  role: string;
  image: string;
}

const TeamSection = () => {
  const team: TeamMember[] = [
    {
      name: "Mr. Rajeev Dosi",
      role: "Director",
      image: "https://pub-735dbd7583d74ad5949115d6fdf77023.r2.dev/Banners/Inner%20Banner/ChatGPT%20Image%20Jun%204%2C%202026%2C%2007_34_03%20PM.png",
    },
    {
      name: "Mr. Sanchay Dosi",
      role: "Founder",
      image:
        "https://pub-735dbd7583d74ad5949115d6fdf77023.r2.dev/Banners/Inner%20Banner/WhatsApp%20Image%202026-06-01%20at%207.26.05%20PM.jpeg",
    },
    {
      name: "Ms. Saakshi Dosi",
      role: "Business Development Manager",
      image: "/banner/WhatsApp Image 2026-05-20 at 7.05.06 PM.jpeg",
    },
  ];

  const TeamCard = ({ member }: { member: TeamMember }) => (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="group relative bg-white rounded-2xl overflow-visible shadow-sm hover:shadow-xl transition-all duration-300"
    >
      <div className="relative aspect-[3/4] overflow-hidden rounded-2xl">
        <Image
          src={member.image}
          alt={member.name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          unoptimized
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent rounded-b-2xl translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
        <h3 className="text-white text-base sm:text-lg font-bold">{member.name}</h3>
        <p className="text-white/80 text-xs sm:text-sm">{member.role}</p>
      </div>
    </motion.div>
  );

  return (
    <section className="py-10 sm:py-14 md:py-16 lg:py-20 bg-white overflow-visible">
      <div className="max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-8 2xl:px-12">
        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-10 md:mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.2em] text-[#0093cb] mb-2 sm:mb-3">
              Experts in Pharma Branding & Doctor Gifting
            </p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight text-[#0f172a]">
              Meet Our <span className="text-[#0093cb]">Leadership</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-[#0093cb] to-[#00a65d] mx-auto mt-4 rounded-full" />
          </motion.div>
        </div>

        {/* Description Text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="max-w-5xl mx-auto text-center mb-10 sm:mb-12 md:mb-16"
        >
          <p className="text-sm sm:text-base text-[#6b7280] leading-relaxed">
            Our team understands the unique dynamics of pharmaceutical
            marketing, doctor behavior, therapy-focused communication, and brand
            recall strategy. We create customized doctor engagement tools,
            pharma promotional gifts, medical education products, and patient
            communication solutions aligned with campaign objectives and
            healthcare needs.
          </p>
        </motion.div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-7xl mx-auto">
          {team.map((member, idx) => (
            <TeamCard key={idx} member={member} />
          ))}
        </div>
      </div>
    </section>
  );
};

// ─── MAIN PAGE ───────────────────────────────────────────────────────────────
export default function AboutUsPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* ── BANNER ── */}
      <PageBanner />

      {/* ── ABOUT INTRO ── */}
      <AboutIntro />
<WhyUsSection />
      {/* ── WHAT WE DO & CORE OFFERINGS ── */}
      <WhatWeDoOfferings />

      {/* ── JOURNEY / TIMELINE ── */}
      <section className="py-10 sm:py-14 md:py-16 lg:py-20 bg-white overflow-visible">
        <div className="max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-8 2xl:px-12">
          <div className="text-center mb-8 sm:mb-10 md:mb-12">
            <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.2em] text-[#0093cb]">
              Our History
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black mt-1.5 sm:mt-2 text-[#0f172a]">
              A Legacy of <span className="text-[#0093cb]">Excellence</span>
            </h2>
          </div>
        </div>
        <EditorialTimeline items={timelineItems} />
      </section>

      
      <QualityAssurance />
      <AboutDesignProcess showAll={true} />
      <ProjectWorkflow />
      <TeamSection />
      <TeamCulture />

      <style jsx global>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
}
