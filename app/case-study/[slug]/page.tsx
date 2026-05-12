// app/case-studies/[slug]/page.tsx
'use client';

import React, { useRef, useState, useEffect } from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { motion } from 'framer-motion';
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
  Calendar,
  Tag
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
      { label: "HCP Reach", value: "2.5M+", icon: Zap },
      { label: "Products Launched", value: "3", icon: Zap },
      { label: "Adoption Time Reduced", value: "-25%", icon: Target }
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
      { label: "Digital Reach", value: "5M+", icon: Zap },
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
      { label: "Patients Educated", value: "1.8M+", icon: Zap },
      { label: "Products Launched", value: "5", icon: Zap },
      { label: "Surgeons Trained", value: "200+", icon: Award }
    ]
  }
};

// ─── VIDEO PLAYER COMPONENT ─────────────────────────────────────────────────
function VideoPlayer({ videoUrl, posterUrl, title, autoPlay = false }: { 
  videoUrl: string; 
  posterUrl: string; 
  title: string;
  autoPlay?: boolean;
}) {
  const [isPlaying, setIsPlaying] = useState(autoPlay);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (autoPlay && videoRef.current) {
      videoRef.current.play().catch(() => {
        setIsPlaying(false);
      });
    }
  }, [autoPlay]);

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
    <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl bg-gray-900 cursor-pointer group">
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
      
      <div className={`absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent transition-opacity duration-300 ${!isPlaying ? 'opacity-60' : 'opacity-0'}`} />
      
      <button
        onClick={togglePlay}
        className={`absolute inset-0 flex items-center justify-center transition-all duration-300 ${!isPlaying ? 'opacity-100' : 'opacity-0'}`}
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

// ─── MAIN PAGE COMPONENT ────────────────────────────────────────────────────
export default function CaseStudyDetailPage() {
  const params = useParams();
  const slug = params.slug as string;
  const study = caseStudies[slug];

  if (!study) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-2">Case Study Not Found</h1>
          <Link href="/case-studies" className="text-[var(--clr-primary)] hover:underline">
            Back to Case Studies
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen font-[family-name:var(--font-body)] bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#1a1a1a] to-[#2d2d2d] text-white py-16 lg:py-24 relative