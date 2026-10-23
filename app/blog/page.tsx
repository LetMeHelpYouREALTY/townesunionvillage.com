import Link from 'next/link'
import { BlogPosts } from 'app/components/posts'
import OfficeListingsBand from 'app/components/office-listings-band'
import BreadcrumbJsonLd from 'app/components/breadcrumb-jsonld'
import { pricing } from 'app/config/community'
import { breadcrumbTrail } from 'app/lib/breadcrumbs'
import { pageMeta } from 'app/lib/page-meta'

export const metadata = pageMeta('/blog', {
  title: 'Union Village Guides | Henderson Townhomes',
  description:
    `First-party guides from Dr. Jan Duffy on The Townes at Union Village in Henderson, NV: floor plans from ${pricing.startingFromLabel} as of ${pricing.asOf}, inventory, and how to tour 1001 Gearus Place.`,
})

const firstPartyGuides = [
  {
    href: '/floor-plans',
    title: 'Floor plans at The Townes',
    body: 'Compare Residence 1405, 1478, and 1479 square footage, beds, baths, and starting prices.',
  },
  {
    href: '/community',
    title: 'Union Village community',
    body: 'See the Henderson location at 1001 Gearus Place, amenities, and what Century Communities built here.',
  },
  {
    href: '/quick-move-in',
    title: 'Quick move-in homes',
    body: 'Review current inventory and move-in ready homesites at The Townes at Union Village.',
  },
  {
    href: '/buyers',
    title: 'Buy at Union Village',
    body: 'Independent buyer representation for Century townhomes at 1001 Gearus Place.',
  },
  {
    href: '/sellers',
    title: 'Sell and move to Union Village',
    body: 'Time your current-home sale to a new-construction close in Henderson 89011.',
  },
  {
    href: '/henderson',
    title: 'Henderson 89011',
    body: 'Galleria Drive, Highway 95, I-215, Henderson Hospital, and Galleria at Sunset.',
  },
  {
    href: '/faq',
    title: 'FAQ',
    body: 'Prices, plans, amenities, school names, and how to tour with Dr. Jan Duffy.',
  },
]

export default function Page() {
  return (
    <>
    <section className="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white">
      <div className="max-w-3xl mx-auto px-4 py-16">
      <BreadcrumbJsonLd items={breadcrumbTrail('Blog', '/blog')} />
      <p className="text-xs font-semibold tracking-[0.22em] text-amber-200 mb-3">THE TOWNES AT UNION VILLAGE</p>
      <h1 className="font-light text-4xl md:text-5xl mb-4 tracking-wide">
        Union Village guides
      </h1>
      <p className="text-slate-200 font-light mb-4 leading-relaxed">
        These pages are written for this website by Dr. Jan Duffy, REALTOR®,
        in real estate since 1983.
        They cover The Townes at Union Village, 1001 Gearus Place, Henderson, NV
        89011. Call{' '}
        <a className="text-amber-200 underline" href="tel:7025001955">
          (702) 500-1955
        </a>
        .
      </p>
      <p className="text-slate-200 font-light mb-2 leading-relaxed">
        This site does not host third-party or template articles. Every guide
        below is first-party content about this community.
      </p>
      </div>
    </section>
    <OfficeListingsBand />
    <section className="max-w-3xl mx-auto px-4 py-12">
      <ul className="space-y-4 mb-12">
        {firstPartyGuides.map((guide) => (
          <li key={guide.href} className="border border-stone-200 bg-white rounded-xl p-5 shadow-sm">
            <Link href={guide.href} className="font-medium text-amber-800 hover:text-amber-950">
              {guide.title}
            </Link>
            <p className="text-sm text-neutral-600 mt-1">{guide.body}</p>
          </li>
        ))}
      </ul>
      <BlogPosts />
    </section>
    </>
  )
}
