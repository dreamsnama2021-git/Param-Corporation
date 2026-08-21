"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Lightbulb,
  Compass,
  Code,
  Layers,
  Truck,
  Quote,
  Target,
  Eye,
} from "lucide-react";

// Icon components mapping for the diagram
const icons = {
  conceptualize: Lightbulb,
  design: Compass,
  develop: Code,
  manufacture: Layers,
  deliver: Truck,
};

interface StepData {
  id: string;
  title: string;
  description: string;
  iconName: keyof typeof icons;
  color: string;
  bgColor: string;
  startAngle: number;
  endAngle: number;
}

const steps: StepData[] = [
  {
    id: "design",
    title: "Design",
    description: "Creative & scientific designs that deliver your message",
    iconName: "design",
    color: "#00a8b5",
    bgColor: "bg-teal-50",
    startAngle: 6,
    endAngle: 72,
  },
  {
    id: "develop",
    title: "Develop",
    description: "Prototyping & product development",
    iconName: "develop",
    color: "#00b4d8",
    bgColor: "bg-cyan-50",
    startAngle: 78,
    endAngle: 144,
  },
  {
    id: "manufacture",
    title: "Manufacture",
    description: "In-house production with strict quality standards",
    iconName: "manufacture",
    color: "#00a65d",
    bgColor: "bg-green-50",
    startAngle: 150,
    endAngle: 216,
  },
  {
    id: "deliver",
    title: "Deliver",
    description: "On-time delivery across India with complete support",
    iconName: "deliver",
    color: "#003b46",
    bgColor: "bg-slate-50",
    startAngle: 222,
    endAngle: 288,
  },
  {
    id: "conceptualize",
    title: "Conceptualize",
    description: "Understanding your objectives & requirements",
    iconName: "conceptualize",
    color: "#0093cb",
    bgColor: "bg-blue-50",
    startAngle: 294,
    endAngle: 360,
  },
];

const polarToCartesian = (centerX: number, centerY: number, radius: number, angleInDegrees: number) => {
  const angleInRadians = ((angleInDegrees - 90) * Math.PI) / 180.0;
  return {
    x: centerX + radius * Math.cos(angleInRadians),
    y: centerY + radius * Math.sin(angleInRadians),
  };
};

const describeDonutSlice = (
  x: number,
  y: number,
  innerRadius: number,
  outerRadius: number,
  startAngle: number,
  endAngle: number
) => {
  const startOuter = polarToCartesian(x, y, outerRadius, startAngle);
  const endOuter = polarToCartesian(x, y, outerRadius, endAngle);
  const startInner = polarToCartesian(x, y, innerRadius, startAngle);
  const endInner = polarToCartesian(x, y, innerRadius, endAngle);

  const largeArcFlag = endAngle - startAngle <= 180 ? "0" : "1";

  return [
    "M", startOuter.x, startOuter.y,
    "A", outerRadius, outerRadius, 0, largeArcFlag, 1, endOuter.x, endOuter.y,
    "L", endInner.x, endInner.y,
    "A", innerRadius, innerRadius, 0, largeArcFlag, 0, startInner.x, startInner.y,
    "Z",
  ].join(" ");
};

export default function AboutIntro() {
  const [activeStep, setActiveStep] = useState<StepData | null>(null);

  // SVG parameters
  const size = 500;
  const center = size / 2;
  const outerRadius = 240;
  const innerRadius = 115;
  const labelRadius = (outerRadius + innerRadius) / 2 - 5;

  return (
    <section className="bg-white py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden border-b border-slate-100">
      {/* Decorative background blur shapes */}
      <div className="absolute top-10 left-10 w-96 h-96 bg-[#0093cb]/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#00a65d]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-[1300px] mx-auto relative z-10">
        
        {/* TOP ROW: About content (Left) & Circular Diagram (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-16 lg:mb-20">
          
          {/* COLUMN 1: About content (Span 7) */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            
            {/* Heading */}
            <div className="mb-6">
              <span className="text-4xl sm:text-5xl font-light text-slate-800 tracking-tight block">
                About
              </span>
              <span className="text-5xl sm:text-6xl font-black bg-clip-text text-transparent bg-gradient-to-r from-[#0093cb] to-[#00a65d] tracking-tight block mt-1 pb-2">
                Param Corporation
              </span>
              {/* Underline Divider */}
              <div className="h-1 w-28 bg-gradient-to-r from-[#0093cb] to-[#00a65d] mt-2 rounded-full" />
            </div>

            {/* Subheadings */}
            <div className="mb-6">
              <h3 className="text-lg sm:text-xl font-bold text-[#0093cb]">
                Innovative Solutions.
              </h3>
              <h3 className="text-lg sm:text-xl font-bold text-[#003b46]">
                Stronger Connections. Better Outcomes.
              </h3>
            </div>

            {/* Paragraphs */}
            <div className="space-y-5 text-slate-600 text-sm sm:text-base leading-relaxed mb-8">
              <p>
                Param Corporation is one of India's fastest-growing companies specializing in customized promotional merchandise, doctor engagement tools, patient education products, and digital healthcare communication solutions for the pharmaceutical and healthcare industry.
              </p>
              <p>
                We combine creativity, scientific understanding, and advanced manufacturing to deliver high-quality, impactful solutions that strengthen brand recall, build doctor relationships, and improve patient awareness.
              </p>
            </div>

            {/* Quote Block */}
            <div className="flex gap-4 p-5 rounded-2xl bg-slate-50 border border-slate-100 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-[#0093cb]/5 to-transparent rounded-bl-3xl" />
              <Quote className="w-10 h-10 text-[#00a65d]/20 shrink-0 transform -scale-x-100" />
              <p className="text-slate-700 italic font-medium text-sm sm:text-base leading-relaxed">
                "We don't just create products,{" "}
                <span className="text-[#0093cb] font-bold">we create experiences</span> that make your brand unforgettable."
              </p>
            </div>

          </div>

          {/* COLUMN 2: What We Do Circular Diagram (Span 5) */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center">
            
            {/* Header for diagram */}
            <div className="text-center mb-6">
              <h3 className="text-2xl font-extrabold text-slate-800 tracking-tight">
                What We Do
              </h3>
              <div className="h-1 w-12 bg-[#0093cb] mx-auto mt-2 rounded-full" />
            </div>

            {/* Circular Diagram Wrapper */}
            <div className="relative w-full max-w-[430px] aspect-square flex items-center justify-center select-none">
              
              {/* SVG Circle */}
              <svg
                viewBox={`0 0 ${size} ${size}`}
                className="w-full h-full drop-shadow-xl"
              >
                <g className="origin-center transition-transform duration-300">
                  {steps.map((step) => {
                    const isActive = activeStep?.id === step.id;
                    const pathD = describeDonutSlice(
                      center,
                      center,
                      innerRadius,
                      outerRadius,
                      step.startAngle,
                      step.endAngle
                    );

                    // Text position for labels & icons inside slices
                    const midAngle = (step.startAngle + step.endAngle) / 2;
                    const textPos = polarToCartesian(center, center, labelRadius, midAngle);
                    const StepIcon = icons[step.iconName];

                    return (
                      <g
                        key={step.id}
                        className="cursor-pointer group"
                        onMouseEnter={() => setActiveStep(step)}
                        onMouseLeave={() => setActiveStep(null)}
                      >
                        {/* Segment Path */}
                        <path
                          d={pathD}
                          fill={step.color}
                          className="transition-all duration-300 ease-in-out"
                          style={{
                            opacity: activeStep ? (isActive ? 1 : 0.4) : 0.9,
                            transform: isActive ? "scale(1.03)" : "scale(1)",
                            transformOrigin: "250px 250px",
                          }}
                        />

                        {/* Icon and Label inside segment */}
                        <g
                          style={{
                            opacity: activeStep ? (isActive ? 1 : 0.5) : 0.95,
                            transition: "all 0.3s ease",
                          }}
                        >
                          {/* Render Icon */}
                          <foreignObject
                            x={textPos.x - 30}
                            y={textPos.y - 35}
                            width="60"
                            height="60"
                            className="pointer-events-none"
                          >
                            <div className="w-full h-full flex items-center justify-center text-white">
                              <StepIcon className="w-10 h-10 stroke-[1.8]" />
                            </div>
                          </foreignObject>
 
                          {/* Render Title */}
                          <text
                            x={textPos.x}
                            y={textPos.y + 35}
                            textAnchor="middle"
                            fill="#ffffff"
                            className="text-[12px] sm:text-[13px] font-bold tracking-wide pointer-events-none fill-white"
                          >
                            {step.title}
                          </text>
                        </g>
                      </g>
                    );
                  })}
                </g>

                {/* Center Circle Content */}
                <circle
                  cx={center}
                  cy={center}
                  r={innerRadius - 8}
                  fill="#ffffff"
                  className="shadow-inner"
                />
              </svg>

              {/* Dynamic Center Text Overlay */}
              <div className="absolute w-[170px] h-[170px] rounded-full flex flex-col items-center justify-center text-center p-3 pointer-events-none">
                <AnimatePresence mode="wait">
                  {activeStep ? (
                    <motion.div
                      key={activeStep.id}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      transition={{ duration: 0.2 }}
                      className="flex flex-col items-center"
                    >
                      <span
                        className="text-xs font-bold uppercase tracking-wider mb-1"
                        style={{ color: activeStep.color }}
                      >
                        {activeStep.title}
                      </span>
                      <p className="text-[11px] text-slate-500 leading-snug font-medium">
                        {activeStep.description}
                      </p>
                    </motion.div>
                  ) : (
                    <motion.div
                      key="default"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="flex flex-col items-center"
                    >
                      <h4 className="text-sm font-extrabold text-slate-800 leading-snug">
                        End-to-End Solutions
                      </h4>
                      <p className="text-[10px] text-slate-400 font-medium mt-0.5">
                        for Healthcare Brands
                      </p>
                      <div className="h-0.5 w-10 bg-gradient-to-r from-[#0093cb] to-[#00a65d] mt-1.5 rounded-full" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

            </div>

          </div>

        </div>

        {/* BOTTOM ROW: Vision & Mission 2-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 border-t border-slate-100 pt-16">
          
          {/* Card 1: Our Vision */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            whileHover={{ 
              y: -8, 
              scale: 1.02,
              boxShadow: "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)"
            }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
            className="group relative w-full rounded-3xl overflow-hidden border border-white/20 bg-gradient-to-r from-[#0093cb] to-[#00a65d] text-white p-8 flex flex-col items-start gap-4 cursor-pointer"
          >
            {/* Visual overlay path grid / Hover gradient glow */}
            <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.08)_0%,transparent_60%)] transition-opacity duration-500 group-hover:opacity-40 pointer-events-none" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#00a65d] to-[#0093cb] opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-out pointer-events-none" />
            
            <div className="relative z-10 w-12 h-12 rounded-full bg-white/10 flex items-center justify-center border border-white/20 shadow-md transition-all duration-500 group-hover:scale-110 group-hover:rotate-[360deg] group-hover:bg-white group-hover:text-[#0093cb]">
              <Target className="w-6 h-6 text-white transition-colors duration-500 group-hover:text-[#0093cb]" />
            </div>
            
            <h3 className="relative z-10 text-xl sm:text-2xl font-black uppercase tracking-wide group-hover:translate-x-1 transition-transform duration-300">
              Our Vision
            </h3>
            
            <p className="relative z-10 text-white/90 text-sm sm:text-base leading-relaxed font-medium">
              To be the most innovative and trusted partner in healthcare marketing solutions.
            </p>
          </motion.div>

          {/* Card 2: Our Mission */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            whileHover={{ 
              y: -8, 
              scale: 1.02,
              boxShadow: "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)"
            }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
            className="group relative w-full rounded-3xl overflow-hidden border border-white/20 bg-gradient-to-r from-[#0093cb] to-[#00a65d] text-white p-8 flex flex-col items-start gap-4 cursor-pointer"
          >
            {/* Visual overlay path grid / Hover gradient glow */}
            <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.08)_0%,transparent_60%)] transition-opacity duration-500 group-hover:opacity-40 pointer-events-none" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#00a65d] to-[#0093cb] opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-out pointer-events-none" />
            
            <div className="relative z-10 w-12 h-12 rounded-full bg-white/10 flex items-center justify-center border border-white/20 shadow-md transition-all duration-500 group-hover:scale-110 group-hover:rotate-[360deg] group-hover:bg-white group-hover:text-[#00a65d]">
              <Eye className="w-6 h-6 text-white transition-colors duration-500 group-hover:text-[#00a65d]" />
            </div>
            
            <h3 className="relative z-10 text-xl sm:text-2xl font-black uppercase tracking-wide group-hover:translate-x-1 transition-transform duration-300">
              Our Mission
            </h3>
            
            <p className="relative z-10 text-white/90 text-sm sm:text-base leading-relaxed font-medium">
              To empower healthcare brands through creative, customized, and impactful communication solutions.
            </p>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
