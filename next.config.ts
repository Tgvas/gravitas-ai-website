import type { NextConfig } from 'next';
import path from 'path';

const nextConfig: NextConfig = {
  // Required for @opennextjs/cloudflare
  output: 'standalone',
  turbopack: {
    root: path.resolve(__dirname),
  },
};

export default nextConfig;
