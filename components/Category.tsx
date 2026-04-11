'use client';

import { motion } from "framer-motion";

const categories = [
  {
    number: "01",
    title: "Festival hampers",
    description:
      "Diwali, Christmas & New Year collections built around premium brands, regional artisans, and packaging that gets remembered long after the occasion.",
    pills: ["Diwali", "Christmas", "New Year", "Custom themes"],
    tag: "Seasonal",
    tagStyle: "bg-[#FAEEDA] text-[#854F0B] dark:bg-[#633806] dark:text-[#FAC775]",
  },
  {
    number: "02",
    title: "Employee recognition",
    description:
      "Onboarding kits, work anniversaries, milestone awards — gifts that signal to people they're seen, valued, and worth the effort.",
    pills: ["Onboarding", "Milestones", "Performance", "Bulk orders"],
    tag: "Year-round",
    tagStyle: "bg-[#E6F1FB] text-[#185FA5] dark:bg-[#0C447C] dark:text-[#B5D4F4]",
  },
  {
    number: "03",
    title: "Client relations",
    description:
      "Bespoke gifts for key account closures, deal signings, and partnership launches. The kind of gesture that turns a transaction into a relationship.",
    pills: ["Deal closures", "Retainers", "Anniversaries", "Bespoke"],
    tag: "On-demand",
    tagStyle: "bg-[#E1F5EE] text-[#0F6E56] dark:bg-[#085041] dark:text-[#9FE1CB]",
  },
  {
    number: "04",
    title: "Wellness & lifestyle",
    description:
      "Self-care rituals, gourmet selections, and lifestyle accessories for people who have everything — and still appreciate something thoughtfully chosen.",
    pills: ["Self-care", "Gourmet", "Accessories", "Subscriptions"],
    tag: "Curated",
    tagStyle: "bg-[#EEEDFE] text-[#534AB7] dark:bg-[#3C3489] dark:text-[#CECBF6]",
  },
];

const ArrowIcon = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M2.5 11.5L11.5 2.5M11.5 2.5H5M11.5 2.5V9"
      stroke="currentColor"
      strokeWidth="1.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const SubCategory = () => {
  return (
    <section id="collections" className="py-16 md:py-24 bg-card">
      <div className="container mx-auto px-6 lg:px-12">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex items-end justify-between flex-wrap gap-8 mb-14"
        >
          <div>
            <p className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground mb-3">
              What we offer
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-medium text-foreground leading-[1.1]">
              Gifts that mean<br />
              <em className="font-normal not-italic text-muted-foreground">something.</em>
            </h2>
          </div>
          <span className="text-[11px] text-muted-foreground tracking-wide pb-1">
            4 categories
          </span>
        </motion.div>

        {/* List */}
        <div className="flex flex-col">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="group grid grid-cols-[64px_1fr] md:grid-cols-[80px_1fr_auto] items-start gap-x-6 md:gap-x-8 py-8 border-t border-border last:border-b cursor-pointer"
            >
              {/* Number */}
              <span className="text-[38px] md:text-[44px] font-medium text-muted-foreground/30 group-hover:text-muted-foreground/60 transition-all duration-200 leading-none tracking-tight tabular-nums pt-1">
                {cat.number}
              </span>

              {/* Body */}
              <div className="flex flex-col gap-2 pt-1">
                <p className="text-lg md:text-xl font-medium text-foreground leading-snug">
                  {cat.title}
                </p>
                <p className="text-sm text-muted-foreground leading-relaxed max-w-[460px]">
                  {cat.description}
                </p>
                <div className="flex flex-wrap gap-1.5 mt-1">
                  {cat.pills.map((pill) => (
                    <span
                      key={pill}
                      className="text-[11px] px-2.5 py-1 rounded-full border  text-muted-foreground"
                    >
                      {pill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Right — hidden on mobile */}
              <div className="hidden md:flex flex-col items-end justify-between gap-4 pt-1 min-w-[100px]">
                <span className={`text-[11px] font-medium tracking-widest uppercase px-3 py-1 rounded-[4px] ${cat.tagStyle}`}>
                  {cat.tag}
                </span>
                <div className="w-8 h-8 rounded-full border  flex items-center justify-center text-muted-foreground group-hover:border-foreground/30 transition-colors duration-200">
                  <ArrowIcon />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default SubCategory;