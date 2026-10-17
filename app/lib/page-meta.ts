import type { Metadata } from 'next'
import { markdownUrlFor } from 'app/lib/markdown-pages'
import { siteDescription, siteName } from 'app/config/site'

const ogImage = {
  url: '/og-image.jpg',
  width: 1200,
  height: 630,
  alt: 'Sunset street of new townhomes at The Townes at Union Village in Henderson, NV',
}

/**
 * Each public URL is its own canonical. A homepage canonical on the root
 * layout was telling Google every page was the homepage.
 * `path` is relative so metadataBase supplies https://www.townesunionvillage.com.
 * Open Graph is set in full because a partial openGraph object replaces the layout's.
 */
export function pageMeta(path: string, metadata: Metadata = {}): Metadata {
  const title = typeof metadata.title === 'string' ? metadata.title : siteName
  const description =
    typeof metadata.description === 'string' ? metadata.description : siteDescription

  const markdown = markdownUrlFor(path)

  return {
    ...metadata,
    title,
    description,
    alternates: {
      canonical: path,
      ...(markdown ? { types: { 'text/markdown': markdown } } : {}),
    },
    openGraph: {
      title,
      description,
      url: path,
      images: [ogImage],
    },
  }
}
