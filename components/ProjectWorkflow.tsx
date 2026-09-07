"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  MessageSquare,
  ClipboardList,
  Lightbulb,
  Settings,
  Factory,
  Package,
  Search,
  Truck,
  HeartHandshake,
  TrendingUp,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

export default function ProjectWorkflow() {
  const [slideIndex, setSlideIndex] = useState(0);

  const steps = [
    {
      num: 1,
      title: "Inquiry & Requirement",
      desc: "We understand your needs, objectives, target audience and project goals.",
      icon: MessageSquare,
      color: "text-[#0093cb]",
      bgColor: "bg-[#0093cb]/5",
      borderColor: "border-[#0093cb]/20",
    },
    {
      num: 2,
      title: "Consultation & Planning",
      desc: "Our team analyzes your requirements and creates a strategic plan with the best possible solutions.",
      icon: ClipboardList,
      color: "text-[#0093cb]",
      bgColor: "bg-[#0093cb]/5",
      borderColor: "border-[#0093cb]/20",
    },
    {
      num: 3,
      title: "Concept & Design",
      desc: "Creative concepts and designs are developed and shared for your feedback.",
      icon: Lightbulb,
      color: "text-[#0093cb]",
      bgColor: "bg-[#0093cb]/5",
      borderColor: "border-[#0093cb]/20",
    },
    {
      num: 4,
      title: "Prototyping & Approval",
      desc: "We create prototypes (if required) and refine the design based on your approval.",
      icon: Settings,
      color: "text-[#00a65d]",
      bgColor: "bg-[#00a65d]/5",
      borderColor: "border-[#00a65d]/20",
    },
    {
      num: 5,
      title: "Production & Quality Check",
      desc: "Precision manufacturing with strict quality checks at every stage to ensure perfection.",
      icon: Factory,
      color: "text-[#00a65d]",
      bgColor: "bg-[#00a65d]/5",
      borderColor: "border-[#00a65d]/20",
    },
    {
      num: 6,
      title: "Packaging & Branding",
      desc: "Customized packaging and branding to ensure your product looks and feels premium.",
      icon: Package,
      color: "text-[#00a65d]",
      bgColor: "bg-[#00a65d]/5",
      borderColor: "border-[#00a65d]/20",
    },
    {
      num: 7,
      title: "Final Inspection & Testing",
      desc: "Every product undergoes thorough inspection to meet our high standards and your expectations.",
      icon: Search,
      color: "text-[#00a65d]",
      bgColor: "bg-[#00a65d]/5",
      borderColor: "border-[#00a65d]/20",
    },
    {
      num: 8,
      title: "On-Time Delivery",
      desc: "We ensure timely and safe delivery to your location, every time, without compromise.",
      icon: Truck,
      color: "text-[#0093cb]",
      bgColor: "bg-[#0093cb]/5",
      borderColor: "border-[#0093cb]/20",
    },
    {
      num: 9,
      title: "Post-Delivery Support",
      desc: "Our relationship doesn't end at delivery. We provide support for any assistance needed.",
      icon: HeartHandshake,
      color: "text-[#0093cb]",
      bgColor: "bg-[#0093cb]/5",
      borderColor: "border-[#0093cb]/20",
    },
    {
      num: 10,
      title: "Continuous Improvement",
      desc: "We learn, evolve and innovate to deliver even better solutions in the future.",
      icon: TrendingUp,
      color: "text-[#0093cb]",
      bgColor: "bg-[#0093cb]/5",
      borderColor: "border-[#0093cb]/20",
    },
  ];

  const totalPages = Math.ceil(steps.length / 2); // 5 pages

  // Auto-slide every 4 seconds on mobile/tablet (advance by 2 full columns)
  useEffect(() => {
    const timer = setInterval(() => {
      setSlideIndex((prev) => (prev + 2 >= steps.length ? 0 : prev + 2));
    }, 4000);
    return () => clearInterval(timer);
  }, [steps.length]);

  const handlePrev = () => {
    setSlideIndex((prev) => (prev - 2 < 0 ? (totalPages - 1) * 2 : prev - 2));
  };

  const handleNext = () => {
    setSlideIndex((prev) => (prev + 2 >= steps.length ? 0 : prev + 2));
  };

  return (
    <section id="project-workflow" className="py-12 sm:py-16 lg:py-20 bg-slate-50/50 relative overflow-hidden border-b border-slate-100">
      {/* Background Blurs */}
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-[#0093cb]/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-10 left-0 w-96 h-96 bg-[#00a65d]/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12 lg:space-y-16">
        
        {/* ─── HEADER ────────────────────────────────────────────────────── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          <div className="lg:col-span-6 space-y-4">
            <div>
              <span className="text-xs sm:text-sm font-bold uppercase tracking-widest text-[#0093cb] block mb-2">
                Execution Excellence
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-4xl xl:text-5xl font-black text-slate-800 tracking-tight leading-tight">
                Our Project <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#0093cb] to-[#00a65d]">Workflow</span>
              </h2>
              <div className="h-1 w-20 bg-gradient-to-r from-[#0093cb] to-[#00a65d] mt-3 rounded-full" />
            </div>

            <h3 className="text-sm sm:text-base lg:text-lg font-bold text-[#0093cb]">
              A streamlined process. Exceptional results.
            </h3>

            <p className="text-slate-600 text-xs sm:text-sm lg:text-base leading-relaxed">
              At Param Corporation, we follow a structured workflow to ensure every project is executed
              seamlessly — from the first conversation to final delivery and beyond.
            </p>
          </div>

          {/* Right Showcase image of laptop showing project workflow */}
          <div className="lg:col-span-6 flex justify-center w-full">
            <div
              className="relative w-full h-[320px] sm:h-[400px] lg:h-[420px] xl:h-[460px] rounded-[40px] rounded-br-[100px] rounded-tl-[100px] overflow-hidden shadow-2xl border-4 border-white group"
              style={{
                backgroundImage: 'url(https://pub-735dbd7583d74ad5949115d6fdf77023.r2.dev/About%20Us%20Page/Our%20Project%20Workflow.png)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 via-transparent to-transparent pointer-events-none" />
            </div>
          </div>
        </div>

        {/* ─── DESKTOP VIEW (>= 1280px): ALL 10 CARDS GRID ─── */}
        <div className="hidden xl:grid grid-cols-5 gap-5 lg:gap-6 items-stretch">
          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <div
                key={step.num}
                className="bg-white p-5 sm:p-6 rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl hover:border-[#0093cb]/30 transition-all duration-300 flex flex-col justify-between relative group cursor-pointer"
              >
                {/* Step Number Circle */}
                <div className="absolute -top-3 -left-3 w-8 h-8 rounded-full bg-gradient-to-r from-[#0093cb] to-[#00a65d] text-white font-extrabold text-xs flex items-center justify-center shadow-md z-10">
                  {step.num}
                </div>

                {/* Outside Floating Arrow */}
                {step.num !== 10 && (
                  <div className="hidden sm:flex absolute -right-3.5 sm:-right-4 top-1/2 -translate-y-1/2 z-20 w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-white shadow-lg border border-slate-200 text-[#0093cb] items-center justify-center opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300 pointer-events-none">
                    <ArrowRight className="w-4 h-4 stroke-[2.5]" />
                  </div>
                )}

                <div className="space-y-3">
                  <div className={`w-11 h-11 rounded-2xl ${step.bgColor} border ${step.borderColor} flex items-center justify-center transition-transform duration-300 group-hover:scale-105`}>
                    <Icon className={`w-5 h-5 ${step.color}`} />
                  </div>

                  <h4 className="font-extrabold text-xs sm:text-sm text-slate-800 leading-snug uppercase tracking-tight group-hover:text-[#0093cb] transition-colors duration-200">
                    {step.title}
                  </h4>

                  <p className="text-slate-500 text-[11px] sm:text-xs leading-relaxed font-medium line-clamp-3">
                    {step.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* ─── MOBILE & TABLET VIEW (< 1280px): 2 CARDS UPFRONT WITH SLIDING ─── */}
        <div className="block xl:hidden space-y-4">
          <div className="grid grid-cols-2 gap-3 sm:gap-4 md:gap-6 max-w-[640px] mx-auto w-full items-stretch">
            {[
              steps[slideIndex % steps.length],
              steps[(slideIndex + 1) % steps.length],
            ].map((step) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={`${step.num}-${slideIndex}`}
                  initial={{ opacity: 0.3, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  className="bg-white p-3.5 sm:p-5 rounded-2xl sm:rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between relative group cursor-pointer w-full min-w-0"
                >
                  {/* Step Number Circle */}
                  <div className="absolute -top-2.5 -left-2.5 sm:-top-3 sm:-left-3 w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-gradient-to-r from-[#0093cb] to-[#00a65d] text-white font-extrabold text-[10px] sm:text-xs flex items-center justify-center shadow-md z-10">
                    {step.num}
                  </div>

                  <div className="space-y-2 sm:space-y-3">
                    <div className={`w-8 h-8 sm:w-11 sm:h-11 rounded-xl sm:rounded-2xl ${step.bgColor} border ${step.borderColor} flex items-center justify-center`}>
                      <Icon className={`w-4 h-4 sm:w-5 sm:h-5 ${step.color}`} />
                    </div>

                    <h4 className="font-extrabold text-[11px] sm:text-sm text-slate-800 leading-snug uppercase tracking-tight line-clamp-2">
                      {step.title}
                    </h4>

                    <p className="text-slate-500 text-[10px] sm:text-xs leading-snug sm:leading-relaxed font-medium line-clamp-3">
                      {step.desc}
                    </p>
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
                aria-label="Previous step"
                className="w-8 h-8 rounded-full border border-slate-200 bg-white hover:bg-slate-50 text-slate-600 flex items-center justify-center transition-all shadow-sm active:scale-95"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>

              {/* Dots Navigation */}
              <div className="flex items-center gap-1.5 overflow-x-auto max-w-[200px] py-1">
                {Array.from({ length: totalPages }).map((_, pageIdx) => (
                  <button
                    key={pageIdx}
                    onClick={() => setSlideIndex(pageIdx * 2)}
                    className={`transition-all duration-300 rounded-full shrink-0 ${
                      Math.floor(slideIndex / 2) === pageIdx
                        ? "w-5 h-2 bg-[#0093cb]"
                        : "w-2 h-2 bg-slate-300 hover:bg-slate-400"
                    }`}
                    aria-label={`Slide to steps ${pageIdx * 2 + 1} and ${pageIdx * 2 + 2}`}
                  />
                ))}
              </div>

              {/* Next Button */}
              <button
                onClick={handleNext}
                aria-label="Next step"
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
    </section>
  );
}

