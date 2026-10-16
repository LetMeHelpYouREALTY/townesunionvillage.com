/**
 * Nine Atleigh Avenue listings in Dr. Jan Duffy's RealScout search "Town Homes".
 * MLS list prices captured October 16, 2026. They are not the Century starting prices.
 */
export const townHomesSearchUrl =
  'https://drjanduffy.realscout.com/homesearch/shared-searches/U2hhcmVhYmxlU2VhcmNoTGluay0yOTQzOA=='

export const atleighListingsChecked = 'October 16, 2026'

const listingBase = 'https://drjanduffy.realscout.com/homesearch/listings'

type PlanSqft = 1405 | 1478 | 1479

export type AtleighListing = {
  address: string
  price: number
  sqft: PlanSqft
  beds: number
  baths: string
  mls: string
  slug: string
}

export const atleighListings: readonly AtleighListing[] = [
  { address: '830 Atleigh Avenue', price: 345_000, sqft: 1405, beds: 3, baths: '2.5', mls: '2804743', slug: 'p-830-atleigh-avenue-henderson-89011-glvartrestle-902' },
  { address: '812 Atleigh Avenue', price: 346_500, sqft: 1478, beds: 3, baths: '2.5', mls: '2826920', slug: 'p-812-atleigh-avenue-henderson-89011-glvartrestle-938' },
  { address: '839 Atleigh Avenue', price: 350_000, sqft: 1405, beds: 3, baths: '2.5', mls: '2818886', slug: 'p-839-atleigh-avenue-henderson-89011-glvartrestle-692' },
  { address: '847 Atleigh Avenue', price: 355_000, sqft: 1405, beds: 3, baths: '2.5', mls: '2827114', slug: 'p-847-atleigh-avenue-henderson-89011-glvartrestle-695' },
  { address: '845 Atleigh Avenue', price: 358_000, sqft: 1478, beds: 3, baths: '2.5', mls: '2827082', slug: 'p-845-atleigh-avenue-henderson-89011-glvartrestle-311' },
  { address: '841 Atleigh Avenue', price: 364_000, sqft: 1479, beds: 3, baths: '2.5', mls: '2818850', slug: 'p-841-atleigh-avenue-henderson-89011-glvartrestle-984' },
  { address: '835 Atleigh Avenue', price: 369_000, sqft: 1479, beds: 3, baths: '2.5', mls: '2818844', slug: 'p-835-atleigh-avenue-henderson-89011-glvartrestle-322' },
  { address: '843 Atleigh Avenue', price: 369_000, sqft: 1479, beds: 3, baths: '2.5', mls: '2827096', slug: 'p-843-atleigh-avenue-henderson-89011-glvartrestle-392' },
  { address: '849 Atleigh Avenue', price: 369_000, sqft: 1479, beds: 3, baths: '2.5', mls: '2827106', slug: 'p-849-atleigh-avenue-henderson-89011-glvartrestle-433' },
]

export function atleighListingUrl(slug: string) {
  return `${listingBase}/${slug}`
}

export function planNameForSqft(sqft: PlanSqft): string {
  switch (sqft) {
    case 1405:
      return 'Residence 1405'
    case 1478:
      return 'Residence 1478'
    case 1479:
      return 'Residence 1479'
    default: {
      const unknown: never = sqft
      return unknown
    }
  }
}
