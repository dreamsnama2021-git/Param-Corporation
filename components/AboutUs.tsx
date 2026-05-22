// components/AboutUs.tsx
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const AboutUsPage: React.FC = () => {
  return (
    <main className="ui-bg-cream ui-flex-center overflow-hidden">
      <style>{`
        @keyframes float {
          0%, 100% { transform: translate(0, 0) rotate(0deg); }
          33%       { transform: translate(15px, -15px) rotate(2deg); }
          66%       { transform: translate(-15px, 15px) rotate(-1deg); }
        }
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(30px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .animate-float-slow     { animation: float 14s ease-in-out infinite; }
        .animate-float-delayed  { animation: float 18s ease-in-out infinite reverse; }
        .animate-fade-up        { animation: fadeUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards; opacity: 0; }
        .delay-100 { animation-delay: 100ms; }
        .delay-200 { animation-delay: 200ms; }
        .delay-300 { animation-delay: 300ms; }
      `}</style>

      {/* ── Section wrapper — uses responsive padding from the design system ── */}
      <section className="ui-section ui-w-full relative z-10">
        <div className="ui-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 ui-gap-4xl items-center">

            {/* ────────────────────────────────────────────────────────────
                LEFT COLUMN — Floating Image Composition
            ──────────────────────────────────────────────────────────── */}
            <div className="relative flex justify-center items-center group perspective-1000">

              {/* SVG 1 — Organic Gradient Blob + Floating Rings */}
              <svg
                viewBox="0 0 200 200"
                xmlns="http://www.w3.org/2000/svg"
                className="absolute w-[120%] h-[120%] -top-[10%] -left-[10%] z-0 animate-float-slow pointer-events-none"
              >
                <defs>
                  <linearGradient id="blobGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%"   stopColor="var(--clr-primary)"   stopOpacity="0.25" />
                    <stop offset="100%" stopColor="var(--clr-secondary)"  stopOpacity="0.05" />
                  </linearGradient>
                </defs>
                <path
                  d="M44.7,-76.4C58.8,-69.2,71.8,-59.1,79.6,-45.8C87.4,-32.5,90,-16.3,88.5,-0.9C87.1,14.5,81.5,28.9,73.1,41.2C64.7,53.5,53.4,63.6,39.8,71.4C26.2,79.2,10.3,84.7,-5.3,93.9C-20.9,103.1,-36.2,116,-48.6,110.1C-61.1,104.2,-70.7,79.5,-78.3,55.9C-85.9,32.3,-91.4,9.8,-88.4,-11.1C-85.4,-32,-73.9,-51.3,-58.5,-63.9C-43.1,-76.5,-23.7,-82.4,-4.3,-75.1C15.1,-67.8,30.6,-83.6,44.7,-76.4Z"
                  transform="translate(100 100)"
                  fill="url(#blobGrad)"
                />
                <circle cx="150" cy="40"  r="18" fill="none" stroke="var(--clr-primary)"   strokeWidth="0.5" strokeDasharray="4 4" opacity="0.6" />
                <circle cx="30"  cy="150" r="25" fill="none" stroke="var(--clr-secondary)"  strokeWidth="0.5" opacity="0.4" />
              </svg>

              {/* SVG 2 — Dot Matrix + Corner Accents */}
              <svg
                width="100%"
                height="100%"
                viewBox="0 0 100 100"
                className="absolute inset-0 w-[95%] h-[95%] left-[5%] top-[5%] z-0 animate-float-delayed pointer-events-none"
              >
                <defs>
                  <pattern id="dots" x="0" y="0" width="8" height="8" patternUnits="userSpaceOnUse">
                    <circle fill="var(--clr-primary)" cx="4" cy="4" r="0.8" opacity="0.3" />
                  </pattern>
                </defs>
                <rect x="10" y="10" width="80" height="80" fill="url(#dots)" rx="10" />
                <path d="M 85 20 L 90 20 L 90 25" fill="none" stroke="var(--clr-secondary)" strokeWidth="1.5" strokeLinecap="round" />
                <path d="M 15 80 L 10 80 L 10 75" fill="none" stroke="var(--clr-primary)"   strokeWidth="1.5" strokeLinecap="round" />
              </svg>

              {/* Main Image */}
              <div className="relative z-10 ui-w-full flex justify-center animate-fade-up">
                <div
                  className="overflow-hidden ui-rounded-xl ui-shadow-strong w-[80%] aspect-[4/4.5] relative
                    transition-transform duration-700 ease-out group-hover:-translate-y-2
                    backdrop-blur-sm bg-white/40"
                  style={{ borderRadius: "2rem" }}
                >
                  <Image
                    src="https://i.pinimg.com/736x/53/cc/0e/53cc0e3857767d164fe5932a797e29fb.jpg"
                    alt="Team collaboration in courtyard"
                    fill
                    className="object-cover transition-transform duration-1000 ease-out group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div
                    className="absolute inset-0 ring-1 ring-inset ring-white/40 pointer-events-none"
                    style={{ borderRadius: "2rem" }}
                  />
                </div>
              </div>
            </div>

            {/* ────────────────────────────────────────────────────────────
                RIGHT COLUMN — Text Content
            ──────────────────────────────────────────────────────────── */}
            <div className="ui-stack-xl 2xl:pl-10">

              {/* Eyebrow badge */}
              <div className="animate-fade-up">
                <span
                  className="inline-flex items-center ui-gap-xs ui-px-md ui-py-xs
                    ui-rounded-full ui-label border border-[var(--clr-secondary)]/20
                    bg-[var(--clr-secondary)]/10 backdrop-blur-md ui-shadow-soft"
                  style={{ color: "var(--clr-secondary)" }}
                >
                  <span
                    className="w-1.5 h-1.5 ui-rounded-full animate-pulse"
                    style={{ backgroundColor: "var(--clr-secondary)" }}
                  />
                  About Us
                </span>
              </div>

              {/* Heading — uses responsive ui-h1 scale */}
              <h2
                className="ui-h1 animate-fade-up delay-100 leading-[1.1]
                  text-transparent bg-clip-text
                  bg-gradient-to-br from-gray-900 via-gray-800 to-gray-500 pb-1"
              >
                Corporate Gifting For,{" "}
                <br />
                <span style={{ color: "var(--clr-primary)" }}>
                  Pharma Brands In India.
                </span>
              </h2>

              {/* Body paragraph — uses responsive ui-para */}
              <p className="ui-para ui-text-muted animate-fade-up delay-200 font-light ui-max-w-md">
                At Param Corporation, we specialize in delivering strategic
                corporate gifting &amp; pharma marketing solutions tailored to
                different industries. From doctor engagement kits to promotional
                merchandise, we turn ideas into impactful brand experiences.
              </p>

              {/* CTA button — uses ui-btn + ui-btn-outline */}
              <div className="animate-fade-up delay-300">
                <Link
                  href="/about-us"
                  className="ui-btn ui-btn-outline ui-rounded-full group"
                >
                  <span>Know More</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>
    </main>
  );
};

export default AboutUsPage;