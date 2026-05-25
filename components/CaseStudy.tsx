"use client";

import Image from "next/image";
import { ArrowRight, Calendar, Building2, Tag, Clock } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
// ─── ORIGINAL CASE STUDIES DATA (Alternating Layout) ─────────────────
const CASE_STUDIES = [
  {
    id: 1,
    title: "Transforming Pharma Marketing Strategy",
    category: "Medical Communications",
    client: "Leading Healthcare Brand",
    date: "2024",
    description:
      "Developed comprehensive digital strategy for pharmaceutical portfolio, resulting in 45% increase in physician engagement.",
    image:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&h=400&fit=crop",
    slug: "pharma-strategy",
    stats: { growth: "+45%", reach: "2.8M+" },
  },
  {
    id: 2,
    title: "Cardio-Diabetes Campaign Success",
    category: "Digital Marketing",
    client: "Global Pharma Co.",
    date: "2023",
    description:
      "Executed multi-channel campaign targeting healthcare professionals with interactive content and KOL webinars.",
    image:
      "https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=600&h=400&fit=crop",
    slug: "cardio-campaign",
    stats: { growth: "+60%", reach: "4.2M+" },
  },
  {
    id: 3,
    title: "Medical Device Launch Excellence",
    category: "Brand Strategy",
    client: "Medical Device Inc.",
    date: "2024",
    description:
      "Comprehensive launch strategy for orthopedic devices including training programs and educational materials.",
    image:
      "https://www.adornscustomgifts.com/wp-content/uploads/2024/09/diwalicombo6-2.jpg",
    slug: "device-launch",
    stats: { growth: "+120%", reach: "1.5M+" },
  },
];

// ─── NEW CASE STUDIES DATA (Card Grid Layout) ─────────────────
const CASE_STUDIES_CARDS = [
  {
    id: 1,
    title: "The Stunning Transformation of Thordiam Jewellery: From B2B to B2C",
    description:
      "How we helped shift from low-margin B2B (3%) to high-impact B2C (~30%), using trust-first content and conversion-focused creative.",
    image:
      "/products/4 IN 1 DESK ORGANISER.png", // Jewellery/retail image
    slug: "thordiam-transformation",
    readTime: "6 min read",
    category: "Retail",
  },
  {
    id: 2,
    title: "Scaling Healthcare Outreach with Digital-First Strategy",
    description:
      "Leveraging WhatsApp-led nurturing and targeted content to increase patient engagement by 200% for a leading clinic chain.Leveraging WhatsApp-led nurturing ",
    image:
      "/products/4 IN 1 DESK ORGANISER.png", // Healthcare image
    slug: "healthcare-digital",
    readTime: "4 min read",
    category: "Healthcare",
  },
  {
    id: 3,
    title: "Corporate Gifting Success for Fortune 500 Company",
    description:
      "Implementing a personalized gifting solution that improved employee retention and client satisfaction scores significantly retention and client satisfaction scores significantly.",
    image:
      "/products/4 IN 1 DESK ORGANISER.png", // Gifting/corporate image
    slug: "corporate-gifting",
    readTime: "5 min read",
    category: "Corporate",
  },
];

// ─── ORIGINAL ALTERNATING SECTION ─────────────────
function CaseStudiesSection() {
  return (
    <section className="w-full bg-white py-6 sm:py-8 md:py-10 overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header - Compact */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="text-center mb-8 sm:mb-10 md:mb-12"
        >
          <p className="text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.2em] mb-2 sm:mb-3 flex items-center justify-center gap-2 text-[var(--clr-primary)]">
            <span className="inline-block w-4 sm:w-5 md:w-6 h-[1.5px] bg-[var(--clr-primary)]" />
            Case studies
            <span className="inline-block w-4 sm:w-5 md:w-6 h-[1.5px] bg-[var(--clr-primary)]" />
          </p>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight mb-2 sm:mb-3 text-[var(--clr-text-dark)]">
            Real results for growing brands
          </h2>

          <p className="text-xs sm:text-sm xl:text-[16px] leading-relaxed max-w-[780px] mx-auto text-[var(--clr-text-muted)] px-2 sm:px-0">
            Explore how companies increased client retention, boosted employee
            engagement, and strengthened brand loyalty through thoughtfully
            curated gifting campaigns.
          </p>
        </motion.div>

        {/* Case Studies List - Compact Spacing */}
        <div className="space-y-8 sm:space-y-10 md:space-y-12 lg:space-y-16">
          {CASE_STUDIES.map((study, index) => {
            const isEven = index % 2 === 0;

            return (
              <article
                key={study.id}
                className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 xl:gap-10 items-center"
              >
                {/* Image - Alternating Order */}
                <div
                  className={`relative group ${isEven ? "lg:order-1" : "lg:order-2"}`}
                >
                  <div className="relative aspect-[16/10] rounded-lg sm:rounded-xl overflow-hidden shadow-md sm:shadow-lg bg-gray-100">
                    <Image
                      src={study.image}
                      alt={study.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      unoptimized
                    />
                  </div>

                  {/* Compact Decorative Element */}
                  <div
                    className={`absolute -z-10 w-full h-full rounded-lg sm:rounded-xl bg-[#0093cb]/10 top-1.5 sm:top-2 ${isEven ? "left-1.5 sm:left-2" : "right-1.5 sm:right-2"}`}
                  />
                </div>

                {/* Content - Alternating Order */}
                <div
                  className={`space-y-3 sm:space-y-4 ${isEven ? "lg:order-2" : "lg:order-1"}`}
                >
                  {/* Meta Tags - Compact */}
                  <div className="flex flex-wrap gap-1.5 sm:gap-2">
                    <span className="inline-flex items-center gap-1 px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-full bg-[#0093cb]/10 text-[#0093cb] text-[10px] sm:text-xs font-semibold">
                      <Tag className="w-2.5 h-2.5 sm:w-3 sm:h-3" />
                      {study.category}
                    </span>
                    <span className="inline-flex items-center gap-1 px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-full bg-gray-100 text-gray-600 text-[10px] sm:text-xs font-medium">
                      <Calendar className="w-2.5 h-2.5 sm:w-3 sm:h-3" />
                      {study.date}
                    </span>
                  </div>

                  {/* Title - Smaller */}
                  <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-[#1a1a1a] leading-snug">
                    {study.title}
                  </h3>

                  {/* Description - Shorter */}
                  <p className="text-gray-600 leading-relaxed text-xs sm:text-sm">
                    {study.description}
                  </p>

                  {/* Key Points - Compact */}
                  <ul className="space-y-1.5 sm:space-y-2">
                    {[
                      "Strategic medical communications",
                      "Multi-channel engagement",
                      "Measurable ROI",
                    ].map((item, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2 text-gray-700"
                      >
                        <span className="w-1 sm:w-1.5 h-1 sm:h-1.5 rounded-full bg-[#00a65d] mt-1.5 flex-shrink-0" />
                        <span className="text-xs sm:text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA Button - Compact */}
                  <div className="pt-1 sm:pt-2">
                    <Link
                      href={`/case-studies/${study.slug}`}
                      className="inline-flex items-center gap-2 bg-[#0093cb] hover:bg-[#00a65d] text-white px-4 sm:px-5 py-2 sm:py-2.5 rounded-lg font-semibold text-xs sm:text-sm transition-all duration-300 hover:shadow-md group/btn"
                    >
                      Read More
                      <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 group-hover/btn:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* Bottom CTA - Compact */}
        <div className="flex justify-center mt-8 sm:mt-10 md:mt-12 lg:mt-16">
          <Link
            href="/case-studies"
            className="group flex items-center gap-2 bg-white border-2 border-[#0093cb] 
              text-[#0093cb] px-6 sm:px-8 py-2.5 sm:py-3 rounded-full font-semibold text-xs sm:text-sm 
              hover:bg-[#0093cb] hover:text-white transition-all duration-300"
          >
            <span>View All</span>
            <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}

// ─── NEW CARD GRID VARIANT (Reference Image Style) ─────────────────
function CaseStudiesGrid() {
  return (
    <section className="w-full bg-[#f8f9fa00] py-8 lg:py-10 xl:py-16">
      <div className="max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="text-center mb-8 lg:mb-10 xl:mb-12"
        >
          <p className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.2em] mb-2 sm:mb-3 flex items-center justify-center gap-2 text-[var(--clr-primary)]">
            <span className="inline-block w-4 sm:w-5 md:w-6 h-[1.5px] bg-[var(--clr-primary)]" />
            Case studies
            <span className="inline-block w-4 sm:w-5 md:w-6 h-[1.5px] bg-[var(--clr-primary)]" />
          </p>

          <h2 className="text-2xl sm:text-3xl lg:text-3xl xl:text-4xl font-extrabold capitalize tracking-tight mb-2 sm:mb-3 text-[var(--clr-text-dark)]">
            Real results for <span className="text-[#0093cb]">growing brands</span>
          </h2>

          <p className="text-xs lg:text-sm xl:text-[16px] leading-relaxed max-w-[780px] mx-auto text-[var(--clr-text-muted)] px-2 sm:px-0">
            Explore how companies increased client retention, boosted employee
            engagement, and strengthened brand loyalty through thoughtfully
            curated gifting campaigns.
          </p>
        </motion.div>

        {/* 3 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-5 xl:gap-8">
          {CASE_STUDIES_CARDS.map((study) => (
            <article
              key={study.id}
              className="group bg-white rounded-xl sm:rounded-2xl overflow-hidden shadow-md sm:shadow-lg 
                hover:shadow-[0_15px_40px_-12px_rgba(0,147,203,0.25)] 
                hover:shadow-2xl transition-all duration-500 ease-out 
                transform hover:-translate-y-1.5 sm:hover:-translate-y-2 flex flex-col
                border border-transparent hover:border-[#0093cb]/20"
            >
              {/* Clean Image Section (No Text Overlay) */}
              <div className="relative h-40 sm:h-44 md:h-48 lg:h-52 xl:h-56 overflow-hidden">
                <Image
                  src={study.image}
                  alt={study.title}
                  fill
                  className="object-contain scale-125 sm:scale-135 md:scale-150 xl:scale-180 transition-transform duration-700 group-hover:scale-130 sm:group-hover:scale-140 md:group-hover:scale-160 xl:group-hover:scale-190"
                  unoptimized
                />
                {/* Subtle primary glow on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0093cb]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Content Section - Title Moved Here */}
              <div className="px-4 lg:px-4 xl:px-6 py-3 lg:py-3 xl:py-4 flex flex-col flex-grow bg-white">
                {/* Category Tag */}
                <span className="inline-block w-fit px-2 sm:px-2.5 py-0.5 sm:py-1 bg-[#0093cb]/10 text-[#0093cb] text-[9px] sm:text-[10px] xl:text-xs font-semibold rounded mb-2 sm:mb-3">
                  {study.category}
                </span>

                {/* Title - Now Below Image */}
                <h3
                  className="text-[#1a1a1a] font-bold text-base sm:text-[16px] md:text-lg leading-snug mb-2 sm:mb-3 line-clamp-2 
                  group-hover:text-[#0093cb] transition-colors duration-300"
                >
                  {study.title}
                </h3>

                <p className="text-gray-600 text-xs xl:text-sm leading-relaxed mb-3 sm:mb-4 flex-grow line-clamp-2">
                  {study.description}
                </p>

                {/* Footer: Button with Primary Hover */}
                <div className="flex items-center justify-between pt-2 sm:pt-3 border-t border-gray-100">
                  <Link
                    href={`/case-studies/${study.slug}`}
                    className="inline-flex items-center gap-1.5 sm:gap-2 bg-[#8bde7a] group-hover:bg-[#0093cb] 
                      text-gray-900 group-hover:text-white px-3 lg:px-3 xl:px-5 py-1.5 sm:py-2 rounded-full font-semibold text-xs xl:text-sm 
                      transition-all duration-300 group/btn shadow-sm group-hover:shadow-lg group-hover:shadow-[#0093cb]/30"
                  >
                    Read Article
                    <ArrowRight className="w-3 h-3 sm:w-3.5 sm:h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                  </Link>

                  <div className="flex items-center gap-1 sm:gap-1.5 text-gray-400 text-[10px] xl:text-xs">
                    <Clock className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                    {study.readTime}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* View All Button */}
        <div className="flex justify-center mt-8 lg:mt-8 xl:mt-12">
          <Link
            href="/case-study"
            className="group flex items-center gap-2 sm:gap-3 bg-white border-2 border-[#0093cb] hover:border-[#0093cb] 
              text-[#0093cb] px-5 lg:px-5 xl:px-8 py-2 lg:py-2 xl:py-3 rounded-full font-semibold text-xs xl:text-sm 
              hover:bg-[#0093cb] hover:text-white hover:shadow-[0_8px_25px_-10px_rgba(0,147,203,0.4)]
              transition-all duration-300"
          >
            <span>View All Case Study</span>
            <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}

// ─── EXPORT BOTH SECTIONS ─────────────────
export default function CaseStudiesPage() {
  return (
    <div className="space-y-0">
      {/* Original Alternating Layout */}
      {/* <CaseStudiesSection /> */}

      {/* New Card Grid Variant */}
      <CaseStudiesGrid />
    </div>
  );
}