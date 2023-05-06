/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    SERVER_URL: process.env.SERVER_URL,
    MONGODB_URI: process.env.MONGODB_URI,
  },
};

module.exports = nextConfig;
