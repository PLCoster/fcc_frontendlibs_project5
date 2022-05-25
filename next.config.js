/** @type {import('next').NextConfig} */

// basePath and assetPrefix are needed for gh-pages deployment
// otherwise paths to assets are not set correctly

const nextConfig = {
  reactStrictMode: true,
  basePath: process.env.NEXT_PUBLIC_BASE_PATH || '',
  assetPrefix: process.env.NEXT_PUBLIC_BASE_PATH || '',
};

module.exports = nextConfig;
