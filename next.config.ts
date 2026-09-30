import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  images: {
    unoptimized: true,
    remotePatterns: [{
        protocol: 'https',
        hostname: 'media.rawg.io'
      }
    ]
  }
};

export default nextConfig;
