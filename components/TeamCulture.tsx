"use client";

import React from "react";
import {
  Users,
  Lightbulb,
  Award,
  ShieldCheck,
  TrendingUp,
  Sparkles,
  BookOpen,
  Smile,
} from "lucide-react";

export default function TeamCulture() {
  const cultures = [
    {
      title: "Collaboration",
      desc: "We work together, share ideas and create better solutions.",
      icon: Users,
      color: "text-[#0093cb]",
      bgColor: "bg-[#0093cb]/5",
      borderColor: "border-[#0093cb]/20",
    },
    {
      title: "Innovation",
      desc: "We encourage creativity and embrace new ideas to stay ahead.",
      icon: Lightbulb,
      color: "text-[#00a65d]",
      bgColor: "bg-[#00a65d]/5",
      borderColor: "border-[#00a65d]/20",
    },
    {
      title: "Excellence",
      desc: "We are committed to delivering the highest quality in everything we do.",
      icon: Award,
      color: "text-[#003b46]",
      bgColor: "bg-[#003b46]/5",
      borderColor: "border-[#003b46]/20",
    },
    {
      title: "Integrity",
      desc: "We operate with honesty, transparency and respect in every interaction.",
      icon: ShieldCheck,
      color: "text-[#00a65d]",
      bgColor: "bg-[#00a65d]/5",
      borderColor: "border-[#00a65d]/20",
    },
    {
      title: "Growth",
      desc: "We learn, improve and grow together as individuals and as a company.",
      icon: TrendingUp,
      color: "text-[#0093cb]",
      bgColor: "bg-[#0093cb]/5",
      borderColor: "border-[#0093cb]/20",
    },
  ];

  const collage = [
    {
      title: "One Team. One Goal.",
      icon: Users,
      image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&q=80",
    },
    {
      title: "Celebrating Together.",
      icon: Sparkles,
      image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800&q=80",
    },
    {
      title: "Learning Everyday.",
      icon: BookOpen,
      image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800&q=80",
    },
    {
      title: "Work Culture That Inspires.",
      icon: Smile,
      image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&q=80",
    },
  ];

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-white relative overflow-hidden border-b border-slate-100">
      {/* Background Blurs */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-[#0093cb]/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-[#00a65d]/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16 lg:space-y-24">
        
        {/* HERO HEADER */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Block */}
          <div className="lg:col-span-6 space-y-6">
            <div>
              <span className="text-sm font-bold uppercase tracking-widest text-[#0093cb] block mb-2">
                Our Foundation
              </span>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-800 tracking-tight leading-tight">
                Team & <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#0093cb] to-[#00a65d]">Culture</span>
              </h2>
              <div className="h-1 w-24 bg-gradient-to-r from-[#0093cb] to-[#00a65d] mt-4 rounded-full" />
            </div>

            <h3 className="text-xl sm:text-2xl font-bold text-[#0093cb]">
              People. Passion. Purpose.
            </h3>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              At Param Corporation, our strength lies in our people. A team of creative thinkers,
              dedicated professionals, and problem solvers who come together every day with a
              shared purpose - to create meaningful solutions and deliver excellence.
            </p>

            {/* Shaded Callout Box */}
            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-100 flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-[#0093cb]/10 flex items-center justify-center shrink-0">
                <Users className="w-6 h-6 text-[#0093cb]" />
              </div>
              <p className="text-slate-700 text-xs sm:text-sm font-semibold leading-relaxed">
                We believe in collaboration, respect, openness, and continuous growth.{" "}
                <span className="text-[#0093cb] block sm:inline">Together, we achieve more.</span>
              </p>
            </div>
          </div>

          {/* Right Block Image */}
          <div className="lg:col-span-6 flex justify-center relative">
            <div className="relative w-full max-w-[500px] aspect-[4/3] rounded-[40px] rounded-br-[100px] rounded-tl-[100px] overflow-hidden shadow-2xl border-4 border-white bg-slate-100">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80"
                alt="Param Team Collaborating"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/30 via-transparent to-transparent pointer-events-none" />
              
              {/* Motto Badge overlay */}
              <div className="absolute bottom-6 right-6 bg-white/90 backdrop-blur-sm shadow-md rounded-2xl border border-white/20 p-4 max-w-[200px]">
                <h4 className="text-xs font-black text-slate-800 tracking-wider uppercase leading-none">
                  Empowering Ideas.
                </h4>
                <p className="text-[10px] font-bold text-[#00a65d] uppercase tracking-wider mt-1.5 leading-none">
                  Creating Impact.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* ─── OUR CULTURE CARDS ──────────────────────────────────────────── */}
        <div className="space-y-10">
          <div className="text-center">
            <h3 className="text-3xl font-extrabold text-slate-800 tracking-tight">
              Our Culture
            </h3>
            <div className="h-0.5 w-16 bg-[#0093cb] mx-auto mt-3 rounded-full" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {cultures.map((c, idx) => {
              const Icon = c.icon;
              return (
                <div
                  key={idx}
                  className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl hover:border-[#0093cb]/30 hover:-translate-y-1.5 transition-all duration-300 flex flex-col items-center text-center space-y-4 cursor-pointer"
                >
                  <div className={`p-3 rounded-xl ${c.bgColor} border ${c.borderColor}`}>
                    <Icon className={`w-6 h-6 ${c.color}`} />
                  </div>
                  <h4 className="font-extrabold text-sm sm:text-base text-slate-800 tracking-tight">
                    {c.title}
                  </h4>
                  <p className="text-slate-500 text-xs sm:text-sm xl:text-base leading-relaxed">
                    {c.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* ─── DAILY LIFE COLLAGE ────────────────────────────────────────── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0 rounded-[32px] overflow-hidden shadow-lg border border-slate-100">
          {collage.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="relative h-[320px] sm:h-[360px] w-full overflow-hidden group"
              >
                {/* Background Image - full height */}
                <div className="absolute inset-0 w-full h-full">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                
                {/* Dark Overlay Gradient - full height */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/10 pointer-events-none" />

                {/* Content Overlay - positioned at bottom */}
                <div className="absolute bottom-0 left-0 right-0 z-10 flex flex-col items-center justify-end space-y-2 text-white p-6 pb-8">
                  <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center shadow-lg border border-white/10">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="font-extrabold text-sm sm:text-base leading-snug text-center max-w-[200px]">
                    {item.title}
                  </h4>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}