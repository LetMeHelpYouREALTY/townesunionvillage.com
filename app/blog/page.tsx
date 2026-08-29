import Link from 'next/link'
import { BlogPosts } from 'app/components/posts'

export const metadata = {
  title: 'Union Village Guides | Henderson Townhomes',
  description:
    'First-party guides from Dr. Jan Duffy on The Townes at Union Village in Henderson, NV: floor plans from $374,990, inventory, and how to tour 1001 Gearus Place.',
}

const firstPartyGuides = [
  {
    href: '/floor-plans',
    title: 'Floor plans at The Townes',
    body: 'Compare Residence 1405, 1478, and 1602 square footage, beds, baths, and starting prices.',
  },
  {
    href: '/community',
    title: 'Union Village community',
    body: 'See the Henderson location at 1001 Gearus Place, amenities, and what Century Communities built here.',
  },
  {
    href: '/quick-move-in',
    title: 'Quick move-in homes',
    body: 'Review current inventory, including the Residence 1602 model at 8990 Rimerton Street.',
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
    <section className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="font-semibold text-3xl mb-4 tracking-tight">
        Union Village guides
      </h1>
      <p className="text-neutral-700 dark:text-neutral-300 mb-4 leading-relaxed">
        These pages are written for this website by Dr. Jan Duffy, Berkshire
        Hathaway HomeServices Nevada Properties, Nevada license S.0197614.LLC.
        They cover The Townes at Union Village, 1001 Gearus Place, Henderson, NV
        89011. Call{' '}
        <a className="underline" href="tel:7025001955">
          (702) 500-1955
        </a>
        .
      </p>
      <p className="text-neutral-700 dark:text-neutral-300 mb-8 leading-relaxed">
        This site does not host third-party or template articles. Every guide
        below is first-party content about this community.
      </p>
      <ul className="space-y-4 mb-12">
        {firstPartyGuides.map((guide) => (
          <li key={guide.href} className="border border-neutral-200 rounded-lg p-4">
            <Link href={guide.href} className="font-medium text-blue-700 hover:underline">
              {guide.title}
            </Link>
            <p className="text-sm text-neutral-600 mt-1">{guide.body}</p>
          </li>
        ))}
      </ul>
      <BlogPosts />
    </section>
  )
}
