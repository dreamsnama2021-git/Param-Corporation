"use client";
// CompanyMilestone.tsx

export default function CompanyMilestone() {
  const W = 900;
  const H = 640;

  // S-curve winding road from bottom-left → top-right
  const roadPath = `
    M 80,${H}
    C 80,570  180,530  200,460
    C 220,390  110,350  150,280
    C 195,210  360,210  400,148
    C 440,86   600,62   ${W - 40},48
  `;

  const milestones = [
    {
      x: 118, y: 475,
      year: "2019", tag: "FIRST STEPS",
      desc: "We launch our first advertising platform.",
      side: "left" as const,
    },
    {
      x: 172, y: 350,
      year: "2020", tag: "LET'S DO IT",
      desc: "We introduce an online mapping service.",
      side: "right" as const,
    },
    {
      x: 388, y: 102,
      year: "2022", tag: "KEEP GOING",
      desc: "We release a suite of productivity software.",
      side: "left" as const,
    },
    {
      x: 750, y: 5,
      year: "2023", tag: "HERE WE ARE",
      desc: "Our software becomes the most popular operating systems.",
      side: "right" as const,
    },
  ];

  return (
    <section
      style={{ fontFamily: "'DM Sans', sans-serif", background: "#fff", minHeight: "100vh" }}
      className="px-6 py-10"
    >
      {/* Header */}
      <div style={{ maxWidth: 960, margin: "0 auto 0" }}>
        <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.24em", color: "#9ca3af", textTransform: "uppercase", marginBottom: 4 }}>
          Really Great Site
        </p>
        <h1 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "clamp(52px,8vw,82px)", letterSpacing: "0.02em", color: "#1a1a2e", lineHeight: 1, marginBottom: 8 }}>
          Company Milestone
        </h1>
        <p style={{ fontSize: 13, color: "#6b7280" }}>Re: Status Report Meeting</p>
        <p style={{ fontSize: 13, fontWeight: 700, color: "#374151" }}>Date: January 12, 2023</p>
      </div>

      {/* SVG Road */}
      <div style={{ maxWidth: 960, margin: "0 auto" }}>
        <svg
          viewBox={`0 0 ${W} ${H}`}
          width="100%"
          xmlns="http://www.w3.org/2000/svg"
          style={{ overflow: "visible", display: "block" }}
        >
          {/* ── Soft shadow beneath road ── */}
          <path d={roadPath} fill="none" stroke="#b8c4d8" strokeWidth="62" strokeLinecap="round" />

          {/* ── Road body ── */}
          <path d={roadPath} fill="none" stroke="#1e2a4a" strokeWidth="54" strokeLinecap="round" />

          {/* ── Subtle top-edge highlight ── */}
          <path d={roadPath} fill="none" stroke="#3b4f7a" strokeWidth="54" strokeLinecap="round" strokeDasharray="1 9999" opacity="0" />

          {/* ── White dashed center line ── */}
          <path
            d={roadPath}
            fill="none"
            stroke="white"
            strokeWidth="3"
            strokeLinecap="round"
            strokeDasharray="20 15"
            opacity="0.55"
          />

          {/* ── Milestones ── */}
          {milestones.map((m) => {
            const right = m.side === "right";
            const offset = 38;
            const lx = right ? m.x + offset : m.x - offset;
            const anchor = right ? "start" as const : "end" as const;

            return (
              <g key={m.year}>
                {/* Dot glow */}
                <circle cx={m.x} cy={m.y} r={14} fill="#5b7ab7" opacity={0.15} />
                {/* Dot white ring */}
                <circle cx={m.x} cy={m.y} r={9} fill="white" stroke="#5b7ab7" strokeWidth={3} />
                {/* Dot center */}
                <circle cx={m.x} cy={m.y} r={3.5} fill="#1e2a4a" />

                {/* Connector tick */}
                <line
                  x1={right ? m.x + 10 : m.x - 10}
                  y1={m.y - 2}
                  x2={right ? m.x + offset - 4 : m.x - offset + 4}
                  y2={m.y - 24}
                  stroke="#5b7ab7"
                  strokeWidth={1.5}
                  strokeDasharray="4 3"
                  opacity={0.65}
                />

                {/* Year */}
                <text
                  x={lx}
                  y={m.y - 52}
                  textAnchor={anchor}
                  style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                  fontSize={30}
                  fill="#1a1a2e"
                  letterSpacing={1}
                >
                  {m.year}
                </text>

                {/* Tag badge */}
                <MilestoneBadge x={lx} y={m.y - 40} label={m.tag} anchor={anchor} />

                {/* Description */}
                <WrappedText x={lx} y={m.y - 18} text={m.desc} anchor={anchor} maxW={165} />
              </g>
            );
          })}
        </svg>
      </div>
    </section>
  );
}

type TextAnchor = "start" | "middle" | "end";

function MilestoneBadge({ x, y, label, anchor }: { x: number; y: number; label: string; anchor: TextAnchor }) {
  const fontSize = 7.8;
  const padX = 8;
  const padY = 3;
  const boxH = fontSize + padY * 2;
  const approxW = label.length * (fontSize * 0.62) + padX * 3;
  const bx = anchor === "start" ? x : x - approxW;

  return (
    <g>
      <rect x={bx} y={y - boxH + padY} width={approxW} height={boxH} fill="#1e2a4a" rx={1} />
      <text
        x={anchor === "start" ? x + padX : x - padX}
        y={y - 1}
        textAnchor={anchor}
        fontSize={fontSize}
        fontWeight={700}
        fill="white"
        letterSpacing={1.3}
        style={{ fontFamily: "'DM Sans', sans-serif", textTransform: "uppercase" }}
      >
        {label}
      </text>
    </g>
  );
}

function WrappedText({ x, y, text, anchor, maxW }: { x: number; y: number; text: string; anchor: TextAnchor; maxW: number }) {
  const words = text.split(" ");
  const lines: string[] = [];
  let cur = "";
  const cw = 5.6;

  for (const w of words) {
    const t = cur ? `${cur} ${w}` : w;
    if (t.length * cw > maxW && cur) { lines.push(cur); cur = w; }
    else cur = t;
  }
  if (cur) lines.push(cur);

  return (
    <text x={x} y={y + 1} textAnchor={anchor} fontSize={9.5} fill="#6b7280" style={{ fontFamily: "'DM Sans', sans-serif" }}>
      {lines.map((line, i) => (
        <tspan key={i} x={x} dy={i === 0 ? 0 : 13}>{line}</tspan>
      ))}
    </text>
  );
}