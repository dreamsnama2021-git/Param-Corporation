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
} from "lucide-react";
import Image from "next/image";
import {
  EditorialTimeline,
  TimelineItem,
} from "../../components/EditorialTImeline";

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
      "https://pub-735dbd7583d74ad5949115d6fdf77023.r2.dev/Timeline/timline-koru.jpeg", // You may want to upload a 7th image for this
  },
  {
    title: "Expanding Horizons",
    description:
      "As we step into 2026, we continue to grow with the same passion and purpose that started our journey. With expanding capabilities, stronger partnerships, and a growing portfolio of innovative solutions, we remain committed to creating impactful experiences for brands across industries.",
    date: "2026",
    category: "Growth",
    icon: TrendingUp,
    image:
      "https://pub-735dbd7583d74ad5949115d6fdf77023.r2.dev/Timeline/timeline%20(1).png", // You may want to upload an 8th image for this
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
  <div className="relative w-full h-[60vh] md:h-[50vh] lg:h-[55vh] xl:h-[70vh] overflow-hidden">
    {/* Mobile image */}
    <Image
      src="/banner/About page Mobile.jpg"
      alt="About Us Banner - Mobile"
      fill
      className="object-cover object-center block md:hidden"
      priority
      unoptimized
    />

    {/* Tablet image */}
    <Image
      src="/banner/About page  Tablet.jpg"
      alt="About Us Banner - Tablet"
      fill
      className="object-cover object-center hidden md:block lg:hidden"
      priority
      unoptimized
    />

    {/* Desktop image */}
    <Image
      src="/banner/About page Desktop.jpg"
      alt="About Us Banner - Desktop"
      fill
      className="object-cover object-center hidden lg:block"
      priority
      unoptimized
    />
  </div>
);

// ─── WHY US SECTION ───────────────────────────────────────────────────────────
const WhyUsSection = () => {
  const row1Cards = [
    // Workflow = end-to-end process flow
    {
      title: "End to End Solutions",
      desc: "Complete pharma branding services from product ideation to customization, packaging, and delivery.",
      icon: Workflow,
      color: "bg-amber-500",
    },
    // Truck = delivery / logistics
    {
      title: "Pan-India Delivery",
      desc: "Seamless nationwide delivery of doctor engagement tools and healthcare promotional products.",
      icon: Truck,
      color: "bg-blue-500",
    },
    // FlaskConical = manufacturing / R&D / lab
    {
      title: "In-House Manufacturing & R&D",
      desc: "Quality-driven manufacturing and innovation for customized pharma promotional solutions.",
      icon: FlaskConical,
      color: "bg-rose-500",
    },
  ];
  const row2Cards = [
    // Pill = pharma / medicine
    {
      title: "Pharma Expertise",
      desc: "Customized pharma promotional products and doctor gifting solutions designed for effective brand recall.",
      icon: Pill,
      color: "bg-emerald-500",
    },
    // Network = vendor ecosystem / supply chain
    {
      title: "Strong Vendor Ecosystem & Sourcing",
      desc: "Reliable sourcing network ensuring premium corporate gifts for pharmaceutical companies.",
      icon: Network,
      color: "bg-violet-500",
    },
    // Wrench = after-sales / support / service
    {
      title: "After Sales Service",
      desc: "Ongoing support for smooth execution of doctor gifting and branding campaigns",
      icon: Wrench,
      color: "bg-orange-500",
    },
    // Lock = confidentiality / privacy
    {
      title: "We Maintain Confidentiality",
      desc: "Secure handling of pharmaceutical marketing assets, campaign strategies, and product concepts.",
      icon: Lock,
      color: "bg-cyan-500",
    },
  ];

  interface CardItem {
    title: string;
    desc: string;
    icon: React.ComponentType<{ size?: number }>;
    color: string;
  }

  const Card = ({ item }: { item: CardItem }) => (
    <div className="bg-white p-4 sm:p-5 rounded-xl sm:rounded-2xl border border-slate-200 h-full hover:shadow-lg transition-shadow">
      <div
        className={`w-8 h-8 sm:w-10 sm:h-10 ${item.color} rounded-lg sm:rounded-xl mb-3 sm:mb-4 flex items-center justify-center text-white`}
      >
        <item.icon size={18} />
      </div>
      <h3 className="text-sm sm:text-base font-bold mb-1.5 sm:mb-2">
        {item.title}
      </h3>
      <p className="text-slate-500 text-xs leading-relaxed">{item.desc}</p>
    </div>
  );

  return (
    <section className="py-8 sm:py-10 md:py-12 bg-slate-50">
      <div className="max-w-[1500px] mx-auto px-4 sm:px-6 space-y-3 sm:space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-3 sm:gap-4">
          <div className="flex flex-col justify-center">
            <p className="text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.2em] text-[#0093cb] mb-1.5 sm:mb-2">
              Why Param
            </p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold leading-tight">
              The <span className="text-[#0093cb]">Difference</span>
            </h2>
          </div>
          {row1Cards.map((item, i) => (
            <Card key={i} item={item} />
          ))}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
          {row2Cards.map((item, i) => (
            <Card key={i} item={item} />
          ))}
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
      <div
        className={`w-8 h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl flex items-center justify-center mb-3 sm:mb-4 ${item.iconBg}`}
      >
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
      title: "Creating Meaningful Doctor & Pharma Brand Connections",
      tagline: '"Every gift strengthens doctor relationships"',
      desc: "To become India’s most trusted partner for pharma branding, doctor engagement solutions, and customized pharmaceutical promotional products, delivering meaningful brand experiences that create long-term impact",
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
      title: "Driven by Healthcare Communication. Focused on Results.",
      tagline: '"Quality, creativity, and reliability"',
      desc: "To design and deliver innovative doctor gifting solutions, patient education materials, clinic branding products, and healthcare communication tools that strengthen pharma relationships and improve engagement outcomes.",
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
      name: "Mr. Rajeev Dosi",
      role: "Director",
      image: "/banner/WhatsApp Image 2026-05-20 at 7.05.07 PM.jpeg",
    },
    {
      name: "Mr. Sanchay Dosi",
      role: "Founder",
      image:
        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=600&fit=crop",
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
      className="group relative bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
    >
      <div className="relative aspect-[3/4] overflow-hidden">
        <Image
          src={member.image}
          alt={member.name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          unoptimized
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
        <h3 className="text-white text-lg font-bold">{member.name}</h3>
        <p className="text-white/80 text-sm">{member.role}</p>
      </div>
    </motion.div>
  );

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-white">
      <div className="max-w-[1500px] mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center mb-4 sm:mb-4 md:mb-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-[11px] sm:text-xs font-bold uppercase tracking-[0.2em] text-[#0093cb] mb-2 sm:mb-3">
              Experts in Pharma Branding & Doctor Gifting
            </p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight">
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
          className="max-w-3xl mx-auto text-center mb-10 sm:mb-12 md:mb-16"
        >
          <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
            Our team understands the unique dynamics of pharmaceutical
            marketing, doctor behavior, therapy-focused communication, and brand
            recall strategy. We create customized doctor engagement tools,
            pharma promotional gifts, medical education products, and patient
            communication solutions aligned with campaign objectives and
            healthcare needs.
          </p>
        </motion.div>

        {/* Team Grid */}
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
