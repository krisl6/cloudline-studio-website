/** @type {import('next').NextConfig} */
const nextConfig = {
  // Remove 'output: export' to enable server-side rendering
  trailingSlash: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    domains: ['images.unsplash.com', 'source.unsplash.com'],
    formats: ['image/avif', 'image/webp'],
  },
  // Enable React Strict Mode
  reactStrictMode: true,
  // Enable server components
  experimental: {
    serverActions: true,
  },
}

export default nextConfig
