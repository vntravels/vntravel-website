const path = require('path');

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, '@/styles')],
  },
  swcMinify: true,
  compiler: {
    // Enables the styled-components SWC transform
    styledComponents: true,
  },
  env: {
    API_ENDPOINT_URL: process.env.API_ENDPOINT_URL,
    GOOGLE_CLIENT_ID: process.env.GOOGLE_CLIENT_ID,
    GOOGLE_AUTH_URL: process.env.GOOGLE_AUTH_URL,
  },
  productionBrowserSourceMaps: true,
};

module.exports = nextConfig;
