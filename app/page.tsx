// app/page.tsx
import Hero from '@/components/Hero'
import Features from '@/components/Features'
import Testimonial from '@/components/Testimonial'
import FAQ from '@/components/FAQ'
import GiftsByIndustry from '@/components/GiftByIndustry'
import ProductSections from '@/components/GiftByCategories'
import NewArrivals from '@/components/NewArrivals'

export default function Page() {
  return (
    <main className="overflow-x-hidden">
      <Hero />
      <GiftsByIndustry/>
      <ProductSections/>
      <NewArrivals />
     
    </main>
  )
}