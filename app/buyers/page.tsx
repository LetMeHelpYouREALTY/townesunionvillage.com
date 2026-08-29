import type { Metadata } from 'next'
import Link from 'next/link'
import PageHero from '../components/page-hero'
import NapStrip from '../components/nap-strip'
import CtaBand from '../components/cta-band'
import ContentImage from '../components/content-image'
import { nap, nearby, photos, pricing } from '../config/community'

export const metadata: Metadata = {
  title: 'Buy a Townhome at Townes at Union Village | Henderson Buyers',
  description:
    'Buy a new Century Communities townhome at The Townes at Union Village in Henderson, NV. Independent buyer representation from Dr. Jan Duffy at 1001 Gearus Place.',
}

export default function BuyersPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <PageHero
        badge="HENDERSON BUYERS"
        title="Buy a Townes at Union Village Home"
        subtitle="INDEPENDENT REPRESENTATION IN 89011"
        lede={`Century Communities lists townhomes from ${pricing.startingFromLabel}. Dr. Jan Duffy represents you, not the builder.`}
        image={photos.keys}
        primaryHref={`tel:${nap.phoneTel}`}
        primaryLabel={`Call ${nap.phoneDisplay}`}
        secondaryHref="/floor-plans"
        secondaryLabel="Compare floor plans"
      />
      <NapStrip />

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-6">
              Why buyers hire their own agent here
            </h2>
            <p className="text-gray-700 mb-4 leading-relaxed">
              The on-site sales team works for Century Communities. That is their job.
            </p>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Dr. Jan Duffy works for you. She registers you, compares lots, and reads the contract.
            </p>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Tell the sales office you have an agent on your first visit. That keeps representation intact.
            </p>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">What she handles for you</h3>
            <ul className="space-y-2 text-gray-700">
              <li>• Lot premiums, options, and incentive timing</li>
              <li>• Earnest money, construction calendar, and walkthroughs</li>
              <li>• Lender options besides any builder-affiliated loan desk</li>
              <li>• A resale search if a townhome is not the right fit</li>
            </ul>
          </div>
          <div className="rounded-xl overflow-hidden shadow-xl aspect-[3/2]">
            <ContentImage src={photos.kitchen.src} alt={photos.kitchen.alt} />
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-8 text-center">
            Buyer steps at 1001 Gearus Place
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-md">
              <h3 className="text-xl font-semibold mb-3">1. Get pre-approved</h3>
              <p className="text-gray-700 leading-relaxed">
                Know your number before you pick a homesite. Rates move. We do not quote them here.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-md">
              <h3 className="text-xl font-semibold mb-3">2. Tour with Dr. Jan</h3>
              <p className="text-gray-700 leading-relaxed">
                Walk Residence 1405, 1478, and 1479. Compare 1,405 to 1,479 square feet on site.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-md">
              <h3 className="text-xl font-semibold mb-3">3. Write the builder contract</h3>
              <p className="text-gray-700 leading-relaxed">
                New-construction paper is not a resale GLVAR form. Read deposits and options twice.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-light text-gray-900 mb-4">Location buyers actually use</h2>
          <p className="text-gray-700 mb-6 leading-relaxed">
            The community sits near {nearby.hospitalName} at {nearby.hospitalAddress}. Century lists access via {nearby.highways}.
          </p>
          <p className="text-sm text-gray-500 mb-8">{pricing.disclaimer}</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/new-construction" className="text-blue-700 font-medium hover:underline">
              New construction process
            </Link>
            <Link href="/union-village" className="text-blue-700 font-medium hover:underline">
              Union Village location
            </Link>
            <Link href="/financing" className="text-blue-700 font-medium hover:underline">
              Financing overview
            </Link>
          </div>
        </div>
      </section>

      <CtaBand
        title="Register before you walk the model"
        body="Call Dr. Jan first so Century records her as your buyer representative."
      />
    </div>
  )
}
