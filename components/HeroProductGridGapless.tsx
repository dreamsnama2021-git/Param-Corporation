"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, BookOpen, QrCode, Heart, ShieldCheck } from "lucide-react";
import Link from "next/link";

export default function HeroProductGridGapless() {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } as any },
  };

  return (
    <section className="w-full lg:h-[calc(145vh-56px)] lg:min-h-[1150px] flex flex-col bg-[#05080c] text-white overflow-hidden font-sans border-b border-white/5 select-none relative">
      {/* Subtle Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />
      
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="w-full h-full flex flex-col flex-grow"
      >
        {/* ROW 1: [Left - Desktop Brand Reminders (30%)] [Right - Side-by-side Cards (70%)] */}
        <div className="flex flex-col lg:flex-row h-auto lg:h-[50%] border-b border-white/10">
          
          {/* 1. Desktop Brand Reminders (Row 1 Left - 30% width) */}
          <motion.div
            variants={itemVariants}
            className="w-full lg:w-[30%] p-8 flex flex-col justify-between min-h-[350px] lg:min-h-0 relative overflow-hidden group border-b lg:border-b-0 lg:border-r border-white/10 bg-[#08222f] hover:bg-[#092a3b] transition-all duration-700 text-[#e6f4fa]"
          >
            {/* Background Image with Zoom & Overlay */}
            <div className="absolute inset-0 z-0">
              <img
                src="https://pub-735dbd7583d74ad5949115d6fdf77023.r2.dev/Banners/Circle%20Banner/ChatGPT%20Image%20Aug%2027%2C%202026%2C%2010_36_24%20AM.png"
                alt="Desktop Brand Reminders"
                className="w-full h-full object-cover scale-100 group-hover:scale-105 transition-transform duration-1000 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#05080c] via-[#05080c]/60 to-transparent opacity-90" />
              <div className="absolute inset-0 bg-gradient-to-r from-[#0093cb]/10 to-transparent mix-blend-overlay" />
            </div>

            {/* Card Header */}
            <div className="flex justify-between items-start z-10">
              <div className="space-y-1">
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#0093cb] bg-[#0093cb]/10 px-3 py-1 rounded-full border border-[#0093cb]/20 backdrop-blur-md">
                  Featured Category
                </span>
                <span className="block text-[10px] text-white/50 tracking-wider">Category 01</span>
              </div>

              <Link href="/categories/all?tab=categories#category-desktop-brand-reminders" className="w-10 h-10 rounded-full bg-white/5 border border-white/15 hover:bg-[#0093cb] hover:border-[#0093cb] hover:scale-105 text-white flex items-center justify-center transition-all backdrop-blur-sm">
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Bottom details */}
            <div className="relative z-10 mt-8 bg-black/45 p-5 rounded-2xl border border-white/5 backdrop-blur-sm">
              <h2 className="text-xl lg:text-2xl font-black uppercase tracking-tight text-white mb-2">
                Desktop Reminders
              </h2>
              <p className="text-xs text-white/80 leading-relaxed mb-3">
                Functional tabletop materials, paperweights, promotional merchandise, 3D printing & resin configurations.
              </p>
              <div className="text-[9px] font-black uppercase tracking-widest text-[#0093cb]">
                paramcorp.in &bull; evergreen
              </div>
            </div>
          </motion.div>

          {/* 2. SIDE-BY-SIDE COLUMN (Row 1 Right - 70% width, contains Digital Solutions & Patient Education side-by-side) */}
          <div className="w-full lg:w-[70%] flex flex-col lg:flex-row bg-[#0c131a]/60">
            
            {/* Left Card: Digital Solutions (35% total width) */}
            <Link 
              href="/categories/all?tab=personalized#category-digital-engagement" 
              className="group flex-1 flex flex-col justify-between p-8 border-b lg:border-b-0 lg:border-r border-white/10 hover:bg-[#0093cb]/5 transition-all duration-300 relative overflow-hidden min-h-[300px] lg:min-h-0"
            >
              <div className="absolute inset-0 z-0">
                <img
                  src="https://pub-735dbd7583d74ad5949115d6fdf77023.r2.dev/Banners/Circle%20Banner/ChatGPT%20Image%20Aug%2027%2C%202026%2C%2009_39_15%20AM.png"
                  alt="Digital Solutions"
                  className="w-full h-full object-cover scale-100 group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#05080c] via-[#05080c]/60 to-transparent" />
              </div>

              <div className="relative z-10 flex justify-between items-start">
                <div className="p-3 rounded-xl bg-white/5 border border-white/10 text-[#0093cb] group-hover:scale-110 group-hover:bg-[#0093cb]/10 group-hover:text-white transition-all backdrop-blur-md">
                  <QrCode className="w-5 h-5" />
                </div>
                <span className="text-[9px] font-bold tracking-widest text-white/40 uppercase bg-white/5 px-2 py-0.5 rounded">Smart</span>
              </div>

              <div className="relative z-10 mt-auto bg-black/50 p-5 rounded-xl border border-white/5 backdrop-blur-sm">
                <h4 className="text-base font-black uppercase tracking-wide group-hover:text-[#0093cb] transition-colors">Digital Solutions</h4>
                <p className="text-xs text-white/70 mt-1 leading-relaxed">
                  DigiPRO, custom health calculator utilities, and dynamic interactive QR code items.
                </p>
              </div>
            </Link>

            {/* Right Card: Patient Education (35% total width) */}
            <Link 
              href="/categories/all?tab=categories#category-patient-education" 
              className="group flex-1 flex flex-col justify-between p-8 hover:bg-[#00a65d]/5 transition-all duration-300 relative overflow-hidden min-h-[300px] lg:min-h-0"
            >
              <div className="absolute inset-0 z-0">
                <img
                  src="https://pub-735dbd7583d74ad5949115d6fdf77023.r2.dev/Timeline/Koru%202025.png"
                  alt="Patient Education"
                  className="w-full h-full object-cover scale-100 group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#05080c] via-[#05080c]/60 to-transparent" />
              </div>

              <div className="relative z-10 flex justify-between items-start">
                <div className="p-3 rounded-xl bg-white/5 border border-white/10 text-[#00a65d] group-hover:scale-110 group-hover:bg-[#00a65d]/10 group-hover:text-white transition-all backdrop-blur-md">
                  <BookOpen className="w-5 h-5" />
                </div>
                <span className="text-[9px] font-bold tracking-widest text-white/40 uppercase bg-white/5 px-2 py-0.5 rounded">Clinical</span>
              </div>

              <div className="relative z-10 mt-auto bg-black/50 p-5 rounded-xl border border-white/5 backdrop-blur-sm">
                <h4 className="text-base font-black uppercase tracking-wide group-hover:text-[#00a65d] transition-colors">Patient Education</h4>
                <p className="text-xs text-white/70 mt-1 leading-relaxed">
                  Structured clinical models, therapy diagrams, and write-and-wipe charts.
                </p>
              </div>
            </Link>
          </div>

        </div>

        {/* ROW 2: [Left - Medipride (70%)] [Right - KORU (30%)] */}
        <div className="flex flex-col lg:flex-row h-auto lg:h-[50%]">
          
          {/* 3. Medipride Communications (Row 2 Left - 70% width) */}
          <Link
            href="/medipride"
            className="w-full lg:w-[70%] p-8 lg:p-12 flex flex-col justify-between min-h-[350px] lg:min-h-0 relative overflow-hidden group border-b lg:border-b-0 lg:border-r border-white/10 bg-[#071711] hover:bg-[#092218] transition-colors duration-500"
          >
            <div className="absolute inset-0 z-0">
              <img
                src="https://pub-735dbd7583d74ad5949115d6fdf77023.r2.dev/Banners/Circle%20Banner/ChatGPT%20Image%20Aug%2027%2C%202026%2C%2009_29_20%20AM.png"
                alt="Scientific Inputs"
                className="w-full h-full object-cover opacity-65 group-hover:opacity-85 transition-opacity duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#05080c] via-[#05080c]/50 to-transparent" />
            </div>

            <div className="flex justify-between items-start z-10">
              <div className="space-y-1">
                <span className="text-[10px] font-black uppercase tracking-[0.15em] text-[#00a65d] bg-[#00a65d]/10 px-3.5 py-1.5 rounded-full border border-[#00a65d]/20 backdrop-blur-md">
                  Therapy Brand
                </span>
                <span className="block text-[10px] text-white/50 tracking-wider">Category 02</span>
              </div>
              <div className="w-12 h-12 rounded-full bg-white/5 border border-white/15 text-white flex items-center justify-center hover:bg-[#00a65d] hover:border-[#00a65d] hover:scale-105 transition-all backdrop-blur-md shadow-md">
                <Heart className="w-5 h-5" />
              </div>
            </div>

            <div className="z-10 max-w-2xl mt-12 lg:mt-auto">
              <h3 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight text-white leading-none mb-4 group-hover:text-[#00a65d] transition-colors">
                Medipride Communications
              </h3>
              <div className="h-1 w-20 bg-[#00a65d] rounded-full mb-4 group-hover:w-32 transition-all duration-500" />
              <p className="text-sm text-white/85 leading-relaxed max-w-xl">
                Scientific write-and-wipe aids, visual therapy panels, patient-centric consultation toolkits, and interactive visual clinical boards.
              </p>
            </div>
          </Link>

          {/* 4. KORU (Row 2 Right - 30% width) */}
          <motion.div
            variants={itemVariants}
            className="w-full lg:w-[30%] flex flex-col justify-between p-8 relative overflow-hidden group min-h-[350px] lg:min-h-0 bg-slate-950"
          >
            {/* Background Image & Overlay */}
            <div className="absolute inset-0 z-0">
              <img
                src="https://pub-735dbd7583d74ad5949115d6fdf77023.r2.dev/Banners/Circle%20Banner/ChatGPT%20Image%20Aug%2027%2C%202026%2C%2009_50_19%20AM.png"
                alt="Koru Commitment"
                className="absolute inset-0 w-full h-full object-cover scale-100 group-hover:scale-103 transition-transform duration-1000 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#05080c] via-[#05080c]/60 to-transparent z-10 pointer-events-none" />
              <div className="absolute inset-0 bg-gradient-to-l from-[#00a65d]/5 to-transparent mix-blend-overlay" />
            </div>

            {/* Top row */}
            <div className="flex justify-between items-center z-20">
              <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#00a65d] bg-[#00a65d]/10 px-3 py-1 rounded-full border border-[#00a65d]/20 backdrop-blur-md flex items-center gap-1.5 shadow-sm">
                <ShieldCheck className="w-3.5 h-3.5" /> Sustainable
              </span>
              <Link href="/koru" className="w-10 h-10 rounded-full bg-[#00a65d] text-white flex items-center justify-center shadow-lg transition-transform hover:scale-110">
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Bottom Content */}
            <div className="relative z-20 bg-black/45 p-5 rounded-2xl border border-white/5 backdrop-blur-sm mt-auto">
              <span className="text-[9px] font-bold tracking-[0.2em] text-[#00a65d] uppercase mb-1 block">Green Commitment</span>
              <h1 className="text-2xl font-black tracking-tight text-white leading-none uppercase mb-2">
                KORU
              </h1>
              <p className="text-[11px] text-white/80 leading-relaxed mb-3">
                Small steps today, sustainable impact tomorrow. Responsible sourcing and eco-centric manufacturing pipelines.
              </p>
              <div className="text-[9px] text-white/40 uppercase font-black">
                Param Corporation
              </div>
            </div>
          </motion.div>

        </div>
      </motion.div>
    </section>
  );
}
