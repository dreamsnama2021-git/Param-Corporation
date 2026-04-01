// components/Navbar.tsx
'use client'
import { useState } from 'react'
import { motion } from 'framer-motion'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <div className="hidden md:flex justify-between px-12 py-2 text-sm border-b">
        <div className="flex gap-6">
          <span>sales@elevategifts.com</span>
          <span>+91 98765 43210</span>
        </div>
        <div className="flex gap-4">
          <span>FB</span>
          <span>IG</span>
        </div>
      </div>

      <nav className="flex justify-between items-center px-6 md:px-12 py-4 bg-white/80 backdrop-blur sticky top-0 z-50">
        <h1 className="font-display text-2xl">Elevate Gifts</h1>

        <div className="hidden md:flex gap-8">
          <a href="#">About</a>
          <a href="#">Products</a>
          <a href="#">Brands</a>
          <a href="#">Contact</a>
        </div>

        <button onClick={() => setOpen(!open)} className="md:hidden">☰</button>
      </nav>

      {open && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden flex flex-col gap-4 px-6 py-6 bg-white"
        >
          <a href="#">About</a>
          <a href="#">Products</a>
          <a href="#">Brands</a>
          <a href="#">Contact</a>
        </motion.div>
      )}
    </>
  )
}