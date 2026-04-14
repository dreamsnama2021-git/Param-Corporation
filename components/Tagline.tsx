'use client';

import { motion } from "framer-motion";

const stats = [
  { value: "500+", label: "Corporate Clients" },
  { value: "12K", label: "Gifts Delivered" },
  { value: "98%", label: "Client Retention" },
  { value: "15+", label: "Years of Excellence" },
];

const TagLine = () => {
  return (
    <section className="ui-section py-16 md:py-24 xl:py-5">
      <div className="">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto "
        >
          <p className="text-primary text-sm uppercase tracking-[0.25em] mb-4 font-medium">
            Why Param Corporation
          </p>
          <h2 className="font-display text-3xl md:text-5xl font-semibold text-foreground leading-tight mb-6">
            Where Thoughtfulness Meets
            <span className="text-gradient-gold italic"> Prestige</span>
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            We don't just deliver gifts — we craft experiences. Every package is
            a reflection of your brand's commitment to excellence, tailored to
            resonate with your stakeholders.
          </p>
        </motion.div>

       
      </div>
    </section>
  );
};

export default TagLine;
