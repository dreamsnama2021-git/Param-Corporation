/* ─── Pharma Launch Page with Left Sidebar Dropdown + Subcategories ─── */
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
  Mail,
  Phone,
  User,
  Building2,
  Send,
  Loader2,
  Pill,
  FlaskConical,
  Syringe,
  Microscope,
  Stethoscope,
  Heart,
  Activity,
  TestTube,
  Briefcase,
  Scissors,
  GraduationCap,
  Gift,
} from "lucide-react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

// ─── Pharma Launch Data ───────────────────────────────────────────────
// Define pharma categories
const pharmaCategories = [
  {
    slug: "pharma-launch-kits",
    name: "Pharma Launch Kits",
    description: "Comprehensive branding kits for pharmaceutical product launches and promotions",
    icon: <Gift size={20} />,
  },
  {
    slug: "custom-doctor-kits",
    name: "Custom Doctor Kits",
    description: "Personalized gift kits tailored for doctors with pharma branding and utilities",
    icon: <Briefcase size={20} />,
  },
  {
    slug: "surgical-tools",
    name: "Surgical Tools",
    description: "Branded surgical instruments and tools for medical professionals and hospitals",
    icon: <Scissors size={20} />,
  },
  {
    slug: "custom-training-models",
    name: "Custom Training Models",
    description: "Educational medical models customized for pharma training and demonstrations",
    icon: <GraduationCap size={20} />,
  },
];

// Sample pharmaceutical products for each category
// const pharmaProducts = [
//  ─── Pharma Launch Kits ──────────────────────────────────────────
//   {
//     id: 1,
//     name: "Complete Pharma Launch Kit",
//     category: "pharma-launch-kits",
//     description: "All-in-one branding kit for pharmaceutical product launches",
//     image: "https://pub-735dbd7583d74ad5949115d6fdf77023.r2.dev/Final%20Edit%20Images/22.png",
//     features: ["Complete Branding", "Premium Quality"],
//     tags: ["Launch Kit", "Branding"],
//   },
//   {
//     id: 2,
//     name: "Product Launch Brochure Set",
//     category: "pharma-launch-kits",
//     description: "Professional brochure collection for product launch events",
//     image: "https://pub-735dbd7583d74ad5949115d6fdf77023.r2.dev/Pharma/launch-kit-2.jpg",
//     features: ["High-Quality Print", "Customizable"],
//     tags: ["Brochure", "Launch"],
//   },
//   {
//     id: 3,
//     name: "Launch Event Welcome Kit",
//     category: "pharma-launch-kits",
//     description: "Welcome kits for launch events with pharma branding",
//     image: "https://pub-735dbd7583d74ad5949115d6fdf77023.r2.dev/Pharma/launch-kit-3.jpg",
//     features: ["Event Ready", "Branded"],
//     tags: ["Event Kit", "Welcome"],
//   },
//   {
//     id: 4,
//     name: "Promotional Launch Package",
//     category: "pharma-launch-kits",
//     description: "Complete promotional package for product launch campaigns",
//     image: "https://pub-735dbd7583d74ad5949115d6fdf77023.r2.dev/Pharma/launch-kit-4.jpg",
//     features: ["Promotional", "Campaign Ready"],
//     tags: ["Promotion", "Launch"],
//   },
//   {
//     id: 5,
//     name: "Pharma Launch Presentation Kit",
//     category: "pharma-launch-kits",
//     description: "Professional presentation materials for launch meetings",
//     image: "https://pub-735dbd7583d74ad5949115d6fdf77023.r2.dev/Pharma/launch-kit-5.jpg",
//     features: ["Presentation Ready", "Professional"],
//     tags: ["Presentation", "Meeting"],
//   },
//   {
//     id: 6,
//     name: "Launch Announcement Kit",
//     category: "pharma-launch-kits",
//     description: "Complete announcement kit for product launches",
//     image: "https://pub-735dbd7583d74ad5949115d6fdf77023.r2.dev/Pharma/launch-kit-6.jpg",
//     features: ["Announcement Ready", "Complete Set"],
//     tags: ["Announcement", "Launch"],
//   },
//   {
//     id: 7,
//     name: "Pharma Brand Launch Box",
//     category: "pharma-launch-kits",
//     description: "Premium launch box with comprehensive branding materials",
//     image: "https://pub-735dbd7583d74ad5949115d6fdf77023.r2.dev/Pharma/launch-kit-7.jpg",
//     features: ["Premium Box", "Complete Branding"],
//     tags: ["Brand Box", "Premium"],
//   },
//   {
//     id: 8,
//     name: "Digital Launch Kit",
//     category: "pharma-launch-kits",
//     description: "Digital assets and materials for online product launches",
//     image: "https://pub-735dbd7583d74ad5949115d6fdf77023.r2.dev/Pharma/launch-kit-8.jpg",
//     features: ["Digital Assets", "Online Ready"],
//     tags: ["Digital", "Online Launch"],
//   },
//   {
//     id: 9,
//     name: "Global Launch Package",
//     category: "pharma-launch-kits",
//     description: "International launch kit for global pharma product releases",
//     image: "https://pub-735dbd7583d74ad5949115d6fdf77023.r2.dev/Pharma/launch-kit-9.jpg",
//     features: ["Global Ready", "International"],
//     tags: ["Global", "International"],
//   },
//   {
//     id: 10,
//     name: "Launch Sampling Kit",
//     category: "pharma-launch-kits",
//     description: "Product sampling kit for launch promotions",
//     image: "https://pub-735dbd7583d74ad5949115d6fdf77023.r2.dev/Pharma/launch-kit-10.jpg",
//     features: ["Sampling Ready", "Promotional"],
//     tags: ["Sampling", "Promotion"],
//   },

  // ─── Custom Doctor Kits ──────────────────────────────────────────
  {
    id: 11,
    name: "Premium Doctor Welcome Kit",
    category: "custom-doctor-kits",
    description: "Personalized welcome kit for doctors with pharma branding",
    image: "https://pub-735dbd7583d74ad5949115d6fdf77023.r2.dev/Final%20Edit%20Images/68.png",
    features: ["Personalized", "Premium Quality"],
    tags: ["Welcome Kit", "Doctor"],
  },
  // {
  //   id: 12,
  //   name: "Doctor Engagement Toolkit",
  //   category: "custom-doctor-kits",
  //   description: "Complete engagement toolkit for doctor relationships",
  //   image: "https://pub-735dbd7583d74ad5949115d6fdf77023.r2.dev/Pharma/doctor-kit-2.jpg",
  //   features: ["Engagement Ready", "Complete Set"],
  //   tags: ["Engagement", "Doctor"],
  // },
  // {
  //   id: 13,
  //   name: "Custom Doctor Gift Set",
  //   category: "custom-doctor-kits",
  //   description: "Personalized gift set for doctors with pharma utilities",
  //   image: "https://pub-735dbd7583d74ad5949115d6fdf77023.r2.dev/Pharma/doctor-kit-3.jpg",
  //   features: ["Custom Gift", "Premium Quality"],
  //   tags: ["Gift Set", "Doctor"],
  // },
  // {
  //   id: 14,
  //   name: "Clinic Branding Kit for Doctors",
  //   category: "custom-doctor-kits",
  //   description: "Complete clinic branding solutions for doctor practices",
  //   image: "https://pub-735dbd7583d74ad5949115d6fdf77023.r2.dev/Pharma/doctor-kit-4.jpg",
  //   features: ["Clinic Branding", "Complete Solution"],
  //   tags: ["Clinic", "Branding"],
  // },
  // {
  //   id: 15,
  //   name: "Doctor Appreciation Kit",
  //   category: "custom-doctor-kits",
  //   description: "Appreciation kits to strengthen doctor-pharma relationships",
  //   image: "https://pub-735dbd7583d74ad5949115d6fdf77023.r2.dev/Pharma/doctor-kit-5.jpg",
  //   features: ["Appreciation", "Relationship Building"],
  //   tags: ["Appreciation", "Doctor"],
  // },
  // {
  //   id: 16,
  //   name: "Specialist Doctor Kit",
  //   category: "custom-doctor-kits",
  //   description: "Specialized kits for different medical specialties",
  //   image: "https://pub-735dbd7583d74ad5949115d6fdf77023.r2.dev/Pharma/doctor-kit-6.jpg",
  //   features: ["Specialty Focused", "Custom"],
  //   tags: ["Specialist", "Doctor"],
  // },
  // {
  //   id: 17,
  //   name: "Doctor Meeting Kit",
  //   category: "custom-doctor-kits",
  //   description: "Complete kit for doctor meetings and presentations",
  //   image: "https://pub-735dbd7583d74ad5949115d6fdf77023.r2.dev/Pharma/doctor-kit-7.jpg",
  //   features: ["Meeting Ready", "Professional"],
  //   tags: ["Meeting", "Doctor"],
  // },
  // {
  //   id: 18,
  //   name: "Custom Doctor Utility Kit",
  //   category: "custom-doctor-kits",
  //   description: "Practical utility kit with pharma branding for daily use",
  //   image: "https://pub-735dbd7583d74ad5949115d6fdf77023.r2.dev/Pharma/doctor-kit-8.jpg",
  //   features: ["Practical", "Daily Use"],
  //   tags: ["Utility", "Doctor"],
  // },

  // ─── Surgical Tools ──────────────────────────────────────────────
  // {
  //   id: 19,
  //   name: "Premium Surgical Instrument Set",
  //   category: "surgical-tools",
  //   description: "Complete surgical instrument set with pharma branding",
  //   image: "https://pub-735dbd7583d74ad5949115d6fdf77023.r2.dev/Pharma/surgical-1.jpg",
  //   features: ["Premium Quality", "Complete Set"],
  //   tags: ["Surgical", "Instruments"],
  // },
  // {
  //   id: 20,
  //   name: "Branded Scalpel Set",
  //   category: "surgical-tools",
  //   description: "High-quality branded scalpel set for surgical procedures",
  //   image: "https://pub-735dbd7583d74ad5949115d6fdf77023.r2.dev/Pharma/surgical-2.jpg",
  //   features: ["High Precision", "Branded"],
  //   tags: ["Scalpel", "Surgical"],
  // },
  // {
  //   id: 21,
  //   name: "Surgical Forceps Collection",
  //   category: "surgical-tools",
  //   description: "Complete collection of branded surgical forceps",
  //   image: "https://pub-735dbd7583d74ad5949115d6fdf77023.r2.dev/Pharma/surgical-3.jpg",
  //   features: ["Complete Collection", "Premium"],
  //   tags: ["Forceps", "Surgical"],
  // },
  // {
  //   id: 22,
  //   name: "Branded Surgical Scissors",
  //   category: "surgical-tools",
  //   description: "High-precision surgical scissors with pharma branding",
  //   image: "https://pub-735dbd7583d74ad5949115d6fdf77023.r2.dev/Pharma/surgical-4.jpg",
  //   features: ["High Precision", "Branded"],
  //   tags: ["Scissors", "Surgical"],
  // },
  // {
  //   id: 23,
  //   name: "Surgical Tool Organizer Kit",
  //   category: "surgical-tools",
  //   description: "Organized surgical tool kit with branded instruments",
  //   image: "https://pub-735dbd7583d74ad5949115d6fdf77023.r2.dev/Pharma/surgical-5.jpg",
  //   features: ["Organized", "Complete Set"],
  //   tags: ["Organizer", "Surgical"],
  // },
  // {
  //   id: 24,
  //   name: "Hospital Surgical Toolkit",
  //   category: "surgical-tools",
  //   description: "Complete surgical toolkit for hospital use with branding",
  //   image: "https://pub-735dbd7583d74ad5949115d6fdf77023.r2.dev/Pharma/surgical-6.jpg",
  //   features: ["Hospital Ready", "Complete"],
  //   tags: ["Hospital", "Surgical"],
  // },
  // {
  //   id: 25,
  //   name: "Branded Retractor Set",
  //   category: "surgical-tools",
  //   description: "Professional surgical retractor set with branding",
  //   image: "https://pub-735dbd7583d74ad5949115d6fdf77023.r2.dev/Pharma/surgical-7.jpg",
  //   features: ["Professional", "Branded"],
  //   tags: ["Retractor", "Surgical"],
  // },
  // {
  //   id: 26,
  //   name: "Surgical Needle Holder Set",
  //   category: "surgical-tools",
  //   description: "High-quality needle holder set for surgical procedures",
  //   image: "https://pub-735dbd7583d74ad5949115d6fdf77023.r2.dev/Pharma/surgical-8.jpg",
  //   features: ["High Quality", "Professional"],
  //   tags: ["Needle Holder", "Surgical"],
  // },

  // ─── Custom Training Models ──────────────────────────────────────
  {
    id: 27,
    name: "Medical Training Model Kit",
    category: "custom-training-models",
    description: "Custom medical training models for pharma education",
    image: "https://pub-735dbd7583d74ad5949115d6fdf77023.r2.dev/Final%20Edit%20Images/65.png",
    features: ["Educational", "Custom"],
    tags: ["Training", "Education"],
  },
  {
    id: 28,
    name: "Anatomical Training Model",
    category: "custom-training-models",
    description: "Detailed anatomical models for medical training",
    image: "https://pub-735dbd7583d74ad5949115d6fdf77023.r2.dev/Final%20Edit%20Images/76.png",
    features: ["Detailed", "Anatomical"],
    tags: ["Anatomy", "Training"],
  },
  {
    id: 29,
    name: "Pharmaceutical Training Kit",
    category: "custom-training-models",
    description: "Complete training kit for pharmaceutical education",
    image: "https://pub-735dbd7583d74ad5949115d6fdf77023.r2.dev/Final%20Edit%20Images/83.png",
    features: ["Complete Kit", "Educational"],
    tags: ["Pharmaceutical", "Training"],
  },
  {
    id: 30,
    name: "Interactive Training Model",
    category: "custom-training-models",
    description: "Interactive models for engaging medical training",
    image: "https://pub-735dbd7583d74ad5949115d6fdf77023.r2.dev/Final%20Edit%20Images/ChatGPT%20Image%20May%2025%2C%202026%2C%2004_03_15%20PM.png",
    features: ["Interactive", "Engaging"],
    tags: ["Interactive", "Training"],
  },
  {
    id: 31,
    name: "3D Medical Training Models",
    category: "custom-training-models",
    description: "3D printed medical models for advanced training",
    image: "https://pub-735dbd7583d74ad5949115d6fdf77023.r2.dev/Final%20Edit%20Images/ChatGPT%20Image%20May%2025%2C%202026%2C%2004_37_54%20PM.png",
    features: ["3D Printed", "Advanced"],
    tags: ["3D", "Medical"],
  },
  {
    id: 32,
    name: "Surgical Training Simulator",
    category: "custom-training-models",
    description: "Simulator models for surgical training and practice",
    image: "https://pub-735dbd7583d74ad5949115d6fdf77023.r2.dev/Final%20Edit%20Images/ChatGPT%20Image%20May%2028%2C%202026%2C%2005_42_08%20PM.png",
    features: ["Simulator", "Surgical"],
    tags: ["Surgical", "Training"],
  },
  {
    id: 33,
    name: "Custom Pharma Training Models",
    category: "custom-training-models",
    description: "Fully customizable training models for specific pharma needs",
    image: "https://pub-735dbd7583d74ad5949115d6fdf77023.r2.dev/Final%20Edit%20Images/Urology-.png",
    features: ["Customizable", "Specific"],
    tags: ["Custom", "Training"],
  },
  // {
  //   id: 34,
  //   name: "Medical Education Display Models",
  //   category: "custom-training-models",
  //   description: "Display models for medical education and exhibitions",
  //   image: "https://pub-735dbd7583d74ad5949115d6fdf77023.r2.dev/Pharma/training-8.jpg",
  //   features: ["Display Ready", "Educational"],
  //   tags: ["Display", "Education"],
  // },
];

// ─── Constants ──────────────────────────────────────────────────────
const listingStyles = `
  .listing-container { font-family: system-ui, -apple-system, sans-serif; }
  .scrollbar-hide::-webkit-scrollbar { display: none; }
  .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
  .product-card:hover .product-overlay { opacity: 1; }
  .product-overlay { opacity: 0; transition: opacity 0.3s ease; }
  
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
  
  html { scroll-behavior: smooth; }
  .view-more-btn { transition: all 0.3s ease; }
  .view-more-btn:hover { transform: translateY(-2px); }
`;

const BRAND = {
  primary: "#0093cb",
  secondary: "#00a65d",
  accent: "#060706",
};

const TABS = [
  { id: "all", label: "All Products", color: BRAND.primary },
] as const;

type TabId = (typeof TABS)[number]["id"];

const MAX_PRODUCTS_PER_CATEGORY = 8;

// ─── Helper Functions ──────────────────────────────────────────────
const getCategoriesForTab = (tabId: TabId) => {
  if (tabId === "all") return pharmaCategories;
  return [];
};

// ─── Product Image Component ──────────────────────────────────────
const ProductImage = ({ src, alt, className = "" }: { src: string; alt: string; className?: string }) => {
  const [imgError, setImgError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  if (!src || imgError) {
    return (
      <div className="w-full h-full flex items-center justify-center bg-gray-50">
        <Pill className="w-8 h-8 text-gray-300" />
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

// ─── Page Banner ──────────────────────────────────────────────────
const PageBanner = () => (
  <div className="relative w-full h-[60.5vh] md:h-[29.5vh] lg:h-[45vh] xl:h-[59vh] 2xl:h-[67.5vh] overflow-hidden">
    <Image
      src="https://pub-735dbd7583d74ad5949115d6fdf77023.r2.dev/Banners/Inner%20Banner/Products%20page%20Desktop.png"
      alt="Pharma Launch Banner"
      fill
      className="object-fill object-center"
      priority
      unoptimized
    />
  </div>
);

// ─── Download Catalogue Modal ────────────────────────────────────
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
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    companyName: "",
    designation: "",
  });
  const [errors, setErrors] = useState<any>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validateForm = (): boolean => {
    const newErrors: any = {};
    if (!formData.fullName.trim()) newErrors.fullName = "Full name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = "Please enter a valid email";
    if (!formData.phone.trim()) newErrors.phone = "Phone number is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) setErrors(prev => ({ ...prev, [field]: undefined }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;
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
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="bg-white rounded-2xl shadow-2xl w-full max-w-lg overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative p-6 border-b border-gray-100">
              <button
                onClick={onClose}
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
                          : "Download Pharma Catalogue"}
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
                      : "Fill in your details to download the complete pharma catalogue."}
                  </p>
                </>
              ) : (
                <div className="text-center py-4">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-green-100 flex items-center justify-center">
                    <Check className="w-8 h-8 text-[#00a65d]" />
                  </div>
                  <h2 className="text-xl font-bold text-[#060706] mb-2">Thank You!</h2>
                  <p className="text-sm text-gray-500">Your download will begin shortly.</p>
                </div>
              )}
            </div>

            {!isSubmitted && (
              <form onSubmit={handleSubmit} className="p-6 space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">Full Name <span className="text-red-500">*</span></label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                    <input
                      type="text"
                      value={formData.fullName}
                      onChange={(e) => handleInputChange("fullName", e.target.value)}
                      placeholder="Enter your full name"
                      className={`w-full pl-10 pr-4 py-2.5 rounded-xl border ${errors.fullName ? "border-red-300 bg-red-50" : "border-gray-200"} focus:outline-none focus:ring-2 focus:ring-[#0093cb]/20 focus:border-[#0093cb] text-sm`}
                      disabled={isSubmitting}
                    />
                  </div>
                  {errors.fullName && <p className="mt-1 text-xs text-red-500">{errors.fullName}</p>}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">Email <span className="text-red-500">*</span></label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                      placeholder="Enter your email"
                      className={`w-full pl-10 pr-4 py-2.5 rounded-xl border ${errors.email ? "border-red-300 bg-red-50" : "border-gray-200"} focus:outline-none focus:ring-2 focus:ring-[#0093cb]/20 focus:border-[#0093cb] text-sm`}
                      disabled={isSubmitting}
                    />
                  </div>
                  {errors.email && <p className="mt-1 text-xs text-red-500">{errors.email}</p>}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">Phone <span className="text-red-500">*</span></label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => handleInputChange("phone", e.target.value)}
                      placeholder="Enter your phone number"
                      className={`w-full pl-10 pr-4 py-2.5 rounded-xl border ${errors.phone ? "border-red-300 bg-red-50" : "border-gray-200"} focus:outline-none focus:ring-2 focus:ring-[#0093cb]/20 focus:border-[#0093cb] text-sm`}
                      disabled={isSubmitting}
                    />
                  </div>
                  {errors.phone && <p className="mt-1 text-xs text-red-500">{errors.phone}</p>}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">Company Name <span className="text-gray-400">(Optional)</span></label>
                  <div className="relative">
                    <Building2 className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                    <input
                      type="text"
                      value={formData.companyName}
                      onChange={(e) => handleInputChange("companyName", e.target.value)}
                      placeholder="Enter your company name"
                      className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#0093cb]/20 focus:border-[#0093cb] text-sm"
                      disabled={isSubmitting}
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-white font-medium transition-all shadow-md hover:shadow-lg disabled:opacity-50"
                  style={{ background: `linear-gradient(135deg, ${BRAND.primary}, ${BRAND.secondary})` }}
                >
                  {isSubmitting ? (
                    <><Loader2 className="w-4 h-4 animate-spin" /> Submitting...</>
                  ) : (
                    <><Download className="w-4 h-4" /> Download Catalogue</>
                  )}
                </button>
              </form>
            )}

            {isSubmitted && (
              <div className="p-6 pt-0">
                <button onClick={onClose} className="w-full px-6 py-3 rounded-xl bg-gray-100 text-gray-700 font-medium hover:bg-gray-200 transition-colors" type="button">Close</button>
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

// ─── Sidebar ──────────────────────────────────────────────────────
function SidebarWithSubcategories({
  activeTab,
  onSelect,
  onCategorySelect,
  selectedCategory,
}: {
  activeTab: TabId;
  onSelect: (tabId: TabId) => void;
  onCategorySelect: (categorySlug: string | null) => void;
  selectedCategory: string | null;
}) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const getSubCategoryCount = (slug: string) => {
    return pharmaProducts.filter((p) => p.category === slug).length;
  };

  const handleAllProductsClick = () => {
    setIsDropdownOpen(false);
    onCategorySelect(null);
    onSelect("all");
  };

  const handleCategoryClick = (categorySlug: string) => {
    setIsDropdownOpen(false);
    onCategorySelect(categorySlug);
    onSelect("all");
    // Scroll to category after state update
    setTimeout(() => {
      const element = document.getElementById(`category-${categorySlug}`);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        element.classList.add('highlight-category');
        setTimeout(() => element.classList.remove('highlight-category'), 3000);
      }
    }, 200);
  };

  return (
    <div className="space-y-6">
      <div>
        <div className="flex items-center gap-2 mb-3">
          <span className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-500">Filter By</span>
          <div className="h-px flex-1 bg-gray-200" />
        </div>

        <div className="bg-white rounded-xl border-2 border-gray-200 shadow-sm overflow-hidden" ref={dropdownRef}>
          {/* Main Dropdown Button - ALWAYS shows "All Products" */}
          <button
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className="w-full flex items-center justify-between py-3 px-4 text-left transition-colors hover:bg-gray-50 border-b border-gray-100"
            type="button"
          >
            <div className="flex items-center gap-3">
              <span className="w-2.5 h-2.5 rounded-full flex-shrink-0" style={{ backgroundColor: BRAND.primary }} />
              <span className="text-sm font-semibold text-[#060706]">
                All Products
              </span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-xs text-gray-400">
                {pharmaProducts.length}
              </span>
              <ChevronDown className={`w-4 h-4 text-gray-400 transition-transform duration-200 ${isDropdownOpen ? "rotate-180" : ""}`} />
            </div>
          </button>

          {/* Dropdown Menu - ONLY categories, NO "All Products" duplicate */}
          <AnimatePresence>
            {isDropdownOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.2 }}
                className="overflow-hidden"
              >
                <div className="py-2 px-2 space-y-0.5 bg-gray-50/50 border-t border-gray-100">
                  {/* Only Category Options - No "All Products" here since it's already the main button */}
                  {pharmaCategories.map((cat) => {
                    const count = getSubCategoryCount(cat.slug);
                    const isSelected = selectedCategory === cat.slug;
                    return (
                      <button
                        key={cat.slug}
                        onClick={() => handleCategoryClick(cat.slug)}
                        className={`w-full group flex items-center justify-between py-2.5 px-3 rounded-lg text-sm hover:text-[#060706] hover:bg-white transition-all text-left ${
                          isSelected ? "text-[#0093cb] bg-white" : "text-gray-600"
                        }`}
                        type="button"
                      >
                        <div className="flex items-center gap-2">
                          {isSelected && <Check className="w-3.5 h-3.5 text-[#0093cb]" />}
                          {!isSelected && <span className="w-1.5 h-1.5 rounded-full bg-gray-300 group-hover:bg-[#0093cb] transition-colors" />}
                          <span className={isSelected ? "font-medium" : ""}>{cat.name}</span>
                        </div>
                        <span className="text-xs text-gray-400 ml-2 flex-shrink-0">{count}</span>
                      </button>
                    );
                  })}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
// ─── Image Lightbox ──────────────────────────────────────────────
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

// ─── Product Card ─────────────────────────────────────────────────
function ProductCard({
  product,
  accentColor,
  onImageClick,
}: {
  product: any;
  accentColor: string;
  onImageClick: (product: any) => void;
}) {
  const productImage = product.image || (product.images && product.images[0]);
  const productName = product.name || "Product";
  const [imageError, setImageError] = useState(false);

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
          {productImage && !imageError ? (
            <>
              <img
                src={productImage}
                alt={productName}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                onError={() => setImageError(true)}
                loading="lazy"
              />
              <div className="absolute inset-0 bg-[#0093cb]/0 group-hover:bg-[#0093cb]/10 transition-colors duration-300 flex items-center justify-center product-overlay" />
            </>
          ) : (
            <div className="w-full h-full flex items-center justify-center">
              <Pill className="w-8 h-8 text-gray-300" />
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

// ─── Category Section ────────────────────────────────────────────
function CategorySection({
  group,
  activeTabColor,
  onViewAll,
  onImageClick,
  isHighlighted = false,
  onDownloadCatalogue,
}: {
  group: any;
  activeTabColor: string;
  onViewAll: (categorySlug: string, categoryName: string) => void;
  onImageClick: (product: any) => void;
  isHighlighted?: boolean;
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
      className={`category-section ${isHighlighted ? 'highlight-category' : ''}`}
    >
      <div className="mb-6">
        <div className="flex items-center justify-between flex-wrap gap-3">
          <div className="flex-1 min-w-[240px]">
            <div className="flex items-center gap-3 mb-2">
              <div className="p-2 rounded-lg bg-[#0093cb]/10 text-[#0093cb]">
                {group.icon}
              </div>
              <h2 className="text-xl lg:text-2xl font-bold text-[#060706]">{group.categoryName}</h2>
            </div>
            {group.description && <p className="text-sm text-gray-500">{group.description}</p>}
            <div className="mt-3 w-16 h-1 rounded-full" style={{ background: `linear-gradient(to right, ${BRAND.primary}, ${BRAND.secondary})` }} />
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
            accentColor={activeTabColor}
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
              <>Show Less <ChevronDown className="w-4 h-4" /></>
            ) : (
              <>Show More <ChevronDown className="w-4 h-4" /></>
            )}
          </button>
        </div>
      )}
    </section>
  );
}

// ─── Main Page Component ──────────────────────────────────────────
function PharmaLaunchPageContent() {
  const [activeTab, setActiveTab] = useState<TabId>("all");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [lightboxState, setLightboxState] = useState({
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
  const [highlightedCategory, setHighlightedCategory] = useState<string | null>(null);

  const activeTabColor = TABS.find((t) => t.id === activeTab)?.color || BRAND.primary;
  
  // Group ALL products by category - always show all
  const groupedProducts = useMemo(() => {
    const groups: { categoryName: string; categorySlug: string; products: any[]; description?: string; icon?: any }[] = [];
    
    pharmaCategories.forEach((cat) => {
      const products = pharmaProducts.filter((p) => p.category === cat.slug);
      if (products.length > 0) {
        groups.push({
          categoryName: cat.name,
          categorySlug: cat.slug,
          products,
          description: cat.description,
          icon: cat.icon,
        });
      }
    });
    
    return groups;
  }, []);

  const totalProducts = pharmaProducts.length;

  const handleTabSelect = (tabId: TabId) => {
    setActiveTab(tabId);
  };

  // Handle category selection - scrolls to category
  const handleCategorySelect = (categorySlug: string | null) => {
    if (categorySlug) {
      setSelectedCategory(categorySlug);
      setHighlightedCategory(categorySlug);
      setActiveTab("all");
      
      setTimeout(() => {
        const element = document.getElementById(`category-${categorySlug}`);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
          element.classList.add('highlight-category');
          setTimeout(() => {
            element.classList.remove('highlight-category');
            setHighlightedCategory(null);
          }, 3000);
        }
      }, 200);
    } else {
      setSelectedCategory(null);
      setHighlightedCategory(null);
      setActiveTab("all");
    }
  };

  // Handle image click for lightbox
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

  // Handle hash-based navigation for category scrolling
  useEffect(() => {
    const hash = window.location.hash;
    if (hash && hash.startsWith('#category-')) {
      const categorySlug = hash.replace('#category-', '');
      setSelectedCategory(categorySlug);
      setHighlightedCategory(categorySlug);
      setActiveTab("all");
      setTimeout(() => {
        const element = document.getElementById(`category-${categorySlug}`);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
          element.classList.add('highlight-category');
          setTimeout(() => element.classList.remove('highlight-category'), 3000);
        }
      }, 500);
    }
  }, []);

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: listingStyles }} />
      <div className="min-h-screen listing-container bg-[#f8fafc]">
        <PageBanner />

        <div className="max-w-[1500px] mx-auto px-6 py-12 lg:py-16">
          <div className="flex flex-col lg:flex-row gap-4 xl:gap-8 2xl:gap-12">
            <aside className="lg:w-64 flex-shrink-0">
              <div className="sticky top-[100px]">
                <SidebarWithSubcategories 
                  activeTab={activeTab} 
                  onSelect={handleTabSelect}
                  onCategorySelect={handleCategorySelect}
                  selectedCategory={selectedCategory}
                />
              </div>
            </aside>

            <main className="flex-1 min-w-0">
              {/* Active filter indicator - shows when a category is selected */}
              {selectedCategory && (
                <div className="mb-4 flex items-center gap-2">
                  <span className="text-sm text-gray-500">Viewing:</span>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#0093cb]/10 text-[#0093cb] text-sm font-medium">
                    {pharmaCategories.find(c => c.slug === selectedCategory)?.name}
                    <button
                      onClick={() => {
                        setSelectedCategory(null);
                        setHighlightedCategory(null);
                        setActiveTab("all");
                      }}
                      className="hover:bg-[#0093cb]/20 rounded-full p-0.5 transition-colors"
                      type="button"
                    >
                      <X className="w-3.5 h-3.5" />
                    </button>
                  </span>
                </div>
              )}

              {/* Title section - Always shows "All Products" */}
              <div className="mb-8 flex items-center justify-between flex-wrap gap-4">
                <div>
                  <h1 className="text-2xl lg:text-3xl font-bold text-[#060706]">
                    All Products
                  </h1>
                  <p className="text-sm text-gray-500 mt-1">
                    {totalProducts} product{totalProducts !== 1 ? 's' : ''} available
                    {selectedCategory && ` — viewing ${pharmaCategories.find(c => c.slug === selectedCategory)?.name}`}
                  </p>
                </div>
                <button
                  onClick={() => handleDownloadClick()}
                  className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-medium transition-all shadow-md hover:shadow-lg text-white"
                  style={{ background: `linear-gradient(135deg, ${BRAND.primary}, ${BRAND.secondary})` }}
                >
                  <Download className="w-4 h-4" />
                  Download Catalogue
                </button>
              </div>

              {groupedProducts.length === 0 ? (
                <div className="text-center py-20">
                  <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-[#0093cb]/5 flex items-center justify-center">
                    <Package className="w-8 h-8 text-[#0093cb]/40" />
                  </div>
                  <p className="text-gray-500 text-lg">No products found.</p>
                </div>
              ) : (
                <div className="space-y-14">
                  {groupedProducts.map((group) => (
                    <CategorySection
                      key={group.categorySlug}
                      group={group}
                      activeTabColor={activeTabColor}
                      onViewAll={() => {}}
                      onImageClick={handleImageClick}
                      isHighlighted={highlightedCategory === group.categorySlug}
                    />
                  ))}
                </div>
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

// ─── Export ──────────────────────────────────────────────────────
export default function PharmaLaunchPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center">
        <div className="w-8 h-8 border-4 border-[#0093cb] border-t-transparent rounded-full animate-spin" />
      </div>
    }>
      <PharmaLaunchPageContent />
    </Suspense>
  );
}
