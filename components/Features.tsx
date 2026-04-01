// components/Features.tsx
'use client'
import { motion } from 'framer-motion'

export default function Features() {
  const items = ['Custom Kits', 'Welcome Boxes', 'Festive Hampers', 'Luxury Gifts', 'Eco Gifts', 'Bulk Orders']
  return (
    <section className="px-6 md:px-12 py-20">
      <h3 className="font-display text-4xl mb-10">Solutions</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((item, i) => (
          <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="p-6 border">
            {item}
          </motion.div>
        ))}
      </div>
    </section>
  )
}