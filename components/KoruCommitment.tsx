"use client";

import React from "react";
import {
  Users,
  Leaf,
  TrendingUp,
  Heart,
  Globe,
  RotateCw,
  Lightbulb,
  GraduationCap,
  Activity,
  ArrowRight,
} from "lucide-react";

export default function KoruCommitment() {
  const pillars = [
    {
      title: "Responsible Sourcing",
      desc: "We work with trusted partners and responsibly sourced materials to ensure quality with care.",
      icon: RotateCw,
      color: "text-[#0093cb]",
      bgColor: "bg-[#0093cb]/5",
      borderColor: "border-[#0093cb]/20",
    },
    {
      title: "Eco-Friendly Processes",
      desc: "We adopt sustainable manufacturing practices to reduce waste and conserve resources.",
      icon: Leaf,
      color: "text-[#00a65d]",
      bgColor: "bg-[#00a65d]/5",
      borderColor: "border-[#00a65d]/20",
    },
    {
      title: "Innovation for Good",
      desc: "We create products that educate, engage and contribute to better health outcomes.",
      icon: Lightbulb,
      color: "text-[#003b46]",
      bgColor: "bg-[#003b46]/5",
      borderColor: "border-[#003b46]/20",
    },
    {
      title: "Caring for Communities",
      desc: "We support initiatives that uplift communities and promote health and well-being.",
      icon: Heart,
      color: "text-[#00a65d]",
      bgColor: "bg-[#00a65d]/5",
      borderColor: "border-[#00a65d]/20",
    },
    {
      title: "A Greener Future",
      desc: "Small steps today, sustainable impact tomorrow. Together, we can make a difference.",
      icon: Globe,
      color: "text-[#0093cb]",
      bgColor: "bg-[#0093cb]/5",
      borderColor: "border-[#0093cb]/20",
    },
  ];

  const responsibilities = [
    {
      title: "Education Support",
      desc: "Supporting education and learning for a brighter tomorrow.",
      icon: GraduationCap,
      image: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=500&q=80",
    },
    {
      title: "Health Awareness",
      desc: "Promoting health awareness and better healthcare outreach.",
      icon: Activity,
      image: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?w=500&q=80",
    },
    {
      title: "Environment Care",
      desc: "Tree plantation drives and environmental conservation initiatives.",
      icon: Leaf,
      image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=500&q=80",
    },
    {
      title: "Community Engagement",
      desc: "Actively engaging with communities to create a positive and lasting impact.",
      icon: Users,
      image: "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=500&q=80",
    },
  ];

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-white relative overflow-hidden border-b border-slate-100">
      {/* Decorative Blurs */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-[#0093cb]/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-[#00a65d]/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16 lg:space-y-24">
        
        {/* HERO COMMITMENT */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left copy */}
          <div className="lg:col-span-6 space-y-6">
            <div>
              <span className="text-sm font-bold uppercase tracking-widest text-[#00a65d] block mb-2">
                Our Promise
              </span>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-800 tracking-tight leading-tight">
                Our Commitment <br />
                to a <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#0093cb] to-[#00a65d]">Better Tomorrow</span>
              </h2>
              <div className="h-1 w-24 bg-gradient-to-r from-[#0093cb] to-[#00a65d] mt-4 rounded-full" />
            </div>

            <h3 className="text-xl sm:text-2xl font-bold text-[#0093cb]">
              For People. For Communities. For the Planet.
            </h3>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              At Param Corporation, we believe that responsible business practices and sustainable
              thinking are essential for a brighter future. We are committed to making a positive
              impact—today and always.
            </p>
          </div>

          {/* Right graphics */}
          <div className="lg:col-span-6 w-full flex justify-center">
            {/* Image Setup */}
            <div className="relative w-full aspect-[4/3] rounded-[40px] rounded-br-[100px] rounded-tl-[100px] overflow-hidden shadow-2xl border-4 border-white bg-slate-100 group">
              <img
                src="https://images.unsplash.com/photo-1606857521015-7f9fcf423740?w=800&q=80"
                alt="Sustainable Office Products"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent pointer-events-none" />

              {/* Horizontally Aligned Labels overlay inside the image */}
              <div className="absolute bottom-6 left-6 right-6 flex flex-row flex-wrap items-center justify-center gap-3 z-10">
                {[
                  { name: "People", icon: Users, color: "text-[#0093cb]" },
                  { name: "Communities", icon: Globe, color: "text-[#00a65d]" },
                  { name: "Environment", icon: Leaf, color: "text-[#003b46]" },
                  { name: "Future", icon: TrendingUp, color: "text-[#0093cb]" },
                ].map((label, idx) => {
                  const Icon = label.icon;
                  return (
                    <div key={idx} className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/95 backdrop-blur-sm shadow-md border border-white/20 hover:scale-105 transition-transform duration-300">
                      <Icon className={`w-4 h-4 ${label.color}`} />
                      <span className="text-[10px] sm:text-xs font-black text-slate-800 uppercase tracking-wider">
                        {label.name}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* SUSTAINABILITY AT THE CORE */}
        <div className="space-y-10">
          <div className="text-center">
            <h3 className="text-3xl font-extrabold text-slate-800 tracking-tight">
              Sustainability at the Core
            </h3>
            <div className="h-0.5 w-16 bg-[#00a65d] mx-auto mt-3 rounded-full" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {pillars.map((p, idx) => {
              const Icon = p.icon;
              return (
                <div
                  key={idx}
                  className="group relative bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl hover:border-[#00a65d]/20 hover:-translate-y-1.5 transition-all duration-300 flex flex-col items-center text-center space-y-4 cursor-pointer"
                >
                  {/* Soft Gradient Overlay on Hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#0093cb]/5 to-[#00a65d]/5 rounded-[14px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                  
                  <div className={`p-3 rounded-xl ${p.bgColor} border ${p.borderColor} transition-colors duration-300 group-hover:bg-white group-hover:shadow-sm z-10`}>
                    <Icon className={`w-6 h-6 ${p.color}`} />
                  </div>
                  <h4 className="font-extrabold text-sm sm:text-base text-slate-800 tracking-tight min-h-[38px] flex items-center justify-center z-10">
                    {p.title}
                  </h4>
                  <p className="text-slate-500 text-xs sm:text-sm xl:text-base leading-relaxed z-10">
                    {p.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* OUR SOCIAL RESPONSIBILITY */}
        <div className="space-y-10">
          <div className="text-center">
            <h3 className="text-3xl font-extrabold text-slate-800 tracking-tight">
              Our Social Responsibility
            </h3>
            <div className="h-0.5 w-16 bg-[#00a65d] mx-auto mt-3 rounded-full" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {responsibilities.map((r, idx) => {
              const Icon = r.icon;
              return (
                <div
                  key={idx}
                  className="group relative bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-xl hover:border-[#00a65d]/20 hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between cursor-pointer"
                >
                  {/* Soft Gradient Overlay on Hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#00a65d]/5 via-transparent to-[#0093cb]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                  {/* Image Header */}
                  <div className="h-44 relative overflow-hidden bg-slate-50 z-10">
                    <img src={r.image} alt={r.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    <div className="absolute top-4 left-4 w-9 h-9 rounded-full bg-white/95 shadow-md flex items-center justify-center">
                      <Icon className="w-5 h-5 text-[#00a65d]" />
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-6 space-y-3 flex-1 flex flex-col justify-between z-10">
                    <div>
                      <h4 className="font-extrabold text-base text-slate-800 leading-snug group-hover:text-[#00a65d] transition-colors duration-300">
                        {r.title}
                      </h4>
                      <p className="text-slate-500 text-xs sm:text-sm leading-relaxed mt-2">
                        {r.desc}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
