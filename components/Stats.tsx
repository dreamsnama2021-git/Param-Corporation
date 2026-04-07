// ─── Stats ────────────────────────────────────────────────────────────────────
 interface StatItem {
  icon: string;
  value: string;
  label: string;
}
 const STATS: StatItem[] = [
  { icon: "🏆", value: "21+", label: "Years in Business" },
  { icon: "📦", value: "10,000+", label: "Products" },
  { icon: "🏢", value: "300+", label: "Corporate Customers" },
  { icon: "📋", value: "1,000+", label: "Corporate Orders Annually" },
  { icon: "👥", value: "100+", label: "Experienced Employees" },
];
export default function Stats() {
  return (
    <section className="bg-[#1a1a2e] relative overflow-hidden">
      {/* Decorative line accent */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[var(--clr-secondary)] to-transparent" />
 
      {/* Background pattern */}
      <div
        className="absolute inset-0 opacity-5 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />
 
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 md:py-2">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 md:gap-8">
          {STATS.map((stat, i) => (
            <div
              key={stat.label}
              className="flex flex-col items-center text-center group"
              style={{ animationDelay: `${i * 100}ms` }}
            >
              {/* Icon circle */}
              <div className="w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-[var(--clr-secondary)]/10 border border-[var(--clr-secondary)]/20 flex items-center justify-center text-2xl md:text-3xl mb-4 group-hover:bg-[var(--clr-secondary)]/20 group-hover:scale-110 transition-all duration-300">
                {stat.icon}
              </div>
 
              {/* Value */}
              <div className="text-3xl md:text-4xl font-black text-white mb-1 leading-none">
                {stat.value}
              </div>
 
              {/* Label */}
              <div className="text-xs md:text-sm text-gray-400 font-medium leading-tight max-w-[100px]">
                {stat.label}
              </div>
 
              {/* Accent dot */}
              <div className="w-1.5 h-1.5 rounded-full bg-[var(--clr-secondary)] mt-3 group-hover:scale-150 transition-transform duration-300" />
            </div>
          ))}
        </div>
      </div>
 
      {/* Bottom accent */}
      <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[var(--clr-secondary)]/40 to-transparent" />
    </section>
  );
}