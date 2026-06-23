'use client';

import { motion } from "framer-motion";

const categories = [
  {
    number: "01",
    title: "Festival hampers",
    description:
      "Diwali, Christmas & New Year collections — premium brands, regional artisans, unforgettable packaging.",
    pills: ["Diwali", "Christmas", "New Year", "Custom themes"],
    tag: "Seasonal",
    tagClass: "bg-[rgba(239,159,39,0.15)] text-[#EF9F27]",
  },
  {
    number: "02",
    title: "Employee recognition",
    description:
      "Onboarding kits, work anniversaries, milestone awards — signals that your people are worth the effort.",
    pills: ["Onboarding", "Milestones", "Performance", "Bulk orders"],
    tag: "Year-round",
    tagClass: "bg-[rgba(0,147,203,0.15)] text-[#0093cb]",
  },
  {
    number: "03",
    title: "Client relations",
    description:
      "Deal closures, partnership launches, key account gestures — the kind that turn business into loyalty.",
    pills: ["Deal closures", "Retainers", "Anniversaries", "Bespoke"],
    tag: "On-demand",
    tagClass: "bg-[rgba(0,166,93,0.15)] text-[#00a65d]",
  },
  {
    number: "04",
    title: "Wellness & lifestyle",
    description:
      "Self-care rituals, gourmet picks, lifestyle accessories — for people who appreciate something truly chosen.",
    pills: ["Self-care", "Gourmet", "Accessories", "Subscriptions"],
    tag: "Curated",
    tagClass: "bg-[rgba(127,119,221,0.15)] text-[#AFA9EC]",
  },
];

const tickerItems = [
  "Festival hampers", "Employee recognition", "Client relations",
  "Wellness & lifestyle", "Premium gifting", "Bespoke collections",
];

const ArrowIcon = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
    <path
      d="M2.5 11.5L11.5 2.5M11.5 2.5H5M11.5 2.5V9"
      stroke="currentColor" strokeWidth="1.4"
      strokeLinecap="round" strokeLinejoin="round"
    />
  </svg>
);

const SubCategory = () => {
  return (
    <section id="collections" className="overflow-hidden" style={{ background: "var(--clr-bg-dark)" }}>

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="flex items-end justify-between flex-wrap gap-4 px-6 lg:px-12 pt-20 pb-14"
      >
        <div>
          <p className="text-[11px] uppercase tracking-[0.22em] text-white/40 mb-3">
            What we offer
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.05] tracking-tight">
            Gifts that make<br />
            <em className="not-italic" style={{ color: "var(--clr-primary)" }}>people feel it.</em>
          </h2>
        </div>
        <span className="text-[11px] text-white/35 border border-white/10 px-3.5 py-1.5 rounded-full">
          04 categories
        </span>
      </motion.div>

      {/* List */}
      <div className="border-t border-white/[0.08]">
        {categories.map((cat, i) => (
          <motion.div
            key={cat.title}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.07 }}
            className="group relative grid grid-cols-[clamp(60px,10vw,110px)_1fr] md:grid-cols-[clamp(60px,10vw,110px)_1fr_auto] items-center gap-x-6 md:gap-x-8 px-6 lg:px-12 py-8 md:py-9 border-b border-white/[0.08] cursor-pointer transition-colors duration-300 hover:bg-[rgba(0,147,203,0.07)]"
          >
            {/* Left accent bar */}
            <span className="absolute left-0 top-0 bottom-0 w-[3px] bg-[var(--clr-primary)] scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-bottom" />

            {/* Number */}
            <span className="text-[clamp(3rem,7vw,5.5rem)] font-extrabold leading-none tracking-[-0.04em] text-white/[0.07] group-hover:text-[var(--clr-primary)] group-hover:opacity-100 transition-all duration-300 select-none">
              {cat.number}
            </span>

            {/* Body */}
            <div className="flex flex-col gap-2.5">
              <p className="text-[clamp(1.1rem,2vw,1.4rem)] font-semibold text-white/85 group-hover:text-white transition-colors duration-300 leading-snug">
                {cat.title}
              </p>
              <p className="text-[13.5px] text-white/40 leading-relaxed max-w-[480px]">
                {cat.description}
              </p>
              <div className="flex flex-wrap gap-1.5 opacity-0 translate-y-1.5 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 delay-75">
                {cat.pills.map((pill) => (
                  <span
                    key={pill}
                    className="text-[11px] px-2.5 py-1 rounded-full border text-[var(--clr-primary)]"
                    style={{ borderColor: "rgba(0,147,203,0.4)" }}
                  >
                    {pill}
                  </span>
                ))}
              </div>
            </div>

            {/* Right — desktop only */}
            <div className="hidden md:flex flex-col items-end gap-3.5 min-w-[90px]">
              <span className={`text-[10px] font-bold tracking-[0.14em] uppercase px-3 py-1.5 rounded-[4px] ${cat.tagClass}`}>
                {cat.tag}
              </span>
              <div
                className="w-9 h-9 rounded-full border border-white/15 flex items-center justify-center text-white/30 -rotate-45 group-hover:border-[var(--clr-primary)] group-hover:text-[var(--clr-primary)] group-hover:rotate-0 transition-all duration-300"
              >
                <ArrowIcon />
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Ticker */}
      <div className="overflow-hidden py-3.5" style={{ background: "var(--clr-primary)" }}>
        <div
          className="flex whitespace-nowrap"
          style={{ animation: "ticker 28s linear infinite", width: "max-content" }}
        >
          {[...tickerItems, ...tickerItems].map((item, i) => (
            <span key={i} className="text-[12px] font-bold tracking-[0.12em] uppercase text-white/85 px-8">
              {item}
              <span className="text-white/40 ml-3">✦</span>
            </span>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes ticker {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
};

export default SubCategory;