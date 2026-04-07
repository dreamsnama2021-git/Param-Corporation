// app/occasion/[slug]/page.tsx
'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { Home, Plus, Minus } from 'lucide-react';
import Image from 'next/image';
import { occasions } from '../../data';

const occasionContent: Record<string, {
  intro: string;
  giftIdeas: string[];
  features: string[];
  customization: string[];
  faqs: Array<{ question: string; answer: string }>;
}> = {
  'diwali': {
    intro: 'Light up your corporate relationships with our exclusive Diwali gifting collection. From traditional sweets to modern tech gadgets, find the perfect way to celebrate the festival of lights with your employees and clients.',
    giftIdeas: [
      'Traditional Diya Sets with Custom Branding',
      'Gourmet Sweet Hampers',
      'Decorative Corporate Gift Boxes',
      'Eco-Friendly Plant Gifts',
      'Premium Dry Fruit Hampers',
      'Festive Home Decor Items'
    ],
    features: [
      'Festival-Themed Packaging: Beautiful Diwali-themed gift wrapping included.',
      'Bulk Discounts: Special pricing for large corporate orders.',
      'Timely Delivery: Guaranteed delivery before the festival.',
      'Custom Branding: Add your company logo to all gift items.'
    ],
    customization: [
      'Custom Gift Hampers: Mix and match products to create unique hampers.',
      'Branded Diwali Cards: Personalized greeting cards with company logo.',
      'Corporate Branding: Subtle logo placement on all gift items.',
      'Festive Packaging: Traditional Indian motifs and colors.'
    ],
    faqs: [
      {
        question: 'What is the last date for Diwali gift orders?',
        answer: 'We recommend placing orders at least 15 days before Diwali to ensure timely delivery. Express options available for last-minute orders.'
      },
      {
        question: 'Do you offer eco-friendly Diwali gifts?',
        answer: 'Yes, we have a special range of eco-friendly gifts including plantables, seed diyas, and sustainable hampers.'
      }
    ]
  },
  'new-year': {
    intro: 'Start the year right with thoughtful corporate gifts that inspire and motivate. Our New Year collection features premium items perfect for client appreciation and employee motivation.',
    giftIdeas: [
      'Executive Desk Calendars',
      'Premium Planners & Diaries',
      'Motivational Wall Art',
      'Wellness Gift Boxes',
      'Tech Gadgets',
      'Gourmet Celebration Hampers'
    ],
    features: [
      'Fresh Start Theme: Motivational gifts to kickstart the year.',
      'Premium Quality: Start the year with high-end impressions.',
      'Early Bird Discounts: Book early for better pricing.',
      'Pan-India Delivery: Reach all your offices across India.'
    ],
    customization: [
      'Company Calendar Integration: Custom calendars with your brand.',
      'New Year Cards: Personalized greeting cards.',
      'Motivational Quotes: Custom engravings with inspiring messages.',
      'Brand Colors: Customize packaging in your company colors.'
    ],
    faqs: [
      {
        question: 'When should I order New Year gifts?',
        answer: 'Orders should be placed by mid-December for guaranteed New Year delivery.'
      }
    ]
  },
  'default': {
    intro: 'Celebrate every occasion with meaningful corporate gifts. Whether it\'s festivals, company milestones, or special days, we have the perfect gifting solutions.',
    giftIdeas: [
      'Customized Gift Hampers',
      'Branded Merchandise',
      'Tech Accessories',
      'Office Essentials',
      'Wellness Products'
    ],
    features: [
      'Occasion-Specific Themes: Tailored to match the celebration.',
      'Timely Delivery: Always on time for your special day.',
      'Bulk Ordering: Easy management of large orders.',
      'Quality Assurance: Premium quality for important occasions.'
    ],
    customization: [
      'Themed Packaging: Match the occasion with appropriate packaging.',
      'Personalized Messages: Custom cards and notes.',
      'Logo Integration: Branding that fits the occasion.',
      'Color Schemes: Match festive or corporate colors.'
    ],
    faqs: [
      {
        question: 'Can you handle last-minute occasion gifts?',
        answer: 'Yes, we offer express services for urgent requirements with 24-48 hour turnaround.'
      }
    ]
  }
};

const occasionProducts: Record<string, Array<{id: number; name: string; image: string}>> = {
  'diwali': [
    { id: 1, name: 'Decorative Diya Set', image: '/products/diya.jpg' },
    { id: 2, name: 'Festive Hamper Box', image: '/products/hamper.jpg' },
    { id: 3, name: 'Premium Dry Fruits', image: '/products/dryfruits.jpg' },
    { id: 4, name: 'Branded Candle Set', image: '/products/candle.jpg' },
  ],
  'new-year': [
    { id: 1, name: 'Executive Diary 2025', image: '/products/diary.jpg' },
    { id: 2, name: 'Desk Calendar', image: '/products/calendar.jpg' },
    { id: 3, name: 'Motivational Frame', image: '/products/frame.jpg' },
    { id: 4, name: 'Wellness Box', image: '/products/wellness.jpg' },
  ]
};

export default function OccasionPage() {
  const params = useParams();
  const slug = params?.slug as string;
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  
  const occasion = occasions.find(o => o.slug === slug) || { name: 'Special Occasion', slug: 'default' };
  const content = occasionContent[slug] || occasionContent['default'];
  const products = occasionProducts[slug] || occasionProducts['diwali'] || [];

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-white font-sans">
      <section className="bg-[#1a1a1a] text-white py-8">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-2xl md:text-3xl font-bold mb-2">{occasion.name} Gifts</h1>
          <div className="flex items-center gap-2 text-sm text-gray-400">
            <Link href="/" className="hover:text-white flex items-center gap-1">
              <Home className="w-3 h-3" /> Home
            </Link>
            <span>»</span>
            <span className="text-[var(--clr-primary)]">{occasion.name}</span>
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
          <h2 className="text-xl font-bold text-gray-700 mb-4">Gift Ideas for {occasion.name}</h2>
          <ul className="space-y-2 mb-8">
            {content.giftIdeas.map((idea, idx) => (
              <li key={idx} className="flex items-start gap-2 text-sm text-gray-600">
                <span className="text-gray-900 font-semibold">•</span>
                <span>{idea}</span>
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

          <h3 className="text-lg font-bold text-gray-700 mb-3">Customization Options</h3>
          <ul className="space-y-2 mb-8">
            {content.customization.map((item, idx) => (
              <li key={idx} className="flex items-start gap-2 text-sm text-gray-600">
                <span className="text-gray-900 font-semibold">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <h3 className="text-lg font-bold text-gray-900 mb-3">Enquire Now</h3>
          <p className="text-sm text-gray-600 mb-8">
            Make your {occasion.name} celebrations special with our corporate gifting solutions. Contact us for bulk orders and customization.
          </p>
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
