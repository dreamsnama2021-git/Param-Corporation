"use client";

import React, { useEffect, useState, useRef } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ChevronDown, Menu, X, Search } from "lucide-react";
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

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target.closest('.mega-menu-container')) {
        setActiveDropdown(null);
      }
    };
    
    if (activeDropdown) {
      document.addEventListener('click', handleClickOutside);
    }
    
    return () => document.removeEventListener('click', handleClickOutside);
  }, [activeDropdown]);

  if (!mounted) return <div className="h-20 bg-[var(--clr-white)]" />;

  const mainNavItems = [
    { label: "About Us", href: "/about-us" },
    { label: "Koru", href: "/koru" },
    { label: "Medipride", href: "/medipride" },
    { label: "Case Study", href: "/case-study" },
    { label: "Contact Us", href: "/contact-us" },
  ];

  // Helper function to get the first category of a type for navigation
  const getFirstCategorySlug = (type: string) => {
    switch (type) {
      case 'categories': return categories[0]?.slug || 'all';
      case 'therapy': return therapies[0]?.slug || 'all';
      case 'personalized': return personalizedGifts[0]?.slug || 'all';
      case 'occasion': return occasions[0]?.slug || 'all';
      case 'digital': return digitalGifts[0]?.slug || 'all';
      default: return 'all';
    }
  };

  const megaMenuColumns = [
    { 
      title: "Categories", 
      data: categories, 
      tabId: 'categories',
      color: '#F5A623' 
    },
    { 
      title: "Therapy", 
      data: therapies, 
      tabId: 'therapy',
      color: '#10B981' 
    },
    { 
      title: "Personalized Gifts", 
      data: personalizedGifts, 
      tabId: 'personalized',
      color: '#8B5CF6' 
    },
    { 
      title: "Occasion", 
      data: occasions, 
      tabId: 'occasion',
      color: '#EF4444' 
    },
    { 
      title: "Digital Gifts", 
      data: digitalGifts, 
      tabId: 'digital',
      color: '#3B82F6' 
    },
  ];

  // Handle category link click
  const handleCategoryClick = (e: React.MouseEvent, tabId: string, categorySlug: string) => {
    e.preventDefault();
    router.push(`/categories/${categorySlug}?tab=${tabId}`);
    setActiveDropdown(null);
  };

  // Handle "View All" for a section
  const handleViewAll = (e: React.MouseEvent, tabId: string) => {
    e.preventDefault();
    const firstSlug = getFirstCategorySlug(tabId);
    router.push(`/categories/${firstSlug}?tab=${tabId}`);
    setActiveDropdown(null);
  };

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
                  className="relative mega-menu-container"
                  onMouseEnter={() => setActiveDropdown("products")}
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
                      onMouseLeave={() => setActiveDropdown(null)}
                    >
                      <div className="grid grid-cols-5 gap-6">
                        {megaMenuColumns.map((column, idx) => (
                          <div key={idx}>
                            {/* Section Header with View All link */}
                            <div className="flex items-center justify-between mb-3 border-b pb-2">
                              <h3 className="font-bold text-xs uppercase text-[var(--clr-text-dark)] tracking-wide">
                                {column.title}
                              </h3>
                              {/* <button
                                onClick={(e) => handleViewAll(e, column.tabId)}
                                className="text-[9px] font-bold uppercase tracking-wider hover:underline transition-all"
                                style={{ color: column.color }}
                              >
                                View All →
                              </button> */}
                            </div>
                            <ul className="space-y-2">
                              {column.data?.slice(0, 12).map((item: any) => (
                                <li key={item.slug}>
                                  <a
                                    href={`/categories/${item.slug}?tab=${column.tabId}`}
                                    onClick={(e) => handleCategoryClick(e, column.tabId, item.slug)}
                                    className="text-xs text-gray-600 hover:text-[var(--clr-primary)] hover:translate-x-1 transition-all block py-0.5"
                                    style={{ 
                                      ':hover': { color: column.color } 
                                    } as any}
                                  >
                                    {item.name}
                                  </a>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                      
                      {/* Footer - All Products link */}
                      <div className="mt-6 pt-4 border-t border-gray-100">
                        <Link
                          href="/categories/all?tab=categories"
                          onClick={() => setActiveDropdown(null)}
                          className="text-xs font-semibold text-gray-500 hover:text-[var(--clr-primary)] transition-colors flex items-center justify-center gap-1"
                        >
                          Browse All Products
                          <ChevronDown className="w-3 h-3 -rotate-90" />
                        </Link>
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
            <div className="lg:hidden border-t border-[var(--clr-border-light)] bg-white max-h-[80vh] overflow-y-auto">
              <div className="p-4 space-y-4">
                {/* Search */}
                <div className="flex items-center gap-2 bg-[var(--clr-bg-gray)] rounded-full px-4 py-2">
                  <Search className="w-4 h-4 text-gray-400" />
                  <input
                    placeholder="Search products..."
                    className="bg-transparent outline-none text-sm flex-1"
                  />
                </div>

                {/* Mobile Product Categories */}
                <div className="space-y-3">
                  <p className="text-xs font-bold uppercase tracking-wider text-gray-500 px-2">
                    Products
                  </p>
                  
                  {/* All Products Link */}
                  <Link
                    href="/categories/all?tab=categories"
                    className="block px-4 py-2.5 text-sm font-semibold text-[var(--clr-primary)] hover:bg-[var(--clr-bg-gray)] rounded-xl"
                    onClick={() => setMobileOpen(false)}
                  >
                    All Products
                  </Link>
                  
                  {megaMenuColumns.map((column, idx) => (
                    <div key={idx} className="space-y-1">
                      <div className="flex items-center justify-between px-2">
                        <p className="text-xs font-bold uppercase tracking-wider text-gray-400">
                          {column.title}
                        </p>
                        {/* <button
                          onClick={(e) => {
                            e.preventDefault();
                            handleViewAll(e, column.tabId);
                            setMobileOpen(false);
                          }}
                          className="text-[9px] font-bold uppercase tracking-wider"
                          style={{ color: column.color }}
                        >
                          View All
                        </button> */}
                      </div>
                      {column.data?.slice(0, 6).map((item: any) => (
                        <Link
                          key={item.slug}
                          href={`/categories/${item.slug}?tab=${column.tabId}`}
                          className="block px-4 py-2 text-sm text-gray-600 hover:text-[var(--clr-primary)] hover:bg-[var(--clr-bg-gray)] rounded-lg"
                          onClick={() => setMobileOpen(false)}
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  ))}
                </div>

                {/* Divider */}
                <div className="h-px bg-gray-200 my-2" />

                {/* Main Nav Links */}
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
                  onClick={() => setMobileOpen(false)}
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