/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  trailingSlash: true,
  reactStrictMode: false,
  eslint: {
    ignoreDuringBuilds: false,
  },
  images: {
    unoptimized: true,
    domains: ["images.unsplash.com"],
  },
  sassOptions: {
    includePaths: ["./styles"],
  },
};

module.exports = nextConfig;
