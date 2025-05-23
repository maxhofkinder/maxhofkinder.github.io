import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: process.env.NODE_ENV === 'production' ? '/maxhofkinder' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/maxhofkinder/' : '',
  images: {
    unoptimized: true,
  },
  // Other config options can remain unchanged
};

export default nextConfig;



