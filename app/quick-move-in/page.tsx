import SEOOptimizedMap from '../components/seo-optimized-map'
import OfficeListingsBand from '../components/office-listings-band'
import AtleighListings from '../components/atleigh-listings'
import NapStrip from '../components/nap-strip'
import { atleighListingsChecked } from '../config/atleigh-listings'
import { hours, nap, planPriceList, planPriceNote, pricing, qualifiedBuyerLine } from '../config/community'
import BreadcrumbJsonLd from '../components/breadcrumb-jsonld'
import { breadcrumbTrail } from '../lib/breadcrumbs'
import { pageMeta } from '../lib/page-meta'

export const metadata = pageMeta('/quick-move-in', {
  title: 'Quick Move-In Homes',
  description: `Ask Dr. Jan Duffy which Townes at Union Village homesites can close sooner. Century listed plans from ${pricing.startingFromLabel} as of ${pricing.asOf}. Call ${nap.phoneDisplay}.`,
})

export default function QuickMoveIn() {
  return (
    <div className="min-h-screen bg-gray-50">
      <BreadcrumbJsonLd items={breadcrumbTrail('Quick move-in', '/quick-move-in')} />
      <section className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 py-24 text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="inline-flex items-center bg-amber-600/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-semibold mb-6 border border-amber-400/30">
            TOURS BY APPOINTMENT
          </div>
          <h1 className="text-5xl md:text-7xl font-light mb-6 tracking-wide">
            <span className="font-extralight text-white">Quick Move-In Homes</span>
            <br />
            <span className="text-2xl md:text-3xl font-light text-blue-200 tracking-wider">
              HOMES BY DR. JAN DUFFY
            </span>
          </h1>
          <p className="text-xl mb-6 font-light max-w-4xl mx-auto leading-relaxed">
            Ask Dr. Jan which homesites at The Townes at Union Village can close sooner.
            As of {pricing.asOf}, Century listed {planPriceList}.
          </p>
          <p className="text-base mb-10 font-light max-w-3xl mx-auto leading-relaxed text-blue-100">
            {planPriceNote} Call {nap.phoneDisplay} for the homesites that are open.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a
              href={`tel:${nap.phoneTel}`}
              className="bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 text-white px-10 py-5 rounded-lg transition-all duration-300 text-lg font-semibold shadow-2xl hover:shadow-3xl transform hover:-translate-y-1 tracking-wide"
            >
              Call {nap.phoneDisplay}
            </a>
            <a
              href={`mailto:${nap.email}`}
              className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white border-2 border-white/30 hover:border-white/50 px-10 py-5 rounded-lg transition-all duration-300 text-lg font-semibold shadow-2xl hover:shadow-3xl transform hover:-translate-y-1 tracking-wide"
            >
              Email Dr. Jan
            </a>
          </div>
        </div>
      </section>

      <NapStrip />
      <OfficeListingsBand />
      <AtleighListings />

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Confirm which homesites are open
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            The Atleigh Avenue cards above are MLS list prices captured {atleighListingsChecked}.
            They are not Century Communities starting prices.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            {hours.note} {hours.builderModel}
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            {qualifiedBuyerLine}
          </p>
        </div>
      </section>

      <section className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              How a quicker close works
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Dr. Jan confirms the homesite, the written price, and the closing calendar before you write an offer.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-amber-700 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-light mx-auto mb-4 tracking-wide">
                1
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Call Dr. Jan</h3>
              <p className="text-gray-600">
                Call {nap.phoneDisplay} or email {nap.email}. Register her before the first visit.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-amber-700 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-light mx-auto mb-4 tracking-wide">
                2
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Tour by appointment</h3>
              <p className="text-gray-600">
                {hours.note} She will show the homesites that are open that day.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-amber-700 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-light mx-auto mb-4 tracking-wide">
                3
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Review the price</h3>
              <p className="text-gray-600">
                Compare the Century homesite price with the dated MLS list prices above before you offer.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-amber-700 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-light mx-auto mb-4 tracking-wide">
                4
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Write the offer</h3>
              <p className="text-gray-600">
                Dr. Jan represents you on the written offer. The builder&apos;s sales team represents Century.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Sales office
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              {nap.street}, {nap.city}, {nap.state} {nap.zip}. {hours.builderModel}
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 items-start">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">What to ask before you drive over</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-900">Which homesites are open</h4>
                  <p className="text-gray-600 text-sm">Call {nap.phoneDisplay}. Dr. Jan will name the addresses that are open.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Century starting prices</h4>
                  <p className="text-gray-600 text-sm">As of {pricing.asOf}, Century listed plans from {pricing.startingFromLabel}. {pricing.disclaimer}</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">MLS list prices</h4>
                  <p className="text-gray-600 text-sm">The Atleigh Avenue prices above were captured {atleighListingsChecked}. Confirm the live MLS price before you offer.</p>
                </div>
              </div>
            </div>

            <SEOOptimizedMap
              variant="business-profile"
              title="The Townes at Union Village sales office, Henderson, NV"
              description={`${nap.street}, ${nap.city}, ${nap.state} ${nap.zip}. Tours by appointment. Call ${nap.phoneDisplay}.`}
            />
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-r from-amber-900 via-amber-800 to-amber-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            Call before you tour
          </h2>
          <p className="text-xl mb-8 max-w-4xl mx-auto">
            Dr. Jan Duffy will confirm which homesites are open and the written price. {nap.phoneDisplay}.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`tel:${nap.phoneTel}`}
              className="bg-white text-amber-900 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-amber-50 transition-colors tracking-wide"
            >
              Call {nap.phoneDisplay}
            </a>
            <a
              href={`mailto:${nap.email}`}
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-amber-900 transition-colors tracking-wide"
            >
              Email {nap.email}
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
