import packageData from "./package.json" with { type: "json" };

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: process.platform === "win32" ? undefined : "standalone",
  env: {
    NEXT_PUBLIC_APP_VERSION: packageData.version,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "placehold.co",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
