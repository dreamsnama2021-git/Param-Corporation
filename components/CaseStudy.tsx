'use client';

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
  {
    id: 1,
    name: "Anjali Mehta",
    initials: "AM",
    role: "HR Director",
    company: "TechFlow Solutions",
    content:
      "Param Corporation transformed our employee appreciation program. The personalized gifts arrived on time for our Diwali celebration, and the feedback from our team was overwhelmingly positive. Will definitely partner again!",
    rating: 5,
  },
  {
    id: 2,
    name: "Rajiv Kapoor",
    initials: "RK",
    role: "CEO",
    company: "FinEdge Analytics",
    content:
      "We commissioned Param Corporation for our client gifting during our 10th anniversary. The bespoke wooden keepsakes with our company history etched on them were a huge hit. Several clients mentioned they'd keep it on their desk!",
    rating: 5,
  },
  {
    id: 3,
    name: "Priya Sharma",
    initials: "PS",
    role: "Marketing Head",
    company: "Luxe Brands Inc.",
    content:
      "The festival hampers exceeded our expectations. Each box was meticulously curated with premium products and elegant packaging. Our customers appreciated the thoughtfulness, and it strengthened our brand perception significantly.",
    rating: 5,
  },
];

const avatarColors = ["var(--clr-primary)", "var(--clr-secondary)", "var(--clr-bg-dark)"];

const TestimonialSlider = () => {
  const [idx, setIdx] = useState(0);

  const prev = () => setIdx((i) => (i === 0 ? testimonials.length - 1 : i - 1));
  const next = () => setIdx((i) => (i === testimonials.length - 1 ? 0 : i + 1));

  const t = testimonials[idx];

  return (
    <section className="py-20 md:py-28" style={{ background: "var(--clr-bg-cream)" }}>
      <div className="ui-container">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <p
            className="text-[11px] font-bold uppercase tracking-[0.2em] mb-3"
            style={{ color: "var(--clr-primary)" }}
          >
            Client voices
          </p>
          <h2
            className="text-3xl md:text-4xl font-extrabold tracking-tight"
            style={{ color: "var(--clr-text-dark)" }}
          >
            What our clients say
          </h2>
        </motion.div>

        {/* Card */}
        <div className="max-w-2xl mx-auto">
          <div
            className="rounded-2xl p-8 md:p-10 relative overflow-hidden"
            style={{
              background: "#fff",
              border: "1px solid rgba(0,147,203,0.12)",
            }}
          >
            {/* Top gradient bar */}
            <span
              className="absolute top-0 left-8 right-8 h-[2px]"
              style={{ background: "linear-gradient(90deg, var(--clr-primary), var(--clr-secondary))" }}
            />

            <AnimatePresence mode="wait">
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.25 }}
              >
                {/* Big quote mark */}
                <p
                  className="text-6xl font-black leading-none mb-3 select-none"
                  style={{ color: "var(--clr-primary)", opacity: 0.18 }}
                >
                  "
                </p>

                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <svg key={i} width="14" height="14" viewBox="0 0 12 12" fill="var(--clr-primary)">
                      <path d="M6 1l1.3 2.6L10 4.1l-2 2 .5 2.9L6 7.7l-2.5 1.3.5-2.9-2-2 2.7-.5z" />
                    </svg>
                  ))}
                </div>

                <p
                  className="text-[15px] leading-[1.75] italic mb-6"
                  style={{ color: "#334155" }}
                >
                  {t.content}
                </p>

                {/* Author */}
                <div
                  className="flex items-center gap-3 pt-5"
                  style={{ borderTop: "1px solid rgba(0,147,203,0.12)" }}
                >
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center text-white text-[13px] font-bold flex-shrink-0"
                    style={{ background: avatarColors[idx] }}
                  >
                    {t.initials}
                  </div>
                  <div>
                    <p className="text-[14px] font-bold" style={{ color: "var(--clr-text-dark)" }}>
                      {t.name}
                    </p>
                    <p className="text-[12px]" style={{ color: "var(--clr-text-muted)" }}>
                      {t.role}
                    </p>
                    <p
                      className="text-[11px] font-semibold mt-0.5"
                      style={{ color: "var(--clr-primary)" }}
                    >
                      {t.company}
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Controls */}
          <div className="flex items-center justify-between mt-6 px-1">
            {/* Prev / Next */}
            <div className="flex gap-2">
              {[prev, next].map((fn, i) => (
                <button
                  key={i}
                  onClick={fn}
                  className="w-9 h-9 rounded-full border flex items-center justify-center transition-colors duration-200"
                  style={{
                    borderColor: "rgba(0,147,203,0.2)",
                    color: "var(--clr-primary)",
                  }}
                  onMouseEnter={e => {
                    (e.currentTarget as HTMLElement).style.background = "var(--clr-primary)";
                    (e.currentTarget as HTMLElement).style.color = "#fff";
                  }}
                  onMouseLeave={e => {
                    (e.currentTarget as HTMLElement).style.background = "transparent";
                    (e.currentTarget as HTMLElement).style.color = "var(--clr-primary)";
                  }}
                  aria-label={i === 0 ? "Previous" : "Next"}
                >
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path
                      d={i === 0 ? "M9 2.5L4.5 7 9 11.5" : "M5 2.5L9.5 7 5 11.5"}
                      stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
                    />
                  </svg>
                </button>
              ))}
            </div>

            {/* Dot indicators */}
            <div className="flex gap-1.5 items-center">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setIdx(i)}
                  className="rounded-full transition-all duration-300"
                  style={{
                    width: i === idx ? "18px" : "6px",
                    height: "6px",
                    background: i === idx ? "var(--clr-primary)" : "rgba(0,147,203,0.2)",
                  }}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default TestimonialSlider;