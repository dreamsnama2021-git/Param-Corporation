/* ─── Personalized Gifts Page with Left Sidebar + Subcategories ─── */
"use client";

import React, {
  useMemo,
  useState,
  useEffect,
  Suspense,
} from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  Home,
  ChevronRight,
  X,
  Package,
  Download,
  Mail,
  Phone,
  User,
  Building2,
  Loader2,
  Check,
  ChevronDown,
} from "lucide-react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  allProducts,
  personalizedGifts,
} from "../data";

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

// Banner Component
const PageBanner = () => (
 <div className="relative w-full h-[220px] sm:h-[300px] md:h-[340px] lg:h-[380px] xl:h-[450px] 2xl:h-[590px] overflow-hidden">
    {/* Mobile image */}
    <Image
      src="https://pub-735dbd7583d74ad5949115d6fdf77023.r2.dev/Banners/Inner%20Banner/Products%20page%20Mobile.png"
      alt="Personalized Gifts Banner - Mobile"
      fill
      className="object-cover object-center block md:hidden"
      priority
      unoptimized
    />

    {/* Tablet image */}
    <Image
      src="https://pub-735dbd7583d74ad5949115d6fdf77023.r2.dev/Banners/Inner%20Banner/Products%20page%20Tablet.png"
      alt="Personalized Gifts Banner - Tablet"
      fill
      className="object-cover object-center hidden md:block lg:hidden"
      priority
      unoptimized
    />

    {/* Desktop image */}
    <Image
      src="https://pub-735dbd7583d74ad5949115d6fdf77023.r2.dev/Banners/Personalize.png"
      alt="Personalized Gifts Banner - Desktop"
      fill
      className="object-cover object-center hidden lg:block"
      priority
      unoptimized
    />
  </div>
);

interface FormData {
  fullName: string;
  email: string;
  phone: string;
  companyName: string;
  designation: string;
}

interface FormErrors {
  fullName?: string;
  email?: string;
  phone?: string;
}

function DownloadCatalogueModal({
  isOpen,
  onClose,
  totalProducts,
  categoriesCount,
  selectedSubcategory = null,
}: {
  isOpen: boolean;
  onClose: () => void;
  totalProducts: number;
  categoriesCount: number;
  selectedSubcategory?: { categorySlug: string; categoryName: string; products: any[] } | null;
}) {
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    email: "",
    phone: "",
    companyName: "",
    designation: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = "Full name is required";
    } else if (formData.fullName.trim().length < 2) {
      newErrors.fullName = "Please enter a valid name";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^[+]?[\d\s-]{10,}$/.test(formData.phone.replace(/\s/g, ""))) {
      newErrors.phone = "Please enter a valid phone number";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field as keyof FormErrors]) {
      setErrors(prev => ({ ...prev, [field]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      setIsSubmitted(true);
      setTimeout(() => {
        downloadCatalogue();
      }, 500);
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const downloadCatalogue = () => {
    if (selectedSubcategory) {
      const slug = (selectedSubcategory.categorySlug || "").toLowerCase();
      const name = (selectedSubcategory.categoryName || "").toLowerCase();

      if (
        slug.includes("tabletop") ||
        slug.includes("table-top") ||
        name.includes("tabletop") ||
        name.includes("table top")
      ) {
        const a = document.createElement("a");
        a.href = "/catalogue/table-top-catalogue.pdf";
        a.download = "table-top-catalogue.pdf";
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        return;
      }

      let catalogueContent = `========================================
${selectedSubcategory.categoryName.toUpperCase()} PRODUCT CATALOGUE
========================================
Generated: ${new Date().toLocaleDateString()}
Category: ${selectedSubcategory.categoryName}
Total Products: ${selectedSubcategory.products.length}
========================================\n\n`;

      selectedSubcategory.products.forEach((product: any, productIndex: number) => {
        catalogueContent += `  ${productIndex + 1}. ${product.name}\n`;
        catalogueContent += `     Category: ${product.categoryName || selectedSubcategory.categoryName}\n`;
        catalogueContent += `     Description: ${product.description || 'No description'}\n`;
        if (product.features && product.features.length > 0) {
          catalogueContent += `     Features: ${product.features.join(', ')}\n`;
        }
        if (product.tags && product.tags.length > 0) {
          catalogueContent += `     Tags: ${product.tags.join(', ')}\n`;
        }
        catalogueContent += `\n`;
      });

      catalogueContent += `========================================
END OF CATALOGUE
========================================`;

      const blob = new Blob([catalogueContent], { type: 'text/plain' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      const safeName = selectedSubcategory.categoryName.replace(/[^a-zA-Z0-9]/g, '_');
      a.download = `${safeName}_Catalogue_${new Date().toISOString().split('T')[0]}.txt`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
      return;
    }

    const a = document.createElement('a');
    a.href = "/catalogue/personlized-catalogue.pdf";
    a.download = "personlized-catalogue.pdf";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  const handleClose = () => {
    if (!isSubmitting) {
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        companyName: "",
        designation: "",
      });
      setErrors({});
      setIsSubmitted(false);
      onClose();
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={handleClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.2 }}
            className="bg-white rounded-2xl shadow-2xl w-full max-w-lg overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative p-6 border-b border-gray-100">
              <button
                onClick={handleClose}
                className="absolute top-4 right-4 w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-500 hover:bg-gray-200 transition-colors"
                type="button"
              >
                <X className="w-4 h-4" />
              </button>

              {!isSubmitted ? (
                <>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#0093cb] to-[#00a65d] flex items-center justify-center">
                      <Download className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h2 className="text-xl font-bold text-[#060706]">
                        {selectedSubcategory
                          ? `Download ${selectedSubcategory.categoryName} Catalogue`
                          : "Download Catalogue"}
                      </h2>
                      <p className="text-sm text-gray-500">
                        {selectedSubcategory
                          ? `${selectedSubcategory.products.length} products in ${selectedSubcategory.categoryName}`
                          : `${totalProducts} products • ${categoriesCount} categories`}
                      </p>
                    </div>
                  </div>
                  <p className="text-sm text-gray-500">
                    {selectedSubcategory
                      ? `Please fill in your details below to download the ${selectedSubcategory.categoryName} catalogue.`
                      : "Please fill in your details below to download the personalized gifts catalogue."}
                  </p>
                </>
              ) : (
                <div className="text-center py-4">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-green-100 flex items-center justify-center">
                    <Check className="w-8 h-8 text-[#00a65d]" />
                  </div>
                  <h2 className="text-xl font-bold text-[#060706] mb-2">Thank You!</h2>
                  <p className="text-sm text-gray-500">
                    Your download will begin shortly.
                  </p>
                </div>
              )}
            </div>

            {!isSubmitted && (
              <form onSubmit={handleSubmit} className="p-6 space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                    <input
                      type="text"
                      value={formData.fullName}
                      onChange={(e) => handleInputChange("fullName", e.target.value)}
                      placeholder="Enter your full name"
                      className={`w-full pl-10 pr-4 py-2.5 rounded-xl border ${
                        errors.fullName ? "border-red-300 bg-red-50" : "border-gray-200"
                      } focus:outline-none focus:ring-2 focus:ring-[#0093cb]/20 focus:border-[#0093cb] transition-colors text-sm`}
                      disabled={isSubmitting}
                    />
                  </div>
                  {errors.fullName && (
                    <p className="mt-1 text-xs text-red-500">{errors.fullName}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                      placeholder="Enter your email"
                      className={`w-full pl-10 pr-4 py-2.5 rounded-xl border ${
                        errors.email ? "border-red-300 bg-red-50" : "border-gray-200"
                      } focus:outline-none focus:ring-2 focus:ring-[#0093cb]/20 focus:border-[#0093cb] transition-colors text-sm`}
                      disabled={isSubmitting}
                    />
                  </div>
                  {errors.email && (
                    <p className="mt-1 text-xs text-red-500">{errors.email}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">
                    Phone Number <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => handleInputChange("phone", e.target.value)}
                      placeholder="Enter your phone number"
                      className={`w-full pl-10 pr-4 py-2.5 rounded-xl border ${
                        errors.phone ? "border-red-300 bg-red-50" : "border-gray-200"
                      } focus:outline-none focus:ring-2 focus:ring-[#0093cb]/20 focus:border-[#0093cb] transition-colors text-sm`}
                      disabled={isSubmitting}
                    />
                  </div>
                  {errors.phone && (
                    <p className="mt-1 text-xs text-red-500">{errors.phone}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">
                    Company Name <span className="text-gray-400">(Optional)</span>
                  </label>
                  <div className="relative">
                    <Building2 className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                    <input
                      type="text"
                      value={formData.companyName}
                      onChange={(e) => handleInputChange("companyName", e.target.value)}
                      placeholder="Enter your company name"
                      className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#0093cb]/20 focus:border-[#0093cb] transition-colors text-sm"
                      disabled={isSubmitting}
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-white font-medium transition-all shadow-md hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
                  style={{
                    background: `linear-gradient(135deg, ${BRAND.primary}, ${BRAND.secondary})`,
                  }}
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      Submitting...
                    </>
                  ) : (
                    <>
                      <Download className="w-4 h-4" />
                      Download Catalogue
                    </>
                  )}
                </button>
              </form>
            )}

            {isSubmitted && (
              <div className="p-6 pt-0">
                <button
                  onClick={handleClose}
                  className="w-full px-6 py-3 rounded-xl bg-gray-100 text-gray-700 font-medium hover:bg-gray-200 transition-colors"
                  type="button"
                >
                  Close
                </button>
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function SidebarWithSubcategories() {
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
            Personalized Gifts
          </span>
          <div className="h-px flex-1 bg-gray-200" />
        </div>

        <div className="bg-white rounded-xl border-2 border-gray-200 shadow-sm overflow-hidden">
          <div className="py-2 px-2 space-y-0.5">
            {personalizedGifts.map((cat) => {
              const count = getSubCategoryCount(cat.slug);
              return (
                <button
                  key={cat.slug}
                  onClick={() => handleSubCategoryClick(cat.slug)}
                  className="w-full group flex items-center justify-between py-2.5 px-3 rounded-lg text-sm text-gray-600 hover:text-[#060706] hover:bg-gray-50 transition-all text-left"
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
        </div>
      </div>
    </div>
  );
}

function ImageLightboxModal({
  imageUrl,
  productName,
  onClose,
}: {
  imageUrl: string;
  productName: string;
  onClose: () => void;
}) {
  const [imageError, setImageError] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 bg-black/70 backdrop-blur-md flex items-center justify-center"
      onClick={onClose}
    >
      <button
        onClick={onClose}
        className="absolute top-12 xl:top-20 right-6 z-10 w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/20 transition-colors"
      >
        <X className="w-5 h-5" />
      </button>

      <div className="relative w-full h-[80vh] flex items-center justify-center p-25 md:p-16">
        {imageUrl && !imageError ? (
          <img
            src={imageUrl}
            alt={productName}
            className="max-w-full max-h-[80vh] rounded-xl object-contain"
            onError={() => setImageError(true)}
          />
        ) : (
          <div className="flex flex-col items-center justify-center">
            <Package className="w-20 h-20 text-gray-600" />
            <p className="text-gray-500 mt-2">Image not available</p>
          </div>
        )}
      </div>
    </motion.div>
  );
}

function ProductCard({
  product,
  onImageClick,
}: {
  product: any;
  onImageClick: (product: any) => void;
}) {
  const productImage = product.image || (product.images && product.images[0]);
  const productName = product.name || "Product";
  const [imageError, setImageError] = useState(false);
  const imageUrl = productImage;

  const handleImageClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    onImageClick(product);
  };

  return (
    <div className="block">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-30px" }}
        className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 group h-full product-card border border-gray-100"
      >
        <div 
          className="relative aspect-square overflow-hidden bg-gray-50 cursor-pointer"
          onClick={handleImageClick}
        >
          {imageUrl && !imageError ? (
            <>
              <img
                src={imageUrl}
                alt={productName}
                className="w-full h-full object-cover roun transition-transform duration-500 group-hover:scale-105"
                onError={() => {
                  console.error("Product image failed to load:", imageUrl);
                  setImageError(true);
                }}
                loading="lazy"
              />
              <div className="absolute inset-0 bg-[#0093cb]/0 group-hover:bg-[#0093cb]/10 transition-colors duration-300 flex items-center justify-center product-overlay">
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
          <p className="text-sm font-semibold text-[#060706] leading-tight line-clamp-2 mb-1">
            {productName}
          </p>
        </div>
      </motion.div>
    </div>
  );
}

function CategorySection({
  group,
  onImageClick,
  onDownloadCatalogue,
}: {
  group: any;
  onImageClick: (product: any) => void;
  onDownloadCatalogue?: (group: any) => void;
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

  return (
    <section 
      id={`category-${group.categorySlug}`}
      className="category-section"
    >
      <div className="mb-6">
        <div className="flex items-center justify-between flex-wrap gap-3">
          <div className="flex-1 min-w-[240px]">
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

          {onDownloadCatalogue && (
            <button
              onClick={() => onDownloadCatalogue(group)}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold transition-all shadow-sm hover:shadow-md border border-[#0093cb]/30 text-[#0093cb] hover:bg-[#0093cb] hover:text-white bg-white group/dl"
              type="button"
            >
              <Download className="w-4 h-4 transition-transform group-hover/dl:-translate-y-0.5" />
              Download {group.categoryName} Catalogue
            </button>
          )}
        </div>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4">
        {displayedProducts.map((product: any) => (
          <ProductCard
            key={product.id}
            product={product}
            onImageClick={onImageClick}
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

function PersonalizedPageContent() {
  const [lightboxState, setLightboxState] = useState<{
    isOpen: boolean;
    imageUrl: string;
    productName: string;
  }>({
    isOpen: false,
    imageUrl: "",
    productName: "",
  });

  const [downloadModalState, setDownloadModalState] = useState<{
    isOpen: boolean;
    selectedSubcategory: any | null;
  }>({
    isOpen: false,
    selectedSubcategory: null,
  });

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
  }, []);

  const groupedProducts = useMemo(() => {
    const groups: { categoryName: string; categorySlug: string; products: any[]; description?: string }[] = [];

    personalizedGifts.forEach((cat) => {
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
  }, []);

  const totalProducts = useMemo(() => {
    return groupedProducts.reduce((sum, group) => sum + group.products.length, 0);
  }, [groupedProducts]);

  const handleImageClick = (product: any) => {
    const imageUrl = product.image || (product.images && product.images[0]);
    setLightboxState({
      isOpen: true,
      imageUrl: imageUrl || "",
      productName: product.name || "Product",
    });
  };

  const closeLightbox = () => {
    setLightboxState(prev => ({ ...prev, isOpen: false }));
  };

  const handleDownloadClick = (subcategory?: any) => {
    setDownloadModalState({
      isOpen: true,
      selectedSubcategory: subcategory || null,
    });
  };

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: listingStyles }} />
      <div className="min-h-screen listing-container bg-[#f8fafc]">
        <PageBanner />

        <div className="max-w-[1500px] mx-auto px-6 py-12 lg:py-16">
          <div className="flex flex-col lg:flex-row gap-4 xl:gap-8 2xl:gap-12">
            <aside className="lg:w-64 flex-shrink-0">
              <div className="sticky top-[100px]">
                <SidebarWithSubcategories />
              </div>
            </aside>

            <main className="flex-1 min-w-0">
              {groupedProducts.length === 0 ? (
                <div className="text-center py-20">
                  <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-[#0093cb]/5 flex items-center justify-center">
                    <Package className="w-8 h-8 text-[#0093cb]/40" />
                  </div>
                  <p className="text-gray-500 text-lg">No products found.</p>
                </div>
              ) : (
                <>
                  <div className="mb-8 flex items-center justify-between flex-wrap gap-4">
                    <p className="text-sm text-gray-500">
                      Showing <span className="font-semibold text-[#060706]">{totalProducts}</span> products
                      in <span className="font-semibold text-[#060706]">{groupedProducts.length}</span> categories
                    </p>
                    
                    <button
                      onClick={() => handleDownloadClick()}
                      className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-medium transition-all shadow-md hover:shadow-lg"
                      style={{
                        background: `linear-gradient(135deg, ${BRAND.primary}, ${BRAND.secondary})`,
                        color: 'white',
                      }}
                    >
                      <Download className="w-4 h-4" />
                      Download Complete Catalogue
                    </button>
                  </div>

                  <div className="space-y-14">
                    {groupedProducts.map((group) => (
                      <CategorySection
                        key={group.categorySlug}
                        group={group}
                        onImageClick={handleImageClick}
                      />
                    ))}
                  </div>
                </>
              )}
            </main>
          </div>
        </div>
      </div>

      <DownloadCatalogueModal
        isOpen={downloadModalState.isOpen}
        onClose={() => setDownloadModalState(prev => ({ ...prev, isOpen: false }))}
        totalProducts={totalProducts}
        categoriesCount={groupedProducts.length}
        selectedSubcategory={downloadModalState.selectedSubcategory}
      />

      <AnimatePresence>
        {lightboxState.isOpen && (
          <ImageLightboxModal
            imageUrl={lightboxState.imageUrl}
            productName={lightboxState.productName}
            onClose={closeLightbox}
          />
        )}
      </AnimatePresence>
    </>
  );
}

export default function PersonalizedPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center">
        <div className="w-8 h-8 border-4 border-[#0093cb] border-t-transparent rounded-full animate-spin" />
      </div>
    }>
      <PersonalizedPageContent />
    </Suspense>
  );
}
