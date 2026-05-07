"use client";

import React, { useState } from "react";
import { TrendingUp, Building2, Sprout, Pill, Factory, ArrowUpRight } from "lucide-react";
import Link from "next/link";

interface Industry {
  id: string;
  name: string;
  icon: React.ReactNode;
  growth: string;
  color: string;
  bgColor: string;
  companies: string;
}

const industries: Industry[] = [
  {
    id: "pharma",
    name: "Pharmaceuticals",
    icon: <Pill className="w-5 h-5" />,
    growth: "+32%",
    color: "from-emerald-500 to-teal-600",
    bgColor: "bg-emerald-50",
    companies: "500+ Companies"
  },
  {
    id: "agro",
    name: "Agro & Farming",
    icon: <Sprout className="w-5 h-5" />,
    growth: "+28%",
    color: "from-green-500 to-lime-600",
    bgColor: "bg-green-50",
    companies: "350+ Companies"
  },
  {
    id: "manufacturing",
    name: "Manufacturing",
    icon: <Factory className="w-5 h-5" />,
    growth: "+45%",
    color: "from-blue-500 to-indigo-600",
    bgColor: "bg-blue-50",
    companies: "800+ Companies"
  },
  {
    id: "construction",
    name: "Construction",
    icon: <Building2 className="w-5 h-5" />,
    growth: "+38%",
    color: "from-orange-500 to-red-600",
    bgColor: "bg-orange-50",
    companies: "600+ Companies"
  }
];

export default function FastestGrowing() {
  const [activeCard, setActiveCard] = useState<number | null>(null);

  return (
    <section className="relative py-12 lg:py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex items-center gap-3 mb-8 lg:mb-10">
          <div className="flex items-center gap-2 bg-[var(--clr-primary)]/10 px-3 py-1.5 rounded-full">
            <TrendingUp className="w-3.5 h-3.5 text-[var(--clr-primary)]" />
            <span className="text-xs font-bold text-[var(--clr-primary)] uppercase tracking-wider">
              Trending Now
            </span>
          </div>
        </div>

        <h2 className="text-2xl lg:text-3xl font-bold text-[var(--clr-text-dark)] mb-8 lg:mb-10">
          India's Fastest Growing{" "}
          <span className="bg-gradient-to-r from-[var(--clr-primary)] to-blue-600 bg-clip-text text-transparent">
            Industries
          </span>
        </h2>

        {/* Cards Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5">
          {industries.map((industry, index) => (
            <div
              key={industry.id}
              className="group relative"
              onMouseEnter={() => setActiveCard(index)}
              onMouseLeave={() => setActiveCard(null)}
            >
              <Link href={`/categories/industry/${industry.id}`}>
                <div className={`relative bg-white rounded-xl border border-gray-100 overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1 ${
                  activeCard === index ? "shadow-lg -translate-y-1" : "shadow-sm"
                }`}>
                  {/* Top Gradient Bar */}
                  <div className={`h-1.5 bg-gradient-to-r ${industry.color}`} />

                  <div className="p-4 lg:p-5">
                    {/* Icon & Growth Badge */}
                    <div className="flex items-start justify-between mb-3">
                      <div className={`p-2.5 rounded-lg ${industry.bgColor}`}>
                        <div className={`bg-gradient-to-r ${industry.color} bg-clip-text text-transparent`}>
                          {industry.icon}
                        </div>
                      </div>
                      
                      <span className={`px-2.5 py-1 rounded-full bg-gradient-to-r ${industry.color} text-white text-xs font-bold`}>
                        {industry.growth}
                      </span>
                    </div>

                    {/* Name & Companies */}
                    <h3 className="text-sm lg:text-base font-bold text-[var(--clr-text-dark)] mb-1">
                      {industry.name}
                    </h3>
                    <p className="text-xs text-gray-500 mb-3">
                      {industry.companies}
                    </p>

                    {/* CTA */}
                    <div className="flex items-center gap-1 text-xs font-semibold text-[var(--clr-primary)] group-hover:gap-2 transition-all">
                      Explore
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}