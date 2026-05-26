'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { ArrowUpRight, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { createPortal } from 'react-dom';

// ─── Types ───
const PRODUCT_CATEGORIES = [
  "BOOKS & MAGAZINES",
  "FLIP CHART",
  "MATT (Desk Mats)",
  "POSTERS",
  "Medical SCALE",
  "WRITE & WIPE",
  "Tear off Pads",
  "TABLE TOPS & SCIENTIFIC INPUTS"
] as const;

type ProductCategory = typeof PRODUCT_CATEGORIES[number];

type Product = {
  title: string;
  desc: string;
  img: string;
  category: ProductCategory;
};

type Therapy = {
  therapy: string;
  icon: string;
  color: string;
  bgColor: string;
  span: number;
  slug: string;
  images: {
    card: string;
    books: string[];
    flipChart: string[];
    matt: string[];
    posters: string[];
    medicalScale: string[];
    writeWipe: string[];
    tearOffPads: string[];
    tableTops: string[];
  };
  items: Product[];
};

// ─── Therapy Images Data (Local Images) ───
const THERAPY_IMAGES_DATA: Record<string, any> = {
  'Cardio-Vascular': {
    card:  'https://images.unsplash.com/photo-1559757175-5700dde675bc?w=800&q=80',
    books: [
      '/images/therapies/cardio/books-1.jpg',
      '/images/therapies/cardio/books-2.jpg',
      '/images/therapies/cardio/books-3.jpg',
    ],
    flipChart: [
      '/images/therapies/cardio/flip-chart-1.jpg',
      '/images/therapies/cardio/flip-chart-2.jpg',
      '/images/therapies/cardio/flip-chart-3.jpg',
    ],
    matt: [
      '/images/therapies/cardio/matt-1.jpg',
      '/images/therapies/cardio/matt-2.jpg',
      '/images/therapies/cardio/matt-3.jpg',
    ],
    posters: [
      '/therepy/cardio-diabatics/ChatGPT Image May 25, 2026, 04_24_00 PM.png',
      '/therepy/cardio-diabatics/ChatGPT Image May 25, 2026, 04_26_54 PM.png',
      '/therepy/cardio-diabatics/HEART ATTACK AWARENESS LAMA STANDEE.jpg,
    ],
    medicalScale: [
      '/therepy/cardio-diabatics/ASCVD RISK CALCULATOR 2.jpg',
      '/therepy/cardio-diabatics/ChatGPT Image May 25, 2026, 04_10_59 PM.png',
      '/images/therapies/cardio/medical-scale-3.jpg',
    ],
    writeWipe: [
      '/therepy/cardio-diabatics/Write & Wipe Tools and FLIPCHART.jpg',
      '/images/therapies/cardio/write-wipe-2.jpg',
      '/images/therapies/cardio/write-wipe-3.jpg',
    ],
    tearOffPads: [
      '/images/therapies/cardio/tear-off-pads-1.jpg',
      '/images/therapies/cardio/tear-off-pads-2.jpg',
      '/images/therapies/cardio/tear-off-pads-3.jpg',
    ],
    tableTops: [
      '/therepy/cardio-diabatics/ChatGPT Image May 25, 2026, 04_15_18 PM.png',
      '/therepy/cardio-diabatics/ChatGPT Image May 25, 2026, 04_25_07 PM.png',
      '/images/therapies/cardio/table-tops-3.jpg',
    ],
  },
  'Diabetes': {
    card: 'https://images.unsplash.com/photo-1585435557343-3b092031a831?w=800&q=80',
    books: [
      '/images/therapies/diabetes/books-1.jpg',
      '/images/therapies/diabetes/books-2.jpg',
      '/images/therapies/diabetes/books-3.jpg',
    ],
    flipChart: [
      '/images/therapies/diabetes/flip-chart-1.jpg',
      '/images/therapies/diabetes/flip-chart-2.jpg',
      '/images/therapies/diabetes/flip-chart-3.jpg',
    ],
    matt: [
      '/images/therapies/diabetes/matt-1.jpg',
      '/images/therapies/diabetes/matt-2.jpg',
      '/images/therapies/diabetes/matt-3.jpg',
    ],
    posters: [
      '/therepy/cardio-diabatics/ChatGPT Image May 25, 2026, 04_06_35 PM.png',
      '/therepy/cardio-diabatics/ChatGPT Image May 25, 2026, 04_15_09 PM.png',
      '/images/therapies/diabetes/posters-3.jpg',
    ],
    medicalScale: [
      '/images/therapies/diabetes/medical-scale-1.jpg',
      '/images/therapies/diabetes/medical-scale-2.jpg',
      '/images/therapies/diabetes/medical-scale-3.jpg',
    ],
    writeWipe: [
      '/images/therapies/diabetes/write-wipe-1.jpg',
      '/images/therapies/diabetes/write-wipe-2.jpg',
      '/images/therapies/diabetes/write-wipe-3.jpg',
    ],
    tearOffPads: [
      '/images/therapies/diabetes/tear-off-pads-1.jpg',
      '/images/therapies/diabetes/tear-off-pads-2.jpg',
      '/images/therapies/diabetes/tear-off-pads-3.jpg',
    ],
    tableTops: [
      '/images/therapies/diabetes/table-tops-1.jpg',
      '/images/therapies/diabetes/table-tops-2.jpg',
      '/images/therapies/diabetes/table-tops-3.jpg',
    ],
  },
  'ENT & Respiratory': {
    card: 'https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?w=800&q=80',
    books: [
      '/images/therapies/ent/books-1.jpg',
      '/images/therapies/ent/books-2.jpg',
      '/images/therapies/ent/books-3.jpg',
    ],
    flipChart: [
      '/images/therapies/ent/flip-chart-1.jpg',
      '/images/therapies/ent/flip-chart-2.jpg',
      '/images/therapies/ent/flip-chart-3.jpg',
    ],
    matt: [
      '/images/therapies/ent/matt-1.jpg',
      '/images/therapies/ent/matt-2.jpg',
      '/images/therapies/ent/matt-3.jpg',
    ],
    posters: [
      '/images/therapies/ent/posters-1.jpg',
      '/images/therapies/ent/posters-2.jpg',
      '/images/therapies/ent/posters-3.jpg',
    ],
    medicalScale: [
      '/images/therapies/ent/medical-scale-1.jpg',
      '/images/therapies/ent/medical-scale-2.jpg',
      '/images/therapies/ent/medical-scale-3.jpg',
    ],
    writeWipe: [
      '/images/therapies/ent/write-wipe-1.jpg',
      '/images/therapies/ent/write-wipe-2.jpg',
      '/images/therapies/ent/write-wipe-3.jpg',
    ],
    tearOffPads: [
      '/images/therapies/ent/tear-off-pads-1.jpg',
      '/images/therapies/ent/tear-off-pads-2.jpg',
      '/images/therapies/ent/tear-off-pads-3.jpg',
    ],
    tableTops: [
      '/images/therapies/ent/table-tops-1.jpg',
      '/images/therapies/ent/table-tops-2.jpg',
      '/images/therapies/ent/table-tops-3.jpg',
    ],
  },
  'Orthopedics/Rheumatology': {
    card:  'https://images.unsplash.com/photo-1581595220892-b0739db3ba8c?w=800&q=80',
    books: [
      '/images/therapies/ortho/books-1.jpg',
      '/images/therapies/ortho/books-2.jpg',
      '/images/therapies/ortho/books-3.jpg',
    ],
    flipChart: [
      '/images/therapies/ortho/flip-chart-1.jpg',
      '/images/therapies/ortho/flip-chart-2.jpg',
      '/images/therapies/ortho/flip-chart-3.jpg',
    ],
    matt: [
      '/images/therapies/ortho/matt-1.jpg',
      '/images/therapies/ortho/matt-2.jpg',
      '/images/therapies/ortho/matt-3.jpg',
    ],
    posters: [
      '/images/therapies/ortho/posters-1.jpg',
      '/images/therapies/ortho/posters-2.jpg',
      '/images/therapies/ortho/posters-3.jpg',
    ],
    medicalScale: [
      '/images/therapies/ortho/medical-scale-1.jpg',
      '/images/therapies/ortho/medical-scale-2.jpg',
      '/images/therapies/ortho/medical-scale-3.jpg',
    ],
    writeWipe: [
      '/images/therapies/ortho/write-wipe-1.jpg',
      '/images/therapies/ortho/write-wipe-2.jpg',
      '/images/therapies/ortho/write-wipe-3.jpg',
    ],
    tearOffPads: [
      '/images/therapies/ortho/tear-off-pads-1.jpg',
      '/images/therapies/ortho/tear-off-pads-2.jpg',
      '/images/therapies/ortho/tear-off-pads-3.jpg',
    ],
    tableTops: [
      '/images/therapies/ortho/table-tops-1.jpg',
      '/images/therapies/ortho/table-tops-2.jpg',
      '/images/therapies/ortho/table-tops-3.jpg',
    ],
  },
  'Gynaecology and Obstetrics': {
    card:'https://images.unsplash.com/photo-1519823551278-64ac92734fb1?w=800&q=80',
    books: [
      '/images/therapies/gynaecology/books-1.jpg',
      '/images/therapies/gynaecology/books-2.jpg',
      '/images/therapies/gynaecology/books-3.jpg',
    ],
    flipChart: [
      '/images/therapies/gynaecology/flip-chart-1.jpg',
      '/images/therapies/gynaecology/flip-chart-2.jpg',
      '/images/therapies/gynaecology/flip-chart-3.jpg',
    ],
    matt: [
      '/images/therapies/gynaecology/matt-1.jpg',
      '/images/therapies/gynaecology/matt-2.jpg',
      '/images/therapies/gynaecology/matt-3.jpg',
    ],
    posters: [
      '/images/therapies/gynaecology/posters-1.jpg',
      '/images/therapies/gynaecology/posters-2.jpg',
      '/images/therapies/gynaecology/posters-3.jpg',
    ],
    medicalScale: [
      '/images/therapies/gynaecology/medical-scale-1.jpg',
      '/images/therapies/gynaecology/medical-scale-2.jpg',
      '/images/therapies/gynaecology/medical-scale-3.jpg',
    ],
    writeWipe: [
      '/images/therapies/gynaecology/write-wipe-1.jpg',
      '/images/therapies/gynaecology/write-wipe-2.jpg',
      '/images/therapies/gynaecology/write-wipe-3.jpg',
    ],
    tearOffPads: [
      '/images/therapies/gynaecology/tear-off-pads-1.jpg',
      '/images/therapies/gynaecology/tear-off-pads-2.jpg',
      '/images/therapies/gynaecology/tear-off-pads-3.jpg',
    ],
    tableTops: [
      '/images/therapies/gynaecology/table-tops-1.jpg',
      '/images/therapies/gynaecology/table-tops-2.jpg',
      '/images/therapies/gynaecology/table-tops-3.jpg',
    ],
  },
  'Gastroenterology': {
    card:  'https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=800&q=80',
    books: [
      '/images/therapies/gastro/books-1.jpg',
      '/images/therapies/gastro/books-2.jpg',
      '/images/therapies/gastro/books-3.jpg',
    ],
    flipChart: [
      '/images/therapies/gastro/flip-chart-1.jpg',
      '/images/therapies/gastro/flip-chart-2.jpg',
      '/images/therapies/gastro/flip-chart-3.jpg',
    ],
    matt: [
      '/images/therapies/gastro/matt-1.jpg',
      '/images/therapies/gastro/matt-2.jpg',
      '/images/therapies/gastro/matt-3.jpg',
    ],
    posters: [
      '/images/therapies/gastro/posters-1.jpg',
      '/images/therapies/gastro/posters-2.jpg',
      '/images/therapies/gastro/posters-3.jpg',
    ],
    medicalScale: [
      '/images/therapies/gastro/medical-scale-1.jpg',
      '/images/therapies/gastro/medical-scale-2.jpg',
      '/images/therapies/gastro/medical-scale-3.jpg',
    ],
    writeWipe: [
      '/images/therapies/gastro/write-wipe-1.jpg',
      '/images/therapies/gastro/write-wipe-2.jpg',
      '/images/therapies/gastro/write-wipe-3.jpg',
    ],
    tearOffPads: [
      '/images/therapies/gastro/tear-off-pads-1.jpg',
      '/images/therapies/gastro/tear-off-pads-2.jpg',
      '/images/therapies/gastro/tear-off-pads-3.jpg',
    ],
    tableTops: [
      '/images/therapies/gastro/table-tops-1.jpg',
      '/images/therapies/gastro/table-tops-2.jpg',
      '/images/therapies/gastro/table-tops-3.jpg',
    ],
  },
  'Ophthalmology': {
    card:  'https://images.unsplash.com/photo-1584017911766-d451b3d0e843?w=800&q=80',
    books: [
      '/images/therapies/ophthalmology/books-1.jpg',
      '/images/therapies/ophthalmology/books-2.jpg',
      '/images/therapies/ophthalmology/books-3.jpg',
    ],
    flipChart: [
      '/images/therapies/ophthalmology/flip-chart-1.jpg',
      '/images/therapies/ophthalmology/flip-chart-2.jpg',
      '/images/therapies/ophthalmology/flip-chart-3.jpg',
    ],
    matt: [
      '/images/therapies/ophthalmology/matt-1.jpg',
      '/images/therapies/ophthalmology/matt-2.jpg',
      '/images/therapies/ophthalmology/matt-3.jpg',
    ],
    posters: [
      '/images/therapies/ophthalmology/posters-1.jpg',
      '/images/therapies/ophthalmology/posters-2.jpg',
      '/images/therapies/ophthalmology/posters-3.jpg',
    ],
    medicalScale: [
      '/images/therapies/ophthalmology/medical-scale-1.jpg',
      '/images/therapies/ophthalmology/medical-scale-2.jpg',
      '/images/therapies/ophthalmology/medical-scale-3.jpg',
    ],
    writeWipe: [
      '/images/therapies/ophthalmology/write-wipe-1.jpg',
      '/images/therapies/ophthalmology/write-wipe-2.jpg',
      '/images/therapies/ophthalmology/write-wipe-3.jpg',
    ],
    tearOffPads: [
      '/images/therapies/ophthalmology/tear-off-pads-1.jpg',
      '/images/therapies/ophthalmology/tear-off-pads-2.jpg',
      '/images/therapies/ophthalmology/tear-off-pads-3.jpg',
    ],
    tableTops: [
      '/images/therapies/ophthalmology/table-tops-1.jpg',
      '/images/therapies/ophthalmology/table-tops-2.jpg',
      '/images/therapies/ophthalmology/table-tops-3.jpg',
    ],
  },
  'Dermatology': {
    card:  'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&q=80',
    books: [
      '/images/therapies/dermatology/books-1.jpg',
      '/images/therapies/dermatology/books-2.jpg',
      '/images/therapies/dermatology/books-3.jpg',
    ],
    flipChart: [
      '/images/therapies/dermatology/flip-chart-1.jpg',
      '/images/therapies/dermatology/flip-chart-2.jpg',
      '/images/therapies/dermatology/flip-chart-3.jpg',
    ],
    matt: [
      '/images/therapies/dermatology/matt-1.jpg',
      '/images/therapies/dermatology/matt-2.jpg',
      '/images/therapies/dermatology/matt-3.jpg',
    ],
    posters: [
      '/images/therapies/dermatology/posters-1.jpg',
      '/images/therapies/dermatology/posters-2.jpg',
      '/images/therapies/dermatology/posters-3.jpg',
    ],
    medicalScale: [
      '/images/therapies/dermatology/medical-scale-1.jpg',
      '/images/therapies/dermatology/medical-scale-2.jpg',
      '/images/therapies/dermatology/medical-scale-3.jpg',
    ],
    writeWipe: [
      '/images/therapies/dermatology/write-wipe-1.jpg',
      '/images/therapies/dermatology/write-wipe-2.jpg',
      '/images/therapies/dermatology/write-wipe-3.jpg',
    ],
    tearOffPads: [
      '/images/therapies/dermatology/tear-off-pads-1.jpg',
      '/images/therapies/dermatology/tear-off-pads-2.jpg',
      '/images/therapies/dermatology/tear-off-pads-3.jpg',
    ],
    tableTops: [
      '/images/therapies/dermatology/table-tops-1.jpg',
      '/images/therapies/dermatology/table-tops-2.jpg',
      '/images/therapies/dermatology/table-tops-3.jpg',
    ],
  },
  'Pediatrics': {
    card:   'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=800&q=80',
    books: [
      '/images/therapies/pediatrics/books-1.jpg',
      '/images/therapies/pediatrics/books-2.jpg',
      '/images/therapies/pediatrics/books-3.jpg',
    ],
    flipChart: [
      '/images/therapies/pediatrics/flip-chart-1.jpg',
      '/images/therapies/pediatrics/flip-chart-2.jpg',
      '/images/therapies/pediatrics/flip-chart-3.jpg',
    ],
    matt: [
      '/images/therapies/pediatrics/matt-1.jpg',
      '/images/therapies/pediatrics/matt-2.jpg',
      '/images/therapies/pediatrics/matt-3.jpg',
    ],
    posters: [
      '/images/therapies/pediatrics/posters-1.jpg',
      '/images/therapies/pediatrics/posters-2.jpg',
      '/images/therapies/pediatrics/posters-3.jpg',
    ],
    medicalScale: [
      '/images/therapies/pediatrics/medical-scale-1.jpg',
      '/images/therapies/pediatrics/medical-scale-2.jpg',
      '/images/therapies/pediatrics/medical-scale-3.jpg',
    ],
    writeWipe: [
      '/images/therapies/pediatrics/write-wipe-1.jpg',
      '/images/therapies/pediatrics/write-wipe-2.jpg',
      '/images/therapies/pediatrics/write-wipe-3.jpg',
    ],
    tearOffPads: [
      '/images/therapies/pediatrics/tear-off-pads-1.jpg',
      '/images/therapies/pediatrics/tear-off-pads-2.jpg',
      '/images/therapies/pediatrics/tear-off-pads-3.jpg',
    ],
    tableTops: [
      '/images/therapies/pediatrics/table-tops-1.jpg',
      '/images/therapies/pediatrics/table-tops-2.jpg',
      '/images/therapies/pediatrics/table-tops-3.jpg',
    ],
  },
  'Urology': {
    card:  'data:image/jpeg;base64,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',
    books: [
      '/images/therapies/urology/books-1.jpg',
      '/images/therapies/urology/books-2.jpg',
      '/images/therapies/urology/books-3.jpg',
    ],
    flipChart: [
      '/images/therapies/urology/flip-chart-1.jpg',
      '/images/therapies/urology/flip-chart-2.jpg',
      '/images/therapies/urology/flip-chart-3.jpg',
    ],
    matt: [
      '/images/therapies/urology/matt-1.jpg',
      '/images/therapies/urology/matt-2.jpg',
      '/images/therapies/urology/matt-3.jpg',
    ],
    posters: [
      '/images/therapies/urology/posters-1.jpg',
      '/images/therapies/urology/posters-2.jpg',
      '/images/therapies/urology/posters-3.jpg',
    ],
    medicalScale: [
      '/images/therapies/urology/medical-scale-1.jpg',
      '/images/therapies/urology/medical-scale-2.jpg',
      '/images/therapies/urology/medical-scale-3.jpg',
    ],
    writeWipe: [
      '/images/therapies/urology/write-wipe-1.jpg',
      '/images/therapies/urology/write-wipe-2.jpg',
      '/images/therapies/urology/write-wipe-3.jpg',
    ],
    tearOffPads: [
      '/images/therapies/urology/tear-off-pads-1.jpg',
      '/images/therapies/urology/tear-off-pads-2.jpg',
      '/images/therapies/urology/tear-off-pads-3.jpg',
    ],
    tableTops: [
      '/images/therapies/urology/table-tops-1.jpg',
      '/images/therapies/urology/table-tops-2.jpg',
      '/images/therapies/urology/table-tops-3.jpg',
    ],
  },
  'Neurology': {
    card: 'data:image/jpeg;base64,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',
    books: [
      '/images/therapies/neurology/books-1.jpg',
      '/images/therapies/neurology/books-2.jpg',
      '/images/therapies/neurology/books-3.jpg',
    ],
    flipChart: [
      '/images/therapies/neurology/flip-chart-1.jpg',
      '/images/therapies/neurology/flip-chart-2.jpg',
      '/images/therapies/neurology/flip-chart-3.jpg',
    ],
    matt: [
      '/images/therapies/neurology/matt-1.jpg',
      '/images/therapies/neurology/matt-2.jpg',
      '/images/therapies/neurology/matt-3.jpg',
    ],
    posters: [
      '/images/therapies/neurology/posters-1.jpg',
      '/images/therapies/neurology/posters-2.jpg',
      '/images/therapies/neurology/posters-3.jpg',
    ],
    medicalScale: [
      '/images/therapies/neurology/medical-scale-1.jpg',
      '/images/therapies/neurology/medical-scale-2.jpg',
      '/images/therapies/neurology/medical-scale-3.jpg',
    ],
    writeWipe: [
      '/images/therapies/neurology/write-wipe-1.jpg',
      '/images/therapies/neurology/write-wipe-2.jpg',
      '/images/therapies/neurology/write-wipe-3.jpg',
    ],
    tearOffPads: [
      '/images/therapies/neurology/tear-off-pads-1.jpg',
      '/images/therapies/neurology/tear-off-pads-2.jpg',
      '/images/therapies/neurology/tear-off-pads-3.jpg',
    ],
    tableTops: [
      '/images/therapies/neurology/table-tops-1.jpg',
      '/images/therapies/neurology/table-tops-2.jpg',
      '/images/therapies/neurology/table-tops-3.jpg',
    ],
  },
  'Psychiatry': {
    card: 'https://suryahospitals.com/speciality/6561e6ee81bdeExpertise---Psychiatry-(Adult).jpg',
    books: [
      '/images/therapies/psychiatry/books-1.jpg',
      '/images/therapies/psychiatry/books-2.jpg',
      '/images/therapies/psychiatry/books-3.jpg',
    ],
    flipChart: [
      '/images/therapies/psychiatry/flip-chart-1.jpg',
      '/images/therapies/psychiatry/flip-chart-2.jpg',
      '/images/therapies/psychiatry/flip-chart-3.jpg',
    ],
    matt: [
      '/images/therapies/psychiatry/matt-1.jpg',
      '/images/therapies/psychiatry/matt-2.jpg',
      '/images/therapies/psychiatry/matt-3.jpg',
    ],
    posters: [
      '/images/therapies/psychiatry/posters-1.jpg',
      '/images/therapies/psychiatry/posters-2.jpg',
      '/images/therapies/psychiatry/posters-3.jpg',
    ],
    medicalScale: [
      '/images/therapies/psychiatry/medical-scale-1.jpg',
      '/images/therapies/psychiatry/medical-scale-2.jpg',
      '/images/therapies/psychiatry/medical-scale-3.jpg',
    ],
    writeWipe: [
      '/images/therapies/psychiatry/write-wipe-1.jpg',
      '/images/therapies/psychiatry/write-wipe-2.jpg',
      '/images/therapies/psychiatry/write-wipe-3.jpg',
    ],
    tearOffPads: [
      '/images/therapies/psychiatry/tear-off-pads-1.jpg',
      '/images/therapies/psychiatry/tear-off-pads-2.jpg',
      '/images/therapies/psychiatry/tear-off-pads-3.jpg',
    ],
    tableTops: [
      '/images/therapies/psychiatry/table-tops-1.jpg',
      '/images/therapies/psychiatry/table-tops-2.jpg',
      '/images/therapies/psychiatry/table-tops-3.jpg',
    ],
  },
  'Dentistry': {
    card: 'https://dentalarchindia.com/wp-content/uploads/2026/03/teeth-cleaning-in-mumbai.jpeg.webp',
    books: [
      '/images/therapies/dentistry/books-1.jpg',
      '/images/therapies/dentistry/books-2.jpg',
      '/images/therapies/dentistry/books-3.jpg',
    ],
    flipChart: [
      '/images/therapies/dentistry/flip-chart-1.jpg',
      '/images/therapies/dentistry/flip-chart-2.jpg',
      '/images/therapies/dentistry/flip-chart-3.jpg',
    ],
    matt: [
      '/images/therapies/dentistry/matt-1.jpg',
      '/images/therapies/dentistry/matt-2.jpg',
      '/images/therapies/dentistry/matt-3.jpg',
    ],
    posters: [
      '/images/therapies/dentistry/posters-1.jpg',
      '/images/therapies/dentistry/posters-2.jpg',
      '/images/therapies/dentistry/posters-3.jpg',
    ],
    medicalScale: [
      '/images/therapies/dentistry/medical-scale-1.jpg',
      '/images/therapies/dentistry/medical-scale-2.jpg',
      '/images/therapies/dentistry/medical-scale-3.jpg',
    ],
    writeWipe: [
      '/images/therapies/dentistry/write-wipe-1.jpg',
      '/images/therapies/dentistry/write-wipe-2.jpg',
      '/images/therapies/dentistry/write-wipe-3.jpg',
    ],
    tearOffPads: [
      '/images/therapies/dentistry/tear-off-pads-1.jpg',
      '/images/therapies/dentistry/tear-off-pads-2.jpg',
      '/images/therapies/dentistry/tear-off-pads-3.jpg',
    ],
    tableTops: [
      '/images/therapies/dentistry/table-tops-1.jpg',
      '/images/therapies/dentistry/table-tops-2.jpg',
      '/images/therapies/dentistry/table-tops-3.jpg',
    ],
  },
  'Infectious Diseases': {
    card: 'https://www.verywellhealth.com/thmb/yI57XOKvdPi_bFAitEG2Pir1BSw=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/VirusIllustration-59ce8c1303f4020011702d0a.jpg',
    books: [
      '/images/therapies/infectious/books-1.jpg',
      '/images/therapies/infectious/books-2.jpg',
      '/images/therapies/infectious/books-3.jpg',
    ],
    flipChart: [
      '/images/therapies/infectious/flip-chart-1.jpg',
      '/images/therapies/infectious/flip-chart-2.jpg',
      '/images/therapies/infectious/flip-chart-3.jpg',
    ],
    matt: [
      '/images/therapies/infectious/matt-1.jpg',
      '/images/therapies/infectious/matt-2.jpg',
      '/images/therapies/infectious/matt-3.jpg',
    ],
    posters: [
      '/images/therapies/infectious/posters-1.jpg',
      '/images/therapies/infectious/posters-2.jpg',
      '/images/therapies/infectious/posters-3.jpg',
    ],
    medicalScale: [
      '/images/therapies/infectious/medical-scale-1.jpg',
      '/images/therapies/infectious/medical-scale-2.jpg',
      '/images/therapies/infectious/medical-scale-3.jpg',
    ],
    writeWipe: [
      '/images/therapies/infectious/write-wipe-1.jpg',
      '/images/therapies/infectious/write-wipe-2.jpg',
      '/images/therapies/infectious/write-wipe-3.jpg',
    ],
    tearOffPads: [
      '/images/therapies/infectious/tear-off-pads-1.jpg',
      '/images/therapies/infectious/tear-off-pads-2.jpg',
      '/images/therapies/infectious/tear-off-pads-3.jpg',
    ],
    tableTops: [
      '/images/therapies/infectious/table-tops-1.jpg',
      '/images/therapies/infectious/table-tops-2.jpg',
      '/images/therapies/infectious/table-tops-3.jpg',
    ],
  },
  'Nutritional Deficiencies': {
    card: 'https://westhartfordhealth.com/wp-content/uploads/2020/07/nutrition.jpg',
    books: [
      '/images/therapies/nutrition/books-1.jpg',
      '/images/therapies/nutrition/books-2.jpg',
      '/images/therapies/nutrition/books-3.jpg',
    ],
    flipChart: [
      '/images/therapies/nutrition/flip-chart-1.jpg',
      '/images/therapies/nutrition/flip-chart-2.jpg',
      '/images/therapies/nutrition/flip-chart-3.jpg',
    ],
    matt: [
      '/images/therapies/nutrition/matt-1.jpg',
      '/images/therapies/nutrition/matt-2.jpg',
      '/images/therapies/nutrition/matt-3.jpg',
    ],
    posters: [
      '/images/therapies/nutrition/posters-1.jpg',
      '/images/therapies/nutrition/posters-2.jpg',
      '/images/therapies/nutrition/posters-3.jpg',
    ],
    medicalScale: [
      '/images/therapies/nutrition/medical-scale-1.jpg',
      '/images/therapies/nutrition/medical-scale-2.jpg',
      '/images/therapies/nutrition/medical-scale-3.jpg',
    ],
    writeWipe: [
      '/images/therapies/nutrition/write-wipe-1.jpg',
      '/images/therapies/nutrition/write-wipe-2.jpg',
      '/images/therapies/nutrition/write-wipe-3.jpg',
    ],
    tearOffPads: [
      '/images/therapies/nutrition/tear-off-pads-1.jpg',
      '/images/therapies/nutrition/tear-off-pads-2.jpg',
      '/images/therapies/nutrition/tear-off-pads-3.jpg',
    ],
    tableTops: [
      '/images/therapies/nutrition/table-tops-1.jpg',
      '/images/therapies/nutrition/table-tops-2.jpg',
      '/images/therapies/nutrition/table-tops-3.jpg',
    ],
  },
  'Endocrinology': {
    card: 'https://cdn.aws.premiummedicalcircle.com/Endokrinologie-Fachbereich-iStockjpg.webp',
    books: [
      '/images/therapies/endocrinology/books-1.jpg',
      '/images/therapies/endocrinology/books-2.jpg',
      '/images/therapies/endocrinology/books-3.jpg',
    ],
    flipChart: [
      '/images/therapies/endocrinology/flip-chart-1.jpg',
      '/images/therapies/endocrinology/flip-chart-2.jpg',
      '/images/therapies/endocrinology/flip-chart-3.jpg',
    ],
    matt: [
      '/images/therapies/endocrinology/matt-1.jpg',
      '/images/therapies/endocrinology/matt-2.jpg',
      '/images/therapies/endocrinology/matt-3.jpg',
    ],
    posters: [
      '/images/therapies/endocrinology/posters-1.jpg',
      '/images/therapies/endocrinology/posters-2.jpg',
      '/images/therapies/endocrinology/posters-3.jpg',
    ],
    medicalScale: [
      '/images/therapies/endocrinology/medical-scale-1.jpg',
      '/images/therapies/endocrinology/medical-scale-2.jpg',
      '/images/therapies/endocrinology/medical-scale-3.jpg',
    ],
    writeWipe: [
      '/images/therapies/endocrinology/write-wipe-1.jpg',
      '/images/therapies/endocrinology/write-wipe-2.jpg',
      '/images/therapies/endocrinology/write-wipe-3.jpg',
    ],
    tearOffPads: [
      '/images/therapies/endocrinology/tear-off-pads-1.jpg',
      '/images/therapies/endocrinology/tear-off-pads-2.jpg',
      '/images/therapies/endocrinology/tear-off-pads-3.jpg',
    ],
    tableTops: [
      '/images/therapies/endocrinology/table-tops-1.jpg',
      '/images/therapies/endocrinology/table-tops-2.jpg',
      '/images/therapies/endocrinology/table-tops-3.jpg',
    ],
  },
  'Nephrology': {
    card: 'https://www.marengoasiahospitals.com/static/uploads/72581c07-cd4b-4c51-b076-95c2d99412fd-1715234360877.jpg',
    books: [
      '/images/therapies/nephrology/books-1.jpg',
      '/images/therapies/nephrology/books-2.jpg',
      '/images/therapies/nephrology/books-3.jpg',
    ],
    flipChart: [
      '/images/therapies/nephrology/flip-chart-1.jpg',
      '/images/therapies/nephrology/flip-chart-2.jpg',
      '/images/therapies/nephrology/flip-chart-3.jpg',
    ],
    matt: [
      '/images/therapies/nephrology/matt-1.jpg',
      '/images/therapies/nephrology/matt-2.jpg',
      '/images/therapies/nephrology/matt-3.jpg',
    ],
    posters: [
      '/images/therapies/nephrology/posters-1.jpg',
      '/images/therapies/nephrology/posters-2.jpg',
      '/images/therapies/nephrology/posters-3.jpg',
    ],
    medicalScale: [
      '/images/therapies/nephrology/medical-scale-1.jpg',
      '/images/therapies/nephrology/medical-scale-2.jpg',
      '/images/therapies/nephrology/medical-scale-3.jpg',
    ],
    writeWipe: [
      '/images/therapies/nephrology/write-wipe-1.jpg',
      '/images/therapies/nephrology/write-wipe-2.jpg',
      '/images/therapies/nephrology/write-wipe-3.jpg',
    ],
    tearOffPads: [
      '/images/therapies/nephrology/tear-off-pads-1.jpg',
      '/images/therapies/nephrology/tear-off-pads-2.jpg',
      '/images/therapies/nephrology/tear-off-pads-3.jpg',
    ],
    tableTops: [
      '/images/therapies/nephrology/table-tops-1.jpg',
      '/images/therapies/nephrology/table-tops-2.jpg',
      '/images/therapies/nephrology/table-tops-3.jpg',
    ],
  },
  'Hepatology': {
    card: 'https://www.gastropune.com/wp-content/uploads/2024/07/Untitled-design-2024-07-16T115210.358-1024x614.png',
    books: [
      '/images/therapies/hepatology/books-1.jpg',
      '/images/therapies/hepatology/books-2.jpg',
      '/images/therapies/hepatology/books-3.jpg',
    ],
    flipChart: [
      '/images/therapies/hepatology/flip-chart-1.jpg',
      '/images/therapies/hepatology/flip-chart-2.jpg',
      '/images/therapies/hepatology/flip-chart-3.jpg',
    ],
    matt: [
      '/images/therapies/hepatology/matt-1.jpg',
      '/images/therapies/hepatology/matt-2.jpg',
      '/images/therapies/hepatology/matt-3.jpg',
    ],
    posters: [
      '/images/therapies/hepatology/posters-1.jpg',
      '/images/therapies/hepatology/posters-2.jpg',
      '/images/therapies/hepatology/posters-3.jpg',
    ],
    medicalScale: [
      '/images/therapies/hepatology/medical-scale-1.jpg',
      '/images/therapies/hepatology/medical-scale-2.jpg',
      '/images/therapies/hepatology/medical-scale-3.jpg',
    ],
    writeWipe: [
      '/images/therapies/hepatology/write-wipe-1.jpg',
      '/images/therapies/hepatology/write-wipe-2.jpg',
      '/images/therapies/hepatology/write-wipe-3.jpg',
    ],
    tearOffPads: [
      '/images/therapies/hepatology/tear-off-pads-1.jpg',
      '/images/therapies/hepatology/tear-off-pads-2.jpg',
      '/images/therapies/hepatology/tear-off-pads-3.jpg',
    ],
    tableTops: [
      '/images/therapies/hepatology/table-tops-1.jpg',
      '/images/therapies/hepatology/table-tops-2.jpg',
      '/images/therapies/hepatology/table-tops-3.jpg',
    ],
  },
  'Oncology': {
    card: 'https://www.news-medical.net/images/Article_Images/ImageForArticle_1224_17375676414306114.jpg',
    books: [
      '/images/therapies/oncology/books-1.jpg',
      '/images/therapies/oncology/books-2.jpg',
      '/images/therapies/oncology/books-3.jpg',
    ],
    flipChart: [
      '/images/therapies/oncology/flip-chart-1.jpg',
      '/images/therapies/oncology/flip-chart-2.jpg',
      '/images/therapies/oncology/flip-chart-3.jpg',
    ],
    matt: [
      '/images/therapies/oncology/matt-1.jpg',
      '/images/therapies/oncology/matt-2.jpg',
      '/images/therapies/oncology/matt-3.jpg',
    ],
    posters: [
      '/images/therapies/oncology/posters-1.jpg',
      '/images/therapies/oncology/posters-2.jpg',
      '/images/therapies/oncology/posters-3.jpg',
    ],
    medicalScale: [
      '/images/therapies/oncology/medical-scale-1.jpg',
      '/images/therapies/oncology/medical-scale-2.jpg',
      '/images/therapies/oncology/medical-scale-3.jpg',
    ],
    writeWipe: [
      '/images/therapies/oncology/write-wipe-1.jpg',
      '/images/therapies/oncology/write-wipe-2.jpg',
      '/images/therapies/oncology/write-wipe-3.jpg',
    ],
    tearOffPads: [
      '/images/therapies/oncology/tear-off-pads-1.jpg',
      '/images/therapies/oncology/tear-off-pads-2.jpg',
      '/images/therapies/oncology/tear-off-pads-3.jpg',
    ],
    tableTops: [
      '/images/therapies/oncology/table-tops-1.jpg',
      '/images/therapies/oncology/table-tops-2.jpg',
      '/images/therapies/oncology/table-tops-3.jpg',
    ],
  },
  'General Wellness': {
    card: 'https://savaherbals.com/cdn/shop/files/Group_of_2_Objects4.jpg?v=1762148767&width=3840',
    books: [
      '/images/therapies/wellness/books-1.jpg',
      '/images/therapies/wellness/books-2.jpg',
      '/images/therapies/wellness/books-3.jpg',
    ],
    flipChart: [
      '/images/therapies/wellness/flip-chart-1.jpg',
      '/images/therapies/wellness/flip-chart-2.jpg',
      '/images/therapies/wellness/flip-chart-3.jpg',
    ],
    matt: [
      '/images/therapies/wellness/matt-1.jpg',
      '/images/therapies/wellness/matt-2.jpg',
      '/images/therapies/wellness/matt-3.jpg',
    ],
    posters: [
      '/images/therapies/wellness/posters-1.jpg',
      '/images/therapies/wellness/posters-2.jpg',
      '/images/therapies/wellness/posters-3.jpg',
    ],
    medicalScale: [
      '/images/therapies/wellness/medical-scale-1.jpg',
      '/images/therapies/wellness/medical-scale-2.jpg',
      '/images/therapies/wellness/medical-scale-3.jpg',
    ],
    writeWipe: [
      '/images/therapies/wellness/write-wipe-1.jpg',
      '/images/therapies/wellness/write-wipe-2.jpg',
      '/images/therapies/wellness/write-wipe-3.jpg',
    ],
    tearOffPads: [
      '/images/therapies/wellness/tear-off-pads-1.jpg',
      '/images/therapies/wellness/tear-off-pads-2.jpg',
      '/images/therapies/wellness/tear-off-pads-3.jpg',
    ],
    tableTops: [
      '/images/therapies/wellness/table-tops-1.jpg',
      '/images/therapies/wellness/table-tops-2.jpg',
      '/images/therapies/wellness/table-tops-3.jpg',
    ],
  },
};

// ─── Helper function to get category key ───
const getCategoryKey = (category: ProductCategory): keyof typeof THERAPY_IMAGES_DATA['Cardio-Vascular'] => {
  const keyMap: Record<ProductCategory, string> = {
    "BOOKS & MAGAZINES": "books",
    "FLIP CHART": "flipChart",
    "MATT (Desk Mats)": "matt",
    "POSTERS": "posters",
    "Medical SCALE": "medicalScale",
    "WRITE & WIPE": "writeWipe",
    "Tear off Pads": "tearOffPads",
    "TABLE TOPS & SCIENTIFIC INPUTS": "tableTops"
  };
  return keyMap[category] as keyof typeof THERAPY_IMAGES_DATA['Cardio-Vascular'];
};

// ─── Generate Category Products with Local Images ───
const generateCategoryProducts = (therapyName: string, category: ProductCategory): Product[] => {
  const categoryDetails: Record<ProductCategory, { icon: string; titles: string[]; descBase: string }> = {
    "BOOKS & MAGAZINES": {
      icon: "📚",
      titles: ["Comprehensive Guide", "Clinical Handbook", "Patient Education Book"],
      descBase: "full-color illustrated guide covering diagnosis, treatment options, and patient care protocols."
    },
    "FLIP CHART": {
      icon: "📊",
      titles: ["Educational Flip Chart", "Clinical Teaching Tool", "Patient Communication Chart"],
      descBase: "easy-to-use flip chart with clear illustrations for effective patient education."
    },
    "MATT (Desk Mats)": {
      icon: "🧩",
      titles: ["Desk Reference Mat", "Clinical Protocol Mat", "Quick Reference Mat"],
      descBase: "durable, wipe-clean desk mat with essential clinical information at a glance."
    },
    "POSTERS": {
      icon: "🖼️",
      titles: ["Anatomy Poster", "Clinical Pathway Poster", "Educational Wall Chart"],
      descBase: "high-resolution, laminated poster perfect for clinic walls and exam rooms."
    },
    "Medical SCALE": {
      icon: "⚖️",
      titles: ["Assessment Scale", "Risk Evaluation Tool", "Clinical Scoring System"],
      descBase: "evidence-based clinical scale for accurate patient assessment and monitoring."
    },
    "WRITE & WIPE": {
      icon: "✏️",
      titles: ["Dry-Erase Board", "Interactive Learning Tool", "Reusable Worksheet"],
      descBase: "write-and-wipe surface for interactive patient education and care planning."
    },
    "Tear off Pads": {
      icon: "📋",
      titles: ["Tear-Off Prescription Pad", "Patient Instruction Pad", "Clinical Notes Pad"],
      descBase: "convenient tear-off pad with essential information for patient take-home use."
    },
    "TABLE TOPS & SCIENTIFIC INPUTS": {
      icon: "🔬",
      titles: ["Interactive Table Top Display", "Scientific Input Module", "Clinical Data Station"],
      descBase: "interactive table top display with scientific inputs for clinical data analysis and patient education."
    }
  };

  const details = categoryDetails[category];
  const therapyImages = THERAPY_IMAGES_DATA[therapyName];
  const categoryKey = getCategoryKey(category);
  const categoryImages = therapyImages?.[categoryKey] || [
    '/images/placeholder.jpg',
    '/images/placeholder.jpg',
    '/images/placeholder.jpg',
  ];

  return [0, 1, 2].map((index) => ({
    title: `${therapyName}: ${details.titles[index]}`,
    desc: `${details.descBase} ${index === 0 ? 'Ideal for healthcare professionals.' : index === 1 ? 'Enhances clinical workflow and patient understanding.' : 'Trusted by medical facilities worldwide.'}`,
    img: categoryImages[index] || categoryImages[0],
    category
  }));
};

// ─── Generate Full Therapy Data ───
const generateFullTherapyData = (): Therapy[] => {
  const therapies = [
    { therapy: 'Diabetes', icon: '💉', color: '#3b82f6', bgColor: 'from-blue-500/20 to-blue-600/10', span: 2, slug: 'diabetes' },
    { therapy: 'Cardio-Vascular', icon: '❤️', color: '#ef4444', bgColor: 'from-red-500/20 to-red-600/10', span: 1, slug: 'cardio' },
    { therapy: 'ENT & Respiratory', icon: '🫁', color: '#06b6d4', bgColor: 'from-cyan-500/20 to-cyan-600/10', span: 1, slug: 'ent-respiratory' },
    { therapy: 'Orthopedics/Rheumatology', icon: '🦴', color: '#f97316', bgColor: 'from-orange-500/20 to-orange-600/10', span: 1, slug: 'orthopedics' },
    { therapy: 'Gynaecology and Obstetrics', icon: '👶', color: '#ec4899', bgColor: 'from-pink-500/20 to-pink-600/10', span: 1, slug: 'gynaecology' },
    { therapy: 'Gastroenterology', icon: '🔬', color: '#84cc16', bgColor: 'from-lime-500/20 to-lime-600/10', span: 2, slug: 'gastroenterology' },
    { therapy: 'Ophthalmology', icon: '👁️', color: '#0ea5e9', bgColor: 'from-sky-500/20 to-sky-600/10', span: 1, slug: 'ophthalmology' },
    { therapy: 'Dermatology', icon: '✨', color: '#f59e0b', bgColor: 'from-amber-500/20 to-amber-600/10', span: 1, slug: 'dermatology' },
    { therapy: 'Pediatrics', icon: '🧸', color: '#8b5cf6', bgColor: 'from-purple-500/20 to-purple-600/10', span: 2, slug: 'pediatrics' },
    { therapy: 'Urology', icon: '💧', color: '#14b8a6', bgColor: 'from-teal-500/20 to-teal-600/10', span: 1, slug: 'urology' },
    { therapy: 'Neurology', icon: '🧠', color: '#7c3aed', bgColor: 'from-purple-600/20 to-purple-700/10', span: 1, slug: 'neurology' },
    { therapy: 'Psychiatry', icon: '🧠', color: '#a855f7', bgColor: 'from-purple-500/20 to-purple-600/10', span: 1, slug: 'psychiatry' },
    { therapy: 'Dentistry', icon: '🦷', color: '#6366f1', bgColor: 'from-indigo-500/20 to-indigo-600/10', span: 1, slug: 'dentistry' },
    { therapy: 'Infectious Diseases', icon: '🦠', color: '#dc2626', bgColor: 'from-red-600/20 to-red-700/10', span: 2, slug: 'infectious-diseases' },
    { therapy: 'Nutritional Deficiencies', icon: '🥗', color: '#10b981', bgColor: 'from-emerald-500/20 to-emerald-600/10', span: 1, slug: 'nutrition' },
    { therapy: 'Endocrinology', icon: '⚖️', color: '#06b6d4', bgColor: 'from-cyan-600/20 to-cyan-700/10', span: 1, slug: 'endocrinology' },
    // { therapy: 'Nephrology', icon: '🫘', color: '#6366f1', bgColor: 'from-indigo-500/20 to-indigo-600/10', span: 1, slug: 'nephrology' },
    // { therapy: 'Hepatology', icon: '🫖', color: '#a855f7', bgColor: 'from-violet-500/20 to-violet-600/10', span: 1, slug: 'hepatology' },
    // { therapy: 'Oncology', icon: '🎗️', color: '#dc2626', bgColor: 'from-red-600/20 to-red-700/10', span: 2, slug: 'oncology' },
    // { therapy: 'General Wellness', icon: '🌟', color: '#10b981', bgColor: 'from-emerald-500/20 to-emerald-600/10', span: 1, slug: 'wellness' }
  ];

  return therapies.map(t => ({
    ...t,
    images: THERAPY_IMAGES_DATA[t.therapy] || THERAPY_IMAGES_DATA['General Wellness'],
    items: PRODUCT_CATEGORIES.flatMap(category => generateCategoryProducts(t.therapy, category))
  }));
};

const THERAPY_DATA = generateFullTherapyData();

// ─── Category Section Component ───
function CategorySection({ category, products, therapyColor, therapyName }: { category: ProductCategory; products: Product[]; therapyColor: string; therapyName: string }) {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);

  const categoryDetails: Record<ProductCategory, { icon: string; title: string; description: string }> = {
    "BOOKS & MAGAZINES": {
      icon: "📚",
      title: "BOOKS & MAGAZINES",
      description: `Comprehensive written resources for ${therapyName} education.`
    },
    "FLIP CHART": {
      icon: "📊",
      title: "Clinical Flip Charts",
      description: `Visual teaching aids designed for ${therapyName} patient education.`
    },
    "MATT (Desk Mats)": {
      icon: "🧩",
      title: "Desk Reference Mats",
      description: `Durable, wipe-clean desk mats for ${therapyName} clinical reference.`
    },
    "POSTERS": {
      icon: "🖼️",
      title: "Educational Posters",
      description: `High-resolution, laminated posters for ${therapyName} education.`
    },
    "Medical SCALE": {
      icon: "⚖️",
      title: "Clinical Assessment Scales",
      description: `Evidence-based assessment tools for ${therapyName} evaluation.`
    },
    "WRITE & WIPE": {
      icon: "✏️",
      title: "Write & Wipe Tools",
      description: `Reusable dry-erase surfaces for ${therapyName} care planning.`
    },
    "Tear off Pads": {
      icon: "📋",
      title: "Tear-Off Pads",
      description: `Convenient tear-off pads for ${therapyName} patient take-home information.`
    },
    "TABLE TOPS & SCIENTIFIC INPUTS": {
      icon: "🔬",
      title: "Table Tops & Scientific Inputs",
      description: `Interactive table top displays and scientific input modules for ${therapyName}.`
    }
  };

  const details = categoryDetails[category];

  const checkScroll = () => {
    const container = scrollContainerRef.current;
    if (container) {
      setShowLeftArrow(container.scrollLeft > 10);
      setShowRightArrow(container.scrollLeft < container.scrollWidth - container.clientWidth - 10);
    }
  };

  const scroll = (direction: 'left' | 'right') => {
    const container = scrollContainerRef.current;
    if (container) {
      container.scrollBy({ left: direction === 'left' ? -340 : 340, behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (container) {
      checkScroll();
      container.addEventListener('scroll', checkScroll);
      window.addEventListener('resize', checkScroll);
      return () => {
        container.removeEventListener('scroll', checkScroll);
        window.removeEventListener('resize', checkScroll);
      };
    }
  }, [products]);

  return (
    <div className="mb-8 sm:mb-10 md:mb-12 last:mb-0">
      <div className="mb-3 sm:mb-4">
        <div className="flex items-center gap-1.5 sm:gap-2 mb-1.5 sm:mb-2">
          <span className="text-2xl sm:text-3xl">{details.icon}</span>
          <h3 className="text-lg sm:text-xl font-bold" style={{ color: therapyColor }}>
            {details.title}
          </h3>
        </div>
        <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed max-w-4xl">{details.description}</p>
      </div>

      <div className="relative group mt-3 sm:mt-4">
        {showLeftArrow && (
          <button onClick={() => scroll('left')}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-20 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white shadow-xl border flex items-center justify-center hover:scale-110 transition-all -ml-1 sm:-ml-2 opacity-0 group-hover:opacity-100">
            <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" style={{ color: therapyColor }} />
          </button>
        )}

        <div ref={scrollContainerRef} className="flex gap-3 sm:gap-4 md:gap-5 overflow-x-auto pb-3 sm:pb-4"
          style={{ scrollbarWidth: 'thin', scrollbarColor: `${therapyColor} #e5e5e5` }}>
          {products.map((item, idx) => (
            <div key={idx} className="flex-shrink-0 w-[240px] sm:w-[280px] md:w-[300px] lg:w-[320px] bg-white rounded-lg sm:rounded-xl overflow-hidden hover:shadow-lg sm:hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <div className="relative aspect-[4/3] overflow-hidden bg-gray-100">
                <Image 
                  src={item.img} 
                  alt={item.title} 
                  fill 
                  className="object-cover" 
                  sizes="(max-width: 640px) 240px, (max-width: 768px) 280px, 320px"
                />
              </div>
              {/* <div className="p-3 sm:p-4">
                <h4 className="text-xs sm:text-sm font-semibold text-neutral-800 line-clamp-2">{item.title}</h4>
                <p className="text-[10px] sm:text-xs text-neutral-500 mt-1 line-clamp-2">{item.desc}</p>
              </div> */}
            </div>
          ))}
        </div>

        {showRightArrow && (
          <button onClick={() => scroll('right')}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-20 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white shadow-xl border flex items-center justify-center hover:scale-110 transition-all -mr-1 sm:-mr-2 opacity-0 group-hover:opacity-100">
            <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" style={{ color: therapyColor }} />
          </button>
        )}
      </div>
    </div>
  );
}

// ─── Modal Component ───
function Modal({ therapy, onClose }: { therapy: Therapy; onClose: () => void }) {
  const [isVisible, setIsVisible] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    document.body.style.overflow = 'hidden';
    requestAnimationFrame(() => setIsVisible(true));
    
    const handler = (e: KeyboardEvent) => { if (e.key === 'Escape') handleClose(); };
    document.addEventListener('keydown', handler);
    
    return () => {
      document.body.style.overflow = '';
      document.removeEventListener('keydown', handler);
    };
  }, []);

  const handleClose = () => {
    setIsVisible(false);
    setTimeout(onClose, 300);
  };

  const groupedItems = therapy.items.reduce((acc, item) => {
    if (!acc[item.category]) acc[item.category] = [];
    acc[item.category].push(item);
    return acc;
  }, {} as Record<ProductCategory, Product[]>);

  const modalContent = (
    <div 
      style={{ 
        position: 'fixed',
        inset: 0,
        zIndex: 99999,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '0.75rem',
        backgroundColor: isVisible ? 'rgba(0,0,0,0.8)' : 'rgba(0,0,0,0)',
        backdropFilter: isVisible ? 'blur(12px)' : 'none',
        transition: 'all 0.3s ease'
      }}
      onClick={handleClose}
    >
      <div 
        style={{
          position: 'relative',
          backgroundColor: 'white',
          borderRadius: '1.25rem',
          width: '100%',
          maxWidth: '72rem',
          maxHeight: '90vh',
          overflow: 'hidden',
          display: 'flex',
          flexDirection: 'column',
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? 'translateY(0) scale(1)' : 'translateY(2rem) scale(0.95)',
          transition: 'all 0.3s ease',
          boxShadow: '0 25px 50px -12px rgba(0,0,0,0.4)'
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="px-4 sm:px-5 md:px-7 pt-4 sm:pt-5 pb-3 sm:pb-4 border-b bg-white flex-shrink-0">
          <div className="flex items-start justify-between gap-2 sm:gap-3">
            <div className="flex items-center gap-1.5 sm:gap-2">
              <span className="text-xl sm:text-2xl md:text-3xl">{therapy.icon}</span>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-neutral-900">
                {therapy.therapy}
              </h2>
            </div>
            <button onClick={handleClose} 
              className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-neutral-100 hover:bg-neutral-200 flex items-center justify-center transition-all">
              <X className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-neutral-600" />
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-5 md:p-7">
          {PRODUCT_CATEGORIES.map((category) => {
            const products = groupedItems[category];
            if (!products || products.length === 0) return null;
            return (
              <CategorySection 
                key={category}
                category={category} 
                products={products} 
                therapyColor={therapy.color}
                therapyName={therapy.therapy}
              />
            );
          })}
        </div>
      </div>
    </div>
  );

  if (!mounted) return null;
  return createPortal(modalContent, document.body);
}

// ─── Collage Card Component ───
function CollageCard({ therapy, onClick }: { therapy: Therapy; onClick: () => void }) {
  return (
    <article
      className={`group relative rounded-xl sm:rounded-2xl overflow-hidden cursor-pointer transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl h-full min-h-[180px] sm:min-h-[200px] md:min-h-[220px] lg:min-h-[240px] ${
        therapy.span === 2 ? 'col-span-2' : 'col-span-1'
      }`}
      onClick={onClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') onClick(); }}
    >
      <Image 
        src={therapy.images.card}
        alt={therapy.therapy} 
        fill
        className="object-cover transition-all duration-700 group-hover:scale-110"
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 20vw"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-black/20" />
      <div className="absolute inset-0 p-3 sm:p-4 md:p-5 flex flex-col justify-between">
        <div className="flex justify-end">
          <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white/15 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:scale-110">
            <ArrowUpRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white" />
          </div>
        </div>
        <div>
          <span className="text-xl sm:text-2xl md:text-3xl drop-shadow-lg block mb-1.5 sm:mb-2">{therapy.icon}</span>
          <h3 className="text-white text-xs sm:text-sm md:text-base lg:text-lg font-bold leading-tight drop-shadow-lg">{therapy.therapy}</h3>
        </div>
      </div>
    </article>
  );
}

const THERAPY_SLUG_MAP: Record<string, string> = {
  'cardiac-care': 'Cardio-Vascular',
  'diabetic-care': 'Diabetes',
  'pediatric': 'Pediatrics',
  'general-wellness': 'General Wellness',
  'dermatology': 'Dermatology',
  'nephrology': 'Nephrology',
  'nutrition': 'Nutritional Deficiencies',
  'pulmonology': 'ENT & Respiratory',
  'hepatology': 'Hepatology',
  'ophthalmology': 'Ophthalmology',
  'gastroenterology': 'Gastroenterology',
  'urology': 'Urology',
  'orthopedics': 'Orthopedics/Rheumatology',
  'neurology': 'Neurology',
  'oncology': 'Oncology',
};

export default function TherapyCollageGrid({ 
  initialSelectedTherapy 
}: { 
  initialSelectedTherapy?: string | null 
}) {
  const [selected, setSelected] = useState<Therapy | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  const createSlug = (name: string) => {
    return name
      .toLowerCase()
      .replace(/[&]/g, 'and')
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-+|-+$/g, '');
  };

  useEffect(() => { 
    setIsLoaded(true); 
  }, []);

  useEffect(() => {
    if (initialSelectedTherapy) {
      const mappedName = THERAPY_SLUG_MAP[initialSelectedTherapy];
      const therapy = THERAPY_DATA.find(
        t => t.therapy === mappedName || createSlug(t.therapy) === initialSelectedTherapy
      );
      if (therapy) {
        setSelected(therapy);
      }
    }
  }, [initialSelectedTherapy]);

  return (
    <>
      <section className="py-12 sm:py-16 md:py-18 lg:py-20 xl:py-24 px-4 sm:px-6 bg-gradient-to-br from-slate-50 via-white to-slate-50">
        <div className="relative max-w-[1600px] mx-auto">
          <div className="text-left mb-8 sm:mb-10 md:mb-12 lg:mb-14 xl:mb-16">
            <div className={`flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4 transition-all duration-700 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
              <span className="w-10 sm:w-12 h-0.5 bg-gradient-to-r from-[#0093cb] to-[#00a65d]" />
              <span className="text-[10px] sm:text-xs font-black uppercase tracking-[0.3em] text-[#0093cb]">Therapy Areas</span>
            </div>
            <h1 className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter text-[#0f172a] mb-3 sm:mb-4 transition-all duration-700 delay-100 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
              Premium <span className="bg-gradient-to-r from-[#0093cb] to-[#00a65d] bg-clip-text text-transparent">Therapy Portfolio</span>
            </h1>
            <p className={`text-neutral-600 max-w-2xl text-sm sm:text-base md:text-lg transition-all duration-700 delay-200 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
              Specialized medical education tools across 20+ therapeutic areas, featuring 8 product categories including Table Tops & Scientific Inputs.
            </p>
          </div>

          <div className={`transition-all duration-700 delay-300 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            {/* Mobile: 2 columns */}
            <div className="grid grid-cols-2 gap-2 sm:gap-3 sm:hidden">
              {THERAPY_DATA.map((therapy) => (
                <CollageCard key={therapy.therapy} therapy={{...therapy, span: 1}} onClick={() => setSelected(therapy)} />
              ))}
            </div>

            {/* Tablet: 3 columns */}
            <div className="hidden sm:grid lg:hidden grid-cols-3 gap-2 sm:gap-3 auto-rows-[180px] sm:auto-rows-[200px]">
              {THERAPY_DATA.map((therapy) => (
                <CollageCard key={therapy.therapy} therapy={therapy.span === 2 ? {...therapy, span: 2} : {...therapy, span: 1}} onClick={() => setSelected(therapy)} />
              ))}
            </div>

            {/* Desktop: 5 columns */}
            <div className="hidden lg:grid grid-cols-5 gap-2 sm:gap-3 auto-rows-[220px] xl:auto-rows-[240px]">
              {THERAPY_DATA.map((therapy) => (
                <CollageCard key={therapy.therapy} therapy={therapy} onClick={() => setSelected(therapy)} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {selected && <Modal therapy={selected} onClose={() => setSelected(null)} />}
    </>
  );
}
