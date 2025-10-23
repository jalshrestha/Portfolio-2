/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production'

const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  // Disable the development overlay
  devIndicators: false,
  // Configure for GitHub Pages only in production
  ...(isProd && {
    output: 'export',
    trailingSlash: true,
    basePath: '/Portfolio-2',
    assetPrefix: '/Portfolio-2/',
  }),
}

export default nextConfig
