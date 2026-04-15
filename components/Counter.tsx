'use client';

import React, { useRef, useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform, useInView } from 'framer-motion';
import { 
  Users, 
  PackageCheck, 
  Clock, 
  MapPin, 
  Star,
  TrendingUp,
  ArrowUpRight,
  Sparkles
} from 'lucide-react';

const stats = [
  {
    id: 1,
    value: 500,
    suffix: "+",
    label: "Happy Clients",
    subtext: "Trusted Partners",
    icon: Users,
    gradient: "from-[#0093cb] to-[#0077b6]",
    accent: "#0093cb",
    position: "top"
  },
  {
    id: 2,
    value: 50,
    suffix: "K",
    label: "Products Delivered",
    subtext: "And Counting",
    icon: PackageCheck,
    gradient: "from-[#00a65d] to-[#008f4c]",
    accent: "#00a65d",
    position: "center"
  },
  {
    id: 3,
    value: 12,
    suffix: "+",
    label: "Years Experience",
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
const TiltCard = ({ stat, index }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  
  const mouseXSpring = useSpring(x, { stiffness: 500, damping: 100 });
  const mouseYSpring = useSpring(y, { stiffness: 500, damping: 100 });
  
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["17.5deg", "-17.5deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-17.5deg", "17.5deg"]);
  
  const handleMouseMove = (e) => {
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
  
  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const Icon = stat.icon;
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (isInView) {
      let startTime;
      const duration = 2500;
      
      const step = (timestamp) => {
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
      <div className={`relative bg-white/70 backdrop-blur-xl rounded-3xl p-6 md:p-8 
        border border-white/50 shadow-xl hover:shadow-2xl 
        transition-all duration-500 hover:border-${stat.accent}/30
        ${stat.position === 'center' ? 'lg:mt-12' : ''}`}
        style={{
          boxShadow: `0 25px 50px -12px ${stat.accent}20`
        }}
      >
        {/* Floating Gradient Orb */}
        <div className={`absolute -top-10 -right-10 w-32 h-32 bg-gradient-to-br ${stat.gradient} 
          rounded-full opacity-0 group-hover:opacity-20 blur-3xl transition-opacity duration-700`} />
        
        {/* Glass Shine Effect */}
        <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/40 via-transparent to-transparent 
          opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

        {/* Top Row: Icon & Trend */}
        <div className="flex justify-between items-start mb-6 relative z-10">
          <div className={`p-3 rounded-2xl bg-gradient-to-br ${stat.gradient} text-white 
            shadow-lg transform group-hover:scale-110 transition-transform duration-300
            group-hover:rotate-3`}>
            <Icon className="w-6 h-6 md:w-7 md:h-7" strokeWidth={1.5} />
          </div>
          
          <div className="flex items-center gap-1 text-xs font-medium text-gray-400 
            opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-2 group-hover:translate-y-0">
            <TrendingUp className="w-3 h-3 text-green-500" />
            <span className="text-green-600">+{Math.floor(Math.random() * 15 + 5)}%</span>
          </div>
        </div>

        {/* Number Display */}
        <div className="relative mb-2">
          <h3 className={`text-5xl md:text-6xl font-black tracking-tighter bg-gradient-to-r ${stat.gradient} 
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
          <h4 className="text-gray-900 font-bold text-lg md:text-xl mb-1 group-hover:text-gray-800 transition-colors">
            {stat.label}
          </h4>
          <p className="text-gray-500 text-sm flex items-center gap-1">
            {stat.subtext}
            <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
          </p>
        </div>

        {/* Bottom Accent Line */}
        <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${stat.gradient} 
          transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left rounded-b-3xl`} />
      </div>
    </motion.div>
  );
};

// Background Floating Elements
const FloatingShape = ({ delay, color, className }) => (
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

export default function CreativeStatsSection() {
  return (
    <section className="relative w-full py-8 md:py-10 overflow-hidden bg-[#fafafa]">
      {/* Animated Background Elements */}
      <FloatingShape delay={0} color="#0093cb" className="w-96 h-96 -top-20 -left-20" />
      <FloatingShape delay={2} color="#00a65d" className="w-80 h-80 top-1/2 right-0" />
      <FloatingShape delay={4} color="#8bde7a" className="w-64 h-64 bottom-20 left-1/3" />
      
      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white shadow-md border border-gray-100 mb-6"
          >
            <Sparkles className="w-4 h-4 text-[#0093cb]" />
            <span className="text-sm font-semibold bg-gradient-to-r from-[#0093cb] to-[#00a65d] bg-clip-text text-transparent">
              Our Impact in Numbers
            </span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4"
          >
            Trusted by <span className="text-[#0093cb]">Industry Leaders</span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-600 text-lg max-w-2xl mx-auto"
          >
            Delivering excellence in corporate gifting with measurable results and lasting partnerships
          </motion.p>
        </div>

        {/* Stats Grid - Staggered Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 lg:gap-8">
          {stats.map((stat, index) => (
            <TiltCard key={stat.id} stat={stat} index={index} />
          ))}
        </div>

       

      </div>
    </section>
  );
}
