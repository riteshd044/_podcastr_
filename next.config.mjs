/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'fastidious-elk-268.convex.cloud'
      },
      {
        protocol: 'https',
        hostname: 'lovely-flamingo-139.convex.cloud'
      },
      {
        protocol: 'https',
        hostname: 'sleek-capybara-771.convex.cloud'
      },
      {
        protocol: 'https',
        hostname: 'img.clerk.com'
      },
    ]
  },
  async rewrites() {
    return [
      {
        source: '/api/elevenlabs',
        destination: 'https://podcastr-sage-three.vercel.app/api/elevenlabs' // or ElevenLabs API endpoint
      }
    ]
  }
};

export default nextConfig;
