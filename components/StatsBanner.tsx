'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
  Users, 
  Package, 
  Award, 
  FileCheck, 
  TrendingUp 
} from 'lucide-react';

interface StatItemProps {
  icon: React.ComponentType<{ className?: string }>;
  value: string;
  label: string;
  theme: 'blue' | 'green';
  index: number;
}

const StatCard = ({ icon: Icon, value, label, theme, index }: StatItemProps) => {
  const isBlue = theme === 'blue';
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      whileHover={{ y: -4 }}
      className={`relative group flex flex-col justify-between p-6 rounded-[28px] shadow-[0_10px_30px_rgba(0,0,0,0.02)] transition-all duration-300 border h-[180px] lg:h-[200px] ${
        isBlue 
          ? 'bg-[#e6f4fa] border-[#0093cb]/15 text-[#002d40] hover:border-[#0093cb]/30' 
          : 'bg-[#f0f9eb] border-[#00a65d]/15 text-[#004d2b] hover:border-[#00a65d]/30'
      }`}
    >
      {/* Icon top left */}
      <div className="flex justify-between items-start">
        <div className={`w-9 h-9 rounded-full flex items-center justify-center ${
          isBlue ? 'bg-[#0093cb]/10 text-[#0093cb]' : 'bg-[#00a65d]/10 text-[#00a65d]'
        }`}>
          <Icon className="w-5 h-5" />
        </div>
        <span className="text-[10px] font-bold opacity-30 uppercase tracking-widest">
          Metric 0{index + 1}
        </span>
      </div>

      {/* Value & Label */}
      <div className="mt-4">
        <h4 className={`text-3xl lg:text-4xl font-black tracking-tight leading-none ${
          isBlue ? 'text-[#0093cb]' : 'text-[#00a65d]'
        }`}>
          {value}
        </h4>
        <p className="text-xs font-semibold tracking-wide mt-1.5 opacity-80 leading-snug">
          {label}
        </p>
      </div>

      {/* Subtle bottom accent line */}
      <div className={`absolute bottom-0 left-6 right-6 h-[2px] rounded-t-full transition-transform duration-300 scale-x-0 group-hover:scale-x-100 ${
        isBlue ? 'bg-[#0093cb]/30' : 'bg-[#00a65d]/30'
      }`} />
    </motion.div>
  );
};

export default function StatsBanner() {
  const statsList = [
    {
      icon: Users,
      value: "100+",
      label: "Corporate Clients",
      theme: "blue" as const,
    },
    {
      icon: Package,
      value: "1000+",
      label: "Products Across Categories",
      theme: "green" as const,
    },
    {
      icon: Award,
      value: "10+",
      label: "Years of Industry Experience",
      theme: "blue" as const,
    },
    {
      icon: FileCheck,
      value: "1000+",
      label: "Large Ticket Size Orders",
      theme: "green" as const,
    },
    {
      icon: TrendingUp,
      value: "100M+",
      label: "Total Sales Achieved",
      theme: "blue" as const,
    },
  ];

  return (
    <section className="bg-[#fafcff] py-10 lg:py-12 px-4 sm:px-6 lg:px-8 overflow-hidden flex items-center justify-center border-b border-[#0093cb]/10">
      <div className="w-full max-w-[1800px]">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
          {statsList.map((stat, idx) => (
            <StatCard 
              key={idx}
              icon={stat.icon}
              value={stat.value}
              label={stat.label}
              theme={stat.theme}
              index={idx}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
