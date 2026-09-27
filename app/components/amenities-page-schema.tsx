import { curatedPlaces, communityCenter } from 'app/config/map'
import { nap } from 'app/config/community'
import { siteUrl } from 'app/config/site'

type FaqItem = { question: string; answer: string }

function parsePostalAddress(fullAddress: string) {
  const parts = fullAddress.split(',').map((p) => p.trim())
  const last = parts[parts.length - 1] ?? ''
  const stateZip = last.match(/^([A-Z]{2})\s+(\d{5}(?:-\d{4})?)$/)
  const locality = parts.length >= 2 ? parts[parts.length - 2] : nap.city
  const streetAddress = parts.slice(0, Math.max(1, parts.length - 2)).join(', ')
  return {
    streetAddress,
    addressLocality: locality || nap.city,
    addressRegion: stateZip?.[1] ?? nap.state,
    postalCode: stateZip?.[2] ?? undefined,
  }
}

export function AmenitiesBreadcrumbSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: siteUrl,
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Nearby Amenities',
        item: `${siteUrl}/amenities`,
      },
    ],
  }

  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
  )
}

export function AmenitiesItemListSchema() {
  const featured = curatedPlaces.filter((p) => p.category !== 'schools').slice(0, 12)

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: `Nearby amenities near ${communityCenter.label}`,
    description: `Shopping, dining, and healthcare near ${communityCenter.address}`,
    itemListElement: featured.map((place, index) => {
      const parsed = parsePostalAddress(place.address)
      return {
        '@type': 'ListItem',
        position: index + 1,
        item: {
          '@type': place.schemaType,
          name: place.name,
          url: place.sourceUrl,
          address: {
            '@type': 'PostalAddress',
            streetAddress: parsed.streetAddress,
            addressLocality: parsed.addressLocality,
            addressRegion: parsed.addressRegion,
            ...(parsed.postalCode ? { postalCode: parsed.postalCode } : {}),
            addressCountry: 'US',
          },
        },
      }
    }),
  }

  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
  )
}

export function CommunityPlaceGeoSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Place',
    name: communityCenter.label,
    description: `New Century Communities townhomes at ${communityCenter.address}`,
    address: {
      '@type': 'PostalAddress',
      streetAddress: nap.street,
      addressLocality: nap.city,
      addressRegion: nap.state,
      postalCode: nap.zip,
      addressCountry: 'US',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: communityCenter.lat,
      longitude: communityCenter.lng,
    },
  }

  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
  )
}

export function AmenitiesFaqSchema({ items }: { items: FaqItem[] }) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  }

  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
  )
}
