"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Monitor,
  FlaskConical,
  BookOpen,
  QrCode,
  Gift,
} from "lucide-react";

export default function WhatWeDoOfferings() {
  const [slideIndex, setSlideIndex] = React.useState(0);

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

  // Auto-slide 3 cards upfront at a time
  React.useEffect(() => {
    const timer = setInterval(() => {
      setSlideIndex((prev) => (prev + 1 >= offerings.length ? 0 : prev + 1));
    }, 4000);
    return () => clearInterval(timer);
  }, [offerings.length]);

  const visibleOfferings = [
    offerings[slideIndex % offerings.length],
    offerings[(slideIndex + 1) % offerings.length],
    offerings[(slideIndex + 2) % offerings.length],
  ];

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

        {/* BOTTOM COMPONENT: Our Core Offerings (3 Cards Upfront + Auto Slide) */}
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

          {/* 3 CARDS UPFRONT AUTO-SLIDING CONTAINER */}
          <div className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6 items-stretch">
              {visibleOfferings.map((item) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={item.num}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4 }}
                    className="bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-md hover:shadow-xl hover:border-[#0093cb]/30 transition-all duration-300 flex flex-col justify-between cursor-pointer"
                  >
                    {/* Top info */}
                    <div className="p-4 sm:p-5 flex flex-col items-start space-y-3">
                      {/* Badge and Icon */}
                      <div className="flex items-center justify-between w-full">
                        <span className={`text-white text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center ${item.numBg}`}>
                          {item.num}
                        </span>
                        <div className={`p-2 rounded-lg bg-slate-50 border ${item.borderColor}`}>
                          <Icon className={`w-5 h-5 ${item.color}`} />
                        </div>
                      </div>

                      {/* Title */}
                      <h4 className="text-xs sm:text-[13px] font-black text-slate-800 tracking-wide uppercase leading-tight">
                        {item.title}
                      </h4>

                      {/* Description */}
                      <p className="text-slate-500 text-[11px] sm:text-xs leading-relaxed font-medium line-clamp-2">
                        {item.desc}
                      </p>
                    </div>

                    {/* Product Image - Full Image Display Without Cutting */}
                    <div className="h-[160px] sm:h-[180px] w-full bg-slate-50/80 relative border-t border-slate-100/80 overflow-hidden p-2.5 sm:p-3 flex items-center justify-center">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-contain object-center hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Auto-Slide Dots Navigation */}
            <div className="flex justify-center items-center gap-3 pt-2">
              <div className="flex items-center gap-1.5">
                {offerings.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSlideIndex(idx)}
                    className={`transition-all duration-300 rounded-full ${
                      slideIndex % offerings.length === idx
                        ? "w-6 h-2 bg-[#0093cb]"
                        : "w-2 h-2 bg-slate-300 hover:bg-slate-400"
                    }`}
                    aria-label={`Slide to offering ${idx + 1}`}
                  />
                ))}
              </div>
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                0{(slideIndex % offerings.length) + 1} / 05 &bull; Auto Sliding
              </span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
