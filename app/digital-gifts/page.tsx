// app/digital-gifts/page.tsx
'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import {
  Gift,
  Smartphone,
  Palette,
  Zap,
  Globe,
  ShieldCheck,
  Mail,
  Sparkles,
  ArrowRight,
  Check,
} from 'lucide-react';

const benefits = [
  {
    icon: Smartphone,
    title: 'Instant Delivery',
    desc: 'Reach doctors anywhere in India within seconds via email, WhatsApp, or SMS. No logistics, no delays.',
    color: 'bg-blue-50 text-blue-600',
  },
  {
    icon: Palette,
    title: 'Therapy‑Aligned Personalization',
    desc: 'Every digital gift is designed around the therapy area – cardiology, diabetology, pediatrics, and more.',
    color: 'bg-emerald-50 text-emerald-600',
  },
  {
    icon: Zap,
    title: 'High Engagement',
    desc: 'Interactive elements like quizzes, animations, and doctor‑focused content boost recall and brand affinity.',
    color: 'bg-amber-50 text-amber-600',
  },
  {
    icon: Globe,
    title: 'Pan‑India Compliance',
    desc: 'All digital gifts adhere to MCI/NMC guidelines, ensuring your promotions remain ethical and safe.',
    color: 'bg-violet-50 text-violet-600',
  },
  {
    icon: ShieldCheck,
    title: 'Trackable Analytics',
    desc: 'Monitor open rates, click‑throughs, and engagement in real time to measure campaign ROI.',
    color: 'bg-rose-50 text-rose-600',
  },
  {
    icon: Mail,
    title: 'Multi‑Channel Integration',
    desc: 'Seamlessly integrate with your CRM, email systems, and MR reporting tools.',
    color: 'bg-cyan-50 text-cyan-600',
  },
];

const services = [
  {
    title: 'Digital Greeting Cards',
    desc: 'Customized e‑cards for festivals, Doctor’s Day, and anniversaries featuring therapy‑specific artwork and personalised messages.',
    image: 'https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=600&h=400&fit=crop',
  },
  {
    title: 'Interactive E‑Detailing',
    desc: 'Short, animated presentations that MRs can share during calls or virtual meetings, enriched with clinical data and brand stories.',
    image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=600&h=400&fit=crop',
  },
  {
    title: 'Virtual Gift Vouchers',
    desc: 'Amazon, MakeMyTrip, or brand‑specific vouchers sent digitally, redeemable instantly. Ideal for CMEs, surveys, and loyalty programmes.',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop',
  },
  {
    title: 'Digital Wellness Calendar',
    desc: 'A month‑wise health awareness calendar with therapy‑related facts, tips, and doctor engagement prompts.',
    image: 'https://images.unsplash.com/photo-1506784983877-45594efa4cbe?w=600&h=400&fit=crop',
  },
];

const steps = [
  {
    step: '01',
    title: 'Brief Us',
    desc: 'Tell us your therapy area, campaign goals, and preferred gift type.',
  },
  {
    step: '02',
    title: 'Design & Approve',
    desc: 'Receive a custom digital gift prototype within 48 hours.',
  },
  {
    step: '03',
    title: 'Deliver Instantly',
    desc: 'We handle distribution via email/SMS/WhatsApp – automated & trackable.',
  },
  {
    step: '04',
    title: 'Track Results',
    desc: 'Real‑time dashboard shows opens, clicks, and doctor engagement.',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function DigitalGiftsPage() {
  return (
    <div className="min-h-screen bg-white font-sans">
      {/* ── Hero ── */}
      <section className="relative bg-gradient-to-br from-[#0a1e2f] via-[#0b3c5d] to-[#0093cb]/80 text-white py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-10 w-72 h-72 bg-[#8bde7a] rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#00a65d] rounded-full blur-3xl" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-sm font-medium">
              <Sparkles size={16} /> The Future of Pharma Gifting
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight">
              Digital Gifts <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8bde7a] to-[#00a65d]">
                That Doctors Love
              </span>
            </h1>
            <p className="text-lg text-blue-100 max-w-xl">
              Instantly deliver personalised, therapy‑aligned gifts to healthcare professionals across India. Track engagement, stay compliant, and build lasting relationships – all without physical inventory.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/contact-us"
                className="inline-flex items-center gap-2 bg-[#8bde7a] text-gray-900 px-8 py-4 rounded-full font-bold hover:bg-[#00a65d] hover:text-white transition-all shadow-lg hover:shadow-[#8bde7a]/30"
              >
                Request a Demo <ArrowRight size={20} />
              </Link>
              <Link
                href="#services"
                className="inline-flex items-center gap-2 border border-white/30 text-white px-8 py-4 rounded-full font-semibold hover:bg-white/10 transition-all"
              >
                Explore Services
              </Link>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl border-4 border-white/20">
              <Image
                src="https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=800&h=600&fit=crop"
                alt="Digital Gifting Platform"
                fill
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-[#8bde7a] rounded-full blur-2xl opacity-40" />
          </motion.div>
        </div>
      </section>

      {/* ── Benefits ── */}
      <section className="py-16 lg:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#0093cb] mb-2">
              Why Digital?
            </p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900">
              Smarter, Faster & <span className="text-[#0093cb]">Compliant</span>
            </h2>
          </div>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {benefits.map((benefit, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                className="group bg-white p-8 rounded-2xl border border-slate-200 hover:shadow-xl hover:border-[#0093cb]/30 transition-all duration-300"
              >
                <div className={`w-12 h-12 ${benefit.color} rounded-xl flex items-center justify-center mb-5`}>
                  <benefit.icon size={24} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{benefit.title}</h3>
                <p className="text-slate-600 leading-relaxed">{benefit.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Services ── */}
      <section id="services" className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#0093cb] mb-2">
              Our Solutions
            </p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900">
              Digital Gifting <span className="text-[#0093cb]">Portfolio</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group bg-slate-50 rounded-2xl overflow-hidden border border-slate-200 hover:shadow-xl transition-all duration-300"
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <h3 className="absolute bottom-4 left-4 text-white text-xl font-bold">
                    {service.title}
                  </h3>
                </div>
                <div className="p-6">
                  <p className="text-slate-600 leading-relaxed">{service.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── How It Works ── */}
      <section className="py-16 lg:py-24 bg-slate-50 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#8bde7a]/20 rounded-full blur-3xl" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#0093cb] mb-2">
              Simple Process
            </p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900">
              How It <span className="text-[#0093cb]">Works</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {steps.map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="relative text-center"
              >
                <div className="w-16 h-16 bg-[#0093cb] text-white rounded-2xl flex items-center justify-center text-2xl font-bold mx-auto mb-4 shadow-lg">
                  {step.step}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">{step.title}</h3>
                <p className="text-slate-600">{step.desc}</p>
                {idx < steps.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-[#0093cb] to-transparent transform -translate-x-4" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Stats / Trust ── */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { number: '10,000+', label: 'Digital Gifts Sent' },
            { number: '95%', label: 'Open Rate' },
            { number: '48hrs', label: 'Turnaround Time' },
            { number: '100%', label: 'Compliance' },
          ].map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
            >
              <div className="text-4xl md:text-5xl font-extrabold text-[#0093cb]">{stat.number}</div>
              <div className="text-slate-500 mt-2 text-sm uppercase tracking-wider">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── Bottom CTA ── */}
      <section className="py-16 lg:py-24 bg-gradient-to-r from-[#0b3c5d] to-[#0093cb] text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
            Ready to Go Digital?
          </h2>
          <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
            Join leading pharma companies already using Param’s digital gifting platform to strengthen doctor relationships and drive campaign success.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact-us"
              className="inline-flex items-center gap-2 bg-[#8bde7a] text-gray-900 px-8 py-4 rounded-full font-bold hover:bg-white hover:text-[#0093cb] transition-all shadow-lg"
            >
              Get Started <ArrowRight size={20} />
            </Link>
            <Link
              href="/case-study"
              className="inline-flex items-center gap-2 border border-white/30 text-white px-8 py-4 rounded-full font-semibold hover:bg-white/10 transition-all"
            >
              View Success Stories
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}