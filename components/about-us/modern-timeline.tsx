'use client';

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useEffect, useState } from "react";

const projects = [
  {
    title: "Ideal Park",
    location: "Mira Road",
    description:
      "238 residences across 1,18,420 sq ft. Designed as more than a housing project — it grew into a township, weaving convenience and a sense of belonging into every corner.",
    side: "left" as const,
    color: "primary" as const,
  },
  {
    title: "Ideal Tower",
    location: "Mira Road",
    description:
      "A forward-looking landmark spread across 1,10,960 sq ft with 214 units. A space where life and work could thrive together — proving our ability to anticipate how cities were changing.",
    side: "right" as const,
    color: "secondary" as const,
  },
  {
    title: "Mandar Villa",
    location: "Mira Road",
    description:
      "A single bungalow residence of 5,000 sq ft reflecting the same dedication and craftsmanship we bring to our largest communities. A reminder that every dream deserves to be fulfilled with care.",
    side: "left" as const,
    color: "primary" as const,
  },
  {
    title: "Ideal Homes",
    location: "Mira Road",
    description:
      "A step toward refinement — offering a boutique living experience where thoughtful layouts and quality finishes spoke louder than scale.",
    side: "right" as const,
    color: "secondary" as const,
  },
  {
    title: "Ideal Enclave",
    location: "Mira Road",
    description:
      "With 275 units across 1,06,339 sq ft, Ideal Enclave raised the bar — a vibrant residential-commercial landmark designed to stand the test of time.",
    side: "left" as const,
    color: "primary" as const,
  },
  {
    title: "Royal Residency",
    location: "Mira Road",
    description:
      "The beginning of a meaningful partnership. In collaboration with Solvite Developer, 59 homes designed with practicality, comfort, and reliability — proving the right partnership creates welcoming spaces.",
    side: "right" as const,
    color: "secondary" as const,
  },
  {
    title: "Ivory Heights",
    location: "Mira Road",
    description:
      "Continuing our spirit of collaboration — 21 spacious residences designed for modern living, reflecting our growing ability to align with partners while upholding our defining values.",
    side: "left" as const,
    color: "primary" as const,
  },
  {
    title: "Pereira Paradise",
    location: "Vasai",
    description:
      "Our return to Vasai with 43 residences. It wasn't just about meeting housing demand — it was about bringing thoughtful planning and a higher order of design back to where our roots were.",
    side: "right" as const,
    color: "secondary" as const,
  },
  {
    title: "Cerejo Residency",
    location: "Vasai",
    description:
      "Built in partnership with the landowner — a blend of local understanding and development expertise. 15 residences standing as an example of how collaboration creates meaningful value.",
    side: "left" as const,
    color: "primary" as const,
  },
  {
    title: "Nirvana Villas",
    location: "Vasai",
    description:
      "Exclusivity and calm — 25 homes where each project emphasized privacy, amenity, and experience. Proving that life is defined not by size, but by the life a home offers its residents.",
    side: "right" as const,
    color: "secondary" as const,
  },
  {
    title: "Dynasty",
    location: "Vasai",
    description:
      "Though compact with just nine units, Dynasty showcased versatility — blending residential and commercial use within 5,000 sq ft, reflecting adaptability to the evolving needs of a growing suburb.",
    side: "left" as const,
    color: "primary" as const,
  },
];

// ── Animated axis line that grows as user scrolls ──────────────────────────
const AxisLine = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start center", "end center"],
  });
  const height = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <div
      ref={ref}
      className="absolute left-1/2 top-0 bottom-0 -translate-x-1/2 w-px"
      style={{ background: "rgba(0,147,203,0.12)" }}
    >
      <motion.div
        style={{ height }}
        className="absolute top-0 left-0 right-0"
        css={{
          background:
            "linear-gradient(180deg, var(--clr-primary), var(--clr-secondary))",
        }}
      />
    </div>
  );
};

// ── Single timeline entry ──────────────────────────────────────────────────
const TimelineEntry = ({
  project,
  index,
}: {
  project: (typeof projects)[0];
  index: number;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const isPrimary = project.color === "primary";
  const isLeft = project.side === "left";

  const cardVariants = {
    hidden: {
      opacity: 0,
      x: isLeft ? -24 : 24,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1], delay: 0.05 },
    },
  };

  const dotVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { duration: 0.4, ease: "backOut", delay: 0.15 },
    },
  };

  return (
    <div
      ref={ref}
      className={`relative grid items-start mb-10 ${
        isLeft
          ? "grid-cols-[1fr_48px_1fr]"
          : "grid-cols-[1fr_48px_1fr]"
      }`}
    >
      {/* Left slot */}
      {isLeft ? (
        <motion.div
          variants={cardVariants}
          initial="hidden"
          animate={visible ? "visible" : "hidden"}
          className="pr-7"
        >
          <ProjectCard project={project} isPrimary={isPrimary} side="left" />
        </motion.div>
      ) : (
        <div />
      )}

      {/* Centre dot */}
      <div className="flex justify-center pt-[14px] relative z-10">
        <motion.div
          variants={dotVariants}
          initial="hidden"
          animate={visible ? "visible" : "hidden"}
          className="w-3.5 h-3.5 rounded-full border-2 flex-shrink-0"
          style={{
            borderColor: isPrimary
              ? "var(--clr-primary)"
              : "var(--clr-secondary)",
            background: visible
              ? isPrimary
                ? "var(--clr-primary)"
                : "var(--clr-secondary)"
              : "white",
            transition: "background 0.4s",
          }}
        />
      </div>

      {/* Right slot */}
      {!isLeft ? (
        <motion.div
          variants={cardVariants}
          initial="hidden"
          animate={visible ? "visible" : "hidden"}
          className="pl-7"
        >
          <ProjectCard project={project} isPrimary={isPrimary} side="right" />
        </motion.div>
      ) : (
        <div />
      )}
    </div>
  );
};

// ── Card ──────────────────────────────────────────────────────────────────
const ProjectCard = ({
  project,
  isPrimary,
  side,
}: {
  project: (typeof projects)[0];
  isPrimary: boolean;
  side: "left" | "right";
}) => {
  const accentColor = isPrimary ? "var(--clr-primary)" : "var(--clr-secondary)";
  const accentBg = isPrimary
    ? "rgba(0,147,203,0.06)"
    : "rgba(0,166,93,0.06)";

  return (
    <div
      className="group relative bg-white border border-[rgba(0,0,0,0.07)] rounded-xl p-5 overflow-hidden cursor-default transition-colors duration-200 hover:border-[rgba(0,0,0,0.13)] hover:bg-[#fafafa]"
    >
      {/* Animated left accent bar */}
      <span
        className="absolute top-0 bottom-0 left-0 w-[3px] rounded-l-xl scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-top"
        style={{ background: accentColor }}
      />

      {/* Connector to axis */}
      <span
        className={`absolute top-[21px] ${
          side === "left" ? "-right-7 w-7" : "-left-7 w-7"
        } h-px`}
        style={{ background: "rgba(0,0,0,0.08)" }}
      />

      {/* Location badge */}
      <div
        className="inline-flex items-center gap-1.5 text-[10px] font-semibold tracking-[0.12em] uppercase mb-2"
        style={{ color: accentColor }}
      >
        <span
          className="w-1.5 h-1.5 rounded-full"
          style={{ background: accentColor }}
        />
        {project.location}
      </div>

      <h3
        className="text-[15px] font-semibold text-[var(--clr-text-dark)] mb-2 leading-snug"
      >
        {project.title}
      </h3>

      <p className="text-[13px] text-[#64748b] leading-relaxed">
        {project.description}
      </p>
    </div>
  );
};

// ── Section ───────────────────────────────────────────────────────────────
const DeliveredProjects = () => {
  const timelineRef = useRef<HTMLDivElement>(null);

  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-3">
            <span
              className="w-7 h-px"
              style={{ background: "var(--clr-primary)", opacity: 0.5 }}
            />
            <p
              className="text-[11px] font-semibold tracking-[0.18em] uppercase"
              style={{ color: "var(--clr-primary)" }}
            >
              Our portfolio
            </p>
            <span
              className="w-7 h-px"
              style={{ background: "var(--clr-primary)", opacity: 0.5 }}
            />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--clr-text-dark)] tracking-tight">
            Delivered{" "}
            <span style={{ color: "var(--clr-secondary)" }}>Projects</span>
          </h2>
        </motion.div>

        {/* Timeline */}
        <div ref={timelineRef} className="relative">
          {/* Axis */}
          <div
            className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px"
            style={{ background: "rgba(0,147,203,0.12)" }}
          >
            <motion.div
              className="absolute top-0 left-0 right-0 origin-top"
              style={{ background: "var(--clr-primary)" }}
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true, amount: 0.01 }}
              transition={{ duration: 2.2, ease: [0.22, 1, 0.36, 1] }}
            />
          </div>

          {/* Entries */}
          {projects.map((project, i) => (
            <TimelineEntry key={project.title} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default DeliveredProjects;