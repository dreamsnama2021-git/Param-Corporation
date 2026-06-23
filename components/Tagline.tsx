"use client";

import { motion } from "framer-motion";

const stats = [
  { value: "500+", label: "Corporate Clients" },
  { value: "12K", label: "Gifts Delivered" },
  { value: "98%", label: "Client Retention" },
  { value: "15+", label: "Years of Excellence" },
];

const TagLine = () => {
  return (
    <section className=" py-6 md:py-14 xl:py-10">
      <div className="">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto "
        >
          <h2 className="font-display capitalize text-3xl md:text-5xl font-semibold text-foreground leading-tight mb-6">
            Corporate Gifting Solutions for
            <span className="text-[#0093cb]"> Pharma Brands in India</span>
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            We help pharmaceutical companies build stronger doctor
            relationships, improve brand recall, and drive engagement through
            innovative, customized gifting solutions.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default TagLine;
