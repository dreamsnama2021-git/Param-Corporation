// app/case-studies/page.tsx
'use client';

import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { 
  Home, 
  ArrowRight, 
  Calendar, 
  Building2, 
  Tag, 
  ChevronRight, 
  Eye,
  ArrowUpRight,
  ExternalLink
} from 'lucide-react';
import { motion } from 'framer-motion';

// ─── TYPES ──────────────────────────────────────────────────────────────────
interface CaseStudy {
  id: number;
  title: string;
  category: string;
  client: string;
  date: string;
  description: string;
  imageUrl: string;
  slug: string;
  stats: { engagement: string; reach: string; products: string };
  reverse?: boolean;
}

// app/case-studies/page.tsx (update the caseStudies array)
const caseStudies: CaseStudy[] = [
  {
    id: 4,
    title: "Diabetic Retinopathy Patient Awareness Tool",
    category: "Patient Education",
    client: "Leading Pharmaceutical Brand",
    date: "2024",
    description: "Designed and developed an innovative patient awareness solution featuring visual education tools and simulation goggles that helped diabetic patients understand the serious consequences of unmanaged diabetes.",
    imageUrl: "https://pub-735dbd7583d74ad5949115d6fdf77023.r2.dev/Case%20Study/case-study%20(1).png",
    slug: "diabetic-retinopathy-tool",
    stats: { engagement: "+85%", reach: "50K+", products: "1" }
  },
  // {
  //   id: 1,
  //   title: "Transforming ENT Product Line Strategy",
  //   category: "Medical Communications",
  //   client: "Leading Pharma Co.",
  //   date: "2024",
  //   description: "Developed comprehensive medical communication strategy for ENT portfolio, resulting in 40% increase in physician engagement and successful launch of 3 new products.",
  //   imageUrl: "https://pub-735dbd7583d74ad5949115d6fdf77023.r2.dev/Case%20Study/case-study%20(1).png",
  //   slug: "ent-strategy",
  //   stats: { engagement: "+40%", reach: "2.5M+", products: "3" }
  // },
  {
    id: 2,
    title: "Cardio-Diabetes Digital Campaign",
    category: "Digital Marketing",
    client: "Global Healthcare Brand",
    date: "2023",
    description: "Executed multi-channel digital campaign targeting cardiologists and diabetologists, featuring interactive content and KOL webinars that drove significant prescription growth.",
    imageUrl: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=800&h=600&fit=crop",
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
    imageUrl: "https://images.unsplash.com/photo-1551076805-e1869023e561?w=800&h=600&fit=crop",
    slug: "ortho-market-entry",
    stats: { engagement: "+120%", reach: "1.8M+", products: "5" }
  }
];

// ─── CASE STUDY PAGE BANNER ─────────────────────────────────────────────────────────────

const PageBanner = () => (
 <div className="relative w-full h-[60vh] md:h-[50vh] lg:h-[55vh] xl:h-[70vh] overflow-hidden">
    {/* Mobile image */}
    <Image
      src="/banner/Case study page Mobile.jpg"
      alt="Case Study Banner - Mobile"
      fill
      className="object-fill object-center block md:hidden"
      priority
      unoptimized
    />

    {/* Tablet image */}
    <Image
      src="/banner/Case study page Tablet .jpg"
      alt="Case Study Banner - Tablet"
      fill
      className="object-fill object-center hidden md:block lg:hidden"
      priority
      unoptimized
    />

    {/* Desktop image */}
    <Image
      src="/banner/Case study page Desktop.jpg"
      alt="Case Study Banner - Desktop"
      fill
      className="object-fill object-center hidden lg:block"
      priority
      unoptimized
    />
 
  </div>
);
// ─── IMAGE CARD COMPONENT ─────────────────────────────────────────────────
function ImageCard({ imageUrl, title }: { imageUrl: string; title: string }) {
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <div 
      className="relative aspect-[4/3] rounded-2xl overflow-hidden  bg-gray-100 group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Image
        src={imageUrl}
        alt={title}
        fill
        className="object-cover transition-transform duration-700 group-hover:scale-105"
        sizes="(max-width: 768px) 100vw, 50vw"
      />
      
      {/* Overlay gradient */}
      {/* <div className={`absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent transition-opacity duration-300 ${
        isHovered ? 'opacity-100' : 'opacity-60'
      }`} /> */}
      
      {/* View case study overlay on hover */}
      <div className={`absolute inset-0 flex items-center justify-center transition-all duration-300 ${
        isHovered ? 'opacity-100' : 'opacity-0'
      }`}>
        <div className="flex items-center gap-2 px-6 py-3 bg-white/90 backdrop-blur-sm rounded-full shadow-xl transform transition-transform duration-300 hover:scale-105">
          <Eye className="w-5 h-5 text-gray-800" />
          <span className="text-sm font-semibold text-gray-800 font-[family-name:var(--font-display)]">
            View Case Study
          </span>
        </div>
      </div>
    </div>
  );
}

// ─── MAIN PAGE ──────────────────────────────────────────────────────────────
export default function CaseStudiesPage() {
  const router = useRouter();

  return (
    <div className="min-h-screen font-[family-name:var(--font-body)]">
      
      {/* Hero Section */}
      {/* <section className="bg-gradient-to-br from-[#1a1a1a] to-[#2d2d2d] text-white py-20 lg:py-28 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-72 h-72 bg-[var(--clr-primary)] rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-[var(--clr-secondary)] rounded-full blur-3xl" />
        </div>
        
        <div className="max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 text-sm text-gray-400 mb-6">
              <Link href="/" className="hover:text-white flex items-center gap-1 transition-colors">
                <Home className="w-4 h-4" /> Home
              </Link>
              <ChevronRight className="w-4 h-4" />
              <span className="text-[var(--clr-primary)]">Case Studies</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-[family-name:var(--font-display)] font-bold mb-6 leading-tight">
              Case Studies & Insights
            </h1>
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-2xl">
              Explore how we've helped leading healthcare brands achieve their marketing objectives through strategic medical communications. Click on any case study for detailed insights.
            </p>
          </div>
        </div>
      </section> */}
<PageBanner />
      {/* Case Studies Grid */}
      <section className="py-16 lg:py-24 max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-8 space-y-24 lg:space-y-32">
        {caseStudies.map((study, index) => (
          <article 
            key={study.id}
            className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center ${
              study.reverse ? 'lg:grid-flow-dense' : ''
            }`}
          >
            <div 
              className={`relative group cursor-pointer ${study.reverse ? 'lg:col-start-2' : ''}`}
              onClick={() => router.push(`/case-study/${study.slug}`)}
            >
              <ImageCard 
                imageUrl={study.imageUrl}
                title={study.title}
              />
            
            </div>

            <div className={`space-y-6 ${study.reverse ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
              <div className="flex flex-wrap gap-3">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[var(--clr-primary)]/10 text-[var(--clr-primary)] text-xs font-semibold font-[family-name:var(--font-display)]">
                  <Tag className="w-3 h-3" />
                  {study.category}
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gray-100 text-gray-600 text-xs font-medium font-[family-name:var(--font-body)]">
                  <Calendar className="w-3 h-3" />
                  {study.date}
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gray-100 text-gray-600 text-xs font-medium font-[family-name:var(--font-body)]">
                  <Building2 className="w-3 h-3" />
                  {study.client}
                </span>
              </div>

              <h2 className="text-2xl md:text-3xl lg:text-4xl font-[family-name:var(--font-display)] font-bold text-gray-900 leading-tight">
                {study.title}
              </h2>

              <p className="text-gray-600 leading-relaxed text-base md:text-lg font-[family-name:var(--font-body)] font-light">
                {study.description}
              </p>

              

              <button
                onClick={() => router.push(`/case-study/${study.slug}`)}
                className="inline-flex items-center gap-2 text-[var(--clr-primary)] font-semibold hover:text-[var(--clr-secondary)] transition-colors group font-[family-name:var(--font-display)]"
              >
                View Full Case Study 
                <ArrowUpRight className="w-5 h-5 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </button>
            </div>
          </article>
        ))}
      </section>

      
    </div>
  );
}
