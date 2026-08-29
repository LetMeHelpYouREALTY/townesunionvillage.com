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
    href: '/home-value',
    title: 'Home value',
    body: 'Get a property value estimate from Dr. Jan Duffy before you buy or sell in Henderson.',
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
