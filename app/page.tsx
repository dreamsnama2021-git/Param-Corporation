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
import PopupForm from "@/components/PopupForm";

export default function Page() {
  return (
    <main className="overflow-x-hidden">
      <Hero />
      <AboutUs />
      <ProductSections />
      <ClientSection />
      <CaseStudy />
      <FastestGrowing />
      <CreativeStatsSection />
      <InstagramReels />
      <TestimonialCardsVariant />

      {/* ====================================================================
          📬 POPUP FORM
          ====================================================================
          - Appears after 2.5 seconds (2500ms) by default
          - Only shows once per session (uses sessionStorage)
          - Fully responsive with mobile-friendly design
          - Includes form validation, loading states, and success message
          
          CUSTOMIZATION OPTIONS:
          -----------------------
          delay={2000}          // Show after 2 seconds
          delay={3000}          // Show after 3 seconds
          delay={5000}          // Show after 5 seconds
          title="Contact Us"    // Custom title
          subtitle="..."        // Custom subtitle
          buttonText="Send"     // Custom button text
          formEndpoint="..."    // Your API endpoint
      ==================================================================== */}
      <PopupForm
        delay={2500}
        title="Get In Touch"
        subtitle="Fill out the form and our team will get back to you within 24 hours."
        buttonText="Submit"
        formEndpoint="/api/contact"
      />
    </main>
  );
}