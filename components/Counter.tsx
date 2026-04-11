'use client';

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const TARGET_DATE = new Date();
TARGET_DATE.setDate(TARGET_DATE.getDate() + 18);

function getTimeLeft() {
  const diff = TARGET_DATE.getTime() - Date.now();
  if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  return {
    days:    Math.floor(diff / 86400000),
    hours:   Math.floor((diff % 86400000) / 3600000),
    minutes: Math.floor((diff % 3600000) / 60000),
    seconds: Math.floor((diff % 60000) / 1000),
  };
}

const Countdown = () => {
  const [time, setTime] = useState(getTimeLeft);

  useEffect(() => {
    const id = setInterval(() => setTime(getTimeLeft()), 1000);
    return () => clearInterval(id);
  }, []);

  const blocks = [
    { value: time.days,    label: "Days" },
    { value: time.hours,   label: "Hours" },
    { value: time.minutes, label: "Mins" },
    { value: time.seconds, label: "Secs" },
  ];

  return (
    <section
      className="py-20 md:py-28 relative overflow-hidden text-center"
      style={{ background: "var(--clr-bg-dark)" }}
    >
      {/* Decorative rings */}
      <span
        className="absolute -top-16 -right-16 w-72 h-72 rounded-full pointer-events-none"
        style={{ border: "1px solid rgba(0,147,203,0.15)" }}
      />
      <span
        className="absolute -bottom-20 -left-10 w-52 h-52 rounded-full pointer-events-none"
        style={{ border: "1px solid rgba(0,166,93,0.12)" }}
      />

      <div className="ui-container relative z-10">

        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
        >
          <p
            className="text-[10px] font-bold uppercase tracking-[0.25em] mb-4 flex items-center justify-center gap-2.5"
            style={{ color: "var(--clr-accent)" }}
          >
            <span className="inline-block w-5 h-px" style={{ background: "var(--clr-accent)" }} />
            Limited time offer
            <span className="inline-block w-5 h-px" style={{ background: "var(--clr-accent)" }} />
          </p>
          <h2
            className="text-3xl md:text-5xl font-extrabold tracking-tight leading-[1.1] mb-4"
            style={{ color: "#fff" }}
          >
            Diwali early bird{" "}
            <em className="not-italic" style={{ color: "var(--clr-accent)" }}>discount</em>
          </h2>
          <p
            className="text-sm md:text-base leading-relaxed max-w-md mx-auto mb-12"
            style={{ color: "rgba(255,255,255,0.4)" }}
          >
            Place bulk orders before the timer ends and get an exclusive 20% off on all festival hamper collections.
          </p>
        </motion.div>

        {/* Timer blocks */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="flex justify-center items-center flex-wrap gap-1 mb-12"
        >
          {blocks.map((b, i) => (
            <div key={b.label} className="flex items-center">
              <div className="flex flex-col items-center min-w-[80px] md:min-w-[100px]">
                <div
                  className="w-[84px] h-[84px] md:w-[100px] md:h-[100px] rounded-xl flex items-center justify-center relative"
                  style={{
                    background: "rgba(0,147,203,0.06)",
                    border: "1px solid rgba(0,147,203,0.3)",
                    boxShadow: "inset 0 1px 0 rgba(0,147,203,0.4)",
                  }}
                >
                  <span
                    className="text-[2.2rem] md:text-[2.8rem] font-extrabold leading-none tracking-[-0.04em] tabular-nums"
                    style={{ color: "#fff" }}
                  >
                    {String(b.value).padStart(2, "0")}
                  </span>
                </div>
                <span
                  className="text-[10px] font-semibold uppercase tracking-[0.12em] mt-2.5"
                  style={{ color: "rgba(255,255,255,0.3)" }}
                >
                  {b.label}
                </span>
              </div>

              {/* Separator */}
              {i < blocks.length - 1 && (
                <span
                  className="text-3xl font-extrabold mx-1 mb-6"
                  style={{ color: "rgba(0,147,203,0.35)" }}
                >
                  :
                </span>
              )}
            </div>
          ))}
        </motion.div>

        {/* CTA */}
        <a
          href="#contact"
          className="inline-flex items-center gap-2 text-[13px] font-bold px-7 py-3.5 rounded-full transition-colors duration-200"
          style={{
            background: "var(--clr-accent)",
            color: "var(--clr-bg-dark)",
          }}
          onMouseEnter={e => (e.currentTarget.style.background = "#fff")}
          onMouseLeave={e => (e.currentTarget.style.background = "var(--clr-accent)")}
        >
          Claim your discount
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M2.5 7h9M8 3.5L11.5 7 8 10.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </a>

      </div>
    </section>
  );
};

export default Countdown;