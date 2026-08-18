"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Lightbulb,
  Compass,
  Award,
  Clock,
  Heart,
  Handshake,
  Users,
  Gift,
  MapPin,
  Factory,
  Trophy,
} from "lucide-react";

export default function WhyChooseUs() {
  const benefits = [
    {
      icon: Lightbulb,
      title: "Idea to Impact",
      desc: "We understand your objectives and turn them into impactful solutions.",
      color: "text-[#0093cb]",
    },
    {
      icon: Compass,
      title: "End-to-End Solutions",
      desc: "Conceptualization to delivery - we handle everything under one roof.",
      color: "text-[#00a8b5]",
    },
    {
      icon: Award,
      title: "Quality Assured",
      desc: "Premium materials and strict quality standards in every product we deliver.",
      color: "text-[#00a65d]",
    },
    {
      icon: Clock,
      title: "On-Time Delivery",
      desc: "Strong planning and execution to meet your timelines, every time.",
      color: "text-[#003b46]",
    },
    {
      icon: Heart,
      title: "Doctor Centric",
      desc: "Solutions designed keeping doctors and patients at the heart of communication.",
      color: "text-[#0093cb]",
    },
    {
      icon: Handshake,
      title: "Long-Term Partnership",
      desc: "We believe in building relationships that grow stronger with every project.",
      color: "text-[#00a65d]",
    },
  ];

  const stats = [
    {
      icon: Users,
      value: "100+",
      label: "Happy Clients",
      color: "text-[#0093cb]",
    },
    {
      icon: Gift,
      value: "1000+",
      label: "Unique Products Delivered",
      color: "text-[#0093cb]",
    },
    {
      icon: MapPin,
      value: "PAN India",
      label: "Delivery Network",
      color: "text-[#00a65d]",
    },
    {
      icon: Factory,
      value: "In-house",
      label: "Design & Production",
      color: "text-[#00a65d]",
    },
    {
      icon: Trophy,
      value: "10+ Years",
      label: "Of Innovation & Trust",
      color: "text-[#003b46]",
    },
  ];

  return (
    <section className="bg-slate-50/50 py-16 sm:py-20 relative overflow-hidden flex flex-col items-center">
      <div className="max-w-[1400px] w-full mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-10">
        
        {/* UPPER CARD: Why Clients Choose Us benefits */}
        <div className="bg-white rounded-3xl border border-slate-100 shadow-xl p-8 sm:p-10">
          {/* Header */}
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-800 tracking-tight">
              Why Clients Choose Us
            </h2>
            <div className="h-0.5 w-16 bg-gradient-to-r from-[#0093cb] to-[#00a65d] mx-auto mt-3 rounded-full" />
          </div>

          {/* Grid of benefits */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-8 lg:gap-6 divide-y sm:divide-y-0 lg:divide-x divide-slate-100">
            {benefits.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className={`flex flex-col items-center text-center px-3 pt-6 sm:pt-0 ${
                    idx === 0 ? "" : "lg:pl-4"
                  }`}
                >
                  <div className="w-12 h-12 rounded-full bg-slate-50 flex items-center justify-center border border-slate-100 shadow-sm mb-4">
                    <Icon className={`w-6 h-6 ${item.color}`} />
                  </div>
                  <h3 className={`font-bold text-sm sm:text-base mb-2 ${item.color}`}>
                    {item.title}
                  </h3>
                  <p className="text-slate-500 text-xs sm:text-[13px] leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* LOWER CARD: Statistics */}
        <div className="bg-white rounded-3xl border border-slate-100 shadow-xl p-8 sm:p-10">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6 md:gap-4 divide-y md:divide-y-0 md:divide-x divide-slate-100">
            {stats.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className={`flex flex-col items-center text-center p-3 ${
                    idx >= 2 && idx < 4 ? "pt-6 md:pt-3" : ""
                  } ${idx === 0 ? "" : "md:pl-4"}`}
                >
                  <Icon className={`w-8 h-8 ${item.color} mb-3`} />
                  <span className={`text-2xl sm:text-3xl font-black ${item.color}`}>
                    {item.value}
                  </span>
                  <span className="text-slate-500 text-xs sm:text-sm font-semibold mt-1">
                    {item.label}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

      </div>

      {/* Decorative Bottom Wave Shape with Wavy Gradient */}
      <div className="absolute bottom-0 left-0 right-0 w-full overflow-hidden leading-none z-0">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="relative block w-full h-[70px] sm:h-[100px]"
        >
          <defs>
            <linearGradient id="wave-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#003b46" />
              <stop offset="50%" stopColor="#0093cb" />
              <stop offset="100%" stopColor="#00a65d" />
            </linearGradient>
          </defs>
          <path
            d="M0,0 C150,90 350,120 600,100 C850,80 1050,90 1200,0 L1200,120 L0,120 Z"
            fill="url(#wave-gradient)"
          />
        </svg>
      </div>
    </section>
  );
}
