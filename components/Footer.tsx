"use client";

import React from "react";
import Link from "next/link";
import { Phone, Mail, MapPin, ChevronRight } from "lucide-react";
import {
  industries,
  categories,
  priceRanges,
  occasions,
  therapies,
} from "../app/data";

// Social Icon
const SocialIcon = ({ children }: { children: React.ReactNode }) => (
  <a
    href="#"
    className="w-8 h-8 rounded-full flex items-center justify-center 
    border border-[var(--clr-border-light)] 
    hover:bg-[var(--clr-primary)] transition"
  >
    {children}
  </a>
);

export default function Footer() {
  const displayCategories = categories.slice(0, 6);
  const displayIndustries = industries.slice(0, 6);
  const displayTherapies = therapies.slice(0, 6);

  return (
    <footer className="bg-[var(--clr-bg-dark-deep)] text-gray-300 pt-12 pb-6">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ─── MAIN GRID ───────────────── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">

          {/* ABOUT / LOCATION */}
          <div>
            <h3 className="text-white text-lg font-medium mb-4 pb-2 
            border-b-2 border-[var(--clr-primary)] inline-block">
              Location
            </h3>

            <p className="text-sm leading-relaxed mb-4 text-gray-400">
              101, KetkiPada Rd, near Timber Green Apartments,
              Diamond Industrial Estate,
              Dahisar East, Mumbai,
              Maharashtra 400068
            </p>

            <div className="space-y-2 text-sm">
              <a className="flex items-center gap-2 hover:text-[var(--clr-primary)]">
                <Phone size={14} className="text-[var(--clr-primary)]" />
                <span>+91 98201 49950</span>
              </a>

              <a className="flex items-center gap-2 hover:text-[var(--clr-primary)]">
                <Mail size={14} className="text-[var(--clr-primary)]" />
                <span>info@paramcorporation.com</span>
              </a>

              <div className="flex items-start gap-2">
                <MapPin size={14} className="text-[var(--clr-primary)] mt-1" />
                <span className="text-gray-400">
                  Dahisar East, Mumbai, Maharashtra
                </span>
              </div>
            </div>

            {/* SOCIAL */}
            <div className="flex gap-2 mt-4">
              <SocialIcon>f</SocialIcon>
              <SocialIcon>in</SocialIcon>
              <SocialIcon>▶</SocialIcon>
              <SocialIcon>📷</SocialIcon>
            </div>
          </div>

          {/* BY CATEGORY */}
          <div>
            <h3 className="text-white text-lg font-medium mb-4 pb-2 
            border-b-2 border-[var(--clr-primary)] inline-block">
              By Category
            </h3>

            <ul className="space-y-2">
              {displayCategories.map((item) => (
                <li key={item.slug}>
                  <Link
                    href={`/gift-categories/${item.slug}`}
                    className="flex items-center gap-2 text-sm 
                    hover:text-[var(--clr-primary)] group"
                  >
                    <ChevronRight size={12} className="text-[var(--clr-primary)] group-hover:translate-x-1" />
                    <span>{item.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* BY INDUSTRY */}
          <div>
            <h3 className="text-white text-lg font-medium mb-4 pb-2 
            border-b-2 border-[var(--clr-primary)] inline-block">
              By Industry
            </h3>

            <ul className="space-y-2">
              {displayIndustries.map((item) => (
                <li key={item.slug}>
                  <Link
                    href={`/industry/${item.slug}`}
                    className="flex items-center gap-2 text-sm 
                    hover:text-[var(--clr-primary)] group"
                  >
                    <ChevronRight size={12} className="text-[var(--clr-primary)] group-hover:translate-x-1" />
                    <span>{item.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* BY THERAPY */}
          <div>
            <h3 className="text-white text-lg font-medium mb-4 pb-2 
            border-b-2 border-[var(--clr-primary)] inline-block">
              By Therapy
            </h3>

            <ul className="space-y-2">
              {displayTherapies.map((item) => (
                <li key={item.slug}>
                  <Link
                    href={`/therapy/${item.slug}`}
                    className="flex items-center gap-2 text-sm 
                    hover:text-[var(--clr-primary)] group"
                  >
                    <ChevronRight size={12} className="text-[var(--clr-primary)] group-hover:translate-x-1" />
                    <span>{item.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* POPULAR SEARCH */}
        <div className="border-t border-[var(--clr-border-light)] pt-6 space-y-4">
          <h3 className="text-white text-lg font-medium mb-4">Popular Search</h3>

          {/* THERAPY */}
          <div className="pb-4 border-b border-[var(--clr-border-light)]">
            <h4 className="text-white text-sm mb-2">By Therapy</h4>
            <div className="flex flex-wrap gap-x-2 gap-y-1 text-xs">
              {therapies.map((item, idx) => (
                <span key={item.slug}>
                  <Link href={`/therapy/${item.slug}`} className="hover:text-[var(--clr-primary)]">
                    {item.name}
                  </Link>
                  {idx < therapies.length - 1 && <span className="mx-1 text-gray-500">|</span>}
                </span>
              ))}
            </div>
          </div>

          {/* PRICE */}
          <div className="pb-4 border-b border-[var(--clr-border-light)]">
            <h4 className="text-white text-sm mb-2">By Price</h4>
            <div className="flex flex-wrap gap-x-2 gap-y-1 text-xs">
              {priceRanges.map((item, idx) => (
                <span key={item.slug}>
                  <Link href={`/price/${item.slug}`} className="hover:text-[var(--clr-primary)]">
                    {item.name}
                  </Link>
                  {idx < priceRanges.length - 1 && <span className="mx-1 text-gray-500">|</span>}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* BOTTOM */}
        <div className="mt-8 pt-4 text-center border-t border-[var(--clr-border-light)]">
          <p className="text-sm text-gray-400">
            © 2024 – 2025 | All rights reserved by Param Corporation
          </p>

          <p className="text-sm mt-2">
            Designed & Developed by{" "}
            <a href="https://www.greensmedia.co.in" target="_blank" rel="noopener noreferrer" className="text-[var(--clr-primary)]">
              Greens Media
            </a>
          </p>
        </div>

      </div>
    </footer>
  );
}