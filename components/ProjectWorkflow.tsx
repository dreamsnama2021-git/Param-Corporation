"use client";

import React from "react";
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
  Target,
  Workflow,
  Award,
  Clock,
  Users,
  ArrowRight,
} from "lucide-react";

export default function ProjectWorkflow() {
  const [slideIndex, setSlideIndex] = React.useState(0);
  const [isDesktopXl, setIsDesktopXl] = React.useState(false);

  React.useEffect(() => {
    const checkWidth = () => {
      setIsDesktopXl(window.innerWidth >= 1280);
    };
    checkWidth();
    window.addEventListener("resize", checkWidth);
    return () => window.removeEventListener("resize", checkWidth);
  }, []);

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

  // Auto-slide 3 cards upfront at a time on screens < 1280px
  React.useEffect(() => {
    if (isDesktopXl) return;
    const timer = setInterval(() => {
      setSlideIndex((prev) => (prev + 1 >= steps.length ? 0 : prev + 1));
    }, 4000);
    return () => clearInterval(timer);
  }, [isDesktopXl, steps.length]);

  const visibleSteps = isDesktopXl
    ? steps
    : [
        steps[slideIndex % steps.length],
        steps[(slideIndex + 1) % steps.length],
        steps[(slideIndex + 2) % steps.length],
      ];

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
          <div className="lg:col-span-6 flex justify-center">
            <div className="relative w-full h-[360px] sm:h-[420px] lg:h-[400px] xl:h-[460px] rounded-[40px] rounded-br-[100px] rounded-tl-[100px] overflow-hidden shadow-2xl border-4 border-white bg-slate-100">
              <img
                src="https://pub-735dbd7583d74ad5949115d6fdf77023.r2.dev/About%20Us%20Page/Our%20Project%20Workflow.png"
                alt="Structured Workflow Laptop Screen"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 via-transparent to-transparent pointer-events-none" />
            </div>
          </div>
        </div>

        {/* ─── WORKFLOW CARDS CONTAINER (10 Cards Grid on >=1280px, 3 Cards Auto-Sliding on <1280px) ─── */}
        <div className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5 lg:gap-6 items-stretch">
            {visibleSteps.map((step) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.num}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                  className="bg-white p-5 sm:p-6 rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl hover:border-[#0093cb]/30 transition-all duration-300 flex flex-col justify-between relative group cursor-pointer"
                >
                  {/* Step Number Circle */}
                  <div className="absolute -top-3 -left-3 w-8 h-8 rounded-full bg-gradient-to-r from-[#0093cb] to-[#00a65d] text-white font-extrabold text-xs flex items-center justify-center shadow-md z-10">
                    {step.num}
                  </div>

                  <div className="space-y-3">
                    {/* Icon Container */}
                    <div className={`w-11 h-11 rounded-2xl ${step.bgColor} border ${step.borderColor} flex items-center justify-center`}>
                      <Icon className={`w-5 h-5 ${step.color}`} />
                    </div>

                    <h4 className="font-extrabold text-xs sm:text-sm text-slate-800 leading-snug uppercase tracking-tight">
                      {step.title}
                    </h4>

                    <p className="text-slate-500 text-[11px] sm:text-xs leading-relaxed font-medium line-clamp-3">
                      {step.desc}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Auto-Slide Indicator Dots (only on <1280px) */}
          {!isDesktopXl && (
            <div className="flex justify-center items-center gap-3 pt-2">
              <div className="flex items-center gap-1.5">
                {steps.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSlideIndex(idx)}
                    className={`transition-all duration-300 rounded-full ${
                      slideIndex % steps.length === idx
                        ? "w-6 h-2 bg-[#0093cb]"
                        : "w-2 h-2 bg-slate-300 hover:bg-slate-400"
                    }`}
                    aria-label={`Slide to step ${idx + 1}`}
                  />
                ))}
              </div>
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                0{(slideIndex % steps.length) + 1} / 10 &bull; Auto Sliding
              </span>
            </div>
          )}
        </div>

     

      </div>
    </section>
  );
}
