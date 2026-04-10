'use client';

import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { motion, useScroll, useTransform, useSpring, useMotionValue } from 'framer-motion';
import { ArrowUpRight, ChevronRight, Quote, Award, Globe, Heart, Zap, Mail } from 'lucide-react';
import Image from 'next/image';
import { Timeline, TimelineItem } from '../../components/about-us/modern-timeline';
import { TeamSection } from '../../components/about-us/team';
import { LinkedinLogoIcon, TwitterLogoIcon } from '@phosphor-icons/react';

// Custom cursor component
const CustomCursor = () => {
  const cursorX = useMotionValue(0);
  const cursorY = useMotionValue(0);
  
  const springConfig = { damping: 25, stiffness: 700 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };
    window.addEventListener('mousemove', moveCursor);
    return () => window.removeEventListener('mousemove', moveCursor);
  }, [cursorX, cursorY]);

  return (
    <motion.div
      className="fixed top-0 left-0 w-5 h-5 bg-blue-500 rounded-full pointer-events-none z-[9999] mix-blend-difference hidden lg:block"
      style={{
        x: cursorXSpring,
        y: cursorYSpring,
        translateX: '-50%',
        translateY: '-50%',
      }}
    />
  );
};

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
    imageSrc: "https://images.unsplash.com/photo-157349极简主义9142-b8d87734a5a2?w=400&h=400&fit=crop&crop=face",
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

// Geometric background pattern component
const GeometricPattern = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="absolute top-0 left-0 w-64 h-64 border-2 border-blue-400/20 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute top-0 right-0 w-48 h-48 border-2 border-emerald-400/20 rounded-lg translate-x-1/2 -translate-y-1/2 rotate-45"></div>
      <div className="absolute bottom-0 left-0 w-56 h-56 border-2 border-purple-400/20 rounded-lg -translate-x-1/2 translate-y-1/2 rotate-12"></div>
      <div className="absolute bottom-0 right-0 w-40 h-40 border-2 border-amber-400/20 rounded-full translate-x-1/2 translate-y-1/2"></div>
    </div>
  );
};

// Animated floating elements
const FloatingElements = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <motion.div
        animate={{
          y: [0, -20, 0],
          rotate: [0, 5, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-1/4 left-1/4 w-8 h-8 bg-blue-500/10 rounded-full"
      ></motion.div>
      <motion.div
        animate={{
          y: [0, 15, 0],
          rotate: [0, -5, 0],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
        className="absolute top-1/3 right-1/4 w-6 h-6 bg-emerald-500/10 rounded-lg"
      ></motion.div>
      <motion.div
        animate={{
          y: [0, -15, 0],
          rotate: [0, 8, 0],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
        className="absolute bottom-1/4 left-1/3 w-10 h-10 bg-purple-500/10 rounded-lg"
      ></motion.div>
    </div>
  );
};

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
    <div ref={containerRef} className="relative min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 overflow-hidden py-24">
      <GeometricPattern />
      <FloatingElements />
      
      <div className="max-w-7xl mx-auto px-8 relative z-10">
        <motion.div 
          style={{ opacity }}
          className="text-center mb-20"
        >
          <span className="text-blue-600 font-medium text-sm tracking-wider uppercase mb-4 block">Our Purpose</span>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Vision & Mission</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Guiding principles that shape our approach to corporate gifting and client relationships
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div style={{ y: y1 }} className="relative">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              className="bg-white p-10 rounded-2xl shadow-lg border border-slate-100 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 rounded-bl-full"></div>
              <span className="text-blue-600 font-medium text-sm tracking-wider uppercase mb-4 block">Vision</span>
              <h3 className="text-3xl font-bold text-slate-900 leading-tight mb-6">
                We imagine a world where every gift tells a story
              </h3>
              <p className="text-slate-600 leading-relaxed">
                Our vision extends beyond transactions. We see gifting as a language of appreciation, 
                a bridge between cultures, and a catalyst for lasting business relationships.
              </p>
              <div className="mt-8 w-16 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full"></div>
            </motion.div>
          </motion.div>

          <motion.div style={{ y: y2 }} className="relative">
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="bg-white p-10 rounded-2xl shadow-lg border border-slate-100 relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-32 h-32 bg-emerald-500/5 rounded-br-full"></div>
              <span className="text-emerald-600 font-medium text-sm tracking-wider uppercase mb-4 block">Mission</span>
              <h3 className="text-3xl font-bold text-slate-900 leading-tight mb-6">
                Engineering delight through thoughtful design
              </h3>
              <p className="text-slate-600 leading-relaxed">
                We combine data-driven insights with creative intuition to craft gifting experiences 
                that resonate emotionally while delivering measurable business impact.
              </p>
              <div className="mt-8 w-16 h-1 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full"></div>
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
    <section className="py-24 bg-gradient-to-br from-slate-900 to-blue-900 relative overflow-hidden">
      <GeometricPattern />
      <FloatingElements />
      
      <div className="max-w-7xl mx-auto px-8 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16">
          <div className="lg:w-2/5 text-white">
            <motion.span 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-blue-400 font-medium text-sm tracking-wider uppercase mb-4 block"
            >
              Why Choose Us
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-3xl md:text-4xl font-bold leading-tight mb-6"
            >
              The difference is in the details
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-slate-300 leading-relaxed mb-8"
            >
              We don't just deliver gifts. We deliver experiences, memories, and 
              moments of genuine connection that strengthen your business relationships.
            </motion.p>
            
            <MagneticButton className="bg-white text-slate-900 px-6 py-3 rounded-full font-medium flex items-center gap-2 hover:bg-slate-100 transition-colors group">
              Start a Project
              <ArrowUpRight className="group-hover:rotate-45 transition-transform" size={18} />
            </MagneticButton>
          </div>

          <div className="lg:w-3/5 grid grid-cols-1 md:grid-cols-2 gap-6">
            {reasons.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                onMouseEnter={() => setHoveredIndex(idx)}
                onMouseLeave={() => setHoveredIndex(null)}
                className={`relative p-6 rounded-2xl cursor-pointer transition-all duration-500 overflow-hidden ${hoveredIndex === idx ? 'bg-white scale-105 shadow-xl' : 'bg-white/10 backdrop-blur-sm'}`}
              >
                <div className="absolute inset-0 bg-gradient-to-br opacity-0 transition-opacity duration-500 hover:opacity-10 ${item.color}"></div>
                
                <div className={`w-12 h-12 rounded-xl ${item.bgColor} flex items-center justify-center mb-4 relative z-10`}>
                  <item.icon size={24} className={hoveredIndex === idx ? 'text-white' : `text-gradient ${item.color}`} />
                </div>
                <h3 className={`text-xl font-bold mb-2 transition-colors relative z-10 ${hoveredIndex === idx ? 'text-slate-900' : 'text-white'}`}>
                  {item.title}
                </h3>
                <p className={`transition-colors relative z-10 ${hoveredIndex === idx ? 'text-slate-600' : 'text-slate-300'}`}>
                  {item.desc}
                </p>
                
                <div className={`absolute top-6 right-6 w-8 h-8 rounded-full flex items-center justify-center transition-all ${hoveredIndex === idx ? 'bg-slate-900 text-white rotate-45' : 'bg-white/20 text-white'}`}>
                  <ArrowUpRight size={16} />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// Main Page Component
export default function AboutUsPage() {
  return (
    <div className="bg-white min-h-screen selection:bg-blue-500 selection:text-white cursor-none lg:cursor-auto">
      <CustomCursor />
      
      {/* Hero Section */}
      <section className="min-h-screen relative bg-gradient-to-br from-slate-50 to-blue-50 flex items-center justify-center overflow-hidden">
        <GeometricPattern />
        <FloatingElements />
        
        <div className="max-w-6xl mx-auto px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-slate-900 mb-6">
              We craft <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600">meaningful</span> corporate connections
            </h1>
          </motion.div>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.7 }}
            className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed mb-12"
          >
            Transforming business relationships into lasting impressions through thoughtfully designed gifting solutions.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="mt-16 flex justify-center gap-12 text-slate-900"
          >
            {[
              { number: "14+", label: "Years", color: "blue" },
              { number: "500+", label: "Clients", color: "emerald" },
              { number: "1M+", label: "Gifts", color: "purple" }
            ].map((item, idx) => (
              <div key={idx} className="text-center">
                <div className={`text-4xl font-bold mb-2 text-${item.color}-600`}>{item.number}</div>
                <div className="text-sm text-slate-500 uppercase tracking-wide">{item.label}</div>
              </div>
            ))}
          </motion.div>
        </div>

        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 text-slate-400"
        >
          <div className="w-6 h-10 rounded-full border-2 border-slate-400 flex justify-center p-2">
            <div className="w-1 h-2 bg-slate-400 rounded-full" />
          </div>
        </motion.div>
      </section>

      {/* Quote Section */}
      <section className="py-24 px-8 bg-white relative overflow-hidden">
        <GeometricPattern />
        
        <div className="max-w-4xl mx-auto relative z-10">
          <div className="relative">
            <Quote className="absolute -top-8 -left-8 w-20 h-20 text-slate-100" />
            <motion.blockquote 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7 }}
              className="text-3xl md:text-4xl font-light text-slate-900 leading-relaxed relative z-10"
            >
              &ldquo;Gifting is not about the price tag. It's about the thought, the timing, and the emotional resonance it creates.&rdquo;
            </motion.blockquote>
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="mt-8 flex items-center gap-4"
            >
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center text-white font-bold">
                RS
              </div>
              <div>
                <div className="font-bold text-slate-900">Rajesh Sharma</div>
                <div className="text-slate-500 text-sm">Founder & CEO</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-24 px-8 bg-gradient-to-br from-slate-50 to-blue-50 relative overflow-hidden">
        <GeometricPattern />
        
        <div className="max-w-4xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="mb-16 text-center"
          >
            <span className="text-blue-600 font-medium text-sm tracking-wider uppercase block mb-4">Our Journey</span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Company Timeline</h2>
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
      <section className="py-24 bg-gradient-to-br from-blue-600 to-cyan-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1519681393784-d120267933ba?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center opacity-10"></div>
        
        <div className="max-w-4xl mx-auto text-center px-8 relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Let's create something extraordinary together
          </h2>
          <p className="text-blue-100 mb-10 max-w-2xl mx-auto">
            Ready to transform your corporate gifting strategy with innovative solutions that leave lasting impressions?
          </p>
          <MagneticButton className="bg-white text-blue-600 px-8 py-4 rounded-full font-bold hover:shadow-2xl transition-shadow flex items-center gap-2 mx-auto">
            Get in Touch
            <ArrowUpRight size={20} />
          </MagneticButton>
        </div>
      </section>
    </div>
  );
}
