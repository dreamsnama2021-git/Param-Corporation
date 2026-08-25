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
        <div className="bg-gradient-to-r from-[#0093cb] to-[#00a65d] rounded-[32px] p-6 sm:p-10 text-white relative overflow-hidden shadow-xl">
          {/* Decorative Subtle Dark Overlay */}
          <div className="absolute inset-0 bg-black/10 pointer-events-none" />
          
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* LEFT COLUMN: Header Title & CTA Button */}
            <div className="lg:col-span-5 flex flex-col justify-center text-center lg:text-left space-y-6">
              <div className="space-y-3">
                <span className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.25em] text-white/80 block">
                  Workflow Advantages
                </span>
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight leading-tight uppercase">
                  Why Our <br className="hidden lg:block" />
                  Workflow Works
                </h3>
                <div className="h-1 w-20 bg-white rounded-full mx-auto lg:mx-0" />
              </div>

              <div className="flex justify-center lg:justify-start">
                <a
                  href="/about-us#project-workflow"
                  className="group inline-flex items-center gap-2 bg-white text-[#0093cb] font-extrabold text-xs sm:text-sm px-6 py-2.5 rounded-full hover:bg-slate-50 hover:shadow-lg hover:scale-105 active:scale-95 transition-all duration-300"
                >
                  <span>Know more about our workflow</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            </div>

            {/* RIGHT COLUMN: Benefits List inside grid rows (Horizontal rows inside 2-col desktop grid) */}
            <div className="lg:col-span-7">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {benefits.map((benefit, idx) => {
                  const Icon = benefit.icon;
                  const isLast = idx === benefits.length - 1;

                  return (
                    <div
                      key={idx}
                      className={`flex items-center gap-4 bg-white/10 backdrop-blur-sm border border-white/10 rounded-2xl p-4 hover:bg-white/15 transition-all duration-300 hover:scale-[1.02] cursor-pointer ${
                        isLast ? "sm:col-span-2" : ""
                      }`}
                    >
                      {/* Left side: Circular Icon */}
                      <div className="w-11 h-11 rounded-full bg-white/20 border border-white/10 flex items-center justify-center shrink-0">
                        <Icon className="w-5 h-5 text-white" />
                      </div>
                      
                      {/* Right side: Text Title */}
                      <span className="text-white text-xs sm:text-[13px] md:text-sm font-bold tracking-wide text-left">
                        {benefit.title}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
