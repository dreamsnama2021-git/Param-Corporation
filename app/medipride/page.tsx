"use client";

import React, { useState } from 'react';
import { 
  Phone, Mail, Star, Heart, Smile, 
  CheckCircle, Wand2, MapPin, Menu, X, Clock 
} from 'lucide-react';

// --- Complete Product Data ---
const PRODUCT_DATA = [
  {
    category: "BOOKS & MAGAZINES",
    items: [
      { title: "Near Vision Chart", desc: "A portable, foldable tool for quick, accurate near vision assessment, featuring standard letters in multiple sizes.", img: "https://medipride.org/wp-content/uploads/2025/11/Clear-Vision.jpg" },
      { title: "Tooth Tales: A Visual Guide", desc: "A dental education book with detailed illustrations that help professionals clearly explain tooth care.", img: "https://medipride.org/wp-content/uploads/2025/11/Tooth-tales.jpg" },
      { title: "PCOS Book", desc: "PCOS Simplified – Understanding root causes, hormone imbalance, and the path to better management.", img: "https://medipride.org/wp-content/uploads/2025/11/PCOS.jpg" },
    ]
  },
  {
    category: "FLIP CHARTS",
    items: [
      { title: "ACS Flip Chart", desc: "Acute Coronary Syndrome tool with illustrated guides and a dry-erase back for clear patient education.", img: "https://medipride.org/wp-content/uploads/2025/11/Acute.jpg" },
      { title: "Type 2 Diabetes Risk", desc: "Flip-chart providing detailed information on Type 2 Diabetes Risk Factors and Prevention strategies.", img: "https://medipride.org/wp-content/uploads/2025/11/Type-2-Diabites.jpg" },
      { title: "Urinary Tract Flipchart", desc: "Featuring an illustration of the kidneys, ureters, and bladder for anatomical understanding.", img: "https://medipride.org/wp-content/uploads/2025/11/Urinary-Track.jpg" },
    ]
  },
  {
    category: "LAPTOP MATS",
    items: [
      { title: "Dosing Guide Mat", desc: "Quickly reference the Dosing Schedule, Administration, and Important Safety Information for clinical use.", img: "https://medipride.org/wp-content/uploads/2025/11/Dosage.jpg" },
      { title: "Human Ear Anatomy Mat", desc: "Detailed charts of the Human Ear's anatomy, including vascular supply and ossicles.", img: "https://medipride.org/wp-content/uploads/2025/11/Ear.jpg" },
      { title: "Stroke (NIHSS) Mat", desc: "Quickly reference Stroke symptoms and the critical NIHSS scale for rapid patient assessment.", img: "https://medipride.org/wp-content/uploads/2025/11/Strok.jpg" },
    ]
  },
  {
    category: "PATIENT EDUCATION POSTERS",
    items: [
      { title: "Epilepsy Poster", desc: "Explains Epilepsy signs and seizures (Focal vs. Generalized) and essential First Aid DOs and DON’Ts.", img: "https://medipride.org/wp-content/uploads/2025/11/Epilipsy-1.jpg" },
      { title: "Hearing Loss Poster", desc: "Details the Types of Hearing Loss along with their causes and offers Prevention Tips for auditory health.", img: "https://medipride.org/wp-content/uploads/2025/11/Hearning-loss.jpg" },
      { title: "Breast Cancer Poster", desc: "Outlines Symptoms, Risk Factors, Self-Examination Steps, and emphasizes Early Detection.", img: "https://medipride.org/wp-content/uploads/2025/11/Strok-1.jpg" },
    ]
  },
  {
    category: "SCALES",
    items: [
      { title: "JOINTS WOMAC Scale", desc: "A scale for assessing the severity of pain, stiffness, and physical function impact of osteoarthritis.", img: "https://medipride.org/wp-content/uploads/2025/11/Ortho.jpg" },
      { title: "GERD RULER", desc: "A scoring scale used to classify the severity of GERD (heartburn) into mild, moderate, or severe.", img: "https://medipride.org/wp-content/uploads/2025/11/Medipride-3D-Model.jpg" },
      { title: "Major Cardiovascular Scale", desc: "Medication indicators for easing vascular flow and reducing cardiovascular event risks.", img: "https://medipride.org/wp-content/uploads/2025/11/Dosage-1.jpg" },
    ]
  },
  {
    category: "TABLE TOPS",
    items: [
      { title: "Facial Muscle Anatomy", desc: "A sharp, full-color glass-print display of facial muscle anatomy for professional reference.", img: "https://medipride.org/wp-content/uploads/2025/11/Facial-muscle-anotomy-glass-printing-1.jpg" },
      { title: "Live Life Table Top", desc: "An engaging 24-hour visual routine wheel that guides lifestyle adjustments for bladder health.", img: "https://medipride.org/wp-content/uploads/2025/11/LLU-1.jpg" },
      { title: "Benitowa PCOS", desc: "Interactive display module for women's health clinics and educational environments.", img: "https://medipride.org/wp-content/uploads/2025/11/Benitowa-PCOS-1.jpg" },
    ]
  },
  {
    category: "WRITE & WIPE",
    items: [
      { title: "Ortho Edu Stand", desc: "Write & Wipe tool detailing the stages, risk factors, and treatment for Osteoporosis.", img: "https://medipride.org/wp-content/uploads/2025/11/Ortho-1.jpg" },
      { title: "PCOS Edu Stand", desc: "Visually explaining the reproductive systems, PCOS definition, signs, and complications.", img: "https://medipride.org/wp-content/uploads/2025/11/PCOS-1.jpg" },
      { title: "Diabetes Card Set", desc: "Interactive card set for learning the causes, symptoms, and management of Diabetes.", img: "https://medipride.org/wp-content/uploads/2025/11/Diabites.jpg" },
    ]
  }
];

// --- Client Logo List ---
const CLIENT_LOGOS = Array.from({ length: 15 }, (_, i) => `https://medipride.org/wp-content/uploads/2026/01/Lgo-1_page-00${(i + 1).toString().padStart(2, '0')}-scaled.jpg`);

// --- Helper Components ---
const MountainDivider = ({ flip = false, color = "fill-white" }) => (
  <div className={`absolute left-0 w-full overflow-hidden leading-[0] ${flip ? 'bottom-0 rotate-180' : 'top-0'}`}>
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
    <div className="bg-white text-slate-800 font-sans scroll-smooth">
    

      {/* Hero */}
      <header className="relative pt-40 pb-24 lg:pt-56 lg:pb-40 bg-slate-50 overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold text-[#3972b7] mb-6 leading-tight">
            Where Medical Accuracy Meets <br />
            <span className="text-slate-900">Creative Storytelling</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-600 mb-10 max-w-2xl mx-auto">
            We create patient-focused, scientifically accurate, and visually engaging medical communication that builds trust and improves outcomes.
          </p>
          <a href="#contact" className="inline-flex items-center space-x-3 bg-[#3972b7] text-white px-10 py-4 rounded-full font-bold text-lg hover:shadow-2xl hover:bg-blue-700 transition transform hover:-translate-y-1">
            <Phone size={22} />
            <span>Contact Us</span>
          </a>
        </div>
      </header>

      {/* Marquee Clients */}
      <section className="py-16 bg-white border-y">
        <h2 className="text-center text-xl font-bold mb-10">Our Amazing Clients</h2>
        <div className="relative overflow-hidden flex">
          <div className="flex space-x-12 animate-marquee whitespace-nowrap">
            {[...CLIENT_LOGOS, ...CLIENT_LOGOS].map((src, i) => (
              <img key={i} src={src} alt="Client Logo" className="h-20 w-auto grayscale hover:grayscale-0 transition duration-300 opacity-80 hover:opacity-100" />
            ))}
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="relative py-24 bg-[#3972b7] text-white">
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
      </section>

      {/* About Us */}
      <section id="about" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <h2 className="text-4xl font-bold text-[#3972b7]">About Us</h2>
            <p className="text-xl leading-relaxed text-slate-700">
              At <strong>MediPride Communications</strong>, we specialize in transforming complex medical information into clear, engaging, and meaningful communication.
            </p>
            <p className="text-slate-600 text-lg">
              Founded in 2022, we bring together a multidisciplinary team of medical writers, designers, and experts who work closely with healthcare and pharmaceutical organizations to simplify science and amplify brand credibility.
            </p>
            <p className="text-slate-600 text-lg">
              Our purpose is simple — to make medical communication accurate, creative, and impactful.
            </p>
          </div>
          <div className="rounded-3xl overflow-hidden shadow-2xl rotate-1">
            <img src="https://medipride.org/wp-content/uploads/2025/10/medical-banner-with-stethoscope-1-768x768.jpg" alt="About" className="w-full h-full object-cover" />
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section id="whychooseus" className="relative py-24 bg-slate-50">
        <MountainDivider color="fill-white" />
        <MountainDivider flip color="fill-[#3972b7]" />
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Why Choose MediPride?</h2>
            <p className="text-slate-500 max-w-2xl mx-auto">Bridging the gap between complex medical science and clear communication.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: Heart, t: "Medical Accuracy", d: "Reviewed by doctors and experts to ensure scientific reliability." },
              { icon: Smile, t: "Engaging Content", d: "We simplify complex data into patient-friendly, visual stories." },
              { icon: Star, t: "Patient Outcomes", d: "Focused on improving awareness, adherence, and outcomes." },
              { icon: CheckCircle, t: "Trusted Leader", d: "Preferred by major pharma brands and medical institutions." },
              { icon: Wand2, t: "Custom Solutions", d: "Tailor-made solutions fit for your therapy area and goals." },
              { icon: CheckCircle, t: "Impactful Stories", d: "Transforming dry clinical data into powerful brand narratives." },
            ].map((f, i) => (
              <div key={i} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-xl transition duration-300">
                <f.icon className="text-[#3972b7] mb-4" size={32} />
                <h3 className="text-xl font-bold mb-2">{f.t}</h3>
                <p className="text-slate-600 leading-relaxed">{f.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="py-24 bg-[#3972b7] text-white">
        <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1 h-[500px] rounded-3xl overflow-hidden shadow-2xl border-8 border-white/10">
            <img src="https://medipride.org/wp-content/uploads/2025/11/IMG-20251106-WA0063-Edited-768x1024.jpg" alt="Founder" className="w-full h-full object-cover object-top" />
          </div>
          <div className="order-1 lg:order-2 space-y-6">
            <h2 className="text-4xl font-bold">Committed To Excellence</h2>
            <h3 className="text-2xl text-[#fcc216] font-semibold italic">"Simplifying Science, Empowering Patients"</h3>
            <div className="space-y-4 text-blue-50 text-lg leading-relaxed">
              <p>At MediPride Communications, we believe that great medical communication goes beyond words—it builds trust and drives health outcomes.</p>
              <p>Since 2022, our mission has been to bridge the gap between complex medical science and clear, creative communication.</p>
            </div>
            <div className="pt-6">
              <h4 className="text-3xl font-bold">Ms. Saakshi Dosi</h4>
              <p className="text-blue-200">Founder, MediPride Communications</p>
            </div>
          </div>
        </div>
      </section>

      {/* --- ALL PRODUCT CATEGORIES --- */}
      <section id="products" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-black text-slate-900 tracking-tight">OUR PRODUCT PORTFOLIO</h2>
            <div className="h-1.5 w-24 bg-[#fcc216] mx-auto mt-4 rounded-full"></div>
          </div>

          {PRODUCT_DATA.map((cat, idx) => (
            <div key={idx} className="mb-24 last:mb-0">
              <div className="flex items-center space-x-6 mb-12">
                <h3 className="text-2xl font-bold text-[#3972b7] whitespace-nowrap">{cat.category}</h3>
                <div className="h-px bg-slate-200 flex-grow"></div>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
                {cat.items.map((item, iidx) => (
                  <div key={iidx} className="group flex flex-col bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-2xl transition duration-500">
                    <div className="h-72 overflow-hidden relative">
                      <img 
                        src={item.img} 
                        alt={item.title} 
                        className="w-full h-full object-cover transition duration-700 group-hover:scale-110" 
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition duration-500 flex items-end p-6">
                        <span className="text-white font-bold text-sm">View Details</span>
                      </div>
                    </div>
                    <div className="p-8 flex flex-col flex-grow">
                      <h4 className="text-xl font-bold mb-3 text-slate-900 group-hover:text-[#3972b7] transition">
                        {item.title}
                      </h4>
                      <p className="text-slate-500 text-sm leading-relaxed flex-grow">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer & Contact */}
      <footer id="contact" className="bg-slate-900 text-white pt-24">
        <div className="max-w-7xl mx-auto px-4 pb-20">
          <div className="grid lg:grid-cols-3 gap-16">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-[#3972b7]">Address</h3>
              <div className="h-1 w-12 bg-[#fcc216]"></div>
              <p className="text-slate-400 text-lg flex items-start space-x-3">
                <MapPin className="mt-1 text-blue-500 shrink-0" />
                <span>Diamond Industrial Estate, Dahisar East,<br />Mumbai, Maharashtra – 400068</span>
              </p>
              <div className="space-y-4 pt-4">
                <a href="tel:+919920845176" className="flex items-center space-x-3 text-slate-300 hover:text-[#fcc216] transition">
                  <Phone size={20} className="text-[#3972b7]" />
                  <span>+91 99208 45176</span>
                </a>
                <a href="mailto:info.medipride@gmail.com" className="flex items-center space-x-3 text-slate-300 hover:text-[#fcc216] transition">
                  <Mail size={20} className="text-[#3972b7]" />
                  <span>info.medipride@gmail.com</span>
                </a>
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-[#3972b7]">Opening Hours</h3>
              <div className="h-1 w-12 bg-[#fcc216]"></div>
              <div className="space-y-4">
                <div className="flex justify-between items-center border-b border-white/10 pb-3">
                  <span className="text-slate-300 font-medium">Monday – Friday</span>
                  <span className="bg-blue-600/20 text-blue-400 px-4 py-1 rounded-full text-xs font-bold">09:30 - 18:30</span>
                </div>
                <div className="flex justify-between items-center border-b border-white/10 pb-3">
                  <span className="text-slate-300 font-medium">Saturday – Sunday</span>
                  <span className="text-slate-500 italic">Closed</span>
                </div>
              </div>
              <p className="text-slate-500 text-sm">Reach out during working hours, and we’ll ensure your query gets attention.</p>
            </div>

            <div className="space-y-8">
              <img src="https://medipride.org/wp-content/uploads/2025/09/Logo.pdf-1-e1757684391144-169x72.png" alt="Logo" className="brightness-0 invert h-12" />
              <p className="text-slate-400 leading-relaxed">
                Leading healthcare communication partners, transforming clinical science into creative patient education tools since 2022.
              </p>
              <div className="flex space-x-4">
                <button className="bg-[#3972b7] hover:bg-blue-600 text-white px-8 py-3 rounded-xl font-bold w-full transition shadow-lg">
                  Request Samples
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="border-t border-white/5 py-8 text-center text-slate-600 text-sm">
          <p>Copyright © 2026 MediPride Communications. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
}
