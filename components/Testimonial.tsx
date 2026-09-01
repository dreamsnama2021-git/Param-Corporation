"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    quote:
      "Param Corporation is a dependable partner who consistently delivers high-quality solutions on time. Their attention to detail and professional approach are commendable.",
    logo: "https://paramcorp.in/wp-content/uploads/elementor/thumbs/2-8-r0ab0yqw182w2fa9g2jwrj4q4qrqb8w6gc6azxrx90.png",
    name: "Vikram Singh",
    role: "Brand Manager",
    company: "Cipla Ltd",
    stat: "Dependable Partner",
    initials: "VS",
    avatarColor: "blue",
  },
  {
    quote:
      "We value Param Corporation's creativity, commitment and the way they truly understand our requirements. They are a key part of our success.",
    logo: "https://paramcorp.in/wp-content/uploads/2025/01/Untitled-design-1.png",
    name: "Neha Bhatia",
    role: "Product Head",
    company: "Mankind Pharma Ltd",
    stat: "Creative Value",
    initials: "NB",
    avatarColor: "indigo",
  },
  {
    quote:
      "Excellent service, timely delivery and great support throughout the project. We look forward to continuing our association with Param Corporation.",
    logo: "https://paramcorp.in/wp-content/uploads/elementor/thumbs/1-18-r0ab0wv7nk0bf7czr1qnmjlsxz0zvuops2vc1duplg.png",
    name: "Anupam Mehta",
    role: "Marketing Head",
    company: "Alembic Pharmaceuticals",
    stat: "Excellent Service",
    initials: "AM",
    avatarColor: "teal",
  },
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
    logo: "https://paramcorp.in/wp-content/uploads/2025/01/HETERO_HEALTHCARE-1-e1737096475593.png",
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
    company: "Ajanta Pharma",
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
    logo: "https://paramcorp.in/wp-content/uploads/elementor/thumbs/2-8-r0ab0yqw182w2fa9g2jwrj4q4qrqb8w6gc6azxrx90.png",
    name: "Priya Sharma",
    role: "HR Director",
    company: "Cipla Ltd",
    stat: "Exceptional Quality",
    initials: "PS",
    avatarColor: "blue",
  },
];

const avatarStyles: Record<string, { bg: string; color: string }> = {
  blue: { bg: "#DBEAFE", color: "#1E40AF" },
  indigo: { bg: "#E0E7FF", color: "#3730A3" },
  green: { bg: "#EAF3DE", color: "#3B6D11" },
  teal: { bg: "#E1F5EE", color: "#0F6E56" },
  amber: { bg: "#FAEEDA", color: "#854F0B" },
};

// ─── Default Export: 3-Column Grid with Content-Only Animation ──────────────────
const TestimonialCards = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 3;
  const totalPages = Math.ceil(testimonials.length / itemsPerPage);

  const nextPage = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages);
  };

  const prevPage = () => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
  };

  const getCurrentTestimonials = () => {
    const start = currentPage * itemsPerPage;
    return testimonials.slice(start, start + itemsPerPage);
  };

  return (
    <section className="py-6 sm:py-8 md:py-10 lg:py-12 bg-white">
      <div className="max-w-[1500px] mx-auto px-3 sm:px-4 md:px-6 lg:px-8 xl:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="text-center mb-6 sm:mb-8 md:mb-10 lg:mb-12"
        >
          <p className="text-[9px] sm:text-[10px] font-bold uppercase tracking-[0.2em] mb-2 sm:mb-3 flex items-center justify-center gap-2 text-[#639922]">
            <span className="inline-block w-3 sm:w-4 md:w-5 h-[1.5px] bg-[#639922]" />
            Client testimonials
            <span className="inline-block w-3 sm:w-4 md:w-5 h-[1.5px] bg-[#639922]" />
          </p>
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold tracking-tight mb-2 sm:mb-3 text-[var(--clr-text-dark)]">
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
          <p className="text-[11px] sm:text-xs md:text-sm leading-relaxed max-w-[780px] mx-auto text-[var(--clr-text-muted)] px-2 sm:px-0">
            Procurement leaders and HR directors rely on us to deliver curated
            gifting — at scale, without compromise.
          </p>
        </motion.div>

        {/* Testimonials Grid - Container stays fixed */}
        <div className="relative">
          <div
            className="grid md:grid-cols-3 overflow-hidden rounded-lg sm:rounded-xl"
            style={{
              gap: "1px",
              background: "rgba(0,147,203,0.12)",
              border: "1px solid rgba(0,147,203,0.12)",
            }}
          >
            {getCurrentTestimonials().map((t, i) => (
              <div
                key={`card-${i}`}
                className="group relative flex flex-col gap-2 sm:gap-3 p-4 sm:p-5 md:p-6 overflow-hidden cursor-default transition-colors duration-200 bg-white hover:bg-[#f0f9ff]"
              >
                <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[var(--clr-primary)] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                
                {/* Animated content wrapper */}
                <AnimatePresence mode="wait">
                  <motion.div
                    key={`${currentPage}-${i}`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3, delay: i * 0.1 }}
                    className="flex flex-col gap-2 sm:gap-3 flex-1"
                  >
                    {t.logo && (
                      <div className="w-14 sm:w-16 md:w-20 h-7 sm:h-8 md:h-10 p-1 sm:p-1.5 flex items-center justify-center shrink-0">
                        <img
                          src={t.logo}
                          alt={`${t.company} logo`}
                          className="w-full h-full object-contain"
                        />
                      </div>
                    )}
                    <span className="text-3xl sm:text-4xl font-black leading-none select-none text-[var(--clr-primary)] opacity-15">
                      "
                    </span>
                    <p className="text-[11px] sm:text-xs md:text-[13px] leading-[1.5] sm:leading-[1.6] flex-1 text-[#334155] line-clamp-4">
                      {t.quote}
                    </p>
                    <div className="flex flex-col gap-0.5 pt-2 sm:pt-3 border-t border-[rgba(0,147,203,0.12)]">
                      <p className="text-xs sm:text-sm font-bold text-[var(--clr-text-dark)]">
                        {t.name}
                      </p>
                      <p className="text-[9px] sm:text-[11px] text-[var(--clr-text-muted)]">
                        {t.role}
                      </p>
                      <p className="text-[8px] sm:text-[10px] font-semibold mt-0.5 text-[var(--clr-primary)]">
                        {t.company}
                      </p>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            ))}
          </div>

          {/* Navigation - Bottom Right */}
          {totalPages > 1 && (
            <div className="flex items-center justify-end gap-1.5 sm:gap-2 mt-3 sm:mt-4">
              <button
                onClick={prevPage}
                className="w-7 h-7 sm:w-8 sm:h-8 md:w-9 md:h-9 rounded-full border border-gray-200 
                  flex items-center justify-center hover:border-[var(--clr-primary)] 
                  hover:bg-[var(--clr-primary)] hover:text-white transition-all duration-300 group"
                aria-label="Previous testimonials"
              >
                <ChevronLeft className="w-3 h-3 sm:w-3.5 sm:h-3.5 group-hover:scale-110 transition-transform" />
              </button>
              <button
                onClick={nextPage}
                className="w-7 h-7 sm:w-8 sm:h-8 md:w-9 md:h-9 rounded-full border border-gray-200 
                  flex items-center justify-center hover:border-[var(--clr-primary)] 
                  hover:bg-[var(--clr-primary)] hover:text-white transition-all duration-300 group"
                aria-label="Next testimonials"
              >
                <ChevronRight className="w-3 h-3 sm:w-3.5 sm:h-3.5 group-hover:scale-110 transition-transform" />
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

// ─── Named Export: Premium Editorial Redesign (2x2 Grid with Content-Only Animation) ──────────────────
export const TestimonialCardsVariant = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerGroup = 4;
  const totalGroups = Math.ceil(testimonials.length / itemsPerGroup);

  const nextGroup = () => {
    setCurrentPage((prev) => (prev + 1) % totalGroups);
  };

  const prevGroup = () => {
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

  return (
    <section className="py-8 sm:py-10 md:py-12 lg:py-14 xl:py-16 bg-white">
      <div className="max-w-[1500px] mx-auto px-3 sm:px-4 md:px-6 lg:px-8 xl:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="text-center mb-6 sm:mb-8 md:mb-10 lg:mb-12"
        >
          <p className="text-[9px] sm:text-[10px] font-bold uppercase tracking-[0.2em] mb-2 sm:mb-3 flex items-center justify-center gap-2 text-[#639922]">
            <span className="inline-block w-3 sm:w-4 md:w-5 h-[1.5px] bg-[#0093cb]" />
            Client testimonials
            <span className="inline-block w-3 sm:w-4 md:w-5 h-[1.5px] bg-[#0093cb]" />
          </p>
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold capitalize tracking-tight mb-2 sm:mb-3 text-[var(--clr-text-dark)]">
            What Pharma  <span className="text-[#0093cb]">Brands Say
</span>{" "}
        
          </h2>
          <p className="text-[11px] sm:text-xs md:text-sm leading-relaxed max-w-[780px] mx-auto text-[var(--clr-text-muted)] px-2 sm:px-0">
       Trusted by leading pharmaceutical companies for delivering doctor engagement tools, custom pharma gifts, patient education products, and strategic healthcare communication solutions that perform.

          </p>
        </motion.div>

        {/* Grid - Container stays fixed */}
        <div className="relative">
          <div
            className="grid grid-cols-1 md:grid-cols-2 overflow-hidden rounded-lg sm:rounded-xl"
            style={{
              gap: "1px",
              background: "rgba(99,153,34,0.12)",
              border: "1px solid rgba(99,153,34,0.12)",
            }}
          >
            {getCurrentTestimonials().map((t, i) => {
              if (!t) return <div key={`empty-${i}`} className="bg-white p-4 sm:p-5 md:p-6" />;
              
              const isSecondRow = i >= 2;
              
              return (
                <div
                  key={`card-${i}`}
                  className="group relative bg-white hover:bg-[#e9f3e8] transition-colors duration-300 flex flex-col p-4 sm:p-5 md:p-6 lg:p-8"
                >
                  <span
                    className="absolute top-0 left-0 right-0 h-[2px] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"
                    style={{ background: "#639922" }}
                  />

                  {/* Animated content wrapper */}
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={`${currentPage}-${i}`}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ 
                        duration: 0.4, 
                        delay: isSecondRow ? 0.2 + (i - 2) * 0.1 : i * 0.1 
                      }}
                      className="flex flex-col flex-1"
                    >
                      {t.logo && (
                        <div className="w-14 sm:w-16 md:w-20 h-7 sm:h-8 md:h-10 p-1 sm:p-1.5 flex items-center justify-center mb-2 shrink-0">
                          <img
                            src={t.logo}
                            alt={`${t.company} logo`}
                            className="w-full h-full object-contain"
                          />
                        </div>
                      )}

                      <span
                        className="text-2xl sm:text-3xl md:text-4xl leading-none select-none font-serif mb-1 sm:mb-2"
                        style={{ color: "#639922", opacity: 0.2 }}
                      >
                        "
                      </span>

                      <p
                        className="flex-1 leading-relaxed mb-4 sm:mb-5 md:mb-6 text-[11px] sm:text-xs md:text-sm"
                        style={{
                          fontFamily: "Georgia, 'Times New Roman', serif",
                          color: "var(--clr-text-dark)",
                          lineHeight: 1.6,
                        }}
                      >
                        {t.quote}
                      </p>

                      <div className="flex items-center gap-2 sm:gap-3">
                        <div
                          className="w-7 h-7 sm:w-8 sm:h-8 md:w-9 md:h-9 rounded-full flex items-center justify-center text-[9px] sm:text-[11px] font-semibold shrink-0"
                          style={avatarStyles[t.avatarColor]}
                        >
                          {t.initials}
                        </div>
                        <div>
                          <p className="text-xs sm:text-sm font-bold text-[var(--clr-text-dark)] leading-tight">
                            {t.name}
                          </p>
                          <p className="text-[9px] sm:text-[11px] text-[var(--clr-text-muted)] mb-0.5">
                            {t.role}
                          </p>
                          <p
                            className="text-[7px] sm:text-[9px] font-bold tracking-[0.05em] uppercase"
                            style={{ color: "#3B6D11" }}
                          >
                            {t.company}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

          {/* Navigation - Bottom Right */}
          {totalGroups > 1 && (
            <div className="flex items-center justify-end gap-1.5 sm:gap-2 mt-3 sm:mt-4">
              <button
                onClick={prevGroup}
                className="w-7 h-7 sm:w-8 sm:h-8 md:w-9 md:h-9 rounded-full border border-gray-200 
                  flex items-center justify-center hover:border-[#639922] 
                  hover:bg-[#639922] hover:text-white transition-all duration-300 group"
                aria-label="Previous testimonials"
              >
                <ChevronLeft className="w-3 h-3 sm:w-3.5 sm:h-3.5 group-hover:scale-110 transition-transform" />
              </button>
              <button
                onClick={nextGroup}
                className="w-7 h-7 sm:w-8 sm:h-8 md:w-9 md:h-9 rounded-full border border-gray-200 
                  flex items-center justify-center hover:border-[#639922] 
                  hover:bg-[#639922] hover:text-white transition-all duration-300 group"
                aria-label="Next testimonials"
              >
                <ChevronRight className="w-3 h-3 sm:w-3.5 sm:h-3.5 group-hover:scale-110 transition-transform" />
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default TestimonialCards;