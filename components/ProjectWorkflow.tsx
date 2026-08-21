"use client";

import React from "react";
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
  Target,
  Workflow,
  Award,
  Clock,
  Users,
  ArrowRight,
} from "lucide-react";

export default function ProjectWorkflow() {
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
    <section className="py-16 sm:py-20 lg:py-24 bg-slate-50/50 relative overflow-hidden border-b border-slate-100">
      {/* Background Blurs */}
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-[#0093cb]/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-10 left-0 w-96 h-96 bg-[#00a65d]/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16 lg:space-y-24">
        
        {/* ─── HEADER ────────────────────────────────────────────────────── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-6 space-y-5">
            <div>
              <span className="text-sm font-bold uppercase tracking-widest text-[#0093cb] block mb-2">
                Execution Excellence
              </span>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-800 tracking-tight leading-tight">
                Our Project <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#0093cb] to-[#00a65d]">Workflow</span>
              </h2>
              <div className="h-1 w-24 bg-gradient-to-r from-[#0093cb] to-[#00a65d] mt-4 rounded-full" />
            </div>

            <h3 className="text-xl sm:text-2xl font-bold text-[#0093cb]">
              A streamlined process. Exceptional results.
            </h3>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              At Param Corporation, we follow a structured workflow to ensure every project is executed
              seamlessly — from the first conversation to final delivery and beyond.
            </p>
          </div>

         {/* Right Showcase image of laptop showing project workflow */}
<div className="lg:col-span-6 flex justify-center">
  <div className="relative w-full max-w-[500px] aspect-[4/3] rounded-[40px] rounded-br-[100px] rounded-tl-[100px] overflow-hidden shadow-2xl border-4 border-white">
    <img
      src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&q=80"
      alt="Structured Workflow Laptop Screen"
      className="absolute inset-0 w-auto h-full object-cover mx-auto"
      style={{ 
        minWidth: '100%',
        minHeight: '100%',
        objectFit: 'cover'
      }}
    />
    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 via-transparent to-transparent pointer-events-none" />
  </div>
</div>
        </div>

        {/* ─── 10-STEP TIMELINE GRID ──────────────────────────────────────── */}
        <div className="space-y-12">
          {/* Grid layout containing steps 1 to 10 */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-8">
            {steps.map((step, idx) => {
              const Icon = step.icon;
              return (
                <div
                  key={idx}
                  className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl hover:border-[#0093cb]/30 hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between relative group cursor-pointer"
                >
                  {/* Step Number Circle */}
                  <div className="absolute -top-3 -left-3 w-8 h-8 rounded-full bg-gradient-to-r from-[#0093cb] to-[#00a65d] text-white font-extrabold text-xs flex items-center justify-center shadow-md">
                    {step.num}
                  </div>

                  <div className="space-y-4">
                    {/* Icon Container */}
                    <div className={`w-12 h-12 rounded-2xl ${step.bgColor} border ${step.borderColor} flex items-center justify-center`}>
                      <Icon className={`w-6 h-6 ${step.color}`} />
                    </div>

                    <h4 className="font-extrabold text-sm sm:text-base text-slate-800 leading-snug">
                      {step.title}
                    </h4>

                    <p className="text-slate-500 text-xs sm:text-sm xl:text-base leading-relaxed">
                      {step.desc}
                    </p>
                  </div>

                  {/* Tiny indicator arrows pointing right for steps on desktop */}
                  {idx < steps.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <ArrowRight className="w-4 h-4 text-[#0093cb]" />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* ─── WHY OUR WORKFLOW WORKS BAR ─────────────────────────────────── */}
        <div className="bg-gradient-to-r from-[#0093cb] to-[#00a65d] rounded-[32px] p-6 sm:p-8 text-white relative overflow-hidden shadow-xl">
          <div className="absolute inset-0 bg-black/10 pointer-events-none" />
          
          <div className="relative z-10 space-y-6">
            <h3 className="text-lg sm:text-xl font-extrabold tracking-tight text-center flex items-center justify-center gap-3">
              <span className="h-px w-10 bg-gradient-to-r from-transparent to-white/40" />
              Why Our Workflow Works
              <span className="h-px w-10 bg-gradient-to-l from-transparent to-white/40" />
            </h3>

            <div className="grid grid-cols-2 md:grid-cols-5 gap-6 md:gap-4 divide-y md:divide-y-0 md:divide-x divide-white/15">
              {benefits.map((benefit, idx) => {
                const Icon = benefit.icon;
                return (
                  <div
                    key={idx}
                    className={`flex flex-col items-center text-center p-3 ${
                      idx >= 2 && idx < 4 ? "pt-6 md:pt-3" : ""
                    } ${idx === 0 ? "" : "md:pl-4"}`}
                  >
                    <div className="w-11 h-11 rounded-full bg-white/20 border border-white/10 flex items-center justify-center mb-3 shadow-inner hover:scale-110 transition-transform duration-300">
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-white text-xs sm:text-[13px] font-bold tracking-wide">
                      {benefit.title}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
