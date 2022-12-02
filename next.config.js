/** @type {import('next').NextConfig} */
const nextConfig = {
  images:{
    domains:["localhost","ddragon.leagueoflegends.com","ddragon.canisback.com"]
  },
  reactStrictMode: false,
  swcMinify: true,
}

module.exports = nextConfig
