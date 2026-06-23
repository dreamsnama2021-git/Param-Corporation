"use client";

import React, { useState, useMemo, useEffect, useCallback } from "react";
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
  Users,
  Send,
  Loader2,
  CheckCircle2,
  X,
  Mail,
  Phone,
  Building2,
  Hash,
} from "lucide-react";
import { allProducts } from "../../data";

export default function ProductDetailPage() {
  const params = useParams();
  const router = useRouter();
  const id = params?.id as string;

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState("");
  const [imgError, setImgError] = useState(false);
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
    quantity: "",
  });

  // Find Product
  const product = useMemo(() => {
    return allProducts.find((p) => p.id.toString() === id);
  }, [id]);

  // Get images array
  const images = useMemo(() => {
    if (!product) return [];
    if (product.images && Array.isArray(product.images) && product.images.length > 0) {
      return product.images;
    }
    if (product.image) {
      return [product.image];
    }
    return [];
  }, [product]);

  // Debug: Log image paths
  useEffect(() => {
    if (product) {
      console.log("Product:", product.name);
      console.log("Images:", images);
      console.log("Product image field:", product.image);
      console.log("Product images array:", product.images);
    }
  }, [product, images]);

  // Related Products
  const relatedProducts = useMemo(() => {
    if (!product) return [];
    return allProducts
      .filter((p) => p.category === product.category && p.id.toString() !== id)
      .slice(0, 4);
  }, [product, id]);

  const openModal = () => {
    setIsModalOpen(true);
    setIsSubmitted(false);
    setError("");
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setIsSubmitted(false);
    setError("");
    setFormState({
      name: "",
      email: "",
      phone: "",
      company: "",
      message: "",
      quantity: "",
    });
    document.body.style.overflow = "unset";
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    try {
      const response = await fetch("/api/send-enquiry", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formState,
          productName: product?.name,
          productCategory: product?.categoryName,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to send enquiry");
      }

      setIsSubmitted(true);
      setTimeout(() => {
        closeModal();
      }, 3000);
    } catch (err) {
      setError("Failed to send enquiry. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') prevImage();
      if (e.key === 'ArrowRight') nextImage();
      if (e.key === "Escape" && isModalOpen) closeModal();
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [images.length, isModalOpen]);

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center">
        <div className="text-center">
          <Package className="w-16 h-16 text-gray-300 mx-auto mb-4" />
          <p className="text-gray-500 mb-4">Product not found</p>
          <Link
            href="/categories/all"
            className="inline-flex items-center gap-2 px-6 py-3 bg-orange-500 text-white rounded-xl hover:bg-orange-600 transition-all"
          >
            Return to Shop
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#fcfdfe] pb-12">
      {/* Header Navigation */}
      <div className="max-w-[1500px] mx-auto px-6 pt-16">
        <nav className="flex items-center gap-2 text-xs uppercase tracking-widest text-gray-400 mb-6">
          <Link href="/" className="hover:text-black flex items-center gap-1">
            <Home size={12} /> Home
          </Link>
          <ChevronRight size={12} />
          <Link href="/categories/all" className="hover:text-black">
            Products
          </Link>
          <ChevronRight size={12} />
          <span className="text-gray-900 font-bold truncate max-w-[150px] md:max-w-none">
            {product.name}
          </span>
        </nav>

        <button
          onClick={() => router.back()}
          className="group flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-black transition-colors mb-8"
        >
          <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
          Back to Results
        </button>
      </div>

      <main className="max-w-[1500px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* LEFT: Image Gallery */}
          <div className="lg:col-span-7 space-y-4">
            <div className="relative  overflow-hidden  min-h-[500px] flex items-center justify-center">
              {images.length > 0 ? (
                <>
                  <div className="relative my-auto mx-auto w-[90%] h-[500px]">
                    <img
                      src={images[currentImageIndex]}
                      alt={`${product.name} - Image ${currentImageIndex + 1}`}
                      className="w-[70%] h-[95%] rounded-lg object-cover"
                      onError={(e) => {
                        console.error("Image failed to load:", images[currentImageIndex]);
                        e.currentTarget.src = "/placeholder-image.jpg";
                      }}
                    />
                  </div>

                  {images.length > 1 && (
                    <>
                      <button
                        onClick={prevImage}
                        className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/90 shadow-lg flex items-center justify-center hover:bg-white transition-all z-10"
                      >
                        <ChevronLeft size={20} />
                      </button>
                      <button
                        onClick={nextImage}
                        className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/90 shadow-lg flex items-center justify-center hover:bg-white transition-all z-10"
                      >
                        <ChevronRight size={20} />
                      </button>
                    </>
                  )}
                </>
              ) : (
                <div className="text-center">
                  <Package className="w-20 h-20 text-gray-300 mx-auto mb-2" />
                  <p className="text-gray-400 text-sm">No image available</p>
                </div>
              )}
            </div>

            {/* Thumbnails */}
            {images.length > 1 && (
              <div className="flex gap-4 overflow-x-auto pb-2 justify-center">
                {images.map((img: string, idx: number) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentImageIndex(idx)}
                    className={`relative w-20 h-20 rounded-xl overflow-hidden border-2 transition-all flex-shrink-0 ${
                      currentImageIndex === idx
                        ? "border-orange-500 ring-4 ring-orange-100"
                        : "border-transparent opacity-60 hover:opacity-100"
                    }`}
                  >
                    <img
                      src={img}
                      alt={`Thumbnail ${idx + 1}`}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.currentTarget.src = "/placeholder-image.jpg";
                      }}
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* RIGHT: Details */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-4">
              <span className="inline-block px-3 py-2 bg-orange-100 text-orange-700 text-xs font-bold rounded-full uppercase">
                {product.categoryName}
              </span>
              <h1 className="text-4xl lg:text-5xl font-serif text-slate-900 leading-tight">
                {product.name}
              </h1>
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="text-slate-900 font-bold text-base mb-2">
                  Product Description
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {product.description ||
                    "Premium quality product designed for corporate excellence."}
                </p>
              </div>

              {/* Highlights */}
              <div className="space-y-4 border-t border-slate-100 pt-6">
                <h3 className="text-slate-900 font-bold text-base">Key Highlights</h3>
                <ul className="grid grid-cols-1 gap-3">
                  {[
                    { icon: <Award size={16} className="text-orange-500" />, text: "Premium quality materials & finish" },
                    { icon: <Zap size={16} className="text-orange-500" />, text: "High brand recall for medical professionals" },
                    { icon: <Users size={16} className="text-orange-500" />, text: "Ideal for conferences & clinic gifting" },
                    { icon: <ShieldCheck size={16} className="text-orange-500" />, text: "Custom branding available" },
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

              {/* Enquiry Button */}
              <div className="pt-4">
                <button
                  onClick={openModal}
                  className="w-full bg-[#0b3c5d] hover:bg-[#072c44] text-white font-bold py-5 rounded-2xl transition-all flex items-center justify-center gap-3 shadow-xl shadow-blue-900/20 active:scale-[0.98]"
                >
                  <MessageCircle size={20} />
                  Enquire About This Product
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <section className="mt-20">
            <h2 className="text-3xl font-serif text-slate-900 italic mb-10">
              Similar Collections
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {relatedProducts.map((rel: any) => (
                <Link key={rel.id} href={`/product/${rel.id}`} className="group">
                  <div className="bg-white rounded-3xl shadow-sm border border-slate-100 hover:shadow-xl transition-all overflow-hidden">
                    <div className="relative aspect-square overflow-hidden bg-gray-50">
                      {rel.images?.[0] || rel.image ? (
                        <img
                          src={rel.images?.[0] || rel.image}
                          alt={rel.name}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                          onError={(e) => {
                            e.currentTarget.src = "/placeholder-image.jpg";
                          }}
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center">
                          <Package className="w-8 h-8 text-gray-300" />
                        </div>
                      )}
                    </div>
                    <div className="px-4 py-3">
                      <p className="text-xs font-bold text-orange-500 mb-1">
                        {rel.categoryName}
                      </p>
                      <h4 className="text-sm font-semibold text-slate-800 line-clamp-1">
                        {rel.name}
                      </h4>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}
      </main>

      {/* Enquiry Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeModal}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-white rounded-3xl shadow-2xl"
            >
              {!isSubmitted ? (
                <>
                  <div className="sticky top-0 bg-white border-b border-slate-200 px-6 py-5 rounded-t-3xl flex items-center justify-between">
                    <div>
                      <h2 className="text-xl font-bold text-slate-900">Product Enquiry</h2>
                      <p className="text-sm text-slate-500 mt-0.5">{product.name}</p>
                    </div>
                    <button onClick={closeModal} className="p-2 hover:bg-slate-100 rounded-xl">
                      <X size={20} />
                    </button>
                  </div>

                  <div className="p-6">
                    <form onSubmit={handleSubmit} className="space-y-5">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        <div>
                          <label className="flex items-center gap-2 text-sm font-medium text-slate-700 mb-1">
                            <Users size={14} /> Full Name *
                          </label>
                          <input
                            type="text"
                            name="name"
                            required
                            value={formState.name}
                            onChange={handleInputChange}
                            className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-orange-500 outline-none"
                            placeholder="John Doe"
                          />
                        </div>

                        <div>
                          <label className="flex items-center gap-2 text-sm font-medium text-slate-700 mb-1">
                            <Mail size={14} /> Email *
                          </label>
                          <input
                            type="email"
                            name="email"
                            required
                            value={formState.email}
                            onChange={handleInputChange}
                            className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-orange-500 outline-none"
                            placeholder="john@company.com"
                          />
                        </div>

                        <div>
                          <label className="flex items-center gap-2 text-sm font-medium text-slate-700 mb-1">
                            <Phone size={14} /> Phone *
                          </label>
                          <input
                            type="tel"
                            name="phone"
                            required
                            value={formState.phone}
                            onChange={handleInputChange}
                            className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-orange-500 outline-none"
                            placeholder="+91 98765 43210"
                          />
                        </div>

                        <div>
                          <label className="flex items-center gap-2 text-sm font-medium text-slate-700 mb-1">
                            <Building2 size={14} /> Company
                          </label>
                          <input
                            type="text"
                            name="company"
                            value={formState.company}
                            onChange={handleInputChange}
                            className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-orange-500 outline-none"
                            placeholder="Company name (optional)"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="flex items-center gap-2 text-sm font-medium text-slate-700 mb-1">
                          <Hash size={14} /> Quantity
                        </label>
                        <input
                          type="text"
                          name="quantity"
                          value={formState.quantity}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-orange-500 outline-none"
                          placeholder="e.g., 100 units"
                        />
                      </div>

                      <div>
                        <label className="flex items-center gap-2 text-sm font-medium text-slate-700 mb-1">
                          <MessageCircle size={14} /> Message
                        </label>
                        <textarea
                          name="message"
                          value={formState.message}
                          onChange={handleInputChange}
                          rows={4}
                          className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-orange-500 outline-none resize-none"
                          placeholder="Any specific requirements..."
                        />
                      </div>

                      {error && (
                        <div className="p-3 bg-red-50 border border-red-200 rounded-xl text-red-600 text-sm">
                          {error}
                        </div>
                      )}

                      <div className="flex gap-3">
                        <button
                          type="button"
                          onClick={closeModal}
                          className="flex-1 px-6 py-3.5 border-2 border-slate-200 text-slate-600 font-semibold rounded-xl hover:bg-slate-50"
                        >
                          Cancel
                        </button>
                        <button
                          type="submit"
                          disabled={isSubmitting}
                          className="flex-[2] bg-orange-500 hover:bg-orange-600 disabled:bg-orange-300 text-white font-bold py-3.5 rounded-xl flex items-center justify-center gap-2"
                        >
                          {isSubmitting ? (
                            <>
                              <Loader2 size={18} className="animate-spin" />
                              Sending...
                            </>
                          ) : (
                            <>
                              <Send size={18} />
                              Send Enquiry
                            </>
                          )}
                        </button>
                      </div>
                    </form>
                  </div>
                </>
              ) : (
                <div className="p-12 text-center">
                  <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle2 size={40} className="text-green-500" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">Enquiry Sent!</h3>
                  <p className="text-slate-600">Thank you for your interest in {product.name}.</p>
                  <p className="text-sm text-slate-500 mt-2">Our team will contact you within 24 hours.</p>
                </div>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}