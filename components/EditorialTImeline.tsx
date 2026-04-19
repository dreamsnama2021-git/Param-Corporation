// components/EditorialTimeline.tsx
'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { ChevronRight } from 'lucide-react';

// ─────────────────────────────────────────────────
// DEFINE INTERFACE HERE
// ─────────────────────────────────────────────────
export interface TimelineItem {
  title: string;
  description: string;
  date: string;
  category: string;
  icon: React.ElementType;
  image: string;
}

// ─────────────────────────────────────────────────
// EDITORIAL TIMELINE COMPONENT
// ─────────────────────────────────────────────────
interface EditorialTimelineProps {
  items: TimelineItem[];
}

export function EditorialTimeline({ items }: EditorialTimelineProps) {
  return (
    <div className="relative max-w-6xl mx-auto px-6">
      {/* Central Path */}
      <div className="absolute left-1/2 top-0 bottom-0 -translate-x-1/2 w-[1px] bg-slate-200 hidden md:block" />

      <div className="space-y-32">
        {items.map((item, index) => (
          <EditorialRow key={index} item={item} index={index} />
        ))}
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────
// EDITORIAL ROW COMPONENT
// ─────────────────────────────────────────────────
const EditorialRow = ({ item, index }: { item: TimelineItem; index: number }) => {
  const isEven = index % 2 === 0;
  const Icon = item.icon;

  return (
    <div className={`relative flex flex-col ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-12 lg:gap-24`}>
      
      {/* Visual Content */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="w-full md:w-1/2"
      >
        <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl group">
          <Image 
            src={item.image} 
            alt={item.title} 
            fill 
            className="object-cover group-hover:scale-110 transition-transform duration-1000"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          <div className="absolute bottom-8 left-8">
             <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white mb-4">
                <Icon size={24} />
             </div>
             <p className="text-white/70 text-xs font-bold tracking-[0.2em] uppercase">{item.category}</p>
          </div>
        </div>
      </motion.div>

      {/* Center Connector (Desktop) */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 hidden md:block z-20">
        <div className="relative flex items-center justify-center">
            {/* The Node */}
            <div className="w-4 h-4 rounded-full bg-white border-2 border-slate-900" />
            
            {/* The Connecting Arm Line */}
            <motion.div 
                initial={{ width: 0 }}
                whileInView={{ width: 100 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.4 }}
                className={`absolute h-[1px] bg-slate-300 -z-10 ${isEven ? 'left-4' : 'right-4'}`}
                style={{ originX: isEven ? 0 : 1 }}
            />
        </div>
      </div>

      {/* Text Content */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="w-full md:w-1/2 space-y-6"
      >
        <div className="flex items-baseline gap-4">
            <span className="text-6xl font-black text-[#00a65d] tracking-tighter">{item.date}</span>
            <div className="h-px flex-1 bg-slate-100 md:hidden" />
        </div>
        
        <h3 className="text-3xl md:text-4xl font-bold text-slate-900 leading-tight">
          {item.title}
        </h3>
        
        <p className="text-lg text-slate-600 leading-relaxed max-w-md">
          {item.description}
        </p>

        <div className="pt-4">
            <button className="group flex items-center gap-2 text-sm font-bold text-slate-900 tracking-wider">
                EXPLORE MILESTONE 
                <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
        </div>
      </motion.div>
    </div>
  );
};

export default EditorialTimeline;
