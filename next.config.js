const nextConfig = {
  reactStrictMode: true,
  swcMinify: false,
  images: {
    unoptimized: true, // Disable image optimization
    disableStaticImages: true, // Disable static image imports
  },
};

module.exports = nextConfig;
