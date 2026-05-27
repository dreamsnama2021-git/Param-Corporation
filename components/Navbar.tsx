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

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (!mobileOpen) {
      setMobileSubMenu(null);
    }
  }, [mobileOpen]);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as HTMLElement;

      if (!target.closest(".mega-menu-container")) {
        setActiveDropdown(null);
      }
    };

    if (activeDropdown) {
      document.addEventListener("click", handleClickOutside);
    }

    return () =>
      document.removeEventListener("click", handleClickOutside);
  }, [activeDropdown]);

  useEffect(() => {
    return () => {
      if (hoverTimeoutRef.current) {
        clearTimeout(hoverTimeoutRef.current);
      }

      if (leaveTimeoutRef.current) {
        clearTimeout(leaveTimeoutRef.current);
      }
    };
  }, []);

  if (!mounted) {
    return <div className="h-14 bg-white" />;
  }

  const mainNavItems = [
    { label: "About Us", href: "/about-us" },
    { label: "Digital Inputs", href: "/digital-gifts",  },
    { label: "Case Study", href: "/case-study" },
    { label: "Contact Us", href: "/contact-us" },
    { label: "Koru", href: "/koru", isButton: true },
    { label: "Medipride", href: "/medipride", isButton: true },
  ];

  const megaMenuColumns = [
    {
      title: "Categories",
      data: categories,
      tabId: "categories",
      color: "#F5A623",
    },
    {
      title: "Therapy",
      data: therapies,
      tabId: "therapy",
      color: "#10B981",
    },
    {
      title: "Personalized Gifts",
      data: personalizedGifts,
      tabId: "personalized",
      color: "#8B5CF6",
    },
    {
      title: "Occasion",
      data: occasions,
      tabId: "occasion",
      color: "#EF4444",
    },
  ];

  const handleProductsClick = (e: React.MouseEvent) => {
    e.preventDefault();

    router.push("/categories/all?tab=all");

    setActiveDropdown(null);
  };

  const handleCategoryClick = (
    e: React.MouseEvent,
    tabId: string,
    categorySlug: string
  ) => {
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
    <div
      className={`sticky top-0 left-0 right-0 z-40 transition-all duration-500 ease-in-out ${
        visible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <nav
        className={`w-full transition-all duration-300 border-b border-gray-100 ${
          scrolled
            ? "bg-white/70 backdrop-blur-lg shadow-lg"
            : "bg-white/70 backdrop-blur-md"
        }`}
      >
        {/* OLD VERSION EXACT CONTAINER SPACING */}
        <div className="px-4 max-w-[1500px] mx-auto">
          {/* OLD VERSION EXACT HEIGHT */}
          <div className="flex items-center justify-between h-14">
            {/* Logo */}
            <Link href="/" className="flex items-center shrink-0">
              <img
                src="/PARAM CO. .png"
                alt="Param Logo"
                className="h-14 md:h-18 xl:h-24 ml-3 scale-130 xl:scale-150 object-contain"
              />
            </Link>

            {/* Desktop Menu */}
            <ul className="hidden  lg:flex items-center gap-3 xl:gap-4">
              {/* Products */}
              <li
                className="relative mega-menu-container"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <button
                  onClick={handleProductsClick}
                  className="flex items-center gap-1 px-3 py-1.5 text-xs xl:text-sm font-semibold text-gray-700 hover:text-[var(--clr-primary)] transition"
                >
                  Products

                  <ChevronDown
                    className={`w-3.5 h-3.5 transition ${
                      activeDropdown === "products"
                        ? "rotate-180"
                        : ""
                    }`}
                  />
                </button>

                {/* Mega Menu */}
                {activeDropdown === "products" && (
                  <div
                    className="absolute top-full left-1/2 -translate-x-1/2 w-[850px] bg-white/98 backdrop-blur-xl rounded-xl shadow-2xl border border-gray-200  p-4 z-50"
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                  >
                    {/* OLD VERSION GRID SPACING */}
                    <div className="grid grid-cols-4 gap-2 xl:gap-4">
                      {megaMenuColumns.map((column, idx) => (
                        <div key={idx}>
                          <h3 className="font-bold text-xs xl:text-sm uppercase text-gray-700 mb-2 flex items-center gap-2">
                            <div
                              className="w-2 h-2 rounded-full"
                              style={{
                                backgroundColor: column.color,
                              }}
                            />

                            {column.title}
                          </h3>

                          <ul className="space-y-3 xl:space-y-4">
                            {column.data
                              ?.slice(0, 15)
                              .map((item: any) => (
                                <li key={item.slug}>
                                  {column.tabId === "therapy" ? (
                                    <Link
                                      href={`/medipride?therapy=${item.slug}`}
                                      className="text-xs xl:text-sm text-gray-600 hover:text-[var(--clr-primary)] block"
                                      onClick={() =>
                                        setActiveDropdown(null)
                                      }
                                    >
                                      {item.name}
                                    </Link>
                                  ) : (
                                    <a
                                      href={`/categories/all?tab=${column.tabId}#category-${item.slug}`}
                                      onClick={(e) =>
                                        handleCategoryClick(
                                          e,
                                          column.tabId,
                                          item.slug
                                        )
                                      }
                                      className="text-xs xl:text-sm text-gray-600 hover:text-[var(--clr-primary)] block"
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
                )}
              </li>

              {/* Main Nav */}
              {mainNavItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className={`px-3 py-0.5 text-xs xl:text-sm font-semibold rounded-full transition ${
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

            {/* Mobile Toggle */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden p-2 text-gray-700"
            >
              {mobileOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>

        {/* MOBILE MENU */}
        {mobileOpen && (
          <div className="lg:hidden border-t border-gray-200 bg-white/98 backdrop-blur-xl max-h-[85vh] overflow-y-auto">
            {/* OLD VERSION MOBILE PADDING */}
            <div className="p-3 space-y-3 pb-6">
              {/* Search */}
              <div className="flex items-center gap-2 bg-gray-100 rounded-lg px-3 py-2">
                <Search className="w-4 h-4 text-gray-400" />

                <input
                  placeholder="Search products..."
                  className="bg-transparent outline-none text-sm flex-1"
                />
              </div>

              {/* All Products */}
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

              {/* Mobile Sections */}
              {megaMenuColumns.map((column) => (
                <div
                  key={column.tabId}
                  className="border-b border-gray-100 pb-2"
                >
                  <button
                    onClick={() =>
                      toggleMobileSubMenu(column.tabId)
                    }
                    className="flex items-center justify-between w-full py-2 text-sm font-semibold text-gray-700"
                  >
                    <span className="flex items-center gap-2">
                      <div
                        className="w-2 h-2 rounded-full"
                        style={{
                          backgroundColor: column.color,
                        }}
                      />

                      <span className="text-xs sm:text-sm">
                        {column.title}
                      </span>
                    </span>

                    <ChevronDown
                      className={`w-4 h-4 transition-transform duration-200 ${
                        mobileSubMenu === column.tabId
                          ? "rotate-180"
                          : ""
                      }`}
                    />
                  </button>

                  {mobileSubMenu === column.tabId && (
                    <div className="ml-4 mt-1 space-y-1">
                      {column.data
                        ?.slice(0, 8)
                        .map((item: any) =>
                          column.tabId === "therapy" ? (
                            <Link
                              key={item.slug}
                              href={`/medipride?therapy=${item.slug}`}
                              onClick={() =>
                                setMobileOpen(false)
                              }
                              className="flex items-center justify-between px-3 py-2 text-xs sm:text-sm text-gray-600 hover:text-[var(--clr-primary)] rounded-lg"
                            >
                              <span className="truncate flex-1">
                                {item.name}
                              </span>

                              <ChevronRight className="w-3.5 h-3.5 opacity-40 shrink-0 ml-2" />
                            </Link>
                          ) : (
                            <Link
                              key={item.slug}
                              href={`/categories/all?tab=${column.tabId}#category-${item.slug}`}
                              onClick={() =>
                                setMobileOpen(false)
                              }
                              className="flex items-center justify-between px-3 py-2 text-xs sm:text-sm text-gray-600 hover:text-[var(--clr-primary)] rounded-lg"
                            >
                              <span className="truncate flex-1">
                                {item.name}
                              </span>

                              <ChevronRight className="w-3.5 h-3.5 opacity-40 shrink-0 ml-2" />
                            </Link>
                          )
                        )}
                    </div>
                  )}
                </div>
              ))}

              <div className="h-px bg-gray-200 my-2" />

              {/* Main Nav Mobile */}
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
        )}
      </nav>
    </div>
  );
}