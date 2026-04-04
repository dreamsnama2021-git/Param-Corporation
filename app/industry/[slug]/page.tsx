'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { Home, Plus, Minus } from 'lucide-react';
import Image from 'next/image';
import { industries } from '../../data';

// Sample product data - replace with actual API/data source
const industryProducts: Record<string, Array<{
  id: number;
  name: string;
  image: string;
  category?: string;
}>> = {
  'oil-and-energy': [
    { id: 1, name: '3D Rocking Paperweight', image: 'https://www.bigimpex.com/wp-content/uploads/2024/product1.jpg', category: 'Desk Accessories' },
    { id: 2, name: 'Acrylic 3 compartment medical instrument holder', image: 'https://www.bigimpex.com/wp-content/uploads/2024/product2.jpg', category: 'Office' },
    { id: 3, name: 'Acrylic Multi Stationery Holder', image: 'https://www.bigimpex.com/wp-content/uploads/2024/product3.jpg', category: 'Stationery' },
    { id: 4, name: 'Acrylic Slip & Stationery holder', image: 'https://www.bigimpex.com/wp-content/uploads/2024/product4.jpg', category: 'Desk' },
    { id: 5, name: 'Acrylic Visiting Card holder', image: 'https://www.bigimpex.com/wp-content/uploads/2024/product5.jpg', category: 'Office' },
    { id: 6, name: 'Advertising Sign Board', image: 'https://www.bigimpex.com/wp-content/uploads/2024/product6.jpg', category: 'Display' },
    { id: 7, name: 'Advertising Slip Box', image: 'https://www.bigimpex.com/wp-content/uploads/2024/product7.jpg', category: 'Storage' },
    { id: 8, name: 'Advertising Tumbler', image: 'https://www.bigimpex.com/wp-content/uploads/2024/product8.jpg', category: 'Drinkware' },
  ],
  'pharma': [
    { id: 1, name: 'Spec-Shield Reusable Face Shield', image: 'https://www.bigimpex.com/wp-content/uploads/2024/pharma1.jpg', category: 'Safety' },
    { id: 2, name: 'Square Folding Chipad Big', image: 'https://www.bigimpex.com/wp-content/uploads/2024/pharma2.jpg', category: 'Storage' },
    { id: 3, name: 'Sticky Notepad With Pen & Clip Holder', image: 'https://www.bigimpex.com/wp-content/uploads/2024/pharma3.jpg', category: 'Stationery' },
    { id: 4, name: 'Suction Mobile Holder', image: 'https://www.bigimpex.com/wp-content/uploads/2024/pharma4.jpg', category: 'Tech' },
  ],
  'it': [
    { id: 1, name: 'Wireless Mouse', image: 'https://www.bigimpex.com/wp-content/uploads/2024/tech1.jpg', category: 'Tech' },
    { id: 2, name: 'USB Hub', image: 'https://www.bigimpex.com/wp-content/uploads/2024/tech2.jpg', category: 'Tech' },
    { id: 3, name: 'Laptop Stand', image: 'https://www.bigimpex.com/wp-content/uploads/2024/tech3.jpg', category: 'Office' },
    { id: 4, name: 'Blue Light Glasses', image: 'https://www.bigimpex.com/wp-content/uploads/2024/tech4.jpg', category: 'Wellness' },
  ],
};

// Content data for each industry
const industryContent: Record<string, {
  intro: string;
  features: string[];
  benefits: string[];
  sectors: string[];
  faqs: Array<{ question: string; answer: string }>;
}> = {
  'oil-and-energy': {
    intro: 'Show appreciation with thoughtfully curated gifts for the oil and energy industry, offering sustainable and innovative options. Corporate gifts for oil and energy industry: Enhance your corporate gifting with our curated selection. Choose from custom and personalized corporate gifts perfect for the energy sector. We offer quality solutions designed for the energy sector\'s needs.',
    features: [
      'Custom Gifts: Find custom gifts that reflect your brand in the oil and energy sector.',
      'Personalized Corporate Gifts: Personalized gifts to boost connections.',
      'Bulk Corporate Gifts: Get bulk corporate gifts that combine value and quality.',
      'Unique Gifts: Select unique corporate gifts that strengthen your professional relationships.'
    ],
    benefits: [
      'Instant Tracking Updates: Monitor your bulk order with our tracking tool.',
      'On-Time Delivery: We promise on-time delivery for all your orders.',
      'Dedicated Service: A dedicated manager is here to help you find the gifts for you.',
      'See It Before You Buy: See your custom gifts before ordering in bulk to ensure quality.'
    ],
    sectors: ['Pharma', 'Hospitality', 'Media', 'Retail'],
    faqs: [
      {
        question: 'What types of corporate gifts are ideal for the oil and energy industry?',
        answer: 'Ideal gifts include desk organizers, safety equipment, tech gadgets, and personalized stationery that reflect the professionalism and scale of the energy sector.'
      },
      {
        question: 'Can oil and energy gifts be customized with branding?',
        answer: 'Yes, we offer full customization including company logos, colors, and personalized messaging to align with your brand identity.'
      },
      {
        question: 'What are the best eco-friendly gift options for the oil and energy sector?',
        answer: 'We offer sustainable options including bamboo desk accessories, recycled material products, and solar-powered gadgets that align with environmental consciousness.'
      }
    ]
  },
  'pharma': {
    intro: 'Discover premium corporate gifting solutions tailored for the pharmaceutical industry. From medical conferences to doctor appreciation, our gifts meet industry standards.',
    features: [
      'Medical-grade Materials: Safe and certified products for healthcare professionals.',
      'Personalized Lab Coats: Custom embroidered lab coats and scrubs.',
      'Conference Essentials: Premium gifts for medical conferences and seminars.',
      'Doctor Appreciation: Thoughtful gifts for physicians and medical staff.'
    ],
    benefits: [
      'Compliance Ready: All products meet healthcare industry regulations.',
      'Sterile Packaging: Medical-grade packaging available.',
      'Bulk Discounts: Special pricing for large healthcare institutions.',
      'Quick Turnaround: Fast delivery for urgent medical events.'
    ],
    sectors: ['Hospitals', 'Clinics', 'Pharmaceutical Companies', 'Medical Colleges'],
    faqs: [
      {
        question: 'Are your gifts suitable for hospital staff?',
        answer: 'Yes, we offer hypoallergenic and medical-grade products specifically designed for healthcare environments.'
      },
      {
        question: 'Can we customize gifts with hospital logos?',
        answer: 'Absolutely, we specialize in branding gifts with medical institution logos and colors.'
      },
      {
        question: 'Do you offer gifts for medical conferences?',
        answer: 'Yes, we have special conference kits including notepads, pens, USB drives, and premium tech accessories.'
      }
    ]
  },
  'default': {
    intro: 'Show appreciation with thoughtfully curated gifts for your industry, offering sustainable and innovative options. Enhance your corporate gifting with our curated selection.',
    features: [
      'Custom Gifts: Find custom gifts that reflect your brand.',
      'Personalized Corporate Gifts: Personalized gifts to boost connections.',
      'Bulk Corporate Gifts: Get bulk corporate gifts that combine value and quality.',
      'Unique Gifts: Select unique corporate gifts that strengthen your professional relationships.'
    ],
    benefits: [
      'Instant Tracking Updates: Monitor your bulk order with our tracking tool.',
      'On-Time Delivery: We promise on-time delivery for all your orders.',
      'Dedicated Service: A dedicated manager is here to help you find the gifts for you.',
      'See It Before You Buy: See your custom gifts before ordering in bulk to ensure quality.'
    ],
    sectors: ['Pharma', 'IT', 'Manufacturing', 'Retail'],
    faqs: [
      {
        question: 'What types of corporate gifts do you offer?',
        answer: 'We offer a wide range including tech gadgets, office accessories, drinkware, apparel, and custom gift sets.'
      },
      {
        question: 'Can gifts be customized with branding?',
        answer: 'Yes, most of our products can be customized with your company logo, colors, and messaging.'
      },
      {
        question: 'What is the minimum order quantity?',
        answer: 'Minimum order quantity varies by product, typically starting at 20-50 units for customization.'
      }
    ]
  }
};

export default function IndustryPage() {
  const params = useParams();
  const slug = params?.slug as string;
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  
  const industry = industries.find(i => i.slug === slug) || { name: 'Industry', slug: 'default' };
  const products = industryProducts[slug] || industryProducts['oil-and-energy'] || [];
  const content = industryContent[slug] || industryContent['default'];

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  // Format industry name for display
  const formatIndustryName = (name: string) => {
    return name.split('-').map(word => 
      word.charAt(0).toUpperCase() + word.slice(1)
    ).join(' ');
  };

  return (
    <div className="min-h-screen bg-white font-sans">
      
      {/* Hero Section */}
      <section className="bg-[#1a1a1a] text-white py-8 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-2">
            Gifts for the {formatIndustryName(industry.slug)} Sector
          </h1>
          <div className="flex items-center gap-2 text-sm text-gray-400">
            <Link href="/" className="hover:text-white flex items-center gap-1">
              <Home className="w-3 h-3" /> Home
            </Link>
            <span>»</span>
            <span className="text-[#ff5757]">{formatIndustryName(industry.slug)}</span>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div key={product.id} className="group cursor-pointer">
              <div className="bg-[#f5f5f5] rounded-t-lg overflow-hidden aspect-square relative">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-contain p-4 group-hover:scale-105 transition-transform duration-300"
                  unoptimized
                />
              </div>
              <div className="bg-[#e5e7eb] p-4 rounded-b-lg">
                <h3 className="text-sm font-medium text-gray-800 line-clamp-2 leading-tight">
                  {product.name}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Content Section */}
      <section className="py-8 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="prose prose-gray max-w-none">
          
          {/* Intro */}
          <p className="text-gray-600 text-sm leading-relaxed mb-4">
            {content.intro}
          </p>

          {/* Main Heading */}
          <h2 className="text-xl font-bold text-gray-700 mb-4">
            Find Top Corporate Gifts for the {formatIndustryName(industry.slug)} Sector
          </h2>

          {/* Features List */}
          <ul className="space-y-2 mb-8">
            {content.features.map((feature, idx) => (
              <li key={idx} className="flex items-start gap-2 text-sm text-gray-600">
                <span className="text-gray-900 font-semibold">•</span>
                <span>{feature}</span>
              </li>
            ))}
          </ul>

          {/* Why Choose Section */}
          <h2 className="text-xl font-bold text-gray-700 mb-4">
            Why Choose BigImpex for Corporate Gifts for the {formatIndustryName(industry.slug)} Industry?
          </h2>
          <ul className="space-y-2 mb-8">
            {content.benefits.map((benefit, idx) => (
              <li key={idx} className="flex items-start gap-2 text-sm text-gray-600">
                <span className="text-gray-900 font-semibold">•</span>
                <span>{benefit}</span>
              </li>
            ))}
          </ul>

          {/* Industries We Serve */}
          <h3 className="text-lg font-bold text-gray-700 mb-3">Explore the Industries We Serve</h3>
          <ul className="space-y-1 mb-8">
            {content.sectors.map((sector, idx) => (
              <li key={idx} className="text-sm text-gray-600 flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-gray-400 rounded-full"></span>
                {sector}
              </li>
            ))}
          </ul>

          {/* Enquire Now */}
          <div className="mb-8">
            <h3 className="text-lg font-bold text-gray-900 mb-3">Enquire Now</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              Looking for the best corporate gifts for the {formatIndustryName(industry.slug)} industry? 
              Contact us today to explore our custom and personalized gifts. Make your next gifting event truly special.
            </p>
          </div>

        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-8 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-center text-gray-900 mb-6">FAQ&apos;S</h2>
        <div className="space-y-2">
          {content.faqs.map((faq, idx) => (
            <div key={idx} className="border-b border-gray-200">
              <button
                onClick={() => toggleFaq(idx)}
                className="w-full flex items-center justify-between py-4 px-4 bg-gray-50 hover:bg-gray-100 transition-colors text-left"
              >
                <div className="flex items-center gap-3">
                  <span className="text-gray-500">
                    {openFaq === idx ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </span>
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
