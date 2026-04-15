'use client';

import React, { useState, useRef, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowUpRight, ChevronRight, Quote, Award, Globe, Heart, Zap, Mail, Sparkles, Gift, Package, Users, Star, Trophy, Target, Rocket } from 'lucide-react';
import Image from 'next/image';

// ─────────────────────────────────────────────────
// CUSTOM ICON COMPONENTS (Defined First!)
// ─────────────────────────────────────────────────
const HandshakeIcon = (props: any) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M11 17a2 2 0 0 0 2 2c.93 0 1.74-.5 2.19-1.26l2.64-2.61a2 2 0 0 1 2.83 0l1.56 1.56a2 2 0 0 1 0 2.83l-4.41 4.41a2 2 0 0 1-2.83 0L12 21" />
    <path d="M9 17a2 2 0 0 0-2 2c-.93 0-1.74.5-2.19 1.26l-2.64 2.61a2 2 0 0 1-2.83 0L1.88 18.8a2 2 0 0 1 0-2.83l4.41-4.41a2 2 0 0 1 2.83 0" />
    <path d="m3 11 3 3 3-3" />
    <path d="M21 3 3 21" />
    <path d="m16 11 3-3 3 3" />
  </svg>
);

const LeafIcon = (props: any) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" />
    <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
  </svg>
);

const LinkedinIcon = (props: any) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);

const TwitterIcon = (props: any) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  </svg>
);

// ─────────────────────────────────────────────────
// TIMELINE TYPES & DATA
// ─────────────────────────────────────────────────
interface TimelineItem {
  title: string;
  description: string;
  date: string;
  category: string;
  icon: React.ElementType;
}

const timelineItems: TimelineItem[] = [
  {
    title: "Founded with a Vision",
    description: "Started in Mumbai with a simple belief: corporate gifting should be meaningful, not transactional. Three dreamers, one garage, and a vision to transform how businesses say 'thank you'.",
    date: "2010",
    category: "Foundation",
    icon: Rocket,
  },
  {
    title: "First Enterprise Partnership",
    description: "Secured our first Fortune 500 client in the pharmaceutical sector. Delivered 10,000+ personalized gift sets — proving that thoughtfulness scales.",
    date: "2013",
    category: "Growth",
    icon: HandshakeIcon,
  },
  {
    title: "Introduced Bespoke Curation",
    description: "Launched India's first AI-powered gift curation engine. Every gift now tells a story, every story builds a relationship.",
    date: "2015",
    category: "Innovation",
    icon: Sparkles,
  },
  {
    title: "Pan-India Network",
    description: "Expanded delivery to 15,000+ pin codes. Same care, same quality — from Kutch to Kohima. Became India's most comprehensive gifting network.",
    date: "2017",
    category: "Expansion",
    icon: Globe,
  },
  {
    title: "Award-Winning Studio",
    description: "Recognized as India's Best Corporate Gifting Agency. Our studio approach became the industry benchmark for quality and creativity.",
    date: "2019",
    category: "Achievement",
    icon: Trophy,
  },
  {
    title: "98% Retention Milestone",
    description: "Our clients don't just return — they refer. Achieved 98% client retention rate, making us the most trusted gifting partner in India.",
    date: "2021",
    category: "Achievement",
    icon: Heart,
  },
  {
    title: "Sustainable Gifting Initiative",
    description: "Launched India's first carbon-neutral gifting line. 100% eco-friendly packaging, sustainable sourcing, and conscious design.",
    date: "2023",
    category: "Sustainability",
    icon: LeafIcon,
  },
  {
    title: "500+ Enterprise Clients",
    description: "Crossed the 500-enterprise milestone. From startups to conglomerates, we've become the gifting partner of choice for India's leading brands.",
    date: "2024",
    category: "Growth",
    icon: Star,
  },
];

// ─────────────────────────────────────────────────
// MAGNETIC BUTTON COMPONENT
// ─────────────────────────────────────────────────
const MagneticButton = ({ children, className }: { children: React.ReactNode; className?: string }) => {
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
const FloatingCard = ({ children, className, delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) => (
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
// TIMELINE COMPONENTS
// ─────────────────────────────────────────────────
const Timeline = ({ items }: { items: TimelineItem[] }) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start center", "end center"],
  });
  
  const scaleY = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <div ref={ref} className="relative">
      {/* Center Line */}
      <div className="absolute left-1/2 top-0 bottom-0 -translate-x-1/2 w-px overflow-hidden">
        <div className="absolute inset-0 bg-slate-100" />
        <motion.div 
          className="absolute top-0 left-0 right-0 origin-top"
          style={{ scaleY, background: "linear-gradient(180deg, #3b82f6, #06b6d4)" }}
        />
      </div>

      {/* Timeline Items */}
      {items.map((item, index) => (
        <TimelineEntry key={index} item={item} index={index} />
      ))}
    </div>
  );
};

const TimelineEntry = ({ item, index }: { item: TimelineItem; index: number }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const isEven = index % 2 === 0;
  const Icon = item.icon;

  const categoryColors: Record<string, string> = {
    Foundation: "from-amber-500 to-orange-500",
    Growth: "from-blue-500 to-cyan-500",
    Innovation: "from-purple-500 to-pink-500",
    Expansion: "from-emerald-500 to-teal-500",
    Achievement: "from-yellow-500 to-amber-500",
    Sustainability: "from-green-500 to-emerald-500",
  };

  const colorClass = categoryColors[item.category] || "from-blue-500 to-cyan-500";

  return (
    <div ref={ref} className="relative grid grid-cols-[1fr_48px_1fr] items-center mb-12">
      {/* Left Content */}
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        animate={isVisible ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.1 }}
        className={isEven ? 'pr-8' : ''}
      >
        {isEven && <TimelineCard item={item} colorClass={colorClass} />}
      </motion.div>

      {/* Center Dot */}
      <div className="flex justify-center relative z-10">
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={isVisible ? { scale: 1, opacity: 1 } : {}}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="w-12 h-12 rounded-full bg-white border-4 flex items-center justify-center shadow-lg"
          style={{ borderColor: index % 2 === 0 ? "#3b82f6" : "#06b6d4" }}
        >
          <div className={`w-6 h-6 rounded-full bg-gradient-to-br ${colorClass}`} />
        </motion.div>
      </div>

      {/* Right Content */}
      <motion.div
        initial={{ opacity: 0, x: 30 }}
        animate={isVisible ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.1 }}
        className={!isEven ? 'pl-8' : ''}
      >
        {!isEven && <TimelineCard item={item} colorClass={colorClass} />}
      </motion.div>
    </div>
  );
};

const TimelineCard = ({ item, colorClass }: { item: TimelineItem; colorClass: string }) => {
  const Icon = item.icon;
  
  return (
    <div className="group relative bg-white border border-slate-100 rounded-2xl p-6 overflow-hidden transition-all duration-300 hover:shadow-xl hover:border-slate-200">
      {/* Top accent bar */}
      <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${colorClass}`} />
      
      {/* Content */}
      <div className="flex items-start gap-4">
        <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${colorClass} flex items-center justify-center flex-shrink-0`}>
          <Icon className="text-white" size={22} />
        </div>
        
        <div className="flex-1">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-xs font-medium text-slate-400 uppercase tracking-wider">{item.category}</span>
            <span className="text-xs font-bold text-white px-2 py-0.5 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500">
              {item.date}
            </span>
          </div>
          
          <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
            {item.title}
          </h3>
          
          <p className="text-sm text-slate-600 leading-relaxed">
            {item.description}
          </p>
        </div>
      </div>

      {/* Bottom decorative element */}
      <div className="absolute bottom-0 right-0 w-20 h-20 opacity-5 group-hover:opacity-10 transition-opacity">
        <div className={`absolute bottom-0 right-0 w-full h-full bg-gradient-to-tl ${colorClass} rounded-tl-full`} />
      </div>
    </div>
  );
};

// ─────────────────────────────────────────────────
// VISION SECTION
// ─────────────────────────────────────────────────
const VisionSection = () => (
  <section className="py-24 md:py-32 bg-gradient-to-b from-slate-50 to-white">
    <div className="max-w-6xl mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-blue-600 mb-4 block">
          <span className="inline-block w-5 h-px bg-blue-600 mr-2 align-middle" />
          Our Purpose
        </span>
        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight mb-6">
          Vision & Mission
        </h2>
        <p className="text-lg text-slate-600 max-w-2xl mx-auto">
          Guiding principles that shape our approach to corporate gifting and client relationships
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-8">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="group relative bg-white rounded-3xl p-8 border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300"
        >
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-500 to-orange-500 rounded-t-3xl" />
          <div className="w-16 h-16 rounded-2xl bg-amber-50 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
            <Target className="text-amber-600" size={28} />
          </div>
          <span className="text-amber-600 font-semibold text-sm uppercase tracking-wider">Vision</span>
          <h3 className="text-2xl font-bold text-slate-900 mt-2 mb-4">
            Every gift, a conversation starter
          </h3>
          <p className="text-slate-600 leading-relaxed">
            We envision a world where corporate gifting transcends transactions — becoming a language 
            of appreciation that bridges cultures and builds lasting business relationships.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="group relative bg-white rounded-3xl p-8 border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300"
        >
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-t-3xl" />
          <div className="w-16 h-16 rounded-2xl bg-emerald-50 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
            <Gift className="text-emerald-600" size={28} />
          </div>
          <span className="text-emerald-600 font-semibold text-sm uppercase tracking-wider">Mission</span>
          <h3 className="text-2xl font-bold text-slate-900 mt-2 mb-4">
            Engineering delight through thoughtful design
          </h3>
          <p className="text-slate-600 leading-relaxed">
            We combine data-driven insights with creative intuition to craft gifting experiences 
            that resonate emotionally while delivering measurable business impact.
          </p>
        </motion.div>
      </div>
    </div>
  </section>
);

// ─────────────────────────────────────────────────
// WHY US SECTION
// ─────────────────────────────────────────────────
const WhyUsSection = () => {
  const reasons = [
    { icon: Award, title: "Award Winning", desc: "Best Corporate Gifting Agency 2023", bgColor: "bg-amber-50" },
    { icon: Globe, title: "Pan India", desc: "Delivery to 15,000+ pin codes", bgColor: "bg-blue-50" },
    { icon: Heart, title: "Client Love", desc: "98% client retention rate", bgColor: "bg-rose-50" },
    { icon: Zap, title: "24hr Turnaround", desc: "Express customization & delivery", bgColor: "bg-emerald-50" },
  ];

  return (
    <section className="py-24 md:py-32 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-5 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-blue-600 mb-4 block">
              <span className="inline-block w-5 h-px bg-blue-600 mr-2 align-middle" />
              Why Choose Us
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight mb-6">
              The difference is in the details
            </h2>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              We don't just deliver gifts. We deliver experiences, memories, and moments 
              of genuine connection that strengthen your business relationships.
            </p>
            <MagneticButton className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-8 py-4 rounded-full font-semibold flex items-center gap-3 hover:shadow-lg hover:shadow-blue-500/25 transition-all">
              Start a Project
              <ArrowUpRight size={20} />
            </MagneticButton>
          </motion.div>

          <div className="lg:col-span-3 grid md:grid-cols-2 gap-6">
            {reasons.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className="group bg-white rounded-2xl p-6 border border-slate-100 hover:border-blue-200 hover:shadow-lg transition-all duration-300"
              >
                <div className={`w-14 h-14 rounded-2xl ${item.bgColor} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform`}>
                  <item.icon className="text-blue-600" size={26} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">{item.title}</h3>
                <p className="text-slate-600 mb-4">{item.desc}</p>
                <div className="flex items-center text-blue-600 font-medium text-sm">
                  Learn more <ChevronRight size={16} className="ml-1" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// ─────────────────────────────────────────────────
// TEAM SECTION
// ─────────────────────────────────────────────────
const TeamSection = () => {
  const team = [
    { name: "Rajesh Sharma", role: "Founder & CEO", image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop&crop=face", delay: 0 },
    { name: "Priya Patel", role: "Creative Director", image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop&crop=face", delay: 0.1 },
    { name: "Amit Kumar", role: "Head of Operations", image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face", delay: 0.2 },
  ];

  return (
    <section className="py-24 md:py-32 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-blue-600 mb-4 block">
            <span className="inline-block w-5 h-px bg-blue-600 mr-2 align-middle" />
            Our Team
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight mb-6">
            Meet the Leaders
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Passionate professionals driving innovation in corporate gifting
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {team.map((member, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: member.delay }}
              className="group relative"
            >
              <div className="relative overflow-hidden rounded-3xl mb-6">
                <Image
                  src={member.image}
                  alt={member.name}
                  width={400}
                  height={400}
                  className="w-full aspect-square object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              
              <h3 className="text-xl font-bold text-slate-900 mb-1">{member.name}</h3>
              <p className="text-slate-600">{member.role}</p>
              
              <div className="mt-4 flex gap-3 opacity-0 group-hover:opacity-100 transition-opacity">
                <a href="#" className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center hover:bg-blue-500 hover:text-white transition-colors">
                  <LinkedinIcon size={18} />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center hover:bg-blue-500 hover:text-white transition-colors">
                  <TwitterIcon size={18} />
                </a>
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
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
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
                Transforming business relationships into lasting impressions through 
                thoughtfully designed gifting solutions for 500+ enterprise clients.
              </motion.p>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="flex flex-wrap gap-4"
              >
                <MagneticButton className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-8 py-4 rounded-full font-semibold flex items-center gap-3 hover:shadow-lg hover:shadow-blue-500/25 transition-all">
                  Explore Solutions
                  <ArrowUpRight className="group-hover:rotate-45 transition-transform" size={20} />
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
                  { number: "98%", label: "Retention Rate" }
                ].map((stat, idx) => (
                  <div key={idx}>
                    <div className="text-3xl font-bold text-slate-900">{stat.number}</div>
                    <div className="text-sm text-slate-500">{stat.label}</div>
                  </div>
                ))}
              </motion.div>
            </div>

            {/* Right Visual */}
            <div className="relative hidden lg:block h-[600px]">
              <FloatingCard delay={0.2} className="absolute top-0 right-0 w-80 h-96 rounded-2xl overflow-hidden shadow-2xl shadow-blue-900/10">
                <Image 
                  src="https://images.unsplash.com/photo-1549465220-1a8b9238cd48?w=600&h=800&fit=crop" 
                  alt="Premium gift boxes" 
                  className="w-full h-full object-cover"
                  width={600}
                  height={800}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </FloatingCard>

              <FloatingCard delay={0.4} className="absolute top-20 left-0 bg-white p-6 rounded-2xl shadow-xl border border-slate-100">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center">
                    <Heart className="text-emerald-600" size={24} />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-slate-900">98%</div>
                    <div className="text-sm text-slate-500">Client Retention</div>
                  </div>
                </div>
              </FloatingCard>

              <FloatingCard delay={0.6} className="absolute bottom-20 right-20 bg-white p-6 rounded-2xl shadow-xl border border-slate-100">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
                    <Package className="text-blue-600" size={24} />
                  </div>
                  <div>
                    <div className="text-lg font-bold text-slate-900">15,000+</div>
                    <div className="text-sm text-slate-500">Pin Codes</div>
                  </div>
                </div>
              </FloatingCard>

              <FloatingCard delay={0.8} className="absolute bottom-0 left-10 bg-slate-900 text-white p-4 rounded-2xl shadow-xl">
                <div className="flex items-center gap-3">
                  <div className="flex -space-x-2">
                    {[1,2,3].map((i) => (
                      <div key={i} className="w-8 h-8 rounded-full border-2 border-slate-900 bg-slate-700 overflow-hidden">
                        <img src={`https://i.pravatar.cc/100?img=${i+10}`} alt="Team" width={32} height={32} />
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
      <section className="py-20 md:py-28 bg-white">
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
      </section>

      {/* Timeline Section */}
      <section className="py-24 md:py-32 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-blue-600 mb-4 block">
              <span className="inline-block w-5 h-px bg-blue-600 mr-2 align-middle" />
              Our Journey
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight mb-6">
              Building India's Gifting Legacy
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              From a simple idea to a trusted partner for 500+ enterprises. 
              Follow our story of innovation, growth, and the amazing people who made it possible.
            </p>
          </motion.div>
          
          <Timeline items={timelineItems} />
        </div>
      </section>

      {/* Vision & Mission */}
      <VisionSection />

      {/* Why Us */}
      <WhyUsSection />

      {/* Team Section */}
      <TeamSection />

      {/* Footer CTA */}
      <section className="py-24 md:py-32 bg-gradient-to-r from-blue-600 to-cyan-500 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl" />
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative z-10 text-center max-w-3xl mx-auto px-6"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Let's create something extraordinary together
          </h2>
          <p className="text-blue-100 mb-10 text-lg">
            Ready to transform your corporate gifting strategy with innovative solutions 
            that leave lasting impressions?
          </p>
          <MagneticButton className="bg-white text-blue-600 px-10 py-4 rounded-full font-bold hover:shadow-2xl transition-shadow inline-flex items-center gap-3">
            Get in Touch
            <ArrowUpRight size={20} />
          </MagneticButton>
        </motion.div>
      </section>
    </div>
  );
}
