import type { Metadata } from 'next'
import Link from 'next/link'
import PageHero from '../components/page-hero'
import NapStrip from '../components/nap-strip'
import CtaBand from '../components/cta-band'
import ContentImage from '../components/content-image'
import { amenities, nap, photos, pricing } from '../config/community'

export const metadata: Metadata = {
  title: 'New Construction at Townes at Union Village | Century Process',
  description:
    'How to buy a Century Communities townhome at The Townes at Union Village in Henderson, NV: registration, options, deposits, and independent buyer representation.',
}

export default function NewConstructionPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <PageHero
        badge="NEW CONSTRUCTION"
        title="Buying New with Century Communities"
        subtitle="TOWNES AT UNION VILLAGE PROCESS"
        lede="Open-concept townhomes, Century Home Connect®, and a builder contract that needs a buyer advocate."
        image={photos.tour}
        secondaryHref="/buyers"
        secondaryLabel="Buyer representation"
      />
      <NapStrip />

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-6 text-center">
            Three plans, two-car garages, 1,405 to 1,479 square feet
          </h2>
          <p className="text-center text-gray-600 mb-10 max-w-3xl mx-auto">
            Century listed these starting prices on {pricing.asOf}. {pricing.disclaimer}
          </p>
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {pricing.plans.map((plan) => (
              <div key={plan.name} className="bg-gray-50 rounded-xl p-8 border border-gray-100">
                <h3 className="text-2xl font-light mb-2">{plan.name}</h3>
                <p className="text-amber-700 text-xl mb-4">From {plan.fromLabel}</p>
                <ul className="text-gray-700 space-y-2">
                  <li>{plan.sqft.toLocaleString()} square feet</li>
                  <li>
                    {plan.beds} bedrooms · {plan.baths} bathrooms
                  </li>
                  <li>{plan.garage} garage</li>
                </ul>
              </div>
            ))}
          </div>
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div className="rounded-xl overflow-hidden shadow-xl aspect-[3/2]">
              <ContentImage src={photos.living.src} alt={photos.living.alt} />
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">On-site amenities Century lists</h3>
              <ul className="space-y-2 text-gray-700 mb-6">
                {amenities.map((item) => (
                  <li key={item}>• {item}</li>
                ))}
              </ul>
              <p className="text-gray-700 leading-relaxed">
                Century also lists trailheads nearby. Confirm what is inside the HOA versus city parks.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-light text-gray-900 mb-8 text-center">The build-to-close sequence</h2>
          <ol className="space-y-6 text-gray-700">
            <li>
              <h3 className="font-semibold text-gray-900 mb-1">Register your agent</h3>
              Call {nap.phoneDisplay} before the first model visit so Dr. Jan is on the registration card.
            </li>
            <li>
              <h3 className="font-semibold text-gray-900 mb-1">Homesite and elevation</h3>
              Lot premiums and sun orientation change the number more than paint colors do.
            </li>
            <li>
              <h3 className="font-semibold text-gray-900 mb-1">Options and Century Home Connect®</h3>
              Structural options lock early. Design-center choices have cutoff dates.
            </li>
            <li>
              <h3 className="font-semibold text-gray-900 mb-1">Earnest money and construction draws</h3>
              Century accepts electronic deposits on many Nevada homes. Keep receipts.
            </li>
            <li>
              <h3 className="font-semibold text-gray-900 mb-1">Walkthroughs and closing</h3>
              Punch-list items belong in writing. Warranties start at closing, not at first showing.
            </li>
          </ol>
          <p className="mt-8 text-center">
            <Link href="/schedule-tour" className="text-blue-700 font-medium hover:underline">
              Schedule a private tour
            </Link>
          </p>
        </div>
      </section>

      <CtaBand
        title="Do not buy new construction unrepresented"
        body="Dr. Jan Duffy, NV license S.0197614.LLC, walks the paperwork with you."
      />
    </div>
  )
}
