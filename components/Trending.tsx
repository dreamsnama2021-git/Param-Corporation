'use client';

import { motion } from "framer-motion";
import { ArrowRight, Star } from "lucide-react";

const deals = [
  {
    tag: "Best Seller",
    title: "Executive Leather Journal Set",
    originalPrice: "₹4,500",
    dealPrice: "₹3,200",
    savings: "29% OFF",
    minOrder: "50 units",
  },
  {
    tag: "New Arrival",
    title: "Premium Drinkware Collection",
    originalPrice: "₹2,800",
    dealPrice: "₹1,950",
    savings: "30% OFF",
    minOrder: "100 units",
  },
  {
    tag: "Trending",
    title: "Gourmet Diwali Hamper",
    originalPrice: "₹6,000",
    dealPrice: "₹4,500",
    savings: "25% OFF",
    minOrder: "25 units",
  },
  {
    tag: "Limited",
    title: "Tech Accessories Bundle",
    originalPrice: "₹3,500",
    dealPrice: "₹2,450",
    savings: "30% OFF",
    minOrder: "75 units",
  },
  {
    tag: "Popular",
    title: "Artisanal Tea & Snack Box",
    originalPrice: "₹2,200",
    dealPrice: "₹1,650",
    savings: "25% OFF",
    minOrder: "50 units",
  },
  {
    tag: "Corporate",
    title: "Branded Welcome Kit",
    originalPrice: "₹5,000",
    dealPrice: "₹3,750",
    savings: "25% OFF",
    minOrder: "100 units",
  },
];

const TrendingChits = () => {
  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-4"
        >
          <div>
            <p className="text-primary text-sm uppercase tracking-[0.25em] mb-3 font-medium">
              Trending Deals
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground">
              Bulk Order Specials
            </h2>
          </div>
          <a
            href="#collections"
            className="flex items-center gap-2 text-sm font-medium text-primary hover:text-gold-dark transition-colors group"
          >
            View All Deals
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {deals.map((deal, i) => (
            <motion.div
              key={deal.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="group relative p-6 bg-card rounded-sm border border-border hover:border-gold hover:shadow-lg transition-all duration-500 cursor-pointer"
            >
              {/* Tag */}
              <span className="inline-block px-3 py-1 text-[11px] uppercase tracking-wider font-semibold bg-gradient-gold text-primary-foreground rounded-sm mb-4">
                {deal.tag}
              </span>

              <h3 className="font-display text-lg font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                {deal.title}
              </h3>

              <div className="flex items-baseline gap-3 mb-2">
                <span className="font-display text-2xl font-bold text-foreground">
                  {deal.dealPrice}
                </span>
                <span className="text-sm text-muted-foreground line-through">
                  {deal.originalPrice}
                </span>
                <span className="text-xs font-semibold text-primary bg-primary/10 px-2 py-0.5 rounded-sm">
                  {deal.savings}
                </span>
              </div>

              <p className="text-xs text-muted-foreground">
                Min. order: {deal.minOrder}
              </p>

              <div className="flex items-center gap-1 mt-4">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} size={12} className="fill-gold text-gold" />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrendingChits;
