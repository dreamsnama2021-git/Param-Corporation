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
      tag: "Upcoming",
      title: "Coming Soon",
      desc: "Exciting new medical innovations & upcoming product launches.",
      link: "#",
      bgClass: "from-[#1f1b07] via-[#2d270c] to-[#141105]",
      accentColor: "#F5A623",
      image: "https://pub-735dbd7583d74ad5949115d6fdf77023.r2.dev/Banners/Circle%20Banner/ChatGPT%20Image%20Aug%2027%2C%202026%2C%2009_39_15%20AM.png",
      tabName: "Coming Soon"
    },
    {
      id: 5,
      badge: "Category 06",
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
    <section className="bg-[#fafcff] py-4 sm:py-6 md:py-8 lg:py-10 px-2 sm:px-6 lg:px-8 overflow-hidden flex items-center justify-center border-b border-[#0093cb]/10 min-h-[600px] lg:min-h-[750px] xl:min-h-[820px]">
      <div className="w-full max-w-[1800px] h-full flex flex-col justify-center min-h-[580px] lg:min-h-[720px] xl:min-h-[780px]">
        
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
                className="snap-center shrink-0 w-[84vw] max-w-[320px] h-[370px] rounded-3xl relative overflow-hidden shadow-xl flex flex-col justify-between p-5"
              >
                {/* Card Background Image */}
                <div
                  className="absolute inset-0 z-0 bg-cover bg-center pointer-events-none scale-105"
                  style={{ backgroundImage: `url("${card.image}")` }}
                />

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
                <div className="relative z-10 space-y-3 bg-black/65 backdrop-blur-md p-3.5 rounded-2xl border border-white/20 shadow-lg">
                  <div>
                    <h3 className="text-xl font-black uppercase text-white tracking-tight leading-tight mb-1.5">
                      {card.title}
                    </h3>
                    <p className="text-xs text-white/90 leading-relaxed font-medium line-clamp-2">
                      {card.desc}
                    </p>
                  </div>

                  <Link
                    href={card.link}
                    className="w-full py-2.5 px-4 rounded-xl bg-white/20 hover:bg-white/30 backdrop-blur-md border border-white/30 text-white font-bold text-xs flex items-center justify-between transition-all active:scale-98 shadow-lg"
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
                className="rounded-2xl lg:rounded-3xl p-5 md:p-6 lg:p-5 flex flex-col justify-between flex-1 relative overflow-hidden group shadow-xl text-[#002d40] cursor-pointer h-full min-h-0"
              >
                {/* Background Image */}
                <div
                  className="absolute inset-0 z-0 transition-all duration-700 group-hover:scale-105 pointer-events-none"
                  style={{ 
                    backgroundImage: `url("https://pub-735dbd7583d74ad5949115d6fdf77023.r2.dev/Banners/Circle%20Banner/ChatGPT%20Image%20Aug%2027%2C%202026%2C%2010_36_24%20AM.png")`,
                    backgroundSize: '100% 100%',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat'
                  }}
                />

                <div className="z-10 bg-[#e6f4fa]/10 backdrop-blur-sm p-4 sm:p-4.5 rounded-2xl border border-[#0093cb]/20 shadow-md">
                  <div className="flex justify-between items-start mb-2.5">
                    <span className="text-[11px] md:text-xs font-extrabold uppercase tracking-widest text-[#0093cb] bg-[#0093cb]/15 px-3 py-1 rounded-full border border-[#0093cb]/20">
                      Category 01
                    </span>
                    <span className="text-[11px] font-bold text-[#002d40]/60">EVERGREEN RANGE</span>
                  </div>
                  <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-2xl xl:text-3xl font-black uppercase tracking-tight leading-tight mb-2 text-[#002d40]">
                    Desktop Brand Reminders
                  </h3>
                  <p className="text-xs md:text-sm lg:text-xs font-semibold leading-relaxed text-[#002d40]/85 max-w-sm line-clamp-3">
                    Paperweights, tabletops, promotional merchandise, 3D printed & fibre resin ranges, plants, as per days.
                  </p>
                </div>

                <div className="w-fit text-left text-[10px] font-extrabold tracking-wider uppercase text-[#002d40]/80 bg-[#e6f4fa]/90 backdrop-blur-md px-3 py-1.5 rounded-xl border border-[#0093cb]/20 shadow-sm z-10 mt-2">
                  Param Corporation
                </div>
              </motion.div>
            </Link>

            {/* Card 2: Medipride Communications / Scientific Inputs */}
            <Link href="/medipride" className="flex-1 flex flex-col min-h-0">
              <motion.div
                variants={itemVariants}
                whileHover={{ y: -4 }}
                className="rounded-2xl lg:rounded-3xl p-5 md:p-6 lg:p-5 flex flex-col justify-between flex-1 relative overflow-hidden group shadow-xl text-white cursor-pointer h-full min-h-0"
              >
                {/* Background Image */}
                <div
                  className="absolute inset-0 z-0 bg-cover bg-center transition-all duration-700 group-hover:scale-105 pointer-events-none"
                  style={{ backgroundImage: `url("https://pub-735dbd7583d74ad5949115d6fdf77023.r2.dev/Banners/Circle%20Banner/ChatGPT%20Image%20Aug%2027%2C%202026%2C%2009_29_20%20AM.png")` }}
                />

                <div className="flex justify-between items-start z-10 bg-[#004d2b]/50 backdrop-blur-sm p-3.5 sm:p-4 rounded-2xl border border-white/20 shadow-md">
                  <div>
                    <span className="text-[11px] font-extrabold uppercase tracking-widest text-emerald-300 block mb-1">
                      Category 02
                    </span>
                    <h3 className="text-base sm:text-lg md:text-2xl lg:text-xl font-bold uppercase tracking-tight leading-tight text-white">
                      Medipride Communications
                    </h3>
                  </div>
                  <div className="w-9 h-9 md:w-10 md:h-10 rounded-full bg-white text-[#00a65d] flex items-center justify-center shadow-md hover:scale-105 transition-all shrink-0">
                    <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5 stroke-[2.5]" />
                  </div>
                </div>

                <div className="flex justify-between items-end z-10 mt-2 bg-[#004d2b]/45 backdrop-blur-sm p-3 rounded-xl border border-white/20 shadow-md">
                  <div>
                    <p className="text-xs md:text-sm lg:text-xs text-white/95 max-w-[340px] leading-snug line-clamp-2 font-medium">
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
                className="rounded-2xl lg:rounded-3xl p-5 md:p-6 lg:p-5 flex flex-col justify-between flex-1 relative overflow-hidden group shadow-xl text-white cursor-pointer h-full min-h-0"
              >
                {/* Background Image */}
                <div
                  className="absolute inset-0 z-0 bg-cover bg-center transition-all duration-700 group-hover:scale-105 pointer-events-none"
                  style={{ backgroundImage: `url("https://pub-735dbd7583d74ad5949115d6fdf77023.r2.dev/Banners/Circle%20Banner/ChatGPT%20Image%20Aug%2027%2C%202026%2C%2009_39_15%20AM.png")` }}
                />

                <div className="z-10 bg-[#004b6e]/45 backdrop-blur-sm p-3.5 sm:p-4 rounded-2xl border border-white/20 shadow-md">
                  <span className="text-[11px] font-extrabold uppercase tracking-widest text-cyan-300 block mb-1">
                    Category 03
                  </span>
                  <h3 className="text-sm sm:text-base md:text-xl lg:text-lg font-bold uppercase tracking-tight mb-1.5 text-white">
                    Digital Engagement
                  </h3>
                  <p className="text-xs md:text-sm lg:text-xs leading-relaxed text-white/95 line-clamp-2 font-medium">
                    Solutions: DigiPRO, QR code based products, and HRA calculators.
                  </p>
                </div>

                <div className="z-10 text-[10px] text-white/90 font-extrabold tracking-wide mt-2 bg-[#004b6e]/85 backdrop-blur-md px-3 py-1.5 rounded-xl border border-white/20 shadow-sm w-fit">
                  DigiPRO &bull; QR Products
                </div>
              </motion.div>
            </Link>

            {/* Card 4: Hyperpersonalized Products */}
            <Link href="/personalized" className="flex-1 flex flex-col min-h-0">
              <motion.div
                variants={itemVariants}
                whileHover={{ y: -4 }}
                className="rounded-2xl lg:rounded-3xl p-5 md:p-6 lg:p-5 flex flex-col justify-between flex-1 relative overflow-hidden group shadow-xl text-[#004d2b] cursor-pointer h-full min-h-0"
              >
                {/* Background Image */}
                <div
                  className="absolute inset-0 z-0 bg-cover bg-center transition-all duration-700 group-hover:scale-105 pointer-events-none"
                  style={{ backgroundImage: `url("https://pub-735dbd7583d74ad5949115d6fdf77023.r2.dev/Banners/Circle%20Banner/ChatGPT%20Image%20Aug%2027%2C%202026%2C%2009_50_19%20AM.png")` }}
                />

                <div className="z-10 bg-[#f0f9eb]/50 backdrop-blur-sm p-3.5 sm:p-4 rounded-2xl border border-[#00a65d]/25 shadow-md">
                  <span className="text-[11px] font-extrabold uppercase tracking-widest text-[#00a65d] block mb-1">
                    Category 04
                  </span>
                  <h3 className="text-sm sm:text-base md:text-xl lg:text-lg font-bold uppercase tracking-tight mb-1.5 text-[#004d2b]">
                    Hyperpersonalized
                  </h3>
                  <p className="text-xs md:text-sm lg:text-xs leading-snug text-[#004d2b]/90 line-clamp-2 font-semibold">
                    Products: Creative and unique custom QR code & name based products.
                  </p>
                </div>

                <div className="z-10 text-center text-[10px] font-bold uppercase tracking-wider text-[#004d2b] bg-[#f0f9eb]/90 backdrop-blur-md px-3 py-1.5 rounded-xl border border-[#00a65d]/25 shadow-sm w-fit self-center mt-2">
                  Creative ✦ Name Products
                </div>
              </motion.div>
            </Link>
          </div>

          {/* COLUMN 3: Category 5 (Coming Soon) & Category 6 (Visual Aids & Detailers) */}
          <div className="md:col-span-4 flex flex-col gap-4 lg:gap-4 h-full min-h-0">
            {/* Card 5: Coming Soon */}
            <Link href="#" className="flex-1 flex flex-col min-h-0">
              <motion.div
                variants={itemVariants}
                whileHover={{ y: -4 }}
                className="rounded-2xl lg:rounded-3xl p-5 md:p-6 lg:p-5 flex flex-col justify-between flex-1 relative overflow-hidden group shadow-xl text-white cursor-pointer h-full min-h-0"
              >
                {/* Background Image */}
                <div
                  className="absolute inset-0 z-0 bg-cover bg-center transition-all duration-700 group-hover:scale-105 pointer-events-none"
                  style={{ backgroundImage: `url("https://pub-735dbd7583d74ad5949115d6fdf77023.r2.dev/Banners/Circle%20Banner/ChatGPT%20Image%20Aug%2027%2C%202026%2C%2009_39_15%20AM.png")` }}
                />

                <div className="z-10 bg-black/50 backdrop-blur-sm p-3.5 sm:p-4 rounded-2xl border border-white/20 shadow-md">
                  <span className="text-[11px] font-extrabold uppercase tracking-widest text-amber-400 block mb-1">
                    Category 05
                  </span>
                  <h3 className="text-sm sm:text-base md:text-xl lg:text-lg font-bold uppercase tracking-tight mb-1.5 text-white">
                    Coming Soon
                  </h3>
                  <p className="text-xs md:text-sm lg:text-xs leading-relaxed text-white/95 line-clamp-2 font-medium">
                    Exciting new medical innovations & upcoming product launches.
                  </p>
                </div>

                <div className="z-10 text-[10px] text-white/90 font-extrabold tracking-wide mt-2 bg-black/50 backdrop-blur-sm px-3 py-1.5 rounded-xl border border-white/20 shadow-sm w-fit">
                  Upcoming Products ✦ Stay Tuned
                </div>
              </motion.div>
            </Link>

            {/* Card 6: Visual Aids & Detailers (Koru) */}
            <Link href="/koru" className="flex-1 flex flex-col min-h-0">
              <motion.div
                variants={itemVariants}
                whileHover={{ y: -4 }}
                className="rounded-2xl lg:rounded-3xl p-5 md:p-6 lg:p-5 flex flex-col justify-between flex-1 relative overflow-hidden group shadow-xl text-[#f3eae3] cursor-pointer h-full min-h-0"
              >
                {/* Product Background Image */}
                <div
                  className="absolute inset-0 z-0 bg-cover bg-center transition-all duration-700 group-hover:scale-105 pointer-events-none"
                  style={{ backgroundImage: `url("https://pub-735dbd7583d74ad5949115d6fdf77023.r2.dev/Banners/Circle%20Banner/ChatGPT%20Image%20Aug%2029%2C%202026%2C%2010_06_11%20AM.png")` }}
                />

                <div className="z-10 bg-black/50 backdrop-blur-sm p-3.5 sm:p-4 rounded-2xl border border-white/20 shadow-md">
                  <span className="text-[11px] font-extrabold uppercase tracking-widest text-[#f3eae3] bg-[#0093cb] px-3.5 py-0.5 rounded-full border border-white/10 shadow-sm inline-block mb-1">
                    Category 06
                  </span>
                  <h3 className="text-sm sm:text-base md:text-xl lg:text-lg font-bold uppercase tracking-tight mb-1.5 text-[#f3eae3]">
                    Visual Aids & Detailers
                  </h3>
                  <p className="text-xs md:text-sm lg:text-xs leading-relaxed text-[#f3eae3]/95 line-clamp-2 font-medium">
                    Highly structured visual aids, scientific detailers, and consultative tools.
                  </p>
                </div>

                <div className="z-10 flex items-center justify-between mt-2 bg-black/50 backdrop-blur-sm px-3.5 py-1.5 rounded-xl border border-white/20 shadow-sm">
                  <span className="text-[10px] text-white/90 font-extrabold tracking-wide">
                    Explore Collection ✦ Detailers
                  </span>
                  <div className="w-6 h-6 rounded-full bg-white/20 text-white flex items-center justify-center">
                    <ArrowUpRight className="w-3.5 h-3.5 stroke-[2.5]" />
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
