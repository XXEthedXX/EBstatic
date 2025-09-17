import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  /* config options here */
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "./src") // no need to directly reference the source folder
        }
    }
};

export default nextConfig;
