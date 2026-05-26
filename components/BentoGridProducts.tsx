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
    card: '/images/therapies/cardio/card.jpg',
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
      '/images/therapies/cardio/posters-1.jpg',
      '/images/therapies/cardio/posters-2.jpg',
      '/images/therapies/cardio/posters-3.jpg',
    ],
    medicalScale: [
      '/images/therapies/cardio/medical-scale-1.jpg',
      '/images/therapies/cardio/medical-scale-2.jpg',
      '/images/therapies/cardio/medical-scale-3.jpg',
    ],
    writeWipe: [
      '/images/therapies/cardio/write-wipe-1.jpg',
      '/images/therapies/cardio/write-wipe-2.jpg',
      '/images/therapies/cardio/write-wipe-3.jpg',
    ],
    tearOffPads: [
      '/images/therapies/cardio/tear-off-pads-1.jpg',
      '/images/therapies/cardio/tear-off-pads-2.jpg',
      '/images/therapies/cardio/tear-off-pads-3.jpg',
    ],
    tableTops: [
      '/images/therapies/cardio/table-tops-1.jpg',
      '/images/therapies/cardio/table-tops-2.jpg',
      '/images/therapies/cardio/table-tops-3.jpg',
    ],
  },
  'Diabetes': {
    card: '/images/therapies/diabetes/card.jpg',
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
      '/images/therapies/diabetes/posters-1.jpg',
      '/images/therapies/diabetes/posters-2.jpg',
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
    card: '/images/therapies/ent/card.jpg',
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
    card: '/images/therapies/ortho/card.jpg',
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
    card: '/images/therapies/gynaecology/card.jpg',
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
    card: '/images/therapies/gastro/card.jpg',
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
    card: '/images/therapies/ophthalmology/card.jpg',
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
    card: '/images/therapies/dermatology/card.jpg',
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
    card: '/images/therapies/pediatrics/card.jpg',
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
    card: '/images/therapies/urology/card.jpg',
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
    card: '/images/therapies/neurology/card.jpg',
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
    card: '/images/therapies/psychiatry/card.jpg',
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
    card: '/images/therapies/dentistry/card.jpg',
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
    card: '/images/therapies/infectious/card.jpg',
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
    card: '/images/therapies/nutrition/card.jpg',
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
    card: '/images/therapies/endocrinology/card.jpg',
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
    card: '/images/therapies/nephrology/card.jpg',
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
    card: '/images/therapies/hepatology/card.jpg',
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
    card: '/images/therapies/oncology/card.jpg',
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
    card: '/images/therapies/wellness/card.jpg',
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
    { therapy: 'Nephrology', icon: '🫘', color: '#6366f1', bgColor: 'from-indigo-500/20 to-indigo-600/10', span: 1, slug: 'nephrology' },
    { therapy: 'Hepatology', icon: '🫖', color: '#a855f7', bgColor: 'from-violet-500/20 to-violet-600/10', span: 1, slug: 'hepatology' },
    { therapy: 'Oncology', icon: '🎗️', color: '#dc2626', bgColor: 'from-red-600/20 to-red-700/10', span: 2, slug: 'oncology' },
    { therapy: 'General Wellness', icon: '🌟', color: '#10b981', bgColor: 'from-emerald-500/20 to-emerald-600/10', span: 1, slug: 'wellness' }
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
              <div className="p-3 sm:p-4">
                <h4 className="text-xs sm:text-sm font-semibold text-neutral-800 line-clamp-2">{item.title}</h4>
                <p className="text-[10px] sm:text-xs text-neutral-500 mt-1 line-clamp-2">{item.desc}</p>
              </div>
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