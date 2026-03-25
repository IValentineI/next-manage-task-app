import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config remote image (from internet) */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "odsqwsstihnannabaxnb.supabase.co",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "cdn-icons-png.flaticon.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
