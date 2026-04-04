// app/price/[slug]/page.tsx
'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { Home, Plus, Minus } from 'lucide-react';
import Image from 'next/image';
import { priceRanges } from '../../data';

const priceContent: Record<string, {
  intro: string;
  features: string[];
  benefits: string[];
  idealFor: string[];
  faqs: Array<{ question: string; answer: string }>;
}> = {
  'under-100': {
    intro: 'Discover budget-friendly corporate gifts under ₹100 that don\'t compromise on quality. Perfect for large-scale employee appreciation programs, promotional events, and bulk gifting requirements.',
    features: [
      'Budget-Friendly: Quality gifts at economical prices for mass distribution.',
      'Bulk Orders: Special discounts available for orders of 100+ units.',
      'Quick Customization: Fast logo printing and branding options.',
      'Wide Variety: Choose from stationery, drinkware, tech accessories, and more.'
    ],
    benefits: [
      'Cost-Effective: Maximize your gifting budget without compromising quality.',
      'Volume Discounts: Automatic price breaks at 50, 100, and 500 units.',
      'Fast Delivery: Express shipping available for urgent requirements.',
      'Quality Assured: All products undergo strict quality checks despite low prices.'
    ],
    idealFor: ['Employee Welcome Kits', 'Promotional Giveaways', 'Trade Show Events', 'School & College Events'],
    faqs: [
      {
        question: 'What types of gifts are available under ₹100?',
        answer: 'We offer pens, keychains, desk accessories, basic drinkware, notebooks, tote bags, and tech accessories like USB drives and mobile stands.'
      },
      {
        question: 'Is customization included in the price?',
        answer: 'Basic customization like single-color logo printing is often included. Multi-color or premium branding may incur additional charges.'
      },
      {
        question: 'What is the minimum order quantity?',
        answer: 'Minimum order quantity is typically 25-50 units for products in this price range.'
      }
    ]
  },
  'under-500': {
    intro: 'Explore our mid-range corporate gifts under ₹500, offering the perfect balance of quality and affordability. Ideal for employee recognition, client appreciation, and festival gifting.',
    features: [
      'Premium Quality: Better materials and finish compared to budget range.',
      'Versatile Options: Electronics, apparel, gourmet hampers, and office accessories.',
      'Elegant Packaging: Standard gift packaging included.',
      'Brand Visibility: Ample space for prominent logo placement.'
    ],
    benefits: [
      'Best Value: Optimal price-to-quality ratio for corporate gifting.',
      'Customization Options: Multiple branding techniques available.',
      'Fast Turnaround: 3-5 days for customized orders.',
      'Bulk Discounts: Attractive pricing for orders above 50 units.'
    ],
    idealFor: ['Employee Birthdays', 'Work Anniversaries', 'Festival Gifts', 'Client Meetings'],
    faqs: [
      {
        question: 'What makes the under ₹500 range different?',
        answer: 'This range offers superior build quality, premium materials, and better packaging compared to budget options, making them suitable for important occasions.'
      },
      {
        question: 'Can I get samples before ordering?',
        answer: 'Yes, we provide samples at nominal cost which is adjusted against your final order.'
      }
    ]
  },
  'default': {
    intro: 'Discover corporate gifts that match your budget. From economical options to premium selections, we offer quality gifting solutions for every price point.',
    features: [
      'Flexible Pricing: Options available across all budget ranges.',
      'Quality Assurance: Strict quality checks regardless of price point.',
      'Customization Available: Branding options for all products.',
      'Volume Discounts: Better prices for larger quantities.'
    ],
    benefits: [
      'Budget Flexibility: Find gifts that match your financial plan.',
      'No Hidden Costs: Transparent pricing with GST included.',
      'Price Match: We match competitors on identical products.',
      'Flexible Payment: Net-30 terms available for approved businesses.'
    ],
    idealFor: ['Corporate Events', 'Employee Recognition', 'Client Gifting', 'Promotional Campaigns'],
    faqs: [
      {
        question: 'Do you offer bulk discounts?',
        answer: 'Yes, we offer tiered pricing with significant discounts for bulk orders starting from 50 units.'
      }
    ]
  }
};

const priceProducts: Record<string, Array<{id: number; name: string; image: string}>> = {
  'under-100': [
    { id: 1, name: 'Custom Pen Set', image: '/products/pen-set.jpg' },
    { id: 2, name: 'Keychain Bottle Opener', image: '/products/keychain.jpg' },
    { id: 3, name: 'Sticky Note Holder', image: '/products/sticky-note.jpg' },
    { id: 4, name: 'Basic Tote Bag', image: '/products/tote.jpg' },
  ],
  'under-500': [
    { id: 1, name: 'Insulated Water Bottle', image: '/products/bottle.jpg' },
    { id: 2, name: 'Wireless Mouse', image: '/products/mouse.jpg' },
    { id: 3, name: 'Executive Diary', image: '/products/diary.jpg' },
    { id: 4, name: 'Desk Organizer', image: '/products/organizer.jpg' },
  ],
  'under-1000': [
    { id: 1, name: 'Bluetooth Speaker', image: '/products/speaker.jpg' },
    { id: 2, name: 'Premium Backpack', image: '/products/backpack.jpg' },
    { id: 3, name: 'Digital Clock', image: '/products/clock.jpg' },
    { id: 4, name: 'Gift Hamper', image: '/products/hamper.jpg' },
  ]
};

export default function PricePage() {
  const params = useParams();
  const slug = params?.slug as string;
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  
  const priceRange = priceRanges.find(p => p.slug === slug) || { name: 'Corporate Gifts', slug: 'default' };
  const content = priceContent[slug] || priceContent['default'];
  const products = priceProducts[slug] || priceProducts['under-500'] || [];

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-white font-sans">
      <section className="bg-[#1a1a1a] text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-2xl md:text-3xl font-bold mb-2">{priceRange.name}</h1>
          <div className="flex items-center gap-2 text-sm text-gray-400">
            <Link href="/" className="hover:text-white flex items-center gap-1">
              <Home className="w-3 h-3" /> Home
            </Link>
            <span>»</span>
            <span className="text-[#ff5757]">{priceRange.name.replace('Corporate Gifts Under ', 'Under ')}</span>
          </div>
        </div>
      </section>

      <section className="py-12 max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
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
      </section>

      <section className="py-8 max-w-4xl mx-auto px-4">
        <p className="text-gray-600 text-sm leading-relaxed mb-6">{content.intro}</p>
        
        <h2 className="text-xl font-bold text-gray-700 mb-4">Features & Options</h2>
        <ul className="space-y-2 mb-8">
          {content.features.map((feature, idx) => (
            <li key={idx} className="flex items-start gap-2 text-sm text-gray-600">
              <span className="text-gray-900 font-semibold">•</span>
              <span>{feature}</span>
            </li>
          ))}
        </ul>

        <h2 className="text-xl font-bold text-gray-700 mb-4">Why Choose This Range?</h2>
        <ul className="space-y-2 mb-8">
          {content.benefits.map((benefit, idx) => (
            <li key={idx} className="flex items-start gap-2 text-sm text-gray-600">
              <span className="text-gray-900 font-semibold">•</span>
              <span>{benefit}</span>
            </li>
          ))}
        </ul>

        <h3 className="text-lg font-bold text-gray-700 mb-3">Ideal For</h3>
        <ul className="space-y-1 mb-8">
          {content.idealFor.map((item, idx) => (
            <li key={idx} className="text-sm text-gray-600 flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-gray-400 rounded-full"></span>
              {item}
            </li>
          ))}
        </ul>

        <div className="mb-8">
          <h3 className="text-lg font-bold text-gray-900 mb-3">Enquire Now</h3>
          <p className="text-sm text-gray-600">Get the best corporate gifts within your budget. Contact us for bulk pricing and customization options.</p>
        </div>
      </section>

      <section className="py-8 max-w-4xl mx-auto px-4 mb-12">
        <h2 className="text-2xl font-bold text-center text-gray-900 mb-6">FAQ&apos;S</h2>
        <div className="space-y-2">
          {content.faqs.map((faq, idx) => (
            <div key={idx} className="border-b border-gray-200">
              <button onClick={() => toggleFaq(idx)} className="w-full flex items-center justify-between py-4 px-4 bg-gray-50 hover:bg-gray-100 text-left">
                <div className="flex items-center gap-3">
                  {openFaq === idx ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  <span className="text-sm font-medium text-gray-800">{faq.question}</span>
                </div>
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
