"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Search, Maximize2 } from "lucide-react";
import Link from "next/link";

export default function ProductShowcaseGrid() {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100, damping: 15 } as any },
  };

  return (
    <section className="bg-[#fafcff] py-8 lg:py-6 px-4 sm:px-6 lg:px-8 overflow-hidden flex items-center justify-center border-b border-[#0093cb]/10 lg:h-[calc(100vh-90px)] lg:min-h-[700px] lg:max-h-[900px]">
      <div className="w-full max-w-[1800px] h-full flex flex-col justify-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-12 gap-5 h-full items-stretch"
        >
          {/* COLUMN 1: Category 1 (Desktop Brand Reminders) & Category 2 (Medipride Communications) */}
          <div className="md:col-span-5 flex flex-col gap-5 h-full">
            {/* Card 1: Desktop Brand Reminders */}
            <Link href="/categories/all?tab=categories" className="flex-1 flex flex-col">
              <motion.div
                variants={itemVariants}
                whileHover={{ y: -4 }}
                className="rounded-[32px] bg-[#e6f4fa] p-6 lg:p-8 flex flex-col justify-between flex-1 relative overflow-hidden group shadow-[0_15px_40px_rgba(0,147,203,0.05)] border border-[#0093cb]/15 text-[#002d40] cursor-pointer h-full"
              >
                {/* Background Image */}
                <div className="absolute inset-0">
                  <img
                    src="https://pub-735dbd7583d74ad5949115d6fdf77023.r2.dev/Final%20Edit%20Images/ChatGPT%20Image%20May%2028%2C%202026%2C%2002_02_16%20PM.png"
                    alt="Desktop Brand Reminders"
                    className="w-full h-full object-cover opacity-25 group-hover:opacity-35 transition-all duration-1000 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#e6f4fa] via-[#e6f4fa]/20 to-transparent pointer-events-none" />
                </div>

                <div className="z-10">
                  <div className="flex justify-between items-start mb-4">
                    <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#0093cb] bg-[#0093cb]/10 px-3 py-1 rounded-full">
                      Category 01
                    </span>
                    <span className="text-[10px] font-bold text-[#002d40]/40">EVERGREEN RANGE</span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black uppercase tracking-tight leading-none mb-2">
                    Desktop Brand Reminders
                  </h3>
                  <p className="text-xs sm:text-sm font-medium leading-relaxed opacity-85 max-w-sm">
                    Paperweights, tabletops, promotional merchandise, 3D printed & fibre resin ranges, plants, as per days.
                  </p>
                </div>

                <div className="w-full text-left text-[9px] font-bold tracking-wider uppercase opacity-40 z-10">
                  Param Corporation
                </div>
              </motion.div>
            </Link>

            {/* Card 2: Medipride Communications / Scientific Inputs */}
            <Link href="/medipride" className="flex-1 flex flex-col">
              <motion.div
                variants={itemVariants}
                whileHover={{ y: -4 }}
                className="rounded-[32px] bg-[#00a65d] p-6 lg:p-8 flex flex-col justify-between flex-1 relative overflow-hidden group shadow-[0_15px_40px_rgba(0,166,93,0.1)] text-white cursor-pointer h-full"
              >
                {/* Background Image */}
                <div className="absolute inset-0">
                  <img
                    src="https://pub-735dbd7583d74ad5949115d6fdf77023.r2.dev/Final%20Edit%20Images/ChatGPT%20Image%20May%2028%2C%202026%2C%2001_17_03%20PM.png"
                    alt="Scientific Inputs"
                    className="w-full h-full object-cover opacity-25 group-hover:opacity-35 transition-all duration-1000 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#00a65d] via-[#00a65d]/20 to-transparent pointer-events-none" />
                </div>

                <div className="flex justify-between items-start z-10">
                  <div>
                    <span className="text-[10px] font-extrabold uppercase tracking-widest text-white/80 block mb-1">
                      Category 02
                    </span>
                    <h3 className="text-xl lg:text-2xl font-bold uppercase tracking-tight">
                      Medipride Communications
                    </h3>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-white text-[#00a65d] flex items-center justify-center shadow-md hover:scale-105 transition-all">
                    <ArrowUpRight className="w-5 h-5 stroke-[2.5]" />
                  </div>
                </div>

                <div className="flex justify-between items-end z-10">
                  <div>
                    <p className="text-xs text-white/90 max-w-[320px] leading-snug">
                      Scientific Inputs: As per therapy, as per days, write & wipe utility, and flipcharts.
                    </p>
                  </div>
                </div>
              </motion.div>
            </Link>
          </div>

          {/* COLUMN 2: Category 3 (Digital Solutions) & Category 4 (Hyperpersonalized) */}
          <div className="md:col-span-3 flex flex-col gap-5 h-full">
            {/* Card 3: Digital Engagement Solutions */}
            <Link href="/digital-gifts" className="flex-1 flex flex-col">
              <motion.div
                variants={itemVariants}
                whileHover={{ y: -4 }}
                className="rounded-[32px] bg-[#0093cb] p-6 lg:p-8 flex flex-col justify-between flex-1 relative overflow-hidden group shadow-[0_15px_40px_rgba(0,147,203,0.1)] text-white cursor-pointer h-full"
              >
                {/* Background Image */}
                <div className="absolute inset-0">
                  <img
                    src="https://pub-735dbd7583d74ad5949115d6fdf77023.r2.dev/Digital%20Inputs/10.png"
                    alt="Digital Solutions"
                    className="w-full h-full object-cover opacity-25 group-hover:opacity-35 transition-all duration-1000 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0093cb] via-[#0093cb]/20 to-transparent pointer-events-none" />
                </div>

                <div className="z-10">
                  <span className="text-[10px] font-extrabold uppercase tracking-widest text-white/80 block mb-2">
                    Category 03
                  </span>
                  <h3 className="text-lg font-bold uppercase tracking-tight mb-2">
                    Digital Engagement
                  </h3>
                  <p className="text-xs leading-relaxed opacity-90">
                    Solutions: DigiPRO, QR code based products, and HRA calculators.
                  </p>
                </div>

                <div className="z-10 text-[9px] opacity-80 font-semibold">
                  DigiPRO &bull; QR Products
                </div>
              </motion.div>
            </Link>

            {/* Card 4: Hyperpersonalized Products */}
            <Link href="/personalized" className="flex-1 flex flex-col">
              <motion.div
                variants={itemVariants}
                whileHover={{ y: -4 }}
                className="rounded-[32px] bg-[#f0f9eb] p-6 lg:p-8 flex flex-col justify-between flex-1 relative overflow-hidden group shadow-[0_15px_40px_rgba(0,166,93,0.05)] border border-[#00a65d]/10 text-[#004d2b] cursor-pointer h-full"
              >
                {/* Background Image */}
                <div className="absolute inset-0">
                  <img
                    src="https://pub-735dbd7583d74ad5949115d6fdf77023.r2.dev/Final%20Edit%20Images/22.png"
                    alt="Hyperpersonalized"
                    className="w-full h-full object-cover opacity-25 group-hover:opacity-35 transition-all duration-1000 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#f0f9eb] via-[#f0f9eb]/20 to-transparent pointer-events-none" />
                </div>

                <div className="z-10">
                  <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#00a65d] block mb-2">
                    Category 04
                  </span>
                  <h3 className="text-lg font-bold uppercase tracking-tight mb-1">
                    Hyperpersonalized
                  </h3>
                  <p className="text-xs leading-snug opacity-75">
                    Products: Creative and unique custom QR code & name based products.
                  </p>
                </div>

                <div className="z-10 text-center text-[9px] font-bold uppercase tracking-wider opacity-55">
                  Creative ✦ Name Products
                </div>
              </motion.div>
            </Link>
          </div>

          {/* COLUMN 3: Category 5 (Visual Aids & Detailers) */}
          <div className="md:col-span-4 h-full">
            <Link href="/pharma-launch/all?tab=all" className="h-full block">
              <motion.div
                variants={itemVariants}
                whileHover={{ y: -4 }}
                className="rounded-[32px] relative overflow-hidden group h-full min-h-[480px] md:h-full flex flex-col justify-between p-6 lg:p-8 shadow-xl bg-stone-900 cursor-pointer"
              >
                {/* Product Background Image */}
                <div className="absolute inset-0">
                  <img
                    src="https://pub-735dbd7583d74ad5949115d6fdf77023.r2.dev/Final%20Edit%20Images/ChatGPT%20Image%20May%2028%2C%202026%2C%2002_04_56%20PM.png"
                    alt="Visual Aids & Detailers"
                    className="w-full h-full object-cover opacity-65 transition-transform duration-1000 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-black/50" />
                </div>

                <div className="z-10">
                  <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#f3eae3] bg-[#0093cb] px-3.5 py-1.5 rounded-full border border-white/10 shadow-sm">
                    Category 05
                  </span>
                  <h3 className="text-2xl font-black uppercase text-[#f3eae3] tracking-tight leading-none mt-4">
                    Visual Aids & Detailers
                  </h3>
                </div>

                <div className="z-10 flex flex-col gap-4 mt-auto">
                  <p className="text-xs sm:text-sm text-[#f3eae3]/90 leading-relaxed max-w-[320px]">
                    Highly structured visual aids, scientific detailers, and consultative tools.
                  </p>

                  <div className="flex justify-between items-center mt-2">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#f3eae3]/60">
                      Explore collection
                    </span>
                    
                    {/* Floating Action Icons */}
                    <div className="flex gap-2">
                      <div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md text-white border border-white/20 flex items-center justify-center hover:bg-[#0093cb] hover:scale-105 transition-all pointer-events-auto cursor-pointer">
                        <Search className="w-4 h-4" />
                      </div>
                      <div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md text-white border border-white/20 flex items-center justify-center hover:bg-[#0093cb] hover:scale-105 transition-all pointer-events-auto cursor-pointer">
                        <Maximize2 className="w-4 h-4" />
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
