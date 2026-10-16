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
    <section className="py-20 bg-gradient-to-b from-white to-stone-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-xs font-semibold tracking-[0.22em] text-amber-700 mb-3">UNION VILLAGE</p>
        <h2 className="text-4xl md:text-5xl font-light tracking-wide text-slate-900 mb-4">
          Union Village homes
        </h2>
        <p className="text-lg font-light text-slate-600 leading-relaxed max-w-3xl mb-10">
          The Townes at Union Village are Century Communities townhomes at {nap.street}, {nap.city},{' '}
          {nap.state} {nap.zip}. Plans start at {pricing.startingFromLabel} as of {pricing.asOf}. Dr. Jan
          Duffy is the buyer agent. Call {nap.phoneDisplay}.
        </p>
        <div className="grid md:grid-cols-2 gap-6">
          {guides.map((guide) => (
            <article
              key={guide.path}
              className="rounded-2xl border border-stone-200 bg-white p-8 shadow-lg hover:shadow-xl hover:border-amber-200 transition-shadow"
            >
              <h3 className="text-2xl font-light tracking-wide text-slate-900 mb-3">
                <Link href={guide.path} className="hover:text-amber-800">
                  {guide.h1}
                </Link>
              </h3>
              <p className="text-slate-600 font-light leading-relaxed mb-6">{guide.lede}</p>
              <Link href={guide.path} className="text-amber-700 font-semibold tracking-wide hover:text-amber-800">
                {guide.linkLabel}
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
