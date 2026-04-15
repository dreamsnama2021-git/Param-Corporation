'use client';

import { motion } from "framer-motion";

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

// ─── Default Export: Clean Grid Layout (Original preserved) ──────────────────
const TestimonialCards = () => {
  return (
    <section className="py-10 md:py-10 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <p className="text-[11px] font-bold uppercase tracking-[0.2em] mb-3 flex items-center gap-2 text-[var(--clr-primary)]">
            <span className="inline-block w-5 h-[1.5px] bg-[var(--clr-primary)]" />
            Testimonials
          </p>
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-[var(--clr-text-dark)]">
            Trusted by industry leaders
          </h2>
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
              <span className="text-5xl font-black leading-none select-none text-[var(--clr-primary)] opacity-15">"</span>
              <p className="text-[14px] leading-[1.75] flex-1 text-[#334155]">{t.quote}</p>
              <div className="flex flex-col gap-0.5 pt-4 border-t border-[rgba(0,147,203,0.12)]">
                <p className="text-[14px] font-bold text-[var(--clr-text-dark)]">{t.name}</p>
                <p className="text-[12px] text-[var(--clr-text-muted)]">{t.role}</p>
                <p className="text-[11px] font-semibold mt-0.5 text-[var(--clr-primary)]">{t.company}</p>
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
  const featured = testimonials[0];
  const side = testimonials.slice(1);

  return (
    <section className="py-10 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── Header ───────────────────────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          {/* Eyebrow */}
          <div className="flex items-center gap-3 mb-3">
            <span className="w-8 h-px bg-[#639922] opacity-50" />
            <p
              className="text-[11px] font-medium tracking-[0.18em] uppercase"
              style={{ color: "#3B6D11" }}
            >
              Client testimonials
            </p>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-[var(--clr-text-dark)] leading-tight mb-3">
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

          <p className="text-[14px] text-[var(--clr-text-muted)] max-w-md leading-relaxed">
            Procurement leaders and HR directors rely on us to deliver curated
            gifting — at scale, without compromise.
          </p>
        </motion.div>

        {/* ── Grid ─────────────────────────────────────────────────────────── */}
        <div
          className="grid md:grid-cols-2 overflow-hidden rounded-2xl"
          style={{
            gap: "1.5px",
            background: "rgba(99,153,34,0.12)",
            border: "1.5px solid rgba(99,153,34,0.12)",
          }}
        >
          {/* Featured Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="md:row-span-2 bg-white flex flex-col p-8 md:p-10"
          >
            {/* Stat badge */}
            <div
              className="inline-flex items-center gap-2 self-start px-3.5 py-1.5 rounded-full text-[11px] font-medium tracking-[0.06em] uppercase mb-8"
              style={{
                background: "#EAF3DE",
                color: "#3B6D11",
                border: "0.5px solid #C0DD97",
              }}
            >
              <span
                className="w-1.5 h-1.5 rounded-full"
                style={{ background: "#639922" }}
              />
              {featured.stat}
            </div>

            {/* Quote mark */}
            <span
              className="text-[56px] leading-none select-none font-serif"
              style={{ color: "#639922", opacity: 0.2, marginBottom: "12px" }}
            >
              "
            </span>

            {/* Quote text */}
            <p
              className=" leading-relaxed mb-12"
              style={{
                fontFamily: "Georgia, 'Times New Roman', serif",
                fontSize: "20px",
                color: "var(--clr-text-dark)",
                lineHeight: 1.65,
              }}
            >
              {featured.quote}
            </p>

            {/* Divider */}
            {/* <div
              className="w-full mb-6"
              style={{ height: "1px", background: "rgba(99,153,34,0.12)" }}
            /> */}

            {/* Person */}
            <div className="flex items-center gap-4 mb-8">
              <div
                className="w-11 h-11 rounded-full flex items-center justify-center text-[13px] font-medium shrink-0"
                style={avatarStyles[featured.avatarColor]}
              >
                {featured.initials}
              </div>
              <div>
                <p className="text-[14px] font-medium text-[var(--clr-text-dark)]">
                  {featured.name}
                </p>
                <p className="text-[12px] text-[var(--clr-text-muted)]">
                  {featured.role}
                </p>
                <p
                  className="text-[11px] font-medium mt-0.5 tracking-[0.05em] uppercase"
                  style={{ color: "#3B6D11" }}
                >
                  {featured.company}
                </p>
              </div>
            </div>

           
          </motion.div>

          {/* Side cards */}
          {side.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: (i + 1) * 0.1 }}
              className="group relative bg-white hover:bg-[#f6fbf0] transition-colors duration-200 flex flex-col p-8"
            >
              {/* Top accent line */}
              <span
                className="absolute top-0 left-0 right-0 h-[2px] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-t"
                style={{ background: "#639922" }}
              />

              {/* Stat */}
              <p
                className="text-[11px] font-medium tracking-[0.06em] uppercase mb-4 flex items-center gap-2"
                style={{ color: "#3B6D11" }}
              >
                <span
                  className="inline-block"
                  style={{ width: "18px", height: "1px", background: "#639922", opacity: 0.5 }}
                />
                {t.stat}
              </p>

              {/* Quote mark */}
              <span
                className="text-[40px] leading-none select-none font-serif mb-2"
                style={{ color: "#639922", opacity: 0.2 }}
              >
                "
              </span>

              {/* Quote */}
              <p
                className="flex-1 leading-relaxed mb-6"
                style={{
                  fontFamily: "Georgia, 'Times New Roman', serif",
                  fontSize: "15px",
                  color: "var(--clr-text-dark)",
                  lineHeight: 1.7,
                }}
              >
                {t.quote}
              </p>

              {/* Divider */}
              {/* <div
                className="w-full mb-5"
                style={{ height: "1px", background: "rgba(99,153,34,0.12)" }}
              /> */}

              {/* Person */}
              <div className="flex items-center gap-3">
                <div
                  className="w-9 h-9 rounded-full flex items-center justify-center text-[12px] font-medium shrink-0"
                  style={avatarStyles[t.avatarColor]}
                >
                  {t.initials}
                </div>
                <div>
                  <p className="text-[13px] font-medium text-[var(--clr-text-dark)]">
                    {t.name}
                  </p>
                  <p className="text-[11px] text-[var(--clr-text-muted)]">
                    {t.role}
                  </p>
                  <p
                    className="text-[10px] font-medium mt-0.5 tracking-[0.05em] uppercase"
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