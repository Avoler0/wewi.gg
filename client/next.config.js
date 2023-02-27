/** @type {import('next').NextConfig} */
const nextConfig = {
  images:{
    domains:["localhost","35.79.79.134","ddragon.leagueoflegends.com","ddragon.canisback.com","openapi.naver.com"]
  },
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

};

module.exports = nextConfig
