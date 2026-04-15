// app/page.tsx
import Hero from "@/components/Hero";
import GiftsByIndustry from "@/components/GiftByIndustry";
import ProductSections from "@/components/GiftByCategories";
import NewArrivals from "@/components/NewArrivals";
import TagLine from "@/components/Tagline";
import SubCategory from "@/components/Category";
import Testimonial, { TestimonialCardsVariant } from "@/components/Testimonial"; // Import both
import TrendingChits from "@/components/Trending";
import Countdown from "@/components/Counter";
import CaseStudy from "@/components/CaseStudy";
import ClientSection from "@/components/Clientele";

export default function Page() {
  return (
    <main className="overflow-x-hidden">
      <Hero />
      <TagLine />
      <ProductSections />
      <ClientSection/>
      <CaseStudy/>
      <Countdown/>
      {/* <SubCategory /> */}
      <TrendingChits/>
      
      {/* Original Grid Testimonials */}
      <Testimonial/>
      
      {/* New Editorial Variant */}
      <TestimonialCardsVariant/>
    </main>
  );
}
