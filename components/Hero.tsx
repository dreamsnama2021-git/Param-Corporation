// components/Hero.tsx
'use client'
import { motion } from 'framer-motion'

const words = 'Corporate gifting that feels premium.'.split(' ')

export default function Hero() {
  return (
    <section className="px-6 md:px-12 py-24 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
      <div>
        <h2 className="font-display text-[clamp(2rem,5vw,5rem)]">
          {words.map((word, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.08 }}
              viewport={{ once: true }}
              className="inline-block mr-2"
            >
              {word}
            </motion.span>
          ))}
        </h2>

        <p className="mt-6 max-w-xl">
          Curated corporate gifts that build relationships and elevate your brand presence.
        </p>
      </div>

      <motion.img
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        src="https://images.unsplash.com/photo-1607083206968-13611e3d76db"
        className="w-full h-[400px] object-cover"
      />
    </section>
  )
}
