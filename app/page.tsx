// app/page.tsx
'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

const words = 'Corporate gifting that feels personal.'.split(' ')

export default function Home() {
  const [open, setOpen] = useState(false)

  return (
    <main className="overflow-x-hidden">
      {/* Navbar */}
      <nav className="flex justify-between items-center p-6 md:px-12">
        <h1 className="font-display text-xl">Elevate Gifts</h1>
        <button onClick={() => setOpen(!open)} className="md:hidden">
          ☰
        </button>
        <div className="hidden md:flex gap-8">
          <a href="#features">Solutions</a>
          <a href="#faq">FAQ</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      {open && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden flex flex-col gap-4 px-6 pb-6"
        >
          <a href="#features">Solutions</a>
          <a href="#faq">FAQ</a>
          <a href="#contact">Contact</a>
        </motion.div>
      )}

      {/* Hero */}
      <section className="px-6 md:px-12 py-20">
        <h2 className="font-display text-[clamp(2rem,5vw,5rem)] leading-tight">
          {words.map((word, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="inline-block mr-2"
            >
              {word}
            </motion.span>
          ))}
        </h2>
        <p className="mt-6 max-w-xl text-lg">
          From onboarding kits to festive hampers, we craft memorable gifting experiences that strengthen relationships and elevate your brand.
        </p>
        <motion.button
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          className="mt-8 px-6 py-3 border border-black"
        >
          Explore Catalog
        </motion.button>
      </section>

      {/* Stats */}
      <section className="px-6 md:px-12 py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {['500+ Clients', '1M+ Gifts Delivered', 'Pan India Reach'].map((stat, i) => (
          <motion.div
            key={i}
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 20 }}
            viewport={{ once: true }}
            className="text-2xl"
          >
            {stat}
          </motion.div>
        ))}
      </section>

      {/* Features */}
      <section id="features" className="px-6 md:px-12 py-20">
        <h3 className="font-display text-4xl mb-10">Our Solutions</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            'Custom Gift Kits',
            'Employee Welcome Boxes',
            'Festive Hampers',
            'Luxury Executive Gifts',
            'Eco-Friendly Gifting',
            'Bulk Order Management'
          ].map((item, i) => (
            <motion.div
              key={i}
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 30 }}
              viewport={{ once: true }}
              className="p-6 border border-black"
            >
              {item}
            </motion.div>
          ))}
        </div>
      </section>

      {/* Testimonial */}
      <section className="px-6 md:px-12 py-20">
        <motion.blockquote
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 20 }}
          viewport={{ once: true }}
          className="font-display text-3xl max-w-3xl"
        >
          “They turned our Diwali gifting into a premium experience our clients still talk about.”
        </motion.blockquote>
      </section>

      {/* FAQ */}
      <section id="faq" className="px-6 md:px-12 py-20">
        <h3 className="font-display text-3xl mb-8">FAQs</h3>
        {[
          'Do you handle bulk orders?',
          'Can we customize branding?',
          'Do you deliver across India?'
        ].map((q, i) => (
          <details key={i} className="mb-4 border-b border-black pb-4">
            <summary className="cursor-pointer">{q}</summary>
            <p className="mt-2 text-sm">
              Yes, we offer full customization and nationwide delivery with scalable operations.
            </p>
          </details>
        ))}
      </section>

      {/* Footer */}
      <footer id="contact" className="px-6 md:px-12 py-12 border-t border-black">
        <p>© 2026 Elevate Gifts</p>
      </footer>
    </main>
  )
}
