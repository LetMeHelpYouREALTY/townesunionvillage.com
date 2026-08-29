import type { Metadata } from 'next'
import Link from 'next/link'
import PageHero from '../components/page-hero'
import NapStrip from '../components/nap-strip'
import CtaBand from '../components/cta-band'
import ContentImage from '../components/content-image'
import { nap, photos, pricing } from '../config/community'

export const metadata: Metadata = {
  title: 'Sell Your Home and Buy Union Village | Henderson Sellers',
  description:
    'Sell your current Henderson or Las Vegas Valley home and buy a new townhome at The Townes at Union Village. Valuation, timing, and buyer representation from Dr. Jan Duffy.',
}

export default function SellersPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <PageHero
        badge="HENDERSON SELLERS"
        title="Sell Your Home. Buy Union Village."
        subtitle="ONE AGENT FOR THE MOVE"
        lede="Get a live value on your current house, then lock a Century townhome with the same advocate."
        image={photos.seller}
        primaryHref="/home-value"
        primaryLabel="Get a home value"
        secondaryHref={`tel:${nap.phoneTel}`}
        secondaryLabel={`Call ${nap.phoneDisplay}`}
      />
      <NapStrip />

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
          <div className="rounded-xl overflow-hidden shadow-xl aspect-[3/2] order-2 lg:order-1">
            <ContentImage src={photos.exterior.src} alt={photos.exterior.alt} />
          </div>
          <div className="order-1 lg:order-2">
            <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-6">
              Time the sale to the builder calendar
            </h2>
            <p className="text-gray-700 mb-4 leading-relaxed">
              New construction closes on the builder’s date, not yours. Equity has to show up on time.
            </p>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Dr. Jan maps list date, inspection window, and Century completion so you are not in a hotel.
            </p>
            <p className="text-gray-700 mb-4 leading-relaxed">
              {pricing.disclaimer}
            </p>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Seller options she will run</h3>
            <ul className="space-y-2 text-gray-700">
              <li>• List-and-buy with a rent-back if the townhome is not finished</li>
              <li>• Contingent purchase only if Century will accept it</li>
              <li>• Bridge or equity line discussion with your lender, not a rate guess here</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-8 text-center">
            What sellers ask before they list
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-md">
              <h3 className="text-xl font-semibold mb-3">What is my number?</h3>
              <p className="text-gray-700 leading-relaxed">
                Start with the{' '}
                <Link href="/home-value" className="text-blue-700 underline">
                  home value tool
                </Link>
                , then a CMA from Dr. Jan. Online estimates are not offers.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-md">
              <h3 className="text-xl font-semibold mb-3">Can I buy first?</h3>
              <p className="text-gray-700 leading-relaxed">
                Sometimes. It depends on equity, loan type, and how fast Century can close the townhome.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-md">
              <h3 className="text-xl font-semibold mb-3">Do I still get a buyer agent?</h3>
              <p className="text-gray-700 leading-relaxed">
                Yes. Selling your house does not mean you walk into the model unrepresented.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CtaBand
        title="Bring your address. Leave with a plan."
        body={`${nap.street}, ${nap.city}, ${nap.state} ${nap.zip}. Call ${nap.phoneDisplay}.`}
      />
    </div>
  )
}
