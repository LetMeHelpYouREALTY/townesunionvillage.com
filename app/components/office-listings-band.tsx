import RealScoutOfficeListings from './realscout-office-listings'

/** Office listings sit directly under the page hero. One instance per page. */
export default function OfficeListingsBand() {
  return (
    <section
      className="py-12 bg-gray-50 [content-visibility:auto] [contain-intrinsic-size:auto_720px]"
      aria-label="Homes for sale nearby"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <RealScoutOfficeListings
          title="Henderson Neighborhood Properties"
          subtitle="Expert guidance from Dr. Jan Duffy • Properties $350K-$450K • Single Family & Other Homes"
        />
      </div>
    </section>
  )
}
