// ─── Navbar Component ─────────────────────────────────────────────────────────
"use client";

import { useEffect, useState } from "react";
import { ChevronDown, Menu, X, Search, Phone, Mail } from "lucide-react";

interface NavItem {
  label: string;
  href: string;
  children?: { label: string; href: string }[];
}

const NAV_ITEMS: NavItem[] = [
  { label: "About Us", href: "/about" },
  {
    label: "Products",
    href: "/products",
    children: [
      { label: "Corporate Gifts", href: "/products/corporate-gifts" },
      { label: "Promotional Items", href: "/products/promotional" },
      { label: "Premium Gifts", href: "/products/premium" },
    ],
  },
  { label: "Brands", href: "/brands" },
  { label: "Pharmaceutical Gifts", href: "/pharma" },
  { label: "Zexcel", href: "/zexcel" },
  { label: "Grob Prismo", href: "/grob-prismo" },
  { label: "Contact Us", href: "/contact" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <>
      {/* Top Info Bar - Hides on scroll */}
      <div
        className={`fixed top-0 left-0 right-0 z-50 bg-[#e8402a] text-white transition-transform duration-300 ease-in-out ${
          scrolled ? "-translate-y-full" : "translate-y-0"
        }`}
      >
        <div className="max-w-5xl mx-auto px-4 h-10 flex items-center justify-between text-xs md:text-sm">
          <div className="flex items-center gap-4 md:gap-6">
            <a href="tel:+911234567890" className="flex items-center gap-1.5 hover:text-red-100 transition-colors">
              <Phone className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">+91 12345 67890</span>
            </a>
            <a href="mailto:info@bigimpex.com" className="flex items-center gap-1.5 hover:text-red-100 transition-colors">
              <Mail className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">info@bigimpex.com</span>
            </a>
          </div>
          <div className="flex items-center gap-4 md:gap-6 font-medium">
            <a href="/track" className="hover:text-red-100 transition-colors">Track Order</a>
            <span className="hidden sm:inline text-red-300">|</span>
            <a href="/support" className="hover:text-red-100 transition-colors">Support</a>
          </div>
        </div>
      </div>

      {/* Main Navbar - Fixed with glassmorphism effect */}
      <div
        className={`fixed left-0 right-0 z-40 flex justify-center px-4 py-3 transition-all duration-300 ease-in-out ${
          scrolled ? "top-0" : "top-10"
        }`}
      >
        <nav
          className={`w-full max-w-5xl rounded-2xl transition-all duration-300 ${
            scrolled 
              ? "bg-white/95 shadow-2xl backdrop-blur-md" 
              : "bg-white/90 shadow-lg backdrop-blur-sm"
          }`}
        >
          <div className="px-6">
            <div className="flex items-center justify-between h-16 md:h-20">
              {/* Logo */}
              <a href="/" className="flex-shrink-0 flex flex-col leading-none">
                <span className="text-2xl md:text-3xl font-black tracking-tight">
                  <span className="text-[#e8402a]">Big</span>
                  <span className="text-gray-900">Impex</span>
                </span>
                <span className="text-[10px] text-gray-400 font-medium tracking-widest uppercase">
                  Empowered by Innovation
                </span>
              </a>

              {/* Desktop Nav */}
              <ul className="hidden lg:flex items-center gap-1">
                {NAV_ITEMS.map((item) => (
                  <li
                    key={item.label}
                    className="relative"
                    onMouseEnter={() => item.children && setActiveDropdown(item.label)}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    <a
                      href={item.href}
                      className="flex items-center gap-1 px-3 py-2 text-sm font-semibold text-gray-700 hover:text-[#e8402a] rounded-md transition-colors duration-150 whitespace-nowrap"
                    >
                      {item.label}
                      {item.children && <ChevronDown className="w-4 h-4" />}
                    </a>

                    {/* Dropdown */}
                    {item.children && activeDropdown === item.label && (
                      <div className="absolute top-full left-0 mt-1 w-52 bg-white rounded-xl shadow-2xl border border-gray-100 py-2 z-50">
                        {item.children.map((child) => (
                          <a
                            key={child.label}
                            href={child.href}
                            className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-red-50 hover:text-[#e8402a] transition-colors font-medium"
                          >
                            {child.label}
                          </a>
                        ))}
                      </div>
                    )}
                  </li>
                ))}
              </ul>

              {/* Mobile Hamburger */}
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="lg:hidden p-2 rounded-md text-gray-700 hover:text-[#e8402a] hover:bg-red-50 transition-colors"
                aria-label="Toggle menu"
              >
                {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {mobileOpen && (
            <div className="lg:hidden border-t border-gray-100 rounded-b-2xl bg-white">
              <div className="px-4 py-4 space-y-1">
                <div className="flex items-center gap-2 bg-gray-100 rounded-full px-4 py-2.5 mb-4">
                  <Search className="w-4 h-4 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search products..."
                    className="bg-transparent text-sm outline-none flex-1 text-gray-600 placeholder:text-gray-400"
                  />
                </div>

                {NAV_ITEMS.map((item) => (
                  <div key={item.label}>
                    <a
                      href={item.href}
                      className="flex items-center justify-between px-4 py-3 text-sm font-semibold text-gray-800 hover:text-[#e8402a] hover:bg-red-50 rounded-xl transition-colors"
                      onClick={() => !item.children && setMobileOpen(false)}
                    >
                      {item.label}
                      {item.children && <ChevronDown className="w-4 h-4" />}
                    </a>
                    {item.children && (
                      <div className="ml-4 mt-1 space-y-1 border-l-2 border-red-100 pl-4">
                        {item.children.map((child) => (
                          <a
                            key={child.label}
                            href={child.href}
                            className="block px-3 py-2 text-sm text-gray-600 hover:text-[#e8402a] rounded-lg transition-colors"
                            onClick={() => setMobileOpen(false)}
                          >
                            {child.label}
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                ))}

                <div className="pt-4 border-t border-gray-100">
                  <a
                    href="/brochure"
                    className="block w-full text-center bg-[#e8402a] hover:bg-[#c73520] text-white text-sm font-bold px-4 py-3 rounded-xl transition-all duration-200"
                    onClick={() => setMobileOpen(false)}
                  >
                    Download Brochure
                  </a>
                </div>
              </div>
            </div>
          )}
        </nav>
      </div>
      {/* NO SPACER HERE - Hero sits behind navbar */}
    </>
  );
}