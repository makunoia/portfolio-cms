import { withPayload } from "@payloadcms/next/withPayload";

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    reactCompiler: false,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "assets.marknoya.me",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "marknoya.me",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "pub-3fbf485d0da44dbd962a47a445921a51.r2.dev",
        port: "",
        pathname: "/**",
      },
    ],
    loader: "custom",
    loaderFile: "./src/app/(app)/lib/loader.ts",
  },
};

export default withPayload(nextConfig);
