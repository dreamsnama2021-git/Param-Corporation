'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Home, Plus, Minus, ChevronLeft, ChevronRight } from 'lucide-react';

const products = [
  {
    id: 1,
    name: 'Airsafe',
    image: 'https://www.bigimpex.com/wp-content/uploads/2024/02/Airsafe.jpg',
    category: 'Health & Safety'
  },
  {
    id: 2,
    name: 'MagniGlow Lamp With Adjustable Magnifying Glass',
    image: 'https://www.bigimpex.com/wp-content/uploads/2024/04/MagnoLite-Portable-Light-1.jpg',
    category: 'Desk Accessories'
  },
  {
    id: 3,
    name: 'MagnoLite Portable Light',
    image: 'https://www.bigimpex.com/wp-content/uploads/2024/04/MagnoLite-Portable-Light.jpg',
    category: 'Lighting'
  },
  {
    id: 4,
    name: 'Glow Hub Portable USB Cable With 4 USB Port Hubs & LED Light',
    image: 'https://www.bigimpex.com/wp-content/uploads/2024/04/Glow-Hub-Portable-USB-Cable.jpg',
    category: 'Tech Accessories'
  },
  {
    id: 5,
    name: 'LED Moonlight Torch',
    image: 'https://www.bigimpex.com/wp-content/uploads/2024/04/LED-Moonlight-Torch-4.jpg',
    category: 'Lighting'
  },
  {
    id: 6,
    name: 'E-Sense Pro Wall Mount Auto Touch Free Liquid Dispenser',
    image: 'https://www.bigimpex.com/wp-content/uploads/2024/04/E-Sense-Pro.jpg',
    category: 'Hygiene'
  },
  {
    id: 7,
    name: 'Electroclean Self-Making Disinfectant Generator',
    image: 'https://www.bigimpex.com/wp-content/uploads/2024/04/Electroclean.jpg',
    category: 'Health & Safety'
  },
  {
    id: 8,
    name: 'KleenAir Smart UV Air Purifier',
    image: 'https://www.bigimpex.com/wp-content/uploads/2024/04/KleenAir.jpg',
    category: 'Health & Safety'
  }
];

const clients = [
  { name: 'Cipla', logo: 'https://www.bigimpex.com/wp-content/uploads/2024/clients/cipla.png' },
  { name: 'Emcure', logo: 'https://www.bigimpex.com/wp-content/uploads/2024/clients/emcure.png' },
  { name: 'Ipca', logo: 'https://www.bigimpex.com/wp-content/uploads/2024/clients/ipca.png' },
  { name: 'Abbott', logo: 'https://www.bigimpex.com/wp-content/uploads/2024/clients/abbott.png' },
  { name: 'Alembic', logo: 'https://www.bigimpex.com/wp-content/uploads/2024/clients/alembic.png' },
  { name: 'Aristo', logo: 'https://www.bigimpex.com/wp-content/uploads/2024/clients/aristo.png' },
  { name: 'Sun Pharma', logo: 'https://www.bigimpex.com/wp-content/uploads/2024/clients/sun.png' },
  { name: 'Torrent', logo: 'https://www.bigimpex.com/wp-content/uploads/2024/clients/torrent.png' }
];

const faqs = [
  {
    question: 'What are pharmaceutical gifts used for?',
    answer: 'Pharmaceutical gifts are used for doctor engagement, brand promotion, patient education, and building relationships with healthcare professionals. They include medical models, educational materials, and practical items for clinics.'
  },
  {
    question: 'How can pharmaceutical gifts help in brand promotion?',
    answer: 'Pharma gifts create lasting impressions with healthcare professionals. Customized items with your brand logo ensure daily visibility in medical settings, helping build trust and recognition among doctors and medical staff.'
  },
  {
    question: 'What are the best pharmaceutical gift ideas?',
    answer: 'Popular choices include anatomical models, diagnostic tools, desk organizers, medical lighting, hygiene products, and educational materials. We offer customized solutions tailored to specific medical specialties.'
  }
];

export default function PharmaceuticalGiftsPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % (clients.length - 3));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + (clients.length - 3)) % (clients.length - 3));
  };

  return (
    <div className="min-h-screen bg-white font-sans">
      
      {/* Hero Section */}
      <section className="bg-[#1a1a1a] text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Corporate Gifting for Pharma Companies</h1>
          <div className="flex items-center justify-center gap-2 text-sm text-gray-400">
            <Link href="/" className="hover:text-white flex items-center gap-1">
              <Home className="w-3 h-3" /> Home
            </Link>
            <span>»</span>
            <span className="text-[#ff5757]">Pharmaceutical Gifts</span>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div key={product.id} className="group cursor-pointer bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100">
              <div className="relative aspect-square bg-gray-50 overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  unoptimized
                />
              </div>
              <div className="p-4 bg-[#e5e7eb] h-[80px] flex items-center">
                <h3 className="text-sm font-medium text-gray-800 line-clamp-2 leading-tight">
                  {product.name}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Our Clients Section */}
      <section className="py-12 bg-white border-t border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-center text-gray-900 mb-8">Our Clients</h2>
          
          <div className="relative">
            <div className="flex items-center justify-center gap-8 overflow-hidden">
              {clients.slice(currentSlide, currentSlide + 4).map((client, index) => (
                <div 
                  key={index} 
                  className="flex-shrink-0 w-48 h-24 bg-white border border-gray-200 rounded-lg flex items-center justify-center p-4 hover:shadow-md transition-shadow"
                >
                  <Image
                    src={client.logo}
                    alt={client.name}
                    width={120}
                    height={60}
                    className="object-contain max-h-12"
                    unoptimized
                  />
                </div>
              ))}
            </div>
            
            {/* Pagination Dots */}
            <div className="flex justify-center gap-2 mt-6">
              {Array.from({ length: clients.length - 3 }).map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentSlide(idx)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    idx === currentSlide ? 'bg-gray-800 w-4' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-12 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="prose prose-gray max-w-none text-sm text-gray-600 leading-relaxed space-y-6">
          
          <p>
            Discover premium corporate gifts for pharma companies, designed to enhance brand visibility and strengthen professional relationships.
          </p>
          
          <p>
            Strengthen business relationships with our high-quality <strong>corporate pharmaceutical gifts</strong>. Our products are perfect for pharma companies, medical professionals, and healthcare events. Shop the best pharma promotional gifts!
          </p>

          <h2 className="text-lg font-bold text-gray-800 mt-8">Get the Best Pharma Promotional Items</h2>
          <ul className="space-y-2 list-disc pl-5">
            <li><strong>Corporate Gifting Solution:</strong> Choose from a wide range of medical promotional items that fit your brand.</li>
            <li><strong>Premium Medical Gifts:</strong> Select high-quality wellness and custom gifts.</li>
            <li><strong>Top-Rated Pharmaceutical Gifts:</strong> Select meaningful gifts to create lasting bonds.</li>
            <li><strong>Personalized Gifts:</strong> Create memorable moments with personalized gifts that show you care.</li>
          </ul>

          <h2 className="text-lg font-bold text-gray-800 mt-8">Why Pick BigImpex for Pharmaceutical Gifts?</h2>
          <ul className="space-y-2 list-disc pl-5">
            <li><strong>Instant Order Updates:</strong> Easily track your order with our live tracking service.</li>
            <li><strong>Express Delivery:</strong> We ensure gifts arrive on time.</li>
            <li><strong>Dedicated Account Manager:</strong> Enjoy personalized support from a dedicated manager.</li>
            <li><strong>Review Your Product:</strong> Review your custom gifts before making the bulk order.</li>
          </ul>

          <h3 className="text-base font-bold text-gray-800 mt-8">Sectors We Partner With</h3>
          <ul className="space-y-1 list-disc pl-5">
            <li>Oil and Energy</li>
            <li>Liquor</li>
            <li>Food and Beverages</li>
            <li>IT</li>
          </ul>

          <div className="mt-8">
            <h3 className="text-base font-bold text-gray-900 mb-2">Enquire Now</h3>
            <p>
              Searching for the best corporate pharmaceutical gifts for your company? Contact us today to find the best-customized gifts and leave a lasting impression.
            </p>
          </div>

        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <h2 className="text-2xl font-bold text-center text-gray-900 mb-8">FAQ&apos;S</h2>
        <div className="space-y-2">
          {faqs.map((faq, idx) => (
            <div key={idx} className="border-b border-gray-200">
              <button
                onClick={() => toggleFaq(idx)}
                className="w-full flex items-center gap-3 py-4 px-4 bg-gray-50 hover:bg-gray-100 transition-colors text-left"
              >
                <span className="text-gray-500">
                  {openFaq === idx ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                </span>
                <span className="text-sm font-medium text-gray-800">{faq.question}</span>
              </button>
              {openFaq === idx && (
                <div className="px-4 pb-4 pt-2 bg-gray-50">
                  <p className="text-sm text-gray-600 leading-relaxed pl-7">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}
