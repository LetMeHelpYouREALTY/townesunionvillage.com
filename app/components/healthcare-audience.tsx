import Link from 'next/link'
import PageHero from './page-hero'
import NapStrip from './nap-strip'
import CtaBand from './cta-band'
import ContentImage from './content-image'
import FaqJsonLd from './faq-jsonld'
import SEOOptimizedMap from './seo-optimized-map'
import { hours, nap, pricing } from 'app/config/community'
import { siteUrl } from 'app/config/site'
import {
  getHealthcareAudience,
  googleMaps,
  healthcareAudiences,
  healthcareChecked,
  healthcareHubPath,
  medicalCampuses,
  type HealthcareSlug,
} from 'app/config/healthcare'
import { breadcrumbTrail } from 'app/lib/breadcrumbs'

type HealthcareAudiencePageProps = {
  slug: HealthcareSlug
}

export default function HealthcareAudiencePage({ slug }: HealthcareAudiencePageProps) {
  const audience = getHealthcareAudience(slug)
  const siblings = (Object.keys(healthcareAudiences) as HealthcareSlug[]).filter(
    (key) => key !== slug
  )

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: audience.title,
    serviceType: `Buyer representation for ${audience.audienceType.toLowerCase()}`,
    description: audience.metaDescription,
    url: `${siteUrl}${audience.path}`,
    provider: {
      '@type': 'RealEstateAgent',
      name: nap.agentName,
      telephone: nap.phoneDisplay,
      email: nap.email,
      url: siteUrl,
      address: {
        '@type': 'PostalAddress',
        streetAddress: nap.street,
        addressLocality: nap.city,
        addressRegion: nap.state,
        postalCode: nap.zip,
        addressCountry: 'US',
      },
    },
    areaServed: {
      '@type': 'Place',
      name: 'Union Village, Henderson, NV',
    },
    audience: {
      '@type': 'PeopleAudience',
      audienceType: audience.audienceType,
    },
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <FaqJsonLd items={audience.faqs} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <PageHero
        badge={audience.badge}
        title={audience.title}
        subtitle={audience.subtitle}
        lede={audience.lede}
        image={audience.image}
        breadcrumb={breadcrumbTrail(audience.navName, audience.path, {
          name: 'Healthcare',
          path: healthcareHubPath,
        })}
        secondaryHref={healthcareHubPath}
        secondaryLabel="All clinician services"
      />
      <NapStrip />

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-6">
              What Dr. Jan handles
            </h2>
            <p className="text-gray-700 mb-4 leading-relaxed">{audience.intro}</p>
            <p className="text-gray-700 mb-6 leading-relaxed">
              The on-site sales team works for Century Communities. Dr. Jan Duffy works for you.
              Homes are open to every qualified buyer.
            </p>
            <p className="text-sm text-gray-500">
              Addresses checked {healthcareChecked}. {pricing.disclaimer}
            </p>
          </div>
          <div className="grid gap-4">
            {audience.services.map((service) => (
              <article key={service.title} className="bg-gray-50 rounded-xl p-6 border border-gray-100">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{service.title}</h3>
                <p className="text-gray-700 leading-relaxed">{service.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
          <div className="rounded-xl overflow-hidden shadow-xl aspect-[3/2]">
            <ContentImage src={audience.image.src} alt={audience.image.alt} />
          </div>
          <div>
            <h2 className="text-3xl font-light text-gray-900 mb-4">
              Named campuses, not a vague “medical district”
            </h2>
            <ul className="space-y-4 text-gray-700 mb-6">
              {medicalCampuses.map((campus) => (
                <li key={campus.name}>
                  <span className="font-semibold text-gray-900">{campus.name}</span>
                  <br />
                  {campus.address}
                  <br />
                  <span className="text-sm text-gray-600">{campus.detail}</span>
                </li>
              ))}
            </ul>
            <p className="text-gray-700 leading-relaxed">{hours.note}</p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-light text-gray-900 mb-8 text-center">Questions</h2>
          <div className="space-y-8">
            {audience.faqs.map((item) => (
              <article key={item.question} className="border-b border-gray-200 pb-8">
                <h3 className="text-xl font-medium text-gray-900 mb-3">{item.question}</h3>
                <p className="text-gray-700 leading-relaxed">{item.answer}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-light text-gray-900 mb-6">Other clinician pages</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {siblings.map((key) => {
              const sibling = getHealthcareAudience(key)
              return (
                <Link
                  key={sibling.path}
                  href={sibling.path}
                  className="text-amber-800 font-medium hover:underline"
                >
                  {sibling.cardTitle} in Union Village
                </Link>
              )
            })}
            <Link href="/floor-plans" className="text-amber-800 font-medium hover:underline">
              Union Village floor plans
            </Link>
            <Link href="/union-village" className="text-amber-800 font-medium hover:underline">
              Union Village location
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-light text-gray-900 mb-6 text-center">
            Tour from 1001 Gearus Place
          </h2>
          <SEOOptimizedMap
            variant="business-profile"
            title="The Townes at Union Village for healthcare buyers"
            description={`Buyer representation for ${audience.audienceType.toLowerCase()} at ${nap.street}, beside Henderson Hospital.`}
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
              View on Maps
            </a>
          </div>
          <p className="mt-4 text-center text-sm text-gray-500">
            {hours.builderModel}
          </p>
        </div>
      </section>

      <CtaBand
        title={`Book a tour for ${audience.audienceType.toLowerCase()}`}
        body={`Call ${nap.phoneDisplay}. Dr. Jan will register you with Century and set a time around your shift.`}
      />
    </div>
  )
}
