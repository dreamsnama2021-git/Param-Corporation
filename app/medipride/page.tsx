"use client";

import React, { useState } from "react";
import {
  Phone,
  Mail,
  Star,
  Heart,
  Smile,
  CheckCircle,
  Wand2,
  MapPin,
  Menu,
  X,
  Clock,
  ArrowUpRight,
} from "lucide-react";
import {
  FileText,
  Users,
  Monitor,
  ShieldCheck,
  Lightbulb,
  Activity,
  ArrowRight,
  Microscope,
  BookOpen,
  Presentation,
  MousePointer2,
  FileBadge,
  Ruler,
  MonitorPlay,
  PencilRuler,
} from "lucide-react";
import { useEffect } from "react";
import { Layers, LayoutGrid, Eye } from "lucide-react";
import BentoGrid from "@/components/BentoGridProducts";
// --- Complete Product Data ---
const PRODUCT_DATA = [
  {
    category: "BOOKS & MAGAZINES",
    items: [
      {
        title: "Near Vision Chart",
        desc: "A portable, foldable tool for quick, accurate near vision assessment, featuring standard letters in multiple sizes.",
        img: "https://medipride.org/wp-content/uploads/2025/11/Clear-Vision.jpg",
      },
      {
        title: "Tooth Tales: A Visual Guide",
        desc: "A dental education book with detailed illustrations that help professionals clearly explain tooth care.",
        img: "https://medipride.org/wp-content/uploads/2025/11/Tooth-tales.jpg",
      },
      {
        title: "PCOS Book",
        desc: "PCOS Simplified – Understanding root causes, hormone imbalance, and the path to better management.",
        img: "https://medipride.org/wp-content/uploads/2025/11/PCOS.jpg",
      },
    ],
  },
  {
    category: "FLIP CHARTS",
    items: [
      {
        title: "ACS Flip Chart",
        desc: "Acute Coronary Syndrome tool with illustrated guides and a dry-erase back for clear patient education.",
        img: "https://medipride.org/wp-content/uploads/2025/11/Acute.jpg",
      },
      {
        title: "Type 2 Diabetes Risk",
        desc: "Flip-chart providing detailed information on Type 2 Diabetes Risk Factors and Prevention strategies.",
        img: "https://medipride.org/wp-content/uploads/2025/11/Type-2-Diabites.jpg",
      },
      {
        title: "Urinary Tract Flipchart",
        desc: "Featuring an illustration of the kidneys, ureters, and bladder for anatomical understanding.",
        img: "https://medipride.org/wp-content/uploads/2025/11/Urinary-Track.jpg",
      },
    ],
  },
  {
    category: "LAPTOP MATS",
    items: [
      {
        title: "Dosing Guide Mat",
        desc: "Quickly reference the Dosing Schedule, Administration, and Important Safety Information for clinical use.",
        img: "https://medipride.org/wp-content/uploads/2025/11/Dosage.jpg",
      },
      {
        title: "Human Ear Anatomy Mat",
        desc: "Detailed charts of the Human Ear's anatomy, including vascular supply and ossicles.",
        img: "https://medipride.org/wp-content/uploads/2025/11/Ear.jpg",
      },
      {
        title: "Stroke (NIHSS) Mat",
        desc: "Quickly reference Stroke symptoms and the critical NIHSS scale for rapid patient assessment.",
        img: "https://medipride.org/wp-content/uploads/2025/11/Strok.jpg",
      },
    ],
  },
  {
    category: "PATIENT EDUCATION POSTERS",
    items: [
      {
        title: "Epilepsy Poster",
        desc: "Explains Epilepsy signs and seizures (Focal vs. Generalized) and essential First Aid DOs and DON’Ts.",
        img: "https://medipride.org/wp-content/uploads/2025/11/Epilipsy-1.jpg",
      },
      {
        title: "Hearing Loss Poster",
        desc: "Details the Types of Hearing Loss along with their causes and offers Prevention Tips for auditory health.",
        img: "https://medipride.org/wp-content/uploads/2025/11/Hearning-loss.jpg",
      },
      {
        title: "Breast Cancer Poster",
        desc: "Outlines Symptoms, Risk Factors, Self-Examination Steps, and emphasizes Early Detection.",
        img: "https://medipride.org/wp-content/uploads/2025/11/Strok-1.jpg",
      },
    ],
  },
  {
    category: "SCALES",
    items: [
      {
        title: "JOINTS WOMAC Scale",
        desc: "A scale for assessing the severity of pain, stiffness, and physical function impact of osteoarthritis.",
        img: "https://medipride.org/wp-content/uploads/2025/11/Ortho.jpg",
      },
      {
        title: "GERD RULER",
        desc: "A scoring scale used to classify the severity of GERD (heartburn) into mild, moderate, or severe.",
        img: "https://medipride.org/wp-content/uploads/2025/11/Medipride-3D-Model.jpg",
      },
      {
        title: "Major Cardiovascular Scale",
        desc: "Medication indicators for easing vascular flow and reducing cardiovascular event risks.",
        img: "https://medipride.org/wp-content/uploads/2025/11/Dosage-1.jpg",
      },
    ],
  },
  {
    category: "TABLE TOPS",
    items: [
      {
        title: "Facial Muscle Anatomy",
        desc: "A sharp, full-color glass-print display of facial muscle anatomy for professional reference.",
        img: "https://medipride.org/wp-content/uploads/2025/11/Facial-muscle-anotomy-glass-printing-1.jpg",
      },
      {
        title: "Live Life Table Top",
        desc: "An engaging 24-hour visual routine wheel that guides lifestyle adjustments for bladder health.",
        img: "https://medipride.org/wp-content/uploads/2025/11/LLU-1.jpg",
      },
      {
        title: "Benitowa PCOS",
        desc: "Interactive display module for women's health clinics and educational environments.",
        img: "https://medipride.org/wp-content/uploads/2025/11/Benitowa-PCOS-1.jpg",
      },
    ],
  },
  {
    category: "WRITE & WIPE",
    items: [
      {
        title: "Ortho Edu Stand",
        desc: "Write & Wipe tool detailing the stages, risk factors, and treatment for Osteoporosis.",
        img: "https://medipride.org/wp-content/uploads/2025/11/Ortho-1.jpg",
      },
      {
        title: "PCOS Edu Stand",
        desc: "Visually explaining the reproductive systems, PCOS definition, signs, and complications.",
        img: "https://medipride.org/wp-content/uploads/2025/11/PCOS-1.jpg",
      },
      {
        title: "Diabetes Card Set",
        desc: "Interactive card set for learning the causes, symptoms, and management of Diabetes.",
        img: "https://medipride.org/wp-content/uploads/2025/11/Diabites.jpg",
      },
    ],
  },
];
const SERVICES = [
  {
    title: "Medical Writing",
    desc: "Scientifically accurate content creation reviewed by clinical experts for precision.",
    icon: <FileText size={32} />,
  },
  {
    title: "Patient Education",
    desc: "Simplifying complex clinical data into engaging stories patients can understand.",
    icon: <Users size={32} />,
  },
  {
    title: "Visual Design",
    desc: "Premium medical illustrations and graphic design that amplify brand credibility.",
    icon: <Monitor size={32} />,
  },
  {
    title: "Regulatory Support",
    desc: "Ensuring all communications meet strict healthcare compliance and guidelines.",
    icon: <ShieldCheck size={32} />,
  },
  {
    title: "Brand Strategy",
    desc: "Customized narratives that bridge the gap between science and marketing.",
    icon: <Lightbulb size={32} />,
  },
  {
    title: "Clinical Tools",
    desc: "Interactive educational charts, mats, and scales for real-world medical use.",
    icon: <Activity size={32} />,
  },
];
// --- Client Logo List ---
const CLIENT_LOGOS = Array.from(
  { length: 15 },
  (_, i) =>
    `https://medipride.org/wp-content/uploads/2026/01/Lgo-1_page-00${(i + 1).toString().padStart(2, "0")}-scaled.jpg`,
);

// --- Helper Components ---
const MountainDivider = ({ flip = false, color = "fill-white" }) => (
  <div
    className={`absolute left-0 w-full overflow-hidden leading-[0] ${flip ? "bottom-0 rotate-180" : "top-0"}`}
  >
    <svg
      className={`relative block w-[calc(100%+1.3px)] h-[50px] ${color}`}
      viewBox="0 0 1000 100"
      preserveAspectRatio="none"
    >
      <path
        opacity="0.33"
        d="M473,67.3c-203.9,88.3-263.1-34-320.3,0C66,119.1,0,59.7,0,59.7V0h1000v59.7 c0,0-62.1,26.1-94.9,29.3c-32.8,3.3-62.8-12.3-75.8-22.1C806,49.6,745.3,8.7,694.9,4.7S492.4,59,473,67.3z"
      />
      <path
        opacity="0.66"
        d="M734,67.3c-45.5,0-77.2-23.2-129.1-39.1c-28.6-8.7-150.3-10.1-254,39.1 s-91.7-34.4-149.2,0C115.7,118.3,0,39.8,0,39.8V0h1000v36.5c0,0-28.2-18.5-92.1-18.5C810.2,18.1,775.7,67.3,734,67.3z"
      />
      <path d="M766.1,28.9c-200-57.5-266,65.5-395.1,19.5C242,1.8,242,5.4,184.8,20.6C128,35.8,132.3,44.9,89.9,52.5C28.6,63.7,0,0,0,0 h1000c0,0-9.9,40.9-83.6,48.1S829.6,47,766.1,28.9z" />
    </svg>
  </div>
);





export default function MediPrideLanding() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className=" text-slate-800 font-sans scroll-smooth">
      {/* Hero */}
      <header className="relative pt-40 pb-24 lg:pt-56 lg:pb-40 overflow-hidden xl:h-[60vh] flex items-center">
        {/* 1. Background Image Layer */}
        <picture className="absolute inset-0 z-0">
          {/* Desktop Image */}
          <source
            media="(min-width: 1024px)"
            className="h-[50vh]"
            srcSet="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=2000"
          />
          {/* Tablet Image */}
          <source
            media="(min-width: 640px)"
            srcSet="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=1200"
          />
          {/* Mobile Image (Default) */}
          <img
            src="https://images.unsplash.com/photo-1559839734-2b71f1536783?auto=format&fit=crop&q=80&w=800"
            alt="Medical Research Background"
            className="w-full h-full object-cover"
          />
        </picture>

        {/* 2. Overlay (Optional: Improves text readability) */}
        <div className="absolute inset-0 bg-white/20 lg:bg-white/10 z-1" />

        {/* 3. Content Layer */}
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold text-[#3972b7] mb-6 leading-tight">
            Where Medical Accuracy Meets <br />
            <span className="text-slate-900">Creative Storytelling</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-800 mb-10 max-w-2xl mx-auto font-medium">
            We create patient-focused, scientifically accurate, and visually
            engaging medical communication that builds trust and improves
            outcomes.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center space-x-3 bg-[#3972b7] text-white px-10 py-4 rounded-full font-bold text-lg hover:shadow-2xl hover:bg-blue-700 transition transform hover:-translate-y-1"
          >
            <Phone size={22} />
            <span>Contact Us</span>
          </a>
        </div>
      </header>

      {/* Impact Stats */}
      {/* <section className="relative py-24 bg-[#3972b7] text-white">
        <MountainDivider color="fill-slate-50" />
        <MountainDivider flip color="fill-white" />
        <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Numbers That Speak for Our Impact</h2>
          <p className="text-blue-100 mb-20 text-lg">Making a significant difference in healthcare communication.</p>
          <div className="grid md:grid-cols-3 gap-12">
            {[
              { icon: Star, val: "500+", label: "Projects Delivered" },
              { icon: Smile, val: "98%", label: "Client Satisfaction" },
              { icon: Heart, val: "50,000+", label: "Patients Reached" },
            ].map((stat, i) => (
              <div key={i} className="p-10 rounded-3xl bg-white/10 backdrop-blur-md border border-white/20">
                <stat.icon size={50} className="mx-auto mb-6 text-[#fcc216]" />
                <h3 className="text-5xl font-extrabold mb-2">{stat.val}</h3>
                <p className="text-xl font-medium opacity-90">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* About Us */}
      <section id="about" className="relative py-12  overflow-hidden">
        {/* Subtle Background Decorative Element */}
        <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-96 h-96 bg-[#8bde7a]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/4 w-72 h-72 bg-[#0093cb]/10 rounded-full blur-3xl" />

        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-24 items-center">
            {/* Image Side - 5 columns */}
            <div className="lg:col-span-5 relative">
              <div className="relative z-10 rounded-[2rem] overflow-hidden shadow-2xl border-8 border-white transform -rotate-2 hover:rotate-0 transition-transform duration-500">
                <img
                  src="https://medipride.org/wp-content/uploads/2025/10/medical-banner-with-stethoscope-1-768x768.jpg"
                  alt="About MediPride"
                  className="w-full h-[500px] object-cover"
                />
              </div>

              {/* Floating "Since" Badge */}
              <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-2xl shadow-xl z-20 flex flex-col items-center justify-center border-b-4 border-[#00a65d]">
                <span className="text-sm font-bold text-slate-400 uppercase tracking-widest">
                  Established
                </span>
                <span className="text-3xl font-black text-[#0093cb]">2022</span>
              </div>

              {/* Decorative dots background */}
              <div className="absolute -top-10 -left-10 w-32 h-32 bg-[radial-gradient(#8bde7a_2px,transparent_2px)] [background-size:16px_16px] opacity-40" />
            </div>

            {/* Text Side - 7 columns */}
            <div className="lg:col-span-7 space-y-8">
              <div>
                <span className="inline-block px-4 py-1.5 mb-4 text-sm font-bold tracking-wider text-[#00a65d] uppercase bg-[#00a65d]/10 rounded-full">
                  About US
                </span>
                <h2 className="text-4xl md:text-5xl font-black text-slate-900 leading-tight">
                  Bridging the gap between <br />
                  <span className="text-[#0093cb]">Science & Creativity</span>
                </h2>
              </div>

              <div className="space-y-6">
                <p className="text-xl leading-relaxed text-slate-700 font-medium">
                  At{" "}
                  <span className="text-[#0093cb] font-bold">
                    MediPride Communications
                  </span>
                  , we specialize in transforming complex medical information
                  into clear, engaging, and meaningful communication.
                </p>

                <div className="h-px w-24 bg-gradient-to-r from-[#00a65d] to-transparent" />

                <p className="text-slate-600 text-lg leading-relaxed">
                  We bring together a multidisciplinary team of medical writers,
                  designers, and experts who work closely with healthcare and
                  pharmaceutical organizations to simplify science and amplify
                  brand credibility.
                </p>
              </div>

              {/* Value Points */}
              <div className="grid sm:grid-cols-2 gap-6 pt-4">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-[#8bde7a]/20 rounded-xl flex items-center justify-center text-[#00a65d]">
                    <CheckCircle size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">
                      Medical Accuracy
                    </h4>
                    <p className="text-sm text-slate-500">
                      Reviewed by clinical experts
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-[#0093cb]/20 rounded-xl flex items-center justify-center text-[#0093cb]">
                    <Wand2 size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">
                      Creative Delivery
                    </h4>
                    <p className="text-sm text-slate-500">
                      Engaging visual storytelling
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Section */}
      <section className="   flex flex-col justify-center py-4 lg:py-16 overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 w-full">
          {/* Compact Header */}
          <div className="text-center mb-8 lg:mb-16">
            <span className="text-[#00a65d] font-bold uppercase tracking-widest text-xs">
              What We Offer
            </span>
            <h2 className="text-3xl lg:text-4xl font-black text-slate-900 mt-2">
              A wide range of medical{" "}
              <span className="text-[#0093cb]">communication services</span>
            </h2>
          </div>

          {/* Services Grid - Reduced Gaps */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-12">
            {SERVICES.map((service, index) => (
              <div
                key={index}
                className="group relative bg-white rounded-3xl p-6 pt-10 text-center shadow-sm hover:shadow-lg transition-all border border-slate-100"
              >
                {/* Smaller Overhanging Icon Tab */}
                <div className="absolute -top-7 left-1/2 -translate-x-1/2">
                  <div className="w-14 h-14 bg-white rounded-2xl shadow-md border-b-4 border-[#00a65d] flex items-center justify-center text-[#0093cb] group-hover:scale-110 transition-transform">
                    {service.icon}
                  </div>
                </div>

                {/* Content - Compact Typography */}
                <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-[#0093cb] transition-colors">
                  {service.title}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-4 line-clamp-2">
                  {service.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="py-24 bg-[#3972b7] text-white">
        <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1 h-[500px] rounded-3xl overflow-hidden shadow-2xl border-8 border-white/10">
            <img
              src="https://medipride.org/wp-content/uploads/2025/11/IMG-20251106-WA0063-Edited-768x1024.jpg"
              alt="Founder"
              className="w-full h-full object-cover object-top"
            />
          </div>
          <div className="order-1 lg:order-2 space-y-6">
            <h2 className="text-4xl font-bold">Committed To Excellence</h2>
            <h3 className="text-2xl text-[#fcc216] font-semibold italic">
              "Simplifying Science, Empowering Patients"
            </h3>
            <div className="space-y-4 text-blue-50 text-lg leading-relaxed">
              <p>
                At MediPride Communications, we believe that great medical
                communication goes beyond words—it builds trust and drives
                health outcomes.
              </p>
              <p>
                Since 2022, our mission has been to bridge the gap between
                complex medical science and clear, creative communication.
              </p>
            </div>
            <div className="pt-6">
              <h4 className="text-3xl font-bold">Ms. Saakshi Dosi</h4>
              <p className="text-blue-200">Founder, MediPride Communications</p>
            </div>
          </div>
        </div>
      </section>

      {/* --- ALL PRODUCT CATEGORIES --- */}
      <section id="products" className="py-12 ">
        <div className="max-w-7xl mx-auto px-4">
          {/* Header Section - Modern Typography */}
          <div className="text-center mb-20">
            <span className="text-[#00a65d] font-bold uppercase tracking-widest text-sm bg-[#00a65d]/10 px-4 py-1 rounded-full">
              Our Products
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 mt-4 tracking-tight">
              Innovative Medical{" "}
              <span className="text-[#0093cb]">Solutions</span>
            </h2>
          </div>

          {PRODUCT_DATA.map((cat, idx) => (
            <div key={idx} className="mb-24 last:mb-0">
              {/* Category Divider */}
              <div className="flex items-center space-x-4 mb-10">
                <h3 className="text-xl font-black text-slate-400 uppercase tracking-[0.2em]">
                  {cat.category}
                </h3>
                <div className="h-[2px] bg-slate-200 flex-grow rounded-full"></div>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {cat.items.map((item, iidx) => (
                  <div
                    key={iidx}
                    /* 1. OUTER CARD: Large radius (40px) and soft shadow */
                    className="group p-4 bg-white rounded-[40px] shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_50px_rgba(0,147,203,0.15)] transition-all duration-500 border border-slate-100 flex flex-col h-full"
                  >
                    {/* 2. NESTED RADIUS IMAGE: Inner Radius = Outer (40) - Padding (16) = 24px */}
                    <div className="relative h-64 w-full rounded-[24px] overflow-hidden mb-6">
                      <img
                        src={item.img}
                        alt={item.title}
                        className="w-full h-full object-cover transition duration-700 group-hover:scale-110"
                      />
                      {/* Visual Tag Like Example A */}
                      <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-[10px] font-bold text-[#0093cb] uppercase">
                        Official Medipride
                      </div>
                    </div>

                    {/* 3. TYPOGRAPHY HIERARCHY */}
                    <div className="px-3 pb-2 flex flex-col flex-grow">
                      <h4 className="text-2xl font-bold text-slate-900 mb-2 leading-tight">
                        {item.title}
                      </h4>

                      {/* Small category pills like the Matcha example */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        <span className="text-[10px] font-bold px-2 py-1 bg-slate-100 text-slate-500 rounded-md uppercase tracking-wider">
                          Education
                        </span>
                        <span className="text-[10px] font-bold px-2 py-1 bg-[#8bde7a]/20 text-[#00a65d] rounded-md uppercase tracking-wider">
                          Premium
                        </span>
                      </div>

                      <p className="text-slate-500 text-sm leading-relaxed mb-6 line-clamp-3">
                        {item.desc}
                      </p>

                      {/* 4. FULL WIDTH ACTION BUTTON (As per Image 5) */}
                      {/* <button className="mt-auto w-full bg-slate-900 group-hover:bg-[#0093cb] text-white py-4 rounded-2xl font-bold transition-all duration-300 flex items-center justify-center gap-2 shadow-lg shadow-slate-200 group-hover:shadow-[#0093cb]/30">
                      <span>View Details</span>
                      <ArrowUpRight size={18} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </button> */}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
      {/* Products Varaint  */}
      <div><BentoGrid /></div>
     
    </div>
  );
}
