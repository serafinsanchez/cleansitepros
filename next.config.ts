import { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: 'standalone',
  serverExternalPackages: ['sharp'], // Updated from serverComponentsExternalPackages
  async headers() {
    return [];
  }
}

export default nextConfig;