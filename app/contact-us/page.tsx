'use client';

import React, { useState } from 'react';
import { 
  MapPin, 
  Phone, 
  Mail, 
  ChevronLeft, 
  ChevronRight, 
  Home,
  Send
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

// Product data for the carousel
const products = [
  {
    id: 1,
    name: 'crystal globe 60mm with Engraving',
    image: 'https://www.bigimpex.com/wp-content/uploads/2024/07/15-3.png',
  },
  {
    id: 2,
    name: 'Crystal Cube 5 x 5 x 5 cm with Metallic Printing',
    image: 'https://www.bigimpex.com/wp-content/uploads/2024/09/9.png',
  },
  {
    id: 3,
    name: 'Crystal Cube 4 x 4 x 6 cm with Engraving',
    image: 'https://www.bigimpex.com/wp-content/uploads/2024/09/8.png',
  },
  {
    id: 4,
    name: 'Crystal Cube 5 x 5 x 8 cm with Engraving',
    image: 'https://www.bigimpex.com/wp-content/uploads/2024/09/7.png',
  },
  {
    id: 5,
    name: 'Crystal Cube 5 x 5 x 8 cm with Metallic Printing',
    image: 'https://www.bigimpex.com/wp-content/uploads/2025/10/WhatsApp-Image-2025-08-20-at-14.27.48_f1984dac-1199x1536.jpg',
  },
];

export default function ContactUs() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    query: ''
  });

  // Show 4 cards at a time on desktop, calculate max slides
  const visibleCards = 4;
  const maxSlide = products.length - visibleCards;

  const nextSlide = () => {
    setCurrentSlide((prev) => Math.min(prev + 1, maxSlide));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => Math.max(prev - 1, 0));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Message sent successfully!');
  };

  return (
    <div className="min-h-screen bg-white font-sans">
      
      {/* Navigation - Simplified Header */}
     

  {/* Hero Section - Aligned at Bottom */}
<section className="bg-[#1a1a1a] text-white relative min-h-[200px] xl:min-h-[280px] flex items-end">
  <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-8 xl:pb-12">
    <h1 className="text-3xl md:text-4xl font-bold mb-2">Contact Us</h1>
    <div className="flex items-center gap-2 text-sm text-gray-400">
      <Link href="/" className="hover:text-white flex items-center gap-1">
        <Home className="w-3 h-3" /> Home
      </Link>
      <span>»</span>
      <span className="text-[#ff5757]">Contact Us</span>
    </div>
  </div>
</section>


      {/* Main Contact Section with Honeycomb Background */}
      <section className="relative py-16 overflow-hidden">
        {/* Honeycomb Background Pattern */}
        <div className="absolute inset-0 opacity-5 pointer-events-none">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="honeycomb" x="0" y="0" width="56" height="100" patternUnits="userSpaceOnUse">
                <path d="M28 66L0 50V16L28 0l28 16v34L28 66zM0 50l28 16 28-16M28 0v16M0 16l28 16 28-16" 
                      fill="none" stroke="#ff5757" strokeWidth="1"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#honeycomb)"/>
          </svg>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 items-start">
            
            {/* Left Column - Contact Info & Map */}
            <div className="space-y-8">
              {/* Address */}
              <div className="bg-white rounded-lg shadow-md p-6 border border-gray-100">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Address</h3>
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-[#ff5757] flex-shrink-0 mt-1" />
                  <p className="text-gray-600 text-sm leading-relaxed">
                    5th Floor, ABM House, Linking Rd,<br />
                    Bandra West, Mumbai,<br />
                    Maharashtra 400050
                  </p>
                </div>
              </div>

              {/* Contact Details */}
              <div className="grid sm:grid-cols-2 gap-6">
                {/* Call Us */}
                <div className="bg-white rounded-lg shadow-md p-6 border border-gray-100">
                  <h3 className="text-lg font-bold text-gray-900 mb-4">Call Us</h3>
                  <div className="space-y-3">
                    {['+91 86579 58081', '+91 86570 29709', '+91 8828552305'].map((phone, i) => (
                      <a key={i} href={`tel:${phone.replace(/\s/g, '')}`} 
                         className="flex items-center gap-2 text-gray-600 hover:text-[#ff5757] text-sm transition-colors">
                        <Phone className="w-4 h-4 text-[#ff5757]" />
                        {phone}
                      </a>
                    ))}
                  </div>
                </div>

                {/* Email Us */}
                <div className="bg-white rounded-lg shadow-md p-6 border border-gray-100">
                  <h3 className="text-lg font-bold text-gray-900 mb-4">Email Us</h3>
                  <a href="mailto:sales@bigimpex.com" 
                     className="flex items-center gap-2 text-gray-600 hover:text-[#ff5757] text-sm transition-colors">
                    <Mail className="w-4 h-4 text-[#ff5757]" />
                    sales@bigimpex.com
                  </a>
                </div>
              </div>

              {/* Map */}
              <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-100">
                <div className="relative w-full h-[300px]">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.123456789!2d72.829123!3d19.067123!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c9c5c5c5c5c5%3A0x1234567890abcdef!2sBig%20Imports%20And%20Gifts!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="BigImpex Location"
                  />
                </div>
              </div>
            </div>

            {/* Right Column - Contact Form */}
            <div className="bg-white rounded-lg shadow-lg p-8 border border-gray-100 lg:sticky lg:top-24">
              <div className="text-center mb-8">
                <span className="text-xs text-gray-500 uppercase tracking-widest">Contact Form</span>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-2">
                  Don&apos;t Hesitate to Connect Us.
                </h2>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <input
                    type="text"
                    placeholder="Your Full Name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#ff5757] focus:ring-2 focus:ring-[#ff5757]/20 outline-none transition-all text-sm"
                  />
                </div>
                
                <div>
                  <input
                    type="email"
                    placeholder="Email Address"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#ff5757] focus:ring-2 focus:ring-[#ff5757]/20 outline-none transition-all text-sm"
                  />
                </div>
                
                <div>
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#ff5757] focus:ring-2 focus:ring-[#ff5757]/20 outline-none transition-all text-sm"
                  />
                </div>
                
                <div>
                  <textarea
                    placeholder="Add Your Query"
                    required
                    rows={5}
                    value={formData.query}
                    onChange={(e) => setFormData({...formData, query: e.target.value})}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#ff5757] focus:ring-2 focus:ring-[#ff5757]/20 outline-none transition-all text-sm resize-none"
                  />
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-[#ff5757] hover:bg-[#e64c4c] text-white px-8 py-3 rounded-lg font-medium transition-colors flex items-center justify-center gap-2 shadow-md hover:shadow-lg"
                >
                  <Send className="w-4 h-4" />
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Product Carousel Section - FIXED CARD DIMENSIONS */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative">
            {/* Navigation Arrows */}
            <button
              onClick={prevSlide}
              disabled={currentSlide === 0}
              className={`absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center text-gray-800 transition-colors ${
                currentSlide === 0 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-[#ff5757] hover:text-white'
              }`}
              aria-label="Previous product"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            
            <button
              onClick={nextSlide}
              disabled={currentSlide >= maxSlide}
              className={`absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center text-gray-800 transition-colors ${
                currentSlide >= maxSlide ? 'opacity-50 cursor-not-allowed' : 'hover:bg-[#ff5757] hover:text-white'
              }`}
              aria-label="Next product"
            >
              <ChevronRight className="w-5 h-5" />
            </button>

            {/* Products Container - Fixed Width Cards */}
            <div className="overflow-hidden px-4">
              <div 
                className="flex gap-4 transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * (100 / visibleCards)}%)` }}
              >
                {products.map((product) => (
                  <div 
                    key={product.id}
                    className="w-[calc(25%-12px)] min-w-[calc(25%-12px)] flex-shrink-0"
                  >
                    {/* Fixed dimensions: height 320px total (240px image + 80px text) */}
                    <div className="bg-[#1a1a1a] rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow h-[320px] flex flex-col">
                      {/* Fixed height image container */}
                      <div className="h-[240px] relative bg-[#1a1a1a] p-4 flex items-center justify-center">
                        <Image
                          src={product.image}
                          alt={product.name}
                          fill
                          className="object-contain p-2"
                          sizes="(max-width: 768px) 50vw, 25vw"
                          unoptimized
                        />
                      </div>
                      {/* Fixed height text container */}
                      <div className="h-[80px] p-4 bg-[#e5e7eb] flex items-center justify-center">
                        <h3 className="text-xs font-medium text-gray-800 text-center leading-tight line-clamp-3">
                          {product.name}
                        </h3>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Pagination Dots */}
            <div className="flex justify-center gap-2 mt-8">
              {Array.from({ length: products.length - visibleCards + 1 }).map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentSlide(idx)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    idx === currentSlide ? 'bg-gray-800 w-4' : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Floating Contact Button */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
        <button className="w-12 h-12 rounded-full bg-green-500 text-white shadow-lg flex items-center justify-center hover:scale-110 transition-transform">
          <span className="text-xl">💬</span>
        </button>
      </div>
    </div>
  );
}
