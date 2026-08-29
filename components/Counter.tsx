'use client';

import React, { useRef, useEffect, useState, ReactNode } from 'react';
import { motion, useMotionValue, useSpring, useTransform, useInView } from 'framer-motion';
import { 
  Users, 
  Package, 
  Award, 
  FileCheck, 
  TrendingUp,
  ArrowUpRight,
  Sparkles
} from 'lucide-react';

// Type definitions
interface Stat {
  id: number;
  value: number;
  suffix: string;
  label: string;
  subtext: string;
  icon: React.ComponentType<{ className?: string; strokeWidth?: number }>;
  gradient: string;
  accent: string;
  position: string;
}

interface TiltCardProps {
  stat: Stat;
  index: number;
}

interface FloatingShapeProps {
  delay: number;
  color: string;
  className: string;
}

const stats: Stat[] = [
  {
    id: 1,
    value: 100,
    suffix: "+",
    label: "CORPORATE CLIENTS",
    subtext: "TRUSTED PARTNERSHIPS",
    icon: Users,
    gradient: "from-[#0093cb] to-[#0077b6]",
    accent: "#0093cb",
    position: "center"
  },
  {
    id: 2,
    value: 1000,
    suffix: "+",
    label: "PRODUCTS ACROSS CATEGORIES",
    subtext: "DIVERSE GIFT RANGE",
    icon: Package,
    gradient: "from-[#00a65d] to-[#008f4c]",
    accent: "#00a65d",
    position: "top"
  },
  {
    id: 3,
    value: 10,
    suffix: "+",
    label: "YEARS OF EXPERIENCE",
    subtext: "INDUSTRY EXPERTISE",
    icon: Award,
    gradient: "from-[#8bde7a] to-[#6bc952]",
    accent: "#8bde7a",
    position: "top"
  },
  {
    id: 4,
    value: 1000,
    suffix: "+",
    label: "LARGE TICKET SIZE ORDERS",
    subtext: "BULK & CUSTOM ORDERS",
    icon: FileCheck,
    gradient: "from-[#0093cb] to-[#00a65d]",
    accent: "#0093cb",
    position: "center"
  },
  {
    id: 5,
    value: 100,
    suffix: "M+",
    label: "TOTAL SALES ACHIEVED",
    subtext: "CUMULATIVE BRAND VALUE",
    icon: TrendingUp,
    gradient: "from-[#0093cb] to-[#0077b6]",
    accent: "#0093cb",
    position: "top"
  },
];

// 3D Tilt Card Component
const TiltCard = ({ stat, index }: TiltCardProps): React.ReactElement => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  
  const mouseXSpring = useSpring(x, { stiffness: 500, damping: 100 });
  const mouseYSpring = useSpring(y, { stiffness: 500, damping: 100 });
  
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["17.5deg", "-17.5deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-17.5deg", "17.5deg"]);
  
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>): void => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };
  
  const handleMouseLeave = (): void => {
    x.set(0);
    y.set(0);
  };

  const Icon = stat.icon;
  const [displayValue, setDisplayValue] = useState<number>(0);
  const [trendPercentage, setTrendPercentage] = useState<number>(0);
  const [isClient, setIsClient] = useState<boolean>(false);

  useEffect(() => {
    setIsClient(true);
    setTrendPercentage(Math.floor(Math.random() * 15 + 5));
  }, []);

  useEffect(() => {
    if (isInView) {
      let startTime: number | null = null;
      const duration = 2500;
      
      const step = (timestamp: number): void => {
        if (!startTime) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / duration, 1);
        const easeOutQuart = 1 - Math.pow(1 - progress, 4);
        setDisplayValue(Math.floor(easeOutQuart * stat.value));
        
        if (progress < 1) {
          requestAnimationFrame(step);
        }
      };
      
      requestAnimationFrame(step);
    }
  }, [isInView, stat.value]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.15, duration: 0.6 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d"
      }}
      className={`relative group perspective-1000 ${index === stats.length - 1 ? 'col-span-2 md:col-span-1' : ''}`}
    >
      <div className={`relative bg-white/70 backdrop-blur-xl rounded-xl sm:rounded-2xl p-3 sm:p-4 md:p-5 lg:p-6 
        border border-white/50 shadow-xl hover:shadow-2xl 
        transition-all duration-500 hover:border-[${stat.accent}]/30
        ${stat.position === 'center' ? 'lg:mt-6 xl:mt-8' : ''}`}
        style={{
          boxShadow: `0 25px 50px -12px ${stat.accent}20`
        }}
      >
        {/* Floating Gradient Orb */}
        <div className={`absolute -top-6 sm:-top-8 -right-6 sm:-right-8 w-20 sm:w-24 md:w-28 h-20 sm:h-24 md:h-28 bg-gradient-to-br ${stat.gradient} 
          rounded-full opacity-0 group-hover:opacity-20 blur-3xl transition-opacity duration-700`} />
        
        {/* Glass Shine Effect */}
        <div className="absolute inset-0 rounded-xl sm:rounded-2xl bg-gradient-to-br from-white/40 via-transparent to-transparent 
          opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

        {/* Top Row: Icon & Trend */}
        <div className="flex justify-between items-start mb-3 sm:mb-4 relative z-10">
          <div className={`p-1.5 sm:p-2 rounded-lg sm:rounded-xl bg-gradient-to-br ${stat.gradient} text-white 
            shadow-lg transform group-hover:scale-110 transition-transform duration-300
            group-hover:rotate-3`}>
            <Icon className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5 lg:w-6 lg:h-6" strokeWidth={1.5} />
          </div>
          
          <div className="flex items-center gap-1 text-[9px] sm:text-[10px] font-medium text-gray-400 
            opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-2 group-hover:translate-y-0">
            <TrendingUp className="w-2 h-2 sm:w-2.5 sm:h-2.5 text-green-500" />
            {isClient && (
              <span className="text-green-600">+{trendPercentage}%</span>
            )}
          </div>
        </div>

        {/* Number Display */}
        <div className="relative mb-1.5">
          <h3 className={`text-2xl sm:text-3xl md:text-4xl xl:text-5xl font-black tracking-tighter bg-gradient-to-r ${stat.gradient} 
            bg-clip-text text-transparent tabular-nums`}>
            {displayValue}{stat.suffix}
          </h3>
          
          {/* Animated Underline */}
          <motion.div 
            className={`h-0.5 bg-gradient-to-r ${stat.gradient} rounded-full mt-1.5`}
            initial={{ width: 0 }}
            animate={isInView ? { width: "60%" } : {}}
            transition={{ delay: index * 0.15 + 0.5, duration: 0.8 }}
          />
        </div>

        {/* Label */}
        <div className="relative ">
          <h4 className="text-gray-900 font-bold text-xs sm:text-sm md:text-base xl:text-lg mb-0.5 group-hover:text-gray-800 transition-colors">
            {stat.label}
          </h4>
          <p className="text-gray-500 text-[10px] sm:text-xs flex items-center gap-1">
            {stat.subtext}
            <ArrowUpRight className="w-2 h-2 sm:w-2.5 sm:h-2.5 opacity-0 group-hover:opacity-100 transition-opacity" />
          </p>
        </div>

        {/* Bottom Accent Line */}
        <div className={`absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r ${stat.gradient} 
          transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left rounded-b-xl sm:rounded-b-2xl`} />
      </div>
    </motion.div>
  );
};

// Background Floating Elements
const FloatingShape = ({ delay, color, className }: FloatingShapeProps): React.ReactElement => (
  <motion.div
    animate={{
      y: [0, -30, 0],
      rotate: [0, 10, -10, 0],
      scale: [1, 1.1, 1]
    }}
    transition={{
      duration: 6,
      delay,
      repeat: Infinity,
      ease: "easeInOut"
    }}
    className={`absolute rounded-full blur-3xl opacity-20 pointer-events-none ${className}`}
    style={{ backgroundColor: color }}
  />
);

export default function CreativeStatsSection(): React.ReactElement {
  const [isClient, setIsClient] = useState<boolean>(false);
  const [slideIndex, setSlideIndex] = useState<number>(0);

  useEffect(() => {
    setIsClient(true);
  }, []);

  // Auto-slide 3 cards upfront at a time
  useEffect(() => {
    const timer = setInterval(() => {
      setSlideIndex((prev) => (prev + 1 >= stats.length ? 0 : prev + 1));
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const visibleStats = [
    stats[slideIndex % stats.length],
    stats[(slideIndex + 1) % stats.length],
    stats[(slideIndex + 2) % stats.length],
  ];

  return (
    <section className="relative w-full py-6 sm:py-8 md:py-10 lg:py-12 overflow-hidden bg-[#fafafa00]">
      {/* Animated Background Elements */}
      <FloatingShape delay={0} color="#0093cb" className="w-48 sm:w-64 md:w-80 h-48 sm:h-64 md:h-80 -top-16 -left-16" />
      <FloatingShape delay={2} color="#00a65d" className="w-40 sm:w-56 md:w-64 h-40 sm:h-56 md:h-64 top-1/2 right-0" />
      <FloatingShape delay={4} color="#8bde7a" className="w-36 sm:w-48 md:w-56 h-36 sm:h-48 md:h-56 bottom-16 left-1/3" />
      
      <div className="max-w-[1500px] mx-auto px-3 sm:px-4 md:px-6 lg:px-8 xl:px-8 relative ">
        
        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-10 md:mb-12 lg:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full bg-white shadow-md border border-gray-100 mb-3 sm:mb-4"
          >
            <Sparkles className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-[#0093cb]" />
            <span className="text-[10px] sm:text-xs font-semibold bg-gradient-to-r from-[#0093cb] to-[#00a65d] bg-clip-text text-transparent">
              Our Impact in Numbers
            </span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-4xl xl:text-5xl font-black capitalize tracking-tight mb-2 sm:mb-3 text-gray-900"
          >
            Achieved <span className="text-[#0093cb]">Numbers</span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-600 text-xs sm:text-xs md:text-sm lg:text-base max-w-2xl mx-auto"
          >
           Delivering Measurable Healthcare Communication Impact
           <br />Helping pharmaceutical companies improve doctor engagement, patient awareness, and healthcare communication through strategic branding solutions.

          </motion.p>
        </div>

        {/* 3 Stats Cards Upfront + Auto Slide */}
        <div className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-5 lg:gap-6">
            {visibleStats.map((stat, index) => (
              <TiltCard key={stat.id} stat={stat} index={index} />
            ))}
          </div>

          {/* Auto-Slide Indicator Dots */}
          <div className="flex justify-center items-center gap-3 pt-2">
            <div className="flex items-center gap-1.5">
              {stats.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setSlideIndex(idx)}
                  className={`transition-all duration-300 rounded-full ${
                    slideIndex % stats.length === idx
                      ? "w-6 h-2 bg-[#0093cb]"
                      : "w-2 h-2 bg-slate-300 hover:bg-slate-400"
                  }`}
                  aria-label={`Slide to stat ${idx + 1}`}
                />
              ))}
            </div>
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
              0{(slideIndex % stats.length) + 1} / 05 &bull; Auto Sliding
            </span>
          </div>
        </div>

      </div>
    </section>
  );
}