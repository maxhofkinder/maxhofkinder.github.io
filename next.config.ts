import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true, 
  images: {
    unoptimized: true,
  },
  // Other config options can remain unchanged
};

export default nextConfig;



