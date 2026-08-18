"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Monitor,
  FlaskConical,
  BookOpen,
  QrCode,
  Gift,
} from "lucide-react";

export default function WhatWeDoOfferings() {
  const offerings = [
    {
      num: "01",
      icon: Monitor,
      title: "DESKTOP BRAND REMINDERS",
      desc: "Creative and functional desktop products that keep your brand top-of-mind.",
      image: "https://images.unsplash.com/photo-1509048191080-d2984bad6ae5?w=500", // Desk clock / pen stand visual
      color: "text-[#0093cb]",
      borderColor: "border-[#0093cb]/20",
      numBg: "bg-[#0093cb]",
    },
    {
      num: "02",
      icon: FlaskConical,
      title: "SCIENTIFIC PROMOTIONAL PRODUCTS",
      desc: "Scientifically relevant and innovative products that simplify complex messages.",
      image: "https://pub-735dbd7583d74ad5949115d6fdf77023.r2.dev/Final%20Edit%20Images/21.png", // Kidney/Anatomy model
      color: "text-[#00a8b5]",
      borderColor: "border-[#00a8b5]/20",
      numBg: "bg-[#00a8b5]",
    },
    {
      num: "03",
      icon: BookOpen,
      title: "PATIENT EDUCATION PRODUCTS",
      desc: "Tools that empower patients with knowledge and support better health outcomes.",
      image: "https://pub-735dbd7583d74ad5949115d6fdf77023.r2.dev/Timeline/Koru%202025.png", // Patient chart/booklet
      color: "text-[#00a65d]",
      borderColor: "border-[#00a65d]/20",
      numBg: "bg-[#00a65d]",
    },
    {
      num: "04",
      icon: QrCode,
      title: "DIGITAL ENGAGEMENT PRODUCTS",
      desc: "QR-enabled and digital solutions that connect brands to a smart audience.",
      image: "https://pub-735dbd7583d74ad5949115d6fdf77023.r2.dev/Digital%20Inputs/10.png", // Smartphone / QR visual
      color: "text-[#8ac926]",
      borderColor: "border-[#8ac926]/20",
      numBg: "bg-[#8ac926]",
    },
    {
      num: "05",
      icon: Gift,
      title: "CUSTOMIZED PROMOTIONAL MERCHANDISE",
      desc: "Fully customized merchandise that reflects your brand identity and values.",
      image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500", // Backpack / Bottle
      color: "text-[#003b46]",
      borderColor: "border-[#003b46]/20",
      numBg: "bg-[#003b46]",
    },
  ];

  return (
    <section className="bg-white py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden border-b border-slate-100">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-[0.01] pointer-events-none bg-[radial-gradient(#0093cb_1px,transparent_1px)] [background-size:24px_24px]" />

      <div className="max-w-[1400px] w-full mx-auto relative z-10 space-y-16">
        
        {/* TOP COMPONENT: What We Do Intro Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Heading & Text */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            <div className="mb-6">
              <h2 className="text-5xl sm:text-6xl font-black tracking-tight leading-tight text-slate-800">
                What <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#0093cb] to-[#00a65d]">We Do</span>
              </h2>
              {/* Underline Divider */}
              <div className="h-1 w-24 bg-gradient-to-r from-[#0093cb] to-[#00a65d] mt-4 rounded-full" />
            </div>

            <h3 className="text-xl sm:text-2xl font-bold text-[#0093cb] mb-4">
              Smart Solutions. Stronger Connections.
            </h3>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              We design, develop and deliver innovative promotional solutions that help pharmaceutical and healthcare brands engage better, communicate smarter, and create a lasting impact.
            </p>
          </div>

          {/* Right Column: Visual Product Composition */}
          <div className="lg:col-span-6 relative flex justify-center items-center">
            {/* Collage Container */}
            <div className="relative w-full max-w-[500px] h-[320px] sm:h-[360px] rounded-3xl overflow-hidden bg-slate-50 border border-slate-100 shadow-lg flex items-center justify-center p-4">
              <div className="grid grid-cols-3 gap-3 w-full h-full">
                <div className="rounded-2xl overflow-hidden bg-slate-100 shadow-sm relative h-full">
                  <img
                    src="https://images.unsplash.com/photo-1509048191080-d2984bad6ae5?w=300"
                    alt="Desktop Reminder Item"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="grid grid-rows-2 gap-3 h-full">
                  <div className="rounded-2xl overflow-hidden bg-slate-100 shadow-sm relative h-full">
                    <img
                      src="https://pub-735dbd7583d74ad5949115d6fdf77023.r2.dev/Final%20Edit%20Images/21.png"
                      alt="Scientific Model"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="rounded-2xl overflow-hidden bg-slate-100 shadow-sm relative h-full">
                    <img
                      src="https://pub-735dbd7583d74ad5949115d6fdf77023.r2.dev/Digital%20Inputs/10.png"
                      alt="Digital Input"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className="rounded-2xl overflow-hidden bg-slate-100 shadow-sm relative h-full">
                  <img
                    src="https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=300"
                    alt="Promotional Merchandise"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* BOTTOM COMPONENT: Our Core Offerings */}
        <div className="space-y-10">
          
          {/* Header */}
          <div className="text-center">
            <h3 className="text-3xl font-extrabold text-slate-800 tracking-tight">
              Our Core Offerings
            </h3>
            <p className="text-slate-500 text-sm mt-2 max-w-2xl mx-auto font-medium">
              Comprehensive solutions across every touchpoint of healthcare marketing and communication.
            </p>
          </div>

          {/* 5-Column Offering Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {offerings.map((item, idx) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
                >
                  {/* Top info */}
                  <div className="p-5 flex flex-col items-start space-y-4">
                    {/* Badge and Icon */}
                    <div className="flex items-center justify-between w-full">
                      <span className={`text-white text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center ${item.numBg}`}>
                        {item.num}
                      </span>
                      <div className={`p-2 rounded-lg bg-slate-50 border ${item.borderColor}`}>
                        <Icon className={`w-5 h-5 ${item.color}`} />
                      </div>
                    </div>

                    {/* Title */}
                    <h4 className="text-xs sm:text-[13px] font-black text-slate-800 tracking-wide uppercase leading-tight">
                      {item.title}
                    </h4>

                    {/* Description */}
                    <p className="text-slate-500 text-[11px] sm:text-xs leading-relaxed">
                      {item.desc}
                    </p>
                  </div>

                  {/* Product Image */}
                  <div className="h-[140px] w-full bg-slate-50 relative border-t border-slate-50 overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
