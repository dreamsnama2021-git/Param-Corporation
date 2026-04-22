/* ─── 3-Card Swipeable Gallery with Lightbox Modal ─── */
"use client";

import React, { useMemo } from "react";
import Link from "next/link";
import { useParams, useRouter, useSearchParams } from "next/navigation";
import {
  Home,
  ChevronRight,
  ArrowRight,
  LayoutGrid,
  Stethoscope,
  Gift,
  Calendar,
  Smartphone,
} from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  allProducts,
  categories,
  therapies,
  occasions,
  personalizedGifts,
  digitalGifts,
  getOccasionCategories,
} from ".././data";

const listingStyles = `
  .listing-container { font-family: system-ui, -apple-system, sans-serif; }
  .category-item { position: relative; transition: all 0.3s ease; }
  .tab-card:hover .tab-icon { transform: scale(1.1) rotate(-5deg); }
  .scrollbar-hide::-webkit-scrollbar { display: none; }
  .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
`;

const TABS = [
  { id: "all", label: "All Products", color: "#F5A623", icon: <LayoutGrid /> },
  { id: "categories", label: "Categories", color: "#F5A623", icon: <LayoutGrid /> },
  { id: "therapy", label: "Therapy", color: "#10B981", icon: <Stethoscope /> },
  { id: "personalized", label: "Personalized", color: "#8B5CF6", icon: <Gift /> },
  { id: "occasion", label: "Occasions", color: "#EC4899", icon: <Calendar /> },
  { id: "digital", label: "Digital", color: "#3B82F6", icon: <Smartphone /> },
] as const;

type TabId = (typeof TABS)[number]["id"];

const getCategoriesForTab = (tabId: TabId) => {
  if (tabId === "categories") return categories;
  if (tabId === "therapy") return therapies;
  if (tabId === "personalized") return personalizedGifts;
  if (tabId === "occasion") return occasions;
  if (tabId === "digital") return digitalGifts;
  return [];
};

/* ══════════════════════════════════════════
   COMPONENTS
══════════════════════════════════════════ */

function TabNavigationCard({ tab, onClick }: { tab: any; onClick: () => void }) {
  // Find a representative image from the products in this tab
  const tabCats = getCategoriesForTab(tab.id);
  const sampleProduct = allProducts.find((p) => tabCats.some((c) => c.slug === p.category));
  const displayImage = sampleProduct?.image || "";

  return (
    <motion.div
      whileHover={{ y: -5 }}
      onClick={onClick}
      className="group cursor-pointer bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 border border-gray-100 h-full"
    >
      <div className="relative h-48 overflow-hidden bg-gray-100">
        {displayImage ? (
          <Image src={displayImage} alt={tab.label} fill className="object-cover group-hover:scale-110 transition-transform duration-700" unoptimized />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-slate-50 text-slate-200">
            {/* FIXED: Added <any> to ReactElement cast */}
            {React.cloneElement(tab.icon as React.ReactElement<any>, { size: 48 })}
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute bottom-4 left-5 text-white">
          <div className="flex items-center gap-2 mb-1">
            <span className="p-1.5 rounded-lg bg-white/20 backdrop-blur-md">
              {/* FIXED: Added <any> to ReactElement cast */}
              {React.cloneElement(tab.icon as React.ReactElement<any>, { size: 16 })}
            </span>
            <span className="text-xs font-bold uppercase tracking-widest opacity-80">Explore</span>
          </div>
          <h3 className="text-xl font-bold">{tab.label}</h3>
        </div>
      </div>
      <div className="p-5 flex justify-between items-center">
        <span className="text-sm text-gray-500">View Collection</span>
        <div className="w-10 h-10 rounded-full flex items-center justify-center bg-gray-50 group-hover:bg-black group-hover:text-white transition-colors">
          <ArrowRight size={18} />
        </div>
      </div>
    </motion.div>
  );
}


function ProductCard({ product }: { product: any }) {
  return (
    <Link href={`/product/${product.id}`} className="block group">
      <motion.div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 h-full border border-gray-50">
        <div className="relative aspect-square overflow-hidden bg-gray-50">
          <Image src={product.image} alt={product.name} fill className="object-cover group-hover:scale-105 transition-transform duration-500" unoptimized />
        </div>
        <div className="p-3">
          <p className="text-sm font-medium text-[#0f172a] line-clamp-2 group-hover:text-blue-600 transition-colors">
            {product.name}
          </p>
        </div>
      </motion.div>
    </Link>
  );
}

/* ══════════════════════════════════════════
   MAIN PAGE
══════════════════════════════════════════ */

export default function CategoryPage() {
  const params = useParams();
  const router = useRouter();
  const searchParams = useSearchParams();

  const slug = params?.slug as string | undefined;
  const tabParam = searchParams.get("tab") as TabId | null;

  const activeTab: TabId = useMemo(() => {
    if (tabParam && TABS.some((t) => t.id === tabParam)) return tabParam;
    return "all";
  }, [tabParam]);

  const isRootAll = activeTab === "all" && (!slug || slug === "all");
  const isTabAll = activeTab !== "all" && (!slug || slug === "all");

  const filteredProducts = useMemo(() => {
    if (isRootAll) return []; // We show category cards instead
    const tabCats = getCategoriesForTab(activeTab);
    
    if (!slug || slug === "all") {
      return allProducts.filter((p) => tabCats.some((cat) => cat.slug === p.category));
    }
    return allProducts.filter((p) => p.category === slug);
  }, [slug, activeTab, isRootAll]);

  const handleTabChange = (tabId: TabId) => {
    router.push(`/categories/all?tab=${tabId}`);
  };

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: listingStyles }} />
      <div className="min-h-screen listing-container bg-[#f8fafc]">
        {/* Hero */}
        <section className="relative bg-[#0b3c5d] py-16 overflow-hidden">
          <div className="relative max-w-7xl mx-auto px-6">
            <nav className="flex items-center gap-2 text-xs uppercase tracking-widest text-white/50 mb-8">
              <Link href="/" className="hover:text-white flex items-center gap-1.5 transition-colors">
                <Home className="w-3 h-3" /> Home
              </Link>
              <ChevronRight className="w-3 h-3" />
              <span className="text-white">Shop</span>
              <ChevronRight className="w-3 h-3" />
              <span className="text-white font-bold">{TABS.find(t => t.id === activeTab)?.label}</span>
            </nav>
            <h1 className="text-5xl font-serif italic text-white mb-4">
              {isRootAll ? "Our Collections" : TABS.find(t => t.id === activeTab)?.label}
            </h1>
            <p className="text-white/60 max-w-xl">
              {isRootAll 
                ? "Browse through our specialized categories designed for professional corporate gifting."
                : `Explore premium products within our ${activeTab} department.`}
            </p>
          </div>
        </section>

        <div className="max-w-7xl mx-auto px-6 py-12 lg:py-16">
          <div className="flex flex-col lg:flex-row gap-12">
            
            {/* Sidebar */}
            <aside className="lg:w-64 flex-shrink-0">
              <div className="sticky top-[100px] space-y-8">
                <div>
                  <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 mb-4">Navigation</h4>
                  <div className="flex flex-col gap-1">
                    {TABS.map((tab) => (
                      <button
                        key={tab.id}
                        onClick={() => handleTabChange(tab.id)}
                        className={`flex items-center justify-between py-3 px-4 rounded-xl transition-all ${
                          activeTab === tab.id ? "bg-white shadow-md font-bold text-black" : "text-gray-500 hover:bg-gray-100"
                        }`}
                      >
                        <span className="text-sm">{tab.label}</span>
                        <ArrowRight size={14} className={activeTab === tab.id ? "opacity-100" : "opacity-0"} />
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </aside>

            {/* Main Area */}
            <main className="flex-1">
              {isRootAll ? (
                /* ── FLOW 1: SHOW TAB CARDS ── */
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
                  {TABS.filter(t => t.id !== 'all').map((tab) => (
                    <TabNavigationCard 
                      key={tab.id} 
                      tab={tab} 
                      onClick={() => handleTabChange(tab.id)} 
                    />
                  ))}
                </div>
              ) : (
                /* ── FLOW 2: SHOW PRODUCTS ── */
                <>
                  <div className="mb-8 flex items-center justify-between">
                    <h2 className="text-2xl font-serif italic">
                      {slug && slug !== 'all' ? slug.replace(/-/g, ' ') : `All ${activeTab}`}
                    </h2>
                    <p className="text-sm text-gray-400">{filteredProducts.length} Products</p>
                  </div>
                  
                  <div className="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-4 gap-6">
                    {filteredProducts.map((product) => (
                      <ProductCard key={product.id} product={product} />
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
