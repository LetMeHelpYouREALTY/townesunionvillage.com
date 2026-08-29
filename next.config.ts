import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  // next-mdx-remote 4 ships a prebundled React runtime; transpile so RSC
  // prerender uses this app's React copy instead of a stale element type.
  transpilePackages: ['next-mdx-remote'],
}

export default nextConfig
