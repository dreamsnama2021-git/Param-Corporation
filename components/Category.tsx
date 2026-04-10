'use client';

import { motion } from "framer-motion";
import { Gift, Award, Briefcase, Heart } from "lucide-react";

const categories = [
  {
    icon: Gift,
    title: "Festival Hampers",
    description: "Diwali, Christmas & New Year collections curated with premium brands and artisanal touches.",
  },
  {
    icon: Award,
    title: "Employee Recognition",
    description: "Milestone awards, onboarding kits, and appreciation gifts that build team loyalty.",
  },
  {
    icon: Briefcase,
    title: "Client Relations",
    description: "Bespoke gifts for key accounts, deal closures, and partnership celebrations.",
  },
  {
    icon: Heart,
    title: "Wellness & Lifestyle",
    description: "Self-care kits, gourmet selections, and lifestyle accessories for modern professionals.",
  },
];

const SubCategory = () => {
  return (
    <section id="collections" className="py-20 md:py-28 bg-card">
      <div className="container mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <p className="text-primary text-sm uppercase tracking-[0.25em] mb-3 font-medium">
            Our Categories
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground">
            Gifting for Every Occasion
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group p-8 bg-background rounded-sm border border-border hover:border-gold transition-colors duration-500 cursor-pointer"
            >
              <div className="w-12 h-12 rounded-sm bg-gradient-gold flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                <cat.icon size={22} className="text-primary-foreground" />
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                {cat.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {cat.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SubCategory;
