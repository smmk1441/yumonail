/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  compiler: {
    // styledComponents の有効化
    styledComponents: true,
  },
}
module.exports = nextConfig
