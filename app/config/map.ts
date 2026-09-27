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

/** Family townhome community — grocery, healthcare, and parks lead; schools included. */
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
  note?: string
}

/**
 * Verified names and addresses from site community config and Century Communities listings.
 * Used for fallback lists, static markers, and structured data — not invented ratings or distances.
 */
export const curatedPlaces: CuratedPlace[] = [
  {
    name: nearby.hospitalName,
    address: nearby.hospitalAddress,
    category: 'healthcare',
    schemaType: 'Hospital',
  },
  {
    name: nearby.mallName,
    address: nearby.mallAddress,
    category: 'shopping',
    schemaType: 'ShoppingCenter',
  },
  {
    name: 'Costco',
    address: '3411 Saint Rose Parkway, Henderson, NV 89052',
    category: 'grocery',
    schemaType: 'GroceryStore',
    note: 'Listed on the Century Communities Union Village community page.',
  },
  {
    name: 'Target',
    address: '1250 American Pacific Drive, Henderson, NV 89074',
    category: 'shopping',
    schemaType: 'Store',
    note: 'Listed on the Century Communities Union Village community page.',
  },
  {
    name: 'Walmart',
    address: '540 Marks Street, Henderson, NV 89014',
    category: 'grocery',
    schemaType: 'GroceryStore',
    note: 'Listed on the Century Communities Union Village community page.',
  },
  {
    name: 'Dave & Buster\'s',
    address: '2211 Paradise Road, Henderson, NV 89074',
    category: 'restaurants',
    schemaType: 'Restaurant',
    note: 'Listed on the Century Communities Union Village community page.',
  },
  {
    name: 'Texas Roadhouse',
    address: '1311 W. Sunset Road, Henderson, NV 89014',
    category: 'restaurants',
    schemaType: 'Restaurant',
    note: 'Listed on the Century Communities Union Village community page.',
  },
  {
    name: 'In-N-Out Burger',
    address: '1341 W. Sunset Road, Henderson, NV 89014',
    category: 'restaurants',
    schemaType: 'Restaurant',
    note: 'Listed on the Century Communities Union Village community page.',
  },
  {
    name: 'Red Robin Gourmet Burgers',
    address: '2235 Village Walk Drive, Henderson, NV 89052',
    category: 'restaurants',
    schemaType: 'Restaurant',
    note: 'Listed on the Century Communities Union Village community page.',
  },
  {
    name: 'Starbucks',
    address: '1310 W. Sunset Road, Henderson, NV 89014',
    category: 'cafes',
    schemaType: 'CafeOrCoffeeShop',
    note: 'Listed on the Century Communities Union Village community page.',
  },
  ...nearby.schoolNames.map((name) => ({
    name,
    address: `${nap.city}, ${nap.state} ${nap.zip}`,
    category: 'schools' as AmenityCategoryId,
    schemaType: 'School',
    note: 'School name listed by Century Communities. Confirm zoning by address.',
  })),
]

export const defaultAmenityCategory: AmenityCategoryId = 'grocery'

export const mapsEmbedFallbackUrl = `https://www.google.com/maps?q=${communityCenter.lat},${communityCenter.lng}&z=14&output=embed`
