'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

const clients = [
  { name: "Microsoft", logo: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg" },
  { name: "Google",    logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" },
  { name: "Amazon",   logo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" },
  { name: "Netflix",  logo: "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" },
  { name: "Nike",     logo: "https://upload.wikimedia.org/wikipedia/commons/a/a6/Logo_NIKE.svg" },
  { name: "Adobe",    logo: "https://upload.wikimedia.org/wikipedia/commons/7/7b/Adobe_Systems_logo.svg" },
  { name: "Salesforce", logo: "https://upload.wikimedia.org/wikipedia/en/3/32/Salesforce_logo.svg" },
];

const stats = [
  { num: "500+", label: "Active clients" },
  { num: "18+",  label: "Industries served" },
  { num: "98%",  label: "Retention rate" },
];

const ClientSection = () => {
  return (
    <section className="py-20 md:py-28" style={{ background: "#fff" }}>
      <div className="ui-container">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="text-center mb-12"
        >
          <p
            className="text-[11px] font-bold uppercase tracking-[0.2em] mb-3 flex items-center justify-center gap-2"
            style={{ color: "var(--clr-primary)" }}
          >
            <span className="inline-block w-6 h-[1.5px]" style={{ background: "var(--clr-primary)" }} />
            Our clients
            <span className="inline-block w-6 h-[1.5px]" style={{ background: "var(--clr-primary)" }} />
          </p>
          <h2
            className="text-3xl md:text-4xl font-extrabold tracking-tight mb-3"
            style={{ color: "var(--clr-text-dark)" }}
          >
            Trusted by industry leaders
          </h2>
          <p className="text-sm leading-relaxed max-w-[480px] mx-auto" style={{ color: "var(--clr-text-muted)" }}>
            From startups to Fortune 500 companies, we help businesses create gifting experiences that leave lasting impressions.
          </p>
        </motion.div>
      </div>

      {/* Scrolling logo ticker — full bleed */}
      <div
        className="overflow-hidden mb-12"
        style={{
          borderTop: "1px solid rgba(0,147,203,0.12)",
          borderBottom: "1px solid rgba(0,147,203,0.12)",
        }}
      >
        <div
          className="flex"
          style={{
            width: "max-content",
            animation: "clientLogoTick 24s linear infinite",
          }}
        >
          {[...clients, ...clients].map((c, i) => (
            <div
              key={i}
              className="inline-flex items-center justify-center px-12 group"
              style={{
                height: "72px",
                borderRight: "1px solid rgba(0,147,203,0.12)",
              }}
            >
              <div className="relative h-7 w-28 grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300">
                <Image src={c.logo} alt={c.name} fill className="object-contain" />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="ui-container">
        {/* Stats + CTA footer */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex items-center justify-between flex-wrap gap-6"
          style={{ borderTop: "1px solid rgba(0,147,203,0.12)", paddingTop: "2rem" }}
        >
          <div className="flex gap-10 flex-wrap">
            {stats.map((s) => (
              <div key={s.label} className="flex flex-col">
                <span
                  className="text-[1.8rem] font-extrabold tracking-tight leading-none"
                  style={{ color: "var(--clr-text-dark)" }}
                >
                  {s.num.replace(/\d+/, (n) => (
                    `${n}`
                  ))}
                  <span style={{ color: "var(--clr-primary)" }}>
                    {s.num.replace(/[0-9]/g, "")}
                  </span>
                </span>
                <span className="text-[11px] mt-0.5 tracking-wide" style={{ color: "var(--clr-text-muted)" }}>
                  {s.label}
                </span>
              </div>
            ))}
          </div>

          <a
            href="#contact"
            className="inline-flex items-center gap-2 text-[13px] font-bold px-6 py-3 rounded-full text-white transition-colors duration-200"
            style={{ background: "var(--clr-primary)" }}
            onMouseEnter={e => (e.currentTarget.style.background = "var(--clr-bg-dark)")}
            onMouseLeave={e => (e.currentTarget.style.background = "var(--clr-primary)")}
          >
            Become a client
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M2.5 7h9M8 3.5L11.5 7 8 10.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </motion.div>
      </div>

      <style>{`
        @keyframes clientLogoTick {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
};

export default ClientSection;