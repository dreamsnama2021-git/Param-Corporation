"use client";
import React, { useState } from "react";
import {
  Phone,
  Star,
  Heart,
  Smile,
  CheckCircle,
  Wand2,
  Menu,
  X,
  ArrowRight,
} from "lucide-react";
import {
  FileText,
  Users,
  Monitor,
  ShieldCheck,
  Lightbulb,
  Activity,
  Presentation, // ✅ Make sure this is imported
} from "lucide-react";
import BentoGrid from "@/components/BentoGridProducts";

// ... rest of your code

// --- Complete Product Data (Structured from your prompt) ---
const PRODUCT_DATA = [
  {
    category: "BOOKS & MAGAZINES",
    items: [
      {
        title: "Near Vision Chart",
        desc: "Portable tool for quick and accurate near vision testing with standardized optotypes.",
        img: "https://medipride.org/wp-content/uploads/2025/11/Clear-Vision.jpg",
      },
      {
        title: "Tooth Tales: A Visual Guide Book",
        desc: "Illustrated dental education book that simplifies tooth structure and oral care for better patient understanding.",
        img: "https://medipride.org/wp-content/uploads/2025/11/Tooth-tales.jpg",
      },
      {
        title: "PCOS Book",
        desc: "Simplified guide explaining PCOS, its causes, hormonal imbalance, and management strategies.",
        img: "https://medipride.org/wp-content/uploads/2025/11/PCOS.jpg",
      },
    ],
  },
  {
    category: "FLIP CHART",
    items: [
      {
        title: "Acute Coronary Syndrome (ACS) Flip Chart",
        desc: "Visual clinical guide for understanding ACS with structured diagnosis and patient education support.",
        img: "https://medipride.org/wp-content/uploads/2025/11/Acute.jpg",
      },
      {
        title: "Type 2 Diabetes Risk Flip-chart",
        desc: "Educational tool highlighting diabetes risk factors, prevention, and early lifestyle interventions.",
        img: "https://medipride.org/wp-content/uploads/2025/11/Type-2-Diabites.jpg",
      },
      {
        title: "Urinary Tract Flipchart",
        desc: "Illustrated guide explaining urinary system anatomy, infections, and related clinical conditions.",
        img: "https://medipride.org/wp-content/uploads/2025/11/Urinary-Track.jpg",
      },
    ],
  },
  {
    category: "MATT (Laptop Mats)",
    items: [
      {
        title: "Dosing & Administration Guide Laptop Mat",
        desc: "Quick-reference tool for drug dosing, administration guidelines, and clinical safety information.",
        img: "https://medipride.org/wp-content/uploads/2025/11/Dosage.jpg",
      },
      {
        title: "Anatomical Dissections of the Human Ear Laptop Mat",
        desc: "Detailed anatomical reference of the ear structure for fast clinical and educational use.",
        img: "https://medipride.org/wp-content/uploads/2025/11/Ear.jpg",
      },
      {
        title: "Stroke (NIHSS) Laptop Mat",
        desc: "Compact guide covering stroke symptoms, classification, and NIHSS scoring for rapid assessment.",
        img: "https://medipride.org/wp-content/uploads/2025/11/Strok.jpg",
      },
    ],
  },
  {
    category: "PATIENT EDUCATION POSTERS",
    items: [
      {
        title: "Epilepsy Poster",
        desc: "Explains seizure types, warning signs, and first-aid steps for epilepsy management.",
        img: "https://medipride.org/wp-content/uploads/2025/11/Epilipsy-1.jpg",
      },
      {
        title: "Hearing Loss Poster",
        desc: "Educational guide on hearing loss types, causes, and prevention for better auditory health awareness.",
        img: "https://medipride.org/wp-content/uploads/2025/11/Hearning-loss.jpg",
      },
      {
        title: "Breast Cancer Poster",
        desc: "Highlights symptoms, risk factors, and early detection methods for improved awareness and prevention.",
        img: "https://medipride.org/wp-content/uploads/2025/11/Strok-1.jpg",
      },
    ],
  },
  {
    category: "SCALE",
    items: [
      {
        title: "Joints WOMAC Scale",
        desc: "Standard assessment tool for evaluating pain, stiffness, and joint function in osteoarthritis patients.",
        img: "https://medipride.org/wp-content/uploads/2025/11/Ortho.jpg",
      },
      {
        title: "GERD Ruler (Frequency Scale)",
        desc: "Clinical scale used to measure severity and frequency of GERD symptoms for accurate classification.",
        img: "https://medipride.org/wp-content/uploads/2025/11/Medipride-3D-Model.jpg",
      },
      {
        title: "Major Cardiovascular Scale",
        desc: "Risk assessment tool for evaluating cardiovascular conditions and guiding preventive clinical decisions.",
        img: "https://medipride.org/wp-content/uploads/2025/11/Dosage-1.jpg",
      },
    ],
  },
  {
    category: "WRITE & WIPE",
    items: [
      {
        title: "Write & Wipe Educational Edu Stand (Osteoporosis)",
        desc: "Educational tool for osteoporosis and bone health education with write & wipe functionality.",
        img: "https://medipride.org/wp-content/uploads/2025/11/Ortho-1.jpg",
      },
      {
        title: "Write & Wipe Educational Edu Stand (PCOS)",
        desc: "Flipchart style materials explaining male/female reproductive systems and PCOS.",
        img: "https://medipride.org/wp-content/uploads/2025/11/PCOS-1.jpg",
      },
      {
        title: "Write & Wipe Educational Edu Stand (Diabetes)",
        desc: "Multiple learning cards covering diabetes causes, symptoms, complications, and management.",
        img: "https://medipride.org/wp-content/uploads/2025/11/Diabites.jpg",
      },
    ],
  },
  {
    category: "TABLE TOPS",
    items: [
      {
        title: "Facial Muscle Anatomy",
        desc: "Anatomy display board for professional reference and clinic décor.",
        img: "https://medipride.org/wp-content/uploads/2025/11/Facial-muscle-anotomy-glass-printing-1.jpg",
      },
      {
        title: "Live Life Table Top",
        desc: "Circular routine wheel addressing bladder health and urinary control.",
        img: "https://medipride.org/wp-content/uploads/2025/11/LLU-1.jpg",
      },
      {
        title: "Benitowa PCOS Table Top",
        desc: "Interactive display module for women's health clinics and educational environments.",
        img: "https://medipride.org/wp-content/uploads/2025/11/Benitowa-PCOS-1.jpg",
      },
    ],
  },
];

const SERVICES = [
  {
    title: "Patient Education Tools",
    desc: "Simplifying medical information to help patients understand conditions and treatments better.",
    icon: <Users size={32} />,
  },
  {
    title: "Medical Content & Visual Communication",
    desc: "Transforming complex medical data into clear, engaging, and visually impactful content.",
    icon: <FileText size={32} />,
  },
  {
    title: "Flipcharts & Educational Kits",
    desc: "Interactive tools designed to support doctors in explaining medical concepts effectively.",
    icon: <Presentation size={32} />,
  },
  {
    title: "Posters & Awareness Materials",
    desc: "Visually driven materials that promote awareness, prevention, and better health understanding.",
    icon: <Monitor size={32} />,
  },
  {
    title: "Doctor Engagement Tools",
    desc: "Strategic solutions that help pharma brands connect meaningfully with healthcare professionals.",
    icon: <Activity size={32} />,
  },
  {
    title: "Concept-Based Healthcare Communication",
    desc: "Creative communication ideas built around therapy, brand, and patient understanding.",
    icon: <Lightbulb size={32} />,
  },
];

// --- Helper Component for Mountain Divider (Optional visual element) ---
const MountainDivider = ({ flip = false, color = "fill-white" }) => (
  <div className={`absolute left-0 w-full overflow-hidden leading-[0] ${flip ? "bottom-0 rotate-180" : "top-0"}`}>
    <svg className={`relative block w-[calc(100%+1.3px)] h-[50px] ${color}`} viewBox="0 0 1000 100" preserveAspectRatio="none">
      <path opacity="0.33" d="M473,67.3c-203.9,88.3-263.1-34-320.3,0C66,119.1,0,59.7,0,59.7V0h1000v59.7 c0,0-62.1,26.1-94.9,29.3c-32.8,3.3-62.8-12.3-75.8-22.1C806,49.6,745.3,8.7,694.9,4.7S492.4,59,473,67.3z" />
      <path opacity="0.66" d="M734,67.3c-45.5,0-77.2-23.2-129.1-39.1c-28.6-8.7-150.3-10.1-254,39.1 s-91.7-34.4-149.2,0C115.7,118.3,0,39.8,0,39.8V0h1000v36.5c0,0-28.2-18.5-92.1-18.5C810.2,18.1,775.7,67.3,734,67.3z" />
      <path d="M766.1,28.9c-200-57.5-266,65.5-395.1,19.5C242,1.8,242,5.4,184.8,20.6C128,35.8,132.3,44.9,89.9,52.5C28.6,63.7,0,0,0,0 h1000c0,0-9.9,40.9-83.6,48.1S829.6,47,766.1,28.9z" />
    </svg>
  </div>
);

export default function MediPrideLanding() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="text-slate-800 font-sans scroll-smooth bg-white">
      {/* Hero Section */}
      <header className="relative pt-40 pb-24 lg:pt-56 lg:pb-40 overflow-hidden xl:h-[60vh] flex items-center">
        <picture className="absolute inset-0 z-0">
          <source media="(min-width: 1024px)" srcSet="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=2000" />
          <source media="(min-width: 640px)" srcSet="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=1200" />
          <img src="https://images.unsplash.com/photo-1559839734-2b71f1536783?auto=format&fit=crop&q=80&w=800" alt="Medical Research Background" className="w-full h-full object-cover" />
        </picture>
        <div className="absolute inset-0 bg-white/40 lg:bg-white/20 z-1" />
        
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold text-[#3972b7] mb-6 leading-tight">
            Where Medical Accuracy Meets <br />
            <span className="text-slate-900">Creative Communication</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-800 mb-10 max-w-2xl mx-auto font-medium">
            Transforming complex medical information into clear, engaging, and impactful communication for pharma and healthcare brands.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center space-x-3 bg-[#3972b7] text-white px-10 py-4 rounded-full font-bold text-lg hover:shadow-2xl hover:bg-blue-700 transition transform hover:-translate-y-1"
          >
            <Phone size={22} />
            <span>Let's Work Together</span>
          </a>
        </div>
      </header>

      {/* About MediPride Section */}
      <section id="about" className="relative py-24 overflow-hidden">
        <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-96 h-96 bg-[#8bde7a]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/4 w-72 h-72 bg-[#0093cb]/10 rounded-full blur-3xl" />

        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-24 items-center">
            <div className="lg:col-span-5 relative">
              <div className="relative z-10 rounded-[2rem] overflow-hidden shadow-2xl border-8 border-white transform -rotate-2 hover:rotate-0 transition-transform duration-500">
                <img
                  src="https://medipride.org/wp-content/uploads/2025/10/medical-banner-with-stethoscope-1-768x768.jpg"
                  alt="About MediPride"
                  className="w-full h-[500px] object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-2xl shadow-xl z-20 flex flex-col items-center justify-center border-b-4 border-[#00a65d]">
                <span className="text-sm font-bold text-slate-400 uppercase tracking-widest">Founded in</span>
                <span className="text-3xl font-black text-[#0093cb]">2022</span>
              </div>
            </div>

            <div className="lg:col-span-7 space-y-8">
              <div>
                <span className="inline-block px-4 py-1.5 mb-4 text-sm font-bold tracking-wider text-[#00a65d] uppercase bg-[#00a65d]/10 rounded-full">
                  About MediPride
                </span>
                <h2 className="text-4xl md:text-5xl font-black text-slate-900 leading-tight">
                  Bridging the gap between <br />
                  <span className="text-[#0093cb]">Clinical Knowledge & Real-World Understanding</span>
                </h2>
              </div>
              <div className="space-y-6">
                <p className="text-xl leading-relaxed text-slate-700 font-medium">
                  <span className="text-[#0093cb] font-bold">MediPride Communications</span> is a specialized medical communication partner focused on simplifying complex scientific information into meaningful, easy-to-understand content.
                </p>
                <p className="text-slate-600 text-lg leading-relaxed">
                  With a strong foundation in medical accuracy and creative storytelling, MediPride helps brands connect effectively with doctors, empower patients, and improve overall healthcare communication.
                </p>
              </div>
              <div className="grid sm:grid-cols-2 gap-6 pt-4">
                {["Accurate", "Visually engaging", "Easy to understand", "Result-driven"].map((item, i) => (
                  <div key={i} className="flex items-center space-x-3">
                    <CheckCircle size={20} className="text-[#00a65d]" />
                    <span className="font-medium text-slate-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Offerings / Services Section */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-[#00a65d] font-bold uppercase tracking-widest text-sm">Core Offerings</span>
            <h2 className="text-4xl font-black text-slate-900 mt-2">
              Specialized Medical <span className="text-[#0093cb]">Communication Solutions</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES.map((service, index) => (
              <div key={index} className="group relative bg-white rounded-3xl p-8 text-center shadow-sm hover:shadow-xl transition-all border border-slate-100">
                <div className="w-16 h-16 bg-[#0093cb]/10 rounded-2xl flex items-center justify-center text-[#0093cb] mx-auto mb-6 group-hover:scale-110 transition-transform">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
                <p className="text-slate-500 leading-relaxed">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* All Product Categories Section */}
      <section id="products" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-slate-900">Explore Our <span className="text-[#0093cb]">Product Range</span></h2>
            <p className="text-slate-500 mt-4 max-w-2xl mx-auto">Visually rich and scientifically accurate tools designed to educate and engage.</p>
          </div>

          {PRODUCT_DATA.map((cat, idx) => (
            <div key={idx} className="mb-20 last:mb-0">
              <div className="flex items-center space-x-4 mb-8">
                <h3 className="text-2xl font-black text-slate-800">{cat.category}</h3>
                <div className="h-[2px] bg-[#8bde7a] flex-grow rounded-full"></div>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {cat.items.map((item, iidx) => (
                  <div key={iidx} className="group p-4 bg-white rounded-[32px] shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_50px_rgba(0,147,203,0.15)] transition-all duration-500 border border-slate-100 flex flex-col h-full">
                    <div className="relative h-64 w-full rounded-[20px] overflow-hidden mb-5">
                      <img src={item.img} alt={item.title} className="w-full h-full object-cover transition duration-700 group-hover:scale-110" />
                      <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-[10px] font-bold text-[#3972b7] uppercase">MediPride</div>
                    </div>
                    <div className="px-3 pb-4 flex flex-col flex-grow">
                      <h4 className="text-xl font-bold text-slate-900 mb-2 leading-tight">{item.title}</h4>
                      <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Founder's Note */}
      <section className="py-24 bg-[#3972b7] text-white">
        <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1 h-[500px] rounded-3xl overflow-hidden shadow-2xl border-8 border-white/10">
            <img
              src="https://medipride.org/wp-content/uploads/2025/11/IMG-20251106-WA0063-Edited-768x1024.jpg"
              alt="Founder Ms. Saakshi Dosi"
              className="w-full h-full object-cover object-top"
            />
          </div>
          <div className="order-1 lg:order-2 space-y-6">
            <h2 className="text-4xl font-bold">Founder's Note</h2>
            <p className="text-xl leading-relaxed text-blue-50">
              MediPride believes that great medical communication goes beyond information—it builds trust, empowers patients, and improves lives. We are committed to delivering solutions that not only communicate but also create meaningful impact in healthcare.
            </p>
            <div className="pt-6">
              <h4 className="text-3xl font-bold">Ms. Saakshi Dosi</h4>
              <p className="text-blue-200">Founder, MediPride Communications</p>
            </div>
          </div>
        </div>
      </section>

      

      {/* BentoGrid Component Placeholder (as referenced) */}
      <div><BentoGrid /></div>
    </div>
  );
}