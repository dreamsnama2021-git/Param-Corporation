"use client";

import React, { useState } from "react";
import { TrendingUp, Building2, Sprout, Pill, Factory, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

interface Industry {
  id: string;
  name: string;
  icon: React.ReactNode;
  growth: string;
  color: string;
  bgColor: string;
  companies: string;
  image: string;
}

const industries: Industry[] = [
  {
    id: "pharma",
    name: "Pharmaceuticals",
    icon: <Pill className="w-5 h-5" />,
    growth: "+32%",
    color: "from-emerald-500 to-teal-600",
    bgColor: "bg-emerald-50",
    companies: "500+ Companies",
    image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=600&h=400&fit=crop"
  },
  {
    id: "agro",
    name: "Agro & Farming",
    icon: <Sprout className="w-5 h-5" />,
    growth: "+28%",
    color: "from-green-500 to-lime-600",
    bgColor: "bg-green-50",
    companies: "350+ Companies",
    image: "https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=600&h=400&fit=crop"
  },
  {
    id: "manufacturing",
    name: "Manufacturing",
    icon: <Factory className="w-5 h-5" />,
    growth: "+45%",
    color: "from-blue-500 to-indigo-600",
    bgColor: "bg-blue-50",
    companies: "800+ Companies",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=400&fit=crop"
  },
  {
    id: "construction",
    name: "Construction",
    icon: <Building2 className="w-5 h-5" />,
    growth: "+38%",
    color: "from-orange-500 to-red-600",
    bgColor: "bg-orange-50",
    companies: "600+ Companies",
    image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=600&h=400&fit=crop"
  }
];

export default function FastestGrowing() {
  const [activeCard, setActiveCard] = useState<number | null>(null);

  return (
    <section className="relative py-8 2xl:py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 2xl:mb-20">
               
                 
                 <motion.h2 
                   initial={{ opacity: 0, y: 20 }}
                   whileInView={{ opacity: 1, y: 0 }}
                   viewport={{ once: true }}
                   transition={{ delay: 0.1 }}
                   className="ui-h1 font-extrabold capitalize tracking-tight mb-3 text-gray-900 mb-4"
                 >
                   Industry we<span className="text-[#0093cb]"> Cater</span>
                 </motion.h2>
                 
               </div>

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
                <div className={`relative h-64 lg:h-72 rounded-xl overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ${
                  activeCard === index ? "shadow-xl -translate-y-1" : "shadow-sm"
                }`}>
                  {/* Background Image */}
                  <Image
                    src={industry.image}
                    alt={industry.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    sizes="(max-width: 768px) 50vw, 25vw"
                  />
                  
                  {/* Gradient Overlays */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${industry.color} opacity-20`} />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                  
                  {/* Content */}
                  <div className="relative h-full flex flex-col justify-end p-4 lg:p-5">
                    {/* Icon */}
                    <div className="absolute top-4 left-4">
                      <div className="p-2.5 rounded-lg bg-white/20 backdrop-blur-md">
                        <div className="text-white">
                          {industry.icon}
                        </div>
                      </div>
                    </div>

                    {/* Bottom Content */}
                    <div className="mb-2">
                      <h3 className="text-lg 2xl:text-xl font-semibold text-white mb-1">
                        {industry.name}
                      </h3>
                    
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