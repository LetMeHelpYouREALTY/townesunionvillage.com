import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  // Required for next-mdx-remote under Turbopack until Next.js issue 64525 is fixed.
  transpilePackages: ['next-mdx-remote'],
  async headers() {
    return [
      {
        // Build JS/CSS are crawled for rendering. They are not pages.
        // X-Robots-Tag keeps them out of the Google page index (GSC:
        // "Crawled - currently not indexed" on /_next/static/chunks/*.js).
        // Do not Disallow /_next/ in robots.txt — Google needs those files
        // to render the prerendered HTML.
        source: '/_next/:path*',
        headers: [{ key: 'X-Robots-Tag', value: 'noindex, nofollow' }],
      },
    ]
  },
}

export default nextConfig
