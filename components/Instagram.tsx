'use client';

import { useRef } from "react";
import Script from "next/script";

const InstagramIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

const InstagramReels = () => {
  const iframeRef = useRef<HTMLIFrameElement>(null);

  const initResizer = () => {
    if (typeof (window as any).iFrameResize !== "undefined" && iframeRef.current) {
      (window as any).iFrameResize(
        {
          log: false,
          checkOrigin: false,
          scrolling: false,
          sizeWidth: true,
        },
        iframeRef.current
      );
    }
  };

  return (
    <section className="relative py-8 sm:py-10 md:py-12 lg:py-16 bg-[#f9fafb] overflow-hidden">
      {/* iframeResizer parent-side script */}
      <Script
        src="https://cdnjs.cloudflare.com/ajax/libs/iframe-resizer/4.3.7/iframeResizer.min.js"
        strategy="afterInteractive"
        onLoad={initResizer}
      />

      {/* Header */}
      <div className="relative max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-8 mb-6 sm:mb-8 text-center">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0093cb]/10 border border-[#0093cb]/20 text-[#0093cb] text-xs font-extrabold uppercase tracking-widest mb-3">
          <InstagramIcon className="w-4 h-4" />
          <span>Social Stream</span>
        </div>
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight mb-2">
          Follow Us On <span className="text-[#0093cb]">Instagram</span>
        </h2>
        <div className="flex justify-center mb-4">
          <div className="w-16 h-1 bg-gradient-to-r from-[#0093cb] to-[#00a65d] rounded-full" />
        </div>
        <p className="text-slate-600 text-xs sm:text-sm md:text-base max-w-2xl mx-auto font-medium">
          Explore our latest gifting ideas, branding projects, and creative campaigns
        </p>
      </div>

      {/* Instagram Feed */}
      <div className="relative w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Wrapper: overflow-hidden naturally clips the bottom -46px watermark without locking height */}
        <div className="relative w-full overflow-hidden rounded-2xl">
          <iframe
            ref={iframeRef}
            src="https://2cde112fa39a4777a6052cdbb7fee660.elf.site"
            title="Param Corporation Instagram Feed"
            loading="lazy"
            className="w-full border-0 block"
            style={{ minHeight: "450px", marginBottom: "-46px" }}
            scrolling="no"
            allow="autoplay; clipboard-write; encrypted-media; picture-in-picture"
          />
        </div>
      </div>
    </section>
  );
};

export default InstagramReels;

