const nextConfig = {
  reactStrictMode: true,
  swcMinify: false,
  images: {
    unoptimized: true, // Disable image optimization
    disableStaticImages: true, // Disable static image imports
  },
  async redirects() {
    return [
      { source: '/features', destination: '/', permanent: true },
      { source: '/faqs', destination: '/', permanent: true },
      { source: '/signup', destination: '/', permanent: true },
    ];
  },
};

module.exports = nextConfig;
