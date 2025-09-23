/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',   // tells Next.js to generate static export
  images: {
    unoptimized: true // needed if using <Image> in static mode
  }
}

module.exports = nextConfig
