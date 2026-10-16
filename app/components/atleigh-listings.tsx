import {
  atleighListingUrl,
  atleighListings,
  atleighListingsChecked,
  planNameForSqft,
  townHomesSearchUrl,
} from 'app/config/atleigh-listings'
import { nap, pricing } from 'app/config/community'

type AtleighListingsProps = {
  anchor?: boolean
}

export default function AtleighListings({ anchor = false }: AtleighListingsProps) {
  return (
    <section
      id={anchor ? 'atleigh-listings' : undefined}
      aria-label="Nine townhomes for sale on Atleigh Avenue"
      className="py-16 bg-amber-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center bg-amber-800 text-white px-4 py-2 rounded-full text-sm font-semibold tracking-wide">
            Nine homes at The Townes
          </div>
          <h2 className="text-4xl md:text-5xl font-light text-gray-900 mt-4 mb-4 tracking-wide">
            Atleigh Avenue listings
          </h2>
          <p className="text-lg text-gray-700 font-light leading-relaxed">
            These nine townhomes are for sale on Atleigh Avenue in Henderson 89011. They are the
            listings at The Townes at Union Village in Dr. Jan Duffy’s Town Homes search. MLS list
            prices on {atleighListingsChecked}.
          </p>
        </div>
        <ol className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 list-none p-0 m-0">
          {atleighListings.map((home, index) => (
            <li key={home.mls}>
              <a
                href={atleighListingUrl(home.slug)}
                target="_blank"
                rel="noopener noreferrer"
                className="block h-full bg-white rounded-xl border-2 border-amber-400 shadow-lg p-6 hover:border-amber-600"
              >
                <div className="flex items-center justify-between gap-3 mb-4">
                  <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-amber-800 text-white text-sm font-semibold">
                    {index + 1}
                  </span>
                  <span className="text-xs font-semibold tracking-wide text-amber-800 uppercase">
                    {planNameForSqft(home.sqft)}
                  </span>
                </div>
                <p className="text-2xl font-light text-gray-900">
                  ${home.price.toLocaleString('en-US')}
                </p>
                <h3 className="text-lg text-gray-900 mt-1">{home.address}</h3>
                <p className="text-sm text-gray-600 mt-2">
                  {home.beds} beds · {home.baths} baths · {home.sqft.toLocaleString('en-US')} sq ft
                </p>
                <p className="text-sm text-gray-500 mt-1">MLS {home.mls} · For sale</p>
                <p className="text-sm font-semibold text-amber-800 mt-4">View this listing</p>
              </a>
            </li>
          ))}
        </ol>
        <div className="mt-10 text-center">
          <a
            href={townHomesSearchUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex bg-amber-800 hover:bg-amber-900 text-white px-8 py-4 rounded-lg font-semibold"
          >
            Open the Town Homes search
          </a>
          <a
            href={`tel:${nap.phoneTel}`}
            className="inline-flex mt-4 sm:mt-0 sm:ml-4 border-2 border-amber-700 text-amber-900 px-8 py-4 rounded-lg font-semibold"
          >
            Call {nap.phoneDisplay}
          </a>
          <p className="text-sm text-gray-600 font-light max-w-2xl mx-auto mt-6 leading-relaxed">
            That search lists 100 townhomes for sale in Henderson 89011, including these nine.
            Century Communities starting prices on this site are dated {pricing.asOf}, from{' '}
            {pricing.startingFromLabel}. Confirm the MLS price with Dr. Jan Duffy before you write
            an offer.
          </p>
        </div>
      </div>
    </section>
  )
}
