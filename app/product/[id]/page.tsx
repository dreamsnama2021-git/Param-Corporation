"use client";

import React, { useState, useMemo, useEffect } from "react";
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
  Hash
} from "lucide-react";
import { allProducts, Product } from "../../data"; 

export default function ProductDetailPage() {
  const params = useParams();
  const router = useRouter();
  const id = params?.id as string;

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  // Modal & Form State
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
    quantity: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState("");

  // Block right-click and image copying
  useEffect(() => {
    // Block right-click context menu globally
    const blockContextMenu = (e: MouseEvent) => {
      e.preventDefault();
      return false;
    };

    // Block image dragging
    const blockDragStart = (e: DragEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName === 'IMG' || target.closest('img')) {
        e.preventDefault();
        return false;
      }
    };

    // Block copy, cut, and paste
    const blockCopy = (e: ClipboardEvent) => {
      e.preventDefault();
      return false;
    };

    // Block keyboard shortcuts
    const blockShortcuts = (e: KeyboardEvent) => {
      // Block Ctrl+C, Ctrl+X, Ctrl+V, Ctrl+S, F12, Ctrl+Shift+I, Ctrl+U
      if (
        (e.ctrlKey && (e.key === 'c' || e.key === 'C' || 
                       e.key === 'x' || e.key === 'X' || 
                       e.key === 'v' || e.key === 'V' || 
                       e.key === 's' || e.key === 'S')) ||
        e.key === 'F12' ||
        (e.ctrlKey && e.shiftKey && (e.key === 'I' || e.key === 'i' || e.key === 'C' || e.key === 'c')) ||
        (e.ctrlKey && e.key === 'u')
      ) {
        e.preventDefault();
        return false;
      }
    };

    // Block print screen
    const blockPrintScreen = (e: KeyboardEvent) => {
      if (e.key === 'PrintScreen') {
        e.preventDefault();
        return false;
      }
    };

    // Block selecting text
    const blockSelect = (e: Event) => {
      e.preventDefault();
      return false;
    };

    // Add all event listeners
    document.addEventListener('contextmenu', blockContextMenu);
    document.addEventListener('dragstart', blockDragStart);
    document.addEventListener('copy', blockCopy);
    document.addEventListener('cut', blockCopy);
    document.addEventListener('paste', blockCopy);
    document.addEventListener('keydown', blockShortcuts);
    document.addEventListener('keyup', blockPrintScreen);
    document.addEventListener('selectstart', blockSelect);

    // Disable image context menu on all images
    const images = document.querySelectorAll('img');
    images.forEach(img => {
      img.addEventListener('contextmenu', blockContextMenu);
      img.setAttribute('draggable', 'false');
    });

    // Cleanup
    return () => {
      document.removeEventListener('contextmenu', blockContextMenu);
      document.removeEventListener('dragstart', blockDragStart);
      document.removeEventListener('copy', blockCopy);
      document.removeEventListener('cut', blockCopy);
      document.removeEventListener('paste', blockCopy);
      document.removeEventListener('keydown', blockShortcuts);
      document.removeEventListener('keyup', blockPrintScreen);
      document.removeEventListener('selectstart', blockSelect);
      
      images.forEach(img => {
        img.removeEventListener('contextmenu', blockContextMenu);
      });
    };
  }, []);

  // 1. Find Product
  const product = useMemo(() => {
    return allProducts.find((p) => p.id.toString() === id) as any;
  }, [id]);

  // 2. Filter Related Products
  const relatedProducts = useMemo(() => {
    if (!product) return [];
    return allProducts
      .filter((p) => p.category === product.category && p.id.toString() !== id)
      .slice(0, 4);
  }, [product, id]);

  // Open Modal
  const openModal = () => {
    setIsModalOpen(true);
    setIsSubmitted(false);
    setError("");
  };

  // Close Modal
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
      quantity: ""
    });
  };

  // Form Handler
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
  };

  // Submit Handler
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
          productName: product.name,
          productCategory: product.categoryName
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to send enquiry");
      }

      setIsSubmitted(true);
      
      // Auto close after 3 seconds
      setTimeout(() => {
        closeModal();
      }, 3000);
    } catch (err) {
      setError("Failed to send enquiry. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  // Close modal on overlay click
  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  // Close modal on Escape key
  React.useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        closeModal();
      }
    };

    if (isModalOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isModalOpen]);

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center">
        <p className="text-gray-500 mb-4">Product not found</p>
        <Link href="/categories/all" className="text-orange-500 font-medium underline">Return to Shop</Link>
      </div>
    );
  }

  // FIXED IMAGE LOGIC
  const images: string[] = (product.images && Array.isArray(product.images) && product.images.length > 0)
    ? product.images
    : [product.image].filter(Boolean);

  // Custom image component with protection
  const ProtectedImage = ({ src, alt, fill = false, className = "" }: any) => {
    return (
      <Image
        src={src}
        alt={alt}
        fill={fill}
        className={className}
        unoptimized
        draggable={false}
        onContextMenu={(e) => e.preventDefault()}
        onDragStart={(e) => e.preventDefault()}
      />
    );
  };

  return (
    <>
      <div className="min-h-screen bg-[#fcfdfe] pb-12" onContextMenu={(e) => e.preventDefault()}>
        {/* --- Header Navigation --- */}
        <div className="max-w-[1500px] mx-auto px-6 pt-16">
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

        <main className="max-w-[1500px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* --- LEFT: Image Gallery --- */}
            <div className="lg:col-span-7 space-y-4">
              <div className="relative rounded-[2rem] overflow-hidden bg-white shadow-xl shadow-slate-200/50 group border border-slate-100">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentImageIndex}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="relative w-full h-[500px]"
                  >
                    <ProtectedImage
                      src={images[currentImageIndex] || "/placeholder.png"}
                      alt={product.name}
                      fill={true}
                      className="object-contain p-8"
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
                {images.map((img: string, idx: number) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentImageIndex(idx)}
                    className={`relative w-16 h-16 rounded-xl overflow-hidden border-2 transition-all flex-shrink-0 ${
                      currentImageIndex === idx ? "border-orange-500 ring-4 ring-orange-50" : "border-transparent opacity-60 hover:opacity-100"
                    }`}
                  >
                    <ProtectedImage src={img} alt="Thumb" fill={true} className="object-cover" />
                  </button>
                ))}
              </div>
            </div>

            {/* --- RIGHT: Details & Content --- */}
            <div className="lg:col-span-5 space-y-8">
              <div className="space-y-4">
                <span className="px-3 py-2 bg-orange-100 text-orange-700 text-xs font-bold rounded-full uppercase tracking-tighter">
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
                    {product.description || "Premium quality product designed for corporate excellence."}
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

          {/* --- BOTTOM: Related Products --- */}
          {relatedProducts.length > 0 && (
            <section className="mt-18">
              <h2 className="text-3xl font-serif text-slate-900 italic mb-10">Similar Collections</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {relatedProducts.map((rel: any) => (
                  <Link key={rel.id} href={`/product/${rel.id}`} className="group">
                    <div className="bg-white rounded-3xl p-3 shadow-sm border border-slate-100 hover:shadow-xl transition-all">
                      <div className="relative aspect-square rounded-2xl overflow-hidden bg-slate-50 mb-4">
                        <ProtectedImage 
                          src={rel.images?.[0] || rel.image} 
                          alt={rel.name} 
                          fill={true} 
                          className="object-contain p-4 group-hover:scale-110 transition-transform duration-700" 
                        />
                      </div>
                      <div className="px-2 pb-2">
                        <p className="text-xs font-bold text-orange-500 mb-1">{rel.categoryName}</p>
                        <h4 className="text-sm font-semibold text-slate-800 line-clamp-1">{rel.name}</h4>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </section>
          )}
        </main>
      </div>

      {/* --- Enquiry Modal --- */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={handleOverlayClick}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            />

            {/* Modal */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-white rounded-3xl shadow-2xl"
            >
              {!isSubmitted ? (
                <>
                  {/* Modal Header */}
                  <div className="sticky top-0 z-10 bg-white/95 backdrop-blur-sm border-b border-slate-200 px-6 py-5 rounded-t-3xl flex items-center justify-between">
                    <div>
                      <h2 className="text-xl font-bold text-slate-900">Product Enquiry</h2>
                      <p className="text-sm text-slate-500 mt-0.5">{product.name}</p>
                    </div>
                    <button
                      onClick={closeModal}
                      className="p-2 hover:bg-slate-100 rounded-xl transition-colors"
                    >
                      <X size={20} className="text-slate-500" />
                    </button>
                  </div>

                  {/* Modal Body - Form */}
                  <div className="p-6">
                    <form onSubmit={handleSubmit} className="space-y-5">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        {/* Name Field */}
                        <div className="space-y-1.5">
                          <label className="flex items-center gap-2 text-sm font-medium text-slate-700">
                            <span className="flex items-center justify-center w-5 h-5 rounded-full bg-orange-100 text-orange-500">
                              <Users size={12} />
                            </span>
                            Full Name *
                          </label>
                          <input
                            type="text"
                            name="name"
                            required
                            value={formState.name}
                            onChange={handleInputChange}
                            className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-orange-500 focus:ring-4 focus:ring-orange-50 outline-none transition-all text-sm"
                            placeholder="John Doe"
                          />
                        </div>

                        {/* Email Field */}
                        <div className="space-y-1.5">
                          <label className="flex items-center gap-2 text-sm font-medium text-slate-700">
                            <span className="flex items-center justify-center w-5 h-5 rounded-full bg-orange-100 text-orange-500">
                              <Mail size={12} />
                            </span>
                            Email Address *
                          </label>
                          <input
                            type="email"
                            name="email"
                            required
                            value={formState.email}
                            onChange={handleInputChange}
                            className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-orange-500 focus:ring-4 focus:ring-orange-50 outline-none transition-all text-sm"
                            placeholder="john@company.com"
                          />
                        </div>

                        {/* Phone Field */}
                        <div className="space-y-1.5">
                          <label className="flex items-center gap-2 text-sm font-medium text-slate-700">
                            <span className="flex items-center justify-center w-5 h-5 rounded-full bg-orange-100 text-orange-500">
                              <Phone size={12} />
                            </span>
                            Phone Number *
                          </label>
                          <input
                            type="tel"
                            name="phone"
                            required
                            value={formState.phone}
                            onChange={handleInputChange}
                            className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-orange-500 focus:ring-4 focus:ring-orange-50 outline-none transition-all text-sm"
                            placeholder="+91 98765 43210"
                          />
                        </div>

                        {/* Company Field */}
                        <div className="space-y-1.5">
                          <label className="flex items-center gap-2 text-sm font-medium text-slate-700">
                            <span className="flex items-center justify-center w-5 h-5 rounded-full bg-orange-100 text-orange-500">
                              <Building2 size={12} />
                            </span>
                            Company Name
                          </label>
                          <input
                            type="text"
                            name="company"
                            value={formState.company}
                            onChange={handleInputChange}
                            className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-orange-500 focus:ring-4 focus:ring-orange-50 outline-none transition-all text-sm"
                            placeholder="Company name (optional)"
                          />
                        </div>
                      </div>

                      {/* Quantity Field */}
                      <div className="space-y-1.5">
                        <label className="flex items-center gap-2 text-sm font-medium text-slate-700">
                          <span className="flex items-center justify-center w-5 h-5 rounded-full bg-orange-100 text-orange-500">
                            <Hash size={12} />
                          </span>
                          Quantity Required
                        </label>
                        <input
                            type="text"
                            name="quantity"
                            value={formState.quantity}
                            onChange={handleInputChange}
                            className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-orange-500 focus:ring-4 focus:ring-orange-50 outline-none transition-all text-sm"
                            placeholder="e.g., 100 units, 50 boxes"
                          />
                        </div>

                        {/* Message Field */}
                        <div className="space-y-1.5">
                          <label className="flex items-center gap-2 text-sm font-medium text-slate-700">
                            <span className="flex items-center justify-center w-5 h-5 rounded-full bg-orange-100 text-orange-500">
                              <MessageCircle size={12} />
                            </span>
                            Additional Message
                          </label>
                          <textarea
                            name="message"
                            value={formState.message}
                            onChange={handleInputChange}
                            rows={4}
                            className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-orange-500 focus:ring-4 focus:ring-orange-50 outline-none transition-all text-sm resize-none"
                            placeholder="Any specific requirements, customization needs, or questions..."
                          />
                        </div>

                        {/* Error Message */}
                        {error && (
                          <motion.div
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="p-3 bg-red-50 border border-red-200 rounded-xl text-red-600 text-sm"
                          >
                            {error}
                          </motion.div>
                        )}

                        {/* Action Buttons */}
                        <div className="flex gap-3 pt-2">
                          <button
                            type="button"
                            onClick={closeModal}
                            className="flex-1 px-6 py-3.5 border-2 border-slate-200 text-slate-600 font-semibold rounded-xl hover:bg-slate-50 transition-all"
                          >
                            Cancel
                          </button>
                          <button
                            type="submit"
                            disabled={isSubmitting}
                            className="flex-[2] bg-orange-500 hover:bg-orange-600 disabled:bg-orange-300 text-white font-bold py-3.5 rounded-xl transition-all flex items-center justify-center gap-2"
                          >
                            {isSubmitting ? (
                              <>
                                <Loader2 size={18} className="animate-spin" />
                                Sending Enquiry...
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
                  /* Success State */
                  <div className="p-12 text-center">
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring", damping: 15, stiffness: 200 }}
                    >
                      <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                        <CheckCircle2 size={40} className="text-green-500" />
                      </div>
                    </motion.div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-2">Enquiry Sent Successfully!</h3>
                    <p className="text-slate-600 mb-1">Thank you for your interest in {product.name}.</p>
                    <p className="text-sm text-slate-500">Our team will contact you within 24 hours.</p>
                    <p className="text-xs text-slate-400 mt-6">This window will close automatically...</p>
                  </div>
                )}
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </>
    );
  }