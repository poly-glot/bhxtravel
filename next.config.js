const path = require('path')

module.exports = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'src', 'styles')],
  },
  images: {
    domains: ['cdn.builder.io'],
  },
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'Content-Security-Policy',
            value: 'frame-ancestors https://*.builder.io https://builder.io',
          },
        ],
      },
    ]
  },
  env: {
    BUILDER_PUBLIC_KEY: process.env.NEXT_PUBLIC_BUILDER_ID,
  },
}
