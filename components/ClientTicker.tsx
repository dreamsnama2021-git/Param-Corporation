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

export default function ClientTicker() {
  // Sort clients alphabetically by name
  const sortedClients = [...clients].sort((a, b) => a.name.localeCompare(b.name));
  
  // Triple the array to ensure seamless looping
  const tripleClients = [...sortedClients, ...sortedClients, ...sortedClients];

  return (
    <section className="w-full bg-white py-8 sm:py-10 md:py-12 lg:py-16 xl:py-20 overflow-hidden border-b border-slate-100">
      <div className="max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="text-center mb-8 sm:mb-10 md:mb-12 lg:mb-12 xl:mb-16"
        >
          <p className="text-xs xl:text-sm font-bold uppercase tracking-[0.2em] mb-2 sm:mb-3 flex items-center justify-center gap-2 text-[#0093cb]">
            <span className="inline-block w-4 sm:w-5 md:w-6 h-[1.5px] bg-[#0093cb]" />
            Our Partners
            <span className="inline-block w-4 sm:w-5 md:w-6 h-[1.5px] bg-[#0093cb]" />
          </p>

          <h2 className="text-2xl sm:text-3xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-extrabold capitalize tracking-tight mb-2 sm:mb-3 text-[#1a1a1a]">
            Trusted by <span className="text-[#0093cb]">Pharmaceutical Brands</span>
          </h2>
          
          <p className="text-sm lg:text-sm xl:text-[18px] leading-relaxed max-w-[780px] mx-auto text-gray-500 px-2 sm:px-0">
            Param Corporation partners with pharmaceutical companies, healthcare brands, and medical organizations 
            to create impactful doctor gifting solutions, pharma branding tools, and healthcare communication products.
            <br /><br />
            We build meaningful brand relationships through solutions designed for visibility, engagement, and long-term recall.
          </p>
        </motion.div>
      </div>

      {/* Infinite Scrolling Ticker - CSS Based */}
      <div className="relative w-full bg-white border-y border-[rgba(0,147,203,0.08)]">
        <div className="flex animate-scroll hover:[animation-play-state:paused]">
          {tripleClients.map((c, i) => (
            <div
              key={i}
              className="flex-shrink-0 flex items-center justify-center px-6 sm:px-8 md:px-10 lg:px-12 xl:px-14 border-r border-[rgba(0,147,203,0.12)] last:border-r-0 group transition-all duration-300"
            >
              <div className="relative h-16 sm:h-20 md:h-24 lg:h-28 xl:h-32 w-20 sm:w-24 md:w-28 lg:w-32 xl:w-36 transition-all duration-300 opacity-90 hover:opacity-100">
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
          animation: scroll 35s linear infinite;
          width: max-content;
        }
        
        @media (max-width: 640px) {
          .animate-scroll {
            animation-duration: 25s;
          }
        }
        
        @media (min-width: 1280px) {
          .animate-scroll {
            animation-duration: 40s;
          }
        }
      `}</style>
    </section>
  );
}
