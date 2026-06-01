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
    title: "Diabetic Retinopathy Patient Awareness Tool",
    description:
      "Diabetic Retinopathy Patient Awareness Tool",
    image:
      "https://pub-735dbd7583d74ad5949115d6fdf77023.r2.dev/Case%20Study/case-study%20(1).png",
    slug: "diabetic-retinopathy-tool",
    readTime: "6 min read",
    category: "Retail",
  },
  {
    id: 2,
    title: "Scaling Healthcare Outreach with Digital-First Strategy",
    description:
      "Leveraging WhatsApp-led nurturing and targeted content to increase patient engagement by 200% for a leading clinic chain.",
    image:
      "https://auroveda.org/wp-content/uploads/2022/11/Ways-to-improve-Indias-current-Health-Care-system-copy.jpg",
    slug: "healthcare-digital",
    readTime: "4 min read",
    category: "Healthcare",
  },
  {
    id: 3,
    title: "Corporate Gifting Success for Fortune 500 Company",
    description:
      "Implementing a personalized gifting solution that improved employee retention and client satisfaction scores significantly.",
    image:
      "https://pub-735dbd7583d74ad5949115d6fdf77023.r2.dev/Koru/koru-about.jpeg",
    slug: "corporate-gifting",
    readTime: "5 min read",
    category: "Corporate",
  },
];

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
          <p className="text-xs xl:text-sm font-bold uppercase tracking-[0.2em] mb-2 sm:mb-3 flex items-center justify-center gap-2 text-[var(--clr-primary)]">
            <span className="inline-block w-4 sm:w-5 md:w-6 h-[1.5px] bg-[var(--clr-primary)]" />
            Case studies
            <span className="inline-block w-4 sm:w-5 md:w-6 h-[1.5px] bg-[var(--clr-primary)]" />
          </p>

          <h2 className="text-2xl sm:text-3xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-extrabold capitalize tracking-tight mb-2 sm:mb-3 text-[var(--clr-text-dark)]">
            Real results for <span className="text-[#0093cb]">growing brands</span>
          </h2>

          <p className="text-sm lg:text-sm xl:text-[18px] leading-relaxed max-w-[780px] mx-auto text-[var(--clr-text-muted)] px-2 sm:px-0">
            Explore how companies increased client retention, boosted employee
            engagement, and strengthened brand loyalty through thoughtfully
            curated gifting campaigns.
          </p>
        </motion.div>

        {/* 3 Cards Grid - Centered */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-5 xl:gap-8 justify-items-center">
          {CASE_STUDIES_CARDS.map((study) => (
            <article
              key={study.id}
              className="group bg-white rounded-xl sm:rounded-2xl overflow-hidden shadow-md sm:shadow-lg 
                hover:shadow-[0_15px_40px_-12px_rgba(0,147,203,0.25)] 
                hover:shadow-2xl transition-all duration-500 ease-out 
                w-full max-w-[350px]
                transform hover:-translate-y-1.5 sm:hover:-translate-y-2 flex flex-col
                border border-transparent hover:border-[#0093cb]/20"
            >
              {/* Clean Image Section (No Text Overlay) */}
              <div className="relative h-40 sm:h-44 md:h-48 lg:h-52 xl:h-80 overflow-hidden">
                <Image
                  src={study.image}
                  alt={study.title}
                  fill
                  className="object-fill transition-transform duration-700 group-hover:scale-105"
                  unoptimized
                />
                {/* Subtle primary glow on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0093cb]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Content Section - Title Moved Here */}
              <div className="px-4 lg:px-4 xl:px-6 py-3 lg:py-3 xl:py-4 flex flex-col flex-grow bg-white">
                {/* Card Title - Now Below Image */}
                <h3
                  className="text-[#1a1a1a] font-bold text-base sm:text-[16px] md:text-lg xl:text-xl leading-snug mb-1 sm:mb-1 line-clamp-2 
                  group-hover:text-[#0093cb] transition-colors duration-300"
                >
                  {study.title}
                </h3>

                <p className="text-gray-600 text-sm xl:text-[16px] leading-relaxed mb-2 flex-grow line-clamp-2">
                  {study.description}
                </p>

                {/* Footer: Button with Primary Hover */}
                <div className="flex items-center justify-between pt-2 sm:pt-3 border-t border-gray-100">
                  <Link
                    href={`/case-study/${study.slug}`}
                    className="inline-flex items-center gap-1.5 sm:gap-2 bg-[#8bde7a] group-hover:bg-[#0093cb] 
                      text-gray-900 group-hover:text-white px-3 lg:px-3 xl:px-5 py-1.5 sm:py-2 rounded-full font-semibold text-sm 
                      transition-all duration-300 group/btn shadow-sm group-hover:shadow-lg group-hover:shadow-[#0093cb]/30"
                  >
                    Read Article
                    <ArrowRight className="w-3 h-3 sm:w-3.5 sm:h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                  </Link>

                  <div className="flex items-center gap-1 sm:gap-1.5 text-gray-400 text-xs">
                    <Clock className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                    {study.readTime}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* View All Button - Centered */}
        <div className="flex justify-center mt-8 lg:mt-8 xl:mt-12">
          <Link
            href="/case-study"
            className="group flex items-center gap-2 sm:gap-3 bg-white border-2 border-[#0093cb] hover:border-[#0093cb] 
              text-[#0093cb] px-5 lg:px-5 xl:px-8 py-2 lg:py-2 xl:py-3 rounded-full font-semibold text-sm
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
      {/* New Card Grid Variant */}
      <CaseStudiesGrid />
    </div>
  );
}