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
    image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=600&h=400&fit=crop"
  },
  {
    id: "laboratories",
    name: "Laboratories",
    icon: <FlaskConical className="w-3 h-3 sm:w-3.5 sm:h-3.5 lg:w-4 lg:h-4" />,
    color: "from-purple-500 to-violet-600",
    image: "https://images.unsplash.com/photo-1581093588401-fbb62a02f120?w=600&h=400&fit=crop"
  },
  {
    id: "hospitals",
    name: "Hospitals",
    icon: <Building2 className="w-3 h-3 sm:w-3.5 sm:h-3.5 lg:w-4 lg:h-4" />,
    color: "from-blue-500 to-cyan-600",
    image: "https://images.unsplash.com/photo-1538108149393-fbbd81895907?w=600&h=400&fit=crop"
  },
  {
    id: "automotive",
    name: "Automotive",
    icon: <Car className="w-3 h-3 sm:w-3.5 sm:h-3.5 lg:w-4 lg:h-4" />,
    color: "from-red-500 to-orange-600",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=400&fit=crop"
  },
  {
    id: "insurance-finance",
    name: "Insurance & Finance",
    icon: <Wallet className="w-3 h-3 sm:w-3.5 sm:h-3.5 lg:w-4 lg:h-4" />,
    color: "from-yellow-500 to-amber-600",
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=600&h=400&fit=crop"
  },
  {
    id: "fmcg",
    name: "FMCG",
    icon: <ShoppingCart className="w-3 h-3 sm:w-3.5 sm:h-3.5 lg:w-4 lg:h-4" />,
    color: "from-pink-500 to-rose-600",
    image: "https://images.unsplash.com/photo-1542838132-92c53300491e?w=600&h=400&fit=crop"
  },
  {
    id: "construction-real-estate",
    name: "Construction & Real Estate",
    icon: <HardHat className="w-3 h-3 sm:w-3.5 sm:h-3.5 lg:w-4 lg:h-4" />,
    color: "from-orange-500 to-red-600",
    image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=600&h=400&fit=crop"
  },
  {
    id: "travel-tourism",
    name: "Travel & Tourism",
    icon: <Plane className="w-3 h-3 sm:w-3.5 sm:h-3.5 lg:w-4 lg:h-4" />,
    color: "from-sky-500 to-blue-600",
    image: "data:image/jpeg;base64,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"
  },
  {
    id: "corporates",
    name: "Corporates",
    icon: <Building className="w-3 h-3 sm:w-3.5 sm:h-3.5 lg:w-4 lg:h-4" />,
    color: "from-slate-500 to-gray-600",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&h=400&fit=crop"
  },
  {
    id: "government-institutes",
    name: "Government Institutes",
    icon: <Landmark className="w-3 h-3 sm:w-3.5 sm:h-3.5 lg:w-4 lg:h-4" />,
    color: "from-indigo-500 to-blue-600",
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=600&h=400&fit=crop"
  },
  {
    id: "telecom-networking",
    name: "Telecom & Networking",
    icon: <Radio className="w-3 h-3 sm:w-3.5 sm:h-3.5 lg:w-4 lg:h-4" />,
    color: "from-cyan-500 to-blue-600",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&h=400&fit=crop"
  },
  {
    id: "food-hospitality",
    name: "Food & Hospitality",
    icon: <UtensilsCrossed className="w-3 h-3 sm:w-3.5 sm:h-3.5 lg:w-4 lg:h-4" />,
    color: "from-orange-500 to-red-600",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&h=400&fit=crop"
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
              <Link
                href={`/categories/industry/${industry.id}`}
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
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}