"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  ArrowUpRight,
  ChevronRight,
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
  Package,
  Gift,
} from "lucide-react";
import Image from "next/image";
import {
  EditorialTimeline,
  TimelineItem,
} from "../../components/EditorialTImeline";

// ─── DATA: TIMELINE ─────────────────────────────────────────────────────────
const timelineItems: TimelineItem[] = [
  {
    title: "The Beginning",
    description: "Founded with a vision to create impactful corporate gifting solutions for the pharmaceutical industry.",
    date: "2019",
    category: "Foundation",
    icon: Rocket,
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&q=80",
  },
  {
    title: "Building Capabilities",
    description: "Strengthened production infrastructure and expanded vendor network.",
    date: "2020",
    category: "Growth",
    icon: Factory,
    image: "https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?w=800&q=80",
  },
  {
    title: "Growing in Pharma",
    description: "Expanded presence by working with leading pharmaceutical brands across India.",
    date: "2021",
    category: "Expansion",
    icon: Pill,
    image: "https://images.unsplash.com/photo-1584308666744-3c0b9c22406f?w=800&q=80",
  },
  {
    title: "Focus on Innovation",
    description: "Introduced customized and concept-driven gifting solutions aligned with brand campaigns.",
    date: "2022",
    category: "Innovation",
    icon: Lightbulb,
    image: "https://images.unsplash.com/photo-1513151233558-d860c5398176?w=800&q=80",
  },
  {
    title: "Scaling Operations",
    description: "Executed larger projects across India with improved efficiency and creative output.",
    date: "2023",
    category: "Growth",
    icon: TrendingUp,
    image: "https://images.unsplash.com/photo-1533750349088-cd871a92f312?w=800&q=80",
  },
  {
    title: "Strengthening Partnerships",
    description: "Achieved 90%+ client retention rate with repeat annual orders.",
    date: "2025",
    category: "Achievement",
    icon: Users,
    image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&q=80",
  },
];

// ─── HELPER STYLES FOR SWIPING ──────────────────────────────────────────────
const scrollContainerStyles = "flex lg:grid lg:grid-cols-4 overflow-x-auto lg:overflow-visible snap-x snap-mandatory scrollbar-hide gap-6 pb-8 -mx-6 px-6";
const scrollItemStyles = "flex-shrink-0 w-[85vw] sm:w-[450px] lg:w-auto snap-center lg:snap-align-none";

// ─── COMPONENTS ─────────────────────────────────────────────────────────────

const MagneticButton = ({ children, className }: { children: React.ReactNode; className?: string }) => {
  const ref = useRef<HTMLButtonElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const handleMouse = (e: React.MouseEvent) => {
    const { clientX, clientY } = e;
    const { left, top, width, height } = ref.current!.getBoundingClientRect();
    setPosition({ x: (clientX - (left + width / 2)) * 0.3, y: (clientY - (top + height / 2)) * 0.3 });
  };
  return (
    <motion.button ref={ref} onMouseMove={handleMouse} onMouseLeave={() => setPosition({ x: 0, y: 0 })}
      animate={{ x: position.x, y: position.y }} className={className}>
      {children}
    </motion.button>
  );
};

const FloatingCard = ({ children, className, delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) => (
  <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay }} className={className}>
    <motion.div animate={{ y: [0, -10, 0] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay }}>
      {children}
    </motion.div>
  </motion.div>
);

const WhyUsSection = () => {
  const reasons = [
    { title: "Pharma Expertise", desc: "Specialized in pharmaceutical gifting with deep understanding of doctor preferences.", icon: Pill, color: "bg-amber-500" },
    { title: "Pan-India Delivery", desc: "Seamless delivery across India ensuring your gifts reach clinics anywhere.", icon: Globe, color: "bg-blue-500" },
    { title: "90%+ Retention", desc: "Consistent quality and reliable execution of annual gifting campaigns.", icon: Heart, color: "bg-rose-500" },
    { title: "Therapy-Aligned", desc: "Gifts aligned with cardiac, diabetic, and pediatric therapy areas.", icon: Target, color: "bg-emerald-500" },
  ];
  return (
    <section className="py-12 bg-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#0093cb] mb-2">Why Param</p>
          <h2 className="text-3xl md:text-4xl font-extrabold">The <span className="text-[#0093cb]">Difference</span></h2>
        </div>
        <div className={scrollContainerStyles}>
          {reasons.map((item, idx) => (
            <div key={idx} className={scrollItemStyles}>
              <div className="bg-white p-8 rounded-2xl border border-slate-200 h-full hover:shadow-lg transition-shadow">
                <div className={`w-12 h-12 ${item.color} rounded-xl mb-6 flex items-center justify-center text-white`}>
                  <item.icon size={24} />
                </div>
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
// ─── TYPES ──────────────────────────────────────────────────────────────────
interface VisionMissionProps {
  children: React.ReactNode;
  count: number;
}

// ─── SWIPE WRAPPER ─────────────────────────────────────────────────────────
function VisionSwipeCarousel({ children, count }: VisionMissionProps) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [activeIdx, setActiveIdx] = useState(0);

  const handleScroll = () => {
    const el = trackRef.current;
    if (!el || count === 0) return;
    const cardWidth = el.scrollWidth / count;
    setActiveIdx(Math.min(Math.round(el.scrollLeft / cardWidth), count - 1));
  }; return (
    <div className="block md:hidden">
      <style>{`
        .vision-track::-webkit-scrollbar { display: none; }
        .vision-track { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>

      <div
        ref={trackRef}
        onScroll={handleScroll}
        className="vision-track flex gap-4 overflow-x-auto pb-6 snap-x snap-mandatory scroll-smooth"
      >
        {children}
      </div>

      {/* Pagination dots (Only visible on mobile) */}
      <div className="flex justify-center gap-2">
        {Array.from({ length: count }).map((_, i) => (
          <div
            key={i}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              i === activeIdx ? "w-6 bg-[#0093cb]" : "w-1.5 bg-gray-300"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

// ─── MAIN SECTION ──────────────────────────────────────────────────────────
const VisionSection = () => {
  const data = [
    {
      title: "Our Vision",
      desc: "To be the most trusted gifting partner for pharma brands by delivering innovative, therapy-aligned solutions.",
      icon: <Target size={24} />,
      bgColor: "bg-blue-50",
      iconColor: "text-[#0093cb]",
    },
    {
      title: "Our Mission",
      desc: "To design and deliver high-quality, customized gifting solutions that add value to pharma campaigns.",
      icon: <Gift size={24} />,
      bgColor: "bg-green-50",
      iconColor: "text-[#00a65d]",
    },
  ];

  return (
    <section className="py-16 md:py-24 relative overflow-hidden bg-white">
      <div className="relative max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-[11px] font-bold uppercase tracking-[0.2em] mb-3 text-[#0093cb]">
            Our Purpose
          </p>
          <h2 className="text-3xl md:text-4xl font-black text-slate-900">
            Vision & <span className="text-[#0093cb]">Mission</span>
          </h2>
        </div>

        {/* ── Mobile/Small Tablet (Swipe) ── */}
        <VisionSwipeCarousel count={data.length}>
          {data.map((item, idx) => (
            <div key={idx} className="snap-center flex-shrink-0 w-[85vw]">
              <div className="bg-white rounded-2xl border border-slate-200 p-8 h-full min-h-[260px] shadow-sm">
                <div className={`w-12 h-12 rounded-xl ${item.bgColor} flex items-center justify-center ${item.iconColor} mb-6`}>
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold mb-4 text-slate-900">{item.title}</h3>
                <p className="text-slate-500 leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </VisionSwipeCarousel>

        {/* ── Desktop & Large Tablet (Grid) ── */}
        <div className="hidden md:grid md:grid-cols-2 gap-8">
          {data.map((item, idx) => (
            <div 
              key={idx} 
              className="bg-white rounded-2xl border border-slate-200 p-10 hover:border-[#0093cb]/30 hover:shadow-xl hover:shadow-[#0093cb]/5 transition-all duration-300"
            >
              <div className={`w-14 h-14 rounded-xl ${item.bgColor} flex items-center justify-center ${item.iconColor} mb-8`}>
                {item.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4 text-slate-900">{item.title}</h3>
              <p className="text-slate-600 text-lg leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
// ─── TYPES ──────────────────────────────────────────────────────────────────
interface TeamMember {
  name: string;
  role: string;
  image: string;
}

interface SwipeCarouselProps {
  children: React.ReactNode;
  count: number;
}

// ─── SWIPE CAROUSEL COMPONENT ───────────────────────────────────────────────
function TeamSwipeCarousel({ children, count }: SwipeCarouselProps) {
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
      <style>{`
        .team-track::-webkit-scrollbar { display: none; }
        .team-track { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>

      <div
        ref={trackRef}
        onScroll={handleScroll}
        className="team-track flex gap-4 overflow-x-auto pb-6 snap-x snap-mandatory scroll-smooth"
      >
        {children}
      </div>

      {/* Pagination dots */}
      <div className="flex justify-center gap-2">
        {Array.from({ length: count }).map((_, i) => (
          <div
            key={i}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              i === activeIdx ? "w-6 bg-[#0093cb]" : "w-1.5 bg-gray-300"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
// ─── MAIN TEAM SECTION ──────────────────────────────────────────────────────
const TeamSection = () => {
  const team: TeamMember[] = [
    { name: "Ms. Saakshi Dosi", role: "Founder & CEO", image: "https://medipride.org/wp-content/uploads/2025/11/IMG-20251106-WA0063-Edited-768x1024.jpg" },
    { name: "Rajesh Kumar", role: "Operations Head", image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=600&fit=crop" },
    { name: "Priya Mehta", role: "Creative Director", image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=600&fit=crop" },
  ];

  return (
    <section className="py-16 relative overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-black text-center mb-12">
          The <span className="text-[#0093cb]">Leadership</span>
        </h2>

        {/* ── Mobile & Tablet View (Swipe) ── */}
        <TeamSwipeCarousel count={team.length}>
          {team.map((member, idx) => (
            <div 
              key={idx} 
              className="snap-center flex-shrink-0 w-[85vw] sm:w-[46vw]"
            >
              <TeamCard member={member} />
            </div>
          ))}
        </TeamSwipeCarousel>

        {/* ── Desktop View (Grid) ── */}
        <div className="hidden lg:grid grid-cols-3 gap-8">
          {team.map((member, idx) => (
            <TeamCard key={idx} member={member} />
          ))}
        </div>
      </div>
    </section>
  );
};

// ─── REUSABLE CARD COMPONENT ────────────────────────────────────────────────
function TeamCard({ member }: { member: TeamMember }) {
  return (
    <div className="relative aspect-[3/4] rounded-3xl overflow-hidden group shadow-lg">
      <Image 
        src={member.image} 
        alt={member.name} 
        fill 
        className="object-cover transition-transform duration-700 group-hover:scale-110" 
        unoptimized 
      />
      {/* Dark Overlay with Text */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent flex flex-col justify-end p-6 sm:p-8">
        <h3 className="text-xl sm:text-2xl font-bold text-white mb-1">
          {member.name}
        </h3>
        <p className="text-[#8bde7a] font-medium text-sm sm:text-base uppercase tracking-wider">
          {member.role}
        </p>
      </div>
    </div>
  );
}

// ─── MAIN PAGE ──────────────────────────────────────────────────────────────
export default function AboutUsPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-8 lg:py-12 relative overflow-hidden flex items-center">
        <div className="relative z-10 max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center py-20">
          <div className="space-y-8">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-sm font-medium">
              <Sparkles size={16} /> <span>Trusted Pharma Partner Since 2019</span>
            </motion.div>
            <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 leading-tight">
              We create <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">meaningful</span> <br /> doctor connections
            </h1>
            <p className="text-xl text-slate-600 max-w-lg">Transforming pharma brand communication through thoughtfully designed gifting solutions.</p>
            <div className="flex flex-wrap gap-4">
              <MagneticButton className="bg-[#0093cb] text-white px-8 py-4 rounded-full font-semibold flex items-center gap-2">Explore Solutions <ArrowUpRight size={20} /></MagneticButton>
            </div>
          </div>
          <div className="relative hidden lg:block h-[600px]">
             <FloatingCard delay={0.2} className="absolute top-0 right-0 w-80 h-96 rounded-2xl overflow-hidden shadow-2xl">
                <Image src="https://images.unsplash.com/photo-1549465220-1a8b9238cd48?w=600&h=800&fit=crop" alt="Gift" fill className="object-cover" />
             </FloatingCard>
             <FloatingCard delay={0.4} className="absolute top-40 left-0 bg-white p-6 rounded-2xl shadow-xl border border-slate-100 flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600"><Heart size={24} /></div>
                <div><div className="text-2xl font-bold">90%</div><div className="text-sm text-slate-500">Retention</div></div>
             </FloatingCard>
          </div>
        </div>
      </section>

      {/* Journey Section */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center mb-16">
          <span className="text-[#0093cb] font-bold text-xs uppercase tracking-widest">Our History</span>
          <h2 className="text-4xl font-black mt-2">A Legacy of <span className="text-[#0093cb]">Excellence</span></h2>
        </div>
        <EditorialTimeline items={timelineItems} />
      </section>

      {/* Swipeable Sections */}
      <WhyUsSection />
      <VisionSection />
      <TeamSection />

      <style jsx global>{`
        .scrollbar-hide::-webkit-scrollbar { display: none; }
        .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </div>
  );
}
