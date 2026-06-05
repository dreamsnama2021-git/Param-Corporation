'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

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
    <div className="relative w-full max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-8">
      {/* Central Path */}
      <div className="absolute left-1/2 top-0 bottom-0 -translate-x-1/2 w-[1px] bg-[#0093cb] hidden md:block" />

      <div className="space-y-6 sm:space-y-8 md:space-y-10 lg:space-y-12 xl:space-y-16">
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
    <div className="relative grid grid-cols-1 md:grid-cols-2 items-center gap-4 sm:gap-6 md:gap-8 lg:gap-10 xl:gap-12">
      
      {/* Visual Content */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className={`w-full flex justify-center ${isEven ? 'md:justify-end md:pr-6 lg:pr-10 xl:pr-16' : 'md:justify-start md:pl-6 lg:pl-10 xl:pl-16 md:order-2'}`}
      >
        <div className="relative aspect-[4/3] w-full max-w-[280px] sm:max-w-[340px] md:max-w-[320px] lg:max-w-[360px] xl:max-w-[400px] rounded-xl sm:rounded-2xl overflow-hidden shadow-lg sm:shadow-2xl group">
          <Image 
            src={item.image} 
            alt={item.title} 
            fill 
            className="object-cover group-hover:scale-110 transition-transform duration-1000"
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 40vw, 35vw"
            quality={80}
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          <div className="absolute bottom-3 sm:bottom-4 md:bottom-6 left-3 sm:left-4 md:left-6">
             <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white mb-2 sm:mb-3">
                <Icon size={16} className="sm:size-5" />
             </div>
             <p className="text-white/70 text-[10px] sm:text-xs font-bold tracking-[0.2em] uppercase">{item.category}</p>
          </div>
        </div>
      </motion.div>

      {/* Center Connector (Desktop) */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 hidden md:block z-20">
        <div className="relative flex items-center justify-center">
            <div className="w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-[#0093cb]" />
            <motion.div 
                initial={{ width: 0 }}
                whileInView={{ width: 60 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className={`absolute h-[1px] bg-[#0093cb] -z-10 ${isEven ? 'left-full' : 'right-full'}`}
            />
        </div>
      </div>

      {/* Text Content */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className={`w-full flex justify-center ${isEven ? 'md:justify-start md:pl-6 lg:pl-10 xl:pl-16 md:order-2' : 'md:justify-end md:pr-6 lg:pr-10 xl:pr-16 md:order-1'}`}
      >
        <div className="w-full max-w-[280px] sm:max-w-[340px] md:max-w-[320px] lg:max-w-[360px] xl:max-w-[400px] space-y-2 sm:space-y-3 md:space-y-4">
          {/* Date */}
          <div className="flex items-center gap-2 sm:gap-3">
            <span className="text-3xl sm:text-4xl md:text-3xl lg:text-4xl xl:text-5xl font-black text-[#00a65d] tracking-tighter leading-none">
              {item.date}
            </span>
            <span className="text-[10px] sm:text-xs font-bold tracking-[0.2em] uppercase text-slate-400 md:hidden">
              {item.category}
            </span>
          </div>
          
          {/* Title */}
          <h3 className="text-lg sm:text-xl md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl font-bold text-slate-900 leading-tight">
            {item.title}
          </h3>
          
          {/* Description */}
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed 
                       line-clamp-5 md:line-clamp-none lg:line-clamp-8">
            {item.description}
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default EditorialTimeline;