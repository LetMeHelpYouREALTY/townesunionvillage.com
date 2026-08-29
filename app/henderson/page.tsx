import type { Metadata } from 'next'
import Link from 'next/link'
import PageHero from '../components/page-hero'
import NapStrip from '../components/nap-strip'
import CtaBand from '../components/cta-band'
import ContentImage from '../components/content-image'
import { nearby, photos } from '../config/community'

export const metadata: Metadata = {
  title: 'Henderson NV 89011 Real Estate | Townes at Union Village',
  description:
    'Henderson, Nevada 89011 around The Townes at Union Village: Galleria Drive, Highway 95, I-215, Henderson Hospital, and Galleria at Sunset. Homes by Dr. Jan Duffy.',
}

export default function HendersonPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <PageHero
        badge="HENDERSON, NV 89011"
        title="Henderson Living Around Union Village"
        subtitle="GALLERIA DRIVE CORRIDOR"
        lede="Townhomes at 1001 Gearus Place sit in eastern Henderson, with hospital, highway, and retail addresses you can verify."
        image={photos.dusk}
        secondaryHref="/union-village"
        secondaryLabel="Union Village map notes"
      />
      <NapStrip />

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-6">
              What 89011 actually connects to
            </h2>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Century lists shopping, dining, and entertainment access via {nearby.highways}.
            </p>
            <p className="text-gray-700 mb-4 leading-relaxed">
              {nearby.hospitalName} is at {nearby.hospitalAddress}.
            </p>
            <p className="text-gray-700 mb-6 leading-relaxed">
              {nearby.mallName} is at {nearby.mallAddress}, west of U.S. 95 on Sunset Road.
            </p>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Named places buyers ask about</h3>
            <ul className="space-y-2 text-gray-700">
              <li>• Dave &amp; Buster’s, Henderson 89011, listed by Century as nearby dining</li>
              <li>• Costco, Best Buy, Target, and Walmart as listed on the builder community page</li>
              <li>• Water Street District is a separate Henderson center, not this block</li>
            </ul>
          </div>
          <div className="rounded-xl overflow-hidden shadow-xl aspect-[3/2]">
            <ContentImage src={photos.highway.src} alt={photos.highway.alt} />
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
          <div className="rounded-xl overflow-hidden shadow-xl aspect-[3/2]">
            <ContentImage src={photos.hospital.src} alt={photos.hospital.alt} />
          </div>
          <div>
            <h2 className="text-3xl font-light text-gray-900 mb-4">School names, not school scores</h2>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Century lists these campuses on the community page. Zoning is by address, not by ZIP.
            </p>
            <ul className="space-y-2 text-gray-700 mb-6">
              {nearby.schoolNames.map((name) => (
                <li key={name}>• {name}</li>
              ))}
            </ul>
            <p className="text-gray-700 leading-relaxed">
              Confirm assignment in the Clark County School District{' '}
              <a href={nearby.zoningUrl} className="text-blue-700 underline" target="_blank" rel="noopener noreferrer">
                zoning search
              </a>
              . Boundaries change.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 bg-white text-center">
        <Link href="/community" className="text-blue-700 font-medium hover:underline">
          See community amenities and map
        </Link>
      </section>

      <CtaBand
        title="Tour Henderson from Gearus Place"
        body="Dr. Jan Duffy will drive the corridor with you and mark what is walkable versus a hop on 95."
      />
    </div>
  )
}
