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
  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAPYAAADNCAMAAAC8cX2UAAAABlBMVEXn4dbi3dJOgJa7AAAA5klEQVR4nO3PAQEAAAjDIN+/tEEYDbgdaFfbUVtSW1JbUltSW1JbUltSW1JbUltSW1JbUltSW1JbUltSW1JbUltSW1JbUltSW1JbUltSW1JbUltSW1JbUltSW1JbUltSW1JbUltSW1JbUltSW1JbUltSW1JbUltSW1JbUltSW1JbUltSW1JbUltSW1JbUltSW1JbUltSW1JbUltSW1JbUltSW1JbUltSW1JbUltSW1JbUltSW1JbUltSW1JbUltSW1JbUltSW1JbUltSW1JbUltSW1JbUltSW1JbUltSW1JbUltSW7IHMqsBm14uZ0kAAAAASUVORK5CYII=";

// ─── Fallback image when src fails to load ───
const FALLBACK_IMAGE =
  "data:image/svg+xml;base64," +
  btoa(
    `<svg xmlns="http://www.w3.org/2000/svg" width="400" height="300">
      <rect width="400" height="300" fill="#FFFFF"/>
      <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle"
        font-family="sans-serif" font-size="14" fill="#94a3b8">Image unavailable</text>
    </svg>`,
  );

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

const getDummyImage = (key: string, index: number): string => {
  let hash = 0;
  for (let i = 0; i < key.length; i++) {
    hash = (hash << 5) - hash + key.charCodeAt(i);
    hash |= 0;
  }
  const idx = (Math.abs(hash) + index) % DUMMY_IMAGES.length;
  return DUMMY_IMAGES[idx];
};

// ─── Therapy Images Data ───
const THERAPY_IMAGES_DATA: Record<string, any> = {
  "Cardio-Vascular": {
    card: "https://images.unsplash.com/photo-1559757175-5700dde675bc?w=800&q=80",
    books: [
      getDummyImage("Cardio-Vascular-books-0", 0),
      getDummyImage("Cardio-Vascular-books-1", 1),
      getDummyImage("Cardio-Vascular-books-2", 2),
    ],
    flipChart: [
      getDummyImage("Cardio-Vascular-flipChart-0", 3),
      getDummyImage("Cardio-Vascular-flipChart-1", 4),
      getDummyImage("Cardio-Vascular-flipChart-2", 5),
    ],
    matt: [
      "https://pub-735dbd7583d74ad5949115d6fdf77023.r2.dev/Therepy/Cardio/ChatGPT%20Image%20May%2025%2C%202026%2C%2004_24_05%20PM.png",
      getDummyImage("Cardio-Vascular-matt-1", 6),
      getDummyImage("Cardio-Vascular-matt-2", 7),
    ],
    posters: [
      getDummyImage("Cardio-Vascular-posters-0", 8),
      getDummyImage("Cardio-Vascular-posters-1", 9),
      getDummyImage("Cardio-Vascular-posters-2", 10),
    ],
    medicalScale: [
      "https://pub-735dbd7583d74ad5949115d6fdf77023.r2.dev/Therepy/Cardio/PARAM%20PRODUCTS%20.png",
      getDummyImage("Cardio-Vascular-medicalScale-1", 11),
      getDummyImage("Cardio-Vascular-medicalScale-2", 12),
    ],
    writeWipe: [
      getDummyImage("Cardio-Vascular-writeWipe-0", 13),
      getDummyImage("Cardio-Vascular-writeWipe-1", 14),
      getDummyImage("Cardio-Vascular-writeWipe-2", 15),
    ],
    tearOffPads: [
      getDummyImage("Cardio-Vascular-tearOffPads-0", 16),
      getDummyImage("Cardio-Vascular-tearOffPads-1", 17),
      getDummyImage("Cardio-Vascular-tearOffPads-2", 18),
    ],
    tableTops: [
      "https://pub-735dbd7583d74ad5949115d6fdf77023.r2.dev/Therepy/Cardio/ChatGPT%20Image%20May%2025%2C%202026%2C%2004_25_07%20PM.png",
      getDummyImage("Cardio-Vascular-tableTops-1", 19),
      getDummyImage("Cardio-Vascular-tableTops-2", 20),
    ],
  },
  Diabetes: {
    card: "https://images.unsplash.com/photo-1585435557343-3b092031a831?w=800&q=80",
    books: [
      getDummyImage("Diabetes-books-0", 21),
      getDummyImage("Diabetes-books-1", 22),
      getDummyImage("Diabetes-books-2", 23),
    ],
    flipChart: [
      "https://pub-735dbd7583d74ad5949115d6fdf77023.r2.dev/Therepy/Cardio/ChatGPT%20Image%20May%2025%2C%202026%2C%2004_05_00%20PM.png",
      getDummyImage("Diabetes-flipChart-1", 24),
      getDummyImage("Diabetes-flipChart-2", 25),
    ],
    matt: [
      getDummyImage("Diabetes-matt-0", 26),
      getDummyImage("Diabetes-matt-1", 27),
      getDummyImage("Diabetes-matt-2", 28),
    ],
    posters: [
      "https://pub-735dbd7583d74ad5949115d6fdf77023.r2.dev/Therepy/Cardio/ChatGPT%20Image%20May%2025%2C%202026%2C%2004_06_35%20PM.png",
      "https://pub-735dbd7583d74ad5949115d6fdf77023.r2.dev/Therepy/Cardio/ChatGPT%20Image%20May%2025%2C%202026%2C%2004_15_09%20PM.png",
      "https://pub-735dbd7583d74ad5949115d6fdf77023.r2.dev/Therepy/Cardio/ChatGPT%20Image%20May%2025%2C%202026%2C%2004_24_00%20PM.png",
    ],
    medicalScale: [
      "https://pub-735dbd7583d74ad5949115d6fdf77023.r2.dev/Therepy/Cardio/ChatGPT%20Image%20May%2025%2C%202026%2C%2004_10_59%20PM.png",
      "https://pub-735dbd7583d74ad5949115d6fdf77023.r2.dev/Therepy/Cardio/ChatGPT%20Image%20May%2025%2C%202026%2C%2004_14_58%20PM.png",
      getDummyImage("Diabetes-medicalScale-2", 29),
    ],
    writeWipe: [
      "https://pub-735dbd7583d74ad5949115d6fdf77023.r2.dev/Therepy/Cardio/ChatGPT%20Image%20May%2025%2C%202026%2C%2004_05_33%20PM.png",
      getDummyImage("Diabetes-writeWipe-1", 30),
      getDummyImage("Diabetes-writeWipe-2", 31),
    ],
    tearOffPads: [
      "https://pub-735dbd7583d74ad5949115d6fdf77023.r2.dev/Therepy/Cardio/ChatGPT%20Image%20May%2025%2C%202026%2C%2004_05_00%20PM.png",
      getDummyImage("Diabetes-tearOffPads-1", 32),
      getDummyImage("Diabetes-tearOffPads-2", 33),
    ],
    tableTops: [
      getDummyImage("Diabetes-tableTops-0", 34),
      getDummyImage("Diabetes-tableTops-1", 35),
      getDummyImage("Diabetes-tableTops-2", 36),
    ],
  },
  "ENT & Respiratory": {
    card: "https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?w=800&q=80",
    books: [
      "https://pub-735dbd7583d74ad5949115d6fdf77023.r2.dev/Therepy/ENT%20%26%20Respiratory/29.png",
      "https://pub-735dbd7583d74ad5949115d6fdf77023.r2.dev/Therepy/ENT%20%26%20Respiratory/40.png",
      getDummyImage("ENT-books-2", 37),
    ],
    flipChart: [
      getDummyImage("ENT-flipChart-0", 38),
      getDummyImage("ENT-flipChart-1", 39),
      getDummyImage("ENT-flipChart-2", 40),
    ],
    matt: [
      "https://pub-735dbd7583d74ad5949115d6fdf77023.r2.dev/Therepy/ENT%20%26%20Respiratory/34.png",
      "https://pub-735dbd7583d74ad5949115d6fdf77023.r2.dev/Therepy/ENT%20%26%20Respiratory/38.png",
      getDummyImage("ENT-matt-2", 41),
    ],
    posters: [
      "https://pub-735dbd7583d74ad5949115d6fdf77023.r2.dev/Therepy/ENT%20%26%20Respiratory/ChatGPT%20Image%20May%2028%2C%202026%2C%2005_41_56%20PM.png",
      "https://pub-735dbd7583d74ad5949115d6fdf77023.r2.dev/Therepy/ENT%20%26%20Respiratory/26.png",
      "https://pub-735dbd7583d74ad5949115d6fdf77023.r2.dev/Therepy/ENT%20%26%20Respiratory/27.png",
    ],
    medicalScale: [
      "https://pub-735dbd7583d74ad5949115d6fdf77023.r2.dev/Therepy/ENT%20%26%20Respiratory/ChatGPT%20Image%20May%2028%2C%202026%2C%2005_42_08%20PM.png",
      getDummyImage("ENT-medicalScale-1", 42),
      getDummyImage("ENT-medicalScale-2", 43),
    ],
    writeWipe: [
      "https://pub-735dbd7583d74ad5949115d6fdf77023.r2.dev/Therepy/ENT%20%26%20Respiratory/ChatGPT%20Image%20May%2028%2C%202026%2C%2005_41_44%20PM.png",
      "https://pub-735dbd7583d74ad5949115d6fdf77023.r2.dev/Therepy/ENT%20%26%20Respiratory/38.png",
      getDummyImage("ENT-writeWipe-2", 44),
    ],
    tearOffPads: [
      getDummyImage("ENT-tearOffPads-0", 45),
      getDummyImage("ENT-tearOffPads-1", 46),
      getDummyImage("ENT-tearOffPads-2", 47),
    ],
    tableTops: [
      "https://pub-735dbd7583d74ad5949115d6fdf77023.r2.dev/Therepy/ENT%20%26%20Respiratory/25.png",
      "https://pub-735dbd7583d74ad5949115d6fdf77023.r2.dev/Therepy/ENT%20%26%20Respiratory/28.png",
      "https://pub-735dbd7583d74ad5949115d6fdf77023.r2.dev/Therepy/ENT%20%26%20Respiratory/30.png",
    ],
  },
  "Orthopedics/Rheumatology": {
    card: "https://images.unsplash.com/photo-1581595220892-b0739db3ba8c?w=800&q=80",
    books: [
      "https://pub-735dbd7583d74ad5949115d6fdf77023.r2.dev/Therepy/Orthopedics/PARAM%20PRODUCTS%20.png",
      getDummyImage("Ortho-books-1", 48),
      getDummyImage("Ortho-books-2", 49),
    ],
    flipChart: [
      "https://pub-735dbd7583d74ad5949115d6fdf77023.r2.dev/Therepy/Orthopedics/ChatGPT%20Image%20May%2025%2C%202026%2C%2004_51_21%20PM.png",
      getDummyImage("Ortho-flipChart-1", 50),
      getDummyImage("Ortho-flipChart-2", 51),
    ],
    matt: [
      getDummyImage("Ortho-matt-0", 52),
      getDummyImage("Ortho-matt-1", 53),
      getDummyImage("Ortho-matt-2", 54),
    ],
    posters: [
      "https://pub-735dbd7583d74ad5949115d6fdf77023.r2.dev/Therepy/Orthopedics/ChatGPT%20Image%20May%2025%2C%202026%2C%2004_44_50%20PM.png",
      getDummyImage("Ortho-posters-1", 55),
      getDummyImage("Ortho-posters-2", 56),
    ],
    medicalScale: [
      "https://pub-735dbd7583d74ad5949115d6fdf77023.r2.dev/Therepy/Orthopedics/ChatGPT%20Image%20May%2025%2C%202026%2C%2004_37_54%20PM.png",
      getDummyImage("Ortho-medicalScale-1", 57),
      getDummyImage("Ortho-medicalScale-2", 58),
    ],
    writeWipe: [
      getDummyImage("Ortho-writeWipe-0", 59),
      getDummyImage("Ortho-writeWipe-1", 60),
      getDummyImage("Ortho-writeWipe-2", 61),
    ],
    tearOffPads: [
      "https://pub-735dbd7583d74ad5949115d6fdf77023.r2.dev/Therepy/Orthopedics/ChatGPT%20Image%20May%2025%2C%202026%2C%2004_45_24%20PM.png",
      getDummyImage("Ortho-tearOffPads-1", 62),
      getDummyImage("Ortho-tearOffPads-2", 63),
    ],
    tableTops: [
      getDummyImage("Ortho-tableTops-0", 64),
      getDummyImage("Ortho-tableTops-1", 65),
      getDummyImage("Ortho-tableTops-2", 66),
    ],
  },
  "Gynaecology and Obstetrics": {
    card: "https://images.unsplash.com/photo-1519823551278-64ac92734fb1?w=800&q=80",
    books: [
      getDummyImage("Gynae-books-0", 67),
      getDummyImage("Gynae-books-1", 68),
      getDummyImage("Gynae-books-2", 69),
    ],
    flipChart: [
      getDummyImage("Gynae-flipChart-0", 70),
      getDummyImage("Gynae-flipChart-1", 71),
      getDummyImage("Gynae-flipChart-2", 72),
    ],
    matt: [
      getDummyImage("Gynae-matt-0", 73),
      getDummyImage("Gynae-matt-1", 74),
      getDummyImage("Gynae-matt-2", 75),
    ],
    posters: [
      getDummyImage("Gynae-posters-0", 76),
      getDummyImage("Gynae-posters-1", 77),
      getDummyImage("Gynae-posters-2", 78),
    ],
    medicalScale: [
      getDummyImage("Gynae-medicalScale-0", 79),
      getDummyImage("Gynae-medicalScale-1", 80),
      getDummyImage("Gynae-medicalScale-2", 81),
    ],
    writeWipe: [
      getDummyImage("Gynae-writeWipe-0", 82),
      getDummyImage("Gynae-writeWipe-1", 83),
      getDummyImage("Gynae-writeWipe-2", 84),
    ],
    tearOffPads: [
      getDummyImage("Gynae-tearOffPads-0", 85),
      getDummyImage("Gynae-tearOffPads-1", 86),
      getDummyImage("Gynae-tearOffPads-2", 87),
    ],
    tableTops: [
      getDummyImage("Gynae-tableTops-0", 88),
      getDummyImage("Gynae-tableTops-1", 89),
      getDummyImage("Gynae-tableTops-2", 90),
    ],
  },
  Gastroenterology: {
    card: "https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=800&q=80",
    books: [
      getDummyImage("Gastro-books-0", 91),
      getDummyImage("Gastro-books-1", 92),
      getDummyImage("Gastro-books-2", 93),
    ],
    flipChart: [
      getDummyImage("Gastro-flipChart-0", 94),
      getDummyImage("Gastro-flipChart-1", 95),
      getDummyImage("Gastro-flipChart-2", 96),
    ],
    matt: [
      getDummyImage("Gastro-matt-0", 97),
      getDummyImage("Gastro-matt-1", 98),
      getDummyImage("Gastro-matt-2", 99),
    ],
    posters: [
      getDummyImage("Gastro-posters-0", 100),
      getDummyImage("Gastro-posters-1", 101),
      getDummyImage("Gastro-posters-2", 102),
    ],
    medicalScale: [
      getDummyImage("Gastro-medicalScale-0", 103),
      getDummyImage("Gastro-medicalScale-1", 104),
      getDummyImage("Gastro-medicalScale-2", 105),
    ],
    writeWipe: [
      getDummyImage("Gastro-writeWipe-0", 106),
      getDummyImage("Gastro-writeWipe-1", 107),
      getDummyImage("Gastro-writeWipe-2", 108),
    ],
    tearOffPads: [
      getDummyImage("Gastro-tearOffPads-0", 109),
      getDummyImage("Gastro-tearOffPads-1", 110),
      getDummyImage("Gastro-tearOffPads-2", 111),
    ],
    tableTops: [
      getDummyImage("Gastro-tableTops-0", 112),
      getDummyImage("Gastro-tableTops-1", 113),
      getDummyImage("Gastro-tableTops-2", 114),
    ],
  },
  Ophthalmology: {
    card: "https://images.unsplash.com/photo-1584017911766-d451b3d0e843?w=800&q=80",
    books: [
      getDummyImage("Ophth-books-0", 115),
      getDummyImage("Ophth-books-1", 116),
      getDummyImage("Ophth-books-2", 117),
    ],
    flipChart: [
      getDummyImage("Ophth-flipChart-0", 118),
      getDummyImage("Ophth-flipChart-1", 119),
      getDummyImage("Ophth-flipChart-2", 120),
    ],
    matt: [
      getDummyImage("Ophth-matt-0", 121),
      getDummyImage("Ophth-matt-1", 122),
      getDummyImage("Ophth-matt-2", 123),
    ],
    posters: [
      getDummyImage("Ophth-posters-0", 124),
      getDummyImage("Ophth-posters-1", 125),
      getDummyImage("Ophth-posters-2", 126),
    ],
    medicalScale: [
      getDummyImage("Ophth-medicalScale-0", 127),
      getDummyImage("Ophth-medicalScale-1", 128),
      getDummyImage("Ophth-medicalScale-2", 129),
    ],
    writeWipe: [
      getDummyImage("Ophth-writeWipe-0", 130),
      getDummyImage("Ophth-writeWipe-1", 131),
      getDummyImage("Ophth-writeWipe-2", 132),
    ],
    tearOffPads: [
      getDummyImage("Ophth-tearOffPads-0", 133),
      getDummyImage("Ophth-tearOffPads-1", 134),
      getDummyImage("Ophth-tearOffPads-2", 135),
    ],
    tableTops: [
      getDummyImage("Ophth-tableTops-0", 136),
      getDummyImage("Ophth-tableTops-1", 137),
      getDummyImage("Ophth-tableTops-2", 138),
    ],
  },
  Dermatology: {
    card: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&q=80",
    books: [
      "https://pub-735dbd7583d74ad5949115d6fdf77023.r2.dev/Therepy/Dermatology/43.png",
      "https://pub-735dbd7583d74ad5949115d6fdf77023.r2.dev/Therepy/Dermatology/ChatGPT%20Image%20May%2029%2C%202026%2C%2004_51_33%20PM.png",
      "https://pub-735dbd7583d74ad5949115d6fdf77023.r2.dev/Therepy/Dermatology/ChatGPT%20Image%20May%2029%2C%202026%2C%2004_52_31%20PM.png",
    ],
    flipChart: [
      getDummyImage("Derma-flipChart-0", 139),
      getDummyImage("Derma-flipChart-1", 140),
      getDummyImage("Derma-flipChart-2", 141),
    ],
    matt: [
      getDummyImage("Derma-matt-0", 142),
      getDummyImage("Derma-matt-1", 143),
      getDummyImage("Derma-matt-2", 144),
    ],
    posters: [
      "https://pub-735dbd7583d74ad5949115d6fdf77023.r2.dev/Therepy/Dermatology/74.png",
      "https://pub-735dbd7583d74ad5949115d6fdf77023.r2.dev/Therepy/Dermatology/86.png",
      getDummyImage("Derma-posters-2", 145),
    ],
    medicalScale: [
      "https://pub-735dbd7583d74ad5949115d6fdf77023.r2.dev/Therepy/Dermatology/51.png",
      "https://pub-735dbd7583d74ad5949115d6fdf77023.r2.dev/Therepy/Dermatology/89.png",
      "https://pub-735dbd7583d74ad5949115d6fdf77023.r2.dev/Therepy/Dermatology/ChatGPT%20Image%20May%2029%2C%202026%2C%2004_52_21%20PM.png",
    ],
    writeWipe: [
      getDummyImage("Derma-writeWipe-0", 146),
      getDummyImage("Derma-writeWipe-1", 147),
      getDummyImage("Derma-writeWipe-2", 148),
    ],
    tearOffPads: [
      getDummyImage("Derma-tearOffPads-0", 149),
      getDummyImage("Derma-tearOffPads-1", 150),
      getDummyImage("Derma-tearOffPads-2", 151),
    ],
    tableTops: [
      "https://pub-735dbd7583d74ad5949115d6fdf77023.r2.dev/Therepy/Dermatology/ChatGPT%20Image%20May%2029%2C%202026%2C%2004_38_53%20PM.png",
      "https://pub-735dbd7583d74ad5949115d6fdf77023.r2.dev/Therepy/Dermatology/ChatGPT%20Image%20May%2029%2C%202026%2C%2004_39_01%20PM.png",
      "https://pub-735dbd7583d74ad5949115d6fdf77023.r2.dev/Therepy/Dermatology/ChatGPT%20Image%20May%2029%2C%202026%2C%2004_39_12%20PM.png",
    ],
  },
  Pediatrics: {
    card: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=800&q=80",
    books: [
      getDummyImage("Peds-books-0", 152),
      getDummyImage("Peds-books-1", 153),
      getDummyImage("Peds-books-2", 154),
    ],
    flipChart: [
      getDummyImage("Peds-flipChart-0", 155),
      getDummyImage("Peds-flipChart-1", 156),
      getDummyImage("Peds-flipChart-2", 157),
    ],
    matt: [
      getDummyImage("Peds-matt-0", 158),
      getDummyImage("Peds-matt-1", 159),
      getDummyImage("Peds-matt-2", 160),
    ],
    posters: [
      getDummyImage("Peds-posters-0", 161),
      getDummyImage("Peds-posters-1", 162),
      getDummyImage("Peds-posters-2", 163),
    ],
    medicalScale: [
      getDummyImage("Peds-medicalScale-0", 164),
      getDummyImage("Peds-medicalScale-1", 165),
      getDummyImage("Peds-medicalScale-2", 166),
    ],
    writeWipe: [
      getDummyImage("Peds-writeWipe-0", 167),
      getDummyImage("Peds-writeWipe-1", 168),
      getDummyImage("Peds-writeWipe-2", 169),
    ],
    tearOffPads: [
      getDummyImage("Peds-tearOffPads-0", 170),
      getDummyImage("Peds-tearOffPads-1", 171),
      getDummyImage("Peds-tearOffPads-2", 172),
    ],
    tableTops: [
      getDummyImage("Peds-tableTops-0", 173),
      getDummyImage("Peds-tableTops-1", 174),
      getDummyImage("Peds-tableTops-2", 175),
    ],
  },
  Urology: {
    card: "https://images.unsplash.com/photo-1559757175-5700dde675bc?w=800&q=80",
    books: [
      getDummyImage("Uro-books-0", 176),
      getDummyImage("Uro-books-1", 177),
      getDummyImage("Uro-books-2", 178),
    ],
    flipChart: [
      "https://pub-735dbd7583d74ad5949115d6fdf77023.r2.dev/Therepy/Urology/Urology-.png",
      getDummyImage("Uro-flipChart-1", 179),
      getDummyImage("Uro-flipChart-2", 180),
    ],
    matt: [
      "https://pub-735dbd7583d74ad5949115d6fdf77023.r2.dev/Therepy/Urology/18.png",
      "https://pub-735dbd7583d74ad5949115d6fdf77023.r2.dev/Therepy/Urology/23.png",
      getDummyImage("Uro-matt-2", 181),
    ],
    posters: [
      getDummyImage("Uro-posters-0", 182),
      getDummyImage("Uro-posters-1", 183),
      getDummyImage("Uro-posters-2", 184),
    ],
    medicalScale: [
      getDummyImage("Uro-medicalScale-0", 185),
      getDummyImage("Uro-medicalScale-1", 186),
      getDummyImage("Uro-medicalScale-2", 187),
    ],
    writeWipe: [
      "https://pub-735dbd7583d74ad5949115d6fdf77023.r2.dev/Therepy/Urology/12.png",
      "https://pub-735dbd7583d74ad5949115d6fdf77023.r2.dev/Therepy/Urology/18.png",
      "https://pub-735dbd7583d74ad5949115d6fdf77023.r2.dev/Therepy/Urology/Urology-.png",
    ],
    tearOffPads: [
      getDummyImage("Uro-tearOffPads-0", 188),
      getDummyImage("Uro-tearOffPads-1", 189),
      getDummyImage("Uro-tearOffPads-2", 190),
    ],
    tableTops: [
      "https://pub-735dbd7583d74ad5949115d6fdf77023.r2.dev/Therepy/Urology/14.png",
      "https://pub-735dbd7583d74ad5949115d6fdf77023.r2.dev/Therepy/Urology/15.png",
      getDummyImage("Uro-tableTops-2", 191),
    ],
  },
  Neurology: {
    card: "https://mehtahospital.com/wp-content/uploads/2025/04/dr-mehta-hospital-neurology.webp",
    books: [
      "https://pub-735dbd7583d74ad5949115d6fdf77023.r2.dev/Therepy/Neurology/87.png",
      getDummyImage("Neuro-books-1", 192),
      getDummyImage("Neuro-books-2", 193),
    ],
    flipChart: [
      getDummyImage("Neuro-flipChart-0", 194),
      getDummyImage("Neuro-flipChart-1", 195),
      getDummyImage("Neuro-flipChart-2", 196),
    ],
    matt: [
      getDummyImage("Neuro-matt-0", 197),
      getDummyImage("Neuro-matt-1", 198),
      getDummyImage("Neuro-matt-2", 199),
    ],
    posters: [
      "https://pub-735dbd7583d74ad5949115d6fdf77023.r2.dev/Therepy/Neurology/81.png",
      getDummyImage("Neuro-posters-1", 200),
      getDummyImage("Neuro-posters-2", 201),
    ],
    medicalScale: [
      getDummyImage("Neuro-medicalScale-0", 202),
      getDummyImage("Neuro-medicalScale-1", 203),
      getDummyImage("Neuro-medicalScale-2", 204),
    ],
    writeWipe: [
      "https://pub-735dbd7583d74ad5949115d6fdf77023.r2.dev/Therepy/Neurology/82.png",
      getDummyImage("Neuro-writeWipe-1", 205),
      getDummyImage("Neuro-writeWipe-2", 206),
    ],
    tearOffPads: [
      getDummyImage("Neuro-tearOffPads-0", 207),
      getDummyImage("Neuro-tearOffPads-1", 208),
      getDummyImage("Neuro-tearOffPads-2", 209),
    ],
    tableTops: [
      getDummyImage("Neuro-tableTops-0", 210),
      getDummyImage("Neuro-tableTops-1", 211),
      getDummyImage("Neuro-tableTops-2", 212),
    ],
  },
  Psychiatry: {
    card: "https://suryahospitals.com/speciality/6561e6ee81bdeExpertise---Psychiatry-(Adult).jpg",
    books: [
      getDummyImage("Psych-books-0", 213),
      getDummyImage("Psych-books-1", 214),
      getDummyImage("Psych-books-2", 215),
    ],
    flipChart: [
      getDummyImage("Psych-flipChart-0", 216),
      getDummyImage("Psych-flipChart-1", 217),
      getDummyImage("Psych-flipChart-2", 218),
    ],
    matt: [
      getDummyImage("Psych-matt-0", 219),
      getDummyImage("Psych-matt-1", 220),
      getDummyImage("Psych-matt-2", 221),
    ],
    posters: [
      getDummyImage("Psych-posters-0", 222),
      getDummyImage("Psych-posters-1", 223),
      getDummyImage("Psych-posters-2", 224),
    ],
    medicalScale: [
      getDummyImage("Psych-medicalScale-0", 225),
      getDummyImage("Psych-medicalScale-1", 226),
      getDummyImage("Psych-medicalScale-2", 227),
    ],
    writeWipe: [
      getDummyImage("Psych-writeWipe-0", 228),
      getDummyImage("Psych-writeWipe-1", 229),
      getDummyImage("Psych-writeWipe-2", 230),
    ],
    tearOffPads: [
      getDummyImage("Psych-tearOffPads-0", 231),
      getDummyImage("Psych-tearOffPads-1", 232),
      getDummyImage("Psych-tearOffPads-2", 233),
    ],
    tableTops: [
      getDummyImage("Psych-tableTops-0", 234),
      getDummyImage("Psych-tableTops-1", 235),
      getDummyImage("Psych-tableTops-2", 236),
    ],
  },
  Dentistry: {
    card: "https://dentalarchindia.com/wp-content/uploads/2026/03/teeth-cleaning-in-mumbai.jpeg.webp",
    books: [
      getDummyImage("Dent-books-0", 237),
      getDummyImage("Dent-books-1", 238),
      getDummyImage("Dent-books-2", 239),
    ],
    flipChart: [
      getDummyImage("Dent-flipChart-0", 240),
      getDummyImage("Dent-flipChart-1", 241),
      getDummyImage("Dent-flipChart-2", 242),
    ],
    matt: [
      getDummyImage("Dent-matt-0", 243),
      getDummyImage("Dent-matt-1", 244),
      getDummyImage("Dent-matt-2", 245),
    ],
    posters: [
      getDummyImage("Dent-posters-0", 246),
      getDummyImage("Dent-posters-1", 247),
      getDummyImage("Dent-posters-2", 248),
    ],
    medicalScale: [
      getDummyImage("Dent-medicalScale-0", 249),
      getDummyImage("Dent-medicalScale-1", 250),
      getDummyImage("Dent-medicalScale-2", 251),
    ],
    writeWipe: [
      getDummyImage("Dent-writeWipe-0", 252),
      getDummyImage("Dent-writeWipe-1", 253),
      getDummyImage("Dent-writeWipe-2", 254),
    ],
    tearOffPads: [
      getDummyImage("Dent-tearOffPads-0", 255),
      getDummyImage("Dent-tearOffPads-1", 256),
      getDummyImage("Dent-tearOffPads-2", 257),
    ],
    tableTops: [
      getDummyImage("Dent-tableTops-0", 258),
      getDummyImage("Dent-tableTops-1", 259),
      getDummyImage("Dent-tableTops-2", 260),
    ],
  },
  "Infectious Diseases": {
    card: "https://www.verywellhealth.com/thmb/yI57XOKvdPi_bFAitEG2Pir1BSw=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/VirusIllustration-59ce8c1303f4020011702d0a.jpg",
    books: [
      getDummyImage("Infect-books-0", 261),
      getDummyImage("Infect-books-1", 262),
      getDummyImage("Infect-books-2", 263),
    ],
    flipChart: [
      getDummyImage("Infect-flipChart-0", 264),
      getDummyImage("Infect-flipChart-1", 265),
      getDummyImage("Infect-flipChart-2", 266),
    ],
    matt: [
      getDummyImage("Infect-matt-0", 267),
      getDummyImage("Infect-matt-1", 268),
      getDummyImage("Infect-matt-2", 269),
    ],
    posters: [
      getDummyImage("Infect-posters-0", 270),
      getDummyImage("Infect-posters-1", 271),
      getDummyImage("Infect-posters-2", 272),
    ],
    medicalScale: [
      getDummyImage("Infect-medicalScale-0", 273),
      getDummyImage("Infect-medicalScale-1", 274),
      getDummyImage("Infect-medicalScale-2", 275),
    ],
    writeWipe: [
      getDummyImage("Infect-writeWipe-0", 276),
      getDummyImage("Infect-writeWipe-1", 277),
      getDummyImage("Infect-writeWipe-2", 278),
    ],
    tearOffPads: [
      getDummyImage("Infect-tearOffPads-0", 279),
      getDummyImage("Infect-tearOffPads-1", 280),
      getDummyImage("Infect-tearOffPads-2", 281),
    ],
    tableTops: [
      getDummyImage("Infect-tableTops-0", 282),
      getDummyImage("Infect-tableTops-1", 283),
      getDummyImage("Infect-tableTops-2", 284),
    ],
  },
  Endocrinology: {
    card: "https://cdn.aws.premiummedicalcircle.com/Endokrinologie-Fachbereich-iStockjpg.webp",
    books: [
      getDummyImage("Endo-books-0", 285),
      getDummyImage("Endo-books-1", 286),
      getDummyImage("Endo-books-2", 287),
    ],
    flipChart: [
      getDummyImage("Endo-flipChart-0", 288),
      getDummyImage("Endo-flipChart-1", 289),
      getDummyImage("Endo-flipChart-2", 290),
    ],
    matt: [
      getDummyImage("Endo-matt-0", 291),
      getDummyImage("Endo-matt-1", 292),
      getDummyImage("Endo-matt-2", 293),
    ],
    posters: [
      getDummyImage("Endo-posters-0", 294),
      getDummyImage("Endo-posters-1", 295),
      getDummyImage("Endo-posters-2", 296),
    ],
    medicalScale: [
      getDummyImage("Endo-medicalScale-0", 297),
      getDummyImage("Endo-medicalScale-1", 298),
      getDummyImage("Endo-medicalScale-2", 299),
    ],
    writeWipe: [
      getDummyImage("Endo-writeWipe-0", 300),
      getDummyImage("Endo-writeWipe-1", 301),
      getDummyImage("Endo-writeWipe-2", 302),
    ],
    tearOffPads: [
      getDummyImage("Endo-tearOffPads-0", 303),
      getDummyImage("Endo-tearOffPads-1", 304),
      getDummyImage("Endo-tearOffPads-2", 305),
    ],
    tableTops: [
      getDummyImage("Endo-tableTops-0", 306),
      getDummyImage("Endo-tableTops-1", 307),
      getDummyImage("Endo-tableTops-2", 308),
    ],
  },
  Hepatology: {
    card: "https://www.gastropune.com/wp-content/uploads/2024/07/Untitled-design-2024-07-16T115210.358-1024x614.png",
    books: [
      getDummyImage("Hep-books-0", 309),
      getDummyImage("Hep-books-1", 310),
      getDummyImage("Hep-books-2", 311),
    ],
    flipChart: [
      getDummyImage("Hep-flipChart-0", 312),
      getDummyImage("Hep-flipChart-1", 313),
      getDummyImage("Hep-flipChart-2", 314),
    ],
    matt: [
      getDummyImage("Hep-matt-0", 315),
      getDummyImage("Hep-matt-1", 316),
      getDummyImage("Hep-matt-2", 317),
    ],
    posters: [
      "https://pub-735dbd7583d74ad5949115d6fdf77023.r2.dev/Therepy/Hepatology/Frame.png",
      getDummyImage("Hep-posters-1", 318),
      getDummyImage("Hep-posters-2", 319),
    ],
    medicalScale: [
      "https://pub-735dbd7583d74ad5949115d6fdf77023.r2.dev/Therepy/Hepatology/Paper%20Weight.png",
      getDummyImage("Hep-medicalScale-1", 320),
      getDummyImage("Hep-medicalScale-2", 321),
    ],
    writeWipe: [
      "https://pub-735dbd7583d74ad5949115d6fdf77023.r2.dev/Therepy/Hepatology/Write%20%26%20Wipe.png",
      getDummyImage("Hep-writeWipe-1", 322),
      getDummyImage("Hep-writeWipe-2", 323),
    ],
    tearOffPads: [
      getDummyImage("Hep-tearOffPads-0", 324),
      getDummyImage("Hep-tearOffPads-1", 325),
      getDummyImage("Hep-tearOffPads-2", 326),
    ],
    tableTops: [
      "https://pub-735dbd7583d74ad5949115d6fdf77023.r2.dev/Therepy/Hepatology/Table%20Top.png",
      getDummyImage("Hep-tableTops-1", 327),
      getDummyImage("Hep-tableTops-2", 328),
    ],
  },
  Oncology: {
    card: "https://www.news-medical.net/images/Article_Images/ImageForArticle_1224_17375676414306114.jpg",
    books: [
      getDummyImage("Onc-books-0", 329),
      getDummyImage("Onc-books-1", 330),
      getDummyImage("Onc-books-2", 331),
    ],
    flipChart: [
      getDummyImage("Onc-flipChart-0", 332),
      getDummyImage("Onc-flipChart-1", 333),
      getDummyImage("Onc-flipChart-2", 334),
    ],
    matt: [
      getDummyImage("Onc-matt-0", 335),
      getDummyImage("Onc-matt-1", 336),
      getDummyImage("Onc-matt-2", 337),
    ],
    posters: [
      getDummyImage("Onc-posters-0", 338),
      getDummyImage("Onc-posters-1", 339),
      getDummyImage("Onc-posters-2", 340),
    ],
    medicalScale: [
      getDummyImage("Onc-medicalScale-0", 341),
      getDummyImage("Onc-medicalScale-1", 342),
      getDummyImage("Onc-medicalScale-2", 343),
    ],
    writeWipe: [
      getDummyImage("Onc-writeWipe-0", 344),
      getDummyImage("Onc-writeWipe-1", 345),
      getDummyImage("Onc-writeWipe-2", 346),
    ],
    tearOffPads: [
      getDummyImage("Onc-tearOffPads-0", 347),
      getDummyImage("Onc-tearOffPads-1", 348),
      getDummyImage("Onc-tearOffPads-2", 349),
    ],
    tableTops: [
      getDummyImage("Onc-tableTops-0", 350),
      getDummyImage("Onc-tableTops-1", 351),
      getDummyImage("Onc-tableTops-2", 352),
    ],
  },
  "General Wellness": {
    card: "https://savaherbals.com/cdn/shop/files/Group_of_2_Objects4.jpg?v=1762148767&width=3840",
    books: [
      getDummyImage("Well-books-0", 353),
      getDummyImage("Well-books-1", 354),
      getDummyImage("Well-books-2", 355),
    ],
    flipChart: [
      getDummyImage("Well-flipChart-0", 356),
      getDummyImage("Well-flipChart-1", 357),
      getDummyImage("Well-flipChart-2", 358),
    ],
    matt: [
      getDummyImage("Well-matt-0", 359),
      getDummyImage("Well-matt-1", 360),
      getDummyImage("Well-matt-2", 361),
    ],
    posters: [
      getDummyImage("Well-posters-0", 362),
      getDummyImage("Well-posters-1", 363),
      getDummyImage("Well-posters-2", 364),
    ],
    medicalScale: [
      getDummyImage("Well-medicalScale-0", 365),
      getDummyImage("Well-medicalScale-1", 366),
      getDummyImage("Well-medicalScale-2", 367),
    ],
    writeWipe: [
      getDummyImage("Well-writeWipe-0", 368),
      getDummyImage("Well-writeWipe-1", 369),
      getDummyImage("Well-writeWipe-2", 370),
    ],
    tearOffPads: [
      getDummyImage("Well-tearOffPads-0", 371),
      getDummyImage("Well-tearOffPads-1", 372),
      getDummyImage("Well-tearOffPads-2", 373),
    ],
    tableTops: [
      getDummyImage("Well-tableTops-0", 374),
      getDummyImage("Well-tableTops-1", 375),
      getDummyImage("Well-tableTops-2", 376),
    ],
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
  const categoryKey = getCategoryKey(category);
  const categoryImages = therapyImages?.[categoryKey] || [
    getDummyImage(`${therapyName}-${category}-default`, 0),
    getDummyImage(`${therapyName}-${category}-default`, 1),
    getDummyImage(`${therapyName}-${category}-default`, 2),
  ];

  return [0, 1, 2].map((index) => ({
    title: `${therapyName}: ${details.titles[index]}`,
    desc: `${details.descBase} ${index === 0 ? "Ideal for healthcare professionals." : index === 1 ? "Enhances clinical workflow and patient understanding." : "Trusted by medical facilities worldwide."}`,
    img: categoryImages[index] || categoryImages[0],
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
  ];

  return therapies.map((t) => ({
    ...t,
    images:
      THERAPY_IMAGES_DATA[t.therapy] || THERAPY_IMAGES_DATA["General Wellness"],
    items: PRODUCT_CATEGORIES.flatMap((category) =>
      generateCategoryProducts(t.therapy, category),
    ),
  }));
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
                  className={`relative w-16 h-16 md:w-20 md:h-20 flex-shrink-0 rounded-lg overflow-hidden transition-all duration-200 ${
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

// ─── Collage Card ───
const CollageCard = memo(function CollageCard({
  therapy,
  onClick,
  priority = false,
}: {
  therapy: Therapy;
  onClick: () => void;
  priority?: boolean;
}) {
  return (
    <article
      className={`group relative rounded-xl sm:rounded-2xl overflow-hidden cursor-pointer transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl h-full min-h-[140px] sm:min-h-[180px] md:min-h-[190px] lg:min-h-[200px] xl:min-h-[240px] w-full ${therapy.span === 2 ? "col-span-2" : "col-span-1"}`}
      onClick={onClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") onClick();
      }}
    >
      <LazyImage
        src={therapy.images.card}
        alt={therapy.therapy}
        fill
        priority={priority}
        sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
        className="object-cover transition-transform duration-700 group-hover:scale-105"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-black/20" />

      <div className="absolute inset-0 p-2 sm:p-3 md:p-4 lg:p-5 flex flex-col justify-between">
        <div className="flex justify-end">
          <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-white/15 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:scale-110">
            <ArrowUpRight className="w-3.5 h-3.5 text-white" />
          </div>
        </div>
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

            {/* Tablet: 3 columns */}
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

            {/* Desktop: 5 columns */}
            <div className="hidden lg:grid grid-cols-5 gap-2 sm:gap-3 auto-rows-[220px] xl:auto-rows-[240px]">
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
