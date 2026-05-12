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
      // Using oembed endpoint for clean media only
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
    <section className="w-full py-16 bg-gradient-to-br from-purple-50 via-pink-50 to-orange-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <InstagramLogoIcon className="w-8 h-8 text-pink-600" />
            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Follow Our Journey
            </h2>
          </div>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Discover the art of corporate gifting through our Instagram reels
          </p>
          <a
            href="https://www.instagram.com/paramcorporation_official"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 mt-4 text-pink-600 hover:text-pink-700 font-semibold transition-colors"
          >
            @paramcorporation_official
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>

        {/* Reels Grid - Clean Embeds without captions/likes */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {reels.map((reel) => (
            <div
              key={reel.id}
              className="relative group rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02]"
            >
              {/* Instagram Reel Iframe - Clean Version */}
              <div className="relative aspect-[9/16] bg-black">
                <iframe
                  src={`${reel.embedUrl}?hidecaption=true`}
                  className="w-full h-full"
                  frameBorder="0"
                  scrolling="no"
                  allowFullScreen
                  title={reel.title}
                />
              </div>

              {/* Hover Overlay with Play Button */}
              <a
                href={reel.reelUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center"
              >
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform group-hover:scale-110">
                  <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center">
                    <svg className="w-8 h-8 text-pink-600 ml-1" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z"/>
                    </svg>
                  </div>
                </div>
              </a>

              {/* Instagram Icon Badge */}
              <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="bg-white/90 backdrop-blur-sm rounded-full p-2">
                  <InstagramLogoIcon className="w-4 h-4 text-pink-600" />
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
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300"
          >
            <InstagramLogoIcon className="w-5 h-5" />
            Follow @paramcorporation_official
          </a>
        </div>
      </div>
    </section>
  );
};

export default InstagramReels;