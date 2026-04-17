"use client";

import React from "react";
import {
  ArrowUpRight,
  CheckCircle,
  Heart,
  FileText,
  Users,
  Monitor,
  ArrowRight,
  User,
  Phone,
  Star,
  Menu,
  X,
} from "lucide-react";

// --- PRODUCTS DATA (7 items for bento grid) ---
const PRODUCTS_DATA = [
  { category: "Near Vision Chart", type: "BOOKS", img: "https://medipride.org/wp-content/uploads/2025/11/Clear-Vision.jpg" },
  { category: "ACS Flip Chart", type: "FLIP CHARTS", img: "https://medipride.org/wp-content/uploads/2025/11/Acute.jpg" },
  { category: "Dosing Guide Mat", type: "LAPTOP MATS", img: "https://medipride.org/wp-content/uploads/2025/11/Dosage.jpg" },
  { category: "Epilepsy Poster", type: "POSTERS", img: "https://medipride.org/wp-content/uploads/2025/11/Epilipsy-1.jpg" },
  { category: "WOMAC Scale", type: "SCALES", img: "https://medipride.org/wp-content/uploads/2025/11/Ortho.jpg" },
  { category: "Facial Muscle Anatomy", type: "TABLE TOPS", img: "https://medipride.org/wp-content/uploads/2025/11/Facial-muscle-anotomy-glass-printing-1.jpg", featured: true },
  { category: "Ortho Edu Stand", type: "WRITE & WIPE", img: "https://medipride.org/wp-content/uploads/2025/11/Ortho-1.jpg" },
];

// --- SERVICES DATA ---
const SERVICES_DATA = [
  {
    title: "Medical Writing",
    desc: "Scientifically accurate content creation reviewed by clinical experts for precision and regulatory compliance.",
    icon: <FileText size={18} />,
  },
  {
    title: "Patient Education",
    desc: "Simplifying complex clinical data into engaging stories and visuals that patients can understand and act upon.",
    icon: <Users size={18} />,
  },
  {
    title: "Visual Design",
    desc: "Premium medical illustrations and graphic design that amplify brand credibility and enhance learning.",
    icon: <Monitor size={18} />,
  },
];

export default function MediPrideLanding() {
  return (
    <div className=" text-[#1a1a1a] font-sans selection:bg-[#8bde7a]">
      
   

      {/* ========== SECTION 1: BANNER (HERO) - Exact style from reference ========== */}
      <section className="max-w-[1400px] mx-auto px-6 py-10 lg:py-16 grid lg:grid-cols-2 gap-10 items-center">
        <div className="max-w-lg">
          <h1 className="text-5xl lg:text-7xl font-medium leading-[1.1] tracking-tight mb-6 font-serif text-slate-900">
            Transform <span className="italic">Your</span> <br />
            Medical Communication
          </h1>
          <p className="text-slate-500 text-sm mb-8 leading-relaxed font-medium max-w-sm">
            Join us in transforming complex medical data into clear, engaging patient education through our comprehensive communication solutions.
          </p>
          <div className="flex gap-3">
            <button className="bg-[#0c1c16] text-white px-8 py-3.5 rounded-full font-bold uppercase text-[10px] tracking-widest hover:bg-[#0093cb] transition-all">
              Join Member
            </button>
            <button className="border border-slate-300 px-8 py-3.5 rounded-full font-bold uppercase text-[10px] tracking-widest hover:bg-white transition-all">
              Start for free
            </button>
          </div>
        </div>
        <div className="relative">
          <div className="rounded-3xl rounded-tr-none rounded-bl-none overflow-hidden shadow-xl aspect-square lg:aspect-[4/4]">
            <img 
              src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=1200" 
              className="w-full h-full object-cover"
              alt="Medical Communication Banner"
            />
          </div>
        </div>
      </section>

      {/* ========== STATS BAR (Dark Green - Exact style from reference) ========== */}
      <section className="bg-[#0c1c16] text-white py-12">
        <div className="max-w-[1400px] mx-auto px-6 flex flex-col lg:flex-row justify-between items-center gap-10">
          <div className="flex divide-x divide-white/10 w-full lg:w-auto overflow-x-auto">
             <div className="px-8 first:pl-0 text-center shrink-0">
                <p className="text-3xl font-bold">3.2<span className="text-[#8bde7a] font-light italic">K</span></p>
                <p className="text-[9px] uppercase tracking-widest text-white/40 mt-2 font-bold">World champions</p>
             </div>
             <div className="px-8 text-center shrink-0">
                <p className="text-3xl font-bold">1.8<span className="text-[#8bde7a] font-light italic">%</span></p>
                <p className="text-[9px] uppercase tracking-widest text-white/40 mt-2 font-bold">Runner up champions</p>
             </div>
             <div className="px-8 text-center shrink-0">
                <p className="text-3xl font-bold">4.5<span className="text-[#8bde7a] font-light italic">M</span></p>
                <p className="text-[9px] uppercase tracking-widest text-white/40 mt-2 font-bold">Sea games participation</p>
             </div>
          </div>
          <p className="max-w-[320px] text-[11px] text-white/40 leading-relaxed font-medium text-center lg:text-left">
            Once we receive your consult request we match you up with a trainer. This is to ensure that your unique goals, needs, and personalities align. <br />
            <span className="text-white mt-2 block font-bold cursor-pointer hover:text-[#8bde7a] transition-colors">Join Member</span>
          </p>
        </div>
      </section>

      {/* ========== SECTION 2: ABOUT US (Our Team - Style from reference) ========== */}
      <section id="about" className="max-w-[1400px] mx-auto px-6 py-12 lg:py-20 grid lg:grid-cols-2 gap-16 items-center">
        <div className="relative">
           <div className="rounded-3xl overflow-hidden shadow-lg border-[10px] border-white">
             <img 
               src="https://medipride.org/wp-content/uploads/2025/11/IMG-20251106-WA0063-Edited-768x1024.jpg" 
               alt="Our Team" 
               className="w-full aspect-video object-cover object-top" 
             />
           </div>
        </div>
        <div className="space-y-6">
           <span className="text-[10px] font-bold uppercase tracking-widest text-[#00a65d]">Our Team</span>
           <h2 className="text-5xl font-medium font-serif italic leading-tight">
             Meet Our Team
           </h2>
           <p className="text-slate-500 text-sm leading-relaxed font-medium">
             MediPride specializes in transforming complex information into clear, engaging, and meaningful narratives. We help you simplify science through design.
           </p>
           <div className="flex gap-4">
              <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full border border-slate-100 shadow-sm">
                <CheckCircle size={14} className="text-[#00a65d]" />
                <span className="text-[10px] font-bold uppercase tracking-widest">Accuracy</span>
              </div>
              <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full border border-slate-100 shadow-sm">
                <Heart size={14} className="text-[#0093cb]" />
                <span className="text-[10px] font-bold uppercase tracking-widest">Compassion</span>
              </div>
           </div>
        </div>
      </section>

      {/* ========== SECTION 3: SERVICES (Exact 3-column style from reference) ========== */}
      <section id="services" className="max-w-[1400px] mx-auto px-6 py-20">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div className="max-w-xl">
            <h2 className="text-4xl font-medium tracking-tight font-serif italic mb-3">Our Services</h2>
            <p className="text-slate-400 text-[11px] font-bold uppercase tracking-wider max-w-sm">
              Whether you're a beginner or an advanced practitioner, our offerings are designed to inspire and support you.
            </p>
          </div>
          <button className="bg-[#0c1c16] text-white px-6 py-2.5 rounded-full font-bold uppercase text-[9px] tracking-widest hover:bg-[#0093cb] transition-all">
            Explore the services
          </button>
        </div>
        <div className="grid md:grid-cols-3 gap-16">
          {SERVICES_DATA.map((service, idx) => (
            <div key={idx} className="group cursor-pointer">
              <div className="w-10 h-10 bg-white rounded-xl shadow-sm border border-slate-100 flex items-center justify-center text-[#00a65d] mb-6 group-hover:bg-[#0c1c16] group-hover:text-white transition-all">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 tracking-tight">{service.title}</h3>
              <p className="text-slate-400 text-[11px] leading-relaxed mb-6 font-medium">
                {service.desc}
              </p>
              <button className="flex items-center gap-2 font-bold text-[10px] uppercase tracking-widest group-hover:text-[#0093cb] transition-colors">
                View more <ArrowRight size={12} />
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* ========== SECTION 4: PRODUCTS (Bento Grid - Exact style from reference) ========== */}
      <section id="products" className="max-w-[1400px] mx-auto px-6 py-20 pb-32">
        <div className="mb-12">
           <h2 className="text-4xl font-medium tracking-tight font-serif italic">The Collection</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          
          {/* ROW 1: 4 Cards (1 Col Each) */}
          {PRODUCTS_DATA.slice(0, 4).map((product, i) => (
            <div key={i} className="group relative rounded-2xl overflow-hidden bg-white shadow-sm hover:shadow-xl transition-all h-[300px] cursor-pointer border border-slate-50">
              <div className="absolute inset-0 p-10 flex items-center justify-center">
                 <img src={product.img} className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-105" alt={product.category}/>
              </div>
              <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-white via-white/80 to-transparent">
                 <h4 className="text-sm font-bold uppercase tracking-tighter">{product.category}</h4>
                 <span className="text-[9px] text-[#00a65d] font-bold block mt-1">{product.type}</span>
              </div>
            </div>
          ))}

          {/* ROW 2: Specific spanning (1-2-1) */}
          {/* Card 5 (1 Col) */}
          <div className="lg:col-span-1 group relative rounded-2xl overflow-hidden bg-white shadow-sm hover:shadow-xl transition-all h-[300px] cursor-pointer border border-slate-50">
              <div className="absolute inset-0 p-10 flex items-center justify-center">
                 <img src={PRODUCTS_DATA[4].img} className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-105" alt={PRODUCTS_DATA[4].category}/>
              </div>
              <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-white via-white/80 to-transparent">
                 <h4 className="text-sm font-bold uppercase tracking-tighter">{PRODUCTS_DATA[4].category}</h4>
                 <span className="text-[9px] text-[#00a65d] font-bold block mt-1">{PRODUCTS_DATA[4].type}</span>
              </div>
          </div>

          {/* Card 6 (2 Cols - Wide Featured) */}
          <div className="lg:col-span-2 group relative rounded-2xl overflow-hidden bg-[#0c1c16] shadow-md hover:shadow-xl transition-all h-[300px] cursor-pointer text-white border border-[#0c1c16]">
              <div className="absolute inset-0 p-12 flex items-center justify-center opacity-30 group-hover:opacity-60 transition-opacity">
                 <img src={PRODUCTS_DATA[5].img} className="w-full h-full object-contain transition-transform duration-1000 group-hover:scale-105" alt={PRODUCTS_DATA[5].category}/>
              </div>
              <div className="absolute inset-0 p-8 flex flex-col justify-end">
                 <span className="text-[9px] font-black uppercase tracking-[0.2em] text-[#8bde7a] mb-2">Featured Series</span>
                 <h4 className="text-2xl font-black uppercase tracking-tighter">{PRODUCTS_DATA[5].category}</h4>
                 <span className="text-[10px] text-white/60 mt-1">{PRODUCTS_DATA[5].type}</span>
              </div>
          </div>

          {/* Card 7 (1 Col) */}
          <div className="lg:col-span-1 group relative rounded-2xl overflow-hidden bg-white shadow-sm hover:shadow-xl transition-all h-[300px] cursor-pointer border border-slate-50">
              <div className="absolute inset-0 p-10 flex items-center justify-center">
                 <img src={PRODUCTS_DATA[6].img} className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-105" alt={PRODUCTS_DATA[6].category}/>
              </div>
              <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-white via-white/80 to-transparent">
                 <h4 className="text-sm font-bold uppercase tracking-tighter">{PRODUCTS_DATA[6].category}</h4>
                 <span className="text-[9px] text-[#00a65d] font-bold block mt-1">{PRODUCTS_DATA[6].type}</span>
              </div>
          </div>
        </div>
      </section>

      {/* Extra: Personalized Coaching Section (from reference image) */}
      <section className="max-w-[1400px] mx-auto px-6 py-20 border-t border-slate-200">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-[10px] font-bold uppercase tracking-widest text-[#00a65d]">Personalized Coaching</span>
            <h2 className="text-4xl lg:text-5xl font-medium font-serif italic leading-tight mt-4 mb-6">
              One-on-One Sessions with Our Experts
            </h2>
            <p className="text-slate-500 text-sm leading-relaxed mb-8">
              Get personalized guidance from our medical communication specialists. Whether you need help with regulatory writing, patient education materials, or visual design, our team is here to support your goals.
            </p>
            <div className="flex gap-4">
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-full bg-[#0093cb]/10 flex items-center justify-center">
                  <Users size={16} className="text-[#0093cb]" />
                </div>
                <div>
                  <p className="text-xs font-bold">Expert Team</p>
                  <p className="text-[9px] text-slate-400">10+ specialists</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-full bg-[#00a65d]/10 flex items-center justify-center">
                  <FileText size={16} className="text-[#00a65d]" />
                </div>
                <div>
                  <p className="text-xs font-bold">500+ Projects</p>
                  <p className="text-[9px] text-slate-400">Successfully delivered</p>
                </div>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="rounded-3xl overflow-hidden shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&q=80&w=1200" 
                alt="Personalized Coaching" 
                className="w-full aspect-square object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-2xl shadow-lg border-l-4 border-[#0093cb]">
              <p className="text-xl font-bold text-[#0093cb]">98%</p>
              <p className="text-[9px] font-bold uppercase">Client satisfaction</p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}