"use client";

import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Search, Maximize2, Sparkles } from "lucide-react";
import Link from "next/link";

export default function ProductShowcaseGrid() {
  const [activeTab, setActiveTab] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100, damping: 15 } as any },
  };

  const mobileCards = [
    {
      id: 0,
      badge: "Category 01",
      tag: "Evergreen Range",
      title: "Desktop Brand Reminders",
      desc: "Paperweights, tabletops, promotional merchandise, 3D printed & fibre resin ranges.",
      link: "/categories/all?tab=categories",
      bgClass: "from-[#08222f] via-[#092a3b] to-[#0c374d]",
      accentColor: "#0093cb",
      image: "https://pub-735dbd7583d74ad5949115d6fdf77023.r2.dev/Final%20Edit%20Images/ChatGPT%20Image%20May%2028%2C%202026%2C%2002_02_16%20PM.png",
      tabName: "Desktop"
    },
    {
      id: 1,
      badge: "Category 02",
      tag: "Therapy Brand",
      title: "Medipride Communications",
      desc: "Scientific write-and-wipe aids, visual therapy panels, and patient consultation toolkits.",
      link: "/medipride",
      bgClass: "from-[#071711] via-[#092218] to-[#0d3324]",
      accentColor: "#00a65d",
      image: "https://pub-735dbd7583d74ad5949115d6fdf77023.r2.dev/Final%20Edit%20Images/ChatGPT%20Image%20May%2028%2C%202026%2C%2001_17_03%20PM.png",
      tabName: "Medipride"
    },
    {
      id: 2,
      badge: "Category 03",
      tag: "Smart Solutions",
      title: "Digital Engagement",
      desc: "DigiPRO, custom health calculator utilities, and dynamic interactive QR code items.",
      link: "/digital-gifts",
      bgClass: "from-[#031d2e] via-[#062c44] to-[#083c5e]",
      accentColor: "#0093cb",
      image: "https://pub-735dbd7583d74ad5949115d6fdf77023.r2.dev/Digital%20Inputs/10.png",
      tabName: "Digital"
    },
    {
      id: 3,
      badge: "Category 04",
      tag: "Creative Custom",
      title: "Hyperpersonalized",
      desc: "Creative and unique custom QR code & name based products tailored for HCPs.",
      link: "/personalized",
      bgClass: "from-[#0f2419] via-[#143323] to-[#1a442e]",
      accentColor: "#00a65d",
      image: "https://pub-735dbd7583d74ad5949115d6fdf77023.r2.dev/Final%20Edit%20Images/22.png",
      tabName: "Personalized"
    },
    {
      id: 4,
      badge: "Category 05",
      tag: "Clinical Aids",
      title: "Visual Aids & Detailers",
      desc: "Highly structured visual aids, scientific detailers, and consultative tools.",
      link: "/koru",
      bgClass: "from-[#171412] via-[#241e1a] to-[#120f0d]",
      accentColor: "#0093cb",
      image: "https://pub-735dbd7583d74ad5949115d6fdf77023.r2.dev/Final%20Edit%20Images/ChatGPT%20Image%20May%2028%2C%202026%2C%2002_04_56%20PM.png",
      tabName: "Detailers"
    }
  ];

  const scrollToCard = (index: number) => {
    setActiveTab(index);
    if (carouselRef.current) {
      const cardWidth = carouselRef.current.scrollWidth / mobileCards.length;
      carouselRef.current.scrollTo({
        left: cardWidth * index,
        behavior: "smooth"
      });
    }
  };

  const handleScroll = () => {
    if (carouselRef.current) {
      const scrollLeft = carouselRef.current.scrollLeft;
      const cardWidth = carouselRef.current.offsetWidth * 0.85;
      const index = Math.round(scrollLeft / cardWidth);
      if (index >= 0 && index < mobileCards.length) {
        setActiveTab(index);
      }
    }
  };

  return (
    <section className="bg-[#fafcff] py-4 md:py-8 lg:py-4 px-2 sm:px-6 lg:px-8 overflow-hidden flex items-center justify-center border-b border-[#0093cb]/10 md:min-h-[580px] lg:h-[calc(100vh-80px)] lg:max-h-[calc(100vh-80px)]">
      <div className="w-full max-w-[1800px] h-full flex flex-col justify-center">
        
        {/* MOBILE CREATIVE HORIZONTAL PEEK CAROUSEL VIEW (< md) */}
        <div className="block md:hidden w-full py-2">
          {/* Mobile Section Sub-Header */}
          <div className="flex items-center justify-between mb-2.5 px-2">
            <div className="flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-[#0093cb]" />
              <span className="text-[10px] font-black uppercase tracking-widest text-slate-800">
                Param Showcase
              </span>
            </div>
            <span className="text-[9px] font-bold uppercase tracking-wider text-slate-400">
              Swipe Categories →
            </span>
          </div>

          {/* Scrollable Pill Tabs Navigation */}
          <div className="flex gap-2 overflow-x-auto scrollbar-hide pb-2.5 pt-0.5 px-2 snap-x">
            {mobileCards.map((card, idx) => (
              <button
                key={card.id}
                onClick={() => scrollToCard(idx)}
                className={`snap-start shrink-0 px-3.5 py-1.5 rounded-full text-[10px] font-extrabold tracking-wider uppercase transition-all duration-300 border ${
                  activeTab === idx
                    ? "bg-[#0093cb] text-white border-[#0093cb] shadow-md shadow-[#0093cb]/20 scale-105"
                    : "bg-white text-slate-600 border-slate-200 hover:border-slate-300"
                }`}
              >
                {card.tabName}
              </button>
            ))}
          </div>

          {/* Snapping Horizontal Peek Cards Container */}
          <div
            ref={carouselRef}
            onScroll={handleScroll}
            className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide gap-3.5 pt-1 pb-3 px-2"
          >
            {mobileCards.map((card) => (
              <div
                key={card.id}
                className="snap-center shrink-0 w-[84vw] max-w-[320px] h-[370px] rounded-3xl relative overflow-hidden shadow-xl border border-white/10 flex flex-col justify-between p-5"
              >
                {/* Card Background Image with Gradient */}
                <div className="absolute inset-0 z-0">
                  <img
                    src={card.image}
                    alt={card.title}
                    className="w-full h-full object-cover opacity-45 scale-105"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-b ${card.bgClass} opacity-90 mix-blend-multiply`} />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
                </div>

                {/* Top Badges */}
                <div className="relative z-10 flex items-center justify-between">
                  <span className="text-[10px] font-extrabold uppercase tracking-widest text-white/90 bg-white/15 px-3 py-1 rounded-full border border-white/20 backdrop-blur-md">
                    {card.badge}
                  </span>
                  <span className="text-[9px] font-extrabold uppercase tracking-wider text-white/70 bg-black/30 px-2.5 py-1 rounded-full backdrop-blur-md">
                    {card.tag}
                  </span>
                </div>

                {/* Bottom Content & CTA */}
                <div className="relative z-10 space-y-3">
                  <div>
                    <h3 className="text-xl font-black uppercase text-white tracking-tight leading-tight mb-1.5">
                      {card.title}
                    </h3>
                    <p className="text-xs text-white/80 leading-relaxed font-medium line-clamp-2">
                      {card.desc}
                    </p>
                  </div>

                  <Link
                    href={card.link}
                    className="w-full py-2.5 px-4 rounded-2xl bg-white/15 hover:bg-white/25 backdrop-blur-md border border-white/25 text-white font-bold text-xs flex items-center justify-between transition-all active:scale-98 shadow-lg"
                  >
                    <span>Explore Collection</span>
                    <div className="w-6 h-6 rounded-full bg-white text-slate-900 flex items-center justify-center shadow-md">
                      <ArrowUpRight className="w-3.5 h-3.5 stroke-[2.5]" />
                    </div>
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Carousel Dots Indicator */}
          <div className="flex justify-center items-center gap-1.5 mt-1.5">
            {mobileCards.map((_, idx) => (
              <button
                key={idx}
                onClick={() => scrollToCard(idx)}
                className={`transition-all duration-300 rounded-full ${
                  activeTab === idx
                    ? "w-6 h-2 bg-[#0093cb]"
                    : "w-2 h-2 bg-slate-300 hover:bg-slate-400"
                }`}
              />
            ))}
          </div>
        </div>

        {/* TABLET & DESKTOP BENTO GRID VIEW (>= md) */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="hidden md:grid grid-cols-1 md:grid-cols-12 gap-4 lg:gap-4 h-full items-stretch"
        >
          {/* COLUMN 1: Category 1 (Desktop Brand Reminders) & Category 2 (Medipride Communications) */}
          <div className="md:col-span-5 flex flex-col gap-4 lg:gap-4 h-full min-h-0">
            {/* Card 1: Desktop Brand Reminders */}
            <Link href="/categories/all?tab=categories" className="flex-1 flex flex-col min-h-0">
              <motion.div
                variants={itemVariants}
                whileHover={{ y: -4 }}
                className="rounded-2xl lg:rounded-3xl bg-[#e6f4fa] p-5 md:p-6 lg:p-5 flex flex-col justify-between flex-1 relative overflow-hidden group shadow-[0_15px_40px_rgba(0,147,203,0.05)] border border-[#0093cb]/15 text-[#002d40] cursor-pointer h-full min-h-0"
              >
                {/* Background Image */}
                <div className="absolute inset-0">
                  <img
                    src="https://pub-735dbd7583d74ad5949115d6fdf77023.r2.dev/Banners/Circle%20Banner/ChatGPT%20Image%20Aug%2027%2C%202026%2C%2010_36_24%20AM.png"
                    alt="Desktop Brand Reminders"
                    className="w-full h-full object-cover opacity-25 group-hover:opacity-35 transition-all duration-1000 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#e6f4fa] via-[#e6f4fa]/20 to-transparent pointer-events-none" />
                </div>

                <div className="z-10">
                  <div className="flex justify-between items-start mb-2.5">
                    <span className="text-[11px] md:text-xs font-extrabold uppercase tracking-widest text-[#0093cb] bg-[#0093cb]/10 px-3 py-1 rounded-full">
                      Category 01
                    </span>
                    <span className="text-[11px] font-bold text-[#002d40]/40">EVERGREEN RANGE</span>
                  </div>
                  <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-2xl xl:text-3xl font-black uppercase tracking-tight leading-tight mb-2">
                    Desktop Brand Reminders
                  </h3>
                  <p className="text-xs md:text-sm lg:text-xs font-medium leading-relaxed opacity-85 max-w-sm line-clamp-3">
                    Paperweights, tabletops, promotional merchandise, 3D printed & fibre resin ranges, plants, as per days.
                  </p>
                </div>

                <div className="w-full text-left text-[10px] font-bold tracking-wider uppercase opacity-40 z-10 mt-2">
                  Param Corporation
                </div>
              </motion.div>
            </Link>

            {/* Card 2: Medipride Communications / Scientific Inputs */}
            <Link href="/medipride" className="flex-1 flex flex-col min-h-0">
              <motion.div
                variants={itemVariants}
                whileHover={{ y: -4 }}
                className="rounded-2xl lg:rounded-3xl bg-[#00a65d] p-5 md:p-6 lg:p-5 flex flex-col justify-between flex-1 relative overflow-hidden group shadow-[0_15px_40px_rgba(0,166,93,0.1)] text-white cursor-pointer h-full min-h-0"
              >
                {/* Background Image */}
                <div className="absolute inset-0">
                  <img
                    src="https://pub-735dbd7583d74ad5949115d6fdf77023.r2.dev/Banners/Circle%20Banner/ChatGPT%20Image%20Aug%2027%2C%202026%2C%2009_29_20%20AM.png"
                    alt="Scientific Inputs"
                    className="w-full h-full object-cover opacity-25 group-hover:opacity-35 transition-all duration-1000 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#00a65d] via-[#00a65d]/20 to-transparent pointer-events-none" />
                </div>

                <div className="flex justify-between items-start z-10">
                  <div>
                    <span className="text-[11px] font-extrabold uppercase tracking-widest text-white/80 block mb-1">
                      Category 02
                    </span>
                    <h3 className="text-base sm:text-lg md:text-2xl lg:text-xl font-bold uppercase tracking-tight leading-tight">
                      Medipride Communications
                    </h3>
                  </div>
                  <div className="w-9 h-9 md:w-10 md:h-10 rounded-full bg-white text-[#00a65d] flex items-center justify-center shadow-md hover:scale-105 transition-all shrink-0">
                    <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5 stroke-[2.5]" />
                  </div>
                </div>

                <div className="flex justify-between items-end z-10 mt-2">
                  <div>
                    <p className="text-xs md:text-sm lg:text-xs text-white/90 max-w-[340px] leading-snug line-clamp-2">
                      Scientific Inputs: As per therapy, as per days, write & wipe utility, and flipcharts.
                    </p>
                  </div>
                </div>
              </motion.div>
            </Link>
          </div>

          {/* COLUMN 2: Category 3 (Digital Solutions) & Category 4 (Hyperpersonalized) */}
          <div className="md:col-span-3 flex flex-col gap-4 lg:gap-4 h-full min-h-0">
            {/* Card 3: Digital Engagement Solutions */}
            <Link href="/digital-gifts" className="flex-1 flex flex-col min-h-0">
              <motion.div
                variants={itemVariants}
                whileHover={{ y: -4 }}
                className="rounded-2xl lg:rounded-3xl bg-[#0093cb] p-5 md:p-6 lg:p-5 flex flex-col justify-between flex-1 relative overflow-hidden group shadow-[0_15px_40px_rgba(0,147,203,0.1)] text-white cursor-pointer h-full min-h-0"
              >
                {/* Background Image */}
                <div className="absolute inset-0">
                  <img
                    src="https://pub-735dbd7583d74ad5949115d6fdf77023.r2.dev/Banners/Circle%20Banner/ChatGPT%20Image%20Aug%2027%2C%202026%2C%2009_39_15%20AM.png"
                    alt="Digital Solutions"
                    className="w-full h-full object-cover opacity-25 group-hover:opacity-35 transition-all duration-1000 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0093cb] via-[#0093cb]/20 to-transparent pointer-events-none" />
                </div>

                <div className="z-10">
                  <span className="text-[11px] font-extrabold uppercase tracking-widest text-white/80 block mb-1">
                    Category 03
                  </span>
                  <h3 className="text-sm sm:text-base md:text-xl lg:text-lg font-bold uppercase tracking-tight mb-1.5">
                    Digital Engagement
                  </h3>
                  <p className="text-xs md:text-sm lg:text-xs leading-relaxed opacity-90 line-clamp-2">
                    Solutions: DigiPRO, QR code based products, and HRA calculators.
                  </p>
                </div>

                <div className="z-10 text-[10px] opacity-80 font-semibold mt-2">
                  DigiPRO &bull; QR Products
                </div>
              </motion.div>
            </Link>

            {/* Card 4: Hyperpersonalized Products */}
            <Link href="/personalized" className="flex-1 flex flex-col min-h-0">
              <motion.div
                variants={itemVariants}
                whileHover={{ y: -4 }}
                className="rounded-2xl lg:rounded-3xl bg-[#f0f9eb] p-5 md:p-6 lg:p-5 flex flex-col justify-between flex-1 relative overflow-hidden group shadow-[0_15px_40px_rgba(0,166,93,0.05)] border border-[#00a65d]/10 text-[#004d2b] cursor-pointer h-full min-h-0"
              >
                {/* Background Image */}
                <div className="absolute inset-0">
                  <img
                    src="https://pub-735dbd7583d74ad5949115d6fdf77023.r2.dev/Banners/Circle%20Banner/ChatGPT%20Image%20Aug%2027%2C%202026%2C%2009_50_19%20AM.png"
                    alt="Hyperpersonalized"
                    className="w-full h-full object-cover opacity-25 group-hover:opacity-35 transition-all duration-1000 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#f0f9eb] via-[#f0f9eb]/20 to-transparent pointer-events-none" />
                </div>

                <div className="z-10">
                  <span className="text-[11px] font-extrabold uppercase tracking-widest text-[#00a65d] block mb-1">
                    Category 04
                  </span>
                  <h3 className="text-sm sm:text-base md:text-xl lg:text-lg font-bold uppercase tracking-tight mb-1.5">
                    Hyperpersonalized
                  </h3>
                  <p className="text-xs md:text-sm lg:text-xs leading-snug opacity-75 line-clamp-2">
                    Products: Creative and unique custom QR code & name based products.
                  </p>
                </div>

                <div className="z-10 text-center text-[10px] font-bold uppercase tracking-wider opacity-55 mt-2">
                  Creative ✦ Name Products
                </div>
              </motion.div>
            </Link>
          </div>

          {/* COLUMN 3: Category 5 (Visual Aids & Detailers) */}
          <div className="md:col-span-4 h-full min-h-0">
            <Link href="/koru" className="h-full flex flex-col min-h-0">
              <motion.div
                variants={itemVariants}
                whileHover={{ y: -4 }}
                className="rounded-2xl lg:rounded-3xl relative overflow-hidden group h-full flex flex-col justify-between p-5 md:p-6 lg:p-5 shadow-xl bg-stone-900 cursor-pointer min-h-0"
              >
                {/* Product Background Image */}
                <div className="absolute inset-0">
                  <img
                    src="https://pub-735dbd7583d74ad5949115d6fdf77023.r2.dev/Banners/Circle%20Banner/ChatGPT%20Image%20Aug%2029%2C%202026%2C%2010_06_11%20AM.png"
                    alt="Visual Aids & Detailers"
                    className="w-full h-full object-cover opacity-65 transition-transform duration-1000 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-black/50" />
                </div>

                <div className="z-10">
                  <span className="text-[11px] font-extrabold uppercase tracking-widest text-[#f3eae3] bg-[#0093cb] px-3.5 py-1 rounded-full border border-white/10 shadow-sm">
                    Category 05
                  </span>
                  <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-2xl font-black uppercase text-[#f3eae3] tracking-tight leading-tight mt-3">
                    Visual Aids & Detailers
                  </h3>
                </div>

                <div className="z-10 flex flex-col gap-3.5 mt-auto">
                  <p className="text-xs md:text-sm lg:text-xs text-[#f3eae3]/90 leading-relaxed max-w-[340px] line-clamp-3">
                    Highly structured visual aids, scientific detailers, and consultative tools.
                  </p>

                  <div className="flex justify-between items-center mt-2">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#f3eae3]/60">
                      Explore collection
                    </span>
                    
                    {/* Floating Action Icons */}
                    <div className="flex gap-2">
                      <div className="w-9 h-9 md:w-10 md:h-10 rounded-full bg-white/10 backdrop-blur-md text-white border border-white/20 flex items-center justify-center hover:bg-[#0093cb] hover:scale-105 transition-all pointer-events-auto cursor-pointer">
                        <Search className="w-4 h-4" />
                      </div>
                      <div className="w-9 h-9 md:w-10 md:h-10 rounded-full bg-white/10 backdrop-blur-md text-white border border-white/20 flex items-center justify-center hover:bg-[#0093cb] hover:scale-105 transition-all pointer-events-auto cursor-pointer">
                        <Maximize2 className="w-4 h-4" />
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
