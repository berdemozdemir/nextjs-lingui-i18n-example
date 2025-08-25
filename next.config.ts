import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    swcPlugins: [["@lingui/swc-plugin", {}]],
  },
};

export default nextConfig;
