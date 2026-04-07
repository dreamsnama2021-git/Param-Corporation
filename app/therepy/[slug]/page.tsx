// app/therapy/[slug]/page.tsx
'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { Home, Plus, Minus } from 'lucide-react';
import Image from 'next/image';
import { therapies } from '../../data';

const therapyContent: Record<string, {
  intro: string;
  suitableGifts: string[];
  features: string[];
  compliance: string[];
  faqs: Array<{ question: string; answer: string }>;
}> = {
  'cardiology': {
    intro: 'Specialized corporate gifting solutions for cardiology departments and heart care professionals. Our gifts are thoughtfully curated to promote heart health awareness while maintaining professional standards.',
    suitableGifts: [
      'Heart-Healthy Snack Hampers',
      'Stress Relief Devices (Blood Pressure Monitors)',
      'Fitness Trackers with Heart Rate Monitoring',
      'Ergonomic Desk Setups for Cardiologists',
      'Medical Grade Water Bottles',
      'Wellness Journals for Patient Tracking'
    ],
    features: [
      'Health-Focused: Products that promote cardiovascular health awareness.',
      'Medical-Grade Quality: Suitable for hospital and clinic environments.',
      'Educational Value: Items that help in patient education.',
      'Professional Design: Sophisticated designs for medical professionals.'
    ],
    compliance: [
      'Hospital Approved: All items meet hospital hygiene standards.',
      'Safe Materials: Medical-grade, non-toxic materials used.',
      'Easy to Sanitize: Products that can be easily disinfected.',
      'Hypoallergenic: Safe for sensitive medical environments.'
    ],
    faqs: [
      {
        question: 'Are these gifts suitable for hospital staff?',
        answer: 'Yes, all our cardiology gifts are designed to meet hospital hygiene standards and are safe for medical environments.'
      },
      {
        question: 'Can we include heart health educational material?',
        answer: 'Yes, we can include custom brochures and cards with heart health tips along with your branding.'
      }
    ]
  },
  'dermatology': {
    intro: 'Premium gifting options for dermatology clinics and skincare professionals. From UV protection accessories to skincare-themed office supplies, find gifts that resonate with skin health professionals.',
    suitableGifts: [
      'UV Protection Accessories',
      'Skincare Product Samples',
      'Humidifiers for Office',
      'Sunscreen Hampers',
      'Dermatology Reference Books',
      'Ergonomic Magnifying Lamps'
    ],
    features: [
      'Skin-Friendly Materials: Hypoallergenic and safe products.',
      'UV Awareness: Items that promote sun protection.',
      'Clinic Appropriate: Suitable for dermatology office environments.',
      'Premium Quality: High-end products reflecting skincare standards.'
    ],
    compliance: [
      'Hypoallergenic Certified: All products tested for skin safety.',
      'Non-Irritating: Gentle materials safe for sensitive skin.',
      'Clinic Hygiene: Easy to clean and maintain.',
      'Dermatologically Tested: Products verified by skin experts.'
    ],
    faqs: [
      {
        question: 'Do you offer skincare product gifts?',
        answer: 'Yes, we offer curated hampers with premium skincare products from trusted brands, perfect for dermatology professionals.'
      }
    ]
  },
  'default': {
    intro: 'Specialized corporate gifting for medical professionals across all specialties. Our therapy-specific gifts are designed to meet the unique needs of healthcare providers while maintaining the highest standards of quality and hygiene.',
    suitableGifts: [
      'Medical-Grade Desk Accessories',
      'Wellness Monitoring Devices',
      'Ergonomic Office Solutions',
      'Educational Materials',
      'Sanitizer and Hygiene Kits',
      'Premium Medical Stationery'
    ],
    features: [
      'Medical Environment Safe: All products suitable for healthcare settings.',
      'Specialty Specific: Tailored to different medical departments.',
      'Hygienic Design: Easy to clean and disinfect.',
      'Professional Appeal: Sophisticated designs for doctors and medical staff.'
    ],
    compliance: [
      'Hospital Grade: Meet strict healthcare facility standards.',
      'Biocompatible Materials: Safe for medical environments.',
      'Sterilization Friendly: Can withstand medical cleaning protocols.',
      'Quality Certified: All products medically approved.'
    ],
    faqs: [
      {
        question: 'Are these gifts suitable for all medical specialties?',
        answer: 'Yes, we have specific collections for each specialty ensuring relevance and appropriateness.'
      },
      {
        question: 'Can you customize gifts for medical conferences?',
        answer: 'Absolutely, we specialize in conference giveaways and bulk orders for medical events.'
      }
    ]
  }
};

const therapyProducts: Record<string, Array<{id: number; name: string; image: string}>> = {
  'cardiology': [
    { id: 1, name: 'Heart Rate Monitor Watch', image: '/products/watch.jpg' },
    { id: 2, name: 'Healthy Snack Hamper', image: '/products/snacks.jpg' },
    { id: 3, name: 'Stress Relief Ball Set', image: '/products/stressball.jpg' },
    { id: 4, name: 'Fitness Tracker', image: '/products/fitness.jpg' },
  ],
  'dermatology': [
    { id: 1, name: 'UV Monitor Device', image: '/products/uv.jpg' },
    { id: 2, name: 'Skincare Hamper', image: '/products/skincare.jpg' },
    { id: 3, name: 'Desk Humidifier', image: '/products/humidifier.jpg' },
    { id: 4, name: 'Sunscreen Kit', image: '/products/sunscreen.jpg' },
  ]
};

export default function TherapyPage() {
  const params = useParams();
  const slug = params?.slug as string;
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  
  const therapy = therapies.find(t => t.slug === slug) || { name: 'Medical Speciality', slug: 'default' };
  const content = therapyContent[slug] || therapyContent['default'];
  const products = therapyProducts[slug] || therapyProducts['cardiology'] || [];

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-white font-sans">
      <section className="bg-[#1a1a1a] text-white py-8">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-2xl md:text-3xl font-bold mb-2">Gifts for {therapy.name}</h1>
          <div className="flex items-center gap-2 text-sm text-gray-400">
            <Link href="/" className="hover:text-white flex items-center gap-1">
              <Home className="w-3 h-3" /> Home
            </Link>
            <span>»</span>
            <span className="text-[var(--clr-primary)]">{therapy.name}</span>
          </div>
        </div>
      </section>

      <section className="py-12 max-w-7xl mx-auto px-4">
        <p className="text-gray-600 text-sm leading-relaxed mb-8 max-w-3xl">{content.intro}</p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {products.map((product) => (
            <div key={product.id} className="group cursor-pointer">
              <div className="bg-[#f5f5f5] rounded-t-lg overflow-hidden aspect-square relative">
                <Image src={product.image} alt={product.name} fill className="object-contain p-4" unoptimized />
              </div>
              <div className="bg-[#e5e7eb] p-4 rounded-b-lg">
                <h3 className="text-sm font-medium text-gray-800">{product.name}</h3>
              </div>
            </div>
          ))}
        </div>

        <div className="max-w-4xl">
          <h2 className="text-xl font-bold text-gray-700 mb-4">Suitable Gifts for {therapy.name}</h2>
          <ul className="space-y-2 mb-8">
            {content.suitableGifts.map((gift, idx) => (
              <li key={idx} className="flex items-start gap-2 text-sm text-gray-600">
                <span className="text-gray-900 font-semibold">•</span>
                <span>{gift}</span>
              </li>
            ))}
          </ul>

          <h2 className="text-xl font-bold text-gray-700 mb-4">Features</h2>
          <ul className="space-y-2 mb-8">
            {content.features.map((feature, idx) => (
              <li key={idx} className="flex items-start gap-2 text-sm text-gray-600">
                <span className="text-gray-900 font-semibold">•</span>
                <span>{feature}</span>
              </li>
            ))}
          </ul>

          <h3 className="text-lg font-bold text-gray-700 mb-3">Medical Compliance & Safety</h3>
          <ul className="space-y-2 mb-8">
            {content.compliance.map((item, idx) => (
              <li key={idx} className="flex items-start gap-2 text-sm text-gray-600">
                <span className="text-gray-900 font-semibold">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <div className="mb-8">
            <h3 className="text-lg font-bold text-gray-900 mb-3">Enquire Now</h3>
            <p className="text-sm text-gray-600">
              Looking for specialized corporate gifts for {therapy.name} professionals? 
              Contact us for medical-grade gifting solutions that meet healthcare standards.
            </p>
          </div>
        </div>
      </section>

      <section className="py-8 max-w-4xl mx-auto px-4 mb-12">
        <h2 className="text-2xl font-bold text-center text-gray-900 mb-6">FAQ&apos;S</h2>
        <div className="space-y-2">
          {content.faqs.map((faq, idx) => (
            <div key={idx} className="border-b border-gray-200">
              <button onClick={() => toggleFaq(idx)} className="w-full flex items-center gap-3 py-4 px-4 bg-gray-50 hover:bg-gray-100 text-left">
                {openFaq === idx ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
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
