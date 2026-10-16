import type { Metadata } from 'next'
import Link from 'next/link'
import PageHero from '../components/page-hero'
import NapStrip from '../components/nap-strip'
import CtaBand from '../components/cta-band'
import FaqJsonLd from '../components/faq-jsonld'
import SEOOptimizedMap from '../components/seo-optimized-map'
import { hours, nap, photos, pricing } from '../config/community'
import {
  googleMaps,
  healthcareAudiences,
  healthcareChecked,
  healthcareHubFaqs,
  healthcareSlugs,
  medicalCampuses,
} from '../config/healthcare'
import { breadcrumbTrail } from '../lib/breadcrumbs'

export const metadata: Metadata = {
  title: 'Realtor for Doctors, Nurses, and Healthcare Providers',
  description:
    'Buyer agent for doctors, nurses, and healthcare providers at The Townes at Union Village, 1001 Gearus Place, beside Henderson Hospital. Call (702) 500-1955.',
  alternates: { canonical: '/healthcare' },
}

export default function HealthcarePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <FaqJsonLd items={healthcareHubFaqs} />
      <PageHero
        badge="UNION VILLAGE · CLINICIANS"
        title="Realtor for Doctors, Nurses, and Healthcare Providers"
        subtitle="LUXURY TOWNHOMES BESIDE HENDERSON HOSPITAL"
        lede={`Dr. Jan Duffy represents buyers at ${nap.street}. Century Communities lists plans from ${pricing.startingFromLabel} as of ${pricing.asOf}.`}
        image={photos.hospital}
        breadcrumb={breadcrumbTrail('Healthcare', '/healthcare')}
        secondaryHref="/healthcare/doctors"
        secondaryLabel="Homes for doctors"
      />
      <NapStrip />

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-4">
              Hyperlocal buyer representation
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              The Townes at Union Village sit beside the Henderson Hospital campus in Henderson, NV 89011.
              Clinicians use that address every shift. Dr. Jan Duffy is the buyer agent. Century is the builder.
            </p>
            <p className="text-gray-700 leading-relaxed">
              These homes are offered to every qualified buyer. The pages below explain the service for people who
              already work on this campus.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {healthcareSlugs.map((slug) => {
              const audience = healthcareAudiences[slug]
              return (
                <article key={slug} className="bg-gray-50 rounded-xl p-8 border border-gray-100 shadow-sm">
                  <p className="text-xs font-semibold tracking-wide text-amber-700 mb-3">{audience.badge}</p>
                  <h3 className="text-2xl font-light text-gray-900 mb-3">{audience.cardTitle}</h3>
                  <p className="text-gray-700 leading-relaxed mb-6">{audience.cardBody}</p>
                  <Link href={audience.path} className="text-amber-800 font-semibold hover:underline">
                    {audience.cardTitle} near Henderson Hospital
                  </Link>
                </article>
              )
            })}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-light text-gray-900 mb-6">What the service includes</h2>
            <ul className="space-y-3 text-gray-700">
              <li>• Registration with Century before the first model visit</li>
              <li>• A side-by-side look at 1,405, 1,478, and 1,479 square feet</li>
              <li>• A second read of deposits, options, and the construction calendar</li>
              <li>• A coordinated sale of your current home when the dates have to match</li>
              <li>• Tour times set around a shift, not a sales-office script</li>
            </ul>
            <p className="mt-6 text-sm text-gray-500">
              Facts checked {healthcareChecked}. {hours.note} {pricing.disclaimer}
            </p>
          </div>
          <div>
            <h2 className="text-3xl font-light text-gray-900 mb-6">Campus addresses</h2>
            <ul className="space-y-6">
              {medicalCampuses.map((campus) => (
                <li key={campus.name} className="bg-white rounded-xl p-6 shadow-sm">
                  <h3 className="text-lg font-semibold text-gray-900">{campus.name}</h3>
                  <p className="text-gray-800 mt-1">{campus.address}</p>
                  <p className="text-sm text-gray-600 mt-2 leading-relaxed">{campus.detail}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-light text-gray-900 mb-8 text-center">Questions clinicians ask</h2>
          <div className="space-y-8">
            {healthcareHubFaqs.map((item) => (
              <article key={item.question} className="border-b border-gray-200 pb-8">
                <h3 className="text-xl font-medium text-gray-900 mb-3">{item.question}</h3>
                <p className="text-gray-700 leading-relaxed">{item.answer}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-light text-gray-900 mb-2 text-center">
            {nap.businessName}
          </h2>
          <p className="text-center text-gray-600 mb-6">
            {nap.street}, {nap.city}, {nap.state} {nap.zip} · {hours.note}
          </p>
          <SEOOptimizedMap
            variant="business-profile"
            title="Townes at Union Village healthcare buyer tours"
            description="Luxury townhomes beside Henderson Hospital. Buyer representation by Dr. Jan Duffy."
          />
          <div className="mt-4 flex flex-col sm:flex-row gap-3">
            <a
              href={`tel:${nap.phoneTel}`}
              className="flex-1 inline-flex items-center justify-center bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 text-white px-4 py-3 rounded-lg text-center font-semibold tracking-wide"
            >
              Call {nap.phoneDisplay}
            </a>
            <a
              href={googleMaps.directions}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 inline-flex items-center justify-center bg-white border border-amber-300 text-amber-950 hover:bg-amber-50 px-4 py-3 rounded-lg text-center font-semibold tracking-wide"
            >
              Directions
            </a>
            <a
              href={googleMaps.reviews}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 inline-flex items-center justify-center bg-slate-900 hover:bg-slate-800 text-white px-4 py-3 rounded-lg text-center font-semibold tracking-wide"
            >
              View Google Reviews
            </a>
          </div>
        </div>
      </section>

      <CtaBand
        title="Tell her which campus you work"
        body="Call (702) 500-1955. She will register you and set the tour around your shift."
      />
    </div>
  )
}
