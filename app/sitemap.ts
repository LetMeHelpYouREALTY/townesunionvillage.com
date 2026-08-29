import type { MetadataRoute } from 'next'
import { getBlogPosts } from 'app/blog/utils'
import { siteUrl } from 'app/config/site'

export { siteUrl, baseUrl } from 'app/config/site'

type StaticPage = {
  path: string
  changeFrequency: NonNullable<MetadataRoute.Sitemap[number]['changeFrequency']>
  priority: number
}

const staticPages: StaticPage[] = [
  { path: '', changeFrequency: 'weekly', priority: 1 },
  { path: '/floor-plans', changeFrequency: 'weekly', priority: 0.9 },
  { path: '/quick-move-in', changeFrequency: 'weekly', priority: 0.9 },
  { path: '/community', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/buyers', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/sellers', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/new-construction', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/henderson', changeFrequency: 'monthly', priority: 0.7 },
  { path: '/union-village', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/schedule-tour', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/financing', changeFrequency: 'monthly', priority: 0.6 },
  { path: '/faq', changeFrequency: 'monthly', priority: 0.7 },
  { path: '/home-value', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/contact', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/about-dr-jan', changeFrequency: 'monthly', priority: 0.7 },
  { path: '/blog', changeFrequency: 'weekly', priority: 0.5 },
  { path: '/privacy-policy', changeFrequency: 'yearly', priority: 0.3 },
  { path: '/terms-of-service', changeFrequency: 'yearly', priority: 0.3 },
  { path: '/accessibility', changeFrequency: 'yearly', priority: 0.3 },
]

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date()

  const routes: MetadataRoute.Sitemap = staticPages.map((page) => ({
    url: `${siteUrl}${page.path}`,
    lastModified,
    changeFrequency: page.changeFrequency,
    priority: page.priority,
  }))

  const blogs: MetadataRoute.Sitemap = getBlogPosts().map((post) => ({
    url: `${siteUrl}/blog/${post.slug}`,
    lastModified: post.metadata.publishedAt,
    changeFrequency: 'monthly' as const,
    priority: 0.5,
  }))

  return [...routes, ...blogs]
}
