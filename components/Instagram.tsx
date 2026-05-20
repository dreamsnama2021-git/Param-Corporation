// components/InstagramReels.jsx
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
    <section className="w-full py-16 bg-[var(--clr-white)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <InstagramLogoIcon className="w-8 h-8 text-[var(--clr-primary)]" />
            <h2 className="text-3xl md:text-4xl font-bold" style={{ color: 'var(--clr-accent)' }}>
               Our Journey
            </h2>
          </div>
          <p className="text-[var(--clr-text-muted)] text-lg max-w-2xl mx-auto">
            Discover the art of corporate gifting through our Instagram.
          </p>
          
        </div>

        {/* Reels Grid - Clean Embeds without captions/likes */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {reels.map((reel) => (
            <div
              key={reel.id}
              className="relative group rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02]"
            >
              {/* Instagram Reel Iframe - Clean Version with minimal UI */}
              <div className="relative lg:h-[75vh] 2xl:h-[40vh] bg-black">
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

              {/* Custom Instagram-style Overlay with Brand Colors */}
              {/* <a
                href={reel.reelUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 flex items-center justify-center"
              >
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform group-hover:scale-110">
                  <div className="w-16 h-16 bg-white/95 rounded-full flex items-center justify-center shadow-xl">
                    <svg className="w-8 h-8 ml-1" fill="currentColor" viewBox="0 0 24 24" style={{ color: 'var(--clr-primary)' }}>
                      <path d="M8 5v14l11-7z"/>
                    </svg>
                  </div>
                </div>
              </a> */}

              {/* Instagram Icon Badge */}
              <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="bg-white/95 backdrop-blur-sm rounded-full p-2 shadow-lg">
                  <InstagramLogoIcon className="w-4 h-4" style={{ color: 'var(--clr-primary)' }} />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center mt-10">
          <a
            href="https://www.instagram.com/paramcorporation_official"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300"
            style={{ 
              backgroundColor: 'var(--clr-primary)',
              color: 'var(--clr-white)'
            }}
          >
            <InstagramLogoIcon className="w-5 h-5" />
            Follow Us
          </a>
        </div>
      </div>
    </section>
  );
};

export default InstagramReels;