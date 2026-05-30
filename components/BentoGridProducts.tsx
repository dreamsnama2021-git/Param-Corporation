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

// ─── Cloudflare Dummy Images Pool ───
const DUMMY_IMAGES = [
  "https://pub-735dbd7583d74ad5949115d6fdf77023.r2.dev/Therepy/Hepatology/Paper%20Weight.png",
  "https://pub-735dbd7583d74ad5949115d6fdf77023.r2.dev/Categories/Paperweights/ChatGPT%20Image%20May%2028%2C%202026%2C%2002_02_32%20PM.png",
  "https://pub-735dbd7583d74ad5949115d6fdf77023.r2.dev/Categories/Paperweights/ChatGPT%20Image%20May%2028%2C%202026%2C%2002_02_37%20PM.png",
  "https://pub-735dbd7583d74ad5949115d6fdf77023.r2.dev/Categories/Paperweights/ChatGPT%20Image%20May%2028%2C%202026%2C%2002_02_57%20PM.png",
  "https://pub-735dbd7583d74ad5949115d6fdf77023.r2.dev/Categories/Paperweights/ChatGPT%20Image%20May%2028%2C%202026%2C%2002_04_17%20PM.png",
  "https://pub-735dbd7583d74ad5949115d6fdf77023.r2.dev/Categories/Paperweights/ChatGPT%20Image%20May%2028%2C%202026%2C%2002_08_09%20PM.png",
  "https://pub-735dbd7583d74ad5949115d6fdf77023.r2.dev/Categories/Paperweights/ChatGPT%20Image%20May%2028%2C%202026%2C%2002_09_23%20PM.png",
  "https://pub-735dbd7583d74ad5949115d6fdf77023.r2.dev/Categories/Paperweights/ChatGPT%20Image%20May%2028%2C%202026%2C%2002_09_31%20PM.png",
  "https://pub-735dbd7583d74ad5949115d6fdf77023.r2.dev/Categories/Paperweights/ChatGPT%20Image%20May%2028%2C%202026%2C%2002_09_48%20PM.png",
  "https://pub-735dbd7583d74ad5949115d6fdf77023.r2.dev/Categories/Paperweights/ChatGPT%20Image%20May%2028%2C%202026%2C%2002_10_17%20PM.png",
  "https://pub-735dbd7583d74ad5949115d6fdf77023.r2.dev/Therepy/Cardio/ChatGPT%20Image%20May%2025%2C%202026%2C%2004_25_07%20PM.png",
  "https://pub-735dbd7583d74ad5949115d6fdf77023.r2.dev/Therepy/Hepatology/Table%20Top.png",
  "https://pub-735dbd7583d74ad5949115d6fdf77023.r2.dev/Therepy/ENT%20%26%20Respiratory/25.png",
  "https://pub-735dbd7583d74ad5949115d6fdf77023.r2.dev/Therepy/ENT%20%26%20Respiratory/32.png",
  "https://pub-735dbd7583d74ad5949115d6fdf77023.r2.dev/Therepy/Urology/15.png",
  "https://pub-735dbd7583d74ad5949115d6fdf77023.r2.dev/Therepy/ENT%20%26%20Respiratory/28.png",
  "https://pub-735dbd7583d74ad5949115d6fdf77023.r2.dev/Therepy/Dermatology/ChatGPT%20Image%20May%2029%2C%202026%2C%2004_39_01%20PM.png",
  "https://pub-735dbd7583d74ad5949115d6fdf77023.r2.dev/Categories/Utility/ChatGPT%20Image%20May%2028%2C%202026%2C%2001_16_31%20PM.png",
  "https://pub-735dbd7583d74ad5949115d6fdf77023.r2.dev/Categories/Utility/ChatGPT%20Image%20May%2028%2C%202026%2C%2001_16_58%20PM.png",
  "https://pub-735dbd7583d74ad5949115d6fdf77023.r2.dev/Categories/Utility/ChatGPT%20Image%20May%2028%2C%202026%2C%2001_17_03%20PM.png",
  "https://pub-735dbd7583d74ad5949115d6fdf77023.r2.dev/Categories/Utility/ChatGPT%20Image%20May%2028%2C%202026%2C%2001_17_09%20PM.png",
  "https://pub-735dbd7583d74ad5949115d6fdf77023.r2.dev/Categories/Utility/ChatGPT%20Image%20May%2028%2C%202026%2C%2001_17_51%20PM.png",
  "https://pub-735dbd7583d74ad5949115d6fdf77023.r2.dev/Categories/Utility/ChatGPT%20Image%20May%2028%2C%202026%2C%2012_56_13%20PM.png",
  "https://pub-735dbd7583d74ad5949115d6fdf77023.r2.dev/Categories/Utility/ChatGPT%20Image%20May%2028%2C%202026%2C%2002_02_27%20PM.png",
  "https://pub-735dbd7583d74ad5949115d6fdf77023.r2.dev/Categories/Utility/ChatGPT%20Image%20May%2028%2C%202026%2C%2002_02_22%20PM.png",
  "https://pub-735dbd7583d74ad5949115d6fdf77023.r2.dev/Categories/Utility/ChatGPT%20Image%20May%2028%2C%202026%2C%2002_02_16%20PM.png",
  "https://pub-735dbd7583d74ad5949115d6fdf77023.r2.dev/Categories/Utility/ChatGPT%20Image%20May%2028%2C%202026%2C%2002_02_05%20PM.png",
  "https://pub-735dbd7583d74ad5949115d6fdf77023.r2.dev/Categories/3D%20PRINTED/ChatGPT%20Image%20May%2028%2C%202026%2C%2001_27_29%20PM.png",
  "https://pub-735dbd7583d74ad5949115d6fdf77023.r2.dev/Categories/3D%20PRINTED/ChatGPT%20Image%20May%2028%2C%202026%2C%2001_27_41%20PM.png",
  "https://pub-735dbd7583d74ad5949115d6fdf77023.r2.dev/Categories/3D%20PRINTED/ChatGPT%20Image%20May%2028%2C%202026%2C%2001_28_41%20PM.png",
  "https://pub-735dbd7583d74ad5949115d6fdf77023.r2.dev/Categories/3D%20PRINTED/ChatGPT%20Image%20May%2028%2C%202026%2C%2001_28_52%20PM.png",
  "https://pub-735dbd7583d74ad5949115d6fdf77023.r2.dev/Categories/3D%20PRINTED/ChatGPT%20Image%20May%2028%2C%202026%2C%2001_29_49%20PM.png",
  "https://pub-735dbd7583d74ad5949115d6fdf77023.r2.dev/Categories/3D%20PRINTED/ChatGPT%20Image%20May%2028%2C%202026%2C%2002_00_38%20PM.png",
  "https://pub-735dbd7583d74ad5949115d6fdf77023.r2.dev/Categories/3D%20PRINTED/ChatGPT%20Image%20May%2028%2C%202026%2C%2002_01_16%20PM.png",
  "https://pub-735dbd7583d74ad5949115d6fdf77023.r2.dev/Categories/3D%20PRINTED/ChatGPT%20Image%20May%2028%2C%202026%2C%2002_03_57%20PM.png",
  "https://pub-735dbd7583d74ad5949115d6fdf77023.r2.dev/Categories/3D%20PRINTED/ChatGPT%20Image%20May%2028%2C%202026%2C%2002_04_56%20PM.png",
  "https://pub-735dbd7583d74ad5949115d6fdf77023.r2.dev/Categories/3D%20PRINTED/ChatGPT%20Image%20May%2028%2C%202026%2C%2002_05_02%20PM.png",
  "https://pub-735dbd7583d74ad5949115d6fdf77023.r2.dev/Categories/FIBRE%20%26%20RESIN/ChatGPT%20Image%20May%2028%2C%202026%2C%2002_17_25%20PM.png",
  "https://pub-735dbd7583d74ad5949115d6fdf77023.r2.dev/Categories/FIBRE%20%26%20RESIN/ChatGPT%20Image%20May%2028%2C%202026%2C%2002_17_31%20PM.png",
  "https://pub-735dbd7583d74ad5949115d6fdf77023.r2.dev/Categories/FIBRE%20%26%20RESIN/ChatGPT%20Image%20May%2028%2C%202026%2C%2002_17_43%20PM.png",
  "https://pub-735dbd7583d74ad5949115d6fdf77023.r2.dev/Categories/FIBRE%20%26%20RESIN/ChatGPT%20Image%20May%2028%2C%202026%2C%2002_17_54%20PM.png",
  "https://pub-735dbd7583d74ad5949115d6fdf77023.r2.dev/Categories/FIBRE%20%26%20RESIN/ChatGPT%20Image%20May%2028%2C%202026%2C%2002_18_02%20PM.png",
  "https://pub-735dbd7583d74ad5949115d6fdf77023.r2.dev/Categories/FIBRE%20%26%20RESIN/ChatGPT%20Image%20May%2028%2C%202026%2C%2003_08_59%20PM.png",
  "https://pub-735dbd7583d74ad5949115d6fdf77023.r2.dev/Categories/FIBRE%20%26%20RESIN/ChatGPT%20Image%20May%2028%2C%202026%2C%2003_09_06%20PM.png",
  "https://pub-735dbd7583d74ad5949115d6fdf77023.r2.dev/Categories/FIBRE%20%26%20RESIN/ChatGPT%20Image%20May%2028%2C%202026%2C%2003_09_15%20PM.png",
  "https://pub-735dbd7583d74ad5949115d6fdf77023.r2.dev/Categories/FIBRE%20%26%20RESIN/ChatGPT%20Image%20May%2028%2C%202026%2C%2003_09_33%20PM.png",
  "https://pub-735dbd7583d74ad5949115d6fdf77023.r2.dev/Categories/FIBRE%20%26%20RESIN/ChatGPT%20Image%20May%2028%2C%202026%2C%2003_09_41%20PM.png",
  "https://pub-735dbd7583d74ad5949115d6fdf77023.r2.dev/Categories/Eco%20Friendly%20Products/CUSTOMIZED%20DENTIST%20THEME%20WOODEN%20CLOCK%201.JPG",
  "https://pub-735dbd7583d74ad5949115d6fdf77023.r2.dev/Categories/Eco%20Friendly%20Products/CUSTOMIZED%20HEART%20WOODEN%20FRAME%20WITH%20CLOCK.JPG",
  "https://pub-735dbd7583d74ad5949115d6fdf77023.r2.dev/Categories/Eco%20Friendly%20Products/CUSTOMIZED%20MDF%20NUMBER%20PUZZLE%201.JPG",
  "https://pub-735dbd7583d74ad5949115d6fdf77023.r2.dev/Categories/Eco%20Friendly%20Products/CUSTOMIZED%20PREGNANT%20LADY%20WOODEN%20FRAME%20WITH%20CLOCK.JPG",
  "https://pub-735dbd7583d74ad5949115d6fdf77023.r2.dev/Therepy/Cardio/ChatGPT%20Image%20May%2025%2C%202026%2C%2004_15_18%20PM.png",
  "https://pub-735dbd7583d74ad5949115d6fdf77023.r2.dev/Categories/3D%20PRINTED/ChatGPT%20Image%20May%2028%2C%202026%2C%2002_00_38%20PM.png",
  "https://pub-735dbd7583d74ad5949115d6fdf77023.r2.dev/Therepy/Cardio/ChatGPT%20Image%20May%2025%2C%202026%2C%2004_24_05%20PM.png",
  "https://pub-735dbd7583d74ad5949115d6fdf77023.r2.dev/Therepy/Neurology/64.png",
  "https://pub-735dbd7583d74ad5949115d6fdf77023.r2.dev/Categories/FIBRE%20%26%20RESIN/ChatGPT%20Image%20May%2028%2C%202026%2C%2003_09_06%20PM.png",
  "https://pub-735dbd7583d74ad5949115d6fdf77023.r2.dev/Personlized/3D%20Plates/3D%201.png",
  "https://pub-735dbd7583d74ad5949115d6fdf77023.r2.dev/Personlized/3D%20Plates/3D%202.png",
  "https://pub-735dbd7583d74ad5949115d6fdf77023.r2.dev/Personlized/3D%20Plates/3D%203.png",
  "https://pub-735dbd7583d74ad5949115d6fdf77023.r2.dev/Personlized/3D%20Plates/3D%204.png",
];

// Helper to get a deterministic dummy image based on a string key
const getDummyImage = (key: string, index: number): string => {
  let hash = 0;
  for (let i = 0; i < key.length; i++) {
    hash = ((hash << 5) - hash) + key.charCodeAt(i);
    hash |= 0;
  }
  const idx = (Math.abs(hash) + index) % DUMMY_IMAGES.length;
  return DUMMY_IMAGES[idx];
};

// Helper to process image URL - replaces local paths with dummy cloudflare images
const processImageUrl = (url: string, therapyName: string, category: string, index: number): string => {
  // If it's already a cloudflare R2 URL or absolute HTTP URL, keep it
  if (url.startsWith('http://') || url.startsWith('https://')) {
    return url;
  }
  // Otherwise, it's a local path - replace with dummy cloudflare image
  return getDummyImage(`${therapyName}-${category}-${index}`, index);
};

// ─── Therapy Images Data with processed URLs ───
const THERAPY_IMAGES_DATA: Record<string, any> = {
  'Cardio-Vascular': {
    card:  'https://images.unsplash.com/photo-1559757175-5700dde675bc?w=800&q=80',
    books: [
      getDummyImage('Cardio-Vascular-books-0', 0),
      getDummyImage('Cardio-Vascular-books-1', 1),
      getDummyImage('Cardio-Vascular-books-2', 2),
    ],
    flipChart: [
      getDummyImage('Cardio-Vascular-flipChart-0', 3),
      getDummyImage('Cardio-Vascular-flipChart-1', 4),
      getDummyImage('Cardio-Vascular-flipChart-2', 5),
    ],
    matt: [
      'https://pub-735dbd7583d74ad5949115d6fdf77023.r2.dev/Therepy/Cardio/ChatGPT%20Image%20May%2025%2C%202026%2C%2004_24_05%20PM.png',
      getDummyImage('Cardio-Vascular-matt-1', 6),
      getDummyImage('Cardio-Vascular-matt-2', 7),
    ],
    posters: [
      getDummyImage('Cardio-Vascular-posters-0', 8),
      getDummyImage('Cardio-Vascular-posters-1', 9),
      getDummyImage('Cardio-Vascular-posters-2', 10),
    ],
    medicalScale: [
      'https://pub-735dbd7583d74ad5949115d6fdf77023.r2.dev/Therepy/Cardio/PARAM%20PRODUCTS%20.png',
      getDummyImage('Cardio-Vascular-medicalScale-1', 11),
      getDummyImage('Cardio-Vascular-medicalScale-2', 12),
    ],
    writeWipe: [
      getDummyImage('Cardio-Vascular-writeWipe-0', 13),
      getDummyImage('Cardio-Vascular-writeWipe-1', 14),
      getDummyImage('Cardio-Vascular-writeWipe-2', 15),
    ],
    tearOffPads: [
      getDummyImage('Cardio-Vascular-tearOffPads-0', 16),
      getDummyImage('Cardio-Vascular-tearOffPads-1', 17),
      getDummyImage('Cardio-Vascular-tearOffPads-2', 18),
    ],
    tableTops: [
      'https://pub-735dbd7583d74ad5949115d6fdf77023.r2.dev/Therepy/Cardio/ChatGPT%20Image%20May%2025%2C%202026%2C%2004_25_07%20PM.png',
      getDummyImage('Cardio-Vascular-tableTops-1', 19),
      getDummyImage('Cardio-Vascular-tableTops-2', 20),
    ],
  },
  'Diabetes': {
    card: 'https://images.unsplash.com/photo-1585435557343-3b092031a831?w=800&q=80',
    books: [
      getDummyImage('Diabetes-books-0', 21),
      getDummyImage('Diabetes-books-1', 22),
      getDummyImage('Diabetes-books-2', 23),
    ],
    flipChart: [
      'https://pub-735dbd7583d74ad5949115d6fdf77023.r2.dev/Therepy/Cardio/ChatGPT%20Image%20May%2025%2C%202026%2C%2004_05_00%20PM.png',
      getDummyImage('Diabetes-flipChart-1', 24),
      getDummyImage('Diabetes-flipChart-2', 25),
    ],
    matt: [
      getDummyImage('Diabetes-matt-0', 26),
      getDummyImage('Diabetes-matt-1', 27),
      getDummyImage('Diabetes-matt-2', 28),
    ],
    posters: [
      'https://pub-735dbd7583d74ad5949115d6fdf77023.r2.dev/Therepy/Cardio/ChatGPT%20Image%20May%2025%2C%202026%2C%2004_06_35%20PM.png',
      'https://pub-735dbd7583d74ad5949115d6fdf77023.r2.dev/Therepy/Cardio/ChatGPT%20Image%20May%2025%2C%202026%2C%2004_15_09%20PM.png',
      'https://pub-735dbd7583d74ad5949115d6fdf77023.r2.dev/Therepy/Cardio/ChatGPT%20Image%20May%2025%2C%202026%2C%2004_24_00%20PM.png',
    ],
    medicalScale: [
      'https://pub-735dbd7583d74ad5949115d6fdf77023.r2.dev/Therepy/Cardio/ChatGPT%20Image%20May%2025%2C%202026%2C%2004_10_59%20PM.png',
      'https://pub-735dbd7583d74ad5949115d6fdf77023.r2.dev/Therepy/Cardio/ChatGPT%20Image%20May%2025%2C%202026%2C%2004_14_58%20PM.png',
      getDummyImage('Diabetes-medicalScale-2', 29),
    ],
    writeWipe: [
      'https://pub-735dbd7583d74ad5949115d6fdf77023.r2.dev/Therepy/Cardio/ChatGPT%20Image%20May%2025%2C%202026%2C%2004_05_33%20PM.png',
      getDummyImage('Diabetes-writeWipe-1', 30),
      getDummyImage('Diabetes-writeWipe-2', 31),
    ],
    tearOffPads: [
      'https://pub-735dbd7583d74ad5949115d6fdf77023.r2.dev/Therepy/Cardio/ChatGPT%20Image%20May%2025%2C%202026%2C%2004_05_00%20PM.png',
      getDummyImage('Diabetes-tearOffPads-1', 32),
      getDummyImage('Diabetes-tearOffPads-2', 33),
    ],
    tableTops: [
      getDummyImage('Diabetes-tableTops-0', 34),
      getDummyImage('Diabetes-tableTops-1', 35),
      getDummyImage('Diabetes-tableTops-2', 36),
    ],
  },
  'ENT & Respiratory': {
    card: 'https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?w=800&q=80',
    books: [
      'https://pub-735dbd7583d74ad5949115d6fdf77023.r2.dev/Therepy/ENT%20%26%20Respiratory/29.png',
      'https://pub-735dbd7583d74ad5949115d6fdf77023.r2.dev/Therepy/ENT%20%26%20Respiratory/40.png',
      getDummyImage('ENT-books-2', 37),
    ],
    flipChart: [
      getDummyImage('ENT-flipChart-0', 38),
      getDummyImage('ENT-flipChart-1', 39),
      getDummyImage('ENT-flipChart-2', 40),
    ],
    matt: [
      'https://pub-735dbd7583d74ad5949115d6fdf77023.r2.dev/Therepy/ENT%20%26%20Respiratory/34.png',
      'https://pub-735dbd7583d74ad5949115d6fdf77023.r2.dev/Therepy/ENT%20%26%20Respiratory/38.png',
      getDummyImage('ENT-matt-2', 41),
    ],
    posters: [
      'https://pub-735dbd7583d74ad5949115d6fdf77023.r2.dev/Therepy/ENT%20%26%20Respiratory/ChatGPT%20Image%20May%2028%2C%202026%2C%2005_41_56%20PM.png',
      'https://pub-735dbd7583d74ad5949115d6fdf77023.r2.dev/Therepy/ENT%20%26%20Respiratory/26.png',
      'https://pub-735dbd7583d74ad5949115d6fdf77023.r2.dev/Therepy/ENT%20%26%20Respiratory/27.png',
    ],
    medicalScale: [
      'https://pub-735dbd7583d74ad5949115d6fdf77023.r2.dev/Therepy/ENT%20%26%20Respiratory/ChatGPT%20Image%20May%2028%2C%202026%2C%2005_42_08%20PM.png',
      getDummyImage('ENT-medicalScale-1', 42),
      getDummyImage('ENT-medicalScale-2', 43),
    ],
    writeWipe: [
      'https://pub-735dbd7583d74ad5949115d6fdf77023.r2.dev/Therepy/ENT%20%26%20Respiratory/ChatGPT%20Image%20May%2028%2C%202026%2C%2005_41_44%20PM.png',
      'https://pub-735dbd7583d74ad5949115d6fdf77023.r2.dev/Therepy/ENT%20%26%20Respiratory/38.png',
      getDummyImage('ENT-writeWipe-2', 44),
    ],
    tearOffPads: [
      getDummyImage('ENT-tearOffPads-0', 45),
      getDummyImage('ENT-tearOffPads-1', 46),
      getDummyImage('ENT-tearOffPads-2', 47),
    ],
    tableTops: [
      'https://pub-735dbd7583d74ad5949115d6fdf77023.r2.dev/Therepy/ENT%20%26%20Respiratory/25.png',
      'https://pub-735dbd7583d74ad5949115d6fdf77023.r2.dev/Therepy/ENT%20%26%20Respiratory/28.png',
      'https://pub-735dbd7583d74ad5949115d6fdf77023.r2.dev/Therepy/ENT%20%26%20Respiratory/30.png',
    ],
  },
  'Orthopedics/Rheumatology': {
    card:  'https://images.unsplash.com/photo-1581595220892-b0739db3ba8c?w=800&q=80',
    books: [
      'https://pub-735dbd7583d74ad5949115d6fdf77023.r2.dev/Therepy/Orthopedics/PARAM%20PRODUCTS%20.png',
      getDummyImage('Ortho-books-1', 48),
      getDummyImage('Ortho-books-2', 49),
    ],
    flipChart: [
      'https://pub-735dbd7583d74ad5949115d6fdf77023.r2.dev/Therepy/Orthopedics/ChatGPT%20Image%20May%2025%2C%202026%2C%2004_51_21%20PM.png',
      getDummyImage('Ortho-flipChart-1', 50),
      getDummyImage('Ortho-flipChart-2', 51),
    ],
    matt: [
      getDummyImage('Ortho-matt-0', 52),
      getDummyImage('Ortho-matt-1', 53),
      getDummyImage('Ortho-matt-2', 54),
    ],
    posters: [
      'https://pub-735dbd7583d74ad5949115d6fdf77023.r2.dev/Therepy/Orthopedics/ChatGPT%20Image%20May%2025%2C%202026%2C%2004_44_50%20PM.png',
      getDummyImage('Ortho-posters-1', 55),
      getDummyImage('Ortho-posters-2', 56),
    ],
    medicalScale: [
      'https://pub-735dbd7583d74ad5949115d6fdf77023.r2.dev/Therepy/Orthopedics/ChatGPT%20Image%20May%2025%2C%202026%2C%2004_37_54%20PM.png',
      getDummyImage('Ortho-medicalScale-1', 57),
      getDummyImage('Ortho-medicalScale-2', 58),
    ],
    writeWipe: [
      getDummyImage('Ortho-writeWipe-0', 59),
      getDummyImage('Ortho-writeWipe-1', 60),
      getDummyImage('Ortho-writeWipe-2', 61),
    ],
    tearOffPads: [
      'https://pub-735dbd7583d74ad5949115d6fdf77023.r2.dev/Therepy/Orthopedics/ChatGPT%20Image%20May%2025%2C%202026%2C%2004_45_24%20PM.png',
      getDummyImage('Ortho-tearOffPads-1', 62),
      getDummyImage('Ortho-tearOffPads-2', 63),
    ],
    tableTops: [
      getDummyImage('Ortho-tableTops-0', 64),
      getDummyImage('Ortho-tableTops-1', 65),
      getDummyImage('Ortho-tableTops-2', 66),
    ],
  },
  'Gynaecology and Obstetrics': {
    card:'https://images.unsplash.com/photo-1519823551278-64ac92734fb1?w=800&q=80',
    books: [
      getDummyImage('Gynae-books-0', 67),
      getDummyImage('Gynae-books-1', 68),
      getDummyImage('Gynae-books-2', 69),
    ],
    flipChart: [
      getDummyImage('Gynae-flipChart-0', 70),
      getDummyImage('Gynae-flipChart-1', 71),
      getDummyImage('Gynae-flipChart-2', 72),
    ],
    matt: [
      getDummyImage('Gynae-matt-0', 73),
      getDummyImage('Gynae-matt-1', 74),
      getDummyImage('Gynae-matt-2', 75),
    ],
    posters: [
      getDummyImage('Gynae-posters-0', 76),
      getDummyImage('Gynae-posters-1', 77),
      getDummyImage('Gynae-posters-2', 78),
    ],
    medicalScale: [
      getDummyImage('Gynae-medicalScale-0', 79),
      getDummyImage('Gynae-medicalScale-1', 80),
      getDummyImage('Gynae-medicalScale-2', 81),
    ],
    writeWipe: [
      getDummyImage('Gynae-writeWipe-0', 82),
      getDummyImage('Gynae-writeWipe-1', 83),
      getDummyImage('Gynae-writeWipe-2', 84),
    ],
    tearOffPads: [
      getDummyImage('Gynae-tearOffPads-0', 85),
      getDummyImage('Gynae-tearOffPads-1', 86),
      getDummyImage('Gynae-tearOffPads-2', 87),
    ],
    tableTops: [
      getDummyImage('Gynae-tableTops-0', 88),
      getDummyImage('Gynae-tableTops-1', 89),
      getDummyImage('Gynae-tableTops-2', 90),
    ],
  },
  'Gastroenterology': {
    card:  'https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=800&q=80',
    books: [
      getDummyImage('Gastro-books-0', 91),
      getDummyImage('Gastro-books-1', 92),
      getDummyImage('Gastro-books-2', 93),
    ],
    flipChart: [
      getDummyImage('Gastro-flipChart-0', 94),
      getDummyImage('Gastro-flipChart-1', 95),
      getDummyImage('Gastro-flipChart-2', 96),
    ],
    matt: [
      getDummyImage('Gastro-matt-0', 97),
      getDummyImage('Gastro-matt-1', 98),
      getDummyImage('Gastro-matt-2', 99),
    ],
    posters: [
      getDummyImage('Gastro-posters-0', 100),
      getDummyImage('Gastro-posters-1', 101),
      getDummyImage('Gastro-posters-2', 102),
    ],
    medicalScale: [
      getDummyImage('Gastro-medicalScale-0', 103),
      getDummyImage('Gastro-medicalScale-1', 104),
      getDummyImage('Gastro-medicalScale-2', 105),
    ],
    writeWipe: [
      getDummyImage('Gastro-writeWipe-0', 106),
      getDummyImage('Gastro-writeWipe-1', 107),
      getDummyImage('Gastro-writeWipe-2', 108),
    ],
    tearOffPads: [
      getDummyImage('Gastro-tearOffPads-0', 109),
      getDummyImage('Gastro-tearOffPads-1', 110),
      getDummyImage('Gastro-tearOffPads-2', 111),
    ],
    tableTops: [
      getDummyImage('Gastro-tableTops-0', 112),
      getDummyImage('Gastro-tableTops-1', 113),
      getDummyImage('Gastro-tableTops-2', 114),
    ],
  },
  'Ophthalmology': {
    card:  'https://images.unsplash.com/photo-1584017911766-d451b3d0e843?w=800&q=80',
    books: [
      getDummyImage('Ophth-books-0', 115),
      getDummyImage('Ophth-books-1', 116),
      getDummyImage('Ophth-books-2', 117),
    ],
    flipChart: [
      getDummyImage('Ophth-flipChart-0', 118),
      getDummyImage('Ophth-flipChart-1', 119),
      getDummyImage('Ophth-flipChart-2', 120),
    ],
    matt: [
      getDummyImage('Ophth-matt-0', 121),
      getDummyImage('Ophth-matt-1', 122),
      getDummyImage('Ophth-matt-2', 123),
    ],
    posters: [
      getDummyImage('Ophth-posters-0', 124),
      getDummyImage('Ophth-posters-1', 125),
      getDummyImage('Ophth-posters-2', 126),
    ],
    medicalScale: [
      getDummyImage('Ophth-medicalScale-0', 127),
      getDummyImage('Ophth-medicalScale-1', 128),
      getDummyImage('Ophth-medicalScale-2', 129),
    ],
    writeWipe: [
      getDummyImage('Ophth-writeWipe-0', 130),
      getDummyImage('Ophth-writeWipe-1', 131),
      getDummyImage('Ophth-writeWipe-2', 132),
    ],
    tearOffPads: [
      getDummyImage('Ophth-tearOffPads-0', 133),
      getDummyImage('Ophth-tearOffPads-1', 134),
      getDummyImage('Ophth-tearOffPads-2', 135),
    ],
    tableTops: [
      getDummyImage('Ophth-tableTops-0', 136),
      getDummyImage('Ophth-tableTops-1', 137),
      getDummyImage('Ophth-tableTops-2', 138),
    ],
  },
  'Dermatology': {
    card:  'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&q=80',
    books: [
      'https://pub-735dbd7583d74ad5949115d6fdf77023.r2.dev/Therepy/Dermatology/43.png',
      'https://pub-735dbd7583d74ad5949115d6fdf77023.r2.dev/Therepy/Dermatology/ChatGPT%20Image%20May%2029%2C%202026%2C%2004_51_33%20PM.png',
      'https://pub-735dbd7583d74ad5949115d6fdf77023.r2.dev/Therepy/Dermatology/ChatGPT%20Image%20May%2029%2C%202026%2C%2004_52_31%20PM.png',
    ],
    flipChart: [
      getDummyImage('Derma-flipChart-0', 139),
      getDummyImage('Derma-flipChart-1', 140),
      getDummyImage('Derma-flipChart-2', 141),
    ],
    matt: [
      getDummyImage('Derma-matt-0', 142),
      getDummyImage('Derma-matt-1', 143),
      getDummyImage('Derma-matt-2', 144),
    ],
    posters: [
      'https://pub-735dbd7583d74ad5949115d6fdf77023.r2.dev/Therepy/Dermatology/74.png',
      'https://pub-735dbd7583d74ad5949115d6fdf77023.r2.dev/Therepy/Dermatology/86.png',
      getDummyImage('Derma-posters-2', 145),
    ],
    medicalScale: [
      'https://pub-735dbd7583d74ad5949115d6fdf77023.r2.dev/Therepy/Dermatology/51.png',
      'https://pub-735dbd7583d74ad5949115d6fdf77023.r2.dev/Therepy/Dermatology/89.png',
      'https://pub-735dbd7583d74ad5949115d6fdf77023.r2.dev/Therepy/Dermatology/ChatGPT%20Image%20May%2029%2C%202026%2C%2004_52_21%20PM.png',
    ],
    writeWipe: [
      getDummyImage('Derma-writeWipe-0', 146),
      getDummyImage('Derma-writeWipe-1', 147),
      getDummyImage('Derma-writeWipe-2', 148),
    ],
    tearOffPads: [
      getDummyImage('Derma-tearOffPads-0', 149),
      getDummyImage('Derma-tearOffPads-1', 150),
      getDummyImage('Derma-tearOffPads-2', 151),
    ],
    tableTops: [
      'https://pub-735dbd7583d74ad5949115d6fdf77023.r2.dev/Therepy/Dermatology/ChatGPT%20Image%20May%2029%2C%202026%2C%2004_38_53%20PM.png',
      'https://pub-735dbd7583d74ad5949115d6fdf77023.r2.dev/Therepy/Dermatology/ChatGPT%20Image%20May%2029%2C%202026%2C%2004_39_01%20PM.png',
      'https://pub-735dbd7583d74ad5949115d6fdf77023.r2.dev/Therepy/Dermatology/ChatGPT%20Image%20May%2029%2C%202026%2C%2004_39_12%20PM.png',
    ],
  },
  'Pediatrics': {
    card:   'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=800&q=80',
    books: [
      getDummyImage('Peds-books-0', 152),
      getDummyImage('Peds-books-1', 153),
      getDummyImage('Peds-books-2', 154),
    ],
    flipChart: [
      getDummyImage('Peds-flipChart-0', 155),
      getDummyImage('Peds-flipChart-1', 156),
      getDummyImage('Peds-flipChart-2', 157),
    ],
    matt: [
      getDummyImage('Peds-matt-0', 158),
      getDummyImage('Peds-matt-1', 159),
      getDummyImage('Peds-matt-2', 160),
    ],
    posters: [
      getDummyImage('Peds-posters-0', 161),
      getDummyImage('Peds-posters-1', 162),
      getDummyImage('Peds-posters-2', 163),
    ],
    medicalScale: [
      getDummyImage('Peds-medicalScale-0', 164),
      getDummyImage('Peds-medicalScale-1', 165),
      getDummyImage('Peds-medicalScale-2', 166),
    ],
    writeWipe: [
      getDummyImage('Peds-writeWipe-0', 167),
      getDummyImage('Peds-writeWipe-1', 168),
      getDummyImage('Peds-writeWipe-2', 169),
    ],
    tearOffPads: [
      getDummyImage('Peds-tearOffPads-0', 170),
      getDummyImage('Peds-tearOffPads-1', 171),
      getDummyImage('Peds-tearOffPads-2', 172),
    ],
    tableTops: [
      getDummyImage('Peds-tableTops-0', 173),
      getDummyImage('Peds-tableTops-1', 174),
      getDummyImage('Peds-tableTops-2', 175),
    ],
  },
  'Urology': {
    card: 'data:image/jpeg;base64,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',
    books: [
      getDummyImage('Uro-books-0', 176),
      getDummyImage('Uro-books-1', 177),
      getDummyImage('Uro-books-2', 178),
    ],
    flipChart: [
      'https://pub-735dbd7583d74ad5949115d6fdf77023.r2.dev/Therepy/Urology/Urology-.png',
      getDummyImage('Uro-flipChart-1', 179),
      getDummyImage('Uro-flipChart-2', 180),
    ],
    matt: [
      'https://pub-735dbd7583d74ad5949115d6fdf77023.r2.dev/Therepy/Urology/18.png',
      'https://pub-735dbd7583d74ad5949115d6fdf77023.r2.dev/Therepy/Urology/23.png',
      getDummyImage('Uro-matt-2', 181),
    ],
    posters: [
      getDummyImage('Uro-posters-0', 182),
      getDummyImage('Uro-posters-1', 183),
      getDummyImage('Uro-posters-2', 184),
    ],
    medicalScale: [
      getDummyImage('Uro-medicalScale-0', 185),
      getDummyImage('Uro-medicalScale-1', 186),
      getDummyImage('Uro-medicalScale-2', 187),
    ],
    writeWipe: [
      'https://pub-735dbd7583d74ad5949115d6fdf77023.r2.dev/Therepy/Urology/12.png',
      'https://pub-735dbd7583d74ad5949115d6fdf77023.r2.dev/Therepy/Urology/18.png',
      'https://pub-735dbd7583d74ad5949115d6fdf77023.r2.dev/Therepy/Urology/Urology-.png',
    ],
    tearOffPads: [
      getDummyImage('Uro-tearOffPads-0', 188),
      getDummyImage('Uro-tearOffPads-1', 189),
      getDummyImage('Uro-tearOffPads-2', 190),
    ],
    tableTops: [
      'https://pub-735dbd7583d74ad5949115d6fdf77023.r2.dev/Therepy/Urology/14.png',
      'https://pub-735dbd7583d74ad5949115d6fdf77023.r2.dev/Therepy/Urology/15.png',
      getDummyImage('Uro-tableTops-2', 191),
    ],
  },
  'Neurology': {
    card: 'https://mehtahospital.com/wp-content/uploads/2025/04/dr-mehta-hospital-neurology.webp',
    books: [
      'https://pub-735dbd7583d74ad5949115d6fdf77023.r2.dev/Therepy/Neurology/87.png',
      getDummyImage('Neuro-books-1', 192),
      getDummyImage('Neuro-books-2', 193),
    ],
    flipChart: [
      getDummyImage('Neuro-flipChart-0', 194),
      getDummyImage('Neuro-flipChart-1', 195),
      getDummyImage('Neuro-flipChart-2', 196),
    ],
    matt: [
      getDummyImage('Neuro-matt-0', 197),
      getDummyImage('Neuro-matt-1', 198),
      getDummyImage('Neuro-matt-2', 199),
    ],
    posters: [
      'https://pub-735dbd7583d74ad5949115d6fdf77023.r2.dev/Therepy/Neurology/81.png',
      getDummyImage('Neuro-posters-1', 200),
      getDummyImage('Neuro-posters-2', 201),
    ],
    medicalScale: [
      getDummyImage('Neuro-medicalScale-0', 202),
      getDummyImage('Neuro-medicalScale-1', 203),
      getDummyImage('Neuro-medicalScale-2', 204),
    ],
    writeWipe: [
      'https://pub-735dbd7583d74ad5949115d6fdf77023.r2.dev/Therepy/Neurology/82.png',
      getDummyImage('Neuro-writeWipe-1', 205),
      getDummyImage('Neuro-writeWipe-2', 206),
    ],
    tearOffPads: [
      getDummyImage('Neuro-tearOffPads-0', 207),
      getDummyImage('Neuro-tearOffPads-1', 208),
      getDummyImage('Neuro-tearOffPads-2', 209),
    ],
    tableTops: [
      getDummyImage('Neuro-tableTops-0', 210),
      getDummyImage('Neuro-tableTops-1', 211),
      getDummyImage('Neuro-tableTops-2', 212),
    ],
  },
  'Psychiatry': {
    card: 'https://suryahospitals.com/speciality/6561e6ee81bdeExpertise---Psychiatry-(Adult).jpg',
    books: [
      getDummyImage('Psych-books-0', 213),
      getDummyImage('Psych-books-1', 214),
      getDummyImage('Psych-books-2', 215),
    ],
    flipChart: [
      getDummyImage('Psych-flipChart-0', 216),
      getDummyImage('Psych-flipChart-1', 217),
      getDummyImage('Psych-flipChart-2', 218),
    ],
    matt: [
      getDummyImage('Psych-matt-0', 219),
      getDummyImage('Psych-matt-1', 220),
      getDummyImage('Psych-matt-2', 221),
    ],
    posters: [
      getDummyImage('Psych-posters-0', 222),
      getDummyImage('Psych-posters-1', 223),
      getDummyImage('Psych-posters-2', 224),
    ],
    medicalScale: [
      getDummyImage('Psych-medicalScale-0', 225),
      getDummyImage('Psych-medicalScale-1', 226),
      getDummyImage('Psych-medicalScale-2', 227),
    ],
    writeWipe: [
      getDummyImage('Psych-writeWipe-0', 228),
      getDummyImage('Psych-writeWipe-1', 229),
      getDummyImage('Psych-writeWipe-2', 230),
    ],
    tearOffPads: [
      getDummyImage('Psych-tearOffPads-0', 231),
      getDummyImage('Psych-tearOffPads-1', 232),
      getDummyImage('Psych-tearOffPads-2', 233),
    ],
    tableTops: [
      getDummyImage('Psych-tableTops-0', 234),
      getDummyImage('Psych-tableTops-1', 235),
      getDummyImage('Psych-tableTops-2', 236),
    ],
  },
  'Dentistry': {
    card: 'https://dentalarchindia.com/wp-content/uploads/2026/03/teeth-cleaning-in-mumbai.jpeg.webp',
    books: [
      getDummyImage('Dent-books-0', 237),
      getDummyImage('Dent-books-1', 238),
      getDummyImage('Dent-books-2', 239),
    ],
    flipChart: [
      getDummyImage('Dent-flipChart-0', 240),
      getDummyImage('Dent-flipChart-1', 241),
      getDummyImage('Dent-flipChart-2', 242),
    ],
    matt: [
      getDummyImage('Dent-matt-0', 243),
      getDummyImage('Dent-matt-1', 244),
      getDummyImage('Dent-matt-2', 245),
    ],
    posters: [
      getDummyImage('Dent-posters-0', 246),
      getDummyImage('Dent-posters-1', 247),
      getDummyImage('Dent-posters-2', 248),
    ],
    medicalScale: [
      getDummyImage('Dent-medicalScale-0', 249),
      getDummyImage('Dent-medicalScale-1', 250),
      getDummyImage('Dent-medicalScale-2', 251),
    ],
    writeWipe: [
      getDummyImage('Dent-writeWipe-0', 252),
      getDummyImage('Dent-writeWipe-1', 253),
      getDummyImage('Dent-writeWipe-2', 254),
    ],
    tearOffPads: [
      getDummyImage('Dent-tearOffPads-0', 255),
      getDummyImage('Dent-tearOffPads-1', 256),
      getDummyImage('Dent-tearOffPads-2', 257),
    ],
    tableTops: [
      getDummyImage('Dent-tableTops-0', 258),
      getDummyImage('Dent-tableTops-1', 259),
      getDummyImage('Dent-tableTops-2', 260),
    ],
  },
  'Infectious Diseases': {
    card: 'https://www.verywellhealth.com/thmb/yI57XOKvdPi_bFAitEG2Pir1BSw=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/VirusIllustration-59ce8c1303f4020011702d0a.jpg',
    books: [
      getDummyImage('Infect-books-0', 261),
      getDummyImage('Infect-books-1', 262),
      getDummyImage('Infect-books-2', 263),
    ],
    flipChart: [
      getDummyImage('Infect-flipChart-0', 264),
      getDummyImage('Infect-flipChart-1', 265),
      getDummyImage('Infect-flipChart-2', 266),
    ],
    matt: [
      getDummyImage('Infect-matt-0', 267),
      getDummyImage('Infect-matt-1', 268),
      getDummyImage('Infect-matt-2', 269),
    ],
    posters: [
      getDummyImage('Infect-posters-0', 270),
      getDummyImage('Infect-posters-1', 271),
      getDummyImage('Infect-posters-2', 272),
    ],
    medicalScale: [
      getDummyImage('Infect-medicalScale-0', 273),
      getDummyImage('Infect-medicalScale-1', 274),
      getDummyImage('Infect-medicalScale-2', 275),
    ],
    writeWipe: [
      getDummyImage('Infect-writeWipe-0', 276),
      getDummyImage('Infect-writeWipe-1', 277),
      getDummyImage('Infect-writeWipe-2', 278),
    ],
    tearOffPads: [
      getDummyImage('Infect-tearOffPads-0', 279),
      getDummyImage('Infect-tearOffPads-1', 280),
      getDummyImage('Infect-tearOffPads-2', 281),
    ],
    tableTops: [
      getDummyImage('Infect-tableTops-0', 282),
      getDummyImage('Infect-tableTops-1', 283),
      getDummyImage('Infect-tableTops-2', 284),
    ],
  },
  'Endocrinology': {
    card: 'https://cdn.aws.premiummedicalcircle.com/Endokrinologie-Fachbereich-iStockjpg.webp',
    books: [
      getDummyImage('Endo-books-0', 285),
      getDummyImage('Endo-books-1', 286),
      getDummyImage('Endo-books-2', 287),
    ],
    flipChart: [
      getDummyImage('Endo-flipChart-0', 288),
      getDummyImage('Endo-flipChart-1', 289),
      getDummyImage('Endo-flipChart-2', 290),
    ],
    matt: [
      getDummyImage('Endo-matt-0', 291),
      getDummyImage('Endo-matt-1', 292),
      getDummyImage('Endo-matt-2', 293),
    ],
    posters: [
      getDummyImage('Endo-posters-0', 294),
      getDummyImage('Endo-posters-1', 295),
      getDummyImage('Endo-posters-2', 296),
    ],
    medicalScale: [
      getDummyImage('Endo-medicalScale-0', 297),
      getDummyImage('Endo-medicalScale-1', 298),
      getDummyImage('Endo-medicalScale-2', 299),
    ],
    writeWipe: [
      getDummyImage('Endo-writeWipe-0', 300),
      getDummyImage('Endo-writeWipe-1', 301),
      getDummyImage('Endo-writeWipe-2', 302),
    ],
    tearOffPads: [
      getDummyImage('Endo-tearOffPads-0', 303),
      getDummyImage('Endo-tearOffPads-1', 304),
      getDummyImage('Endo-tearOffPads-2', 305),
    ],
    tableTops: [
      getDummyImage('Endo-tableTops-0', 306),
      getDummyImage('Endo-tableTops-1', 307),
      getDummyImage('Endo-tableTops-2', 308),
    ],
  },
  'Hepatology': {
    card: 'https://www.gastropune.com/wp-content/uploads/2024/07/Untitled-design-2024-07-16T115210.358-1024x614.png',
    books: [
      getDummyImage('Hep-books-0', 309),
      getDummyImage('Hep-books-1', 310),
      getDummyImage('Hep-books-2', 311),
    ],
    flipChart: [
      getDummyImage('Hep-flipChart-0', 312),
      getDummyImage('Hep-flipChart-1', 313),
      getDummyImage('Hep-flipChart-2', 314),
    ],
    matt: [
      getDummyImage('Hep-matt-0', 315),
      getDummyImage('Hep-matt-1', 316),
      getDummyImage('Hep-matt-2', 317),
    ],
    posters: [
      'https://pub-735dbd7583d74ad5949115d6fdf77023.r2.dev/Therepy/Hepatology/Frame.png',
      getDummyImage('Hep-posters-1', 318),
      getDummyImage('Hep-posters-2', 319),
    ],
    medicalScale: [
      'https://pub-735dbd7583d74ad5949115d6fdf77023.r2.dev/Therepy/Hepatology/Paper%20Weight.png',
      getDummyImage('Hep-medicalScale-1', 320),
      getDummyImage('Hep-medicalScale-2', 321),
    ],
    writeWipe: [
      'https://pub-735dbd7583d74ad5949115d6fdf77023.r2.dev/Therepy/Hepatology/Write%20%26%20Wipe.png',
      getDummyImage('Hep-writeWipe-1', 322),
      getDummyImage('Hep-writeWipe-2', 323),
    ],
    tearOffPads: [
      getDummyImage('Hep-tearOffPads-0', 324),
      getDummyImage('Hep-tearOffPads-1', 325),
      getDummyImage('Hep-tearOffPads-2', 326),
    ],
    tableTops: [
      'https://pub-735dbd7583d74ad5949115d6fdf77023.r2.dev/Therepy/Hepatology/Table%20Top.png',
      getDummyImage('Hep-tableTops-1', 327),
      getDummyImage('Hep-tableTops-2', 328),
    ],
  },
  'Oncology': {
    card: 'https://www.news-medical.net/images/Article_Images/ImageForArticle_1224_17375676414306114.jpg',
    books: [
      getDummyImage('Onc-books-0', 329),
      getDummyImage('Onc-books-1', 330),
      getDummyImage('Onc-books-2', 331),
    ],
    flipChart: [
      getDummyImage('Onc-flipChart-0', 332),
      getDummyImage('Onc-flipChart-1', 333),
      getDummyImage('Onc-flipChart-2', 334),
    ],
    matt: [
      getDummyImage('Onc-matt-0', 335),
      getDummyImage('Onc-matt-1', 336),
      getDummyImage('Onc-matt-2', 337),
    ],
    posters: [
      getDummyImage('Onc-posters-0', 338),
      getDummyImage('Onc-posters-1', 339),
      getDummyImage('Onc-posters-2', 340),
    ],
    medicalScale: [
      getDummyImage('Onc-medicalScale-0', 341),
      getDummyImage('Onc-medicalScale-1', 342),
      getDummyImage('Onc-medicalScale-2', 343),
    ],
    writeWipe: [
      getDummyImage('Onc-writeWipe-0', 344),
      getDummyImage('Onc-writeWipe-1', 345),
      getDummyImage('Onc-writeWipe-2', 346),
    ],
    tearOffPads: [
      getDummyImage('Onc-tearOffPads-0', 347),
      getDummyImage('Onc-tearOffPads-1', 348),
      getDummyImage('Onc-tearOffPads-2', 349),
    ],
    tableTops: [
      getDummyImage('Onc-tableTops-0', 350),
      getDummyImage('Onc-tableTops-1', 351),
      getDummyImage('Onc-tableTops-2', 352),
    ],
  },
  'General Wellness': {
    card: 'https://savaherbals.com/cdn/shop/files/Group_of_2_Objects4.jpg?v=1762148767&width=3840',
    books: [
      getDummyImage('Well-books-0', 353),
      getDummyImage('Well-books-1', 354),
      getDummyImage('Well-books-2', 355),
    ],
    flipChart: [
      getDummyImage('Well-flipChart-0', 356),
      getDummyImage('Well-flipChart-1', 357),
      getDummyImage('Well-flipChart-2', 358),
    ],
    matt: [
      getDummyImage('Well-matt-0', 359),
      getDummyImage('Well-matt-1', 360),
      getDummyImage('Well-matt-2', 361),
    ],
    posters: [
      getDummyImage('Well-posters-0', 362),
      getDummyImage('Well-posters-1', 363),
      getDummyImage('Well-posters-2', 364),
    ],
    medicalScale: [
      getDummyImage('Well-medicalScale-0', 365),
      getDummyImage('Well-medicalScale-1', 366),
      getDummyImage('Well-medicalScale-2', 367),
    ],
    writeWipe: [
      getDummyImage('Well-writeWipe-0', 368),
      getDummyImage('Well-writeWipe-1', 369),
      getDummyImage('Well-writeWipe-2', 370),
    ],
    tearOffPads: [
      getDummyImage('Well-tearOffPads-0', 371),
      getDummyImage('Well-tearOffPads-1', 372),
      getDummyImage('Well-tearOffPads-2', 373),
    ],
    tableTops: [
      getDummyImage('Well-tableTops-0', 374),
      getDummyImage('Well-tableTops-1', 375),
      getDummyImage('Well-tableTops-2', 376),
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

// ─── Generate Category Products with Images ───
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
    getDummyImage(`${therapyName}-${category}-default`, 0),
    getDummyImage(`${therapyName}-${category}-default`, 1),
    getDummyImage(`${therapyName}-${category}-default`, 2),
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
    { therapy: 'Urology', icon: '💧', color: '#ec4899', bgColor: 'from-pink-500/20 to-pink-600/10', span: 1, slug: 'gynaecology' },
    { therapy: 'Neurology', icon: '🧠', color: '#84cc16', bgColor: 'from-lime-500/20 to-lime-600/10', span: 2, slug: 'gastroenterology' },
    { therapy: 'Hepatology', icon: '🫖', color: '#0ea5e9', bgColor: 'from-sky-500/20 to-sky-600/10', span: 1, slug: 'ophthalmology' },
    { therapy: 'Dermatology', icon: '✨', color: '#f59e0b', bgColor: 'from-amber-500/20 to-amber-600/10', span: 1, slug: 'dermatology' },
    { therapy: 'Pediatrics', icon: '🧸', color: '#8b5cf6', bgColor: 'from-purple-500/20 to-purple-600/10', span: 2, slug: 'pediatrics' },
    { therapy: 'Gynaecology and Obstetrics', icon: '👶',color: '#14b8a6', bgColor: 'from-teal-500/20 to-teal-600/10', span: 1, slug: 'urology' },
    { therapy: 'Gastroenterology', icon: '🔬', color: '#7c3aed', bgColor: 'from-purple-600/20 to-purple-700/10', span: 1, slug: 'neurology' },
    { therapy: 'Ophthalmology', icon: '👁️', color: '#a855f7', bgColor: 'from-violet-500/20 to-violet-600/10', span: 1, slug: 'hepatology' },
    { therapy: 'Psychiatry', icon: '🧠', color: '#a855f7', bgColor: 'from-purple-500/20 to-purple-600/10', span: 1, slug: 'psychiatry' },
    { therapy: 'Dentistry', icon: '🦷', color: '#6366f1', bgColor: 'from-indigo-500/20 to-indigo-600/10', span: 1, slug: 'dentistry' },
    { therapy: 'Infectious Diseases', icon: '🦠', color: '#dc2626', bgColor: 'from-red-600/20 to-red-700/10', span: 2, slug: 'infectious-diseases' },
    // { therapy: 'Nutritional Deficiencies', icon: '🥗', color: '#10b981', bgColor: 'from-emerald-500/20 to-emerald-600/10', span: 1, slug: 'nutrition' },
    { therapy: 'Endocrinology', icon: '⚖️', color: '#06b6d4', bgColor: 'from-cyan-600/20 to-cyan-700/10', span: 1, slug: 'endocrinology' },
    // { therapy: 'Nephrology', icon: '🫘', color: '#6366f1', bgColor: 'from-indigo-500/20 to-indigo-600/10', span: 1, slug: 'nephrology' },
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
function CategorySection({
  category,
  products,
  therapyColor,
  therapyName
}: {
  category: ProductCategory;
  products: Product[];
  therapyColor: string;
  therapyName: string;
}) {

  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);

  const categoryDetails: Record<
    ProductCategory,
    {
      icon: string;
      title: string;
      description: string;
    }
  > = {
    "BOOKS & MAGAZINES": {
      icon: "📚",
      title: "BOOKS & MAGAZINES",
      description: `Comprehensive written resources for ${therapyName} education.`,
    },

    "FLIP CHART": {
      icon: "📊",
      title: "Clinical Flip Charts",
      description: `Visual teaching aids designed for ${therapyName} patient education.`,
    },

    "MATT (Desk Mats)": {
      icon: "🧩",
      title: "Desk Reference Mats",
      description: `Durable, wipe-clean desk mats for ${therapyName} clinical reference.`,
    },

    "POSTERS": {
      icon: "🖼️",
      title: "Educational Posters",
      description: `High-resolution, laminated posters for ${therapyName} education.`,
    },

    "Medical SCALE": {
      icon: "⚖️",
      title: "Clinical Assessment Scales",
      description: `Evidence-based assessment tools for ${therapyName} evaluation.`,
    },

    "WRITE & WIPE": {
      icon: "✏️",
      title: "Write & Wipe Tools",
      description: `Reusable dry-erase surfaces for ${therapyName} care planning.`,
    },

    "Tear off Pads": {
      icon: "📋",
      title: "Tear-Off Pads",
      description: `Convenient tear-off pads for ${therapyName} patient take-home information.`,
    },

    "TABLE TOPS & SCIENTIFIC INPUTS": {
      icon: "🔬",
      title: "Table Tops & Scientific Inputs",
      description: `Interactive table top displays and scientific input modules for ${therapyName}.`,
    },
  };

  const details = categoryDetails[category];

  const checkScroll = () => {
    const container = scrollContainerRef.current;

    if (container) {
      setShowLeftArrow(container.scrollLeft > 10);

      setShowRightArrow(
        container.scrollLeft <
          container.scrollWidth - container.clientWidth - 10
      );
    }
  };

  const scroll = (direction: "left" | "right") => {
    const container = scrollContainerRef.current;

    if (container) {
      container.scrollBy({
        left: direction === "left" ? -260 : 260,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    const container = scrollContainerRef.current;

    if (container) {
      checkScroll();

      container.addEventListener("scroll", checkScroll);

      window.addEventListener("resize", checkScroll);

      return () => {
        container.removeEventListener("scroll", checkScroll);

        window.removeEventListener("resize", checkScroll);
      };
    }
  }, [products]);

  return (
    <div className="mb-8 sm:mb-10 md:mb-12 last:mb-0">

      {/* Header */}
      <div className="mb-3 sm:mb-4">

        <div className="flex items-center gap-1.5 sm:gap-2 mb-1.5 sm:mb-2">

          <span className="text-2xl sm:text-3xl">
            {details.icon}
          </span>

          <h3
            className="text-lg sm:text-xl font-bold"
            style={{ color: therapyColor }}
          >
            {details.title}
          </h3>

        </div>

        <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed max-w-4xl">
          {details.description}
        </p>

      </div>

      {/* Slider */}
      <div className="relative group mt-3 sm:mt-4">

        {/* Left Arrow */}
        {showLeftArrow && (
          <button
            onClick={() => scroll("left")}
            className="
              absolute
              left-0
              top-1/2
              -translate-y-1/2
              z-20
              w-8
              h-8
              sm:w-10
              sm:h-10
              rounded-full
              bg-white
              shadow-xl
              border
              flex
              items-center
              justify-center
              hover:scale-110
              transition-all
              -ml-1
              sm:-ml-2
              opacity-0
              group-hover:opacity-100
            "
          >
            <ChevronLeft
              className="w-4 h-4 sm:w-5 sm:h-5"
              style={{ color: therapyColor }}
            />
          </button>
        )}

        {/* Cards */}
        <div
          ref={scrollContainerRef}
          className="
            flex
            gap-2
            sm:gap-3
            md:gap-4
            xl:gap-6
            overflow-x-auto
            pb-3
            sm:pb-4
            scroll-smooth
          "
          style={{
            scrollbarWidth: "thin",
            scrollbarColor: `${therapyColor} #e5e5e5`,
          }}
        >
          {products.map((item, idx) => (

            <div
              key={idx}
              className="
                flex-shrink-0

                w-[160px]
                h-[180px]

                sm:w-[190px]
                sm:h-[210px]

                md:w-[220px]
                md:h-[240px]

                lg:w-[240px]
                lg:h-[250px]

                xl:w-[280px]
                xl:h-[300px]

                bg-white
                rounded-lg
                sm:rounded-xl
                overflow-hidden

                hover:shadow-lg
                sm:hover:shadow-xl

                hover:-translate-y-1

                transition-all
                duration-300
              "
            >

              <div className="relative h-full overflow-hidden bg-gray-100">

                <Image
                  src={item.img}
                  alt={item.title}
                  fill
                  className="
                    object-cover
                    transition-transform
                    duration-500
                    hover:scale-105
                  "
                  sizes="
                    (max-width: 640px) 160px,
                    (max-width: 768px) 190px,
                    (max-width: 1024px) 220px,
                    280px
                  "
                />

              </div>

            </div>

          ))}
        </div>

        {/* Right Arrow */}
        {showRightArrow && (
          <button
            onClick={() => scroll("right")}
            className="
              absolute
              right-0
              top-1/2
              -translate-y-1/2
              z-20
              w-8
              h-8
              sm:w-10
              sm:h-10
              rounded-full
              bg-white
              shadow-xl
              border
              flex
              items-center
              justify-center
              hover:scale-110
              transition-all
              -mr-1
              sm:-mr-2
              opacity-0
              group-hover:opacity-100
            "
          >
            <ChevronRight
              className="w-4 h-4 sm:w-5 sm:h-5"
              style={{ color: therapyColor }}
            />
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
function CollageCard({
  therapy,
  onClick
}: {
  therapy: Therapy;
  onClick: () => void;
}) {

  return (
    <article
      className={`
        group
        relative
        rounded-xl
        sm:rounded-2xl
        overflow-hidden
        cursor-pointer

        transition-all
        duration-500

        hover:-translate-y-1
        hover:shadow-2xl

        h-full

        min-h-[140px]
        sm:min-h-[180px]
        md:min-h-[190px]
        lg:min-h-[200px]
        xl:min-h-[240px]

        w-full

        ${therapy.span === 2 ? 'col-span-2' : 'col-span-1'}
      `}
      onClick={onClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          onClick();
        }
      }}
    >

      {/* Image */}
      <Image
        src={therapy.images.card}
        alt={therapy.therapy}
        fill
        className="
          object-cover
          transition-transform
          duration-700
          group-hover:scale-105
        "
        sizes="
          (max-width: 640px) 50vw,
          (max-width: 1024px) 33vw,
          20vw
        "
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-black/20" />

      {/* Content */}
      <div className="absolute inset-0 p-2 sm:p-3 md:p-4 lg:p-5 flex flex-col justify-between">

        {/* Arrow */}
        <div className="flex justify-end">

          <div
            className="
              w-7
              h-7
              sm:w-8
              sm:h-8
              rounded-full
              bg-white/15
              backdrop-blur-md
              flex
              items-center
              justify-center
              opacity-0
              group-hover:opacity-100
              transition-all
              duration-300
              group-hover:scale-110
            "
          >
            <ArrowUpRight className="w-3.5 h-3.5 text-white" />
          </div>

        </div>

        {/* Bottom Content */}
        <div>

          <span className="text-lg sm:text-xl md:text-2xl lg:text-3xl drop-shadow-lg block mb-1 sm:mb-2">
            {therapy.icon}
          </span>

          <h3 className="text-white text-[11px] sm:text-sm md:text-base lg:text-lg font-bold leading-tight drop-shadow-lg">
            {therapy.therapy}
          </h3>

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