/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: "export",
  // Updated repository name to match the existing one
  basePath:
    process.env.NODE_ENV === "production" ? "/smarttour-infographic" : "",
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
