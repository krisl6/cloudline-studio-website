/** @type {import('next').NextConfig} */
const nextConfig = {
  // Served as a serverless Next.js app on Vercel (not a static export),
  // so API route handlers like /api/audit-request work.
  trailingSlash: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
    domains: ['images.unsplash.com', 'source.unsplash.com'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'kristinelingg.com',
      },
    ],
  },
  reactStrictMode: true,
}

export default nextConfig
