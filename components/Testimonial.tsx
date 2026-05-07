"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    quote:
      "I was traveling across and i met doctors and field force. The response of the Patient Education Write and Wipe board and the EDD and Ovulation Calculator is very impressive. A big shout out to the whole Param Team!",
    logo: "https://paramcorp.in/wp-content/uploads/2025/01/Untitled-design-1.png",
    name: "Ms. Deeksha Pahwa",
    role: "Brand Management",
    company: "Mankind Pharma Ltd",
    stat: "Field Force Verified",
    initials: "DP",
    avatarColor: "blue",
  },
  {
    quote:
      "Working with Param Corporation was a fantastic experience. They turned my concept into a practical solution, completing the Fluvir Dosage Scale with precision and dedication.",
    name: "Samriddhi Pednekar",
    role: "Product Management",
    company: "Hetero Healthcare",
    stat: "Concept to Reality",
    initials: "SP",
    avatarColor: "indigo",
  },
  {
    quote:
      "Their innovative solutions, prompt responses, and seamless communication stood out. Their creativity and professionalism ensured results aligned perfectly with client needs.",
    logo: "https://paramcorp.in/wp-content/uploads/2025/01/Untitled-design.png",
    name: "Divya Kumar",
    role: "Marketing Head",
    company: "Torrent Pharma",
    stat: "Prompt & Creative",
    initials: "DK",
    avatarColor: "teal",
  },
  {
    quote:
      "Their prompt responses, friendly demeanor, and comprehensive solutions are truly commendable. Their professionalism shines through in every aspect of their work.",
    logo: "https://paramcorp.in/wp-content/uploads/2025/01/Untitled-design-2.png",
    name: "Aayesha Idrisi",
    role: "Operations Manager",
    company: "Ajanta International",
    stat: "Commendable Service",
    initials: "AI",
    avatarColor: "green",
  },
  {
    quote:
      "Thanks for your prompt & timely response. Happy to see your team efforts within a short notice. Looking forward to continuing our partnership on future projects!",
    logo: "https://paramcorp.in/wp-content/uploads/2025/01/wockhart-testi.png",
    name: "Sidhharth Roy",
    role: "Procurement Lead",
    company: "Wockhardt",
    stat: "Agile Response",
    initials: "SR",
    avatarColor: "amber",
  },
  {
    quote:
      "The quality and attention to detail exceeded our expectations. The team delivered exceptional results within our timeline and budget constraints.",
    name: "Priya Sharma",
    role: "HR Director",
    company: "Cipla Ltd",
    stat: "Exceptional Quality",
    initials: "PS",
    avatarColor: "blue",
  },
  
  {
    quote:
      "Working with Param Corporation was a fantastic experience. They turned my concept into a practical solution, completing the Fluvir Dosage Scale with precision and dedication.",
    name: "Samriddhi Pednekar",
    role: "Product Management",
    company: "Hetero Healthcare",
    stat: "Concept to Reality",
    initials: "SP",
    avatarColor: "indigo",
  },
  {
    quote:
      "Their innovative solutions, prompt responses, and seamless communication stood out. Their creativity and professionalism ensured results aligned perfectly with client needs.",
    logo: "https://paramcorp.in/wp-content/uploads/2025/01/Untitled-design.png",
    name: "Divya Kumar",
    role: "Marketing Head",
    company: "Torrent Pharma",
    stat: "Prompt & Creative",
    initials: "DK",
    avatarColor: "teal",
  },
];

const avatarStyles: Record<string, { bg: string; color: string }> = {
  blue: { bg: "#DBEAFE", color: "#1E40AF" },
  indigo: { bg: "#E0E7FF", color: "#3730A3" },
  green: { bg: "#EAF3DE", color: "#3B6D11" },
  teal: { bg: "#E1F5EE", color: "#0F6E56" },
  amber: { bg: "#FAEEDA", color: "#854F0B" },
};

// ─── Default Export: 3-Column Grid with Bottom-Right Navigation ──────────────────
const TestimonialCards = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [direction, setDirection] = useState(1);
  const itemsPerPage = 3;
  const totalPages = Math.ceil(testimonials.length / itemsPerPage);

  const nextPage = () => {
    setDirection(1);
    setCurrentPage((prev) => (prev + 1) % totalPages);
  };

  const prevPage = () => {
    setDirection(-1);
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
  };

  const getCurrentTestimonials = () => {
    const start = currentPage * itemsPerPage;
    return testimonials.slice(start, start + itemsPerPage);
  };

  const rowVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction > 0 ? -300 : 300,
      opacity: 0,
    }),
  };

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

        {/* Testimonials Grid */}
        <div className="relative">
          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.div
              key={currentPage}
              custom={direction}
              variants={rowVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 },
              }}
              className="grid md:grid-cols-3 overflow-hidden rounded-2xl"
              style={{
                gap: "1.5px",
                background: "rgba(0,147,203,0.12)",
                border: "1.5px solid rgba(0,147,203,0.12)",
              }}
            >
              {getCurrentTestimonials().map((t, i) => (
                <motion.div
                  key={t.name}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="group relative flex flex-col gap-4 p-8 overflow-hidden cursor-default transition-colors duration-200 bg-white hover:bg-[#f0f9ff]"
                >
                  <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[var(--clr-primary)] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                  {t.logo && (
                    <div className="w-24 h-14 p-2 flex items-center justify-center shrink-0">
                      <img
                        src={t.logo}
                        alt={`${t.company} logo`}
                        className="w-full h-full object-contain"
                      />
                    </div>
                  )}
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
            </motion.div>
          </AnimatePresence>

          {/* Navigation - Bottom Right */}
          {totalPages > 1 && (
            <div className="flex items-center justify-end gap-3 mt-6">
              <button
                onClick={prevPage}
                className="w-10 h-10 md:w-11 md:h-11 rounded-full border-2 border-gray-200 
                  flex items-center justify-center hover:border-[var(--clr-primary)] 
                  hover:bg-[var(--clr-primary)] hover:text-white transition-all duration-300 group"
                aria-label="Previous testimonials"
              >
                <ChevronLeft className="w-4 h-4 md:w-5 md:h-5 group-hover:scale-110 transition-transform" />
              </button>
              <button
                onClick={nextPage}
                className="w-10 h-10 md:w-11 md:h-11 rounded-full border-2 border-gray-200 
                  flex items-center justify-center hover:border-[var(--clr-primary)] 
                  hover:bg-[var(--clr-primary)] hover:text-white transition-all duration-300 group"
                aria-label="Next testimonials"
              >
                <ChevronRight className="w-4 h-4 md:w-5 md:h-5 group-hover:scale-110 transition-transform" />
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

// ─── Named Export: Premium Editorial Redesign (2x2 Grid with Bottom-Right Navigation) ──────────────────
export const TestimonialCardsVariant = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [direction, setDirection] = useState(1);
  const itemsPerGroup = 4;
  const totalGroups = Math.ceil(testimonials.length / itemsPerGroup);

  const nextGroup = () => {
    setDirection(1);
    setCurrentPage((prev) => (prev + 1) % totalGroups);
  };

  const prevGroup = () => {
    setDirection(-1);
    setCurrentPage((prev) => (prev - 1 + totalGroups) % totalGroups);
  };

  const getCurrentTestimonials = () => {
    const start = currentPage * itemsPerGroup;
    const group = testimonials.slice(start, start + itemsPerGroup);
    
    while (group.length < 4) {
      group.push(null as any);
    }
    
    // Arrange: first row left to right, second row right to left
    return [
      group[0], // Row 1 Left
      group[1], // Row 1 Right
      group[3], // Row 2 Left (reversed display)
      group[2], // Row 2 Right (reversed display)
    ];
  };

  const gridVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 400 : -400,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction > 0 ? -400 : 400,
      opacity: 0,
    }),
  };

  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="text-center mb-12"
        >
          <p className="text-[11px] font-bold uppercase tracking-[0.2em] mb-3 flex items-center justify-center gap-2 text-[#639922]">
            <span className="inline-block w-6 h-[1.5px] bg-[#0093cb]" />
            Client testimonials
            <span className="inline-block w-6 h-[1.5px] bg-[#0093cb]" />
          </p>
          <h2 className="ui-h1 font-extrabold capitalize tracking-tight mb-3 text-[var(--clr-text-dark)]">
            Trusted by <span className="text-[#0093cb]">India's largest</span>{" "}
            enterprises
          </h2>
          <p className="text-sm leading-relaxed max-w-[780px] mx-auto text-[var(--clr-text-muted)]">
            Procurement leaders and HR directors rely on us to deliver curated
            gifting — at scale, without compromise
          </p>
        </motion.div>

        {/* Grid */}
        <div className="relative">
          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.div
              key={currentPage}
              custom={direction}
              variants={gridVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.3 },
              }}
              className="grid grid-cols-1 md:grid-cols-2 overflow-hidden rounded-2xl"
              style={{
                gap: "1.5px",
                background: "rgba(99,153,34,0.12)",
                border: "1.5px solid rgba(99,153,34,0.12)",
              }}
            >
              {getCurrentTestimonials().map((t, i) => {
                if (!t) return <div key={`empty-${i}`} className="bg-white p-8 md:p-10" />;
                
                const isSecondRow = i >= 2;
                
                return (
                  <motion.div
                    key={t.name}
                    initial={{ opacity: 0, x: isSecondRow ? (i === 2 ? 40 : -40) : 0, y: 20 }}
                    animate={{ opacity: 1, x: 0, y: 0 }}
                    transition={{ 
                      duration: 0.5, 
                      delay: isSecondRow ? 0.3 + (i - 2) * 0.1 : i * 0.1 
                    }}
                    className="group relative bg-white hover:bg-[#e9f3e8] transition-colors duration-300 flex flex-col p-8 md:p-10"
                  >
                    <span
                      className="absolute top-0 left-0 right-0 h-[3px] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"
                      style={{ background: "#639922" }}
                    />

                    {t.logo && (
                      <div className="w-24 h-14 p-2 scale-250 xl:scale-300 flex items-center justify-center mb-2 shrink-0">
                        <img
                          src={t.logo}
                          alt={`${t.company} logo`}
                          className="w-full h-full object-contain"
                        />
                      </div>
                    )}

                    <span
                      className="text-[44px] leading-none select-none font-serif mb-2"
                      style={{ color: "#639922", opacity: 0.2 }}
                    >
                      "
                    </span>

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
                );
              })}
            </motion.div>
          </AnimatePresence>

          {/* Navigation - Bottom Right */}
          {totalGroups > 1 && (
            <div className="flex items-center justify-end gap-3 mt-6">
              <button
                onClick={prevGroup}
                className="w-10 h-10 md:w-11 md:h-11 rounded-full border-2 border-gray-200 
                  flex items-center justify-center hover:border-[#639922] 
                  hover:bg-[#639922] hover:text-white transition-all duration-300 group"
                aria-label="Previous testimonials"
              >
                <ChevronLeft className="w-4 h-4 md:w-5 md:h-5 group-hover:scale-110 transition-transform" />
              </button>
              <button
                onClick={nextGroup}
                className="w-10 h-10 md:w-11 md:h-11 rounded-full border-2 border-gray-200 
                  flex items-center justify-center hover:border-[#639922] 
                  hover:bg-[#639922] hover:text-white transition-all duration-300 group"
                aria-label="Next testimonials"
              >
                <ChevronRight className="w-4 h-4 md:w-5 md:h-5 group-hover:scale-110 transition-transform" />
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default TestimonialCards;