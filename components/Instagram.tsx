'use client';

const InstagramReels = () => {
  return (
    <section className="relative py-6 md:py-6 lg:py-8 xl:py-8 bg-gradient-to-b from-gray-50 to-white overflow-visible">
      {/* Header with requested styling - increased z-index */}
      <div className="relative  max-w-[1500px] mx-auto px-3 sm:px-4 md:px-6 lg:px-8 xl:px-8 ">
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

      {/* Feed Container - lower z-index */}
      <div className="relative  max-w-[1500px] mx-auto px-3 sm:px-4 md:px-6 lg:px-8 xl:px-8">
        <div
          className="elfsight-app-2cde112f-a39a-4777-a605-2cdbb7fee660"
          data-elfsight-app-lazy
        ></div>

        {/* Watermark Hide */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-72 h-15 bg-white "></div>
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-72 h-12 bg-white "></div>
      </div>
    </section>
  );
};

export default InstagramReels;