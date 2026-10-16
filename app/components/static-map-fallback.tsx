interface StaticMapFallbackProps {
  className?: string
  title?: string
}

export default function StaticMapFallback({ className = '', title = "The Townes at Union Village" }: StaticMapFallbackProps) {
  const unionVillageAddress = "1001 Gearus Place, Henderson, NV 89011"
  const encodedAddress = encodeURIComponent(unionVillageAddress)
  
  // Static Google Maps image URL (works without API key)
  const staticMapUrl = `https://maps.googleapis.com/maps/api/staticmap?center=${encodedAddress}&zoom=15&size=600x400&maptype=roadmap&markers=color:red%7C${encodedAddress}&key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || ''}`
  
  return (
    <div className={`relative ${className}`}>
      <div className="w-full h-96 rounded-lg shadow-lg overflow-hidden bg-gray-100">
        {process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY ? (
          <img
            src={staticMapUrl}
            alt={`Map showing ${title} at ${unionVillageAddress}`}
            className="w-full h-full object-cover"
            onError={(e) => {
              // Fallback to placeholder if image fails to load
              const target = e.target as HTMLImageElement
              target.style.display = 'none'
              const fallback = target.nextElementSibling as HTMLElement
              if (fallback) fallback.style.display = 'flex'
            }}
          />
        ) : null}
        
        {/* Fallback content */}
        <div 
          className="w-full h-full flex items-center justify-center text-center p-8"
          style={{ display: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY ? 'none' : 'flex' }}
        >
          <div>
            <div className="text-6xl mb-4">📍</div>
            <h4 className="font-semibold text-gray-900 mb-2">{title}</h4>
            <p className="text-gray-600 text-sm mb-4">{unionVillageAddress}</p>
            <div className="space-y-2">
              <p className="text-gray-500 text-xs">Located in Henderson, Nevada</p>
              <p className="text-gray-500 text-xs">Near Henderson Hospital & shopping centers</p>
              <p className="text-gray-500 text-xs">Easy access via Highway 95 & I-215</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Address and Directions */}
      <div className="mt-4 space-y-2">
        <div className="text-center">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">📍 {title}</h3>
          <p className="text-gray-600 mb-3">{unionVillageAddress}</p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <a
            href={`https://www.google.com/maps/dir/?api=1&destination=${encodedAddress}`}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-slate-900 text-white px-4 py-2 rounded-lg hover:bg-slate-800 transition-colors text-center font-medium tracking-wide"
          >
            🗺️ Get Directions
          </a>
          <a
            href={`https://www.google.com/maps/search/?api=1&query=${encodedAddress}`}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white border border-amber-300 text-amber-950 px-4 py-2 rounded-lg hover:bg-amber-50 transition-colors text-center font-medium tracking-wide"
          >
            📍 View on Google Maps
          </a>
          <a
            href={`tel:7025001955`}
            className="bg-gradient-to-r from-amber-800 to-amber-900 text-white px-4 py-2 rounded-lg hover:from-amber-900 hover:to-amber-950 transition-colors text-center font-medium tracking-wide"
          >
            📞 Call Dr. Jan
          </a>
        </div>
        
        <div className="text-center text-sm text-gray-500 mt-3">
          <p>Conveniently located near Henderson Hospital and major shopping centers</p>
          <p>Easy access via Highway 95 and I-215</p>
        </div>
      </div>
    </div>
  )
}
