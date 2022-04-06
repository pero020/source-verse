/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

const imgConfig = {
  domains: ['lh3.googleusercontent.com'],
};

module.exports = {
  nextConfig,
  images: imgConfig
}
