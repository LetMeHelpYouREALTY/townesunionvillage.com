import SEOOptimizedMap from '../components/seo-optimized-map'
import OfficeListingsBand from '../components/office-listings-band'
import AtleighListings from '../components/atleigh-listings'
import BreadcrumbJsonLd from '../components/breadcrumb-jsonld'
import { breadcrumbTrail } from '../lib/breadcrumbs'
import { pageMeta } from '../lib/page-meta'
import { atleighListingsChecked } from '../config/atleigh-listings'
import { hours, nap } from '../config/community'

export const metadata = pageMeta('/quick-move-in', {
  title: 'Quick Move-In Homes',
  description: `Quick move-in townhomes at The Townes at Union Village. Nine Atleigh Avenue listings with MLS prices checked ${atleighListingsChecked}. Sales office ${nap.street}. Call ${nap.phoneDisplay}.`,
})

export default function QuickMoveIn() {
  return (
    <div className="min-h-screen bg-stone-50">
      <BreadcrumbJsonLd items={breadcrumbTrail('Quick move-in', '/quick-move-in')} />
      <section className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 py-24 text-white">
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <p className="inline-flex max-w-[92vw] items-center bg-amber-800 px-4 py-2 rounded-full text-xs md:text-sm font-semibold mb-6">
            MLS prices checked {atleighListingsChecked}
          </p>
          <h1 className="text-5xl md:text-7xl font-light mb-6 tracking-wide">
            Quick Move-In Homes
          </h1>
          <p className="text-xl mb-6 font-light max-w-3xl mx-auto leading-relaxed">
            The current townhomes for sale at The Townes at Union Village are on Atleigh Avenue in
            Henderson {nap.zip}. The sales office is {nap.street}.
          </p>
          <p className="text-base mb-10 font-light max-w-3xl mx-auto leading-relaxed text-blue-100">
            {hours.builderModel}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`tel:${nap.phoneTel}`}
              className="bg-gradient-to-r from-amber-800 to-amber-900 hover:from-amber-900 hover:to-amber-950 text-white px-10 py-5 rounded-lg text-lg font-semibold tracking-wide"
            >
              Call {nap.phoneDisplay}
            </a>
            <a
              href={`mailto:${nap.email}`}
              className="bg-slate-950/55 text-white border-2 border-white/40 px-10 py-5 rounded-lg text-lg font-semibold tracking-wide"
            >
              Email Dr. Jan
            </a>
          </div>
        </div>
      </section>

      <OfficeListingsBand />
      <AtleighListings />

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-4 text-center tracking-wide">
            How a quick move-in works
          </h2>
          <p className="text-lg text-gray-700 font-light max-w-3xl mx-auto text-center mb-10">
            Dr. Jan Duffy represents the buyer. Any qualified buyer can purchase. Occupation is not
            a condition of sale.
          </p>
          <ol className="grid md:grid-cols-4 gap-8 list-none p-0 m-0">
            <li className="text-center">
              <div className="bg-amber-800 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-light mx-auto mb-4">
                1
              </div>
              <h3 className="text-xl font-light text-gray-900 mb-2">Call</h3>
              <p className="text-gray-600 font-light">
                Call {nap.phoneDisplay} or email {nap.email}. Meet at {nap.street}.
              </p>
            </li>
            <li className="text-center">
              <div className="bg-amber-800 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-light mx-auto mb-4">
                2
              </div>
              <h3 className="text-xl font-light text-gray-900 mb-2">Tour</h3>
              <p className="text-gray-600 font-light">
                {hours.note} {hours.builderModel}
              </p>
            </li>
            <li className="text-center">
              <div className="bg-amber-800 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-light mx-auto mb-4">
                3
              </div>
              <h3 className="text-xl font-light text-gray-900 mb-2">Offer</h3>
              <p className="text-gray-600 font-light">
                Confirm the MLS price before you write an offer. Century starting prices on this
                site are dated separately.
              </p>
            </li>
            <li className="text-center">
              <div className="bg-amber-800 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-light mx-auto mb-4">
                4
              </div>
              <h3 className="text-xl font-light text-gray-900 mb-2">Close</h3>
              <p className="text-gray-600 font-light">
                Financing, a final walkthrough, and the move into the townhome.
              </p>
            </li>
          </ol>
        </div>
      </section>

      <section className="py-16 bg-stone-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-4 text-center tracking-wide">
            Sales office at {nap.street}
          </h2>
          <p className="text-lg text-gray-700 font-light max-w-3xl mx-auto text-center mb-10">
            The nine Atleigh Avenue townhomes above are the listings in this community with MLS
            prices checked {atleighListingsChecked}.
          </p>
          <SEOOptimizedMap
            variant="business-profile"
            title="The Townes at Union Village sales office"
            description={`${nap.street}, ${nap.city}, ${nap.state} ${nap.zip}. Atleigh Avenue listings checked ${atleighListingsChecked}.`}
          />
        </div>
      </section>
    </div>
  )
}
