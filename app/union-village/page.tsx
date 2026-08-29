import type { Metadata } from 'next'
import Link from 'next/link'
import PageHero from '../components/page-hero'
import NapStrip from '../components/nap-strip'
import CtaBand from '../components/cta-band'
import ContentImage from '../components/content-image'
import SimpleUnionVillageMap from '../components/simple-union-village-map'
import { amenities, nearby, photos } from '../config/community'

export const metadata: Metadata = {
  title: 'Union Village Henderson | Townes at 1001 Gearus Place',
  description:
    'The Townes at Union Village sit in the Union Village area of Henderson, NV near Henderson Hospital, Galleria Drive, I-515, and Highway 95. Tour with Dr. Jan Duffy.',
}

export default function UnionVillagePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <PageHero
        badge="UNION VILLAGE, HENDERSON"
        title="The Townes Inside Union Village"
        subtitle="1001 GEARUS PLACE, NV 89011"
        lede="A Century Communities townhome pocket next to the Henderson Hospital campus on Galleria Drive."
        image={photos.exterior}
        secondaryHref="/community"
        secondaryLabel="Community amenities"
      />
      <NapStrip />

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-6">
              Where the master plan sits
            </h2>
            <p className="text-gray-700 mb-4 leading-relaxed">
              City and land records describe Union Village as bounded by Boulder Highway on the east, I-515 on the west, and Galleria Drive on the south.
            </p>
            <p className="text-gray-700 mb-4 leading-relaxed">
              {nearby.hospitalName} opened as the medical anchor at {nearby.hospitalAddress}.
            </p>
            <p className="text-gray-700 mb-6 leading-relaxed">
              This is the Henderson, Nevada Union Village. It is not the Ohio community with a similar name.
            </p>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">What Century built on this pocket</h3>
            <ul className="space-y-2 text-gray-700 mb-6">
              {amenities.map((item) => (
                <li key={item}>• {item}</li>
              ))}
              <li>• Century Home Connect® smart home package</li>
            </ul>
            <p className="text-gray-700 leading-relaxed">
              Directions from 93/95: Galleria Drive exit, east to N. Gibson Road, then Wellness Place / Orion Lane into the townhomes.
            </p>
          </div>
          <SimpleUnionVillageMap className="h-96" />
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-light text-gray-900 mb-8 text-center">Outdoor spaces on site</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[photos.dogPark, photos.trail, photos.picnic].map((photo) => (
              <figure key={photo.src} className="rounded-xl overflow-hidden shadow-lg bg-white">
                <div className="aspect-[3/2]">
                  <ContentImage src={photo.src} alt={photo.alt} />
                </div>
                <figcaption className="p-4 text-sm text-gray-600">{photo.alt}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 bg-white text-center space-x-6">
        <Link href="/henderson" className="text-blue-700 font-medium hover:underline">
          Henderson 89011 guide
        </Link>
        <Link href="/quick-move-in" className="text-blue-700 font-medium hover:underline">
          Quick move-in homes
        </Link>
      </section>

      <CtaBand
        title="Walk Gearus Place with Dr. Jan"
        body="She will show which homesites face the trail, the garage court, or the hospital campus."
      />
    </div>
  )
}
