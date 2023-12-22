/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['gorillaz.local'],
      },
      remotePatterns: {
        protocol: 'http',
        hostname: 'localhost'
      }
}

module.exports = nextConfig
