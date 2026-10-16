import Link from 'next/link'
import { allGuides } from 'app/config/guides'
import { nap, pricing } from 'app/config/community'

type GuideLinksProps = {
  currentPath?: string
}

/** Answer-first links to the query guides. One H2, then H3s, so heading order stays sequential. */
export default function GuideLinks({ currentPath }: GuideLinksProps) {
  const guides = allGuides().filter((guide) => guide.path !== currentPath)

  return (
    <section className="py-16 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-4">
          Union Village homes
        </h2>
        <p className="text-lg text-gray-700 leading-relaxed max-w-3xl mb-10">
          The Townes at Union Village are Century Communities townhomes at {nap.street}, {nap.city},{' '}
          {nap.state} {nap.zip}. Plans start at {pricing.startingFromLabel} as of {pricing.asOf}. Dr. Jan
          Duffy is the buyer agent. Call {nap.phoneDisplay}.
        </p>
        <div className="grid md:grid-cols-2 gap-6">
          {guides.map((guide) => (
            <article key={guide.path} className="rounded-xl border border-gray-100 bg-gray-50 p-6">
              <h3 className="text-xl font-medium text-gray-900 mb-2">
                <Link href={guide.path} className="hover:text-amber-800">
                  {guide.h1}
                </Link>
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">{guide.lede}</p>
              <Link href={guide.path} className="text-amber-700 font-semibold hover:text-amber-800">
                {guide.linkLabel}
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
