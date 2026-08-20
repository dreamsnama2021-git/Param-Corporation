// app/page.tsx
import HeroProductGridGapless from "@/components/HeroProductGridGapless";
import ProductShowcaseGrid from "@/components/ProductShowcaseGrid";
import FoundersMessage from "@/components/FoundersMessage";
import AboutUs from "@/components/AboutUs";
import ProductSections from "@/components/GiftByCategories";
import WhyChooseUs from "@/components/WhyChooseUs";
import AboutDesignProcess from "@/components/AboutDesignProcess";
import ClientSection from "@/components/Clientele";
import ClientTicker from "@/components/ClientTicker";
import CaseStudy from "@/components/CaseStudy";
import FastestGrowing from "@/components/FastGrowing";
import IndustriesWeServe from "@/components/IndustriesWeServe";
import CreativeStatsSection from "@/components/Counter";
import StatsBanner from "@/components/StatsBanner";
import InstagramReels from "@/components/Instagram";
import { TestimonialCardsVariant } from "@/components/Testimonial";
import PopupForm from "@/components/PopupForm";

export default function Page() {
  const POPUP_DELAY = 2 * 60 * 1000; // 2 minutes in milliseconds
  return (
    <main className="overflow-x-hidden">
      <HeroProductGridGapless />
      <ProductShowcaseGrid />
      <FoundersMessage />
      <AboutUs />
      <ProductSections />
      <WhyChooseUs />
      <AboutDesignProcess />
      <ClientTicker />
      <ClientSection />
      <CaseStudy />
      <FastestGrowing />
      <IndustriesWeServe />
      <CreativeStatsSection />
      <StatsBanner />
      <InstagramReels />
      <TestimonialCardsVariant />

      {/* ====================================================================
          📬 POPUP FORM
          ====================================================================
          - Appears after 2 minutes by default
          - Only shows once per session (uses sessionStorage)
          - Fully responsive with mobile-friendly design
          - Includes form validation, loading states, and success message
      ==================================================================== */}
      <PopupForm
        delay={POPUP_DELAY}
        title="Get In Touch"
        buttonText="Submit"
        formEndpoint="/api/contact"
      />
    </main>
  );
}
