import { nap, priceRangeLabel, pricing, socialProfiles } from 'app/config/community'
import { siteUrl } from 'app/config/site'

const unionVillageAddress = {
  '@type': 'PostalAddress',
  streetAddress: nap.street,
  addressLocality: nap.city,
  addressRegion: nap.state,
  postalCode: nap.zip,
  addressCountry: 'US',
}

/**
 * Floor plans are houses for sale, not shopping SKUs.
 * Google Product snippets require offers/review/aggregateRating on the Product
 * node itself — a parent Offer around Product does not count, and homes are
 * not eligible for merchant Product rich results.
 * https://developers.google.com/search/docs/appearance/structured-data/product-snippet
 */
function floorPlanOffers() {
  return pricing.plans.map((plan) => ({
    '@type': 'Offer',
    name: plan.name,
    url: `${siteUrl}/floor-plans#${plan.slug}`,
    price: plan.from,
    priceCurrency: 'USD',
    availability: 'https://schema.org/InStock',
    businessFunction: 'https://purl.org/goodrelations/v1#Sell',
    itemOffered: {
      '@type': 'House',
      name: plan.name,
      description: `${plan.beds} bedroom, ${plan.baths} bathroom townhome with ${plan.sqft.toLocaleString('en-US')} sq ft`,
      numberOfBedrooms: plan.beds,
      numberOfBathroomsTotal: Number(plan.baths),
      floorSize: {
        '@type': 'QuantitativeValue',
        value: plan.sqft,
        unitCode: 'FTK',
        unitText: 'sq ft',
      },
      address: unionVillageAddress,
    },
  }))
}

export default function LocalBusinessSchema() {
  const schemaData = {
    '@context': 'https://schema.org',
    '@type': 'RealEstateAgent',
    name: 'Dr. Jan Duffy - Real Estate Agent',
    description:
      'Nevada licensed real estate agent specializing in new construction homes at The Townes at Union Village in Henderson, NV. Expert guidance for Century Communities new home buyers.',
    url: siteUrl,
    telephone: nap.phoneDisplay,
    email: nap.email,
    address: unionVillageAddress,
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '36.0395',
      longitude: '-115.0362',
    },
    areaServed: {
      '@type': 'City',
      name: 'Henderson, NV',
    },
    serviceType: [
      'New Home Sales',
      'Real Estate Consulting',
      'Buyer Representation',
      'Century Communities Homes',
      'Union Village Real Estate',
    ],
    priceRange: priceRangeLabel,
    openingHours: [
      'Mo 10:00-18:00',
      'Tu 10:00-18:00',
      'We 10:00-18:00',
      'Th 10:00-18:00',
      'Fr 10:00-18:00',
      'Sa 10:00-18:00',
      'Su 10:00-18:00',
    ],
    image: [
      `${siteUrl}/images/dr-jan-duffy.jpg`,
      `${siteUrl}/og-image.jpg`,
    ],
    sameAs: [
      socialProfiles.instagram,
      socialProfiles.tiktok,
      socialProfiles.x,
      socialProfiles.youtube,
      socialProfiles.facebook,
      socialProfiles.linkedin,
    ],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'The Townes at Union Village Floor Plans',
      itemListElement: floorPlanOffers(),
    },
    makesOffer: {
      '@type': 'Offer',
      description:
        'Expert real estate guidance for new home buyers at The Townes at Union Village',
      price: '0',
      priceCurrency: 'USD',
      availability: 'https://schema.org/InStock',
      validFrom: '2024-01-01',
    },
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schemaData, null, 2),
      }}
    />
  )
}

export function NewHomeDevelopmentSchema() {
  const schemaData = {
    '@context': 'https://schema.org',
    '@type': 'ResidentialComplex',
    name: 'The Townes at Union Village',
    description: `New townhomes by Century Communities in Henderson, NV. Starting from ${pricing.startingFromLabel} with 3 floor plans available.`,
    url: siteUrl,
    address: unionVillageAddress,
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '36.0395',
      longitude: '-115.0362',
    },
    developer: {
      '@type': 'Organization',
      name: 'Century Communities',
      url: 'https://www.centurycommunities.com',
    },
    amenityFeature: [
      {
        '@type': 'LocationFeatureSpecification',
        name: 'Dog Park',
        value: true,
      },
      {
        '@type': 'LocationFeatureSpecification',
        name: 'Walking Trail',
        value: true,
      },
      {
        '@type': 'LocationFeatureSpecification',
        name: 'Picnic Areas',
        value: true,
      },
    ],
    numberOfRooms: '3',
    floorSize: {
      '@type': 'QuantitativeValue',
      minValue: String(pricing.plans[0].sqft),
      maxValue: String(pricing.plans[pricing.plans.length - 1].sqft),
      unitText: 'sq ft',
    },
    numberOfBathroomsTotal: '2.5',
    numberOfBedrooms: '3',
    priceRange: priceRangeLabel,
    image: `${siteUrl}/og-image.jpg`,
    sameAs: [
      'https://www.centurycommunities.com/find-your-new-home/nevada/las-vegas-metro/henderson-nv/union-village/',
    ],
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schemaData, null, 2),
      }}
    />
  )
}
