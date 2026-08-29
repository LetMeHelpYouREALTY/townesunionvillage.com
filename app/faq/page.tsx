import type { Metadata } from 'next'
import PageHero from '../components/page-hero'
import NapStrip from '../components/nap-strip'
import CtaBand from '../components/cta-band'
import FaqJsonLd from '../components/faq-jsonld'
import { amenities, nap, nearby, photos, pricing } from '../config/community'

const faqs = [
  {
    question: 'Where is The Townes at Union Village?',
    answer: `The sales office is at ${nap.street}, ${nap.city}, ${nap.state} ${nap.zip}, next to the Union Village / Henderson Hospital area on Galleria Drive.`,
  },
  {
    question: 'Who builds the townhomes?',
    answer:
      'Century Communities. Dr. Jan Duffy is an independent buyer representative with Berkshire Hathaway HomeServices Nevada Properties, license S.0197614.LLC.',
  },
  {
    question: 'What do the homes cost?',
    answer: `Century Communities listed plans from ${pricing.startingFromLabel} as of ${pricing.asOf}. Prices change with homesite, options, and incentives. Confirm with Dr. Jan Duffy at ${nap.phoneDisplay}.`,
  },
  {
    question: 'What floor plans are offered?',
    answer:
      'Residence 1405 (1,405 sq ft), Residence 1478 (1,478 sq ft), and Residence 1479 (1,479 sq ft). Century lists 3 bedrooms, 2.5 bathrooms, and a 2-car garage on those plans.',
  },
  {
    question: 'Do I need my own real estate agent?',
    answer:
      'You can buy through the builder’s sales team alone, but that team represents Century. Dr. Jan Duffy represents you. Register her before the first visit.',
  },
  {
    question: 'What amenities are on site?',
    answer: `Century lists a ${amenities.join(', ').toLowerCase()}, plus trailheads nearby.`,
  },
  {
    question: 'Which schools serve the community?',
    answer: `Century lists ${nearby.schoolNames.join(', ')}. Clark County School District assigns schools by address. Verify at ${nearby.zoningUrl}.`,
  },
  {
    question: 'How do I tour?',
    answer: `Call ${nap.phoneDisplay} or email ${nap.email}. Meet at ${nap.street}. ${hoursNote()}`,
  },
  {
    question: 'Can I sell my current home and buy here?',
    answer:
      'Yes. Dr. Jan Duffy can list your current house and represent you on the Century purchase so the calendars line up.',
  },
  {
    question: 'What is the phone number and email?',
    answer: `${nap.phoneDisplay} and ${nap.email}. Brokerage: ${nap.brokerage}.`,
  },
]

function hoursNote() {
  return 'Tours are by appointment. Confirm builder model hours the same day.'
}

export const metadata: Metadata = {
  title: 'FAQ | Townes at Union Village Henderson NV',
  description:
    'FAQ for The Townes at Union Village in Henderson, NV: prices, floor plans, amenities, school names, touring 1001 Gearus Place, and buyer representation with Dr. Jan Duffy.',
}

export default function FaqPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <FaqJsonLd items={faqs} />
      <PageHero
        badge="FAQ"
        title="Townes at Union Village Questions"
        subtitle="HENDERSON, NV 89011"
        lede="Short answers for buyers and sellers. Call if your lot, price, or HOA number needs a live check."
        image={photos.living}
        secondaryHref="/schedule-tour"
        secondaryLabel="Schedule a tour"
      />
      <NapStrip />

      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          {faqs.map((item) => (
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
