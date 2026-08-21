"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Users,
  Lightbulb,
  PenTool,
  Award,
  Leaf,
  ChevronRight,
  ChevronDown,
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
      icon: PenTool,
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
      num: "01",
      title: "Understand the Objective",
      desc: "We study the brand, therapy, audience and communication goals to define the right design direction.",
      image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=300",
      borderColor: "border-[#0093cb]",
      textColor: "text-[#0093cb]",
      arrowColor: "text-[#0093cb]",
    },
    {
      num: "02",
      title: "Conceptualize & Ideate",
      desc: "Our creative team brainstorms and creates multiple concepts to explore the best ideas.",
      image: "https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?w=300",
      borderColor: "border-[#005f73]",
      textColor: "text-[#005f73]",
      arrowColor: "text-[#005f73]",
    },
    {
      num: "03",
      title: "Design & Visualization",
      desc: "Ideas are refined using 3D modeling and renders to bring clarity, accuracy and visual realism.",
      image: "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?w=300",
      borderColor: "border-[#00a8b5]",
      textColor: "text-[#00a8b5]",
      arrowColor: "text-[#00a8b5]",
    },
    {
      num: "04",
      title: "Prototype & Evaluate",
      desc: "Prototypes are built and tested for form, function, usability and overall impact.",
      image: "https://images.unsplash.com/photo-1615840287214-7fe58a8f3685?w=300",
      borderColor: "border-[#00a65d]",
      textColor: "text-[#00a65d]",
      arrowColor: "text-[#00a65d]",
    },
    {
      num: "05",
      title: "Refine & Perfect",
      desc: "We refine every detail based on feedback to ensure the final product is flawless.",
      image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=300",
      borderColor: "border-[#52b788]",
      textColor: "text-[#52b788]",
      arrowColor: "text-[#52b788]",
    },
    {
      num: "06",
      title: "Deliver Design Excellence",
      desc: "The final design is ready for production to create experiences that leave a lasting impression.",
      image: "https://pub-735dbd7583d74ad5949115d6fdf77023.r2.dev/Final%20Edit%20Images/20.png",
      borderColor: "border-[#8ac926]",
      textColor: "text-[#8ac926]",
      arrowColor: "text-[#8ac926]",
    },
  ];

  return (
    <section className="bg-slate-50/50 py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden border-b border-slate-100">
      <div className="max-w-[1400px] w-full mx-auto relative z-10 space-y-16 sm:space-y-20">

        {showAll && (
          <>
            {/* TOP COMPONENT: Overview / Intro */}
            <div className="flex flex-col items-center text-center max-w-4xl mx-auto space-y-6">
              <div>
                <h2 className="text-5xl sm:text-6xl font-black tracking-tight leading-tight text-slate-800">
                  Our <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#0093cb] to-[#00a65d]">Design Process</span>
                </h2>
                {/* Divider line */}
                <div className="h-1 w-24 bg-gradient-to-r from-[#0093cb] to-[#00a65d] mt-4 mx-auto rounded-full" />
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-[#0093cb]">
                Where Ideas Take Shape and Brands Come Alive.
              </h3>

              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                At Param Corporation, design is more than creativity – it is a thoughtful process that blends strategy, science, and aesthetics to create solutions that communicate, engage and deliver measurable impact.
              </p>
            </div>

            {/* MIDDLE COMPONENT: Our Design Philosophy */}
            <div className="space-y-10">
              <div className="text-center">
                <h3 className="text-3xl font-extrabold text-slate-800 tracking-tight">
                  Our Design Philosophy
                </h3>
                <div className="flex justify-center gap-1.5 mt-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#0093cb]" />
                  <div className="w-2.5 h-2.5 rounded-full bg-[#00a8b5]" />
                  <div className="w-2.5 h-2.5 rounded-full bg-[#00a65d]" />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
                {philosophy.map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={idx}
                      className="group bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl hover:border-[#0093cb]/30 hover:-translate-y-1.5 transition-all duration-300 flex flex-col items-center text-center space-y-4 cursor-pointer"
                    >
                      {/* Swinging & Hanging Icon wrapper */}
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
                      <p className="text-slate-500 text-xs sm:text-sm xl:text-base leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </>
        )}

        {/* BOTTOM COMPONENT: The 6-Step Process Timeline */}
        {showSteps && (
          <div className="space-y-12">
            <div className="text-center">
              <h3 className="text-3xl font-extrabold text-slate-800 tracking-tight">
                Our Design Process
              </h3>
              <div className="h-0.5 w-16 bg-[#0093cb] mx-auto mt-3 rounded-full" />
            </div>

            {/* Timeline Grid */}
            <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between gap-8 lg:gap-2">
              {steps.map((step, idx) => {
                return (
                  <React.Fragment key={idx}>
                    {/* Step */}
                    <div className="flex flex-col items-center text-center max-w-[210px] w-full group">
                      <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: idx * 0.1 }}
                        className={`w-28 h-28 sm:w-32 sm:h-32 rounded-full border-4 ${step.borderColor} shadow-lg relative shrink-0 transition-transform duration-300 group-hover:scale-105 bg-cover bg-center`}
                        style={{ backgroundImage: `url(${step.image})` }}
                      />

                      <div className="mt-5 space-y-1.5 px-2">
                        <span className={`text-base font-extrabold tracking-wider block ${step.textColor}`}>
                          {step.num}
                        </span>
                        <h3 className={`text-sm sm:text-base font-black leading-snug uppercase ${step.textColor}`}>
                          {step.title}
                        </h3>
                      </div>

                      <p className="text-slate-500 text-[11px] sm:text-xs leading-relaxed mt-2.5 px-1 font-medium">
                        {step.desc}
                      </p>
                    </div>

                    {/* Connector Arrow */}
                    {idx < steps.length - 1 && (
                      <div className="flex items-center justify-center py-2 lg:py-0 lg:mt-12 shrink-0">
                        {/* Desktop */}
                        <div className="hidden lg:flex items-center gap-1">
                          <span className={`text-lg font-bold tracking-widest ${step.arrowColor}`}>
                            ⋯⋯
                          </span>
                          <ChevronRight className={`w-5 h-5 stroke-[2.5] ${step.arrowColor}`} />
                        </div>
                        {/* Mobile */}
                        <div className="flex lg:hidden flex-col items-center gap-0.5">
                          <span className={`text-xs font-bold leading-none ${step.arrowColor}`}>
                            ⋮
                          </span>
                          <ChevronDown className={`w-4 h-4 stroke-[2.5] ${step.arrowColor}`} />
                        </div>
                      </div>
                    )}
                  </React.Fragment>
                );
              })}
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
