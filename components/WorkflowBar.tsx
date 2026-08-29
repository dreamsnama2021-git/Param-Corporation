"use client";

import React from "react";
import { Target, Workflow, Award, Clock, Users, ArrowRight } from "lucide-react";

export default function WorkflowBar() {
  const benefits = [
    {
      title: "Client-Centric Approach",
      icon: Target,
    },
    {
      title: "Structured & Transparent Process",
      icon: Workflow,
    },
    {
      title: "Uncompromised Quality",
      icon: Award,
    },
    {
      title: "On-Time Delivery",
      icon: Clock,
    },
    {
      title: "Long-Term Partnerships",
      icon: Users,
    },
  ];

  return (
    <section className="w-full bg-white py-8 px-4 sm:px-6 lg:px-8 border-b border-slate-100 flex items-center justify-center">
      <div className="max-w-[1400px] w-full mx-auto">
        <div className="bg-gradient-to-r from-[#0093cb] to-[#00a65d] rounded-[32px] p-6 sm:p-8 text-white relative overflow-hidden shadow-xl">
          <div className="absolute inset-0 bg-black/10 pointer-events-none" />
          
          <div className="relative z-10 space-y-6">
            {/* Header */}
            <h3 className="text-lg sm:text-xl 2xl:text-2xl font-extrabold tracking-tight text-center flex items-center justify-center gap-3">
              <span className="h-px w-10 bg-gradient-to-r from-transparent to-white/40" />
              Why Our Workflow Works
              <span className="h-px w-10 bg-gradient-to-l from-transparent to-white/40" />
            </h3>

            {/* 5 Benefits - Mobile Horizontal Slideable + Desktop 5-Column Grid */}
            <div className="flex md:grid md:grid-cols-5 gap-3.5 md:gap-4 overflow-x-auto md:overflow-visible snap-x snap-mandatory scrollbar-hide pb-3 md:pb-0 md:divide-x divide-white/15 -mx-2 px-2 md:mx-0 md:px-0">
              {benefits.map((benefit, idx) => {
                const Icon = benefit.icon;
                return (
                  <div
                    key={idx}
                    className={`snap-center shrink-0 w-[56vw] max-w-[210px] md:w-auto md:max-w-none bg-white/10 md:bg-transparent backdrop-blur-md md:backdrop-blur-none rounded-2xl md:rounded-none p-4 md:p-3 border border-white/15 md:border-none flex flex-col items-center text-center justify-center ${
                      idx === 0 ? "" : "md:pl-4"
                    }`}
                  >
                    <div className="w-11 h-11 2xl:w-14 2xl:h-14 rounded-full bg-white/20 border border-white/10 flex items-center justify-center mb-2.5 shadow-inner hover:scale-110 transition-transform duration-300">
                      <Icon className="w-5 h-5 2xl:w-6.5 2xl:h-6.5 text-white" />
                    </div>
                    <span className="text-white text-xs sm:text-[13px] 2xl:text-base font-bold tracking-wide leading-snug">
                      {benefit.title}
                    </span>
                  </div>
                );
              })}
            </div>

            {/* Centered CTA Link Button */}
            <div className="flex justify-center pt-2">
              <a
                href="/about-us#project-workflow"
                className="group inline-flex items-center gap-2 bg-white text-[#0093cb] font-extrabold text-xs sm:text-sm px-6 py-2.5 rounded-full hover:bg-slate-50 hover:shadow-lg hover:scale-105 active:scale-95 transition-all duration-300"
              >
                <span>Know more about our workflow</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
              </a>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
