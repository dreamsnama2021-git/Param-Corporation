"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { ChevronDown, Menu, X, Search, Phone, Mail } from "lucide-react";
import {
  industries,
  categories,
  priceRanges,
  occasions,
  therapies,
} from "../app/data";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handler = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  if (!mounted) return <div className="h-20 bg-[var(--clr-white)]" />;

  const mainNavItems = [
    { label: "About Us", href: "/about-us" },
    { label: "Brands", href: "/brands" },
    { label: "Pharmaceutical Gifts", href: "/pharmaceutical-gifts" },
    { label: "Zexcel", href: "/zexcel" },
    { label: "Grob Prismo", href: "/grob-prismo" },
    { label: "Contact Us", href: "/contact-us" },
  ];

  return (
    <>
      {/* ─── TOP BAR ───────────────── */}
      <div
        className={`fixed top-0 left-0 right-0 z-50 
        bg-[var(--clr-primary)] text-white transition-transform duration-300 ${
          scrolled ? "-translate-y-full" : "translate-y-0"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 h-10 flex items-center justify-between text-xs md:text-sm">

          <div className="flex items-center gap-4 md:gap-6">
            <a href="tel:+911234567890"
              className="flex items-center gap-1.5 hover:text-[var(--clr-accent)]">
              <Phone className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">+91 12345 67890</span>
            </a>

            <a href="mailto:info@bigimpex.com"
              className="flex items-center gap-1.5 hover:text-[var(--clr-accent)]">
              <Mail className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">info@bigimpex.com</span>
            </a>
          </div>

          <div className="flex items-center gap-4 font-medium">
            <a href="/track" className="hover:text-[var(--clr-accent)]">
              Track Order
            </a>
            <a href="/support" className="hover:text-[var(--clr-accent)]">
              Support
            </a>
          </div>
        </div>
      </div>

      {/* ─── NAVBAR ───────────────── */}
      <div className={`fixed left-0 right-0 z-40 flex justify-center px-4 py-3 transition-all ${
        scrolled ? "top-0" : "top-10"
      }`}>
        <nav className={`w-full max-w-7xl rounded-2xl transition-all ${
          scrolled
            ? "bg-white/95 shadow-xl backdrop-blur-md"
            : "bg-white/90 shadow-md backdrop-blur-sm"
        }`}>

          <div className="px-6">
            <div className="flex items-center justify-between h-16 md:h-20">

              {/* Logo */}
              <Link href="/" className="flex items-center">
                <img src="/param-logo.png" alt="Param Logo"
                  className="h-10 md:h-14 object-contain" />
              </Link>

              {/* Desktop Menu */}
              <ul className="hidden lg:flex items-center gap-2">

                {/* PRODUCTS */}
                <li
                  className="relative"
                  onMouseEnter={() => setActiveDropdown("products")}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <button className="flex items-center gap-1 px-3 py-2 text-sm font-semibold 
                  text-[var(--clr-text-dark)] hover:text-[var(--clr-primary)] transition">
                    Products
                    <ChevronDown className={`w-4 h-4 transition ${
                      activeDropdown === "products" ? "rotate-180" : ""
                    }`} />
                  </button>

                  {activeDropdown === "products" && (
                    <div className="absolute top-full left-1/2 -translate-x-1/2 w-[900px] 
                    bg-white rounded-xl shadow-2xl border border-[var(--clr-border-light)] p-6">

                      <div className="grid grid-cols-5 gap-6">

                        {/* Column */}
                        {[industries, categories, priceRanges, occasions, therapies].map((group, idx) => (
                          <div key={idx}>
                            <h3 className="font-bold text-xs uppercase mb-3 border-b pb-2">
                              {["Industry","Category","Price","Occasion","Therapy"][idx]}
                            </h3>
                            <ul className="space-y-1.5">
                              {group.slice(0,6).map((item:any) => (
                                <li key={item.slug}>
                                  <Link
                                    href="#"
                                    className="text-xs text-gray-600 hover:text-[var(--clr-primary)]">
                                    {item.name}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}

                      </div>
                    </div>
                  )}
                </li>

                {/* Other Links */}
                {mainNavItems.map((item) => (
                  <li key={item.label}>
                    <Link href={item.href}
                      className="px-3 py-2 text-sm font-semibold 
                      text-[var(--clr-text-dark)] hover:text-[var(--clr-primary)] transition">
                      {item.label}
                    </Link>
                  </li>
                ))}

              </ul>

              {/* Mobile Toggle */}
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="lg:hidden p-2 text-[var(--clr-text-dark)] hover:text-[var(--clr-primary)]"
              >
                {mobileOpen ? <X /> : <Menu />}
              </button>
            </div>
          </div>

          {/* MOBILE MENU */}
          {mobileOpen && (
            <div className="lg:hidden border-t border-[var(--clr-border-light)] bg-white">

              <div className="p-4 space-y-3">

                {/* Search */}
                <div className="flex items-center gap-2 bg-[var(--clr-bg-gray)] rounded-full px-4 py-2">
                  <Search className="w-4 h-4 text-gray-400" />
                  <input
                    placeholder="Search products..."
                    className="bg-transparent outline-none text-sm flex-1"
                  />
                </div>

                {/* Links */}
                {mainNavItems.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    className="block px-4 py-3 text-sm font-semibold 
                    text-[var(--clr-text-dark)] hover:text-[var(--clr-primary)] hover:bg-[var(--clr-bg-gray)] rounded-xl"
                    onClick={() => setMobileOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}

                {/* CTA */}
                <Link href="/brochure"
                  className="block text-center bg-[var(--clr-primary)] hover:bg-[var(--clr-secondary)] 
                  text-white font-bold py-3 rounded-xl transition">
                  Download Brochure
                </Link>

              </div>
            </div>
          )}
        </nav>
      </div>
    </>
  );
}