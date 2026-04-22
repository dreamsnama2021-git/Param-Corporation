"use client";

import React, { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ChevronLeft, 
  ChevronRight, 
  Home, 
  ArrowLeft,
  MessageCircle,
  Package,
  ShieldCheck,
  Zap,
  Award,
  Users
} from "lucide-react";
import { allProducts } from "../../data"; // Adjust path to your data file

export default function ProductDetailPage() {
  const params = useParams();
  const router = useRouter();
  const id = params?.id as string;

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // 1. Find Product
  const product = useMemo(() => {
    return allProducts.find((p) => p.id.toString() === id);
  }, [id]);

  // 2. Filter Related Products
  const relatedProducts = useMemo(() => {
    if (!product) return [];
    return allProducts
      .filter((p) => p.category === product.category && p.id.toString() !== id)
      .slice(0, 4);
  }, [product, id]);

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center">
        <p className="text-gray-500 mb-4">Product not found</p>
        <Link href="/categories/all" className="text-orange-500 font-medium underline">Return to Shop</Link>
      </div>
    );
  }

  const images = product.images?.length ? product.images : [product.image].filter(Boolean);

  return (
    <div className="min-h-screen bg-[#fcfdfe] pb-20">
      {/* --- Header Navigation --- */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        <nav className="flex items-center gap-2 text-xs uppercase tracking-widest text-gray-400 mb-6">
          <Link href="/" className="hover:text-black flex items-center gap-1"><Home size={12}/> Home</Link>
          <ChevronRight size={12} />
          <Link href="/categories/all" className="hover:text-black">Products</Link>
          <ChevronRight size={12} />
          <span className="text-gray-900 font-bold truncate max-w-[150px] md:max-w-none">{product.name}</span>
        </nav>
        
        <button onClick={() => router.back()} className="group flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-black transition-colors">
          <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
          Back to Results
        </button>
      </div>

      <main className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* --- LEFT: Image Gallery --- */}
          <div className="lg:col-span-7 space-y-4">
            <div className="relative aspect-square rounded-[2rem] overflow-hidden bg-white shadow-xl shadow-slate-200/50 group border border-slate-100">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentImageIndex}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="relative w-full h-full"
                >
                  <Image
                    src={images[currentImageIndex]}
                    alt={product.name}
                    fill
                    className="object-contain p-8"
                    unoptimized
                  />
                </motion.div>
              </AnimatePresence>

              {images.length > 1 && (
                <div className="absolute inset-x-4 top-1/2 -translate-y-1/2 flex justify-between pointer-events-none">
                  <button 
                    onClick={() => setCurrentImageIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1))}
                    className="pointer-events-auto w-10 h-10 rounded-full bg-white/90 shadow-lg flex items-center justify-center hover:bg-white transition-colors"
                  >
                    <ChevronLeft size={20} />
                  </button>
                  <button 
                    onClick={() => setCurrentImageIndex((prev) => (prev + 1) % images.length)}
                    className="pointer-events-auto w-10 h-10 rounded-full bg-white/90 shadow-lg flex items-center justify-center hover:bg-white transition-colors"
                  >
                    <ChevronRight size={20} />
                  </button>
                </div>
              )}
            </div>

            {/* Thumbnails */}
            <div className="flex gap-4 overflow-x-auto pb-2 scrollbar-hide justify-center">
              {images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentImageIndex(idx)}
                  className={`relative w-16 h-16 rounded-xl overflow-hidden border-2 transition-all flex-shrink-0 ${
                    currentImageIndex === idx ? "border-orange-500 ring-4 ring-orange-50" : "border-transparent opacity-60 hover:opacity-100"
                  }`}
                >
                  <Image src={img} alt="Thumb" fill className="object-cover" unoptimized />
                </button>
              ))}
            </div>
          </div>

          {/* --- RIGHT: Details & Content --- */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-4">
              <span className="px-3 py-1 bg-orange-100 text-orange-700 text-xs font-bold rounded-full uppercase tracking-tighter">
                {product.categoryName}
              </span>
              <h1 className="text-4xl font-serif text-slate-900 leading-tight">
                {product.name}
              </h1>
           
            </div>

            <div className="space-y-6">
              <div className="prose prose-slate prose-sm text-slate-600">
                <h3 className="text-slate-900 font-bold text-base mb-2">Product Description</h3>
                <p className="leading-relaxed">
                  {product.description || "Premium quality product designed for corporate excellence. Perfect for doctor gifting, brand reminders, and clinical utility."}
                </p>
              </div>

              {/* Product Highlights Section */}
              <div className="space-y-4 border-t border-slate-100 pt-6">
                <h3 className="text-slate-900 font-bold text-base">Key Highlights</h3>
                <ul className="grid grid-cols-1 gap-3">
                  {[
                    { icon: <Award size={16} className="text-orange-500" />, text: "Premium quality materials & finish" },
                    { icon: <Zap size={16} className="text-orange-500" />, text: "High brand recall for medical professionals" },
                    { icon: <Users size={16} className="text-orange-500" />, text: "Ideal for conferences & clinic gifting" },
                    { icon: <ShieldCheck size={16} className="text-orange-500" />, text: "Custom branding & logo printing available" },
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-sm text-slate-600">
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-orange-50 flex items-center justify-center">
                        {item.icon}
                      </div>
                      {item.text}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Logistics/Features Grid */}
              <div className="grid grid-cols-2 gap-3">
                <div className="flex flex-col gap-1 p-4 bg-slate-50 rounded-2xl border border-slate-100">
                  <Package className="text-[#0b3c5d]" size={20} />
                  <span className="text-xs font-bold text-slate-900 mt-1">Bulk Only</span>
                  <span className="text-[10px] text-slate-500 uppercase">Min. Order Applies</span>
                </div>
                <div className="flex flex-col gap-1 p-4 bg-slate-50 rounded-2xl border border-slate-100">
                  <MessageCircle className="text-[#0b3c5d]" size={20} />
                  <span className="text-xs font-bold text-slate-900 mt-1">Customizable</span>
                  <span className="text-[10px] text-slate-500 uppercase">Logo & Name</span>
                </div>
              </div>

              {/* ENQUIRY CTA BUTTON */}
              <div className="pt-4">
                <Link 
                  href={`/contact-us?product=${encodeURIComponent(product.name)}`}
                  className="w-full bg-[#0b3c5d] hover:bg-[#072c44] text-white font-bold py-5 rounded-2xl transition-all flex items-center justify-center gap-3 shadow-xl shadow-blue-900/20 active:scale-[0.98]"
                >
                  <MessageCircle size={20} />
                  Enquire About This Product
                </Link>
                <p className="text-center text-[11px] text-slate-400 mt-3 italic">
                  * Click to navigate to our contact form for bulk pricing and customization details.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* --- BOTTOM: Related Products --- */}
        {relatedProducts.length > 0 && (
          <section className="mt-32">
            <div className="flex items-end justify-between mb-10">
              <div>
                <h2 className="text-3xl font-serif text-slate-900 italic">Similar Collections</h2>
                <div className="h-1 w-12 bg-orange-500 mt-2 rounded-full" />
              </div>
              <Link href="/categories/all" className="text-sm font-bold text-orange-500 hover:text-orange-600 transition-colors">
                View All →
              </Link>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {relatedProducts.map((rel) => (
                <Link key={rel.id} href={`/product/${rel.id}`} className="group">
                  <div className="bg-white rounded-3xl p-3 shadow-sm border border-slate-100 hover:shadow-xl transition-all duration-500 hover:-translate-y-1">
                    <div className="relative aspect-square rounded-2xl overflow-hidden bg-slate-50 mb-4">
                      <Image 
                        src={rel.images?.[0] || rel.image} 
                        alt={rel.name} 
                        fill 
                        className="object-contain p-4 group-hover:scale-110 transition-transform duration-700" 
                        unoptimized 
                      />
                    </div>
                    <div className="px-2 pb-2">
                      <p className="text-xs font-bold text-orange-500 mb-1">{rel.categoryName}</p>
                      <h4 className="text-sm font-semibold text-slate-800 line-clamp-1">{rel.name}</h4>
                      <p className="text-xs text-slate-500 mt-1">{rel.price}</p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}
      </main>
    </div>
  );
}
