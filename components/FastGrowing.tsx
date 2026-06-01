"use client";

import React from "react";
import { 
  Pill, 
  FlaskConical, 
  Building2, 
  Car, 
  Wallet, 
  ShoppingCart, 
  HardHat, 
  Plane, 
  Building, 
  Landmark, 
  Radio, 
  UtensilsCrossed 
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

interface Industry {
  id: string;
  name: string;
  icon: React.ReactNode;
  color: string;
  image: string;
}

const industries: Industry[] = [
  {
    id: "pharma",
    name: "Pharma",
    icon: <Pill className="w-3 h-3 sm:w-3.5 sm:h-3.5 lg:w-4 lg:h-4" />,
    color: "from-emerald-500 to-teal-600",
    image: "/industry-we-cater/PHARMA.jpg.jpeg"
  },
  {
    id: "laboratories",
    name: "Laboratories",
    icon: <FlaskConical className="w-3 h-3 sm:w-3.5 sm:h-3.5 lg:w-4 lg:h-4" />,
    color: "from-purple-500 to-violet-600",
    image: "/industry-we-cater/LABORAORATIES.jpg.jpeg"
  },
  {
    id: "hospitals",
    name: "Hospitals",
    icon: <Building2 className="w-3 h-3 sm:w-3.5 sm:h-3.5 lg:w-4 lg:h-4" />,
    color: "from-blue-500 to-cyan-600",
    image: "/industry-we-cater/HOSPITALS.jpg.jpeg"
  },
  {
    id: "automotive",
    name: "Automotive",
    icon: <Car className="w-3 h-3 sm:w-3.5 sm:h-3.5 lg:w-4 lg:h-4" />,
    color: "from-red-500 to-orange-600",
    image: "/industry-we-cater/AUTOMOTIVE.jpg.jpeg"
  },
  {
    id: "insurance-finance",
    name: "Insurance & Finance",
    icon: <Wallet className="w-3 h-3 sm:w-3.5 sm:h-3.5 lg:w-4 lg:h-4" />,
    color: "from-yellow-500 to-amber-600",
    image: "/industry-we-cater/INSURANCE & FINANCE.jpg.jpeg"
  },
  {
    id: "fmcg",
    name: "FMCG",
    icon: <ShoppingCart className="w-3 h-3 sm:w-3.5 sm:h-3.5 lg:w-4 lg:h-4" />,
    color: "from-pink-500 to-rose-600",
    image: "/industry-we-cater/FMCG.jpg.jpeg"
  },
  {
    id: "construction-real-estate",
    name: "Construction & Real Estate",
    icon: <HardHat className="w-3 h-3 sm:w-3.5 sm:h-3.5 lg:w-4 lg:h-4" />,
    color: "from-orange-500 to-red-600",
    image: "/industry-we-cater/CONSTRUCTION & REAL ESTATE.jpg.jpeg"
  },
  {
    id: "travel-tourism",
    name: "Travel & Tourism",
    icon: <Plane className="w-3 h-3 sm:w-3.5 sm:h-3.5 lg:w-4 lg:h-4" />,
    color: "from-sky-500 to-blue-600",
    image: "/industry-we-cater/TRAVEL & TOURISM.jpg.jpeg"
  },
  {
    id: "corporates",
    name: "Corporates",
    icon: <Building className="w-3 h-3 sm:w-3.5 sm:h-3.5 lg:w-4 lg:h-4" />,
    color: "from-slate-500 to-gray-600",
    image: "/industry-we-cater/CORPORATES.jpg.jpeg"
  },
  {
    id: "government-institutes",
    name: "Government Institutes",
    icon: <Landmark className="w-3 h-3 sm:w-3.5 sm:h-3.5 lg:w-4 lg:h-4" />,
    color: "from-indigo-500 to-blue-600",
    image: "/industry-we-cater/GOVERNMENT INSTITUTES.jpg.jpeg"
  },
  {
    id: "telecom-networking",
    name: "Telecom & Networking",
    icon: <Radio className="w-3 h-3 sm:w-3.5 sm:h-3.5 lg:w-4 lg:h-4" />,
    color: "from-cyan-500 to-blue-600",
    image: "/industry-we-cater/TELECOM & NETWORKING COMPANIES.jpg.jpeg"
  },
  {
    id: "food-hospitality",
    name: "Food & Hospitality",
    icon: <UtensilsCrossed className="w-3 h-3 sm:w-3.5 sm:h-3.5 lg:w-4 lg:h-4" />,
    color: "from-orange-500 to-red-600",
    image: "/industry-we-cater/Food and Hospitality.jpg.jpeg"
  }
];

export default function IndustriesWeCater() {
  return (
    <section className="w-full bg-gradient-to-b from-gray-50 to-white py-8 sm:py-10 md:py-12 lg:py-16 xl:py-20 overflow-hidden">
      <div className="max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="text-center mb-8 sm:mb-10 md:mb-12 lg:mb-12 xl:mb-16"
        >
          <p className="text-xs xl:text-sm font-bold uppercase tracking-[0.2em] mb-2 sm:mb-3 flex items-center justify-center gap-2 text-[#0093cb]">
            <span className="inline-block w-4 sm:w-5 md:w-6 h-[1.5px] bg-[#0093cb]" />
            Industries We Serve
            <span className="inline-block w-4 sm:w-5 md:w-6 h-[1.5px] bg-[#0093cb]" />
          </p>

          <h2 className="text-2xl sm:text-3xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-extrabold capitalize tracking-tight mb-2 sm:mb-3 text-[#1a1a1a]">
            Industries we <span className="text-[#0093cb]">Cater</span>
          </h2>

          <p className="text-sm lg:text-sm xl:text-[18px] leading-relaxed max-w-[780px] mx-auto text-gray-500 px-2 sm:px-0">
            Delivering exceptional gifting and branding solutions across diverse industries nationwide
          </p>
        </motion.div>
      </div>

      {/* Grid Container - 6 Columns */}
      <div className="max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-8">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4 md:gap-5 lg:gap-5 xl:gap-6">
          {industries.map((industry, index) => (
            <motion.div
              key={industry.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: index * 0.05 }}
              className="block group"
            >
              <div className="relative w-full h-24 sm:h-28 md:h-32 lg:h-36 xl:h-44 rounded-xl sm:rounded-2xl overflow-hidden transition-all duration-500 ease-out hover:shadow-2xl hover:-translate-y-1.5 sm:hover:-translate-y-2 shadow-md border border-transparent hover:border-[#0093cb]/20">
                {/* Background Image */}
                <Image
                  src={industry.image}
                  alt={industry.name}
                  fill
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 16vw"
                />
                
                {/* Gradient Overlays */}
                <div className={`absolute inset-0 bg-gradient-to-br ${industry.color} opacity-20`} />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                
                {/* Subtle Primary Glow on Hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0093cb]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Content */}
                <div className="relative h-full flex flex-col justify-end p-2 sm:p-2.5 md:p-3">
                  {/* Icon */}
                  <div className="absolute top-2 sm:top-2.5 md:top-3 left-2 sm:left-2.5 md:left-3">
                    <div className="p-1 sm:p-1.5 rounded-lg sm:rounded-xl bg-white/20 backdrop-blur-md border border-white/20 group-hover:bg-[#0093cb]/30 transition-colors duration-300">
                      <div className="text-white">
                        {industry.icon}
                      </div>
                    </div>
                  </div>

                  {/* Name */}
                  <div>
                    <h3 className="font-bold text-[10px] sm:text-[11px] md:text-xs lg:text-xs xl:text-sm text-white line-clamp-2 leading-tight group-hover:translate-x-0.5 transition-transform duration-300">
                      {industry.name}
                    </h3>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}