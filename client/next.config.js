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
webpack: config => {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ["@svgr/webpack"]
    });
    return config;
  }
module.exports = nextConfig
