const agentEncodedId = 'QWdlbnQtMjI1MDUw'

interface RealScoutWidgetProps {
  className?: string
  title?: string
  subtitle?: string
}

/**
 * RealScout advanced search. The custom element must be in the DOM when the
 * script registers it. Gating it on React state hid the widget and then
 * showed the unavailable message whenever the shared script was already loading.
 */
export default function RealScoutWidget({
  className = '',
  title = 'Find Your Dream Home',
  subtitle = 'Search all available properties in Henderson, NV and surrounding areas',
}: RealScoutWidgetProps) {
  return (
    <div className={`bg-white rounded-xl shadow-2xl border border-gray-100 overflow-hidden ${className}`}>
      <style>{`
        realscout-advanced-search {
          --rs-as-button-text-color: #ffffff;
          --rs-as-background-color: #ffffff;
          --rs-as-button-color: #92400e;
          --rs-as-widget-width: 100% !important;
          display: block !important;
          min-height: 220px !important;
        }
      `}</style>
      <div className="bg-gradient-to-r from-amber-600 to-amber-700 px-8 py-6">
        <div className="text-center">
          <h3 className="text-2xl font-light text-white mb-2 tracking-wide">{title}</h3>
          <p className="text-amber-100 font-light text-sm">{subtitle}</p>
        </div>
      </div>
      <div
        className="p-8"
        dangerouslySetInnerHTML={{
          __html: `<realscout-advanced-search agent-encoded-id="${agentEncodedId}"></realscout-advanced-search>`,
        }}
      />
      <div className="bg-gray-50 px-8 py-4 border-t border-gray-100">
        <p className="text-center text-gray-600 text-sm font-light">
          Search homes for sale in Henderson. Call Dr. Jan Duffy at (702) 500-1955.
        </p>
      </div>
    </div>
  )
}
