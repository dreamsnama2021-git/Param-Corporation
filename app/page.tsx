import Hero from "@/components/Hero";
import GiftsByIndustry from "@/components/GiftByIndustry";
import ProductSections from "@/components/GiftByCategories";
import NewArrivals from "@/components/NewArrivals";
import TagLine from "@/components/Tagline";
import SubCategory from "@/components/Category";
import Testimonial from "@/components/Testimonial";
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
      <SubCategory />
      <TrendingChits/>
      <ClientSection/>
      <CaseStudy/>
      <Countdown/>
      <Testimonial/>
    </main>
  );
}