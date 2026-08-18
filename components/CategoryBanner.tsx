"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, Easing } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";

const categories = [
  {
    title: "Digital Input",
    description: "Transform your ideas into stunning digital experiences",
    image:
      "https://pub-735dbd7583d74ad5949115d6fdf77023.r2.dev/Digital%20Inputs/10.png",
    href: "/digital-gifts",
    accent: "from-[#0093cb] to-[#00bcd4]",
    glow: "rgba(0,147,203,0.35)",
  },
  {
    title: "Koru",
    description: "Embrace the beauty of new beginnings and growth",
    image:
      "https://pub-735dbd7583d74ad5949115d6fdf77023.r2.dev/Banners/Circle%20Banner/Koru_1_260x260.png",
    href: "/koru",
    accent: "from-[#00a65d] to-[#00c853]",
    glow: "rgba(0,166,93,0.35)",
  },
  {
    title: "Medipride",
    description: "Empowering healthcare with pride and innovation",
    image:
      "https://pub-735dbd7583d74ad5949115d6fdf77023.r2.dev/Final%20Edit%20Images/ChatGPT%20Image%20May%2025%2C%202026%2C%2004_03_15%20PM.png",
    href: "/medipride",
    accent: "from-[#0093cb] to-[#00a65d]",
    glow: "rgba(0,147,203,0.3)",
  },
  {
    title: "Pharma Launch",
    description: "Bringing breakthrough medicines to the world",
    image:
      "https://pub-735dbd7583d74ad5949115d6fdf77023.r2.dev/Final%20Edit%20Images/ChatGPT%20Image%20May%2025%2C%202026%2C%2004_15_09%20PM.png",
    href: "/pharma-launch/all?tab=all",
    accent: "from-[#00a65d] to-[#0093cb]",
    glow: "rgba(0,166,93,0.3)",
  },
];

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

// Define custom easing as a proper Easing type
const customEase: Easing = [0.22, 1, 0.36, 1] as Easing;

const itemVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.55, ease: customEase },
  },
};

export default function BrandCategories() {
  return (
    <section className="relative overflow-hidden bg-[#f8fbff] py-10 sm:py-14 md:py-16 lg:py-20">
      {/* Ambient background blobs */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-32 -top-16 h-64 w-64 sm:h-80 sm:w-80 md:h-96 md:w-96 rounded-full bg-[#00a65d]/8 blur-[80px] sm:blur-[100px]" />
        <div className="absolute -right-24 bottom-0 h-[300px] w-[300px] sm:h-[400px] sm:w-[400px] md:h-[500px] md:w-[500px] rounded-full bg-[#0093cb]/8 blur-[100px] sm:blur-[120px]" />
        <div className="absolute left-1/2 top-1/2 h-48 w-48 sm:h-56 sm:w-56 md:h-64 md:w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#00c853]/5 blur-[60px] sm:blur-[80px]" />
      </div>

      {/* Subtle grid texture */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage:
            "linear-gradient(#0093cb 1px, transparent 1px), linear-gradient(90deg, #0093cb 1px, transparent 1px)",
          backgroundSize: "32px 32px sm:48px 48px",
        }}
      />

      <div className="relative mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, ease: customEase }}
          className="mb-10 sm:mb-12 md:mb-14 lg:mb-16 flex flex-col gap-4 sm:gap-6 md:flex-row md:items-end md:justify-between"
        >
          <div>
            {/* Pill badge */}
            <span className="inline-flex items-center gap-1.5 rounded-full border border-[#00a65d]/25 bg-[#00a65d]/8 px-3 sm:px-4 py-1 sm:py-1.5 text-[10px] sm:text-[11px] font-black uppercase tracking-[0.2em] sm:tracking-[0.22em] text-[#00a65d]">
              <Sparkles className="h-2.5 w-2.5 sm:h-3 sm:w-3" />
              Our Brands
            </span>

            <h2 className="mt-3 sm:mt-4 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight tracking-tight text-slate-900">
              Explore Our{" "}
              <span className="bg-gradient-to-r from-[#0093cb] to-[#00a65d] bg-clip-text text-transparent">
                Brands
              </span>
            </h2>
          </div>
        </motion.div>

        {/* Cards grid - Always 4 columns */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-4 gap-4 sm:gap-6 md:gap-6 lg:gap-8"
        >
          {categories.map((item) => (
            <motion.div key={item.title} variants={itemVariants}>
              <Link href={item.href} className="group block">
                <div className="flex flex-col items-center">
                  {/* Circle container */}
                  <div className="relative">
                    {/* Outer glow ring — visible on hover */}
                    <div
                      className="absolute -inset-1.5 sm:-inset-2 md:-inset-2.5 lg:-inset-3 rounded-full opacity-0 blur-lg sm:blur-xl md:blur-2xl transition-opacity duration-700 group-hover:opacity-100"
                      style={{
                        background: `radial-gradient(circle, ${item.glow}, transparent 70%)`,
                      }}
                    />

                    {/* Gradient border ring */}
                    <div
                      className={`absolute -inset-[1.5px] sm:-inset-[2px] md:-inset-[2.5px] lg:-inset-[3px] rounded-full bg-gradient-to-br ${item.accent} opacity-0 transition-opacity duration-500 group-hover:opacity-100`}
                    />

                    {/* White inset to make it look like a ring */}
                    <div className="absolute -inset-[1px] sm:-inset-[1.5px] md:-inset-[2px] rounded-full bg-[#f8fbff]" />

                    {/* Circle image - Responsive sizes only */}
                    <div
                      className="
                        relative
                        h-28 w-28
                        sm:h-36 sm:w-36
                        md:h-44 md:w-44
                        lg:h-52 lg:w-52
                        xl:h-56 xl:w-56
                        2xl:h-64 2xl:w-64
                        overflow-hidden
                        rounded-full
                        bg-white
                        shadow-[0_8px_32px_rgba(0,0,0,0.10)]
                        ring-1 ring-black/[0.06]
                        transition-all duration-500
                        group-hover:-translate-y-2
                        group-hover:shadow-[0_20px_56px_rgba(0,147,203,0.20)]
                      "
                    >
                      <img
                        src={item.image}
                        alt={item.title}
                        className="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                      />

                      {/* Inner shine overlay */}
                      <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white/20 via-transparent to-transparent opacity-60" />

                      {/* Hover color wash */}
                      <div
                        className={`absolute inset-0 rounded-full bg-gradient-to-t from-black/15 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100`}
                      />
                    </div>
                  </div>

                  {/* Label - Responsive text */}
                  <h3 className="mt-3 sm:mt-4 md:mt-5 lg:mt-6 text-center text-xs sm:text-sm md:text-[15px] lg:text-base font-bold text-slate-800 transition-colors duration-300 group-hover:text-[#0093cb]">
                    {item.title}
                  </h3>

                  {/* ✨ NEW: Description line under title */}
                  <p className="mt-1 sm:mt-1.5 md:mt-2 text-center text-[10px] sm:text-xs md:text-sm text-slate-500 max-w-[140px] sm:max-w-[160px] md:max-w-[200px] lg:max-w-[220px] leading-tight">
                    {item.description}
                  </p>

                  {/* Animated underline */}
                  <div
                    className={`mt-1.5 sm:mt-2 md:mt-2.5 h-[2px] w-0 rounded-full bg-gradient-to-r ${item.accent} transition-all duration-500 group-hover:w-6 sm:group-hover:w-8 md:group-hover:w-10 lg:group-hover:w-12`}
                  />

                  {/* Arrow nudge */}
                  <div className="mt-1.5 sm:mt-2 md:mt-2.5 lg:mt-3 flex items-center gap-1 text-[8px] sm:text-[10px] md:text-xs font-semibold text-slate-400 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 translate-y-1">
                    Explore
                    <ArrowRight className="h-2 w-2 sm:h-2.5 sm:w-2.5 md:h-3 md:w-3" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* Mobile CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-10 sm:mt-12 text-center lg:hidden"
        >
          <Link
            href="/brands"
            className="inline-flex items-center gap-2 rounded-full border border-[#0093cb] bg-white px-5 sm:px-7 py-2.5 sm:py-3 text-xs sm:text-sm font-semibold text-[#0093cb] shadow-sm transition-all hover:bg-[#0093cb] hover:text-white"
          >
            View All Brands
            <ArrowRight className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
