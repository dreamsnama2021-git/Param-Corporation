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

  if (!mounted) {
    return <div className="h-20 bg-white/90" />;
  }

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
      {/* Top Info Bar */}
      <div
        className={`fixed top-0 left-0 right-0 z-50 bg-[#e8402a] text-white transition-transform duration-300 ease-in-out ${
          scrolled ? "-translate-y-full" : "translate-y-0"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 h-10 flex items-center justify-between text-xs md:text-sm">
          <div className="flex items-center gap-4 md:gap-6">
            <a
              href="tel:+911234567890"
              className="flex items-center gap-1.5 hover:text-red-100 transition-colors"
            >
              <Phone className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">+91 12345 67890</span>
            </a>
            <a
              href="mailto:info@bigimpex.com"
              className="flex items-center gap-1.5 hover:text-red-100 transition-colors"
            >
              <Mail className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">info@bigimpex.com</span>
            </a>
          </div>
          <div className="flex items-center gap-4 md:gap-6 font-medium">
            <a href="/track" className="hover:text-red-100 transition-colors">
              Track Order
            </a>
            <span className="hidden sm:inline text-red-300">|</span>
            <a href="/support" className="hover:text-red-100 transition-colors">
              Support
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div
        className={`fixed left-0 right-0 z-40 flex justify-center px-4 py-3 transition-all duration-300 ease-in-out ${
          scrolled ? "top-0" : "top-10"
        }`}
      >
        <nav
          className={`w-full max-w-7xl rounded-2xl transition-all duration-300 ${
            scrolled
              ? "bg-white/95 shadow-2xl backdrop-blur-md"
              : "bg-white/90 shadow-lg backdrop-blur-sm"
          }`}
        >
          <div className="px-6">
            <div className="flex items-center justify-between h-16 md:h-20">
              {/* Logo */}
              <Link
                href="/"
                className="flex-shrink-0 flex flex-col leading-none"
              >
                <span className="text-2xl md:text-3xl font-black tracking-tight">
                  <span className="text-[#e8402a]">Param</span>
                  <span className="text-gray-900">Corporate</span>
                </span>
                <span className="text-[10px] text-gray-400 font-medium tracking-widest uppercase">
                  Empowered by Innovation
                </span>
              </Link>

              {/* Desktop Nav */}
              <ul className="hidden lg:flex items-center gap-1">
                {/* Products Mega Menu */}
                {/* Products Mega Menu - FIXED */}
                <li
                  className="relative pb-4 -mb-4" // Added pb-4 and -mb-4 to extend hover area
                  onMouseEnter={() => setActiveDropdown("products")}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <button className="flex items-center gap-1 px-3 py-2 text-sm font-semibold text-gray-700 hover:text-[#e8402a] rounded-md transition-colors duration-150 whitespace-nowrap">
                    Products
                    <ChevronDown
                      className={`w-4 h-4 transition-transform ${activeDropdown === "products" ? "rotate-180" : ""}`}
                    />
                  </button>

                  {activeDropdown === "products" && (
                    <div className="absolute top-full left-1/2 -translate-x-1/2 w-[900px] bg-white rounded-xl shadow-2xl border border-gray-100 p-6 z-50">
                      {/* ... dropdown content remains the same ... */}

                      <div className="grid grid-cols-5 gap-6">
                        {/* By Industry */}
                        <div>
                          <h3 className="font-bold text-gray-900 mb-3 text-xs uppercase tracking-wider border-b pb-2">
                            By Industry
                          </h3>
                          <ul className="space-y-1.5">
                            {industries?.slice(0, 6).map((item) => (
                              <li key={item.slug}>
                                <Link
                                  href={`/industry/${item.slug}`}
                                  className="text-xs text-gray-600 hover:text-[#e8402a] transition-colors block py-1"
                                >
                                  {item.name}
                                </Link>
                              </li>
                            ))}
                          
                          </ul>
                        </div>

                        {/* By Category */}
                        <div>
                          <h3 className="font-bold text-gray-900 mb-3 text-xs uppercase tracking-wider border-b pb-2">
                            By Category
                          </h3>
                          <ul className="space-y-1.5">
                            {categories?.slice(0, 6).map((item) => (
                              <li key={item.slug}>
                                <Link
                                  href={`/gift-categories/${item.slug}`}
                                  className="text-xs text-gray-600 hover:text-[#e8402a] transition-colors block py-1"
                                >
                                  {item.name}
                                </Link>
                              </li>
                            ))}
                          
                          </ul>
                        </div>

                        {/* By Price */}
                        <div>
                          <h3 className="font-bold text-gray-900 mb-3 text-xs uppercase tracking-wider border-b pb-2">
                            By Price
                          </h3>
                          <ul className="space-y-1.5">
                            {priceRanges?.map((item) => (
                              <li key={item.slug}>
                                <Link
                                  href={`/price/${item.slug}`}
                                  className="text-xs text-gray-600 hover:text-[#e8402a] transition-colors block py-1"
                                >
                                  {item.name.replace(
                                    "Corporate Gifts Under ",
                                    "Under ",
                                  )}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* By Occasion */}
                        <div>
                          <h3 className="font-bold text-gray-900 mb-3 text-xs uppercase tracking-wider border-b pb-2">
                            By Occasion
                          </h3>
                          <ul className="space-y-1.5">
                            {occasions?.slice(0, 6).map((item) => (
                              <li key={item.slug}>
                                <Link
                                  href={`/occasion/${item.slug}`}
                                  className="text-xs text-gray-600 hover:text-[#e8402a] transition-colors block py-1"
                                >
                                  {item.name}
                                </Link>
                              </li>
                            ))}
                          
                          </ul>
                        </div>

                        {/* By Therapy */}
                        <div>
                          <h3 className="font-bold text-gray-900 mb-3 text-xs uppercase tracking-wider border-b pb-2">
                            By Therapy
                          </h3>
                          <ul className="space-y-1.5">
                            {therapies?.map((item) => (
                              <li key={item.slug}>
                                <Link
                                  href={`/therapy/${item.slug}`}
                                  className="text-xs text-gray-600 hover:text-[#e8402a] transition-colors block py-1"
                                >
                                  {item.name}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                    
                    </div>
                  )}
                </li>

                {/* Other Nav Items */}
                {mainNavItems.map((item) => (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      className="flex items-center gap-1 px-3 py-2 text-sm font-semibold text-gray-700 hover:text-[#e8402a] rounded-md transition-colors duration-150 whitespace-nowrap"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>

              {/* Mobile Hamburger */}
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="lg:hidden p-2 rounded-md text-gray-700 hover:text-[#e8402a] hover:bg-red-50 transition-colors"
                aria-label="Toggle menu"
              >
                {mobileOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {mobileOpen && (
            <div className="lg:hidden border-t border-gray-100 rounded-b-2xl bg-white max-h-[80vh] overflow-y-auto">
              <div className="px-4 py-4 space-y-1">
                <div className="flex items-center gap-2 bg-gray-100 rounded-full px-4 py-2.5 mb-4">
                  <Search className="w-4 h-4 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search products..."
                    className="bg-transparent text-sm outline-none flex-1 text-gray-600 placeholder:text-gray-400"
                  />
                </div>

                {/* Products Accordion in Mobile */}
                <div className="border-b border-gray-100 pb-2 mb-2">
                  <button className="flex items-center justify-between w-full px-4 py-3 text-sm font-semibold text-gray-800">
                    Products
                  </button>

                  {/* Categories in Mobile */}
                  <div className="pl-4 space-y-4 mt-2">
                    {/* By Industry */}
                    <div>
                      <span className="text-xs font-bold text-gray-500 uppercase tracking-wider">
                        By Industry
                      </span>
                      <div className="ml-2 mt-1 space-y-1">
                        {industries.map((item) => (
                          <Link
                            key={item.slug}
                            href={`/industry/${item.slug}`}
                            className="block px-3 py-2 text-sm text-gray-600 hover:text-[#e8402a] rounded-lg transition-colors"
                            onClick={() => setMobileOpen(false)}
                          >
                            {item.name}
                          </Link>
                        ))}
                      </div>
                    </div>

                    {/* By Category */}
                    <div>
                      <span className="text-xs font-bold text-gray-500 uppercase tracking-wider">
                        By Category
                      </span>
                      <div className="ml-2 mt-1 space-y-1">
                        {categories.map((item) => (
                          <Link
                            key={item.slug}
                            href={`/gift-categories/${item.slug}`}
                            className="block px-3 py-2 text-sm text-gray-600 hover:text-[#e8402a] rounded-lg transition-colors"
                            onClick={() => setMobileOpen(false)}
                          >
                            {item.name}
                          </Link>
                        ))}
                      </div>
                    </div>

                    {/* By Price */}
                    <div>
                      <span className="text-xs font-bold text-gray-500 uppercase tracking-wider">
                        By Price
                      </span>
                      <div className="ml-2 mt-1 space-y-1">
                        {priceRanges.map((item) => (
                          <Link
                            key={item.slug}
                            href={`/price/${item.slug}`}
                            className="block px-3 py-2 text-sm text-gray-600 hover:text-[#e8402a] rounded-lg transition-colors"
                            onClick={() => setMobileOpen(false)}
                          >
                            {item.name}
                          </Link>
                        ))}
                      </div>
                    </div>

                    {/* By Occasion */}
                    <div>
                      <span className="text-xs font-bold text-gray-500 uppercase tracking-wider">
                        By Occasion
                      </span>
                      <div className="ml-2 mt-1 space-y-1">
                        {occasions.map((item) => (
                          <Link
                            key={item.slug}
                            href={`/occasion/${item.slug}`}
                            className="block px-3 py-2 text-sm text-gray-600 hover:text-[#e8402a] rounded-lg transition-colors"
                            onClick={() => setMobileOpen(false)}
                          >
                            {item.name}
                          </Link>
                        ))}
                      </div>
                    </div>

                    {/* By Therapy */}
                    <div>
                      <span className="text-xs font-bold text-gray-500 uppercase tracking-wider">
                        By Therapy
                      </span>
                      <div className="ml-2 mt-1 space-y-1">
                        {therapies.map((item) => (
                          <Link
                            key={item.slug}
                            href={`/therapy/${item.slug}`}
                            className="block px-3 py-2 text-sm text-gray-600 hover:text-[#e8402a] rounded-lg transition-colors"
                            onClick={() => setMobileOpen(false)}
                          >
                            {item.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Other Nav Items */}
                {mainNavItems.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    className="flex items-center justify-between px-4 py-3 text-sm font-semibold text-gray-800 hover:text-[#e8402a] hover:bg-red-50 rounded-xl transition-colors"
                    onClick={() => setMobileOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}

                <div className="pt-4 border-t border-gray-100">
                  <Link
                    href="/brochure"
                    className="block w-full text-center bg-[#e8402a] hover:bg-[#c73520] text-white text-sm font-bold px-4 py-3 rounded-xl transition-all duration-200"
                    onClick={() => setMobileOpen(false)}
                  >
                    Download Brochure
                  </Link>
                </div>
              </div>
            </div>
          )}
        </nav>
      </div>
    </>
  );
}
