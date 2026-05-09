"use client";
// CaptureTheMoment.tsx — Next.js + Tailwind CSS (landscape / desktop)
// Add to app/layout.tsx:
// <link href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@700&family=Playfair+Display:wght@700&family=DM+Sans:wght@400;500&display=swap" rel="stylesheet"/>

import Image from "next/image";

interface Props {
  photos?: string[];
  location?: string;
  date?: string;
  caption?: string;
  credit?: string;
}

const SWATCHES = [
  "#d2cdc8","#c8c4be","#d6d2cc","#cbc7c1","#d9d5d0","#c5c1bb",
  "#cec9c4","#d3ceca","#c2beb9","#dbd7d2","#c9c5c0","#d0ccc7",
  "#c6c2bd","#d8d4cf","#ccc8c3","#d5d1cc","#c3bfba","#dadbd6",
];

function Photo({ src, index, className = "" }: { src?: string; index: number; className?: string }) {
  return (
    <div className={`relative overflow-hidden rounded-[3px] ${className}`}>
      {src ? (
        <Image src={src} alt={`Photo ${index + 1}`} fill className="object-cover" sizes="20vw" />
      ) : (
        <div className="absolute inset-0" style={{ background: SWATCHES[index % SWATCHES.length] }} />
      )}
    </div>
  );
}

export default function CaptureTheMoment({
  photos = [],
  location = "SMK Wachid Hasyim 2",
  date = "06.06.2022",
  caption = "Congrats buat kalian semua atas kelulusan ini.\nDoa terbaik, Sukses selalu.",
  credit = "created by rzqwahyuu",
}: Props) {
  const p = (i: number) => photos[i];

  return (
    <div
      className="relative w-screen h-screen overflow-hidden bg-[#f0eeeb]"
      style={{ fontFamily: "'DM Sans', sans-serif" }}
    >
      {/* ── Topographic background ── */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none"
        viewBox="0 0 1440 900"
        preserveAspectRatio="xMidYMid slice"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        {[
          "M-60,80  Q200,30  400,100 Q600,170 800,90  Q1000,20  1200,100 Q1380,170 1500,100",
          "M-60,200 Q180,150 380,220 Q580,290 780,210 Q980,140 1180,210 Q1360,280 1500,210",
          "M-60,340 Q200,280 420,360 Q620,430 820,350 Q1020,270 1220,350 Q1400,420 1500,360",
          "M-60,470 Q190,410 410,480 Q630,550 820,470 Q1010,390 1210,470 Q1390,540 1500,480",
          "M-60,610 Q210,550 430,620 Q640,690 840,610 Q1030,530 1230,610 Q1400,670 1500,620",
          "M-60,750 Q220,690 440,760 Q650,830 850,750 Q1040,670 1240,750 Q1410,810 1500,760",
          "M-60,870 Q230,810 450,880 Q660,950 860,870 Q1050,790 1250,870 Q1420,940 1500,880",
          "M-60,130 Q170,80  370,150 Q570,220 770,140 Q970,60  1170,140 Q1350,210 1500,150",
          "M-60,400 Q200,340 420,410 Q640,480 840,400 Q1040,320 1240,400 Q1420,460 1500,410",
          "M-60,680 Q215,620 435,690 Q645,760 845,680 Q1045,600 1245,680 Q1415,750 1500,690",
        ].map((d, i) => (
          <path key={i} d={d} fill="none" stroke="#b5b1ab" strokeWidth={i > 6 ? 0.9 : 1.3} opacity={i > 6 ? 0.38 : 0.55} />
        ))}
      </svg>

      {/* ── Main layout ── */}
      <div className="relative z-10 flex flex-col h-full px-11 pt-8 pb-5 gap-3">

        {/* Header */}
        <div className="flex items-start justify-between flex-shrink-0">
          <div>
            <p className="text-[28px] leading-tight text-gray-700" style={{ fontFamily: "'Dancing Script', cursive" }}>
              Capture the
            </p>
            <p className="text-[38px] font-bold leading-none text-gray-900 -mt-0.5" style={{ fontFamily: "'Playfair Display', serif" }}>
              Moment.
            </p>
          </div>
          <div className="flex flex-col gap-1.5 items-end mt-1">
            <div className="flex items-center gap-1.5">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#777" strokeWidth="2">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/>
              </svg>
              <span className="text-[11.5px] text-gray-600 font-medium">{location}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#777" strokeWidth="2">
                <rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/>
                <line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>
              </svg>
              <span className="text-[11.5px] text-gray-600 font-medium">{date}</span>
            </div>
          </div>
        </div>

        {/* Collage body */}
        <div className="flex flex-1 min-h-0 gap-2.5">

          {/* Left panel: caption + 2 tall photos */}
          <div className="flex flex-col gap-1 w-[18%] flex-shrink-0">
            <div className="flex-shrink-0 pb-1.5">
              {caption.split("\n").map((line, i) => (
                <p key={i} className="text-[11.5px] text-gray-500 leading-relaxed">{line}</p>
              ))}
            </div>
            <div className="flex flex-col flex-1 min-h-0 gap-1">
              <Photo src={p(0)} index={0} className="flex-1 min-h-0 w-full" />
              <Photo src={p(1)} index={1} className="flex-1 min-h-0 w-full" />
            </div>
          </div>

          {/* Center panel: 4 rows */}
          <div className="flex flex-col flex-1 min-w-0 gap-1">
            {/* Row 1 */}
            <div className="flex gap-1 flex-1 min-h-0">
              <Photo src={p(2)} index={2} className="w-[25%] flex-shrink-0" />
              <Photo src={p(3)} index={3} className="flex-1" />
              <Photo src={p(4)} index={4} className="w-[30%] flex-shrink-0" />
            </div>
            {/* Row 2 */}
            <div className="flex gap-1 flex-1 min-h-0">
              <Photo src={p(5)} index={5} className="w-[22%] flex-shrink-0" />
              <Photo src={p(6)} index={6} className="flex-1" />
              <Photo src={p(7)} index={7} className="flex-1" />
              <Photo src={p(8)} index={8} className="w-[20%] flex-shrink-0" />
            </div>
            {/* Row 3 */}
            <div className="flex gap-1 flex-1 min-h-0">
              <Photo src={p(9)}  index={9}  className="w-[30%] flex-shrink-0" />
              <Photo src={p(10)} index={10} className="flex-1" />
              <Photo src={p(11)} index={11} className="w-[25%] flex-shrink-0" />
            </div>
            {/* Row 4 */}
            <div className="flex gap-1 flex-1 min-h-0">
              <Photo src={p(12)} index={12} className="w-[22%] flex-shrink-0" />
              <Photo src={p(13)} index={13} className="flex-1" />
              <Photo src={p(14)} index={14} className="w-[30%] flex-shrink-0" />
            </div>
          </div>

          {/* Right panel: 3 stacked tall photos */}
          <div className="flex flex-col w-[14%] flex-shrink-0 gap-1">
            <Photo src={p(15)} index={15} className="flex-1 min-h-0 w-full" />
            <Photo src={p(16)} index={16} className="flex-1 min-h-0 w-full" />
            <Photo src={p(17)} index={17} className="flex-1 min-h-0 w-full" />
          </div>

        </div>

        {/* Credit */}
        <p className="flex-shrink-0 text-center text-[11px] text-gray-400 tracking-wider">
          {credit}
        </p>

      </div>
    </div>
  );
}