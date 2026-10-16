const agentEncodedId = 'QWdlbnQtMjI1MDUw'

interface RealScoutHomeValueProps {
  className?: string
  title?: string
  subtitle?: string
}

/**
 * Home value stays in the DOM so the shared RealScout script can upgrade
 * the element. A loading timer was replacing the widget with an error state.
 */
export default function RealScoutHomeValue({
  className = '',
  title = 'Get Your Free Property Value Estimate',
  subtitle = 'Enter your property address for an instant, comprehensive valuation report',
}: RealScoutHomeValueProps) {
  return (
    <div className={`bg-white rounded-xl shadow-2xl border border-gray-100 overflow-hidden ${className}`}>
      <style>{`
        realscout-home-value {
          --rs-as-button-text-color: #ffffff;
          --rs-as-background-color: #ffffff;
          --rs-as-button-color: rgb(35, 93, 137);
          --rs-as-widget-width: 100% !important;
          display: block !important;
          min-height: 420px !important;
        }
      `}</style>
      <div className="bg-gradient-to-r from-blue-600 to-blue-700 px-8 py-6">
        <div className="text-center">
          <h3 className="text-2xl font-light text-white mb-2 tracking-wide">{title}</h3>
          <p className="text-blue-100 font-light text-sm">{subtitle}</p>
        </div>
      </div>
      <div
        className="p-8"
        dangerouslySetInnerHTML={{
          __html: `<realscout-home-value agent-encoded-id="${agentEncodedId}"></realscout-home-value>`,
        }}
      />
      <div className="bg-gray-50 px-8 py-4 border-t border-gray-100">
        <p className="text-center text-gray-600 text-sm font-light">
          Free home estimate. Call Dr. Jan Duffy at (702) 500-1955 to review the number.
        </p>
      </div>
    </div>
  )
}
