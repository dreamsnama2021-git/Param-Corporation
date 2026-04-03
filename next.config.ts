/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'www.bigimpex.com',
        pathname: '/wp-content/uploads/**',
      },
    ],
    // Optional: If you want to use quality 90, add it here:
    // qualities: [75, 90],
  },
}

module.exports = nextConfig
