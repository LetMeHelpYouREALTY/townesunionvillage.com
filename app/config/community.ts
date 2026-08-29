/**
 * Hyperlocal facts for The Townes at Union Village.
 * Prices and inventory change. Confirm with Dr. Jan before quoting a buyer.
 * Sourced 2026-08-29 via Parallel search of Century Communities and area records.
 */
export const nap = {
  businessName: 'The Townes at Union Village | Homes by Dr. Jan Duffy',
  agentName: 'Dr. Jan Duffy',
  brokerage: 'Berkshire Hathaway HomeServices Nevada Properties',
  license: 'S.0197614.LLC',
  street: '1001 Gearus Place',
  city: 'Henderson',
  state: 'NV',
  zip: '89011',
  phoneDisplay: '(702) 500-1955',
  phoneTel: '7025001955',
  email: 'DrJanSells@UnionVillage.com',
} as const

export const calendly = {
  url: 'https://calendly.com/drjanduffy/15min',
  embedUrl:
    'https://calendly.com/drjanduffy/15min?hide_gdpr_banner=1&primary_color=1e40af',
  eventName: 'Free Market Strategy Call (15 min)',
  ctaLabel: 'Book a 15-min call',
} as const

/**
 * Official profiles listed on Dr. Jan Duffy's BHHS agent page (2026-08-29).
 * Search Console platform properties (globally available 2026-07-29) cover
 * Instagram, TikTok, X, and YouTube only. Add each as its own GSC property.
 * https://support.google.com/webmasters/answer/17148418
 */
export const socialProfiles = {
  instagram: 'https://www.instagram.com/drjanduffy/',
  tiktok: 'https://www.tiktok.com/@drjanduffy',
  x: 'https://x.com/DrJanDuffy',
  youtube: 'https://www.youtube.com/channel/UCIMieP7FSUSwN0vw8FVNprA',
  facebook: 'https://www.facebook.com/DrJanDuffy',
  pinterest: 'https://www.pinterest.com/DrJanDuffy/',
  linkedin: 'https://www.linkedin.com/in/drjanduffy',
} as const

/** The four platforms Search Console can track as platform properties. */
export const searchConsolePlatforms = [
  { name: 'Instagram', href: socialProfiles.instagram },
  { name: 'TikTok', href: socialProfiles.tiktok },
  { name: 'X', href: socialProfiles.x },
  { name: 'YouTube', href: socialProfiles.youtube },
] as const

export const hours = {
  note: 'Dr. Jan Duffy tours by appointment seven days a week.',
  builderModel:
    'Century Communities lists the sales office at 1001 Gearus Place. Confirm same-day hours before you drive over.',
}

/** Century Communities listed these starting prices on 2026-08-29. Verify live inventory. */
export const pricing = {
  asOf: 'August 29, 2026',
  startingFrom: 335_990,
  startingFromLabel: '$335,990',
  disclaimer:
    'Starting prices are listed by Century Communities and change with homesite, options, and incentives. Confirm the number with Dr. Jan Duffy before you write an offer.',
  plans: [
    {
      name: 'Residence 1405',
      slug: 'residence-1405',
      sqft: 1405,
      beds: 3,
      baths: '2.5',
      garage: '2-car',
      from: 335_990,
      fromLabel: '$335,990',
    },
    {
      name: 'Residence 1478',
      slug: 'residence-1478',
      sqft: 1478,
      beds: 3,
      baths: '2.5',
      garage: '2-car',
      from: 339_990,
      fromLabel: '$339,990',
    },
    {
      name: 'Residence 1479',
      slug: 'residence-1479',
      sqft: 1479,
      beds: 3,
      baths: '2.5',
      garage: '2-car',
      from: 352_990,
      fromLabel: '$352,990',
    },
  ],
} as const

/** Floor-plan starting range for visible copy and JSON-LD. Confirm before quoting a buyer. */
export const priceRangeLabel = `${pricing.startingFromLabel} - ${pricing.plans[pricing.plans.length - 1].fromLabel}`

export const amenities = ['Dog park', 'Walking trail', 'Picnic areas'] as const

export const nearby = {
  hospitalName: 'Henderson Hospital',
  hospitalAddress: '1050 W. Galleria Drive, Henderson, NV 89011',
  highways: 'Highway 95 and I-215',
  mallName: 'Galleria at Sunset',
  mallAddress: '1300 West Sunset Road, Henderson, NV 89014',
  schoolNames: [
    'Harriet Treem Elementary School',
    'Jim Thorpe Elementary School',
    'Francis H. Cortney Junior High School',
    'Basic Academy of International Studies High School',
  ],
  zoningUrl: 'https://www.ccsd.net/zoning',
}

export const photos = {
  exterior: {
    src: '/images/townhome-exterior-henderson.jpg',
    alt: 'New two-story townhomes at dusk in Henderson, Nevada near Union Village',
  },
  kitchen: {
    src: '/images/kitchen-quartz-island.jpg',
    alt: 'Open-concept kitchen with quartz island in a Henderson townhome',
  },
  living: {
    src: '/images/living-room-open-concept.jpg',
    alt: 'Open living room with desert light in a Townes at Union Village townhome',
  },
  suite: {
    src: '/images/primary-suite.jpg',
    alt: 'Primary bedroom suite in a new Henderson, Nevada townhome',
  },
  bath: {
    src: '/images/primary-bathroom.jpg',
    alt: 'Primary bath with dual vanities and walk-in shower in Henderson',
  },
  garage: {
    src: '/images/two-car-garage.jpg',
    alt: 'Two-car garage interior in a Townes at Union Village townhome',
  },
  dogPark: {
    src: '/images/dog-park-henderson.jpg',
    alt: 'Community dog park with desert landscaping in Henderson, Nevada',
  },
  trail: {
    src: '/images/walking-trail-henderson.jpg',
    alt: 'Walking trail through a Henderson, Nevada townhome community',
  },
  picnic: {
    src: '/images/picnic-area-henderson.jpg',
    alt: 'Picnic ramada and desert open space in Henderson, Nevada',
  },
  keys: {
    src: '/images/buyer-new-home-keys.jpg',
    alt: 'New home keys on a quartz kitchen island for Union Village buyers',
  },
  seller: {
    src: '/images/seller-henderson-home.jpg',
    alt: 'Existing Henderson, Nevada home for sellers moving to Union Village',
  },
  dusk: {
    src: '/images/henderson-desert-dusk.jpg',
    alt: 'Henderson, Nevada desert and mountains at dusk',
  },
  hospital: {
    src: '/images/henderson-medical-campus.jpg',
    alt: 'Medical campus along Galleria Drive in Henderson, Nevada',
  },
  highway: {
    src: '/images/henderson-highway-95.jpg',
    alt: 'Desert highway interchange serving Henderson, Nevada and Union Village',
  },
  tour: {
    src: '/images/schedule-tour-table.jpg',
    alt: 'New construction tour table with floor plans in Henderson, Nevada',
  },
} as const

export const gallery = [
  photos.exterior,
  photos.kitchen,
  photos.living,
  photos.suite,
  photos.bath,
  photos.garage,
  photos.dogPark,
  photos.trail,
] as const
