'use client';

import { motion } from "framer-motion";

type TagVariant = "best-seller" | "new-arrival" | "trending" | "limited" | "popular" | "corporate";

const deals = [
  {
    tag: "Best seller" as TagVariant,
    tagVariant: "best-seller" as TagVariant,
    title: "Executive Leather Journal Set",
    originalPrice: "₹4,500",
    dealPrice: "₹3,200",
    savings: "29% OFF",
    minOrder: "50 units",
    rating: 5,
  },
  {
    tag: "New arrival" as TagVariant,
    tagVariant: "new-arrival" as TagVariant,
    title: "Premium Drinkware Collection",
    originalPrice: "₹2,800",
    dealPrice: "₹1,950",
    savings: "30% OFF",
    minOrder: "100 units",
    rating: 4,
  },
  {
    tag: "Trending" as TagVariant,
    tagVariant: "trending" as TagVariant,
    title: "Gourmet Diwali Hamper",
    originalPrice: "₹6,000",
    dealPrice: "₹4,500",
    savings: "25% OFF",
    minOrder: "25 units",
    rating: 5,
  },
  {
    tag: "Limited" as TagVariant,
    tagVariant: "limited" as TagVariant,
    title: "Tech Accessories Bundle",
    originalPrice: "₹3,500",
    dealPrice: "₹2,450",
    savings: "30% OFF",
    minOrder: "75 units",
    rating: 4,
  },
  {
    tag: "Popular" as TagVariant,
    tagVariant: "popular" as TagVariant,
    title: "Artisanal Tea & Snack Box",
    originalPrice: "₹2,200",
    dealPrice: "₹1,650",
    savings: "25% OFF",
    minOrder: "50 units",
    rating: 5,
  },
  {
    tag: "Corporate" as TagVariant,
    tagVariant: "corporate" as TagVariant,
    title: "Branded Welcome Kit",
    originalPrice: "₹5,000",
    dealPrice: "₹3,750",
    savings: "25% OFF",
    minOrder: "100 units",
    rating: 5,
  },
];

const tagStyles: Record<string, string> = {
  "best-seller": "bg-[rgba(0,147,203,0.1)] text-[#005f84]",
  "new-arrival": "bg-[rgba(0,166,93,0.12)] text-[#005c35]",
  "trending":    "bg-[rgba(139,222,122,0.25)] text-[#2d6b1e]",
  "limited":     "bg-[rgba(239,68,68,0.1)] text-[#991b1b]",
  "popular":     "bg-[rgba(251,191,36,0.15)] text-[#92400e]",
  "corporate":   "bg-[rgba(0,147,203,0.08)] text-[#005f84]",
};

const ArrowDiag = () => (
  <svg width="12" height="12" viewBox="0 0 14 14" fill="none">
    <path d="M2.5 11.5L11.5 2.5M11.5 2.5H5M11.5 2.5V9"
      stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const StarIcon = ({ filled }: { filled: boolean }) => (
  <svg width="11" height="11" viewBox="0 0 12 12" fill={filled ? "#0093cb" : "#e2e8f0"}>
    <path d="M6 1l1.3 2.6L10 4.1l-2 2 .5 2.9L6 7.7l-2.5 1.3.5-2.9-2-2 2.7-.5z" />
  </svg>
);

const TrendingChits = () => {
  return (
    <section className="py-20 md:py-28" style={{ background: "var(--clr-bg-cream)" }}>
      <div className="ui-container">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-14"
        >
          <div>
            <p
              className="text-[11px] font-semibold uppercase tracking-[0.2em] mb-3 flex items-center gap-2"
              style={{ color: "var(--clr-primary)" }}
            >
              <span
                className="inline-block w-5 h-0.5 rounded-full"
                style={{ background: "var(--clr-primary)" }}
              />
              Trending deals
            </p>
            <h2
              className="text-4xl md:text-5xl font-extrabold tracking-tight leading-[1.05]"
              style={{ color: "var(--clr-text-dark)" }}
            >
              Bulk order{" "}
              <span style={{ color: "var(--clr-primary)" }}>specials</span>
            </h2>
          </div>

          <a
            href="#collections"
            className="inline-flex items-center gap-2 text-sm font-semibold px-5 py-2 rounded-full border-[1.5px] transition-all duration-200 self-start md:self-auto"
            style={{
              color: "var(--clr-primary)",
              borderColor: "var(--clr-primary)",
            }}
            onMouseEnter={e => {
              (e.currentTarget as HTMLElement).style.background = "var(--clr-primary)";
              (e.currentTarget as HTMLElement).style.color = "#fff";
            }}
            onMouseLeave={e => {
              (e.currentTarget as HTMLElement).style.background = "transparent";
              (e.currentTarget as HTMLElement).style.color = "var(--clr-primary)";
            }}
          >
            View all deals
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M2.5 7h9M8 3.5L11.5 7 8 10.5"
                stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </motion.div>

        {/* Grid — uses 1.5px gaps on brand color as dividers */}
        <div
          className="grid sm:grid-cols-2 lg:grid-cols-3 overflow-hidden rounded-2xl"
          style={{
            gap: "1.5px",
            background: "rgba(0,147,203,0.12)",
            border: "1.5px solid rgba(0,147,203,0.12)",
          }}
        >
          {deals.map((deal, i) => (
            <motion.div
              key={deal.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: i * 0.06 }}
              className="group relative flex flex-col gap-3 p-7 cursor-pointer overflow-hidden transition-colors duration-200"
              style={{ background: "#fff" }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLElement).style.background = "#f0f9ff";
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLElement).style.background = "#fff";
              }}
            >
              {/* Bottom accent bar */}
              <span
                className="absolute bottom-0 left-0 right-0 h-[3px] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"
                style={{ background: "var(--clr-primary)" }}
              />

              {/* Tag row */}
              <div className="flex justify-between items-center">
                <span
                  className={`text-[10px] font-bold tracking-[0.12em] uppercase px-2.5 py-1 rounded-[4px] ${tagStyles[deal.tagVariant]}`}
                >
                  {deal.tag}
                </span>
                <div
                  className="w-7 h-7 rounded-full border flex items-center justify-center opacity-0 translate-x-1 -translate-y-1 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-200"
                  style={{
                    borderColor: "rgba(0,147,203,0.2)",
                    color: "var(--clr-primary)",
                  }}
                >
                  <ArrowDiag />
                </div>
              </div>

              {/* Title */}
              <p
                className="text-[15px] font-bold leading-snug transition-colors duration-200 group-hover:text-[var(--clr-primary)]"
                style={{ color: "var(--clr-text-dark)" }}
              >
                {deal.title}
              </p>

              {/* Pricing */}
              <div className="flex items-baseline flex-wrap gap-2">
                <span
                  className="text-[1.6rem] font-extrabold tracking-tight"
                  style={{ color: "var(--clr-text-dark)" }}
                >
                  {deal.dealPrice}
                </span>
                <span
                  className="text-[12px] line-through"
                  style={{ color: "var(--clr-text-muted)" }}
                >
                  {deal.originalPrice}
                </span>
                <span
                  className="text-[10px] font-bold px-2 py-0.5 rounded-[4px] text-white"
                  style={{ background: "var(--clr-secondary)" }}
                >
                  {deal.savings}
                </span>
              </div>

              {/* MOQ */}
              <p
                className="text-[11px] flex items-center gap-1.5"
                style={{ color: "var(--clr-text-muted)" }}
              >
                <span
                  className="w-1 h-1 rounded-full inline-block"
                  style={{ background: "var(--clr-accent)" }}
                />
                Min. order: {deal.minOrder}
              </p>

              {/* Stars */}
              <div className="flex gap-0.5 mt-auto pt-1">
                {Array.from({ length: 5 }).map((_, j) => (
                  <StarIcon key={j} filled={j < deal.rating} />
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default TrendingChits;