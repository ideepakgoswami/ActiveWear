import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: [
      "prod-img.thesouledstore.com",
      "image.hm.com",
      "cdn.zeptonow.com",
    ],
  },
};

export default nextConfig;
