"use client";

import { useState, useEffect, useRef, useCallback, memo } from "react";
import Image from "next/image";
import { ArrowUpRight, X, ChevronLeft, ChevronRight } from "lucide-react";
import { createPortal } from "react-dom";

// ─── Types ───
const PRODUCT_CATEGORIES = [
  "BOOKS & MAGAZINES",
  "FLIP CHART",
  "MATT (Desk Mats)",
  "POSTERS",
  "Medical SCALE",
  "WRITE & WIPE",
  "Tear off Pads",
  "TABLE TOPS & SCIENTIFIC INPUTS",
] as const;

type ProductCategory = (typeof PRODUCT_CATEGORIES)[number];

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

// ─── Tiny 1×1 transparent blur placeholder (base64) ───
const BLUR_PLACEHOLDER =
  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAPYAAADNCAMAAAC8cX2UAAAABlBMVEXn4dbi3dJOgJa7AAAA5klEQVR4nO3PAQEAAAjDIN+/tEEYDbgdaFfbUVtSW1JbUltSW1JbUltSW1JbUltSW1JbUltSW1JbUltSW1JbUltSW1JbUltSW1JbUltSW1JbUltSW1JbUltSW1JbUltSW1JbUltSW1JbUltSW1JbUltSW1JbUltSW1JbUltSW1JbUltSW1JbUltSW1JbUltSW1JbUltSW1JbUltSW1JbUltSW1JbUltSW1JbUltSW1JbUltSW1JbUltSW1JbUltSW1JbUltSW1JbUltSW1JbUltSW1JbUltSW1JbUltSW1JbUltSW1JbUltSW1JbUltSW1JbUltSW1JbUltSW7IHMqsBm14uZ0kAAAAASUVORK5CYII=";

// ─── Fallback image when src fails to load ───
const FALLBACK_IMAGE =
  "data:image/svg+xml;base64," +
  btoa(
    `<svg xmlns="http://www.w3.org/2000/svg" width="400" height="300">
      <rect width="400" height="300" fill="#f0f0f0"/>
      <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle"
        font-family="sans-serif" font-size="14" fill="#94a3b8">Image unavailable</text>
    </svg>`,
  );

// ─── Default fallback card image ───
const DEFAULT_CARD_IMAGE =
  "https://pub-735dbd7583d74ad5949115d6fdf77023.r2.dev/Final%20Edit%20Images/fallback-card.jpg";

// ─── LazyImage: wraps Next/Image with error fallback + blur placeholder ───
interface LazyImageProps {
  src: string;
  alt: string;
  fill?: boolean;
  sizes?: string;
  className?: string;
  priority?: boolean;
}

const LazyImage = memo(function LazyImage({
  src,
  alt,
  fill = true,
  sizes,
  className,
  priority = false,
}: LazyImageProps) {
  const [imgSrc, setImgSrc] = useState(src);

  useEffect(() => {
    setImgSrc(src);
  }, [src]);

  return (
    <Image
      src={imgSrc}
      alt={alt}
      fill={fill}
      sizes={sizes}
      className={className}
      placeholder="blur"
      blurDataURL={BLUR_PLACEHOLDER}
      loading={priority ? "eager" : "lazy"}
      priority={priority}
      onError={() => setImgSrc(FALLBACK_IMAGE)}
    />
  );
});

// ─── Therapy Images Data with Temporary URLs ───
const THERAPY_IMAGES_DATA: Record<string, any> = {
  "Cardio-Vascular": {
    card: "https://images.unsplash.com/photo-1559757175-5700dde675bc?w=800&q=80",
    books: [
      "https://pub-735dbd7583d74ad5949115d6fdf77023.r2.dev/Final%20Edit%20Images/ChatGPT%20Image%20Jun%203%2C%202026%2C%2004_55_26%20PM.png",
      "https://pub-735dbd7583d74ad5949115d6fdf77023.r2.dev/Final%20Edit%20Images/ChatGPT%20Image%20May%2025%2C%202026%2C%2004_24_05%20PM.png",
      "https://pub-735dbd7583d74ad5949115d6fdf77023.r2.dev/Final%20Edit%20Images/ChatGPT%20Image%20May%2025%2C%202026%2C%2004_25_07%20PM.png",
    ],
    flipChart: [
      "https://pub-735dbd7583d74ad5949115d6fdf77023.r2.dev/Final%20Edit%20Images/ChatGPT%20Image%20May%2025%2C%202026%2C%2004_26_54%20PM.png",
      "https://pub-735dbd7583d74ad5949115d6fdf77023.r2.dev/Final%20Edit%20Images/47.png",
      "https://pub-735dbd7583d74ad5949115d6fdf77023.r2.dev/Final%20Edit%20Images/48.png",
    ],
    matt: [
      "https://pub-735dbd7583d74ad5949115d6fdf77023.r2.dev/Final%20Edit%20Images/49.png",
      "https://pub-735dbd7583d74ad5949115d6fdf77023.r2.dev/Final%20Edit%20Images/59.png",
      "https://pub-735dbd7583d74ad5949115d6fdf77023.r2.dev/Final%20Edit%20Images/61.png",
    ],
    posters: [
      "https://pub-735dbd7583d74ad5949115d6fdf77023.r2.dev/Final%20Edit%20Images/66.png",
      "https://pub-735dbd7583d74ad5949115d6fdf77023.r2.dev/Final%20Edit%20Images/67.png",
    ],
  },
  Diabetes: {
    card: "https://images.unsplash.com/photo-1585435557343-3b092031a831?w=800&q=80",
    books: [
      "https://pub-735dbd7583d74ad5949115d6fdf77023.r2.dev/Final%20Edit%20Images/ChatGPT%20Image%20May%2025%2C%202026%2C%2004_03_15%20PM.png",
      "https://pub-735dbd7583d74ad5949115d6fdf77023.r2.dev/Final%20Edit%20Images/ChatGPT%20Image%20May%2025%2C%202026%2C%2004_05_00%20PM.png",
      "https://pub-735dbd7583d74ad5949115d6fdf77023.r2.dev/Final%20Edit%20Images/ChatGPT%20Image%20May%2025%2C%202026%2C%2004_05_33%20PM.png",
    ],
    flipChart: [
      "https://pub-735dbd7583d74ad5949115d6fdf77023.r2.dev/Final%20Edit%20Images/ChatGPT%20Image%20May%2025%2C%202026%2C%2004_06_35%20PM.png",
      "https://pub-735dbd7583d74ad5949115d6fdf77023.r2.dev/Final%20Edit%20Images/ChatGPT%20Image%20May%2025%2C%202026%2C%2004_06_57%20PM.png",
      "https://pub-735dbd7583d74ad5949115d6fdf77023.r2.dev/Final%20Edit%20Images/ChatGPT%20Image%20May%2025%2C%202026%2C%2004_10_59%20PM.png",
    ],
    matt: [
      "https://pub-735dbd7583d74ad5949115d6fdf77023.r2.dev/Final%20Edit%20Images/ChatGPT%20Image%20May%2025%2C%202026%2C%2004_15_09%20PM.png",
    ],
  },
  "ENT & Respiratory": {
    card: "https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?w=800&q=80",
    books: [
      "https://pub-735dbd7583d74ad5949115d6fdf77023.r2.dev/Final%20Edit%20Images/ChatGPT%20Image%20May%2028%2C%202026%2C%2001_29_49%20PM.png",
      "https://pub-735dbd7583d74ad5949115d6fdf77023.r2.dev/Final%20Edit%20Images/ChatGPT%20Image%20May%2028%2C%202026%2C%2005_41_44%20PM.png",
      "https://pub-735dbd7583d74ad5949115d6fdf77023.r2.dev/Final%20Edit%20Images/26.png",
    ],
    flipChart: [
      "https://pub-735dbd7583d74ad5949115d6fdf77023.r2.dev/Final%20Edit%20Images/27.png",
      "https://pub-735dbd7583d74ad5949115d6fdf77023.r2.dev/Final%20Edit%20Images/29.png",
      "https://pub-735dbd7583d74ad5949115d6fdf77023.r2.dev/Final%20Edit%20Images/30.png",
    ],
    matt: [
      "https://pub-735dbd7583d74ad5949115d6fdf77023.r2.dev/Final%20Edit%20Images/34.png",
      "https://pub-735dbd7583d74ad5949115d6fdf77023.r2.dev/Final%20Edit%20Images/35.png",
      "https://pub-735dbd7583d74ad5949115d6fdf77023.r2.dev/Final%20Edit%20Images/36.png",
    ],
    posters: [
      "https://pub-735dbd7583d74ad5949115d6fdf77023.r2.dev/Final%20Edit%20Images/37.png",
      "https://pub-735dbd7583d74ad5949115d6fdf77023.r2.dev/Final%20Edit%20Images/38.png",
      "https://pub-735dbd7583d74ad5949115d6fdf77023.r2.dev/Final%20Edit%20Images/40.png",
    ],
    medicalScale: [
      "https://pub-735dbd7583d74ad5949115d6fdf77023.r2.dev/Final%20Edit%20Images/83.png",
    ],
  },
  "Orthopedics/Rheumatology": {
    card: "https://images.unsplash.com/photo-1581595220892-b0739db3ba8c?w=800&q=80",
    books: [
      "https://pub-735dbd7583d74ad5949115d6fdf77023.r2.dev/Final%20Edit%20Images/ChatGPT%20Image%20Jun%203%2C%202026%2C%2004_55_44%20PM.png",
      "https://pub-735dbd7583d74ad5949115d6fdf77023.r2.dev/Final%20Edit%20Images/ChatGPT%20Image%20Jun%203%2C%202026%2C%2004_55_32%20PM.png",
      "https://pub-735dbd7583d74ad5949115d6fdf77023.r2.dev/Final%20Edit%20Images/BOOKS%20%26%20MAGAZINES.png",
    ],
    flipChart: [
      "https://pub-735dbd7583d74ad5949115d6fdf77023.r2.dev/Final%20Edit%20Images/BOOKS%20%26%20MAGAZINES%202.png",
      "https://pub-735dbd7583d74ad5949115d6fdf77023.r2.dev/Final%20Edit%20Images/BOOKS%20%26%20MAGAZINES%201.png",
      "https://pub-735dbd7583d74ad5949115d6fdf77023.r2.dev/Final%20Edit%20Images/ChatGPT%20Image%20Jun%203%2C%202026%2C%2004_55_53%20PM.png",
    ],
    matt: [
      "https://pub-735dbd7583d74ad5949115d6fdf77023.r2.dev/Final%20Edit%20Images/ChatGPT%20Image%20Jun%203%2C%202026%2C%2004_56_10%20PM.png",
      "https://pub-735dbd7583d74ad5949115d6fdf77023.r2.dev/Final%20Edit%20Images/ChatGPT%20Image%20May%2025%2C%202026%2C%2004_44_50%20PM.png",
      "https://pub-735dbd7583d74ad5949115d6fdf77023.r2.dev/Final%20Edit%20Images/ChatGPT%20Image%20May%2025%2C%202026%2C%2004_45_24%20PM.png",
    ],
    posters: [
      "https://pub-735dbd7583d74ad5949115d6fdf77023.r2.dev/Final%20Edit%20Images/ChatGPT%20Image%20May%2025%2C%202026%2C%2004_51_21%20PM.png",
      "https://pub-735dbd7583d74ad5949115d6fdf77023.r2.dev/Final%20Edit%20Images/50.png",
      "https://pub-735dbd7583d74ad5949115d6fdf77023.r2.dev/Final%20Edit%20Images/55.png",
    ],
  },
  "Gynaecology and Obstetrics": {
    card: "https://images.unsplash.com/photo-1519823551278-64ac92734fb1?w=800&q=80",
    books: [
      "https://pub-735dbd7583d74ad5949115d6fdf77023.r2.dev/Final%20Edit%20Images/ChatGPT%20Image%20May%2028%2C%202026%2C%2003_29_40%20PM.png",
      "https://pub-735dbd7583d74ad5949115d6fdf77023.r2.dev/Final%20Edit%20Images/77.png",
      "https://pub-735dbd7583d74ad5949115d6fdf77023.r2.dev/Final%20Edit%20Images/78.png",
    ],
  },
  Gastroenterology: {
    card: "https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=800&q=80",
    books: [
      "https://pub-735dbd7583d74ad5949115d6fdf77023.r2.dev/Final%20Edit%20Images/54.png",
      "https://pub-735dbd7583d74ad5949115d6fdf77023.r2.dev/Final%20Edit%20Images/55.png",
      "https://pub-735dbd7583d74ad5949115d6fdf77023.r2.dev/Final%20Edit%20Images/90.png",
    ],
  },
  Ophthalmology: {
    card: "https://images.unsplash.com/photo-1584017911766-d451b3d0e843?w=800&q=80",
    books: [
      "https://pub-735dbd7583d74ad5949115d6fdf77023.r2.dev/Final%20Edit%20Images/71.png",
      "https://pub-735dbd7583d74ad5949115d6fdf77023.r2.dev/Final%20Edit%20Images/72.png",
      "https://pub-735dbd7583d74ad5949115d6fdf77023.r2.dev/Final%20Edit%20Images/73.png",
    ],
  },
  Dermatology: {
    card: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&q=80",
    books: [
      "https://pub-735dbd7583d74ad5949115d6fdf77023.r2.dev/Final%20Edit%20Images/41.png",
      "https://pub-735dbd7583d74ad5949115d6fdf77023.r2.dev/Final%20Edit%20Images/44.png",
      "https://pub-735dbd7583d74ad5949115d6fdf77023.r2.dev/Final%20Edit%20Images/45.png",
    ],
    flipChart: [
      "https://pub-735dbd7583d74ad5949115d6fdf77023.r2.dev/Final%20Edit%20Images/86.png",
      "https://pub-735dbd7583d74ad5949115d6fdf77023.r2.dev/Final%20Edit%20Images/89.png",
    ],
  },
  Urology: {
    card: "https://images.unsplash.com/photo-1559757175-5700dde675bc?w=800&q=80",
    books: [
      "https://pub-735dbd7583d74ad5949115d6fdf77023.r2.dev/Final%20Edit%20Images/24.png",
      "https://pub-735dbd7583d74ad5949115d6fdf77023.r2.dev/Final%20Edit%20Images/76.png",
      "https://picsum.photos/id/238/400/300",
    ],
  },
  Neurology: {
    card: "https://mehtahospital.com/wp-content/uploads/2025/04/dr-mehta-hospital-neurology.webp",
    books: [
      "https://pub-735dbd7583d74ad5949115d6fdf77023.r2.dev/Final%20Edit%20Images/EPILEPSY%20PATIENT%20EDUCATION%20LAPTOP%20MAT.png",
      "https://pub-735dbd7583d74ad5949115d6fdf77023.r2.dev/Final%20Edit%20Images/64.png",
      "https://pub-735dbd7583d74ad5949115d6fdf77023.r2.dev/Final%20Edit%20Images/81.png",
    ],
  },
  Dentistry: {
    card: "https://dentalarchindia.com/wp-content/uploads/2026/03/teeth-cleaning-in-mumbai.jpeg.webp",
    books: [
      "https://pub-735dbd7583d74ad5949115d6fdf77023.r2.dev/Final%20Edit%20Images/ChatGPT%20Image%20May%2028%2C%202026%2C%2002_17_25%20PM.png",
    ],
  },
  Hepatology: {
    card: "https://www.gastropune.com/wp-content/uploads/2024/07/Untitled-design-2024-07-16T115210.358-1024x614.png",
    books: [
      "https://pub-735dbd7583d74ad5949115d6fdf77023.r2.dev/Final%20Edit%20Images/Frame.png",
      "https://pub-735dbd7583d74ad5949115d6fdf77023.r2.dev/Final%20Edit%20Images/Table%20Top.png",
    ],
  },
  // Add missing therapies with fallback images
  Pediatrics: {
    card: DEFAULT_CARD_IMAGE,
    books: [],
    flipChart: [],
    matt: [],
    posters: [],
    medicalScale: [],
    writeWipe: [],
    tearOffPads: [],
    tableTops: [],
  },
  Psychiatry: {
    card: DEFAULT_CARD_IMAGE,
    books: [],
    flipChart: [],
    matt: [],
    posters: [],
    medicalScale: [],
    writeWipe: [],
    tearOffPads: [],
    tableTops: [],
  },
  "Infectious Diseases": {
    card: DEFAULT_CARD_IMAGE,
    books: [],
    flipChart: [],
    matt: [],
    posters: [],
    medicalScale: [],
    writeWipe: [],
    tearOffPads: [],
    tableTops: [],
  },
  Endocrinology: {
    card: DEFAULT_CARD_IMAGE,
    books: [],
    flipChart: [],
    matt: [],
    posters: [],
    medicalScale: [],
    writeWipe: [],
    tearOffPads: [],
    tableTops: [],
  },
  Oncology: {
    card: DEFAULT_CARD_IMAGE,
    books: [],
    flipChart: [],
    matt: [],
    posters: [],
    medicalScale: [],
    writeWipe: [],
    tearOffPads: [],
    tableTops: [],
  },
  "General Wellness": {
    card: DEFAULT_CARD_IMAGE,
    books: [],
    flipChart: [],
    matt: [],
    posters: [],
    medicalScale: [],
    writeWipe: [],
    tearOffPads: [],
    tableTops: [],
  },
};

const getCategoryKey = (category: ProductCategory): string => {
  const keyMap: Record<ProductCategory, string> = {
    "BOOKS & MAGAZINES": "books",
    "FLIP CHART": "flipChart",
    "MATT (Desk Mats)": "matt",
    POSTERS: "posters",
    "Medical SCALE": "medicalScale",
    "WRITE & WIPE": "writeWipe",
    "Tear off Pads": "tearOffPads",
    "TABLE TOPS & SCIENTIFIC INPUTS": "tableTops",
  };
  return keyMap[category];
};

const generateCategoryProducts = (
  therapyName: string,
  category: ProductCategory,
): Product[] => {
  const categoryDetails: Record<
    ProductCategory,
    { icon: string; titles: string[]; descBase: string }
  > = {
    "BOOKS & MAGAZINES": {
      icon: "📚",
      titles: [
        "Comprehensive Guide",
        "Clinical Handbook",
        "Patient Education Book",
      ],
      descBase:
        "full-color illustrated guide covering diagnosis, treatment options, and patient care protocols.",
    },
    "FLIP CHART": {
      icon: "📊",
      titles: [
        "Educational Flip Chart",
        "Clinical Teaching Tool",
        "Patient Communication Chart",
      ],
      descBase:
        "easy-to-use flip chart with clear illustrations for effective patient education.",
    },
    "MATT (Desk Mats)": {
      icon: "🧩",
      titles: [
        "Desk Reference Mat",
        "Clinical Protocol Mat",
        "Quick Reference Mat",
      ],
      descBase:
        "durable, wipe-clean desk mat with essential clinical information at a glance.",
    },
    POSTERS: {
      icon: "🖼️",
      titles: [
        "Anatomy Poster",
        "Clinical Pathway Poster",
        "Educational Wall Chart",
      ],
      descBase:
        "high-resolution, laminated poster perfect for clinic walls and exam rooms.",
    },
    "Medical SCALE": {
      icon: "⚖️",
      titles: [
        "Assessment Scale",
        "Risk Evaluation Tool",
        "Clinical Scoring System",
      ],
      descBase:
        "evidence-based clinical scale for accurate patient assessment and monitoring.",
    },
    "WRITE & WIPE": {
      icon: "✏️",
      titles: [
        "Dry-Erase Board",
        "Interactive Learning Tool",
        "Reusable Worksheet",
      ],
      descBase:
        "write-and-wipe surface for interactive patient education and care planning.",
    },
    "Tear off Pads": {
      icon: "📋",
      titles: [
        "Tear-Off Prescription Pad",
        "Patient Instruction Pad",
        "Clinical Notes Pad",
      ],
      descBase:
        "convenient tear-off pad with essential information for patient take-home use.",
    },
    "TABLE TOPS & SCIENTIFIC INPUTS": {
      icon: "🔬",
      titles: [
        "Interactive Table Top Display",
        "Scientific Input Module",
        "Clinical Data Station",
      ],
      descBase:
        "interactive table top display with scientific inputs for clinical data analysis and patient education.",
    },
  };

  const details = categoryDetails[category];
  const therapyImages = THERAPY_IMAGES_DATA[therapyName];
  
  // Defensive check: if therapyImages doesn't exist, use fallback
  if (!therapyImages) {
    console.warn(`No images found for therapy: ${therapyName}`);
    return [0, 1, 2].map((index) => ({
      title: `${therapyName}: ${details.titles[index]}`,
      desc: `${details.descBase} ${index === 0 ? "Ideal for healthcare professionals." : index === 1 ? "Enhances clinical workflow and patient understanding." : "Trusted by medical facilities worldwide."}`,
      img: DEFAULT_CARD_IMAGE,
      category,
    }));
  }
  
  const categoryKey = getCategoryKey(category);
  const categoryImages = therapyImages?.[categoryKey] || [
    "https://picsum.photos/id/1/400/300",
    "https://picsum.photos/id/2/400/300",
    "https://picsum.photos/id/3/400/300",
  ];

  return [0, 1, 2].map((index) => ({
    title: `${therapyName}: ${details.titles[index]}`,
    desc: `${details.descBase} ${index === 0 ? "Ideal for healthcare professionals." : index === 1 ? "Enhances clinical workflow and patient understanding." : "Trusted by medical facilities worldwide."}`,
    img: categoryImages[index] || categoryImages[0] || DEFAULT_CARD_IMAGE,
    category,
  }));
};

const generateFullTherapyData = (): Therapy[] => {
  const therapies = [
    {
      therapy: "Diabetes",
      icon: "💉",
      color: "#3b82f6",
      bgColor: "from-blue-500/20 to-blue-600/10",
      span: 2,
      slug: "diabetes",
    },
    {
      therapy: "Cardio-Vascular",
      icon: "❤️",
      color: "#ef4444",
      bgColor: "from-red-500/20 to-red-600/10",
      span: 1,
      slug: "cardio",
    },
    {
      therapy: "ENT & Respiratory",
      icon: "🫁",
      color: "#06b6d4",
      bgColor: "from-cyan-500/20 to-cyan-600/10",
      span: 1,
      slug: "ent-respiratory",
    },
    {
      therapy: "Orthopedics/Rheumatology",
      icon: "🦴",
      color: "#f97316",
      bgColor: "from-orange-500/20 to-orange-600/10",
      span: 1,
      slug: "orthopedics",
    },
    {
      therapy: "Urology",
      icon: "💧",
      color: "#ec4899",
      bgColor: "from-pink-500/20 to-pink-600/10",
      span: 1,
      slug: "gynaecology",
    },
    {
      therapy: "Neurology",
      icon: "🧠",
      color: "#84cc16",
      bgColor: "from-lime-500/20 to-lime-600/10",
      span: 2,
      slug: "gastroenterology",
    },
    {
      therapy: "Hepatology",
      icon: "🫖",
      color: "#0ea5e9",
      bgColor: "from-sky-500/20 to-sky-600/10",
      span: 1,
      slug: "ophthalmology",
    },
    {
      therapy: "Dermatology",
      icon: "✨",
      color: "#f59e0b",
      bgColor: "from-amber-500/20 to-amber-600/10",
      span: 1,
      slug: "dermatology",
    },
    {
      therapy: "Pediatrics",
      icon: "🧸",
      color: "#8b5cf6",
      bgColor: "from-purple-500/20 to-purple-600/10",
      span: 2,
      slug: "pediatrics",
    },
    {
      therapy: "Gynaecology and Obstetrics",
      icon: "👶",
      color: "#14b8a6",
      bgColor: "from-teal-500/20 to-teal-600/10",
      span: 1,
      slug: "urology",
    },
    {
      therapy: "Gastroenterology",
      icon: "🔬",
      color: "#7c3aed",
      bgColor: "from-purple-600/20 to-purple-700/10",
      span: 1,
      slug: "neurology",
    },
    {
      therapy: "Ophthalmology",
      icon: "👁️",
      color: "#a855f7",
      bgColor: "from-violet-500/20 to-violet-600/10",
      span: 1,
      slug: "hepatology",
    },
    {
      therapy: "Psychiatry",
      icon: "🧠",
      color: "#a855f7",
      bgColor: "from-purple-500/20 to-purple-600/10",
      span: 1,
      slug: "psychiatry",
    },
    {
      therapy: "Dentistry",
      icon: "🦷",
      color: "#6366f1",
      bgColor: "from-indigo-500/20 to-indigo-600/10",
      span: 1,
      slug: "dentistry",
    },
    {
      therapy: "Infectious Diseases",
      icon: "🦠",
      color: "#dc2626",
      bgColor: "from-red-600/20 to-red-700/10",
      span: 2,
      slug: "infectious-diseases",
    },
    {
      therapy: "Endocrinology",
      icon: "⚖️",
      color: "#06b6d4",
      bgColor: "from-cyan-600/20 to-cyan-700/10",
      span: 1,
      slug: "endocrinology",
    },
    {
      therapy: "Oncology",
      icon: "🎗️",
      color: "#e11d48",
      bgColor: "from-rose-500/20 to-rose-600/10",
      span: 1,
      slug: "oncology",
    },
    {
      therapy: "General Wellness",
      icon: "🌿",
      color: "#10b981",
      bgColor: "from-emerald-500/20 to-emerald-600/10",
      span: 1,
      slug: "general-wellness",
    },
  ];

  return therapies.map((t) => {
    const imagesData = THERAPY_IMAGES_DATA[t.therapy];
    
    // Defensive check: provide fallback if images data is missing
    const images = imagesData || {
      card: DEFAULT_CARD_IMAGE,
      books: [],
      flipChart: [],
      matt: [],
      posters: [],
      medicalScale: [],
      writeWipe: [],
      tearOffPads: [],
      tableTops: [],
    };
    
    return {
      ...t,
      images,
      items: PRODUCT_CATEGORIES.flatMap((category) =>
        generateCategoryProducts(t.therapy, category),
      ),
    };
  });
};

const THERAPY_DATA = generateFullTherapyData();

// ─── OPTIMIZATION 1: IntersectionObserver hook for lazy section reveal ───
function useInView(rootMargin = "200px") {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { rootMargin },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [rootMargin]);

  return { ref, inView };
}

// ─── Fullscreen Image Gallery with Thumbnails ───
function FullscreenGallery({
  images,
  initialIndex,
  onClose,
}: {
  images: string[];
  initialIndex: number;
  onClose: () => void;
}) {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  const [isVisible, setIsVisible] = useState(false);
  const [mounted, setMounted] = useState(false);
  const thumbnailContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMounted(true);
    document.body.style.overflow = "hidden";
    requestAnimationFrame(() => setIsVisible(true));
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") handleClose();
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "ArrowRight") handleNext();
    };
    document.addEventListener("keydown", handler);
    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", handler);
    };
  }, []);

  useEffect(() => {
    // Scroll thumbnail into view when current index changes
    if (thumbnailContainerRef.current) {
      const thumbnailElement = thumbnailContainerRef.current.children[
        currentIndex
      ] as HTMLElement;
      if (thumbnailElement) {
        thumbnailElement.scrollIntoView({
          behavior: "smooth",
          block: "nearest",
          inline: "center",
        });
      }
    }
  }, [currentIndex]);

  const handleClose = () => {
    setIsVisible(false);
    setTimeout(onClose, 300);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const modalContent = (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 999999,
        display: "flex",
        flexDirection: "column",
        backgroundColor: isVisible ? "rgba(0,0,0,0.95)" : "rgba(0,0,0,0)",
        transition: "all 0.3s ease",
      }}
      onClick={handleClose}
    >
      <div
        style={{
          position: "relative",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? "scale(1)" : "scale(0.95)",
          transition: "all 0.3s ease",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md flex items-center justify-center transition-all"
        >
          <X className="w-5 h-5 text-white" />
        </button>

        {/* Prev button */}
        <button
          onClick={handlePrev}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md flex items-center justify-center transition-all"
        >
          <ChevronLeft className="w-6 h-6 text-white" />
        </button>

        {/* Next button */}
        <button
          onClick={handleNext}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md flex items-center justify-center transition-all"
        >
          <ChevronRight className="w-6 h-6 text-white" />
        </button>

        {/* Current image */}
        <div className="flex-1 flex items-center justify-center p-4 md:p-8 min-h-0">
          <div className="relative w-full max-w-7xl h-full max-h-[70vh]">
            <Image
              src={images[currentIndex]}
              alt={`Gallery image ${currentIndex + 1}`}
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>

        {/* Thumbnails */}
        <div className="flex-shrink-0 pb-6 px-4">
          <div className="max-w-[1200px] mx-auto overflow-hidden">
            <div
              ref={thumbnailContainerRef}
              className="flex gap-2 overflow-x-auto justify-center px-4 pb-2"
              style={{ scrollbarWidth: "thin", scrollbarColor: "#666 #333" }}
            >
              {images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`relative w-15 h-15 xl:w-20 xl:h-20 flex-shrink-0 rounded-lg overflow-hidden transition-all duration-200 ${
                    currentIndex === idx
                      ? "ring-2 ring-white scale-105"
                      : "opacity-60 hover:opacity-100"
                  }`}
                >
                  <Image
                    src={img}
                    alt={`Thumbnail ${idx + 1}`}
                    fill
                    className="object-cover"
                  />
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  if (!mounted) return null;
  return createPortal(modalContent, document.body);
}

// ─── Modal (Therapy Modal - Shows only images, no categories) ───
function Modal({
  therapy,
  onClose,
}: {
  therapy: Therapy;
  onClose: () => void;
}) {
  const [isVisible, setIsVisible] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [galleryIndex, setGalleryIndex] = useState<number | null>(null);

  // Collect all images from all categories
  const allImages = therapy.items.map((item) => item.img);

  useEffect(() => {
    setMounted(true);
    document.body.style.overflow = "hidden";
    requestAnimationFrame(() => setIsVisible(true));
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") handleClose();
    };
    document.addEventListener("keydown", handler);
    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", handler);
    };
  }, []);

  const handleClose = () => {
    setIsVisible(false);
    setTimeout(onClose, 300);
  };

  const handleImageClick = (index: number) => {
    setGalleryIndex(index);
  };

  const modalContent = (
    <>
      <div
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 99999,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "0.75rem",
          backgroundColor: isVisible ? "rgba(0,0,0,0.8)" : "rgba(0,0,0,0)",
          backdropFilter: isVisible ? "blur(12px)" : "none",
          transition: "all 0.3s ease",
        }}
        onClick={handleClose}
      >
        <div
          style={{
            position: "relative",
            backgroundColor: "white",
            borderRadius: "1.25rem",
            width: "100%",
            maxWidth: "90rem",
            maxHeight: "90vh",
            overflow: "hidden",
            display: "flex",
            flexDirection: "column",
            opacity: isVisible ? 1 : 0,
            transform: isVisible
              ? "translateY(0) scale(1)"
              : "translateY(2rem) scale(0.95)",
            transition: "all 0.3s ease",
            boxShadow: "0 25px 50px -12px rgba(0,0,0,0.4)",
          }}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="px-4 sm:px-6 md:px-8 pt-4 sm:pt-5 pb-3 sm:pb-4 border-b bg-white flex-shrink-0">
            <div className="flex items-start justify-between gap-2 sm:gap-3">
              <div className="flex items-center gap-1.5 sm:gap-2">
                <span className="text-xl sm:text-2xl md:text-3xl">
                  {therapy.icon}
                </span>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-neutral-900">
                  {therapy.therapy}
                </h2>
              </div>
              <button
                onClick={handleClose}
                className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-neutral-100 hover:bg-neutral-200 flex items-center justify-center transition-all"
              >
                <X className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-neutral-600" />
              </button>
            </div>
          </div>

          {/* Image Grid - No categories, no text, just images */}
          <div className="flex-1 overflow-y-auto p-4 sm:p-6 md:p-8">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4 md:gap-5">
              {allImages.map((img, index) => (
                <div
                  key={index}
                  onClick={() => handleImageClick(index)}
                  className="relative aspect-square bg-gray-100 rounded-lg overflow-hidden cursor-pointer hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
                >
                  <LazyImage
                    src={img}
                    alt={`${therapy.therapy} product ${index + 1}`}
                    fill
                    sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, (max-width: 1024px) 25vw, 20vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Fullscreen Gallery with Thumbnails */}
      {galleryIndex !== null && (
        <FullscreenGallery
          images={allImages}
          initialIndex={galleryIndex}
          onClose={() => setGalleryIndex(null)}
        />
      )}
    </>
  );

  if (!mounted) return null;
  return createPortal(modalContent, document.body);
}

// ─── Collage Card (FIXED: Added defensive check for images.card) ───
const CollageCard = memo(function CollageCard({
  therapy,
  onClick,
  priority = false,
}: {
  therapy: Therapy;
  onClick: () => void;
  priority?: boolean;
}) {
  // ✅ Defensive check: use fallback if images or card is undefined
  const cardImage = therapy.images?.card || DEFAULT_CARD_IMAGE;
  
  return (
    <article
      className={`group relative rounded-xl sm:rounded-2xl overflow-hidden cursor-pointer transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl h-full min-h-[140px] sm:min-h-[180px] md:min-h-[190px] lg:min-h-[220px] xl:min-h-[240px] w-full ${therapy.span === 2 ? "col-span-3" : "col-span-2"}`}
      onClick={onClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") onClick();
      }}
    >
      <LazyImage
        src={cardImage}
        alt={therapy.therapy}
        fill
        priority={priority}
        sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
        className="object-cover transition-transform duration-700 group-hover:scale-105"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-white/70 via-white/2 to-white/4" />

      <div className="absolute inset-0 p-1 flex flex-col justify-between">
        <div className="flex justify-end">
          <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-white/15 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:scale-110">
            <ArrowUpRight className="w-3.5 h-3.5 text-white" />
          </div>
        </div>
        <div className="flex items-center gap-[1px]">
          <span className="text-lg sm:text-xl md:text-2xl lg:text-2xl drop-shadow-lg block mb-1 sm:mb-2">
            {therapy.icon}
          </span>
          <h3 className="text-black inline-block px-2 py-1 rounded-sm text-[11px] sm:text-sm md:text-base lg:text-lg font-semibold leading-tight drop-shadow-lg">
            {therapy.therapy}
          </h3>
        </div>
      </div>
    </article>
  );
});

const THERAPY_SLUG_MAP: Record<string, string> = {
  "cardiac-care": "Cardio-Vascular",
  "diabetic-care": "Diabetes",
  pediatric: "Pediatrics",
  "general-wellness": "General Wellness",
  dermatology: "Dermatology",
  nephrology: "Nephrology",
  nutrition: "Nutritional Deficiencies",
  pulmonology: "ENT & Respiratory",
  hepatology: "Hepatology",
  ophthalmology: "Ophthalmology",
  gastroenterology: "Gastroenterology",
  urology: "Urology",
  orthopedics: "Orthopedics/Rheumatology",
  neurology: "Neurology",
  oncology: "Oncology",
};

export default function TherapyCollageGrid({
  initialSelectedTherapy,
}: {
  initialSelectedTherapy?: string | null;
}) {
  const [selected, setSelected] = useState<Therapy | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  const createSlug = (name: string) =>
    name
      .toLowerCase()
      .replace(/[&]/g, "and")
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-+|-+$/g, "");

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  useEffect(() => {
    if (initialSelectedTherapy) {
      const mappedName = THERAPY_SLUG_MAP[initialSelectedTherapy];
      const therapy = THERAPY_DATA.find(
        (t) =>
          t.therapy === mappedName ||
          createSlug(t.therapy) === initialSelectedTherapy,
      );
      if (therapy) setSelected(therapy);
    }
  }, [initialSelectedTherapy]);

  return (
    <>
      <section className="py-12 sm:py-16 md:py-18 lg:py-20 xl:py-24 px-4 sm:px-6 bg-gradient-to-br from-slate-50 via-white to-slate-50">
        <div className="relative max-w-[1600px] mx-auto">
          <div className="text-left mb-8 sm:mb-10 md:mb-12 lg:mb-14 xl:mb-16">
            <div
              className={`flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4 transition-all duration-700 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
            >
              <span className="w-10 sm:w-12 h-0.5 bg-gradient-to-r from-[#0093cb] to-[#00a65d]" />
              <span className="text-[10px] sm:text-xs font-black uppercase tracking-[0.3em] text-[#0093cb]">
                Therapy Areas
              </span>
            </div>
            <h1
              className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter text-[#0f172a] mb-3 sm:mb-4 transition-all duration-700 delay-100 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
            >
              Premium{" "}
              <span className="bg-gradient-to-r from-[#0093cb] to-[#00a65d] bg-clip-text text-transparent">
                Therapy Portfolio
              </span>
            </h1>
            <p
              className={`text-neutral-600 max-w-2xl text-sm sm:text-base md:text-lg transition-all duration-700 delay-200 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
            >
              Specialized medical education tools across 20+ therapeutic areas,
              featuring 8 product categories including Table Tops & Scientific
              Inputs.
            </p>
          </div>

          <div
            className={`transition-all duration-700 delay-300 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          >
            {/* Mobile: 2 columns */}
            <div className="grid grid-cols-2 gap-2 sm:gap-3 sm:hidden">
              {THERAPY_DATA.map((therapy, i) => (
                <CollageCard
                  key={therapy.therapy}
                  therapy={{ ...therapy, span: 1 }}
                  onClick={() => setSelected(therapy)}
                  priority={i < 4}
                />
              ))}
            </div>

            {/* Tablet: 3 columns (Maintaining proportional sizing) */}
            <div className="hidden sm:grid lg:hidden grid-cols-3 gap-2 sm:gap-3 auto-rows-[180px] sm:auto-rows-[200px]">
              {THERAPY_DATA.map((therapy, i) => (
                <CollageCard
                  key={therapy.therapy}
                  therapy={
                    therapy.span === 2
                      ? { ...therapy, span: 2 }
                      : { ...therapy, span: 1 }
                  }
                  onClick={() => setSelected(therapy)}
                  priority={i < 3}
                />
              ))}
            </div>

            {/* Desktop: 9 Columns Grid */}
            <div className="hidden lg:grid grid-cols-9 gap-2 sm:gap-3 auto-rows-[220px] xl:auto-rows-[240px]">
              {THERAPY_DATA.map((therapy, i) => (
                <CollageCard
                  key={therapy.therapy}
                  therapy={therapy}
                  onClick={() => setSelected(therapy)}
                  priority={i < 5}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {selected && (
        <Modal therapy={selected} onClose={() => setSelected(null)} />
      )}
    </>
  );
}