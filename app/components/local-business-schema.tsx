export default function LocalBusinessSchema() {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "RealEstateAgent",
    "name": "Dr. Jan Duffy - Real Estate Agent",
    "description": "Nevada licensed real estate agent specializing in new construction homes at The Townes at Union Village in Henderson, NV. Expert guidance for Century Communities new home buyers.",
    "url": "https://www.townesunionvillage.com",
    "telephone": "(702) 500-1955",
    "email": "DrJanSells@UnionVillage.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "1001 Gearus Place",
      "addressLocality": "Henderson",
      "addressRegion": "NV",
      "postalCode": "89011",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "36.0395",
      "longitude": "-115.0362"
    },
    "areaServed": {
      "@type": "City",
      "name": "Henderson, NV"
    },
    "serviceType": [
      "New Home Sales",
      "Real Estate Consulting",
      "Buyer Representation",
      "Century Communities Homes",
      "Union Village Real Estate"
    ],
    "priceRange": "$374,990 - $387,890",
    "openingHours": [
      "Mo 10:00-18:00",
      "Tu 10:00-18:00", 
      "We 10:00-18:00",
      "Th 10:00-18:00",
      "Fr 10:00-18:00",
      "Sa 10:00-18:00",
      "Su 10:00-18:00"
    ],
    "image": "https://www.townesunionvillage.com/og-image.jpg",
    "sameAs": [
      "https://www.townesunionvillage.com",
      "mailto:DrJanSells@UnionVillage.com",
      "tel:+17025001955"
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "The Townes at Union Village Floor Plans",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Product",
            "name": "Residence 1405",
            "description": "2 bedroom, 2.5 bathroom townhome with 1,405 sq ft",
            "brand": {
              "@type": "Brand",
              "name": "Century Communities"
            }
          },
          "price": "374990",
          "priceCurrency": "USD"
        },
        {
          "@type": "Offer", 
          "itemOffered": {
            "@type": "Product",
            "name": "Residence 1478",
            "description": "3 bedroom, 2.5 bathroom townhome with 1,478 sq ft",
            "brand": {
              "@type": "Brand",
              "name": "Century Communities"
            }
          },
          "price": "379990",
          "priceCurrency": "USD"
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Product", 
            "name": "Residence 1479",
            "description": "3 bedroom, 2.5 bathroom townhome with 1,479 sq ft",
            "brand": {
              "@type": "Brand",
              "name": "Century Communities"
            }
          },
          "price": "379990",
          "priceCurrency": "USD"
        }
      ]
    },
    "makesOffer": {
      "@type": "Offer",
      "description": "Expert real estate guidance for new home buyers at The Townes at Union Village",
      "price": "0",
      "priceCurrency": "USD",
      "availability": "https://schema.org/InStock",
      "validFrom": "2024-01-01"
    }
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schemaData, null, 2)
      }}
    />
  )
}

// Additional schema for the business/development
export function NewHomeDevelopmentSchema() {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "ResidentialComplex",
    "name": "The Townes at Union Village",
    "description": "New townhomes by Century Communities in Henderson, NV. Starting from $374,990 with 3 floor plans available.",
    "url": "https://www.townesunionvillage.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "1001 Gearus Place",
      "addressLocality": "Henderson",
      "addressRegion": "NV", 
      "postalCode": "89011",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "36.0395",
      "longitude": "-115.0362"
    },
    "developer": {
      "@type": "Organization",
      "name": "Century Communities",
      "url": "https://www.centurycommunities.com"
    },
    "amenityFeature": [
      {
        "@type": "LocationFeatureSpecification",
        "name": "Dog Park",
        "value": true
      },
      {
        "@type": "LocationFeatureSpecification", 
        "name": "Walking Trail",
        "value": true
      },
      {
        "@type": "LocationFeatureSpecification",
        "name": "Picnic Areas", 
        "value": true
      }
    ],
    "numberOfRooms": "3",
    "floorSize": {
      "@type": "QuantitativeValue",
      "minValue": "1405",
      "maxValue": "1479",
      "unitText": "sq ft"
    },
    "numberOfBathroomsTotal": "2.5",
    "numberOfBedrooms": "3",
    "priceRange": "$374,990 - $387,890",
    "image": "https://www.townesunionvillage.com/og-image.jpg",
    "sameAs": [
      "https://www.centurycommunities.com/find-your-new-home/nevada/las-vegas-metro/henderson-nv/union-village/"
    ]
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schemaData, null, 2)
      }}
    />
  )
}
