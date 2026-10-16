import OfficeListingsBand from './components/office-listings-band'

export default function NotFound() {
  return (
    <>
      <section className="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white">
        <div className="max-w-3xl mx-auto px-4 py-20 text-center">
          <p className="text-xs font-semibold tracking-[0.22em] text-amber-200 mb-3">THE TOWNES AT UNION VILLAGE</p>
          <h1 className="mb-4 text-4xl font-light tracking-wide">
            Page not found
          </h1>
          <p className="mb-6 text-slate-200 font-light">The page you are looking for does not exist.</p>
          <a
            href="/"
            className="inline-flex bg-gradient-to-r from-amber-800 to-amber-900 text-white px-6 py-3 rounded-lg font-semibold tracking-wide"
          >
            Back to The Townes at Union Village
          </a>
        </div>
      </section>
      <OfficeListingsBand />
    </>
  )
}
