'use client';
import { ExternalLink } from 'lucide-react';
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
    <section className="w-full py-10 sm:py-12 md:py-14 lg:py-16 bg-[var(--clr-white)]">
      <div className="max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-10 md:mb-12">
          <div className="flex items-center justify-center gap-2 sm:gap-3 mb-3 sm:mb-4">
            <InstagramLogoIcon className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-[var(--clr-primary)]" />
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold" style={{ color: 'var(--clr-accent)' }}>
               Our Journey
            </h2>
          </div>
          <p className="text-[var(--clr-text-muted)] text-sm sm:text-base md:text-lg max-w-2xl mx-auto">
            Discover the art of corporate gifting through our Instagram.
          </p>
          
        </div>

        {/* Reels Grid - Clean Embeds without captions/likes */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
          {reels.map((reel) => (
            <div
              key={reel.id}
              className="relative group rounded-xl sm:rounded-2xl overflow-hidden shadow-md sm:shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02]"
            >
              {/* Instagram Reel Iframe - Clean Version with minimal UI */}
              <div className="relative h-[50vh] sm:h-[60vh] md:h-[65vh] lg:h-[75vh] 2xl:h-[40vh] bg-black">
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
              <div className="absolute top-2 sm:top-3 right-2 sm:right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="bg-white/95 backdrop-blur-sm rounded-full p-1.5 sm:p-2 shadow-lg">
                  <InstagramLogoIcon className="w-3 h-3 sm:w-4 sm:h-4" style={{ color: 'var(--clr-primary)' }} />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center mt-8 sm:mt-10">
          <a
            href="https://www.instagram.com/paramcorporation_official"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full font-semibold text-sm sm:text-base hover:shadow-lg transform hover:scale-105 transition-all duration-300"
            style={{ 
              backgroundColor: 'var(--clr-primary)',
              color: 'var(--clr-white)'
            }}
          >
            <InstagramLogoIcon className="w-4 h-4 sm:w-5 sm:h-5" />
            Follow Us
          </a>
        </div>
      </div>
    </section>
  );
};

export default InstagramReels;