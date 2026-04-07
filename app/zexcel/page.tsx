// app/zexcel/page.tsx
'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Home, Download, ArrowRight } from 'lucide-react';

const specialties = [
  {
    id: 1,
    title: 'ENT AND RESPIRATORY',
    image: 'https://www.bigimpex.com/wp-content/uploads/2024/zexcel/ent.jpg',
    slug: 'ent-respiratory'
  },
  {
    id: 2,
    title: 'CARDIO-DIABETES',
    image: 'https://www.bigimpex.com/wp-content/uploads/2024/zexcel/cardio.jpg',
    slug: 'cardio-diabetes'
  },
  {
    id: 3,
    title: 'ORTHOPEDICS',
    image: 'https://www.bigimpex.com/wp-content/uploads/2024/zexcel/orthopedics.jpg',
    slug: 'orthopedics'
  },
  {
    id: 4,
    title: 'GYNAECOLOGY AND OBSTETRICS',
    image: 'https://www.bigimpex.com/wp-content/uploads/2024/zexcel/gynae.jpg',
    slug: 'gynaecology'
  },
  {
    id: 5,
    title: 'GASTROENTEROLOGY',
    image: 'https://www.bigimpex.com/wp-content/uploads/2024/zexcel/gastro.jpg',
    slug: 'gastroenterology'
  },
  {
    id: 6,
    title: 'OPHTHALMOLOGY',
    image: 'https://www.bigimpex.com/wp-content/uploads/2024/zexcel/ophthal.jpg',
    slug: 'ophthalmology'
  },
  {
    id: 7,
    title: 'DENTISTRY',
    image: 'https://www.bigimpex.com/wp-content/uploads/2024/zexcel/dentistry.jpg',
    slug: 'dentistry'
  },
  {
    id: 8,
    title: 'DERMATOLOGY',
    image: 'https://www.bigimpex.com/wp-content/uploads/2024/zexcel/derma.jpg',
    slug: 'dermatology'
  },
  {
    id: 9,
    title: 'NEUROLOGY',
    image: 'https://www.bigimpex.com/wp-content/uploads/2024/zexcel/neuro.jpg',
    slug: 'neurology'
  }
];

const clients = [
  { name: 'Abbott', logo: 'https://www.bigimpex.com/wp-content/uploads/2024/clients/abbott.png' },
  { name: 'Alembic', logo: 'https://www.bigimpex.com/wp-content/uploads/2024/clients/alembic.png' },
  { name: 'Aristo', logo: 'https://www.bigimpex.com/wp-content/uploads/2024/clients/aristo.png' },
  { name: 'Cipla', logo: 'https://www.bigimpex.com/wp-content/uploads/2024/clients/cipla.png' },
  { name: 'Emcure', logo: 'https://www.bigimpex.com/wp-content/uploads/2024/clients/emcure.png' },
  { name: 'Ipca', logo: 'https://www.bigimpex.com/wp-content/uploads/2024/clients/ipca.png' },
  { name: 'Sun Pharma', logo: 'https://www.bigimpex.com/wp-content/uploads/2024/clients/sun.png' },
  { name: 'Torrent', logo: 'https://www.bigimpex.com/wp-content/uploads/2024/clients/torrent.png' }
];

export default function ZexcelPage() {
  return (
    <div className="min-h-screen bg-white font-sans">
      
      {/* Hero Section */}
      <section className="bg-[#1a1a1a] text-white py-12 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">Zexcel Medical communications</h1>
          <div className="flex items-center gap-2 text-sm text-gray-400">
            <Link href="/" className="hover:text-white flex items-center gap-1">
              <Home className="w-3 h-3" /> Home
            </Link>
            <span>»</span>
            <span className="text-[var(--clr-primary)]">Zexcel</span>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">About Zexcel Medical Communications</h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Logo Side */}
          <div className="flex flex-col items-center md:items-end">
            <div className="relative w-80 h-48 mb-6">
              {/* Placeholder for Zexcel Logo */}
              <div className="w-full h-full bg-gray-100 rounded-lg flex items-center justify-center border border-gray-200">
                <div className="text-center">
                  <div className="text-4xl font-black text-gray-800 mb-2">ZEXCEL</div>
                  <div className="text-sm text-[var(--clr-secondary)] font-bold tracking-widest">MEDICAL COMMUNICATIONS</div>
                  <div className="text-xs text-gray-500 mt-2 italic">Your extended brand team!</div>
                  <div className="text-xs text-gray-400 mt-1">A division of BigImpex</div>
                </div>
              </div>
            </div>
            <button className="bg-[var(--clr-primary)] hover:bg-[var(--clr-secondary)] text-white px-6 py-2.5 rounded-md font-medium text-sm flex items-center gap-2 transition-colors shadow-md">
              <Download className="w-4 h-4" />
              Download Brochure
            </button>
          </div>

          {/* Content Side */}
          <div className="text-gray-600 text-sm leading-relaxed space-y-4">
            <p>
              Over the last 20 Years BIGIMPEX has been serving pharma marketers offering best-in-class brand building solutions ions to facilitate brand building.
            </p>
            <p>
              Recognizing the emerging need for doctor & patient engagement with high quality scientific resources, BIGIMPEX has expanded the portfolio to cater to the specialized Medico-Marketing needs through a dedicated team viz: <strong>ZEXCEL MEDICAL COMMUNICATIONS.</strong> This coupled with international tie-ups for credible scientific resources enable ZEXCEL offer differentiated medico-marketing strategies.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          
          {/* Strategic Solutions */}
          <div className="bg-white rounded-xl shadow-sm p-6 md:p-8 flex flex-col md:flex-row gap-6 items-start">
            <div className="flex-shrink-0 w-16 h-16 bg-[var(--clr-secondary)]/20 rounded-full flex items-center justify-center">
              <svg className="w-8 h-8 text-[var(--clr-primary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m12.728 0l-.707.707M16.5 12a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zM12 8v4l3 3" />
              </svg>
            </div>
            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Strategic Solutions</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                The leadership team at ZEXCEL has an accumulated Pharma Marketing experience of over 45+ years managing Indian Pharma Markets iconic brands, thereby enabling a better understanding of growth opportunities & offering strategic solutions to accelerate brand growth.
              </p>
            </div>
          </div>

          {/* Doctor Engagement */}
          <div className="bg-white rounded-xl shadow-sm p-6 md:p-8 flex flex-col md:flex-row gap-6 items-start">
            <div className="flex-shrink-0 w-16 h-16 bg-[var(--clr-secondary)]/20 rounded-full flex items-center justify-center">
              <svg className="w-8 h-8 text-[var(--clr-primary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 11v4m0 0l-2-2m2 2l2-2" />
              </svg>
            </div>
            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Doctor Engagement</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                ZEXCEL helps design and execute digital and physical Continuous Medical Education programs engaging an array of global Key Opinion leaders. Anejo Health Communications specializes in the design and supply of highly accurate, outstandingly beautiful, and precisely illustrated promotional material for the Pharmaceutical Industry Worldwide for over 30 years. In a crowded market attracting a doctor's interest is crucial and that is why Anejo Material is created by devoting attention to it.
              </p>
            </div>
          </div>

          {/* Patient Engagement */}
          <div className="bg-white rounded-xl shadow-sm p-6 md:p-8 flex flex-col md:flex-row gap-6 items-start">
            <div className="flex-shrink-0 w-16 h-16 bg-[var(--clr-secondary)]/20 rounded-full flex items-center justify-center">
              <svg className="w-8 h-8 text-[var(--clr-primary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 4v4m0 0l-2-2m2 2l2-2" />
              </svg>
            </div>
            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Patient Engagement</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Doctors are increasingly engaging patients on disease prevention, early diagnosis and compliance to medical advice. ZEXCEL's offers easy to understand patient engagement solutions that ease the task patient engagement & help build brand equity.
              </p>
            </div>
          </div>

        </div>
      </section>
  {/* Clients Section */}
      <section className="py-16 bg-white border-t border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold text-gray-900">Our Clients</h2>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {clients.map((client, index) => (
              <div 
                key={index}
                className="bg-white border border-gray-200 rounded-lg p-6 flex items-center justify-center h-28 hover:shadow-md transition-shadow"
              >
                <Image
                  src={client.logo}
                  alt={client.name}
                  width={120}
                  height={60}
                  className="object-contain max-h-12"
                  unoptimized
                />
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Products Section */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Our Products</h2>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {specialties.map((specialty) => (
            <Link 
              key={specialty.id}
              href={`/zexcel/${specialty.slug}`}
              className="group block bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100"
            >
              <div className="relative aspect-square bg-white p-8 flex items-center justify-center">
                <Image
                  src={specialty.image}
                  alt={specialty.title}
                  width={300}
                  height={300}
                  className="object-contain max-h-full group-hover:scale-105 transition-transform duration-300"
                  unoptimized
                />
              </div>
              <div className="p-4 border-t border-gray-100 flex items-center justify-between">
                <span className="font-semibold text-sm text-gray-800">{specialty.title}</span>
                <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-[var(--clr-primary)] group-hover:translate-x-1 transition-all" />
              </div>
            </Link>
          ))}
        </div>
      </section>

    

    </div>
  );
}
