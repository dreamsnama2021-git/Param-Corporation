// app/case-studies/page.tsx
'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Home, ArrowRight, Calendar, Building2, Tag, ChevronRight } from 'lucide-react';

const caseStudies = [
  {
    id: 1,
    title: "Transforming ENT Product Line Strategy",
    category: "Medical Communications",
    client: "Leading Pharma Co.",
    date: "2024",
    description: "Developed comprehensive medical communication strategy for ENT portfolio, resulting in 40% increase in physician engagement and successful launch of 3 new products.",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=600&fit=crop",
    slug: "ent-strategy",
    stats: { engagement: "+40%", reach: "2.5M+", products: "3" }
  },
  {
    id: 2,
    title: "Cardio-Diabetes Digital Campaign",
    category: "Digital Marketing",
    client: "Global Healthcare Brand",
    date: "2023",
    description: "Executed multi-channel digital campaign targeting cardiologists and diabetologists, featuring interactive content and KOL webinars that drove significant prescription growth.",
    image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=800&h=600&fit=crop",
    slug: "cardio-digital",
    stats: { engagement: "+65%", reach: "5M+", products: "2" },
    reverse: true
  },
  {
    id: 3,
    title: "Orthopedics Market Entry Strategy",
    category: "Brand Strategy",
    client: "Medical Device Company",
    date: "2024",
    description: "Comprehensive market analysis and launch strategy for orthopedic implants, including surgeon training programs and patient education materials.",
    image: "https://images.unsplash.com/photo-1551076805-e1869023e561?w=800&h=600&fit=crop",
    slug: "ortho-market-entry",
    stats: { engagement: "+120%", reach: "1.8M+", products: "5" }
  }
];

export default function CaseStudiesPage() {
  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#1a1a1a] to-[#2d2d2d] text-white py-20 lg:py-28 relative overflow-hidden">
        {/* Abstract Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-72 h-72 bg-[var(--clr-primary)] rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-[var(--clr-secondary)] rounded-full blur-3xl" />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 text-sm text-gray-400 mb-6">
              <Link href="/" className="hover:text-white flex items-center gap-1 transition-colors">
                <Home className="w-4 h-4" /> Home
              </Link>
              <ChevronRight className="w-4 h-4" />
              <span className="text-[var(--clr-primary)]">Case Studies</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Case Studies
            </h1>
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-2xl">
              Explore how Zexcel Medical Communications has helped leading healthcare brands achieve their marketing objectives through strategic medical communications.
            </p>
          </div>
        </div>
      </section>

      {/* Case Studies List - Alternating Layout */}
      <section className="py-16 lg:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24 lg:space-y-32">
        {caseStudies.map((study, index) => (
          <article 
            key={study.id}
            className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center ${
              study.reverse ? 'lg:grid-flow-dense' : ''
            }`}
          >
            {/* Image Section */}
            <div className={`relative group ${study.reverse ? 'lg:col-start-2' : ''}`}>
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl bg-gray-200">
                <Image
                  src={study.image}
                  alt={study.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Floating Stats Card */}
                <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md rounded-xl p-4 shadow-lg transform translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div>
                      <div className="text-xl font-bold text-[var(--clr-primary)]">{study.stats.engagement}</div>
                      <div className="text-xs text-gray-500 uppercase tracking-wide">Engagement</div>
                    </div>
                    <div>
                      <div className="text-xl font-bold text-[var(--clr-primary)]">{study.stats.reach}</div>
                      <div className="text-xs text-gray-500 uppercase tracking-wide">Reach</div>
                    </div>
                    <div>
                      <div className="text-xl font-bold text-[var(--clr-primary)]">{study.stats.products}</div>
                      <div className="text-xs text-gray-500 uppercase tracking-wide">Products</div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Decorative Element */}
              <div className={`absolute -z-10 w-full h-full rounded-2xl bg-[var(--clr-primary)]/10 top-4 ${study.reverse ? 'right-4' : 'left-4'}`} />
            </div>

            {/* Content Section */}
            <div className={`space-y-6 ${study.reverse ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
              {/* Meta Tags */}
              <div className="flex flex-wrap gap-3">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[var(--clr-primary)]/10 text-[var(--clr-primary)] text-xs font-semibold">
                  <Tag className="w-3 h-3" />
                  {study.category}
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gray-100 text-gray-600 text-xs font-medium">
                  <Calendar className="w-3 h-3" />
                  {study.date}
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gray-100 text-gray-600 text-xs font-medium">
                  <Building2 className="w-3 h-3" />
                  {study.client}
                </span>
              </div>

              {/* Title */}
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight">
                {study.title}
              </h2>

              {/* Description */}
              <p className="text-gray-600 leading-relaxed text-base md:text-lg">
                {study.description}
              </p>

              {/* Key Highlights */}
              <ul className="space-y-3">
                {['Strategic medical communications', 'Multi-channel engagement', 'Measurable ROI results'].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-[var(--clr-secondary)] mt-2 flex-shrink-0" />
                    <span className="text-sm md:text-base">{item}</span>
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <Link 
                href={`/case-studies/${study.slug}`}
                className="inline-flex items-center gap-2 bg-[var(--clr-primary)] hover:bg-[var(--clr-secondary)] text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 group/btn mt-4"
              >
                View Case Study
                <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
              </Link>
            </div>
          </article>
        ))}
      </section>

      {/* Bottom CTA Section */}
      <section className="py-16 lg:py-24 bg-white border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Ready to Create Your Success Story?
          </h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Let's discuss how Zexcel Medical Communications can help you achieve your marketing objectives with tailored medical communication strategies.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-[var(--clr-primary)] hover:bg-[var(--clr-secondary)] text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
            >
              Start Your Project
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link 
              href="/services"
              className="inline-flex items-center justify-center gap-2 border-2 border-gray-200 hover:border-[var(--clr-primary)] text-gray-700 hover:text-[var(--clr-primary)] px-8 py-4 rounded-lg font-semibold transition-all duration-300"
            >
              View Our Services
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
