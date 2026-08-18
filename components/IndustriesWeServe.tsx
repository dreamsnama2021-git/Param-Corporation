"use client";

import React from "react";
import {
  Pill,
  Heart,
  Building2,
  Stethoscope,
  Salad,
  PawPrint,
  Microscope,
  Smile,
} from "lucide-react";

export default function IndustriesWeServe() {
  const industries = [
    {
      title: "Pharmaceutical",
      desc: "Helping pharma brands strengthen brand recall, doctor engagement and scientific communication.",
      icon: Pill,
      image: "https://pub-735dbd7583d74ad5949115d6fdf77023.r2.dev/Final%20Edit%20Images/21.png",
      color: "text-[#0093cb]",
      borderColor: "border-[#0093cb]/20",
    },
    {
      title: "Healthcare",
      desc: "Supporting healthcare brands with patient education and awareness driven solutions.",
      icon: Heart,
      image: "https://pub-735dbd7583d74ad5949115d6fdf77023.r2.dev/Final%20Edit%20Images/30.png",
      color: "text-[#00a65d]",
      borderColor: "border-[#00a65d]/20",
    },
    {
      title: "Hospitals",
      desc: "Building trust and strengthening patient relationships with meaningful touchpoints.",
      icon: Building2,
      image: "https://pub-735dbd7583d74ad5949115d6fdf77023.r2.dev/Final%20Edit%20Images/22.png",
      color: "text-[#003b46]",
      borderColor: "border-[#003b46]/20",
    },
    {
      title: "Medical Devices",
      desc: "Empowering device companies with training tools and clinical education aids.",
      icon: Stethoscope,
      image: "https://pub-735dbd7583d74ad5949115d6fdf77023.r2.dev/Final%20Edit%20Images/36.png",
      color: "text-[#0093cb]",
      borderColor: "border-[#0093cb]/20",
    },
    {
      title: "Nutrition",
      desc: "Promoting healthier lives with engaging brand reminders and awareness initiatives.",
      icon: Salad,
      image: "https://pub-735dbd7583d74ad5949115d6fdf77023.r2.dev/Final%20Edit%20Images/58.png",
      color: "text-[#00a65d]",
      borderColor: "border-[#00a65d]/20",
    },
    {
      title: "Veterinary",
      desc: "Partnering with veterinary brands to support animal health and practitioner engagement.",
      icon: PawPrint,
      image: "https://pub-735dbd7583d74ad5949115d6fdf77023.r2.dev/Final%20Edit%20Images/31.png",
      color: "text-[#003b46]",
      borderColor: "border-[#003b46]/20",
    },
    {
      title: "Diagnostics",
      desc: "Supporting diagnostic brands with impactful communication and educational solutions.",
      icon: Microscope,
      image: "https://pub-735dbd7583d74ad5949115d6fdf77023.r2.dev/Final%20Edit%20Images/27.png",
      color: "text-[#00a65d]",
      borderColor: "border-[#00a65d]/20",
    },
    {
      title: "Wellness",
      desc: "Encouraging well-being and lifestyle awareness through thoughtful brand experiences.",
      icon: Smile,
      image: "https://pub-735dbd7583d74ad5949115d6fdf77023.r2.dev/Final%20Edit%20Images/25.png",
      color: "text-[#0093cb]",
      borderColor: "border-[#0093cb]/20",
    },
  ];

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-white relative overflow-hidden border-b border-slate-100">
      {/* Decorative Blur Backgrounds */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-[#0093cb]/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-[#00a65d]/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16 lg:space-y-20">
        
        {/* HEADER */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-8 space-y-5">
            <div>
              <span className="text-sm font-bold uppercase tracking-widest text-[#0093cb] block mb-2">
                Industry Presence
              </span>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-800 tracking-tight leading-tight">
                Industries <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#0093cb] to-[#00a65d]">We Serve</span>
              </h2>
              <div className="h-1 w-24 bg-gradient-to-r from-[#0093cb] to-[#00a65d] mt-4 rounded-full" />
            </div>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-3xl">
              We create innovative, customized and impactful solutions for a wide range of industries
              that are shaping a healthier and better tomorrow.
            </p>
          </div>
        </div>

        {/* 8 FLIP CARDS GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {industries.map((ind, idx) => {
            const Icon = ind.icon;
            return (
              <div key={idx} className="flip-card-container w-full h-[360px] cursor-pointer">
                <div className="flip-card w-full h-full relative transition-transform duration-700 ease-out transform-style-3d">
                  
                  {/* Front Side: Only Image */}
                  <div className="flip-card-front absolute w-full h-full rounded-3xl border border-slate-100 overflow-hidden shadow-sm bg-white backface-hidden">
                    <img
                      src={ind.image}
                      alt={ind.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/20 to-transparent pointer-events-none" />
                  </div>

                  {/* Back Side: The Content */}
                  <div className="flip-card-back absolute w-full h-full rounded-3xl border border-slate-100 p-6 flex flex-col items-center justify-center text-center shadow-lg bg-slate-50 rotate-y-180 backface-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-white to-slate-50/50 pointer-events-none rounded-3xl" />
                    
                    <div className="relative z-10 space-y-4">
                      {/* Icon */}
                      <div className={`w-14 h-14 rounded-full bg-slate-100 border ${ind.borderColor} flex items-center justify-center mx-auto shadow-sm`}>
                        <Icon className={`w-7 h-7 ${ind.color}`} />
                      </div>

                      {/* Title */}
                      <h3 className={`text-lg font-extrabold ${ind.color} tracking-tight`}>
                        {ind.title}
                      </h3>

                      {/* Description */}
                      <p className="text-slate-500 text-xs sm:text-sm leading-relaxed">
                        {ind.desc}
                      </p>
                    </div>
                  </div>

                </div>
              </div>
            );
          })}
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
          -webkit-backface-visibility: hidden;
        }
        .rotate-y-180 {
          transform: rotateY(180deg);
        }
        .flip-card-container:hover .flip-card {
          transform: rotateY(180deg);
        }
        .flip-card {
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.03);
        }
      `}</style>
    </section>
  );
}
