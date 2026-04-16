'use client';

import React, { useMemo } from 'react';
import Link from 'next/link';
import { useParams, useRouter } from 'next/navigation';
import { ArrowUpRight, Home, ChevronRight } from 'lucide-react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { allProducts, getCombinedCategories, getCategoryBySlug } from '../../data';

/* ─── Styles matching your image precisely ─── */
const listingStyles = `
  @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&display=swap');
  
  .listing-container {
    font-family: 'DM Sans', sans-serif;
    color: #1a1a1a;
    background-color: #fafaf8;
  }

  .accent-color { color: #968c4d; }
  .accent-bg { background-color: #968c4d; }
  .accent-border { border-color: #968c4d; }

  .index-number {
    font-size: 0.75rem;
    font-weight: 700;
    color: #968c4d;
    margin-bottom: 0.5rem;
  }

  .main-title {
    font-size: 3rem;
    font-weight: 600;
    letter-spacing: -0.02em;
    margin-bottom: 1rem;
    line-height: 1.1;
  }

  .title-line {
    width: 60px;
    height: 1px;
    background-color: #968c4d;
    margin-bottom: 2rem;
  }

  .description-text {
    font-size: 1rem;
    line-height: 1.6;
    color: #4a4a4a;
    max-width: 90%;
    margin-bottom: 3rem;
  }

  .plan-item {
    border-left: 1px solid rgba(150, 140, 77, 0.3);
    padding-left: 1.5rem;
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
    font-size: 0.95rem;
    font-weight: 500;
    transition: all 0.3s ease;
  }

  .plan-item:hover {
    border-left: 2px solid #968c4d;
    color: #968c4d;
    background: linear-gradient(to right, rgba(150, 140, 77, 0.05), transparent);
  }

  .explore-btn {
    background-color: #968c4d;
    color: white;
    padding: 0.85rem 2rem;
    border-radius: 9999px;
    font-weight: 600;
    display: inline-flex;
    align-items: center;
    gap: 0.75rem;
    transition: all 0.3s ease;
  }

  .explore-btn:hover {
    background-color: #7a713e;
    transform: translateY(-2px);
    box-shadow: 0 10px 20px rgba(150, 140, 77, 0.2);
  }

  @media (max-width: 768px) {
    .main-title { font-size: 2.25rem; }
  }
`;

function ProductListingItem({ product, index }: { product: any; index: number }) {
  const formattedIndex = String(index + 1).padStart(2, '0');
  
  // Custom plans/features for the list
  const plans = [
    "3D Visualizations",
    "Design Concepts",
    "Material & Finish Representation",
    "Lighting Effects",
    "Furniture & Decor Placement",
    "Multiple Views & Angles"
  ];

  return (
    <motion.div 
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="mb-32"
    >
      {/* Header Area */}
      <div className="flex flex-col mb-8">
        <span className="index-number">{formattedIndex}</span>
        <h2 className="main-title">{product.name}</h2>
        <div className="title-line" />
        <p className="description-text">
          {product.description || "We deliver detailed 3D visualisation that bring your design to life through realistic visuals, showcasing layouts, materials, and lighting. This clarity helps you make informed decisions and ensures smooth, accurate execution."}
        </p>
      </div>

      {/* Content Area: Image + List */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Left: Image (7/12 width) */}
        <div className="lg:col-span-7 relative aspect-[16/10] rounded-[2rem] overflow-hidden shadow-2xl">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover"
            unoptimized
          />
        </div>

        {/* Right: Plans (5/12 width) */}
        <div className="lg:col-span-5 flex flex-col pt-4">
          <h4 className="text-sm font-bold uppercase tracking-widest mb-6 opacity-80">Our Plans</h4>
          <div className="flex flex-col space-y-2 mb-10">
            {plans.map((plan, idx) => (
              <div key={idx} className="plan-item">
                {plan}
              </div>
            ))}
          </div>

          <Link href={`/product/${product.id}`} className="explore-btn group w-fit">
            Explore More
            <ArrowUpRight className="w-5 h-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
          </Link>
        </div>
      </div>
    </motion.div>
  );
}

export default function CategoryPage() {
  const params = useParams();
  const router = useRouter();
  const slug = params?.slug as string | undefined;
  const categories = getCombinedCategories();
  const isAllProducts = !slug || slug === 'all';
  const filteredProducts = useMemo(() => isAllProducts ? allProducts : allProducts.filter(p => p.category === slug), [slug, isAllProducts]);
  const currentCategory = getCategoryBySlug(slug || '');

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: listingStyles }} />
      <div className="min-h-screen listing-container pb-20">
        
        {/* Breadcrumb & Global Header */}
        <div className="max-w-7xl mx-auto px-6 pt-12">
            <nav className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#968c4d] mb-12">
                <Link href="/" className="hover:opacity-70">Home</Link>
                <ChevronRight className="w-3 h-3" />
                <span className="opacity-50">Products</span>
            </nav>
        </div>

        {/* Product List */}
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-16">
            
            {/* Sidebar Filter (Filipiuk's Minimalist Sidebar) */}
            <aside className="lg:w-48 flex-shrink-0">
              <div className="sticky top-12">
                <h3 className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 mb-6">Categories</h3>
                <div className="flex flex-col space-y-4">
                  <button 
                    onClick={() => router.push('/categories/all')}
                    className={`text-left text-sm font-bold transition-all ${isAllProducts ? 'text-[#968c4d]' : 'text-gray-400 hover:text-black'}`}
                  >
                    All Catalog
                  </button>
                  {categories.map(cat => (
                    <button 
                        key={cat.slug}
                        onClick={() => router.push(`/categories/${cat.slug}`)}
                        className={`text-left text-sm font-bold transition-all ${slug === cat.slug ? 'text-[#968c4d]' : 'text-gray-400 hover:text-black'}`}
                    >
                        {cat.name}
                    </button>
                  ))}
                </div>
              </div>
            </aside>

            {/* Main Listings */}
            <main className="flex-1">
              {filteredProducts.map((product, idx) => (
                <ProductListingItem key={product.id} product={product} index={idx} />
              ))}
            </main>
          </div>
        </div>
      </div>
    </>
  );
}
