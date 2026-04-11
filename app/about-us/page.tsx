'use client';

import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { motion, useScroll, useTransform, useSpring, useMotionValue } from 'framer-motion';
import { ArrowUpRight, ChevronRight, Quote, Award, Globe, Heart, Zap, Mail, Sparkles, Gift, Package, Users } from 'lucide-react';
import Image from 'next/image';
import { Timeline, TimelineItem } from '../../components/about-us/modern-timeline';
import { TeamSection } from '../../components/about-us/team';
import { LinkedinLogoIcon, TwitterLogoIcon } from '@phosphor-icons/react';

// Magnetic button component
const MagneticButton = ({ children, className }: { children: React.ReactNode; className?: string }) => {
  const ref = useRef<HTMLButtonElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouse = (e: React.MouseEvent<HTMLButtonElement>) => {
    const { clientX, clientY } = e;
    const { left, top, width, height } = ref.current!.getBoundingClientRect();
    const x = clientX - (left + width / 2);
    const y = clientY - (top + height / 2);
    setPosition({ x: x * 0.3, y: y * 0.3 });
  };

  const reset = () => setPosition({ x: 0, y: 0 });

  const { x, y } = position;
  return (
    <motion.button
      ref={ref}
      onMouseMove={handleMouse}
      onMouseLeave={reset}
      animate={{ x, y }}
      transition={{ type: "spring", stiffness: 350, damping: 15, mass: 0.5 }}
      className={className}
    >
      {children}
    </motion.button>
  );
};

// Timeline data
const timelineItems: TimelineItem[] = [
  {
    title: "Founded in Mumbai",
    description: "Started our journey with a simple idea: to revolutionize corporate gifting. Born in a small garage with just 3 passionate team members and a vision to transform how businesses express appreciation.",
    date: "2010-01-15",
    category: "Foundation",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=150&h=150&fit=crop&crop=face",
    status: "completed"
  },
  {
    title: "First Fortune 500 Client",
    description: "Bagged our first major enterprise client from the pharmaceutical industry. Successfully delivered 10,000+ customized gift sets, establishing our credibility in the corporate gifting space.",
    date: "2013-06-20",
    category: "Growth",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=150&h=150&fit=crop&crop=face",
    status: "completed"
  },
  {
    title: "National Expansion",
    description: "Opened offices in Delhi and Bangalore to serve clients across India. Launched our personalized gifting division with dedicated design team and state-of-the-art production facility.",
    date: "2016-09-10",
    category: "Expansion",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=150&h=150&fit=crop&crop=face",
    status: "completed"
  },
  {
    title: "Digital Transformation",
    description: "Introduced AI-powered customization platform with real-time order tracking. Achieved 99% client retention rate and pioneered eco-friendly gifting solutions in the Indian market.",
    date: "2019-03-15",
    category: "Innovation",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=150&h=150&fit=crop&crop=face",
    status: "completed"
  },
  {
    title: "Industry Leadership",
    description: "Recognized as India's leading corporate gifting partner with 500+ enterprise clients. Crossed 50Cr revenue milestone and expanded team to 120+ professionals across 4 cities.",
    date: "2023-08-01",
    category: "Achievement",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=150&h=150&fit=crop&crop=face",
    status: "completed"
  },
  {
    title: "Sustainable Gifting Initiative",
    description: "Launching our carbon-neutral gifting line with 100% sustainable packaging and eco-friendly products. Currently beta testing with 50+ environmentally conscious enterprise clients.",
    date: "2024-06-01",
    category: "Sustainability",
    image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=150&h=150&fit=crop&crop=face",
    status: "current"
  },
  {
    title: "Global Expansion",
    description: "Expanding operations to SE Asia and Middle East markets. Building partnerships with international suppliers to offer globally sourced premium corporate gifts with local customization.",
    date: "2025-01-01",
    category: "Global",
    image: "https://images.unsplash.com/photo-152677854a4-4d21e3cb4c5e?w=150&h=150&fit=crop&crop=face",
    status: "upcoming"
  },
  {
    title: "Tech-Enabled Gifting Platform",
    description: "Developing AR-enabled gift preview experience and blockchain-based authenticity verification for luxury gifts. Preparing for Series A funding to scale technology infrastructure.",
    date: "2025-06-01",
    category: "Technology",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=150&h=150&fit=crop&crop=face",
    status: "upcoming"
  }
];

// Team data for TeamSection
const teamMembers = [
  {
    name: "Rajesh Sharma",
    designation: "Founder & CEO",
    imageSrc: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop&crop=face",
    socialLinks: [
      { icon: LinkedinLogoIcon, href: "#" },
      { icon: TwitterLogoIcon, href: "#" },
      { icon: Mail, href: "mailto:rajesh@company.com" }
    ]
  },
  {
    name: "Priya Patel",
    designation: "Creative Director",
    imageSrc: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop&crop=face",
    socialLinks: [
      { icon: LinkedinLogoIcon, href: "#" },
      { icon: TwitterLogoIcon, href: "#" }
    ]
  },
  {
    name: "Amit Kumar",
    designation: "Head of Operations",
    imageSrc: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
    socialLinks: [
      { icon: LinkedinLogoIcon, href: "#" },
      { icon: Mail, href: "mailto:amit@company.com" }
    ]
  }
];

// Vision & Mission Section
const VisionSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [80, -80]);
  const y2 = useTransform(scrollYProgress, [0, 1], [-80, 80]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  return (
    <div ref={containerRef} className="relative py-20 md:py-28" style={{ background: "#fff" }}>
      <div className="ui-container">
        <motion.div 
          style={{ opacity }}
          className="text-center mb-12"
        >
          <p
            className="text-[11px] font-bold uppercase tracking-[0.2em] mb-3 flex items-center justify-center gap-2"
            style={{ color: "var(--clr-primary)" }}
          >
            <span className="inline-block w-5 h-[1.5px]" style={{ background: "var(--clr-primary)" }} />
            OUR PURPOSE
          </p>
          <h2
            className="text-3xl md:text-4xl font-extrabold tracking-tight mb-4"
            style={{ color: "var(--clr-text-dark)" }}
          >
            Vision & Mission
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Guiding principles that shape our approach to corporate gifting and client relationships
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <motion.div style={{ y: y1 }} className="relative">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              className="group relative flex flex-col gap-4 p-8 overflow-hidden cursor-default transition-colors duration-200"
              style={{ background: "#fff" }}
              onMouseEnter={e => (e.currentTarget.style.background = "#f0f9ff")}
              onMouseLeave={e => (e.currentTarget.style.background = "#fff")}
            >
              <span
                className="absolute bottom-0 left-0 right-0 h-[2px] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"
                style={{ background: "var(--clr-primary)" }}
              />
              <span className="text-blue-600 font-medium text-sm tracking-wider uppercase mb-4 block">Vision</span>
              <h3 className="text-2xl font-bold text-slate-900 leading-tight mb-4">
                We imagine a world where every gift tells a story
              </h3>
              <p className="text-slate-600 leading-relaxed">
                Our vision extends beyond transactions. We see gifting as a language of appreciation, 
                a bridge between cultures, and a catalyst for lasting business relationships.
              </p>
              <div className="mt-4 w-16 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full"></div>
            </motion.div>
          </motion.div>

          <motion.div style={{ y: y2 }} className="relative">
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="group relative flex flex-col gap-4 p-8 overflow-hidden cursor-default transition-colors duration-200"
              style={{ background: "#fff" }}
              onMouseEnter={e => (e.currentTarget.style.background = "#f0f9ff")}
              onMouseLeave={e => (e.currentTarget.style.background = "#fff")}
            >
              <span
                className="absolute bottom-0 left-0 right-0 h-[2px] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"
                style={{ background: "var(--clr-primary)" }}
              />
              <span className="text-emerald-600 font-medium text-sm tracking-wider uppercase mb-4 block">Mission</span>
              <h3 className="text-2xl font-bold text-slate-900 leading-tight mb-4">
                Engineering delight through thoughtful design
              </h3>
              <p className="text-slate-600 leading-relaxed">
                We combine data-driven insights with creative intuition to craft gifting experiences 
                that resonate emotionally while delivering measurable business impact.
              </p>
              <div className="mt-4 w-16 h-1 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full"></div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

// Why Us Section
const WhyUsSection = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const reasons = [
    { icon: Award, title: "Award Winning", desc: "Best Corporate Gifting Agency 2023", color: "from-amber-500 to-orange-500", bgColor: "bg-amber-500/10" },
    { icon: Globe, title: "Pan India", desc: "Delivery to 15,000+ pin codes", color: "from-blue-500 to-cyan-500", bgColor: "bg-blue-500/10" },
    { icon: Heart, title: "Client Love", desc: "98% client retention rate", color: "from-rose-500 to-pink-500", bgColor: "bg-rose-500/10" },
    { icon: Zap, title: "24hr Turnaround", desc: "Express customization & delivery", color: "from-emerald-500 to-teal-500", bgColor: "bg-emerald-500/10" },
  ];

  return (
    <section className="py-20 md:py-28" style={{ background: "#fff" }}>
      <div className="ui-container">
        <div className="flex flex-col lg:flex-row gap-12">
          <div className="lg:w-2/5">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mb-8"
            >
              <p
                className="text-[11px] font-bold uppercase tracking-[0.2em] mb-3 flex items-center gap-2"
                style={{ color: "var(--clr-primary)" }}
              >
                <span className="inline-block w-5 h-[1.5px]" style={{ background: "var(--clr-primary)" }} />
                WHY CHOOSE US
              </p>
              <h2
                className="text-3xl md:text-4xl font-extrabold tracking-tight mb-4"
                style={{ color: "var(--clr-text-dark)" }}
              >
                The difference is in the details
              </h2>
              <p className="text-slate-600 leading-relaxed">
                We don't just deliver gifts. We deliver experiences, memories, and 
                moments of genuine connection that strengthen your business relationships.
              </p>
            </motion.div>
            
            <MagneticButton className="bg-[var(--clr-primary)] text-white px-6 py-3 rounded-full font-medium flex items-center gap-2 hover:opacity-90 transition-opacity group">
              Start a Project
              <ArrowUpRight className="group-hover:rotate-45 transition-transform" size={18} />
            </MagneticButton>
          </div>

          <div className="lg:w-3/5 grid grid-cols-1 md:grid-cols-2 gap-6">
            {reasons.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className="group relative flex flex-col gap-4 p-6 overflow-hidden cursor-default transition-colors duration-200"
                style={{ background: "#fff" }}
                onMouseEnter={e => (e.currentTarget.style.background = "#f0f9ff")}
                onMouseLeave={e => (e.currentTarget.style.background = "#fff")}
              >
                <span
                  className="absolute bottom-0 left-0 right-0 h-[2px] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"
                  style={{ background: "var(--clr-primary)" }}
                />
                <div className={`w-12 h-12 rounded-xl ${item.bgColor} flex items-center justify-center mb-4`}>
                  <item.icon size={24} className="text-[var(--clr-primary)]" />
                </div>
                <h3 className="text-xl font-bold mb-2" style={{ color: "var(--clr-text-dark)" }}>
                  {item.title}
                </h3>
                <p className="text-slate-600">
                  {item.desc}
                </p>
                <div className="mt-4 flex items-center text-[var(--clr-primary)] font-medium text-sm">
                  Learn more
                  <ChevronRight size={16} className="ml-1" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// Floating Card Component for Hero
const FloatingCard = ({ children, className, delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay }}
    className={className}
  >
    <motion.div
      animate={{ y: [0, -10, 0] }}
      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay }}
    >
      {children}
    </motion.div>
  </motion.div>
);

// Main Page Component
export default function AboutUsPage() {
  return (
    <div className="bg-white min-h-screen selection:bg-blue-500 selection:text-white">
      
      {/* Modern Hero Section */}
      <section className="min-h-screen relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50">
        {/* Background Pattern */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-200/20 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-200/20 rounded-full blur-3xl" />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-blue-100/40 to-transparent rounded-full" />
        </div>

        <div className="ui-container relative z-10 min-h-screen flex items-center">
          <div className="grid lg:grid-cols-2 gap-12 items-center w-full py-20">
            
            {/* Left Content */}
            <div className="space-y-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 text-[var(--clr-primary)] text-sm font-medium"
              >
                <Sparkles size={16} />
                <span>India's Leading Corporate Gifting Partner</span>
              </motion.div>

              <motion.h1 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.1]"
              >
                <span className="text-slate-900">We craft</span>
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--clr-primary)] to-cyan-500">
                  meaningful
                </span>
                <br />
                <span className="text-slate-900">connections</span>
              </motion.h1>

              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-xl text-slate-600 max-w-lg leading-relaxed"
              >
                Transforming business relationships into lasting impressions through thoughtfully designed gifting solutions for 500+ enterprise clients.
              </motion.p>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="flex flex-wrap gap-4"
              >
                <MagneticButton className="bg-[var(--clr-primary)] text-white px-8 py-4 rounded-full font-semibold flex items-center gap-2 hover:shadow-lg hover:shadow-blue-500/25 transition-all group">
                  Explore Solutions
                  <ArrowUpRight className="group-hover:rotate-45 transition-transform" size={20} />
                </MagneticButton>
                
                <button className="px-8 py-4 rounded-full font-semibold text-slate-700 border border-slate-200 hover:border-[var(--clr-primary)] hover:text-[var(--clr-primary)] transition-colors flex items-center gap-2">
                  <PlayIcon />
                  Watch Our Story
                </button>
              </motion.div>

              {/* Stats Row */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="flex gap-8 pt-8 border-t border-slate-200"
              >
                {[
                  { number: "14+", label: "Years Experience" },
                  { number: "500+", label: "Enterprise Clients" },
                  { number: "1M+", label: "Gifts Delivered" }
                ].map((stat, idx) => (
                  <div key={idx}>
                    <div className="text-3xl font-bold text-slate-900">{stat.number}</div>
                    <div className="text-sm text-slate-500">{stat.label}</div>
                  </div>
                ))}
              </motion.div>
            </div>

            {/* Right Visual */}
            <div className="relative hidden lg:block h-[600px]">
              {/* Main Image */}
              <FloatingCard delay={0.2} className="absolute top-0 right-0 w-80 h-96 rounded-2xl overflow-hidden shadow-2xl shadow-blue-900/10">
                <Image 
                  src="https://images.unsplash.com/photo-1549465220-1a8b9238cd48?w=600&h=800&fit=crop" 
                  alt="Premium gift boxes" 
                  className="w-full h-full object-cover"
                  width={600}
                  height={800}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </FloatingCard>

              {/* Floating Stats Card */}
              <FloatingCard delay={0.4} className="absolute top-20 left-0 bg-white p-6 rounded-2xl shadow-xl border border-slate-100">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center">
                    <Heart className="text-emerald-600" size={24} />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-slate-900">98%</div>
                    <div className="text-sm text-slate-500">Client Retention</div>
                  </div>
                </div>
              </FloatingCard>

              {/* Floating Service Card */}
              <FloatingCard delay={0.6} className="absolute bottom-20 right-20 bg-white p-6 rounded-2xl shadow-xl border border-slate-100">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
                    <Package className="text-blue-600" size={24} />
                  </div>
                  <div>
                    <div className="text-lg font-bold text-slate-900">24hr</div>
                    <div className="text-sm text-slate-500">Express Delivery</div>
                  </div>
                </div>
              </FloatingCard>

              {/* Floating Users Card */}
              <FloatingCard delay={0.8} className="absolute bottom-0 left-10 bg-slate-900 text-white p-4 rounded-2xl shadow-xl">
                <div className="flex items-center gap-3">
                  <div className="flex -space-x-2">
                    {[1,2,3].map((i) => (
                      <div key={i} className="w-8 h-8 rounded-full border-2 border-slate-900 bg-slate-700 overflow-hidden">
                        <img src={`https://i.pravatar.cc/100?img=${i+10}`} alt="Team" width={32} height={32} />
                      </div>
                    ))}
                  </div>
                  <div className="text-sm font-medium">
                    <span className="text-emerald-400">120+</span> Team Members
                  </div>
                </div>
              </FloatingCard>

              {/* Decorative Elements */}
              <motion.div 
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute top-1/2 left-1/2 w-64 h-64 border border-dashed border-slate-200 rounded-full"
              />
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-6 h-10 rounded-full border-2 border-slate-300 flex justify-center p-2"
          >
            <div className="w-1 h-2 bg-slate-400 rounded-full" />
          </motion.div>
        </motion.div>
      </section>

      {/* Quote Section */}
      <section className="py-20 md:py-28" style={{ background: "#fff" }}>
        <div className="ui-container">
          <div className="max-w-4xl mx-auto">
            <div className="relative group">
              <Quote className="absolute -top-8 -left-8 w-20 h-20" style={{ color: "var(--clr-primary)", opacity: 0.15 }} />
              <motion.blockquote 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7 }}
                className="text-3xl md:text-4xl font-light text-slate-900 leading-relaxed relative z-10 pl-12"
              >
                &ldquo;Gifting is not about the price tag. It's about the thought, the timing, and the emotional resonance it creates.&rdquo;
              </motion.blockquote>
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
                className="mt-8 flex items-center gap-4 pl-12"
              >
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[var(--clr-primary)] to-cyan-500 flex items-center justify-center text-white font-bold">
                  RS
                </div>
                <div>
                  <div className="font-bold text-slate-900">Rajesh Sharma</div>
                  <div className="text-slate-500 text-sm">Founder & CEO</div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 md:py-28" style={{ background: "#fff" }}>
        <div className="ui-container">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-12 text-center"
          >
            <p
              className="text-[11px] font-bold uppercase tracking-[0.2em] mb-3 flex items-center justify-center gap-2"
              style={{ color: "var(--clr-primary)" }}
            >
              <span className="inline-block w-5 h-[1.5px]" style={{ background: "var(--clr-primary)" }} />
              OUR JOURNEY
            </p>
            <h2
              className="text-3xl md:text-4xl font-extrabold tracking-tight mb-4"
              style={{ color: "var(--clr-text-dark)" }}
            >
              Company Timeline
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto leading-relaxed">
              From a simple idea to a trusted partner for 500+ enterprises. 
              Follow our story of innovation, growth, and the amazing people who made it possible.
            </p>
          </motion.div>
          
          <Timeline items={timelineItems} />
        </div>
      </section>

      {/* Vision & Mission */}
      <VisionSection />

      {/* Why Us */}
      <WhyUsSection />

      {/* Team Section */}
      <TeamSection 
        title="Our Leadership"
        description="Meet the passionate leaders driving innovation in corporate gifting. Our diverse team brings together expertise in design, operations, and client relations."
        members={teamMembers}
        registerLink="/careers"
        className="bg-white py-24 relative overflow-hidden"
      />

      {/* Footer CTA */}
      <section className="py-20 md:py-28" style={{ background: "linear-gradient(to right, var(--clr-primary), #0ea5e9)" }}>
        <div className="ui-container text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-6">
            Let's create something extraordinary together
          </h2>
          <p className="text-blue-100 mb-10 max-w-2xl mx-auto">
            Ready to transform your corporate gifting strategy with innovative solutions that leave lasting impressions?
          </p>
          <MagneticButton className="bg-white text-[var(--clr-primary)] px-8 py-4 rounded-full font-bold hover:shadow-2xl transition-shadow flex items-center gap-2 mx-auto">
            Get in Touch
            <ArrowUpRight size={20} />
          </MagneticButton>
        </div>
      </section>
    </div>
  );
}

// Helper component for play icon
function PlayIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="5 3 19 12 5 21 5 3" />
    </svg>
  );
}
