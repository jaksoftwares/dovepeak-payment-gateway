/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['images.unsplash.com', 'via.placeholder.com'],
  },
  // Remove deprecated experimental.appDir
  swcMinify: false, // Disable SWC for WebContainer compatibility
  compiler: {
    // Use Babel instead of SWC for WebContainer
    removeConsole: process.env.NODE_ENV === 'production',
  },
}

module.exports = nextConfig