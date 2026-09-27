import Link from 'next/link'
import AmenityMap from './amenity-map'
import type { AmenityCategoryId } from 'app/config/map'

type NearbyAmenitiesSectionProps = {
  title?: string
  subtitle?: string
  initialCategory?: AmenityCategoryId
  compactList?: boolean
}

export default function NearbyAmenitiesSection({
  title = 'Life Near The Townes at Union Village',
  subtitle = 'Explore grocery, healthcare, parks, dining, and schools around 1001 Gearus Place in Henderson.',
  initialCategory,
  compactList = false,
}: NearbyAmenitiesSectionProps) {
  return (
    <section className="py-16 bg-gradient-to-b from-white to-gray-50" aria-labelledby="nearby-amenities-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <div className="mb-4">
            <span className="inline-flex items-center bg-blue-600/10 px-4 py-2 rounded-full text-sm font-semibold text-blue-800 border border-blue-200">
              WHAT&apos;S NEARBY
            </span>
          </div>
          <h2 id="nearby-amenities-heading" className="text-4xl md:text-5xl font-light text-gray-900 mb-4 tracking-wide">
            <span className="font-extralight">{title}</span>
          </h2>
          <p className="text-xl text-gray-600 font-light max-w-3xl mx-auto leading-relaxed">{subtitle}</p>
        </div>

        <AmenityMap showCuratedList={!compactList} initialCategory={initialCategory} />

        <p className="mt-8 text-center">
          <Link
            href="/amenities"
            className="inline-flex items-center text-blue-700 font-semibold hover:underline"
          >
            View full nearby amenities guide →
          </Link>
        </p>
      </div>
    </section>
  )
}
