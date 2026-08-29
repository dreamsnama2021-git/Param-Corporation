"use client";

import React, { useState, useEffect } from "react";
import {
  Pill,
  Stethoscope,
  Activity,
  Leaf,
  Shield,
  PawPrint,
  Microscope,
  Smile,
} from "lucide-react";

export default function IndustriesWeServe() {
  const [slideIndex, setSlideIndex] = useState(0);

  const industries = [
    {
      title: "Pharma Brand",
      desc: "Specialized engagement tools, visual aids, and promotional items crafted specifically for pharma marketing.",
      icon: Pill,
      image: "https://pub-735dbd7583d74ad5949115d6fdf77023.r2.dev/Banners/Industries%20We%20Serve/PHARMA.png",
      color: "text-[#0093cb]",
      borderColor: "border-[#0093cb]/20",
    },
    {
      title: "Hospitals",
      desc: "Patient education models, awareness tools, and hospital branding merchandise that enhance patient trust.",
      icon: Stethoscope,
      image: "https://pub-735dbd7583d74ad5949115d6fdf77023.r2.dev/Banners/Industries%20We%20Serve/HOSPITALS.png",
      color: "text-[#00a8b5]",
      borderColor: "border-[#00a8b5]/20",
    },
    {
      title: "Medical Devices",
      desc: "Scientific models, demonstration aids, and custom tech gifts that showcase device innovation.",
      icon: Activity,
      image: "https://pub-735dbd7583d74ad5949115d6fdf77023.r2.dev/Banners/Industries%20We%20Serve/MEDICAL%20DEVICE.png",
      color: "text-[#00a65d]",
      borderColor: "border-[#00a65d]/20",
    },
    {
      title: "Ayurveda & Herbals",
      desc: "Natural, eco-friendly, and wellness-centric promotional products aligned with traditional healing.",
      icon: Leaf,
      image: "https://pub-735dbd7583d74ad5949115d6fdf77023.r2.dev/Banners/Industries%20We%20Serve/AYURVEDA.png",
      color: "text-[#8ac926]",
      borderColor: "border-[#8ac926]/20",
    },
    {
      title: "Nutraceuticals",
      desc: "Modern, lifestyle-focused promotional merchandise that highlights health, fitness, and nutrition.",
      icon: Shield,
      image: "https://pub-735dbd7583d74ad5949115d6fdf77023.r2.dev/Banners/Industries%20We%20Serve/NUTRACEUTICALS.png",
      color: "text-[#003b46]",
      borderColor: "border-[#003b46]/20",
    },
    {
      title: "Animal Health",
      desc: "Customized promotional items tailored for veterinary professionals and livestock health brands.",
      icon: PawPrint,
      image: "https://pub-735dbd7583d74ad5949115d6fdf77023.r2.dev/Banners/Industries%20We%20Serve/ChatGPT%20Image%20Aug%2026%2C%202026%2C%2003_36_40%20PM.png",
      color: "text-[#003b46]",
      borderColor: "border-[#003b46]/20",
    },
    {
      title: "Diagnostics",
      desc: "Supporting diagnostic brands with impactful communication and educational solutions.",
      icon: Microscope,
      image: "/industry-we-cater/LABORAORATIES.jpg.jpeg",
      color: "text-[#00a65d]",
      borderColor: "border-[#00a65d]/20",
    },
    {
      title: "Wellness",
      desc: "Encouraging well-being and lifestyle awareness through thoughtful brand experiences.",
      icon: Smile,
      image: "https://pub-735dbd7583d74ad5949115d6fdf77023.r2.dev/Banners/Industries%20We%20Serve/ChatGPT%20Image%20Aug%2026%2C%202026%2C%2003_36_23%20PM.png",
      color: "text-[#0093cb]",
      borderColor: "border-[#0093cb]/20",
    },
  ];

  // Auto-slide 3 cards upfront at a time
  useEffect(() => {
    const timer = setInterval(() => {
      setSlideIndex((prev) => (prev + 1 >= industries.length ? 0 : prev + 1));
    }, 4000);
    return () => clearInterval(timer);
  }, [industries.length]);

  const visibleIndustries = [
    industries[slideIndex % industries.length],
    industries[(slideIndex + 1) % industries.length],
    industries[(slideIndex + 2) % industries.length],
  ];

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-white relative overflow-hidden border-b border-slate-100">
      {/* Decorative Blur Backgrounds */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-[#0093cb]/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-[#00a65d]/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12 lg:space-y-16">
        
        {/* HEADER */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-8 space-y-4">
            <div>
              <span className="text-xs sm:text-sm font-bold uppercase tracking-widest text-[#0093cb] block mb-2">
                Industry Presence
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-4xl xl:text-5xl font-black text-slate-800 tracking-tight leading-tight">
                Industries <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#0093cb] to-[#00a65d]">We Serve</span>
              </h2>
              <div className="h-1 w-20 bg-gradient-to-r from-[#0093cb] to-[#00a65d] mt-3 rounded-full" />
            </div>

            <p className="text-slate-600 text-xs sm:text-sm lg:text-base leading-relaxed max-w-3xl">
              We create innovative, customized and impactful solutions for a wide range of industries
              that are shaping a healthier and better tomorrow.
            </p>
          </div>
        </div>

        {/* 3 FLIP CARDS UPFRONT + AUTO SLIDE */}
        <div className="space-y-4">
          <div className="flex sm:grid sm:grid-cols-3 gap-4 lg:gap-6 xl:gap-8 overflow-x-auto sm:overflow-visible snap-x snap-mandatory scrollbar-hide pb-4 sm:pb-0 -mx-4 px-4 sm:mx-0 sm:px-0">
            {visibleIndustries.map((ind) => {
              const Icon = ind.icon;
              return (
                <div key={ind.title} className="flip-card-container snap-center shrink-0 w-[75vw] max-w-[280px] sm:w-auto sm:max-w-none h-[300px] sm:h-[280px] lg:h-[280px] xl:h-[320px] cursor-pointer">
                  <div className="flip-card w-full h-full relative transition-transform duration-700 ease-out transform-style-3d">
                    
                    {/* Front Side */}
                    <div
                      className="flip-card-front absolute inset-0 w-full h-full rounded-2xl lg:rounded-3xl border border-slate-100 overflow-hidden shadow-sm bg-cover bg-center bg-no-repeat backface-hidden text-white flex flex-col justify-end p-5 lg:p-6"
                      style={{ backgroundImage: `url("${ind.image}")` }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10 pointer-events-none" />
                      
                      <div className="relative z-20 flex items-center gap-3">
                        <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-black/40 backdrop-blur-md border border-white/20 flex items-center justify-center shadow-lg shrink-0">
                          <Icon className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                        </div>
                        <h3 className="text-xs sm:text-sm font-black uppercase tracking-wider text-white drop-shadow-md">
                          {ind.title}
                        </h3>
                      </div>
                    </div>

                    {/* Back Side */}
                    <div className="flip-card-back absolute inset-0 w-full h-full rounded-2xl lg:rounded-3xl border border-slate-100 p-6 sm:p-8 flex flex-col items-center justify-center text-center shadow-lg bg-slate-50 rotate-y-180 backface-hidden">
                      <div className="absolute inset-0 bg-gradient-to-br from-white to-slate-50/50 pointer-events-none rounded-2xl lg:rounded-3xl" />
                      
                      <div className="relative z-10 space-y-3 sm:space-y-4">
                        <span className={`text-[9px] font-bold uppercase tracking-widest ${ind.color} bg-slate-100 px-3 py-1 rounded-full border ${ind.borderColor} inline-block`}>
                          Overview
                        </span>
                        <h4 className={`text-sm sm:text-base font-extrabold ${ind.color} uppercase tracking-tight`}>
                          {ind.title}
                        </h4>
                        <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-medium">
                          {ind.desc}
                        </p>
                      </div>
                    </div>

                  </div>
                </div>
              );
            })}
          </div>

          {/* Auto-Slide Indicator Dots */}
          <div className="hidden sm:flex justify-center items-center gap-3 pt-2">
            <div className="flex items-center gap-1.5">
              {industries.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setSlideIndex(idx)}
                  className={`transition-all duration-300 rounded-full ${
                    slideIndex % industries.length === idx
                      ? "w-6 h-2 bg-[#0093cb]"
                      : "w-2 h-2 bg-slate-300 hover:bg-slate-400"
                  }`}
                  aria-label={`Slide to industry ${idx + 1}`}
                />
              ))}
            </div>
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
              0{(slideIndex % industries.length) + 1} / 08 &bull; Auto Sliding
            </span>
          </div>
        </div>

      </div>

      {/* Embedded Vanilla 3D Flip Card Styles */}
      <style jsx>{`
        .flip-card-container {
          perspective: 1000px;
        }
        .transform-style-3d {
          transform-style: preserve-3d;
        }
        .backface-hidden {
          backface-visibility: hidden;
        }
        .rotate-y-180 {
          transform: rotateY(180deg);
        }
        .group:hover .flip-card,
        .flip-card-container:hover .flip-card {
          transform: rotateY(180deg);
        }
      `}</style>
    </section>
  );
}
