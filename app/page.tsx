// app/page.tsx
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Stats from '@/components/Stats'
import Features from '@/components/Features'
import Testimonial from '@/components/Testimonial'
import FAQ from '@/components/FAQ'
import Footer from '@/components/Footer'

export default function Page() {
  return (
    <main className="overflow-x-hidden">
      <Navbar />
      <Hero />
      <Stats />
      <Features />
      <Testimonial />
      <FAQ />
      <Footer />
    </main>
  )
}