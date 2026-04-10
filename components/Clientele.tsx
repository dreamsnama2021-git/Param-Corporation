'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const ClientSection = () => {
  const clients = [
    {
      name: "Microsoft",
      logo: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
      category: "Technology"
    },
    {
      name: "Google",
      logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
      category: "Technology"
    },
    {
      name: "Amazon",
      logo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
      category: "E-commerce"
    },
    {
      name: "Netflix",
      logo: "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg",
      category: "Entertainment"
    },
    {
      name: "Starbucks",
      logo: "https://upload.wikimedia.org/wikipedia/en/d/d3/Starbucks_Corporation_Logo_2011.svg",
      category: "Food & Beverage"
    },
    {
      name: "Nike",
      logo: "https://upload.wikimedia.org/wikipedia/commons/a/a6/Logo_NIKE.svg",
      category: "Sportswear"
    },
    {
      name: "Salesforce",
      logo: "https://upload.wikimedia.org/wikipedia/en/3/32/Salesforce_logo.svg",
      category: "Technology"
    },
    {
      name: "Adobe",
      logo: "https://upload.wikimedia.org/wikipedia/commons/7/7b/Adobe_Systems_logo.svg",
      category: "Technology"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section className="py-16 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Trusted by Industry Leaders
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            We're proud to partner with some of the world's most innovative companies to create meaningful gifting experiences.
          </p>
        </div>

        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {clients.map((client, index) => (
            <motion.div
              key={index}
              className="flex justify-center items-center p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 group"
              variants={itemVariants}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <div className="relative w-32 h-16 grayscale group-hover:grayscale-0 transition-all duration-300">
                <Image
                  src={client.logo}
                  alt={client.name}
                  fill
                  className="object-contain"
                />
              </div>
            </motion.div>
          ))}
        </motion.div>

        <div className="text-center mt-12">
          <div className="bg-white rounded-2xl p-8 shadow-sm max-w-4xl mx-auto">
            <h3 className="text-2xl font-semibold text-slate-900 mb-4">
              Join Our Growing Community of Clients
            </h3>
            <p className="text-slate-600 mb-6">
              From startups to Fortune 500 companies, we help businesses of all sizes create memorable gifting experiences.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-6">
              {Array.from(new Set(clients.map(client => client.category))).map((category, index) => (
                <span key={index} className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium">
                  {category}
                </span>
              ))}
            </div>
            <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors">
              Become a Client
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientSection;
