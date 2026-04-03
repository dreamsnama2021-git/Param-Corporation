'use client';

import React from 'react';
import { Phone, Mail, MapPin, ChevronRight } from 'lucide-react';

// ─── Data ────────────────────────────────────────────────────────────────────
const CATEGORY_LINKS = [
  'Employee Gifts',
  'Office Accessories',
  'Household Gifts',
  'Health & Hygiene',
  'Appreciation Gifts',
];

const SUPPORT_LINKS = [
  'About Us',
  'Contact Us',
  'Careers',
  'Privacy Policy',
  'Terms and Conditions',
  'Blogs',
];

const BRANDED_LINKS = [
  'Crafted By Big',
  'Self Gard',
  'Moss & Adams',
  'Hidrate Spark',
  'Grob',
  'Astonish',
];

const POPULAR_SEARCHES = {
  therapy: ['Dermatology', 'Nephrology', 'Nutrition', 'Cardiology', 'Pulmonology', 'Hepatology', 'Ophthalmology', 'Gastroenterology', 'Urology'],
  price: ['Gifts Under ₹100', 'Gifts Under ₹250', 'Gifts Under ₹500', 'Gifts Under ₹1000', 'Gifts Under ₹2000'],
  category: [
    'Employee Gifts', 'Office Accessories', 'Household Gifts', 'Gadgets and Electronic Gifts', 
    'Appreciation Gifts', 'Celebration Gifts', 'Premium Gifts', 'Health & Hygiene', 
    'Drinkware', 'Gift Sets', 'Gifts for MRs'
  ],
  occasion: [
    'Diwali Gifts', 'Holi Gifts', 'New Year Gifts', 'World Health Day Gifts', 
    'World Asthma Day Gifts', "Mother's Day Gifts", "Doctor's Day Gifts", "Children's Day Gifts",
    'World Diabetes Day Gifts', 'World Cancer Day Gifts', 'World Heart Day Gifts'
  ],
};

// ─── Social Icon Components ───────────────────────────────────────────────────
const SocialIcon = ({ children, color }: { children: React.ReactNode; color: string }) => (
  <a 
    href="#" 
    className={`w-8 h-8 rounded-full flex items-center justify-center text-white text-xs font-bold ${color} hover:opacity-80 transition-opacity`}
  >
    {children}
  </a>
);

export default function Footer() {
  return (
    <footer className="bg-[#2a2a2a] text-gray-300 pt-12 pb-6">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* ─── Main Footer Grid ─────────────────────────────────────────────── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
          
          {/* Column 1: About Us */}
          <div>
            <h3 className="text-white text-lg font-medium mb-4 pb-2 border-b-2 border-red-500 inline-block">
              About Us
            </h3>
            <p className="text-sm leading-relaxed mb-4 text-gray-400">
              Big Impex is a top supplier of corporate gifts in Mumbai and across India, offering customized corporate gifting solutions for every category, industry, and occasion.
            </p>
            
            <div className="space-y-2 text-sm">
              <a href="tel:+918657958081" className="flex items-center gap-2 hover:text-red-400 transition-colors">
                <Phone size={14} className="text-red-500" />
                <span>+91 86579 58081</span>
              </a>
              <a href="mailto:sales@bigimpex.com" className="flex items-center gap-2 hover:text-red-400 transition-colors">
                <Mail size={14} className="text-red-500" />
                <span>sales@bigimpex.com</span>
              </a>
              <div className="flex items-start gap-2">
                <MapPin size={14} className="text-red-500 mt-1 flex-shrink-0" />
                <span className="text-gray-400">5th Floor, ABM House, Linking Rd, Bandra West, Mumbai, Maharashtra 400050</span>
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex gap-2 mt-4">
              <SocialIcon color="bg-[#3b5998]">f</SocialIcon>
              <SocialIcon color="bg-[#ff0000]">▶</SocialIcon>
              <SocialIcon color="bg-[#0077b5]">in</SocialIcon>
              <SocialIcon color="bg-gradient-to-br from-yellow-400 via-red-500 to-purple-600">📷</SocialIcon>
              <SocialIcon color="bg-black border border-gray-600">𝕏</SocialIcon>
              <SocialIcon color="bg-[#bd081c]">P</SocialIcon>
            </div>
          </div>

          {/* Column 2: By Category */}
          <div>
            <h3 className="text-white text-lg font-medium mb-4 pb-2 border-b-2 border-red-500 inline-block">
              By Category
            </h3>
            <ul className="space-y-2">
              {CATEGORY_LINKS.map((item) => (
                <li key={item}>
                  <a href="#" className="flex items-center gap-2 text-sm hover:text-red-400 transition-colors group">
                    <ChevronRight size={12} className="text-red-500 group-hover:translate-x-1 transition-transform" />
                    <span className="group-hover:text-white">{item}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Support & Help */}
          <div>
            <h3 className="text-white text-lg font-medium mb-4 pb-2 border-b-2 border-red-500 inline-block">
              Support & Help
            </h3>
            <ul className="space-y-2">
              {SUPPORT_LINKS.map((item) => (
                <li key={item}>
                  <a href="#" className="flex items-center gap-2 text-sm hover:text-red-400 transition-colors group">
                    <ChevronRight size={12} className="text-red-500 group-hover:translate-x-1 transition-transform" />
                    <span className="group-hover:text-white">{item}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Branded Corporate Gifts */}
          <div>
            <h3 className="text-white text-lg font-medium mb-4 pb-2 border-b-2 border-red-500 inline-block">
              Branded Corporate Gifts
            </h3>
            <ul className="space-y-2">
              {BRANDED_LINKS.map((item) => (
                <li key={item}>
                  <a href="#" className="flex items-center gap-2 text-sm hover:text-red-400 transition-colors group">
                    <ChevronRight size={12} className="text-red-500 group-hover:translate-x-1 transition-transform" />
                    <span className="group-hover:text-white">{item}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* ─── Popular Search Sections ──────────────────────────────────────── */}
        <div className="border-t border-red-600/30 pt-6 space-y-4">
          <h3 className="text-white text-lg font-medium mb-4">Popular Search</h3>
          
          {/* By Therapy */}
          <div className="pb-4 border-b border-red-600/50">
            <h4 className="text-white text-sm font-medium mb-2">By Therapy</h4>
            <div className="flex flex-wrap gap-x-2 gap-y-1 text-xs">
              {POPULAR_SEARCHES.therapy.map((item, idx) => (
                <span key={item}>
                  <a href="#" className="hover:text-red-400 transition-colors">{item}</a>
                  {idx < POPULAR_SEARCHES.therapy.length - 1 && <span className="mx-1 text-gray-500">|</span>}
                </span>
              ))}
            </div>
          </div>

          {/* By Price */}
          <div className="pb-4 border-b border-red-600/50">
            <h4 className="text-white text-sm font-medium mb-2">By Price</h4>
            <div className="flex flex-wrap gap-x-2 gap-y-1 text-xs">
              {POPULAR_SEARCHES.price.map((item, idx) => (
                <span key={item}>
                  <a href="#" className="hover:text-red-400 transition-colors">{item}</a>
                  {idx < POPULAR_SEARCHES.price.length - 1 && <span className="mx-1 text-gray-500">|</span>}
                </span>
              ))}
            </div>
          </div>

          {/* By Category */}
          <div className="pb-4 border-b border-red-600/50">
            <h4 className="text-white text-sm font-medium mb-2">By Category</h4>
            <div className="flex flex-wrap gap-x-2 gap-y-1 text-xs">
              {POPULAR_SEARCHES.category.map((item, idx) => (
                <span key={item}>
                  <a href="#" className="hover:text-red-400 transition-colors">{item}</a>
                  {idx < POPULAR_SEARCHES.category.length - 1 && <span className="mx-1 text-gray-500">|</span>}
                </span>
              ))}
            </div>
          </div>

          {/* By Occasion */}
          <div className="pb-4">
            <h4 className="text-white text-sm font-medium mb-2">By Occasion</h4>
            <div className="flex flex-wrap gap-x-2 gap-y-1 text-xs">
              {POPULAR_SEARCHES.occasion.map((item, idx) => (
                <span key={item}>
                  <a href="#" className="hover:text-red-400 transition-colors">{item}</a>
                  {idx < POPULAR_SEARCHES.occasion.length - 1 && <span className="mx-1 text-gray-500">|</span>}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* ─── Bottom Bar ───────────────────────────────────────────────────── */}
        <div className="mt-8 pt-4 text-center border-t border-gray-700">
          <p className="text-sm text-gray-400">
            Developed by{' '}
            <a href="#" className="text-red-500 hover:text-red-400 transition-colors">
              Eiosys Pvt Ltd
            </a>
          </p>
        </div>

      </div>

      {/* Global Styles for Scrollbar if needed */}
      <style jsx global>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </footer>
  );
}
