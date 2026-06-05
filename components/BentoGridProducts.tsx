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

// ─── Therapy Images Data (Separate arrays for each therapy) ───
const THERAPY_IMAGES_DATA: Record<string, any> = {
  "Cardio-Vascular": {
    card: "https://images.unsplash.com/photo-1559757175-5700dde675bc?w=800&q=80",
    books: [
      "/images/cardio/book1.jpg",
      "/images/cardio/book2.jpg",
      "/images/cardio/book3.jpg",
    ],
    flipChart: [
      "/images/cardio/flipchart1.jpg",
      "/images/cardio/flipchart2.jpg",
      "/images/cardio/flipchart3.jpg",
    ],
    matt: [
      "/images/cardio/matt1.jpg",
      "/images/cardio/matt2.jpg",
      "/images/cardio/matt3.jpg",
    ],
    posters: [
      "/images/cardio/poster1.jpg",
      "/images/cardio/poster2.jpg",
      "/images/cardio/poster3.jpg",
    ],
    medicalScale: [
      "/images/cardio/scale1.jpg",
      "/images/cardio/scale2.jpg",
      "/images/cardio/scale3.jpg",
    ],
    writeWipe: [
      "/images/cardio/writewipe1.jpg",
      "/images/cardio/writewipe2.jpg",
      "/images/cardio/writewipe3.jpg",
    ],
    tearOffPads: [
      "/images/cardio/tearoff1.jpg",
      "/images/cardio/tearoff2.jpg",
      "/images/cardio/tearoff3.jpg",
    ],
    tableTops: [
      "/images/cardio/tabletop1.jpg",
      "/images/cardio/tabletop2.jpg",
      "/images/cardio/tabletop3.jpg",
    ],
  },
  Diabetes: {
    card: "https://images.unsplash.com/photo-1585435557343-3b092031a831?w=800&q=80",
    books: [
      "/images/diabetes/book1.jpg",
      "/images/diabetes/book2.jpg",
      "/images/diabetes/book3.jpg",
    ],
    flipChart: [
      "/images/diabetes/flipchart1.jpg",
      "/images/diabetes/flipchart2.jpg",
      "/images/diabetes/flipchart3.jpg",
    ],
    matt: [
      "/images/diabetes/matt1.jpg",
      "/images/diabetes/matt2.jpg",
      "/images/diabetes/matt3.jpg",
    ],
    posters: [
      "/images/diabetes/poster1.jpg",
      "/images/diabetes/poster2.jpg",
      "/images/diabetes/poster3.jpg",
    ],
    medicalScale: [
      "/images/diabetes/scale1.jpg",
      "/images/diabetes/scale2.jpg",
      "/images/diabetes/scale3.jpg",
    ],
    writeWipe: [
      "/images/diabetes/writewipe1.jpg",
      "/images/diabetes/writewipe2.jpg",
      "/images/diabetes/writewipe3.jpg",
    ],
    tearOffPads: [
      "/images/diabetes/tearoff1.jpg",
      "/images/diabetes/tearoff2.jpg",
      "/images/diabetes/tearoff3.jpg",
    ],
    tableTops: [
      "/images/diabetes/tabletop1.jpg",
      "/images/diabetes/tabletop2.jpg",
      "/images/diabetes/tabletop3.jpg",
    ],
  },
  "ENT & Respiratory": {
    card: "https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?w=800&q=80",
    books: [
      "/images/ent/book1.jpg",
      "/images/ent/book2.jpg",
      "/images/ent/book3.jpg",
    ],
    flipChart: [
      "/images/ent/flipchart1.jpg",
      "/images/ent/flipchart2.jpg",
      "/images/ent/flipchart3.jpg",
    ],
    matt: [
      "/images/ent/matt1.jpg",
      "/images/ent/matt2.jpg",
      "/images/ent/matt3.jpg",
    ],
    posters: [
      "/images/ent/poster1.jpg",
      "/images/ent/poster2.jpg",
      "/images/ent/poster3.jpg",
    ],
    medicalScale: [
      "/images/ent/scale1.jpg",
      "/images/ent/scale2.jpg",
      "/images/ent/scale3.jpg",
    ],
    writeWipe: [
      "/images/ent/writewipe1.jpg",
      "/images/ent/writewipe2.jpg",
      "/images/ent/writewipe3.jpg",
    ],
    tearOffPads: [
      "/images/ent/tearoff1.jpg",
      "/images/ent/tearoff2.jpg",
      "/images/ent/tearoff3.jpg",
    ],
    tableTops: [
      "/images/ent/tabletop1.jpg",
      "/images/ent/tabletop2.jpg",
      "/images/ent/tabletop3.jpg",
    ],
  },
  "Orthopedics/Rheumatology": {
    card: "https://images.unsplash.com/photo-1581595220892-b0739db3ba8c?w=800&q=80",
    books: [
      "/images/ortho/book1.jpg",
      "/images/ortho/book2.jpg",
      "/images/ortho/book3.jpg",
    ],
    flipChart: [
      "/images/ortho/flipchart1.jpg",
      "/images/ortho/flipchart2.jpg",
      "/images/ortho/flipchart3.jpg",
    ],
    matt: [
      "/images/ortho/matt1.jpg",
      "/images/ortho/matt2.jpg",
      "/images/ortho/matt3.jpg",
    ],
    posters: [
      "/images/ortho/poster1.jpg",
      "/images/ortho/poster2.jpg",
      "/images/ortho/poster3.jpg",
    ],
    medicalScale: [
      "/images/ortho/scale1.jpg",
      "/images/ortho/scale2.jpg",
      "/images/ortho/scale3.jpg",
    ],
    writeWipe: [
      "/images/ortho/writewipe1.jpg",
      "/images/ortho/writewipe2.jpg",
      "/images/ortho/writewipe3.jpg",
    ],
    tearOffPads: [
      "/images/ortho/tearoff1.jpg",
      "/images/ortho/tearoff2.jpg",
      "/images/ortho/tearoff3.jpg",
    ],
    tableTops: [
      "/images/ortho/tabletop1.jpg",
      "/images/ortho/tabletop2.jpg",
      "/images/ortho/tabletop3.jpg",
    ],
  },
  "Gynaecology and Obstetrics": {
    card: "https://images.unsplash.com/photo-1519823551278-64ac92734fb1?w=800&q=80",
    books: [
      "/images/gynae/book1.jpg",
      "/images/gynae/book2.jpg",
      "/images/gynae/book3.jpg",
    ],
    flipChart: [
      "/images/gynae/flipchart1.jpg",
      "/images/gynae/flipchart2.jpg",
      "/images/gynae/flipchart3.jpg",
    ],
    matt: [
      "/images/gynae/matt1.jpg",
      "/images/gynae/matt2.jpg",
      "/images/gynae/matt3.jpg",
    ],
    posters: [
      "/images/gynae/poster1.jpg",
      "/images/gynae/poster2.jpg",
      "/images/gynae/poster3.jpg",
    ],
    medicalScale: [
      "/images/gynae/scale1.jpg",
      "/images/gynae/scale2.jpg",
      "/images/gynae/scale3.jpg",
    ],
    writeWipe: [
      "/images/gynae/writewipe1.jpg",
      "/images/gynae/writewipe2.jpg",
      "/images/gynae/writewipe3.jpg",
    ],
    tearOffPads: [
      "/images/gynae/tearoff1.jpg",
      "/images/gynae/tearoff2.jpg",
      "/images/gynae/tearoff3.jpg",
    ],
    tableTops: [
      "/images/gynae/tabletop1.jpg",
      "/images/gynae/tabletop2.jpg",
      "/images/gynae/tabletop3.jpg",
    ],
  },
  Gastroenterology: {
    card: "https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=800&q=80",
    books: [
      "/images/gastro/book1.jpg",
      "/images/gastro/book2.jpg",
      "/images/gastro/book3.jpg",
    ],
    flipChart: [
      "/images/gastro/flipchart1.jpg",
      "/images/gastro/flipchart2.jpg",
      "/images/gastro/flipchart3.jpg",
    ],
    matt: [
      "/images/gastro/matt1.jpg",
      "/images/gastro/matt2.jpg",
      "/images/gastro/matt3.jpg",
    ],
    posters: [
      "/images/gastro/poster1.jpg",
      "/images/gastro/poster2.jpg",
      "/images/gastro/poster3.jpg",
    ],
    medicalScale: [
      "/images/gastro/scale1.jpg",
      "/images/gastro/scale2.jpg",
      "/images/gastro/scale3.jpg",
    ],
    writeWipe: [
      "/images/gastro/writewipe1.jpg",
      "/images/gastro/writewipe2.jpg",
      "/images/gastro/writewipe3.jpg",
    ],
    tearOffPads: [
      "/images/gastro/tearoff1.jpg",
      "/images/gastro/tearoff2.jpg",
      "/images/gastro/tearoff3.jpg",
    ],
    tableTops: [
      "/images/gastro/tabletop1.jpg",
      "/images/gastro/tabletop2.jpg",
      "/images/gastro/tabletop3.jpg",
    ],
  },
  Ophthalmology: {
    card: "https://images.unsplash.com/photo-1584017911766-d451b3d0e843?w=800&q=80",
    books: [
      "/images/ophth/book1.jpg",
      "/images/ophth/book2.jpg",
      "/images/ophth/book3.jpg",
    ],
    flipChart: [
      "/images/ophth/flipchart1.jpg",
      "/images/ophth/flipchart2.jpg",
      "/images/ophth/flipchart3.jpg",
    ],
    matt: [
      "/images/ophth/matt1.jpg",
      "/images/ophth/matt2.jpg",
      "/images/ophth/matt3.jpg",
    ],
    posters: [
      "/images/ophth/poster1.jpg",
      "/images/ophth/poster2.jpg",
      "/images/ophth/poster3.jpg",
    ],
    medicalScale: [
      "/images/ophth/scale1.jpg",
      "/images/ophth/scale2.jpg",
      "/images/ophth/scale3.jpg",
    ],
    writeWipe: [
      "/images/ophth/writewipe1.jpg",
      "/images/ophth/writewipe2.jpg",
      "/images/ophth/writewipe3.jpg",
    ],
    tearOffPads: [
      "/images/ophth/tearoff1.jpg",
      "/images/ophth/tearoff2.jpg",
      "/images/ophth/tearoff3.jpg",
    ],
    tableTops: [
      "/images/ophth/tabletop1.jpg",
      "/images/ophth/tabletop2.jpg",
      "/images/ophth/tabletop3.jpg",
    ],
  },
  Dermatology: {
    card: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&q=80",
    books: [
      "/images/derma/book1.jpg",
      "/images/derma/book2.jpg",
      "/images/derma/book3.jpg",
    ],
    flipChart: [
      "/images/derma/flipchart1.jpg",
      "/images/derma/flipchart2.jpg",
      "/images/derma/flipchart3.jpg",
    ],
    matt: [
      "/images/derma/matt1.jpg",
      "/images/derma/matt2.jpg",
      "/images/derma/matt3.jpg",
    ],
    posters: [
      "/images/derma/poster1.jpg",
      "/images/derma/poster2.jpg",
      "/images/derma/poster3.jpg",
    ],
    medicalScale: [
      "/images/derma/scale1.jpg",
      "/images/derma/scale2.jpg",
      "/images/derma/scale3.jpg",
    ],
    writeWipe: [
      "/images/derma/writewipe1.jpg",
      "/images/derma/writewipe2.jpg",
      "/images/derma/writewipe3.jpg",
    ],
    tearOffPads: [
      "/images/derma/tearoff1.jpg",
      "/images/derma/tearoff2.jpg",
      "/images/derma/tearoff3.jpg",
    ],
    tableTops: [
      "/images/derma/tabletop1.jpg",
      "/images/derma/tabletop2.jpg",
      "/images/derma/tabletop3.jpg",
    ],
  },
  Pediatrics: {
    card: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=800&q=80",
    books: [
      "/images/peds/book1.jpg",
      "/images/peds/book2.jpg",
      "/images/peds/book3.jpg",
    ],
    flipChart: [
      "/images/peds/flipchart1.jpg",
      "/images/peds/flipchart2.jpg",
      "/images/peds/flipchart3.jpg",
    ],
    matt: [
      "/images/peds/matt1.jpg",
      "/images/peds/matt2.jpg",
      "/images/peds/matt3.jpg",
    ],
    posters: [
      "/images/peds/poster1.jpg",
      "/images/peds/poster2.jpg",
      "/images/peds/poster3.jpg",
    ],
    medicalScale: [
      "/images/peds/scale1.jpg",
      "/images/peds/scale2.jpg",
      "/images/peds/scale3.jpg",
    ],
    writeWipe: [
      "/images/peds/writewipe1.jpg",
      "/images/peds/writewipe2.jpg",
      "/images/peds/writewipe3.jpg",
    ],
    tearOffPads: [
      "/images/peds/tearoff1.jpg",
      "/images/peds/tearoff2.jpg",
      "/images/peds/tearoff3.jpg",
    ],
    tableTops: [
      "/images/peds/tabletop1.jpg",
      "/images/peds/tabletop2.jpg",
      "/images/peds/tabletop3.jpg",
    ],
  },
  Urology: {
    card: "https://images.unsplash.com/photo-1559757175-5700dde675bc?w=800&q=80",
    books: [
      "/images/urology/book1.jpg",
      "/images/urology/book2.jpg",
      "/images/urology/book3.jpg",
    ],
    flipChart: [
      "/images/urology/flipchart1.jpg",
      "/images/urology/flipchart2.jpg",
      "/images/urology/flipchart3.jpg",
    ],
    matt: [
      "/images/urology/matt1.jpg",
      "/images/urology/matt2.jpg",
      "/images/urology/matt3.jpg",
    ],
    posters: [
      "/images/urology/poster1.jpg",
      "/images/urology/poster2.jpg",
      "/images/urology/poster3.jpg",
    ],
    medicalScale: [
      "/images/urology/scale1.jpg",
      "/images/urology/scale2.jpg",
      "/images/urology/scale3.jpg",
    ],
    writeWipe: [
      "/images/urology/writewipe1.jpg",
      "/images/urology/writewipe2.jpg",
      "/images/urology/writewipe3.jpg",
    ],
    tearOffPads: [
      "/images/urology/tearoff1.jpg",
      "/images/urology/tearoff2.jpg",
      "/images/urology/tearoff3.jpg",
    ],
    tableTops: [
      "/images/urology/tabletop1.jpg",
      "/images/urology/tabletop2.jpg",
      "/images/urology/tabletop3.jpg",
    ],
  },
  Neurology: {
    card: "https://mehtahospital.com/wp-content/uploads/2025/04/dr-mehta-hospital-neurology.webp",
    books: [
      "/images/neuro/book1.jpg",
      "/images/neuro/book2.jpg",
      "/images/neuro/book3.jpg",
    ],
    flipChart: [
      "/images/neuro/flipchart1.jpg",
      "/images/neuro/flipchart2.jpg",
      "/images/neuro/flipchart3.jpg",
    ],
    matt: [
      "/images/neuro/matt1.jpg",
      "/images/neuro/matt2.jpg",
      "/images/neuro/matt3.jpg",
    ],
    posters: [
      "/images/neuro/poster1.jpg",
      "/images/neuro/poster2.jpg",
      "/images/neuro/poster3.jpg",
    ],
    medicalScale: [
      "/images/neuro/scale1.jpg",
      "/images/neuro/scale2.jpg",
      "/images/neuro/scale3.jpg",
    ],
    writeWipe: [
      "/images/neuro/writewipe1.jpg",
      "/images/neuro/writewipe2.jpg",
      "/images/neuro/writewipe3.jpg",
    ],
    tearOffPads: [
      "/images/neuro/tearoff1.jpg",
      "/images/neuro/tearoff2.jpg",
      "/images/neuro/tearoff3.jpg",
    ],
    tableTops: [
      "/images/neuro/tabletop1.jpg",
      "/images/neuro/tabletop2.jpg",
      "/images/neuro/tabletop3.jpg",
    ],
  },
  Psychiatry: {
    card: "https://suryahospitals.com/speciality/6561e6ee81bdeExpertise---Psychiatry-(Adult).jpg",
    books: [
      "/images/psych/book1.jpg",
      "/images/psych/book2.jpg",
      "/images/psych/book3.jpg",
    ],
    flipChart: [
      "/images/psych/flipchart1.jpg",
      "/images/psych/flipchart2.jpg",
      "/images/psych/flipchart3.jpg",
    ],
    matt: [
      "/images/psych/matt1.jpg",
      "/images/psych/matt2.jpg",
      "/images/psych/matt3.jpg",
    ],
    posters: [
      "/images/psych/poster1.jpg",
      "/images/psych/poster2.jpg",
      "/images/psych/poster3.jpg",
    ],
    medicalScale: [
      "/images/psych/scale1.jpg",
      "/images/psych/scale2.jpg",
      "/images/psych/scale3.jpg",
    ],
    writeWipe: [
      "/images/psych/writewipe1.jpg",
      "/images/psych/writewipe2.jpg",
      "/images/psych/writewipe3.jpg",
    ],
    tearOffPads: [
      "/images/psych/tearoff1.jpg",
      "/images/psych/tearoff2.jpg",
      "/images/psych/tearoff3.jpg",
    ],
    tableTops: [
      "/images/psych/tabletop1.jpg",
      "/images/psych/tabletop2.jpg",
      "/images/psych/tabletop3.jpg",
    ],
  },
  Dentistry: {
    card: "https://dentalarchindia.com/wp-content/uploads/2026/03/teeth-cleaning-in-mumbai.jpeg.webp",
    books: [
      "/images/dent/book1.jpg",
      "/images/dent/book2.jpg",
      "/images/dent/book3.jpg",
    ],
    flipChart: [
      "/images/dent/flipchart1.jpg",
      "/images/dent/flipchart2.jpg",
      "/images/dent/flipchart3.jpg",
    ],
    matt: [
      "/images/dent/matt1.jpg",
      "/images/dent/matt2.jpg",
      "/images/dent/matt3.jpg",
    ],
    posters: [
      "/images/dent/poster1.jpg",
      "/images/dent/poster2.jpg",
      "/images/dent/poster3.jpg",
    ],
    medicalScale: [
      "/images/dent/scale1.jpg",
      "/images/dent/scale2.jpg",
      "/images/dent/scale3.jpg",
    ],
    writeWipe: [
      "/images/dent/writewipe1.jpg",
      "/images/dent/writewipe2.jpg",
      "/images/dent/writewipe3.jpg",
    ],
    tearOffPads: [
      "/images/dent/tearoff1.jpg",
      "/images/dent/tearoff2.jpg",
      "/images/dent/tearoff3.jpg",
    ],
    tableTops: [
      "/images/dent/tabletop1.jpg",
      "/images/dent/tabletop2.jpg",
      "/images/dent/tabletop3.jpg",
    ],
  },
  "Infectious Diseases": {
    card: "https://www.verywellhealth.com/thmb/yI57XOKvdPi_bFAitEG2Pir1BSw=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/VirusIllustration-59ce8c1303f4020011702d0a.jpg",
    books: [
      "/images/infect/book1.jpg",
      "/images/infect/book2.jpg",
      "/images/infect/book3.jpg",
    ],
    flipChart: [
      "/images/infect/flipchart1.jpg",
      "/images/infect/flipchart2.jpg",
      "/images/infect/flipchart3.jpg",
    ],
    matt: [
      "/images/infect/matt1.jpg",
      "/images/infect/matt2.jpg",
      "/images/infect/matt3.jpg",
    ],
    posters: [
      "/images/infect/poster1.jpg",
      "/images/infect/poster2.jpg",
      "/images/infect/poster3.jpg",
    ],
    medicalScale: [
      "/images/infect/scale1.jpg",
      "/images/infect/scale2.jpg",
      "/images/infect/scale3.jpg",
    ],
    writeWipe: [
      "/images/infect/writewipe1.jpg",
      "/images/infect/writewipe2.jpg",
      "/images/infect/writewipe3.jpg",
    ],
    tearOffPads: [
      "/images/infect/tearoff1.jpg",
      "/images/infect/tearoff2.jpg",
      "/images/infect/tearoff3.jpg",
    ],
    tableTops: [
      "/images/infect/tabletop1.jpg",
      "/images/infect/tabletop2.jpg",
      "/images/infect/tabletop3.jpg",
    ],
  },
  Endocrinology: {
    card: "https://cdn.aws.premiummedicalcircle.com/Endokrinologie-Fachbereich-iStockjpg.webp",
    books: [
      "/images/endo/book1.jpg",
      "/images/endo/book2.jpg",
      "/images/endo/book3.jpg",
    ],
    flipChart: [
      "/images/endo/flipchart1.jpg",
      "/images/endo/flipchart2.jpg",
      "/images/endo/flipchart3.jpg",
    ],
    matt: [
      "/images/endo/matt1.jpg",
      "/images/endo/matt2.jpg",
      "/images/endo/matt3.jpg",
    ],
    posters: [
      "/images/endo/poster1.jpg",
      "/images/endo/poster2.jpg",
      "/images/endo/poster3.jpg",
    ],
    medicalScale: [
      "/images/endo/scale1.jpg",
      "/images/endo/scale2.jpg",
      "/images/endo/scale3.jpg",
    ],
    writeWipe: [
      "/images/endo/writewipe1.jpg",
      "/images/endo/writewipe2.jpg",
      "/images/endo/writewipe3.jpg",
    ],
    tearOffPads: [
      "/images/endo/tearoff1.jpg",
      "/images/endo/tearoff2.jpg",
      "/images/endo/tearoff3.jpg",
    ],
    tableTops: [
      "/images/endo/tabletop1.jpg",
      "/images/endo/tabletop2.jpg",
      "/images/endo/tabletop3.jpg",
    ],
  },
  Hepatology: {
    card: "https://www.gastropune.com/wp-content/uploads/2024/07/Untitled-design-2024-07-16T115210.358-1024x614.png",
    books: [
      "/images/hep/book1.jpg",
      "/images/hep/book2.jpg",
      "/images/hep/book3.jpg",
    ],
    flipChart: [
      "/images/hep/flipchart1.jpg",
      "/images/hep/flipchart2.jpg",
      "/images/hep/flipchart3.jpg",
    ],
    matt: [
      "/images/hep/matt1.jpg",
      "/images/hep/matt2.jpg",
      "/images/hep/matt3.jpg",
    ],
    posters: [
      "/images/hep/poster1.jpg",
      "/images/hep/poster2.jpg",
      "/images/hep/poster3.jpg",
    ],
    medicalScale: [
      "/images/hep/scale1.jpg",
      "/images/hep/scale2.jpg",
      "/images/hep/scale3.jpg",
    ],
    writeWipe: [
      "/images/hep/writewipe1.jpg",
      "/images/hep/writewipe2.jpg",
      "/images/hep/writewipe3.jpg",
    ],
    tearOffPads: [
      "/images/hep/tearoff1.jpg",
      "/images/hep/tearoff2.jpg",
      "/images/hep/tearoff3.jpg",
    ],
    tableTops: [
      "/images/hep/tabletop1.jpg",
      "/images/hep/tabletop2.jpg",
      "/images/hep/tabletop3.jpg",
    ],
  },
  Oncology: {
    card: "https://www.news-medical.net/images/Article_Images/ImageForArticle_1224_17375676414306114.jpg",
    books: [
      "/images/onc/book1.jpg",
      "/images/onc/book2.jpg",
      "/images/onc/book3.jpg",
    ],
    flipChart: [
      "/images/onc/flipchart1.jpg",
      "/images/onc/flipchart2.jpg",
      "/images/onc/flipchart3.jpg",
    ],
    matt: [
      "/images/onc/matt1.jpg",
      "/images/onc/matt2.jpg",
      "/images/onc/matt3.jpg",
    ],
    posters: [
      "/images/onc/poster1.jpg",
      "/images/onc/poster2.jpg",
      "/images/onc/poster3.jpg",
    ],
    medicalScale: [
      "/images/onc/scale1.jpg",
      "/images/onc/scale2.jpg",
      "/images/onc/scale3.jpg",
    ],
    writeWipe: [
      "/images/onc/writewipe1.jpg",
      "/images/onc/writewipe2.jpg",
      "/images/onc/writewipe3.jpg",
    ],
    tearOffPads: [
      "/images/onc/tearoff1.jpg",
      "/images/onc/tearoff2.jpg",
      "/images/onc/tearoff3.jpg",
    ],
    tableTops: [
      "/images/onc/tabletop1.jpg",
      "/images/onc/tabletop2.jpg",
      "/images/onc/tabletop3.jpg",
    ],
  },
  "General Wellness": {
    card: "https://savaherbals.com/cdn/shop/files/Group_of_2_Objects4.jpg?v=1762148767&width=3840",
    books: [
      "/images/wellness/book1.jpg",
      "/images/wellness/book2.jpg",
      "/images/wellness/book3.jpg",
    ],
    flipChart: [
      "/images/wellness/flipchart1.jpg",
      "/images/wellness/flipchart2.jpg",
      "/images/wellness/flipchart3.jpg",
    ],
    matt: [
      "/images/wellness/matt1.jpg",
      "/images/wellness/matt2.jpg",
      "/images/wellness/matt3.jpg",
    ],
    posters: [
      "/images/wellness/poster1.jpg",
      "/images/wellness/poster2.jpg",
      "/images/wellness/poster3.jpg",
    ],
    medicalScale: [
      "/images/wellness/scale1.jpg",
      "/images/wellness/scale2.jpg",
      "/images/wellness/scale3.jpg",
    ],
    writeWipe: [
      "/images/wellness/writewipe1.jpg",
      "/images/wellness/writewipe2.jpg",
      "/images/wellness/writewipe3.jpg",
    ],
    tearOffPads: [
      "/images/wellness/tearoff1.jpg",
      "/images/wellness/tearoff2.jpg",
      "/images/wellness/tearoff3.jpg",
    ],
    tableTops: [
      "/images/wellness/tabletop1.jpg",
      "/images/wellness/tabletop2.jpg",
      "/images/wellness/tabletop3.jpg",
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
    `/images/fallback/${categoryKey}1.jpg`,
    `/images/fallback/${categoryKey}2.jpg`,
    `/images/fallback/${categoryKey}3.jpg`,
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

      <div className="absolute inset-0 bg-gradient-to-t from-white/70 via-white/2 to-white/4" />

      <div className="absolute inset-0 p-2 sm:p-3 md:p-4 lg:p-5 flex flex-col justify-between">
        <div className="flex justify-end">
          <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-white/15 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:scale-110">
            <ArrowUpRight className="w-3.5 h-3.5 text-white" />
          </div>
        </div>
        <div className=" flex items-center gap-1">
          <span className="text-lg sm:text-xl md:text-2xl lg:text-3xl drop-shadow-lg block mb-1 sm:mb-2">
            {therapy.icon}
          </span>
          <h3 className="text-black  inline-block px-2 py-1 rounded-sm text-[11px] sm:text-sm md:text-base lg:text-lg font-semibold leading-tight drop-shadow-lg">
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