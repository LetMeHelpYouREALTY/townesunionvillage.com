const agentEncodedId = 'QWdlbnQtMjI1MDUw'

interface RealScoutOfficeListingsProps {
  className?: string
  title?: string
  subtitle?: string
}

/**
 * Office listings stay in the DOM so the shared RealScout script can upgrade
 * the element. A loading timer was replacing the widget with an error state.
 */
export default function RealScoutOfficeListings({
  className = '',
  title = 'Explore Other Henderson Properties',
  subtitle = 'Properties $350K-$450K • Single Family & Other Homes • Expert guidance from Dr. Jan Duffy',
}: RealScoutOfficeListingsProps) {
  const markup = `<realscout-office-listings agent-encoded-id="${agentEncodedId}" sort-order="PRICE_LOW" listing-status="For Sale" property-types=",SFR,OTHER" price-min="350000" price-max="450000"></realscout-office-listings>`

  return (
    <div className={`bg-white rounded-xl shadow-2xl border border-gray-100 overflow-hidden ${className}`}>
      <style>{`
        realscout-office-listings {
          --rs-as-button-text-color: #ffffff;
          --rs-as-background-color: #ffffff;
          --rs-as-button-color: rgb(35, 93, 137);
          --rs-as-widget-width: 100% !important;
          display: block !important;
          min-height: 400px !important;
        }
      `}</style>
      <div className="bg-gradient-to-r from-blue-600 to-blue-700 px-8 py-6">
        <div className="text-center">
          <h3 className="text-2xl font-light text-white mb-2 tracking-wide">{title}</h3>
          <p className="text-blue-100 font-light text-sm">{subtitle}</p>
        </div>
      </div>
      <div className="p-8" dangerouslySetInnerHTML={{ __html: markup }} />
      <div className="bg-gray-50 px-8 py-4 border-t border-gray-100">
        <p className="text-center text-gray-600 text-sm font-light">
          Homes for sale nearby. Call Dr. Jan Duffy at (702) 500-1955 to tour.
        </p>
      </div>
    </div>
  )
}
