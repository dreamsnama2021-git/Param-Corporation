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
    description:
      "Founded with a vision to create impactful corporate gifting solutions for the pharmaceutical industry. Our founding team combined healthcare marketing expertise with premium product design, recognizing an untapped opportunity to blend medical relevance with creative presentation. This deep industry insight became the cornerstone of our entire operation and continues to guide our decisions today.",
    date: "2019",
    category: "Foundation",
    icon: Rocket,
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&q=80",
  },
  {
    title: "Building Capabilities",
    description:
      "Strengthened production infrastructure and expanded vendor network to meet growing demand across multiple therapeutic segments. We invested in state-of-the-art manufacturing equipment and established rigorous quality control protocols. Our team grew to over fifty specialists across design, production, and client services, enabling us to handle increasingly complex projects while maintaining personalized attention.",
    date: "2020",
    category: "Growth",
    icon: Factory,
    image:
      "https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?w=800&q=80",
  },
  {
    title: "Growing in Pharma",
    description:
      "Expanded presence by working with leading pharmaceutical brands across India, establishing ourselves as a trusted partner in corporate gifting. Our portfolio grew to include top-tier companies who valued our understanding of regulatory compliance and ethical marketing. We developed specialized gifting categories for different medical specialties, ensuring each product served practical purposes while reinforcing brand messaging.",
    date: "2021",
    category: "Expansion",
    icon: Pill,
    image:
      "https://cdn.expresspharma.in/wp-content/uploads/2021/11/12182826/Growth-1.jpg",
  },
  {
    title: "Focus on Innovation",
    description:
      "Introduced customized and concept-driven gifting solutions aligned with brand campaigns, revolutionizing pharmaceutical engagement. Our innovation lab developed proprietary design methodologies that transformed ordinary medical utilities into memorable brand experiences. We pioneered augmented reality elements and sustainable materials, setting new industry standards that resonated strongly with healthcare professionals across the country.",
    date: "2022",
    category: "Innovation",
    icon: Lightbulb,
    image:
      "https://images.unsplash.com/photo-1513151233558-d860c5398176?w=800&q=80",
  },
  {
    title: "Scaling Operations",
    description:
      "Executed larger projects across India with improved efficiency handling multi-city simultaneous deployments with precision. We introduced dedicated project management teams, regional warehousing, and real-time tracking systems for unprecedented campaign visibility. Our lean management principles and digital automation reduced turnaround time by 40% while maintaining consistent quality across all product categories.",
    date: "2023",
    category: "Growth",
    icon: TrendingUp,
    image:
      "https://images.unsplash.com/photo-1533750349088-cd871a92f312?w=800&q=80",
  },
  {
    title: "Strengthening Partnerships",
    description:
      "Achieved 90%+ client retention rate with repeat annual orders, reflecting our commitment to exceeding expectations consistently. We introduced dedicated relationship management programs providing strategic consultation beyond product delivery. Our feedback-driven improvement cycle ensures every campaign becomes more refined, creating increasing satisfaction and loyalty that forms the foundation for our next innovation phase.",
    date: "2025",
    category: "Achievement",
    icon: Users,
    image:
      "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&q=80",
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

// ─── PAGE BANNER ─────────────────────────────────────────────────────────────
const PageBanner = () => (
  <div className="relative w-full h-[220px] sm:h-[280px] md:h-[340px] lg:h-[400px] xl:h-[850px] overflow-hidden">
    {/* Background image */}
    <Image
      src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1600&q=80"
      alt="About Us Banner"
      fill
      className="object-fill object-center"
      priority
      unoptimized
    />

    {/* Gradient overlay: dark at bottom/left for text legibility */}
    <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-black/20" />
    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

    {/* Content */}
    <div className="absolute inset-0 flex flex-col justify-end pb-8 sm:pb-10 md:pb-12 px-4 sm:px-8 md:px-12 max-w-[1500px] mx-auto left-0 right-0">
      {/* Breadcrumb */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="flex items-center gap-1.5 text-white/60 text-xs sm:text-sm font-medium mb-3 sm:mb-4"
      >
        <span>Home</span>
        <ChevronRight size={14} />
        <span className="text-white">About Us</span>
      </motion.div>

      {/* Page Title */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight"
      >
        About Us
      </motion.h1>

      {/* Subtitle */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.35 }}
        className="mt-2 sm:mt-3 text-white/75 text-sm sm:text-base md:text-lg max-w-xl"
      >
        Trusted pharma gifting partner since 2019 — creating meaningful doctor connections across India.
      </motion.p>

      {/* Accent line */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.7, delay: 0.5, ease: "easeOut" }}
        style={{ originX: 0 }}
        className="mt-4 sm:mt-5 h-1 w-16 sm:w-20 bg-[#0093cb] rounded-full"
      />
    </div>
  </div>
);

// ─── WHY US SECTION ───────────────────────────────────────────────────────────
const WhyUsSection = () => {
  const row1Cards = [
    // Workflow = end-to-end process flow
    { title: "End to End Solutions", desc: "Specialized in pharmaceutical gifting with deep understanding of doctor preferences.", icon: Workflow, color: "bg-amber-500" },
    // Truck = delivery / logistics
    { title: "Pan-India Delivery", desc: "Seamless delivery across India ensuring your gifts reach clinics anywhere.", icon: Truck, color: "bg-blue-500" },
    // FlaskConical = manufacturing / R&D / lab
    { title: "In-House Manufacturing & R&D", desc: "Consistent quality and reliable execution of annual gifting campaigns.", icon: FlaskConical, color: "bg-rose-500" },
  ];
  const row2Cards = [
    // Pill = pharma / medicine
    { title: "Pharma Expertise", desc: "Gifts aligned with cardiac, diabetic, and pediatric therapy areas.", icon: Pill, color: "bg-emerald-500" },
    // Network = vendor ecosystem / supply chain
    { title: "Strong Vendor Ecosystem & Sourcing", desc: "All gifts meet regulatory guidelines for pharmaceutical promotions.", icon: Network, color: "bg-violet-500" },
    // Wrench = after-sales / support / service
    { title: "After Sales Service", desc: "Personalized packaging and branding options for your medical reps.", icon: Wrench, color: "bg-orange-500" },
    // Lock = confidentiality / privacy
    { title: "We Maintain Confidentiality", desc: "Dedicated account managers ensuring smooth campaign execution.", icon: Lock, color: "bg-cyan-500" },
  ];

  interface CardItem {
    title: string;
    desc: string;
    icon: React.ComponentType<{ size?: number }>;
    color: string;
  }

  const Card = ({ item }: { item: CardItem }) => (
    <div className="bg-white p-4 sm:p-5 rounded-xl sm:rounded-2xl border border-slate-200 h-full hover:shadow-lg transition-shadow">
      <div className={`w-8 h-8 sm:w-10 sm:h-10 ${item.color} rounded-lg sm:rounded-xl mb-3 sm:mb-4 flex items-center justify-center text-white`}>
        <item.icon size={18} />
      </div>
      <h3 className="text-sm sm:text-base font-bold mb-1.5 sm:mb-2">{item.title}</h3>
      <p className="text-slate-500 text-xs leading-relaxed">{item.desc}</p>
    </div>
  );

  return (
    <section className="py-8 sm:py-10 md:py-12 bg-slate-50">
      <div className="max-w-[1500px] mx-auto px-4 sm:px-6 space-y-3 sm:space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-3 sm:gap-4">
          <div className="flex flex-col justify-center">
            <p className="text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.2em] text-[#0093cb] mb-1.5 sm:mb-2">Why Param</p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold leading-tight">
              The <span className="text-[#0093cb]">Difference</span>
            </h2>
          </div>
          {row1Cards.map((item, i) => <Card key={i} item={item} />)}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
          {row2Cards.map((item, i) => <Card key={i} item={item} />)}
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

interface CardData {
  number: string;
  label: string;
  title: string;
  tagline: string;
  desc: string;
  icon: React.ReactNode;
  iconBg: string;
  iconColor: string;
  showCta?: boolean;
  ctaLabel?: string;
  ctaHref?: string;
  estLabel: string;
}

function VisionCard({ item }: { item: CardData }) {
  return (
    <div className="bg-white rounded-xl sm:rounded-2xl border border-slate-200 p-5 sm:p-7 flex flex-col min-h-[220px] sm:min-h-[250px] hover:border-slate-300 hover:shadow-sm transition-all duration-200">
      <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-5">
        <span className="text-[10px] sm:text-[11px] font-medium uppercase tracking-widest text-slate-400">
          {item.number} / {item.label}
        </span>
        <div className="flex-1 h-px bg-slate-100" />
      </div>
      <div className={`w-8 h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl flex items-center justify-center mb-3 sm:mb-4 ${item.iconBg}`}>
        <span className={item.iconColor}>{item.icon}</span>
      </div>
      <h3 className="text-sm sm:text-base lg:text-[17px] font-semibold text-slate-900 mb-1.5 sm:mb-2">
        {item.title}
      </h3>
      <p className="text-xs sm:text-sm lg:text-[13px] text-slate-500 leading-relaxed flex-1">
        {item.desc}
      </p>
    </div>
  );
}

const VisionSection = () => {
  const data: CardData[] = [
    {
      number: "01",
      label: "Vision",
      title: "Creating Meaningful Brand Connections",
      tagline: '"Every gift strengthens doctor relationships"',
      desc: "To become a trusted partner for corporates across industries by delivering innovative gifting solutions that create lasting impressions and real engagement.",
      icon: <Target size={18} className="sm:size-5" />,
      iconBg: "bg-blue-50",
      iconColor: "text-[#0093cb]",
      showCta: true,
      ctaLabel: "Our Vision",
      ctaHref: "#",
      estLabel: "Est. 2019",
    },
    {
      number: "02",
      label: "Mission",
      title: "Driven by Purpose. Focused on Results.",
      tagline: '"Quality, creativity, and reliability"',
      desc: "To design and deliver high-quality, customized gifting solutions that add value, improve brand communication, and consistently exceed client expectations.",
      icon: <Rocket size={18} className="sm:size-5" />,
      iconBg: "bg-emerald-50",
      iconColor: "text-[#00a65d]",
      showCta: false,
      estLabel: "Since 2019",
    },
  ];

  return (
    <section className="py-8 sm:py-10 md:py-12 2xl:py-24 bg-white overflow-hidden">
      <div className="max-w-[1500px] mx-auto px-4 sm:px-6">
        <div className="text-center mb-8 sm:mb-10 md:mb-12">
          <p className="text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.2em] mb-2 sm:mb-3 text-[#0093cb]">
            Our Purpose
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900">
            Vision & <span className="text-[#0093cb]">Mission</span>
          </h2>
        </div>
        <VisionSwipeCarousel count={data.length}>
          {data.map((item, idx) => (
            <div key={idx} className="snap-center flex-shrink-0 w-[85vw]">
              <VisionCard item={item} />
            </div>
          ))}
        </VisionSwipeCarousel>
        <div className="hidden md:grid md:grid-cols-2 gap-4 sm:gap-6">
          {data.map((item, idx) => (
            <VisionCard key={idx} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

// ─── TEAM SECTION ────────────────────────────────────────────────────────────
interface TeamMember {
  name: string;
  role: string;
  image: string;
}

const TeamCard = ({ member }: { member: TeamMember }) => (
  <div className="relative aspect-[3/4] rounded-2xl sm:rounded-3xl overflow-hidden group shadow-lg cursor-pointer bg-slate-100">
    <Image
      src={member.image}
      alt={member.name}
      fill
      className="object-cover transition-transform duration-700 group-hover:scale-105"
      unoptimized
    />
    <div className="absolute inset-0 bg-black/20 flex flex-col justify-end p-4 sm:p-6 md:p-8 opacity-0 group-hover:opacity-100 transition-all duration-500 ease-in-out">
      <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 ease-out">
        <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-1">
          {member.name}
        </h3>
        <p className="text-[#8bde7a] font-semibold text-xs sm:text-sm md:text-base uppercase tracking-wider">
          {member.role}
        </p>
      </div>
    </div>
  </div>
);

const TeamSection = () => {
  const team: TeamMember[] = [
    {
      name: "Rajesh Kumar",
      role: "Operations Head",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=600&fit=crop",
    },
    {
      name: "Priya Mehta",
      role: "Creative Director",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=600&fit=crop",
    },
    {
      name: "Ms. Saakshi Dosi",
      role: "Founder & CEO",
      image: "https://medipride.org/wp-content/uploads/2025/11/IMG-20251106-WA0063-Edited-768x1024.jpg",
    },
  ];

  return (
    <section className="py-8 sm:py-10 md:py-12 2xl:py-16 bg-white">
      <div className="max-w-[1500px] mx-auto px-4 sm:px-6">
        <div className="mb-8 sm:mb-10 md:mb-12 text-center">
          <p className="text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.2em] text-[#0093cb] mb-1.5 sm:mb-2">
            Our People
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black">
            The <span className="text-[#0093cb]">Leadership</span>
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
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

      {/* ── HERO / INTRO ── */}
     

      {/* ── JOURNEY / TIMELINE ── */}
      <section className="py-6 sm:py-8 md:py-10 2xl:py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center mb-10 sm:mb-12 md:mb-16">
          <span className="text-[#0093cb] font-bold text-[10px] sm:text-xs uppercase tracking-widest">
            Our History
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black mt-1.5 sm:mt-2">
            A Legacy of <span className="text-[#0093cb]">Excellence</span>
          </h2>
        </div>
        <EditorialTimeline items={timelineItems} />
      </section>

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