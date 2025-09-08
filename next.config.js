const nextConfig = {
  reactStrictMode: true,
  swcMinify: false,
  images: {
    unoptimized: true, // Disable image optimization
    disableStaticImages: true, // Disable static image imports
  },
  async headers() {
    return [
      {
        source: '/:all*(js|css)',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' },
        ],
      },
      {
        source: '/:all*(woff|woff2|ttf|otf)',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' },
        ],
      },
      {
        source: '/:all*(png|jpg|jpeg|svg|webp|avif)',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' },
        ],
      },
    ];
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
