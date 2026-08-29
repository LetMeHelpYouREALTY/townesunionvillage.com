'use client'

import { nap, pricing } from 'app/config/community'

interface SEOOptimizedMapProps {
  className?: string
  title?: string
  description?: string
  showDirections?: boolean
  showBusinessInfo?: boolean
  variant?: 'embedded' | 'business-profile' | 'interactive'
}

export default function SEOOptimizedMap({ 
  className = '', 
  title = "The Townes at Union Village - New Homes in Henderson, NV",
  description = `Century Communities new townhomes at ${nap.street}, ${nap.city}, ${nap.state} ${nap.zip}. Starting from ${pricing.startingFromLabel}. Expert guidance from Dr. Jan Duffy.`,
  showDirections = true,
  showBusinessInfo = true,
  variant = 'business-profile'
}: SEOOptimizedMapProps) {
  const unionVillageAddress = "1001 Gearus Place, Henderson, NV 89011"
  const encodedAddress = encodeURIComponent(unionVillageAddress)
  const businessName = "The Townes at Union Village - Century Communities"
  
  // SEO-optimized keywords
  const seoKeywords = [
    "new homes Henderson NV",
    "townhomes Henderson Nevada", 
    "Century Communities Henderson",
    "Union Village Henderson",
    "new construction Henderson",
    "Henderson real estate",
    "Dr. Jan Duffy real estate agent",
    "Henderson home builder"
  ]

  if (variant === 'embedded') {
    return (
      <div className={`relative ${className}`}>
        <div className="w-full h-80 rounded-lg shadow-lg overflow-hidden bg-gray-100 flex items-center justify-center">
          {process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY ? (
            <iframe
              src={`https://www.google.com/maps/embed/v1/place?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}&q=${encodedAddress}&zoom=15`}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title={`${title} - Location Map`}
              aria-label={`Map showing location of ${businessName} at ${unionVillageAddress}`}
            />
          ) : (
            <div className="text-center p-8">
              <div className="text-4xl mb-4">📍</div>
              <h4 className="font-semibold text-gray-900 mb-2">The Townes at Union Village</h4>
              <p className="text-gray-600 text-sm mb-4">{unionVillageAddress}</p>
              <p className="text-gray-500 text-xs">
                  Professional location information and contact details
              </p>
            </div>
          )}
        </div>
        
        {showBusinessInfo && (
          <div className="mt-4 p-4 bg-white rounded-lg shadow-md">
            <h3 className="font-semibold text-gray-900 mb-2">📍 {businessName}</h3>
            <p className="text-gray-600 text-sm mb-3">{unionVillageAddress}</p>
            <p className="text-gray-600 text-sm mb-3">{description}</p>
            {showDirections && (
              <div className="flex flex-col sm:flex-row gap-2">
                <a
                  href={`https://www.google.com/maps/dir/?api=1&destination=${encodedAddress}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-600 text-white px-4 py-2 rounded text-sm hover:bg-blue-700 transition-colors text-center"
                >
                  🗺️ Get Directions
                </a>
                <a
                  href={`tel:7025001955`}
                  className="bg-green-600 text-white px-4 py-2 rounded text-sm hover:bg-green-700 transition-colors text-center"
                >
                  📞 Call (702) 500-1955
                </a>
              </div>
            )}
          </div>
        )}
      </div>
    )
  }

  if (variant === 'business-profile') {
    return (
      <div className={`relative ${className}`}>
        {/* Google Business Profile Embed */}
        <div className="bg-white rounded-lg shadow-lg p-6">
          <div className="mb-4">
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              {businessName}
            </h3>
            <div className="flex items-center text-gray-600 mb-2">
              <span className="text-lg mr-2">📍</span>
              <span>{unionVillageAddress}</span>
            </div>
            <div className="flex items-center text-gray-600 mb-4">
              <span className="text-lg mr-2">📞</span>
              <span>(702) 500-1955</span>
            </div>
          </div>

          {/* Google Business Profile Map */}
          <div className="w-full h-64 rounded-lg overflow-hidden mb-4 bg-gray-100 flex items-center justify-center">
            {process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY ? (
              <iframe
                src={`https://www.google.com/maps/embed/v1/place?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}&q=${encodedAddress}&zoom=16`}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title={`${businessName} - Google Business Profile`}
                aria-label={`Google Business Profile map for ${businessName}`}
              />
            ) : (
              <div className="text-center p-8">
                <div className="text-4xl mb-4">📍</div>
                <h4 className="font-semibold text-gray-900 mb-2">The Townes at Union Village</h4>
                <p className="text-gray-600 text-sm mb-4">{unionVillageAddress}</p>
                <div className="space-y-2 text-xs text-gray-500">
                  <p>📍 Henderson, Nevada 89011</p>
                  <p>🏥 Near Henderson Hospital</p>
                  <p>🛍️ Close to shopping centers</p>
                  <p>🛣️ Easy highway access</p>
                </div>
              </div>
            )}
          </div>

          {/* Business Information */}
          <div className="space-y-2 text-sm text-gray-600">
            <p><strong>Business Type:</strong> New Home Builder - Century Communities</p>
            <p><strong>Agent:</strong> Dr. Jan Duffy, Preferred Buyer Agent</p>
            <p><strong>Hours:</strong> Monday-Sunday: 10:00 AM - 6:00 PM</p>
            <p><strong>Starting Price:</strong> From {pricing.startingFromLabel}</p>
          </div>

          {showDirections && (
            <div className="mt-4 flex flex-col sm:flex-row gap-2">
              <a
                href={`https://www.google.com/maps/dir/?api=1&destination=${encodedAddress}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 text-white px-4 py-2 rounded text-sm hover:bg-blue-700 transition-colors text-center flex-1"
              >
                🗺️ Get Directions
              </a>
              <a
                href={`https://www.google.com/maps/search/?api=1&query=${encodedAddress}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-600 text-white px-4 py-2 rounded text-sm hover:bg-gray-700 transition-colors text-center flex-1"
              >
                📍 View on Maps
              </a>
              <a
                href={`tel:7025001955`}
                className="bg-green-600 text-white px-4 py-2 rounded text-sm hover:bg-green-700 transition-colors text-center flex-1"
              >
                📞 Call Now
              </a>
            </div>
          )}

          {/* SEO Keywords (hidden but crawlable) */}
          <div className="hidden">
            <p>{seoKeywords.join(', ')}</p>
            <p>Henderson Nevada new homes, Century Communities Union Village, Dr. Jan Duffy real estate agent Henderson</p>
          </div>
        </div>
      </div>
    )
  }

  // Interactive variant
  return (
    <div className={`relative ${className}`}>
      <div className="bg-white rounded-lg shadow-lg p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-4">{title}</h3>
        
        <div className="w-full h-80 rounded-lg overflow-hidden mb-4 bg-gray-100 flex items-center justify-center">
          {process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY ? (
            <iframe
              src={`https://www.google.com/maps/embed/v1/place?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}&q=${encodedAddress}&zoom=15`}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title={`Interactive map of ${businessName}`}
            />
          ) : (
            <div className="text-center p-8">
              <div className="text-4xl mb-4">📍</div>
              <h4 className="font-semibold text-gray-900 mb-2">The Townes at Union Village</h4>
              <p className="text-gray-600 text-sm mb-4">{unionVillageAddress}</p>
              <p className="text-gray-500 text-xs">
                  Professional location information and contact details
              </p>
            </div>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <h4 className="font-semibold text-gray-900 mb-2">📍 Location Details</h4>
            <p className="text-gray-600 text-sm">{unionVillageAddress}</p>
            <p className="text-gray-600 text-sm mt-1">
              Conveniently located near Henderson Hospital, shopping centers, and major highways.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold text-gray-900 mb-2">🏠 Community Info</h4>
            <p className="text-gray-600 text-sm">New townhomes starting from {pricing.startingFromLabel}</p>
            <p className="text-gray-600 text-sm">3 floor plans: 1,405 - 1,479 sq ft</p>
          </div>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          <a
            href={`https://www.google.com/maps/dir/?api=1&destination=${encodedAddress}`}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-600 text-white px-4 py-2 rounded text-sm hover:bg-blue-700 transition-colors"
          >
            🗺️ Directions
          </a>
          <a
            href={`tel:7025001955`}
            className="bg-green-600 text-white px-4 py-2 rounded text-sm hover:bg-green-700 transition-colors"
          >
            📞 Call Dr. Jan
          </a>
          <a
            href="/floor-plans"
            className="bg-gray-600 text-white px-4 py-2 rounded text-sm hover:bg-gray-700 transition-colors"
          >
            🏠 View Floor Plans
          </a>
        </div>
      </div>
    </div>
  )
}
