import type { MetadataRoute } from 'next'
import { getBlogPosts } from 'app/blog/utils'
import { siteUrl } from 'app/config/site'

export { siteUrl, baseUrl } from 'app/config/site'

type StaticPage = {
  path: string
  changeFrequency: NonNullable<MetadataRoute.Sitemap[number]['changeFrequency']>
  priority: number
  image?: string
}

const staticPages: StaticPage[] = [
  { path: '', changeFrequency: 'weekly', priority: 1, image: '/images/townhome-exterior-henderson.jpg' },
  { path: '/floor-plans', changeFrequency: 'weekly', priority: 0.9 },
  { path: '/quick-move-in', changeFrequency: 'weekly', priority: 0.9 },
  { path: '/community', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/healthcare', changeFrequency: 'monthly', priority: 0.9 },
  { path: '/healthcare/doctors', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/healthcare/nurses', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/healthcare/providers', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/buyers', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/sellers', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/new-construction', changeFrequency: 'monthly', priority: 0.8, image: '/images/new-construction-townhomes.jpg' },
  { path: '/henderson', changeFrequency: 'monthly', priority: 0.7 },
  { path: '/union-village', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/union-village-townhomes', changeFrequency: 'monthly', priority: 0.9 },
  { path: '/henderson-townhomes', changeFrequency: 'monthly', priority: 0.9, image: '/images/townhome-exterior-henderson.jpg' },
  { path: '/89011', changeFrequency: 'monthly', priority: 0.8, image: '/images/henderson-desert-dusk.jpg' },
  { path: '/answers', changeFrequency: 'monthly', priority: 0.8, image: '/images/kitchen-quartz-island.jpg' },
  { path: '/schedule-tour', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/financing', changeFrequency: 'monthly', priority: 0.6, image: '/images/financing-preapproval.jpg' },
  { path: '/faq', changeFrequency: 'monthly', priority: 0.7, image: '/images/faq-townhome-entry.jpg' },
  { path: '/home-value', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/contact', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/about-dr-jan', changeFrequency: 'monthly', priority: 0.7 },
  { path: '/blog', changeFrequency: 'weekly', priority: 0.5 },
  { path: '/privacy-policy', changeFrequency: 'yearly', priority: 0.3 },
  { path: '/terms-of-service', changeFrequency: 'yearly', priority: 0.3 },
  { path: '/accessibility', changeFrequency: 'yearly', priority: 0.3 },
]

const reviewedOn: Record<string, string> = {
  '': '2026-10-16',
  '/healthcare': '2026-10-16',
  '/healthcare/doctors': '2026-10-16',
  '/healthcare/nurses': '2026-10-16',
  '/healthcare/providers': '2026-10-16',
  '/union-village-townhomes': '2026-10-16',
  '/henderson-townhomes': '2026-10-16',
  '/89011': '2026-10-16',
  '/answers': '2026-10-16',
}

export default function sitemap(): MetadataRoute.Sitemap {
  const routes: MetadataRoute.Sitemap = staticPages.map((page) => ({
    url: `${siteUrl}${page.path}`,
    lastModified: new Date(reviewedOn[page.path] ?? '2026-08-29'),
    changeFrequency: page.changeFrequency,
    priority: page.priority,
    ...(page.image ? { images: [`${siteUrl}${page.image}`] } : {}),
  }))

  const blogs: MetadataRoute.Sitemap = getBlogPosts().map((post) => ({
    url: `${siteUrl}/blog/${post.slug}`,
    lastModified: post.metadata.publishedAt,
    changeFrequency: 'monthly' as const,
    priority: 0.5,
  }))

  return [...routes, ...blogs]
}
