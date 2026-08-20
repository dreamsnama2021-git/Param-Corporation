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
                className="bg-white p-3 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow duration-300 flex items-center justify-center text-center h-[120px] sm:h-[130px] overflow-hidden"
              >
                {c.logo ? (
                  <img
                    src={c.logo}
                    alt={c.name}
                    className="max-h-[85%] max-w-[85%] object-contain filter grayscale hover:grayscale-0 transition-all duration-300 scale-110 sm:scale-125"
                  />
                ) : (
                  <div className={`text-lg tracking-wider uppercase ${c.fallbackColor}`}>
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