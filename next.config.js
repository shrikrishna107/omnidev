/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    eslint: {
      ignoreDuringBuilds: true,
      ignore: ['path/to/file.js'],
    },
  };
  
  module.exports = nextConfig;