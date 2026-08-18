"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  ShieldCheck,
  Users,
  TrendingUp,
  Target,
  Star,
} from "lucide-react";

export default function ClientSection() {
  const clients = [
    {
      name: "Sun Pharma",
      logo: "https://medipride.org/wp-content/uploads/2026/01/Lgo-1_page-0013-scaled.jpg",
    },
    {
      name: "Cipla",
      logo: "https://medipride.org/wp-content/uploads/2026/01/Lgo-1_page-0012-scaled.jpg",
    },
    {
      name: "Alkem",
      logo: "https://medipride.org/wp-content/uploads/2026/01/Lgo-1_page-0011-scaled.jpg",
    },
    {
      name: "Alembic",
      fallbackText: "Alembic",
      fallbackColor: "text-red-600 font-extrabold",
    },
    {
      name: "Ipca",
      fallbackText: "ipca",
      fallbackColor: "text-[#0093cb] font-black lowercase italic",
    },
    {
      name: "Ajanta",
      logo: "https://paramcorp.in/wp-content/uploads/2025/01/Untitled-design-2.png",
    },
    {
      name: "Mankind",
      logo: "https://paramcorp.in/wp-content/uploads/2025/01/Untitled-design-1.png",
    },
    {
      name: "Zydus",
      fallbackText: "zydus",
      fallbackColor: "text-sky-500 font-black tracking-tighter italic",
    },
    {
      name: "Lupin",
      logo: "https://medipride.org/wp-content/uploads/2026/01/Lgo-1_page-0007-scaled.jpg",
    },
    {
      name: "Glenmark",
      fallbackText: "GLENMARK",
      fallbackColor: "text-red-700 font-black tracking-widest",
    },
    {
      name: "P&G",
      fallbackText: "P&G",
      fallbackColor: "text-blue-800 font-black italic",
    },
    {
      name: "Torrent",
      logo: "https://paramcorp.in/wp-content/uploads/2025/01/Untitled-design.png",
    },
  ];

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-white relative overflow-hidden border-b border-slate-100">
      {/* Decorative Blurs */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-[#0093cb]/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-[#00a65d]/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16 lg:space-y-24">
        
        {/* ─── TWO-COLUMN HERO HEADER ──────────────────────────────────────── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Text */}
          <div className="lg:col-span-6 space-y-6">
            <div>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-800 tracking-tight leading-tight">
                Trusted by <span className="text-[#0093cb]">Leaders.</span><br />
                Driven by <span className="text-[#00a65d]">Impact.</span>
              </h2>
              {/* Divider */}
              <div className="h-1 w-24 bg-gradient-to-r from-[#0093cb] to-[#00a65d] mt-4 rounded-full" />
            </div>

            <h3 className="text-lg sm:text-xl font-bold text-[#0093cb] leading-snug">
              Strong partnerships. Meaningful results.
            </h3>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              We are privileged to collaborate with some of the most respected names in the pharmaceutical
              and healthcare industry. Their trust inspires us to deliver innovative solutions that create value
              and drive success.
            </p>
          </div>

          {/* Right Visual Image */}
          <div className="lg:col-span-6 flex justify-center relative">
            <div className="relative w-full max-w-[500px] aspect-[4/3] rounded-[40px] rounded-br-[100px] rounded-tl-[100px] overflow-hidden shadow-2xl border-4 border-white bg-slate-100">
              <img
                src="https://images.unsplash.com/photo-1573164713988-8665fc963095?w=800&q=80"
                alt="Partnership Handshake"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/30 via-transparent to-transparent pointer-events-none" />
              
              {/* Circle trust overlay icons */}
              <div className="absolute top-6 left-6 w-10 h-10 rounded-full bg-white/95 shadow-md flex items-center justify-center border border-slate-100">
                <ShieldCheck className="w-5 h-5 text-[#0093cb]" />
              </div>
              <div className="absolute top-20 right-6 w-10 h-10 rounded-full bg-white/95 shadow-md flex items-center justify-center border border-slate-100">
                <Users className="w-5 h-5 text-[#00a65d]" />
              </div>
              <div className="absolute bottom-20 left-10 w-10 h-10 rounded-full bg-white/95 shadow-md flex items-center justify-center border border-slate-100">
                <TrendingUp className="w-5 h-5 text-[#0093cb]" />
              </div>
              <div className="absolute bottom-6 right-20 w-10 h-10 rounded-full bg-white/95 shadow-md flex items-center justify-center border border-slate-100">
                <Target className="w-5 h-5 text-[#00a65d]" />
              </div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/90 shadow-lg flex items-center justify-center border border-slate-100">
                <Star className="w-6 h-6 text-amber-500 fill-amber-500" />
              </div>
            </div>
          </div>
        </div>

        {/* ─── OUR ESTEEMED CLIENTS GRID ───────────────────────────────────── */}
        <div className="space-y-10">
          <div className="text-center">
            <h3 className="text-3xl font-extrabold text-slate-800 tracking-tight">
              Our Esteemed Clients
            </h3>
            <div className="h-0.5 w-16 bg-[#0093cb] mx-auto mt-3 rounded-full" />
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-6">
            {clients.map((c, idx) => (
              <div
                key={idx}
                className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow duration-300 flex items-center justify-center text-center h-[100px] overflow-hidden"
              >
                {c.logo ? (
                  <img
                    src={c.logo}
                    alt={c.name}
                    className="max-h-full max-w-full object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                  />
                ) : (
                  <div className={`text-base tracking-wider uppercase ${c.fallbackColor}`}>
                    {c.fallbackText}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}