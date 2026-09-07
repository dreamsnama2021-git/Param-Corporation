"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Monitor,
  FlaskConical,
  BookOpen,
  QrCode,
  Gift,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

export default function WhatWeDoOfferings() {
  const [slideIndex, setSlideIndex] = useState(0);

  const offerings = [
    {
      num: "01",
      icon: Monitor,
      title: "DESKTOP BRAND REMINDERS",
      desc: "Creative and functional desktop products that keep your brand top-of-mind.",
      image: "https://pub-735dbd7583d74ad5949115d6fdf77023.r2.dev/About%20Us%20Page/Our%20Core%20Offerings/DESKTOP%20BRAND%20REMINDERS.png",
      color: "text-[#0093cb]",
      borderColor: "border-[#0093cb]/20",
      numBg: "bg-[#0093cb]",
    },
    {
      num: "02",
      icon: FlaskConical,
      title: "SCIENTIFIC PROMOTIONAL PRODUCTS",
      desc: "Scientifically relevant and innovative products that simplify complex messages.",
      image: "https://pub-735dbd7583d74ad5949115d6fdf77023.r2.dev/About%20Us%20Page/Our%20Core%20Offerings/SCIENTIFIC%20PROMOTIONAL%20PRODUCTS.png",
      color: "text-[#00a8b5]",
      borderColor: "border-[#00a8b5]/20",
      numBg: "bg-[#00a8b5]",
    },
    {
      num: "03",
      icon: BookOpen,
      title: "PATIENT EDUCATION PRODUCTS",
      desc: "Tools that empower patients with knowledge and support better health outcomes.",
      image: "https://pub-735dbd7583d74ad5949115d6fdf77023.r2.dev/About%20Us%20Page/Our%20Core%20Offerings/PATIENT%20EDUCATION%20PRODUCTS.png",
      color: "text-[#00a65d]",
      borderColor: "border-[#00a65d]/20",
      numBg: "bg-[#00a65d]",
    },
    {
      num: "04",
      icon: QrCode,
      title: "DIGITAL ENGAGEMENT PRODUCTS",
      desc: "QR-enabled and digital solutions that connect brands to a smart audience.",
      image: "https://pub-735dbd7583d74ad5949115d6fdf77023.r2.dev/About%20Us%20Page/Our%20Core%20Offerings/DIGITAL%20ENGAGEMENT%20PRODUCTS.png",
      color: "text-[#8ac926]",
      borderColor: "border-[#8ac926]/20",
      numBg: "bg-[#8ac926]",
    },
    {
      num: "05",
      icon: Gift,
      title: "CUSTOMIZED PROMOTIONAL MERCHANDISE",
      desc: "Fully customized merchandise that reflects your brand identity and values.",
      image: "https://pub-735dbd7583d74ad5949115d6fdf77023.r2.dev/About%20Us%20Page/Our%20Core%20Offerings/ChatGPT%20Image%20Aug%2026%2C%202026%2C%2005_07_44%20PM.png",
      color: "text-[#003b46]",
      borderColor: "border-[#003b46]/20",
      numBg: "bg-[#003b46]",
    },
  ];

  const totalPages = Math.ceil(offerings.length / 2); // 3 pages

  // Auto-slide every 4 seconds by 2 (full columns)
  useEffect(() => {
    const timer = setInterval(() => {
      setSlideIndex((prev) => (prev + 2 >= offerings.length ? 0 : prev + 2));
    }, 4000);
    return () => clearInterval(timer);
  }, [offerings.length]);

  const handlePrev = () => {
    setSlideIndex((prev) => (prev - 2 < 0 ? (totalPages - 1) * 2 : prev - 2));
  };

  const handleNext = () => {
    setSlideIndex((prev) => (prev + 2 >= offerings.length ? 0 : prev + 2));
  };

  return (
    <section className="bg-white py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden border-b border-slate-100">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-[0.01] pointer-events-none bg-[radial-gradient(#0093cb_1px,transparent_1px)] [background-size:24px_24px]" />

      <div className="max-w-[1400px] w-full mx-auto relative z-10 space-y-12">
        
        {/* TOP COMPONENT: What We Do Intro Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
          
          {/* Left Column: Heading (Span 5) */}
          <div className="lg:col-span-5 flex flex-col justify-start">
            <div className="mb-2">
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-tight text-slate-800">
                What <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#0093cb] to-[#00a65d]">We Do</span>
              </h2>
              {/* Underline Divider */}
              <div className="h-1 w-24 bg-gradient-to-r from-[#0093cb] to-[#00a65d] mt-3 rounded-full" />
            </div>
          </div>

          {/* Right Column: Subtitle & Body (Span 7) */}
          <div className="lg:col-span-7 flex flex-col justify-start lg:pt-2">
            <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-[#0093cb] mb-3">
              Smart Solutions. Stronger Connections.
            </h3>

            <p className="text-slate-600 text-xs sm:text-sm lg:text-base leading-relaxed">
              We design, develop and deliver innovative promotional solutions that help pharmaceutical and healthcare brands engage better, communicate smarter, and create a lasting impact.
            </p>
          </div>

        </div>

        {/* BOTTOM COMPONENT: Our Core Offerings */}
        <div className="space-y-8">
          
          {/* Header */}
          <div className="text-center">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-800 tracking-tight">
              Our Core Offerings
            </h3>
            <p className="text-slate-500 text-xs sm:text-sm mt-1.5 max-w-2xl mx-auto font-medium">
              Comprehensive solutions across every touchpoint of healthcare marketing and communication.
            </p>
          </div>

          {/* ── DESKTOP VIEW (>= 1280px): ALL 5 CARDS IN GRID ── */}
          <div className="hidden xl:grid grid-cols-5 gap-5 lg:gap-6 items-stretch">
            {offerings.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.num}
                  className="bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-md hover:shadow-xl hover:border-[#0093cb]/30 transition-all duration-300 flex flex-col justify-between cursor-pointer w-full"
                >
                  {/* Top info */}
                  <div className="p-5 flex flex-col items-start space-y-3">
                    <div className="flex items-center justify-between w-full">
                      <span className={`text-white text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center ${item.numBg}`}>
                        {item.num}
                      </span>
                      <div className={`p-2 rounded-lg bg-slate-50 border ${item.borderColor}`}>
                        <Icon className={`w-5 h-5 ${item.color}`} />
                      </div>
                    </div>

                    <h4 className="text-[13px] font-black text-slate-800 tracking-wide uppercase leading-tight">
                      {item.title}
                    </h4>

                    <p className="text-slate-500 text-xs leading-relaxed font-medium line-clamp-2">
                      {item.desc}
                    </p>
                  </div>

                  {/* Product Image Container */}
                  <div className="w-full aspect-square relative overflow-hidden mt-auto">
                    <div
                      className="w-full h-full bg-cover bg-center bg-no-repeat transition-transform duration-500 hover:scale-105"
                      style={{
                        backgroundImage: `url("${item.image}")`,
                      }}
                    />
                  </div>
                </div>
              );
            })}
          </div>

          {/* ── MOBILE & TABLET VIEW (< 1280px): 2 CARDS UPFRONT WITH SLIDING ── */}
          <div className="block xl:hidden space-y-4">
            <div className="grid grid-cols-2 gap-3 sm:gap-4 md:gap-6 max-w-[640px] mx-auto w-full items-stretch">
              {[
                offerings[slideIndex % offerings.length],
                offerings[(slideIndex + 1) % offerings.length],
              ].map((item) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={`${item.num}-${slideIndex}`}
                    initial={{ opacity: 0.3, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                    className="bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between cursor-pointer w-full min-w-0"
                  >
                    {/* Top info */}
                    <div className="p-3 sm:p-4 md:p-5 flex flex-col items-start space-y-1.5 sm:space-y-3">
                      <div className="flex items-center justify-between w-full">
                        <span className={`text-white text-[10px] sm:text-xs font-bold rounded-full w-5 h-5 sm:w-6 sm:h-6 flex items-center justify-center ${item.numBg}`}>
                          {item.num}
                        </span>
                        <div className={`p-1.5 sm:p-2 rounded-lg bg-slate-50 border ${item.borderColor}`}>
                          <Icon className={`w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5 ${item.color}`} />
                        </div>
                      </div>

                      <h4 className="text-[11px] sm:text-[13px] font-black text-slate-800 tracking-wide uppercase leading-tight line-clamp-2">
                        {item.title}
                      </h4>

                      <p className="text-slate-500 text-[10px] sm:text-xs leading-snug sm:leading-relaxed font-medium line-clamp-2">
                        {item.desc}
                      </p>
                    </div>

                    {/* Product Image Container */}
                    <div className="w-full aspect-square relative overflow-hidden mt-auto">
                      <div
                        className="w-full h-full bg-cover bg-center bg-no-repeat transition-transform duration-500 hover:scale-105"
                        style={{
                          backgroundImage: `url("${item.image}")`,
                        }}
                      />
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Auto-Slide Dots Navigation & Controls */}
            <div className="flex flex-col sm:flex-row justify-center items-center gap-3 pt-2">
              <div className="flex items-center gap-3">
                {/* Prev Button */}
                <button
                  onClick={handlePrev}
                  aria-label="Previous offering"
                  className="w-8 h-8 rounded-full border border-slate-200 bg-white hover:bg-slate-50 text-slate-600 flex items-center justify-center transition-all shadow-sm active:scale-95"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>

                {/* Dots Navigation for pairs */}
                <div className="flex items-center gap-1.5">
                  {Array.from({ length: totalPages }).map((_, pageIdx) => (
                    <button
                      key={pageIdx}
                      onClick={() => setSlideIndex(pageIdx * 2)}
                      className={`transition-all duration-300 rounded-full ${
                        Math.floor(slideIndex / 2) === pageIdx
                          ? "w-6 h-2 bg-[#0093cb]"
                          : "w-2 h-2 bg-slate-300 hover:bg-slate-400"
                      }`}
                      aria-label={`Slide to pair ${pageIdx + 1}`}
                    />
                  ))}
                </div>

                {/* Next Button */}
                <button
                  onClick={handleNext}
                  aria-label="Next offering"
                  className="w-8 h-8 rounded-full border border-slate-200 bg-white hover:bg-slate-50 text-slate-600 flex items-center justify-center transition-all shadow-sm active:scale-95"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>

              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                0{Math.floor(slideIndex / 2) + 1} / 0{totalPages} &bull; Auto Sliding
              </span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}



