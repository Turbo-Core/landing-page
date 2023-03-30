/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['picsum.photos']
  },
}

const withBundleAnalyzer = require('@next/bundle-analyzer')({
    enabled: true,
    openAnalyzer: false,
  })

module.exports = withBundleAnalyzer(nextConfig)
