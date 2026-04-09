'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import { useParams, useRouter } from 'next/navigation';
import { ChevronRight, Plus, Home, Grid3X3, List, Filter, ArrowRight, Check, X } from 'lucide-react';
import Image from 'next/image';
import { 
  allProducts, 
  occasions,
  getCategoryBySlug 
} from '../../data';

export default function OccasionPage() {
  const params = useParams();
  const router = useRouter();
  const slug = params?.slug as string | undefined;
  
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [mobileFilterOpen, setMobileFilterOpen] = useState(false);
  const [imageLoading, setImageLoading] = useState(true);

  // Filter products for occasions only
  const occasionProducts = useMemo(() => {
    return allProducts.filter(p => 
      occasions.some(o => o.slug === p.category)
    );
  }, []);

  // Filter by specific occasion or show all
  const filteredProducts = useMemo(() => {
    if (!slug || slug === 'all') return occasionProducts;
    return occasionProducts.filter(product => product.category === slug);
  }, [slug, occasionProducts]);

  const currentOccasion = occasions.find(o => o.slug === slug);
  
  // Get representative image
  const categoryImage = useMemo(() => {
    if (!slug || slug === 'all') return null;
    const firstProduct = occasionProducts.find(p => p.category === slug);
    return firstProduct?.image || 'https://images.unsplash.com/photo-1512909006721-3d6018887383?w=800';
  }, [slug, occasionProducts]);

  const getOccasionCount = (occasionSlug: string) => {
    return occasionProducts.filter(p => p.category === occasionSlug).length;
  };
  
  const handleOccasionClick = (occasionSlug: string) => {
    router.push(`/occasion/${occasionSlug}`);
    setMobileFilterOpen(false);
  };

  const showAllOccasions = () => {
    router.push('/occasion/all');
    setMobileFilterOpen(false);
  };

  const isAllProducts = !slug || slug === 'all';

  return (
    <div className="min-h-screen bg-gray-50 font-sans antialiased">
      {/* Header Section */}
      <div className="bg-slate-900 text-white py-8 md:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center tracking-tight">
            {isAllProducts ? 'All Occasion Gifts' : currentOccasion?.name || 'Occasion'}
          </h1>
          
          {/* Breadcrumb */}
          <nav className="flex items-center justify-center gap-2 text-sm text-slate-400 mt-4 md:mt-6">
            <Link href="/" className="hover:text-white transition-colors flex items-center gap-1.5">
              <Home className="w-4 h-4" /> Home
            </Link>
            <ChevronRight className="w-4 h-4" />
            <Link href="/occasion/all" className={`hover:text-white transition-colors ${isAllProducts ? 'text-white font-medium' : ''}`}>
              Occasion
            </Link>
            {!isAllProducts && currentOccasion && (
              <>
                <ChevronRight className="w-4 h-4" />
                <span className="text-white font-medium">{currentOccasion.name}</span>
              </>
            )}
          </nav>
        </div>
      </div>

      {/* Main Layout */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 md:py-8">
        
        {/* Mobile Filter Button */}
        <div className="lg:hidden mb-4 sticky top-4 z-30">
          <button 
            onClick={() => setMobileFilterOpen(!mobileFilterOpen)}
            className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-white border border-slate-200 rounded-lg shadow-sm text-sm font-medium text-slate-700 hover:bg-slate-50 transition-colors"
          >
            {mobileFilterOpen ? <X className="w-4 h-4" /> : <Filter className="w-4 h-4" />}
            {mobileFilterOpen ? 'Close Filters' : 'Browse Occasions'}
            {!isAllProducts && !mobileFilterOpen && (
              <span className="ml-1 px-2 py-0.5 bg-blue-100 text-blue-700 text-xs rounded-full">
                1
              </span>
            )}
          </button>
        </div>

        <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
          
          {/* LEFT: Filter Sidebar */}
          <aside className={`w-full lg:w-72 flex-shrink-0 ${mobileFilterOpen ? 'block' : 'hidden lg:block'}`}>
            <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden sticky top-24">
              <div className="p-4 border-b border-slate-100 bg-slate-50/50">
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold text-slate-900 flex items-center gap-2">
                    <Filter className="w-4 h-4 text-slate-500" />
                    Occasions
                  </h3>
                  {!isAllProducts && (
                    <button 
                      onClick={showAllOccasions}
                      className="text-xs font-medium text-blue-600 hover:text-blue-700 hover:underline transition-colors"
                    >
                      View All
                    </button>
                  )}
                </div>
              </div>
              
              <div className="p-2 max-h-[calc(100vh-300px)] overflow-y-auto scrollbar-thin scrollbar-thumb-slate-200 scrollbar-track-transparent">
                {/* All Occasions */}
                <button
                  onClick={showAllOccasions}
                  className={`w-full text-left px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200 mb-1 ${
                    isAllProducts 
                      ? 'bg-blue-600 text-white shadow-md shadow-blue-100' 
                      : 'text-slate-700 hover:bg-slate-100 hover:text-slate-900'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span>All Occasions</span>
                    <span className={`text-xs px-2 py-0.5 rounded-full ${isAllProducts ? 'bg-blue-500 text-white' : 'bg-slate-100 text-slate-500'}`}>
                      {occasionProducts.length}
                    </span>
                  </div>
                </button>
                
                {/* Occasion List */}
                {occasions.map((occasion) => {
                  const count = getOccasionCount(occasion.slug);
                  const isActive = slug === occasion.slug;
                  if (count === 0) return null;
                  
                  return (
                    <button
                      key={occasion.slug}
                      onClick={() => handleOccasionClick(occasion.slug)}
                      className={`w-full text-left px-4 py-3 rounded-lg text-sm transition-all duration-200 mb-1 ${
                        isActive 
                          ? 'bg-blue-600 text-white shadow-md shadow-blue-100' 
                          : 'text-slate-700 hover:bg-slate-100 hover:text-slate-900'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span className="truncate pr-2">{occasion.name}</span>
                        <span className={`text-xs px-2 py-0.5 rounded-full flex-shrink-0 ${
                          isActive ? 'bg-blue-500 text-white' : 'bg-slate-100 text-slate-500'
                        }`}>
                          {count}
                        </span>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          </aside>

          {/* RIGHT: Main Content Area */}
          <div className="flex-1 min-w-0">
            
            {/* Occasion Detail Block */}
            {!isAllProducts && currentOccasion && (
              <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden mb-6 md:mb-8">
                {/* Heading */}
                <div className="px-6 py-4 border-b border-slate-100 bg-slate-50/30">
                  <h2 className="text-xl md:text-2xl font-bold text-slate-900">
                    {currentOccasion.name}
                  </h2>
                </div>
                
                {/* Image Left + Content Right */}
                <div className="p-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                    {/* Left: Image */}
                    <div className="relative aspect-[4/3] md:aspect-square rounded-xl overflow-hidden bg-slate-100 group">
                      <Image
                        src={categoryImage || ''}
                        alt={currentOccasion.name}
                        fill
                        className={`object-cover transition-transform duration-700 group-hover:scale-105 ${
                          imageLoading ? 'opacity-0' : 'opacity-100'
                        }`}
                        onLoad={() => setImageLoading(false)}
                        unoptimized
                        priority
                      />
                      {imageLoading && (
                        <div className="absolute inset-0 flex items-center justify-center bg-slate-200 animate-pulse">
                          <div className="w-12 h-12 border-4 border-slate-300 border-t-blue-600 rounded-full animate-spin"></div>
                        </div>
                      )}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                    
                    {/* Right: Content */}
                    <div className="flex flex-col justify-center py-2">
                      <p className="text-slate-600 leading-relaxed mb-6 text-base">
                        {currentOccasion.description || `Celebrate ${currentOccasion.name} with our exclusive corporate gifting collection. Perfect for employees, clients, and business partners with customization options available.`}
                      </p>
                      
                      <div className="space-y-3 mb-6">
                        <div className="flex items-center gap-3 text-slate-700">
                          <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                            <Check className="w-3.5 h-3.5 text-green-600" />
                          </div>
                          <span className="text-sm font-medium">Festival-themed packaging</span>
                        </div>
                        <div className="flex items-center gap-3 text-slate-700">
                          <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                            <Check className="w-3.5 h-3.5 text-green-600" />
                          </div>
                          <span className="text-sm font-medium">Bulk customization available</span>
                        </div>
                        <div className="flex items-center gap-3 text-slate-700">
                          <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                            <Check className="w-3.5 h-3.5 text-green-600" />
                          </div>
                          <span className="text-sm font-medium">Express delivery before holidays</span>
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-3">
                        <button className="inline-flex items-center gap-2 px-5 py-2.5 bg-blue-600 text-white text-sm font-semibold rounded-lg hover:bg-blue-700 active:scale-95 transition-all shadow-md shadow-blue-100">
                          Enquire Now
                          <ArrowRight className="w-4 h-4" />
                        </button>
                        <button className="inline-flex items-center gap-2 px-5 py-2.5 border-2 border-slate-200 text-slate-700 text-sm font-semibold rounded-lg hover:border-slate-900 hover:text-slate-900 active:scale-95 transition-all">
                          Download Catalog
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Products Toolbar */}
            <div className="bg-white rounded-xl border border-slate-200 p-4 mb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 shadow-sm">
              <div className="flex items-center gap-2">
                <span className="text-slate-500 text-sm">
                  Showing <span className="font-semibold text-slate-900">{filteredProducts.length}</span> products
                  {currentOccasion && <span className="text-slate-400"> in {currentOccasion.name}</span>}
                </span>
              </div>
              
              <div className="flex items-center gap-3">
                <span className="text-xs font-medium text-slate-500 uppercase tracking-wider hidden sm:block">View</span>
                <div className="flex bg-slate-100 p-1 rounded-lg">
                  <button 
                    onClick={() => setViewMode('grid')}
                    className={`flex items-center gap-2 px-3 py-1.5 rounded-md text-sm font-medium transition-all ${
                      viewMode === 'grid' 
                        ? 'bg-white text-slate-900 shadow-sm' 
                        : 'text-slate-500 hover:text-slate-700'
                    }`}
                    title="Grid View"
                  >
                    <Grid3X3 className="w-4 h-4" />
                    <span className="hidden sm:inline">Grid</span>
                  </button>
                  <button 
                    onClick={() => setViewMode('list')}
                    className={`flex items-center gap-2 px-3 py-1.5 rounded-md text-sm font-medium transition-all ${
                      viewMode === 'list' 
                        ? 'bg-white text-slate-900 shadow-sm' 
                        : 'text-slate-500 hover:text-slate-700'
                    }`}
                    title="List View"
                  >
                    <List className="w-4 h-4" />
                    <span className="hidden sm:inline">List</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Products Grid */}
            {filteredProducts.length === 0 ? (
              <div className="bg-white rounded-xl border border-slate-200 p-12 text-center shadow-sm">
                <div className="w-20 h-20 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Filter className="w-8 h-8 text-slate-400" />
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">No products found</h3>
                <p className="text-slate-500 mb-6 max-w-md mx-auto">We couldn't find any products for this occasion.</p>
                <button 
                  onClick={showAllOccasions}
                  className="px-6 py-2.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 font-medium transition-colors shadow-md shadow-blue-100"
                >
                  View All Occasions
                </button>
              </div>
            ) : (
              <div className={viewMode === 'grid' 
                ? "grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6" 
                : "space-y-4"
              }>
                {filteredProducts.map((product) => (
                  <div 
                    key={product.id} 
                    className={`group bg-white rounded-xl border border-slate-200 overflow-hidden hover:shadow-xl hover:border-slate-300 transition-all duration-300 ${
                      viewMode === 'list' ? 'flex flex-col sm:flex-row' : 'flex flex-col'
                    }`}
                  >
                    <div className={`relative bg-slate-100 overflow-hidden ${viewMode === 'list' ? 'w-full sm:w-56 h-56 flex-shrink-0' : 'aspect-square'}`}>
                      <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                        unoptimized
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300" />
                    </div>
                    
                    <div className="p-5 flex flex-col flex-1">
                      <div className="flex-1">
                        <span className="inline-block px-2.5 py-1 bg-slate-100 text-slate-600 text-xs font-medium rounded-md mb-2">
                          {product.categoryName}
                        </span>
                        <h3 className="font-semibold text-slate-900 mb-2 line-clamp-2 group-hover:text-blue-600 transition-colors">
                          {product.name}
                        </h3>
                        {product.price && (
                          <p className="text-lg font-bold text-slate-900">
                            {product.price}
                          </p>
                        )}
                      </div>
                      <div className="flex gap-2 mt-4 pt-4 border-t border-slate-100">
                        <Link 
                          href={`/product/${product.id}`}
                          className="flex-1 bg-slate-900 text-white text-center py-2.5 rounded-lg text-sm font-medium hover:bg-slate-800 active:scale-95 transition-all"
                        >
                          View Details
                        </Link>
                        <button className="p-2.5 border border-slate-200 rounded-lg hover:bg-slate-50 hover:border-slate-300 transition-colors text-slate-600">
                          <Plus className="w-5 h-5" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Load More */}
            {filteredProducts.length > 0 && filteredProducts.length >= 12 && (
              <div className="mt-8 text-center">
                <button className="px-8 py-3 bg-white border border-slate-300 text-slate-700 font-medium rounded-lg hover:bg-slate-50 hover:border-slate-400 transition-colors">
                  Load More Products
                </button>
              </div>
            )}
          </div>

        </div>
      </div>
    </div>
  );
}
