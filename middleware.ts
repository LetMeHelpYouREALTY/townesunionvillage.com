import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

/**
 * Retired Vercel portfolio-starter posts. Google's site reputation policy
 * (updated 2026-08-28) targets unrelated third-party content on a host domain.
 * 410 + noindex tells crawlers these URLs are gone — do not 301 them onto
 * money pages (Search Console: that can re-trigger the policy).
 */
const retiredStarterPosts = new Set([
  '/blog/vim',
  '/blog/spaces-vs-tabs',
  '/blog/static-typing',
])

export function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname.replace(/\/$/, '') || '/'
  if (retiredStarterPosts.has(path)) {
    return new NextResponse('Gone', {
      status: 410,
      headers: {
        'X-Robots-Tag': 'noindex, nofollow',
        'Content-Type': 'text/plain; charset=utf-8',
      },
    })
  }
}

export const config = {
  matcher: ['/blog/:path*'],
}
