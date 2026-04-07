'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { ChevronRight, Plus, Minus, Home } from 'lucide-react';
import Image from 'next/image';

// Category Data Structure
const categoryData: Record<string, {
  title: string;
  subtitle: string;
  intro: string[];
  products: Array<{
    id: number;
    name: string;
    image: string;
    price?: string;
  }>;
  sections: {
    mainHeading: string;
    mainContent: string;
    features: Array<{
      title: string;
      items: string[];
    }>;
    sectors: string[];
    benefits: string[];
  };
  faqs: Array<{
    question: string;
    answer: string;
  }>;
}> = {
  'employee-gifts': {
    title: 'Customized Corporate Employee Gifts in India',
    subtitle: 'Celebrate achievements with meaningful employee gifts, featuring customized gifting solutions for every occasion.',
    intro: [
      'Big Impex, one of the top providers of customized gifts for employees in India, welcomes you to Employee Gifts – a place for combined appreciation and creativity! Whether you are looking for gifts for employees as personalized items, gifts for employees as office-wide corporate gifts, or whether you are simply searching for employee gifts that you\'ll get the best when ordering in bulk, our curated collection is the best way to show how much you appreciate your dedicated team members.',
      'From employee gifting solutions that offer handy desk accessories and eco-friendly kits to the latest tech gadgets and personalized employee gifts- we are all about memorable experiences. Our custom employee gifts and personalized employee gifts are a great way to make sure every employee feels special and appreciated.',
      'Whether you\'re ordering gifts for employees in bulk or one-off custom gifts for employees, our employee gift collection takes what is normally a simple appreciation into amazing moments of joy for every workplace. Let\'s create those incredible "wow" moments to help your team feel appreciated.'
    ],
    products: [
      { id: 1, name: 'Lazy Lounger Smart Folding Floor Cushion', image: 'https://www.bigimpex.com/wp-content/uploads/2024/product1.jpg' },
      { id: 2, name: 'Cuddles Arm Support Portable Arched Pillow', image: 'https://www.bigimpex.com/wp-content/uploads/2024/product2.jpg' },
      { id: 3, name: 'O Lock Smart Fingerprint Lock With Automatic Recognition Technology', image: 'https://www.bigimpex.com/wp-content/uploads/2024/product3.jpg' },
      { id: 4, name: 'Tempra Mini Temperature Display Coffee Mug with Handle', image: 'https://www.bigimpex.com/wp-content/uploads/2024/product4.jpg' },
      { id: 5, name: 'Uno Electronic Screen Cleaner', image: 'https://www.bigimpex.com/wp-content/uploads/2024/product5.jpg' },
      { id: 6, name: 'Uspin 3 in 1 Charging Cable with Fidget Spinner', image: 'https://www.bigimpex.com/wp-content/uploads/2024/product6.jpg' },
      { id: 7, name: 'Vacunourish Self-Vacuuming Jar', image: 'https://www.bigimpex.com/wp-content/uploads/2024/product7.jpg' },
      { id: 8, name: 'Wooden mobile stand & pen holder with led base (WS-01)', image: 'https://www.bigimpex.com/wp-content/uploads/2024/product8.jpg' },
    ],
    sections: {
      mainHeading: 'Celebrate Employee Success with Special Gifts',
      mainContent: '',
      features: [
        {
          title: 'Employee Recognition Gifts',
          items: ['Show appreciation and boost morale with unique gifts.']
        },
        {
          title: 'Custom Employee Gifts',
          items: ['Make every moment special with personalized gifts.']
        },
        {
          title: 'Affordable Employee Gifts',
          items: ['Great Value without compromising quality.']
        },
        {
          title: 'Unique Gifts',
          items: ['Thoughtful and inspiring gifts for employee recognition.']
        }
      ],
      sectors: ['Pharma', 'IT & Tech', 'Manufacturing', 'Food & Beverages'],
      benefits: [
        'Dedicated Support: Get personalized support for all your gifting needs.',
        'Live Order Tracking: Get real-time updates on your orders with easy tracking.',
        'See Before You Buy: Review your custom-made product before purchasing.',
        'Fast Delivery: Trust our express shipping for on-time delivery of all your wellness gifts.'
      ]
    },
    faqs: [
      {
        question: 'What are good employee gifts?',
        answer: 'Good employee gifts include personalized items, tech gadgets, desk accessories, wellness kits, and custom apparel that show genuine appreciation for their hard work.'
      },
      {
        question: 'What are some useful gifts for employees?',
        answer: 'Useful gifts include ergonomic office accessories, premium drinkware, tech organizers, fitness trackers, and personalized stationery that enhance their daily work experience.'
      },
      {
        question: 'Can I buy gifts for staff in bulk?',
        answer: 'Yes, BigImpex specializes in bulk corporate gifting with customization options, volume discounts, and dedicated account management for large orders.'
      },
      {
        question: 'What are some unique gift ideas for employees on work anniversaries?',
        answer: 'Unique anniversary gifts include engraved trophies, personalized desk organizers, premium tech gadgets, custom gift hampers, and experiences like wellness subscriptions.'
      }
    ]
  },
  'office-accessories': {
    title: 'Premium Office Accessories for Corporate Gifting',
    subtitle: 'Enhance workplace productivity with our curated collection of premium office accessories.',
    intro: [
      'Transform any workspace into a hub of productivity and style with BigImpex\'s premium office accessories. From elegant desk organizers to cutting-edge tech gadgets, our collection is designed to impress.',
      'Whether you\'re looking for executive gifts or team-wide office upgrades, our customizable office accessories make the perfect statement of appreciation and professionalism.',
      'Our range includes everything from ergonomic solutions to aesthetic desk enhancements, all available with corporate branding and bulk ordering options.'
    ],
    products: [
      { id: 1, name: 'Ergonomic Laptop Stand with Cooling Fan', image: 'https://www.bigimpex.com/wp-content/uploads/2024/office1.jpg' },
      { id: 2, name: 'Premium Leather Desk Organizer', image: 'https://www.bigimpex.com/wp-content/uploads/2024/office2.jpg' },
      { id: 3, name: 'Wireless Charging Mouse Pad', image: 'https://www.bigimpex.com/wp-content/uploads/2024/office3.jpg' },
      { id: 4, name: 'Executive Pen Set with Case', image: 'https://www.bigimpex.com/wp-content/uploads/2024/office4.jpg' },
    ],
    sections: {
      mainHeading: 'Why Office Accessories Make Perfect Corporate Gifts',
      mainContent: '',
      features: [
        {
          title: 'Practical & Useful',
          items: ['Items that are used daily, keeping your brand visible.']
        },
        {
          title: 'Premium Quality',
          items: ['Durable materials that reflect your company standards.']
        },
        {
          title: 'Customizable',
          items: ['Logo engraving and branding options available.']
        },
        {
          title: 'Universal Appeal',
          items: ['Suitable for all industries and job roles.']
        }
      ],
      sectors: ['Corporate Offices', 'Co-working Spaces', 'Educational Institutes', 'Government Sectors'],
      benefits: [
        'Brand Visibility: Your logo on daily use items ensures constant brand recall.',
        'Productivity Boost: Ergonomic designs help improve workplace efficiency.',
        'Wide Range: From basic essentials to premium executive gifts.',
        'Quick Turnaround: Fast customization and delivery for urgent requirements.'
      ]
    },
    faqs: [
      {
        question: 'What are the best office accessories for gifting?',
        answer: 'Popular choices include wireless chargers, desk organizers, premium pens, laptop stands, and ergonomic accessories that combine utility with style.'
      },
      {
        question: 'Can office accessories be customized with company logo?',
        answer: 'Absolutely! Most of our office accessories offer customization options including laser engraving, screen printing, and embossing for company logos.'
      }
    ]
  }
};

const categories = [
  { name: 'Employee Gifts', slug: 'employee-gifts' },
  { name: 'Office Accessories', slug: 'office-accessories' },
  { name: 'Household Gifts', slug: 'household-gifts' },
  { name: 'Gadgets and Electronic Gifts', slug: 'gadgets-electronic' },
  { name: 'Appreciation Gifts', slug: 'appreciation-gifts' },
  { name: 'Celebration Gifts', slug: 'celebration-gifts' },
  { name: 'Festive Gifts', slug: 'festive-gifts' },
  { name: 'Eco Friendly Gifts', slug: 'eco-friendly-gifts' },
  { name: 'Premium Gifts', slug: 'premium-gifts' },
  { name: 'Health and Hygiene', slug: 'health-hygiene' },
  { name: 'Drinkware', slug: 'drinkware' },
  { name: 'Gift Sets', slug: 'gift-sets' },
  { name: 'MR Gifts', slug: 'mr-gifts' },
];

export default function CategoryPage() {
  const params = useParams();
  const slug = params?.slug as string;
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [showAllContent, setShowAllContent] = useState(false);

  const data = categoryData[slug] || categoryData['employee-gifts'];

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-white font-sans">
      
      {/* Hero Section */}
      <section className="bg-[#1a1a1a] text-white py-8 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-2xl md:text-3xl font-bold text-center mb-2">{data.title}</h1>
          <div className="flex items-center justify-center gap-2 text-sm text-gray-400">
            <Link href="/" className="hover:text-white flex items-center gap-1">
              <Home className="w-3 h-3" /> Home
            </Link>
            <span>»</span>
            <span className="text-[var(--clr-primary)] capitalize">{slug.replace(/-/g, ' ')}</span>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          
          {/* Main Content */}
          <div className="flex-1">
            
            {/* Intro Text */}
            <div className="mb-8 text-gray-600 text-sm leading-relaxed space-y-4">
              {data.intro.map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </div>

            {/* Products Grid */}
            <div className="mb-12">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {data.products.map((product) => (
                  <div key={product.id} className="group cursor-pointer">
                    <div className="bg-[#1a1a1a] rounded-t-lg overflow-hidden aspect-square relative">
                      <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                        unoptimized
                      />
                    </div>
                    <div className="bg-[#e5e7eb] p-3 rounded-b-lg h-[60px] flex items-center">
                      <h3 className="text-xs font-medium text-gray-800 line-clamp-2 leading-tight">
                        {product.name}
                      </h3>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Main Heading */}
            <h2 className="text-xl font-bold text-gray-700 mb-4">{data.sections.mainHeading}</h2>
            
            {/* Features List */}
            <div className="mb-8">
              <ul className="space-y-3">
                {data.sections.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-gray-900 font-semibold text-sm">{feature.title}:</span>
                    <span className="text-gray-600 text-sm">{feature.items[0]}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Benefits Section */}
            <h2 className="text-xl font-bold text-gray-700 mb-4">Benefits of Choosing Big Impex for {slug.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}</h2>
            <ul className="space-y-2 mb-8">
              {data.sections.benefits.map((benefit, idx) => (
                <li key={idx} className="flex items-start gap-2 text-sm text-gray-600">
                  <span className="text-gray-900">•</span>
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>

            {/* Sectors */}
            <h2 className="text-xl font-bold text-gray-700 mb-4">Top Sectors We Work with and provide {slug.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())} to</h2>
            <ul className="space-y-2 mb-8">
              {data.sections.sectors.map((sector, idx) => (
                <li key={idx} className="text-sm text-gray-600 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-gray-400 rounded-full"></span>
                  {sector}
                </li>
              ))}
            </ul>

            {/* Enquire Now Section */}
            <div className="mb-8">
              <h3 className="text-lg font-bold text-gray-900 mb-3">Enquire Now</h3>
              <p className="text-sm text-gray-600 mb-4">
                Celebrate employee achievements with motivational and thoughtful gifts. Contact us today and explore our range of {slug.replace(/-/g, ' ')} and make every occasion memorable!
              </p>
            </div>

            {/* Why Gifts Matter */}
            <h2 className="text-xl font-bold text-gray-700 mb-4">Why {slug.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())} Matter</h2>
            <div className={`text-sm text-gray-600 leading-relaxed mb-6 ${!showAllContent ? 'line-clamp-3' : ''}`}>
              <p className="mb-4">
                Memorizing your team by way of significant gifts can lift morale, construct allegiance as well as support a virtuous workplace culture. Whether this is marking a special occasion, work anniversary or company event, corporate gifts for employees can be a great way to show your appreciation and build long-lasting relationships throughout your business.
              </p>
              <p>
                We have a wide selection of {slug.replace(/-/g, ' ')} ideas at Big Impex aimed for all occasions – from everyday appreciation to employee anniversary gifts that actually...
              </p>
            </div>
            
            {!showAllContent && (
              <button 
                onClick={() => setShowAllContent(true)}
                className="w-full py-3 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors mb-8"
              >
                Read More
              </button>
            )}

            {/* FAQs */}
            <div className="mt-12">
              <h2 className="text-xl font-bold text-gray-900 text-center mb-6">FAQs About {slug.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}</h2>
              <div className="space-y-2">
                {data.faqs.map((faq, idx) => (
                  <div key={idx} className="border-b border-gray-200">
                    <button
                      onClick={() => toggleFaq(idx)}
                      className="w-full flex items-center justify-between py-3 px-4 bg-gray-50 hover:bg-gray-100 transition-colors text-left"
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
                        <p className="text-sm text-gray-600 leading-relaxed">{faq.answer}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
              
              <button className="w-full mt-6 py-3 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors">
                Read More
              </button>
            </div>

          </div>

          {/* Sidebar */}
          <aside className="w-full lg:w-64 flex-shrink-0">
            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <h3 className="font-bold text-gray-900 mb-4 pb-2 border-b-2 border-gray-900 inline-block">By Category</h3>
              <ul className="space-y-3">
                {categories.map((category) => (
                  <li key={category.slug}>
                    <Link 
                      href={`/gift-categories/${category.slug}`}
                      className={`text-sm hover:text-[var(--clr-primary)] transition-colors ${slug === category.slug ? 'text-[var(--clr-primary)] font-medium' : 'text-gray-700'}`}
                    >
                      {category.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </aside>

        </div>
      </div>
    </div>
  );
}
