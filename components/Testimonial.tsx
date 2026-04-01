// components/Testimonial.tsx
'use client'
import { motion } from 'framer-motion'

export default function Testimonial() {
  return (
    <section className="px-6 md:px-12 py-20">
      <motion.blockquote initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="font-display text-3xl">
        “A gifting experience our clients loved.”
      </motion.blockquote>
    </section>
  )
}
