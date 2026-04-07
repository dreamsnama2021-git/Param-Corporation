'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Home, Download } from 'lucide-react';

const products = [
  {
    id: 1,
    name: 'Crystal Cube 4 x 4 x 6 cm with Metallic Printing',
    image: 'https://www.bigimpex.com/wp-content/uploads/2024/09/crystal-cube-4-4-6.jpg',
  },
  {
    id: 2,
    name: 'Crystal Cube 5 x 5 x 5 cm with Engraving and LED base',
    image: 'https://www.bigimpex.com/wp-content/uploads/2024/09/crystal-cube-led.jpg',
  },
  {
    id: 3,
    name: 'Crystal Cube 5 x 5 x 5 cm with Metallic Printing',
    image: 'https://www.bigimpex.com/wp-content/uploads/2024/09/crystal-cube-5-5-5.jpg',
  },
  {
    id: 4,
    name: 'Crystal Cube 5 x 5 x 5 cm with Metallic Printing and base',
    image: 'https://www.bigimpex.com/wp-content/uploads/2024/09/crystal-cube-base.jpg',
  },
  {
    id: 5,
    name: 'Crystal Cube 5 x 5 x 8 cm with Engraving',
    image: 'https://www.bigimpex.com/wp-content/uploads/2024/09/crystal-cube-engraving.jpg',
  },
  {
    id: 6,
    name: 'Crystal Cube 5 x 5 x 8 cm with Metallic Printing',
    image: 'https://www.bigimpex.com/wp-content/uploads/2024/09/crystal-cube-independence.jpg',
  },
  {
    id: 7,
    name: 'Crystal Cube 5 x 5 x 8 cm with Metallic Printing and base',
    image: 'https://www.bigimpex.com/wp-content/uploads/2024/09/crystal-cube-diwali.jpg',
  },
  {
    id: 8,
    name: 'Crystal Diamond Paperweight (6 cm)',
    image: 'https://www.bigimpex.com/wp-content/uploads/2024/09/crystal-diamond-6cm.jpg',
  },
  {
    id: 9,
    name: 'Crystal Diamond Paperweight (8 cm)',
    image: 'https://www.bigimpex.com/wp-content/uploads/2024/09/crystal-diamond-8cm.jpg',
  },
  {
    id: 10,
    name: 'crystal globe 60mm with Engraving',
    image: 'https://www.bigimpex.com/wp-content/uploads/2024/07/crystal-globe.jpg',
  },
  {
    id: 11,
    name: 'Crystal with LED base and Card and Stationery Holder',
    image: 'https://www.bigimpex.com/wp-content/uploads/2024/09/crystal-led-holder.jpg',
  },
  {
    id: 12,
    name: 'Crystal with LED base, Mobile Stand and Stationery Holder',
    image: 'https://www.bigimpex.com/wp-content/uploads/2024/09/crystal-led-mobile-stand.jpg',
  },
];

const featuredProducts = [
  {
    id: 1,
    name: 'Acrylic Visiting Card holder',
    image: 'https://www.bigimpex.com/wp-content/uploads/2024/09/acrylic-card-holder.jpg',
  },
  {
    id: 2,
    name: 'Crystal with LED base and Wireless Charger',
    image: 'https://www.bigimpex.com/wp-content/uploads/2024/09/crystal-wireless-charger.jpg',
  },
  {
    id: 3,
    name: 'Crystal with Wooden Base Stationery Holder and Digital Clock',
    image: 'https://www.bigimpex.com/wp-content/uploads/2024/09/crystal-wooden-clock.jpg',
  },
  {
    id: 4,
    name: 'Premium Crystal Pen Stand',
    image: 'https://www.bigimpex.com/wp-content/uploads/2024/09/crystal-pen-stand.jpg',
  },
];

export default function GrobPrismoPage() {
  return (
    <div className="min-h-screen bg-white font-sans">
      
      {/* Hero Section */}
      <section className="bg-[#1a1a1a] text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">Grob Prismo</h1>
          <div className="flex items-center gap-2 text-sm text-gray-400">
            <Link href="/" className="hover:text-white flex items-center gap-1">
              <Home className="w-3 h-3" /> Home
            </Link>
            <span>»</span>
            <span className="text-[var(--clr-primary)]">Grob Prismo</span>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">About Grob Prismo</h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Logo Side */}
          <div className="flex flex-col items-center md:items-center">
            <div className="relative w-80 h-48 mb-6 flex items-center justify-center">
              {/* Grob Prismo Logo Placeholder */}
              <div className="text-center">
                <div className="text-5xl font-black tracking-tight mb-2">
                  <span className="text-orange-500">GR</span>
                  <span className="text-[var(--clr-secondary)]/200">Ö</span>
                  <span className="text-orange-500">B</span>
                </div>
                <div className="text-2xl text-teal-500 font-script italic">prismo</div>
                <div className="text-xs text-gray-500 mt-2 tracking-widest uppercase">Desk Essentials Reimagined</div>
              </div>
            </div>
            <button className="bg-[var(--clr-primary)] hover:bg-[var(--clr-secondary)] text-white px-6 py-2.5 rounded-md font-medium text-sm flex items-center gap-2 transition-colors shadow-md">
              <Download className="w-4 h-4" />
              Download Brochure
            </button>
          </div>

          {/* Content Side */}
          <div className="text-gray-600 text-sm leading-relaxed">
            <p className="mb-4">
              Your destination for vibrant and colorful gifting choices. We offer a diverse collection of unique crystal and glass tabletop gifts designed to transform your space from ordinary to extraordinary. 
            </p>
            <p>
              Born from innovation, Grob Prismo redefines your gifting experience with a perfect blend of style and functionality.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Grob Prismo Products</h2>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {featuredProducts.map((product) => (
            <div key={product.id} className="group cursor-pointer">
              <div className="bg-[#1a1a1a] rounded-t-lg overflow-hidden aspect-square relative">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-contain p-4 group-hover:scale-105 transition-transform duration-300"
                  unoptimized
                />
              </div>
              <div className="bg-[#e5e7eb] p-4 rounded-b-lg h-[80px] flex items-center">
                <h3 className="text-sm font-medium text-gray-800 line-clamp-2 leading-tight">
                  {product.name}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* All Products Grid */}
      <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div key={product.id} className="group cursor-pointer bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100">
              <div className="relative aspect-square bg-[#1a1a1a] overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-contain p-4 group-hover:scale-105 transition-transform duration-300"
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

    </div>
  );
}
