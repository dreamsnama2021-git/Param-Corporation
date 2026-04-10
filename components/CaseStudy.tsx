'use client';

import { useState } from "react";
import { motion } from "framer-motion";
import { Quote, ChevronLeft, ChevronRight, Star } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Anjali Mehta",
    role: "HR Director, TechFlow Solutions",
    content: "Param Corporation transformed our employee appreciation program. The personalized gifts arrived on time for our Diwali celebration, and the feedback from our team was overwhelmingly positive. Will definitely partner again!",
    rating: 5,
    avatar: "/",
  },
  {
    id: 2,
    name: "Rajiv Kapoor",
    role: "CEO, FinEdge Analytics",
    content: "We commissioned Param Corporation for our client gifting during our 10th anniversary. The bespoke wooden keepsakes with our company history etched on them were a huge hit. Several clients mentioned they'd keep it on their desk!",
    rating: 5,
    avatar: "/",
  },
  {
    id: 3,
    name: "Priya Sharma",
    role: "Marketing Head, Luxe Brands Inc.",
    content: "The festival hampers exceeded our expectations. Each box was meticulously curated with premium products and elegant packaging. Our customers appreciated the thoughtfulness, and it strengthened our brand perception significantly.",
    rating: 5,
    avatar: "/",
  },
];

const Testimonial = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p className="text-primary text-sm uppercase tracking-[0.25em] mb-3 font-medium">
            Client Voices
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground">
            What Our Clients Say
          </h2>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="relative bg-card rounded-sm border border-border p-8 md:p-12">
            <Quote className="absolute top-6 right-6 text-gold/20 w-16 h-16" />
            
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
            >
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                {testimonials[currentIndex].content}
              </p>
              
              <div className="flex items-center justify-center mb-2">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <Star key={i} size={20} className="fill-gold text-gold" />
                ))}
              </div>
              
              <div className="text-center">
                <h4 className="font-display text-xl font-semibold text-foreground">
                  {testimonials[currentIndex].name}
                </h4>
                <p className="text-muted-foreground">
                  {testimonials[currentIndex].role}
                </p>
              </div>
            </motion.div>
            
            <div className="flex justify-center mt-8 space-x-4">
              <button
                onClick={prevTestimonial}
                className="p-2 rounded-full bg-muted hover:bg-muted/80 transition-colors"
                aria-label="Previous testimonial"
              >
                <ChevronLeft size={24} className="text-foreground" />
              </button>
              <button
                onClick={nextTestimonial}
                className="p-2 rounded-full bg-muted hover:bg-muted/80 transition-colors"
                aria-label="Next testimonial"
              >
                <ChevronRight size={24} className="text-foreground" />
              </button>
            </div>
            
            <div className="flex justify-center mt-6 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full ${
                    index === currentIndex ? "bg-gold" : "bg-muted"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
