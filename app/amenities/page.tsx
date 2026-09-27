import type { Metadata } from 'next'
import Link from 'next/link'
import AmenityMap from '../components/amenity-map'
import NapStrip from '../components/nap-strip'
import CtaBand from '../components/cta-band'
import {
  AmenitiesBreadcrumbSchema,
  AmenitiesFaqSchema,
  AmenitiesItemListSchema,
  CommunityPlaceGeoSchema,
} from '../components/amenities-page-schema'
import { communityCenter, curatedPlaces } from '../config/map'
import { nap, nearby } from '../config/community'
import { siteUrl } from '../config/site'

const pageTitle = 'Nearby Amenities in The Townes at Union Village, Henderson'

export const metadata: Metadata = {
  title: pageTitle,
  description:
    'Grocery, healthcare, parks, dining, and schools near The Townes at Union Village at 1001 Gearus Place, Henderson NV 89011. Interactive map and local guide from Dr. Jan Duffy.',
  alternates: {
    canonical: `${siteUrl}/amenities`,
  },
  openGraph: {
    title: pageTitle,
    description:
      'Explore verified nearby amenities around Union Village in Henderson, Nevada with an interactive map and buyer FAQ.',
    url: `${siteUrl}/amenities`,
    type: 'website',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'Townes at Union Village Henderson townhomes' }],
  },
}

const faqItems = [
  {
    question: 'What grocery stores are near The Townes at Union Village?',
    answer:
      'Century Communities lists Costco, Walmart, and other grocers serving the Galleria Drive and Sunset Road corridor near 1001 Gearus Place in Henderson.',
  },
  {
    question: 'How far is Union Village from the Las Vegas Strip?',
    answer:
      'From eastern Henderson, the Strip is typically about a 20–30 minute drive depending on traffic and which resort corridor you target — always verify on the day you travel.',
  },
  {
    question: 'Are there hospitals near The Townes at Union Village?',
    answer:
      'Henderson Hospital is at 1050 W. Galleria Drive, Henderson, NV 89011, a short drive from the Union Village sales office on Gearus Place.',
  },
  {
    question: 'What shopping is close to Union Village?',
    answer:
      'Galleria at Sunset is at 1300 West Sunset Road, Henderson, NV 89014, with major retailers Century lists for this community including Target, Best Buy, Costco, and Walmart.',
  },
  {
    question: 'Which schools are named for this Henderson address?',
    answer:
      'Century Communities lists Harriet Treem Elementary, Jim Thorpe Elementary, Francis H. Cortney Junior High, and Basic Academy of International Studies — confirm assignment in the CCSD zoning search by your homesite address.',
  },
  {
    question: 'How do I get to Harry Reid International Airport from Henderson?',
    answer:
      'Most drivers use I-215 and I-515 or surface streets toward the airport; plan roughly 20–30 minutes in typical traffic and check live maps before a flight.',
  },
  {
    question: 'Is there dining near Union Village without driving to the Strip?',
    answer:
      'Yes — Century lists chains such as Texas Roadhouse, In-N-Out Burger, Red Robin, Dave & Buster’s, and Starbucks along the Sunset Road and Henderson corridor.',
  },
  {
    question: 'Who can help me tour townhomes and the surrounding neighborhood?',
    answer:
      `Dr. Jan Duffy represents buyers at The Townes at Union Village; call ${nap.phoneDisplay} or email ${nap.email} for a tour from ${nap.street}, Henderson.`,
  },
]

export default function AmenitiesPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <AmenitiesBreadcrumbSchema />
      <AmenitiesItemListSchema />
      <CommunityPlaceGeoSchema />
      <AmenitiesFaqSchema items={faqItems} />

      <section className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 py-20 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="inline-flex items-center bg-amber-600/20 px-4 py-2 rounded-full text-sm font-semibold mb-6 border border-amber-400/30">
            HENDERSON NV 89011
          </p>
          <h1 className="text-4xl md:text-6xl font-light mb-6 tracking-wide">
            Nearby Amenities in The Townes at Union Village, Henderson
          </h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto font-light leading-relaxed">
            Hyperlocal map and verified place names around {communityCenter.address}. Drive times below are approximate — confirm on Google Maps before you commit to a schedule.
          </p>
        </div>
      </section>

      <NapStrip />

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-light text-gray-900 mb-4">Interactive amenity map</h2>
          <p className="text-gray-700 mb-8 max-w-3xl">
            Filter by category to see places Google returns near the community center, or browse the curated list when the map runs in fallback mode.
          </p>
          <AmenityMap showCuratedList />
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12">
          <article>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Dining &amp; cafes</h2>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Century Communities names several chain restaurants along the Sunset Road and Henderson retail corridor, including Texas Roadhouse, In-N-Out Burger, Red Robin, Dave &amp; Buster&apos;s, and Starbucks.
            </p>
            <p className="text-gray-700 leading-relaxed">
              You are not limited to the Strip for a sit-down meal — many buyers run errands at Galleria at Sunset and eat nearby.
            </p>
          </article>
          <article>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Grocery &amp; shopping</h2>
            <p className="text-gray-700 mb-4 leading-relaxed">
              {nearby.mallName} sits at {nearby.mallAddress}. Century also lists Costco, Target, Best Buy, and Walmart for this community.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Stock-up trips and everyday errands usually stay in Henderson rather than crossing town.
            </p>
          </article>
          <article>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Healthcare</h2>
            <p className="text-gray-700 mb-4 leading-relaxed">
              {nearby.hospitalName} is at {nearby.hospitalAddress}, one of the anchors buyers ask about along Galleria Drive.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Urgent care and physician offices cluster in this eastern Henderson corridor — verify networks with your insurer.
            </p>
          </article>
          <article>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Parks &amp; on-site recreation</h2>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Inside The Townes at Union Village, Century lists a dog park, walking trail, and picnic areas for residents.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Henderson also maintains regional parks and trails; use the map filters to explore public parks near Gearus Place.
            </p>
          </article>
          <article>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Schools</h2>
            <ul className="space-y-2 text-gray-700 mb-4">
              {nearby.schoolNames.map((name) => (
                <li key={name}>• {name}</li>
              ))}
            </ul>
            <p className="text-gray-700 leading-relaxed">
              Zoning is by address, not ZIP. Confirm assignment in the{' '}
              <a href={nearby.zoningUrl} className="text-blue-700 underline" target="_blank" rel="noopener noreferrer">
                CCSD zoning search
              </a>
              .
            </p>
          </article>
          <article>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Commute &amp; regional access</h2>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Century notes access via {nearby.highways}. Approximate drives (traffic dependent): Las Vegas Strip 20–30 minutes; Harry Reid International Airport 20–30 minutes; Downtown Summerlin 25–35 minutes.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Dr. Jan Duffy can drive the corridor with you on a tour so you see what is walkable versus a quick hop on 95 or 215.
            </p>
          </article>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-light text-gray-900 mb-8 text-center">Nearby amenities FAQ</h2>
          <dl className="space-y-8">
            {faqItems.map((item) => (
              <div key={item.question}>
                <dt className="text-lg font-semibold text-gray-900 mb-2">{item.question}</dt>
                <dd className="text-gray-700 leading-relaxed">{item.answer}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Featured places (verified names &amp; addresses)</h2>
          <ul className="grid md:grid-cols-2 gap-4 text-gray-700">
            {curatedPlaces
              .filter((p) => p.category !== 'schools')
              .map((place) => (
                <li key={place.name} className="bg-white p-4 rounded-lg border border-gray-100">
                  <strong className="text-gray-900">{place.name}</strong>
                  <br />
                  <span className="text-sm">{place.address}</span>
                </li>
              ))}
          </ul>
        </div>
      </section>

      <section className="py-16 bg-white text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-light text-gray-900 mb-4">Your hyperlocal buyer agent</h2>
          <p className="text-gray-700 mb-6 leading-relaxed">
            {nap.agentName}, {nap.brokerage}. Nevada license {nap.license}. {nap.street}, {nap.city}, {nap.state} {nap.zip}.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`tel:${nap.phoneTel}`}
              className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700"
            >
              Call {nap.phoneDisplay}
            </a>
            <Link href="/contact" className="border-2 border-blue-600 text-blue-700 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50">
              Contact Dr. Jan
            </Link>
            <Link href="/floor-plans" className="text-blue-700 font-semibold px-8 py-4 hover:underline">
              View floor plans
            </Link>
          </div>
        </div>
      </section>

      <CtaBand
        title="Tour Union Village and the surrounding corridor"
        body="Walk the models, then drive grocery, hospital, and highway access with Dr. Jan Duffy — your independent buyer representative at Century Communities."
      />
    </div>
  )
}
