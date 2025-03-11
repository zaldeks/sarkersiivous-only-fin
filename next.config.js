/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    RESEND_API_KEY: process.env.RESEND_API_KEY,
  },
  async rewrites() {
    return [];
  },
  experimental: {
    serverActions: {
      allowedOrigins: ['localhost:3009']
    }
  },
  // Disable ESLint during production builds
  eslint: {
    // Don't run ESLint during builds to avoid deployment issues
    ignoreDuringBuilds: true,
  }
}

module.exports = nextConfig
