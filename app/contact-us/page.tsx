"use client";

import React, { useState } from "react";
import {
  MapPin,
  Phone,
  Mail,
  Home,
  Send,
  Sparkles,
  Clock,
  ArrowUpRight,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

// Product data for the carousel
const products = [
  {
    id: 1,
    name: "crystal globe 60mm with Engraving",
    image: "https://www.bigimpex.com/wp-content/uploads/2024/07/15-3.png",
  },
  {
    id: 2,
    name: "Crystal Cube 5 x 5 x 5 cm with Metallic Printing",
    image: "https://www.bigimpex.com/wp-content/uploads/2024/09/9.png",
  },
  {
    id: 3,
    name: "Crystal Cube 4 x 4 x 6 cm with Engraving",
    image: "https://www.bigimpex.com/wp-content/uploads/2024/09/8.png",
  },
  {
    id: 4,
    name: "Crystal Cube 5 x 5 x 8 cm with Engraving",
    image: "https://www.bigimpex.com/wp-content/uploads/2024/09/7.png",
  },
  {
    id: 5,
    name: "Crystal Cube 5 x 5 x 8 cm with Metallic Printing",
    image:
      "https://www.bigimpex.com/wp-content/uploads/2025/10/WhatsApp-Image-2025-08-20-at-14.27.48_f1984dac-1199x1536.jpg",
  },
];

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    query: "",
  });
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Message sent successfully!");
  };

  return (
    <div className="min-h-screen font-sans bg-[#f8fafc00]">
      {/* Hero Section with hand-drawn elements */}
      <section className="relative bg-gradient-to-br from-[#0b3c5d] via-[#072c44] to-[#0093cb]/20 min-h-[240px] md:min-h-[280px] flex items-end overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-10">
          <svg width="100%" height="100%">
            <pattern id="hero-pattern" width="60" height="60" patternUnits="userSpaceOnUse">
              <circle cx="30" cy="30" r="1.5" fill="white" />
            </pattern>
            <rect width="100%" height="100%" fill="url(#hero-pattern)" />
          </svg>
        </div>
        
        {/* Decorative blobs */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#0093cb]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-[#00a65d]/10 rounded-full blur-3xl" />
        
        <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-8 md:pb-12">
          {/* Hand-drawn squiggle */}
          <svg width="48" height="8" viewBox="0 0 48 8" fill="none" className="text-[#8bde7a] mb-4">
            <path d="M2 6C4 2 8 1 10 3C12 5 14 7 18 4C22 1 26 5 30 3C34 1 38 4 42 3C44 2 46 5 46 5" 
                  stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" fill="none" />
          </svg>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif italic text-white mb-3">
            Let&apos;s <span className="relative inline-block">
              Connect
              <svg className="absolute -bottom-2 left-0 w-full" height="6" viewBox="0 0 100 6" preserveAspectRatio="none">
                <path d="M0,4 Q25,0 50,4 Q75,8 100,4" stroke="#8bde7a" strokeWidth="2" fill="none" strokeLinecap="round" />
              </svg>
            </span>
          </h1>
          
          <div className="flex items-center gap-2 text-sm">
            <Link href="/" className="text-white/60 hover:text-white flex items-center gap-1.5 transition-colors group">
              <Home className="w-3.5 h-3.5" /> 
              <span>Home</span>
            </Link>
            <span className="text-white/40">/</span>
            <span className="text-[#8bde7a] font-medium">Contact Us</span>
          </div>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="relative py-16 md:py-20 overflow-hidden">
        {/* Ambient background */}
        <div className="absolute inset-0">
          <div className="absolute top-32 right-0 w-96 h-96 bg-[#0093cb]/5 rounded-full blur-3xl" />
          <div className="absolute bottom-32 left-0 w-80 h-80 bg-[#00a65d]/5 rounded-full blur-3xl" />
        </div>
        
        {/* Subtle grid */}
        <div className="absolute inset-0 opacity-[0.015]">
          <svg width="100%" height="100%">
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="0.5" />
            </pattern>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
            {/* Left Column - Contact Info */}
            <div className="space-y-6">
              {/* Header */}
              <div className="mb-8">
                <div className="flex items-center gap-3 mb-3">
                  <svg width="32" height="8" viewBox="0 0 32 8" fill="none" className="text-[#0093cb]">
                    <path d="M2 6C4 2 8 1 10 3C12 5 14 7 18 4C22 1 26 5 30 3" 
                          stroke="currentColor" strokeWidth="2" strokeLinecap="round" fill="none" />
                  </svg>
                  <span className="text-[#0093cb] font-medium tracking-wider text-xs uppercase">
                    Get In Touch
                  </span>
                </div>
                <h2 className="text-3xl md:text-4xl font-serif italic text-[#0f172a] mb-3">
                  Let’s Work {" "}
                  <span className="relative inline-block">
                    Together
                    <svg className="absolute -bottom-1 left-0 w-full" height="5" viewBox="0 0 100 5" preserveAspectRatio="none">
                      <path d="M0,3 Q25,0 50,3 Q75,6 100,3" stroke="#00a65d" strokeWidth="2" fill="none" strokeLinecap="round" />
                    </svg>
                  </span>
                </h2>
                <p className="text-[#6b7280] leading-relaxed">
                From patient education tools to doctor engagement materials, our team collaborates closely with healthcare brands, pharma companies, and medical professionals to deliver meaningful solutions.
                </p>
              </div>

              {/* Address Card */}
              <div className="group relative bg-white rounded-2xl p-6 border border-[#eef2f7] hover:border-[#0093cb]/30 transition-all duration-500 hover:-translate-y-1 shadow-sm hover:shadow-lg">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#0093cb]/10 to-[#00a65d]/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <MapPin className="w-5 h-5 text-[#0093cb]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#0f172a] mb-2">Visit Our Office</h3>
                    <p className="text-[#6b7280] text-sm leading-relaxed">
                     101, KetkiPada Rd, near Timber Green Apartments,<br /> Diamond Industrial Estate,
                       Dahisar East,<br />
                      Mumbai, Maharashtra 400068
                    </p>
                    <div className="mt-3 h-0.5 w-0 bg-gradient-to-r from-[#0093cb] to-[#00a65d] group-hover:w-12 transition-all duration-500" />
                  </div>
                </div>
              </div>

              {/* Contact Cards Grid */}
              <div className="grid sm:grid-cols-2 gap-4">
                {/* Phone Card */}
                <div className="group relative bg-white rounded-2xl p-6 border border-[#eef2f7] hover:border-[#0093cb]/30 transition-all duration-500 hover:-translate-y-1 shadow-sm hover:shadow-lg">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#0093cb]/10 to-[#00a65d]/10 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Phone className="w-5 h-5 text-[#0093cb]" />
                  </div>
                  <h3 className="font-bold text-[#0f172a] mb-3">Call Us</h3>
                  <div className="space-y-2">
                    {["+91 98201 49950",].map((phone, i) => (
                      <a
                        key={i}
                        href={`tel:${phone.replace(/\s/g, "")}`}
                        className="flex items-center gap-2 text-[#6b7280] hover:text-[#0093cb] text-sm transition-colors group/link"
                      >
                        <span className="w-1 h-1 rounded-full bg-[#8bde7a] group-hover/link:scale-150 transition-transform" />
                        {phone}
                      </a>
                    ))}
                  </div>
                </div>

                {/* Email & Hours Card */}
                <div className="group relative bg-white rounded-2xl p-6 border border-[#eef2f7] hover:border-[#0093cb]/30 transition-all duration-500 hover:-translate-y-1 shadow-sm hover:shadow-lg">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#0093cb]/10 to-[#00a65d]/10 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Mail className="w-5 h-5 text-[#0093cb]" />
                  </div>
                  <h3 className="font-bold text-[#0f172a] mb-3">Email Us</h3>
                  <a
                    href="mailto:sales@bigimpex.com"
                    className="flex items-center gap-2 text-[#6b7280] hover:text-[#0093cb] text-sm transition-colors mb-4 group/link"
                  >
                    <span className="w-1 h-1 rounded-full bg-[#8bde7a] group-hover/link:scale-150 transition-transform" />
                   info@paramcorporation.com
                  </a>
                  
                  <div className="pt-3 border-t border-[#eef2f7]">
                    <div className="flex items-center gap-2 text-[#6b7280] text-sm">
                      <Clock className="w-4 h-4 text-[#00a65d]" />
                      <span>Mon - Sat: 9:00 AM - 6:00 PM</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Map */}
              <div className="group relative bg-white rounded-2xl overflow-hidden border border-[#eef2f7] hover:border-[#0093cb]/30 transition-all duration-500 shadow-sm hover:shadow-lg">
                <div className="relative w-full h-[280px]">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3766.6107628816285!2d72.87117107580924!3d19.255788246302636!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b0ed193f84d9%3A0x39987f619ffac374!2s101%2C%20KetkiPada%20Rd%2C%20Diamond%20Industrial%20Estate%2C%20Dahisar%20East%2C%20Mumbai%2C%20Maharashtra%20400068!5e0!3m2!1sen!2sin!4v1776512798656!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="BigImpex Location"
                  />
                </div>
                {/* Corner accent */}
                <div className="absolute top-0 right-0 w-12 h-12 overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute -top-6 -right-6 w-12 h-12 bg-gradient-to-br from-[#0093cb]/40 to-[#00a65d]/40 rotate-45" />
                </div>
              </div>
            </div>

            {/* Right Column - Contact Form */}
            <div className="lg:sticky lg:top-24">
              <div className="relative bg-white rounded-2xl p-8 border border-[#eef2f7] shadow-lg hover:shadow-xl transition-all duration-500">
                {/* Decorative elements */}
                <div className="absolute -top-3 -right-3 w-8 h-8 bg-[#8bde7a] rounded-full opacity-20 blur-sm" />
                <div className="absolute -bottom-2 -left-2 w-6 h-6 bg-[#0093cb] rounded-full opacity-20 blur-sm" />
                
                {/* Form Header */}
                <div className="text-center mb-8">
                  <div className="inline-flex items-center gap-2 bg-[#f8fafc] rounded-full px-4 py-1.5 border border-[#eef2f7] mb-4">
                    <Sparkles className="w-3.5 h-3.5 text-[#0093cb]" />
                    <span className="text-xs font-medium text-[#6b7280] uppercase tracking-wider">
                      Send a Message
                    </span>
                  </div>
                  <h3 className="text-2xl font-serif italic text-[#0f172a]">
                    Don&apos;t hesitate to{" "}
                    <span className="relative inline-block">
                      reach out
                      <svg className="absolute -bottom-1 left-0 w-full" height="4" viewBox="0 0 100 4" preserveAspectRatio="none">
                        <path d="M0,2 Q25,0 50,2 Q75,4 100,2" stroke="#00a65d" strokeWidth="1.5" fill="none" strokeLinecap="round" />
                      </svg>
                    </span>
                  </h3>
                </div>

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="Your Full Name"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      onFocus={() => setFocusedField("name")}
                      onBlur={() => setFocusedField(null)}
                      className="w-full px-4 py-3.5 bg-[#f8fafc] rounded-xl border border-[#eef2f7] focus:border-[#0093cb] focus:bg-white outline-none transition-all text-sm placeholder:text-[#6b7280]"
                    />
                    <div className={`absolute bottom-0 left-4 right-4 h-0.5 bg-gradient-to-r from-[#0093cb] to-[#00a65d] transition-all duration-300 ${
                      focusedField === "name" ? "scale-x-100" : "scale-x-0"
                    }`} />
                  </div>

                  <div className="relative">
                    <input
                      type="email"
                      placeholder="Email Address"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      onFocus={() => setFocusedField("email")}
                      onBlur={() => setFocusedField(null)}
                      className="w-full px-4 py-3.5 bg-[#f8fafc] rounded-xl border border-[#eef2f7] focus:border-[#0093cb] focus:bg-white outline-none transition-all text-sm placeholder:text-[#6b7280]"
                    />
                    <div className={`absolute bottom-0 left-4 right-4 h-0.5 bg-gradient-to-r from-[#0093cb] to-[#00a65d] transition-all duration-300 ${
                      focusedField === "email" ? "scale-x-100" : "scale-x-0"
                    }`} />
                  </div>

                  <div className="relative">
                    <input
                      type="tel"
                      placeholder="Phone Number"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      onFocus={() => setFocusedField("phone")}
                      onBlur={() => setFocusedField(null)}
                      className="w-full px-4 py-3.5 bg-[#f8fafc] rounded-xl border border-[#eef2f7] focus:border-[#0093cb] focus:bg-white outline-none transition-all text-sm placeholder:text-[#6b7280]"
                    />
                    <div className={`absolute bottom-0 left-4 right-4 h-0.5 bg-gradient-to-r from-[#0093cb] to-[#00a65d] transition-all duration-300 ${
                      focusedField === "phone" ? "scale-x-100" : "scale-x-0"
                    }`} />
                  </div>

                  <div className="relative">
                    <textarea
                      placeholder="How can we help you?"
                      required
                      rows={5}
                      value={formData.query}
                      onChange={(e) => setFormData({ ...formData, query: e.target.value })}
                      onFocus={() => setFocusedField("query")}
                      onBlur={() => setFocusedField(null)}
                      className="w-full px-4 py-3.5 bg-[#f8fafc] rounded-xl border border-[#eef2f7] focus:border-[#0093cb] focus:bg-white outline-none transition-all text-sm placeholder:text-[#6b7280] resize-none"
                    />
                    <div className={`absolute bottom-0 left-4 right-4 h-0.5 bg-gradient-to-r from-[#0093cb] to-[#00a65d] transition-all duration-300 ${
                      focusedField === "query" ? "scale-x-100" : "scale-x-0"
                    }`} />
                  </div>

                  <button
                    type="submit"
                    className="group relative w-full bg-[#0093cb]  hover:bg-[#00a65d]  text-white px-8 py-4 rounded-xl font-medium transition-all duration-300 flex items-center justify-center gap-2 shadow-md hover:shadow-lg overflow-hidden"
                  >
                    <span className="relative z-10 flex items-center gap-2">
                      Send Message
                      <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </span>
                    {/* Button shine effect */}
                    <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                  </button>
                </form>

                {/* Response time note */}
                <p className="text-center text-xs text-[#6b7280] mt-5">
                  We typically respond within 24 hours
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}