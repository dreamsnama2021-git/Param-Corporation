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
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

// ─── Contact US PAGE BANNER ─────────────────────────────────────────────────────────────
const PageBanner = () => (
  <div className="relative w-full h-[25vh] md:h-[30vh] lg:h-[45vh] xl:h-[50vh] overflow-hidden">
    {/* Mobile image */}
    <Image
      src="/banner/contact us.png"
      alt="About Us Banner - Mobile"
      fill
      className="object-fill object-center block md:hidden"
      priority
      unoptimized
    />

    {/* Tablet image */}
    <Image
      src="/banner/contact us.png"
      alt="About Us Banner - Tablet"
      fill
      className="object-fill object-center hidden md:block lg:hidden"
      priority
      unoptimized
    />

    {/* Desktop image */}
    <Image
      src="/banner/contact us.png"
      alt="About Us Banner - Desktop"
      fill
      className="object-fill object-center hidden lg:block"
      priority
      unoptimized
    />
  </div>
);

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
    <div className="min-h-screen font-[family-name:var(--font-body)] bg-[#f8fafc00]">
      {/* Hero Section */}
<PageBanner />

      {/* Main Contact Section */}
      <section className="relative py-16 md:py-20 overflow-hidden">
        {/* Ambient background */}
        <div className="absolute inset-0">
          <div className="absolute top-32 right-0 w-96 h-96 bg-[#0093cb]/5 rounded-full blur-3xl" />
          <div className="absolute bottom-32 left-0 w-80 h-80 bg-[#00a65d]/5 rounded-full blur-3xl" />
        </div>
        
        <div className="relative max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Centered Header Section */}
          <div className="text-center max-w-3xl mx-auto mb-12 lg:mb-16">
            <div className="flex items-center justify-center gap-3 mb-4">
              <svg width="32" height="8" viewBox="0 0 32 8" fill="none" className="text-[#0093cb]">
                <path d="M2 6C4 2 8 1 10 3C12 5 14 7 18 4C22 1 26 5 30 3" 
                      stroke="currentColor" strokeWidth="2" strokeLinecap="round" fill="none" />
              </svg>
              <span className="text-[#0093cb] font-medium tracking-wider text-xs uppercase font-[family-name:var(--font-display)]">
                Get In Touch
              </span>
              <svg width="32" height="8" viewBox="0 0 32 8" fill="none" className="text-[#0093cb] rotate-180">
                <path d="M2 6C4 2 8 1 10 3C12 5 14 7 18 4C22 1 26 5 30 3" 
                      stroke="currentColor" strokeWidth="2" strokeLinecap="round" fill="none" />
              </svg>
            </div>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-[family-name:var(--font-display)] font-bold text-[#0f172a] mb-4">
              Let&apos;s Work{" "}
              <span className="relative inline-block">
                Together
                <svg className="absolute -bottom-2 left-0 w-full" height="6" viewBox="0 0 100 6" preserveAspectRatio="none">
                  <path d="M0,3 Q25,0 50,3 Q75,6 100,3" stroke="#00a65d" strokeWidth="2" fill="none" strokeLinecap="round" />
                </svg>
              </span>
            </h2>
            
            <p className="text-[#6b7280] leading-relaxed text-base md:text-lg font-[family-name:var(--font-body)] font-light">
              From patient education tools to doctor engagement materials, our team collaborates closely with healthcare brands, 
              pharma companies, and medical professionals to deliver meaningful solutions.
            </p>
          </div>

          {/* Two Column Layout with equal height alignment */}
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-stretch">
            
            {/* Left Column - Address, Contact Cards & Map */}
            <div className="flex flex-col h-full space-y-4">
              {/* Address Card */}
              <div className="group relative bg-white rounded-2xl p-5 border border-[#eef2f7] hover:border-[#0093cb]/30 transition-all duration-500 hover:-translate-y-1 shadow-sm hover:shadow-lg">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-[#0093cb]/10 to-[#00a65d]/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <MapPin className="w-4 h-4 text-[#0093cb]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#0f172a] mb-1 text-sm font-[family-name:var(--font-display)]">Visit Our Office</h3>
                    <p className="text-[#6b7280] text-xs leading-relaxed font-[family-name:var(--font-body)] font-light">
                      101, KetkiPada Rd, near Timber Green Apartments,<br /> Diamond Industrial Estate,
                       Dahisar East,<br />
                      Mumbai, Maharashtra 400068
                    </p>
                    <div className="mt-2 h-0.5 w-0 bg-gradient-to-r from-[#0093cb] to-[#00a65d] group-hover:w-10 transition-all duration-500" />
                  </div>
                </div>
              </div>

              {/* Contact Cards Grid - Reduced height */}
              <div className="grid sm:grid-cols-2 gap-3">
                {/* Phone Card */}
                <div className="group relative bg-white rounded-2xl p-3.5 border border-[#eef2f7] hover:border-[#0093cb]/30 transition-all duration-500 hover:-translate-y-1 shadow-sm hover:shadow-lg">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-gradient-to-br from-[#0093cb]/10 to-[#00a65d]/10 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform flex-shrink-0">
                      <Phone className="w-3.5 h-3.5 text-[#0093cb]" />
                    </div>
                    <div>
                      <h3 className="font-bold text-[#0f172a] text-xs font-[family-name:var(--font-display)]">Call Us</h3>
                      <a
                        href="tel:+919820149950"
                        className="flex items-center gap-1.5 text-[#6b7280] hover:text-[#0093cb] text-xs transition-colors group/link font-[family-name:var(--font-body)]"
                      >
                        <span className="w-1 h-1 rounded-full bg-[#8bde7a] group-hover/link:scale-150 transition-transform" />
                        +91 98201 49950
                      </a>
                    </div>
                  </div>
                </div>

                {/* Email Card */}
                <div className="group relative bg-white rounded-2xl p-3.5 border border-[#eef2f7] hover:border-[#0093cb]/30 transition-all duration-500 hover:-translate-y-1 shadow-sm hover:shadow-lg">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-gradient-to-br from-[#0093cb]/10 to-[#00a65d]/10 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform flex-shrink-0">
                      <Mail className="w-3.5 h-3.5 text-[#0093cb]" />
                    </div>
                    <div>
                      <h3 className="font-bold text-[#0f172a] text-xs font-[family-name:var(--font-display)]">Email Us</h3>
                      <a
                        href="mailto:sanchay@paramcorp.in"
                        className="flex items-center gap-1.5 text-[#6b7280] hover:text-[#0093cb] text-xs transition-colors group/link font-[family-name:var(--font-body)]"
                      >
                        <span className="w-1 h-1 rounded-full bg-[#8bde7a] group-hover/link:scale-150 transition-transform flex-shrink-0" />
                        info@paramcorp.com
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Hours Card - Reduced height */}
              <div className="group relative bg-white rounded-2xl p-3.5 border border-[#eef2f7] hover:border-[#0093cb]/30 transition-all duration-500 hover:-translate-y-1 shadow-sm hover:shadow-lg">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-gradient-to-br from-[#0093cb]/10 to-[#00a65d]/10 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform flex-shrink-0">
                    <Clock className="w-3.5 h-3.5 text-[#0093cb]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#0f172a] text-xs font-[family-name:var(--font-display)]">Business Hours</h3>
                    <p className="text-[#6b7280] text-xs font-[family-name:var(--font-body)] font-light">Mon - Sat: 9:00 AM - 6:00 PM</p>
                  </div>
                </div>
              </div>

              {/* Map - Reduced height */}
              <div className="group relative bg-white rounded-2xl overflow-hidden border border-[#eef2f7] hover:border-[#0093cb]/30 transition-all duration-500 shadow-sm hover:shadow-lg">
                <div className="relative w-full h-[200px]">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3766.6107628816285!2d72.87117107580924!3d19.255788246302636!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b0ed193f84d9%3A0x39987f619ffac374!2s101%2C%20KetkiPada%20Rd%2C%20Diamond%20Industrial%20Estate%2C%20Dahisar%20East%2C%20Mumbai%2C%20Maharashtra%20400068!5e0!3m2!1sen!2sin!4v1776512798656!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: 0, position: 'absolute', top: 0, left: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Office Location"
                  />
                </div>
                <div className="absolute top-0 right-0 w-12 h-12 overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute -top-6 -right-6 w-12 h-12 bg-gradient-to-br from-[#0093cb]/40 to-[#00a65d]/40 rotate-45" />
                </div>
              </div>
            </div>

            {/* Right Column - Contact Form (Full height) */}
            <div className="h-full">
              <div className="relative bg-white rounded-2xl p-6 md:p-8 border border-[#eef2f7] shadow-lg hover:shadow-xl transition-all duration-500 h-full flex flex-col">
                {/* Decorative elements */}
                <div className="absolute -top-3 -right-3 w-8 h-8 bg-[#8bde7a] rounded-full opacity-20 blur-sm" />
                <div className="absolute -bottom-2 -left-2 w-6 h-6 bg-[#0093cb] rounded-full opacity-20 blur-sm" />
                
                {/* Form Header */}
                <div className="text-center mb-5">
                  <div className="inline-flex items-center gap-2 bg-[#f8fafc] rounded-full px-3 py-1 border border-[#eef2f7] mb-3">
                    <Sparkles className="w-3 h-3 text-[#0093cb]" />
                    <span className="text-[10px] font-medium text-[#6b7280] uppercase tracking-wider font-[family-name:var(--font-display)]">
                      Send a Message
                    </span>
                  </div>
                  <h3 className="text-xl md:text-2xl font-[family-name:var(--font-display)] font-bold text-[#0f172a]">
                    Don&apos;t hesitate to{" "}
                    <span className="relative inline-block">
                      reach out
                      <svg className="absolute -bottom-1 left-0 w-full" height="3" viewBox="0 0 100 3" preserveAspectRatio="none">
                        <path d="M0,1.5 Q25,0 50,1.5 Q75,3 100,1.5" stroke="#00a65d" strokeWidth="1.5" fill="none" strokeLinecap="round" />
                      </svg>
                    </span>
                  </h3>
                </div>

                <form onSubmit={handleSubmit} className="space-y-3 flex-1">
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="Your Full Name"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      onFocus={() => setFocusedField("name")}
                      onBlur={() => setFocusedField(null)}
                      className="w-full px-4 py-2.5 bg-[#f8fafc] rounded-xl border border-[#eef2f7] focus:border-[#0093cb] focus:bg-white outline-none transition-all text-sm placeholder:text-[#6b7280] font-[family-name:var(--font-body)]"
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
                      className="w-full px-4 py-2.5 bg-[#f8fafc] rounded-xl border border-[#eef2f7] focus:border-[#0093cb] focus:bg-white outline-none transition-all text-sm placeholder:text-[#6b7280] font-[family-name:var(--font-body)]"
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
                      className="w-full px-4 py-2.5 bg-[#f8fafc] rounded-xl border border-[#eef2f7] focus:border-[#0093cb] focus:bg-white outline-none transition-all text-sm placeholder:text-[#6b7280] font-[family-name:var(--font-body)]"
                    />
                    <div className={`absolute bottom-0 left-4 right-4 h-0.5 bg-gradient-to-r from-[#0093cb] to-[#00a65d] transition-all duration-300 ${
                      focusedField === "phone" ? "scale-x-100" : "scale-x-0"
                    }`} />
                  </div>

                  <div className="relative">
                    <textarea
                      placeholder="How can we help you?"
                      required
                      rows={3}
                      value={formData.query}
                      onChange={(e) => setFormData({ ...formData, query: e.target.value })}
                      onFocus={() => setFocusedField("query")}
                      onBlur={() => setFocusedField(null)}
                      className="w-full px-4 py-2.5 bg-[#f8fafc] rounded-xl border border-[#eef2f7] focus:border-[#0093cb] focus:bg-white outline-none transition-all text-sm placeholder:text-[#6b7280] resize-none font-[family-name:var(--font-body)]"
                    />
                    <div className={`absolute bottom-0 left-4 right-4 h-0.5 bg-gradient-to-r from-[#0093cb] to-[#00a65d] transition-all duration-300 ${
                      focusedField === "query" ? "scale-x-100" : "scale-x-0"
                    }`} />
                  </div>

                  <button
                    type="submit"
                    className="group relative w-full bg-[#0093cb] hover:bg-[#00a65d] text-white px-8 py-3 rounded-xl font-medium transition-all duration-300 flex items-center justify-center gap-2 shadow-md hover:shadow-lg overflow-hidden font-[family-name:var(--font-display)]"
                  >
                    <span className="relative z-10 flex items-center gap-2 text-sm">
                      Send Message
                      <Send className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </span>
                    <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                  </button>
                </form>

                <p className="text-center text-[10px] text-[#6b7280] mt-3 pt-1 font-[family-name:var(--font-body)] font-light">
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