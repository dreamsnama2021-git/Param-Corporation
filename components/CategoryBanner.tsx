"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const categories = [
  {
    title: "Digital Input",
    image: "https://pub-735dbd7583d74ad5949115d6fdf77023.r2.dev/Digital%20Inputs/10.png",
    href: "/digital-gifts", // Added href
  },
  {
    title: "Koru",
    image: "https://pub-735dbd7583d74ad5949115d6fdf77023.r2.dev/Koru/4.png",
    href: "/koru", // Added href
  },
  {
    title: "Medipride",
    image: "https://pub-735dbd7583d74ad5949115d6fdf77023.r2.dev/Final%20Edit%20Images/ChatGPT%20Image%20May%2025%2C%202026%2C%2004_03_15%20PM.png",
    href: "/medipride", // Added href
  },
  {
    title: "Pharma Launch",
    image: "https://pub-735dbd7583d74ad5949115d6fdf77023.r2.dev/Final%20Edit%20Images/ChatGPT%20Image%20May%2025%2C%202026%2C%2004_15_09%20PM.png",
    href: "/pharma-launch/all?tab=all", // Added href (you can change this to the correct path)
  },
];

export default function BrandCategories() {
  return (
    <section className="relative overflow-hidden bg-[#fafcff] py-20">
      {/* Background Effects */}
      <div className="absolute -left-24 top-0 h-72 w-72 rounded-full bg-[#00a65d]/10 blur-3xl" />
      <div className="absolute right-0 bottom-0 h-80 w-80 rounded-full bg-[#0093cb]/10 blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex items-center justify-between mb-12"
        >
          <div>
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#00a65d]/10 border border-[#00a65d]/20 text-[#00a65d] text-xs font-black uppercase tracking-[0.2em]">
              Our Brands
            </span>

            <h2 className="mt-4 text-3xl md:text-4xl font-extrabold text-slate-900">
              Explore Our Brands
            </h2>
          </div>

          <Link
            href="/brands"
            className="hidden md:flex items-center gap-2 text-[#0093cb] font-semibold hover:gap-3 transition-all"
          >
            View All
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>

        {/* Categories */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            show: {
              transition: {
                staggerChildren: 0.1,
              },
            },
          }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12"
        >
          {categories.map((item) => (
            <motion.div
              key={item.title}
              variants={{
                hidden: { opacity: 0, y: 30 },
                show: { opacity: 1, y: 0 },
              }}
            >
              <Link href={item.href} className="group block"> {/* Changed href to use item.href */}
                <div className="flex flex-col items-center">
                  {/* Circle Image */}
                  <div className="relative">
                    {/* Glow */}
                    <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#0093cb]/20 to-[#00a65d]/20 blur-xl scale-110 opacity-0 group-hover:opacity-100 transition duration-500" />

                    <div className="
                      relative
                      w-40
                      h-40
                      md:w-48
                      md:h-48
                      rounded-full
                      overflow-hidden
                      bg-white
                      shadow-[0_15px_40px_rgba(0,0,0,0.08)]
                      ring-1
                      ring-black/5
                      transition-all
                      duration-500
                      group-hover:-translate-y-2
                      group-hover:shadow-[0_25px_60px_rgba(0,147,203,0.18)]
                    ">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="object-contain object-top transition duration-700 group-hover:scale-110"
                      />

                      {/* Glass Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition duration-500" />
                    </div>
                  </div>

                  {/* Text */}
                  <h3 className="
                    mt-5
                    text-center
                    text-lg
                    font-bold
                    text-slate-800
                    transition-colors
                    duration-300
                    group-hover:text-[#0093cb]
                  ">
                    {item.title}
                  </h3>

                  <div className="
                    mt-2
                    h-[2px]
                    w-0
                    bg-gradient-to-r
                    from-[#0093cb]
                    to-[#00a65d]
                    transition-all
                    duration-500
                    group-hover:w-16
                  " />
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* Mobile CTA */}
        <div className="mt-12 text-center md:hidden">
          <Link
            href="/brands"
            className="inline-flex items-center gap-2 border border-[#0093cb] text-[#0093cb] px-6 py-3 rounded-full font-semibold hover:bg-[#0093cb] hover:text-white transition-all"
          >
            View All Brands
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}