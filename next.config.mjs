/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    qualities: [100, 75],
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
