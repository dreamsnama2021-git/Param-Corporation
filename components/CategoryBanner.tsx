"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";

const categories = [
  {
    title: "Digital Input",
    image:
      "https://pub-735dbd7583d74ad5949115d6fdf77023.r2.dev/Digital%20Inputs/10.png",
    href: "/digital-gifts",
    accent: "from-[#0093cb] to-[#00bcd4]",
    glow: "rgba(0,147,203,0.35)",
  },
  {
    title: "Koru",
    image:
      "https://pub-735dbd7583d74ad5949115d6fdf77023.r2.dev/Koru/4.png",
    href: "/koru",
    accent: "from-[#00a65d] to-[#00c853]",
    glow: "rgba(0,166,93,0.35)",
  },
  {
    title: "Medipride",
    image:
      "https://pub-735dbd7583d74ad5949115d6fdf77023.r2.dev/Final%20Edit%20Images/ChatGPT%20Image%20May%2025%2C%202026%2C%2004_03_15%20PM.png",
    href: "/medipride",
    accent: "from-[#0093cb] to-[#00a65d]",
    glow: "rgba(0,147,203,0.3)",
  },
  {
    title: "Pharma Launch",
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

const itemVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function BrandCategories() {
  return (
    <section className="relative overflow-hidden bg-[#f8fbff] py-10">
      {/* Ambient background blobs */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-32 -top-16 h-96 w-96 rounded-full bg-[#00a65d]/8 blur-[100px]" />
        <div className="absolute -right-24 bottom-0 h-[500px] w-[500px] rounded-full bg-[#0093cb]/8 blur-[120px]" />
        <div className="absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#00c853]/5 blur-[80px]" />
      </div>

      {/* Subtle grid texture */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage:
            "linear-gradient(#0093cb 1px, transparent 1px), linear-gradient(90deg, #0093cb 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      <div className="relative  mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="mb-16 flex flex-col gap-6 md:flex-row md:items-end md:justify-between"
        >
          <div>
            {/* Pill badge */}
            <span className="inline-flex items-center gap-1.5 rounded-full border border-[#00a65d]/25 bg-[#00a65d]/8 px-4 py-1.5 text-[11px] font-black uppercase tracking-[0.22em] text-[#00a65d]">
              <Sparkles className="h-3 w-3" />
              Our Brands
            </span>

            <h2 className="mt-4 text-4xl font-extrabold leading-tight tracking-tight text-slate-900 md:text-5xl">
              Explore Our{" "}
              <span className="bg-gradient-to-r from-[#0093cb] to-[#00a65d] bg-clip-text text-transparent">
                Brands
              </span>
            </h2>
          </div>
        </motion.div>

        {/* Cards grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-2 gap-6 md:grid-cols-4 md:gap-8"
        >
          {categories.map((item) => (
            <motion.div key={item.title} variants={itemVariants}>
              <Link href={item.href} className="group block">
                <div className="flex flex-col items-center">
                  {/* Circle container */}
                  <div className="relative">
                    {/* Outer glow ring — visible on hover */}
                    <div
                      className="absolute -inset-3 rounded-full opacity-0 blur-2xl transition-opacity duration-700 group-hover:opacity-100"
                      style={{
                        background: `radial-gradient(circle, ${item.glow}, transparent 70%)`,
                      }}
                    />

                    {/* Gradient border ring */}
                    <div
                      className={`absolute -inset-[3px] rounded-full bg-gradient-to-br ${item.accent} opacity-0 transition-opacity duration-500 group-hover:opacity-100`}
                    />

                    {/* White inset to make it look like a ring */}
                    <div className="absolute -inset-[2px] rounded-full bg-[#f8fbff]" />

                    {/* Circle image - INCREASED SIZES */}
                    <div
                      className="
                        relative
                        
                        h-56 w-56
                        overflow-hidden
                        rounded-full
                        bg-white
                        shadow-[0_8px_32px_rgba(0,0,0,0.10)]
                        ring-1 ring-black/[0.06]
                        transition-all duration-500
                        group-hover:-translate-y-2
                        group-hover:shadow-[0_20px_56px_rgba(0,147,203,0.20)]
                        md:h-64 md:w-64
                        lg:h-72 lg:w-72
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

                  {/* Label */}
                  <h3 className="mt-6 text-center text-[15px] font-bold text-slate-800 transition-colors duration-300 group-hover:text-[#0093cb] md:text-base">
                    {item.title}
                  </h3>

                  {/* Animated underline */}
                  <div
                    className={`mt-2 h-[2px] w-0 rounded-full bg-gradient-to-r ${item.accent} transition-all duration-500 group-hover:w-12`}
                  />

                  {/* Arrow nudge */}
                  <div className="mt-3 flex items-center gap-1 text-xs font-semibold text-slate-400 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 translate-y-1">
                    Explore
                    <ArrowRight className="h-3 w-3" />
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
          className="mt-12 text-center md:hidden"
        >
          <Link
            href="/brands"
            className="inline-flex items-center gap-2 rounded-full border border-[#0093cb] bg-white px-7 py-3 text-sm font-semibold text-[#0093cb] shadow-sm transition-all hover:bg-[#0093cb] hover:text-white"
          >
            View All Brands
            <ArrowRight className="h-4 w-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}