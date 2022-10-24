/** @type {import('next').NextConfig} */
const nextConfig = {
  images:{
    domains:["localhost","ddragon.leagueoflegends.com","ddragon.canisback.com"]
  },
  reactStrictMode: true,
  swcMinify: true,
}

module.exports = nextConfig
// module.exports = {
//   webpack(config) {
//     config.module.rules.push({ // 웹팩설정에 로더 추가함
//       test: /\.svg$/,
//       issuer: {
//         test: /\.(js|ts)x?$/,
//       },
//       use: ['@svgr/webpack'],
//     });

//     return config;
//   },
// };