'use client';

const InstagramReels = () => {
  return (
    <section className="relative py-6 md:py-6 lg:py-8 xl:py-8 bg-gradient-to-b from-gray-50 to-white overflow-visible">
      {/* Header with requested styling - increased z-index */}
      <div className="relative max-w-[1500px] mx-auto px-3 sm:px-4 md:px-6 lg:px-8 xl:px-8 mb-6 sm:mb-8">
        <div className="text-center">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#1a1a1a] tracking-tight mb-2 sm:mb-3">
            Follow us on <span className="text-[#0093cb]">Instagram</span>
          </h2>
          <div className="flex justify-center">
            <div className="w-12 sm:w-14 md:w-16 h-1 bg-[#0093cb] rounded-full" />
          </div>
          <p className="text-gray-600 text-xs sm:text-xs md:text-sm lg:text-sm xl:text-base max-w-3xl mx-auto mt-4 sm:mt-5 md:mt-6">
            Explore our latest gifting ideas, branding projects, and creative campaigns
          </p>
        </div>
      </div>

      {/* Feed Container - 4 Column Grid Constrained Container */}
      <div className="relative w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className="elfsight-app-2cde112f-a39a-4777-a605-2cdbb7fee660"
          data-elfsight-app-lazy
        ></div>

        {/* Watermark Hide */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-72 h-15 bg-white pointer-events-none"></div>
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-72 h-12 bg-white pointer-events-none"></div>
      </div>

      {/* Global CSS to override Elfsight widget to 4 Columns Grid */}
      <style jsx global>{`
        .elfsight-app-2cde112f-a39a-4777-a605-2cdbb7fee660 {
          max-width: 1400px !important;
          margin: 0 auto !important;
        }
        @media (min-width: 1024px) {
          .elfsight-app-2cde112f-a39a-4777-a605-2cdbb7fee660 [class*="PostsGrid__Component"],
          .elfsight-app-2cde112f-a39a-4777-a605-2cdbb7fee660 [class*="e-gallery-posts-container"],
          .elfsight-app-2cde112f-a39a-4777-a605-2cdbb7fee660 [class*="e-gallery-container"],
          .elfsight-app-2cde112f-a39a-4777-a605-2cdbb7fee660 [class*="Layout__Component"] {
            display: grid !important;
            grid-template-columns: repeat(4, minmax(0, 1fr)) !important;
            gap: 20px !important;
          }
          .elfsight-app-2cde112f-a39a-4777-a605-2cdbb7fee660 [class*="e-gallery-post-item"],
          .elfsight-app-2cde112f-a39a-4777-a605-2cdbb7fee660 [class*="PostTile__Component"],
          .elfsight-app-2cde112f-a39a-4777-a605-2cdbb7fee660 [class*="Post__Component"] {
            width: 100% !important;
            max-width: 100% !important;
            flex: 0 0 100% !important;
          }
        }
      `}</style>
    </section>
  );
};

export default InstagramReels;