import type { Metadata } from 'next'
import PageHero from '../components/page-hero'
import NapStrip from '../components/nap-strip'
import CtaBand from '../components/cta-band'
import ContentImage from '../components/content-image'
import SimpleUnionVillageMap from '../components/simple-union-village-map'
import { hours, nap, photos } from '../config/community'

export const metadata: Metadata = {
  title: 'Schedule a Tour | Townes at Union Village Henderson NV',
  description:
    'Schedule a private tour of The Townes at Union Village at 1001 Gearus Place, Henderson, NV 89011 with Dr. Jan Duffy. Call (702) 500-1955.',
}

export default function ScheduleTourPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <PageHero
        badge="PRIVATE TOUR"
        title="Tour Townes at Union Village"
        subtitle="1001 GEARUS PLACE, HENDERSON"
        lede={`${nap.agentName} meets you at the community. Call ${nap.phoneDisplay} or email ${nap.email}.`}
        image={photos.tour}
        primaryHref={`tel:${nap.phoneTel}`}
        primaryLabel={`Call ${nap.phoneDisplay}`}
        secondaryHref={`mailto:${nap.email}`}
        secondaryLabel="Email to book a time"
      />
      <NapStrip />

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-light text-gray-900 mb-6">How a tour with Dr. Jan works</h2>
            <h3 className="text-xl font-semibold mb-2">Call or email first</h3>
            <p className="text-gray-700 mb-4 leading-relaxed">
              She registers you with Century so you are not treated as an unrepresented walk-in.
            </p>
            <h3 className="text-xl font-semibold mb-2">Meet at Gearus Place</h3>
            <p className="text-gray-700 mb-4 leading-relaxed">
              {nap.street}, {nap.city}, {nap.state} {nap.zip}. Bring a pre-approval if you have one.
            </p>
            <h3 className="text-xl font-semibold mb-2">Hours</h3>
            <p className="text-gray-700 mb-2 leading-relaxed">{hours.note}</p>
            <p className="text-gray-700 mb-6 leading-relaxed">{hours.builderModel}</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={`tel:${nap.phoneTel}`}
                className="bg-blue-700 text-white px-6 py-3 rounded-lg text-center font-semibold"
              >
                Call
              </a>
              <a
                href="https://www.google.com/maps/search/?api=1&query=1001+Gearus+Place+Henderson+NV+89011"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 text-white px-6 py-3 rounded-lg text-center font-semibold"
              >
                Directions
              </a>
            </div>
          </div>
          <div className="space-y-6">
            <div className="rounded-xl overflow-hidden shadow-xl aspect-[3/2]">
              <ContentImage src={photos.exterior.src} alt={photos.exterior.alt} />
            </div>
            <SimpleUnionVillageMap className="h-72" />
          </div>
        </div>
      </section>

      <CtaBand
        title="Same-day tours when inventory allows"
        body="Text or call. Do not rely on a builder open-house window without confirming."
      />
    </div>
  )
}
