// app/page.tsx
import Hero from "@/components/Hero";
import ProductSections from "@/components/GiftByCategories";
import SubCategory from "@/components/Category";
import Testimonial, { TestimonialCardsVariant } from "@/components/Testimonial";
import CaseStudy from "@/components/CaseStudy";
import ClientSection from "@/components/Clientele";
import CreativeStatsSection from "@/components/Counter";
import AboutUs from "@/components/AboutUs";
import FastestGrowing from "@/components/FastGrowing";
import InstagramReels from "@/components/Instagram";

export default function Page() {
  return (
    <main className="overflow-x-hidden">
      {/* <BackgroundDecoration /> */}
      <Hero />
      <AboutUs />
      {/* <TagLine /> */}
      <ProductSections />
      <ClientSection/>
      <CaseStudy/>
      <FastestGrowing/>
      <CreativeStatsSection/>
      <InstagramReels />
      {/* <SubCategory /> */}
      {/* <TrendingChits/> */}
      
      {/* Original Grid Testimonials */}
      {/* <Testimonial/> */}
      
      {/* New Editorial Variant */}
      <TestimonialCardsVariant/>
      {/* <TestimonialCardsVariant/> */}
    </main>
  );
}
