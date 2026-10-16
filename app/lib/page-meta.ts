import type { Metadata } from 'next'
import { siteDescription, siteName } from 'app/config/site'

const ogImage = {
  url: '/og-image.jpg',
  width: 1200,
  height: 630,
  alt: 'Sunset street of new townhomes at The Townes at Union Village in Henderson, NV',
}

/** Page canonical plus a full Open Graph object. A partial openGraph wipes the layout image. */
export function pageMeta(path: string, metadata: Metadata = {}): Metadata {
  const title = typeof metadata.title === 'string' ? metadata.title : siteName
  const description =
    typeof metadata.description === 'string' ? metadata.description : siteDescription

  return {
    ...metadata,
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title,
      description,
      url: path,
      images: [ogImage],
    },
  }
}
