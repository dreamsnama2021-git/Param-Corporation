"use client";

import React from "react";
import {
  ClipboardCheck,
  Settings,
  Cpu,
  Search,
  ShieldCheck,
  Truck,
  CheckCircle2,
  Users,
  RefreshCw,
  Award,
  Leaf,
  Handshake,
  ArrowRight,
} from "lucide-react";

export default function QualityAssurance() {
  const practices = [
    {
      title: "Raw Material Inspection",
      desc: "Careful selection and inspection of raw materials to ensure durability and safety.",
      icon: ClipboardCheck,
      color: "text-[#0093cb]",
      bgColor: "bg-[#0093cb]/5",
      borderColor: "border-[#0093cb]/20",
    },
    {
      title: "In-Process Quality Checks",
      desc: "Multiple quality checks at every stage of production for consistent results.",
      icon: Settings,
      color: "text-[#0093cb]",
      bgColor: "bg-[#0093cb]/5",
      borderColor: "border-[#0093cb]/20",
    },
    {
      title: "Precision Manufacturing",
      desc: "Advanced machines and skilled experts ensure precision in every product.",
      icon: Cpu,
      color: "text-[#00a65d]",
      bgColor: "bg-[#00a65d]/5",
      borderColor: "border-[#00a65d]/20",
    },
    {
      title: "Final Quality Inspection",
      desc: "Every product goes through rigorous final inspection before packaging.",
      icon: Search,
      color: "text-[#0093cb]",
      bgColor: "bg-[#0093cb]/5",
      borderColor: "border-[#0093cb]/20",
    },
    {
      title: "Compliance & Safety",
      desc: "We comply with industry standards and ensure product safety and reliability.",
      icon: ShieldCheck,
      color: "text-[#00a65d]",
      bgColor: "bg-[#00a65d]/5",
      borderColor: "border-[#00a65d]/20",
    },
    {
      title: "On-Time, Every Time",
      desc: "Reliable processes and systematic planning ensure timely delivery.",
      icon: Truck,
      color: "text-[#0093cb]",
      bgColor: "bg-[#0093cb]/5",
      borderColor: "border-[#0093cb]/20",
    },
  ];

  const steps = [
    {
      num: "01",
      title: "Raw Material Selection",
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=300&q=80",
    },
    {
      num: "02",
      title: "In-Process Inspection",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=300&q=80",
    },
    {
      num: "03",
      title: "Final Product Inspection",
      image: "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?w=300&q=80",
    },
    {
      num: "04",
      title: "Secure Packaging",
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=300&q=80",
    },
    {
      num: "05",
      title: "Timely Delivery",
      image: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=300&q=80",
    },
  ];

  const commitments = [
    {
      title: "Customer Satisfaction",
      desc: "We strive to exceed expectations and build lasting relationships.",
      icon: Users,
    },
    {
      title: "Continuous Improvement",
      desc: "We constantly evaluate and improve our processes and systems.",
      icon: RefreshCw,
    },
    {
      title: "Zero Compromise on Quality",
      desc: "We never compromise when it comes to the quality we deliver.",
      icon: Award,
    },
    {
      title: "Sustainable Production",
      desc: "We follow eco-friendly practices for a better tomorrow.",
      icon: Leaf,
    },
    {
      title: "Ethical Business",
      desc: "We believe in honesty, transparency and fair business practices.",
      icon: Handshake,
    },
  ];

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-white relative overflow-hidden border-b border-slate-100">
      {/* Decorative Blur Shapes */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-[#0093cb]/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-[#00a65d]/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16 lg:space-y-24">
        
        {/* ─── HERO HEADER ─────────────────────────────────────────────────── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Text Column */}
          <div className="lg:col-span-6 space-y-6">
            <div>
              <span className="text-sm font-bold uppercase tracking-widest text-[#0093cb] block mb-2">
                Quality First
              </span>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-800 tracking-tight leading-tight">
                Our <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#0093cb] to-[#00a65d]">Quality Assurance</span>
              </h2>
              {/* Divider */}
              <div className="h-1 w-24 bg-gradient-to-r from-[#0093cb] to-[#00a65d] mt-4 rounded-full" />
            </div>

            <h3 className="text-xl sm:text-2xl font-bold text-[#0093cb]">
              Quality is not an act, it's a habit.
            </h3>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              We are committed to delivering products that meet the highest standards of quality,
              safety and reliability—every single time.
            </p>
          </div>

{/* Right Image/Badge Column */}
<div className="lg:col-span-6 flex flex-col items-center relative">
  <div 
    className="relative w-full max-w-[500px] aspect-[4/3] rounded-[40px] rounded-br-[100px] rounded-tl-[100px] overflow-hidden shadow-2xl border-4 border-white"
    style={{ 
      backgroundImage: 'url(https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80)',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat'
    }}
  >
    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/30 via-transparent to-transparent pointer-events-none" />
  </div>

  {/* Quality Badge Overlay */}
  <div className="absolute bottom-[-20px] left-4 sm:left-10 bg-white shadow-xl rounded-2xl border border-slate-100 p-4 sm:p-5 flex items-center gap-4 max-w-[320px]">
    <div className="w-12 h-12 rounded-full bg-[#0093cb]/10 flex items-center justify-center shrink-0">
      <CheckCircle2 className="w-6 h-6 text-[#0093cb]" />
    </div>
    <div>
      <h4 className="font-bold text-xs sm:text-sm text-slate-800">Quality you can see.</h4>
      <p className="text-slate-500 text-[11px] sm:text-xs">Trust you can feel.</p>
    </div>
  </div>
</div>
        </div>

        {/* ─── QUALITY PRACTICES ───────────────────────────────────────────── */}
        <div className="space-y-10">
          <div className="text-center">
            <h3 className="text-3xl font-extrabold text-slate-800 tracking-tight">
              Our Quality Practices
            </h3>
            <div className="h-0.5 w-16 bg-[#0093cb] mx-auto mt-3 rounded-full" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-6">
            {practices.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="group relative bg-white p-5 rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl hover:border-[#0093cb]/30 hover:-translate-y-1.5 transition-all duration-300 flex flex-col items-center text-center space-y-3 cursor-pointer overflow-hidden"
                >
                  {/* Soft Brand Gradient Overlay on Hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#0093cb]/5 to-[#00a65d]/5 rounded-[14px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                  <div className={`p-3 rounded-xl ${item.bgColor} border ${item.borderColor} transition-all duration-300 group-hover:bg-white group-hover:scale-105 z-10`}>
                    <Icon className={`w-6 h-6 ${item.color}`} />
                  </div>
                  <h4 className="font-bold text-xs sm:text-sm text-slate-800 uppercase tracking-wide leading-tight min-h-[32px] flex items-center justify-center z-10 transition-colors duration-300 group-hover:text-[#0093cb]">
                    {item.title}
                  </h4>
                  <p className="text-slate-500 text-xs leading-relaxed z-10">
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* ─── CERTIFICATIONS & PROCESS FLOW ──────────────────────────────── */}
        <div className="grid grid-cols-1 gap-8 lg:gap-12">
          
          {/* Row 1: Certifications */}
          <div className="w-full bg-slate-50/50 rounded-3xl p-6 sm:p-8 border border-slate-100 flex flex-col justify-between">
            <div className="mb-6 flex flex-col items-center text-center">
              <h3 className="text-3xl font-extrabold text-slate-800 tracking-tight">
                Our Certifications
              </h3>
              <div className="h-0.5 w-12 bg-[#0093cb] mt-2 mx-auto rounded-full" />
            </div>

            <div className="grid grid-cols-3 sm:grid-cols-5 gap-4 items-center justify-center">
              {/* ISO 9001 */}
              <div className="bg-white p-4 rounded-xl border border-slate-200/80 shadow-sm flex flex-col items-center justify-center text-center min-h-[120px] hover:shadow-md transition-shadow">
                <span className="text-[12px] font-black text-[#0093cb] uppercase tracking-wider">ISO</span>
                <span className="text-base sm:text-lg font-black text-slate-800">9001:2015</span>
                <span className="text-[11px] font-medium text-slate-500 mt-2 leading-tight">Quality Mgmt System</span>
              </div>

              {/* ISO 14001 */}
              <div className="bg-white p-4 rounded-xl border border-slate-200/80 shadow-sm flex flex-col items-center justify-center text-center min-h-[120px] hover:shadow-md transition-shadow">
                <span className="text-[12px] font-black text-[#00a65d] uppercase tracking-wider">ISO</span>
                <span className="text-base sm:text-lg font-black text-slate-800">14001:2015</span>
                <span className="text-[11px] font-medium text-slate-500 mt-2 leading-tight">Env Mgmt System</span>
              </div>

              {/* ISO 45001 */}
              <div className="bg-white p-4 rounded-xl border border-slate-200/80 shadow-sm flex flex-col items-center justify-center text-center min-h-[120px] hover:shadow-md transition-shadow">
                <span className="text-[12px] font-black text-[#0093cb] uppercase tracking-wider">ISO</span>
                <span className="text-base sm:text-lg font-black text-slate-800">45001:2018</span>
                <span className="text-[11px] font-medium text-slate-500 mt-2 leading-tight">Occu Health & Safety</span>
              </div>

              {/* MSME */}
              <div className="bg-white p-4 rounded-xl border border-slate-200/80 shadow-sm flex flex-col items-center justify-center text-center min-h-[120px] hover:shadow-md transition-shadow">
                <div className="text-sm font-black text-[#003b46] tracking-wider uppercase leading-none">MSME</div>
                <div className="h-0.5 w-8 bg-[#00a65d] my-1.5" />
                <span className="text-[11px] font-bold text-slate-600 uppercase tracking-tighter">Govt. of India</span>
                <span className="text-[10px] font-medium text-slate-500 mt-0.5 leading-none">Registered</span>
              </div>

              {/* ZED Bronze */}
              <div className="bg-white p-4 rounded-xl border border-slate-200/80 shadow-sm flex flex-col items-center justify-center text-center min-h-[120px] hover:shadow-md transition-shadow">
                <div className="text-sm font-extrabold text-[#b87333] tracking-wide uppercase">ZED</div>
                <div className="bg-[#b87333]/15 text-[#b87333] text-[9px] font-extrabold px-2 py-1 rounded-full mt-1.5">
                  BRONZE
                </div>
                <span className="text-[10px] font-medium text-slate-500 mt-1.5 leading-none">Certified</span>
              </div>
            </div>
          </div>

   
        </div>

        {/* ─── COMMITMENT TO EXCELLENCE ────────────────────────────────────── */}
        <div className="space-y-10">
          <div className="text-center">
            <h3 className="text-3xl font-extrabold text-slate-800 tracking-tight">
              Our Commitment to Excellence
            </h3>
            <div className="h-0.5 w-16 bg-[#0093cb] mx-auto mt-3 rounded-full" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {commitments.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="group relative bg-slate-50/50 p-6 rounded-2xl border border-slate-100 flex flex-col items-center text-center space-y-4 hover:bg-white hover:shadow-xl hover:border-[#0093cb]/20 hover:-translate-y-1.5 transition-all duration-300 cursor-pointer overflow-hidden"
                >
                  {/* Soft Brand Gradient Overlay on Hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#0093cb]/5 to-[#00a65d]/5 rounded-[14px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                  <div className="w-12 h-12 rounded-full bg-[#0093cb]/10 flex items-center justify-center z-10 transition-transform duration-300 group-hover:scale-110">
                    <Icon className="w-6 h-6 text-[#0093cb]" />
                  </div>
                  <h4 className="font-bold text-sm sm:text-base text-slate-800 tracking-tight leading-snug z-10 transition-colors duration-300 group-hover:text-[#0093cb]">
                    {item.title}
                  </h4>
                  <p className="text-slate-500 text-xs sm:text-[13px] leading-relaxed z-10">
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}