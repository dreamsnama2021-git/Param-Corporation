"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const clients = [
  // --- Logos from Medipride ---
  {
    name: "Abbott",
    logo: "https://medipride.org/wp-content/uploads/2026/01/Lgo-1_page-0014-scaled.jpg",
  },
  {
    name: "Sun Pharma",
    logo: "https://medipride.org/wp-content/uploads/2026/01/Lgo-1_page-0013-scaled.jpg",
  },
  {
    name: "Cipla",
    logo: "https://medipride.org/wp-content/uploads/2026/01/Lgo-1_page-0012-scaled.jpg",
  },
  {
    name: "Alkem",
    logo: "https://medipride.org/wp-content/uploads/2026/01/Lgo-1_page-0011-scaled.jpg",
  },
  {
    name: "Lupin",
    logo: "https://medipride.org/wp-content/uploads/2026/01/Lgo-1_page-0007-scaled.jpg",
  },

  // --- New Logos from ParamCorp ---
  {
    name: "Wockhardt",
    logo: "https://paramcorp.in/wp-content/uploads/elementor/thumbs/30-r0ab2j57fa83f10caqxix4wdrv1r5342o3bfsjgavo.png",
  },
  {
    name: "Pfizer",
    logo: "https://paramcorp.in/wp-content/uploads/elementor/thumbs/1-18-r0ab0wv7nk0bf7czr1qnmjlsxz0zvuops2vc1duplg.png",
  },
  {
    name: "Novartis",
    logo: "https://paramcorp.in/wp-content/uploads/elementor/thumbs/2-8-r0ab0yqw182w2fa9g2jwrj4q4qrqb8w6gc6azxrx90.png",
  },
  {
    name: "GSK",
    logo: "https://paramcorp.in/wp-content/uploads/elementor/thumbs/3-11-r0ab10mkew5gpn7j53d5winnbiigqn3n4lh9yhp4wk.png",
  },
  {
    name: "Sanofi",
    logo: "https://paramcorp.in/wp-content/uploads/elementor/thumbs/4-6-r0ab14dx68am0322j4zo6hphp1zxlfikh437vljk7o.png",
  },
  {
    name: "AstraZeneca",
    logo: "https://paramcorp.in/wp-content/uploads/elementor/thumbs/5-6-r0ab169ljwd6nazc85sxbh8evtqo0tq15de6u5grv8.png",
  },
  {
    name: "Intas",
    logo: "https://paramcorp.in/wp-content/uploads/elementor/thumbs/13-1-r0ab1kd6eewhhgeuxtwbuvobslt68aa07b6h1avv9w.png",
  },
  {
    name: "Eris Lifesciences",
    logo: "https://paramcorp.in/wp-content/uploads/elementor/thumbs/14-1-r0ab1m8us2z24oc4mupkzv78zdjwnohgvkhfzut2xg.png",
  },
  {
    name: "Micro Labs",
    logo: "https://paramcorp.in/wp-content/uploads/elementor/thumbs/25-1-r0ab27v559snjpgq4m2037qun8lckpvamjhm17x0yc.png",
  },
  {
    name: "Aristo Pharma",
    logo: "https://paramcorp.in/wp-content/uploads/elementor/thumbs/35-1-r0ab37l0cz5jsw0uc1htpyqd7vpap7t3fga29qg2dw.png",
  },
];



const ClientSection = () => {
  // Triple the array to ensure seamless looping
  const tripleClients = [...clients, ...clients, ...clients];

  return (
    <section className="py-6 sm:py-8 md:py-10 overflow-hidden">
      <div className="ui-container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="text-center mb-8 sm:mb-10 md:mb-12"
        >
          <p className="text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.2em] mb-2 sm:mb-3 flex items-center justify-center gap-2 text-[var(--clr-primary)]">
            <span className="inline-block w-4 sm:w-5 md:w-6 h-[1.5px] bg-[var(--clr-primary)]" />
            Our clients
            <span className="inline-block w-4 sm:w-5 md:w-6 h-[1.5px] bg-[var(--clr-primary)]" />
          </p>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold capitalize tracking-tight mb-2 sm:mb-3 text-[var(--clr-text-dark)]">
            Trusted by <span className="text-[#0093cb]">industry leader</span>
          </h2>
          <p className="text-xs sm:text-sm leading-relaxed max-w-[780px] mx-auto text-[var(--clr-text-muted)] px-2 sm:px-0">
            Trusted by pharmaceutical brands nationwide. Supporting impactful
            doctor engagement solutions. Our clients trust us to deliver
            results. We deliver with precision and consistency.
          </p>
        </motion.div>
      </div>

      {/* Infinite Scrolling Ticker - CSS Based */}
      <div className="relative w-full bg-white">
        <div className="flex animate-scroll hover:[animation-play-state:paused]">
          {tripleClients.map((c, i) => (
            <div
              key={i}
              className="flex-shrink-0 flex items-center justify-center px-6 sm:px-8 md:px-10 lg:px-12 border-r border-[rgba(0,147,203,0.12)]"
            >
              <div className="relative h-20 sm:h-24 md:h-28 lg:h-30 w-20 sm:w-22 md:w-24 lg:w-28 transition-all duration-300">
                <Image
                  src={c.logo}
                  alt={c.name}
                  fill
                  className="object-contain"
                />
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
          animation: scroll 30s linear infinite;
          width: max-content;
        }
      `}</style>
    </section>
  );
};

export default ClientSection;