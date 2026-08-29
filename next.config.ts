import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  // Required for next-mdx-remote under Turbopack until Next.js issue 64525 is fixed.
  transpilePackages: ['next-mdx-remote'],
}

export default nextConfig
