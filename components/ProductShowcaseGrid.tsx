"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

export default function ProductShowcaseGrid() {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { type: "spring" as const, stiffness: 120, damping: 18 } },
  };

  return (
    <section className="bg-[#f5f5f3] py-8 lg:py-6 px-4 sm:px-6 lg:px-8 lg:h-[calc(100vh-90px)] lg:min-h-[650px] lg:max-h-[820px] flex items-center justify-center overflow-hidden border-b border-slate-200">
      <div className="w-full max-w-[1400px] h-full flex flex-col justify-between">
        
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="h-full flex flex-col gap-4 lg:gap-5 justify-between"
        >
          {/* TOP ROW: 2 Cards (Desktop Reminders & Medipride) */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-5 h-[30%] lg:h-[30%] min-h-[160px] lg:min-h-0">
            
            {/* Card 1: Desktop Brand Reminders */}
            <motion.div
              variants={itemVariants}
              className="rounded-3xl bg-[#e5e4e0] p-5 lg:p-6 flex flex-col justify-between h-full relative overflow-hidden group"
            >
              <div className="flex justify-between items-start">
                <div>
                  <span className="text-[10px] uppercase font-extrabold tracking-widest text-slate-800 block mb-1">
                    Category 01
                  </span>
                  <h3 className="text-xl lg:text-2xl font-black text-slate-900 uppercase leading-none tracking-tight mb-2">
                    Desktop Brand Reminders <span className="font-light text-slate-500">──→</span>
                  </h3>
                  <p className="text-slate-600 text-xs max-w-md leading-relaxed line-clamp-2">
                    Paperweights, tabletops, promotional merchandise, 3D printed & fibre resin ranges.
                  </p>
                </div>
                <div className="w-8 h-8 rounded-full bg-white text-slate-900 flex items-center justify-center shadow-sm group-hover:bg-slate-100 shrink-0">
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </div>

              <div className="flex flex-wrap gap-1.5 mt-2 overflow-hidden max-h-[30px] lg:max-h-[35px]">
                {["Paperweights", "Tabletops", "Merchandise", "3D Printed", "Resin"].map((tag) => (
                  <span key={tag} className="text-[9px] font-bold uppercase tracking-wider text-slate-800 bg-white/40 px-2.5 py-1 rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Card 2: Medipride Communications */}
            <motion.div
              variants={itemVariants}
              className="rounded-3xl bg-[#e5e4e0] p-5 lg:p-6 flex flex-col justify-between h-full relative overflow-hidden group"
            >
              <div className="flex justify-between items-start">
                <div>
                  <span className="text-[10px] uppercase font-extrabold tracking-widest text-slate-800 block mb-1">
                    Category 02
                  </span>
                  <h3 className="text-xl lg:text-2xl font-black text-slate-900 uppercase leading-none tracking-tight mb-2">
                    Medipride Communications <span className="font-light text-slate-500">──→</span>
                  </h3>
                  <p className="text-slate-600 text-xs max-w-md leading-relaxed line-clamp-2">
                    Scientific inputs, therapy inputs, flipcharts, and write & wipe utility boards.
                  </p>
                </div>
                <div className="w-8 h-8 rounded-full bg-white text-slate-900 flex items-center justify-center shadow-sm group-hover:bg-slate-100 shrink-0">
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </div>

              <div className="flex flex-wrap gap-1.5 mt-2 overflow-hidden max-h-[30px] lg:max-h-[35px]">
                {["Therapy", "Days", "Write & Wipe", "Flipchart"].map((tag) => (
                  <span key={tag} className="text-[9px] font-bold uppercase tracking-wider text-slate-800 bg-white/40 px-2.5 py-1 rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>

          </div>

          {/* MIDDLE ROW: 1 Large Card (Digital Engagement Solutions) */}
          <motion.div
            variants={itemVariants}
            className="rounded-3xl bg-[#e5e4e0] p-5 lg:p-6 flex flex-col md:flex-row gap-6 items-stretch justify-between h-[36%] lg:h-[36%] min-h-[180px] lg:min-h-0 relative group overflow-hidden"
          >
            <div className="flex flex-col justify-between max-w-xl py-1">
              <div>
                <span className="text-[10px] uppercase font-extrabold tracking-widest text-slate-800 block mb-1">
                  Category 03
                </span>
                <h3 className="text-2xl lg:text-3xl font-black text-slate-900 uppercase leading-none tracking-tight mb-2">
                  Digital Engagement Solutions
                </h3>
                <p className="text-slate-600 text-xs lg:text-sm leading-relaxed max-w-md line-clamp-3">
                  Interactive technology-driven platforms like DigiPRO, HRA calculators, and custom QR code integration.
                </p>
              </div>

              <div className="flex flex-wrap gap-1.5 mt-3">
                {["DigiPRO", "QR Products", "HRA Calculators", "Websites"].map((tag) => (
                  <span key={tag} className="text-[9px] font-bold uppercase tracking-wider text-slate-800 bg-white/40 px-2.5 py-1 rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Visual Column */}
            <div className="hidden md:block w-2/5 rounded-2xl overflow-hidden bg-slate-50 border border-slate-200 shrink-0 relative h-full">
              <img 
                src="https://pub-735dbd7583d74ad5949115d6fdf77023.r2.dev/Digital%20Inputs/10.png" 
                alt="Digital Engagement Solutions"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
              <div className="absolute bottom-3 right-3 w-8 h-8 rounded-full bg-white text-slate-900 flex items-center justify-center shadow-md">
                <ArrowUpRight className="w-4 h-4" />
              </div>
            </div>
          </motion.div>

          {/* BOTTOM ROW: 2 Cards (Hyperpersonalized & Visual Aids) */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-5 h-[30%] lg:h-[30%] min-h-[160px] lg:min-h-0">
            
            {/* Card 4: Hyperpersonalized Products */}
            <motion.div
              variants={itemVariants}
              className="relative rounded-3xl overflow-hidden group bg-[#ebeae6] h-full"
            >
              <img 
                src="https://pub-735dbd7583d74ad5949115d6fdf77023.r2.dev/Categories/3D%20PRINTED/ChatGPT%20Image%20May%2028%2C%202026%2C%2002_04_56%20PM.png" 
                alt="Hyperpersonalized Products"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
              
              <div className="absolute bottom-4 left-5 right-5 flex items-center justify-between text-white">
                <span className="text-xs font-extrabold uppercase tracking-widest bg-black/35 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/10">
                  #Hyperpersonalized
                </span>
                <div className="w-8 h-8 rounded-full bg-white text-slate-900 flex items-center justify-center shadow-lg group-hover:bg-slate-100 transition-colors">
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </div>
            </motion.div>

            {/* Card 5: Visual Aids & Detailers */}
            <motion.div
              variants={itemVariants}
              className="relative rounded-3xl overflow-hidden group bg-[#ebeae6] h-full"
            >
              <img 
                src="https://pub-735dbd7583d74ad5949115d6fdf77023.r2.dev/Therepy/ENT%20%26%20Respiratory/28.png" 
                alt="Visual Aids & Detailers"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
              
              <div className="absolute bottom-4 left-5 right-5 flex items-center justify-between text-white">
                <span className="text-xs font-extrabold uppercase tracking-widest bg-black/35 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/10">
                  #VisualAids
                </span>
                <div className="w-8 h-8 rounded-full bg-white text-slate-900 flex items-center justify-center shadow-lg group-hover:bg-slate-100 transition-colors">
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </div>
            </motion.div>

          </div>

        </motion.div>
      </div>
    </section>
  );
}
