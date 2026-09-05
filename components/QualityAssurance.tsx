"use client";

import React from "react";
import { motion } from "framer-motion";
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
} from "lucide-react";

export default function QualityAssurance() {
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

  // Auto-slide 2 cards upfront at a time on screens < 1280px
  React.useEffect(() => {
    if (isDesktopXl) return;
    const timer = setInterval(() => {
      setSlideIndex((prev) => (prev + 2 >= practices.length ? 0 : prev + 2));
    }, 3800);
    return () => clearInterval(timer);
  }, [isDesktopXl, practices.length]);

  const visiblePractices = isDesktopXl ? practices : practices.slice(slideIndex, slideIndex + 2);

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

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
        
        {/* ─── REDESIGNED QUALITY ASSURANCE HERO & PRACTICES ─────────────────── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Title, Intro & Practices Grid (Span 6) */}
          <div className="lg:col-span-6 space-y-6">
            <div className="space-y-3 text-left">
              <span className="text-xs sm:text-sm font-bold uppercase tracking-widest text-[#0093cb] block">
                Quality First
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-4xl xl:text-5xl font-black text-slate-800 tracking-tight leading-tight">
                Our <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#0093cb] to-[#00a65d]">Quality Assurance</span>
              </h2>
              <div className="h-1 w-20 bg-gradient-to-r from-[#0093cb] to-[#00a65d] rounded-full" />
              
              <p className="text-slate-600 text-xs sm:text-sm lg:text-base leading-relaxed max-w-2xl pt-1">
                We are committed to delivering products that meet the highest standards of quality, safety and reliability—every single time. Our rigorous multi-stage quality control checks ensure absolute flawlessness in design and function.
              </p>
            </div>

            {/* PRACTICES CONTAINER (All 6 Cards Grid on >=1280px, 2 Cards Auto-Sliding on <1280px) */}
            <div className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 min-h-[150px] items-stretch">
                {visiblePractices.map((item) => {
                  const Icon = item.icon;
                  return (
                    <motion.div
                      key={item.title}
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4 }}
                      className="group relative bg-white p-4.5 rounded-2xl border border-slate-100/80 shadow-sm hover:shadow-lg hover:border-[#0093cb]/20 transition-all duration-300 flex flex-col items-start text-left space-y-2.5 cursor-pointer overflow-hidden justify-center"
                    >
                      {/* Soft Brand Gradient Overlay on Hover */}
                      <div className="absolute inset-0 bg-gradient-to-br from-[#0093cb]/5 to-[#00a65d]/5 rounded-[14px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                      <div className={`p-2 rounded-xl ${item.bgColor} border ${item.borderColor} transition-all duration-300 group-hover:bg-white group-hover:scale-105 z-10`}>
                        <Icon className={`w-5 h-5 ${item.color}`} />
                      </div>
                      <h4 className="font-extrabold text-xs sm:text-sm text-slate-800 uppercase tracking-wide leading-tight z-10 transition-colors duration-300 group-hover:text-[#0093cb]">
                        {item.title}
                      </h4>
                      <p className="text-slate-500 text-[11px] sm:text-xs leading-relaxed z-10 line-clamp-3">
                        {item.desc}
                      </p>
                    </motion.div>
                  );
                })}
              </div>

              {/* Auto-Slide Dots Navigation (only on <1280px) */}
              {!isDesktopXl && (
                <div className="flex items-center gap-3 pt-1">
                  <div className="flex items-center gap-1.5">
                    {[0, 2, 4].map((pairIndex) => (
                      <button
                        key={pairIndex}
                        onClick={() => setSlideIndex(pairIndex)}
                        className={`transition-all duration-300 rounded-full ${
                          slideIndex === pairIndex
                            ? "w-7 h-2 bg-[#0093cb]"
                            : "w-2 h-2 bg-slate-300 hover:bg-slate-400"
                        }`}
                        aria-label={`Slide to group ${pairIndex / 2 + 1}`}
                      />
                    ))}
                  </div>
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                    0{slideIndex / 2 + 1} / 03 &bull; Auto Sliding
                  </span>
                </div>
              )}
            </div>
          </div>

          {/* Right Column: Enlarged Mockup Image with Quote Overlay (Span 6) */}
          <div className="lg:col-span-6 flex flex-col justify-center relative w-full h-full">
            <div className="relative w-full h-[480px] sm:h-[560px] lg:h-full lg:min-h-[620px] xl:min-h-[680px] 2xl:min-h-[720px] rounded-[40px] rounded-br-[100px] rounded-tl-[100px] overflow-hidden shadow-2xl border-4 border-white bg-slate-100 group">
              {/* Product Mockup / Testing Image */}
              <div 
                className="absolute inset-0 transition-transform duration-700 group-hover:scale-105"
                style={{ 
                  backgroundImage: 'url(https://pub-735dbd7583d74ad5949115d6fdf77023.r2.dev/About%20Us%20Page/Our%20Quality%20Assurance.png)',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat'
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent pointer-events-none" />

              {/* Glowing decorative lights */}
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-[#0093cb]/20 rounded-full blur-2xl pointer-events-none group-hover:bg-[#0093cb]/30 transition-colors duration-500" />
              <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-[#00a65d]/20 rounded-full blur-2xl pointer-events-none group-hover:bg-[#00a65d]/30 transition-colors duration-500" />

              {/* Floating Quote/Testimonial Card Overlay */}
              <div className="absolute top-6 left-6 right-6 bg-slate-900/80 backdrop-blur-md border border-white/10 rounded-2xl p-5 text-white flex flex-col gap-3 shadow-2xl z-10 transition-all duration-300 hover:bg-slate-900/90">
                <span className="text-2xl font-serif text-[#0093cb] leading-none select-none">“</span>
                <p className="text-xs sm:text-sm lg:text-sm xl:text-base text-white/95 leading-relaxed font-semibold italic">
                  Quality is not an act, it's a habit. We refine every single process—from raw material sorting to final packaging—to deliver flawless execution for leading healthcare brands.
                </p>
                <div className="flex justify-between items-center mt-1">
                  <span className="text-xs font-bold text-[#00a65d] uppercase tracking-widest">
                    Zero Error Standard
                  </span>
                  <span className="text-2xl font-serif text-[#0093cb] leading-none select-none text-right">”</span>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* ─── CERTIFICATIONS & COMMITMENT TO EXCELLENCE (Premium Redesign) ──── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          
          {/* Left Column: Certifications (Span 5) */}
          <div className="lg:col-span-5 bg-gradient-to-br from-white to-[#fafcff] rounded-[36px] p-6 sm:p-8 md:p-10 border border-slate-200/60 shadow-[0_20px_50px_rgba(0,0,0,0.03)] flex flex-col justify-between relative overflow-hidden group hover:shadow-2xl hover:border-[#0093cb]/20 transition-all duration-500 h-full">
            {/* Background Accent glow */}
            <div className="absolute -top-24 -left-24 w-48 h-48 bg-[#0093cb]/5 rounded-full blur-3xl pointer-events-none group-hover:bg-[#0093cb]/10 transition-colors duration-500" />
            
            <div className="relative z-10 mb-8">
              <span className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.2em] text-[#0093cb] block mb-2">
                Compliance & Trust
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-800 tracking-tight">
                Our <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#0093cb] to-[#00a65d]">Certifications</span>
              </h3>
              <div className="h-1 w-12 bg-gradient-to-r from-[#0093cb] to-[#00a65d] mt-3 rounded-full" />
            </div>

            <div className="relative z-10 grid grid-cols-2 gap-4 flex-grow items-center">
              {/* ISO 9001 */}
              <motion.div 
                whileHover={{ y: -5 }}
                className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm flex flex-col items-center justify-center text-center min-h-[130px] hover:shadow-[0_12px_24px_-8px_rgba(0,147,203,0.25)] hover:border-[#0093cb]/25 transition-all duration-300 cursor-pointer"
              >
                <div className="w-8 h-8 rounded-full bg-[#0093cb]/10 flex items-center justify-center mb-3">
                  <span className="text-[10px] font-black text-[#0093cb]">ISO</span>
                </div>
                <span className="text-sm sm:text-base font-extrabold text-slate-800">9001:2015</span>
                <span className="text-[10px] font-semibold text-slate-400 mt-2 leading-tight">Quality Mgmt System</span>
              </motion.div>

              {/* ISO 14001 */}
              <motion.div 
                whileHover={{ y: -5 }}
                className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm flex flex-col items-center justify-center text-center min-h-[130px] hover:shadow-[0_12px_24px_-8px_rgba(0,166,93,0.25)] hover:border-[#00a65d]/25 transition-all duration-300 cursor-pointer"
              >
                <div className="w-8 h-8 rounded-full bg-[#00a65d]/10 flex items-center justify-center mb-3">
                  <span className="text-[10px] font-black text-[#00a65d]">ISO</span>
                </div>
                <span className="text-sm sm:text-base font-extrabold text-slate-800">14001:2015</span>
                <span className="text-[10px] font-semibold text-slate-400 mt-2 leading-tight">Env Mgmt System</span>
              </motion.div>

              {/* ISO 45001 */}
              <motion.div 
                whileHover={{ y: -5 }}
                className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm flex flex-col items-center justify-center text-center min-h-[130px] hover:shadow-[0_12px_24px_-8px_rgba(0,147,203,0.25)] hover:border-[#0093cb]/25 transition-all duration-300 cursor-pointer"
              >
                <div className="w-8 h-8 rounded-full bg-[#0093cb]/10 flex items-center justify-center mb-3">
                  <span className="text-[10px] font-black text-[#0093cb]">ISO</span>
                </div>
                <span className="text-sm sm:text-base font-extrabold text-slate-800">45001:2018</span>
                <span className="text-[10px] font-semibold text-slate-400 mt-2 leading-tight">Occu Health & Safety</span>
              </motion.div>

              {/* MSME */}
              <motion.div 
                whileHover={{ y: -5 }}
                className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm flex flex-col items-center justify-center text-center min-h-[130px] hover:shadow-[0_12px_24px_-8px_rgba(0,59,70,0.2)] hover:border-[#003b46]/25 transition-all duration-300 cursor-pointer"
              >
                <div className="bg-[#003b46]/10 px-2.5 py-0.5 rounded-full mb-3 text-[10px] font-black text-[#003b46] tracking-wider uppercase leading-none">MSME</div>
                <span className="text-sm sm:text-base font-extrabold text-slate-800">GOVT. OF INDIA</span>
                <span className="text-[10px] font-semibold text-slate-400 mt-2 leading-tight">Registered Vendor</span>
              </motion.div>

              {/* ZED Bronze */}
              <motion.div 
                whileHover={{ y: -5 }}
                className="col-span-2 bg-white p-5 rounded-2xl border border-slate-100 shadow-sm flex flex-row items-center justify-center gap-6 min-h-[90px] hover:shadow-[0_12px_24px_-8px_rgba(184,115,51,0.25)] hover:border-[#b87333]/25 transition-all duration-300 cursor-pointer"
              >
                <div className="flex flex-col items-center sm:items-start">
                  <span className="text-xs font-black text-[#b87333] tracking-wide uppercase leading-none">ZED Certified</span>
                  <span className="text-[10px] font-semibold text-slate-400 mt-1 leading-none">Sustainable Enterprise</span>
                </div>
                <div className="bg-[#b87333]/15 text-[#b87333] text-[10px] font-extrabold px-3 py-1 rounded-full shadow-inner">
                  BRONZE CATEGORY
                </div>
              </motion.div>
            </div>
          </div>

          {/* Right Column: Commitment to Excellence (Span 7) */}
          <div className="lg:col-span-7 bg-gradient-to-br from-white to-[#fcfdfa] rounded-[36px] p-6 sm:p-8 md:p-10 border border-slate-200/60 shadow-[0_20px_50px_rgba(0,0,0,0.03)] flex flex-col justify-between relative overflow-hidden group hover:shadow-2xl hover:border-[#00a65d]/20 transition-all duration-500 h-full">
            {/* Background Accent glow */}
            <div className="absolute -bottom-24 -right-24 w-48 h-48 bg-[#00a65d]/5 rounded-full blur-3xl pointer-events-none group-hover:bg-[#00a65d]/10 transition-colors duration-500" />
            
            <div className="relative z-10 mb-8">
              <span className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.2em] text-[#00a65d] block mb-2">
                Execution Quality
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-800 tracking-tight">
                Our Commitment to <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#00a65d] to-[#0093cb]">Excellence</span>
              </h3>
              <div className="h-1 w-12 bg-gradient-to-r from-[#00a65d] to-[#0093cb] mt-3 rounded-full" />
            </div>

            <div className="relative z-10 grid grid-cols-1 gap-4 flex-grow">
              {commitments.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={idx}
                    whileHover={{ x: 6 }}
                    className="group/item flex items-center gap-4 bg-white/70 backdrop-blur-md p-4 sm:p-4.5 rounded-2xl border border-slate-100/80 shadow-sm hover:shadow-[0_8px_20px_-6px_rgba(0,147,203,0.15)] hover:border-[#0093cb]/20 hover:bg-white transition-all duration-300 cursor-default"
                  >
                    {/* Icon wrapper */}
                    <div className="w-12 h-12 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center z-10 transition-transform duration-300 group-hover/item:scale-105 group-hover/item:bg-[#0093cb]/10 text-slate-600 group-hover/item:text-[#0093cb] shrink-0">
                      <Icon className="w-5.5 h-5.5 transition-colors" />
                    </div>

                    {/* Content */}
                    <div className="text-left min-w-0 flex-grow">
                      <h4 className="font-extrabold text-sm sm:text-base text-slate-800 tracking-tight leading-snug group-hover/item:text-[#0093cb] transition-colors uppercase">
                        {item.title}
                      </h4>
                      <p className="text-slate-500 text-xs sm:text-[13px] leading-snug mt-0.5 font-medium">
                        {item.desc}
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
