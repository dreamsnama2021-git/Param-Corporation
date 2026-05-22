'use client';

import React, { useRef, useEffect, useState, ReactNode } from 'react';
import { motion, useMotionValue, useSpring, useTransform, useInView } from 'framer-motion';
import { 
  Users, 
  PackageCheck, 
  Clock, 
  MapPin, 
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
    value: 98,
    suffix: "%",
    label: "Clients Satisfaction Rate",
    subtext: "Trusted Partners",
    icon: Users,
    gradient: "from-[#0093cb] to-[#0077b6]",
    accent: "#0093cb",
    position: "top"
  },
  {
    id: 2,
    value: 500,
    suffix: "+",
    label: "Products Delivered",
    subtext: "And Counting",
    icon: PackageCheck,
    gradient: "from-[#00a65d] to-[#008f4c]",
    accent: "#00a65d",
    position: "center"
  },
  {
    id: 3,
    value: 50000,
    suffix: "+",
    label: "Patients Reached",
    subtext: "Industry Leaders",
    icon: Clock,
    gradient: "from-[#8bde7a] to-[#6bc952]",
    accent: "#8bde7a",
    position: "top"
  },
  {
    id: 4,
    value: 25,
    suffix: "+",
    label: "Cities Covered",
    subtext: "Nationwide Reach",
    icon: MapPin,
    gradient: "from-[#0093cb] to-[#00a65d]",
    accent: "#0093cb",
    position: "center"
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
  // Fix hydration error: use client-side only rendering for random number
  const [trendPercentage, setTrendPercentage] = useState<number>(0);
  const [isClient, setIsClient] = useState<boolean>(false);

  useEffect(() => {
    setIsClient(true);
    // Generate random percentage only on client side
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
      className="relative group perspective-1000"
    >
      <div className={`relative bg-white/70 backdrop-blur-xl rounded-2xl sm:rounded-3xl p-4 sm:p-5 md:p-6 lg:p-8 
        border border-white/50 shadow-xl hover:shadow-2xl 
        transition-all duration-500 hover:border-[${stat.accent}]/30
        ${stat.position === 'center' ? 'lg:mt-8 xl:mt-12' : ''}`}
        style={{
          boxShadow: `0 25px 50px -12px ${stat.accent}20`
        }}
      >
        {/* Floating Gradient Orb */}
        <div className={`absolute -top-8 sm:-top-10 -right-8 sm:-right-10 w-24 sm:w-28 md:w-32 h-24 sm:h-28 md:h-32 bg-gradient-to-br ${stat.gradient} 
          rounded-full opacity-0 group-hover:opacity-20 blur-3xl transition-opacity duration-700`} />
        
        {/* Glass Shine Effect */}
        <div className="absolute inset-0 rounded-2xl sm:rounded-3xl bg-gradient-to-br from-white/40 via-transparent to-transparent 
          opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

        {/* Top Row: Icon & Trend */}
        <div className="flex justify-between items-start mb-4 sm:mb-6 relative z-10">
          <div className={`p-2 sm:p-3 rounded-xl sm:rounded-2xl bg-gradient-to-br ${stat.gradient} text-white 
            shadow-lg transform group-hover:scale-110 transition-transform duration-300
            group-hover:rotate-3`}>
            <Icon className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-7 lg:h-7" strokeWidth={1.5} />
          </div>
          
          {/* Fixed: Only render trend percentage on client side to prevent hydration mismatch */}
          <div className="flex items-center gap-1 text-[10px] sm:text-xs font-medium text-gray-400 
            opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-2 group-hover:translate-y-0">
            <TrendingUp className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-green-500" />
            {isClient && (
              <span className="text-green-600">+{trendPercentage}%</span>
            )}
          </div>
        </div>

        {/* Number Display */}
        <div className="relative mb-2">
          <h3 className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter bg-gradient-to-r ${stat.gradient} 
            bg-clip-text text-transparent tabular-nums`}>
            {displayValue}{stat.suffix}
          </h3>
          
          {/* Animated Underline */}
          <motion.div 
            className={`h-1 bg-gradient-to-r ${stat.gradient} rounded-full mt-2`}
            initial={{ width: 0 }}
            animate={isInView ? { width: "60%" } : {}}
            transition={{ delay: index * 0.15 + 0.5, duration: 0.8 }}
          />
        </div>

        {/* Label */}
        <div className="relative z-10">
          <h4 className="text-gray-900 font-bold text-sm sm:text-base md:text-lg lg:text-xl mb-1 group-hover:text-gray-800 transition-colors">
            {stat.label}
          </h4>
          <p className="text-gray-500 text-xs sm:text-sm flex items-center gap-1">
            {stat.subtext}
            <ArrowUpRight className="w-2.5 h-2.5 sm:w-3 sm:h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
          </p>
        </div>

        {/* Bottom Accent Line */}
        <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${stat.gradient} 
          transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left rounded-b-2xl sm:rounded-b-3xl`} />
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

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <section className="relative w-full py-6 sm:py-8 md:py-10 overflow-hidden bg-[#fafafa00]">
      {/* Animated Background Elements */}
      <FloatingShape delay={0} color="#0093cb" className="w-64 sm:w-80 md:w-96 h-64 sm:h-80 md:h-96 -top-20 -left-20" />
      <FloatingShape delay={2} color="#00a65d" className="w-56 sm:w-64 md:w-80 h-56 sm:h-64 md:h-80 top-1/2 right-0" />
      <FloatingShape delay={4} color="#8bde7a" className="w-48 sm:w-56 md:w-64 h-48 sm:h-56 md:h-64 bottom-20 left-1/3" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-10 sm:mb-12 md:mb-16 lg:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-white shadow-md border border-gray-100 mb-4 sm:mb-6"
          >
            <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 text-[#0093cb]" />
            <span className="text-xs sm:text-sm font-semibold bg-gradient-to-r from-[#0093cb] to-[#00a65d] bg-clip-text text-transparent">
              Our Impact in Numbers
            </span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold capitalize tracking-tight mb-2 sm:mb-3 md:mb-4 text-gray-900"
          >
            Achieved <span className="text-[#0093cb]">Numbers</span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-600 text-sm sm:text-base md:text-lg max-w-2xl mx-auto"
          >
            Delivering measurable impact through healthcare communication.
          </motion.p>
        </div>

        {/* Stats Grid - Staggered Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          {stats.map((stat, index) => (
            <TiltCard key={stat.id} stat={stat} index={index} />
          ))}
        </div>

      </div>
    </section>
  );
}