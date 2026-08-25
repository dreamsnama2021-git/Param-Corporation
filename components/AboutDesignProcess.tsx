"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Handshake,
  Lightbulb,
  Palette,
  Wrench,
  Settings,
  Rocket,
  Users,
  Award,
  Leaf,
} from "lucide-react";

export default function AboutDesignProcess({
  showAll = false,
  showSteps = true,
}: {
  showAll?: boolean;
  showSteps?: boolean;
}) {
  const philosophy = [
    {
      title: "Audience First",
      desc: "We design keeping doctors and patients at the heart of communication.",
      icon: Users,
      color: "text-[#0093cb]",
      borderColor: "border-[#0093cb]/20",
    },
    {
      title: "Purpose Driven",
      desc: "Every design is built with a clear objective and measurable impact.",
      icon: Lightbulb,
      color: "text-[#005f73]",
      borderColor: "border-[#005f73]/20",
    },
    {
      title: "Functional & Aesthetic",
      desc: "Balance of form and function to create beautiful yet practical solutions.",
      icon: Palette,
      color: "text-[#00a8b5]",
      borderColor: "border-[#00a8b5]/20",
    },
    {
      title: "Brand Aligned",
      desc: "Designs that reflect and strengthen brand identity and values.",
      icon: Award,
      color: "text-[#00a65d]",
      borderColor: "border-[#00a65d]/20",
    },
    {
      title: "Sustainable Thinking",
      desc: "Responsible design choices for a better tomorrow.",
      icon: Leaf,
      color: "text-[#8ac926]",
      borderColor: "border-[#8ac926]/20",
    },
  ];

  const steps = [
    {
      num: 1,
      title: "MEET & PLAN",
      desc: "Define Project Requirements & Objectives",
      icon: Handshake,
      color: "#0093cb",
      bgColor: "bg-blue-50",
    },
    {
      num: 2,
      title: "DESIGN",
      desc: "Define Brand, Colors, and Visualization",
      icon: Palette,
      color: "#005f73",
      bgColor: "bg-[#f0f9eb]",
    },
    {
      num: 3,
      title: "DEVELOPMENT",
      desc: "Prototyping & Product Development",
      icon: Lightbulb,
      color: "#00a8b5",
      bgColor: "bg-cyan-50",
    },
    {
      num: 4,
      title: "PRE-LAUNCH",
      desc: "Testing & Quality Evaluation",
      icon: Wrench,
      color: "#00a65d",
      bgColor: "bg-green-50",
    },
    {
      num: 5,
      title: "REFINE",
      desc: "Evaluate Feedback & Perfect Details",
      icon: Settings,
      color: "#52b788",
      bgColor: "bg-emerald-50",
    },
    {
      num: 6,
      title: "LAUNCH",
      desc: "Ongoing Production & Support Begins",
      icon: Rocket,
      color: "#8ac926",
      bgColor: "bg-teal-50",
    },
  ];

  return (
    <section className="bg-[#fafafa] py-12 sm:py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden border-b border-slate-100 flex flex-col items-center justify-center w-full">
      {/* Subtle Grid Background Pattern to match the sample design image texture feel */}
      <div className="absolute inset-0 opacity-[0.015] pointer-events-none" style={{ backgroundImage: "radial-gradient(#000 1px, transparent 1px)", backgroundSize: "24px 24px" }} />
      
      <div className="max-w-[1400px] w-full mx-auto relative z-10 space-y-16">

        {showAll && (
          <>
            {/* TOP COMPONENT: Overview / Intro */}
            <div className="flex flex-col items-center text-center max-w-4xl mx-auto space-y-6">
              <div>
                <h2 className="text-4xl sm:text-5xl font-black tracking-tight leading-tight text-slate-800">
                  OUR DESIGN <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#0093cb] to-[#00a65d]">PROCESS</span>
                </h2>
                {/* Divider line */}
                <div className="h-1 w-24 bg-gradient-to-r from-[#0093cb] to-[#00a65d] mt-4 mx-auto rounded-full" />
              </div>

              <h3 className="text-lg sm:text-xl font-bold text-[#0093cb]">
                Where Ideas Take Shape and Brands Come Alive.
              </h3>

              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                At Param Corporation, design is more than creativity – it is a thoughtful process that blends strategy, science, and aesthetics to create solutions that communicate, engage and deliver measurable impact.
              </p>
            </div>

            {/* MIDDLE COMPONENT: Our Design Philosophy */}
            <div className="space-y-10">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
                {philosophy.map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={idx}
                      className="group bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl hover:border-[#0093cb]/30 hover:-translate-y-1.5 transition-all duration-300 flex flex-col items-center text-center space-y-4 cursor-pointer"
                    >
                      <motion.div
                        animate={{
                          rotate: [0, -12, 10, -8, 6, -4, 2, 0]
                        }}
                        transition={{
                          duration: 5,
                          repeat: Infinity,
                          ease: "easeInOut",
                          delay: idx * 0.4
                        }}
                        style={{ originY: 0 }}
                        className={`p-3 rounded-xl bg-slate-50 border ${item.borderColor} shadow-sm shrink-0`}
                      >
                        <Icon className={`w-10 h-10 ${item.color}`} />
                      </motion.div>
                      <h4 className="font-bold text-sm sm:text-base text-slate-800 tracking-wide uppercase leading-tight">
                        {item.title}
                      </h4>
                      <p className="text-slate-500 text-xs sm:text-sm leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </>
        )}

        {/* BOTTOM COMPONENT: Alternating Horizontal Timeline Process */}
        {showSteps && (
          <div className="space-y-14">
            {!showAll && (
              <div className="text-center space-y-3">
                <h3 className="text-3xl sm:text-4xl font-extrabold uppercase tracking-tight text-slate-800">
                  OUR DESIGN <span className="text-[#0093cb]">PROCESS</span>
                </h3>
                <div className="h-1 w-20 bg-gradient-to-r from-[#0093cb] to-[#00a65d] mx-auto rounded-full" />
              </div>
            )}

            {/* Desktop Alternating Horizontal Timeline */}
            <div className="hidden md:block relative py-28 lg:py-36 mt-20 lg:mt-24">
              {/* Central Horizontal Line */}
              <div className="absolute top-1/2 left-0 right-0 h-[2px] bg-slate-300 -translate-y-1/2 z-0" />

              <div className="grid grid-cols-6 gap-4 relative z-10">
                {steps.map((step, idx) => {
                  const Icon = step.icon;
                  const isEven = idx % 2 === 1;

                  return (
                    <div key={idx} className="relative flex flex-col items-center">
                      {/* Alternating Layout Container */}
                      <div className={`absolute left-1/2 -translate-x-1/2 w-full max-w-[240px] lg:max-w-[320px] flex ${isEven ? "flex-col top-1/2 mt-0 pt-0" : "flex-col-reverse bottom-1/2 mb-0 pb-0"}`}>
                        
                        {/* Connecting Line from dot to circle */}
                        <div className="flex justify-center">
                          <div className={`w-[2px] bg-slate-400 h-16 lg:h-24`} />
                        </div>

                        {/* Content Box (Circle & Text next to it) */}
                        <motion.div
                          initial={{ opacity: 0, y: isEven ? 20 : -20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.5, delay: idx * 0.1 }}
                          className={`flex items-start gap-4 ${isEven ? "pb-4" : "pt-4"}`}
                        >
                          {/* Number and Circular Icon */}
                          <div className="flex items-center gap-1.5 shrink-0">
                            <span className="text-base lg:text-xl font-bold text-slate-700">{step.num}.</span>
                            <div
                              className="w-14 h-14 lg:w-20 lg:h-20 rounded-full border-[3px] lg:border-4 border-slate-900 bg-white flex items-center justify-center shadow-lg transition-transform duration-300 hover:scale-110"
                              style={{ color: step.color }}
                            >
                              <Icon className="w-6 h-6 lg:w-9 lg:h-9 stroke-[2]" />
                            </div>
                          </div>

                          {/* Text Information */}
                          <div className="pt-1.5 lg:pt-3 text-left min-w-0">
                            <h4 className="text-sm lg:text-lg font-black text-slate-900 leading-tight uppercase tracking-tight">
                              {step.title}
                            </h4>
                            <p className="text-slate-500 text-[11px] lg:text-sm leading-snug mt-1 font-medium">
                              {step.desc}
                            </p>
                          </div>
                        </motion.div>

                      </div>

                      {/* Dot on the central horizontal line */}
                      <div className="absolute top-1/2 -translate-y-1/2 w-3.5 h-3.5 rounded-full bg-slate-900 border-2 border-white shadow z-20" />
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Mobile Vertical Timeline */}
            <div className="block md:hidden relative pl-8 py-4 space-y-12">
              {/* Left Vertical Line */}
              <div className="absolute top-0 bottom-0 left-3.5 w-[2px] bg-slate-300" />

              {steps.map((step, idx) => {
                const Icon = step.icon;

                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4 }}
                    className="relative flex items-start gap-4"
                  >
                    {/* Node Dot on vertical line */}
                    <div className="absolute left-[-22px] top-5 w-3.5 h-3.5 rounded-full bg-slate-900 border-2 border-white shadow z-10" />

                    {/* Circular Icon & Number */}
                    <div className="flex items-center gap-1 shrink-0">
                      <span className="text-sm font-bold text-slate-500">{step.num}.</span>
                      <div
                        className="w-12 h-12 rounded-full border-[3px] border-slate-900 bg-white flex items-center justify-center shadow"
                        style={{ color: step.color }}
                      >
                        <Icon className="w-5 h-5 stroke-[2]" />
                      </div>
                    </div>

                    {/* Text content next to icon */}
                    <div className="pt-1.5 text-left">
                      <h4 className="text-sm font-black text-slate-900 leading-tight uppercase">
                        {step.title}
                      </h4>
                      <p className="text-slate-500 text-xs mt-1 font-medium">
                        {step.desc}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
