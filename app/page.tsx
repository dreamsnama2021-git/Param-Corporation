// app/page.tsx
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Features from '@/components/Features'
import Testimonial from '@/components/Testimonial'
import FAQ from '@/components/FAQ'
import Footer from '@/components/Footer'
import GiftsByIndustry from '@/components/GiftByIndustry'
import ProductSections from '@/components/GiftByCategories'
import NewArrivals from '@/components/NewArrivals'

export default function Page() {
  return (
    <main className="overflow-x-hidden">
      <Navbar />
      <Hero />
      <GiftsByIndustry/>
      <ProductSections/>
      <NewArrivals />
      <Footer />
    </main>
  )
}