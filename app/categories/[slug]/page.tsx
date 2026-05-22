/* ─── Category Page with Left Sidebar Dropdown + Subcategories ─── */
"use client";

import React, {
  useMemo,
  useState,
  useEffect,
  useRef,
  Suspense,
} from "react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import {
  ArrowUpRight,
  Home,
  ChevronRight,
  ChevronLeft,
  X,
  ZoomIn,
  Grid3X3,
  List,
  ChevronDown,
  Check,
  Package,
  Eye,
} from "lucide-react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  allProducts,
  categories,
  occasions,
  personalizedGifts,
} from "../../data";

const listingStyles = `
  .listing-container { font-family: system-ui, -apple-system, sans-serif; }
  .scrollbar-hide::-webkit-scrollbar { display: none; }
  .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
  .product-card:hover .product-overlay { opacity: 1; }
  .product-overlay { opacity: 0; transition: opacity 0.3s ease; }
  
  /* Category highlight animation */
  .category-section {
    transition: all 0.3s ease;
    border-radius: 1rem;
    padding: 1rem;
    scroll-margin-top: 100px;
  }
  
  .category-section.highlight-category {
    animation: highlightPulse 0.8s ease-in-out 3;
    background-color: rgba(0, 147, 203, 0.03);
    box-shadow: 0 0 30px 5px rgba(0, 147, 203, 0.1);
  }
  
  @keyframes highlightPulse {
    0%, 100% {
      box-shadow: 0 0 0 0 rgba(0, 147, 203, 0);
      background-color: rgba(0, 147, 203, 0.01);
    }
    50% {
      box-shadow: 0 0 20px 4px rgba(0, 147, 203, 0.15);
      background-color: rgba(0, 147, 203, 0.05);
    }
  }
  
  /* Smooth scroll behavior */
  html {
    scroll-behavior: smooth;
  }
  
  /* View More Button Styles */
  .view-more-btn {
    transition: all 0.3s ease;
  }
  
  .view-more-btn:hover {
    transform: translateY(-2px);
  }
`;

/* Brand Colors */
const BRAND = {
  primary: "#0093cb",
  secondary: "#00a65d",
  accent: "#060706",
};

// Tab configuration with brand colors
const TABS = [
  { id: "all", label: "All Products", color: BRAND.primary },
  { id: "categories", label: "Categories", color: BRAND.primary },
  { id: "personalized", label: "Personalized", color: BRAND.secondary },
  { id: "occasion", label: "Occasions", color: "#8B5CF6" },
] as const;

type TabId = (typeof TABS)[number]["id"];

// Get categories based on active tab
const getCategoriesForTab = (tabId: TabId) => {
  if (tabId === "all") return [...categories, ...personalizedGifts, ...occasions];
  if (tabId === "categories") return categories;
  if (tabId === "personalized") return personalizedGifts;
  if (tabId === "occasion") return occasions;
  return [];
};

// Maximum products to show per subcategory
const MAX_PRODUCTS_PER_CATEGORY = 10;

/* ══════════════════════════════════════════
   SIDEBAR WITH DROPDOWN + SUBCATEGORIES
══════════════════════════════════════════ */
function SidebarWithSubcategories({
  activeTab,
  onSelect,
}: {
  activeTab: TabId;
  onSelect: (tabId: TabId) => void;
}) {
  // Get subcategories for current active tab
  const subCategories = useMemo(() => {
    if (activeTab === "all") return [];
    return getCategoriesForTab(activeTab);
  }, [activeTab]);

  const getCount = (tabId: TabId) => {
    if (tabId === "all") return allProducts.length;
    const cats = getCategoriesForTab(tabId);
    return allProducts.filter((p) => cats.some((cat) => cat.slug === p.category)).length;
  };

  const getSubCategoryCount = (slug: string) => {
    return allProducts.filter((p) => p.category === slug).length;
  };

  const handleSubCategoryClick = (slug: string) => {
    const element = document.getElementById(`category-${slug}`);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth', 
        block: 'start',
        inline: 'nearest'
      });
      
      // Add highlight effect
      element.classList.add('highlight-category');
      setTimeout(() => {
        element.classList.remove('highlight-category');
      }, 3000);
    }
  };

  return (
    <div className="space-y-6">
      {/* ─── FILTER BY HEADER ─── */}
      <div>
        <div className="flex items-center gap-2 mb-3">
          <span className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-500">
            Filter By
          </span>
          <div className="h-px flex-1 bg-gray-200" />
        </div>

        {/* ─── MAIN TABS AS EXPANDABLE LIST ─── */}
        <div className="bg-white rounded-xl border-2 border-gray-200 shadow-sm overflow-hidden">
          {TABS.map((tab, index) => {
            const count = getCount(tab.id);
            const isSelected = activeTab === tab.id;
            const hasSubcategories = tab.id !== "all";

            return (
              <div key={tab.id}>
                {/* Main Tab Button */}
                <button
                  onClick={() => onSelect(tab.id)}
                  className={`w-full flex items-center justify-between py-3 px-4 text-left transition-colors relative ${
                    isSelected
                      ? "bg-gray-50"
                      : "hover:bg-gray-50"
                  } ${index !== TABS.length - 1 ? "border-b border-gray-100" : ""}`}
                  type="button"
                >
                  <div className="flex items-center gap-3">
                    <span
                      className="w-2.5 h-2.5 rounded-full flex-shrink-0"
                      style={{ backgroundColor: tab.color }}
                    />
                    <span className={`text-sm ${
                      isSelected 
                        ? "font-semibold text-[#060706]" 
                        : "text-gray-700"
                    }`}>
                      {tab.label}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs text-gray-400">{count}</span>
                    {hasSubcategories && (
                      <ChevronDown
                        className={`w-4 h-4 text-gray-400 transition-transform duration-200 ${
                          isSelected ? "rotate-180" : ""
                        }`}
                      />
                    )}
                  </div>
                </button>

                {/* Subcategories Dropdown */}
                <AnimatePresence>
                  {isSelected && subCategories.length > 0 && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.2 }}
                      className="bg-gray-50/50 border-t border-gray-100 overflow-hidden"
                    >
                      <div className="py-2 px-2 space-y-0.5 max-h-[50vh] overflow-y-auto scrollbar-hide">
                        {subCategories.map((cat) => {
                          const count = getSubCategoryCount(cat.slug);
                          return (
                            <button
                              key={cat.slug}
                              onClick={() => handleSubCategoryClick(cat.slug)}
                              className="w-full group flex items-center justify-between py-2.5 px-3 rounded-lg text-sm text-gray-600 hover:text-[#060706] hover:bg-white transition-all text-left"
                              type="button"
                            >
                              <div className="flex items-center gap-2">
                                <span className="w-1.5 h-1.5 rounded-full bg-gray-300 group-hover:bg-[#0093cb] transition-colors" />
                                <span className="line-clamp-1">{cat.name}</span>
                              </div>
                              <span className="text-xs text-gray-400 ml-2 flex-shrink-0">
                                {count}
                              </span>
                            </button>
                          );
                        })}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

/* ══════════════════════════════════════════
   PRODUCT CARD (Grid View)
══════════════════════════════════════════ */
function ProductCard({
  product,
  accentColor,
}: {
  product: any;
  accentColor: string;
}) {
  const productImages = product.images || [product.image];
  const productName = product.name || "Product";

  return (
    <Link href={`/product/${product.id}`} className="block">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-30px" }}
        className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer group h-full product-card border border-gray-100"
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
              <Package className="w-8 h-8 text-gray-300" />
            </div>
          )}
          <div className="absolute inset-0 bg-[#0093cb]/0 group-hover:bg-[#0093cb]/10 transition-colors duration-300 flex items-center justify-center product-overlay">
            <div className="w-10 h-10 rounded-full bg-white/95 flex items-center justify-center shadow-lg">
              <ZoomIn className="w-4 h-4 text-[#0093cb]" />
            </div>
          </div>
          {product.features && product.features.length > 0 && (
            <div className="absolute top-2 left-2">
              <span className="px-2 py-1 bg-white/90 backdrop-blur-sm rounded-full text-[10px] font-semibold text-[#060706] shadow-sm border border-gray-100">
                {product.features[0]}
              </span>
            </div>
          )}
        </div>

        <div className="p-3">
          <p className="text-sm font-semibold text-[#060706] leading-tight line-clamp-2 mb-1 group-hover:text-[#0093cb] transition-colors">
            {productName}
          </p>
          {product.tags && (
            <div className="flex flex-wrap gap-1">
              {product.tags.slice(0, 2).map((tag: string, idx: number) => (
                <span
                  key={idx}
                  className="text-[10px] font-medium"
                  style={{ color: accentColor }}
                >
                  #{tag}
                </span>
              ))}
            </div>
          )}
        </div>
      </motion.div>
    </Link>
  );
}

/* ══════════════════════════════════════════
   PRODUCT LIST ITEM (List View)
══════════════════════════════════════════ */
function ProductListItem({
  product,
  accentColor,
}: {
  product: any;
  accentColor: string;
}) {
  const productImage = product.images?.[0] || product.image;

  return (
    <Link href={`/product/${product.id}`} className="block">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer group flex gap-4 p-4 border border-gray-100"
      >
        <div className="relative w-24 h-24 sm:w-28 sm:h-28 flex-shrink-0 rounded-xl overflow-hidden bg-gray-50">
          {productImage ? (
            <Image
              src={productImage}
              alt={product.name}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
              unoptimized
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center">
              <Package className="w-6 h-6 text-gray-300" />
            </div>
          )}
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="text-sm font-bold text-[#060706] mb-1 group-hover:text-[#0093cb] transition-colors line-clamp-1">
            {product.name}
          </h3>
          <p className="text-xs text-gray-500 mb-2 line-clamp-2">
            {product.description}
          </p>
          {product.features && (
            <div className="flex flex-wrap gap-1 mb-2">
              {product.features.slice(0, 3).map((feature: string, idx: number) => (
                <span
                  key={idx}
                  className="text-[10px] px-2 py-0.5 bg-[#0093cb]/5 text-[#0093cb] rounded-full font-medium"
                >
                  {feature}
                </span>
              ))}
            </div>
          )}
          {product.tags && (
            <div className="flex flex-wrap gap-1">
              {product.tags.slice(0, 2).map((tag: string, idx: number) => (
                <span key={idx} className="text-[10px] font-medium" style={{ color: accentColor }}>
                  #{tag}
                </span>
              ))}
            </div>
          )}
        </div>
        <ArrowUpRight className="w-5 h-5 text-gray-300 group-hover:text-[#0093cb] transition-colors flex-shrink-0 self-center" />
      </motion.div>
    </Link>
  );
}

/* ══════════════════════════════════════════
   LIGHTBOX MODAL
══════════════════════════════════════════ */
function LightboxModal({
  product,
  onClose,
}: {
  product: any;
  onClose: () => void;
}) {
  const [currentImage, setCurrentImage] = useState(0);
  const productImages = product.images || [product.image];

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % productImages.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + productImages.length) % productImages.length);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 bg-[#060706]/95 backdrop-blur-sm flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div
        className="relative max-w-4xl w-full max-h-[90vh] rounded-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative aspect-square">
          {productImages[currentImage] && (
            <Image
              src={productImages[currentImage]}
              alt={product.name}
              fill
              className="object-contain"
              unoptimized
            />
          )}
        </div>

        {productImages.length > 1 && (
          <>
            <button onClick={prevImage} className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white hover:bg-[#0093cb]/30 transition-colors">
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button onClick={nextImage} className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white hover:bg-[#0093cb]/30 transition-colors">
              <ChevronRight className="w-5 h-5" />
            </button>
          </>
        )}

        <button onClick={onClose} className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white hover:bg-white/20 transition-colors">
          <X className="w-5 h-5" />
        </button>

        {productImages.length > 1 && (
          <div className="absolute bottom-20 left-1/2 -translate-x-1/2 px-3 py-1.5 bg-white/10 backdrop-blur-md rounded-full text-white text-xs">
            {currentImage + 1} / {productImages.length}
          </div>
        )}

        <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-[#060706]/90 to-transparent">
          <h3 className="text-white text-xl font-bold">{product.name}</h3>
          <p className="text-white/80 text-sm mt-1">{product.description}</p>
          {product.tags && (
            <div className="flex flex-wrap gap-1 mt-2">
              {product.tags.map((tag: string, idx: number) => (
                <span key={idx} className="text-xs px-2 py-0.5 bg-[#0093cb]/20 text-[#0093cb] rounded-full">
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
}

/* ══════════════════════════════════════════
   CATEGORY SECTION WITH VIEW MORE
══════════════════════════════════════════ */
function CategorySection({
  group,
  viewMode,
  activeTabColor,
  onViewAll,
}: {
  group: any;
  viewMode: "grid" | "list";
  activeTabColor: string;
  onViewAll: (categorySlug: string, categoryName: string) => void;
}) {
  const [showAll, setShowAll] = useState(false);
  const displayedProducts = showAll 
    ? group.products 
    : group.products.slice(0, MAX_PRODUCTS_PER_CATEGORY);
  const hasMore = group.products.length > MAX_PRODUCTS_PER_CATEGORY;

  const handleViewMore = () => {
    if (showAll) {
      // Scroll to top of section when collapsing
      const element = document.getElementById(`category-${group.categorySlug}`);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
    setShowAll(!showAll);
  };

  const handleViewAllProducts = () => {
    onViewAll(group.categorySlug, group.categoryName);
  };

  return (
    <section 
      id={`category-${group.categorySlug}`}
      className="category-section"
    >
      <div className="mb-6">
        <div className="flex items-center justify-between flex-wrap gap-3">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <h2 className="text-xl lg:text-2xl font-bold text-[#060706]">
                {group.categoryName}
              </h2>
              <span className="text-sm text-gray-400 font-normal">
                ({group.products.length})
              </span>
            </div>
            {group.description && (
              <p className="text-sm text-gray-500">{group.description}</p>
            )}
            <div
              className="mt-3 w-16 h-1 rounded-full"
              style={{
                background: `linear-gradient(to right, ${BRAND.primary}, ${BRAND.secondary})`,
              }}
            />
          </div>
          
          {/* View All Button */}
          <button
            onClick={handleViewAllProducts}
            className="flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all view-more-btn"
            style={{
              backgroundColor: `${BRAND.primary}10`,
              color: BRAND.primary,
              border: `1px solid ${BRAND.primary}20`,
            }}
            type="button"
          >
            <Eye className="w-4 h-4" />
            View All Products
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {viewMode === "grid" ? (
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {displayedProducts.map((product: any) => (
            <ProductCard
              key={product.id}
              product={product}
              accentColor={activeTabColor}
            />
          ))}
        </div>
      ) : (
        <div className="flex flex-col gap-3">
          {displayedProducts.map((product: any) => (
            <ProductListItem
              key={product.id}
              product={product}
              accentColor={activeTabColor}
            />
          ))}
        </div>
      )}

      {hasMore && (
        <div className="mt-6 text-center">
          <button
            onClick={handleViewMore}
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-sm font-medium transition-all view-more-btn"
            style={{
              backgroundColor: showAll ? `${BRAND.secondary}10` : `${BRAND.primary}10`,
              color: showAll ? BRAND.secondary : BRAND.primary,
              border: `1px solid ${showAll ? BRAND.secondary : BRAND.primary}20`,
            }}
            type="button"
          >
            {showAll ? (
              <>
                Show Less
                <ChevronDown className="w-4 h-4" />
              </>
            ) : (
              <>
                Show More ({group.products.length - MAX_PRODUCTS_PER_CATEGORY} more)
                <ChevronDown className="w-4 h-4" />
              </>
            )}
          </button>
        </div>
      )}
    </section>
  );
}

/* ══════════════════════════════════════════
   MAIN PAGE COMPONENT WITH SCROLL LOGIC
══════════════════════════════════════════ */
function CategoryPageContent() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const tabParam = searchParams.get("tab") as TabId | null;
  const [selectedProduct, setSelectedProduct] = useState<any>(null);
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [highlightedCategory, setHighlightedCategory] = useState<string | null>(null);

  // Default to "all" if no tab specified
  const activeTab: TabId = useMemo(() => {
    if (tabParam && TABS.some((t) => t.id === tabParam)) return tabParam;
    return "all";
  }, [tabParam]);

  const activeTabColor = TABS.find((t) => t.id === activeTab)?.color || BRAND.primary;
  const tabCategories = useMemo(() => getCategoriesForTab(activeTab), [activeTab]);

  // Handle hash scrolling and highlighting on mount
  useEffect(() => {
    const hash = window.location.hash;
    if (hash && hash.startsWith('#category-')) {
      const categorySlug = hash.replace('#category-', '');
      setHighlightedCategory(categorySlug);
      
      // Small delay to ensure DOM is ready
      setTimeout(() => {
        const element = document.getElementById(`category-${categorySlug}`);
        if (element) {
          element.scrollIntoView({ 
            behavior: 'smooth', 
            block: 'start',
            inline: 'nearest'
          });
          
          // Add highlight effect temporarily
          element.classList.add('highlight-category');
          setTimeout(() => {
            element.classList.remove('highlight-category');
            setHighlightedCategory(null);
          }, 3000);
        }
      }, 500);
    }
  }, [activeTab]); // Re-run when tab changes

  // Group products by subcategory
  const groupedProducts = useMemo(() => {
    const groups: { categoryName: string; categorySlug: string; products: any[]; description?: string }[] = [];

    tabCategories.forEach((cat) => {
      const products = allProducts.filter((p) => p.category === cat.slug);
      if (products.length > 0) {
        groups.push({
          categoryName: cat.name,
          categorySlug: cat.slug,
          products,
          description: cat.description,
        });
      }
    });

    return groups;
  }, [activeTab, tabCategories]);

  const totalProducts = useMemo(() => {
    return groupedProducts.reduce((sum, group) => sum + group.products.length, 0);
  }, [groupedProducts]);

  const handleTabSelect = (tabId: TabId) => {
    router.push(`/categories/all?tab=${tabId}`, { scroll: false });
  };

  const handleViewAllProducts = (categorySlug: string, categoryName: string) => {
    // Navigate to category-specific page or filter view
    router.push(`/categories/all?tab=${activeTab}&category=${categorySlug}`);
  };

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: listingStyles }} />
      <div className="min-h-screen listing-container bg-[#f8fafc]">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-[#060706] via-[#0b3c5d] to-[#0093cb]/30 py-12 lg:py-16 overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <svg width="100%" height="100%">
              <pattern id="dots" width="40" height="40" patternUnits="userSpaceOnUse">
                <circle cx="20" cy="20" r="1.5" fill="white" />
              </pattern>
              <rect width="100%" height="100%" fill="url(#dots)" />
            </svg>
          </div>
          <div className="relative max-w-[1500px] mx-auto px-6">
            <nav className="flex items-center gap-2 text-xs uppercase tracking-wider text-white/60 mb-6">
              <Link href="/" className="hover:text-white flex items-center gap-1.5 transition-colors">
                <Home className="w-3 h-3" /> Home
              </Link>
              <ChevronRight className="w-3 h-3" />
              <span className="text-white/80">Products</span>
            </nav>

            <h1 className="text-4xl lg:text-5xl font-serif italic text-white">
              {TABS.find((t) => t.id === activeTab)?.label}
            </h1>

            <p className="text-white/60 mt-3 max-w-2xl text-lg">
              {activeTab === "all"
                ? "Explore our complete collection of premium pharmaceutical gifts and branding products"
                : activeTab === "categories"
                ? "Browse products by category including tabletops, paperweights, desk utilities and more"
                : activeTab === "personalized"
                ? "Discover personalized gifts with custom branding and doctor-specific details"
                : "Find the perfect gifts for every occasion and medical event throughout the year"}
            </p>

            <div className="flex items-center gap-3 mt-4">
              <span className="text-white/50 text-sm">{totalProducts} products</span>
              <span className="w-1 h-1 rounded-full bg-white/30" />
              <span className="text-white/50 text-sm">{groupedProducts.length} subcategories</span>
            </div>
          </div>
        </section>

        {/* Main Content with Sidebar */}
        <div className="max-w-[1500px] mx-auto px-6 py-12 lg:py-16">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
            {/* ─── LEFT SIDEBAR ─── */}
            <aside className="lg:w-64 flex-shrink-0">
              <div className="sticky top-[100px]">
                <SidebarWithSubcategories activeTab={activeTab} onSelect={handleTabSelect} />

                {/* View Toggle */}
                <div className="mt-6">
                  <div className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-500 mb-3">
                    View As
                  </div>
                  <div className="flex gap-2">
                    <button
                      onClick={() => setViewMode("grid")}
                      className={`flex-1 flex items-center justify-center gap-2 py-2.5 px-3 rounded-lg text-sm font-medium transition-all ${
                        viewMode === "grid"
                          ? "bg-[#060706] text-white shadow-lg"
                          : "bg-white border border-gray-200 text-gray-600 hover:bg-gray-50"
                      }`}
                      type="button"
                    >
                      <Grid3X3 className="w-4 h-4" />
                      Grid
                    </button>
                    <button
                      onClick={() => setViewMode("list")}
                      className={`flex-1 flex items-center justify-center gap-2 py-2.5 px-3 rounded-lg text-sm font-medium transition-all ${
                        viewMode === "list"
                          ? "bg-[#060706] text-white shadow-lg"
                          : "bg-white border border-gray-200 text-gray-600 hover:bg-gray-50"
                      }`}
                      type="button"
                    >
                      <List className="w-4 h-4" />
                      List
                    </button>
                  </div>
                </div>
              </div>
            </aside>

            {/* ─── RIGHT PRODUCT LISTING ─── */}
            <main className="flex-1 min-w-0">
              {groupedProducts.length === 0 ? (
                <div className="text-center py-20">
                  <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-[#0093cb]/5 flex items-center justify-center">
                    <Package className="w-8 h-8 text-[#0093cb]/40" />
                  </div>
                  <p className="text-gray-500 text-lg">No products found.</p>
                  <button
                    onClick={() => router.push("/categories/all?tab=all")}
                    className="mt-4 text-sm font-medium px-6 py-2.5 rounded-full text-white transition-all hover:shadow-lg"
                    style={{ background: `linear-gradient(to right, ${BRAND.primary}, ${BRAND.secondary})` }}
                    type="button"
                  >
                    View all products
                  </button>
                </div>
              ) : (
                <>
                  <div className="mb-8 flex items-center justify-between">
                    <p className="text-sm text-gray-500">
                      Showing <span className="font-semibold text-[#060706]">{totalProducts}</span> products
                      in <span className="font-semibold text-[#060706]">{groupedProducts.length}</span> subcategories
                    </p>
                  </div>

                  <div className="space-y-14">
                    {groupedProducts.map((group) => (
                      <CategorySection
                        key={group.categorySlug}
                        group={group}
                        viewMode={viewMode}
                        activeTabColor={activeTabColor}
                        onViewAll={handleViewAllProducts}
                      />
                    ))}
                  </div>
                </>
              )}
            </main>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {selectedProduct && (
          <LightboxModal
            product={selectedProduct}
            onClose={() => setSelectedProduct(null)}
          />
        )}
      </AnimatePresence>
    </>
  );
}

/* ══════════════════════════════════════════
   EXPORT WITH SUSPENSE BOUNDARY
══════════════════════════════════════════ */
export default function CategoryPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center">
        <div className="w-8 h-8 border-4 border-[#0093cb] border-t-transparent rounded-full animate-spin" />
      </div>
    }>
      <CategoryPageContent />
    </Suspense>
  );
}