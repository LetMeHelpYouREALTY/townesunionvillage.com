import type { MetadataRoute } from 'next'
import { siteUrl } from 'app/config/site'

const aiCrawlers = [
  'GPTBot',
  'ChatGPT-User',
  'OAI-SearchBot',
  'ClaudeBot',
  'Claude-User',
  'Claude-SearchBot',
  'anthropic-ai',
  'PerplexityBot',
  'Google-Extended',
  'cohere-ai',
  'Applebot-Extended',
  'Amazonbot',
  'meta-externalagent',
  'meta-externalfetcher',
  'YouBot',
  'Diffbot',
  'CCBot',
  'Bytespider',
]

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/og', '/api/'],
      },
      ...aiCrawlers.map((userAgent) => ({
        userAgent,
        allow: '/',
      })),
    ],
    sitemap: `${siteUrl}/sitemap.xml`,
    host: siteUrl,
  }
}
