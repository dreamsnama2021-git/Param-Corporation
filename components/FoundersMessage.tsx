"use client";

import { motion } from "framer-motion";
import { Target, Eye, Quote } from "lucide-react";

export default function FoundersMessage() {
  return (
    <section className="bg-white py-8 sm:py-10 lg:py-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden border-b border-slate-100">
      {/* Decorative background blur shapes */}
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-[#0093cb]/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-[#00a65d]/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-[1300px] mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* LEFT COLUMN: Message content */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            
            {/* Heading */}
            <div className="mb-6">
              <h2 className="text-3xl sm:text-4xl lg:text-4xl xl:text-5xl font-black tracking-tight text-slate-800 leading-tight">
                Founder's <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#0093cb] to-[#00a65d]">Message</span>
              </h2>
              {/* Underline Divider */}
              <div className="h-1 w-20 bg-gradient-to-r from-[#0093cb] to-[#00a65d] mt-3 rounded-full" />
            </div>

            {/* Dear Partners Subtitle */}
            <h4 className="text-xl font-bold text-[#0093cb] mb-6">
              Dear Partners, Clients & Team,
            </h4>

            {/* Paragraphs */}
            <div className="space-y-5 text-slate-600 text-sm lg:text-[16px] leading-relaxed mb-8">
              <p>
                When we started Param Corporation, our vision was simple yet powerful – to create innovative, impactful, and meaningful solutions that help the healthcare industry communicate better.
              </p>
              <p>
                Today, we are proud to be a trusted partner to leading pharma and healthcare brands, delivering customized promotional merchandise, doctor engagement tools, patient education solutions, and digital healthcare communication products.
              </p>
              <p>
                Our strength lies in innovation, quality, and the passion of our people. As we grow, our commitment remains the same – Empowering Ideas. Building Relationships. Creating Impact.
              </p>
            </div>

            {/* Quote Block */}
            <div className="flex gap-4 p-5 rounded-2xl bg-slate-50 border border-slate-100 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-[#0093cb]/5 to-transparent rounded-bl-3xl" />
              <Quote className="w-10 h-10 text-[#00a65d]/20 shrink-0 transform -scale-x-100" />
              <p className="text-slate-700 italic font-medium text-sm lg:text-[16px] leading-relaxed">
                "Thank you for being a part of our journey. Together, let’s continue to empower healthcare brands and make a difference."
              </p>
            </div>

          </div>

          {/* RIGHT COLUMN: Founder Image & Vision/Mission Overlay Card */}
          <div className="lg:col-span-6 relative flex justify-center items-center pb-12 sm:pb-16 lg:pb-0">
            
            {/* Image Outer Wrapper */}
            <div className="relative w-full max-w-[440px] sm:max-w-[480px] aspect-[4/5] rounded-[40px] sm:rounded-[60px] rounded-br-[80px] sm:rounded-br-[120px] rounded-tl-[80px] sm:rounded-tl-[120px] overflow-hidden shadow-2xl border-4 border-white bg-slate-100">
              <img
                src="https://pub-735dbd7583d74ad5949115d6fdf77023.r2.dev/Banners/Inner%20Banner/WhatsApp%20Image%202026-06-01%20at%207.26.05%20PM.jpeg"
                alt="Mr. Sanchay Dosi - Founder"
                className="w-full h-full object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent pointer-events-none" />
            </div>

            {/* Floating Vision/Mission Overlay Box (Overlays on bottom-right of photo) */}
            <div className="absolute -bottom-8 sm:-bottom-12 right-2 sm:right-6 md:right-10 lg:-right-6 xl:-right-10 w-[290px] sm:w-[330px] rounded-[28px] sm:rounded-[32px] overflow-hidden shadow-2xl border border-white/20 bg-gradient-to-br from-[#0093cb] to-[#00a65d] text-white p-5 sm:p-7 z-20">
              {/* Vision Section */}
              <div className="mb-4 sm:mb-5 pb-4 sm:pb-5 border-b border-white/20">
                <div className="flex items-center gap-2.5 sm:gap-3 mb-2 sm:mb-2.5">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white/15 flex items-center justify-center shadow-inner shrink-0">
                    <Target className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                  </div>
                  <h5 className="font-black text-xs sm:text-base tracking-wider uppercase">Our Vision</h5>
                </div>
                <p className="text-white/90 text-[11px] sm:text-[13px] leading-relaxed font-medium">
                  To be the most innovative and trusted partner in healthcare marketing solutions.
                </p>
              </div>

              {/* Mission Section */}
              <div>
                <div className="flex items-center gap-2.5 sm:gap-3 mb-2 sm:mb-2.5">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white/15 flex items-center justify-center shadow-inner shrink-0">
                    <Eye className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                  </div>
                  <h5 className="font-black text-xs sm:text-base tracking-wider uppercase">Our Mission</h5>
                </div>
                <p className="text-white/90 text-[11px] sm:text-[13px] leading-relaxed font-medium">
                  Empowering brands through impactful scientific communications and high-recall marketing tools.
                </p>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
