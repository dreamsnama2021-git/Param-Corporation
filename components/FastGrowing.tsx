"use client";

import React, { useEffect, useState } from "react";
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
    icon: <Pill className="w-5 h-5" />,
    color: "from-emerald-500 to-teal-600",
    image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=600&h=400&fit=crop"
  },
  {
    id: "laboratories",
    name: "Laboratories",
    icon: <FlaskConical className="w-5 h-5" />,
    color: "from-purple-500 to-violet-600",
    image: "https://images.unsplash.com/photo-1581093588401-fbb62a02f120?w=600&h=400&fit=crop"
  },
  {
    id: "hospitals",
    name: "Hospitals",
    icon: <Building2 className="w-5 h-5" />,
    color: "from-blue-500 to-cyan-600",
    image: "https://images.unsplash.com/photo-1538108149393-fbbd81895907?w=600&h=400&fit=crop"
  },
  {
    id: "automotive",
    name: "Automotive",
    icon: <Car className="w-5 h-5" />,
    color: "from-red-500 to-orange-600",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=400&fit=crop"
  },
  {
    id: "insurance-finance",
    name: "Insurance & Finance",
    icon: <Wallet className="w-5 h-5" />,
    color: "from-yellow-500 to-amber-600",
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=600&h=400&fit=crop"
  },
  {
    id: "fmcg",
    name: "FMCG",
    icon: <ShoppingCart className="w-5 h-5" />,
    color: "from-pink-500 to-rose-600",
    image: "https://images.unsplash.com/photo-1542838132-92c53300491e?w=600&h=400&fit=crop"
  },
  {
    id: "construction-real-estate",
    name: "Construction & Real Estate",
    icon: <HardHat className="w-5 h-5" />,
    color: "from-orange-500 to-red-600",
    image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=600&h=400&fit=crop"
  },
  {
    id: "travel-tourism",
    name: "Travel & Tourism",
    icon: <Plane className="w-5 h-5" />,
    color: "from-sky-500 to-blue-600",
    image: "https://images.unsplash.com/photo-1436491865332-7a61a109bb05?w=600&h=400&fit=crop"
  },
  {
    id: "corporates",
    name: "Corporates",
    icon: <Building className="w-5 h-5" />,
    color: "from-slate-500 to-gray-600",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&h=400&fit=crop"
  },
  {
    id: "government-institutes",
    name: "Government Institutes",
    icon: <Landmark className="w-5 h-5" />,
    color: "from-indigo-500 to-blue-600",
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=600&h=400&fit=crop"
  },
  {
    id: "telecom-networking",
    name: "Telecom & Networking",
    icon: <Radio className="w-5 h-5" />,
    color: "from-cyan-500 to-blue-600",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&h=400&fit=crop"
  },
  {
    id: "food-hospitality",
    name: "Food & Hospitality",
    icon: <UtensilsCrossed className="w-5 h-5" />,
    color: "from-orange-500 to-red-600",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&h=400&fit=crop"
  }
];

export default function IndustriesWeCater() {
  const [isPaused, setIsPaused] = useState(false);

  return (
    <section className="relative py-8 2xl:py-16 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        {/* Header */}
        <div className="text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="ui-h1 font-extrabold capitalize tracking-tight mb-3 text-gray-900"
          >
            Industries we<span className="text-[#0093cb]"> Cater</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-600 max-w-3xl mx-auto mt-4"
          >
            Delivering exceptional gifting and branding solutions across diverse industries nationwide
          </motion.p>
        </div>
      </div>

      {/* Marquee Container */}
      <div 
        className="relative w-full overflow-hidden"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {/* Gradient Overlays for smooth edges */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-gray-50 to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-r from-transparent to-gray-50 z-10" />
        
        {/* Scrolling Track */}
        <div className="flex gap-4 lg:gap-5 py-4">
          {/* First set of items */}
          <div className={`flex gap-4 lg:gap-5 animate-marquee ${isPaused ? 'pause-animation' : ''}`}>
            {industries.map((industry, index) => (
              <Link
                key={`first-${industry.id}`}
                href={`/categories/industry/${industry.id}`}
                className="flex-shrink-0 group"
              >
                <div className="relative w-48 h-48 lg:w-56 lg:h-56 rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1 shadow-sm">
                  {/* Background Image */}
                  <Image
                    src={industry.image}
                    alt={industry.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    sizes="(max-width: 768px) 192px, 224px"
                  />
                  
                  {/* Gradient Overlays */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${industry.color} opacity-20`} />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                  
                  {/* Content */}
                  <div className="relative h-full flex flex-col justify-end p-5">
                    {/* Icon */}
                    <div className="absolute top-4 left-4">
                      <div className="p-2.5 rounded-xl bg-white/20 backdrop-blur-md border border-white/20">
                        <div className="text-white">
                          {industry.icon}
                        </div>
                      </div>
                    </div>

                    {/* Name */}
                    <div>
                      <h3 className="text-base lg:text-lg font-bold text-white">
                        {industry.name}
                      </h3>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          
          {/* Duplicate set for seamless loop */}
          <div className={`flex gap-4 lg:gap-5 animate-marquee ${isPaused ? 'pause-animation' : ''}`}>
            {industries.map((industry, index) => (
              <Link
                key={`second-${industry.id}`}
                href={`/categories/industry/${industry.id}`}
                className="flex-shrink-0 group"
              >
                <div className="relative w-48 h-48 lg:w-56 lg:h-56 rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1 shadow-sm">
                  {/* Background Image */}
                  <Image
                    src={industry.image}
                    alt={industry.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    sizes="(max-width: 768px) 192px, 224px"
                  />
                  
                  {/* Gradient Overlays */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${industry.color} opacity-20`} />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                  
                  {/* Content */}
                  <div className="relative h-full flex flex-col justify-end p-5">
                    {/* Icon */}
                    <div className="absolute top-4 left-4">
                      <div className="p-2.5 rounded-xl bg-white/20 backdrop-blur-md border border-white/20">
                        <div className="text-white">
                          {industry.icon}
                        </div>
                      </div>
                    </div>

                    {/* Name */}
                    <div>
                      <h3 className="text-base lg:text-lg font-bold text-white">
                        {industry.name}
                      </h3>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Add this CSS to your global stylesheet or use a style tag */}
      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-100%);
          }
        }
        
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
        
        .pause-animation {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}