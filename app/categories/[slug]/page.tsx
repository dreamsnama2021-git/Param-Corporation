/* ─── 3-Card Swipeable Gallery with Lightbox Modal ─── */
"use client";

import React, {
  useMemo,
  useState,
  useEffect,
  useCallback,
  useRef,
} from "react";
import Link from "next/link";
import { useParams, useRouter, useSearchParams } from "next/navigation";
import {
  ArrowUpRight,
  Home,
  ChevronRight,
  ChevronLeft,
  X,
  ZoomIn,
  ArrowRight,
} from "lucide-react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  allProducts,
  categories,
  therapies,
  occasions,
  personalizedGifts,
  digitalGifts,
  getCategoryBySlug,
  getOccasionCategories,
  getMonthCategories,
  getTherapyCategories,
} from "../../data";

const listingStyles = `
  .listing-container { font-family: system-ui, -apple-system, sans-serif; }
  .category-item { position: relative; transition: all 0.3s ease; }
  .category-item:hover .category-arrow { opacity: 1; transform: translateX(0); }
  .category-arrow { opacity: 0; transform: translateX(-8px); transition: all 0.3s ease; }
  .img-card-hover:hover .zoom-icon { opacity: 1; }
  .zoom-icon { opacity: 0; transition: opacity 0.3s ease; }
  .img-card-hover:hover img { transform: scale(1.06); }
  .img-card-hover img { transition: transform 0.5s ease; }
  .thumb-active { border: 2px solid #F5A623 !important; }
  .tab-active { background: #F5A623; color: #7a3e00; }
  .tab-inactive { background: transparent; color: #6b7280; }
  .tab-inactive:hover { background: #f3f4f6; color: #0f172a; }
  .scrollbar-hide::-webkit-scrollbar { display: none; }
  .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
`;

// Tab configuration
const TABS = [
  { id: "all", label: "All Products", color: "#F5A623", path: "/categories" },
  {
    id: "categories",
    label: "Categories",
    color: "#F5A623",
    path: "/categories",
  },
  { id: "therapy", label: "Therapy", color: "#10B981", path: "/therapy" },
  {
    id: "personalized",
    label: "Personalized",
    color: "#8B5CF6",
    path: "/personalized",
  },
  { id: "occasion", label: "Occasions", color: "#EC4899", path: "/occasions" },
  { id: "digital", label: "Digital", color: "#3B82F6", path: "/digital" },
] as const;

type TabId = (typeof TABS)[number]["id"];

// Get categories based on active tab
const getCategoriesForTab = (tabId: TabId) => {
  if (tabId === "all")
    return [
      ...categories,
      ...therapies,
      ...personalizedGifts,
      ...occasions,
      ...digitalGifts,
    ];
  if (tabId === "categories") return categories;
  if (tabId === "therapy") return therapies;
  if (tabId === "personalized") return personalizedGifts;
  if (tabId === "occasion") return occasions;
  if (tabId === "digital") return digitalGifts;
  return [];
};

// Get sidebar categories (filtered for occasion tab to show only main occasions)
const getSidebarCategories = (tabId: TabId) => {
  if (tabId === "occasion") {
    return getOccasionCategories();
  }
  return getCategoriesForTab(tabId);
};

/* ── Ensure minimum 6 images by repeating if needed ── */
const getProductImages = (product: any): string[] => {
  const base: string[] = product.images?.length
    ? product.images
    : [product.image].filter(Boolean);

  if (!base.length || !base[0]) {
    return [];
  }

  const result: string[] = [];
  while (result.length < 6) {
    result.push(...base);
  }
  return result.slice(0, Math.max(6, base.length));
};

/* ══════════════════════════════════════════
   PRODUCT CARD (Updated to Link to Page)
══════════════════════════════════════════ */
function ProductCard({
  product,
  accentColor,
}: {
  product: any;
  accentColor: string;
}) {
  const productImages = getProductImages(product);
  const productName = product.name || "Category";

  return (
    <Link href={`/product/${product.id}`} className="block">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-30px" }}
        className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 cursor-pointer group h-full"
      >
        <div className="relative aspect-square overflow-hidden bg-gray-50">
          {productImages[0] ? (
            <Image
              src={productImages[0]}
              alt={productName}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              unoptimized
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center">
              <span className="text-gray-300 text-sm">No image</span>
            </div>
          )}
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
            <div className="opacity-0 group-hover:opacity-100 transition-opacity w-10 h-10 rounded-full bg-white/90 flex items-center justify-center shadow-lg">
              <ZoomIn className="w-4 h-4 text-[#0f172a]" />
            </div>
          </div>
        </div>

        <div className="p-3">
          <p className="text-sm font-medium text-[#0f172a] leading-tight line-clamp-2">
            {productName}
          </p>
        
        </div>
      </motion.div>
    </Link>
  );
}

/* ══════════════════════════════════════════
   PAGE COMPONENT
══════════════════════════════════════════ */
export default function CategoryPage() {
  const params = useParams();
  const router = useRouter();
  const searchParams = useSearchParams();

  const slug = params?.slug as string | undefined;
  const tabParam = searchParams.get("tab") as TabId | null;

  const activeTab: TabId = useMemo(() => {
    if (tabParam && TABS.some((t) => t.id === tabParam)) return tabParam;

    if (slug) {
      if (categories.some((c) => c.slug === slug)) return "categories";
      if (therapies.some((t) => t.slug === slug)) return "therapy";
      if (personalizedGifts.some((p) => p.slug === slug)) return "personalized";
      if (occasions.some((o) => o.slug === slug)) return "occasion";
      if (digitalGifts.some((d) => d.slug === slug)) return "digital";
    }

    return "categories";
  }, [slug, tabParam]);

  const isAllProducts = !slug || slug === "all";
  const activeTabColor =
    TABS.find((t) => t.id === activeTab)?.color || "#F5A623";
  const activeTabPath =
    TABS.find((t) => t.id === activeTab)?.path || "/categories";

  const tabCategories = useMemo(
    () => getCategoriesForTab(activeTab),
    [activeTab],
  );
  const sidebarCategories = useMemo(
    () => getSidebarCategories(activeTab),
    [activeTab],
  );

  const filteredProducts = useMemo(() => {
    if (activeTab === "all" || isAllProducts) {
      const tabCats =
        activeTab === "all"
          ? [
              ...categories,
              ...therapies,
              ...personalizedGifts,
              ...occasions,
              ...digitalGifts,
            ]
          : tabCategories;
      return allProducts.filter((p) =>
        tabCats.some((cat) => cat.slug === p.category),
      );
    }
    return allProducts.filter((p) => p.category === slug);
  }, [slug, isAllProducts, tabCategories, activeTab]);

  const currentCategory = isAllProducts
    ? null
    : tabCategories.find((c) => c.slug === slug);

  const handleTabChange = (tabId: TabId) => {
    const firstCategory = getCategoriesForTab(tabId)[0];
    if (firstCategory) {
      router.push(`/categories/${firstCategory.slug}?tab=${tabId}`);
    } else {
      router.push(`/categories/all?tab=${tabId}`);
    }
  };

  const handleCategorySelect = (catSlug: string) => {
    router.push(`/categories/${catSlug}?tab=${activeTab}`);
  };

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: listingStyles }} />
      <div className="min-h-screen listing-container bg-[#f8fafc]">
        {/* Hero */}
        <section className="relative bg-gradient-to-br from-[#0b3c5d] via-[#072c44] to-[#0093cb]/20 py-12 lg:py-16 overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <svg width="100%" height="100%">
              <pattern
                id="dots"
                width="40"
                height="40"
                patternUnits="userSpaceOnUse"
              >
                <circle cx="20" cy="20" r="1.5" fill="white" />
              </pattern>
              <rect width="100%" height="100%" fill="url(#dots)" />
            </svg>
          </div>
          <div className="relative max-w-7xl mx-auto px-6">
            <nav className="flex items-center gap-2 text-xs uppercase tracking-wider text-white/60 mb-8 flex-wrap">
              <Link
                href="/"
                className="hover:text-white flex items-center gap-1.5 transition-colors"
              >
                <Home className="w-3 h-3" /> Home
              </Link>
              <ChevronRight className="w-3 h-3" />
              <Link
                href="/categories/all"
                className="hover:text-white transition-colors"
              >
                Products
              </Link>
              <ChevronRight className="w-3 h-3" />
              <span className="text-white/80">
                {TABS.find((t) => t.id === activeTab)?.label}
              </span>
              {!isAllProducts && currentCategory && (
                <>
                  <ChevronRight className="w-3 h-3" />
                  <span
                    className="font-medium"
                    style={{ color: activeTabColor }}
                  >
                    {currentCategory.name}
                  </span>
                </>
              )}
            </nav>
            <h1 className="text-4xl lg:text-5xl font-serif italic text-white">
              {isAllProducts
                ? `All ${TABS.find((t) => t.id === activeTab)?.label}`
                : currentCategory?.name}
            </h1>

            <p className="text-white/60 mt-3 max-w-2xl">
              {isAllProducts
                ? `Explore our complete collection of ${TABS.find((t) => t.id === activeTab)?.label.toLowerCase()}`
                : currentCategory?.description ||
                  "Premium quality products for your needs"}
            </p>
          </div>
        </section>

        {/* Content */}
        <div className="max-w-7xl mx-auto px-6 py-12 lg:py-16">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
            {/* Sidebar */}
            <aside className="lg:w-64 flex-shrink-0">
              <div className="sticky top-[140px]">
                <div className="flex items-center gap-2 mb-5">
                  <span className="text-[10px] font-black uppercase tracking-[0.2em] text-[#6b7280]">
                    Filter By
                  </span>
                  <div className="h-px flex-1 bg-gray-200" />
                </div>

                <div className="flex flex-col space-y-0.5 max-h-[calc(100vh-200px)] overflow-y-auto pr-2">
                  {/* All Products */}
                  <button
                    onClick={() => router.push("/categories/all?tab=all")}
                    className={`category-item group text-left py-3 px-4 rounded-xl transition-all ${
                      isAllProducts && activeTab === "all"
                        ? "font-semibold"
                        : "text-[#6b7280] hover:text-[#0f172a] hover:bg-gray-100"
                    }`}
                    style={
                      isAllProducts && activeTab === "all"
                        ? { backgroundColor: "#F5A62320", color: "#0f172a" }
                        : {}
                    }
                    type="button"
                  >
                    <div className="flex items-center justify-between">
                      <span>All Products</span>
                      <span className="text-xs px-2 py-0.5 rounded-full text-white bg-[#F5A623]">
                        <ArrowRight className="h-5 w-5" />
                      </span>
                    </div>
                  </button>

                  {/* Tab-level filters */}
                  {TABS.filter((t) => t.id !== "all").map((tab) => {
                    const tabProds = getCategoriesForTab(tab.id);
                    const count = allProducts.filter((p) =>
                      tabProds.some((cat) => cat.slug === p.category),
                    ).length;

                    return (
                      <button
                        key={tab.id}
                        onClick={() => handleTabChange(tab.id)}
                        className={`category-item group text-left py-3 px-4 rounded-xl transition-all ${
                          activeTab === tab.id
                            ? "font-semibold"
                            : "text-[#6b7280] hover:text-[#0f172a] hover:bg-gray-100"
                        }`}
                        style={
                          activeTab === tab.id
                            ? {
                                backgroundColor: `${tab.color}20`,
                                color: "#0f172a",
                              }
                            : {}
                        }
                        type="button"
                      >
                        <div className="flex items-center justify-between">
                          <span>{tab.label}</span>
                          <span
                            className={`text-xs px-2 py-0.5 rounded-full transition-colors ${
                              activeTab === tab.id
                                ? "text-white"
                                : "bg-gray-200 text-[#6b7280] group-hover:bg-gray-300"
                            }`}
                            style={
                              activeTab === tab.id
                                ? { backgroundColor: tab.color }
                                : {}
                            }
                          >
                            <ArrowRight className="h-5 w-5" />
                          </span>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>
            </aside>

            {/* Listings */}
            {/* Listings */}
            <main className="flex-1 min-w-0">
              {filteredProducts.length === 0 ? (
                <div className="text-center py-20">
                  <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gray-100 flex items-center justify-center">
                    <svg
                      className="w-8 h-8 text-gray-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M20 12H4M12 4v16"
                      />
                    </svg>
                  </div>
                  <p className="text-[#6b7280] text-lg">
                    No products found in this category.
                  </p>
                  <button
                    onClick={() =>
                      router.push(`/categories/all?tab=${activeTab}`)
                    }
                    className="mt-4 text-sm font-medium px-4 py-2 rounded-full transition-colors"
                    style={{ color: activeTabColor }}
                    type="button"
                  >
                    View all {TABS.find((t) => t.id === activeTab)?.label}
                  </button>
                </div>
              ) : (
                <>
                  <div className="mb-6 flex items-center justify-between">
                    <p className="text-sm text-[#6b7280]">
                      Showing{" "}
                      <span className="font-semibold text-[#0f172a]">
                        {filteredProducts.length}
                      </span>{" "}
                      products
                    </p>
                  </div>

                  {/* ── GRID LAYOUT ── */}
                  <div className="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-4 gap-4">
                    {filteredProducts.map((product) => (
                      <ProductCard
                        key={product.id}
                        product={product}
                        accentColor={activeTabColor}
                      />
                    ))}
                  </div>
                </>
              )}
            </main>
          </div>
        </div>
      </div>
    </>
  );
}
