import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // output: "export",
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "ap-south-1.graphassets.com",
        pathname: "/**", // Allow all paths
      },
    ],
    minimumCacheTTL: 60, // Cache images for at least 60 seconds
  },
};

export default nextConfig;
