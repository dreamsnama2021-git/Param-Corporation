// app/case-studies/page.tsx
'use client';

import React, { useRef, useState, useEffect } from 'react';
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
  Play, 
  Pause, 
  Eye, 
  BookOpen, 
  Clock, 
  User, 
  ArrowUpRight,
  ExternalLink
} from 'lucide-react';

// ─── TYPES ──────────────────────────────────────────────────────────────────
interface CaseStudy {
  id: number;
  title: string;
  category: string;
  client: string;
  date: string;
  description: string;
  videoUrl: string;
  posterUrl: string;
  slug: string;
  stats: { engagement: string; reach: string; products: string };
  reverse?: boolean;
}

interface Blog {
  id: number;
  title: string;
  category: string;
  author: string;
  date: string;
  readTime: string;
  excerpt: string;
  image: string;
  slug: string;
  tags: string[];
}

// ─── DATA ────────────────────────────────────────────────────────────────────
const caseStudies: CaseStudy[] = [
  {
    id: 1,
    title: "Transforming ENT Product Line Strategy",
    category: "Medical Communications",
    client: "Leading Pharma Co.",
    date: "2024",
    description: "Developed comprehensive medical communication strategy for ENT portfolio, resulting in 40% increase in physician engagement and successful launch of 3 new products.",
    videoUrl: "https://player.vimeo.com/external/458634952.sd.mp4?s=7b614e2d366e56e7e4ade0cafe166f541dde24b7&profile_id=164",
    posterUrl: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=600&fit=crop",
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
    videoUrl: "https://player.vimeo.com/external/434045863.sd.mp4?s=8e7c2c9e8e3f6b1a5c7d9e0f1a2b3c4d5e6f7a8b&profile_id=164",
    posterUrl: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=800&h=600&fit=crop",
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
    videoUrl: "https://player.vimeo.com/external/434045862.sd.mp4?s=7c8d9e0f1a2b3c4d5e6f7a8b9c0d1e2f3a4b5c6d&profile_id=164",
    posterUrl: "https://images.unsplash.com/photo-1551076805-e1869023e561?w=800&h=600&fit=crop",
    slug: "ortho-market-entry",
    stats: { engagement: "+120%", reach: "1.8M+", products: "5" }
  }
];

const blogs: Blog[] = [
  {
    id: 1,
    title: "The Future of Medical Communications in Pharma",
    category: "Industry Trends",
    author: "Dr. Sarah Chen",
    date: "2024",
    readTime: "8 min read",
    excerpt: "Explore how digital transformation is reshaping medical communications and what pharma companies need to do to stay ahead of the curve.",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&h=500&fit=crop",
    slug: "future-medical-communications",
    tags: ["Digital Health", "Pharma Marketing", "Innovation"]
  },
  {
    id: 2,
    title: "Building Effective KOL Engagement Strategies",
    category: "Strategy",
    author: "Mark Thompson",
    date: "2024",
    readTime: "6 min read",
    excerpt: "Learn the key principles of building and maintaining strong relationships with Key Opinion Leaders in the healthcare industry.",
    image: "https://images.unsplash.com/photo-1557426272-fc759fdf7a8d?w=800&h=500&fit=crop",
    slug: "kol-engagement-strategies",
    tags: ["KOL Management", "Healthcare", "Strategy"]
  },
  {
    id: 3,
    title: "Compliance in Pharmaceutical Marketing: A 2024 Guide",
    category: "Compliance",
    author: "Lisa Rodriguez",
    date: "2024",
    readTime: "10 min read",
    excerpt: "Navigate the complex landscape of pharmaceutical marketing compliance with our comprehensive guide to regulations and best practices.",
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&h=500&fit=crop",
    slug: "pharma-marketing-compliance",
    tags: ["Compliance", "Regulations", "Best Practices"]
  },
  {
    id: 4,
    title: "Data-Driven Decision Making in Medical Affairs",
    category: "Data & Analytics",
    author: "Dr. James Wilson",
    date: "2024",
    readTime: "7 min read",
    excerpt: "Discover how medical affairs teams can leverage data analytics to drive better outcomes and demonstrate value to stakeholders.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=500&fit=crop",
    slug: "data-driven-medical-affairs",
    tags: ["Data Analytics", "Medical Affairs", "ROI"]
  },
  {
    id: 5,
    title: "Patient-Centric Communication Strategies",
    category: "Patient Engagement",
    author: "Emily Chang",
    date: "2024",
    readTime: "5 min read",
    excerpt: "Why putting patients at the center of your communication strategy leads to better health outcomes and stronger brand loyalty.",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=500&fit=crop",
    slug: "patient-centric-communication",
    tags: ["Patient Care", "Communication", "Healthcare"]
  },
  {
    id: 6,
    title: "The Role of AI in Medical Writing",
    category: "Technology",
    author: "Dr. Robert Kim",
    date: "2024",
    readTime: "9 min read",
    excerpt: "Artificial intelligence is transforming medical writing. Here's what it means for accuracy, efficiency, and the future of the profession.",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&h=500&fit=crop",
    slug: "ai-medical-writing",
    tags: ["AI", "Medical Writing", "Technology"]
  }
];

// ─── VIDEO PLAYER COMPONENT ─────────────────────────────────────────────────
function VideoPlayer({ videoUrl, posterUrl, title }: { 
  videoUrl: string; 
  posterUrl: string; 
  title: string;
}) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const togglePlay = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleVideoEnd = () => {
    setIsPlaying(false);
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
    }
  };

  return (
    <div 
      className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl bg-gray-900 group"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <video
        ref={videoRef}
        className="w-full h-full object-cover"
        poster={posterUrl}
        onClick={togglePlay}
        onEnded={handleVideoEnd}
        playsInline
        preload="metadata"
        title={title}
      >
        <source src={videoUrl} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      
      <div className={`absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent transition-opacity duration-300 ${isHovering ? 'opacity-100' : isPlaying ? 'opacity-0' : 'opacity-60'}`} />
      
      <button
        onClick={togglePlay}
        className={`absolute inset-0 flex items-center justify-center transition-all duration-300 ${isHovering || !isPlaying ? 'opacity-100' : 'opacity-0'}`}
      >
        <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center shadow-xl transform transition-transform duration-300 hover:scale-110">
          {isPlaying ? (
            <Pause className="w-6 h-6 md:w-8 md:h-8 text-gray-800" />
          ) : (
            <Play className="w-6 h-6 md:w-8 md:h-8 text-gray-800 ml-1" />
          )}
        </div>
      </button>
    </div>
  );
}

// ─── MAIN PAGE ──────────────────────────────────────────────────────────────
export default function CaseStudiesPage() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<'watch' | 'read'>('watch');

  return (
    <div className="min-h-screen font-[family-name:var(--font-body)]">
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#1a1a1a] to-[#2d2d2d] text-white py-20 lg:py-28 relative overflow-hidden">
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
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-[family-name:var(--font-display)] font-bold mb-6 leading-tight">
              Case Studies & Insights
            </h1>
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-2xl">
              Explore how we've helped leading healthcare brands achieve their marketing objectives through strategic medical communications. Click on any case study for detailed insights.
            </p>
          </div>
        </div>
      </section>

      {/* Tab Switcher */}
      <section className="sticky top-0 z-30 bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-0">
            <button
              onClick={() => setActiveTab('watch')}
              className={`flex items-center gap-2 px-6 py-4 font-semibold text-sm transition-all duration-200 border-b-2 font-[family-name:var(--font-display)] ${
                activeTab === 'watch'
                  ? 'border-[var(--clr-primary)] text-[var(--clr-primary)]'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              <Eye className="w-4 h-4" />
              Watch Case Studies
            </button>
            <button
              onClick={() => setActiveTab('read')}
              className={`flex items-center gap-2 px-6 py-4 font-semibold text-sm transition-all duration-200 border-b-2 font-[family-name:var(--font-display)] ${
                activeTab === 'read'
                  ? 'border-[var(--clr-primary)] text-[var(--clr-primary)]'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              <BookOpen className="w-4 h-4" />
              Read Blogs
            </button>
          </div>
        </div>
      </section>

      {/* Watch Tab - Case Studies */}
      {activeTab === 'watch' && (
        <section className="py-16 lg:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24 lg:space-y-32">
          {caseStudies.map((study, index) => (
            <article 
              key={study.id}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center ${
                study.reverse ? 'lg:grid-flow-dense' : ''
              }`}
            >
              <div 
                className={`relative group cursor-pointer ${study.reverse ? 'lg:col-start-2' : ''}`}
                onClick={() => router.push(`/case-studies/${study.slug}`)}
              >
                <VideoPlayer 
                  videoUrl={study.videoUrl}
                  posterUrl={study.posterUrl}
                  title={study.title}
                />
                <div className={`absolute -z-10 w-full h-full rounded-2xl bg-[var(--clr-primary)]/10 top-4 ${study.reverse ? 'right-4' : 'left-4'}`} />
                {/* Click overlay */}
                <div className="absolute inset-0 rounded-2xl flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                  <div className="bg-white/90 backdrop-blur-sm px-6 py-3 rounded-full shadow-lg flex items-center gap-2">
                    <ExternalLink className="w-4 h-4 text-[var(--clr-primary)]" />
                    <span className="text-sm font-semibold text-gray-900 font-[family-name:var(--font-display)]">View Details</span>
                  </div>
                </div>
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

                {/* Quick Stats */}
                <div className="flex gap-6">
                  {Object.entries(study.stats).map(([key, value]) => (
                    <div key={key}>
                      <div className="text-2xl font-bold text-[var(--clr-primary)] font-[family-name:var(--font-display)]">{value}</div>
                      <div className="text-xs text-gray-500 capitalize font-[family-name:var(--font-body)]">{key}</div>
                    </div>
                  ))}
                </div>

                <button
                  onClick={() => router.push(`/case-studies/${study.slug}`)}
                  className="inline-flex items-center gap-2 text-[var(--clr-primary)] font-semibold hover:text-[var(--clr-secondary)] transition-colors group font-[family-name:var(--font-display)]"
                >
                  View Full Case Study 
                  <ArrowUpRight className="w-5 h-5 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </button>
              </div>
            </article>
          ))}
        </section>
      )}

      {/* Read Tab - Blogs */}
      {activeTab === 'read' && (
        <section className="py-16 lg:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogs.map((blog) => (
              <article 
                key={blog.id}
                className="group bg-white rounded-2xl border border-gray-200 overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                {/* Blog Image */}
                <Link href={`/blogs/${blog.slug}`} className="block relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={blog.image}
                    alt={blog.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Category Badge */}
                  <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-white/90 backdrop-blur-sm text-xs font-semibold text-gray-900 font-[family-name:var(--font-display)]">
                    {blog.category}
                  </span>
                </Link>

                {/* Blog Content */}
                <div className="p-6">
                  {/* Meta Info */}
                  <div className="flex items-center gap-4 text-xs text-gray-500 mb-3 font-[family-name:var(--font-body)]">
                    <span className="flex items-center gap-1">
                      <User className="w-3 h-3" />
                      {blog.author}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {blog.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {blog.readTime}
                    </span>
                  </div>

                  {/* Title */}
                  <Link href={`/blogs/${blog.slug}`}>
                    <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-[var(--clr-primary)] transition-colors line-clamp-2 font-[family-name:var(--font-display)]">
                      {blog.title}
                    </h3>
                  </Link>

                  {/* Excerpt */}
                  <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3 font-[family-name:var(--font-body)] font-light">
                    {blog.excerpt}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {blog.tags.map((tag) => (
                      <span key={tag} className="px-2 py-1 rounded-md bg-gray-100 text-gray-600 text-[11px] font-medium font-[family-name:var(--font-display)]">
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Read More Link */}
                  <Link 
                    href={`/blogs/${blog.slug}`}
                    className="inline-flex items-center gap-1 text-sm font-semibold text-[var(--clr-primary)] hover:text-[var(--clr-secondary)] transition-colors font-[family-name:var(--font-display)]"
                  >
                    Read Article
                    <ArrowUpRight className="w-4 h-4" />
                  </Link>
                </div>
              </article>
            ))}
          </div>

          {/* View All Blogs CTA */}
          <div className="text-center mt-12">
            <Link
              href="/blogs"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gray-900 text-white rounded-lg font-semibold hover:bg-gray-800 transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 font-[family-name:var(--font-display)]"
            >
              View All Articles
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </section>
      )}

      {/* Bottom CTA Section */}
      <section className="py-16 lg:py-24 bg-white border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-[family-name:var(--font-display)] font-bold text-gray-900 mb-4">
            Ready to Create Your Success Story?
          </h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto font-[family-name:var(--font-body)] font-light">
            Let's discuss how Zexcel Medical Communications can help you achieve your marketing objectives with tailored medical communication strategies.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-[var(--clr-primary)] hover:bg-[var(--clr-secondary)] text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 font-[family-name:var(--font-display)]"
            >
              Start Your Project
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link 
              href="/services"
              className="inline-flex items-center justify-center gap-2 border-2 border-gray-200 hover:border-[var(--clr-primary)] text-gray-700 hover:text-[var(--clr-primary)] px-8 py-4 rounded-lg font-semibold transition-all duration-300 font-[family-name:var(--font-display)]"
            >
              View Our Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}