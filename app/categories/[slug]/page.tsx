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
  TrendingUp,
  Users,
  Leaf,
  Calendar,
  Gift,
  Stethoscope,
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

// Category data with descriptions and keyword metrics
const CATEGORY_CONTENT: Record<string, {
  description: string;
  keywords: Array<{ word: string; volume: string; competition: string }>;
  longDescription?: string;
  icon?: React.ReactNode;
}> = {
  "paper-weights": {
    description: "Premium desk accessories designed to provide daily brand visibility in clinics, hospitals, and doctor workspaces, making them effective pharma promotional gifts with long-term brand recall.",
    longDescription: "Our premium paper weights combine functionality with elegant design, ensuring your brand stays visible throughout the day. Crafted from high-quality materials, these desk accessories serve as constant reminders of your pharmaceutical brand while providing practical utility in medical environments.",
    keywords: [
      { word: "pharma promotional gifts", volume: "10–100", competition: "Low" },
      { word: "doctor gifting", volume: "100–1K", competition: "Medium" },
      { word: "pharma branding", volume: "100–1K", competition: "Low" },
    ],
  },
  "table-tops": {
    description: "Interactive and visually engaging doctor consultation tools designed to improve clinic communication, support patient education, and create stronger brand visibility during consultations.",
    longDescription: "Transform doctor-patient interactions with our innovative tabletop solutions. These tools facilitate better communication, simplify complex medical concepts, and create lasting impressions while keeping your brand front and center during every consultation.",
    keywords: [
      { word: "doctor consultation tools", volume: "10–100", competition: "Low" },
      { word: "patient education materials", volume: "100–1K", competition: "Medium" },
      { word: "clinic branding", volume: "10–100", competition: "Low" },
    ],
  },
  "desk-utility-products": {
    description: "Functional doctor utility products, including organizers, prescription holders, pen stands, and desk accessories designed for everyday clinic use while enhancing pharma brand recall.",
    longDescription: "Make your brand an indispensable part of daily clinic operations with our comprehensive range of desk utility products. Each item is thoughtfully designed to address specific needs of medical professionals while ensuring maximum brand exposure.",
    keywords: [
      { word: "doctor utility products", volume: "10–100", competition: "Low" },
      { word: "clinic utility products", volume: "10–100", competition: "Low" },
      { word: "pharma gifts", volume: "100–1K", competition: "Medium" },
    ],
  },
  "3d-printed-models": {
    description: "Custom 3D anatomical models and branded medical education products designed to simplify medical communication, improve patient understanding, and create stronger scientific brand engagement.",
    longDescription: "Revolutionize medical education with our precision-crafted 3D anatomical models. These scientifically accurate representations help explain complex medical conditions, treatment procedures, and anatomical structures while building trust and authority for your brand.",
    keywords: [
      { word: "anatomical models", volume: "1K–10K", competition: "Medium" },
      { word: "medical education products", volume: "10–100", competition: "Low" },
      { word: "patient education tools", volume: "100–1K", competition: "Medium" },
    ],
  },
  "fibre-resin-products": {
    description: "Premium pharma gifting products crafted for durability, visual appeal, and high brand recall—ideal for doctor engagement programs, medical conferences, and healthcare promotions.",
    longDescription: "Elevate your brand perception with our luxury fibre and resin products. These premium gifts combine artistic design with exceptional durability, making them perfect for high-value doctor engagement programs and corporate gifting initiatives.",
    keywords: [
      { word: "pharma promotional products", volume: "10–100", competition: "Low" },
      { word: "doctor engagement products", volume: "10–100", competition: "Medium" },
    ],
  },
  "eco-friendly-products": {
    description: "Sustainable corporate gifting solutions for pharma companies designed for environmentally conscious brand campaigns while maintaining premium functionality and visibility.",
    longDescription: "Demonstrate your commitment to environmental responsibility with our eco-friendly product line. Made from sustainable materials and biodegradable components, these gifts align with green initiatives while delivering exceptional brand visibility.",
    keywords: [
      { word: "corporate gifting solutions", volume: "100–1K", competition: "Low" },
      { word: "corporate gifting for pharma companies", volume: "10–100", competition: "Low" },
    ],
    icon: <Leaf className="w-5 h-5" />,
  },
  "led-table-tops": {
    description: "Modern illuminated tabletop branding solutions designed for clinics, waiting areas, and healthcare communication spaces to enhance engagement and visibility.",
    longDescription: "Capture attention with our innovative LED tabletop displays. These illuminated solutions create focal points in clinical settings, waiting areas, and reception spaces, ensuring your brand message is seen and remembered.",
    keywords: [
      { word: "clinic branding products", volume: "10–100", competition: "Low" },
      { word: "doctor engagement tools", volume: "10–100", competition: "Low" },
    ],
  },
  "indoor-plants": {
    description: "Thoughtful and premium doctor gifting solutions designed to create a calming clinic environment while offering memorable brand presence.",
    longDescription: "Bring life and tranquility to medical spaces with our curated indoor plant gifts. These living gifts create positive associations, reduce stress, and provide enduring brand visibility that grows naturally over time.",
    keywords: [
      { word: "gifts for doctors", volume: "1K–10K", competition: "High" },
      { word: "doctor gifting solutions", volume: "100–1K", competition: "Medium" },
    ],
    icon: <Gift className="w-5 h-5" />,
  },
  "calendars": {
    description: "Custom-designed branded calendars created as practical pharma promotional gifts that ensure year-round doctor engagement and consistent brand visibility.",
    longDescription: "Stay visible all year long with our premium branded calendars. Each page offers daily brand exposure, making these practical gifts one of the most cost-effective ways to maintain ongoing doctor engagement and brand recall.",
    keywords: [
      { word: "pharma promotional gifts", volume: "10–100", competition: "Low" },
      { word: "pharma gifts", volume: "100–1K", competition: "Medium" },
    ],
  },
  "photo-frames": {
    description: "Elegant customized photo frames designed to create subtle but long-lasting pharma branding presence in doctors' clinics and personal workspaces.",
    longDescription: "Create meaningful, lasting connections with our elegant photo frames. These personalized gifts become cherished possessions that display precious memories while keeping your brand subtly yet permanently visible.",
    keywords: [
      { word: "gifts for doctors", volume: "1K–10K", competition: "High" },
      { word: "pharma branding", volume: "100–1K", competition: "Low" },
    ],
  },
};

// Doctor-Focused Gifting content
const DOCTOR_FOCUSED_CONTENT = {
  title: "Doctor-Focused Gifting",
  description: "Our clinic utility products and doctor engagement tools are thoughtfully designed around doctors' everyday workflow, ensuring practicality, repeated usage, and stronger brand recall.",
  focusPoints: [
    "Practical clinic utility",
    "Long-term brand visibility",
    "Better doctor engagement",
    "Meaningful healthcare communication",
  ],
};

// Occasion-based gifting content
const OCCASION_CONTENT = {
  title: "Gifting Based on Occasion",
  description: "We curate customized pharma corporate gifts and doctor gifting solutions for key medical and healthcare occasions including Doctor's Day, product launches, medical conferences, festive campaigns, and doctor engagement programs.",
  note: "Every gifting solution is aligned with your brand messaging, campaign objective, and doctor engagement strategy.",
  keywords: [
    { word: "pharma corporate gifts", volume: "10–100", competition: "Low" },
    { word: "doctor gifting solutions", volume: "100–1K", competition: "Medium" },
    { word: "gifts for doctors", volume: "1K–10K", competition: "High" },
    { word: "pharma branding", volume: "100–1K", competition: "Low" },
  ],
};

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

// ─── PAGE BANNER ─────────────────────────────────────────────────────────────
const PageBanner = () => (
  <div className="relative w-full h-[220px] sm:h-[280px] md:h-[340px] lg:h-[400px] xl:h-[500px] overflow-hidden">
    <Image
      src="/banner/product.jpeg"
      alt="Products Banner"
      fill
      className="object-cover object-center"
      priority
      unoptimized
    />
    <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-black/20" />
    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

    <div className="absolute inset-0 flex flex-col justify-end pb-8 sm:pb-10 md:pb-12 px-4 sm:px-8 md:px-12 max-w-[1500px] mx-auto left-0 right-0">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="flex items-center gap-1.5 text-white/60 text-xs sm:text-sm font-medium mb-3 sm:mb-4"
      >
        <Link href="/" className="hover:text-white transition-colors">Home</Link>
        <ChevronRight size={14} />
        <span className="text-white">Our Pharma Product Categories</span>
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-extrabold text-white leading-tight max-w-4xl"
      >
        Our Pharma Product Categories
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="text-sm sm:text-base md:text-lg text-white/90 mt-3 sm:mt-4 max-w-2xl"
      >
        We offer a wide range of customized pharma gifting solutions, doctor engagement tools, 
        clinic utility products, and brand recall materials designed specifically for pharmaceutical 
        marketing and healthcare communication.
      </motion.p>

      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.7, delay: 0.5, ease: "easeOut" }}
        style={{ originX: 0 }}
        className="mt-4 sm:mt-5 h-1 w-20 sm:w-24 bg-[#0093cb] rounded-full"
      />
    </div>
  </div>
);

/* ══════════════════════════════════════════
   KEYWORD METRICS COMPONENT
══════════════════════════════════════════ */
function KeywordMetrics({ keywords }: { keywords: Array<{ word: string; volume: string; competition: string }> }) {
  const getCompetitionColor = (competition: string) => {
    switch (competition.toLowerCase()) {
      case 'high': return 'text-red-600 bg-red-50';
      case 'medium': return 'text-orange-600 bg-orange-50';
      case 'low': return 'text-green-600 bg-green-50';
      default: return 'text-gray-600 bg-gray-50';
    }
  };

  return (
    <div className="mt-4">
      <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">Keywords Performance</h4>
      <div className="flex flex-wrap gap-2">
        {keywords.map((kw, idx) => (
          <div
            key={idx}
            className="group relative inline-flex items-center gap-1.5 px-2.5 py-1 bg-white rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-all cursor-help"
          >
            <span className="text-xs font-medium text-gray-700">{kw.word}</span>
            <span className="text-[10px] text-gray-400">•</span>
            <span className="text-[10px] font-medium text-gray-500">{kw.volume}</span>
            <span className={`text-[10px] px-1.5 py-0.5 rounded-full ${getCompetitionColor(kw.competition)}`}>
              {kw.competition}
            </span>
          </div>
        ))}
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
        </div>

        <div className="p-3">
          <p className="text-sm font-semibold text-[#060706] leading-tight line-clamp-2 mb-1 group-hover:text-[#0093cb] transition-colors">
            {productName}
          </p>
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
          <p className="text-xs text-gray-500 line-clamp-2">{product.description}</p>
        </div>
        <ArrowUpRight className="w-5 h-5 text-gray-300 group-hover:text-[#0093cb] transition-colors flex-shrink-0 self-center" />
      </motion.div>
    </Link>
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
  const categoryContent = CATEGORY_CONTENT[group.categorySlug];

  const handleViewMore = () => {
    if (showAll) {
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
      className="category-section scroll-mt-24"
    >
      <div className="mb-6">
        <div className="flex items-start justify-between flex-wrap gap-4">
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-2">
              <h2 className="text-xl lg:text-2xl font-bold text-[#060706]">
                {group.categoryName}
              </h2>
              <span className="text-sm text-gray-400 font-normal">
                ({group.products.length})
              </span>
            </div>
            
            {/* Category Description */}
            {categoryContent?.description && (
              <p className="text-sm text-gray-600 leading-relaxed max-w-3xl">
                {categoryContent.description}
              </p>
            )}
            
            {/* Long Description */}
            {categoryContent?.longDescription && (
              <p className="text-xs text-gray-500 mt-2 max-w-3xl">
                {categoryContent.longDescription}
              </p>
            )}
            
            {/* Keyword Metrics */}
            {categoryContent?.keywords && (
              <KeywordMetrics keywords={categoryContent.keywords} />
            )}
            
            <div
              className="mt-4 w-16 h-1 rounded-full"
              style={{
                background: `linear-gradient(to right, ${BRAND.primary}, ${BRAND.secondary})`,
              }}
            />
          </div>
          
          <button
            onClick={handleViewAllProducts}
            className="flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all view-more-btn flex-shrink-0"
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
   DOCTOR FOCUSED SECTION
══════════════════════════════════════════ */
function DoctorFocusedSection() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="mt-16 bg-gradient-to-r from-[#0093cb]/5 to-[#00a65d]/5 rounded-2xl p-6 md:p-8 border border-[#0093cb]/10"
    >
      <div className="flex flex-col md:flex-row gap-8 items-start md:items-center">
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-3">
            <Stethoscope className="w-6 h-6 text-[#0093cb]" />
            <h3 className="text-xl font-bold text-[#060706]">{DOCTOR_FOCUSED_CONTENT.title}</h3>
          </div>
          <p className="text-gray-600 text-sm leading-relaxed">
            {DOCTOR_FOCUSED_CONTENT.description}
          </p>
        </div>
        <div className="flex-1">
          <div className="grid grid-cols-2 gap-3">
            {DOCTOR_FOCUSED_CONTENT.focusPoints.map((point, idx) => (
              <div key={idx} className="flex items-center gap-2">
                <Check className="w-4 h-4 text-[#00a65d]" />
                <span className="text-sm text-gray-700">{point}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
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

  const activeTab: TabId = useMemo(() => {
    if (tabParam && TABS.some((t) => t.id === tabParam)) return tabParam;
    return "all";
  }, [tabParam]);

  const activeTabColor = TABS.find((t) => t.id === activeTab)?.color || BRAND.primary;
  const tabCategories = useMemo(() => getCategoriesForTab(activeTab), [activeTab]);

  useEffect(() => {
    const hash = window.location.hash;
    if (hash && hash.startsWith('#category-')) {
      const categorySlug = hash.replace('#category-', '');
      setTimeout(() => {
        const element = document.getElementById(`category-${categorySlug}`);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
          element.classList.add('highlight-category');
          setTimeout(() => {
            element.classList.remove('highlight-category');
          }, 3000);
        }
      }, 500);
    }
  }, [activeTab]);

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
    router.push(`/categories/all?tab=${activeTab}&category=${categorySlug}`);
  };

  const isOccasionTab = activeTab === "occasion";

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: listingStyles }} />
      <div className="min-h-screen listing-container bg-[#f8fafc]">
        <PageBanner />

        <div className="max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
            <aside className="lg:w-64 flex-shrink-0">
              <div className="sticky top-[100px]">
                <SidebarWithSubcategories activeTab={activeTab} onSelect={handleTabSelect} />

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
                  <div className="mb-8 flex items-center justify-between flex-wrap gap-2">
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

                  {/* Occasion-specific content */}
                  {isOccasionTab && (
                    <motion.section
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      className="mt-16 bg-white rounded-2xl p-6 md:p-8 border border-gray-200 shadow-sm"
                    >
                      <div className="flex items-center gap-3 mb-4">
                        <Calendar className="w-6 h-6 text-[#8B5CF6]" />
                        <h3 className="text-xl font-bold text-[#060706]">{OCCASION_CONTENT.title}</h3>
                      </div>
                      <p className="text-gray-600 text-sm leading-relaxed mb-4">
                        {OCCASION_CONTENT.description}
                      </p>
                      <p className="text-sm text-gray-500 italic mb-4">
                        {OCCASION_CONTENT.note}
                      </p>
                      <KeywordMetrics keywords={OCCASION_CONTENT.keywords} />
                    </motion.section>
                  )}

                  {/* Doctor Focused Section - shown for Categories tab */}
                  {activeTab === "categories" && <DoctorFocusedSection />}
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
        </div>
      </div>
    </motion.div>
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