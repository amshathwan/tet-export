/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  experimental: { appDir: true },
  exclude: ["app/blogs/*"],
  distDir: "dist",
};

module.exports = nextConfig;
