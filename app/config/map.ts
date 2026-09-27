import { nap, nearby } from './community'

/**
 * Map center: Century Communities sales office / The Townes at Union Village.
 * Coordinates align with LocalBusinessSchema geo (1001 Gearus Place, Henderson NV 89011).
 */
export const communityCenter = {
  lat: 36.0395,
  lng: -115.0362,
  label: 'The Townes at Union Village',
  address: `${nap.street}, ${nap.city}, ${nap.state} ${nap.zip}`,
} as const

export type AmenityCategoryId =
  | 'grocery'
  | 'healthcare'
  | 'parks'
  | 'restaurants'
  | 'shopping'
  | 'fitness'
  | 'schools'
  | 'cafes'
  | 'pharmacies'
  | 'parking'
  | 'golf'

export type AmenityCategory = {
  id: AmenityCategoryId
  label: string
  /** Google Places API (New) includedPrimaryTypes */
  placeTypes: string[]
  ariaLabel: string
}

/** Townhome community — grocery, healthcare, and parks lead; schools included. */
export const amenityCategories: AmenityCategory[] = [
  {
    id: 'grocery',
    label: 'Grocery',
    placeTypes: ['grocery_store', 'supermarket'],
    ariaLabel: 'Show grocery stores near Union Village',
  },
  {
    id: 'healthcare',
    label: 'Healthcare',
    placeTypes: ['hospital', 'doctor', 'medical_clinic'],
    ariaLabel: 'Show hospitals and clinics near Union Village',
  },
  {
    id: 'parks',
    label: 'Parks',
    placeTypes: ['park'],
    ariaLabel: 'Show parks near Union Village',
  },
  {
    id: 'restaurants',
    label: 'Restaurants',
    placeTypes: ['restaurant'],
    ariaLabel: 'Show restaurants near Union Village',
  },
  {
    id: 'shopping',
    label: 'Shopping',
    placeTypes: ['shopping_mall', 'department_store'],
    ariaLabel: 'Show shopping near Union Village',
  },
  {
    id: 'fitness',
    label: 'Fitness',
    placeTypes: ['gym', 'fitness_center'],
    ariaLabel: 'Show gyms near Union Village',
  },
  {
    id: 'schools',
    label: 'Schools',
    placeTypes: ['school', 'primary_school', 'secondary_school'],
    ariaLabel: 'Show schools near Union Village',
  },
  {
    id: 'cafes',
    label: 'Cafes',
    placeTypes: ['cafe', 'coffee_shop'],
    ariaLabel: 'Show cafes near Union Village',
  },
  {
    id: 'pharmacies',
    label: 'Pharmacies',
    placeTypes: ['pharmacy', 'drugstore'],
    ariaLabel: 'Show pharmacies near Union Village',
  },
  {
    id: 'parking',
    label: 'Parking',
    placeTypes: ['parking'],
    ariaLabel: 'Show parking near Union Village',
  },
  {
    id: 'golf',
    label: 'Golf',
    placeTypes: ['golf_course'],
    ariaLabel: 'Show golf courses near Union Village',
  },
]

export type CuratedPlace = {
  name: string
  address: string
  category: AmenityCategoryId
  /** schema.org type for ItemList JSON-LD */
  schemaType: string
  /** Official page used to verify name and address (2026-09-27). */
  sourceUrl: string
  note?: string
}

/**
 * Names and street addresses verified against primary sources (2026-09-27).
 * Used for fallback lists and structured data — no invented ratings or distances.
 */
export const curatedPlaces: CuratedPlace[] = [
  {
    name: nearby.hospitalName,
    address: '1050 W. Galleria Dr., Henderson, NV 89011',
    category: 'healthcare',
    schemaType: 'Hospital',
    sourceUrl: 'https://www.hendersonhospital.com/maps-directions',
  },
  {
    name: nearby.mallName,
    address: '1300 West Sunset Road, Henderson, NV 89014',
    category: 'shopping',
    schemaType: 'ShoppingCenter',
    sourceUrl: 'https://www.galleriaatsunset.com/location',
  },
  {
    name: 'Costco Wholesale',
    address: '791 Marks St, Henderson, NV 89014',
    category: 'grocery',
    schemaType: 'GroceryStore',
    sourceUrl: 'https://www.costco.com/w/-/nv/henderson/673',
    note: 'Listed on the Century Communities Union Village community page.',
  },
  {
    name: 'Walmart Supercenter',
    address: '540 Marks St, Henderson, NV 89014',
    category: 'grocery',
    schemaType: 'GroceryStore',
    sourceUrl: 'https://www.walmart.com/store/2838-henderson-nv',
    note: 'Listed on the Century Communities Union Village community page.',
  },
  {
    name: 'Target',
    address: '605 N Stephanie St, Henderson, NV 89014',
    category: 'shopping',
    schemaType: 'Store',
    sourceUrl: 'https://www.target.com/sl/henderson-stephanie-street/680',
    note: 'Nearest Target store to Union Village per Target store locator; listed by Century Communities.',
  },
  {
    name: 'Best Buy',
    address: '611 Marks St, Henderson, NV 89014',
    category: 'shopping',
    schemaType: 'Store',
    sourceUrl: 'https://stores.bestbuy.com/nv/henderson/611-marks-st-358.html',
    note: 'Listed on the Century Communities Union Village community page.',
  },
  {
    name: "Dave & Buster's",
    address: '821 David Baker Way, Henderson, NV 89011',
    category: 'restaurants',
    schemaType: 'Restaurant',
    sourceUrl: 'https://www.daveandbusters.com/us/en/about/locations/henderson',
    note: 'Listed on the Century Communities Union Village community page.',
  },
  {
    name: 'Texas Roadhouse',
    address: '1421 W. Sunset Road, Henderson, NV 89014',
    category: 'restaurants',
    schemaType: 'Restaurant',
    sourceUrl: 'https://www.texasroadhouse.com/locations/henderson',
    note: 'Listed on the Century Communities Union Village community page.',
  },
  {
    name: 'In-N-Out Burger',
    address: '1051 W. Sunset Rd., Henderson, NV 89014',
    category: 'restaurants',
    schemaType: 'Restaurant',
    sourceUrl: 'https://locations.in-n-out.com/150',
    note: 'Listed on the Century Communities Union Village community page.',
  },
  {
    name: 'Red Robin Gourmet Burgers',
    address: '1300 W Sunset Rd #2545, Henderson, NV 89014',
    category: 'restaurants',
    schemaType: 'Restaurant',
    sourceUrl: 'https://www.galleriaatsunset.com/dining/red-robin',
    note: 'Galleria at Sunset tenant; listed by Century Communities.',
  },
  {
    name: 'Starbucks',
    address: '605 N Stephanie St, Henderson, NV 89014',
    category: 'cafes',
    schemaType: 'CafeOrCoffeeShop',
    sourceUrl: 'https://www.target.com/sl/henderson-stephanie-street/680',
    note: 'Starbucks café inside Target Henderson Stephanie St; Century lists Starbucks near Union Village.',
  },
  {
    name: 'Harriet Treem Elementary School',
    address: '1698 Patrick Ln., Henderson, NV 89014',
    category: 'schools',
    schemaType: 'School',
    sourceUrl: 'https://treembears.org/',
    note: 'School name listed by Century Communities. Confirm zoning by homesite address.',
  },
  {
    name: 'Jim Thorpe Elementary School',
    address: '1650 Patrick Ln., Henderson, NV 89014',
    category: 'schools',
    schemaType: 'School',
    sourceUrl: 'http://www.thorpeelementary.com/',
    note: 'School name listed by Century Communities. Confirm zoning by homesite address.',
  },
  {
    name: 'Francis H. Cortney Junior High School',
    address: '5301 E. Hacienda Ave., Las Vegas, NV 89122',
    category: 'schools',
    schemaType: 'School',
    sourceUrl: 'https://www.cortneyjhs.org/',
    note: 'School name listed by Century Communities. Confirm zoning by homesite address.',
  },
  {
    name: 'Basic Academy of International Studies High School',
    address: '400 Palo Verde Dr., Henderson, NV 89015',
    category: 'schools',
    schemaType: 'School',
    sourceUrl: 'https://www.ccsd.net/directory/schools',
    note: 'Address from CCSD school directory; confirm zoning by homesite address.',
  },
]

export const defaultAmenityCategory: AmenityCategoryId = 'grocery'

export const mapsEmbedFallbackUrl = `https://www.google.com/maps?q=${communityCenter.lat},${communityCenter.lng}&z=14&output=embed`
