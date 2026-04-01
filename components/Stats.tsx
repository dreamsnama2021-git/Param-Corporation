// components/Stats.tsx
'use client'
import { motion } from 'framer-motion'

export default function Stats() {
  const stats = ['500+ Clients', '1M+ Gifts', 'Pan India']
  return (
    <section className="px-6 md:px-12 py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {stats.map((s, i) => (
        <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          {s}
        </motion.div>
      ))}
    </section>
  )
}