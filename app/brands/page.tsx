'use client';
import React from 'react';
import Link from 'next/link';
import { Home } from 'lucide-react';

// Brand data - Replace with actual brand logo URLs
const brands = [
  { id: 1, name: 'AccuSure', logo: 'https://www.bigimpex.com/wp-content/uploads/2024/brands/accusure.png' },
  { id: 2, name: 'Adidas', logo: 'https://www.bigimpex.com/wp-content/uploads/2024/brands/adidas.png' },
  { id: 3, name: 'Aeropostale', logo: 'https://www.bigimpex.com/wp-content/uploads/2024/brands/aeropostale.png' },
  { id: 4, name: 'Alpha', logo: 'https://www.bigimpex.com/wp-content/uploads/2024/brands/alpha.png' },
  { id: 5, name: 'Amazon', logo: 'https://www.bigimpex.com/wp-content/uploads/2024/brands/amazon.png' },
  { id: 6, name: 'Ambrane', logo: 'https://www.bigimpex.com/wp-content/uploads/2024/brands/ambrane.png' },
  { id: 7, name: 'American Tourister', logo: 'https://www.bigimpex.com/wp-content/uploads/2024/brands/american-tourister.png' },
  { id: 8, name: 'ARU', logo: 'https://www.bigimpex.com/wp-content/uploads/2024/brands/aru.png' },
  { id: 9, name: 'Asian Aura', logo: 'https://www.bigimpex.com/wp-content/uploads/2024/brands/asian-aura.png' },
  { id: 10, name: 'Asics', logo: 'https://www.bigimpex.com/wp-content/uploads/2024/brands/asics.png' },
  { id: 11, name: 'Astonish', logo: 'https://www.bigimpex.com/wp-content/uploads/2024/brands/astonish.png' },
  { id: 12, name: 'Baggit', logo: 'https://www.bigimpex.com/wp-content/uploads/2024/brands/baggit.png' },
  { id: 13, name: 'Bajaj', logo: 'https://www.bigimpex.com/wp-content/uploads/2024/brands/bajaj.png' },
  { id: 14, name: 'Beverly Hills Polo Club', logo: 'https://www.bigimpex.com/wp-content/uploads/2024/brands/beverly-hills.png' },
  { id: 15, name: 'Biotique', logo: 'https://www.bigimpex.com/wp-content/uploads/2024/brands/biotique.png' },
  { id: 16, name: 'Blaupunkt', logo: 'https://www.bigimpex.com/wp-content/uploads/2024/brands/blaupunkt.png' },
  { id: 17, name: 'BoAt', logo: 'https://www.bigimpex.com/wp-content/uploads/2024/brands/boat.png' },
  { id: 18, name: 'Borosil', logo: 'https://www.bigimpex.com/wp-content/uploads/2024/brands/borosil.png' },
  { id: 19, name: 'Bosch', logo: 'https://www.bigimpex.com/wp-content/uploads/2024/brands/bosch.png' },
  { id: 20, name: 'Bryan & Candy', logo: 'https://www.bigimpex.com/wp-content/uploads/2024/brands/bryan-candy.png' },
  { id: 21, name: 'Bose', logo: 'https://www.bigimpex.com/wp-content/uploads/2024/brands/bose.png' },
  { id: 22, name: 'Cafe Coffee Day', logo: 'https://www.bigimpex.com/wp-content/uploads/2024/brands/ccd.png' },
  { id: 23, name: 'Cantabil', logo: 'https://www.bigimpex.com/wp-content/uploads/2024/brands/cantabil.png' },
  { id: 24, name: 'Carriall', logo: 'https://www.bigimpex.com/wp-content/uploads/2024/brands/carriall.png' },
  { id: 25, name: 'Cello', logo: 'https://www.bigimpex.com/wp-content/uploads/2024/brands/cello.png' },
  { id: 26, name: 'Clensta', logo: 'https://www.bigimpex.com/wp-content/uploads/2024/brands/clensta.png' },
  { id: 27, name: 'Cookie Man', logo: 'https://www.bigimpex.com/wp-content/uploads/2024/brands/cookie-man.png' },
  { id: 28, name: 'DeepRoot', logo: 'https://www.bigimpex.com/wp-content/uploads/2024/brands/deeproot.png' },
  { id: 29, name: 'Delsey', logo: 'https://www.bigimpex.com/wp-content/uploads/2024/brands/delsey.png' },
  { id: 30, name: 'Dettol', logo: 'https://www.bigimpex.com/wp-content/uploads/2024/brands/dettol.png' },
  { id: 31, name: 'Donato', logo: 'https://www.bigimpex.com/wp-content/uploads/2024/brands/donato.png' },
  { id: 32, name: 'Easy Care', logo: 'https://www.bigimpex.com/wp-content/uploads/2024/brands/easy-care.png' },
  { id: 33, name: 'Samsung', logo: 'https://www.bigimpex.com/wp-content/uploads/2024/brands/samsung.png' },
  { id: 34, name: 'Saregama', logo: 'https://www.bigimpex.com/wp-content/uploads/2024/brands/saregama.png' },
  { id: 35, name: 'Shourya', logo: 'https://www.bigimpex.com/wp-content/uploads/2024/brands/shourya.png' },
  { id: 36, name: 'Skechers', logo: 'https://www.bigimpex.com/wp-content/uploads/2024/brands/skechers.png' },
  { id: 37, name: 'Sony', logo: 'https://www.bigimpex.com/wp-content/uploads/2024/brands/sony.png' },
  { id: 38, name: 'Spykar', logo: 'https://www.bigimpex.com/wp-content/uploads/2024/brands/spykar.png' },
  { id: 39, name: 'The Body Shop', logo: 'https://www.bigimpex.com/wp-content/uploads/2024/brands/body-shop.png' },
  { id: 40, name: 'Super', logo: 'https://www.bigimpex.com/wp-content/uploads/2024/brands/super.png' },
  { id: 41, name: 'Swayam', logo: 'https://www.bigimpex.com/wp-content/uploads/2024/brands/swayam.png' },
  { id: 42, name: 'Throw', logo: 'https://www.bigimpex.com/wp-content/uploads/2024/brands/throw.png' },
  { id: 43, name: 'Titan', logo: 'https://www.bigimpex.com/wp-content/uploads/2024/brands/titan.png' },
  { id: 44, name: 'Skinn', logo: 'https://www.bigimpex.com/wp-content/uploads/2024/brands/skinn.png' },
  { id: 45, name: 'Trident', logo: 'https://www.bigimpex.com/wp-content/uploads/2024/brands/trident.png' },
  { id: 46, name: 'Trovo', logo: 'https://www.bigimpex.com/wp-content/uploads/2024/brands/trovo.png' },
  { id: 47, name: 'Tupperware', logo: 'https://www.bigimpex.com/wp-content/uploads/2024/brands/tupperware.png' },
  { id: 48, name: 'Usha', logo: 'https://www.bigimpex.com/wp-content/uploads/2024/brands/usha.png' },
  { id: 49, name: 'VAA', logo: 'https://www.bigimpex.com/wp-content/uploads/2024/brands/vaa.png' },
  { id: 50, name: 'VIP', logo: 'https://www.bigimpex.com/wp-content/uploads/2024/brands/vip.png' },
  { id: 51, name: 'Viroproof', logo: 'https://www.bigimpex.com/wp-content/uploads/2024/brands/viroproof.png' },
  { id: 52, name: 'Wildcraft', logo: 'https://www.bigimpex.com/wp-content/uploads/2024/brands/wildcraft.png' },
  { id: 53, name: 'Zeel', logo: 'https://www.bigimpex.com/wp-content/uploads/2024/brands/zeel.png' },
  { id: 54, name: 'Zeiss', logo: 'https://www.bigimpex.com/wp-content/uploads/2024/brands/zeiss.png' },
  { id: 55, name: 'Freshengo', logo: 'https://www.bigimpex.com/wp-content/uploads/2024/brands/freshengo.png' },
  { id: 56, name: 'Fujifilm', logo: 'https://www.bigimpex.com/wp-content/uploads/2024/brands/fujifilm.png' },
];

export default function BrandsPage() {
  return (
    <div className="min-h-screen bg-white font-sans">
      {/* Hero Section - Aligned Bottom */}
      <section className="bg-[#1a1a1a] text-white relative min-h-[160px] flex items-end">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">Brands</h1>
          <div className="flex items-center gap-2 text-sm text-gray-400">
            <Link href="/" className="hover:text-white flex items-center gap-1">
              <Home className="w-3 h-3" /> Home
            </Link>
            <span>»</span>
            <span className="text-[var(--clr-primary)]">Brands</span>
          </div>
        </div>
      </section>

      {/* Brands Grid Section */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {brands.map((brand) => (
              <div
                key={brand.id}
                className="bg-white border border-gray-200 rounded-lg p-6 md:p-8 flex items-center justify-center hover:shadow-lg hover:border-[var(--clr-primary)]/30 transition-all duration-300 group cursor-pointer"
              >
                <div className="relative w-full h-12 md:h-16 flex items-center justify-center">
                  {/* If you have actual logo images, use Image component */}
                  <img
                    src={brand.logo}
                    alt={brand.name}
                    className="max-h-full max-w-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
                    onError={(e) => {
                      // Fallback to text if image fails
                      e.currentTarget.style.display = 'none';
                      e.currentTarget.parentElement!.innerHTML = `<span class="font-bold text-gray-800 text-sm md:text-base">${brand.name}</span>`;
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enquiry Button Section */}
      <section className="pb-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 flex justify-center">
          <Link
            href="/contact-us"
            className="bg-[var(--clr-primary)] hover:bg-[var(--clr-secondary)] text-white px-8 py-3 rounded-md font-medium transition-colors shadow-md hover:shadow-lg text-sm tracking-wide"
          >
            Enquiry Here
          </Link>
        </div>
      </section>
    </div>
  );
}
