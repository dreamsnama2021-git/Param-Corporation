"use client";

import React, { useEffect, useState, useRef } from "react";
import Link from "next/link";
import { ChevronDown, Menu, X, Search } from "lucide-react";
import {
  categories,
  therapies,
  personalizedGifts,
  occasions,
  digitalGifts,
} from "@/app/data";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const [visible, setVisible] = useState(true);
  const [mounted, setMounted] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    setMounted(true);
    
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Determine scroll direction
      if (currentScrollY > lastScrollY.current && currentScrollY > 100) {
        // Scrolling down & past threshold - hide navbar
        setVisible(false);
      } else {
        // Scrolling up - show navbar
        setVisible(true);
      }
      
      // Update scrolled state for styling (bg change)
      setScrolled(currentScrollY > 50);
      
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!mounted) return <div className="h-20 bg-[var(--clr-white)]" />;

  const mainNavItems = [
    { label: "About Us", href: "/about-us" },
    { label: "Koru", href: "/koru" },
    { label: "Medipride", href: "/medipride" },
    { label: "Case Study", href: "/case-study" },
    { label: "Contact Us", href: "/contact-us" },
  ];

  const megaMenuColumns = [
    { title: "Categories", data: categories, path: "/categories" },
    { title: "Therapy", data: therapies, path: "/therepy" },
    { title: "Personalized Gifts", data: personalizedGifts, path: "/personalized-gifts" },
    { title: "Occasion", data: occasions, path: "/occasion" },
    { title: "Digital Gifts", data: digitalGifts, path: "/digital-gifts" },
  ];

  return (
    <>
      {/* ─── NAVBAR ───────────────── */}
      <div
        className={`fixed left-0 right-0 z-40 flex justify-center px-4 py-3 transition-all duration-500 ease-in-out ${
          visible ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
        }`}
      >
        <nav
          className={`w-full max-w-7xl rounded-2xl transition-all duration-300 ${
            scrolled
              ? "bg-white/95 shadow-xl backdrop-blur-md"
              : "bg-white/90 shadow-md backdrop-blur-sm"
          }`}
        >
          <div className="px-6">
            <div className="flex items-center justify-between h-16 md:h-20">
              {/* Logo */}
              <Link href="/" className="flex items-center">
                <img
                  src="/param-logo.png"
                  alt="Param Logo"
                  className="h-10 md:h-14 object-contain"
                />
              </Link>

              {/* Desktop Menu */}
              <ul className="hidden lg:flex items-center gap-2">
                {/* PRODUCTS MEGA MENU */}
                <li
                  className="relative"
                  onMouseEnter={() => setActiveDropdown("products")}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <button
                    className="flex items-center gap-1 px-3 py-2 text-sm font-semibold text-[var(--clr-text-dark)] hover:text-[var(--clr-primary)] transition"
                  >
                    Products
                    <ChevronDown
                      className={`w-4 h-4 transition ${
                        activeDropdown === "products" ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {activeDropdown === "products" && (
                    <div
                      className="absolute top-full left-1/2 -translate-x-1/2 w-[1000px] bg-white rounded-xl shadow-2xl border border-[var(--clr-border-light)] p-6 z-50"
                    >
                      <div className="grid grid-cols-5 gap-6">
                        {megaMenuColumns.map((column, idx) => (
                          <div key={idx}>
                            <h3 className="font-bold text-xs uppercase mb-3 border-b pb-2 text-[var(--clr-text-dark)] tracking-wide">
                              {column.title}
                            </h3>
                            <ul className="space-y-2">
                              {column.data?.slice(0, 12).map((item: any) => (
                                <li key={item.slug}>
                                  <Link
                                    href={`${column.path}/${item.slug}`}
                                    className="text-xs text-gray-600 hover:text-[var(--clr-primary)] hover:translate-x-1 transition-all block py-0.5"
                                  >
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
                    <Link
                      href={item.href}
                      className="px-3 py-2 text-sm font-semibold text-[var(--clr-text-dark)] hover:text-[var(--clr-primary)] transition"
                    >
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
                    className="block px-4 py-3 text-sm font-semibold text-[var(--clr-text-dark)] hover:text-[var(--clr-primary)] hover:bg-[var(--clr-bg-gray)] rounded-xl"
                    onClick={() => setMobileOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}

                {/* CTA */}
                <Link
                  href="/brochure"
                  className="block text-center bg-[var(--clr-primary)] hover:bg-[var(--clr-secondary)] text-white font-bold py-3 rounded-xl transition"
                >
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
