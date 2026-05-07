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
// EDITORIAL TIMELINE COMPONENT (PORTRAIT VERSION)
// ─────────────────────────────────────────────────
interface EditorialTimelineProps {
  items: TimelineItem[];
}

export function EditorialTimeline({ items }: EditorialTimelineProps) {
  return (
    <div className="relative max-w-4xl mx-auto px-6">
      {/* Vertical Central Path */}
      <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-blue-200 via-[#0093cb] to-blue-200 transform md:-translate-x-1/2" />

      <div className="space-y-16 md:space-y-24">
        {items.map((item, index) => (
          <EditorialCard key={index} item={item} index={index} />
        ))}
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────
// EDITORIAL CARD COMPONENT (PORTRAIT LAYOUT)
// ─────────────────────────────────────────────────
const EditorialCard = ({ item, index }: { item: TimelineItem; index: number }) => {
  const isEven = index % 2 === 0;
  const Icon = item.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, delay: index * 0.1 }}
      className="relative pl-16 md:pl-0"
    >
      {/* Timeline Node */}
      <div className="absolute left-8 md:left-1/2 top-8 transform -translate-x-1/2 z-20">
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
          className="w-12 h-12 rounded-full bg-white border-4 border-[#0093cb] flex items-center justify-center shadow-lg"
        >
          <Icon size={20} className="text-[#0093cb]" />
        </motion.div>
        
        {/* Connecting Arm to Content */}
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: isEven ? 30 : 30 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: index * 0.1 + 0.5 }}
          className={`absolute top-1/2 h-[1px] bg-[#0093cb] -z-10 hidden md:block ${
            isEven ? 'left-full' : 'right-full'
          }`}
          style={{ originX: isEven ? 0 : 1 }}
        />
      </div>

      {/* Content Card */}
      <div className={`w-full ${isEven ? 'md:pr-16 md:ml-auto md:w-[calc(50%-3rem)]' : 'md:pl-16 md:mr-auto md:w-[calc(50%-3rem)]'}`}>
        <motion.div
          whileHover={{ y: -5 }}
          className="relative bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden group"
        >
          {/* Image Section */}
          <div className="relative aspect-[16/9] overflow-hidden">
            <Image
              src={item.image}
              alt={item.title}
              fill
              className="object-cover transition-transform duration-1000 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
            
            {/* Date & Category Overlay */}
            <div className="absolute bottom-6 left-6 space-y-2">
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center">
                  <Icon size={18} className="text-white" />
                </div>
                <span className="text-white/90 text-sm font-bold uppercase tracking-widest">
                  {item.category}
                </span>
              </div>
              <span className="text-5xl md:text-6xl font-black text-white tracking-tighter block">
                {item.date}
              </span>
            </div>
          </div>

          {/* Content Section */}
          <div className="p-6 md:p-8 space-y-4">
            <h3 className="text-2xl md:text-3xl font-bold text-slate-900 leading-tight">
              {item.title}
            </h3>
            
            <p className="text-base md:text-lg text-slate-600 leading-relaxed">
              {item.description}
            </p>

            <div className="pt-4 border-t border-slate-100">
              <button className="group flex items-center gap-2 text-sm font-bold text-[#00a65d] hover:text-[#008c4e] transition-colors uppercase tracking-wider">
                Explore Milestone
                <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default EditorialTimeline;