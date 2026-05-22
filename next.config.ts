/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // Add supported qualities to fix the quality warning
    qualities: [100, 75],
    
    remotePatterns: [
      {
        protocol: 'http',
        hostname: '*',
        pathname: '/wp-content/uploads/**',
      },
      {
        protocol: 'https',
        hostname: '*',
      },
      // Add specific patterns for common image sources
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'www.adornscustomgifts.com',
      },
    ],
    
    // Optional: Set default quality
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    
    // Disable static image import warning if needed (optional)
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
}

module.exports = nextConfig