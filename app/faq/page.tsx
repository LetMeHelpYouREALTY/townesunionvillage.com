import type { Metadata } from 'next'
import PageHero from '../components/page-hero'
import NapStrip from '../components/nap-strip'
import CtaBand from '../components/cta-band'
import FaqJsonLd from '../components/faq-jsonld'
import { nap, photos } from '../config/community'
import { townesUnionVillageFaqs } from '../config/faqs'
import { breadcrumbTrail } from '../lib/breadcrumbs'
import { pageMeta } from '../lib/page-meta'

export const metadata: Metadata = pageMeta('/faq', {
  title: 'FAQ | Townes at Union Village Henderson NV',
  description:
    'FAQ for The Townes at Union Village in Henderson, NV: prices, floor plans, amenities, school names, touring 1001 Gearus Place, and buyer representation with Dr. Jan Duffy.',
})

export default function FaqPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <FaqJsonLd items={townesUnionVillageFaqs} />
      <PageHero
        badge="FAQ"
        title="Townes at Union Village Questions"
        subtitle="HENDERSON, NV 89011"
        lede="Short answers for buyers and sellers. Call if your lot, price, or HOA number needs a live check."
        image={photos.living}
        secondaryHref="/schedule-tour"
        secondaryLabel="Schedule a tour"
        breadcrumb={breadcrumbTrail('FAQ', '/faq')}
      />
      <NapStrip />

      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          {townesUnionVillageFaqs.map((item) => (
            <article key={item.question} className="border-b border-gray-200 pb-8">
              <h2 className="text-2xl font-light text-gray-900 mb-3">{item.question}</h2>
              <p className="text-gray-700 leading-relaxed">{item.answer}</p>
            </article>
          ))}
        </div>
      </section>

      <CtaBand
        title="Still deciding between 1405, 1478, and 1479?"
        body={`Walk them with Dr. Jan. ${nap.street}, ${nap.city}.`}
      />
    </div>
  )
}
