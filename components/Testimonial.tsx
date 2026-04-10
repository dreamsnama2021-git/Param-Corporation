'use client';

import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote:
      "Param Corporation transformed our annual gifting program. Their attention to detail and ability to customize at scale is unmatched in the industry.",
    name: "Rajesh Menon",
    role: "VP of Human Resources",
    company: "Tata Consultancy Services",
  },
  {
    quote:
      "We've been working with Param for 5 years now. They handle Diwali gifts for our 3,000+ employees every year without a single hiccup. True professionals.",
    name: "Sneha Kapoor",
    role: "Head of Procurement",
    company: "Infosys BPM",
  },
  {
    quote:
      "The quality of their curated hampers helped us strengthen our relationship with key clients. It's not just a gift — it's a statement.",
    name: "Arjun Patel",
    role: "Business Development Director",
    company: "Wipro Limited",
  },
];

const Testimonial = () => {
  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <p className="text-primary text-sm uppercase tracking-[0.25em] mb-3 font-medium">
            Testimonials
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground">
            Trusted by Industry Leaders
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="relative p-8 bg-card rounded-sm border border-border"
            >
              <Quote size={28} className="text-gold/30 mb-4" />
              <p className="text-foreground/80 leading-relaxed mb-8 text-[15px]">
                "{t.quote}"
              </p>
              <div className="border-t border-gold pt-4">
                <p className="font-display text-lg font-semibold text-foreground">
                  {t.name}
                </p>
                <p className="text-muted-foreground text-sm">{t.role}</p>
                <p className="text-primary text-xs font-medium mt-1">{t.company}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
