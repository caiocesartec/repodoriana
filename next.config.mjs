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
        hostname: "dorina-teste.local",
      },
    ]
  },
};

export default nextConfig;
