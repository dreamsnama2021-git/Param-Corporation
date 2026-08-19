'use client';

import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { 
  Users, 
  Package, 
  Award, 
  FileCheck, 
  TrendingUp 
} from 'lucide-react';

interface StatItemProps {
  icon: React.ComponentType<{ className?: string }>;
  value: number;
  suffix: string;
  label: string;
  isSales?: boolean;
  prefix?: string;
  index: number;
}

const AnimatedCounter = ({ value, duration = 2 }: { value: number; duration?: number }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (!isInView) return;
    
    let start = 0;
    const end = value;
    if (start === end) return;

    const totalMiliseconds = duration * 1000;
    const incrementTime = Math.max(Math.floor(totalMiliseconds / end), 15);
    
    const timer = setInterval(() => {
      start += Math.ceil(end / (totalMiliseconds / incrementTime));
      if (start >= end) {
        clearInterval(timer);
        setCount(end);
      } else {
        setCount(start);
      }
    }, incrementTime);

    return () => clearInterval(timer);
  }, [value, duration, isInView]);

  return <span ref={ref}>{count.toLocaleString()}</span>;
};

const StatCard = ({ icon: Icon, value, suffix, label, isSales = false, prefix = '', index }: StatItemProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ y: -6, scale: 1.02 }}
      className="relative group flex items-center gap-4 p-5 md:p-6 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 hover:border-white/20 transition-all duration-300 overflow-hidden shadow-lg hover:shadow-2xl hover:shadow-black/20"
    >
      {/* Dynamic background glow on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/0 via-white/0 to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
      <div className="absolute -right-12 -bottom-12 w-28 h-28 bg-white/5 rounded-full blur-xl group-hover:scale-150 transition-transform duration-700 pointer-events-none" />

      {/* Decorative colored glow matching the main design */}
      <div className="absolute -left-4 -top-4 w-12 h-12 bg-[#82C341]/10 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-all duration-500" />

      {/* Icon Container with Animated Border Ring */}
      <div className="relative flex-shrink-0 flex items-center justify-center w-14 h-14 md:w-16 md:h-16 rounded-xl bg-white/10 text-white group-hover:text-[#82C341] transition-colors duration-300">
        <Icon className="w-7 h-7 md:w-8 md:h-8 stroke-[1.25] relative z-10 transition-transform duration-500 group-hover:rotate-12" />
        <div className="absolute inset-0 rounded-xl border border-white/20 group-hover:border-[#82C341]/50 group-hover:scale-105 transition-all duration-300" />
      </div>
      
      {/* Text Content */}
      <div className="flex flex-col justify-center relative z-10">
        {isSales ? (
          <>
            <span className="text-white/80 text-xs md:text-[13px] font-semibold tracking-wider uppercase mb-0.5">
              {label}
            </span>
            <div className="flex items-baseline text-[#82C341] font-black tracking-tight">
              <span className="text-2xl md:text-3xl">
                <AnimatedCounter value={value} />
              </span>
              <span className="text-lg md:text-xl font-bold ml-1">{suffix}</span>
            </div>
          </>
        ) : (
          <>
            <div className="flex items-baseline text-[#82C341] font-black tracking-tight leading-none mb-1">
              <span className="text-2xl md:text-3xl">
                {prefix && <span className="text-lg md:text-xl font-bold mr-0.5">{prefix}</span>}
                <AnimatedCounter value={value} />
              </span>
              <span className="text-xl md:text-2xl font-bold ml-0.5">{suffix}</span>
            </div>
            <span className="text-white/90 text-xs md:text-sm font-medium tracking-wide leading-snug max-w-[180px] group-hover:text-white transition-colors">
              {label}
            </span>
          </>
        )}
      </div>
    </motion.div>
  );
};

export default function StatsBanner() {
  return (
    <section className="w-full px-4 sm:px-6 lg:px-8 py-10 md:py-16 bg-[#fafafa]">
      <div className="max-w-7xl mx-auto">
        
        {/* Sleek Gradient Wrapper with Ambient Outer Glow */}
        <div className="relative overflow-hidden rounded-[24px] md:rounded-[36px] bg-gradient-to-r from-[#002673] via-[#025659] to-[#08662d] p-1.5 md:p-2 shadow-[0_20px_50px_rgba(2,86,89,0.15)] border border-[#ffffff15]">
          
          {/* Pulsing overlay mesh gradients inside */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,_var(--tw-gradient-stops))] from-blue-500/10 via-transparent to-transparent pointer-events-none" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_80%,_var(--tw-gradient-stops))] from-green-500/10 via-transparent to-transparent pointer-events-none" />
          
          <div className="relative z-10 bg-[#001740]/40 backdrop-blur-xl rounded-[18px] md:rounded-[28px] p-6 md:p-8">
            {/* Grid Layout */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 md:gap-6">
              
              {/* Stat 1 */}
              <StatCard 
                icon={Users} 
                value={100}
                suffix="+" 
                label="Corporate Clients" 
                index={0}
              />
              
              {/* Stat 2 */}
              <StatCard 
                icon={Package} 
                value={1000} 
                suffix="+"
                label="Products Across Categories" 
                index={1}
              />
              
              {/* Stat 3 */}
              <StatCard 
                icon={Award} 
                value={10} 
                suffix="+"
                label="Years of Industry Experience" 
                index={2}
              />
              
              {/* Stat 4 */}
              <StatCard 
                icon={FileCheck} 
                value={1000} 
                suffix="+"
                label="Large Ticket Size Orders Delivered" 
                index={3}
              />
              
              {/* Stat 5 (Sales) */}
              <StatCard 
                icon={TrendingUp} 
                value={100} 
                suffix="Million+"
                label="Sales" 
                isSales={true}
                index={4}
              />
              
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
