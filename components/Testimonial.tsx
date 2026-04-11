'use client';

import { motion } from "framer-motion";

const testimonials = [
  {
    quote:
      "Param Corporation transformed our annual gifting program. Their attention to detail and ability to customize at scale is unmatched in the industry.",
    name: "Rajesh Menon",
    role: "VP of Human Resources",
    company: "Tata Consultancy Services",
  },
  {
    quote:
      "We've been working with Param for 5 years now. They handle Diwali gifts for our 3,000+ employees every year without a single hiccup. True professionals.",
    name: "Sneha Kapoor",
    role: "Head of Procurement",
    company: "Infosys BPM",
  },
  {
    quote:
      "The quality of their curated hampers helped us strengthen our relationship with key clients. It's not just a gift — it's a statement.",
    name: "Arjun Patel",
    role: "Business Development Director",
    company: "Wipro Limited",
  },
];

const TestimonialCards = () => {
  return (
    <section className="py-20 md:py-28" style={{ background: "#fff" }}>
      <div className="ui-container">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <p
            className="text-[11px] font-bold uppercase tracking-[0.2em] mb-3 flex items-center gap-2"
            style={{ color: "var(--clr-primary)" }}
          >
            <span className="inline-block w-5 h-[1.5px]" style={{ background: "var(--clr-primary)" }} />
            Testimonials
          </p>
          <h2
            className="text-3xl md:text-4xl font-extrabold tracking-tight"
            style={{ color: "var(--clr-text-dark)" }}
          >
            Trusted by industry leaders
          </h2>
        </motion.div>

        {/* Grid */}
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
              className="group relative flex flex-col gap-4 p-8 overflow-hidden cursor-default transition-colors duration-200"
              style={{ background: "#fff" }}
              onMouseEnter={e => (e.currentTarget.style.background = "#f0f9ff")}
              onMouseLeave={e => (e.currentTarget.style.background = "#fff")}
            >
              {/* Bottom accent */}
              <span
                className="absolute bottom-0 left-0 right-0 h-[2px] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"
                style={{ background: "var(--clr-primary)" }}
              />

              {/* Big quote */}
              <span
                className="text-5xl font-black leading-none select-none"
                style={{ color: "var(--clr-primary)", opacity: 0.15 }}
              >
                "
              </span>

              <p
                className="text-[14px] leading-[1.75] flex-1"
                style={{ color: "#334155" }}
              >
                {t.quote}
              </p>

              {/* Author */}
              <div
                className="flex flex-col gap-0.5 pt-4"
                style={{ borderTop: "1px solid rgba(0,147,203,0.12)" }}
              >
                <p className="text-[14px] font-bold" style={{ color: "var(--clr-text-dark)" }}>
                  {t.name}
                </p>
                <p className="text-[12px]" style={{ color: "var(--clr-text-muted)" }}>
                  {t.role}
                </p>
                <p className="text-[11px] font-semibold mt-0.5" style={{ color: "var(--clr-primary)" }}>
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

export default TestimonialCards;