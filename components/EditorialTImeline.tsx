const EditorialTimeline = ({ items }: { items: TimelineItem[] }) => {
  return (
    <div className="relative max-w-6xl mx-auto px-6">
      {/* Central Vertical Line */}
      <div className="absolute left-1/2 top-0 bottom-0 -translate-x-1/2 w-[1px] bg-slate-200 hidden md:block" />

      <div className="space-y-24">
        {items.map((item, index) => (
          <EditorialTimelineRow key={index} item={item} index={index} />
        ))}
      </div>
    </div>
  );
};

const EditorialTimelineRow = ({ item, index }: { item: TimelineItem; index: number }) => {
  const isEven = index % 2 === 0;

  return (
    <div className={`relative flex flex-col ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-12`}>
      
      {/* 1. Image Side */}
      <motion.div 
        initial={{ opacity: 0, x: isEven ? -50 : 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="w-full md:w-1/2"
      >
        <div className="relative aspect-[16/10] rounded-2xl overflow-hidden shadow-2xl">
          <Image 
            src={item.image || ""} 
            alt={item.title} 
            fill 
            className="object-cover hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
          <div className="absolute bottom-6 left-6 text-white">
            <span className="px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-[10px] font-bold uppercase tracking-widest">
              {item.category}
            </span>
          </div>
        </div>
      </motion.div>

      {/* 2. Center Connector (Desktop Only) */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 hidden md:block">
        <div className="relative">
          {/* The Dot */}
          <div className="w-4 h-4 rounded-full bg-white border-4 border-blue-600 z-10 relative" />
          
          {/* The Connecting Arm */}
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: 100 }}
            viewport={{ once: true }}
            className={`absolute top-1/2 -translate-y-1/2 h-px bg-slate-200 -z-10 ${isEven ? 'left-4' : 'right-4'}`}
            style={{ originX: isEven ? 0 : 1 }}
          />
        </div>
      </div>

      {/* 3. Text Side */}
      <motion.div 
        initial={{ opacity: 0, x: isEven ? 50 : -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="w-full md:w-1/2 space-y-4"
      >
        <div className="text-blue-600 font-bold text-5xl opacity-20 font-serif">
          {item.date}
        </div>
        <h3 className="text-3xl font-bold text-slate-900 leading-tight">
          {item.title}
        </h3>
        <p className="text-lg text-slate-600 leading-relaxed max-w-md">
          {item.description}
        </p>
        <div className="pt-4 flex items-center gap-2 text-sm font-bold text-slate-900 group cursor-pointer">
          READ FULL STORY 
          <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
        </div>
      </motion.div>
    </div>
  );
};
