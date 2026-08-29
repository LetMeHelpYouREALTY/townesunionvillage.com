import type { Metadata } from 'next'
import Link from 'next/link'
import PageHero from '../components/page-hero'
import NapStrip from '../components/nap-strip'
import CtaBand from '../components/cta-band'
import ContentImage from '../components/content-image'
import { nap, photos } from '../config/community'

export const metadata: Metadata = {
  title: 'New Construction Financing | Townes at Union Village Henderson',
  description:
    'How financing works for a Century Communities townhome at The Townes at Union Village in Henderson, NV. Pre-approval, builder-affiliated lending, and independent advice from Dr. Jan Duffy.',
}

export default function FinancingPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <PageHero
        badge="FINANCING"
        title="Pay for a Union Village Townhome"
        subtitle="PRE-APPROVAL BEFORE THE MODEL"
        lede="We do not publish mortgage rates. They change daily. Get a written pre-approval, then tour."
        image={photos.garage}
        secondaryHref="/buyers"
        secondaryLabel="Buyer steps"
      />
      <NapStrip />

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-6">
              What new-construction loans actually require
            </h2>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Builders want a pre-approval letter, not a screenshot of a rate ad.
            </p>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Century’s site mentions affiliate lender Inspire Home Loans®. You may use that desk or another lender.
            </p>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Compare closing costs, lock windows, and construction-to-perm rules in writing.
            </p>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Bring these to your lender</h3>
            <ul className="space-y-2 text-gray-700">
              <li>• Income, assets, and debts your underwriter will document</li>
              <li>• The Century plan name and estimated purchase price</li>
              <li>• HOA dues once Dr. Jan confirms the current amount</li>
              <li>• Sale timeline if you must close a current house first</li>
            </ul>
          </div>
          <div className="rounded-xl overflow-hidden shadow-xl aspect-[3/2]">
            <ContentImage src={photos.keys.src} alt={photos.keys.alt} />
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-light text-gray-900 mb-6 text-center">What we will not put on this page</h2>
          <p className="text-gray-700 text-center max-w-3xl mx-auto mb-8 leading-relaxed">
            No invented APR. No copied “estimated payment” from a third-party portal. Call {nap.phoneDisplay} and we will connect you with a licensed loan officer.
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-md">
              <h3 className="text-xl font-semibold mb-3">Earnest money</h3>
              <p className="text-gray-700 leading-relaxed">
                Century can collect deposits electronically on many Nevada homes. Amounts are in your specific contract.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-md">
              <h3 className="text-xl font-semibold mb-3">Incentives</h3>
              <p className="text-gray-700 leading-relaxed">
                Rate buydowns and closing credits change by week and by lender. Ask Dr. Jan for the current builder sheet.
              </p>
            </div>
          </div>
          <p className="text-center mt-8">
            <Link href="/sellers" className="text-blue-700 font-medium hover:underline">
              Selling first? Read the seller timing page
            </Link>
          </p>
        </div>
      </section>

      <CtaBand
        title="Get the letter, then pick the lot"
        body="Dr. Jan Duffy coordinates lender, builder, and your calendar so the close date is real."
      />
    </div>
  )
}
