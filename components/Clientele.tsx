'use client';


import { motion } from 'framer-motion';
import Image from 'next/image';

const clients = [
  { name: "Microsoft", logo: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg" },
  { name: "Google",    logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" },
  { name: "Amazon",   logo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" },
  { name: "Netflix",  logo: "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" },
  { name: "Nike",     logo: "https://upload.wikimedia.org/wikipedia/commons/a/a6/Logo_NIKE.svg" },
];

const ClientSection = () => {
  // Triple the array to ensure seamless looping
  const tripleClients = [...clients, ...clients, ...clients];

  return (
    <section className="py-10 bg-white overflow-hidden">
      <div className="ui-container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="text-center mb-12"
        >
          <p className="text-[11px] font-bold uppercase tracking-[0.2em] mb-3 flex items-center justify-center gap-2 text-[var(--clr-primary)]">
            <span className="inline-block w-6 h-[1.5px] bg-[var(--clr-primary)]" />
            Our clients
            <span className="inline-block w-6 h-[1.5px] bg-[var(--clr-primary)]" />
          </p>
          <h2 className="ui-h1 font-extrabold tracking-tight mb-3 text-[var(--clr-text-dark)]">
            Trusted by <span className="text-[#0093cb]">industry leader</span>
          </h2>
          <p className="text-sm leading-relaxed max-w-[780px] mx-auto text-[var(--clr-text-muted)]">
            From startups to Fortune 500 companies, we help businesses create gifting experiences that leave lasting impressions.
          </p>
        </motion.div>
      </div>

      {/* Infinite Scrolling Ticker - CSS Based */}
      <div className="relative w-full border-y border-[rgba(0,147,203,0.12)]">
        <div className="flex animate-scroll hover:[animation-play-state:paused]">
          {tripleClients.map((c, i) => (
            <div
              key={i}
              className="flex-shrink-0 flex items-center justify-center px-12 h-[72px] border-r border-[rgba(0,147,203,0.12)]"
            >
              <div className="relative h-7 w-28  transition-all duration-300">
                <Image src={c.logo} alt={c.name} fill className="object-contain" />
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx global>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-33.333%);
          }
        }
        .animate-scroll {
          animation: scroll 20s linear infinite;
          width: max-content;
        }
      `}</style>
    </section>
  );
};

export default ClientSection;
