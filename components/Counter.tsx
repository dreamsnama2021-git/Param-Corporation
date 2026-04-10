'use client';
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const TARGET_DATE = new Date();
TARGET_DATE.setDate(TARGET_DATE.getDate() + 18);

function getTimeLeft() {
  const diff = TARGET_DATE.getTime() - Date.now();
  if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  return {
    days: Math.floor(diff / 86400000),
    hours: Math.floor((diff % 86400000) / 3600000),
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
    { value: time.days, label: "Days" },
    { value: time.hours, label: "Hours" },
    { value: time.minutes, label: "Minutes" },
    { value: time.seconds, label: "Seconds" },
  ];

  return (
    <section className="py-20 md:py-28 bg-gradient-dark text-cream">
      <div className="container mx-auto px-6 lg:px-12 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-gold-light text-sm uppercase tracking-[0.3em] mb-4 font-medium">
            Limited Time Offer
          </p>
          <h2 className="font-display text-3xl md:text-5xl font-semibold mb-4">
            Diwali Early Bird Discount
          </h2>
          <p className="text-cream/60 text-lg max-w-lg mx-auto mb-12">
            Place bulk orders before the timer ends and get an exclusive 20% off
            on all festival hamper collections.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex justify-center gap-4 md:gap-8 mb-12"
        >
          {blocks.map((b) => (
            <div key={b.label} className="flex flex-col items-center">
              <div className="w-20 h-20 md:w-28 md:h-28 rounded-sm border border-gold/30 bg-charcoal-light/50 flex items-center justify-center">
                <span className="font-display text-3xl md:text-5xl font-bold text-gradient-gold">
                  {String(b.value).padStart(2, "0")}
                </span>
              </div>
              <span className="text-cream/50 text-xs uppercase tracking-widest mt-3">
                {b.label}
              </span>
            </div>
          ))}
        </motion.div>

        <a
          href="#contact"
          className="inline-block px-10 py-4 bg-gradient-gold text-primary-foreground font-medium text-sm tracking-wider uppercase rounded-sm hover:opacity-90 transition-opacity"
        >
          Claim Your Discount
        </a>
      </div>
    </section>
  );
};

export default Countdown;
