'use client';
import { InstagramLogoIcon } from '@phosphor-icons/react';

const InstagramReels = () => {
  const reels = [
    {
      id: 1,
      title: "Luxury Gift Hampers",
      reelUrl: "https://www.instagram.com/reel/DYE4z25I96H/",
      embedUrl: "https://www.instagram.com/reel/DYE4z25I96H/embed/"
    },
    {
      id: 2,
      title: "Corporate Gift Boxes",
      reelUrl: "https://www.instagram.com/reel/DX_-qPmInVt/",
      embedUrl: "https://www.instagram.com/reel/DX_-qPmInVt/embed/"
    },
    {
      id: 3,
      title: "Personalized Gifts",
      reelUrl: "https://www.instagram.com/reel/DXOX15gkmbl/",
      embedUrl: "https://www.instagram.com/reel/DXOX15gkmbl/embed/"
    },
    {
      id: 4,
      title: "Eco-Friendly Packaging",
      reelUrl: "https://www.instagram.com/reel/DP3nypgEqbj/",
      embedUrl: "https://www.instagram.com/reel/DP3nypgEqbj/embed/"
    }
  ];

  return (
    <section className="w-full py-8 sm:py-10 md:py-12 lg:py-14 xl:py-16 bg-white">
      <div className="max-w-[1500px] mx-auto px-3 sm:px-4 md:px-6 lg:px-8 xl:px-8">
        {/* Header - Consistent Typography */}
        <div className="text-center mb-8 sm:mb-10 md:mb-12 lg:mb-14">
          <div className="flex items-center justify-center gap-1.5 sm:gap-2 mb-2 sm:mb-3">
            <InstagramLogoIcon className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-[var(--clr-primary)]" />
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-[var(--clr-accent)]">
              Our Journey
            </h2>
          </div>
          <p className="text-[11px] sm:text-xs md:text-sm text-[var(--clr-text-muted)] max-w-2xl mx-auto">
            Discover the art of corporate gifting through our Instagram.
          </p>
        </div>

        {/* Reels Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 sm:gap-3 md:gap-4 lg:gap-5">
          {reels.map((reel) => (
            <div
              key={reel.id}
              className="relative group rounded-lg sm:rounded-xl overflow-hidden shadow-sm sm:shadow-md hover:shadow-lg transition-all duration-300 hover:scale-[1.02]"
            >
              {/* Instagram Reel Iframe */}
              <div className="relative h-[40vh] sm:h-[45vh] md:h-[50vh] lg:h-[50vh] xl:h-[40vh] bg-black">
                <iframe
                  src={`${reel.embedUrl}?hidecaption=true&omitscript=true`}
                  className="w-full h-full"
                  frameBorder="0"
                  scrolling="no"
                  allowFullScreen
                  title={reel.title}
                  loading="lazy"
                />
              </div>

              {/* Instagram Icon Badge */}
              <div className="absolute top-1.5 sm:top-2 right-1.5 sm:right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="bg-white/95 backdrop-blur-sm rounded-full p-1 sm:p-1.5 shadow-lg">
                  <InstagramLogoIcon className="w-2.5 h-2.5 sm:w-3 sm:h-3" style={{ color: 'var(--clr-primary)' }} />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center mt-8 sm:mt-10 md:mt-12">
          <a
            href="https://www.instagram.com/paramcorporation_official"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 sm:gap-2 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full font-semibold text-xs sm:text-sm hover:shadow-lg transform hover:scale-105 transition-all duration-300"
            style={{ 
              backgroundColor: 'var(--clr-primary)',
              color: 'var(--clr-white)'
            }}
          >
            <InstagramLogoIcon className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            Follow Us
          </a>
        </div>
      </div>
    </section>
  );
};

export default InstagramReels;