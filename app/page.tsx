// app/page.tsx
import Hero from "@/components/Hero";
import GiftsByIndustry from "@/components/GiftByIndustry";
import ProductSections from "@/components/GiftByCategories";
import NewArrivals from "@/components/NewArrivals";
import TagLine from "@/components/Tagline";
import SubCategory from "@/components/Category";
import Testimonial, { TestimonialCardsVariant, TestimonialCardsVariant2 } from "@/components/Testimonial";
import TrendingChits from "@/components/Trending";
import CaseStudy from "@/components/CaseStudy";
import ClientSection from "@/components/Clientele";
import CreativeStatsSection from "@/components/Counter";
import BackgroundDecoration from "@/components/BackgroundDecoration";

export default function Page() {
  return (
    <main className="overflow-x-hidden">
      <BackgroundDecoration />
      <Hero />
      <TagLine />
      <ProductSections />
      <ClientSection/>
      <CaseStudy/>
      <CreativeStatsSection/>
      {/* <SubCategory /> */}
      {/* <TrendingChits/> */}
      
      {/* Original Grid Testimonials */}
      {/* <Testimonial/> */}
      
      {/* New Editorial Variant */}
      <TestimonialCardsVariant2/>
      <TestimonialCardsVariant/>
    </main>
  );
}
