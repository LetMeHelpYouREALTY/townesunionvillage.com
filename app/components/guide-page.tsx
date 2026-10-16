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
import { luxCall, luxOutline, luxSlate } from './luxury-styles'

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

      {guide.sections.map((section, index) => (
        <section
          key={section.heading}
          className={
            index % 2 === 0
              ? 'py-20 bg-white'
              : 'py-20 bg-gradient-to-b from-stone-50 to-white'
          }
        >
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-xs font-semibold tracking-[0.22em] text-amber-700 mb-3">
              {String(index + 1).padStart(2, '0')}
            </p>
            <h2 className="text-4xl md:text-5xl font-light tracking-wide text-slate-900 mb-8">
              {section.heading}
            </h2>
            <div className="rounded-2xl border border-stone-200 bg-white shadow-xl p-8 md:p-10">
              {section.paragraphs.map((paragraph) => (
                <p key={paragraph} className="text-lg font-light text-slate-700 leading-relaxed mb-4 last:mb-0">
                  {paragraph}
                </p>
              ))}
              {section.points ? (
                <ul className="mt-8 grid gap-4">
                  {section.points.map((point) => (
                    <li
                      key={point}
                      className="rounded-xl border border-amber-100 bg-amber-50/60 px-5 py-4 text-slate-800 leading-relaxed"
                    >
                      {point}
                    </li>
                  ))}
                </ul>
              ) : null}
            </div>
          </div>
        </section>
      ))}

      <section className="py-20 bg-gradient-to-b from-stone-50 to-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-xs font-semibold tracking-[0.22em] text-amber-700 mb-3">
            VISIT
          </p>
          <h2 className="text-4xl md:text-5xl font-light tracking-wide text-slate-900 mb-8 text-center">
            The Townes at Union Village map
          </h2>
          <div className="rounded-2xl overflow-hidden border border-stone-200 shadow-xl bg-white">
            <SEOOptimizedMap
              variant="business-profile"
              title={`${guide.h1} at ${nap.street}`}
              description={`${guide.lede} Plans from ${pricing.startingFromLabel} as of ${pricing.asOf}.`}
            />
          </div>
          <div className="mt-6 flex flex-col sm:flex-row gap-3">
            <a href={`tel:${nap.phoneTel}`} className={`${luxCall} flex-1 px-4 py-3`}>
              Call {nap.phoneDisplay}
            </a>
            <a
              href={googleMaps.directions}
              target="_blank"
              rel="noopener noreferrer"
              className={`${luxOutline} flex-1 px-4 py-3`}
            >
              Directions
            </a>
            <a
              href={googleMaps.reviews}
              target="_blank"
              rel="noopener noreferrer"
              className={`${luxSlate} flex-1 px-4 py-3`}
            >
              View Google Reviews
            </a>
          </div>
          <p className="mt-4 text-center text-sm text-stone-500 font-light">
            Facts checked {guidesChecked}. {pricing.disclaimer}
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-light tracking-wide text-slate-900 mb-10 text-center">
            Questions buyers ask
          </h2>
          <div className="space-y-5">
            {guide.faqs.map((item) => (
              <article key={item.question} className="rounded-2xl border border-stone-200 bg-stone-50 p-8">
                <h3 className="text-xl font-light text-slate-900 mb-3">{item.question}</h3>
                <p className="text-slate-700 font-light leading-relaxed">{item.answer}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-slate-900 text-white">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-light tracking-wide text-center mb-8">
            More Union Village Henderson pages
          </h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {related.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                className="rounded-xl border border-white/15 bg-white/5 px-5 py-4 text-amber-100 hover:border-amber-300 hover:text-white"
              >
                {item.linkLabel}
              </Link>
            ))}
            <Link
              href="/floor-plans"
              className="rounded-xl border border-white/15 bg-white/5 px-5 py-4 text-amber-100 hover:border-amber-300 hover:text-white"
            >
              Union Village townhome floor plans
            </Link>
            <Link
              href="/union-village"
              className="rounded-xl border border-white/15 bg-white/5 px-5 py-4 text-amber-100 hover:border-amber-300 hover:text-white"
            >
              Union Village Henderson map notes
            </Link>
            <Link
              href="/new-construction"
              className="rounded-xl border border-white/15 bg-white/5 px-5 py-4 text-amber-100 hover:border-amber-300 hover:text-white"
            >
              New builds with Century Communities
            </Link>
          </div>
        </div>
      </section>

      <CtaBand title={guide.ctaTitle} body={guide.ctaBody} />
    </div>
  )
}
