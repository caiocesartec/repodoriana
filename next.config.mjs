/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "new.doriana.com.br",
      },
      {
        protocol: "http",
        hostname: "primor-teste.local",
      },
      {
        protocol: "https",
        hostname: "www.datocms-assets.com",
      },
    ]
  },
};

export default nextConfig;
