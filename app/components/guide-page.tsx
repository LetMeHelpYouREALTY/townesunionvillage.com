import type { Metadata } from 'next'
import Link from 'next/link'
import PageHero from './page-hero'
import NapStrip from './nap-strip'
import CtaBand from './cta-band'
import FaqJsonLd from './faq-jsonld'
import SEOOptimizedMap from './seo-optimized-map'
import { googleMaps } from 'app/config/healthcare'
import { nap, pricing } from 'app/config/community'
import { siteUrl } from 'app/config/site'
import { allGuides, getGuide, guidesChecked, type GuideId } from 'app/config/guides'
import { pageMeta } from 'app/lib/page-meta'
import { breadcrumbTrail } from 'app/lib/breadcrumbs'

export function guideMetadata(id: GuideId): Metadata {
  const guide = getGuide(id)
  return pageMeta(guide.path, {
    title: guide.title,
    description: guide.description,
  })
}

export default function GuidePage({ id }: { id: GuideId }) {
  const guide = getGuide(id)
  const related = allGuides().filter((item) => item.id !== guide.id)
  const pageUrl = `${siteUrl}${guide.path}`

  const webPage = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': `${pageUrl}#webpage`,
    url: pageUrl,
    name: guide.h1,
    description: guide.description,
    dateModified: '2026-10-16',
    isPartOf: { '@id': `${siteUrl}/#website` },
    about: { '@id': `${siteUrl}/#community` },
    mainEntity: { '@id': `${siteUrl}/#agent` },
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <FaqJsonLd items={[...guide.faqs]} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPage) }} />
      <PageHero
        badge={guide.badge}
        title={guide.h1}
        subtitle={guide.subtitle}
        lede={guide.lede}
        image={guide.image}
        breadcrumb={breadcrumbTrail(guide.linkLabel, guide.path)}
        secondaryHref="/schedule-tour"
        secondaryLabel="Schedule a tour"
      />
      <NapStrip />

      {guide.sections.map((section) => (
        <section key={section.heading} className="py-16 bg-white border-b border-gray-100">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-4">{section.heading}</h2>
            {section.paragraphs.map((paragraph) => (
              <p key={paragraph} className="text-gray-700 leading-relaxed mb-4">
                {paragraph}
              </p>
            ))}
            {section.points ? (
              <ul className="space-y-3 text-gray-800">
                {section.points.map((point) => (
                  <li key={point}>• {point}</li>
                ))}
              </ul>
            ) : null}
          </div>
        </section>
      ))}

      <section className="py-16 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-light text-gray-900 mb-6 text-center">
            The Townes at Union Village map
          </h2>
          <SEOOptimizedMap
            variant="business-profile"
            title={`${guide.h1} at ${nap.street}`}
            description={`${guide.lede} Plans from ${pricing.startingFromLabel} as of ${pricing.asOf}.`}
          />
          <div className="mt-4 flex flex-col sm:flex-row gap-3">
            <a
              href={`tel:${nap.phoneTel}`}
              className="flex-1 bg-green-700 text-white px-4 py-3 rounded-lg text-center font-semibold"
            >
              Call {nap.phoneDisplay}
            </a>
            <a
              href={googleMaps.directions}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 bg-blue-700 text-white px-4 py-3 rounded-lg text-center font-semibold"
            >
              Directions
            </a>
            <a
              href={googleMaps.reviews}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 bg-slate-800 text-white px-4 py-3 rounded-lg text-center font-semibold"
            >
              View Google Reviews
            </a>
          </div>
          <p className="mt-4 text-center text-sm text-gray-500">
            Facts checked {guidesChecked}. {pricing.disclaimer}
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-light text-gray-900 mb-8 text-center">Questions buyers ask</h2>
          <div className="space-y-8">
            {guide.faqs.map((item) => (
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
          <h2 className="text-2xl font-light text-gray-900 mb-6">More Union Village Henderson pages</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {related.map((item) => (
              <Link key={item.path} href={item.path} className="text-blue-700 font-medium hover:underline">
                {item.linkLabel}
              </Link>
            ))}
            <Link href="/floor-plans" className="text-blue-700 font-medium hover:underline">
              Union Village townhome floor plans
            </Link>
            <Link href="/union-village" className="text-blue-700 font-medium hover:underline">
              Union Village Henderson map notes
            </Link>
            <Link href="/new-construction" className="text-blue-700 font-medium hover:underline">
              New builds with Century Communities
            </Link>
          </div>
        </div>
      </section>

      <CtaBand title={guide.ctaTitle} body={guide.ctaBody} />
    </div>
  )
}
