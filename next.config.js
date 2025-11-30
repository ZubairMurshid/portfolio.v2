/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['github-readme-stats.vercel.app', 'github-readme-streak-stats.herokuapp.com'],
    dangerouslyAllowSVG: true,
  },
};

module.exports = nextConfig;