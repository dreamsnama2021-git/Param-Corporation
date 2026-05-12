// app/case-studies/[slug]/page.tsx
'use client';

import React, { useRef, useState, useEffect } from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { 
  Home, 
  ChevronRight, 
  Play, 
  Pause, 
  Building2, 
  Target,
  TrendingUp,
  Zap,
  CheckCircle2,
  Award,
  PhoneCall,
  Download,
  Share2,
  ArrowLeft,
  Clock,
  BarChart3,
  Users,
  Sparkles,
  Quote
} from 'lucide-react';

// ─── TYPES ──────────────────────────────────────────────────────────────────
interface CaseStudyData {
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
  challenge?: string;
  solution?: string;
  results?: string[];
  testimonial?: {
    quote: string;
    author: string;
    role: string;
    avatar?: string;
  };
  keyMetrics?: {
    label: string;
    value: string;
    icon: React.ElementType;
  }[];
}

// ─── DATA ────────────────────────────────────────────────────────────────────
const caseStudies: Record<string, CaseStudyData> = {
  'ent-strategy': {
    id: 1,
    title: "Transforming ENT Product Line Strategy",
    category: "Medical Communications",
    client: "Leading Pharma Co.",
    date: "2024",
    description: "Developed comprehensive medical communication strategy for ENT portfolio, resulting in 40% increase in physician engagement and successful launch of 3 new products.",
    videoUrl: "https://player.vimeo.com/external/458634952.sd.mp4?s=7b614e2d366e56e7e4ade0cafe166f541dde24b7&profile_id=164",
    posterUrl: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=600&fit=crop",
    slug: "ent-strategy",
    stats: { engagement: "+40%", reach: "2.5M+", products: "3" },
    challenge: "The client faced declining market share in their ENT portfolio due to increased competition and lack of differentiation in their medical communication approach. Physicians were not fully aware of the unique benefits of their products.",
    solution: "We developed a multi-channel medical communication strategy that included interactive scientific content, KOL engagement programs, and digital detailing tools. The strategy focused on highlighting clinical differentiators through compelling data visualization.",
    results: [
      "40% increase in physician engagement across all channels",
      "3 new products successfully launched within 12 months",
      "2.5M+ healthcare professionals reached through digital campaigns",
      "85% of targeted physicians reported improved product understanding",
      "25% reduction in time-to-adoption for new products"
    ],
    testimonial: {
      quote: "Zexcel transformed our medical communication approach. Their strategic insights and execution capabilities exceeded our expectations.",
      author: "Dr. Rajesh Kumar",
      role: "Medical Director, Leading Pharma Co."
    },
    keyMetrics: [
      { label: "Physician Engagement", value: "+40%", icon: TrendingUp },
      { label: "HCP Reach", value: "2.5M+", icon: Users },
      { label: "Products Launched", value: "3", icon: Sparkles },
      { label: "Time to Market", value: "-25%", icon: Clock }
    ]
  },
  'cardio-digital': {
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
    challenge: "The client needed to increase awareness and adoption of their cardio-diabetes portfolio in a highly competitive market with established players dominating physician mindshare.",
    solution: "We created an integrated digital campaign combining virtual KOL symposiums, interactive case studies, AI-powered content personalization, and real-time analytics dashboard for the sales team.",
    results: [
      "65% increase in HCP engagement with digital content",
      "5M+ impressions across all digital channels",
      "2 flagship products exceeded prescription targets by 30%",
      "92% of participating physicians rated content as 'highly valuable'",
      "40% increase in repeat visits to digital platform"
    ],
    testimonial: {
      quote: "The digital campaign delivered exceptional results. The personalized content approach significantly improved our physician relationships.",
      author: "Priya Sharma",
      role: "Head of Digital Marketing, Global Healthcare Brand"
    },
    keyMetrics: [
      { label: "Content Engagement", value: "+65%", icon: TrendingUp },
      { label: "Digital Reach", value: "5M+", icon: BarChart3 },
      { label: "Prescription Growth", value: "+30%", icon: Target },
      { label: "Content Rating", value: "92%", icon: Award }
    ]
  },
  'ortho-market-entry': {
    id: 3,
    title: "Orthopedics Market Entry Strategy",
    category: "Brand Strategy",
    client: "Medical Device Company",
    date: "2024",
    description: "Comprehensive market analysis and launch strategy for orthopedic implants, including surgeon training programs and patient education materials.",
    videoUrl: "https://player.vimeo.com/external/434045862.sd.mp4?s=7c8d9e0f1a2b3c4d5e6f7a8b9c0d1e2f3a4b5c6d&profile_id=164",
    posterUrl: "https://images.unsplash.com/photo-1551076805-e1869023e561?w=800&h=600&fit=crop",
    slug: "ortho-market-entry",
    stats: { engagement: "+120%", reach: "1.8M+", products: "5" },
    challenge: "A medical device company was entering the Indian orthopedic implant market and needed a comprehensive strategy to establish their brand presence and gain surgeon confidence.",
    solution: "We conducted extensive market research, developed surgeon education programs with hands-on workshops, created patient education materials in 12 languages, and built a digital platform for continuous surgeon engagement.",
    results: [
      "120% increase in market awareness within 6 months",
      "1.8M+ patients educated through digital and print materials",
      "5 product lines successfully launched",
      "200+ surgeons trained through workshops",
      "Achieved top 3 market position in key segments"
    ],
    testimonial: {
      quote: "Zexcel's market entry strategy was instrumental in our successful launch. Their understanding of the Indian healthcare landscape is unmatched.",
      author: "Michael Chen",
      role: "VP International Markets, Medical Device Company"
    },
    keyMetrics: [
      { label: "Market Awareness", value: "+120%", icon: TrendingUp },
      { label: "Patients Educated", value: "1.8M+", icon: Users },
      { label: "Products Launched", value: "5", icon: Sparkles },
      { label: "Surgeons Trained", value: "200+", icon: Award }
    ]
  }
};

// ─── ANIMATION VARIANTS ─────────────────────────────────────────────────────
const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
};

const fadeInLeft = {
  initial: { opacity: 0, x: -30 },
  animate: { opacity: 1, x: 0 },
};

const fadeInRight = {
  initial: { opacity: 0, x: 30 },
  animate: { opacity: 1, x: 0 },
};

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

// ─── VIDEO PLAYER COMPONENT ─────────────────────────────────────────────────
function VideoPlayer({ videoUrl, posterUrl, title }: { 
  videoUrl: string; 
  posterUrl: string; 
  title: string;
}) {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const togglePlay = () => {
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
    <motion.div 
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2, duration: 0.6 }}
      className="relative aspect-video rounded-3xl overflow-hidden shadow-2xl bg-gray-900 cursor-pointer group"
    >
      {/* Decorative border glow */}
      <div className="absolute -inset-1 bg-gradient-to-r from-[var(--clr-primary)] via-[var(--clr-secondary)] to-[var(--clr-primary)] rounded-3xl opacity-0 group-hover:opacity-20 blur transition-opacity duration-500" />
      
      <video
        ref={videoRef}
        className="w-full h-full object-cover rounded-3xl relative z-10"
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
      
      {/* Gradient overlay */}
      <div className={`absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent rounded-3xl transition-opacity duration-500 z-20 ${isPlaying ? 'opacity-0' : 'opacity-100'}`} />
      
      {/* Subtle pattern overlay */}
      <div className="absolute inset-0 opacity-10 z-20 pointer-events-none">
        <svg width="100%" height="100%">
          <pattern id="video-pattern" width="40" height="40" patternUnits="userSpaceOnUse">
            <circle cx="20" cy="20" r="0.5" fill="white" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#video-pattern)" />
        </svg>
      </div>
      
      {/* Play button */}
      <button
        onClick={togglePlay}
        className={`absolute inset-0 flex items-center justify-center z-30 transition-all duration-500 ${!isPlaying ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`}
      >
        <div className={`relative transition-all duration-500 ${isPlaying ? 'scale-75' : 'scale-100 group-hover:scale-110'}`}>
          {/* Ripple rings */}
          <div className="absolute inset-0 rounded-full border-2 border-white/30 animate-ping" />
          <div className="absolute inset-0 rounded-full border border-white/20 animate-pulse" />
          
          {/* Main button */}
          <div className="relative w-20 h-20 md:w-24 md:h-24 rounded-full bg-white/95 backdrop-blur-sm flex items-center justify-center shadow-2xl">
            {isPlaying ? (
              <Pause className="w-8 h-8 md:w-10 md:h-10 text-gray-900" />
            ) : (
              <Play className="w-8 h-8 md:w-10 md:h-10 text-gray-900 ml-1" />
            )}
          </div>
        </div>
      </button>
      
      {/* Video info bar */}
      <div className="absolute bottom-0 left-0 right-0 p-6 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
              <Play className="w-4 h-4 text-white" />
            </div>
            <span className="text-white/80 text-sm font-medium">Watch Case Study</span>
          </div>
          <span className="text-white/60 text-xs">Click to play</span>
        </div>
      </div>
    </motion.div>
  );
}

// ─── MAIN PAGE COMPONENT ────────────────────────────────────────────────────
export default function CaseStudyDetailPage() {
  const params = useParams();
  const slug = params.slug as string;
  const study = caseStudies[slug];

  if (!study) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-50 to-white">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center"
        >
          <div className="w-24 h-24 rounded-full bg-gray-100 flex items-center justify-center mx-auto mb-6">
            <Target className="w-12 h-12 text-gray-400" />
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-3 font-[family-name:var(--font-display)]">
            Case Study Not Found
          </h1>
          <p className="text-gray-500 mb-8 font-[family-name:var(--font-body)]">
            The case study you're looking for doesn't exist or has been moved.
          </p>
          <Link 
            href="/case-studies" 
            className="inline-flex items-center gap-2 px-6 py-3 bg-gray-900 text-white rounded-xl font-semibold hover:bg-gray-800 transition-all font-[family-name:var(--font-display)]"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Case Studies
          </Link>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen font-[family-name:var(--font-body)] bg-white">
      
      {/* ─── HERO SECTION ──────────────────────────────────────────────── */}
      <section className="relative bg-gradient-to-br from-[#0a0f1e] via-[#111827] to-[#0f172a] text-white py-24 lg:py-32 overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full opacity-30">
            <svg width="100%" height="100%">
              <defs>
                <pattern id="hero-grid" width="60" height="60" patternUnits="userSpaceOnUse">
                  <path d="M 60 0 L 0 0 0 60" fill="none" stroke="rgba(255,255,255,0.03)" strokeWidth="1" />
                </pattern>
                <radialGradient id="hero-glow-1" cx="30%" cy="20%">
                  <stop offset="0%" stopColor="rgba(0,147,203,0.3)" />
                  <stop offset="100%" stopColor="transparent" />
                </radialGradient>
                <radialGradient id="hero-glow-2" cx="70%" cy="80%">
                  <stop offset="0%" stopColor="rgba(0,166,93,0.2)" />
                  <stop offset="100%" stopColor="transparent" />
                </radialGradient>
              </defs>
              <rect width="100%" height="100%" fill="url(#hero-grid)" />
              <circle cx="30%" cy="20%" r="300" fill="url(#hero-glow-1)" className="animate-pulse" />
              <circle cx="70%" cy="80%" r="400" fill="url(#hero-glow-2)" className="animate-pulse" />
            </svg>
          </div>
        </div>
        
        {/* Floating orbs */}
        <div className="absolute top-20 left-10 w-64 h-64 bg-[var(--clr-primary)]/5 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-[var(--clr-secondary)]/5 rounded-full blur-3xl animate-float-delayed" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Breadcrumb */}
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="flex items-center gap-2 text-sm text-gray-400 mb-8"
          >
            <Link href="/" className="hover:text-white flex items-center gap-1.5 transition-colors group">
              <Home className="w-3.5 h-3.5" /> 
              <span>Home</span>
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <Link href="/case-studies" className="hover:text-white transition-colors">Case Studies</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-[var(--clr-primary)] font-medium">Case Study</span>
          </motion.div>
          
          {/* Badges */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex flex-wrap gap-3 mb-6"
          >
            <span className="px-4 py-1.5 rounded-full bg-[var(--clr-primary)]/20 backdrop-blur-sm text-[var(--clr-primary)] text-sm font-semibold border border-[var(--clr-primary)]/30 font-[family-name:var(--font-display)]">
              {study.category}
            </span>
            <span className="px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm text-white/80 text-sm font-medium border border-white/10 font-[family-name:var(--font-body)]">
              <Clock className="w-3.5 h-3.5 inline mr-1.5" />
              {study.date}
            </span>
            <span className="px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm text-white/80 text-sm font-medium border border-white/10 font-[family-name:var(--font-display)]">
              <Building2 className="w-3.5 h-3.5 inline mr-1.5" />
              {study.client}
            </span>
          </motion.div>
          
          {/* Title */}
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-4xl md:text-5xl lg:text-6xl font-[family-name:var(--font-display)] font-bold mb-6 leading-[1.1] max-w-4xl"
          >
            {study.title}
          </motion.h1>
          
          {/* Description */}
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-2xl font-[family-name:var(--font-body)] font-light"
          >
            {study.description}
          </motion.p>
          
          {/* Quick Stats */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex gap-8 mt-8 pt-8 border-t border-white/10"
          >
            {Object.entries(study.stats).map(([key, value]) => (
              <div key={key} className="text-center">
                <div className="text-3xl font-bold text-white font-[family-name:var(--font-display)]">{value}</div>
                <div className="text-xs text-gray-400 uppercase tracking-wider mt-1 font-[family-name:var(--font-body)]">{key}</div>
              </div>
            ))}
          </motion.div>
        </div>
        
        {/* Bottom gradient fade */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />
      </section>

      {/* ─── VIDEO SECTION ─────────────────────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-16 relative z-20">
        <VideoPlayer 
          videoUrl={study.videoUrl}
          posterUrl={study.posterUrl}
          title={study.title}
        />
      </section>

      {/* ─── KEY METRICS ────────────────────────────────────────────────── */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={stagger}
            className="grid grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {study.keyMetrics?.map((metric, idx) => (
              <motion.div
                key={idx}
                variants={fadeInUp}
                whileHover={{ y: -4 }}
                className="group relative"
              >
                <div className="relative p-6 rounded-2xl bg-white border border-gray-100 hover:border-[var(--clr-primary)]/20 transition-all duration-300 shadow-sm hover:shadow-xl overflow-hidden">
                  {/* Background gradient on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[var(--clr-primary)]/5 to-[var(--clr-secondary)]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  <div className="relative z-10">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[var(--clr-primary)] to-[var(--clr-secondary)] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                      <metric.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="text-3xl lg:text-4xl font-bold text-gray-900 mb-1 font-[family-name:var(--font-display)]">
                      {metric.value}
                    </div>
                    <div className="text-sm text-gray-500 font-[family-name:var(--font-body)]">
                      {metric.label}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ─── CLIENT INFO ────────────────────────────────────────────────── */}
      <section className="pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-4 p-4 rounded-2xl bg-gradient-to-r from-gray-50 to-white border border-gray-100 shadow-sm"
          >
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[var(--clr-primary)]/10 to-[var(--clr-secondary)]/10 flex items-center justify-center">
              <Building2 className="w-5 h-5 text-[var(--clr-primary)]" />
            </div>
            <div>
              <div className="text-xs text-gray-400 uppercase tracking-wider font-[family-name:var(--font-body)]">Client</div>
              <div className="font-semibold text-gray-900 font-[family-name:var(--font-display)]">{study.client}</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─── CHALLENGE & SOLUTION ────────────────────────────────────────── */}
      <section className="py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Challenge */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="group relative p-8 lg:p-10 rounded-3xl bg-gradient-to-br from-red-50/50 to-rose-50/50 border border-red-100/50 hover:shadow-lg transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-red-100 flex items-center justify-center">
                  <Target className="w-5 h-5 text-red-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 font-[family-name:var(--font-display)]">
                  The Challenge
                </h3>
              </div>
              <p className="text-gray-700 leading-relaxed text-lg font-[family-name:var(--font-body)] font-light">
                {study.challenge}
              </p>
              <div className="absolute top-0 right-0 w-24 h-24 bg-red-400/5 rounded-bl-3xl" />
            </motion.div>

            {/* Solution */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="group relative p-8 lg:p-10 rounded-3xl bg-gradient-to-br from-green-50/50 to-emerald-50/50 border border-green-100/50 hover:shadow-lg transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-green-100 flex items-center justify-center">
                  <Sparkles className="w-5 h-5 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 font-[family-name:var(--font-display)]">
                  Our Solution
                </h3>
              </div>
              <p className="text-gray-700 leading-relaxed text-lg font-[family-name:var(--font-body)] font-light">
                {study.solution}
              </p>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-green-400/5 rounded-tr-3xl" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── RESULTS ────────────────────────────────────────────────────── */}
      <section className="py-12 lg:py-16 bg-gradient-to-b from-white to-gray-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[var(--clr-primary)]/10 text-[var(--clr-primary)] text-sm font-semibold mb-4 font-[family-name:var(--font-display)]">
              <TrendingUp className="w-4 h-4" />
              Impact & Results
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 font-[family-name:var(--font-display)]">
              Delivering Measurable Outcomes
            </h2>
          </motion.div>

          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={stagger}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto"
          >
            {study.results?.map((result, idx) => (
              <motion.div
                key={idx}
                variants={fadeInUp}
                whileHover={{ scale: 1.02 }}
                className="group flex items-start gap-4 p-5 rounded-2xl bg-white border border-gray-100 hover:border-[var(--clr-primary)]/20 hover:shadow-md transition-all duration-300"
              >
                <div className="w-8 h-8 rounded-lg bg-green-100 flex items-center justify-center flex-shrink-0 group-hover:bg-green-200 transition-colors">
                  <CheckCircle2 className="w-4 h-4 text-green-600" />
                </div>
                <span className="text-gray-700 leading-relaxed font-[family-name:var(--font-body)] font-light pt-1">
                  {result}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ─── TESTIMONIAL ────────────────────────────────────────────────── */}
      {study.testimonial && (
        <section className="py-16 lg:py-24">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              {/* Decorative background */}
              <div className="absolute inset-0 bg-gradient-to-br from-[var(--clr-primary)]/5 to-[var(--clr-secondary)]/5 rounded-3xl blur-xl" />
              
              <div className="relative p-10 lg:p-14 rounded-3xl bg-white border border-gray-100 shadow-sm">
                {/* Quote icon */}
                <div className="absolute -top-5 -left-5 w-12 h-12 rounded-full bg-gradient-to-br from-[var(--clr-primary)] to-[var(--clr-secondary)] flex items-center justify-center shadow-lg">
                  <Quote className="w-5 h-5 text-white" />
                </div>
                
                <blockquote className="text-xl lg:text-2xl text-gray-800 leading-relaxed mb-8 font-[family-name:var(--font-body)] font-light italic">
                  &ldquo;{study.testimonial.quote}&rdquo;
                </blockquote>
                
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[var(--clr-primary)] to-[var(--clr-secondary)] flex items-center justify-center text-white font-bold text-lg shadow-md font-[family-name:var(--font-display)]">
                    {study.testimonial.author.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 text-lg font-[family-name:var(--font-display)]">
                      {study.testimonial.author}
                    </div>
                    <div className="text-gray-500 text-sm font-[family-name:var(--font-body)]">
                      {study.testimonial.role}
                    </div>
                  </div>
                </div>
                
                {/* Decorative line */}
                <div className="absolute bottom-0 left-10 right-10 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* ─── CTA SECTION ────────────────────────────────────────────────── */}
      <section className="py-16 lg:py-24 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4 font-[family-name:var(--font-display)]">
              Ready to Write Your Success Story?
            </h2>
            <p className="text-gray-600 mb-10 max-w-2xl mx-auto font-[family-name:var(--font-body)] font-light">
              Let&apos;s discuss how we can help you achieve similar results with a tailored strategy for your brand.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="group relative inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[var(--clr-primary)] to-[var(--clr-secondary)] text-white px-8 py-4 rounded-xl font-semibold hover:shadow-xl transition-all duration-300 font-[family-name:var(--font-display)] overflow-hidden"
              >
                <span className="relative z-10 flex items-center gap-2">
                  <PhoneCall className="w-5 h-5" />
                  Start a Similar Project
                </span>
                <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500" />
              </Link>
              
              <button className="inline-flex items-center justify-center gap-2 border-2 border-gray-200 text-gray-700 px-8 py-4 rounded-xl font-semibold hover:border-[var(--clr-primary)] hover:text-[var(--clr-primary)] hover:shadow-md transition-all duration-300 font-[family-name:var(--font-display)]">
                <Download className="w-5 h-5" />
                Download PDF
              </button>
              
              <button className="inline-flex items-center justify-center gap-2 border-2 border-gray-200 text-gray-700 px-8 py-4 rounded-xl font-semibold hover:border-[var(--clr-primary)] hover:text-[var(--clr-primary)] hover:shadow-md transition-all duration-300 font-[family-name:var(--font-display)]">
                <Share2 className="w-5 h-5" />
                Share
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}