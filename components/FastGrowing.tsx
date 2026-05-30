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
    <section className="relative py-6 sm:py-8 md:py-10 lg:py-12 xl:py-16 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      <div className="max-w-[1500px] mx-auto px-3 sm:px-4 md:px-6 lg:px-8 xl:px-8 mb-6 sm:mb-8 md:mb-10 lg:mb-12">
        {/* Header */}
        <div className="text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-2xl sm:text-3xl lg:text-3xl xl:text-4xl font-extrabold capitalize tracking-tight mb-2 sm:mb-3 text-gray-900"
          >
            Industries we<span className="text-[#0093cb]"> Cater</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-600 text-xs sm:text-xs md:text-sm lg:text-sm xl:text-base max-w-3xl mx-auto mt-2 sm:mt-3 md:mt-4"
          >
            Delivering exceptional gifting and branding solutions across diverse industries nationwide
          </motion.p>
        </div>
      </div>

      {/* Grid Container - 6 Columns */}
      <div className="max-w-[1500px] mx-auto px-3 sm:px-4 md:px-6 lg:px-8 xl:px-8 pb-6 sm:pb-8">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 sm:gap-3 md:gap-4 lg:gap-4 xl:gap-5">
          {industries.map((industry, index) => (
            <motion.div
              key={industry.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
            >
              <div
              
                className="block group"
              >
                <div className="relative w-full h-24 sm:h-28 md:h-32 lg:h-36 xl:h-44 rounded-lg sm:rounded-xl overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1 shadow-sm">
                  {/* Background Image */}
                  <Image
                    src={industry.image}
                    alt={industry.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 16vw"
                  />
                  
                  {/* Gradient Overlays */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${industry.color} opacity-20`} />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                  
                  {/* Content */}
                  <div className="relative h-full flex flex-col justify-end p-1.5 sm:p-2 md:p-3">
                    {/* Icon */}
                    <div className="absolute top-1.5 sm:top-2 md:top-3 left-1.5 sm:left-2 md:left-3">
                      <div className="p-1 sm:p-1.5 rounded-md sm:rounded-lg bg-white/20 backdrop-blur-md border border-white/20">
                        <div className="text-white">
                          {industry.icon}
                        </div>
                      </div>
                    </div>

                    {/* Name */}
                    <div>
                      <h3 className="text-[9px] sm:text-[10px] md:text-xs lg:text-xs xl:text-sm font-bold text-white line-clamp-2 leading-tight">
                        {industry.name}
                      </h3>
                    </div>
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