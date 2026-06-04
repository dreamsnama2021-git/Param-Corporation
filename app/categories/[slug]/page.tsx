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
  ChevronDown,
  Check,
  Package,
  Eye,
  Download,
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

// Custom Image Component with error handling
const ProductImage = ({ src, alt, className = "" }: { src: string; alt: string; className?: string }) => {
  const [imgError, setImgError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  if (!src || imgError) {
    return (
      <div className="w-full h-full flex items-center justify-center bg-gray-50">
        <Package className="w-8 h-8 text-gray-300" />
      </div>
    );
  }

  return (
    <div className="relative w-full h-full">
      {isLoading && (
        <div className="absolute inset-0 bg-gray-100 animate-pulse" />
      )}
      <img
        src={src}
        alt={alt}
        className={`w-full h-full object-cover transition-opacity duration-300 ${className} ${
          isLoading ? 'opacity-0' : 'opacity-100'
        }`}
        onLoad={() => setIsLoading(false)}
        onError={() => {
          console.error("Failed to load image:", src);
          setImgError(true);
          setIsLoading(false);
        }}
        loading="lazy"
      />
    </div>
  );
};

// Banner Component with proper image handling
const PageBanner = () => {
  const [bannerError, setBannerError] = useState(false);
  
  if (bannerError) {
    return (
      <div className="relative w-full h-[60vh] md:h-[50vh] lg:h-[55vh] xl:h-[70vh] bg-gradient-to-r from-gray-100 to-gray-200 flex items-center justify-center">
        <p className="text-gray-400">Banner image not available</p>
      </div>
    );
  }

  return (
     <div className="relative w-full h-[60vh] md:h-[50vh] lg:h-[55vh] xl:h-[60vh] overflow-hidden">
      {/* Mobile image */}
      <picture>
        <source
          media="(max-width: 767px)"
          srcSet="/banner/Products page Mobile.jpg"
        />
        <source
          media="(min-width: 768px) and (max-width: 1023px)"
          srcSet="/banner/Products page Tablet.jpg"
        />
        <source
          media="(min-width: 1024px)"
          srcSet="/banner/Products page Desktop.jpg"
        />
        <img
          src="/banner/Products page Desktop.jpg"
          alt="Products Banner"
          className="w-full h-full object-cover"
          onError={() => setBannerError(true)}
        />
      </picture>
    </div>
  );
};

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
      
      element.classList.add('highlight-category');
      setTimeout(() => {
        element.classList.remove('highlight-category');
      }, 3000);
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <div className="flex items-center gap-2 mb-3">
          <span className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-500">
            Filter By
          </span>
          <div className="h-px flex-1 bg-gray-200" />
        </div>

        <div className="bg-white rounded-xl border-2 border-gray-200 shadow-sm overflow-hidden">
          {TABS.map((tab, index) => {
            const count = getCount(tab.id);
            const isSelected = activeTab === tab.id;
            const hasSubcategories = tab.id !== "all";

            return (
              <div key={tab.id}>
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
   PRODUCT DETAILS MODAL (With Download Catalogue Button)
══════════════════════════════════════════ */
function ProductDetailsModal({
  product,
  onClose,
}: {
  product: any;
  onClose: () => void;
}) {
  const [currentImage, setCurrentImage] = useState(0);
  const [imageErrors, setImageErrors] = useState<boolean[]>([]);
  const productImages = product.images || [product.image];

  useEffect(() => {
    setImageErrors(new Array(productImages.length).fill(false));
  }, [productImages.length]);

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % productImages.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + productImages.length) % productImages.length);
  };

  const handleImageError = (index: number) => {
    setImageErrors(prev => {
      const newErrors = [...prev];
      newErrors[index] = true;
      return newErrors;
    });
  };

  const handleDownloadCatalogue = () => {
    // This would typically download a PDF or open a catalogue
    // For demo, we'll create a simple text download
    const catalogueContent = `
      Product Catalogue
      =================
      Name: ${product.name}
      Category: ${product.category}
      Description: ${product.description || 'No description available'}
      Features: ${product.features?.join(', ') || 'No features listed'}
      Tags: ${product.tags?.join(', ') || 'No tags'}
    `;
    
    const blob = new Blob([catalogueContent], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${product.name.replace(/\s+/g, '_')}_Catalogue.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
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
        className="relative max-w-5xl w-full max-h-[90vh] bg-white rounded-2xl overflow-hidden flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between p-4 border-b border-gray-100">
          <h2 className="text-lg font-semibold text-[#060706]">Product Details</h2>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-500 hover:bg-gray-200 transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Modal Content */}
        <div className="flex-1 overflow-y-auto p-6">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Image Gallery */}
            <div className="lg:w-1/2">
              <div className="relative aspect-square bg-gray-50 rounded-xl overflow-hidden">
                {productImages[currentImage] && !imageErrors[currentImage] ? (
                  <img
                    src={productImages[currentImage]}
                    alt={product.name}
                    className="w-full h-full object-contain"
                    onError={() => handleImageError(currentImage)}
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    <Package className="w-16 h-16 text-gray-300" />
                  </div>
                )}
                
                {productImages.length > 1 && (
                  <>
                    <button
                      onClick={prevImage}
                      className="absolute left-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white/80 shadow-md flex items-center justify-center text-gray-700 hover:bg-white transition-colors"
                    >
                      <ChevronLeft className="w-4 h-4" />
                    </button>
                    <button
                      onClick={nextImage}
                      className="absolute right-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white/80 shadow-md flex items-center justify-center text-gray-700 hover:bg-white transition-colors"
                    >
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </>
                )}
              </div>
              
              {/* Thumbnails */}
              {productImages.length > 1 && (
                <div className="flex gap-2 mt-3 overflow-x-auto pb-2">
                  {productImages.map((img: string, idx: number) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentImage(idx)}
                      className={`relative w-16 h-16 flex-shrink-0 rounded-lg overflow-hidden border-2 transition-all ${
                        currentImage === idx ? 'border-[#0093cb]' : 'border-gray-200'
                      }`}
                    >
                      <img
                        src={img}
                        alt={`${product.name} ${idx + 1}`}
                        className="w-full h-full object-cover"
                        onError={() => handleImageError(idx)}
                      />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Product Info */}
            <div className="lg:w-1/2 space-y-4">
              <div>
                <h3 className="text-2xl font-bold text-[#060706] mb-2">{product.name}</h3>
                <div className="flex items-center gap-2">
                  <span
                    className="inline-block px-2 py-0.5 rounded-full text-xs font-medium"
                    style={{
                      backgroundColor: `${BRAND.primary}10`,
                      color: BRAND.primary,
                    }}
                  >
                    {product.category}
                  </span>
                </div>
              </div>

              {product.description && (
                <div>
                  <h4 className="text-sm font-semibold text-gray-700 mb-1">Description</h4>
                  <p className="text-sm text-gray-600">{product.description}</p>
                </div>
              )}

              {product.features && product.features.length > 0 && (
                <div>
                  <h4 className="text-sm font-semibold text-gray-700 mb-2">Features</h4>
                  <div className="flex flex-wrap gap-2">
                    {product.features.map((feature: string, idx: number) => (
                      <span
                        key={idx}
                        className="px-2 py-1 bg-gray-100 rounded-md text-xs text-gray-600"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {product.tags && product.tags.length > 0 && (
                <div>
                  <h4 className="text-sm font-semibold text-gray-700 mb-2">Tags</h4>
                  <div className="flex flex-wrap gap-1">
                    {product.tags.map((tag: string, idx: number) => (
                      <span
                        key={idx}
                        className="px-2 py-0.5 rounded-full text-xs"
                        style={{
                          backgroundColor: `${BRAND.secondary}10`,
                          color: BRAND.secondary,
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Download Catalogue Button */}
              <div className="pt-4">
                <button
                  onClick={handleDownloadCatalogue}
                  className="w-full flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-sm font-medium transition-all"
                  style={{
                    background: `linear-gradient(135deg, ${BRAND.primary}, ${BRAND.secondary})`,
                    color: 'white',
                  }}
                >
                  <Download className="w-4 h-4" />
                  Download Catalogue
                </button>
                <p className="text-xs text-gray-400 text-center mt-2">
                  Get detailed product specifications and information
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

/* ══════════════════════════════════════════
   PRODUCT CARD (Opens Modal Instead of Navigation)
══════════════════════════════════════════ */
function ProductCard({
  product,
  accentColor,
  onProductClick,
}: {
  product: any;
  accentColor: string;
  onProductClick: (product: any) => void;
}) {
  const productImages = product.images || [product.image];
  const productName = product.name || "Product";
  const [imageError, setImageError] = useState(false);
  const imageUrl = productImages[0];

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    onProductClick(product);
  };

  return (
    <div onClick={handleClick} className="block cursor-pointer">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-30px" }}
        className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer group h-full product-card border border-gray-100"
      >
        <div className="relative aspect-square overflow-hidden bg-gray-50">
          {imageUrl && !imageError ? (
            <>
              <img
                src={imageUrl}
                alt={productName}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                onError={() => {
                  console.error("Product image failed to load:", imageUrl);
                  setImageError(true);
                }}
                loading="lazy"
              />
              <div className="absolute inset-0 bg-[#0093cb]/0 group-hover:bg-[#0093cb]/10 transition-colors duration-300 flex items-center justify-center product-overlay">
                <div className="w-10 h-10 rounded-full bg-white/95 flex items-center justify-center shadow-lg">
                  <ZoomIn className="w-4 h-4 text-[#0093cb]" />
                </div>
              </div>
            </>
          ) : (
            <div className="w-full h-full flex items-center justify-center">
              <Package className="w-8 h-8 text-gray-300" />
            </div>
          )}
          {product.features && product.features.length > 0 && !imageError && (
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
        </div>
      </motion.div>
    </div>
  );
}

/* ══════════════════════════════════════════
   CATEGORY SECTION WITH VIEW MORE
══════════════════════════════════════════ */
function CategorySection({
  group,
  activeTabColor,
  onViewAll,
  onProductClick,
}: {
  group: any;
  activeTabColor: string;
  onViewAll: (categorySlug: string, categoryName: string) => void;
  onProductClick: (product: any) => void;
}) {
  const [showAll, setShowAll] = useState(false);
  const displayedProducts = showAll 
    ? group.products 
    : group.products.slice(0, MAX_PRODUCTS_PER_CATEGORY);
  const hasMore = group.products.length > MAX_PRODUCTS_PER_CATEGORY;

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

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
        {displayedProducts.map((product: any) => (
          <ProductCard
            key={product.id}
            product={product}
            accentColor={activeTabColor}
            onProductClick={onProductClick}
          />
        ))}
      </div>

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
          element.scrollIntoView({ 
            behavior: 'smooth', 
            block: 'start',
            inline: 'nearest'
          });
          
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
  }, [tabCategories]);

  const totalProducts = useMemo(() => {
    return groupedProducts.reduce((sum, group) => sum + group.products.length, 0);
  }, [groupedProducts]);

  const handleTabSelect = (tabId: TabId) => {
    router.push(`/categories/all?tab=${tabId}`, { scroll: false });
  };

  const handleViewAllProducts = (categorySlug: string, categoryName: string) => {
    router.push(`/categories/all?tab=${activeTab}&category=${categorySlug}`);
  };

  const handleProductClick = (product: any) => {
    setSelectedProduct(product);
  };

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: listingStyles }} />
      <div className="min-h-screen listing-container bg-[#f8fafc]">
        <PageBanner />

        <div className="max-w-[1500px] mx-auto px-6 py-12 lg:py-16">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
            <aside className="lg:w-64 flex-shrink-0">
              <div className="sticky top-[100px]">
                <SidebarWithSubcategories activeTab={activeTab} onSelect={handleTabSelect} />
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
                        activeTabColor={activeTabColor}
                        onViewAll={handleViewAllProducts}
                        onProductClick={handleProductClick}
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
          <ProductDetailsModal
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