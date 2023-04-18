/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'rb.gy',
        pathname: '**',
        port: '',
      }
    ]
  },

}

module.exports = nextConfig
