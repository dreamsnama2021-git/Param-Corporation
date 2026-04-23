"use client";

import React, { useEffect, useState, useRef } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ChevronDown, Menu, X, Search, ChevronRight } from "lucide-react";
import {
  categories,
  therapies,
  personalizedGifts,
  occasions,
  digitalGifts,
} from "@/app/data";

export default function Navbar() {
  const router = useRouter();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileSubMenu, setMobileSubMenu] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const [visible, setVisible] = useState(true);
  const [mounted, setMounted] = useState(false);
  const lastScrollY = useRef(0);
  const hoverTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const leaveTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY.current && currentScrollY > 100) {
        setVisible(false);
      } else {
        setVisible(true);
      }
      setScrolled(currentScrollY > 50);
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (!mobileOpen) setMobileSubMenu(null);
  }, [mobileOpen]);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target.closest('.mega-menu-container')) {
        setActiveDropdown(null);
      }
    };
    if (activeDropdown) document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [activeDropdown]);

  useEffect(() => {
    return () => {
      if (hoverTimeoutRef.current) clearTimeout(hoverTimeoutRef.current);
      if (leaveTimeoutRef.current) clearTimeout(leaveTimeoutRef.current);
    };
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
    { title: "Categories", data: categories, tabId: 'categories', color: '#F5A623' },
    { title: "Therapy", data: therapies, tabId: 'therapy', color: '#10B981' },
    { title: "Personalized Gifts", data: personalizedGifts, tabId: 'personalized', color: '#8B5CF6' },
    { title: "Occasion", data: occasions, tabId: 'occasion', color: '#EF4444' },
    { title: "Digital Gifts", data: digitalGifts, tabId: 'digital', color: '#3B82F6' },
  ];

  const handleProductsClick = (e: React.MouseEvent) => {
    e.preventDefault();
    router.push('/categories/all?tab=all');
    setActiveDropdown(null);
  };

  const handleMouseEnter = () => {
    if (leaveTimeoutRef.current) {
      clearTimeout(leaveTimeoutRef.current);
      leaveTimeoutRef.current = null;
    }
    hoverTimeoutRef.current = setTimeout(() => {
      setActiveDropdown("products");
    }, 150);
  };

  const handleMouseLeave = () => {
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
      hoverTimeoutRef.current = null;
    }
    leaveTimeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 200);
  };

  const handleCategoryClick = (e: React.MouseEvent, tabId: string, categorySlug: string) => {
    e.preventDefault();
    router.push(`/categories/${categorySlug}?tab=${tabId}`);
    setActiveDropdown(null);
    setMobileOpen(false);
  };

  const toggleMobileSubMenu = (id: string) => {
    setMobileSubMenu(mobileSubMenu === id ? null : id);
  };

  return (
    <>
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
                <img src="/param-logo.png" alt="Param Logo" className="h-10 md:h-14 object-contain" />
              </Link>

              {/* Desktop Menu */}
              <ul className="hidden lg:flex items-center gap-2">
                <li 
                  className="relative mega-menu-container" 
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  <button 
                    onClick={handleProductsClick}
                    className="flex items-center gap-1 px-3 py-2 text-sm font-semibold text-[var(--clr-text-dark)] hover:text-[var(--clr-primary)] transition cursor-pointer"
                  >
                    Products
                    <ChevronDown className={`w-4 h-4 transition ${activeDropdown === "products" ? "rotate-180" : ""}`} />
                  </button>

                  {activeDropdown === "products" && (
                    <div 
                      className="absolute top-full left-1/2 -translate-x-1/2 w-[1000px] bg-white rounded-xl shadow-2xl border border-[var(--clr-border-light)] p-6 z-50"
                      onMouseEnter={handleMouseEnter}
                      onMouseLeave={handleMouseLeave}
                    >
                      <div className="grid grid-cols-5 gap-6">
                        {megaMenuColumns.map((column, idx) => (
                          <div key={idx}>
                            <div className="flex items-center justify-between mb-3 border-b pb-2">
                              <h3 className="font-bold text-xs uppercase text-[var(--clr-text-dark)] tracking-wide">{column.title}</h3>
                            </div>
                            <ul className="space-y-2">
                              {column.data?.slice(0, 12).map((item: any) => (
                                <li key={item.slug}>
                                  <a href={`/categories/${item.slug}?tab=${column.tabId}`} onClick={(e) => handleCategoryClick(e, column.tabId, item.slug)} className="text-xs text-gray-600 hover:text-[var(--clr-primary)] transition-all block py-0.5">
                                    {item.name}
                                  </a>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </li>

                {mainNavItems.map((item) => (
                  <li key={item.label}>
                    <Link href={item.href} className="px-3 py-2 text-sm font-semibold text-[var(--clr-text-dark)] hover:text-[var(--clr-primary)] transition">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>

              {/* Mobile Toggle */}
              <button onClick={() => setMobileOpen(!mobileOpen)} className="lg:hidden p-2 text-[var(--clr-text-dark)]">
                {mobileOpen ? <X /> : <Menu />}
              </button>
            </div>
          </div>

          {/* MOBILE MENU */}
          {mobileOpen && (
            <div className="lg:hidden border-t border-gray-100 bg-white max-h-[85vh] overflow-y-auto rounded-b-2xl">
              <div className="p-4 space-y-2">
                {/* Search */}
                <div className="flex items-center gap-2 bg-gray-100 rounded-xl px-4 py-3 mb-4">
                  <Search className="w-4 h-4 text-gray-400" />
                  <input placeholder="Search products..." className="bg-transparent outline-none text-sm flex-1" />
                </div>

                {/* All Products Link */}
                <Link
                  href="/categories/all?tab=all"
                  className="block px-4 py-3.5 text-sm font-bold text-[var(--clr-primary)] hover:bg-gray-50 rounded-xl border border-[var(--clr-primary)]/20 bg-[var(--clr-primary)]/5"
                  onClick={() => setMobileOpen(false)}
                >
                  View All Products →
                </Link>

                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400 px-2 mb-1 mt-4">
                  Product Collections
                </p>

                {/* Mobile Accordion Sections */}
                {megaMenuColumns.map((column) => (
                  <div key={column.tabId} className="border-b border-gray-50 last:border-0">
                    <button
                      onClick={() => toggleMobileSubMenu(column.tabId)}
                      className="flex items-center justify-between w-full px-4 py-4 text-sm font-semibold text-gray-700 hover:bg-gray-50 rounded-xl transition-all"
                    >
                      <span className="flex items-center gap-3">
                        <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: column.color }} />
                        {column.title}
                      </span>
                      <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${mobileSubMenu === column.tabId ? "rotate-180" : ""}`} />
                    </button>
                    
                    {/* Collapsible Content */}
                    <div className={`overflow-hidden transition-all duration-300 ease-in-out ${mobileSubMenu === column.tabId ? "max-h-[500px] opacity-100 mb-2" : "max-h-0 opacity-0"}`}>
                      <div className="grid grid-cols-1 gap-1 px-4 pb-2">
                        {column.data?.map((item: any) => (
                          <Link
                            key={item.slug}
                            href={`/categories/${item.slug}?tab=${column.tabId}`}
                            onClick={() => setMobileOpen(false)}
                            className="flex items-center justify-between px-6 py-2.5 text-sm text-gray-600 hover:text-[var(--clr-primary)] active:bg-gray-100 rounded-lg"
                          >
                            {item.name}
                            <ChevronRight className="w-3 h-3 opacity-30" />
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}

                <div className="h-px bg-gray-100 my-4" />

                {/* Main Nav Links */}
                {mainNavItems.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    className="block px-4 py-3.5 text-sm font-bold text-gray-800 hover:bg-gray-50 rounded-xl"
                    onClick={() => setMobileOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
          )}
        </nav>
      </div>
    </>
  );
}