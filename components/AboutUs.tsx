"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const AboutUsPage: React.FC = () => {
  return (
    <main className="bg-[#fafcff] text-gray-800 font-sans flex items-center overflow-hidden">
      {/* Inline styles for custom animations */}
      <style>{`
        @keyframes float {
          0%, 100% { transform: translate(0, 0) rotate(0deg); }
          33% { transform: translate(15px, -15px) rotate(2deg); }
          66% { transform: translate(-15px, 15px) rotate(-1deg); }
        }
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-float-slow { animation: float 14s ease-in-out infinite; }
        .animate-float-delayed { animation: float 18s ease-in-out infinite reverse; }
        .animate-fade-up { animation: fadeUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards; opacity: 0; }
        .delay-100 { animation-delay: 100ms; }
        .delay-200 { animation-delay: 200ms; }
        .delay-300 { animation-delay: 300ms; }
      `}</style>

      <section className="py-6 sm:py-8 md:py-10 lg:py-12 px-4 sm:px-6 md:px-10 lg:px-16 xl:px-20 w-full relative z-10">
        <div className="max-w-[1500px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-10 lg:gap-12 xl:gap-16 2xl:gap-20 items-center">
          {/* LEFT COLUMN: Floating Image Composition with Custom SVGs */}
          <div className="relative flex justify-center items-center group perspective-1000">
            {/* Custom SVG 1: Organic Gradient Blob + Floating Rings */}
            <svg
              viewBox="0 0 200 200"
              xmlns="http://www.w3.org/2000/svg"
              className="absolute w-[100%] sm:w-[110%] md:w-[120%] h-[100%] sm:h-[110%] md:h-[120%] -top-[5%] sm:-top-[8%] md:-top-[10%] -left-[5%] sm:-left-[8%] md:-left-[10%] z-0 animate-float-slow pointer-events-none"
            >
              <defs>
                <linearGradient
                  id="blobGrad"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="100%"
                >
                  <stop offset="0%" stopColor="#0093cb" stopOpacity="0.25" />
                  <stop offset="100%" stopColor="#00a65d" stopOpacity="0.05" />
                </linearGradient>
              </defs>
              {/* Organic blob path */}
              <path
                d="M44.7,-76.4C58.8,-69.2,71.8,-59.1,79.6,-45.8C87.4,-32.5,90,-16.3,88.5,-0.9C87.1,14.5,81.5,28.9,73.1,41.2C64.7,53.5,53.4,63.6,39.8,71.4C26.2,79.2,10.3,84.7,-5.3,93.9C-20.9,103.1,-36.2,116,-48.6,110.1C-61.1,104.2,-70.7,79.5,-78.3,55.9C-85.9,32.3,-91.4,9.8,-88.4,-11.1C-85.4,-32,-73.9,-51.3,-58.5,-63.9C-43.1,-76.5,-23.7,-82.4,-4.3,-75.1C15.1,-67.8,30.6,-83.6,44.7,-76.4Z"
                transform="translate(100 100)"
                fill="url(#blobGrad)"
              />
              {/* Overlapping geometric rings */}
              <circle
                cx="150"
                cy="40"
                r="18"
                fill="none"
                stroke="#0093cb"
                strokeWidth="0.5"
                strokeDasharray="4 4"
                opacity="0.6"
              />
              <circle
                cx="30"
                cy="150"
                r="25"
                fill="none"
                stroke="#00a65d"
                strokeWidth="0.5"
                opacity="0.4"
              />
            </svg>

            {/* Custom SVG 2: Geometric Dot Matrix + Corner Accents */}
            <svg
              width="100%"
              height="100%"
              viewBox="0 0 100 100"
              className="absolute inset-0 w-[85%] sm:w-[90%] md:w-[95%] h-[85%] sm:h-[90%] md:h-[95%] left-[5%] top-[5%] z-0 animate-float-delayed pointer-events-none"
            >
              <defs>
                <pattern
                  id="dots"
                  x="0"
                  y="0"
                  width="8"
                  height="8"
                  patternUnits="userSpaceOnUse"
                >
                  <circle
                    fill="#0093cb"
                    cx="4"
                    cy="4"
                    r="0.8"
                    opacity="0.3"
                  ></circle>
                </pattern>
              </defs>
              {/* Dot matrix background */}
              <rect
                x="10"
                y="10"
                width="80"
                height="80"
                fill="url(#dots)"
                rx="10"
              />
              {/* Modern framing corners */}
              <path
                d="M 85 20 L 90 20 L 90 25"
                fill="none"
                stroke="#00a65d"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
              <path
                d="M 15 80 L 10 80 L 10 75"
                fill="none"
                stroke="#0093cb"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>

            {/* The Main Image Wrapper (Glassmorphism overlap) */}
            <div className="relative z-10 w-full flex justify-center animate-fade-up">
              {/* Backdrop blur added here so the SVGs behind it look frosted */}
              <div className="overflow-hidden rounded-[1.5rem] sm:rounded-[2rem] shadow-xl sm:shadow-2xl shadow-[#0093cb]/20 w-[75%] sm:w-[70%] md:w-[65%] lg:w-[80%] xl:w-[80%] aspect-[4/4.5] relative transition-transform duration-700 ease-out group-hover:-translate-y-1 sm:group-hover:-translate-y-2 backdrop-blur-sm bg-white/40">
                <Image
                  src="https://pub-735dbd7583d74ad5949115d6fdf77023.r2.dev/Timeline/param%20about%20us.jpeg"
                  alt="Team collaboration in courtyard"
                  fill
                  className="object-cover transition-transform duration-1000 ease-out group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 75vw, 50vw"
                />
                <div className="absolute inset-0 ring-1 ring-inset ring-white/40 rounded-[1.5rem] sm:rounded-[2rem] pointer-events-none"></div>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: Staggered Text Content */}
          <div className="flex flex-col gap-3 sm:gap-4 lg:gap-5 xl:gap-6 text-gray-800 xl:pl-6 2xl:pl-10">
            <div className="animate-fade-up">
              <span className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 md:px-5 py-1.5 sm:py-2 md:py-2.5 rounded-full bg-[#00a65d]/10 border border-[#00a65d]/20 text-[#00a65d] text-[10px] sm:text-xs font-black uppercase tracking-[0.25em] backdrop-blur-md shadow-sm">
                <span className="w-1 sm:w-1.5 h-1 sm:h-1.5 rounded-full bg-[#00a65d] animate-pulse"></span>
                About Us
              </span>
            </div>

            <h2 className="text-[26px] sm:text-3xl md:text-4xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-extrabold tracking-tight leading-[1.1] animate-fade-up delay-100 text-transparent bg-clip-text bg-gradient-to-br from-gray-900 via-gray-800 to-gray-500 pb-1 sm:pb-2">
              Corporate Gifting For, <br />
              <span className="text-[#0093cb]">Pharma Brands In India.</span> <br />
            </h2>

            <p className="text-gray-500 text-sm sm:text-base md:text-lg lg:text-sm xl:text-base 2xl:text-lg leading-relaxed max-w-xl animate-fade-up delay-200 font-light pb-1 sm:pb-2">
             At Param Corporation, we specialize in pharma branding, doctor engagement solutions, and customized pharma promotional products tailored for the healthcare industry.
<br/><br/>From gifts for doctors, clinic branding products, medical education tools, and branded consultation aids, we create practical solutions that help pharmaceutical companies strengthen professional relationships and improve brand visibility.
<br/><br/>Our focus is simple: creating meaningful doctor engagement through thoughtful branding solutions that combine utility, innovation, and strategic communication.

            </p>
            <div className="flex justify-start pt-1 sm:pt-2">
              <Link
                href="/about-us"
                className="group flex items-center gap-2 sm:gap-3 bg-white border-2 border-[#0093cb] text-[#0093cb] px-5 sm:px-6 md:px-8 py-2 sm:py-2.5 md:py-3 lg:py-2.5 xl:py-3.5 rounded-full font-semibold text-sm hover:bg-[#0093cb] hover:text-white transition-all duration-300 transform hover:scale-105"
              >
                <span>Know More</span>
                <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default AboutUsPage;