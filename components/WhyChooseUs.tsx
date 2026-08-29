"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Lightbulb,
  Factory,
  Award,
  Users,
  Handshake,
} from "lucide-react";

export default function WhyChooseUs() {
  const pillars = [
    {
      num: "01",
      title: "Idea to Impact",
      desc: "Turning brand objectives into creative, high-recall marketing tools.",
      icon: Lightbulb,
      color: "#0093cb",
      // Desktop positions relative to the curved layout
      dotX: 80,
      dotY: 75,
      textX: 170,
      textY: 48,
    },
    {
      num: "02",
      title: "End-to-End Solutions",
      desc: "In-house conceptualization, design, production, and delivery.",
      icon: Factory,
      color: "#005f73",
      dotX: 175,
      dotY: 170,
      textX: 265,
      textY: 143,
    },
    {
      num: "03",
      title: "Premium Quality",
      desc: "Fine finishing and strict quality control for high brand value.",
      icon: Award,
      color: "#00a8b5",
      dotX: 210,
      dotY: 300,
      textX: 300,
      textY: 273,
    },
    {
      num: "04",
      title: "Doctor & Patient Centric",
      desc: "Creative consultative tools and patient awareness aids.",
      icon: Users,
      color: "#00a65d",
      dotX: 175,
      dotY: 430,
      textX: 265,
      textY: 403,
    },
    {
      num: "05",
      title: "Long-Term Trust",
      desc: "Reliable PAN India delivery, consistency, and partnerships.",
      icon: Handshake,
      color: "#8ac926",
      dotX: 80,
      dotY: 525,
      textX: 170,
      textY: 498,
    },
  ];

  return (
    <section className="bg-white py-6 sm:py-8 lg:py-8 xl:py-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden border-b border-slate-100 flex flex-col items-center justify-center w-full">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-[0.015] pointer-events-none" style={{ backgroundImage: "radial-gradient(#000 1px, transparent 1px)", backgroundSize: "24px 24px" }} />

      <div className="max-w-[1400px] w-full mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 xl:gap-8 items-center">
          
          {/* LEFT COLUMN: Header Content (Centered alignment on all screen sizes) */}
          <div className="lg:col-span-5 flex flex-col justify-center items-center text-center relative py-4 lg:py-6 w-full">
            {/* Large Decorative Star Shape in Background */}
            <div className="absolute inset-0 flex items-center justify-center opacity-[0.03] pointer-events-none z-0">
              <svg className="w-[320px] h-[320px] sm:w-[400px] sm:h-[400px]" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 .587l3.668 7.431 8.2 1.192-5.934 5.787 1.4 8.168L12 18.896l-7.334 3.857 1.4-8.168L.132 9.21l8.2-1.192L12 .587z" />
              </svg>
            </div>

            <div className="relative z-10 space-y-4 lg:space-y-5 flex flex-col items-center w-full">
              <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.2em] text-[#0093cb] block">
                Param Corporation Advantages
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-3xl xl:text-[46px] font-black tracking-tight leading-tight text-slate-900 uppercase text-center">
                Why <br />
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#0093cb] to-[#00a65d]">Clients Choose</span> <br />
                Us
              </h2>
              <div className="h-1 w-20 lg:w-24 bg-gradient-to-r from-[#0093cb] to-[#00a65d] rounded-full mx-auto" />
              <p className="text-slate-500 text-xs sm:text-sm xl:text-base leading-relaxed max-w-md mx-auto font-medium text-center">
                We blend scientific understanding, creative innovation, and strict quality controls to deliver high-recall marketing tools and patient-centric communication aids.
              </p>
            </div>
          </div>

          {/* RIGHT COLUMN: Desktop Curved layout or Mobile timeline */}
          <div className="lg:col-span-7 relative flex justify-center">
            
            {/* DESKTOP VIEW: Curved Arch Layout */}
            <div className="hidden lg:block relative w-[580px] h-[520px] xl:w-[680px] xl:h-[600px] shrink-0 select-none scale-90 xl:scale-100 origin-center">
              
              {/* SVG Curved Arch & Pointer Lines */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none" xmlns="http://www.w3.org/2000/svg">
                {/* Main Curved Arch */}
                <path
                  d="M 80,75 A 260,260 0 0,1 80,525"
                  fill="none"
                  stroke="#e2e8f0"
                  strokeWidth="2.5"
                  strokeDasharray="4 4"
                />

                {/* Connector pointers to text blocks */}
                {pillars.map((pillar, idx) => {
                  const endLineX = pillar.textX - 15;
                  return (
                    <g key={idx}>
                      <line
                        x1={pillar.dotX + 32}
                        y1={pillar.dotY}
                        x2={endLineX}
                        y2={pillar.dotY}
                        stroke="#0093cb"
                        strokeWidth="1.5"
                      />
                      <circle
                        cx={endLineX}
                        cy={pillar.dotY}
                        r="2.5"
                        fill="#0093cb"
                      />
                    </g>
                  );
                })}
              </svg>

              {/* Pillars Interactive Elements */}
              {pillars.map((pillar, idx) => {
                const Icon = pillar.icon;
                return (
                  <React.Fragment key={idx}>
                    {/* Circle Node on the Arch */}
                    <motion.div
                      initial={{ scale: 0.8, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: idx * 0.1 }}
                      className="absolute w-16 h-16 rounded-full bg-white border-2 border-slate-200 shadow-md flex items-center justify-center z-10 font-black text-xl text-slate-800 hover:border-[#0093cb] hover:scale-115 transition-all duration-300 cursor-pointer"
                      style={{
                        left: `${pillar.dotX - 32}px`,
                        top: `${pillar.dotY - 32}px`,
                      }}
                    >
                      {pillar.num}
                    </motion.div>

                    {/* Text block next to the node */}
                    <motion.div
                      initial={{ x: 20, opacity: 0 }}
                      whileInView={{ x: 0, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: idx * 0.1 }}
                      className="absolute flex items-start gap-4 w-[360px]"
                      style={{
                        left: `${pillar.textX}px`,
                        top: `${pillar.textY - 8}px`,
                      }}
                    >
                      {/* Icon */}
                      <div className="p-3 rounded-2xl bg-slate-50 border border-slate-100 shadow-sm shrink-0" style={{ color: pillar.color }}>
                        <Icon className="w-6.5 h-6.5 stroke-[2]" />
                      </div>

                      {/* Header and Desc */}
                      <div className="text-left pt-1">
                        <h4 className="text-base font-black text-slate-900 leading-tight uppercase tracking-tight">
                          {pillar.title}
                        </h4>
                        <p className="text-slate-500 text-[13px] leading-snug mt-1.5 font-medium">
                          {pillar.desc}
                        </p>
                      </div>
                    </motion.div>
                  </React.Fragment>
                );
              })}
            </div>

            {/* MOBILE & TABLET VIEW: Vertical Timeline */}
            <div className="block lg:hidden relative pl-8 py-4 space-y-10 w-full max-w-md mx-auto">
              {/* Left Vertical Line */}
              <div className="absolute top-0 bottom-0 left-3.5 w-[2px] bg-slate-200" />

              {pillars.map((pillar, idx) => {
                const Icon = pillar.icon;

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
                    <div className="absolute left-[-22px] top-6 w-3.5 h-3.5 rounded-full bg-slate-955 border-2 border-white shadow z-10" />

                    {/* Circular Icon & Number */}
                    <div className="flex items-center gap-2 shrink-0">
                      <span className="text-base font-bold text-slate-500">{pillar.num}.</span>
                      <div
                        className="w-14 h-14 rounded-full border-2 border-slate-200 bg-white flex items-center justify-center shadow"
                        style={{ color: pillar.color }}
                      >
                        <Icon className="w-6 h-6 stroke-[2]" />
                      </div>
                    </div>

                    {/* Text content next to icon */}
                    <div className="pt-2 text-left">
                      <h4 className="text-base font-black text-slate-900 leading-tight uppercase">
                        {pillar.title}
                      </h4>
                      <p className="text-slate-500 text-sm mt-1 font-medium">
                        {pillar.desc}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
