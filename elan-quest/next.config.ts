// next.config.js

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  typescript: {
    ignoreBuildErrors : true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  webpack(config: {
    module: { rules: { test: RegExp; issuer: RegExp; use: string[] }[] };
  }) {
    config.module.rules.push({
      test: /\.svg$/,
      issuer: /\.[jt]sx?$/,
      use: ["@svgr/webpack"],
    });
    return config;
  },
};

module.exports = nextConfig;
