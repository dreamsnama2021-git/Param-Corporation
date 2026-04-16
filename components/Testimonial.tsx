"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const testimonials = [
  {
    quote:
      "Param Corporation transformed our annual gifting program. Their attention to detail and ability to customize at scale is unmatched in the industry.",
    name: "Rajesh Menon",
    role: "VP of Human Resources",
    company: "Tata Consultancy Services",
    stat: "500+ gifts delivered",
    initials: "RM",
    avatarColor: "green",
  },
  {
    quote:
      "We've been working with Param for 5 years now. They handle Diwali gifts for our 3,000+ employees every year without a single hiccup.",
    name: "Sneha Kapoor",
    role: "Head of Procurement",
    company: "Infosys BPM",
    stat: "5-year partnership",
    initials: "SK",
    avatarColor: "teal",
  },
  {
    quote:
      "The quality of their curated hampers helped us strengthen our relationship with key clients. It's not just a gift — it's a statement.",
    name: "Arjun Patel",
    role: "Business Development Director",
    company: "Wipro Limited",
    stat: "98% satisfaction",
    initials: "AP",
    avatarColor: "amber",
  },
  {
    quote:
      "The quality of their curated hampers helped us strengthen our relationship with key clients. It's not just a gift — it's a statement.",
    name: "Arjun Patel",
    role: "Business Development Director",
    company: "Wipro Limited",
    stat: "98% satisfaction",
    initials: "AP",
    avatarColor: "amber",
  },
];

const trustStats = [
  { num: "3,000+", label: "Employees gifted" },
  { num: "5 yrs", label: "Avg. partnership" },
  { num: "98%", label: "Satisfaction rate" },
  { num: "40+", label: "Enterprise clients" },
];

const avatarStyles: Record<string, { bg: string; color: string }> = {
  green: { bg: "#EAF3DE", color: "#3B6D11" },
  teal: { bg: "#E1F5EE", color: "#0F6E56" },
  amber: { bg: "#FAEEDA", color: "#854F0B" },
};

// ─── Data ──────────────────────────────────────────────────────────────────
const featuredTestimonials = [
  {
    id: 1,
    quote:
      "The personalized executive hampers for our board members were exquisite. Param Corporation's attention to detail is unmatched.",
    name: "Rajesh Menon",
    role: "VP of Human Resources",
    company: "TATA CONSULTANCY SERVICES",
    stat: "500+ GIFTS DELIVERED",
    initials: "RM",
    avatarColor: "green",
    productImage:
      "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 2,
    quote:
      "Our Diwali distribution across 12 locations was seamless. The eco-friendly packaging received immense praise from our team.",
    name: "Siddharth Mehta",
    role: "Director of Ops",
    company: "RELIANCE RETAIL",
    stat: "1200+ HAMPERS",
    initials: "SM",
    avatarColor: "teal",
    productImage:
      "https://images.unsplash.com/photo-1513201099705-a9746e1e201f?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 3,
    quote:
      "Finding a partner who understands premium branding while maintaining scale was tough until we found this team.",
    name: "Ananya Iyer",
    role: "Procurement Head",
    company: "HDFC BANK",
    stat: "98% SATISFACTION",
    initials: "AI",
    avatarColor: "blue",
    productImage:
      "https://images.unsplash.com/photo-1523293182086-7651a899d37f?q=80&w=800&auto=format&fit=crop",
  },
];

const sideTestimonials = [
  {
    quote:
      "We've been working with Param for 5 years now. They handle gifts for our 3,000+ employees flawlessly.",
    name: "Sneha Kapoor",
    role: "Head of Procurement",
    company: "INFOSYS BPM",
    stat: "5-YEAR PARTNERSHIP",
    initials: "SK",
    avatarColor: "green",
  },
  {
    quote:
      "The quality of their curated hampers helped us strengthen our relationship with key clients. It's a statement.",
    name: "Arjun Patel",
    role: "Business Dev Director",
    company: "WIPRO LIMITED",
    stat: "ELITE CLIENTELE",
    initials: "AP",
    avatarColor: "teal",
  },
];
// ─── Default Export: Clean Grid Layout (Original preserved) ──────────────────
const TestimonialCards = () => {
  return (
    <section className="py-10 md:py-10 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
       <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="text-center mb-12"
        >
          <p className="text-[11px] font-bold uppercase tracking-[0.2em] mb-3 flex items-center justify-center gap-2 text-[#639922]">
            <span className="inline-block w-6 h-[1.5px] bg-[#639922]" />
             Client testimonials
            <span className="inline-block w-6 h-[1.5px] bg-[#639922]" />
          </p>
          <h2 className="ui-h1 font-extrabold tracking-tight mb-3 text-[var(--clr-text-dark)]">
                Trusted by{" "}
            <span
              style={{
                background: "linear-gradient(90deg, #3B6D11, #0F6E56)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              India's largest
            </span>{" "}
            enterprises
          </h2>
          <p className="text-sm leading-relaxed max-w-[780px] mx-auto text-[var(--clr-text-muted)]">
            Procurement leaders and HR directors rely on us to deliver curated
            gifting — at scale, without compromise.
          </p>
        </motion.div>

        <div
          className="grid md:grid-cols-3 overflow-hidden rounded-2xl"
          style={{
            gap: "1.5px",
            background: "rgba(0,147,203,0.12)",
            border: "1.5px solid rgba(0,147,203,0.12)",
          }}
        >
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="group relative flex flex-col gap-4 p-8 overflow-hidden cursor-default transition-colors duration-200 bg-white hover:bg-[#f0f9ff]"
            >
              <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[var(--clr-primary)] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              <span className="text-5xl font-black leading-none select-none text-[var(--clr-primary)] opacity-15">
                "
              </span>
              <p className="text-[14px] leading-[1.75] flex-1 text-[#334155]">
                {t.quote}
              </p>
              <div className="flex flex-col gap-0.5 pt-4 border-t border-[rgba(0,147,203,0.12)]">
                <p className="text-[14px] font-bold text-[var(--clr-text-dark)]">
                  {t.name}
                </p>
                <p className="text-[12px] text-[var(--clr-text-muted)]">
                  {t.role}
                </p>
                <p className="text-[11px] font-semibold mt-0.5 text-[var(--clr-primary)]">
                  {t.company}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// ─── Named Export: Premium Editorial Redesign ────────────────────────────────
export const TestimonialCardsVariant = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  // Auto-slide effect every 6 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % featuredTestimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const featured = featuredTestimonials[activeIndex];

  return (
    <section className="py-16 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="text-center mb-12"
        >
          <p className="text-[11px] font-bold uppercase tracking-[0.2em] mb-3 flex items-center justify-center gap-2 text-[#639922]">
            <span className="inline-block w-6 h-[1.5px] bg-[#639922]" />
             Client testimonials
            <span className="inline-block w-6 h-[1.5px] bg-[#639922]" />
          </p>
          <h2 className="ui-h1 font-extrabold tracking-tight mb-3 text-[var(--clr-text-dark)]">
                Trusted by{" "}
            <span
              style={{
                background: "linear-gradient(90deg, #3B6D11, #0F6E56)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              India's largest
            </span>{" "}
            enterprises
          </h2>
          <p className="text-sm leading-relaxed max-w-[780px] mx-auto text-[var(--clr-text-muted)]">
            Procurement leaders and HR directors rely on us to deliver curated
            gifting — at scale, without compromise.
          </p>
        </motion.div>

        {/* Main Grid Layout */}
        <div className="grid lg:grid-cols-3 gap-[1.5px] bg-[#6399221f] border-[1.5px] border-[#6399221f] rounded-3xl overflow-hidden">
          {/* LEFT: Product Slider Section (Spans 2 columns) */}
          <div className="lg:col-span-2 bg-white relative min-h-[550px] flex flex-col">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -10 }}
                transition={{ duration: 0.5 }}
                className="flex flex-col md:flex-row h-full"
              >
                {/* Product Column */}
                <div className="md:w-1/2 p-8 md:p-10 border-r border-[#63992212] flex flex-col justify-between">
                  <div className="relative aspect-[4/5] rounded-xl overflow-hidden shadow-2xl">
                    <motion.img
                      initial={{ scale: 1.1 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 0.7 }}
                      src={featured.productImage}
                      alt="Product"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    <div className="absolute bottom-4 left-4">
                      <p className="text-white text-[10px] tracking-widest uppercase font-bold">
                        Featured Catalog
                      </p>
                    </div>
                  </div>

                  {/* Profile within the product column */}
                  <div className="flex items-center gap-4 mt-8">
                    <div
                      className="w-12 h-12 rounded-full flex items-center justify-center text-[14px] font-bold shrink-0"
                      style={avatarStyles[featured.avatarColor]}
                    >
                      {featured.initials}
                    </div>
                    <div>
                      <p className="text-[15px] font-bold text-[#1a1a1a]">
                        {featured.name}
                      </p>
                      <p className="text-[11px] font-bold tracking-wider uppercase text-[#3B6D11]">
                        {featured.company}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Quote Column */}
                <div className="md:w-1/2 p-8 md:p-10 flex flex-col bg-[#fcfdfa]">
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-[10px] font-bold tracking-wider uppercase mb-8 bg-[#EAF3DE] text-[#3B6D11] border border-[#C0DD97] w-fit">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#639922]" />
                    {featured.stat}
                  </div>

                  <div className="flex-1">
                    <span className="text-[60px] leading-none font-serif text-[#639922] opacity-20 block -mb-4">
                      “
                    </span>
                    <p className="text-[20px] md:text-[22px] font-serif leading-relaxed text-[#1a1a1a] italic">
                      {featured.quote}
                    </p>
                  </div>

                  {/* Slider Pagination */}
                  <div className="flex gap-2 mt-8">
                    {featuredTestimonials.map((_, idx) => (
                      <button
                        key={idx}
                        onClick={() => setActiveIndex(idx)}
                        className={`h-1.5 transition-all duration-300 rounded-full ${
                          idx === activeIndex
                            ? "w-10 bg-[#639922]"
                            : "w-2 bg-[#63992233]"
                        }`}
                        aria-label={`Go to slide ${idx + 1}`}
                      />
                    ))}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* RIGHT: Side Cards (Static Grid) */}
          <div className="lg:col-span-1 flex flex-col gap-[1.5px]">
            {sideTestimonials.map((t, i) => (
              <div
                key={i}
                className="bg-white p-8 flex-1 group relative flex flex-col justify-between transition-colors duration-300 hover:bg-[#f6fbf0]"
              >
                <span className="absolute top-0 left-0 right-0 h-[2px] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left bg-[#639922]" />

                <div>
                  <p className="text-[10px] font-bold tracking-widest uppercase text-[#3B6D11] mb-6 flex items-center gap-2">
                    <span className="w-4 h-px bg-[#639922] opacity-40" />
                    {t.stat}
                  </p>
                  <p className="text-[15px] font-serif leading-relaxed text-[#444] italic">
                    "{t.quote}"
                  </p>
                </div>

                <div className="flex items-center gap-3 mt-8">
                  <div
                    className="w-9 h-9 rounded-full flex items-center justify-center text-[11px] font-bold shrink-0"
                    style={avatarStyles[t.avatarColor]}
                  >
                    {t.initials}
                  </div>
                  <div>
                    <p className="text-[13px] font-bold text-[#1a1a1a]">
                      {t.name}
                    </p>
                    <p className="text-[11px] text-gray-500">{t.company}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// ─── Named Export: Premium Editorial Redesign (4-Card Grid) ──────────────────
export const TestimonialCardsVariant2 = () => {
  // Take the first 4 testimonials to create the 2x2 grid
  const displayTestimonials = testimonials.slice(0, 4);

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ── Header ───────────────────────────────────────────────────────── */}
     
         <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="text-center mb-12"
        >
          <p className="text-[11px] font-bold uppercase tracking-[0.2em] mb-3 flex items-center justify-center gap-2 text-[#639922]">
            <span className="inline-block w-6 h-[1.5px] bg-[#639922]" />
             Client testimonials
            <span className="inline-block w-6 h-[1.5px] bg-[#639922]" />
          </p>
          <h2 className="ui-h1 font-extrabold tracking-tight mb-3 text-[var(--clr-text-dark)]">
                Trusted by{" "}
            <span
              style={{
                background: "linear-gradient(90deg, #3B6D11, #0F6E56)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              India's largest
            </span>{" "}
            enterprises
          </h2>
          <p className="text-sm leading-relaxed max-w-[780px] mx-auto text-[var(--clr-text-muted)]">
            Procurement leaders and HR directors rely on us to deliver curated
            gifting — at scale, without compromise.
          </p>
        </motion.div>
        {/* ── Grid: Uniform 2x2 ────────────────────────────────────────────── */}
        <div
          className="grid grid-cols-1 md:grid-cols-2 overflow-hidden rounded-2xl"
          style={{
            gap: "1.5px", // This creates the thin border lines between cards
            background: "rgba(99,153,34,0.12)",
            border: "1.5px solid rgba(99,153,34,0.12)",
          }}
        >
          {displayTestimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative bg-white hover:bg-[#fcfdfa] transition-colors duration-300 flex flex-col p-8 md:p-10"
            >
              {/* Top accent line visible on hover */}
              <span
                className="absolute top-0 left-0 right-0 h-[3px] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"
                style={{ background: "#639922" }}
              />

              {/* Stat / Label */}
              <p
                className="text-[11px] font-medium tracking-[0.06em] uppercase mb-6 flex items-center gap-2"
                style={{ color: "#3B6D11" }}
              >
                <span
                  className="inline-block"
                  style={{
                    width: "20px",
                    height: "1px",
                    background: "#639922",
                    opacity: 0.5,
                  }}
                />
                {t.stat}
              </p>

              {/* Quote mark */}
              <span
                className="text-[44px] leading-none select-none font-serif mb-2"
                style={{ color: "#639922", opacity: 0.2 }}
              >
                "
              </span>

              {/* Quote text */}
              <p
                className="flex-1 leading-relaxed mb-8"
                style={{
                  fontFamily: "Georgia, 'Times New Roman', serif",
                  fontSize: "16px",
                  color: "var(--clr-text-dark)",
                  lineHeight: 1.7,
                }}
              >
                {t.quote}
              </p>

              {/* Person Details */}
              <div className="flex items-center gap-4">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-[12px] font-semibold shrink-0"
                  style={avatarStyles[t.avatarColor]}
                >
                  {t.initials}
                </div>
                <div>
                  <p className="text-[14px] font-bold text-[var(--clr-text-dark)] leading-tight">
                    {t.name}
                  </p>
                  <p className="text-[12px] text-[var(--clr-text-muted)] mb-0.5">
                    {t.role}
                  </p>
                  <p
                    className="text-[10px] font-bold tracking-[0.05em] uppercase"
                    style={{ color: "#3B6D11" }}
                  >
                    {t.company}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialCards;
