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
      {
        // RealScout loads its script from em.realscout.com and calls
        // www.realscout.com. Both hosts belong in script-src https://widgetbe.com https://*.widgetbe.com and connect-src.
        source: '/:path*',
        headers: [
          {
            key: 'Content-Security-Policy',
            value: [
              "script-src https://d1buiexcd5gara.cloudfront.net https://widgetbe.com https://*.widgetbe.com 'self' 'unsafe-inline' 'unsafe-eval' blob: https://em.realscout.com https://www.realscout.com https://va.vercel-scripts.com https://assets.calendly.com https://maps.googleapis.com https://api.mapbox.com",
              "connect-src https://d1buiexcd5gara.cloudfront.net https://widgetbe.com https://*.widgetbe.com 'self' https://em.realscout.com https://www.realscout.com https://api.mapbox.com https://events.mapbox.com https://*.tiles.mapbox.com https://vitals.vercel-insights.com https://va.vercel-scripts.com https://calendly.com https://*.calendly.com https://maps.googleapis.com",
              "style-src https://widgetbe.com https://d1buiexcd5gara.cloudfront.net 'self' 'unsafe-inline' https://fonts.googleapis.com https://api.mapbox.com",
              "font-src https://widgetbe.com https://d1buiexcd5gara.cloudfront.net 'self' data: https://fonts.gstatic.com",
              "img-src https://d1buiexcd5gara.cloudfront.net https://widgetbe.com https://*.widgetbe.com 'self' data: blob: https:",
              "frame-src https://d1buiexcd5gara.cloudfront.net https://widgetbe.com https://*.widgetbe.com 'self' https://www.google.com https://maps.google.com https://www.google.com/maps/ https://calendly.com https://*.calendly.com",
              "worker-src 'self' blob:",
            ].join('; '),
          },
        ],
      },
    ]
  },
}

export default nextConfig
