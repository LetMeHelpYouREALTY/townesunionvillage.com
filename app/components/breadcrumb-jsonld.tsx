import { siteUrl } from 'app/config/site'

export type BreadcrumbItem = { name: string; path: string }

function breadcrumbUrl(path: string) {
  return path === '/' ? siteUrl : `${siteUrl}${path}`
}

export default function BreadcrumbJsonLd({ items }: { items: BreadcrumbItem[] }) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: breadcrumbUrl(item.path),
    })),
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
