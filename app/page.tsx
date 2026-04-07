import Hero from "@/components/Hero";
import GiftsByIndustry from "@/components/GiftByIndustry";
import ProductSections from "@/components/GiftByCategories";
import NewArrivals from "@/components/NewArrivals";

export default function Page() {
  return (
    <main className="overflow-x-hidden">
      <Hero />
      <GiftsByIndustry />
      <ProductSections />
      <NewArrivals />
    </main>
  );
}