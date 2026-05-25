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
} from "@/app/data";

export default function Navbar() {
  const router = useRouter();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileSubMenu, setMobileSubMenu] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const [visible, setVisible] = useState(true);
  const [mounted, setMounted] = useState(false);
  const [navHeight, setNavHeight] = useState(72);
  const navRef = useRef<HTMLElement>(null);
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

  // Track actual nav height for mega menu positioning
  useEffect(() => {
    const updateNavHeight = () => {
      if (navRef.current) {
        setNavHeight(navRef.current.offsetHeight);
      }
    };
    updateNavHeight();
    window.addEventListener("resize", updateNavHeight);
    return () => window.removeEventListener("resize", updateNavHeight);
  }, [mounted]);

  useEffect(() => {
    if (!mobileOpen) setMobileSubMenu(null);
  }, [mobileOpen]);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target.closest(".mega-menu-container") && !target.closest(".mega-menu-dropdown")) {
        setActiveDropdown(null);
      }
    };
    if (activeDropdown) document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, [activeDropdown]);

  useEffect(() => {
    return () => {
      if (hoverTimeoutRef.current) clearTimeout(hoverTimeoutRef.current);
      if (leaveTimeoutRef.current) clearTimeout(leaveTimeoutRef.current);
    };
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileOpen]);

  if (!mounted) return <div className="h-14 bg-white" />;

  const mainNavItems = [
    { label: "About Us", href: "/about-us" },
    { label: "Koru", href: "/koru", isButton: true },
    { label: "Medipride", href: "/medipride", isButton: true },
    { label: "Digital Inputs", href: "/digital-gifts", isButton: true },
    { label: "Case Study", href: "/case-study" },
    { label: "Contact Us", href: "/contact-us" },
  ];

  const megaMenuColumns = [
    { title: "Categories", data: categories, tabId: "categories", color: "#F5A623" },
    { title: "Therapy", data: therapies, tabId: "therapy", color: "#10B981" },
    { title: "Personalized Gifts", data: personalizedGifts, tabId: "personalized", color: "#8B5CF6" },
    { title: "Occasion", data: occasions, tabId: "occasion", color: "#EF4444" },
  ];

  const handleProductsClick = (e: React.MouseEvent) => {
    e.preventDefault();
    router.push("/categories/all?tab=all");
    setActiveDropdown(null);
  };

  const handleCategoryClick = (e: React.MouseEvent, tabId: string, categorySlug: string) => {
    e.preventDefault();
    if (tabId === "categories") {
      router.push(`/categories/all?tab=categories#category-${categorySlug}`);
    } else if (tabId === "personalized") {
      router.push(`/categories/all?tab=personalized#category-${categorySlug}`);
    } else if (tabId === "occasion") {
      router.push(`/categories/all?tab=occasion#category-${categorySlug}`);
    } else if (tabId === "therapy") {
      router.push(`/medipride?therapy=${categorySlug}`);
    } else {
      router.push(`/categories/${categorySlug}?tab=${tabId}`);
    }
    setActiveDropdown(null);
    setMobileOpen(false);
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

  const toggleMobileSubMenu = (id: string) => {
    setMobileSubMenu(mobileSubMenu === id ? null : id);
  };

  return (
    <>
      {/* Navbar */}
      <div
        className={`sticky top-0 left-0 right-0 z-40 transition-all duration-500 ease-in-out ${
          visible ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <nav
          ref={navRef}
          className={`w-full transition-all duration-300 ${
            scrolled
              ? "bg-white/70 backdrop-blur-lg shadow-lg"
              : "bg-white/70 backdrop-blur-md"
          } border-b border-gray-100`}
        >
          <div className="px-4 max-w-[1500px] mx-auto">
            <div className="flex items-center justify-between h-14">
              {/* Logo */}
              <Link href="/" className="flex items-center shrink-0">
                <img
                  src="/banner/logo final for param .png"
                  alt="Param Logo"
                  className="h-10 object-contain"
                />
              </Link>

              {/* Desktop Menu */}
              <ul className="hidden lg:flex items-center gap-1">
                <li
                  className="relative mega-menu-container"
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  <button
                    onClick={handleProductsClick}
                    className="flex items-center gap-1 px-3 py-1.5 text-sm font-semibold text-gray-700 hover:text-[var(--clr-primary)] transition"
                  >
                    Products
                    <ChevronDown className="w-3.5 h-3.5 transition" />
                  </button>
                </li>

                {mainNavItems.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    className={`px-3 py-1.5 text-sm font-semibold rounded-full transition ${
                      item.isButton
                        ? "bg-[var(--clr-primary)] text-white hover:bg-[var(--clr-secondary)]"
                        : "text-gray-700 hover:text-[var(--clr-primary)]"
                    }`}
                    onClick={() => setMobileOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
              </ul>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setMobileOpen(true)}
                className="lg:hidden p-2 text-gray-700 bg-white rounded-lg shadow-sm border border-gray-200"
                aria-label="Open menu"
              >
                <Menu className="w-5 h-5" />
              </button>
            </div>
          </div>
        </nav>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-50 lg:hidden"
          onClick={() => setMobileOpen(false)}
        />
      )}

      {/* Mobile Menu Drawer */}
      <div
        className={`fixed top-0 right-0 bottom-0 w-[85%] max-w-[320px] bg-white shadow-2xl z-50 transition-transform duration-300 ease-in-out lg:hidden ${
          mobileOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-gray-200">
          <img
            src="/banner/logo final for param .png"
            alt="Logo"
            className="h-8 object-contain"
          />
          <button
            onClick={() => setMobileOpen(false)}
            className="p-2 text-gray-600 hover:bg-gray-100 rounded-lg"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto h-[calc(100%-60px)] pb-20">
          <div className="p-4 space-y-4">
            {/* Search */}
            <div className="flex items-center gap-2 bg-gray-100 rounded-lg px-3 py-2">
              <Search className="w-4 h-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search products..."
                className="bg-transparent outline-none text-sm flex-1"
              />
            </div>

            {/* All Products Link */}
            <Link
              href="/categories/all?tab=all"
              className="block px-3 py-2 text-sm font-bold text-center text-[var(--clr-primary)] border border-[var(--clr-primary)]/20 bg-[var(--clr-primary)]/5 rounded-lg"
              onClick={() => setMobileOpen(false)}
            >
              View All Products →
            </Link>

            {/* Divider */}
            <div className="pt-2">
              <p className="text-xs font-bold uppercase tracking-wider text-gray-400">
                Product Collections
              </p>
            </div>

            {/* Menu Sections */}
            {megaMenuColumns.map((column) => (
              <div key={column.tabId} className="border-b border-gray-100 pb-2">
                <button
                  onClick={() => toggleMobileSubMenu(column.tabId)}
                  className="flex items-center justify-between w-full py-2 text-sm font-semibold text-gray-700"
                >
                  <span className="flex items-center gap-2">
                    <div
                      className="w-2 h-2 rounded-full"
                      style={{ backgroundColor: column.color }}
                    />
                    {column.title}
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 transition-transform duration-200 ${
                      mobileSubMenu === column.tabId ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {mobileSubMenu === column.tabId && (
                  <div className="ml-4 mt-1 space-y-1">
                    {column.data?.slice(0, 8).map((item: any) => (
                      <Link
                        key={item.slug}
                        href={
                          column.tabId === "therapy"
                            ? `/medipride?therapy=${item.slug}`
                            : `/categories/all?tab=${column.tabId}#category-${item.slug}`
                        }
                        onClick={() => setMobileOpen(false)}
                        className="flex items-center justify-between px-3 py-2 text-sm text-gray-600 hover:text-[var(--clr-primary)] rounded-lg"
                      >
                        {item.name}
                        <ChevronRight className="w-3.5 h-3.5 opacity-40" />
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}

            <div className="h-px bg-gray-200 my-2" />

            {/* Main Nav Items */}
            <div className="space-y-2">
              {mainNavItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className={`block px-3 py-2 text-sm font-semibold rounded-lg ${
                    item.isButton
                      ? "bg-[var(--clr-primary)] text-white text-center"
                      : "text-gray-700 hover:bg-gray-50"
                  }`}
                  onClick={() => setMobileOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Mega Menu Dropdown */}
      {activeDropdown === "products" && (
        <div
          className="fixed left-0 right-0 z-40 bg-white shadow-xl border-t border-gray-200"
          style={{ top: `${navHeight}px` }}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div className="max-w-[1500px] mx-auto px-4 py-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {megaMenuColumns.map((column, idx) => (
                <div key={idx}>
                  <h3 className="font-bold text-xs uppercase text-gray-700 mb-2 flex items-center gap-2">
                    <div
                      className="w-2 h-2 rounded-full"
                      style={{ backgroundColor: column.color }}
                    />
                    {column.title}
                  </h3>
                  <ul className="space-y-1">
                    {column.data?.slice(0, 10).map((item: any) => (
                      <li key={item.slug}>
                        {column.tabId === "therapy" ? (
                          <Link
                            href={`/medipride?therapy=${item.slug}`}
                            className="text-xs text-gray-600 hover:text-[var(--clr-primary)] block"
                            onClick={() => setActiveDropdown(null)}
                          >
                            {item.name}
                          </Link>
                        ) : (
                          <a
                            href={`/categories/all?tab=${column.tabId}#category-${item.slug}`}
                            onClick={(e) => handleCategoryClick(e, column.tabId, item.slug)}
                            className="text-xs text-gray-600 hover:text-[var(--clr-primary)] block"
                          >
                            {item.name}
                          </a>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}