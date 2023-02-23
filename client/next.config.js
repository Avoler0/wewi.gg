/** @type {import('next').NextConfig} */
const nextConfig = {
  images:{
    domains:["localhost","ddragon.leagueoflegends.com","ddragon.canisback.com","openapi.naver.com"]
  },
  assetPrefix: '.',
  reactStrictMode: false,
  async redirects() {
    return [
      {
        source: '/community',
        destination: '/community/all',
        permanent: false,
      },
    ]
  },
  swcMinify: true,
  webpack: config => {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ["@svgr/webpack"]
    })
    return config
  }
};

module.exports = nextConfig
