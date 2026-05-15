// app/digital-services/page.tsx
'use client';

import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import {
  ArrowUpRight,
  LayoutDashboard,
  BarChart3,
  HeartPulse,
  Users,
  Globe,
  Smartphone,
  Video,
  Database,
  Sparkles,
  Zap,
  Check,
  ChevronLeft,
  ChevronRight,
  Target,
  Shield,
  Star,
  Clock,
  BarChart,
  Grid3X3,
  Eye,
} from 'lucide-react';

// ─── TYPES ──────────────────────────────────────────────────────────────────
interface DigitalProduct {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  stat?: string;
  statLabel?: string;
}

interface ServiceCategory {
  id: string;
  number: string;
  title: string;
  description: string;
  icon: React.ElementType;
  products: DigitalProduct[];
}

interface TableTopImage {
  id: string;
  src: string;
  title: string;
  category: string;
}

// ─── DATA ────────────────────────────────────────────────────────────────────
const serviceCategories: ServiceCategory[] = [
  {
    id: "customized-dashboard",
    number: "01",
    title: "Customized Dashboard",
    description: "Tailored analytics dashboards providing real-time insights and KPIs for pharmaceutical sales and marketing teams with role-based access.",
    icon: LayoutDashboard,
    products: [
      {
        id: "sales-dashboard",
        title: "Sales Performance Dashboard",
        description: "Real-time visualization of sales metrics, target achievements, and field force performance across territories.",
        image: "/koru/koru.png",
        tags: ["Real-time KPIs", "Territory Mapping", "Target Tracking"],
        stat: "45%",
        statLabel: "Faster Decisions"
      },
      {
        id: "marketing-dashboard",
        title: "Marketing Analytics Dashboard",
        description: "Campaign performance tracking with ROI measurement and HCP engagement metrics in one unified view.",
        image: "/koru/koru1.png",
        tags: ["Campaign ROI", "HCP Engagement", "Channel Analytics"]
      },
      {
        id: "executive-dashboard",
        title: "Executive Summary Dashboard",
        description: "High-level business overview with drill-down capabilities for senior management decision support.",
        image: "/koru/koru2.png",
        tags: ["Business Overview", "Trend Analysis", "Alert System"]
      },
      {
        id: "compliance-dashboard",
        title: "Compliance Monitoring Dashboard",
        description: "Regulatory compliance tracking with automated alerts and audit-ready reporting capabilities.",
        image: "/koru/koru3.png",
        tags: ["Audit Trail", "Regulatory Alerts", "Document Control"]
      },
      {
        id: "inventory-dashboard",
        title: "Inventory & Supply Chain Dashboard",
        description: "Stock level monitoring with predictive analytics for demand forecasting and distribution optimization.",
        image: "/koru/koru4.png",
        tags: ["Stock Alerts", "Demand Forecast", "Distribution Map"]
      },
      {
        id: "patient-dashboard",
        title: "Patient Program Dashboard",
        description: "Patient support program metrics including adherence rates, enrollment, and outcome measurements.",
        image: "/koru/koru5.png",
        tags: ["Adherence Tracking", "Enrollment Data", "Outcome Metrics"]
      }
    ]
  },
  {
    id: "customized-analytics",
    number: "02",
    title: "Customized Analytics",
    description: "Advanced pharmaceutical analytics solutions delivering deep insights into prescription patterns, market trends, and HCP behavior.",
    icon: BarChart3,
    products: [
      {
        id: "prescription-analytics",
        title: "Prescription Pattern Analysis",
        description: "Deep dive into prescribing behaviors with AI-powered pattern recognition and trend forecasting.",
        image: "/koru/koru6.png",
        tags: ["Rx Trends", "AI Predictions", "Segment Analysis"],
        stat: "92%",
        statLabel: "Accuracy Rate"
      },
      {
        id: "market-analytics",
        title: "Market Intelligence Platform",
        description: "Competitive landscape analysis with market share tracking and opportunity identification tools.",
        image: "/koru/koru7.png",
        tags: ["Market Share", "Competitor Analysis", "Growth Opportunities"]
      },
      {
        id: "hcp-profiling",
        title: "HCP Segmentation & Profiling",
        description: "Advanced healthcare professional segmentation based on prescribing patterns and engagement potential.",
        image: "/koru/koru8.png",
        tags: ["Behavioral Segments", "Potential Scoring", "Target Lists"]
      },
      {
        id: "territory-optimization",
        title: "Territory Optimization",
        description: "Data-driven territory alignment and resource allocation for maximum field force effectiveness.",
        image: "/koru/koru9.png",
        tags: ["Alignment Tools", "Resource Planning", "Coverage Maps"]
      },
      {
        id: "roi-analytics",
        title: "ROI Measurement Suite",
        description: "Comprehensive return on investment tracking across all marketing and sales initiatives.",
        image: "/koru/koru10.png",
        tags: ["Cost Analysis", "Revenue Attribution", "Efficiency Metrics"]
      },
      {
        id: "predictive-modeling",
        title: "Predictive Analytics Engine",
        description: "Machine learning models for demand forecasting, churn prediction, and launch planning.",
        image: "/koru/koru11.png",
        tags: ["ML Models", "Forecasting", "Risk Scoring"]
      }
    ]
  },
  {
    id: "health-risk-calculators",
    number: "03",
    title: "Health Risk Calculators",
    description: "Interactive health risk assessment tools that engage patients and HCPs while generating valuable health insights and leads.",
    icon: HeartPulse,
    products: [
      {
        id: "cardiac-risk",
        title: "Cardiovascular Risk Calculator",
        description: "Comprehensive heart disease risk assessment incorporating lifestyle, genetic, and clinical parameters.",
        image: "/koru/koru12.png",
        tags: ["Heart Score", "Lifestyle Factors", "Risk Stratification"],
        stat: "85%",
        statLabel: "Engagement Rate"
      },
      {
        id: "diabetes-risk",
        title: "Diabetes Risk Assessment",
        description: "Type 2 diabetes prediction tool with personalized prevention recommendations and lifestyle guidance.",
        image: "/koru/koru13.png",
        tags: ["Glucose Risk", "BMI Analysis", "Diet Recommendations"]
      },
      {
        id: "respiratory-risk",
        title: "Respiratory Health Calculator",
        description: "Lung function and respiratory disease risk evaluation with environmental factor analysis.",
        image: "/koru/koru14.png",
        tags: ["Lung Function", "COPD Risk", "Asthma Control"]
      },
      {
        id: "osteoporosis-risk",
        title: "Osteoporosis Risk Tool",
        description: "Bone health assessment incorporating age, lifestyle, and nutritional factors for fracture risk prediction.",
        image: "/koru/koru15.png",
        tags: ["Bone Density", "Fracture Risk", "Calcium Assessment"]
      },
      {
        id: "mental-health",
        title: "Mental Wellness Screener",
        description: "Standardized mental health screening tools with confidential results and resource recommendations.",
        image: "/koru/koru16.png",
        tags: ["Depression Scale", "Anxiety Score", "Wellness Tips"]
      },
      {
        id: "cancer-risk",
        title: "Cancer Risk Evaluator",
        description: "Evidence-based cancer risk assessment with family history and lifestyle factor integration.",
        image: "/koru/koru17.png",
        tags: ["Family History", "Lifestyle Score", "Screening Guide"]
      }
    ]
  },
  {
    id: "patient-support-programs",
    number: "04",
    title: "Patient Support Programs",
    description: "Comprehensive digital patient support ecosystems including medication adherence, education, and 24/7 assistance platforms.",
    icon: Users,
    products: [
      {
        id: "medication-adherence",
        title: "Medication Adherence Program",
        description: "Smart reminder system with progress tracking and healthcare provider notification capabilities.",
        image: "/koru/koru18.png",
        tags: ["Smart Reminders", "Progress Charts", "HCP Alerts"],
        stat: "78%",
        statLabel: "Adherence Improvement"
      },
      {
        id: "patient-education",
        title: "Patient Education Platform",
        description: "Interactive disease and treatment education with multimedia content and knowledge assessments.",
        image: "/koru/koru19.png",
        tags: ["Video Library", "Interactive Modules", "Knowledge Quiz"]
      },
      {
        id: "tele-support",
        title: "24/7 Patient Helpline",
        description: "Round-the-clock patient assistance with medication queries, side effect management, and emotional support.",
        image: "/koru/koru20.png",
        tags: ["24/7 Access", "Expert Counselors", "Multi-language"]
      },
      {
        id: "financial-support",
        title: "Financial Assistance Program",
        description: "Treatment cost management with insurance verification, co-pay assistance, and payment plan options.",
        image: "/koru/koru21.png",
        tags: ["Insurance Check", "Co-pay Help", "Payment Plans"]
      },
      {
        id: "wellness-program",
        title: "Wellness & Lifestyle Program",
        description: "Holistic health management with diet planning, exercise tracking, and stress management tools.",
        image: "/koru/koru22.png",
        tags: ["Diet Plans", "Activity Tracking", "Stress Management"]
      },
      {
        id: "caregiver-support",
        title: "Caregiver Support Network",
        description: "Resources and community support for patient caregivers including training and respite information.",
        image: "/koru/koru23.png",
        tags: ["Training Resources", "Support Groups", "Respite Care"]
      }
    ]
  },
  {
    id: "mini-websites",
    number: "05",
    title: "Mini Websites",
    description: "Dedicated micro-sites and landing pages for pharmaceutical brands, products, and disease awareness campaigns.",
    icon: Globe,
    products: [
      {
        id: "product-launch",
        title: "Product Launch Microsite",
        description: "Dedicated launch platform with product information, clinical data, and HCP resources in one place.",
        image: "/koru/koru24.png",
        tags: ["Product Info", "Clinical Data", "HCP Portal"],
        stat: "48hrs",
        statLabel: "Launch Time"
      },
      {
        id: "disease-awareness",
        title: "Disease Awareness Portal",
        description: "Educational microsite focused on disease state awareness with symptom checker and doctor locator.",
        image: "/koru/koru25.png",
        tags: ["Symptom Check", "Doctor Finder", "Patient Stories"]
      },
      {
        id: "hcp-portal",
        title: "HCP Resource Hub",
        description: "Professional portal with clinical resources, CME modules, and peer discussion forums for doctors.",
        image: "/koru/koru26.png",
        tags: ["Clinical Papers", "CME Credits", "Discussion Forum"]
      },
      {
        id: "campaign-landing",
        title: "Campaign Landing Pages",
        description: "High-conversion landing pages for digital marketing campaigns with A/B testing capabilities.",
        image: "/koru/koru27.png",
        tags: ["A/B Testing", "Lead Capture", "Analytics Integration"]
      },
      {
        id: "event-microsite",
        title: "Medical Event Microsite",
        description: "Conference and symposium websites with registration, agenda, and virtual attendance features.",
        image: "/koru/koru28.png",
        tags: ["Registration", "Live Stream", "Networking Tools"]
      },
      {
        id: "patient-community",
        title: "Patient Community Platform",
        description: "Moderated patient community with discussion forums, expert Q&A, and shared experiences.",
        image: "/koru/koru29.png",
        tags: ["Forums", "Expert Sessions", "Support Groups"]
      }
    ]
  },
  {
    id: "customized-apps",
    number: "06",
    title: "Customized Apps",
    description: "Native and cross-platform mobile applications tailored for pharmaceutical sales reps, HCPs, and patient engagement.",
    icon: Smartphone,
    products: [
      {
        id: "sales-rep-app",
        title: "Sales Force Automation App",
        description: "Mobile CRM with e-detailing, visit planning, and real-time reporting for field representatives.",
        image: "/koru/koru30.png",
        tags: ["Visit Planner", "E-detailing", "Offline Mode"],
        stat: "4.8/5",
        statLabel: "User Rating"
      },
      {
        id: "hcp-reference-app",
        title: "HCP Reference App",
        description: "Quick-reference medical app with drug database, clinical guidelines, and interaction checker.",
        image: "/koru/koru31.png",
        tags: ["Drug Database", "Guidelines", "Interaction Check"]
      },
      {
        id: "patient-wellness-app",
        title: "Patient Wellness Tracker",
        description: "Personal health companion app with medication tracking, symptom diary, and progress visualization.",
        image: "/koru/koru32.png",
        tags: ["Med Tracker", "Symptom Log", "Health Trends"]
      },
      {
        id: "event-app",
        title: "Medical Event App",
        description: "Conference companion with schedule builder, speaker profiles, and networking features.",
        image: "/koru/koru33.png",
        tags: ["Schedule", "Networking", "Live Polling"]
      },
      {
        id: "training-app",
        title: "Training & Assessment App",
        description: "Mobile learning platform with micro-learning modules, quizzes, and certification tracking.",
        image: "/koru/koru34.png",
        tags: ["Micro-learning", "Certifications", "Progress Track"]
      },
      {
        id: "telemedicine-app",
        title: "Telemedicine Platform",
        description: "Secure video consultation app with appointment scheduling and digital prescription capabilities.",
        image: "/koru/koru35.png",
        tags: ["Video Consult", "E-Prescription", "Secure Chat"]
      }
    ]
  },
  {
    id: "video-production",
    number: "07",
    title: "Video Production & Editing",
    description: "Professional medical video production services including 3D animations, MOA videos, and HCP testimonial content.",
    icon: Video,
    products: [
      {
        id: "moa-videos",
        title: "Mechanism of Action Videos",
        description: "Scientifically accurate 3D animations explaining drug mechanisms with stunning visual clarity.",
        image: "/koru/koru.png",
        tags: ["3D Animation", "Scientific Accuracy", "Multi-language"],
        stat: "500+",
        statLabel: "Videos Produced"
      },
      {
        id: "kol-interviews",
        title: "KOL Interview Series",
        description: "Professional filming and editing of key opinion leader interviews and expert discussions.",
        image: "/koru/koru1.png",
        tags: ["Studio Quality", "Multi-camera", "Post Production"]
      },
      {
        id: "patient-stories",
        title: "Patient Journey Documentaries",
        description: "Emotive patient story filming capturing real experiences with sensitivity and authenticity.",
        image: "/koru/koru2.png",
        tags: ["Real Stories", "Consent Managed", "Emotive Content"]
      },
      {
        id: "training-videos",
        title: "Training & Educational Videos",
        description: "Instructional content for sales teams, HCPs, and patients with clear visual demonstrations.",
        image: "/koru/koru3.png",
        tags: ["Step-by-step", "Assessments", "Interactive"]
      },
      {
        id: "product-demos",
        title: "Product Demonstration Videos",
        description: "Detailed product usage and device demonstration videos for HCP and patient education.",
        image: "/koru/koru4.png",
        tags: ["Device Usage", "Technique Demo", "Safety Info"]
      },
      {
        id: "corporate-videos",
        title: "Corporate & Brand Films",
        description: "Brand storytelling through cinematic corporate films that communicate vision and values.",
        image: "/koru/koru5.png",
        tags: ["Cinematic", "Brand Story", "Multi-purpose"]
      }
    ]
  },
  {
    id: "variable-data",
    number: "08",
    title: "Variable Data Collection & Printing",
    description: "Intelligent variable data solutions for personalized pharmaceutical marketing materials with automated data integration.",
    icon: Database,
    products: [
      {
        id: "personalized-print",
        title: "Personalized Print Materials",
        description: "Mass customization of visual aids, leave-behind cards, and brochures with HCP-specific content.",
        image: "/koru/koru6.png",
        tags: ["HCP Personalization", "Variable Content", "QR Integration"],
        stat: "3.2x",
        statLabel: "Response Rate"
      },
      {
        id: "digital-print",
        title: "Digital-to-Print Automation",
        description: "Automated workflow from digital campaigns to personalized physical mailers and follow-ups.",
        image: "/koru/koru7.png",
        tags: ["Workflow Automation", "Trigger-based", "Multi-channel"]
      },
      {
        id: "qr-codes",
        title: "Smart QR & PURL Generation",
        description: "Dynamic QR codes and personalized URLs for tracking engagement and campaign attribution.",
        image: "/koru/koru8.png",
        tags: ["Dynamic QR", "Trackable Links", "Analytics"]
      },
      {
        id: "data-collection",
        title: "Field Data Collection System",
        description: "Mobile data capture tools for field force to collect and sync HCP preferences and feedback.",
        image: "/koru/koru9.png",
        tags: ["Mobile Capture", "Real-time Sync", "Validation Rules"]
      },
      {
        id: "crm-integration",
        title: "CRM Integration Suite",
        description: "Seamless integration with major CRM platforms for automated data flow and campaign triggers.",
        image: "/koru/koru10.png",
        tags: ["CRM Sync", "API Integration", "Auto-updates"]
      },
      {
        id: "compliance-printing",
        title: "Compliance-Verified Printing",
        description: "Regulatory-compliant variable printing with automated approval workflows and audit trails.",
        image: "/koru/koru11.png",
        tags: ["Auto-approval", "Version Control", "Audit Ready"]
      }
    ]
  }
];

// ─── TABLE TOP GALLERY DATA ──────────────────────────────────────────────────
const tableTopImages: TableTopImage[] = [
  { id: "tt-1", src: "/koru/koru.png", title: "Custom Dashboard Interface", category: "Dashboard" },
  { id: "tt-2", src: "/koru/koru1.png", title: "Analytics Visualization", category: "Analytics" },
  { id: "tt-3", src: "/koru/koru2.png", title: "Health Risk Calculator", category: "HRA Tools" },
  { id: "tt-4", src: "/koru/koru3.png", title: "Patient Support Portal", category: "Patient Programs" },
  { id: "tt-5", src: "/koru/koru4.png", title: "Mini Website Design", category: "Websites" },
  { id: "tt-6", src: "/koru/koru5.png", title: "Mobile App Interface", category: "Apps" },
  { id: "tt-7", src: "/koru/koru6.png", title: "Video Production Still", category: "Video" },
  { id: "tt-8", src: "/koru/koru7.png", title: "Variable Data Print Sample", category: "Print" },
];

// ─── MAGNETIC BUTTON ─────────────────────────────────────────────────────────
function MagneticButton({ children, className, onClick }: { children: React.ReactNode; className?: string; onClick?: () => void }) {
  const ref = useRef<HTMLButtonElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouse = (e: React.MouseEvent) => {
    const { clientX, clientY } = e;
    const { left, top, width, height } = ref.current!.getBoundingClientRect();
    setPosition({
      x: (clientX - (left + width / 2)) * 0.3,
      y: (clientY - (top + height / 2)) * 0.3,
    });
  };

  return (
    <motion.button
      ref={ref}
      onMouseMove={handleMouse}
      onMouseLeave={() => setPosition({ x: 0, y: 0 })}
      animate={{ x: position.x, y: position.y }}
      className={className}
      onClick={onClick}
    >
      {children}
    </motion.button>
  );
}

// ─── SECTION BADGE ───────────────────────────────────────────────────────────
function SectionBadge({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <span className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold ${className}`}>
      {children}
    </span>
  );
}

// ─── PAGE ────────────────────────────────────────────────────────────────────
export default function DigitalServicesPage() {
  return (
    <div className="min-h-screen bg-white">
      <HeroBanner />
      {serviceCategories.map((category, index) => (
        <CategorySection key={category.id} category={category} index={index} />
      ))}
      <TableTopGallerySection />
    </div>
  );
}

// ─── HERO BANNER ─────────────────────────────────────────────────────────────
function HeroBanner() {
  return (
    <section className="relative w-full h-[50vh] md:h-[60vh] lg:h-[70vh] lg:mb-8 overflow-hidden">
      <Image
        src="/koru/koru.png"
        alt="Digital Products & Services"
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-slate-900/20 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10 lg:p-14">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <SectionBadge className="bg-white/10 backdrop-blur-md text-[#8bde7a] border border-white/20 mb-4">
              <Sparkles size={16} />
              Digital Transformation in Pharma
            </SectionBadge>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white leading-[1.1] mb-4"
          >
            Digital
            <span className="block text-[#8bde7a]">Services</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-lg md:text-xl text-white/80 max-w-2xl"
          >
            Empowering pharmaceutical companies with cutting-edge digital solutions
            that enhance HCP engagement and deliver measurable healthcare outcomes.
          </motion.p>
        </div>
      </div>
    </section>
  );
}

// ─── CATEGORY SECTION ────────────────────────────────────────────────────────
function CategorySection({ category, index }: { category: ServiceCategory; index: number }) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const Icon = category.icon;
  const isEven = index % 2 === 0;

  const updateScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 10);
    }
  };

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const card = scrollRef.current.querySelector('div');
      const amount = (card?.offsetWidth || 360) + 24;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -amount : amount,
        behavior: 'smooth'
      });
      setTimeout(updateScroll, 400);
    }
  };

  return (
    <section className={`pt-8 2xl:py-14 ${isEven ? 'bg-white' : 'bg-gradient-to-br from-[#0093cb]/[0.02] via-white to-[#00a65d]/[0.02]'}`}>
      <div className="max-w-7xl mx-auto px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          className=""
        >
          <div className="flex items-center gap-4 mb-2">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#0093cb] bg-[#0093cb]/10 px-3 py-1.5 rounded-full">
              {category.number}
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900">
              {category.title}
            </h2>
          </div>
          <p className="text-lg text-slate-600 max-w-2xl leading-relaxed">
            {category.description}
          </p>
          <div className="mt-4 w-20 h-1 bg-gradient-to-r from-[#0093cb] to-[#00a65d] rounded-full" />
        </motion.div>

        <div className="relative">
          <div className="flex justify-end gap-2 mb-2">
            <button
              onClick={() => scroll('left')}
              disabled={!canScrollLeft}
              className="w-11 h-11 rounded-full border-2 border-slate-200 flex items-center justify-center
                       text-slate-400 hover:text-[#0093cb] hover:border-[#0093cb]
                       disabled:opacity-30 disabled:cursor-not-allowed transition-all"
              aria-label="Scroll left"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => scroll('right')}
              disabled={!canScrollRight}
              className="w-11 h-11 rounded-full border-2 border-slate-200 flex items-center justify-center
                       text-slate-400 hover:text-[#0093cb] hover:border-[#0093cb]
                       disabled:opacity-30 disabled:cursor-not-allowed transition-all"
              aria-label="Scroll right"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          <div
            ref={scrollRef}
            onScroll={updateScroll}
            className="flex gap-6 2xl:gap-8 overflow-hidden pb-1"
          >
            {category.products.map((product, i) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="flex-shrink-0 w-[330px] sm:w-[370px] overflow-hidden lg:w-[280px]"
              >
                <ProductCard product={product} />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── PRODUCT CARD ────────────────────────────────────────────────────────────
function ProductCard({ product }: { product: DigitalProduct }) {
  return (
    <article className="group bg-white rounded-3xl overflow-hidden border border-slate-200 hover:border-[#00a65d]/30 hover:shadow-2xl hover:shadow-[#00a65d]/10 transition-all duration-500 h-full flex flex-col relative">
      <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-10"
        style={{
          background: 'radial-gradient(circle at center, rgba(0, 166, 93, 0.15) 0%, transparent 70%)',
        }}
      />

      <div className="relative h-72 overflow-hidden bg-slate-100">
        <Image
          src={product.image}
          alt={product.title}
          fill
          className="object-fill transition-transform duration-700 ease-out group-hover:scale-110"
          sizes="400px"
        />
      </div>

      <div className="p-3 2xl:p-6 flex flex-col flex-1 relative z-20">
        <h3 className="text-lg font-extrabold text-slate-900 mb-2 group-hover:text-[#00a65d] transition-colors duration-300">
          {product.title}
        </h3>
        <p className="text-sm text-slate-600 leading-relaxed mb-5 flex-1 line-clamp-2">
          {product.description}
        </p>
      </div>
    </article>
  );
}

// ─── TABLE TOP GALLERY SECTION ───────────────────────────────────────────────
function TableTopGallerySection() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [selectedImage, setSelectedImage] = useState<TableTopImage | null>(null);

  const updateScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 10);
    }
  };

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const card = scrollRef.current.querySelector('div');
      const amount = ((card?.offsetWidth || 280) + 20) * 2;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -amount : amount,
        behavior: 'smooth'
      });
      setTimeout(updateScroll, 400);
    }
  };

  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          className="mb-10"
        >
          <div className="flex items-center gap-4 mb-4">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#00a65d] bg-[#00a65d]/10 px-3 py-1.5 rounded-full">
              Gallery
            </span>
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#00a65d] to-[#8bde7a] flex items-center justify-center shadow-lg shadow-[#00a65d]/20">
              <Grid3X3 size={22} className="text-white" />
            </div>
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">
            Digital Services Gallery
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl leading-relaxed">
            Explore our collection of digital service interfaces and solutions crafted for
            pharmaceutical companies. Each design is meticulously created to enhance
            user engagement and deliver impactful digital experiences.
          </p>
          <div className="mt-4 w-20 h-1 bg-gradient-to-r from-[#00a65d] to-[#8bde7a] rounded-full" />
        </motion.div>

        <div className="hidden lg:grid lg:grid-cols-4 gap-5 mb-8">
          {tableTopImages.slice(0, 4).map((image, i) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              onClick={() => setSelectedImage(image)}
              className="group relative aspect-[4/3] rounded-2xl overflow-hidden cursor-pointer bg-slate-100 shadow-lg hover:shadow-2xl transition-all duration-500"
            >
              <Image
                src={image.src}
                alt={image.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                sizes="(max-width: 1024px) 50vw, 25vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute top-3 left-3">
                <span className="px-2.5 py-1 bg-white/90 backdrop-blur-sm rounded-full text-[10px] font-bold uppercase tracking-wider text-[#0093cb]">
                  {image.category}
                </span>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                <h4 className="text-white font-bold text-sm mb-1">{image.title}</h4>
                <span className="inline-flex items-center gap-1 text-[#8bde7a] text-xs font-semibold">
                  <Eye size={14} />
                  View Full Size
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="hidden lg:grid lg:grid-cols-4 gap-5">
          {tableTopImages.slice(4, 8).map((image, i) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: (i + 4) * 0.1 }}
              onClick={() => setSelectedImage(image)}
              className="group relative aspect-[4/3] rounded-2xl overflow-hidden cursor-pointer bg-slate-100 shadow-lg hover:shadow-2xl transition-all duration-500"
            >
              <Image
                src={image.src}
                alt={image.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                sizes="(max-width: 1024px) 50vw, 25vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute top-3 left-3">
                <span className="px-2.5 py-1 bg-white/90 backdrop-blur-sm rounded-full text-[10px] font-bold uppercase tracking-wider text-[#0093cb]">
                  {image.category}
                </span>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                <h4 className="text-white font-bold text-sm mb-1">{image.title}</h4>
                <span className="inline-flex items-center gap-1 text-[#8bde7a] text-xs font-semibold">
                  <Eye size={14} />
                  View Full Size
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-10 text-center lg:hidden"
        >
          <button className="inline-flex items-center gap-2 px-8 py-4 bg-slate-900 text-white rounded-full font-bold hover:bg-[#0093cb] transition-colors">
            View All Designs <ArrowUpRight size={18} />
          </button>
        </motion.div>
      </div>

      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="relative max-w-5xl w-full max-h-[90vh] rounded-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative aspect-[4/3]">
              <Image
                src={selectedImage.src}
                alt={selectedImage.title}
                fill
                className="object-contain"
              />
            </div>
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white hover:bg-white/20 transition-colors"
            >
              ✕
            </button>
            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
              <span className="text-[#8bde7a] text-xs font-bold uppercase tracking-wider">{selectedImage.category}</span>
              <h3 className="text-white text-xl font-bold mt-1">{selectedImage.title}</h3>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}